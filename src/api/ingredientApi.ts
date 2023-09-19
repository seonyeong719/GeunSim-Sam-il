import { Axios } from "./@core";

const PATH: string = "/ingredient";

const IngredientApi = {
  ingredient() {
    return Axios.get(PATH);
    // ingredient목록 리스트들 다 나옴
  },

  ingredientId(id: number) {
    return Axios.get(PATH + `/${id}`);
    //해당 id 입력하면 목록이 나옴 근데 search랑 차이점을 모르겠음
  },
};

export default IngredientApi;

// 추후에 다시 알아볼 예정
