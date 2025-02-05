import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Search from "../pages/search/Search"; 
import Movie from "../pages/movies/Movie";
import { searchMovies } from "../redux/slice/searchSlice";
import { useAppDispatch } from "../hooks/useAppDispatch/useAppDispatch";
import Navbar from "../components/navbar/Navbar";

function AppRoutes() {
  const dispatch = useAppDispatch();

  const handleSearchChange = (query: string) => {
    dispatch(searchMovies(query));
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar onSearchChange={handleSearchChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:movieId" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
