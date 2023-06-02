import AppHeader from "./AppHeader";
import "./App.css";
import AboutMe from "./aboutme";
import Intro from "./intro";

function App() {
  return (
    <div className="App">
      <AppHeader />

      <div className="container">
        <Intro />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
