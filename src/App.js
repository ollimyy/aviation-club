import { BrowserRouter, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";


// TODO: add the routes after components have been made
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;