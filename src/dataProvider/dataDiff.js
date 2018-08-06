export const diffData = (oldData = {}, newData = {}) => {
  const res = Object.keys(oldData).reduce((all, item) => {
    const oldContent = oldData[item] || {}
    const newContent = newData[item] || {}
    if (
      oldContent.NAME === newContent.NAME &&
      oldContent.MAC === newContent.MAC &&
      oldContent.IP === newContent.IP
    ) {
      all[item] = newContent
      delete newData[item]
    } else {
      all[item + "_old"] = { ...oldContent, OLD: true }
    }
    return all
  }, {})
  const newRes = Object.keys(newData).reduce((allnew, item) => {
    allnew[item + "_new"] = { ...newData[item], NEW: true }
    return allnew
  }, {})
  return { ...res, ...newRes }
}
