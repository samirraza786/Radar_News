import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
// https://www.npmjs.com/package/react-infinite-scroll-component

// https://codesandbox.io/s/yk7637p62z?file=/src/index.js


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
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false, // make loading true whenever want to show spinner
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;
    }

    capitalizeFirstLetter(string) {
        // return string[0].toUpperCase() + string.substring(1);
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //this liefecycle method
    // it will run after render() method run
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=7eaf934a9b114b33b7dbea102643da28&page=1&pageSize=${this.props.pageSize}`;

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


    fetchMoreData = async () => {
        this.setState({page : this.state.page+1}); //increment page each time we add component
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=7eaf934a9b114b33b7dbea102643da28&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
    };


    render() {
        return (
            <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
            {this.state.loading && <Spinner />}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner/>}
            > 
                <div className="container">
                     
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                </div> 
            </InfiniteScroll>
        </>
        )
    }
}


export default News;
