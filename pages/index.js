import EventList from "../components/event-list";
import { getFeaturedEvents } from "../components/data/data";
import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>NextJS Event Kalender</title>
        <meta
          name="description"
          content="Hier findest Du viele grossartige Events..."
        />
      </Head>
      <div className="home">
        <EventList items={props.events} />
      </div>
    </>
  );
}

/**
 * Serverside Code (NextJS - NodeJS)
 */
export async function getStaticProps() {
  const data = await getFeaturedEvents();

  return {
    props: {
      events: data,
    },
    revalidate: 1800,
  };
}
