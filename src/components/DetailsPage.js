import React, { useContext } from "react";
import Header from "./Header";
import JobCard from "./JobCard";
import classes from "./DetailsPage.module.css";
import Modal from "./Modal";
import ModalContext from "../context/modalcontext";
export default function DetailsPage() {
    const {showModal,setShowModal}=useContext(ModalContext);
  return (
    <div>
      <Header />
      <section className={classes.middle}>
        <div className={classes.main}>
          <p>Home</p>
          <p>Job Posted by you</p>
        </div>
      </section>
      <div className={classes.grid}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
      {showModal && <Modal/>}
    </div>
  );
}
