import equal from '../src/index'

test('Compare error on first parameter should throw error', () => {
  try {
    equal(new Error('::error::'))
  } catch ({ message }) {
    expect(message).toBe('Could not compare Error objects')
  }
})

test('Compare error on second parameter should throw error', () => {
  try {
    equal(new Error(null, '::error::'))
  } catch ({ message }) {
    expect(message).toBe('Could not compare Error objects')
  }
})
