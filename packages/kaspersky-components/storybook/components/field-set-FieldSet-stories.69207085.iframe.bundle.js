"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[2454],{"./helpers/hocs/MetaComponent/MetaDod.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MetaDod=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_types=__webpack_require__("./helpers/hocs/MetaComponent/types.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const StyledTableContainer=_styledComponents.default.div.withConfig({displayName:"MetaDod__StyledTableContainer",componentId:"sc-1gxe50k-0"})(["&&&&&{width:300px;td,th,tr{background:transparent;border:none;}}"]),MetaDod=_ref=>{let{list}=_ref;const metaDodKeys=(0,_react.useMemo)((()=>Object.keys(_types.metaDod)),[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:`Definition of done ${(new Date).getDate()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`}),(0,_jsxRuntime.jsx)(StyledTableContainer,{children:(0,_jsxRuntime.jsxs)("table",{children:[(0,_jsxRuntime.jsx)("thead",{children:(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Point"})}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Status"})})]})}),(0,_jsxRuntime.jsx)("tbody",{children:metaDodKeys.map((key=>(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:_types.metaDod[key]}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)(_tag.Tag,{mode:list[key]?"grass":"red",children:list[key]?"ready":"need"})})]},key)))})]})})]})};exports.MetaDod=MetaDod;try{MetaDod.displayName="MetaDod",MetaDod.__docgenInfo={description:"",displayName:"MetaDod",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Partial<Record<"storybook" | "designTokens" | "useThemedHook" | "unitTests" | "screenshotTests" | "migration" | "apiTable" | "figmaView", boolean>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"]={docgenInfo:MetaDod.__docgenInfo,name:"MetaDod",path:"helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.metaDod=void 0;exports.metaDod={designTokens:"Дизайн токены",useThemedHook:"Использование theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Описание миграции",apiTable:"api table",storybook:"storybook",figmaView:"Отображение в Фигме"}},"./helpers/hocs/MetaComponent/withMeta.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMeta=function withMeta(list,Component){return props=>(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Title,{children:list.component}),(0,_jsxRuntime.jsx)(_MetaDod.MetaDod,{list:list.dod}),(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Описание"}),list.description?(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.description}):"-",(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Использование"}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.usage}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:`[Дизайн](${list.designLink})`}),Component&&(0,_jsxRuntime.jsx)(Component,{...props}),(0,_jsxRuntime.jsx)(_blocks.Primary,{}),(0,_jsxRuntime.jsx)(_blocks.ArgsTable,{story:_blocks.PRIMARY_STORY}),(0,_jsxRuntime.jsx)(_blocks.Stories,{title:"Variants of View"})]})};(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _MetaDod=__webpack_require__("./helpers/hocs/MetaComponent/MetaDod.tsx"),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js")},"./src/field-set/FieldSet.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.WaysToDeclareComponent=exports.ReducedMargin=exports.OverrideCommonStyles=exports.Basic=void 0;var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_WaysToDeclareCompone,_WaysToDeclareCompone2,_WaysToDeclareCompone3,_OverrideCommonStyles,_OverrideCommonStyles2,_OverrideCommonStyles3,_ReducedMargin$parame,_ReducedMargin$parame2,_ReducedMargin$parame3,_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_badges=__webpack_require__("./.storybook/badges.ts"),_meta=_interopRequireDefault(__webpack_require__("./src/field-set/meta.json")),_withMeta=__webpack_require__("./helpers/hocs/MetaComponent/withMeta.tsx"),_index=__webpack_require__("./src/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const meta={title:"Molecules/FieldSet",component:_index.FieldSet,parameters:{storySource:{source:"import React, { useState } from 'react';\nimport styled from 'styled-components';\nimport { Meta, StoryObj } from '@storybook/react';\nimport { badges } from '@sb/badges';\nimport MetaData from './meta.json';\nimport { withMeta } from '@helpers/hocs/MetaComponent/withMeta';\nimport { FieldSet, Textbox, SegmentedButton, H3 } from '@src/index';\nimport { FieldSetProps, FieldSetItem } from './types';\nimport { SegmentedButtonOption } from '@src/segmented-button/types';\nimport { FieldProps } from '@src/field/types';\nconst meta: Meta<FieldSetProps> = {\n  title: 'Molecules/FieldSet',\n  component: FieldSet,\n  parameters: {\n    badges: [badges.stable, badges.dev],\n    docs: {\n      page: withMeta(MetaData)\n    }\n  }\n};\nexport default meta;\ntype Story = StoryObj<FieldSetProps>;\nconst getOptions = (number: number, componentName: string) => Array.from({\n  length: number\n}).map((_, index) => ({\n  label: `${componentName} option ${index + 1}`,\n  value: `${index + 1}`\n}));\nconst Container = styled.div`\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 8px;\n`;\nexport const Basic: Story = {\n  render: (args: FieldSetProps) => {\n    const viewItems: SegmentedButtonOption[] = [{\n      text: 'labelPosition: top',\n      value: 'top'\n    }, {\n      text: 'labelPosition: before',\n      value: 'before'\n    }, {\n      text: 'gridLayout',\n      value: 'grid'\n    }];\n    const [view, setView] = useState<string[]>(['top']);\n    const items: FieldSetItem[] = [{\n      label: 'textbox',\n      control: {\n        component: 'textbox',\n        placeholder: 'hello'\n      }\n    }, {\n      label: 'textbox-masked',\n      control: {\n        component: 'textbox-masked',\n        maskOptions: {\n          mask: 'NUM.NUM.NUM.NUM',\n          blocks: {\n            NUM: {\n              mask: /^[0-9]{1,3}$/\n            }\n          }\n        },\n        placeholder: 'hello'\n      }\n    }, {\n      label: 'textbox-number',\n      control: {\n        component: 'textbox-number',\n        placeholder: '123'\n      }\n    }, {\n      label: 'textbox-password',\n      control: {\n        component: 'textbox-password',\n        value: '123'\n      }\n    }, {\n      label: 'textbox-textarea',\n      control: {\n        component: 'textbox-textarea',\n        placeholder: 'hello',\n        showCount: true,\n        maxLength: 1000\n      }\n    }, {\n      label: 'select',\n      control: {\n        component: 'select',\n        options: getOptions(4, 'Select'),\n        value: '1'\n      }\n    }, {\n      label: 'multiselect',\n      control: {\n        component: 'select',\n        mode: 'multiple',\n        options: getOptions(4, 'Multiselect'),\n        value: ['1']\n      }\n    }, {\n      label: 'search',\n      control: {\n        component: 'search',\n        placeholder: 'search'\n      }\n    }, {\n      label: 'calendar',\n      control: {\n        component: 'calendar'\n      }\n    }, {\n      label: 'range-picker',\n      control: {\n        component: 'range-picker'\n      }\n    }, {\n      label: 'time-input',\n      control: {\n        component: 'time-input'\n      }\n    }, {\n      label: 'code-viewer',\n      control: {\n        component: 'code-viewer',\n        language: 'html'\n      }\n    }, {\n      label: 'button '.repeat(20),\n      control: {\n        component: 'button',\n        text: 'Button text',\n        mode: 'secondary'\n      }\n    }, {\n      label: 'segmented-button',\n      control: {\n        component: 'segmented-button',\n        value: ['1'],\n        onChange: e => e,\n        size: 'large',\n        items: getOptions(3, 'SegmentedButton').map(item => ({\n          text: item.label,\n          value: item.value\n        }))\n      }\n    }, {\n      label: 'checkbox',\n      control: {\n        component: 'checkbox',\n        children: 'Single checkbox'\n      }\n    }, {\n      label: 'checkbox-group',\n      control: {\n        component: 'checkbox-group',\n        options: getOptions(4, 'Checkbox')\n      }\n    }, {\n      label: 'radio',\n      control: {\n        component: 'radio',\n        options: getOptions(4, 'Radio'),\n        vertical: true\n      }\n    }, {\n      label: 'toggle',\n      control: {\n        component: 'toggle',\n        text: 'Toggle label text'\n      }\n    }, {\n      label: 'link',\n      control: {\n        component: 'link',\n        children: 'Link text'\n      }\n    }, {\n      label: 'status',\n      control: {\n        component: 'status',\n        label: 'Status text'\n      }\n    }, {\n      label: 'Text',\n      control: {\n        component: 'text',\n        children: 'Text'\n      }\n    }];\n    return <Container>\n        <SegmentedButton items={viewItems} value={view} onChange={setView} />\n        <FieldSet {...args} items={items} labelPosition={(((view[0] === 'top' || view[0] === 'before' || undefined) && view[0]) as FieldProps['labelPosition'])} gridLayout={((view[0] === 'grid' && {\n        firstCol: '123px',\n        secondCol: '456px'\n      }) as FieldProps['gridLayout'])} />\n      </Container>;\n  }\n};\nexport const WaysToDeclareComponent: Story = {\n  render: () => <Container>\n      <H3>Look in code! dev only</H3>\n      <FieldSet items={[{\n      label: 'JSON-like',\n      message: 'зашибись! классно!',\n      messageMode: 'success',\n      control: {\n        component: 'textbox',\n        valid: true,\n        value: 'its better to declare like this'\n      }\n    }, {\n      label: 'JSON-like field, JSX control',\n      message: 'сомнительно, но окээээй',\n      messageMode: 'warning',\n      control: <Textbox value='its ok, but common props (disabled)' />\n    }, {\n      label: 'JSX Field and control',\n      message: 'мы все в этом виноваты',\n      messageMode: 'error',\n      control: {\n        component: 'textbox',\n        invalid: true\n      }\n    }]} />\n    </Container>\n};\nexport const OverrideCommonStyles: Story = {\n  args: {\n    labelPosition: 'before',\n    items: [{\n      label: 'default control',\n      control: {\n        component: 'textbox'\n      }\n    }, {\n      label: 'custom layout',\n      gridLayout: {\n        firstCol: '123px',\n        secondCol: '456px'\n      },\n      control: {\n        component: 'textbox'\n      }\n    }, {\n      label: 'default control',\n      control: {\n        component: 'toggle',\n        text: 'some button'\n      }\n    }, {\n      label: 'another custom layout',\n      labelPosition: 'top',\n      control: {\n        component: 'textbox'\n      }\n    }, {\n      label: 'default control',\n      control: {\n        component: 'button',\n        text: 'some button'\n      }\n    }]\n  }\n};\nexport const ReducedMargin: Story = {\n  args: {\n    labelPosition: 'before',\n    items: [{\n      label: 'input-like',\n      control: {\n        component: 'textbox'\n      }\n    }, {\n      label: 'label-like',\n      control: {\n        component: 'checkbox',\n        children: 'Reduced margin before label-like element'\n      }\n    }, {\n      label: 'label-like',\n      control: {\n        component: 'toggle',\n        children: 'Toggle'\n      }\n    }, {\n      label: 'label-like',\n      control: {\n        component: 'text',\n        children: 'Some text'\n      }\n    }, {\n      label: 'input-like',\n      control: {\n        component: 'select'\n      }\n    }, {\n      label: 'label-like',\n      control: {\n        component: 'status',\n        label: 'Status text'\n      }\n    }, {\n      label: 'input-like',\n      control: {\n        component: 'search'\n      }\n    }, {\n      label: 'input-like',\n      marginBefore: '32px',\n      control: {\n        component: 'textbox-textarea',\n        value: 'custom margin'\n      }\n    }]\n  }\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: FieldSetProps) => {\\n    const viewItems: SegmentedButtonOption[] = [{\\n      text: 'labelPosition: top',\\n      value: 'top'\\n    }, {\\n      text: 'labelPosition: before',\\n      value: 'before'\\n    }, {\\n      text: 'gridLayout',\\n      value: 'grid'\\n    }];\\n    const [view, setView] = useState<string[]>(['top']);\\n    const items: FieldSetItem[] = [{\\n      label: 'textbox',\\n      control: {\\n        component: 'textbox',\\n        placeholder: 'hello'\\n      }\\n    }, {\\n      label: 'textbox-masked',\\n      control: {\\n        component: 'textbox-masked',\\n        maskOptions: {\\n          mask: 'NUM.NUM.NUM.NUM',\\n          blocks: {\\n            NUM: {\\n              mask: /^[0-9]{1,3}$/\\n            }\\n          }\\n        },\\n        placeholder: 'hello'\\n      }\\n    }, {\\n      label: 'textbox-number',\\n      control: {\\n        component: 'textbox-number',\\n        placeholder: '123'\\n      }\\n    }, {\\n      label: 'textbox-password',\\n      control: {\\n        component: 'textbox-password',\\n        value: '123'\\n      }\\n    }, {\\n      label: 'textbox-textarea',\\n      control: {\\n        component: 'textbox-textarea',\\n        placeholder: 'hello',\\n        showCount: true,\\n        maxLength: 1000\\n      }\\n    }, {\\n      label: 'select',\\n      control: {\\n        component: 'select',\\n        options: getOptions(4, 'Select'),\\n        value: '1'\\n      }\\n    }, {\\n      label: 'multiselect',\\n      control: {\\n        component: 'select',\\n        mode: 'multiple',\\n        options: getOptions(4, 'Multiselect'),\\n        value: ['1']\\n      }\\n    }, {\\n      label: 'search',\\n      control: {\\n        component: 'search',\\n        placeholder: 'search'\\n      }\\n    }, {\\n      label: 'calendar',\\n      control: {\\n        component: 'calendar'\\n      }\\n    }, {\\n      label: 'range-picker',\\n      control: {\\n        component: 'range-picker'\\n      }\\n    }, {\\n      label: 'time-input',\\n      control: {\\n        component: 'time-input'\\n      }\\n    }, {\\n      label: 'code-viewer',\\n      control: {\\n        component: 'code-viewer',\\n        language: 'html'\\n      }\\n    }, {\\n      label: 'button '.repeat(20),\\n      control: {\\n        component: 'button',\\n        text: 'Button text',\\n        mode: 'secondary'\\n      }\\n    }, {\\n      label: 'segmented-button',\\n      control: {\\n        component: 'segmented-button',\\n        value: ['1'],\\n        onChange: e => e,\\n        size: 'large',\\n        items: getOptions(3, 'SegmentedButton').map(item => ({\\n          text: item.label,\\n          value: item.value\\n        }))\\n      }\\n    }, {\\n      label: 'checkbox',\\n      control: {\\n        component: 'checkbox',\\n        children: 'Single checkbox'\\n      }\\n    }, {\\n      label: 'checkbox-group',\\n      control: {\\n        component: 'checkbox-group',\\n        options: getOptions(4, 'Checkbox')\\n      }\\n    }, {\\n      label: 'radio',\\n      control: {\\n        component: 'radio',\\n        options: getOptions(4, 'Radio'),\\n        vertical: true\\n      }\\n    }, {\\n      label: 'toggle',\\n      control: {\\n        component: 'toggle',\\n        text: 'Toggle label text'\\n      }\\n    }, {\\n      label: 'link',\\n      control: {\\n        component: 'link',\\n        children: 'Link text'\\n      }\\n    }, {\\n      label: 'status',\\n      control: {\\n        component: 'status',\\n        label: 'Status text'\\n      }\\n    }, {\\n      label: 'Text',\\n      control: {\\n        component: 'text',\\n        children: 'Text'\\n      }\\n    }];\\n    return <Container>\\n        <SegmentedButton items={viewItems} value={view} onChange={setView} />\\n        <FieldSet {...args} items={items} labelPosition={(((view[0] === 'top' || view[0] === 'before' || undefined) && view[0]) as FieldProps['labelPosition'])} gridLayout={((view[0] === 'grid' && {\\n        firstCol: '123px',\\n        secondCol: '456px'\\n      }) as FieldProps['gridLayout'])} />\\n      </Container>;\\n  }\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};\nWaysToDeclareComponent.parameters = {\n  ...WaysToDeclareComponent.parameters,\n  docs: {\n    ...WaysToDeclareComponent.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: () => <Container>\\n      <H3>Look in code! dev only</H3>\\n      <FieldSet items={[{\\n      label: 'JSON-like',\\n      message: '\\u0437\\u0430\\u0448\\u0438\\u0431\\u0438\\u0441\\u044C! \\u043A\\u043B\\u0430\\u0441\\u0441\\u043D\\u043E!',\\n      messageMode: 'success',\\n      control: {\\n        component: 'textbox',\\n        valid: true,\\n        value: 'its better to declare like this'\\n      }\\n    }, {\\n      label: 'JSON-like field, JSX control',\\n      message: '\\u0441\\u043E\\u043C\\u043D\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E, \\u043D\\u043E \\u043E\\u043A\\u044D\\u044D\\u044D\\u044D\\u0439',\\n      messageMode: 'warning',\\n      control: <Textbox value='its ok, but common props (disabled)' />\\n    }, {\\n      label: 'JSX Field and control',\\n      message: '\\u043C\\u044B \\u0432\\u0441\\u0435 \\u0432 \\u044D\\u0442\\u043E\\u043C \\u0432\\u0438\\u043D\\u043E\\u0432\\u0430\\u0442\\u044B',\\n      messageMode: 'error',\\n      control: {\\n        component: 'textbox',\\n        invalid: true\\n      }\\n    }]} />\\n    </Container>\\n}\",\n      ...WaysToDeclareComponent.parameters?.docs?.source\n    }\n  }\n};\nOverrideCommonStyles.parameters = {\n  ...OverrideCommonStyles.parameters,\n  docs: {\n    ...OverrideCommonStyles.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    labelPosition: 'before',\\n    items: [{\\n      label: 'default control',\\n      control: {\\n        component: 'textbox'\\n      }\\n    }, {\\n      label: 'custom layout',\\n      gridLayout: {\\n        firstCol: '123px',\\n        secondCol: '456px'\\n      },\\n      control: {\\n        component: 'textbox'\\n      }\\n    }, {\\n      label: 'default control',\\n      control: {\\n        component: 'toggle',\\n        text: 'some button'\\n      }\\n    }, {\\n      label: 'another custom layout',\\n      labelPosition: 'top',\\n      control: {\\n        component: 'textbox'\\n      }\\n    }, {\\n      label: 'default control',\\n      control: {\\n        component: 'button',\\n        text: 'some button'\\n      }\\n    }]\\n  }\\n}\",\n      ...OverrideCommonStyles.parameters?.docs?.source\n    }\n  }\n};\nReducedMargin.parameters = {\n  ...ReducedMargin.parameters,\n  docs: {\n    ...ReducedMargin.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    labelPosition: 'before',\\n    items: [{\\n      label: 'input-like',\\n      control: {\\n        component: 'textbox'\\n      }\\n    }, {\\n      label: 'label-like',\\n      control: {\\n        component: 'checkbox',\\n        children: 'Reduced margin before label-like element'\\n      }\\n    }, {\\n      label: 'label-like',\\n      control: {\\n        component: 'toggle',\\n        children: 'Toggle'\\n      }\\n    }, {\\n      label: 'label-like',\\n      control: {\\n        component: 'text',\\n        children: 'Some text'\\n      }\\n    }, {\\n      label: 'input-like',\\n      control: {\\n        component: 'select'\\n      }\\n    }, {\\n      label: 'label-like',\\n      control: {\\n        component: 'status',\\n        label: 'Status text'\\n      }\\n    }, {\\n      label: 'input-like',\\n      control: {\\n        component: 'search'\\n      }\\n    }, {\\n      label: 'input-like',\\n      marginBefore: '32px',\\n      control: {\\n        component: 'textbox-textarea',\\n        value: 'custom margin'\\n      }\\n    }]\\n  }\\n}\",\n      ...ReducedMargin.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{basic:{startLoc:{col:28,line:35},endLoc:{col:1,line:201},startBody:{col:28,line:35},endBody:{col:1,line:201}},"ways-to-declare-component":{startLoc:{col:45,line:202},endLoc:{col:1,line:229},startBody:{col:45,line:202},endBody:{col:1,line:229}},"override-common-styles":{startLoc:{col:43,line:230},endLoc:{col:1,line:267},startBody:{col:43,line:230},endBody:{col:1,line:267}},"reduced-margin":{startLoc:{col:36,line:268},endLoc:{col:1,line:319},startBody:{col:36,line:268},endBody:{col:1,line:319}}}},badges:[_badges.badges.stable,_badges.badges.dev],docs:{page:(0,_withMeta.withMeta)(_meta.default)}}};exports.default=meta;const getOptions=(number,componentName)=>Array.from({length:number}).map(((_,index)=>({label:`${componentName} option ${index+1}`,value:`${index+1}`}))),Container=_styledComponents.default.div.withConfig({displayName:"FieldSetstories__Container",componentId:"sc-1lsjg2g-0"})(["display:flex;flex-direction:column;width:100%;gap:8px;"]),Basic=exports.Basic={render:args=>{const[view,setView]=(0,_react.useState)(["top"]),items=[{label:"textbox",control:{component:"textbox",placeholder:"hello"}},{label:"textbox-masked",control:{component:"textbox-masked",maskOptions:{mask:"NUM.NUM.NUM.NUM",blocks:{NUM:{mask:/^[0-9]{1,3}$/}}},placeholder:"hello"}},{label:"textbox-number",control:{component:"textbox-number",placeholder:"123"}},{label:"textbox-password",control:{component:"textbox-password",value:"123"}},{label:"textbox-textarea",control:{component:"textbox-textarea",placeholder:"hello",showCount:!0,maxLength:1e3}},{label:"select",control:{component:"select",options:getOptions(4,"Select"),value:"1"}},{label:"multiselect",control:{component:"select",mode:"multiple",options:getOptions(4,"Multiselect"),value:["1"]}},{label:"search",control:{component:"search",placeholder:"search"}},{label:"calendar",control:{component:"calendar"}},{label:"range-picker",control:{component:"range-picker"}},{label:"time-input",control:{component:"time-input"}},{label:"code-viewer",control:{component:"code-viewer",language:"html"}},{label:"button ".repeat(20),control:{component:"button",text:"Button text",mode:"secondary"}},{label:"segmented-button",control:{component:"segmented-button",value:["1"],onChange:e=>e,size:"large",items:getOptions(3,"SegmentedButton").map((item=>({text:item.label,value:item.value})))}},{label:"checkbox",control:{component:"checkbox",children:"Single checkbox"}},{label:"checkbox-group",control:{component:"checkbox-group",options:getOptions(4,"Checkbox")}},{label:"radio",control:{component:"radio",options:getOptions(4,"Radio"),vertical:!0}},{label:"toggle",control:{component:"toggle",text:"Toggle label text"}},{label:"link",control:{component:"link",children:"Link text"}},{label:"status",control:{component:"status",label:"Status text"}},{label:"Text",control:{component:"text",children:"Text"}}];return(0,_jsxRuntime.jsxs)(Container,{children:[(0,_jsxRuntime.jsx)(_index.SegmentedButton,{items:[{text:"labelPosition: top",value:"top"},{text:"labelPosition: before",value:"before"},{text:"gridLayout",value:"grid"}],value:view,onChange:setView}),(0,_jsxRuntime.jsx)(_index.FieldSet,{...args,items,labelPosition:"top"===view[0]||"before"===view[0]?view[0]:void 0,gridLayout:"grid"===view[0]&&{firstCol:"123px",secondCol:"456px"}})]})}},WaysToDeclareComponent=exports.WaysToDeclareComponent={render:()=>(0,_jsxRuntime.jsxs)(Container,{children:[(0,_jsxRuntime.jsx)(_index.H3,{children:"Look in code! dev only"}),(0,_jsxRuntime.jsx)(_index.FieldSet,{items:[{label:"JSON-like",message:"зашибись! классно!",messageMode:"success",control:{component:"textbox",valid:!0,value:"its better to declare like this"}},{label:"JSON-like field, JSX control",message:"сомнительно, но окээээй",messageMode:"warning",control:(0,_jsxRuntime.jsx)(_index.Textbox,{value:"its ok, but common props (disabled)"})},{label:"JSX Field and control",message:"мы все в этом виноваты",messageMode:"error",control:{component:"textbox",invalid:!0}}]})]})},OverrideCommonStyles=exports.OverrideCommonStyles={args:{labelPosition:"before",items:[{label:"default control",control:{component:"textbox"}},{label:"custom layout",gridLayout:{firstCol:"123px",secondCol:"456px"},control:{component:"textbox"}},{label:"default control",control:{component:"toggle",text:"some button"}},{label:"another custom layout",labelPosition:"top",control:{component:"textbox"}},{label:"default control",control:{component:"button",text:"some button"}}]}},ReducedMargin=exports.ReducedMargin={args:{labelPosition:"before",items:[{label:"input-like",control:{component:"textbox"}},{label:"label-like",control:{component:"checkbox",children:"Reduced margin before label-like element"}},{label:"label-like",control:{component:"toggle",children:"Toggle"}},{label:"label-like",control:{component:"text",children:"Some text"}},{label:"input-like",control:{component:"select"}},{label:"label-like",control:{component:"status",label:"Status text"}},{label:"input-like",control:{component:"search"}},{label:"input-like",marginBefore:"32px",control:{component:"textbox-textarea",value:"custom margin"}}]}};Basic.parameters={...Basic.parameters,docs:{...null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs,source:{originalSource:"{\n  render: (args: FieldSetProps) => {\n    const viewItems: SegmentedButtonOption[] = [{\n      text: 'labelPosition: top',\n      value: 'top'\n    }, {\n      text: 'labelPosition: before',\n      value: 'before'\n    }, {\n      text: 'gridLayout',\n      value: 'grid'\n    }];\n    const [view, setView] = useState<string[]>(['top']);\n    const items: FieldSetItem[] = [{\n      label: 'textbox',\n      control: {\n        component: 'textbox',\n        placeholder: 'hello'\n      }\n    }, {\n      label: 'textbox-masked',\n      control: {\n        component: 'textbox-masked',\n        maskOptions: {\n          mask: 'NUM.NUM.NUM.NUM',\n          blocks: {\n            NUM: {\n              mask: /^[0-9]{1,3}$/\n            }\n          }\n        },\n        placeholder: 'hello'\n      }\n    }, {\n      label: 'textbox-number',\n      control: {\n        component: 'textbox-number',\n        placeholder: '123'\n      }\n    }, {\n      label: 'textbox-password',\n      control: {\n        component: 'textbox-password',\n        value: '123'\n      }\n    }, {\n      label: 'textbox-textarea',\n      control: {\n        component: 'textbox-textarea',\n        placeholder: 'hello',\n        showCount: true,\n        maxLength: 1000\n      }\n    }, {\n      label: 'select',\n      control: {\n        component: 'select',\n        options: getOptions(4, 'Select'),\n        value: '1'\n      }\n    }, {\n      label: 'multiselect',\n      control: {\n        component: 'select',\n        mode: 'multiple',\n        options: getOptions(4, 'Multiselect'),\n        value: ['1']\n      }\n    }, {\n      label: 'search',\n      control: {\n        component: 'search',\n        placeholder: 'search'\n      }\n    }, {\n      label: 'calendar',\n      control: {\n        component: 'calendar'\n      }\n    }, {\n      label: 'range-picker',\n      control: {\n        component: 'range-picker'\n      }\n    }, {\n      label: 'time-input',\n      control: {\n        component: 'time-input'\n      }\n    }, {\n      label: 'code-viewer',\n      control: {\n        component: 'code-viewer',\n        language: 'html'\n      }\n    }, {\n      label: 'button '.repeat(20),\n      control: {\n        component: 'button',\n        text: 'Button text',\n        mode: 'secondary'\n      }\n    }, {\n      label: 'segmented-button',\n      control: {\n        component: 'segmented-button',\n        value: ['1'],\n        onChange: e => e,\n        size: 'large',\n        items: getOptions(3, 'SegmentedButton').map(item => ({\n          text: item.label,\n          value: item.value\n        }))\n      }\n    }, {\n      label: 'checkbox',\n      control: {\n        component: 'checkbox',\n        children: 'Single checkbox'\n      }\n    }, {\n      label: 'checkbox-group',\n      control: {\n        component: 'checkbox-group',\n        options: getOptions(4, 'Checkbox')\n      }\n    }, {\n      label: 'radio',\n      control: {\n        component: 'radio',\n        options: getOptions(4, 'Radio'),\n        vertical: true\n      }\n    }, {\n      label: 'toggle',\n      control: {\n        component: 'toggle',\n        text: 'Toggle label text'\n      }\n    }, {\n      label: 'link',\n      control: {\n        component: 'link',\n        children: 'Link text'\n      }\n    }, {\n      label: 'status',\n      control: {\n        component: 'status',\n        label: 'Status text'\n      }\n    }, {\n      label: 'Text',\n      control: {\n        component: 'text',\n        children: 'Text'\n      }\n    }];\n    return <Container>\n        <SegmentedButton items={viewItems} value={view} onChange={setView} />\n        <FieldSet {...args} items={items} labelPosition={(((view[0] === 'top' || view[0] === 'before' || undefined) && view[0]) as FieldProps['labelPosition'])} gridLayout={((view[0] === 'grid' && {\n        firstCol: '123px',\n        secondCol: '456px'\n      }) as FieldProps['gridLayout'])} />\n      </Container>;\n  }\n}",...null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source}}},WaysToDeclareComponent.parameters={...WaysToDeclareComponent.parameters,docs:{...null===(_WaysToDeclareCompone=WaysToDeclareComponent.parameters)||void 0===_WaysToDeclareCompone?void 0:_WaysToDeclareCompone.docs,source:{originalSource:"{\n  render: () => <Container>\n      <H3>Look in code! dev only</H3>\n      <FieldSet items={[{\n      label: 'JSON-like',\n      message: 'зашибись! классно!',\n      messageMode: 'success',\n      control: {\n        component: 'textbox',\n        valid: true,\n        value: 'its better to declare like this'\n      }\n    }, {\n      label: 'JSON-like field, JSX control',\n      message: 'сомнительно, но окээээй',\n      messageMode: 'warning',\n      control: <Textbox value='its ok, but common props (disabled)' />\n    }, {\n      label: 'JSX Field and control',\n      message: 'мы все в этом виноваты',\n      messageMode: 'error',\n      control: {\n        component: 'textbox',\n        invalid: true\n      }\n    }]} />\n    </Container>\n}",...null===(_WaysToDeclareCompone2=WaysToDeclareComponent.parameters)||void 0===_WaysToDeclareCompone2||null===(_WaysToDeclareCompone3=_WaysToDeclareCompone2.docs)||void 0===_WaysToDeclareCompone3?void 0:_WaysToDeclareCompone3.source}}},OverrideCommonStyles.parameters={...OverrideCommonStyles.parameters,docs:{...null===(_OverrideCommonStyles=OverrideCommonStyles.parameters)||void 0===_OverrideCommonStyles?void 0:_OverrideCommonStyles.docs,source:{originalSource:"{\n  args: {\n    labelPosition: 'before',\n    items: [{\n      label: 'default control',\n      control: {\n        component: 'textbox'\n      }\n    }, {\n      label: 'custom layout',\n      gridLayout: {\n        firstCol: '123px',\n        secondCol: '456px'\n      },\n      control: {\n        component: 'textbox'\n      }\n    }, {\n      label: 'default control',\n      control: {\n        component: 'toggle',\n        text: 'some button'\n      }\n    }, {\n      label: 'another custom layout',\n      labelPosition: 'top',\n      control: {\n        component: 'textbox'\n      }\n    }, {\n      label: 'default control',\n      control: {\n        component: 'button',\n        text: 'some button'\n      }\n    }]\n  }\n}",...null===(_OverrideCommonStyles2=OverrideCommonStyles.parameters)||void 0===_OverrideCommonStyles2||null===(_OverrideCommonStyles3=_OverrideCommonStyles2.docs)||void 0===_OverrideCommonStyles3?void 0:_OverrideCommonStyles3.source}}},ReducedMargin.parameters={...ReducedMargin.parameters,docs:{...null===(_ReducedMargin$parame=ReducedMargin.parameters)||void 0===_ReducedMargin$parame?void 0:_ReducedMargin$parame.docs,source:{originalSource:"{\n  args: {\n    labelPosition: 'before',\n    items: [{\n      label: 'input-like',\n      control: {\n        component: 'textbox'\n      }\n    }, {\n      label: 'label-like',\n      control: {\n        component: 'checkbox',\n        children: 'Reduced margin before label-like element'\n      }\n    }, {\n      label: 'label-like',\n      control: {\n        component: 'toggle',\n        children: 'Toggle'\n      }\n    }, {\n      label: 'label-like',\n      control: {\n        component: 'text',\n        children: 'Some text'\n      }\n    }, {\n      label: 'input-like',\n      control: {\n        component: 'select'\n      }\n    }, {\n      label: 'label-like',\n      control: {\n        component: 'status',\n        label: 'Status text'\n      }\n    }, {\n      label: 'input-like',\n      control: {\n        component: 'search'\n      }\n    }, {\n      label: 'input-like',\n      marginBefore: '32px',\n      control: {\n        component: 'textbox-textarea',\n        value: 'custom margin'\n      }\n    }]\n  }\n}",...null===(_ReducedMargin$parame2=ReducedMargin.parameters)||void 0===_ReducedMargin$parame2||null===(_ReducedMargin$parame3=_ReducedMargin$parame2.docs)||void 0===_ReducedMargin$parame3?void 0:_ReducedMargin$parame3.source}}};exports.__namedExportsOrder=["Basic","WaysToDeclareComponent","OverrideCommonStyles","ReducedMargin"]},"./src/field-set/meta.json":module=>{module.exports=JSON.parse('{"dod":{"designTokens":false,"useThemedHook":false,"unitTests":false,"screenshotTests":false,"migration":false,"apiTable":false,"storybook":true},"component":"FieldSet","description":"","usage":"","designLink":""}')}}]);