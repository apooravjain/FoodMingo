import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  //console.log(err);

  return (
    <div className="m-4 px-4">
      <h1>Oops!!!!!</h1>
      <h2>Something went wrong</h2>
      <h3>{err.data}</h3>
    </div>
  );
};

export default Error;
