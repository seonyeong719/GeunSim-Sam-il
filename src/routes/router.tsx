import LayoutIndex from "@components/Layout";
import BmiPage from "@pages/BmiPage/bmiPage";
import DetailPage from "@pages/Exercise/detailPage";
import ExercisePage from "@pages/Exercise/exercisePage";
import HomePage from "@pages/home";
import IngredientDetail from "@pages/Ingredient/detailIngred";
import IngredientPage from "@pages/Ingredient/ingredientPage";
import SearchList from "@pages/searchList";
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
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/ingredient_detail/:id",
        element: <IngredientDetail />,
      },
      {
        path: "/search_list/:id",
        element: <SearchList />,
      },
    ],
  },
]);

export default router;
