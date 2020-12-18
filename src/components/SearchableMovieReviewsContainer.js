import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {


    constructor(props){
        super(props);
        this.state={
            searchTerm: "",
            reviews:[]
        }
    }
    fetchAPI = (key) => {
        fetch(`${URL}&query=${key}`)
        .then((response) => response.json())
        .then((response) =>{
            this.setState({reviews :response.results})
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchAPI(e.target.name.value)
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={e => this.handleSubmit(e)} >
                    <input type="text" name="name" onChange={e => this.setState({searchTerm: e.target.value})} value={this.state.searchTerm}/>
                    <button type="submit">Submit</button>
                </form>
                {this.state.reviews.map(movie =>(<MovieReviews data={movie}/>))}
            </div>
        )
    }
}
