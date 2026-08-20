import { Component, type ComponentType, type ReactNode } from "react"
// Hexa components use Ant classes for their base geometry. Import only the
// component styles used by Preview; the aggregate Hexa stylesheet also ships
// global resets that leak into the builder UI.
import "antd/lib/alert/style/index.css"
import "antd/lib/badge/style/index.css"
import "antd/lib/breadcrumb/style/index.css"
import "antd/lib/button/style/index.css"
import "antd/lib/card/style/index.css"
import "antd/lib/checkbox/style/index.css"
import "antd/lib/collapse/style/index.css"
import "antd/lib/date-picker/style/index.css"
import "antd/lib/divider/style/index.css"
import "antd/lib/dropdown/style/index.css"
import "antd/lib/empty/style/index.css"
import "antd/lib/form/style/index.css"
import "antd/lib/grid/style/index.css"
import "antd/lib/input/style/index.css"
import "antd/lib/input-number/style/index.css"
import "antd/lib/list/style/index.css"
import "antd/lib/menu/style/index.css"
import "antd/lib/modal/style/index.css"
import "antd/lib/pagination/style/index.css"
import "antd/lib/popover/style/index.css"
import "antd/lib/progress/style/index.css"
import "antd/lib/radio/style/index.css"
import "antd/lib/select/style/index.css"
import "antd/lib/skeleton/style/index.css"
import "antd/lib/space/style/index.css"
import "antd/lib/spin/style/index.css"
import "antd/lib/switch/style/index.css"
import "antd/lib/table/style/index.css"
import "antd/lib/tabs/style/index.css"
import "antd/lib/tag/style/index.css"
import "antd/lib/time-picker/style/index.css"
import "antd/lib/tooltip/style/index.css"
import "antd/lib/tree-select/style/index.css"
import "antd/lib/upload/style/index.css"
import { Accordion, AccordionPanel } from "@kaspersky/hexa-ui/accordion"
import { Alert } from "@kaspersky/hexa-ui/alert"
import { Badge } from "@kaspersky/hexa-ui/badge"
import { Breadcrumbs } from "@kaspersky/hexa-ui/breadcrumbs"
import { Button } from "@kaspersky/hexa-ui/button"
import { Calendar, RangePicker } from "@kaspersky/hexa-ui/datepicker"
import { Card } from "@kaspersky/hexa-ui/card"
import { Checkbox, CheckboxGroup } from "@kaspersky/hexa-ui/checkbox"
import { Divider } from "@kaspersky/hexa-ui/divider"
import { GlobalStyle as HexaGlobalStyle } from "@kaspersky/hexa-ui/design-system/global-style"
import { Field } from "@kaspersky/hexa-ui/field"
import { FieldSet } from "@kaspersky/hexa-ui/field-set"
import { Grid, GridItem } from "@kaspersky/hexa-ui/grid"
import { HorizontalNav } from "@kaspersky/hexa-ui/horizontal-nav"
import { Textbox } from "@kaspersky/hexa-ui/input"
import { KeyValue } from "@kaspersky/hexa-ui/key-value"
import { Link } from "@kaspersky/hexa-ui/link"
import { Loader } from "@kaspersky/hexa-ui/loader"
import { LoadingOverlay } from "@kaspersky/hexa-ui/loading-overlay"
import { Modal } from "@kaspersky/hexa-ui/modal"
import { Pagination } from "@kaspersky/hexa-ui/pagination"
import { Panel } from "@kaspersky/hexa-ui/panel"
import { Placeholder } from "@kaspersky/hexa-ui/placeholder"
import { Popover } from "@kaspersky/hexa-ui/popover"
import { ProgressBar } from "@kaspersky/hexa-ui/progress-bar"
import { Radio } from "@kaspersky/hexa-ui/radio"
import { Repeater } from "@kaspersky/hexa-ui/repeater"
import { Search } from "@kaspersky/hexa-ui/search"
import { SectionMessage } from "@kaspersky/hexa-ui/section-message"
import { SegmentedControl } from "@kaspersky/hexa-ui/segmented-control"
import { Select } from "@kaspersky/hexa-ui/select"
import { Skeleton } from "@kaspersky/hexa-ui/skeleton"
import { Space } from "@kaspersky/hexa-ui/space"
import { Status } from "@kaspersky/hexa-ui/status"
import { Table } from "@kaspersky/hexa-ui/table"
import { Tabs } from "@kaspersky/hexa-ui/tabs"
import { Tag } from "@kaspersky/hexa-ui/tag"
import { TimeInput, RangeTimeInput } from "@kaspersky/hexa-ui/time-input"
import { Toggle } from "@kaspersky/hexa-ui/toggle"
import {
  ToggleButton,
  ToggleButtonGroup,
} from "@kaspersky/hexa-ui/toggle-button"
import { Tooltip } from "@kaspersky/hexa-ui/tooltip"
import { TreeSelect } from "@kaspersky/hexa-ui/tree-select"
import { Heading, Text } from "@kaspersky/hexa-ui/typography"
import { Uploader } from "@kaspersky/hexa-ui/upload"
import { Wizard } from "@kaspersky/hexa-ui/wizard"
import type { FormSchema, SchemaNode } from "../domain/form-schema.ts"

type PreviewComponent = ComponentType<Record<string, unknown>>
type TabsComponent = PreviewComponent & { TabPane: PreviewComponent }

const components: Record<string, PreviewComponent> = {
  Accordion: Accordion as unknown as PreviewComponent,
  AccordionPanel: AccordionPanel as unknown as PreviewComponent,
  Alert: Alert as unknown as PreviewComponent,
  Badge: Badge as unknown as PreviewComponent,
  Breadcrumbs: Breadcrumbs as unknown as PreviewComponent,
  Button: Button as unknown as PreviewComponent,
  Calendar: Calendar as unknown as PreviewComponent,
  Card: Card as unknown as PreviewComponent,
  Checkbox: Checkbox as unknown as PreviewComponent,
  CheckboxGroup: CheckboxGroup as unknown as PreviewComponent,
  Divider: Divider as unknown as PreviewComponent,
  Field: Field as unknown as PreviewComponent,
  FieldSet: FieldSet as unknown as PreviewComponent,
  Grid: Grid as unknown as PreviewComponent,
  GridItem: GridItem as unknown as PreviewComponent,
  Heading: Heading as unknown as PreviewComponent,
  HorizontalNav: HorizontalNav as unknown as PreviewComponent,
  KeyValue: KeyValue as unknown as PreviewComponent,
  Link: Link as unknown as PreviewComponent,
  Loader: Loader as unknown as PreviewComponent,
  LoadingOverlay: LoadingOverlay as unknown as PreviewComponent,
  Modal: Modal as unknown as PreviewComponent,
  Pagination: Pagination as unknown as PreviewComponent,
  Panel: Panel as unknown as PreviewComponent,
  Placeholder: Placeholder as unknown as PreviewComponent,
  Popover: Popover as unknown as PreviewComponent,
  ProgressBar: ProgressBar as unknown as PreviewComponent,
  Radio: Radio as unknown as PreviewComponent,
  RangePicker: RangePicker as unknown as PreviewComponent,
  RangeTimeInput: RangeTimeInput as unknown as PreviewComponent,
  Repeater: Repeater as unknown as PreviewComponent,
  Search: Search as unknown as PreviewComponent,
  SectionMessage: SectionMessage as unknown as PreviewComponent,
  SegmentedControl: SegmentedControl as unknown as PreviewComponent,
  Select: Select as unknown as PreviewComponent,
  Skeleton: Skeleton as unknown as PreviewComponent,
  Space: Space as unknown as PreviewComponent,
  Status: Status as unknown as PreviewComponent,
  Table: Table as unknown as PreviewComponent,
  Tabs: Tabs as unknown as PreviewComponent,
  Tag: Tag as unknown as PreviewComponent,
  Text: Text as unknown as PreviewComponent,
  Textbox: Textbox as unknown as PreviewComponent,
  TimeInput: TimeInput as unknown as PreviewComponent,
  Toggle: Toggle as unknown as PreviewComponent,
  ToggleButton: ToggleButton as unknown as PreviewComponent,
  ToggleButtonGroup: ToggleButtonGroup as unknown as PreviewComponent,
  Tooltip: Tooltip as unknown as PreviewComponent,
  TreeSelect: TreeSelect as unknown as PreviewComponent,
  Uploader: Uploader as unknown as PreviewComponent,
  Wizard: Wizard as unknown as PreviewComponent,
}

const safeDefaults: Record<string, Record<string, unknown>> = {
  Accordion: { defaultActiveKey: [] },
  AccordionPanel: { key: "panel", title: "Секция" },
  Breadcrumbs: { routes: [] },
  CheckboxGroup: { options: [] },
  FieldSet: { items: [] },
  Grid: { layout: { cols: [1] } },
  HorizontalNav: { items: [] },
  KeyValue: { data: [] },
  Modal: { visible: true, header: "Модальное окно" },
  Pagination: { current: 1, pageSize: 10, total: 0 },
  Placeholder: { title: "Пустое состояние" },
  Alert: { mode: "info", title: "Сообщение" },
  ProgressBar: { mode: "accent", percent: 0 },
  Radio: { options: [] },
  Repeater: { data: [{}], component: null },
  SectionMessage: { mode: "info", text: "Сообщение" },
  SegmentedControl: { tabsData: [], contentData: {} },
  Select: { options: [] },
  Table: { columns: [], dataSource: [] },
  Tooltip: { text: "Подсказка" },
  ToggleButton: { value: "" },
  ToggleButtonGroup: { items: [], value: [], onChange: () => undefined },
  TreeSelect: { treeData: [] },
  Uploader: { fileList: [] },
  Wizard: {
    view: "page",
    steps: [{ name: "Шаг 1", render: () => "Содержимое шага" }],
  },
}

const nestingOffsets: Record<string, number> = {
  none: 0,
  related: 8,
  grouped: 16,
  section: 24,
  separated: 32,
  space1: 24,
  space2: 48,
  space3: 72,
}

const verticalMargins: Record<string, number> = {
  none: 0,
  related: 8,
  grouped: 16,
  section: 24,
  separated: 32,
  space1: 12,
  space2: 24,
  space3: 36,
  negative1: -12,
  negative2: -24,
  negative3: -36,
}

const rightMargins: Record<string, number> = {
  none: 0,
  related: 8,
  grouped: 16,
  section: 24,
  separated: 32,
  space1: 24,
  space2: 48,
  space3: 72,
}

class PreviewErrorBoundary extends Component<
  { children: ReactNode; node: SchemaNode },
  { error?: Error }
> {
  state: { error?: Error } = {}

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    if (this.state.error)
      return (
        <div className="preview-fallback preview-error">
          <strong>{this.props.node.type}</strong>
          <span>{this.state.error.message}</span>
        </div>
      )
    return this.props.children
  }
}

function previewChildren(node: SchemaNode) {
  return node.children?.map((child) => (
    <PreviewNode key={child.id} node={child} />
  ))
}

function PreviewNode({ node }: { node: SchemaNode }) {
  if (node.state?.visible === false) return null
  const Preview = components[node.type]
  const children = previewChildren(node)
  if (!Preview)
    return (
      <div className={`preview-fallback preview-${node.type.toLowerCase()}`}>
        <span>{node.type}</span>
        {children}
      </div>
    )

  const props: Record<string, unknown> = {
    ...safeDefaults[node.type],
    ...node.props,
    ...(node.state?.disabled ? { disabled: true } : {}),
    ...(node.state?.readOnly ? { readOnly: true } : {}),
    ...(node.state?.loading ? { loading: true } : {}),
    ...(node.state?.invalid ? { invalid: true } : {}),
  }
  if (node.type === "Field" && children?.length)
    props.control = <div className="preview-field-control">{children}</div>
  if (node.type === "Field") {
    const labelPositions = { left: "before", top: "top", right: "after" }
    props.labelPosition = labelPositions[node.style?.labelPosition ?? "left"]
    props.labelType = node.style?.labelType ?? "default"
    if (node.style?.controlWidth) props.controlWidth = node.style.controlWidth
    if (node.style?.tooltipWidth) props.popoverWidth = node.style.tooltipWidth
  }
  if (node.type === "Accordion" && node.children?.length)
    props.defaultActiveKey = node.children.map((child) => child.id)
  if (node.type === "Repeater" && children?.length) {
    props.component = children[0]
    if (!Array.isArray(props.data) || props.data.length === 0) props.data = [{}]
  }
  if (node.type === "Modal") {
    props.visible = true
    props.content = children?.length ? children : props.content
  }
  if (node.type === "Popover") {
    props.content = children?.length ? children : (props.content ?? "Popover")
    props.visible = true
  }
  if (node.type === "Wizard" && node.children?.length) {
    props.view = "page"
    props.steps = node.children.map((child, index) => ({
      name: String(child.alias ?? child.id ?? `Шаг ${index + 1}`),
      render: () => <PreviewNode node={child} />,
    }))
  }

  let content: ReactNode = (() => {
    if (node.type === "Button") return String(node.props.text ?? "Button")
    if (node.type === "Text" || node.type === "Heading")
      return String(node.props.title ?? node.props.text ?? node.type)
    if (node.type === "Tag") return String(node.props.label ?? "Tag")
    if (node.type === "Link") return String(node.props.text ?? "Link")
    return children
  })()

  if (node.type === "Tabs" && node.children?.length) {
    const TabPane = (Tabs as unknown as TabsComponent).TabPane
    content = node.children.map((child, index) => (
      <TabPane
        key={child.id}
        tab={String(child.alias ?? child.id ?? `Вкладка ${index + 1}`)}
      >
        <PreviewNode node={child} />
      </TabPane>
    ))
    if (props.defaultActiveKey === undefined)
      props.defaultActiveKey = node.children[0]?.id
  }
  if (node.type === "Modal" || node.type === "Wizard") content = undefined
  if (node.type === "Popover")
    content = <Button>Открыть popover</Button>

  return (
    <PreviewErrorBoundary node={node}>
      <div
        className={`preview-component preview-component-${node.type.toLowerCase()} ${node.style?.cssClass ?? ""}`.trim()}
        data-component={node.type}
        style={{
          marginLeft: nestingOffsets[node.style?.nestingLevel ?? "none"] ?? 0,
          marginTop: verticalMargins[node.style?.marginTop ?? "none"] ?? 0,
          marginBottom:
            verticalMargins[node.style?.marginBottom ?? "none"] ?? 0,
          marginRight: rightMargins[node.style?.marginRight ?? "none"] ?? 0,
        }}
      >
        <Preview {...props}>{content}</Preview>
      </div>
    </PreviewErrorBoundary>
  )
}

export function FormPreview({ form }: { form: FormSchema }) {
  return (
    <>
      <HexaGlobalStyle />
      <div className="form-preview">
        <div className="preview-form-title">
          {form.settings?.title ?? form.name}
        </div>
        <div className="preview-form-content">
          {form.elements.map((node) => (
            <PreviewNode key={node.id} node={node} />
          ))}
          {!form.elements.length && (
            <div className="empty-inline">В форме пока нет компонентов</div>
          )}
        </div>
      </div>
    </>
  )
}
