import { Axios } from "./@core";

const PATH: string = "/exercisecategory";

const ExerciseCategoryApi = {
  category() {
    return Axios.get(PATH);
  },

  categoryId(id: number) {
    return Axios.get(PATH + id);
  },
};

export default ExerciseCategoryApi;
