import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/RootLayout.jsx";

import HomePage from "./components/pages/HomePage.jsx";
import EventsPage, {loader as eventsLoader} from "./components/pages/EventsPage.jsx";
import EventDetailPage, {loader as eventDetailLoader, action as deleteEventAction} from "./components/pages/EventDetailPage.jsx";
import NewEventPage, {action as newEventAction } from "./components/pages/NewEventPage.jsx";
import EditEventPage from "./components/pages/EditEventPage.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import EventsRootLayout from "./components/EventsRootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { 
            index: true,
            element: <EventsPage />,
            loader: eventsLoader
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction
              },
              { path: "edit", element: <EditEventPage /> }
            ]
          },          
          { path: "new", element: <NewEventPage />, action: newEventAction }
        ]
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
