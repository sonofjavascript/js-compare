import equal from '@equal'

test('Compare with same string should return true', () => {
  expect(equal('::string::', '::string::')).toBeTruthy()
})

test('Compare with distinct string should return false', () => {
  expect(equal('::string-1::', '::string-2::')).toBeFalsy()
})

test('Compare with undefined should return false', () => {
  expect(equal('::string::', undefined)).toBeFalsy()
})

test('Compare with null should return false', () => {
  expect(equal('::string::', null)).toBeFalsy()
})

test('Compare with number should return false', () => {
  expect(equal('::string::', 1)).toBeFalsy()
})

test('Compare with array should return false', () => {
  expect(equal('::string::', [])).toBeFalsy()
})

test('Compare with object should return false', () => {
  expect(equal('::string::', {})).toBeFalsy()
})

test('Compare with symbol should return false', () => {
  expect(equal('::string::', Symbol('::symbol::'))).toBeFalsy()
})
