module.exports = function (array, i, j) {
  array[i] = array[i] ^ array[j]
  array[j] = array[i] ^ array[j]
  array[i] = array[i] ^ array[j]
}
