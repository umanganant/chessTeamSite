import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>} />
        <Route path="/team" element={<h1>Meet the Team</h1>} />
        <Route path="/achievements" element={<h1>Achievements</h1>} />
        <Route path="/events/upcoming" element={<h1>Upcoming Events</h1>} />
        <Route path="/events/past" element={<h1>Past Events</h1>} />
        <Route path="/playground" element={<h1>Chess Playground</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
