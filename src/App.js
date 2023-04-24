import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import AircraftList from "./components/AircraftList";
import EventsPage from "./components/EventsPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aircraft" element={<AircraftList />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;