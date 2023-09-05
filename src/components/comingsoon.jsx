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
            <div className='comingsoon-text'>
              <h2>{props.data ? props.data.quote : 'loading...'}</h2>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='apple-store'>
                <h2>Coming Soon!</h2>
                <button>
                    <i className="fa fa-apple"></i>
                    &nbsp;&nbsp;Apple Store</button>
            </div>
          </div>
          <hr className="comingsoon-hr" />
        </div>
      </div>
    </div>
  )
}
