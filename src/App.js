import './App.css';
import Home from "./components/Home/home"
import Navbar from "./components/NavBar/navbar";
import About from './components/About/about';
import Experience from './components/Experience/experience';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

        <video className="background-video"
          loop autoPlay muted playsInline
          src={`${process.env.PUBLIC_URL}/static/videos/back-vid.mp4`} type="video/mp4"
        ></video>

        <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
