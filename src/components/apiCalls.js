export const fetchMovies = async (search) => {
  return await fetch(`https://www.omdbapi.com/?apikey=3ccb2a6c&s=${search}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return { err };
    });
};
