import { AxiosResponse } from "axios";

export interface ExerciseApiType {
  category(): Promise<AxiosResponse>;
  categoryId(id: number): Promise<AxiosResponse>;
}

export interface EquipmentApiType {
  equipment(): Promise<AxiosResponse>;
  equipmentId(id: number): Promise<AxiosResponse>;
}

export interface ExerciseBaseInfoApiType {
  baseInfo(offset: number): Promise<AxiosResponse>;
  baseInfoId(id: number): Promise<AxiosResponse>;
}

export interface ExerciseSearchApiType {
  exercise(term: string): Promise<AxiosResponse>;
}

export interface IngredientsApiType {
  ingredient(): Promise<AxiosResponse>;
  ingredientId(id: number): Promise<AxiosResponse>;
  ingredientImg(ingredient_id: number): Promise<AxiosResponse>;
}
