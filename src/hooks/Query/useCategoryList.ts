import ExerciseCategoryApi from "@api/exerciseCategoryApi";
import { useQuery } from "@tanstack/react-query";
import { Categorys } from "@type/categoryType";

import { QUERY_KEY } from "consts/queryKey";

const exerCategory = async () => {
  const res = await ExerciseCategoryApi.category();
  return res.data;
};

export const useCategoryList = () => {
  const { data, isLoading } = useQuery<Categorys, boolean>([QUERY_KEY.CATEGORY], () =>
    exerCategory()
  );
  return { data, isLoading };
};
