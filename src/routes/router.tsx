import LayoutIndex from "@components/Layout";
import BmiPage from "@pages/bmiPage";
import ExercisePage from "@pages/exercisePage";
import IngredientPage from "@pages/ingredientPage";
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
    ],
  },
]);

export default router;
