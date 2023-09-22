import { ExerciseSearchApiType } from "@type/axiosType";
import { Axios } from "./@core";

const PATH = "/exercise";

const SearchApi: ExerciseSearchApiType = {
  exercise(term: string) {
    return Axios.get(PATH + "/search", {
      params: {
        term,
      },
    });
  },
};

export default SearchApi;
