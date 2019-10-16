import * as Utils from './utils'

const arrays = (a, b, keys) => {
  if (a.length !== b.length) return false

  var n = (keys && keys.length) || a.length
  for (var i = 0; i < n; i++) {
    var key = (keys && keys[i]) || i
    var isEqual = equal(a[key], b[key])
    if (isEqual) continue

    return false
  }

  return true
}

const objects = (a, b) => {
  var keysA = Utils.keys(a)
  var keysB = Utils.keys(b)

  if (keysA.length !== keysB.length) return false
  if (!arrays(keysA, keysB)) return false

  return arrays(a, b, keysA)
}

const simple = (a, b) => {
  if (a !== b) return a !== a && b !== b // eslint-disable-line

  return a !== 0 || 1 / a === 1 / b
}

const symbols = (a, b) => a.toString() === b.toString()

const equal = (a, b) => {
  if (Utils.isError(a) || Utils.isError(b)) throw new Error('Could not compare Error objects')
  if (Utils.isFunction(a) || Utils.isFunction(b)) throw new Error('Could not compare Function objects')

  if (!Utils.haveSameType(a, b)) return false

  if (Utils.isArray(a)) return arrays(a, b)
  if (Utils.isObject(a)) return objects(a, b)
  if (Utils.isSymbol(a)) return symbols(a, b)

  return simple(a, b)
}

export default equal
