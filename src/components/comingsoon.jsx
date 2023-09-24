import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

export const ComingSoon = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <div id='comingsoon'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8'>
            <div className='comingsoon-text'>
              <h3>{props.data ? props.data.slogan : 'loading...'}</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8'>
            <img className='comingsoon-quote-icon' src={props.data ? props.data.quote_icon : ''} alt='' />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8'>
            <div className='comingsoon-text'>
              <h2>{props.data ? props.data.quote : 'loading...'}</h2>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='apple-store'>
              <div className='row'>
                <img className='apple-store-coming-soon' src='img/coming_soon.svg' alt='apple store' />
              </div>
              {isMobile ?
                <div className='row'>
                  <Link to="/signup">
                    <img className='apply-now-btn' src='img/apply-now-mobile.svg' alt='Apply Now' />
                  </Link>
                </div>
                :
                <div className='row'>
                  <Link to="/signup">
                    <img className='apply-now-btn' src='img/apply-now-desktop.svg' alt='Apply Now' />
                  </Link>
                </div>
              }
            </div>
          </div>
          <hr className="comingsoon-hr" />
        </div>
      </div>
    </div>
  )
}
