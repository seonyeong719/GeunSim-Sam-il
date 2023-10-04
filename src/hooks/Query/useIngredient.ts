import IngredientApi from "@api/ingredientApi";
import { useQuery } from "@tanstack/react-query";
import { IngredientIdType, IngredientImgType, IngredientType } from "@type/ingredientType";
import { SearchListType } from "@type/searchListType";
import { QUERY_KEY } from "consts/queryKey";

const ingred = async (offset: number) => {
  const res = await IngredientApi.ingredient(offset);
  return res.data;
};

export const useIngredientList = (offset: number) => {
  const { data, isLoading } = useQuery<IngredientType, boolean>(
    [QUERY_KEY.INGREDIENT, offset],
    () => ingred(offset)
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

const ingredientImg = async (ingredient_id: number) => {
  const res = await IngredientApi.ingredientImg(ingredient_id);
  return res.data;
};

export const useIngredientImg = (ingredient_id: number) => {
  const { data } = useQuery<IngredientImgType>([QUERY_KEY.INGREDIENT_IMG, ingredient_id], () =>
    ingredientImg(ingredient_id)
  );
  return { data };
};

const inSearch = async (term: string) => {
  const res = await IngredientApi.ingredientSearch(term);
  return res.data;
};

export const useIngredientSearch = (term: string) => {
  const { data, isLoading } = useQuery<SearchListType, boolean>(
    [QUERY_KEY.INGREDIENT_SEARCH, term],
    () => inSearch(term)
  );
  return { data, isLoading };
};
