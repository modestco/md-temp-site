import JenHeadshot from "./Jen-headshot-option3.svg";
import logo from "./logo.svg";

function introparts() {
  return (
    <div className="container text-left">
      <div className="row">
        <div className="col-sm-6">
          <img src={logo} className="AppLogo img-fluid" />
          <div className="container-fluid">
            <span className="fa-brands fa-canadian-maple-leaf"></span> Proud
            Canadian <br />
            <span className="fa-brands fa-canadian-maple-leaf"></span>{" "}
            Passionate Front-End Developer <br />
            <span className="fa-brands fa-canadian-maple-leaf"></span>{" "}
            Accomplished Graphic Designer
          </div>
        </div>
        <div className="col-sm-6">
          <div>
            <img
              src={JenHeadshot}
              className="Jen-headshot img-fluid"
              alt="JenLuchka headshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default introparts;
