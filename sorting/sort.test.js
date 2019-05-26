/* global test, expect */
const insertionModule = require('./insertion').InsertionModule
const selectionModule = require('./selection').SelectionModule
const bubbleModule = require('./bubble').BubbleModule

test('Insertion Sort test', () => {
  let array = [6, 5, 3, 1, 8, 7, 2, 4]
  expect(insertionModule.sortA(array)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
  expect(insertionModule.sortB(array)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
  expect(insertionModule.sortR(array, array.length - 1)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
})

test('Selection Sort test', () => {
  let array = [64, 25, 12, 22, 11]
  expect(selectionModule.sort(array)).toStrictEqual([11, 12, 22, 25, 64])
})

test('Bubble Sort test', () => {
  let array = [5, 1, 4, 2, 8]
  expect(bubbleModule.sort(array)).toStrictEqual([1, 2, 4, 5, 8])
})
