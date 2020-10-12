import React, {useEffect} from "react";
import HeaderContainer from "./HeaderContainer";
import MovieCollection from "./MovieCollection";
import {fetchMovies} from "../apiCalls";
const HomePage = () => {
  const [myMovieCollections, setMyMovieCollections] = React.useState([]);

  useEffect(()=>{
      const {collection} = sessionStorage;
      !collection && fetchMovies("2020").then((data)=>{
          sessionStorage.collection = JSON.stringify([...data["Search"]])
      });
      setMyMovieCollections((collection && JSON.parse(collection)) || []);
  },[]);

  const AddToCollection = (movie) => {
    setMyMovieCollections([movie, ...myMovieCollections]);
    sessionStorage.collection = JSON.stringify([movie, ...myMovieCollections])
  };

  return (
    <>
      <HeaderContainer AddToCollection={AddToCollection} />
      <MovieCollection myMovieCollections={myMovieCollections} />
    </>
  );
};

export default HomePage;
