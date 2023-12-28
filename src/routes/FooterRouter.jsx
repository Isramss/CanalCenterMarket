import React from "react";

function FooterRouter() {
  return (
    <>
      <footer>
        <div className="Box1">
          <h3 className="TitleFooter">Interested in becoming a vendor?</h3>
          {/* ce btn affiche/ouvre une page independante quiu s'affiche sur la page elle meme. */}
          <button className="Btn_page">click here</button>
        </div>
        <div className="Box2">
          <a className="Email" href="mailto:info@canalstreetmarket">
            <img className="pen" src="src/assets/pen.png" alt="pencil" />
            <h4>Email us</h4>
          </a>
          <a
            className="Facebook"
            href="https://www.facebook.com/canalstreetmarket">
            <img className="icon_fb" src="src/assets/f_icon.svg" alt="f" />
            <h4>
              Follow us <br />
              on facebook
            </h4>
          </a>
          <a
            className="Instagram"
            href="https://www.instagram.com/canalstreetmarket/">
            <img
              className="icon_insta"
              src="src/assets/insta_icon.svg"
              alt="logo instagram"
            />
            <h4>
              Follow us <br />
              on instagram
            </h4>
          </a>
        </div>
        <div className="Box3">
          <h2 className="title_form">
            Stay up to date <br />
            with our newsletter
          </h2>
          <form className="form_" action="">
            <input type="text" placeholder="Email" />
            <input type="submit" value={"→"} className="arrow_form" />
          </form>
        </div>
      </footer>
    </>
  );
}

export default FooterRouter;
