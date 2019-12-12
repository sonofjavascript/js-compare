import Utils from '@utils'

const isEmpty = value => {
  if (Utils.isError(value)) throw new Error('Could not check if Error is empty')
  if (Utils.isFunction(value)) throw new Error('Could not check if Function is empty')

  if (Utils.isObject(value)) return !Object.keys(value).length
  if (Utils.isArray(value)) return !value.length

  return !value
}

export default isEmpty
