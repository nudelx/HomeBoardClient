import axios from 'axios'
export const serverFetch = () => {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve({
      ROW_0: {
        NAME: "ROOT-PC",
        MAC: "94-DE-80-7E-92-47",
        IP: "192.168.0.100",
        TIME: "Permanent"
      },
      ROW_1: {
        NAME: "Unknown",
        MAC: "3C-BD-D8-E7-2C-A1",
        IP: "192.168.0.110",
        TIME: "Permanent"
      },
      ROW_2: {
        NAME: "rockrobo",
        MAC: "34-CE-00-E8-2E-E9",
        IP: "192.168.0.107",
        TIME: "01:34:15"
      },
      ROW_3: {
        NAME: "Alexs-MBP",
        MAC: "B8-E8-56-46-7E-A0",
        IP: "192.168.0.101",
        TIME: "Permanent"
      },
      ROW_4: {
        NAME: "Chromecast",
        MAC: "F4-F5-D8-95-28-FA",
        IP: "192.168.0.103",
        TIME: "01:38:33"
      },
      ROW_5: {
        NAME: "Unknown",
        MAC: "10-08-C1-94-9C-FE",
        IP: "192.168.0.111",
        TIME: "Permanent"
      },
      ROW_6: {
        NAME: "NudelOnePlus_3T",
        MAC: "C0-EE-FB-F6-34-AA",
        IP: "192.168.0.104",
        TIME: "01:39:58"
      }
    })
  } else {
    return axios.get("/?action=API").then(data => { window.data = data ; return data.data })
  }
}
