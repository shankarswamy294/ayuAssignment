import React from "react";
import {withRouter} from 'react-router-dom';
import thumbnail from "../../Assets/images/thumbnail.png";
import {Card} from 'react-bootstrap';
import './DetailedView.css';
const DetailedView = ({location}) => {
    const {movie} = location.state;
    return <div className={"DetailedView"}><Card className={"p-5 m-auto detailCard"}>
        <Card.Img className={"poster"} variant="top" src={movie.Poster === "N/A" ? thumbnail : movie.Poster} />
        <Card.Body className={"d-inherit"}>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>Type: {movie.Type}</Card.Text>
            <Card.Text>Year: {movie.Year}</Card.Text>
            <Card.Text>imdbID: {movie.imdbID}</Card.Text>
        </Card.Body>
    </Card>
    </div>
};

export default withRouter(DetailedView);