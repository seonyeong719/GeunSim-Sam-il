import ExerciseBaseInfoApi from "@api/exerciseBaseInfo";
import { useQuery } from "@tanstack/react-query";
import { BaseInfo } from "@type/categoryType";
import { QUERY_KEY } from "consts/queryKey";

const exerBaseInfo = async (limit: number) => {
  const res = await ExerciseBaseInfoApi.baseInfo(limit);
  return res.data;
};

export const useBaseInfoList = (limit = 400) => {
  const { data, isLoading } = useQuery<BaseInfo, boolean>([QUERY_KEY.BASE_INFO], () =>
    exerBaseInfo(limit)
  );
  return { data, isLoading };
};
