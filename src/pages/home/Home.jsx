import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies_ } from "../../utils/redux/store";
import SearchBar from "../../components/search-bar/SearchBar";
import MetaTags from "../../seo/MetaTags";
import "./Home.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const MOVIES = useSelector((state) => state.movies_.movie_list);
  const status = useSelector((state) => state.movies_.status);
  const error = useSelector((state) => state.movies_.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies_());
    }
  }, [status, dispatch]);

  if (status === "loading...") {
    return <p>{status}</p>;
  }

  if (status === "failed") {
    return <p>Failed to fetch data: {error}</p>;
  }

  return (
    <main className="home-main">
      <MetaTags
        title="Home page"
        description="Search and save your favorites latest movies"
      />
      <h1>Latest Movies</h1>
      <div className="search-bar__container">
        <SearchBar movies={MOVIES} />
      </div>
    </main>
  );
}
