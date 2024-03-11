import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../EventsList';

function EventsPage() {
    const data = useLoaderData();

    if(data.isError) {
        return <p>{data.message}</p>
    }

  return (
    <EventsList />
  );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        //return {isError: true, message: "Could not fetch events"};
        // throw new Response(JSON.stringify({message: "Could not fetch events."}), {
        //     status: 500
        // });
        return json(
            {message: "Could not fetch events."},
            {status: 500}    
        );

    } else {
        return response;
    }
};