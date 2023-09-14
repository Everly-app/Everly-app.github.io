import { useMediaQuery } from 'react-responsive';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const Services = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        {isMobile ? (
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3500}
          keyBoardControl={true}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          <img src={'img/services/pick_a_restaurant.svg'} alt='' />
          <img src={'img/services/skip_the_messaging.svg'} alt='' />
          <img src={'img/services/go_on_a_date.svg'} alt='' />
        </Carousel>
        ) : (
          <div className='row-fluid'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-4'>
                    {' '}
                    <div>
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        )}
      </div>
    </div>
  )
}
