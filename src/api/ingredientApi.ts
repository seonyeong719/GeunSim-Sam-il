import { IngredientsApiType } from "@type/axiosType";
import { Axios } from "./@core";

const PATH: string = "/ingredient";
const IMG_PATH: string = "/ingredient-image";

const IngredientApi: IngredientsApiType = {
  ingredient() {
    return Axios.get(PATH);
  },

  ingredientId(id: number) {
    return Axios.get(PATH + `/${id}`);
    //해당 id 입력하면 목록이 나옴 근데 search랑 차이점을 모르겠음
  },
  ingredientImg(ingredient_id: number) {
    return Axios.get(IMG_PATH, {
      params: {
        ingredient_id,
      },
    });
  },
};

export default IngredientApi;
