import { Axios } from "./@core";

const PATH = "/exercisebaseinfo";

const ExerciseBaseInfoApi = {
  baseInfo(id: number) {
    return Axios.get(PATH + id);
  },
};

export default ExerciseBaseInfoApi;
