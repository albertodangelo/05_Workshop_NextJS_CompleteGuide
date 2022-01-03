import router, { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../components/event-list";
import EventSearch from "../../components/event-search";
import { getAllEvents } from "../../components/data/data";

function AllEvents(props) {
  const events = props.events;
  const route = useRouter();

  const loadFilteredEvents = (year, month) => {
    console.log(year + month);

    const url = `/events/${year}/${month}`;
    route.push(url);
  };

  return (
    <Fragment>
      <EventSearch filter={loadFilteredEvents} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const data = await getAllEvents();

  return {
    props: { events: data },
    revalidate: 10,
  };
}
export default AllEvents;
