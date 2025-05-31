import React from 'react';
import './Footer.css';
import footerLogo from '../../../assets/footer_logo.png';
import { CustomInput } from '../../ui/CustomInput/CustomInput';

export const Footer: React.FC = () => {
  return (
    <footer
      className="footer"
    >
      <div className='footer__container'>
        <div className="footer__main">
          <img src={footerLogo} alt="Slite Logo" className="footer__logo" />
          <div className="footer__columns">
            <div className="footer__col">
              <p>What it's for</p>
              <ul>
                <li>Knowledge base</li>
                <li>Working remotely</li>
                <li>Fix remote meetings</li>
                <li>Onboarding remotely</li>
                <li>Build human connection</li>
                <li>Handbooks</li>
              </ul>
            </div>
            <div className="footer__col">
              <p>How it works</p>
              <ul>
                <li>Features</li>
                <li>Integrations</li>
                <li>Pricing</li>
                <li>What's new</li>
                <li>Help center</li>
                <li>Contact support</li>
              </ul>
            </div>
            <div className="footer__col">
              <p>Resources</p>
              <ul>
                <li>Templates</li>
                <li>Learn</li>
                <li>Blog</li>
                <li>Startup Bibles</li>
                <li>Remote handbook</li>
                <li>Management handbook</li>
                <li>Download apps</li>
                <li>Chrome extension</li>
              </ul>
            </div>
            <div className="footer__col">
              <p>Slite</p>
              <ul>
                <li>About us</li>
                <li>Find us on Twitter</li>
                <li>
                  Careers <span className="footer__badge">Hiring</span>
                </li>
                <li>Customers</li>
                <li>Press kit</li>
              </ul>
            </div>
            <div className="footer__col">
              <p>Compare</p>
              <ul>
                <li>Notion</li>
                <li>Confluence</li>
                <li>Google Docs</li>
                <li>Dropbox Paper</li>
                <li>All comparisons</li>
              </ul>
            </div>
            <div className="footer__col--newsletter">
              <p>Remote letters to read on your own time</p>
              <form className="footer__newsletter">
               <CustomInput buttonText={'→'} />
              </form>
              <p className="footer__newsletter-desc">
                100% homemade, no tricks or ponies or growth hacking nonsense. Just remote things we care about with a short surprising insight every week. No rush.
              </p>
            </div>
          </div>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
          <div className="footer__links">
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">User terms</a>
            <a href="#">Customer terms</a>
          </div>
          <p className="footer__copyright">©2022 Slite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};