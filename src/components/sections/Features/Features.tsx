import React from 'react';
import './Features.css';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: '/assets/images/icon-drag-drop.svg',
    title: 'Drag & Drop Builder',
    description: 'Create your website by simply dragging and dropping elements where you want them.'
  },
  {
    icon: '/assets/images/icon-templates.svg',
    title: 'Beautiful Templates',
    description: 'Choose from hundreds of professionally designed templates to get started quickly.'
  },
  {
    icon: '/assets/images/icon-responsive.svg',
    title: 'Fully Responsive',
    description: 'Your website will look great on any device, from desktop to mobile.'
  },
  {
    icon: '/assets/images/icon-customize.svg',
    title: 'Easy Customization',
    description: 'Customize colors, fonts, and layouts to match your brand identity.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features__header">
          <h2 className="features__title">Powerful Features</h2>
          <p className="features__subtitle">
            Everything you need to create a stunning website
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card__icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 