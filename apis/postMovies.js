import dom from "../src/dom.js";

const postMovies = async () => {
    const formData = {};
    // Gather form data by accessing form elements directly
    formData.title = dom.formTitle.value;
    formData.src = dom.formImage.value;

    try {
        const response = await fetch("http://localhost:5000/movies", {
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
