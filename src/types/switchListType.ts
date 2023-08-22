import { AxiosResponse } from "axios";

export interface ExerciseApiType {
  category(): Promise<AxiosResponse>;
  categoryId(id: number): Promise<AxiosResponse>;
}

export interface EquipmentApiType {
  equipment(): Promise<AxiosResponse>;
  equipmentId(id: number): Promise<AxiosResponse>;
}
