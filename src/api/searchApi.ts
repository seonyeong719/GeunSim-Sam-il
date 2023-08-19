import { Axios } from "./@core";

const PATH = "/exercise";
const LANGUAGE = "ko";

const SearchApi = {
  exercise() {
    return Axios.get(PATH + "/search");
  },
};

export default SearchApi;
