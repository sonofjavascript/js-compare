import equal from '@equal'

test('Compare Function on first parameter should throw error', () => {
  function a () {}

  try {
    equal(a)
  } catch ({ message }) {
    expect(message).toBe('Could not compare Function objects')
  }
})

test('Compare Function on second parameter should throw error', () => {
  function a () {}

  try {
    equal(null, a)
  } catch ({ message }) {
    expect(message).toBe('Could not compare Function objects')
  }
})

test('Compare arrow Function on first parameter should throw error', () => {
  const a = () => {}

  try {
    equal(a)
  } catch ({ message }) {
    expect(message).toBe('Could not compare Function objects')
  }
})

test('Compare arrow Function on second parameter should throw error', () => {
  const a = () => {}

  try {
    equal(null, a)
  } catch ({ message }) {
    expect(message).toBe('Could not compare Function objects')
  }
})
