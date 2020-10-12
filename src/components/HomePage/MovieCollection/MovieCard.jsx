import React from "react";
import PropTypes from "prop-types";
import thumbnail from "../../../Assets/images/thumbnail.png";
import {Link, withRouter} from 'react-router-dom';

const MovieCard = ({movie}) => {
    return (
        <Link to={{pathname: '/DetailedView', state:{movie}}} className={"movieBox"}>
            <img
                className={"moviePoster"}
                src={movie.Poster === "N/A" ? thumbnail : movie.Poster}
                alt={"movie_img"}
            />
            <div>Watched</div>
        </Link>
    );
}

MovieCard.defaultProps = {};
MovieCard.propType = {
  movie: PropTypes.Object
};

export default withRouter(MovieCard);
