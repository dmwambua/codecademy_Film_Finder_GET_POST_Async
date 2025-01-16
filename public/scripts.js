// The API key for accessing TMDB (The Movie Database) API
const tmdbKey = "replace_with_your_api_key";

// The base URL for all TMDB API requests
const tmdbBaseUrl = "https://api.themoviedb.org/3";

// Reference to the "Play" button in the HTML document
const playBtn = document.getElementById("playBtn");

// Function to fetch the list of movie genres from TMDB API
const getGenres = async () => {
    // Endpoint for fetching movie genres
    const genreRequestEndpoint = "/genre/movie/list";
    // Query parameters including the API key
    const requestParams = `?api_key=${tmdbKey}`;
    // Full URL for the API request
    const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

    try {
        // Sending a GET request to fetch genres
        const response = await fetch(urlToFetch);
        if (response.ok) {
            // Parsing the JSON response if the request is successful
            const jsonResponse = await response.json();
            console.log(jsonResponse); // Logging the response for debugging purposes
            const genres = jsonResponse.genres; // Extracting genres array from the response
            return genres; // Returning the genres array
        }
    } catch (error) {
        // Logging any errors that occur during the fetch operation
        console.log(error);
    }
};

// Function to fetch movies based on a selected genre from TMDB API
const getMovies = async () => {
    // Getting the selected genre ID from a dropdown or similar UI element
    const selectedGenre = getSelectedGenre();
    // Endpoint for discovering movies based on filters like genre
    const discoverMovieEndpoint = "/discover/movie";
    // Query parameters including API key and selected genre ID
    const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
    // Full URL for the API request
    const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

    try {
        // Sending a GET request to fetch movies for the selected genre
        const response = await fetch(urlToFetch);
        if (response.ok) {
            // Parsing the JSON response if the request is successful
            const jsonResponse = await response.json();
            const movies = jsonResponse.results; // Extracting movies array from the response

            return movies; // Returning the movies array
        }
    } catch (error) {
        // Logging any errors that occur during the fetch operation
        console.log(error);
    }
};

// Function to fetch detailed information about a specific movie using its ID
const getMovieInfo = async (movie) => {
    const movieId = movie.id; // Extracting movie ID from the provided movie object
    // Endpoint for fetching detailed information about a specific movie
    const movieEndPoint = `/movie/${movieId}`;
    // Query parameters including the API key
    const requestParams = `?api_key=${tmdbKey}`;
    // Full URL for the API request
    const urlToFetch = `${tmdbBaseUrl}${movieEndPoint}${requestParams}`;

    try {
        // Sending a GET request to fetch movie details
        const response = await fetch(urlToFetch);

        if (response.ok) {
            // Parsing the JSON response if the request is successful
            const jsonResponse = await response.json();
            const movieInfo = jsonResponse; // Extracting detailed movie information

            return movieInfo; // Returning detailed movie information as an object
        }
    } catch (error) {
        // Logging any errors that occur during the fetch operation
        console.log(error);
    }
};

// Function to display a random movie's details on the webpage
const showRandomMovie = async () => {
    const movieInfo = document.getElementById("movieInfo"); // Reference to an HTML element where movie info is displayed

    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie(); // Clear previously displayed movie info, if any, before showing new data
    }

    const movies = await getMovies(); // Fetching movies based on selected genre
    const randomMovie = getRandomMovie(movies); // Selecting a random movie from the fetched list of movies

    const info = await getMovieInfo(randomMovie); // Fetching detailed information about the selected random movie

    displayMovie(info); // Displaying detailed information about the random movie on the webpage
};

// Fetch and populate genres in a dropdown menu when the page loads using getGenres function.
// The populateGenreDropdown function is assumed to handle populating UI elements with fetched genres.
getGenres().then(populateGenreDropdown);

// Attach an event listener to "Play" button to trigger showRandomMovie function when clicked.
playBtn.onclick = showRandomMovie;
