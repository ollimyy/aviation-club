import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import AircraftList from "./components/AircraftList";


// TODO: add the routes after components have been made
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aircraft" element={<AircraftList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;