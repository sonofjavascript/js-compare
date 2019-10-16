export const isArray = value => value && typeof value === 'object' && value.constructor === Array

export const isObject = value => value && typeof value === 'object' && value.constructor === Object

export const isError = value => value instanceof Error && typeof value.message !== 'undefined'

export const isFunction = value => value && {}.toString.call(value) === '[object Function]'

export const isSymbol = value => typeof value === 'symbol'

const type = object => Object.prototype.toString.call(object)

export const haveSameType = (a, b) => type(a) === type(b)

export const keys = value => Object.getOwnPropertyNames(value).sort()
