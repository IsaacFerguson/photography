import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <a className="navbar-brand" id="home" href="/">
          Isaac Ferguson
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/overview">
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/personal">
                Personal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
