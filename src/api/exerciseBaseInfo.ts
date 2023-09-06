import { ExerciseBaseInfoApiType } from "@type/exerciseType";
import { Axios } from "./@core";

const PATH = "/exercisebaseinfo";

const ExerciseBaseInfoApi: ExerciseBaseInfoApiType = {
  baseInfo(limit = 400) {
    return Axios.get(PATH, {
      params: {
        limit: limit,
      },
    });
  },
  baseInfoId(id: number) {
    return Axios.get(PATH + id);
  },
};

export default ExerciseBaseInfoApi;
