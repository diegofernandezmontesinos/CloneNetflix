import React from "react";
import Footer from "../Footer/Footer";
import SeriesUser from "./Series/SeriesUser";
import request from "../../API/request";
import NavBar from "../NavigatorBar/NavBar";
import './Serie.css';

const Serie = () => {
  return (
    <>
      <NavBar />
      <div className="serieContainer">
        <SeriesUser
          title="NETFLIX ORIGINALS"
          fetchURL={request.fetchNetflixOriginals}
          isLargeRow
        />
        <SeriesUser
          title="Top Rated"
          fetchURL={request.fetchTrending}
          isLargeRow
        />
        <SeriesUser
          title="Action Movies"
          fetchURL={request.fetchActionMoviews}
          isLargeRow
        />
        <SeriesUser
          title="Comedy Movies"
          fetchURL={request.fetchComedyMoviews}
          isLargeRow
        />
        <SeriesUser
          title="Horror Movies"
          fetchURL={request.fetchHorrorMoviews}
          isLargeRow
        />
        <SeriesUser
          title="Romance Movies"
          fetchURL={request.fetchRomanceMoviews}
          isLargeRow
        />
        <SeriesUser
          title="Documentaries"
          fetchURL={request.fetchDocumentaries}
          isLargeRow
        />
      </div>
      <Footer />
    </>
  );
};

export default Serie;
