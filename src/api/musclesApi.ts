import { Axios } from "./@core";

const PATH: string = "/muscle";

const MusclesApi = {
  muscle() {
    return Axios.get(PATH);
  },

  muscleId(id: number) {
    return Axios.get(PATH + id);
  },
};

export default MusclesApi;
