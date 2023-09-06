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
      circle.style.left = `${Math.random() * 100}%`;
      circle.style.top = `${Math.random() * 100}%`;
      const size = Math.random() * 75 + 75;
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
