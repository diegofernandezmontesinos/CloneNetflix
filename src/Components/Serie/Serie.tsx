import React from 'react';
import Footer from "../Footer/Footer";
import SeriesUser from "./Series/SeriesUser";
import request from '../../API/request';

const Serie = () => {
  return (
    <>
      <div className="row">
        <SeriesUser title="Top Rated" fetchURL={request.fetchTrending} />
        <SeriesUser title="Action Movies" fetchURL={request.fetchActionMoviews} />
        <SeriesUser title="Comedy Movies" fetchURL={request.fetchComedyMoviews} />
        <SeriesUser title="Horror Movies" fetchURL={request.fetchHorrorMoviews} />
        <SeriesUser title="Romance Movies" fetchURL={request.fetchRomanceMoviews} />
        <SeriesUser title="Docomentaries" fetchURL={request.fetchDocumentaries} />
        <Footer />
      </div>
    </>
  );
};

export default Serie;
