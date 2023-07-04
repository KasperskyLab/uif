import { ComponentThemeContext } from '../config'
import { tree as treeUpload, treeSize as treeSizeUpload } from '../light/tree'

export const tree = ({ colors }: ComponentThemeContext) => treeUpload({ colors })
export const treeSize = treeSizeUpload
