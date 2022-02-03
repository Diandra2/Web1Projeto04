import { IReceitaData } from "Interface/receita.interface";
import api from "services/api";

class ReceitaData {
  index() {
    return api.get<IReceitaData[]>('/receitas')
  }
  store(data: IReceitaData) {
    return api.post(`/receitas`, data)
  }
  show(id: number) {
    return api.get<IReceitaData>(`/receitas/${id}`)
  }
  update(id: number, data: ReceitaData) {
    return api.put(`/receitas/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/receitas/${id}`)
  }
}

export default new ReceitaData()