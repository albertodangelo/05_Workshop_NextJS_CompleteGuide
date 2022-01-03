import React, { Fragment } from "react";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";
import { getEventById, getFeaturedEvents } from "../../../components/data/data";

const EventsDetailPage = (props) => {
  const event = props.event;

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

/**
 * Serverside Code (NextJS - NodeJS)
 */
export async function getStaticProps(context) {
  const eventId = context.params.id;

  const singleEvent = await getEventById(eventId);

  return {
    props: { event: singleEvent },
    revalidate: 30,
  };
}
export async function getStaticPaths() {
  const data = await getFeaturedEvents();

  const ids = data.map((event) => ({ params: { id: event.id } }));

  return {
    paths: ids,
    fallback: "blocking",
  };
}

export default EventsDetailPage;
