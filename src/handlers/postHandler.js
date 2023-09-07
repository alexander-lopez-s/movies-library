import dom from "../dom.js";
import postMovies from "../../apis/postMovies.js";
import createMovie from "../components/createMovie.js";
import updateMovies from "../../apis/updateMovies.js"


const postHandler = async () => {
    const movieData = {
        title : dom.formTitle.value,
        src : dom.formImage.value
} 
    if (dom.formButton.innerHTML === "Create Poster") {
 
        
            const movieDom = createMovie(movieData);
            dom.postersContainer.append(movieDom);
             await postMovies(movieData);
    } else {
        const element = document.querySelector('.selected');
        const id = Number(element.id);
        
          element.querySelector('h2').innerText = movieData.title;
          element.querySelector('img').src = movieData.src;
          element.querySelector('img').alt = movieData.title;


        await updateMovies(id, movieData);
    }

}

export default postHandler;