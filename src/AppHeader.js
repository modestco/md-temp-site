import logo from "./logo.svg";
import ".css/App.css";

function AppHeader() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container">
        <span className="navbar">
          <a class="btn btn-primary" href="#" role="button">
            About
          </a>
          <a class="btn btn-primary" href="#" role="button">
            Current Projects
          </a>
          <a class="btn btn-primary" href="#" role="button">
            Previous Work
          </a>
          <a class="btn btn-primary" href="#" role="button">
            Contact Me
          </a>
        </span>
      </div>
    </header>
  );
}

export default AppHeader;
