import Button from '../../src/button/migration.json'
import Typography from '../../src/typography/__meta__/migration.json'
import Badge from '../../src/badge/__meta__/migration.json'
import Grid from '../../src/grid/__meta__/migration.json'
import Sidebar from '../../src/sidebar/__meta__/migration.json'
import Dropdown from '../../src/dropdown/__meta__/migration.json'
import Tag from '../../src/tag/__meta__/migration.json'
import Severity from '../../src/severity/__meta__/migration.json'
import Tabs from '../../src/tabs/__meta__/migration.json'
import Divider from '../../src/divider/__meta__/migration.json'
import Loader from '../../src/loader/__meta__/migration.json'
import Select from '../../src/select/__meta__/migration.json'
import Upload from '../../src/upload/__meta__/migration.json'
import InputNumber from '../../src/input/__meta__/migrationInputNumber.json'
import InputPassword from '../../src/input/__meta__/migrationInputPassword.json'
import TextArea from '../../src/input/__meta__/migrationTextArea.json'
import Pagination from '../../src/pagination/__meta__/migration.json'
import Search from '../../src/search/__meta__/migration.json'
import Toolbar from '../../src/toolbar/__meta__/migration.json'
import Modal from '../../src/modal/__meta__/migration.json'
import KeyValue from '../../src/key-value/__meta__/migration.json'


type BeforeAfterChange = {
  before: string,
  after: string,
  description?: string,
}

export type Change = {
  prop: string,
  changes: string | BeforeAfterChange,
}

type Labels = 'New'

export type row = {
  labels?: Labels,
  component: string,
  v6: string,
  v3: Change[] | string | undefined,
  v5: Change[] | string | undefined,
  common: Change[] | string | undefined,
}

export const data: row[] = [
  Button,
  Typography,
  Badge,
  Grid,
  Sidebar,
  Dropdown,
  Tag,
  Severity,
  Tabs,
  Divider,
  Loader,
  Select,
  InputNumber,
  InputPassword,
  TextArea,
  Upload,
  Pagination,
  Search,
  Toolbar,
  Modal,
  KeyValue
]
