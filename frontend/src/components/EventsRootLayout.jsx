import { Outlet } from "react-router-dom";

import EventsNavigation from "./EventsNavigation.jsx";

export default function RootLayout() {
    return (
        <>
            <EventsNavigation>Root layout</EventsNavigation>
            <main>
                <Outlet />
            </main>
        </>
    );
}