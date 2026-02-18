import { PropsWithTooltip } from '@sb/helpers'
import { AccordionPanelProps, AccordionProps } from '@src/accordion'
import { defaultArgs } from '@src/accordion/stories/constants'
import { AlertProps } from '@src/alert'
import { BadgeProps } from '@src/badge'
import { ButtonProps, SplitButtonProps } from '@src/button'
import { CodeCompareProps } from '@src/code-compare'
import { DropdownProps } from '@src/dropdown'
import { HorizontalNavProps } from '@src/horizontal-nav/types'
import { LicenseCardProps } from '@src/license-card'
import { LoadingOverlayProps } from '@src/loading-overlay'
import { LockGroupProps } from '@src/lock-group/types'
import { MenuProps } from '@src/menu'
import { MenuStoryProps } from '@src/menu/stories/Menu.stories'
import { PageHeaderProps } from '@src/page-header'
import { PanelProps } from '@src/panel'
import { PlaceholderProps } from '@src/placeholder'
import { QuickFilterProps } from '@src/quick-filter/types'
import { SkeletonProps } from '@src/skeleton'
import { SpaceProps } from '@src/space'
import { StatusCardProps } from '@src/status-card'
import { ToggleProps } from '@src/toggle'
import { ToggleButtonProps } from '@src/toggle-button/types'
import { TopNavigationProps } from '@src/top-navigation/types'
import { UploaderProps } from '@src/upload'
import { FileItemProps } from '@src/upload/UploadList/FileItem'
import { WizardSidebarProps } from '@src/wizard/types'
import { InputType } from 'storybook/internal/types'

export type Components =
  { type: 'accordion', props: AccordionProps & AccordionPanelProps & typeof defaultArgs } |
  { type: 'alert', props: AlertProps } |
  { type: 'badge', props: PropsWithTooltip<BadgeProps> } |
  { type: 'button', props: PropsWithTooltip<ButtonProps> & SplitButtonProps } |
  { type: 'codeCompare', props: CodeCompareProps } |
  { type: 'dropdown', props: DropdownProps } |
  { type: 'horizontalNav', props: HorizontalNavProps } |
  { type: 'loadingOverlay', props: LoadingOverlayProps } |
  { type: 'licenseCard', props: LicenseCardProps } |
  { type: 'lockGroup', props: LockGroupProps } |
  { type: 'menu', props: MenuProps & MenuStoryProps } |
  { type: 'pageHeader', props: PageHeaderProps } |
  { type: 'panel', props: PanelProps } |
  { type: 'placeholder', props: PlaceholderProps } |
  { type: 'quickFilter', props: QuickFilterProps } |
  { type: 'skeleton', props: SkeletonProps } |
  { type: 'space', props: SpaceProps } |
  { type: 'statusCard', props: StatusCardProps } |
  { type: 'toggle', props: ToggleProps & { compositionTooltip?: string } } |
  { type: 'toggleButton', props: ToggleButtonProps } |
  { type: 'topNavigation', props: TopNavigationProps } |
  { type: 'uploader', props: UploaderProps } |
  { type: 'uploaderFileItem', props: FileItemProps } |
  { type: 'wizard', props: WizardSidebarProps }

type GetComponentProps<T extends Components['type']> = Extract<Components, { type: T }>['props']

type ControlConfig = {
  description: string,
  control?: InputType['control'],
  options?: string[],
  defaultValue?: unknown
}

type PropControl<Component extends Components['type']> = Partial<{
  [propName in keyof GetComponentProps<Component>]: ControlConfig
}>

const shared = {
  children: {
    description: 'React children'
  },
  disabled: {
    description: 'Недоступное состояние'
  },
  loading: {
    description: 'Состояние загрузки'
  },
  mode: {
    description: 'Цветовой режим'
  },
  size: {
    description: 'Размер'
  },
  actions: {
    description: 'Набор действий'
  },
  tooltip: {
    description: 'Тултип'
  }
}

type DesignControlsConfig = {
  [componentName in Components['type']]: PropControl<componentName>
}

export const designControlsConfig: DesignControlsConfig = {
  accordion: {
    accordion: {
      description: 'Открытие одного или нескольких аккордеонов одновременно'
    },
    withBorder: {
      description: 'Отображать компонент с рамкой'
    },
    titleSize: {
      description: 'Размер заголовка'
    },
    title: {
      description: 'Заголовок'
    },
    disabled: shared.disabled,
    tagBeforeLabel: {
      description: 'Текст тега до заголовка (не является пропом аккордеона)'
    },
    tagBeforeMode: {
      description: 'Цветовой режим тега до заголовка (не является пропом аккордеона)'
    },
    additionalText: {
      description: 'Дополнительный текст'
    },
    indicatorMode: {
      description: 'Цветовой режим индикатора (не является пропом аккордеона)'
    },
    tagAfterLabel: {
      description: 'Текст тега после заголовка (не является пропом аккордеона)'
    },
    tagAfterMode: {
      description: 'Цветовой режим тега после заголовка (не является пропом аккордеона)'
    },
    shouldDisableActions: {
      description: 'Следует заблокировать действия, когда панель аккордеона находится в недоступном состоянии'
    }
  },
  alert: {
    mode: shared.mode,
    actions: shared.actions,
    closable: {
      description: 'Показать/скрыть возможность удаления элемента'
    },
    children: shared.children,
    width: {
      description: 'Ширина в пикселях'
    }
  },
  badge: {
    mode: shared.mode,
    size: {
      control: false,
      description: 'Все возможные комбинации размеров и модов можно посмотреть в сторе `Size`'
    },
    count: {
      description: 'Отображаемое число'
    },
    overflowCount: {
      description: 'Максимальное значение, которое может отображаться'
    },
    text: {
      description: 'Текст вместо числа'
    },
    tooltip: shared.tooltip
  },
  button: {
    mode: shared.mode,
    size: shared.size,
    disabled: shared.disabled,
    loading: shared.loading,
    iconBefore: {
      description: 'Иконка до текста'
    },
    text: {
      description: 'Текст'
    },
    iconAfter: {
      description: 'Иконка после текста'
    },
    dropdownPlacement: {
      description: 'Расположение выпадающего списка'
    },
    tooltip: shared.tooltip
  },
  codeCompare: {
    oldValue: {
      description: 'Исходный код'
    },
    newValue: {
      description: 'Сравниваемый код'
    },
    loading: shared.loading
  },
  dropdown: {
    disabled: shared.disabled,
    loading: shared.loading,
    placement: {
      description: 'Расположение выпадающего списка'
    }
  },
  horizontalNav: {},
  loadingOverlay: {
    description: {
      description: 'Подсказка'
    },
    size: shared.size
  },
  lockGroup: {
    title: {
      description: 'Заголовок'
    },
    titleLevel: {
      description: 'Размер заголовка'
    },
    statusText: {
      description: 'Текст статуса'
    },
    informationText: {
      description: 'Дополнительная информация в поповере infoButton'
    },
    isLockDisabled: {
      description: 'Доступное или недоступное состояние toggle'
    },
    isGroupDisabled: {
      description: 'Доступное или недоступное состояние контента'
    }
  },
  menu: {
    width: {
      description: 'Ширина меню в исходном состоянии'
    },
    collapsedWidth: {
      description: 'Ширина меню в свернутом состоянии'
    },
    applyAppTheme: {
      description: 'Если FALSE, то меню всегда темное независимо от текущей темы'
    },
    navItems: {
      description: 'Массив элементов меню'
    },
    navUserItems: {
      description: 'Массив элементов меню пользователя (нижняя секция меню)'
    },
    favItems: {
      description: 'Массив закрепленных элементов меню'
    },
    submenuItems: {
      description: 'Массив элементов Submenu'
    },
    showLogo: {
      description: 'Меню без Логотипа'
    }
  },
  pageHeader: {
    title: {
      description: 'Заголовок страницы'
    },
    description: {
      description: 'Описание страницы'
    },
    breadcrumbs: {
      description: 'Хлебные крошки',
      control: { type: 'boolean' }
    },
    iconBefore: {
      description: 'Иконка перед заголовком',
      control: {
        type: 'select'
      },
      options: [
        'No iconBefore',
        'Placeholder',
        'Settings'
      ]
    },
    tagsAfter: {
      description: 'Теги после заголовка',
      control: { type: 'boolean' },
      defaultValue: true
    },
    elementAfter: {
      description: 'Слот для кастомного контента',
      control: { type: 'select' },
      options: [
        'No elementAfter',
        'Icon',
        'Tag',
        'Textbox',
        'Button'
      ]
    }
  },
  panel: {
    resizeHandle: {
      description: 'Позиция линии-контрола изменения ширины панели'
    },
    title: {
      description: 'Текст заголовка'
    },
    titleSize: {
      description: 'Размер заголовка'
    },
    closable: {
      description: 'Возможность закрыть панель'
    },
    resizable: {
      description: 'Возможность ресайзить панель'
    },
    initialSize: {
      description: 'Изначальный размер панели'
    },
    elementAfter: {
      description: 'ReactNode после заголовка'
    },
    sectionBottom: {
      description: 'ReactNode в нижней части панели'
    },
    padding: {
      description: 'Возможность изменить padding панели'
    }
  },
  placeholder: {
    mode: shared.mode,
    size: shared.size,
    image: {
      description: 'Вариант изображения'
    },
    title: {
      description: 'Текст заголовка'
    },
    description: {
      description: 'Описание'
    },
    textAlign: {
      description: 'Выравнивание текста'
    },
    actionButtons: shared.actions,
    actionLinks: shared.actions
  },
  quickFilter: {
    filters: {
      description: 'Массив фильтров',
      control: false
    },
    disabled: shared.disabled,
    labelPosition: {
      description: 'Расположение лейбла'
    }
  },
  skeleton: {
    size: shared.size,
    flexWidth: {
      description: 'Делает Skeleton адаптивным по ширине, сохраняя фиксированную высоту'
    }
  },
  space: {
    align: {
      description: 'Задаёт выравнивание элементов'
    },
    direction: {
      description: 'Направление расположения элементов внутри'
    },
    gap: {
      description: 'Размер отступа между элементами\n\nclosest — 2px, dependent — 4px, related — 8px, grouped — 16px, section — 24px, separated — 32px'
    },
    maxWidth: {
      description: 'Максимальная ширина контейнера\n\nnone — без ограничений, medium — 872px, large — 1592px'
    },
    width: {
      description: 'Управляет шириной контейнера'
    },
    wrap: {
      description: 'Определяет, могут ли элементы переноситься на новую строку/колонку при нехватке места'
    }
  },
  statusCard: {
    mode: shared.mode,
    size: shared.size,
    image: {
      description: 'Включить/выключить изображение'
    },
    title: {
      description: 'Текст заголовка'
    },
    description: {
      description: 'Текст карточки (может содержать ссылки)'
    },
    actions: shared.actions,
    iconVariant: {
      description: 'Выбор вида иконки'
    },
    children: shared.children,
    width: {
      description: 'Ширина в пикселях'
    }
  },
  toggle: {
    tooltip: {
      description: 'Тултип компонента'
    },
    compositionTooltip: {
      description: 'Тултип для композиции'
    }
  },
  toggleButton: {
    text: {
      description: 'Текст на кнопке'
    },
    size: shared.size,
    mode: shared.mode,
    elementAfter: {
      description: 'Иконка/элемент перед текстом'
    },
    iconBefore: {
      description: 'Иконка/элемент после текста'
    },
    disabled: shared.disabled,
    loading: shared.loading,
    tooltip: shared.tooltip
  },
  uploader: {
    size: shared.size,
    description: {
      description: 'Дополнительный текст'
    },
    disabled: shared.disabled,
    maxCount: {
      description: 'Максимальное количество загружаемых файлов'
    },
    maxFileSize: {
      description: 'Максимальный размер одного файла (Килобайт)'
    },
    maxTotalSize: {
      description: 'Максимальный общий размер всех файлов (Килобайт)'
    }
  },
  uploaderFileItem: {
    name: {
      description: 'Имя файла'
    },
    truncateName: {
      description: 'Обрезать длинное имя файла'
    },
    status: {
      description: 'Статус загрузки файла'
    },
    error: {
      description: 'Текст сообщения'
    },
    disabled: shared.disabled
  },
  wizard: {
    steps: {
      description: 'Шаги визарда'
    },
    lastItem: {
      description: 'Включить признак последнего шага'
    }
  },
  topNavigation: {
    title: {
      description: 'Название продукта'
    },
    notificationIndicator: {
      description: 'Красный индикатор непрочитанных уведомлений'
    },
    notificationButtonProps: {
      description: 'При наличии объекта отображает кнопку нотификаций',
      control: { type: 'boolean' }
    }
  },
  licenseCard: {
    title: {
      description: 'Название лицензии'
    },
    number: {
      description: 'Номер лицензии'
    },
    expirationDate: {
      description: 'Дата окончания лицензии'
    },
    daysRemaining: {
      description: 'Оставшиеся дни лицензии'
    },
    activationDate: {
      description: 'Дата активации лицензии'
    },
    term: {
      description: 'Срок действия лицензии'
    },
    iconBefore: {
      description: 'Иконка перед название'
    },
    elementAfter: {
      description: 'Элемент после название (виден только в компактном режиме)'
    },
    compact: {
      description: 'Режим компактного отображения',
      control: { type: 'boolean' }
    },
    minWidth: {
      description: 'минимальная ширина'
    },
    actions: shared.actions
  }
}
