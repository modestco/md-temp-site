import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="navbar">
          <div className="container">
            <span className="Nav-bar">
              <a class="btn btn-primary" href="#" role="button">
                ABOUT
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
        </nav>
      </header>
    </div>
  );
}

export default App;
