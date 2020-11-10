import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const Movies =  (props) =>{
    const{ movies } = props
    return (
        <div className="col-sm-3">
            <div className="card w-100 h-10 mb-3 shadow p-3-sm">
                <div className="card-body">
                    <div>
    <Typography component="div">
      <Box fontFamily="Monospace" fontSize="h7.fontSize" m={1}>
      {movies.original_title}
      </Box>
    </Typography>
    
    <div className="imgbox">
   <img className="center-fit" id= "my" alt="movie_img"  src= {`https://image.tmdb.org/t/p/original/${movies.poster_path}`}/>
    {/* document.getElementById("my").src= "https://image.tmdb.org/t/p/original/{movies.poster_path}" */}
    </div>
    <br/>
    <div id="div1">
    <strong className="f"><i className="far fa-calendar-alt"></i> Release Date </strong>: {movies.release_date}
    
    <br/>
    <strong><i className="fab fa-phoenix-framework"></i> Total Rating</strong>: {movies.vote_average}
    <br/>
    </div>
    </div>
    
               
               <Link to={`movie/movies/${movies.id}`} className="btn btn-dark btn-block">
               <i className="far fa-eye"></i>  View Movie</Link> </div>
            </div>
            
        </div>  
    )
}
export default Movies