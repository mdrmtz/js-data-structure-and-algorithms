const swap = require('./swap')

const BubbleModule = (function () {
  return {
    sort: function (array) {
      let swapped
      let n = array.length
      do {
        swapped = false
        for (let i = 1; i < n - 1; i++) {
          if (array[i - 1] > array[i]) {
            swap(array, i - 1, i)
            swapped = true
          }
        }
        n = n - 1
      } while (swapped)
      return array
    }
  }
})()

module.exports = { BubbleModule }
