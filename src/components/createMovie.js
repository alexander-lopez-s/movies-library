const createMovie = (movie) => {
    const movieElement = document.createElement("div");
    movieElement.className = "movie";

    // Create an image element
    const image = document.createElement("img");
    image.src = movie.src;
    image.alt = movie.title;

    // Create a title element
    const title = document.createElement("h2");
    title.textContent = movie.title;

    // Append image and title to the movie element
    movieElement.appendChild(image);
    movieElement.appendChild(title);

    return movieElement;
};

export default createMovie;