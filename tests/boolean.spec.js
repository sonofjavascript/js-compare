import equal from '../src/index'

test('Compare true with true return true', () => {
  expect(equal(true, true)).toBeTruthy()
})

test('Compare false with false return true', () => {
  expect(equal(false, false)).toBeTruthy()
})

test('Compare true with false return false', () => {
  expect(equal(true, false)).toBeFalsy()
})

test('Compare false with true return false', () => {
  expect(equal(false, true)).toBeFalsy()
})

test('Compare true with undefined should return false', () => {
  expect(equal(true, undefined)).toBeFalsy()
})

test('Compare false with undefined should return false', () => {
  expect(equal(false, undefined)).toBeFalsy()
})

test('Compare true with null should return false', () => {
  expect(equal(true, null)).toBeFalsy()
})

test('Compare false with null should return false', () => {
  expect(equal(false, null)).toBeFalsy()
})

test('Compare true with number should return false', () => {
  expect(equal(true, 1)).toBeFalsy()
})

test('Compare false with number should return false', () => {
  expect(equal(false, 1)).toBeFalsy()
})

test('Compare true with a string should return false', () => {
  expect(equal(true, '::string::')).toBeFalsy()
})

test('Compare false with a string should return false', () => {
  expect(equal(false, '::string::')).toBeFalsy()
})

test('Compare true with array should return false', () => {
  expect(equal(true, [])).toBeFalsy()
})

test('Compare false with array should return false', () => {
  expect(equal(true, [])).toBeFalsy()
})

test('Compare true with object should return false', () => {
  expect(equal(true, {})).toBeFalsy()
})

test('Compare false with object should return false', () => {
  expect(equal(false, {})).toBeFalsy()
})

test('Compare true with symbol should return false', () => {
  expect(equal(true, Symbol('::symbol::'))).toBeFalsy()
})

test('Compare false with symbol should return false', () => {
  expect(equal(false, Symbol('::symbol::'))).toBeFalsy()
})
