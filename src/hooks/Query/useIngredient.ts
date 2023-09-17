import IngredientApi from "@api/ingredientApi";
import { useQuery } from "@tanstack/react-query";
import { IngredientType } from "@type/ingredientType";
import { QUERY_KEY } from "consts/queryKey";

const ingred = async () => {
  const res = await IngredientApi.ingredient();
  return res.data;
};

export const useIngredientList = () => {
  const { data, isLoading } = useQuery<IngredientType, boolean>([QUERY_KEY.INGREDIENT], () =>
    ingred()
  );
  return { data, isLoading };
};
