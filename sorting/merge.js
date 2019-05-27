const MergeModule = (function () {
  return {
    // top-down implementation
    sortTopDown: function (array) {
      if (array.length < 2) {
        return array
      }
      // split the run longer than 1 item into halves
      let middle = Math.floor(array.length / 2)
      let left = array.slice(0, middle)
      let right = array.slice(middle)
      // recursively sort both runs from left to right
      return this.mergeTopDown(this.sortTopDown(left), this.sortTopDown(right))
    },
    mergeTopDown: function (left, right) {
      let array = []
      // While there are elements in the left or right runs...
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          array.push(left.shift())
        } else {
          array.push(right.shift())
        }
      }
      return array.concat(left).concat(right)
    },
    // bottom-up implementation
    sortBottomUp: function (array) {
      let step = 1
      while (step < array.length) {
        let left = 0
        while (left + step < array.length) {
          this.mergeBottomUp(array, left, step)
          left += step * 2
        }
        step *= 2
      }
      return array
    },
    mergeBottomUp: function (array, left, step) {
      let right = left + step
      let end = Math.min(left + step * 2 - 1, array.length - 1)
      let leftMoving = left
      let rightMoving = right
      let temp = []

      for (let i = left; i <= end; i++) {
        if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
            leftMoving < right) {
          temp[i] = array[leftMoving]
          leftMoving++
        } else {
          temp[i] = array[rightMoving]
          rightMoving++
        }
      }

      for (let j = left; j <= end; j++) {
        array[j] = temp[j]
      }
    }
  }
})()

module.exports = { MergeModule }
