import "./App.css";
import Intro from "./IntroParts";
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
