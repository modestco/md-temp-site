import "./AppHeader.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AppHeader() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary text-center">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=" fa-duotone fa-burger"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="www.jenluchka.com"
              >
                <span className="fa-duotone fa-house-heart" /> HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.jenluchka.com">
                <span className="fa-duotone fa-address-card" /> ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.jenluchka.com">
                <span className="fa-duotone fa-square-kanban" /> PROJECTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppHeader;
