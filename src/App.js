import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import AircraftList from "./components/AircraftList";
import EventsPage from "./components/EventsPage";
import BookingForm from "./components/BookingForm";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from 'date-fns/locale/fi'



function App() {

  const pages = [
    { text: 'Home', path: '/' },
    { text: 'Make a booking', path: '/new-booking' },
    { text: 'Aircraft', path: '/aircraft' },
    { text: 'Events', path: '/events' },
  ];

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns} utils={DateFnsUtils} adapterLocale={fiLocale}>
      <BrowserRouter>
        <Navigation pages={pages} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aircraft" element={<AircraftList />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/new-booking" element={<BookingForm />} />
        </Routes>
      </BrowserRouter>
      </LocalizationProvider>
    </div>
  );
}

export default App;