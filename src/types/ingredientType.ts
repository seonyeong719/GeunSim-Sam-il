export interface IngredientType {
  count: number;
  results: [
    {
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
  ];
}
