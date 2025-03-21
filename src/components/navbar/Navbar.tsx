import React from "react";
import { useSearch } from "../../hooks/useSearch";
import { NavbarProps } from "../../types/types";
import BookmarkIcon from "../../assets/icons/Bookmark.png";
import { Plus, Search } from "lucide-react";

const Navbar: React.FC<NavbarProps> = ({
  searchPlaceholder = " Search movies or series",
  showPlusButton,
}) => {
  const {
    isSearchVisible,
    searchQuery,
    toggleSearch,
    handleSearchChange,
    handleSearchSubmit,
    navigate,
  } = useSearch();

  return (
    <nav className="container flex items-center justify-between">
      <div
        className="font-serif font-extrabold w-[130px] mt-[40px] md:ml-[80px] ml-[20px] w-600 text-[35px] max-w-[100px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        The Movie Tracker
      </div>
      <div className="flex-grow flex items-center justify-end lg:hidden">
        <button
          onClick={toggleSearch}
          className="bg-gray-300 h-10 w-10 flex items-center justify-center rounded-full focus:outline-none text-xl font-bold"
        >
          {!isSearchVisible ? (
            <span role="img" aria-label="Search Icon">
              <Search />
            </span>
          ) : (
            <span
              role="img"
              aria-label="Search Icon"
              className="text-[30px] text-gray-600 mb-2"
            >
              <Plus />
            </span>
          )}
        </button>
        {showPlusButton && (
          <button className="bg-gray-300 h-10 w-10 flex items-center justify-center rounded-full focus:outline-none">
            <img src={BookmarkIcon} className="w-6" alt="Bookmark Icon" />
          </button>
        )}
      </div>

      <div
        className={`absolute top-[200px] left-0 right-0 px-4 ${
          isSearchVisible ? "block" : "hidden"
        } lg:flex lg:static lg:px-0`}
      >
        <form onSubmit={handleSearchSubmit} className="w-full lg:w-auto">
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-full focus:outline-none text-center bg-gray-300 focus:ring focus:border-blue-100 lg:w-[630px] lg:h-[57px] lg:placeholder:text-[20px] placeholder:text-black w-full"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
