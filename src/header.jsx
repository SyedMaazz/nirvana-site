import bgVideo from "./assets/videos/nirvana-bg.mp4";
import nirvanaLogo from "./assets/logo/nirvana_logo.png";

function Header() {
  return (
    <header className="header">
      {/* Background Video */}
      <video
        className="video-bg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* CENTER LOGO */}
      <div className="center-logo">
        <img src={nirvanaLogo} alt="Nirvana" />
      </div>

      {/* NAVBAR */}
      <nav className="nav-bar">
        <ul>
          <li className="nav-left">
            <img src={nirvanaLogo} alt="Nirvana Logo" className="nav-logo" />
          </li>

          <li className="nav-right">
            <span>MUSIC</span>
            <span>VIDEOS</span>
            <span>MERCH</span>
            <span>MAILING LIST</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
