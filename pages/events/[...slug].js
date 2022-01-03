import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../components/data/data";
import EventList from "../../components/event-list";
import Button from "../../components/ui/button";

const FilteredEvents = (props) => {
  console.log(props.events);

  if (props.events.length === 0) {
    return (
      <Fragment>
        <h1 className="center">Keine Events an diesem Datum.</h1>
      </Fragment>
    );
  }

  if (props.hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Ungültiger Filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Alle Events anzeigen</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = props.events;

  const date = new Date(props.year, props.month - 1);

  return (
    <div>
      {/* <ResultTitle date={date} /> */}
      <EventList items={filteredEvents} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  var numberYear = +filterData[0];
  var numberMonth = +filterData[1];

  if (
    isNaN(numberYear) ||
    isNaN(numberMonth) ||
    numberMonth < 1 ||
    numberMonth > 12
  ) {
    return {
      props: { hasError: true },
      /* OPTIONEN: 
      notFound: true,
      redirect: {
        destination: '/error' 
*/
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numberYear,
    month: numberMonth,
  });

  return {
    props: {
      events: filteredEvents,
      year: numberYear,
      month: numberMonth,
    },
  };
}

export default FilteredEvents;
