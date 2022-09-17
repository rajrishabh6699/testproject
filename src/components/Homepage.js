import React from "react";
import Card from "./Card";
import classes from "./HomePage.module.css";
import Header from "./Header";
import MiddleSection from "./MiddleSection";

export default function Homepage() {
    const description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  return (
    <>
      <Header buttonText="Login/Signup"/>
      <MiddleSection welcome="true" requireImage="true" requireButton="true"/>
      <section className={classes.last}>
        <p>WHY US</p>
        <div className={classes.foot}>
          <Card heading="Get more Visibility" description={description}/>
          <Card heading ="Organize your Candidates" description={description}/>
          <Card heading="Verify their Abilities" description={description}/>
        </div>
      </section>
    </>
  );
}
