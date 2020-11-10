import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layouts/Spinner'; 
import Movies from '../movi/Movies';

 
class Movi extends Component {
    render() {
        return (
             
            <Consumer> 
                {value => {
                    const { movie_list, heading } = value;
                    if(movie_list === undefined || movie_list.length === 0)
                    {
                        return<Spinner />
                    }
                    else{
                        return(
                        // return<h1>tracks loaded</h1>
                        <React.Fragment>
                    <h3 className="text-center mb-4">{heading}</h3>
                    <div className="row">
                        {
                            movie_list.map(item=>(
                                <Movies key={item.id} movies={item}/>
                            ))
                        }
                    </div>
                        </React.Fragment>
                        );
                    }
               
                }}
                
            </Consumer>
        )
    }
}
export default Movi;
