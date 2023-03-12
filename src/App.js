import "./App.css";
import Home from "./Pages/Home/Home";

import bg from "./Assets/bg3.png";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bg}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Home />
    </div>
  );
}

export default App;
