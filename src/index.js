import objectAssign from 'object-assign'

export function assignToEmpty (...args) {
  return objectAssign({}, ...args)
}

export const assign = objectAssign

export default assignToEmpty

