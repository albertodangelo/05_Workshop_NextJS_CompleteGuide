import React, { useRef } from "react";
import Button from "../components/ui/button";
import classes from "./eventSearch.module.css";

const EventSearch = (props) => {
  const monthValue = useRef();
  const yearValue = useRef();

  const clickHandler = (e) => {
    console.log("clicked");
    e.preventDefault();
    props.filter(yearValue.current.value, monthValue.current.value);
  };

  return (
    <>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.controls}>
            <label htmlFor="year">Jahr</label>
            <select id="year" ref={yearValue}>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className={classes.controls}>
            <label htmlFor="month">Monat</label>
            <select id="month" ref={monthValue}>
              <option value="1">Januar</option>
              <option value="2">Februar</option>
              <option value="3">März</option>
              <option value="4">April</option>
              <option value="5">Mai</option>
              <option value="6">Juni</option>
              <option value="7">Juli</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">Oktober</option>
              <option value="11">September</option>
              <option value="12">Dezember</option>
            </select>
          </div>
        </div>
        <Button onClick={clickHandler}>Event filtern</Button>
      </form>
    </>
  );
};

export default EventSearch;
