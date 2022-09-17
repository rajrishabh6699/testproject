import React, { useContext } from "react";
import ModalContext from "../context/modalcontext";
import Backdrop from "./Backdrop";
import Candidate from "./Candidate";
import classes from './Modal.module.css'
export default function Modal() {
    const{showModal,setShowModal}=useContext(ModalContext);
    const closeModalHandler=()=>{
        setShowModal(false);
    }
  return (
    <div className={classes.super}>
      {/* <Backdrop show="true"/> */}
      <div className={classes.main}>
        <div className={classes.top}>
          <p>Applications for this job</p>
          <button onClick={closeModalHandler}>Close</button>
        </div>
        <p>Total 35 Application</p>
        <div className={classes.center}>
          <Candidate />
          <Candidate />
          <Candidate />
          <Candidate />
          <Candidate />
          <Candidate />
          <Candidate />
        </div>
      </div>
    </div>

  )
}
