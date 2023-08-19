import { Axios } from "./@core";

const PATH = "/exercisealias";

const ExerciseAliasApi = {
  alias(id: number) {
    return Axios.get(PATH + id);
  },
};

export default ExerciseAliasApi;
