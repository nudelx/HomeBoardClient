import axios from 'axios'
export const serverFetch = () => {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve({
      ROW_0: {
        NAME: "AAAAA",
        MAC: "888888888",
        IP: "192.168.0.100",
        TIME: "Permanent"
      },
      ROW_1: {
        NAME: "BBBBBB",
        MAC: "3233333333",
        IP: "192.168.0.110",
        TIME: "Permanent"
      },
      ROW_2: {
        NAME: "CCCCCCC",
        MAC: "344444444444",
        IP: "192.168.0.107",
        TIME: "01:34:15"
      },
      ROW_3: {
        NAME: "EEEEEE",
        MAC: "B899999999999",
        IP: "192.168.0.101",
        TIME: "Permanent"
      },
      ROW_4: {
        NAME: "FFFFFFFFFF",
        MAC: "F477777777A",
        IP: "192.168.0.103",
        TIME: "01:38:33"
      },
      ROW_5: {
        NAME: "JJJJJJJJJ",
        MAC: "1rrrrrrrrt666E",
        IP: "192.168.0.111",
        TIME: "Permanent"
      },
      ROW_6: {
        NAME: "IIIIIIIIIII",
        MAC: "Ctrtty565656",
        IP: "192.168.0.104",
        TIME: "01:39:58"
      }
    })
  } else {
    return axios.get("/?action=API").then(data => { window.data = data ; return data.data })
  }
}
