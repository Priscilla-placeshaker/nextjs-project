import Head from 'next/head';
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage(props) {
  return (
    <div>
      <ul>
        <Head>
          <title>NextJS Events</title>
          <meta name="description" content="Find a lot of great events that allow you to evolve..."></meta>
        </Head>
        <EventList items={props.events} />
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return { 
    props: { events: featuredEvents },
    revalidate: 1800 // en production, la page sera rechargé au moins toutes les demi heures pour refleter les données de la base
    };
}

export default HomePage;
