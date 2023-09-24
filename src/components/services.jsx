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
          swipeable={true}
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
          itemClass="my-carousel"
        >
          {props.data
            ? props.data.map((d, i) => (
              <img key={`service-image-${i}`} src={d.img} alt='' />
              ))
            : <div key='loading'>loading</div>}
        </Carousel>
        ) : (
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-4 col-md-offset-0'>
                    <img className='service-image' src={d.img} alt='' />
                  </div>
                ))
              : 'loading'}
          </div>
        )}
      </div>
    </div>
  )
}
