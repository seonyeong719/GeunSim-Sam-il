import { Axios } from "./@core";

const PATH: string = "/equipment";

const EquipmentApi = {
  equipment() {
    return Axios.get(PATH);
  },

  equipmentId(id: number) {
    return Axios.get(PATH + id);
  },
};

export default EquipmentApi;
