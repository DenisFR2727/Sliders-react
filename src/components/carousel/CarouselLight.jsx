import React, { useState } from 'react'
import useApiFotos from '../../api/apiFotos';

import "../style.css";

function CarouselLight() {
    const [slide, setSlide] = useState(0);
    const { fotos } = useApiFotos();

const leftSlide = () => {
   setSlide((prevIndex) => 
       prevIndex === 0 ? fotos.length - 1 : prevIndex - 1 
   )
};
const rightSlide = () => {
   setSlide((prevIndex) => 
      prevIndex === fotos.length - 1 ? 0 : prevIndex + 1
   )
};
  return (
    <div className='carousel'>
        <button className="carousel__btn carousel__btn--prev" onClick={leftSlide}>Left</button>
        {
          fotos.map((foto, id) => ( 
             <div key={foto.id}>
                 <img key={foto.id} className={slide === id ? 'slide active' : 'slide slide-hidden'} src={foto.url} alt="" />
             </div> 
          ))
        }
        <button className="carousel__btn carousel__btn--next" onClick={rightSlide}>Right</button>
        </div>
  );
};

export default CarouselLight;
