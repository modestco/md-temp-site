import FurryFriends from "./img/clients/furry-friends.jpg";
import KatieMoon from "./img/clients/katie-moon.jpg";
import GlowUp from "./img/clients/TheGLOWup_LOGO-gradient.png";
import MidoriHair from "./img/clients/hair-midori.jpg";
import PineGroove from "./img/clients/pine-groove.jpg";
import TicTacToe from "./img/clients/tic-tac-toes.jpg";
import StonesThrow from "./img/clients/stones-throw.jpg";

function ModestCo() {
  return (
    <div className="container-fluid">
      <h3>Recent clients</h3>
      <div className="row">
        <div className="col-3">
          <img src={FurryFriends} className="img-fluid" alt="" />
        </div>
        <div className="col-3">
          <img src={KatieMoon} className="img-fluid" alt="" />
        </div>
        <div className="col-3">
          <img src={GlowUp} className="img-fluid GlowUp" alt="" />
        </div>
        <div className="col-3">
          <img src={MidoriHair} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img src={PineGroove} className="img-fluid" alt="" />
        </div>
        <div className="col-3">
          <img src={TicTacToe} className="img-fluid" alt="" />
        </div>
        <div className="col-3">
          <img src={StonesThrow} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ModestCo;
