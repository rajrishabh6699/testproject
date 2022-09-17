import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Header.module.css';
import logo from './logo.svg';

export default function Header(props) {
  let history = useHistory();
  const loginHandler = () => {
    history.push('/login');
  };
  return (
    <header className={classes.header}>
      <img src={logo}></img>
      {props.buttonText && <button onClick={loginHandler}>Login/Signup</button>}
    </header>
  );
}
