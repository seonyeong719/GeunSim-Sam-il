import ExerciseBaseInfoApi from "@api/exerciseBaseInfo";
import { useQuery } from "@tanstack/react-query";
import { BaseInfo, BaseInfoId } from "@type/categoryType";
import { QUERY_KEY } from "consts/queryKey";

const exerBaseInfo = async (offset: number) => {
  const res = await ExerciseBaseInfoApi.baseInfo(offset);
  return res.data;
};

export const useBaseInfoList = (offset: number) => {
  const { data, isLoading } = useQuery<BaseInfo, boolean>([QUERY_KEY.BASE_INFO, offset], () =>
    exerBaseInfo(offset)
  );
  return { data, isLoading };
};

const exerBaseInfoId = async (id: number) => {
  const res = await ExerciseBaseInfoApi.baseInfoId(id);
  return res.data;
};

export const useBaseInfoIdList = (id: number) => {
  const { data, isLoading } = useQuery<BaseInfoId, boolean>([QUERY_KEY.BASE_INFO_ID, id], () =>
    exerBaseInfoId(id)
  );
  return { data, isLoading };
};
