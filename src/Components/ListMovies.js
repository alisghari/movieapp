import React from 'react'
import {Card} from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';


const ListesMovies = (props) => {
    return <div className="listmovies">
{props.movies.map(el=>   (
    <div className="movie">
<Card style={{ width:"18rem"}}>
           <Card.Img
           variant="top"
           src={el.image}
           />
         <Card.Body>
           <Card.Title>{el.name}</Card.Title>
           <Card.Text>{el.year}</Card.Text>
           <StarRatingComponent value={el.rating} starCount={10}/>
           </Card.Body> 
           </Card>
           </div>
           ))}

    </div>;
};

export default ListesMovies;
