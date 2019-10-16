import * as Utils from './utils'

test('isArray - Should return false when parameter is undefined', () => {
  const result = Utils.isArray()
  expect(result).toBeFalsy()
})

test('isArray - Should return false when parameter is not an object', () => {
  const result = Utils.isArray(1)
  expect(result).toBeFalsy()
})

test('isArray - Should return false when parameter is not an array', () => {
  const result = Utils.isArray({})
  expect(result).toBeFalsy()
})

test('isArray - Should return true when parameter an array', () => {
  const result = Utils.isArray([])
  expect(result).toBeTruthy()
})

test('isObject - Should return false when parameter is undefined', () => {
  const result = Utils.isObject()
  expect(result).toBeFalsy()
})

test('isObject - Should return false when parameter is not an object', () => {
  const result = Utils.isObject(1)
  expect(result).toBeFalsy()
})

test('isObject - Should return false when parameter is not an object', () => {
  const result = Utils.isObject([])
  expect(result).toBeFalsy()
})

test('isObject - Should return true when parameter an array', () => {
  const result = Utils.isObject({})
  expect(result).toBeTruthy()
})

test('isError - Should return false when parameter is undefined', () => {
  const result = Utils.isError()
  expect(result).toBeFalsy()
})

test('isError - Should return false when parameter is not an Error', () => {
  const result = Utils.isError({})
  expect(result).toBeFalsy()
})

test('isError - Should return false when Error message type is undefined', () => {
  const error = new Error()
  error.message = undefined
  const result = Utils.isError(error)
  expect(result).toBeFalsy()
})

test('isError - Should return true when parameter is an Error', () => {
  const result = Utils.isError(new Error())
  expect(result).toBeTruthy()
})

test('isFunction - Should return false when parameter is undefined', () => {
  const result = Utils.isFunction()
  expect(result).toBeFalsy()
})

test('isFunction - Should return false when parameter is not a Function', () => {
  const result = Utils.isFunction(1)
  expect(result).toBeFalsy()
})

test('isFunction - Should return true when parameter is not Function', () => {
  const result = Utils.isFunction(function () {})
  expect(result).toBeTruthy()
})

test('isSymbol - Should return false when parameter is undefined', () => {
  const result = Utils.isSymbol()
  expect(result).toBeFalsy()
})

test('isSymbol - Should return false when parameter not a symbol', () => {
  const result = Utils.isSymbol(1)
  expect(result).toBeFalsy()
})

test('isSymbol - Should return true when parameter is asymbol', () => {
  const result = Utils.isSymbol(Symbol('::symbol::'))
  expect(result).toBeTruthy()
})

test('haveSameType - Should return true when parameters are undefined', () => {
  const result = Utils.haveSameType()
  expect(result).toBeTruthy()
})

test('haveSameType - Should return true when parameters are null', () => {
  const result = Utils.haveSameType(null, null)
  expect(result).toBeTruthy()
})

test('haveSameType - Should return true when parameters are numbers', () => {
  const result = Utils.haveSameType(1, 9)
  expect(result).toBeTruthy()
})

test('haveSameType - Should return true when parameters are strings', () => {
  const result = Utils.haveSameType('::string1::', '::string2::')
  expect(result).toBeTruthy()
})

test('haveSameType - Should return true when parameters are objects', () => {
  const result = Utils.haveSameType({}, { key: '::value::' })
  expect(result).toBeTruthy()
})

test('haveSameType - Should return true when parameters are arrays', () => {
  const result = Utils.haveSameType([], ['::value::'])
  expect(result).toBeTruthy()
})

test('keys - Given object should return its keys as an array', () => {
  const result = Utils.keys({ key1: '::value::1', key2: '::value2::' })
  expect(result).toEqual(['key1', 'key2'])
})
