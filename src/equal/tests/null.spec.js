import equal from '@equal'

test('Compare with null should return true', () => {
  expect(equal(null, null)).toBeTruthy()
})

test('Compare with undefined should return false', () => {
  expect(equal(null, undefined)).toBeFalsy()
})

test('Compare with number should return false', () => {
  expect(equal(null, 1)).toBeFalsy()
})

test('Compare with string should return false', () => {
  expect(equal(null, '::string::')).toBeFalsy()
})

test('Compare with boolean should return false', () => {
  expect(equal(null, true)).toBeFalsy()
})

test('Compare with array should return false', () => {
  expect(equal(null, [])).toBeFalsy()
})

test('Compare with object should return false', () => {
  expect(equal(null, {})).toBeFalsy()
})

test('Compare with symbol should return false', () => {
  expect(equal(null, Symbol('::symbol::'))).toBeFalsy()
})
