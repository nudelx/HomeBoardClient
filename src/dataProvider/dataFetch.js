import axios from "axios"
export const serverFetch = () => {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve({
      ROW_0: {
        NAME: "Natasha-PC",
        MAC: "888888888",
        IP: "192.168.0.100",
        TIME: "Permanent"
      },
      ROW_1: {
        NAME: "TV-LivingRoom",
        MAC: "3C-BD-D8-E7-2C-A1",
        IP: "192.168.0.110",
        TIME: "Permanent"
      },
      ROW_2: {
        NAME: "ChromeCast",
        MAC: "6C-AD-F8-84-C4-D7",
        IP: "192.168.0.107",
        TIME: "01:34:15"
      },
      ROW_3: {
        NAME: "Xtreamer",
        MAC: "B899999999999",
        IP: "192.168.0.101",
        TIME: "Permanent"
      },
      ROW_4: {
        NAME: "Android Natasha",
        MAC: "8C-3A-E3-6D-57-E8",
        IP: "192.168.0.103",
        TIME: "01:38:33"
      },
      ROW_5: {
        NAME: "PI 2",
        MAC: "1rrrrrrrrt666E",
        IP: "192.168.0.111",
        TIME: "Permanent"
      },
      ROW_6: {
        NAME: "OnePlus_3T",
        MAC: "Ctrtty565656",
        IP: "192.168.0.104",
        TIME: "01:39:58"
      },
      ROW_7: {
        NAME: "robofrfgr",
        MAC: "Ctrtty565656",
        IP: "192.168.0.104",
        TIME: "01:39:58"
      }
    })
  } else {
    return axios.get("/?action=API").then(data => {
      window.data = data
      return data.data
    })
  }
}
