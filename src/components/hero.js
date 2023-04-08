import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    
    <section>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Meeting With Emma</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quod, quia, quae quibusdam quidem quas voluptates
            voluptatibus quos quia.
          </p>
          <Link to="/about">
            <button className="btn">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}