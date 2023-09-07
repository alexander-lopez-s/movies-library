import deleteMovie from "../../apis/deleteMovies.js";
import dom from "../dom.js";

const createMovie = (movie) => {
  const movieElement = document.createElement("div");
  movieElement.className = "movie";
  movieElement.id = movie.id;

  // Create an image element
  const image = document.createElement("img");
  image.src = movie.src;
  image.alt = movie.title;

  // Create a title element
  const title = document.createElement("h2");
  title.textContent = movie.title;

  // Create a delete button element
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList = "delete-button";
  deleteButton.addEventListener('click', (e) => {
    e.preventDefault()
    deleteMovie(movie.id);
  });

  // Create an update button element
  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.classList = "update-button";
  updateButton.addEventListener('click', (e) => {
    e.preventDefault()
    dom.formButton.innerHTML = 'Update movie';
    dom.formTitle.value = movie.title;
    dom.formImage.value = movie.src;
    movieElement.classList.add('selected');
  });

  movieElement.appendChild(image);
  movieElement.appendChild(title);
  movieElement.appendChild(deleteButton);
  movieElement.appendChild(updateButton);

  return movieElement;
};

export default createMovie;
