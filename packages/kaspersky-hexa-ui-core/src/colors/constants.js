/* eslint-disable */
const fs = require('fs')
const path = require('path')

const JSON_DATA = {
  'static-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens/static-tokens.json'))),
  'product-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens/product-tokens.json'))),
  'component-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens/component-tokens.json')))
}

const COMPONENTS = [
  'accordion',
  'action_button',
  'alert',
  'anchor_links',
  'badge',
  'breadcrumbs',
  'button',
  'calendar',
  'card',
  'checkbox',
  'chip',
  'divider',
  'dropdown',
  'elevation',
  'focus',
  'help_message',
  'indicator',
  'information_card',
  'input_code_viewer',
  'input_datetime_picker',
  'input_multi_select',
  'input_number',
  'input_password',
  'input_search',
  'input_select',
  'input_text',
  'input_textarea',
  'label',
  'link',
  'loader',
  'lock_group',
  'menu',
  'modal',
  'overlay',
  'page_header',
  'pagination',
  'placeholder',
  'popover',
  'progress_bar',
  'radio',
  'scrollbar',
  'section_message',
  'segmented_button',
  'segmented_control',
  'sidebar',
  'status_card',
  'status',
  'submenu',
  'tabs',
  'table',
  'tag',
  'text',
  'toast',
  'toggle',
  'toolbar',
  'tooltip',
  'tree',
  'upload',
  'wizard'
]

module.exports = {
  COMPONENTS,
  JSON_DATA
}
