import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css';
import {Link} from 'react-router-dom'
import Spinner from '../layouts/Spinner';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
class View extends Component {
    state = {
        review:{},
        view:{},
    }
    componentDidMount()
    {
        axios
        .get(
            `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_MS_KEY
            }`
            )
        .then(res =>{ 
            //  console.log(res.data)
             this.setState({view : res.data})
     return axios
     .get(
         `https://api.themoviedb.org/3/movie/${this.props.match.params.id}/reviews?api_key=${process.env.REACT_APP_MS_KEY
         }`
         )
            
        })
        .then(res =>{
         console.log(res.data.results);
            this.setState({review : res.data.results[0]})          

        })
        .catch(err=> console.log(err))
  
    }
    render() {
        
         const {view, review} = this.state;
         if(view === undefined ||  Object.keys(view).lenght === 0  )
        {

            return <Spinner />
        
        }
        else if(review === undefined|| Object.keys(review).lenght === 0){
            return(
                <React.Fragment>
                    <Link to="/" className="btn btn-dark btn-sm mb-6">GO BACK</Link>
                    <br/>
                    <br/>
                    <div className="card">
                        <div className="card w-100 h-10 mb-3 shadow p-3-sm">
                           <h3> {view.original_title}</h3><br/>
                            <div className="imgbox3">
                           
                           <p><img className="center-fit2" id= "my" alt="movie_img"  src= {`https://image.tmdb.org/t/p/original/${view.poster_path}`} />
                           <span>{view.overview}</span>
                           <br/>
                           <strong className="f"><i className="far fa-calendar-alt"></i>  Release Date </strong>: {view.release_date}<br/>
                           <strong><i className="fab fa-phoenix-framework"></i> Total Rating </strong>: {view.vote_average}<br/>
                           <strong className="f"><i className="fab fa-unity"></i> Budget </strong>: {view.budget}<br/>
                           <strong className="f"><i className="fas fa-globe-asia"></i> Language </strong>: {view.original_language}<br/>
                           <strong className="f"><i className="fab fa-studiovinari"></i> Status </strong>: {view.status}<br/>
                           <strong className="f"><i className="fas fa-hourglass-start"></i> Runtime </strong>: {view.runtime} MIN<br/>
                           <strong className="f"><i className="fab fa-gripfire"></i> Popularity</strong>: {view.popularity}<br/>
                           <strong className="f"><i className="far fa-thumbs-up"></i> vote_count</strong>: {view.vote_count}<br/>
                           {/* <strong className="f"><i className="far fa-thumbs-up"></i> gener</strong>: {view.genres[].name} */}
                        
                        </p> 
                        {/* write and deploy rating code here*/}
                        <Link to="/" className="btn btn-dark btn-sm mb-6">Rate the movie</Link>
                        </div>
                   
                        </div> </div>
                        <br/>
                        <h1>Top Review</h1>
                        <div className="card">
                        <div className="card w-100 h-10 mb-3 shadow p-3-sm">
                        <div className="card-body">
                         
                    <h4>NO REVIEWS</h4>
   
                        
                            
                           
                       </div>
                       </div>
                       </div>
   
   
                </React.Fragment>
            ) 
        }
        else {
        }
         return(
             <React.Fragment>
                 <Link to="/" className="btn btn-dark btn-sm mb-6">GO BACK</Link>
                 <br/>
                 <br/>
                 <div className="card">
                     <div className="card w-100 h-10 mb-3 shadow p-3-sm">
                        <h3> {view.original_title}</h3><br/>
                         <div className="imgbox3">
                        
                        <p><img className="center-fit2" id= "my" alt="movie_img"  src= {`https://image.tmdb.org/t/p/original/${view.poster_path}`} />
                        <span>{view.overview}</span>
                        <br/>
                        <strong className="f"><i className="far fa-calendar-alt"></i>  Release Date </strong>: {view.release_date}<br/>
                        <strong><i className="fab fa-phoenix-framework"></i> Total Rating </strong>: {view.vote_average}<br/>
                        <strong className="f"><i className="fab fa-unity"></i> Budget </strong>: {view.budget}<br/>
                        <strong className="f"><i className="fas fa-globe-asia"></i> Language </strong>: {view.original_language}<br/>
                        <strong className="f"><i className="fab fa-studiovinari"></i> Status </strong>: {view.status}<br/>
                        <strong className="f"><i className="fas fa-hourglass-start"></i> Runtime </strong>: {view.runtime} MIN<br/>
                        <strong className="f"><i className="fab fa-gripfire"></i> Popularity</strong>: {view.popularity}<br/>
                        <strong className="f"><i className="far fa-thumbs-up"></i> vote_count</strong>: {view.vote_count}<br/>
                        {/* <strong className="f"><i className="far fa-thumbs-up"></i> gener</strong>: {view.genres[].name} */}
                     
                     </p> 
                     <Link to="/" className="btn btn-dark btn-sm mb-6">Rate the movie</Link>
                     </div>
                
                     </div> </div>
                     <br/>
                     <h1>Top Review</h1>
                     <div className="card">
                     <div className="card w-100 h-10 mb-3 shadow p-3-sm">
                     <div className="card-body">
                      
                  <strong>Author: {review.author} </strong> 
                        <br/>
                        {review.content} 

                     
                         
                        
                    </div>
                    </div>
                    </div>


             </React.Fragment>
         ) 
    }
}
export default View