import dom from "../src/dom.js";

const postMovies = async () => {
    const formData = {};
    // Gather form data by accessing form elements directly
    formData.title = dom.formTitle.value;
    formData.src = dom.formImage.value;

    try {
        const response = await fetch("https://my-json-server.typicode.com/cristobal-lopez/movies-library/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

export default postMovies;
