import { ExerciseBaseInfoApiType } from "@type/exerciseType";
import { Axios } from "./@core";

const PATH = "/exercisebaseinfo";

const ExerciseBaseInfoApi: ExerciseBaseInfoApiType = {
  baseInfo(offset: number) {
    console.log(offset);
    return Axios.get(PATH, {
      params: {
        limit: 18,
        offset,
      },
    });
  },
  baseInfoId(id: number) {
    return Axios.get(PATH, {
      params: {
        id,
      },
    });
  },
};

export default ExerciseBaseInfoApi;
