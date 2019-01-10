/**
 * 1度大致对应111千米，所以需要/111000
 * @param {*} meter 米
 */
export const m2degree = (meter) => {
  return meter / 111000
}

/**
 * 米转换成弧度，需要除以地球半径，大约6378100米
 * @param {*} meter
 */
export const m2rad = (meter) => {
  return meter / 6378100
}

export const arry2polygon = (array) => {
  const length = array.length
  if (length % 2 !== 0) {
    throw new Error('传入的图形坐标数量不正确！')
  }
  let result = []
  for (let i = 0; i < length; i = i + 2) {
    result.push([array[i], array[i + 1]])
  }
  return result
}
