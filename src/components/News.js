import React, { Component } from 'react';
import NewsItem from './NewsItem';


export class News extends Component {
    //  to get http request

    articles = [
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
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
                        <div className="col-md-4 col-sm-6">
                            <NewsItem title="myTitle" description="myDescription" imageUrl="https://pbs.twimg.com/media/EPccRyVU8AAir7Y?format=jpg&name=large" />
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <NewsItem title="myTitle" description="myDescription" imageUrl="https://pbs.twimg.com/media/EPccRyVU8AAir7Y?format=jpg&name=large" />
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <NewsItem title="myTitle" description="myDescription" imageUrl="https://pbs.twimg.com/media/EPccRyVU8AAir7Y?format=jpg&name=large" />
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <NewsItem title="myTitle" description="myDescription" imageUrl="https://pbs.twimg.com/media/EPccRyVU8AAir7Y?format=jpg&name=large" />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default News;
