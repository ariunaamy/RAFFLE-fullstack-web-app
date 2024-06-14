import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//components
import Home from "./pages/Home";
import Register from "./pages/Register";
import Participants from "./pages/Participants";
import PickAwinner from "./pages/PickAwinner";
import { Navbar } from "flowbite-react";

function App() {
  return (
    <div className="bg-slate-100 max-w-[600px] mx-auto px-4 pt-3 pb-6 mt-6 mb-12 rounded-lg">
      <Router>
        <h1 className="text-3xl font-bold text-center mt-12 mb-3">Quick Raffle</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/pick_a_winner" element={<PickAwinner />} />
        </Routes>
      </Router>
    </div>
  );
}

const NavBar = () => {
  return (
    <Navbar fluid rounded className="bg-transparent">
      <Navbar.Toggle />
      <Navbar.Collapse className="mx-auto pb-3 px-3 border-b-[1.3px] border-blue-600">
        <Link to="/">
          Home
        </Link>
        <Link to="/register">Register</Link>
        <Link to="/participants">Participants</Link>
        <Link to="pick_a_winner">Pick a Winner</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default App;
