import { BOX_MAP, BOX_NAMES } from "../constants/constNames"

export const DHCP = {
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
    NAME: "Alexs-MBP",
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
    NAME: "MI-PAD2",
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
}

export const TRAFFIC = {
  ROW_0: {
    IP: "192.168.0.100",
    MAC: "94-DE-80-7E-92-47",
    TOT_PKTS: 3454,
    TOT_BYTE: 1930270,
    CUR_PKTS: 43,
    CUR_BYTE: 32142,
    ICMP: "0/0",
    UDP: "7/22",
    SYT: "0/2"
  },
  ROW_1: {
    IP: "192.168.0.104",
    MAC: "F4-F5-D8-95-28-FA",
    TOT_PKTS: 639,
    TOT_BYTE: 601811,
    CUR_PKTS: 0,
    CUR_BYTE: 52,
    ICMP: "0/1",
    UDP: "0/1",
    SYT: "0/0"
  },
  ROW_2: {
    IP: "192.168.0.101",
    MAC: "B8-E8-56-46-7E-A0",
    TOT_PKTS: 396,
    TOT_BYTE: 126581,
    CUR_PKTS: 5,
    CUR_BYTE: 1679,
    ICMP: "0/0",
    UDP: "1/1",
    SYT: "0/0"
  },
  ROW_3: {
    IP: "192.168.0.110",
    MAC: "3C-BD-D8-E7-2C-A1",
    TOT_PKTS: 227,
    TOT_BYTE: 47968,
    CUR_PKTS: 0,
    CUR_BYTE: 0,
    ICMP: "0/0",
    UDP: "0/4",
    SYT: "0/2"
  },
  ROW_4: {
    IP: "192.168.0.107",
    MAC: "34-CE-00-E8-2E-E9",
    TOT_PKTS: 8,
    TOT_BYTE: 624,
    CUR_PKTS: 0,
    CUR_BYTE: 31,
    ICMP: "0/0",
    UDP: "0/0",
    SYT: "0/0"
  },
  ROW_5: {
    IP: "192.168.0.102",
    MAC: "C0-EE-FB-F6-34-AA",
    TOT_PKTS: 3,
    TOT_BYTE: 254,
    CUR_PKTS: 0,
    CUR_BYTE: 50,
    ICMP: "0/0",
    UDP: "0/0",
    SYT: "0/0"
  }
}

export const mockMap = {
  [BOX_MAP.DHCP]: () => DHCP,
  [BOX_MAP.TRAFFIC]: () => TRAFFIC
}
