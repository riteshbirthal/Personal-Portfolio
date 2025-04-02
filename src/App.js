import './App.css';
import Home from "./components/Home/home"
import Navbar from "./components/NavBar/navbar";
import About from './components/About/about';
import Experience from './components/Experience/experience';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">

        <video className="background-video"
          loop autoPlay muted playsInline
          src="/static/videos/back-vid.mp4" type="video/mp4"
        ></video>

        <Navbar />

        <Home />

        <About />

        <Experience />

        <Projects />

        <Skills />

        <Contact />

        <Footer />
    </div>
  );
}

export default App;
