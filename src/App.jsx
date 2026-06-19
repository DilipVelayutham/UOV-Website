import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Gallery from "./pages/Gallery";
import Trustees from "./pages/Trustees";
import Contact from "./pages/Contact";
import Membership from "./pages/Membership";
import Donate from "./pages/Donate";

import RootsOfUOV from "./pages/gallery collections/RootsOfUOV";

import Prabhakaran from "./pages/trustees/prabhakaran";
import Seethalakshmi from "./pages/trustees/Seethalakshmi";
import Dilaludin from "./pages/trustees/Dilaludin";
import Dilip from "./pages/trustees/Dilip";
import DilipVelayutham from "./pages/trustees/Dilip";
import Aravindh from "./pages/trustees/Aravindh";
import Sanjay from "./pages/trustees/Sanjay";
import Lathika from "./pages/trustees/Lathika";
import Mani from "./pages/trustees/Mani";
import Brahmani from "./pages/trustees/Brahmani";
import Murali from "./pages/trustees/Murali";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/trustees" element={<Trustees />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/donate" element= {<Donate />} />

        <Route path="/gallery/roots-of-uov" element={<RootsOfUOV />} />

        <Route path="/trustees/prabhakaran" element={<Prabhakaran />} />
        <Route path="/trustees/seetha-lakshmi" element={<Seethalakshmi />} />
        <Route path="/trustees/dilaludin" element={<Dilaludin />} />
        <Route path="/trustees/dilip-velayutham" element={<DilipVelayutham />} />
        <Route path="/trustees/aravindh" element={<Aravindh />} />
        <Route path="/trustees/sanjay" element={<Sanjay />} />
        <Route path="/trustees/lathika" element={<Lathika />} />
        <Route path="/trustees/mani" element={<Mani />} />
        <Route path="/trustees/bramani" element={<Brahmani />} />
        <Route path="/trustees/murali" element={<Murali />} />
      </Routes>

      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
