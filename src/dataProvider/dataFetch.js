import axios from 'axios'
import { DHCP } from './dataMock'
export const serverFetch = () => {
  console.log('DDDDDD => ', DHCP)
  if (process.env.NODE_ENV === 'development') {
    console.log('DHCP', DHCP)
    return Promise.resolve(DHCP)
  } else {
    return axios.get('/?action=API').then(data => {
      return data.data
    })
  }
}
