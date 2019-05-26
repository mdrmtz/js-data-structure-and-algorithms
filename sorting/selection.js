const swap = require('./swap')

const SelectionModule = (function () {
  return {
    sort: function (array) {
      let min
      /* advance the position through the entire array */
      /*   (could do i < array.length-1 because single element is also min element) */
      for (let i = 0; i < array.length - 1; i++) {
        /* find the min element in the unsorted a[i .. array.length-1] */
        /* assume the min is the first element */
        min = i
        /* test against elements after i to find the smallest */
        for (let j = i + 1; j < array.length; j++) {
          /* if this element is less, then it is the new minimum */
          if (array[j] < array[min]) {
            /* found new minimum; remember its index */
            min = j
          }
        }
        if (min !== i) {
          swap(array, i, min)
          /* tmp = array[i];
          array[i] = array[min]
          array[min] = tmp; */
        }
      }
      return array
    }
  }
})()

module.exports = { SelectionModule }
