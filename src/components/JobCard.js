import React, { useContext, useState } from 'react'
import ModalContext from '../context/modalcontext'
import classes from './JobCard.module.css'

export default function JobCard(props) {
    const {showModal,setShowModal}=useContext(ModalContext);

    const showModalHandler=()=>{
        setShowModal(true);
    }
  return (
    <div className={classes.jobCard}>
      <h3>Java Developer</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ea adipisci asperiores aspernatur laboriosam rem atque fugiat repudiandae exercitationem perferendis.</p>
      <div className={classes.smallCard }>
        <p>Banglore</p>
        <button onClick={showModalHandler}>View Applications</button>
      </div>
    </div>
  )
}
