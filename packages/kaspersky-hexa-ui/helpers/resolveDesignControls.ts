import { AlertProps } from '@src/alert'
import { BadgeProps } from '@src/badge'
import { ButtonProps } from '@src/button'
import { LockGroupProps } from '@src/lock-group/types'
import { PageHeaderProps } from '@src/page-header'
import { QuickFilterProps } from '@src/quick-filter/types'
import { StatusCardProps } from '@src/status-card'
import { ToggleProps } from '@src/toggle'
import { UploaderProps } from '@src/upload'
import { FileItemProps } from '@src/upload/UploadList/FileItem'
import { PropsWithTooltip } from '@sb/helpers'
import { InputType } from '@storybook/types'

export type Components =
  { type: 'alert', props: AlertProps } |
  { type: 'badge', props: PropsWithTooltip<BadgeProps> } |
  { type: 'button', props: PropsWithTooltip<ButtonProps> } |
  { type: 'lockGroup', props: LockGroupProps } |
  { type: 'pageHeader', props: PageHeaderProps } |
  { type: 'quickFilter', props: QuickFilterProps} |
  { type: 'statusCard', props: StatusCardProps } |
  { type: 'toggle', props: ToggleProps & { compositionTooltip?: string } } |
  { type: 'uploader', props: UploaderProps } |
  { type: 'uploaderFileItem', props: FileItemProps }

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
    loading: {
      description: 'Состояние загрузки'
    },
    iconBefore: {
      description: 'Иконка до текста'
    },
    text: {
      description: 'Текст'
    },
    iconAfter: {
      description: 'Иконка после текста'
    },
    tooltip: shared.tooltip
  },
  lockGroup: {
    title: {
      description: 'Заголовок'
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
  }
}
