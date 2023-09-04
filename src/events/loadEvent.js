import loadMovies from "../handlers/loadHandler.js";

const loadMoviesEvent = () => {
    window.addEventListener('load', loadMovies);
}

export default loadMoviesEvent;

