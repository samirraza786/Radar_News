import React, { Component } from 'react';
import NewsItem from './NewsItem';


export class News extends Component {
    //  to get http request

    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Commonwealth Games: India thrash Pakistan in cricket",
            "description": "India cruise to an eight-wicket win over fierce rivals Pakistan in their Commonwealth Games Group A cricket match at Edgbaston.",
            "url": "https://www.bbc.co.uk/sport/commonwealth-games/62369628",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/14669/production/_126116538_gettyimages-1242221167.jpg",
            "publishedAt": "2022-07-31T13:42:24Z",
            "content": "Smriti Mandhana's 63 came off 42 balls with eight fours and three sixes\r\n<table>\r\n<tr><td>Commonwealth Games Group A, Edgbaston:</td></tr><tr><td>India 102-2 (11.4 overs) beat Pakistan 99 all out (18… [+520 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "ECB high-performance review proposes less domestic cricket",
            "description": "A smaller County Championship top division and fewer playing days are among proposals from a review into the men's game in England and Wales.",
            "url": "https://www.bbc.co.uk/sport/cricket/62688060",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/A505/production/_126454224_oldtrafford_getty.jpg",
            "publishedAt": "2022-08-26T10:48:47Z",
            "content": "Surrey are currently top of Division One in the County Championship\r\nA smaller top division of the County Championship and fewer days of cricket are among proposals from a review into the men's game … [+3035 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Josh Halliday North of England correspondent",
            "title": "‘Cricket is everything’: Adnan Miakhel’s England dreams alive as asylum granted",
            "description": "Talented teenager who escaped militia fighters in Afghanistan caught Freddie Flintoff’s attention during BBC seriesOn the dusty backstreets of Afghanistan, Adnan Miakhel played cricket with whatever he could find. He bowled for hours with a tennis ball and fa…",
            "url": "https://amp.theguardian.com/sport/2022/aug/07/cricket-is-everything-adnan-miakhel-england-dreams-alive-as-asylum-granted",
            "urlToImage": "https://i.guim.co.uk/img/media/84c8d5d292d23df2b3de342441ebe5826ce01c9f/0_44_600_360/master/600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fe88ce013da38246beb31517a35a0450",
            "publishedAt": "2022-08-07T13:31:24Z",
            "content": "On the dusty backstreets of Afghanistan, Adnan Miakhel played cricket with whatever he could find. He bowled for hours with a tennis ball and fashioned a bat out of a tree branch. His obsession with … [+3976 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "England v South Africa: Ben Stokes' side must stick with Bazball despite defeat",
            "description": "England did not lose the first Test against South Africa because of their 'Bazball' approach - but how they respond to will be fascinating, says chief cricket writer Stephan Shemilt.",
            "url": "https://www.bbc.co.uk/sport/cricket/62611830",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/FABC/production/_126388146_2e22239e75ac0fcd6dced48033ad37cc3f95cd79.jpg",
            "publishedAt": "2022-08-20T05:52:34Z",
            "content": "It had to happen eventually.\r\nThe glorious cheese dream in which England romped to four incredible Test wins could not last forever. The alarm clock would provide the wake-up and a return to reality.… [+4711 chars]"
        }
    ];
    // now article is variable which we can use using this.article in constructor
    constructor() {
        super();
        // console.log("I am constructor from news component");
        // state variable
        this.state = {
            articles: this.articles,
            loading: false //so that we can use spinner if loading is true
        }

    }

    render() {
        // inside render props
        let { title, description, imageUrl } = this.props;
        return (
            <>
                <section id="card-section">
                    <div className="row container-fluid mt-3">
                        <h2>News Monkey - Top Headlines</h2>
                        {this.articles.map(function (element) {
                            // console.log(element);
                            return (
                                //  map need unique key , so use url -> give to thing we r returning like div here
                                <div className="col-md-4 col-sm-6" key={element.url}>
                                    <NewsItem title={element.title.substring(0,40)} description={element.description.substring(0,100)} imageUrl={element.urlToImage} newsUrl = {element.url} />
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
