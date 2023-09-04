const deleteMovie = async (movieId) => {
    try {
        const response = await fetch(`http://localhost:5000/movies/${movieId}`, {
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
