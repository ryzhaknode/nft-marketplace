import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h1>Error page...</h1>
      {/* <p>{error.statusText ?? error.message}</p> */}
    </>
  );
}

export default ErrorPage;
