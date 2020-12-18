// Code MovieReviews Here
import React from 'react'

const MovieReviews = (data) => {
    return (
        <div className="review-list">
            <div className="review">
                <p>{data.data.display_title}</p>
                <p>{data.data.headline}</p>
                <p>{data.data.summary_short}</p>
            </div>
        </div>
    )
}
export default MovieReviews;