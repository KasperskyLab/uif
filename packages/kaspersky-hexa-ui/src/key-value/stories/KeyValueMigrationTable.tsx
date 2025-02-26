import React from 'react'
import styled from 'styled-components'

const StyledTableContainer = styled.div`
  &&&&& {
    td, th, tr {
      background: transparent;
    }
  }
`

const dataCommon = [
  {
    keyValueProp: 'gridLayout',
    fieldSetProp: 'gridLayout',
    comment: <>
      gridLayout.cols[0] → gridLayout.firstCol<br/>
      gridLayout.cols[1] → gridLayout.secondCol <br/>
      Остальные поля gridLayout, помимо cols, игнорируются, так как не предусмотрены дизайн системой
    </>
  },
  {
    keyValueProp: 'keyRequired',
    fieldSetProp: '-',
    comment: '@deprecated Лучше указывать каждому айтему собственный required, но в KeyValueMapper размапливается для каждого айтема FieldSet'
  },
  {
    keyValueProp: 'keyTooltip',
    fieldSetProp: '-',
    comment: '@deprecated Лучше указывать каждому айтему собственный tooltip, но в KeyValueMapper размапливается для каждого айтема FieldSet'
  },
  {
    keyValueProp: 'keyMode',
    fieldSetProp: '-',
    comment: '@deprecated У лейбла есть только один мод в соответствии с ДС'
  },
  {
    keyValueProp: 'labelPosition',
    fieldSetProp: 'labelPosition',
    comment: <>none → before<br/>aside → before<br/>top → top<br/>right → after</>
  },
  {
    keyValueProp: 'data',
    fieldSetProp: 'items',
    comment: 'Рассматривается ниже'
  },
  {
    keyValueProp: 'rowHeight',
    fieldSetProp: '-',
    comment: 'Внутри KeyValue не используется вообще'
  },
  {
    keyValueProp: 'padding',
    fieldSetProp: 'items[n].marginBefore',
    comment: 'Задает межстрочное расстояние. В FieldSet задается для каждого отдельного айтема'
  },
  {
    keyValueProp: 'keysMargin',
    fieldSetProp: '-',
    comment: '@deprecated Отступ между лейблом и контролом. Сейчас такого пропа нет, если требуется, чтобы ширина лейбла отличалась от установленных дизайн-системой 235px, то лучше воспользоваться gridLayout'
  },
  {
    keyValueProp: 'wrapperClasses',
    fieldSetProp: 'fieldWrapperClassNames',
    comment: <>
      wrapperClasses.keyClassName → fieldWrapperClassNames.labelClassName<br/>
      wrapperClasses.valueClassName → fieldWrapperClassNames.controlClassName
    </>
  },
  {
    keyValueProp: '-',
    fieldSetProp: 'className',
    comment: 'Задает класс для всего FieldSet'
  },
  {
    keyValueProp: '-',
    fieldSetProp: 'disabled',
    comment: 'Если контролы задаются через объект, то проп долетит до всех контролов. Если внутри контрола объявлено свое значение для disabled, то внутриконтролный disabled перекроет этот общий проп'
  },
  {
    keyValueProp: '-',
    fieldSetProp: 'labelType',
    comment: 'Тип лейбла, примеры в сторях Field'
  },
  {
    keyValueProp: '-',
    fieldSetProp: 'controlWidth',
    comment: 'Ширина контрола в пикселях'
  }
]

export const KeyValueMigrationTable = () => {
  return (
    <StyledTableContainer>
      <table>
        <thead>
        <tr>
          <td><b>KeyValue</b></td>
          <td><b>FieldSet</b></td>
          <td><b>Комментарий</b></td>
        </tr>
        </thead>
        <tbody>
        {
          dataCommon.map((item, index) => (
            <tr key={index}>
              <td>{item.keyValueProp}</td>
              <td>{item.fieldSetProp}</td>
              <td>{item.comment}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </StyledTableContainer>
  )
}

const dataItem = [
  {
    keyValueProp: 'pairKey',
    fieldSetProp: 'label',
    comment: 'Лейбл контрола'
  },
  {
    keyValueProp: 'pairValue',
    fieldSetProp: 'control',
    comment: 'Сам контрол. Но в FieldSet контрол предпочтительно описывать через объект, а не JSX'
  },
  {
    keyValueProp: 'key',
    fieldSetProp: '-',
    comment: 'Не практической пользы'
  },
  {
    keyValueProp: '-',
    fieldSetProp: '...data[n]',
    comment: 'Описано в сторе FieldSet'
  }
]

export const DataItemsTable = () => (
  <StyledTableContainer>
    <table>
      <thead>
      <tr>
        <td><b>KeyValue.data</b></td>
        <td><b>FieldSet.items</b></td>
        <td><b>Комментарий</b></td>
      </tr>
      </thead>
      <tbody>
      {
        dataItem.map((item, index) => (
          <tr key={index}>
            <td>{item.keyValueProp}</td>
            <td>{item.fieldSetProp}</td>
            <td>{item.comment}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  </StyledTableContainer>
)
