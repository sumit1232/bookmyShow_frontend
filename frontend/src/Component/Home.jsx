import React from "react";
import Navbar from './Navbar'

const Home = () => {
    return (
        <div className="font-sans">
            {/* <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">BookMyShow</h1>
                <input 
                    type="text" 
                    placeholder="Search for movies, events..." 
                    className="p-2 rounded-md text-black"
                />
                <button className="bg-red-600 px-4 py-2 rounded-md text-white">Sign In</button>
            </header> */}
<Navbar/>
            <section className="bg-gray-200 text-center py-16">
                <h2 className="text-3xl font-semibold">Welcome to BookMyShow</h2>
            </section>

            <section className="p-8">
                <h2 className="text-2xl font-bold mb-4">Recommended Movies</h2>
                <div className="grid grid-cols-3 gap-4">
                    {['Movie 1', 'Movie 2', 'Movie 3'].map((movie, index) => (
                        <div className="bg-white p-4 rounded-lg shadow-md text-center" key={index}>
                            <img 
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAyMjYuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-wqmumfxjtk-portrait.jpg" 
                                alt={movie} 
                                className="w-full rounded-md mb-2"
                            />
                            <p className="text-lg font-medium">{movie}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="bg-gray-900 text-white text-center p-4">
                <p>&copy; 2025 BookMyShow Clone</p>
            </footer>
        </div>
    );
};

export default Home;
