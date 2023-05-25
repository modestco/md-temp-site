import AppHeader from "./AppHeader";
import "./App.css";
import Headshot from "./Headshot";
import Intro from "./Intro";
import bootstrap from "bootstrap";

const bootstrap = require("bootstrap");

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Headshot />
      <div class="container">
        <Intro />
      </div>
    </div>
  );
}

export default App;
