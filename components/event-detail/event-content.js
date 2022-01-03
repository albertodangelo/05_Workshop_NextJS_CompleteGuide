import classes from "./event-content.module.css";

import React from "react";

const EventContent = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
