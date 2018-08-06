import axios from 'axios'
import { DHCP } from './dataMock'
export const serverFetch = () => {
  if (process.env.NODE_ENV === 'development') {
    return Promise.resolve(DHCP)
  } else {
    return axios.get('/?action=API').then(data => {
      window.data = data
      return data.data
    })
  }
}
