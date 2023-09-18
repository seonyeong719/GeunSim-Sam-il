import { ExerciseSearchApiType } from "@type/axiosType";
import { Axios } from "./@core";

const PATH = "/exercise";
// const LANGUAGE = "ko";

const SearchApi: ExerciseSearchApiType = {
  exercise(term: string) {
    return Axios.get(PATH + "/search", {
      params: {
        language: "ko",
        term,
      },
    });
  },
};

export default SearchApi;
