import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    // default values
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    // data type
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    // now article is variable which we can use using this.article in constructor
    // state variable
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false, // make loading true whenever want to show spinner
            page: 1
        }
    }


    //this liefecycle method
    // it will run after render() method run

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=7eaf934a9b114b33b7dbea102643da28&page=1&pageSize=${this.props.pageSize}`;

        // loading will be true when we hit url
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false //after getting data from url loading will be false
        });
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=7eaf934a9b114b33b7dbea102643da28&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

        // loading will be true when we hit url
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false //after getting data from url loading will be false
        });
    }

    handleNextClick = async () => {
        console.log("Next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=7eaf934a9b114b33b7dbea102643da28&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            // loading will be true when we hit url
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false //after getting data from url loading will be false
            });
        }
    }


    render() {
        return (
            <>
                <section id="card-section">
                    <div className="row container-fluid mt-3">
                        <h2>News Monkey - Top Headlines</h2>
                        {/* means whenever loading is true only then show spinner */}
                        {this.state.loading && <Spinner />}
                        {/* render news content when loading is false */}
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                    {/* Not all articles are one same page , some on other, so we need to use next and previoues buttons */}
                    {/* by default page is 1 */}
                    {/* https://newsapi.org/v2/top-headlines?apiKey=7eaf934a9b114b33b7dbea102643da28&q=cricket&page=2 --> means 2nd page */}
                    <div className="container-fluid d-grid gap-2 d-md-flex justify-content-md-between mt-4">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                        {/* calling with this.name bec inside class */}
                    </div>
                </section>
            </>
        )
    }
}


export default News;
