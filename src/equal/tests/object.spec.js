import equal from '@equal'

test('Compare empty objects should return true', () => {
  const object1 = {}
  const object2 = {}
  expect(equal(object1, object2)).toBeTruthy()
})

test('Compare same objects should return true', () => {
  const object1 = { key1: '::value1::' }
  const object2 = { key1: '::value1::' }
  expect(equal(object1, object2)).toBeTruthy()
})

test('Compare same objects with unordered keys should return true', () => {
  const object1 = { key1: '::value1::', key2: '::value2::' }
  const object2 = { key2: '::value2::', key1: '::value1::' }
  expect(equal(object1, object2)).toBeTruthy()
})

test('Compare distinct objects should return false - 1', () => {
  const object1 = { key1: '::value1::' }
  const object2 = { key2: '::value2::' }
  expect(equal(object1, object2)).toBeFalsy()
})

test('Compare distinct objects should return false - 2', () => {
  const object1 = { key1: 1 }
  const object2 = { key1: '::value1::' }
  expect(equal(object1, object2)).toBeFalsy()
})

test('Compare distinct objects should return false - 3', () => {
  const object1 = { key1: [] }
  const object2 = { key1: {} }
  expect(equal(object1, object2)).toBeFalsy()
})

test('Compare objects with distinct keys length, should return false', () => {
  const result = equal({}, { key: '::key::' })
  expect(result).toBeFalsy()
})

test('Compare with undefined should return false', () => {
  expect(equal({}, undefined)).toBeFalsy()
})

test('Compare with null should return false', () => {
  expect(equal({}, null)).toBeFalsy()
})

test('Compare with number should return false', () => {
  expect(equal({}, 1)).toBeFalsy()
})

test('Compare with string should return false', () => {
  expect(equal({}, '::string::')).toBeFalsy()
})

test('Compare with array should return false', () => {
  expect(equal({}, [])).toBeFalsy()
})

test('Compare with symbol should return false', () => {
  expect(equal({}, Symbol('::symbol::'))).toBeFalsy()
})
