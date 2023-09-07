const deleteMovie = async (movieId) => {
    try {
        const response = await fetch(`https://my-json-server.typicode.com/cristobal-lopez/movies-library/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return await response.json();
        } 
    } catch (error) {
        console.error("Error:", error);
    }
};

export default deleteMovie;
