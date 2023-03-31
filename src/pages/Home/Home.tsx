import SearchBar from "@/components/SearchBar/SearchBar";
import { MoviesNowPlaying, MoviesTopPicks } from "../../constants/index";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container px-5 py-[15px]">
      <div className="background-blur">
        <div className="ellipse-1"></div>
        <div className="ellipse-2"></div>
        <div className="ellipse-3"></div>
      </div>
      <div className="text-center font-bold text-xl mb-6">Choose Movie</div>
      <div className="mb-10">
        <SearchBar />
      </div>
      <div className="mb-7">
        <div className="mb-7">Now Playing</div>
        <div className="grid grid-cols-4 gap-[16px]">
          {MoviesNowPlaying.map((movie, idx) => (
            <Link
              to={`/book/${movie.value}`}
              key={idx}
              className="bg-transparent overflow-hidden rounded-md"
            >
              <img
                className="list-movie-poster"
                src={movie.img}
                alt="Movie Poster"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-7">
        <div className="mb-7">Top picks</div>
        <div className="grid grid-cols-4 gap-[21px]">
          {MoviesTopPicks.map((movie, idx) => (
            <Link
              to={`/book/${movie.value}`}
              key={idx}
              className="bg-transparent overflow-hidden rounded-md"
            >
              <img
                className="list-movie-poster"
                src={movie.img}
                alt="Movie Poster"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
