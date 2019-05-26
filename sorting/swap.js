module.exports = function (array, i, j) {
  let tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}
