import * as Utils from '@utils'

const equalArrays = (a, b, keys) => {
  if (a.length !== b.length) return false

  const n = (keys && keys.length) || a.length
  for (let i = 0; i < n; i++) {
    const key = (keys && keys[i]) || i
    const isEqual = equal(a[key], b[key])
    if (isEqual) continue

    return false
  }

  return true
}

const equalObjects = (a, b) => {
  const keysA = Utils.keys(a)
  const keysB = Utils.keys(b)

  if (keysA.length !== keysB.length) return false
  if (!equalArrays(keysA, keysB)) return false

  return equalArrays(a, b, keysA)
}

const equalSimple = (a, b) => {
  if (a !== b) return a !== a && b !== b // eslint-disable-line

  return a !== 0 || 1 / a === 1 / b
}

const equalSymbols = (a, b) => a.toString() === b.toString()

const equal = (a, b) => {
  if (Utils.isError(a) || Utils.isError(b)) throw new Error('Could not compare Error objects')
  if (Utils.isFunction(a) || Utils.isFunction(b)) throw new Error('Could not compare Function objects')

  if (!Utils.haveSameType(a, b)) return false

  if (Utils.isArray(a)) return equalArrays(a, b)
  if (Utils.isObject(a)) return equalObjects(a, b)
  if (Utils.isSymbol(a)) return equalSymbols(a, b)

  return equalSimple(a, b)
}

export default equal
