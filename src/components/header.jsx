import { Link } from "react-router-dom";
import React, { useEffect } from "react";

const CircleContainer = () => {
  useEffect(() => {
    const container = document.querySelector('.circle-container');
    // Calculate the available screen area
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const circleSize = 100; // Adjust the circle size as needed

    // Calculate the number of circles based on screen area and circle size
    const circlesPerRow = Math.floor(screenWidth / circleSize);
    const rows = Math.floor(screenHeight / circleSize);
    const numCircles = circlesPerRow * rows / 5;

    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement('div');
      circle.className = `circle circle-${Math.floor(Math.random() * 3) + 3}s`;
      const size = Math.random() * 75 + 75;
      circle.style.left = `calc(${Math.random() * 100}% - ${size}px - 1px)`;
      circle.style.top = `calc(${Math.random() * 100}% - ${size}px - 1px)`;
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      container.appendChild(circle);
    }
  }, []);

  return <div className="circle-container"></div>;
};

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
            <CircleContainer />
        <div className='overlay'>
          <div className='container'>
            <div className='row fade-in'>
              <div className='col-md-5 col-sm-12 col-md-offset-0 intro-text'>
                <img className='logo-image' src={props.data ? props.data.logo : ''} alt='Merlo' />
                <img className='logo-slogan' src={props.data ? props.data.slogan : ''} alt='Real dating happens in person.' />
                <div className='apply-now-btn'>
                  <Link
                    to='/signup'
                    className='btn btn-custom btn-lg page-scroll apply-now'
                  >
                    Apply Now
                  </Link>
                </div>
                <div>
                  <img className='learn-more' src={props.data ? props.data.learn_more : ''} alt='Learn More' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
