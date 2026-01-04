import mailingbg from "./assets/bg-mailing/mailing-list-bg-image.jpg";

import facebookIcon from "./assets/svg/facebook-svgrepo-com.svg";
import googleIcon from "./assets/svg/google-svgrepo-com.svg";
import youtubeIcon from "./assets/svg/youtube-icon-logo-svgrepo-com.svg";

function Mailinglist() {
  return (
    <>
      {/* MAILING LIST STRIP */}
      <section className="discography-strip">
        <h2 className="discography-title">Mailing List</h2>
      </section>

      {/* MAILING LIST SECTION */}
      <section className="mailing-section">
        {/* BACKGROUND IMAGE */}
        <img
          src={mailingbg}
          alt="Nirvana mailing list background"
          className="mailing-bg"
        />

        {/* DARK OVERLAY */}
        <div className="mailing-overlay"></div>

        {/* CONTENT */}
        <div className="mailing-content">
          {/* INNER WRAPPER (for vertical positioning control) */}
          <div className="mailing-inner">
            {/* SOCIAL BUTTONS */}
            <div className="mailing-socials">
              <button className="social-btn facebook">
                <div className="icon-wrapper">
                <img src={facebookIcon} alt="Facebook" />
                </div>
                <span>FACEBOOK</span>
              </button>

              <button className="social-btn google">
                <div className="icon-wrapper">
                <img src={googleIcon} alt="Google" />
                </div>
                <span>GOOGLE</span>
              </button>

              <button className="social-btn youtube">   
                <div className="icon-wrapper">
                <img src={youtubeIcon} alt="YouTube" />
                </div>
                <span>YOUTUBE</span>
              </button>
            </div>

            {/* FORM */}
            <form className="mailing-form">
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="Email Address" />
              </div>

              <div className="field">
                <label>* Choose Country</label>
                <div className="custom-select">
                  <select>
                    <option>Select...</option>
                    <option>United States</option>
                    <option>India</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>

              <p className="required-note">* REQUIRED FIELDS</p>

              <label className="checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Get Nirvana Email Updates
              </label>

              <p className="legal-text">
                Emails will be sent by or on behalf of Universal Music Group, 2220
                Colorado Avenue, Santa Monica, CA 90404. (310) 865-4000. You may
                withdraw your consent at any time. Privacy Policy / Do Not Sell
                My Personal Information
              </p>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mailinglist;
