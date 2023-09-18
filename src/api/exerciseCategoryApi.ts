import { Axios } from "./@core";
import { ExerciseApiType } from "@type/axiosType";

const PATH: string = "/exercisecategory";

const ExerciseCategoryApi: ExerciseApiType = {
  category() {
    return Axios.get(PATH);
  },

  categoryId(id) {
    return Axios.get(PATH + id);
  },
};

export default ExerciseCategoryApi;
