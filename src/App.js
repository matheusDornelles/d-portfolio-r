
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/About';
import ContactMe from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        
        <ContactMe></ContactMe>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
