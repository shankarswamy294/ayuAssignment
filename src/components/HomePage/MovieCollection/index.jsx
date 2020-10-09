import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Container } from "react-bootstrap";
import MovieCard from "./MovieCard";
import "./MovieCollection.css";

const MovieCollection = (props) => {
  return (
    <Container className={"watchListContainer"}>
      <Row xs={1} sm={2} md={3} lg={5}>
        {props.myMovieCollections &&
          props.myMovieCollections.map((movie) => (
            <Col>
              <MovieCard movie={movie} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

MovieCollection.defaultProps = {};
MovieCollection.propType = {
  myMovieCollections: PropTypes.Array
};

export default MovieCollection;
