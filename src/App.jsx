import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import VenueDetails from "./pages/VenueDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/api/venue/:id" element={<VenueDetails />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
