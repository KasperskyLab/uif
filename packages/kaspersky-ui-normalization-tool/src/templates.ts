import type { FormControl } from './types/form-dsl'

export interface FormTemplate {
  id: string
  name: string
  elements: FormControl[]
}

function uid(prefix: string): string {
  return `${prefix}-tpl-${Math.random().toString(36).slice(2, 9)}`
}

export const FORM_TEMPLATES: FormTemplate[] = [
  {
    id: 'login',
    name: 'Форма входа',
    elements: [
      {
        type: 'heading',
        id: uid('heading'),
        props: { children: 'Вход в систему', type: 'H4' },
      } as FormControl,
      {
        type: 'input',
        id: uid('input'),
        fieldName: 'email',
        dataType: 'string',
        validation: [
          { type: 'required', message: 'Введите email' },
          { type: 'pattern', value: '^[^@]+@[^@]+\\.[^@]+$', message: 'Некорректный email' },
        ],
      } as FormControl,
      {
        type: 'input',
        id: uid('input'),
        fieldName: 'password',
        dataType: 'string',
        validation: [
          { type: 'required', message: 'Введите пароль' },
          { type: 'minLength', value: 6, message: 'Минимум 6 символов' },
        ],
      } as FormControl,
      {
        type: 'checkbox',
        id: uid('checkbox'),
        text: 'Запомнить меня',
        fieldName: 'remember',
        dataType: 'boolean',
      } as FormControl,
      {
        type: 'button',
        id: uid('button'),
        text: 'Войти',
        mode: 'primary',
      } as FormControl,
    ],
  },
  {
    id: 'registration',
    name: 'Форма регистрации',
    elements: [
      {
        type: 'heading',
        id: uid('heading'),
        props: { children: 'Регистрация', type: 'H4' },
      } as FormControl,
      {
        type: 'input',
        id: uid('input'),
        fieldName: 'firstName',
        dataType: 'string',
        validation: [{ type: 'required', message: 'Введите имя' }],
      } as FormControl,
      {
        type: 'input',
        id: uid('input'),
        fieldName: 'lastName',
        dataType: 'string',
        validation: [{ type: 'required', message: 'Введите фамилию' }],
      } as FormControl,
      {
        type: 'input',
        id: uid('input'),
        fieldName: 'email',
        dataType: 'string',
        validation: [
          { type: 'required', message: 'Введите email' },
          { type: 'pattern', value: '^[^@]+@[^@]+\\.[^@]+$', message: 'Некорректный email' },
        ],
      } as FormControl,
      {
        type: 'input',
        id: uid('input'),
        fieldName: 'password',
        dataType: 'string',
        validation: [
          { type: 'required', message: 'Введите пароль' },
          { type: 'minLength', value: 8, message: 'Минимум 8 символов' },
        ],
      } as FormControl,
      {
        type: 'select',
        id: uid('select'),
        placeholder: 'Роль',
        fieldName: 'role',
        dataType: 'string',
      } as FormControl,
      {
        type: 'checkbox',
        id: uid('checkbox'),
        text: 'Согласен с условиями использования',
        fieldName: 'agree',
        dataType: 'boolean',
        validation: [{ type: 'required', message: 'Необходимо согласие' }],
      } as FormControl,
      {
        type: 'button',
        id: uid('button'),
        text: 'Зарегистрироваться',
        mode: 'primary',
      } as FormControl,
    ],
  },
  {
    id: 'settings',
    name: 'Настройки профиля',
    elements: [
      {
        type: 'heading',
        id: uid('heading'),
        props: { children: 'Настройки профиля', type: 'H4' },
      } as FormControl,
      {
        type: 'input',
        id: uid('input'),
        fieldName: 'displayName',
        dataType: 'string',
        validation: [{ type: 'required', message: 'Введите имя' }],
      } as FormControl,
      {
        type: 'input',
        id: uid('input'),
        fieldName: 'email',
        dataType: 'string',
      } as FormControl,
      {
        type: 'toggle',
        id: uid('toggle'),
        text: 'Email-уведомления',
        fieldName: 'emailNotifications',
        dataType: 'boolean',
      } as FormControl,
      {
        type: 'toggle',
        id: uid('toggle'),
        text: 'Двухфакторная аутентификация',
        fieldName: 'twoFactor',
        dataType: 'boolean',
      } as FormControl,
      {
        type: 'select',
        id: uid('select'),
        placeholder: 'Язык интерфейса',
        fieldName: 'language',
        dataType: 'string',
      } as FormControl,
      {
        type: 'button',
        id: uid('button'),
        text: 'Сохранить',
        mode: 'primary',
      } as FormControl,
    ],
  },
  {
    id: 'feedback',
    name: 'Обратная связь',
    elements: [
      {
        type: 'heading',
        id: uid('heading'),
        props: { children: 'Обратная связь', type: 'H4' },
      } as FormControl,
      {
        type: 'input',
        id: uid('input'),
        fieldName: 'subject',
        dataType: 'string',
        validation: [{ type: 'required', message: 'Укажите тему' }],
      } as FormControl,
      {
        type: 'input',
        id: uid('input'),
        fieldName: 'message',
        dataType: 'string',
        validation: [
          { type: 'required', message: 'Введите сообщение' },
          { type: 'minLength', value: 10, message: 'Минимум 10 символов' },
        ],
      } as FormControl,
      {
        type: 'radio',
        id: uid('radio'),
        options: [{ label: 'Низкий', value: 'low' }, { label: 'Средний', value: 'medium' }, { label: 'Высокий', value: 'high' }],
        fieldName: 'priority',
        dataType: 'string',
      } as FormControl,
      {
        type: 'button',
        id: uid('button'),
        text: 'Отправить',
        mode: 'primary',
      } as FormControl,
    ],
  },
]
