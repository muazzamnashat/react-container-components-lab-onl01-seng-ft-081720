import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

    constructor(props){
        super(props);
        this.state={
            reviews:[]
        }
    }
    componentDidMount = () => {
        fetch(URL)
        .then((response) => response.json())
        .then((response) =>{
            this.setState({reviews :response.results})
        })
    }

    renderMovies =() => {
        // debugger
        return this.state.reviews.map(movie =>{
           return (<MovieReviews data={movie}/>)})
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                {this.renderMovies()}
            </div>
        )
    }
}
