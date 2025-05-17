import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';  // Navbar bileşenini import ediyoruz
import HomePage from './HomePage/HomePage';     // HomePage bileşenini import ediyoruz
import Contact from './Contact/Contact';
import Footer from "./Footer/Footer";
import Projects from "./Projects/Project";
import Services from "./Services/Services";
import About from "./About/About";


function App() {
  return (
    <div className="App">
      <Navbar />  {/* Navbar bileşenini kullanıyoruz */}
      <HomePage />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
