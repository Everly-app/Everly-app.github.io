// import ParticlesBg from "particles-bg";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        {/* <ParticlesBg type="circle" color="#ffffffff" bg={{zIndex: 0, position:"absolute", top:0}} /> */}
        <div className='overlay'>
          <div className='container'>
          
            <div className='row fade-in-image'>
              <div className='col-md-5 col-sm-12 col-md-offset-0 intro-text'>
                <div>
                  <img className='logo-image' src={props.data ? props.data.img : ''} alt='' />{' '}
                </div>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Apply Now
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
