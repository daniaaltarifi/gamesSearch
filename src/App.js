import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from "./Components/Games";
import GamesDetails from "./Components/GamesDetails";
function App() {
  return (
    <div className="App">
  
      <Router>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/details/:title" element={<GamesDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
