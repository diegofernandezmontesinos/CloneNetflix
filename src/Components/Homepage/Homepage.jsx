import React, {useState} from "react";
import Footer from "../Footer/Footer";
import "./Homepage.scss";
import NavBar from "../NavigatorBar/NavBar";
import User from "../user/User";

const Homepage = () => {
  const [userConnected, setUserConnected] = useState(true);
  return (
    <>
      <NavBar />
      {!userConnected ? (
        <div className="homepage">
          <div className="main">
            <div className="area">
              <h1>
                Unlimited movies, TV <br />
                shows, and more.
              </h1>
              <br />
              <h3>Watch anywhere. Cancel anytime</h3>
              <br />
              <br />
              <div className="search">
                <input type="text" className="box" placeholder="Email" />
                <span className="try">Try 30 days</span>
              </div>
              <h4>
                Ready to watch? Enter your email to create or access your
                account.
              </h4>
            </div>
          </div>
          <div className="container1">
            <div className="text">
              <h1>Enjoy on your TV</h1>
              <p>
                Watch on Smart Tvs, Playstation, Xbox, <br />
                Chromecast, Apple TV and more.
              </p>
            </div>
            <div className="image">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"></img>
            </div>
          </div>
          <div className="container1">
            <div className="image">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png"></img>
            </div>
            <div className="text">
              <h1>Download your shows to watch on the go</h1>
              <p>
                Save your data and watch all your favorites offline <br />
                Chromecast, Apple TV and more.
              </p>
            </div>
          </div>
          <div className="container1">
            <div className="text">
              <h1>Watch everywhere</h1>
            </div>
            <div className="image">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"></img>
            </div>
          </div>
          <div className="question">
            <h1>Frequently Asked Questions</h1>
            <div className="quest">
              <div className="textbox"> What is Netflix?</div>
            </div>
            <div className="quest">
              <div className="textbox"> Where can I watch Netflix?</div>
            </div>
            <div className="quest">
              <div className="textbox">What can I do on Netflix?</div>
            </div>
            <div className="search1">
              <input type="text" className="box1" placeholder="Email"></input>
              <span className="try1">Try 30 days free</span>
            </div>
            <h4>
              Ready to watch? Enter your Email to create or access your account.
            </h4>
          </div>
        </div>
      ) : (
        <User />
      )}
      <Footer />
    </>
  );
};

export default Homepage;
