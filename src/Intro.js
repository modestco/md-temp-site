import JenHeadshot from "./Jen-headshot-option3.svg";

function introparts() {
  return (
    <div className="container text-left intro-parts">
      <div className="row">
        <div className="col-sm-6">
          <h2 className="heading">Jen Luchka</h2>
          <h2 className="sub">Front-End Developer</h2>
          <h3>I pair well with:</h3>
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <div className="fa-brands fa-react"></div>
                <h6> React </h6>
              </div>
              <div className="col-4">
                <div className="fa-brands fa-bootstrap"></div>
                <h6> Bootstrap </h6>
              </div>
              <div className="col-4">
                <div className="fa-brands fa-apple"></div>
                <h6>Mac OS</h6>
              </div>
            </div>
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
