import { InteractiveTourStep } from '@src/onboarding'

import {
  actions,
  findVisible,
  presetRow,
  selectors as s,
  TourDriver
} from './driver'
import { ids } from './fixtures'

export type PresetTourStep = Omit<InteractiveTourStep, 'beforeStep' | 'target'> & {
  target: string,
  prepare?: () => Promise<void>,
  advanceOn?: string,
  isDone?: () => boolean
}

export const makeSteps = (d: TourDriver): PresetTourStep[] => [
  {
    target: s.presets,
    title: '1. Пресеты таблицы',
    text: 'Пресет запоминает конфигурацию таблицы: видимость, порядок и ширину колонок, фильтры, сортировку, группировку и число строк на странице. Откройте меню по этой иконке или нажмите Next.',
    advanceOn: s.presets
  },
  {
    target: s.menu,
    title: 'Меню пресетов',
    prepare: d.openMenu,
    text: 'Здесь выбирают сохранённую конфигурацию. Сверху находится View, ниже его пресеты. Активный отмечен. Дефолтный идёт первым, пользовательские сортируются по названию. Описание под названием помогает понять состав колонок.'
  },
  {
    target: presetRow(ids.teamDefault),
    title: 'Системный пресет',
    text: '«Все сотрудники» — системная исходная конфигурация view «Команда». Её нельзя обновить, переименовать или удалить. После изменений можно сохранить собственную копию.'
  },
  {
    target: presetRow(ids.developers),
    title: 'Применим другой пресет',
    text: 'Выберите «Разработчики». Он одновременно включит фильтр по команде Developers, сортировку по сотруднику, группировку по команде и 50 строк на странице. Пресет применяется целиком; текущие несохранённые изменения при переключении теряются без подтверждения.',
    advanceOn: presetRow(ids.developers)
  },
  {
    target: s.header,
    title: 'Настройки действительно применились',
    prepare: async () => { await d.selectPreset(ids.developers) },
    text: 'В таблице остались разработчики, появились чипс фильтра, группировка и значок сортировки. Размер страницы — 50. Сохранённые фильтры могут быть колоночными и сайдбарными; источник фильтра не меняет смысл пресета.'
  },
  {
    target: s.settings,
    title: 'Теперь создадим свою конфигурацию',
    prepare: async () => { await d.selectPreset(ids.teamDefault) },
    text: 'Мы вернули «Все сотрудники». Откройте настройки таблицы: здесь меняются видимость и порядок колонок, а на соседней вкладке — группировка. Next тоже откроет настройки.',
    advanceOn: s.settings
  },
  {
    target: s.trainee,
    title: 'Скроем колонку «Стажёр»',
    prepare: d.openSettings,
    text: 'Снимите флажок «Стажёр». Это пока черновик в панели настроек. Порядок колонок меняется перетаскиванием за маркеры. Чтобы изменения попали в таблицу, их нужно применить.',
    advanceOn: `${s.trainee} input`
  },
  {
    target: s.apply,
    title: 'Применим изменения таблицы',
    prepare: async () => { await d.setTrainee(false) },
    text: 'Нажмите Apply / Save в настройках. Эта кнопка применяет колонки к таблице. Сохранение пресета — отдельное действие: сам пресет здесь ещё не меняется.',
    advanceOn: s.apply
  },
  {
    target: s.presets,
    title: 'Появился индикатор изменений',
    prepare: async () => {
      await d.apply()
      await d.wait(() => !!d.state().presets.isPresetDirty, 'индикатор после скрытия колонки')
    },
    text: 'На иконке появился индикатор: рабочее состояние отличается от сохранённого пресета. «Все сотрудники» остаётся активным. Изменения не сохраняются автоматически, даже если конфигурация совпадёт с другим пресетом.'
  },
  {
    target: s.create,
    title: 'Сохраним новый пресет',
    prepare: d.openMenu,
    text: 'У системного пресета доступно Save as a new preset. Update отсутствует: системную конфигурацию перезаписать нельзя. Создадим пользовательский пресет из текущего состояния.',
    advanceOn: s.create
  },
  {
    target: s.name,
    placement: 'top',
    title: 'Имя нового пресета',
    prepare: async () => {
      if (!d.state().presets.isCreatePresetOpen) await d.click(s.create)
    },
    text: 'Имя обязательно и должно быть уникальным внутри текущего view, длина — до 255 символов. Описание вручную не вводится. Можно вписать своё имя; если оставить поле пустым, следующий шаг продемонстрирует проверку.'
  },
  {
    target: s.name,
    placement: 'top',
    title: 'Проверка имени',
    prepare: async () => {
      const input = await d.waitForTarget(s.name) as HTMLInputElement
      if (!input?.value.trim()) await d.click(s.confirm)
    },
    text: 'Пустое имя не позволяет сохранить пресет: форма показывает ошибку. Введите, например, «Моя команда», затем Save. По Next тур заполнит пустое поле и сохранит. После создания новый пресет станет активным.',
    advanceOn: s.confirm,
    isDone: () => !d.state().presets.isCreatePresetOpen && d.state().presets.currentPreset?.id === ids.created
  },
  {
    target: s.presets,
    title: 'Пресет сохранён',
    prepare: async () => {
      await d.saveForm('Моя команда')
      await d.wait(() => d.state().presets.currentPreset?.id === ids.created && !d.state().presets.isPresetDirty, 'создание пресета')
    },
    text: 'Новый пресет активен, индикатор исчез. Сохранена текущая конфигурация без колонки «Стажёр». В этой демонстрации данные хранятся только до перезагрузки стори; в продукте за хранение отвечает его API.'
  },
  {
    target: s.resize,
    title: 'Особый случай: ширина колонок',
    prepare: d.closeMenus,
    text: 'Перетащите правую границу колонки «Сотрудник». Изменение только ширины не включает индикатор. Если нажать Next, тур сам увеличит ширину на 120 px.'
  },
  {
    target: s.presets,
    title: 'Ширина изменилась, индикатора нет',
    prepare: d.resize,
    text: 'Это ожидаемое поведение: ширина входит в сохраняемые настройки, но сама по себе не делает пресет изменённым. Чтобы увидеть сохранение ширины, добавим изменение сортировки и обновим пресет.'
  },
  {
    target: s.sort,
    title: 'Добавим сортировку',
    prepare: async () => {
      await d.click(s.header)
      await d.wait(() => !!document.querySelector(s.sort), 'меню сортировки')
    },
    text: 'Выберите сортировку по возрастанию. Сортировка уже считается изменением пресета. При следующем сохранении в него попадёт и новая ширина колонки.',
    advanceOn: s.sort
  },
  {
    target: s.presets,
    title: 'Индикатор снова появился',
    prepare: async () => {
      if (d.state().sorting.direction !== 'asc') await d.click(s.sort)
      await d.closeMenus()
      await d.wait(() => !!d.state().presets.isPresetDirty, 'индикатор после сортировки')
    },
    text: 'Причина индикатора — сортировка, а не ширина. Изменения видимости, порядка колонок, фильтров, группировки и размера страницы также могут требовать сохранения. Порядок обычных фильтров сам по себе не меняет пресет.'
  },
  {
    target: s.update,
    title: 'Update или Save as new?',
    prepare: d.openMenu,
    text: 'Пользовательский пресет позволяет либо обновить активный через Update preset, либо сохранить отдельный через Save as a new preset. Сейчас выберем Update: имя и идентификатор сохранятся, настройки обновятся.',
    advanceOn: s.update,
    isDone: () => !d.state().presets.isPresetDirty
  },
  {
    target: s.presets,
    title: 'Ширина тоже сохранилась',
    prepare: async () => {
      const updateButton = findVisible(s.update)
      if (d.state().presets.isPresetDirty && updateButton && !updateButton.classList.contains('ant-btn-loading')) {
        await d.click(s.update)
      }
      await d.wait(() => !d.state().presets.isPresetDirty, 'обновление пресета')
      const saved = d.backend().lastSaved?.settings.columns?.fullname?.width
      if (saved !== d.state().presets.columnsState?.fullname?.width) throw new Error('Ширина не попала в сохранённый пресет')
      await d.closeMenus()
      await d.pause()
      await d.selectPreset(ids.teamDefault)
      await d.pause()
    },
    text: 'Изменения сохранены вместе с шириной. Мы сделали паузу и выбрали системный пресет «Все сотрудники»: у него исходная ширина и видна колонка «Стажёр». Посмотрите на разницу. На следующем шаге вернём пользовательский пресет.'
  },
  {
    target: s.header,
    title: 'Проверка восстановления',
    prepare: async () => {
      await d.selectPreset(ids.created)
      await d.pause()
      await d.wait(
        () => d.state().presets.columnsState?.fullname?.width === d.backend().lastSaved?.settings.columns?.fullname?.width,
        'восстановление ширины'
      )
    },
    text: 'После переключения вернулись увеличенная ширина, сортировка и скрытая колонка. Это та конфигурация, которую мы явно сохранили через Update.'
  },
  {
    target: actions(ids.created),
    title: 'Действия над пресетом',
    prepare: d.openMenu,
    text: 'У пользовательского пресета есть меню «…» при наведении. В нём доступны Rename и дополнительные действия продукта. Delete у выбранного пресета заблокирован: удалить можно только другой пользовательский пресет. У системного пресета этого меню нет.',
    advanceOn: actions(ids.created)
  },
  {
    target: s.custom,
    title: 'Дополнительное действие продукта',
    prepare: async () => { await d.openActions() },
    text: 'В view «Команда» мы добавили «Посмотреть сохранённую конфигурацию». Нажмите: уведомление покажет данные выбранного пресета, включая сохранённую ширину. Это действие получает именно пресет из строки меню.',
    advanceOn: s.custom
  },
  {
    target: s.rename,
    title: 'Переименование',
    prepare: async () => {
      if (!d.backend().customActionCount) await d.click(s.custom)
      await d.openActions()
    },
    text: 'Rename изменяет имя пользовательского пресета. Его настройки и принадлежность к view сохраняются. Можно переименовать также неактивный пресет.',
    advanceOn: s.rename
  },
  {
    target: s.name,
    placement: 'top',
    title: 'Новое имя',
    prepare: async () => {
      if (!d.state().presets.presetToRename) await d.click(s.rename)
      await d.inputName('Моя команда — сохранено')
    },
    text: 'Сохраним новое имя. Правила имени те же, что при создании. По Next будет сохранено введённое значение.',
    advanceOn: s.confirm,
    isDone: () => !d.state().presets.presetToRename
  },
  {
    target: s.settings,
    title: 'Сброс к текущему пресету',
    prepare: async () => {
      await d.saveForm('Моя команда — сохранено')
      await d.closeMenus()
    },
    text: 'Теперь посмотрим Reset settings. При выбранном пресете сброс настроек колонок и группировки возвращает их к сохранённому состоянию этого пресета. Это не выбор системного пресета и не общий сброс всех фильтров и сортировки.',
    advanceOn: s.settings
  },
  {
    target: s.reset,
    title: 'Внесём несохранённое изменение',
    prepare: async () => {
      await d.setTrainee(true)
      await d.apply()
      await d.openSettings()
    },
    text: 'Мы снова включили и применили колонку «Стажёр». Индикатор отмечает отличие от пресета. В пресете колонка по-прежнему скрыта. Нажмите Reset settings: сначала появится подтверждение.',
    advanceOn: s.reset
  },
  {
    target: s.resetConfirm,
    title: 'Подтверждение сброса',
    prepare: async () => {
      if (!findVisible(s.resetConfirm)) await d.click(s.reset)
    },
    text: 'Подтвердите сброс. Изменения колонок и группировки будут отменены до сохранённого состояния текущего пресета. После этого применим восстановленный черновик.',
    advanceOn: s.resetConfirm
  },
  {
    target: s.apply,
    title: 'Применим восстановленные настройки',
    prepare: async () => {
      if (findVisible(s.resetConfirm)) await d.click(s.resetConfirm)
    },
    text: '«Стажёр» снова выключен, как и в сохранённом пресете. Нажмите Apply / Save. Сам пресет при сбросе не перезаписывается.',
    advanceOn: s.apply
  },
  {
    target: s.delete,
    title: 'Удаление соседнего пресета',
    prepare: async () => {
      await d.apply()
      d.backend().beforeDeleteState = d.tableSnapshot()
      await d.openActions(ids.developers)
    },
    text: 'Активным остаётся наш сохранённый пресет. Открыто меню соседнего, невыбранного пресета «Разработчики»: его можно удалить. У выбранного пресета Delete недоступен. Системный пресет также нельзя удалить.',
    advanceOn: s.delete
  },
  {
    target: s.confirm,
    title: 'Подтверждение удаления',
    prepare: async () => {
      if (!d.state().presets.presetToDelete) await d.click(s.delete)
      await d.waitForTarget(s.confirm)
      if (d.state().presets.presetToDelete?.id !== ids.developers) throw new Error('Для удаления выбран другой пресет')
    },
    text: 'В подтверждении указан соседний пресет «Разработчики». Нажмите Delete. Он исчезнет из списка, а активный пользовательский пресет и настройки таблицы останутся прежними.',
    advanceOn: s.confirm,
    isDone: () => (
      !d.state().presets.presetToDelete &&
  d.state().presets.currentView?.presets.some(
    preset => preset.id === ids.developers
  ) === false
    )
  },
  {
    target: presetRow(ids.created),
    title: 'Соседний пресет удалён, активный сохранён',
    prepare: async () => {
      if (d.state().presets.presetToDelete) {
        const confirm = await d.waitForTarget(
          s.confirm
        ) as HTMLButtonElement

        if (!confirm.disabled) {
          confirm.click()
        }
      }

      await d.wait(
        () => d.state().presets.currentView?.presets.some(
          preset => preset.id === ids.developers
        ) === false,
        'удаление соседнего пресета'
      )

      if (d.tableSnapshot() !== d.backend().beforeDeleteState) {
        throw new Error('Удаление соседнего пресета изменило таблицу')
      }

      await d.openMenu()
    },
    text: '«Разработчики» исчез из списка. Наш пресет по-прежнему выбран: ширина, колонки, сортировка, фильтры и группировка таблицы не изменились. Пустого выбора после этой операции нет.'
  },
  {
    target: s.delete,
    title: 'Выбранный пресет удалить нельзя',
    prepare: async () => {
      await d.openActions(ids.created)
      const item = await d.waitForTarget(s.delete)
      if (item.getAttribute('aria-disabled') !== 'true') throw new Error('Delete выбранного пресета должен быть заблокирован')
    },
    text: 'Теперь открыто меню активного пресета. Delete заблокирован. Чтобы удалить этот пресет, сначала выберите другой, затем откройте меню прежнего. Переименование и дополнительные actions остаются доступны.'
  },
  {
    target: s.view,
    title: 'Что такое View?',
    prepare: async () => {
      await d.closeMenus()
      await d.openMenu()
    },
    text: 'View — режим работы продукта с таблицей. У него свои название, описание, список пресетов, системный пресет, дополнительные actions и действия тулбара. Пользователь не создаёт и не редактирует views в этом меню.'
  },
  {
    target: '.ant-select-dropdown:not(.ant-select-dropdown-hidden)',
    title: 'Название и описание View',
    prepare: async () => {
      const select = document.querySelector(`${s.view} .ant-select-selector`)
      select?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    },
    text: '«Команда» — работа с сотрудниками; «Бюджет» — финансовый сценарий. Описание объясняет назначение режима. Выберите «Бюджет». При одном view селектор скрыт; views также можно вообще не использовать.',
    advanceOn: '.ant-select-dropdown [data-value="tour-budget"]'
  },
  {
    target: s.budgetAction,
    title: 'View изменил тулбар',
    prepare: async () => {
      await d.switchView(ids.budget)
      await d.closeMenus()
    },
    text: 'Вместо «Добавить сотрудника» появилась кнопка «Подготовить бюджет». Состав действий определяет view. Одновременно применился системный пресет бюджета с собственными колонками. Несохранённые изменения предыдущего режима при смене view не переносятся.'
  },
  {
    target: s.menu,
    title: 'Внутри каждого View свои пресеты',
    prepare: d.openMenu,
    text: 'Здесь только «Обзор бюджета» и «Мой бюджет». Пресеты «Команды» сюда не попали. Создание нового добавило бы его только в «Бюджет». Системный пресет у каждого режима свой.'
  },
  {
    target: s.budgetCustom,
    title: 'Actions тоже зависят от View',
    prepare: async () => {
      await d.openActions(ids.budgetPersonal)
    },
    text: 'В этом режиме дополнительное действие называется «Проверить бюджет». Rename доступен, а Delete можно использовать только у невыбранного пользовательского пресета. Внутри одного view набор дополнительных actions одинаков для всех пользовательских пресетов.'
  },
  {
    target: s.menu,
    title: 'Возвращаемся в «Команду»',
    prepare: async () => {
      await d.closeMenus()
      await d.switchView(ids.team)
      await d.openMenu()
    },
    text: 'Вернулся список пресетов «Команды» и её тулбар. Удалённого соседнего пресета «Разработчики» здесь больше нет; наш сохранённый пользовательский пресет остался в списке. Выбор view и пресетов в этой стори работает через штатный компонент, а хранение между сессиями должен обеспечить продукт.'
  },
  {
    target: s.presets,
    title: 'Можно попробовать самостоятельно',
    prepare: d.closeMenus,
    text: 'Меняйте колонки, фильтры, группировку, сортировку и размер страницы. Следите за индикатором, сохраняйте новые пресеты и обновляйте свои. Ширина сохраняется вместе с конфигурацией, хотя сама не включает индикатор. Кнопка над таблицей запускает тур заново.'
  }
]
