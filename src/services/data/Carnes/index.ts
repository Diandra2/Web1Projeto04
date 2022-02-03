import { ICarnesData } from "Interface/Carnes.interface";
import api from "services/api";

class CarnesData {
  index() {
    return api.get<ICarnesData[]>('/Carnes')
  }
  store(data: ICarnesData) {
    return api.post(`/Carnes`, data)
  }
  show(id: number) {
    return api.get<ICarnesData>(`/Carnes/${id}`)
  }
  update(id: number, data: ICarnesData) {
    return api.put(`/Carnes/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/Carnes/${id}`)
  }
}

export default new CarnesData ()