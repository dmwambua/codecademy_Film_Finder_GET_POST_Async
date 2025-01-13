// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
    const select = document.getElementById('genres'); // Get the dropdown element by its ID

    for (const genre of genres) { // Loop through each genre in the genres array
        let option = document.createElement("option"); // Create a new <option> element
        option.value = genre.id; // Set the value of the option to the genre's ID
        option.text = genre.name; // Set the displayed text of the option to the genre's name
        select.appendChild(option); // Add the option element to the dropdown menu
    }
};

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
    const selectedGenre = document.getElementById('genres').value; // Get the selected value from the dropdown menu
    return selectedGenre; // Return the currently selected genre ID
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
    const btnDiv = document.getElementById('likeOrDislikeBtns'); // Get the div containing like/dislike buttons by its ID
    btnDiv.removeAttribute('hidden'); // Remove the "hidden" attribute to make buttons visible
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
    const moviePosterDiv = document.getElementById('moviePoster'); // Get the movie poster container by its ID
    const movieTextDiv = document.getElementById('movieText'); // Get the movie text container by its ID
    moviePosterDiv.innerHTML = ''; // Clear any existing content in the movie poster container
    movieTextDiv.innerHTML = ''; // Clear any existing content in the movie text container
};

// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = () => {
    clearCurrentMovie(); // Clear current movie details from screen
    showRandomMovie(); // Fetch and display another random movie
};

// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
    clearCurrentMovie(); // Clear current movie details from screen
    showRandomMovie(); // Fetch and display another random movie
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`; // Construct URL for fetching poster image

    const posterImg = document.createElement('img'); // Create an <img> element for displaying poster
    posterImg.setAttribute('src', moviePosterUrl); // Set image source to constructed URL
    posterImg.setAttribute('id', 'moviePoster'); // Assign an ID to this image element

    return posterImg; // Return the created <img> element
};

// Create HTML for movie title
const createMovieTitle = (title) => {
    const titleHeader = document.createElement('h1'); // Create an <h1> element for displaying title
    titleHeader.setAttribute('id', 'movieTitle'); // Assign an ID to this title element
    titleHeader.innerHTML = title; // Set inner HTML to display the movie's title

    return titleHeader; // Return the created <h1> element
};

// Create HTML for movie overview
const createMovieOverview = (overview) => {
    const overviewParagraph = document.createElement('p'); // Create a <p> element for displaying overview text
    overviewParagraph.setAttribute('id', 'movieOverview'); // Assign an ID to this paragraph element
    overviewParagraph.innerHTML = overview; // Set inner HTML to display the movie's overview

    return overviewParagraph; // Return the created <p> element
};

// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length); // Generate a random index within movies array length range
    const randomMovie = movies[randomIndex]; // Select a random movie based on generated index
    return randomMovie; // Return the randomly selected movie object
};

// Uses the DOM to create HTML to display the movie
const displayMovie = (movieInfo) => {
    const moviePosterDiv = document.getElementById('moviePoster'); // Get container for displaying poster by its ID
    const movieTextDiv = document.getElementById('movieText'); // Get container for displaying text info by its ID
    const likeBtn = document.getElementById('likeBtn'); // Get "like" button by its ID
    const dislikeBtn = document.getElementById('dislikeBtn'); // Get "dislike" button by its ID

    // Create HTML content containing movie info using helper functions
    const moviePoster = createMoviePoster(movieInfo.poster_path);
    const titleHeader = createMovieTitle(movieInfo.title);
    const overviewText = createMovieOverview(movieInfo.overview);

    // Append title, poster, and overview elements to their respective containers on page 
    moviePosterDiv.appendChild(moviePoster);
    movieTextDiv.appendChild(titleHeader);
    movieTextDiv.appendChild(overviewText);

    showBtns(); // Make like/dislike buttons visible on page

    likeBtn.onclick = likeMovie; // Assign click event handler for liking a movie 
    dislikeBtn.onclick = dislikeMovie; // Assign click event handler for disliking a movie 
};
