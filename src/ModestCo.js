import "./ModestCo.css";

function ModestCo() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <img src="./img/clients/furry-friends.jpg" alt="Furry Friends Logo" />
        </div>
        <div className="col-3">
          <img src="./img/clients/katie-moon.jpg" alt="Katie Moon Logo" />
        </div>
        <div className="col-3">
          <img
            src="./img/clients/TheGLOWup_LOGO-gradient.jpg"
            alt="The Glow Up Logo"
          />
        </div>
        <div className="col-3">
          <img src="./img/clients/hair-midori.jpg" alt="Midori Hair Logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img src="./img/clients/pine-groove.jpg" alt="Pine Groove Logo" />
        </div>
        <div className="col-3">
          <img
            src="./img/clients/tic-tac-toe.jpg"
            alt="Tic Tac Toe Physio Logo"
          />
        </div>
        <div className="col-3">
          <img
            src="./img/clients/stones-throw.jpg"
            alt="Stones Throw Landscaping Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default ModestCo;
