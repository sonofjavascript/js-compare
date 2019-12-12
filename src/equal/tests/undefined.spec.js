import equal from '@equal'

test('Compare same undefined should return true', () => {
  expect(equal(undefined, undefined)).toBeTruthy()
})

test('Compare undefined with null should return false', () => {
  expect(equal(undefined, null)).toBeFalsy()
})

test('Compare undefined with number should return false', () => {
  expect(equal(undefined, 1)).toBeFalsy()
})

test('Compare undefined with string should return false', () => {
  expect(equal(undefined, '::string::')).toBeFalsy()
})

test('Compare undefined with array should return false', () => {
  expect(equal(undefined, [])).toBeFalsy()
})

test('Compare undefined with object should return false', () => {
  expect(equal(undefined, {})).toBeFalsy()
})

test('Compare undefined with symbol should return false', () => {
  expect(equal(undefined, Symbol('::symbol::'))).toBeFalsy()
})
