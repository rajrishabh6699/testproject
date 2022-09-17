import React from 'react'
import tree from "./tree.jpg";
import classes from './MiddleSection.module.css'

export default function MiddleSection(props) {
  return (
    <section className={classes.middle}>
        <div className={classes.main}>
          {props.welcome && <p>Welcome to MYJOBS</p>}
          {props.requireButton &&<button>Get Started</button>}
        </div>
        {props.requireImage &&<div className={classes.image}>
          <img src={tree} alt="job"></img>
        </div>}
      </section>
  )
}
