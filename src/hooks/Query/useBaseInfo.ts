import ExerciseBaseInfoApi from "@api/exerciseBaseInfo";
import { useQuery } from "@tanstack/react-query";
import { BaseInfo } from "@type/categoryType";
import { QUERY_KEY } from "consts/queryKey";

const exerBaseInfo = async (offset: number) => {
  const res = await ExerciseBaseInfoApi.baseInfo(offset);
  return res.data;
};

export const useBaseInfoList = (offset: number) => {
  const { data, isLoading } = useQuery<BaseInfo, boolean>([QUERY_KEY.BASE_INFO], () =>
    exerBaseInfo(offset)
  );
  return { data, isLoading };
};
