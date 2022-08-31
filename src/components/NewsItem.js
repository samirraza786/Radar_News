import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        // in class based components , take props like this inside render()56
        let {title , description, imageUrl, newsUrl} = this.props;
        return (
            <>
                <div className="card mt-4">
                    <img src={imageUrl} className="card-img-top" alt="img" style={{height : "300px"}} />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target = "_blank" className="btn btn-primary">Read More</a>
                        </div>
                </div>
            </>
        )
    }
}

export default NewsItem;
