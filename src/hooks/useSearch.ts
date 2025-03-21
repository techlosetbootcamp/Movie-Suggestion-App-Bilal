import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useSearch = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const decodedQuery = decodeURIComponent(location.search?.slice(7));
    setSearchQuery(decodedQuery || "");
  }, [location.search]);

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const encodedQuery = encodeURIComponent(searchQuery);
    navigate(`/search?query=${encodedQuery}`);
  };

  return {
    isSearchVisible,
    searchQuery,
    toggleSearch,
    handleSearchChange,
    handleSearchSubmit,
    navigate,
  };
};
