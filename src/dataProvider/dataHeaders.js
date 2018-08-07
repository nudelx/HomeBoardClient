import { BOX_NAMES } from "../constants/constNames"

export const headers = {
  [BOX_NAMES.DHCP]: ["#", "name", "IP", "MAC", "STATUS", "TIME"],
  [BOX_NAMES.TRAFFIC]: [
    "#",
    "name",
    "IP",
    "MAC",
    "STATUS",
    "T_BT",
    "T_PKT",
    "C_PKT"
  ]
}
