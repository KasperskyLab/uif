import { TableAdded, TableChanged, ChangedObject, AddedObject } from '../components/TableForMigration'

const addedObjects_2_6_X: AddedObject = {
  'size/name1.svg': <>View</>,
  'size/name2.svg': <>View</>
}

export const Added_2_6_X = (): JSX.Element => <TableAdded
  addedObjects={addedObjects_2_6_X}
/>

const changedObjects_2_6_X: ChangedObject = {
  'size/name1.svg': {
    old: <>Old view</>,
    current: <>New view</>
  },
  'size/name2.svg': {
    old: <>Old view</>,
    current: <>New view</>
  }
}

export const Changed_2_6_X = (): JSX.Element => <TableChanged
  changedObjects={changedObjects_2_6_X}
/>
