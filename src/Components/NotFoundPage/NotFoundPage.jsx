import React from "react";
import "./NotFoundPage.scss";
import NavBar from "../NavigatorBar/NavBar";
import Footer from "../Footer/Footer";
const Homepage = () => {
  return (
    <>
      <NavBar />
        <div className="error-container">
          <h2>
            Error 404
          </h2>
        </div>
      <Footer />
    </>
  );
};

export default Homepage;
