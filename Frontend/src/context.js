import React, { Component } from 'react';
import axios from 'axios'
const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type){
        case 'SEARCH_MOVIE':
        return {
            ...state,
            movie_list: action.payload,
            heading: 'search Results'
        }
    }
}
export  class Provider1 extends Component {
    state = {
        movie_list : [],
        heading: 'Top Rated Movies',
        dispatch: action => this.setState(state => reducer(state, action))
    };
    componentDidMount()
    {
        axios
        .get(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${
                process.env.REACT_APP_MS_KEY
            }`
            )
        .then(res =>{ 
            // console.log(res.data)
            this.setState({movie_list: res.data.results})
        })
        .catch(err=> console.log(err))

    }
    render() {
        return (
            <Context.Provider value={this.state}>

               {this.props.children} 
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;
