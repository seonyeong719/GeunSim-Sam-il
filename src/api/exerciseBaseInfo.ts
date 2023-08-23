import { Axios } from "./@core";

const PATH = "/exercisebaseinfo";

const ExerciseBaseInfoApi = {
  baseInfo() {
    return Axios.get(PATH);
  },
  baseInfoId(id: number) {
    return Axios.get(PATH + id);
  },
};

export default ExerciseBaseInfoApi;
