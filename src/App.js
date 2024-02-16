
import './App.css';
import CarouselLight from './components/carousel/CarouselLight';
import CarouselSlide from './components/carousel/CarouselSlide';
import SimpleSlider from './components/carousel/SlickCarousel';

function App() {
  return (
    <div className="App">
      <div className='slide1'>
           <CarouselLight/>
      </div>
      <div className='slide2'>
           <CarouselSlide />
      </div>
      <div className='slide3'>
          <SimpleSlider />
      </div>    
    </div>
  );
}

export default App;
