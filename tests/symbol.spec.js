import equal from '../src/index'

test('Compare with same symbol string should return true', () => {
  expect(equal(Symbol('::symbol::'), Symbol('::symbol::'))).toBeTruthy()
})

test('Compare with distinct symbol string should return false', () => {
  expect(equal(Symbol('::symbol-1::'), Symbol('::symbol-2::'))).toBeFalsy()
})

test('Compare with undefined should return false', () => {
  expect(equal(Symbol('::symbol::'), undefined)).toBeFalsy()
})

test('Compare with null should return false', () => {
  expect(equal(Symbol('::symbol::'), null)).toBeFalsy()
})

test('Compare with number should return false', () => {
  expect(equal(Symbol('::symbol::'), 1)).toBeFalsy()
})

test('Compare with array should return false', () => {
  expect(equal(Symbol('::symbol::'), [])).toBeFalsy()
})

test('Compare with object should return false', () => {
  expect(equal(Symbol('::symbol::'), {})).toBeFalsy()
})
