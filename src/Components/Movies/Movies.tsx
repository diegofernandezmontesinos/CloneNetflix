import React from "react";
import Footer from "../Footer/Footer";
import MoviesMap from "./MoviesMap/MoviesMap";
import request from "../../API/request";
import NavBar from "../NavigatorBar/NavBar";
import './Movies.css';

const Movies = () => {
  return (
    <>
      <NavBar />
      <div className="movieContainer">
        <MoviesMap
          title="NETFLIX ORIGINALS"
          fetchURL={request.fetchNetflixOriginals}
          isLargeRow
        />
        <MoviesMap
          title="Top Rated"
          fetchURL={request.fetchTrending}
          isLargeRow
        />
        <MoviesMap
          title="Action Movies"
          fetchURL={request.fetchActionMoviews}
          isLargeRow
        />
        <MoviesMap
          title="Comedy Movies"
          fetchURL={request.fetchComedyMoviews}
          isLargeRow
        />
        <MoviesMap
          title="Horror Movies"
          fetchURL={request.fetchHorrorMoviews}
          isLargeRow
        />
        <MoviesMap
          title="Romance Movies"
          fetchURL={request.fetchRomanceMoviews}
          isLargeRow
        />
        <MoviesMap
          title="Documentaries"
          fetchURL={request.fetchDocumentaries}
          isLargeRow
        />
      </div>
      <Footer />
    </>
  );
};

export default Movies;
