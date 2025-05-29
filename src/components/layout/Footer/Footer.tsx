import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/assets/images/logo.svg" alt="Logo" className="footer__logo" />
            <p className="footer__description">
              Create beautiful websites with our intuitive platform. No coding required.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Twitter">
                {/* Need social icons */}
                <img src="/assets/images/icon-twitter.svg" alt="Twitter" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src="/assets/images/icon-facebook.svg" alt="Facebook" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="/assets/images/icon-instagram.svg" alt="Instagram" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src="/assets/images/icon-linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__links-column">
              <h3>Product</h3>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#templates">Templates</a></li>
                <li><a href="#updates">Updates</a></li>
              </ul>
            </div>

            <div className="footer__links-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#press">Press</a></li>
              </ul>
            </div>

            <div className="footer__links-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#guides">Guides</a></li>
                <li><a href="#api">API</a></li>
                <li><a href="#status">Status</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Your Company. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 