import React from 'react';
import './Hero.css';
import { CustomInput } from '../ui/CustomInput';
import { ChangesCard } from '../ui/ChangesCard';

import heroDashboard from '../../assets/Hero.png';

import VanMoof from '../../assets/VanMoof.png';
import BambooHR from '../../assets/bamboohr-logo-dark.png';
import AgoraPulse from '../../assets/agora-pulse-dark.png';
import Spotify from '../../assets/Spotify.png';
import AngloAmerican from '../../assets/anglo-american.png';
import Meero from '../../assets/Meero.png';




export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__title">
            <span className="hero__title">
              Bring <span className="hand-underline">clarity</span> To Your Team
            </span>
          </p>
          <p className="hero__subtitle">
            Slite is a modern knowledge base that drives action with structured docs, thoughtful collaboration and confident decision-making.
          </p>


        </div>
        <div className="hero__cta">
          <CustomInput />
        </div>
        <div className="hero__image">

          <img src={heroDashboard} alt="Dashboard Preview" />
        </div>


        <p className="hero_timeLine"> 8:45 AM - PDT</p>

        <ChangesCard />

        <p className='hero_statistic'>200,000+ teams have found focus with Slite</p>
      </div>

      <div className="hero__stats">
        
          <img className="hero__stat-item" src={VanMoof} alt="VANMOOF" />
 
        
          <img className="hero__stat-item" src={BambooHR} alt="BambooHR" />
        
       
          <img className="hero__stat-item" src={AgoraPulse} alt="AgoraPulse" />
       
        
          <img className="hero__stat-item" src={Spotify} alt="Spotify" />
        
      
          <img className="hero__stat-item" src={AngloAmerican} alt="AngloAmerican" />
        
       
          <img className="hero__stat-item" src={Meero} alt="Meero" />
        
      </div>
    </section>
  );
};
