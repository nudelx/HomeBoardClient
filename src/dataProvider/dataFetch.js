import axios from "axios"
import { mockMap } from "./dataMock"
export const serverFetch = ({ API_PATH }) => {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve(mockMap[API_PATH] && mockMap[API_PATH]())
  } else {
    return axios.get(`/?action=API&t=${API_PATH}`).then(data => {
      return data.data
    })
  }
}
