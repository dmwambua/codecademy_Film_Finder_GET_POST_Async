// API key for The Movie Database (TMDB) API. This key is required to authenticate API requests.
// Note: Never expose sensitive API keys in client-side code in a real-world application.
const tmdbKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWZmZjMxNDQzYjQ0ZTk2ZThjMWE4MmUzZTEzNGIwYiIsIm5iZiI6MTczNjc4Njc2NC4zNDQsInN1YiI6IjY3ODU0MzRjYjkwOTRjN2RmZWJiNDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJ5TQMRlvpt3HDL_o4EQXx4j7rIl-LdlhfWV_EgR4i4';

// Base URL for TMDB API requests. This should be set to the endpoint for API calls.
const tmdbBaseUrl = '';

// Reference to the "Play" button on the webpage, identified by its ID.
const playBtn = document.getElementById('playBtn');

// Function to fetch available genres from the TMDB API
// This function should make an API call to retrieve a list of genres and return them.
const getGenres = () => {

};

// Function to fetch movies based on the selected genre
// This function should use the selected genre from the dropdown menu to make an API request for movies in that genre.
const getMovies = () => {
    const selectedGenre = getSelectedGenre(); // Get the currently selected genre ID from the dropdown menu

};

// Function to fetch detailed information about a specific movie
// This function should make an API call to retrieve details for a particular movie.
const getMovieInfo = () => {

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
