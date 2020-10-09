import React from "react";
import PropTypes from "prop-types";
import thumbnail from "../../../Assets/images/thumbnail.png";

const MovieCard = ({ movie }) => {
  return (
    <div className={"movieBox"}>
      <img
        className={"moviePoster"}
        src={movie.Poster === "N/A" ? thumbnail : movie.Poster}
        alt={"movie_img"}
      />
      <div>Watched</div>
    </div>
  );
};

MovieCard.defaultProps = {};
MovieCard.propType = {
  movie: PropTypes.Object
};

export default MovieCard;
