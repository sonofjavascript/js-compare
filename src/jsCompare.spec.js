import equal from './index.js'

test('When first parameter is Error, should throw error', () => {
  try {
    equal(new Error())
  } catch (error) {
    expect(error.message).toEqual('Could not compare Error objects')
  }
})

test('When second parameter is Error, should throw error', () => {
  try {
    equal(null, new Error())
  } catch (error) {
    expect(error.message).toEqual('Could not compare Error objects')
  }
})

test('When first parameter is Function, should throw error', () => {
  try {
    equal(function () {})
  } catch (error) {
    expect(error.message).toEqual('Could not compare Function objects')
  }
})

test('When second parameter is Function, should throw error', () => {
  try {
    equal(null, function () {})
  } catch (error) {
    expect(error.message).toEqual('Could not compare Function objects')
  }
})

test('When parameters type are null and undefined, should return false', () => {
  const result = equal(null, undefined)
  expect(result).toBeFalsy()
})

test('When parameters type are distinct, should return false', () => {
  const result = equal(1, '::string::')
  expect(result).toBeFalsy()
})

test('When parameters are arrays with distinct length, should return false', () => {
  const result = equal([], [null])
  expect(result).toBeFalsy()
})

test('When parameters are arrays with same length but different elements, should return false', () => {
  const result = equal([undefined], [null])
  expect(result).toBeFalsy()
})

test('When parameters are equal arrays, should return true', () => {
  const result = equal(['::value::'], ['::value::'])
  expect(result).toBeTruthy()
})

test('When parameters are objects with distinct keys length, should return false', () => {
  const result = equal({}, { key: '::key::' })
  expect(result).toBeFalsy()
})

test('When parameters are objects with same keys length but distinct values, should return false', () => {
  const result = equal({ key: '::key1::' }, { key: '::key2::' })
  expect(result).toBeFalsy()
})

test('When parameters are objects with same keys length, same values but distinct order, should return true', () => {
  const result = equal({ key1: '::key1::', key2: '::key2::' }, { key2: '::key2::', key1: '::key1::' })
  expect(result).toBeTruthy()
})

test('When parameters are objects with same keys length, same values and same order, should return true', () => {
  const result = equal({ key1: '::key1::', key2: '::key2::' }, { key1: '::key1::', key2: '::key2::' })
  expect(result).toBeTruthy()
})

test('When parameters are symbols with distinct value, should return false', () => {
  const result = equal(Symbol('::symbol1::'), Symbol('::symbol2::'))
  expect(result).toBeFalsy()
})

test('When parameters are symbols with same value, should return true', () => {
  const result = equal(Symbol('::symbol::'), Symbol('::symbol::'))
  expect(result).toBeTruthy()
})

test('When parameters are NaN, should return true', () => {
  const result = equal(0 / 0, 0 / 0)
  expect(result).toBeTruthy()
})

test('When parameters are Numbers with 0 value, should return true', () => {
  const result = equal(0, 0)
  expect(result).toBeTruthy()
})

test('When parameters are Numbers with same value, should return true', () => {
  const result = equal(1, 1)
  expect(result).toBeTruthy()
})

test('When parameters are strings with same value, should return true', () => {
  const result = equal('::string::', '::string::')
  expect(result).toBeTruthy()
})
