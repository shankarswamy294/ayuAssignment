import React from "react";
import PropTypes from "prop-types";
import { fetchMovies } from "../../apiCalls";
import "./HeaderContainer.css";

const HeaderContainer = (props) => {
  const [searchFor, setSerchedFor] = React.useState("");
  const [searchedMovies, setSerchedMovies] = React.useState({});
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };
  const searchHandler = async (e) => {
    const searchString = e.target.value;
    setSerchedFor(searchString);
    if (searchString === "") {
      setSerchedMovies(null);
      setSelectedMovie(null);
      return;
    }

    let fetchResults = debounce(async () => {
      const result = await fetchMovies(searchString);
      setSerchedMovies(result);
    }, 500);
    fetchResults();
  };

  const selectedMovieToAdd = (movie) => {
    setSerchedFor(movie.Title);
    setSelectedMovie(movie);
    setSerchedMovies(null);
  };

  return (
    <div className={"searchContainer"}>
      <div className={"headerText"}>
        <h3>My WatchList</h3>
        <div>Search to add Movie or Tv shows to your watch list</div>
      </div>
      <div className="searchWrapper">
        {selectedMovie && (
          <button
            className="AddBtn"
            onClick={() => {
              props.AddToCollection(selectedMovie);
              setSelectedMovie(null);
              setSerchedFor("");
            }}
          >
            +
          </button>
        )}
        <input
          type="text"
          value={searchFor}
          className="selector_input"
          onChange={(e) => searchHandler(e)}
          placeholder={"Search...."}
        />
        {searchFor && (
          <button
            className={"clearBtn"}
            onClick={() => {
              setSerchedMovies(null);
              setSerchedFor("");
              setSelectedMovie(null);
            }}
          >
            x
          </button>
        )}
        {searchedMovies &&
        searchedMovies.Search &&
        searchedMovies.Search.length ? (
          <ul className="selectDropDown">
            {searchedMovies.Search.map((movie) => {
              return (
                <li
                  className={"eachOption"}
                  onClick={() => selectedMovieToAdd(movie)}
                >
                  {movie.Title}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

HeaderContainer.defaultProps = {};
HeaderContainer.propType = {
  AddToCollection: PropTypes.Function
};

export default HeaderContainer;
