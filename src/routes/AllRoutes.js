import { Route,Routes } from "react-router-dom";

import { MovieDetail, MovieList, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="title/:movieId" element={<MovieDetail />} />
      <Route path="movies/top" element={<MovieList />} />
      <Route path="movies/popular" element={<MovieList />} />
      <Route path="movies/upcoming" element={<MovieList />} />
      <Route path="search" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
