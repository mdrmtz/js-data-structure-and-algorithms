/* global test, expect */
const insertionModule = require('./insertion').InsertionModule
const selectionModule = require('./selection').SelectionModule
const bubbleModule = require('./bubble').BubbleModule
const mergeModule = require('./merge').MergeModule

test('Insertion Sort', () => {
  let array = [6, 5, 3, 1, 8, 7, 2, 4]
  expect(insertionModule.sortA(array)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
  expect(insertionModule.sortB(array)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
  expect(insertionModule.sortR(array, array.length - 1)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
})

test('Selection Sort', () => {
  let array = [64, 25, 12, 22, 11]
  expect(selectionModule.sort(array)).toStrictEqual([11, 12, 22, 25, 64])
})

test('Bubble Sort', () => {
  let array = [5, 1, 4, 2, 8]
  expect(bubbleModule.sort(array)).toStrictEqual([1, 2, 4, 5, 8])
})

test('Merge Sort', () => {
  let array = [10, 20, 1, 4, 5, 8, 33, 200, 50]
  expect(mergeModule.sortTopDown(array)).toStrictEqual([1, 4, 5, 8, 10, 20, 33, 50, 200])
  expect(mergeModule.sortBottomUp(array)).toStrictEqual([1, 4, 5, 8, 10, 20, 33, 50, 200])
})
