import React, { Component } from 'react';
import NewsItem from './NewsItem';


export class News extends Component {
    // now article is variable which we can use using this.article in constructor
    constructor() {
        super();
        // console.log("I am constructor from news component");
        // state variable
        this.state = {
            articles: [],
            loading: false //so that we can use spinner if loading is true
        }
    }


    //this liefecycle method
    // it will run after render() method run
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7eaf934a9b114b33b7dbea102643da28";
        // fetch api returns promise to wait till it return promise
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles});
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
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl = {element.url} />
                                </div>
                            )
                        })}
                    </div>
                </section>
            </>
        )
    }
}


export default News;
