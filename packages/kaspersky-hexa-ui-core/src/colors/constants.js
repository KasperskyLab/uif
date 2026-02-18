/* eslint-disable */
const fs = require('fs')
const path = require('path')

/**====== FIGMA ======*/
const JSON_DATA = {
  'static-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens/static-tokens.json'))),
  'product-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens/product-tokens.json'))),
  'component-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens/component-tokens.json'))),
  'widget-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens/widget-tokens.json')))
}

const JSON_OLD_DATA = {
  'static-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens/_/static-tokens.json'))),
  'product-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens/_/product-tokens.json'))),
  'component-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens/_/component-tokens.json'))),
  'widget-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens/_/widget-tokens.json')))
}

/**====== PIXSO ======*/
const PIXSO_DATA = {
  'static-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens-pixso/static-tokens.json'))),
  'semantic-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens-pixso/semantic-tokens.json'))),
  'product-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens-pixso/product-tokens.json'))),
  'widget-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens-pixso/widget-tokens.json')))
}

const PIXSO_OLD_DATA = {
  'static-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens-pixso/_/static-tokens.json'))),
  'semantic-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens-pixso/_/semantic-tokens.json'))),
  'product-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens-pixso/_/product-tokens.json'))),
  'widget-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens-pixso/_/widget-tokens.json')))
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
  'code_compare',
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
  'license_card',
  'link',
  'loader',
  'lock_group',
  'menu',
  'modal',
  'overlay',
  'page_header',
  'pagination',
  'panel',
  'placeholder',
  'popover',
  'progress_bar',
  'radio',
  'skeleton',
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
  'terminal',
  'text',
  'toast',
  'top_navigation',
  'toggle',
  'toggle_button',
  'toolbar',
  'tooltip',
  'tree',
  'upload',
  'wizard'
]

module.exports = {
  COMPONENTS,
  JSON_DATA,
  JSON_OLD_DATA,
  PIXSO_DATA,
  PIXSO_OLD_DATA
}
