import ExerciseBaseInfoApi from "@api/exerciseBaseInfo";
import { useQuery } from "@tanstack/react-query";
import { BaseInfo } from "@type/categoryType";
import { QUERY_KEY } from "consts/queryKey";

const exerBaseInfo = async () => {
  const res = await ExerciseBaseInfoApi.baseInfo();
  return res.data;
};

export const useBaseInfoList = () => {
  const { data, isLoading } = useQuery<BaseInfo, boolean>([QUERY_KEY.CATEGORY], () =>
    exerBaseInfo()
  );
  return { data, isLoading };
};
