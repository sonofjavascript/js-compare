import equal from '@equal'

test('Compare empty arrays should return true', () => {
  const array1 = []
  const array2 = []
  expect(equal(array1, array2)).toBeTruthy()
})

test('Compare same arrays should return true', () => {
  const array1 = ['::value1::']
  const array2 = ['::value1::']
  expect(equal(array1, array2)).toBeTruthy()
})

test('Compare arrays with same but unordered values should return false', () => {
  const array1 = ['::value1::', '::value2::']
  const array2 = ['::value2::', '::value1::']
  expect(equal(array1, array2)).toBeFalsy()
})

test('Compare arrays with distinct number keys should return false', () => {
  const array1 = ['::value1::', '::value2::']
  const array2 = ['::value2::']
  expect(equal(array1, array2)).toBeFalsy()
})

test('Compare distinct arrays should return false - 1', () => {
  const array1 = { key1: '::value1::' }
  const array2 = { key2: '::value2::' }
  expect(equal(array1, array2)).toBeFalsy()
})

test('Compare distinct arrays should return false - 2', () => {
  const array1 = { key1: 1 }
  const array2 = { key1: '::value1::' }
  expect(equal(array1, array2)).toBeFalsy()
})

test('Compare distinct arrays should return false - 3', () => {
  const array1 = { key1: [] }
  const array2 = { key1: {} }
  expect(equal(array1, array2)).toBeFalsy()
})

test('Compare with undefined should return false', () => {
  expect(equal([], undefined)).toBeFalsy()
})

test('Compare with null should return false', () => {
  expect(equal([], null)).toBeFalsy()
})

test('Compare with number should return false', () => {
  expect(equal([], 1)).toBeFalsy()
})

test('Compare with string should return false', () => {
  expect(equal([], '::string::')).toBeFalsy()
})

test('Compare with boolean should return false', () => {
  expect(equal([], true)).toBeFalsy()
})

test('Compare with object should return false', () => {
  expect(equal([], {})).toBeFalsy()
})

test('Compare with symbol should return false', () => {
  expect(equal([], Symbol('::symbol::'))).toBeFalsy()
})
