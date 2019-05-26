const swap = require('./swap')

const InsertionModule = (function () {
  return {
    sortA: function (array) {
      let i = 1
      while (i < array.length) {
        let j = i
        while (j > 0 && array[j - 1] > array[j]) {
          swap(array, j - 1, j)
          j = j - 1
        }
        i = i + 1
      }
      return array
    },
    sortB: function (array) {
      let i = 1
      while (i < array.length) {
        let x = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > x) {
          array[j + 1] = array[j]
          j = j - 1
        }
        array[j + 1] = x
        i = i + 1
      }
      return array
    },
    sortR: function (array, n) {
      if (n > 0) {
        this.sortR(array, n - 1)
        let x = array[n]
        let j = n - 1
        while (j >= 0 && array[j] > x) {
          array[j + 1] = array[j]
          j = j - 1
        }
        array[j + 1] = x
      }
      return array
    }
  }
})()

module.exports = { InsertionModule }
