import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/HeroSection';
import ImgOverlayExample from './components/Event';
import BasicExample from './components/Contact';
import LightboxExample from './components/Gallery';
import GlobalStyle from './components/Fontstyle';
import Footer from './components/Footer';


function App() {
  return (
    <>
        <div className='main'>
          <Header/>
          <Hero/>
          <ImgOverlayExample/>
          <BasicExample/>
          <LightboxExample/>
          <Footer/>
          <GlobalStyle />
        </div>    
    </>
  );
}

export default App;
