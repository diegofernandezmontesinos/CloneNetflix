import React from "react";
import NavBar from "../NavigatorBar/NavBar";
import Footer from "../Footer/Footer";

const User = () => {
  return (
    <div className="main-wrapper">
      <NavBar />
      <div className="ucontainer-main">
        <div className="ucontainer">
          <div className="one">
            <figure className="back">
              <h3>Diego</h3>
              <i className="fas fa-sign-in-alt"></i>
            </figure>
            <img
              src="https://mir-s3-cdn-cd.behance.net/prokect_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
              alt=""
            ></img>
          </div>
          <div className="two">
            <figure className="back">
              <h3>Diego 2</h3>
              <i className="fas fa-sign-in-alt"></i>
            </figure>
            <img
              src="https://mir-s3-cdn-cd.behance.net/prokect_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
              alt=""
            ></img>
          </div>
          <div className="three">
            <figure className="back">
              <h3>Diego 3</h3>
              <i className="fas fa-sign-in-alt"></i>
            </figure>
            <img
              src="https://mir-s3-cdn-cd.behance.net/prokect_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default User;
