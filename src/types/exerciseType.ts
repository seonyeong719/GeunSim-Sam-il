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
