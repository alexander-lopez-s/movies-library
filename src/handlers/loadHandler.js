import dom from "../dom.js"
import getMovies from "../../apis/getMovies.js";
import createMovie from "../components/createMovie.js";

const loadMovies = async () => {
    const movies = await getMovies();

    if(movies){
     movies.forEach(element => {
         const movieDom = createMovie(element);
         dom.postersContainer.append(movieDom);
     });
    }
}

export default loadMovies;