export const iconsMap = {
  tv: {
    regex: /tv/i,
    icon: "tv"
  },
  cast: {
    regex: /cast/i,
    icon: "cast"
  },
  android: {
    regex: /android/i,
    icon: "android"
  },
  pc: {
    regex: /pc|mbp|mba|server/i,
    icon: "pc"
  },
  pi: {
    regex: /pi/i,
    icon: "pi"
  },
  onePlus: {
    regex: /oneplus|opt/i,
    icon: "onePlus"
  },
  robot: {
    regex: /robo/i,
    icon: "robot"
  },
  tabled: {
    regex: /tabled|pad/i,
    icon: "tabled"
  }
}

export const getDeviceIcon = name => {
  let res = null
  Object.keys(iconsMap).forEach((r, i) => {
    if (name.match(iconsMap[r].regex)) {
      return (res = iconsMap[r].icon)
    }
  })
  return res
}
