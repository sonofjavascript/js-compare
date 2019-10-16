import equal from '../src/index'

test('Compare with same integer value should return true', () => {
  expect(equal(1, 1)).toBeTruthy()
})

test('Compare with distinct integer value should return false', () => {
  expect(equal(1, 0)).toBeFalsy()
})

test('Compare with same float value should return true', () => {
  expect(equal(0.1, 0.1)).toBeTruthy()
})

test('Compare with distinct integer value should return false', () => {
  expect(equal(100, 99)).toBeFalsy()
})

test('Compare integer with undefined should return false', () => {
  expect(equal(1, undefined)).toBeFalsy()
})

test('Compare float with undefined should return false', () => {
  expect(equal(0.1, undefined)).toBeFalsy()
})

test('Compare integer with null should return false', () => {
  expect(equal(1, null)).toBeFalsy()
})

test('Compare float with null should return false', () => {
  expect(equal(0.1, null)).toBeFalsy()
})

test('Compare integer with string should return false', () => {
  expect(equal(1, '::string::')).toBeFalsy()
})

test('Compare float with string should return false', () => {
  expect(equal(0.1, '::string::')).toBeFalsy()
})

test('Compare integer with boolean should return false', () => {
  expect(equal(9, true)).toBeFalsy()
})

test('Compare 1 with true should return false', () => {
  expect(equal(1, true)).toBeFalsy()
})

test('Compare 0 with true should return false', () => {
  expect(equal(0, true)).toBeFalsy()
})

test('Compare float with boolean should return false', () => {
  expect(equal(0.9, true)).toBeFalsy()
})

test('Compare integer with array should return false', () => {
  expect(equal(1, [])).toBeFalsy()
})

test('Compare float with array should return false', () => {
  expect(equal(0.1, [])).toBeFalsy()
})

test('Compare integer with object should return false', () => {
  expect(equal(1, {})).toBeFalsy()
})

test('Compare float with object should return false', () => {
  expect(equal(0.1, {})).toBeFalsy()
})

test('Compare integer with symbol should return false', () => {
  expect(equal(1, Symbol('::symbol::'))).toBeFalsy()
})

test('Compare float with symbol should return false', () => {
  expect(equal(0.1, Symbol('::symbol::'))).toBeFalsy()
})
