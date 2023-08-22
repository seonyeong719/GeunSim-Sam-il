import EquipmentApi from "@api/equipmentApi";
import { useQuery } from "@tanstack/react-query";
import { Categorys } from "@type/categoryType";

import { QUERY_KEY } from "consts/queryKey";

const exerEquipment = async () => {
  const res = await EquipmentApi.equipment();
  return res.data;
};

export const useEquipmentList = () => {
  const { data, isLoading } = useQuery<Categorys, boolean>([QUERY_KEY.EQUIPMENT], () =>
    exerEquipment()
  );
  return { data, isLoading };
};
