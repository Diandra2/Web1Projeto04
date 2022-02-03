import { IBolosData } from "Interface/bolos.interface";
import { ICarnesData } from "Interface/Carnes.interface";
import api from "services/api";

class BolosData {
  index() {
    return api.get<IBolosData[]>('/Bolos')
  }
  store(data: IBolosData) {
    return api.post(`/Bolos`, data)
  }
  show(id: number) {
    return api.get<IBolosData>(`/Bolos/${id}`)
  }
  update(id: number, data: ICarnesData) {
    return api.put(`/Bolos/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/Bolos/${id}`)
  }
}

export default new BolosData ()