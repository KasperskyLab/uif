import { SelectProps, LabelValue } from '@src/select/types'
import { v1 as uuidV1 } from 'uuid'

export const createUniqueSelectElementFromLabel = (label?: LabelValue): Exclude<LabelValue, string> => {
  if (typeof label !== 'object' && typeof label !== 'number') {
    return {
      label: label,
      value: uuidV1(),
      key: uuidV1()
    }
  }
  return label
}

export const prepareValues = (value: SelectProps['value']): SelectProps['value'] => {
  if (Array.isArray(value)) {
    return value.map(createUniqueSelectElementFromLabel)
  }
  return [createUniqueSelectElementFromLabel(value)]
}

export const addNewValue = (currenValue: LabelValue[], newValue: unknown) => {
  if (Array.isArray(newValue)) {
    let addedElement: LabelValue = newValue[newValue.length - 1]
    if (typeof addedElement !== 'object' && typeof addedElement !== 'number') {
      addedElement = {
        label: addedElement,
        value: uuidV1(),
        key: uuidV1()
      }
    }
    return [...currenValue, addedElement]
  }
  return newValue
}

export const removeValue = (currenValue: SelectProps['value'], newValue: unknown) => {
  if (Array.isArray(newValue) && Array.isArray(currenValue)) {
    const localCurrentValue = [...currenValue]
    if (newValue.length === 0) {
      return []
    }
    const removedIndex = localCurrentValue.findIndex((el, i) => {
      if (typeof el === 'object') return newValue[i] !== el?.value
      return newValue[i] !== el
    })
    localCurrentValue.splice(removedIndex, 1)
    return localCurrentValue
  }
  return newValue
}
