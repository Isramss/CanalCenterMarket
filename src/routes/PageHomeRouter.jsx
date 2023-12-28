import React from "react";
function PageHome() {
  return (
    <>
      <div className="test">
        <h1 className="textOne">
          Canal Street Market is a carefully curated retail market, food hall &
          community space open year-round at 265 Canal Street.
          <a href=""> Support Small Business</a> this weekend!
        </h1>
      </div>
      <div className="carousel">
        <img
          className="img_home "
          src="https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg?auto=compress,format"
          alt="img"
        />
      </div>
    </>
  );
}

export default PageHome;
