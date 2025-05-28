import React from 'react';
import './Hero.css';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Create beautiful websites with ease
          </h1>
          <p className="hero__subtitle">
            Build stunning websites without writing a single line of code.
            Our intuitive platform makes web design accessible to everyone.
          </p>
          <div className="hero__cta">
            <Button>Start Free Trial</Button>
            <Button variant="secondary">Watch Demo</Button>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">10k+</span>
              <span className="hero__stat-label">Active Users</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">500+</span>
              <span className="hero__stat-label">Templates</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">24/7</span>
              <span className="hero__stat-label">Support</span>
            </div>
          </div>
        </div>
        <div className="hero__image">
          {/* Need hero image: hero-dashboard.png */}
          <img src="/assets/images/hero-dashboard.png" alt="Dashboard Preview" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 