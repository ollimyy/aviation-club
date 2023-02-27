import AircraftBookingForm from "./components/AircraftBookingForm";
import AircraftList from "./components/AircraftList";
import BookingList from "./components/BookingList";

function App() {
  return (
    <div className="App">
      <h1>Helsinki East Aviation Club</h1>
      <AircraftList />
      <AircraftBookingForm />
      <BookingList />
    </div>
  );
}

export default App;
