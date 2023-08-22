import { AxiosResponse } from "axios";
import { Axios } from "./@core";

const PATH: string = "/exercisecategory";

interface ApiType {
  category(): Promise<AxiosResponse>;
}

const ExerciseCategoryApi: ApiType = {
  category() {
    return Axios.get(PATH);
  },

  categoryId(id: number) {
    return Axios.get(PATH + id);
  },
};

export default ExerciseCategoryApi;
