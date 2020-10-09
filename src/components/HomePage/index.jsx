import React from "react";
import HeaderContainer from "./HeaderContainer";
import MovieCollection from "./MovieCollection";
const HomePage = () => {
  const [myMovieCollections, setMyMovieCollections] = React.useState([]);

  const AddToCollection = (movie) => {
    setMyMovieCollections([movie, ...myMovieCollections]);
  };

  return (
    <>
      <HeaderContainer AddToCollection={AddToCollection} />
      <MovieCollection myMovieCollections={myMovieCollections} />
    </>
  );
};

export default HomePage;
