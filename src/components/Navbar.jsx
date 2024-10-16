import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  const handleNavClick = (navItem) => {
    setActive(navItem);
    setIsOpen(false);
    if(navItem==='Home'){
      navigate('/')
    }
    else if(navItem==='WishList'){
      navigate('/wishlist')
    }
  };

  return (
    <nav className="bg-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl cursor-pointer" onClick={()=>handleNavClick('Home')} >Logo</div>
        <div className="hidden md:flex space-x-6">
          {["Home", "WishList", "Contact"].map((navItem) => (
            <button
              key={navItem}
              onClick={() => handleNavClick(navItem)}
              className={`text-lg ${
                active === navItem
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {navItem}
            </button>
          ))}
        </div>
        <div className="hidden md:block">
          <button className="bg-white text-red-500 px-4 py-2 rounded-full font-semibold">
            Sign Up
          </button>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          {["Home", "About", "Contact"].map((navItem) => (
            <button
              key={navItem}
              onClick={() => handleNavClick(navItem)}
              className={`block w-full text-left px-4 py-2 ${
                active === navItem
                  ? "text-white bg-red-700"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {navItem}
            </button>
          ))}
          <button className="block w-full text-left px-4 py-2 text-red-500 bg-white rounded-full">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
