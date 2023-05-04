import React from 'react';
import './MovieCard.css';

const MovieCard =({ movie}) => {
    
    return(
        <div  className='card'>
        <img src={movie.imageUrl} alt ={movie.name} className='card-img-top'/>
          <div className="card-body">
             <h5 className='card-title'>{movie.name}</h5>
             <p className="card-text">
                Rating: <span className='rating'>{movie.ratings}</span>
             </p>
             <p className='catd-text'>
                Released Date: { ' '}
                <span className='released-date'>{movie.releasedDate}</span>
             </p>

          </div>

        </div>
    );
};

export default MovieCard;
