import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Singlepage from "./pages/Singlepage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/singleshow/:id" element={<Singlepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
