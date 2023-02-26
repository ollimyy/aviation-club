import AircraftBookingForm from "./components/AircraftBookingForm";
import AircraftList from "./components/AircraftList";

function App() {
  return (
    <div className="App">
      <h1>Helsinki East Aviation Club</h1>
      <AircraftList />
      <AircraftBookingForm />
    </div>
  );
}

export default App;
