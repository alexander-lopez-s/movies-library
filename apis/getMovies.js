import data from "../src/data.js";

const getMovies = async () => {
  try {
    const fetchMovies = await fetch(data.baseUrl);
    const response = await fetchMovies.json();
    return response; 
  } catch (error) {
    console.error(error); 
  }
};

export default getMovies;
