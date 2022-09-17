import React from 'react';
import MiddleSection from '../../components/MiddleSection';
import Card from '../../components/Card';
import classes from './HomePage.module.css';
import Header from '../../components/Header';
import WelcomeIcon from '../../components/welcome.png';
import GirlImage from '../../components/girl.png';
import Logo from '../../components/logo.svg';
import SolayticIcon from '../../components/solaytic.png';
import KanbaIcon from '../../components/kanba.png';
import LightingIcon from '../../components/lighting.png';
import ZtosIcon from '../../components/ztos.png';
import GoldlineIcon from '../../components/goldline.png';
import IdeaIcon from '../../components/idea.png';
import LivaIcon from '../../components/liva.png';
import VelocityIcon from '../../components/velocity.png';

export default function Homepage() {
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  return (
    <div style={{ background: '#EDF6FF' }}>
      <div
        style={{
          padding: '0 70px',
          background:
            'transparent linear-gradient(260deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box',
          height: '464px'
        }}
      >
        <Header buttonText="Login/Signup" />
        <div style={{ borderTop: '1px solid white', margin: '12px 0 0 0' }} />
        <div
          style={{
            display: 'flex',
            margin: '85px 0 0 0',
            justifyContent: 'space-around'
          }}
        >
          <div>
            <p style={{ color: 'white', fontSize: '60px', margin: '-8px 0 0 0 ' }}>
              Welcome to
            </p>
            <img src={Logo} style={{ width: '200px', height: '75px' }} />
            <div
              style={{
                width: '148px',
                background: '#42AFFF',
                borderRadius: '5px',
                padding: '13px 30px 2px 30px',
                margin: '40px 0 0 0',
                cursor: 'pointer'
              }}
            >
              <p style={{ color: 'white' }}>Get Started</p>
            </div>
          </div>
          <div>
            <img src={GirlImage} style={{ width: '622px', height: '395px' }} />
          </div>
        </div>
      </div>
      <section className={classes.last}>
        <p>WHY US</p>
        <div className={classes.foot}>
          <Card heading="Get more Visibility" description={description} />
          <Card heading="Organize your Candidates" description={description} />
          <Card heading="Verify their Abilities" description={description} />
        </div>
      </section>
      <div
        style={{
          width: '100%',
          padding: '0 70px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#EDF6FF'
        }}
      >
        <p style={{ textAlign: 'left', width: '100%', margin: '0 0 40px 300px' }}>
          Companies Who Trust Us
        </p>
        <div style={{ display: 'flex', width: '100%' }}>
          <img src={SolayticIcon} style={{ margin: '0 0 0 140px' }} />
          <img src={KanbaIcon} style={{ margin: '0 0 0 140px' }} />
          <img src={LightingIcon} style={{ margin: '0 0 0 140px' }} />
          <img src={ZtosIcon} style={{ margin: '0 0 0 140px' }} />
          <img src={KanbaIcon} style={{ margin: '0 0 0 140px' }} />
        </div>
        <div style={{ display: 'flex', margin: '20px 0 0 200px', width: '100%' }}>
          <img src={GoldlineIcon} style={{ margin: '0 0 0 140px' }} />
          <img src={IdeaIcon} style={{ margin: '0 0 0 140px' }} />
          <img src={LivaIcon} style={{ margin: '0 0 0 140px' }} />
          <img src={VelocityIcon} style={{ margin: '0 0 0 140px' }} />
        </div>
      </div>
    </div>
  );
}
