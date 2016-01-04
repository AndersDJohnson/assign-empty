import objectAssign from 'object-assign'

export function assignToEmpty (...args) {
  return objectAssign({}, ...args)
}

const assign = objectAssign

export default assign
