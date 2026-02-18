import { IndicatorModes } from '@src/indicator/types'
import { tagModes } from '@src/tag/types'

export const defaultArgs = {
  accordion: false,
  additionalText: '',
  disabled: false,
  shouldDisableActions: true,
  indicatorMode: IndicatorModes[0],
  klId: 'accordion-kl-id',
  tagAfterMode: tagModes[0],
  tagAfterLabel: 'after',
  tagBeforeMode: tagModes[0],
  tagBeforeLabel: 'before',
  testId: 'accordion-test-id',
  title: 'Title',
  withBorder: true
}
