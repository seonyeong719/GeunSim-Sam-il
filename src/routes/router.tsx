import LayoutIndex from "@components/Layout";
import BmiPage from "@pages/BmiPage/bmiPage";
import DetailPage from "@pages/detailPage";
import ExercisePage from "@pages/exercisePage";
import HomePage from "@pages/home";
import IngredientPage from "@pages/ingredientPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutIndex />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/ingredient",
        element: <IngredientPage />,
      },
      {
        path: "/exercise",
        element: <ExercisePage />,
      },
      {
        path: "/bmi",
        element: <BmiPage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
