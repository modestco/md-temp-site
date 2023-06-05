import Intro from "./intro.js";
import "./App.css";
import Current from "./Current";

function App() {
  return (
    <div className="App">
      <Intro />
      <div className="current">
        <Current />
      </div>
    </div>
  );
}

export default App;
