import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        // in class based components , take props like this inside render()56
        let {title , description, imageUrl, newsUrl} = this.props;
        return (
            <>
                <div className="card mt-4">
                    {/* if some news has no imageUrl then set default news image -https://cloudfront-us-east-1.images.arcpublishing.com/cmg/NIXKYYNBC5GSNF6N2TL27IQYLA.jpg*/}
                    <img src={imageUrl!==null? imageUrl:"https://cloudfront-us-east-1.images.arcpublishing.com/cmg/NIXKYYNBC5GSNF6N2TL27IQYLA.jpg" } className="card-img-top" alt="img" style={{height : "300px"}} />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target = "_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                        </div>
                </div>
            </>
        )
    }
}

export default NewsItem;
