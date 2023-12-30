import React from "react";
import "./NotFoundPage.scss";
import NavBar from "../NavigatorBar/NavBar";
import Footer from "../Footer/Footer";
const Homepage = () => {
  return (
    <>
      <NavBar />
        <div className="error-container">
            Error 404
        </div>
      <Footer />
    </>
  );
};

export default Homepage;
