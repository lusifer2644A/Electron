import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Complaint from "./components/contact/Complaint";
import Footer from "./components/footer/Footer";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Dealership from "./components/dealership/dealership";
import Products from "./components/products/Product";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/complaint" element={<Complaint />} />
                    <Route path="/deal" element={<Dealership />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
