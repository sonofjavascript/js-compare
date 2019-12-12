import isEmpty from './isEmpty'

test('Error type as parameter should throw Error', () => {
  try {
    isEmpty(new Error())
  } catch (error) {
    expect(error.message).toEqual('Could not check if Error is empty')
  }
})

test('Function type as parameter should throw Error', () => {
  try {
    const a = function () {}
    isEmpty(a)
  } catch (error) {
    expect(error.message).toEqual('Could not check if Function is empty')
  }
})

test('Object type as parameter should return true when is empty', () => {
  expect(isEmpty({})).toBeTruthy()
})

test('Object type as parameter should return false when not is empty', () => {
  expect(isEmpty({ key: '::value::' })).toBeFalsy()
})

test('Array type as parameter should return true when is empty', () => {
  expect(isEmpty([])).toBeTruthy()
})

test('Array type as parameter should return false when not is empty', () => {
  expect(isEmpty(['::value::'])).toBeFalsy()
})

test('null type as parameter should return true when is empty', () => {
  expect(isEmpty(null)).toBeTruthy()
})

test('undefined type as parameter should return true when is empty', () => {
  expect(isEmpty()).toBeTruthy()
})

test('Value type as parameter should return false when is not empty', () => {
  expect(isEmpty('::value::')).toBeFalsy()
})
