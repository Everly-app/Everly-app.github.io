export const ComingSoon = (props) => {
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
              <div className='row'>
                <a href=".">
                  <img className='apple-store-image' src='img/apple_store_button.svg' alt='apple store' />
                </a>
              </div>
            </div>
          </div>
          <hr className="comingsoon-hr" />
        </div>
      </div>
    </div>
  )
}
