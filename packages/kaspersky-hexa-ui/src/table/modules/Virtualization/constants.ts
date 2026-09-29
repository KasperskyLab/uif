/** Class names shared between the virtualization module and the table stylesheet.
 *  Kept import-free so the stylesheet can use them without pulling the module graph in. */

/** Marks the empty rows that stand in for rows outside the window. */
export const VIRTUAL_SPACER_CLASS = 'hexa-ui-virtual-spacer'

/** Marks the cells of the empty columns that stand in for columns outside the window. */
export const SPACER_CELL_CLASS = 'hexa-ui-virtual-spacer-cell'

export const SPACER_COLUMN_KEY = 'hexa-ui-virtual-spacer-column'
