import useApiFotos from '../../api/apiFotos';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './coureselslide.css'
function SimpleSlider() {
    const { fotos } = useApiFotos();

    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {fotos.map((photo,_) => (
                <SwiperSlide key={photo.id}>
                    <img style={{width:'400px'}} src={photo.url} alt="" />
                </SwiperSlide>
        ))} 
      </Swiper>
       );  
}
export default SimpleSlider;
