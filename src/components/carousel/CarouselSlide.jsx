import { useState,} from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import "./coureselslide.css";
import useApiFotos from '../../api/apiFotos';

const PAGE_WIDTH = 450;

function CarouselSlide() {
   const [offset, setOffset] = useState(0)
   const { fotos } = useApiFotos();

   const handleLeftArrowClick = () => {
  
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH
      
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
    
  }
  const handleRightArrowClick = () => {
   
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (slides.length - 1));
      if (newOffset < maxOffset) {
        return 0;
      }
      console.log(newOffset, maxOffset)
      return Math.max(newOffset, maxOffset)
    })
    
  }
   
   const slides = fotos.map((foto, id) => {
    return (
        <div key={foto.id}>
            <img src={foto.url} alt="" />
        </div>
    );
 });

  return (
    <div className='main-container'>
        <FaChevronLeft className="arrow" onClick={handleLeftArrowClick} />
        <div className='window'>
        <div
          className="all-pages-container"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {slides}
        </div>
        </div>
        <FaChevronRight className="arrow" onClick={handleRightArrowClick} />
    </div>
  )
}
export default CarouselSlide;