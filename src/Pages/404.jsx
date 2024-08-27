import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-3xl font-bold text-red-600">Opps!</h1>
      <p className="my-3 text-xl">Sorry, an unexpected error occured</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
