import { Axios } from "./@core";

const PATH: string = "/exercisealias";

const ExerciseAliasApi = {
  alias() {
    return Axios.get(PATH);
  },

  aliasId(id: number) {
    return Axios.get(PATH + id);
  },
};

export default ExerciseAliasApi;
