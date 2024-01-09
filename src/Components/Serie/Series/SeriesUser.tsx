import React, { useState, useEffect } from "react";
import axios from "../../../API/axios";
import "./SeriesUser.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const SeriesUser = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //     axios
  //     .get('/api.themoviedb.org/3')
  //     .then((response) => {setMovies(response.data)})
  //     .catch()

  // }, [fetchURL]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* row__poster */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default SeriesUser;
