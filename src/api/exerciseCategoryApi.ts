import { Axios } from "./@core";
import { ExerciseApiType } from "@type/switchListType";

const PATH: string = "/exercisecategory";

const ExerciseCategoryApi: ExerciseApiType = {
  category() {
    return Axios.get(PATH);
  },

  categoryId(id: number) {
    return Axios.get(PATH + id);
  },
};

export default ExerciseCategoryApi;
