import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    // now article is variable which we can use using this.article in constructor
    // state variable
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }


    //this liefecycle method
    // it will run after render() method run
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1pageSize=20"; //setting page and page size so that initially it start with page =1 and articles on each page = 20
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData); 
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    }

    handlePrevClick = async () => {
        // console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }

    handleNextClick = async () => {
        // console.log("Next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    render() {
        // inside render props
        // let { title, description, imageUrl } = this.props;
        return (
            <>
                <section id="card-section">
                    <div className="row container-fluid mt-3">
                        <h2>News Monkey - Top Headlines</h2>
                        {this.state.articles.map(function (element) {
                            // console.log(element);
                            return (
                                //  map need unique key , so use url -> give to thing we r returning like div here
                                <div className="col-md-4 col-sm-6" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            )
                        })}
                    </div>
                    {/* Not all articles are one same page , some on other, so we need to use next and previoues buttons */}
                    {/* by default page is 1 */}
                    {/* https://newsapi.org/v2/top-headlines?apiKey=7eaf934a9b114b33b7dbea102643da28&q=cricket&page=2 --> means 2nd page */}
                    <div className="container-fluid d-grid gap-2 d-md-flex justify-content-md-between mt-4">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                        {/* calling with this.name bec inside class */}
                    </div>
                </section>
            </>
        )
    }
}


export default News;
