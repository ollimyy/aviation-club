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

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#8B3A3A",
      },
      secondary: {
        main: "#27632E ",
      },
      background: {
        default: "#f2f2f2",
      },
    },
    typography: {
      fontFamily: "'Source Sans Pro'"
    }
  })

  const pages = [
    { text: 'Home', path: '/' },
    { text: 'Make a booking', path: '/new-booking' },
    { text: 'Aircraft', path: '/aircraft' },
    { text: 'Events', path: '/events' },
  ];

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns} utils={DateFnsUtils} adapterLocale={fiLocale}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <BrowserRouter>
        <Navigation pages={pages} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aircraft" element={<AircraftList />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/new-booking" element={<BookingForm />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;