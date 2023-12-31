import { ExerciseBaseInfoApiType } from "@type/axiosType";
import { Axios } from "./@core";

const PATH = "/exercisebaseinfo";

const ExerciseBaseInfoApi: ExerciseBaseInfoApiType = {
  baseInfo(offset: number) {
    return Axios.get(PATH, {
      params: {
        limit: 18,
        offset,
      },
    });
  },
  baseInfoId(id: number) {
    return Axios.get(PATH + id);
  },
};

export default ExerciseBaseInfoApi;
