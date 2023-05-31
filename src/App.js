import AppHeader from "./AppHeader";
import "./App.css";
import Intro from "./Intro";
import AboutMe from "./aboutme";

function App() {
  return (
    <div className="App">
      <AppHeader />

      <div class="container">
        <Intro />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
