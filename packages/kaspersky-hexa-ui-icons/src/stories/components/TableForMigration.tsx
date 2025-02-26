export type AddedObject = Record<string, JSX.Element>
export type ChangedObject = Record<string, { old: JSX.Element, current: JSX.Element }>

export const TableAdded: ({ addedObjects }: { addedObjects: AddedObject }) => JSX.Element = ({ addedObjects }) => {
  const valuesArray: any[] = Object.entries(addedObjects)
  return <table>
    <thead>
    <tr>
      <th key={1}>Name</th>
      <th key={2}>View</th>
    </tr>
    </thead>
    <tbody>
    {valuesArray.map((row, rowIndex) => (
      <tr key={rowIndex}>
        <td key={rowIndex + 'Name'}>{row[0]}</td>
        <td key={rowIndex + 'View'}>{row[1]}</td>
      </tr>
    ))}
    </tbody>
  </table>
}

export const TableChanged: ({ changedObjects }: { changedObjects: ChangedObject }) => JSX.Element = ({ changedObjects }) => {
  const valuesArray: any[] = Object.entries(changedObjects)
  return <table>
    <thead>
    <tr>
      <th key={1}>Name</th>
      <th key={2}>Old view</th>
      <th key={3}>New view</th>
    </tr>
    </thead>
    <tbody>
    {valuesArray.map((row, rowIndex) => (
      <tr key={rowIndex}>
        <td key={rowIndex + 'Name'}>{row[0]}</td>
        <td key={rowIndex + 'ViewOld'}>{row[1].old}</td>
        <td key={rowIndex + 'ViewCurrent'}>{row[1].current}</td>
      </tr>
    ))}
    </tbody>
  </table>
}
