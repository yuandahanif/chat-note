import { useRouteError } from "react-router-dom";

export default function Error404Page() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-2xl flex-col items-center justify-center bg-red-300">
      <h1 className="mb-8 inline-flex text-7xl font-semibold text-white">
        Oops!
      </h1>
      <p className="text-white ">Sorry, an unexpected error has occurred.</p>
      <p className="text-white ">
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
