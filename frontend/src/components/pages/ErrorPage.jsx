import PageContent from "../PageContent";
import MainNavigation from "../MainNavigation";

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    let title = "An error occured";
    let message = "Something went wrong!";

    if(error.state === 500) {
        message = error.data.message;
    } else if (error.status === 404) {
        title = "Not found";
        message = "Could not find page";
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}