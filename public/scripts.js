// API key for The Movie Database (TMDB) API. This key is required to authenticate API requests.
// Note: Never expose sensitive API keys in client-side code in a real-world application.
const tmdbKey = '91fff31443b44e96e8c1a82e3e134b0b';

// Base URL for TMDB API requests. This should be set to the endpoint for API calls.
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

// Reference to the "Play" button on the webpage, identified by its ID.
const playBtn = document.getElementById('playBtn');

// Function to fetch available genres from the TMDB API
// This function should make an API call to retrieve a list of genres and return them.
const getGenres = async () => {
    const genreRequestEndpoint = '/genre/movie/list';
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
    try {
        // Using fetch(): The fetch() method sends an HTTP GET request to the specified URL. It returns a Promise that resolves to a Response object.
        const response = await fetch(urlToFetch);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        // save genres property to a variable
        const genres = jsonResponse.genres;
        return genres;
    }
    catch (error) {
        // Handle errors
        console.error('Error fetching genres', error);
    }
};

// Function to fetch movies based on the selected genre
// This function should use the selected genre from the dropdown menu to make an API request for movies in that genre.
const getMovies = () => {
    const selectedGenre = getSelectedGenre(); // Get the currently selected genre ID from the dropdown menu

};

// Function to fetch detailed information about a specific movie
// This function should make an API call to retrieve details for a particular movie.
const getMovieInfo = async () => {
    const discoverMovieEndpoint = '/discover/movie';
    const requestParams = `?api_key =${tmdbKey}`, `?with_genres = ${selectedGenre}`;
    const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
    const movieInfo = document.getElementById('movieInfo'); // Get the container where movie info is displayed
    if (movieInfo.childNodes.length > 0) { // Check if there are any child elements (i.e., existing movie info) in the container
        clearCurrentMovie(); // Clear the current movie info from the screen if it exists
    };

};

// Fetch genres when the page loads and populate the dropdown menu with them.
// `getGenres` is expected to return a promise that resolves with a list of genres.
// Once genres are fetched, `populateGenreDropdown` is called to fill the dropdown menu.
getGenres().then(populateGenreDropdown);

// Assigns an event handler to the "Play" button.
// When clicked, it triggers `showRandomMovie` to display a random movie's information.
playBtn.onclick = showRandomMovie;
