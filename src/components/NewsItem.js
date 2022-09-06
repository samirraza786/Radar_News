import React from 'react';

function NewsItem(props) {
    // if we dont define props like this then use props.propname then
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } = props;
    return (
        <>
            <div className="card mt-4">
                {/* if some news has no imageUrl then set default news image -https://cloudfront-us-east-1.images.arcpublishing.com/cmg/NIXKYYNBC5GSNF6N2TL27IQYLA.jpg*/}
                <img src={imageUrl !== null ? imageUrl : "https://cloudfront-us-east-1.images.arcpublishing.com/cmg/NIXKYYNBC5GSNF6N2TL27IQYLA.jpg"} className="card-img-top" alt="img" style={{ height: "300px" }} />
                <div className="card-body">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "100", marginLeft: "-10%" }}> {source} </span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    {/* if null show unknown */}
                    <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                </div>
            </div>
        </>
    )
}

export default NewsItem;
