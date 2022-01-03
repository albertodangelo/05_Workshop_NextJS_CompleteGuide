import React from "react";
import classes from "./event-item.module.css";
import Button from "./ui/button";
import Calendar from "./icons/Calendar";
import Location from "./icons/Location";
import ArrowRight from "./icons/ArrowRight";
import Image from "next/image";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const prettyDate = new Date(date).toLocaleDateString("en-EN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAdress = location.replace(",", "\n");
  const img = "/" + image;
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={img} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summery}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <Calendar />
            <time>{prettyDate}</time>
          </div>
          <div className={classes.address}>
            <Location />
            <address>{formatedAdress}</address>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>
          <span>Event Details</span>
          <span>
            <ArrowRight />
          </span>
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
