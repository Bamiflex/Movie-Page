document.addEventListener('DOMContentLoaded', () => {
    const movieContainer = document.getElementById('movie-container');
   
    async function fetchMovies() {
        const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'eb20fee7a1msh13ad9dd64b44121p11d1afjsnb191d011f0c3',
                'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const movies = await response.json();
            
            movieContainer.innerHTML = '';


            movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                movieCard.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                    <p>${movie.year}</p>
                `;
                movieContainer.appendChild(movieCard);
            });
        } catch (error) {
            console.error('Error fetching movies:', error);
            alert('Error Fetching Movies, Check Internet...');
        }
    }

    fetchMovies();
});

