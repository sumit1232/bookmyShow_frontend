import React, { useEffect, useState } from "react";

const Aboutus = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY&region=IN")
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error("Error fetching movies:", error));
    }, []);

    return (
        <div className="font-sans bg-gray-100 min-h-screen">
            <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">BookMyShow - Movies in Mumbai</h1>
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="p-2 rounded-md text-black w-1/3"
                />
                <button className="bg-red-600 px-4 py-2 rounded-md text-white">Sign In</button>
            </header>

            <section className="p-8">
                <h2 className="text-3xl font-bold mb-6">Now Playing in Mumbai</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {movies.length > 0 ? movies.map((movie) => (
                        <div className="bg-white p-4 rounded-lg shadow-lg text-center" key={movie.id}>
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                alt={movie.title} 
                                className="w-full rounded-md mb-2"
                            />
                            <p className="text-lg font-medium">{movie.title}</p>
                            <p className="text-gray-600">⭐ {movie.vote_average.toFixed(1)}</p>
                        </div>
                    )) : <p>Loading movies...</p>}
                </div>
            </section>

            <footer className="bg-gray-900 text-white text-center p-4 mt-8">
                <p>&copy; 2025 BookMyShow Clone</p>
            </footer>
        </div>
    );
};

export default Aboutus;
