import type { PropPresentationMap } from '@sb/components/Documentation'

export const helpMessageDesignPropPresentation: PropPresentationMap = {
  mode: { description: 'Семантический вариант сообщения', type: 'common | success | warning | critical' },
  size: { description: 'Размер сообщения', type: 'medium | small' },
  description: { label: '✏️ description', description: 'Дополнительный текст сообщения', type: 'Text', defaultValue: 'Text' },
  text: { label: '✏️ text', description: 'Основной текст сообщения', type: 'Text', defaultValue: 'validationText' }
}
