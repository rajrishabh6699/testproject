import React from 'react'
import classes from './Card.module.css'

export default function Card(props) {
  return (
    <div className={classes.card}>
      <p>{props.heading}</p>
      <p>{props.description}</p>
    </div>
  )
}
