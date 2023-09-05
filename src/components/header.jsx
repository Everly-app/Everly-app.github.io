import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";

export const Header = (props) => {
  let config = {
    num: [20, 30],
    rps: 10,
    radius: [20, 30],
    life: [1, 15],
    theta: [-4000, -4000],
    v: [0, 0],
    alpha: [100, 100],
    scale: [1, 1],
    position: "all", // all or center or {x:1,y:1,width:100,height:100}
    color: "radial-gradient(#ffffff00, #ffffffff)",
    cross: "dead", // cross or bround
    random: null,  // or null,
    g: 0,    // gravity
    // f: [-0.1, 0.1], // force
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.arc(particle.p.x, particle.p.y, particle.radius * 2, Math.PI * 2, false);
        const my_gradient = ctx.createRadialGradient(
          particle.p.x, particle.p.y, particle.radius * 0.5,
          particle.p.x, particle.p.y, particle.radius);
        my_gradient.addColorStop(0, "#ffff0008");
        my_gradient.addColorStop(1, "#ffff0005");
        ctx.fillStyle = my_gradient;
        ctx.fill();
        ctx.closePath();
    }
  };
  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="custom" config={config} bg={{zIndex: 0, position:"absolute", top:0}} />
        <div className='overlay'>
          <div className='container'>
          
            <div className='row fade-in-image'>
              <div className='col-md-5 col-sm-12 col-md-offset-0 intro-text'>
                <div>
                  <img className='logo-image' src={props.data ? props.data.img : ''} alt='' />{' '}
                </div>
                <Link
                  to='/signup'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Apply Now
                </Link>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
