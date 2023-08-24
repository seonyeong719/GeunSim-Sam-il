import { EquipmentApiType } from "@type/exerciseType";
import { Axios } from "./@core";

const PATH: string = "/equipment";

const EquipmentApi: EquipmentApiType = {
  equipment() {
    return Axios.get(PATH);
  },

  equipmentId(id) {
    return Axios.get(PATH + id);
  },
};

export default EquipmentApi;
