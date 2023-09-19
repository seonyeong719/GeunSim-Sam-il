import IngredientApi from "@api/ingredientApi";
import { useQuery } from "@tanstack/react-query";
import { IngredientIdType, IngredientType } from "@type/ingredientType";
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

const ingredientId = async (id: number) => {
  const res = await IngredientApi.ingredientId(id);
  return res.data;
};

export const useIngredientId = (id: number) => {
  const { data, isLoading } = useQuery<IngredientIdType, boolean>(
    [QUERY_KEY.INGREDIENT_ID, id],
    () => ingredientId(id)
  );
  return { data, isLoading };
};
