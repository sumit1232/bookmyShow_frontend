import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
        <a href="/" className="hover:text-gray-300">
          MyLogo</a></h1>
        {/* Menu for Large Screens */}
        <ul className="hidden md:flex space-x-6">
          {/* <li><a href="/home" className="hover:text-gray-300">Home</a></li> */}
          <li><a href="/aboutus" className="hover:text-gray-300">About</a></li>
          <li><a href="/service" className="hover:text-gray-300">Services</a></li>
          <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          <li><a href="/login" className="hover:text-gray-300">Login</a></li>
          <li><a href="/register" className="hover:text-gray-300">Register</a></li>

        </ul>
        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-800 p-4 text-center space-y-4">
          {/* <li><a href="/home" className="block hover:text-gray-300">Home</a></li> */}
          <li><a href="/aboutus" className="block hover:text-gray-300">About</a></li>
          <li><a href="/service" className="block hover:text-gray-300">Services</a></li>
          <li><a href="/contact" className="block hover:text-gray-300">Contact</a></li>
          <li><a href="/login" className="hover:text-gray-300">Login</a></li>
          <li><a href="/register" className="hover:text-gray-300">Register</a></li>
        </ul>
      )}
    </nav>


    </>
  );
};

export default Navbar;
