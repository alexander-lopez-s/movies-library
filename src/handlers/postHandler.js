import dom from "../dom.js";
import postMovies from "../../apis/postMovies.js";
import createMovie from "../components/createMovie.js";
import updateMovies from "../../apis/updateMovies.js"


const postHandler = async () => {
    if (dom.formButton.innerHTML === "Create Poster") {
        const movieData = await postMovies();
        if (movieData) {
            const movieDom = createMovie(movieData);
            dom.postersContainer.append(movieDom);
        }
        location.reload();
    } else {
        const element = document.querySelector('.selected');
        const id = Number(element.id);

        const newMovie = {
            title: dom.formTitle.value,
            src: dom.formImage.value
        }

        await updateMovies(id, newMovie);
    }

}

export default postHandler;