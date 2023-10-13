import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import SinglePageError from "./pages/SinglePageError";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <SinglePageError />,
      },
      // {
      // path: "page/:id",
      // element: <Page />,
      // errorElement: <SinglePageError />,
      // },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
