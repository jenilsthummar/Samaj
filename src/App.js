import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/HeroSection';
import ImgOverlayExample from './components/Event';
import BasicExample from './components/admin';
import MyGallery from './components/Gallery';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <>
        <div className='main' bg='dark'>
          <Header/>
          <Hero/>
          <ImgOverlayExample/>
          <BasicExample/>
          <MyGallery/>
          <ContactForm/>
          <Footer/>
         
        </div>    
    </>
  );
}

export default App;
