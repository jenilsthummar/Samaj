import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/HeroSection';
import ImgOverlayExample from './components/Event';
import BasicExample from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
   <Header/>
   <Hero/>
   <ImgOverlayExample/>
   <BasicExample/>
   <Gallery/>
   </>
  );
}

export default App;
