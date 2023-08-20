import LayoutIndex from "@components/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutIndex />,
    children: [
      {
        path: "/",
        element: "",
      },
      //   {
      //     path: "/",
      //     element: "",
      //   },
      //   {
      //     path: "/",
      //     element: "",
      //   },
    ],
  },
]);

export default router;
