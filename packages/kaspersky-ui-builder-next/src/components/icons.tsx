import type { ElementType, SVGProps } from "react"
import {
  AppsGrid,
  ArrangeGrid,
  ArrowDown,
  ArrowRight,
  Code,
  BulbHintEurica,
  Calendar,
  CheckPoint,
  CheckedSquare,
  Component,
  Delete,
  DragDrop,
  FileAdd,
  Folder,
  Layers,
  Link,
  List,
  Loader,
  Menu,
  Menu2,
  Minus,
  Ok,
  Save as SaveIcon,
  Search as SearchIcon,
  Settings,
  StatusOkOutline,
  StatusInProgress,
  StatusInfoOutline,
  StatusWarningOutline,
  Switch,
  Tag,
  Text,
} from "@kl/hexa-ui-icons/16"
import { Close2, Undo } from "@kl/hexa-ui-icons/12"

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string }

function sized(Icon: ElementType, mirrored = false) {
  return function HexaIcon({ size = 16, style, ...props }: IconProps) {
    return <Icon height={size} style={mirrored ? { ...style, transform: "scaleX(-1)" } : style} width={size} {...props} />
  }
}

export const AlertCircle = sized(StatusWarningOutline)
export const AlertTriangle = sized(StatusWarningOutline)
export const Box = sized(Component)
export const Boxes = sized(AppsGrid)
export const Braces = sized(Code)
export const Check = sized(Ok)
export const CheckCircle2 = sized(StatusOkOutline)
export const ChevronDown = sized(ArrowDown)
export const ChevronRight = sized(ArrowRight)
export const FilePlus2 = sized(FileAdd)
export const FolderOpen = sized(Folder)
export const GripVertical = sized(DragDrop)
export const Layers3 = sized(Layers)
export const Redo2 = sized(Undo, true)
export const RotateCcw = sized(Undo)
export const Save = sized(SaveIcon)
export const Search = sized(SearchIcon)
export const Settings2 = sized(Settings)
export const Trash2 = sized(Delete)
export const Undo2 = sized(Undo)
export const X = sized(Close2)

export const paletteIcons: Record<string, ReturnType<typeof sized>> = {
  AppsGrid: sized(AppsGrid), ArrangeGrid: sized(ArrangeGrid), BulbHintEurica: sized(BulbHintEurica), Calendar: sized(Calendar),
  CheckPoint: sized(CheckPoint), CheckedSquare: sized(CheckedSquare), Component: sized(Component), Grid: sized(AppsGrid),
  Link: sized(Link), List: sized(List), Loader: sized(Loader), Menu: sized(Menu), Menu2: sized(Menu2), Minus: sized(Minus),
  Ok: sized(Ok), StatusInfoOutline: sized(StatusInfoOutline), StatusInProgress: sized(StatusInProgress), Switch: sized(Switch),
  Tag: sized(Tag), Text: sized(Text),
}
