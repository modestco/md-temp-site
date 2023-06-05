import Intro from "./intro";
import "./App.css";
import Current from "./Current";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Intro />
        <div className="current">
          <Current />
        </div>
      </div>
    </div>
  );
}

export default App;
