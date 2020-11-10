import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../context'
class Search extends Component {
    state = {
        movieTitle:''
    }
    findMovie = (dispatch,e) =>{
        e.preventDefault();
        axios
        .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${
                process.env.REACT_APP_MS_KEY
            }&query=${this.state.movieTitle}`
            )
        .then(res =>{ 
            console.log(res.data.results)
            dispatch({
                type: 'SEARCH_MOVIE',
                payload: res.data.results
            })
            
        })
        .catch(err=> console.log(err))

    }
    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            
                <Consumer>
                    
                    {value => {

                        
                        const {dispatch} = value;
                        return(
                            <div className="card card-body mb-4 p-4">
                                <h1 className="display-4 text-center">
                                <i className="fas fa-skull"> Search for a Movie</i>  
                                </h1>
                                {/* <p className="lead text-center">MSEARCHER</p> */}
                                  <form onSubmit={this.findMovie.bind(this, dispatch)}>
                                      <div className="form-group">
                                          <input
                                          type="text"
                                          className="form-control form-control-lg"
                                          placeholder="movie name..."
                                          name="movieTitle"
                                          value={this.state.movieTitle}
                                          onChange={this.onChange}
                                          />

                                      </div>
                                      <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
                                          Track Movie
                                      </button>
                                  </form>

                            </div>

                        )
                    }}

                </Consumer>
            
        )
    }
}
export default  Search
