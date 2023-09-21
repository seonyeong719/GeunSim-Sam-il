export interface IngredientType {
  count: number;
  results: [
    {
      id: number;
      name: string;
    }
  ];
}

// 재료성분 이미자는 ingredient-image/ 에서 불러와야함
export interface IngredientIdType {
  id: number;
  name: string;
  energy: number;
  protein: string;
  carbohydrates: string;
  carbohydrates_sugar: string;
  fat: string;
  fat_saturated: string;
  sodium: string;
}

export interface IngredientImgType {
  results: [
    {
      id: number;
      ingredient_id: number;
      image: string;
    }
  ];
}
