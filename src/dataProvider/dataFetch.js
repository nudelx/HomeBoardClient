import axios from 'axios'
import { DHCP } from './dataMock'
export const serverFetch = path => {
  if (process.env.NODE_ENV === 'development') {
    return Promise.resolve(DHCP)
  } else {
    return axios.get(`/?action=API&t=${path}`).then(data => {
      return data.data
    })
  }
}
