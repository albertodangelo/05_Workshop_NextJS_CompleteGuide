import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";
import Calendar from "../icons/Calendar";
import Location from "../icons/Location";
import Image from "next/image";

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={Calendar}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={Location}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
