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
  },
  ingredientImg(ingredient_id: number) {
    return Axios.get(IMG_PATH, {
      params: {
        ingredient_id,
      },
    });
  },
  ingredientSearch(term: string) {
    return Axios.get(PATH + "/search", {
      params: {
        term,
      },
    });
  },
};

export default IngredientApi;
