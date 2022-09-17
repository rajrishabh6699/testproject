import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from './Header.module.css'

export default function Header(props) {
    let history=useHistory();
    console.log(history);
    const loginHandler=()=>{
        history.push('/login')
        
    }
  return (
    <header className={classes.header}>
        <p>MyJobs</p>
        {props.buttonText && <button onClick={loginHandler}>Login/Signup</button>}
      </header>
  )
}
