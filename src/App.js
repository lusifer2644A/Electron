import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Complaint from "./components/contact/Complaint";
import Footer from "./components/footer/Footer";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Dealership from "./components/dealership/Dealership";
import Distributor from "./components/distributor/Distributor";
import Products from "./components/products/Products";

const App = () => {
    const home = (
        <>
            <Navbar home={false} />
            <Landing />
        </>
    );
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={home} />
                </Routes>
                <Navbar home={true} />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/complaint" element={<Complaint />} />
                    <Route path="/dealership" element={<Dealership />} />
                    <Route path="/distributors" element={<Distributor />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
