import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<DefaultPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const DefaultPage = () => {
  return (
    <div>
      <h2>404 Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default App;
