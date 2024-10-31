"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[8192],{"./.storybook/StoryComponents.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StoryColumn:()=>StoryColumn,StoryLayout:()=>StoryLayout,StoryWrapper:()=>StoryWrapper,__namedExportsOrder:()=>__namedExportsOrder});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_design_system_global_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./design-system/global-style/index.ts"),_design_system_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./design-system/theme/index.ts"),_sb_decorators_withThemeProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/decorators/withThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var StoryLayout=function StoryLayout(props){var theme=(0,_design_system_theme__WEBPACK_IMPORTED_MODULE_3__.useTheme)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_design_system_global_style__WEBPACK_IMPORTED_MODULE_1__.ZL,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_sb_decorators_withThemeProvider__WEBPACK_IMPORTED_MODULE_4__.qp,_objectSpread({theme:props.theme||theme.key},props))]})},StoryWrapper=styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({displayName:"StoryComponents__StoryWrapper",componentId:"sc-14o95y5-0"})(["display:flex;gap:10px;flex-wrap:wrap;"]),StoryColumn=styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({displayName:"StoryComponents__StoryColumn",componentId:"sc-14o95y5-1"})(["display:flex;flex-direction:column;gap:10px;align-items:flex-start;"]),__namedExportsOrder=["StoryLayout","StoryWrapper","StoryColumn"];try{StoryLayout.displayName="StoryLayout",StoryLayout.__docgenInfo={description:"",displayName:"StoryLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'},{value:'"light"'},{value:'"dark"'}]}},inverted:{defaultValue:null,description:"",name:"inverted",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/StoryComponents.tsx#StoryLayout"]={docgenInfo:StoryLayout.__docgenInfo,name:"StoryLayout",path:".storybook/StoryComponents.tsx#StoryLayout"})}catch(__react_docgen_typescript_loader_error){}try{StoryWrapper.displayName="StoryWrapper",StoryWrapper.__docgenInfo={description:"",displayName:"StoryWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/StoryComponents.tsx#StoryWrapper"]={docgenInfo:StoryWrapper.__docgenInfo,name:"StoryWrapper",path:".storybook/StoryComponents.tsx#StoryWrapper"})}catch(__react_docgen_typescript_loader_error){}try{StoryColumn.displayName="StoryColumn",StoryColumn.__docgenInfo={description:"",displayName:"StoryColumn",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/StoryComponents.tsx#StoryColumn"]={docgenInfo:StoryColumn.__docgenInfo,name:"StoryColumn",path:".storybook/StoryComponents.tsx#StoryColumn"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/MetaDod.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MetaDod=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_types=__webpack_require__("./helpers/hocs/MetaComponent/types.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const StyledTableContainer=_styledComponents.default.div.withConfig({displayName:"MetaDod__StyledTableContainer",componentId:"sc-1gxe50k-0"})(["&&&&&{width:300px;td,th,tr{background:transparent;border:none;}}"]),MetaDod=_ref=>{let{list}=_ref;const metaDodKeys=(0,_react.useMemo)((()=>Object.keys(_types.metaDod)),[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:`Definition of done ${(new Date).getDate()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`}),(0,_jsxRuntime.jsx)(StyledTableContainer,{children:(0,_jsxRuntime.jsxs)("table",{children:[(0,_jsxRuntime.jsx)("thead",{children:(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Point"})}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Status"})})]})}),(0,_jsxRuntime.jsx)("tbody",{children:metaDodKeys.map((key=>(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:_types.metaDod[key]}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)(_tag.Tag,{mode:list[key]?"grass":"red",children:list[key]?"ready":"need"})})]},key)))})]})})]})};exports.MetaDod=MetaDod;try{MetaDod.displayName="MetaDod",MetaDod.__docgenInfo={description:"",displayName:"MetaDod",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Partial<Record<"storybook" | "designTokens" | "useThemedHook" | "unitTests" | "screenshotTests" | "migration" | "apiTable" | "figmaView", boolean>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"]={docgenInfo:MetaDod.__docgenInfo,name:"MetaDod",path:"helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.metaDod=void 0;exports.metaDod={designTokens:"Дизайн токены",useThemedHook:"Использование theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Описание миграции",apiTable:"api table",storybook:"storybook",figmaView:"Отображение в Фигме"}},"./helpers/hocs/MetaComponent/withMeta.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMeta=function withMeta(list,Component){return props=>(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Title,{children:list.component}),(0,_jsxRuntime.jsx)(_MetaDod.MetaDod,{list:list.dod}),(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Описание"}),list.description?(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.description}):"-",(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Использование"}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.usage}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:`[Дизайн](${list.designLink})`}),Component&&(0,_jsxRuntime.jsx)(Component,{...props}),(0,_jsxRuntime.jsx)(_blocks.Primary,{}),(0,_jsxRuntime.jsx)(_blocks.ArgsTable,{story:_blocks.PRIMARY_STORY}),(0,_jsxRuntime.jsx)(_blocks.Stories,{title:"Variants of View"})]})};(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _MetaDod=__webpack_require__("./helpers/hocs/MetaComponent/MetaDod.tsx"),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js")},"./src/accordion/Accordion.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.Variations=exports.CustomHeader=exports.Basic=void 0;var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_Variations$parameter,_Variations$parameter2,_Variations$parameter3,_CustomHeader$paramet,_CustomHeader$paramet2,_CustomHeader$paramet3,_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_badges=__webpack_require__("./.storybook/badges.ts"),_StoryComponents=__webpack_require__("./.storybook/StoryComponents.tsx"),_Accordion=__webpack_require__("./src/accordion/Accordion.tsx"),_withMeta=__webpack_require__("./helpers/hocs/MetaComponent/withMeta.tsx"),_storybookHelpers=__webpack_require__("./helpers/storybookHelpers.ts"),_meta=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./src/accordion/__meta__/meta.json")),_checkbox=__webpack_require__("./src/checkbox/index.ts"),_typography=__webpack_require__("./src/typography/index.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_indicator=__webpack_require__("./src/indicator/index.ts"),_types=__webpack_require__("./src/tag/types.ts"),_types2=__webpack_require__("./src/indicator/types.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const defaultArgs={disabled:!1,title:"Title",titleSize:"small",additionalText:"Events: 32",indicatorMode:_types2.IndicatorModes[0],tagBeforeMode:_types.tagModes[0],tagBeforeLabel:"before",tagAfterMode:_types.tagModes[0],tagAfterLabel:"after",withBorder:!0,testId:"accordion-test-id",klId:"accordion-kl-id"},meta={component:_Accordion.Accordion,title:"Molecules/Accordion",argTypes:{titleSize:{control:{type:"radio"},options:["small","medium","large"]},indicatorMode:{control:{type:"select"},options:_types2.IndicatorModes,description:"Indicator mode (not an accordion prop)"},tagBeforeMode:{control:{type:"select"},options:_types.tagModes,description:"Mode of the tag before title (not an accordion prop)"},tagBeforeLabel:{control:{type:"text"},description:"Text of the tag before title (not an accordion prop)"},tagAfterMode:{control:{type:"select"},options:_types.tagModes,description:"Mode of the tag after title (not an accordion prop)"},tagAfterLabel:{control:{type:"text"},description:"Text of the tag after title (not an accordion prop)"},...(0,_storybookHelpers.sbHideControls)(["theme","activeKey","defaultActiveKey","accordion","children","state"])},args:defaultArgs,parameters:{storySource:{source:"import React from 'react';\nimport { Meta, StoryObj } from '@storybook/react';\nimport { badges } from '@sb/badges';\nimport { StoryColumn } from '@sb/StoryComponents';\nimport { Accordion, AccordionPanel } from './Accordion';\nimport { withMeta } from '@helpers/hocs/MetaComponent/withMeta';\nimport { sbHideControls } from '@helpers/storybookHelpers';\nimport MetaData from './__meta__/meta.json';\nimport { Checkbox } from '@src/checkbox';\nimport { P } from '@src/typography';\nimport { Tag } from '@src/tag';\nimport { Indicator } from '@src/indicator';\nimport { tagModes } from '@src/tag/types';\nimport { IndicatorModes } from '@src/indicator/types';\nimport { AccordionTitleSize, AccordionProps, AccordionPanelProps } from './types';\nconst defaultArgs = {\n  disabled: false,\n  title: 'Title',\n  titleSize: ('small' as AccordionTitleSize),\n  additionalText: 'Events: 32',\n  indicatorMode: IndicatorModes[0],\n  tagBeforeMode: tagModes[0],\n  tagBeforeLabel: 'before',\n  tagAfterMode: tagModes[0],\n  tagAfterLabel: 'after',\n  withBorder: true,\n  testId: 'accordion-test-id',\n  klId: 'accordion-kl-id'\n};\ntype StoryAccordionProps = AccordionPanelProps & AccordionProps & typeof defaultArgs;\nconst meta: Meta<StoryAccordionProps> = {\n  component: Accordion,\n  title: 'Molecules/Accordion',\n  argTypes: {\n    titleSize: {\n      control: {\n        type: 'radio'\n      },\n      options: ['small', 'medium', 'large']\n    },\n    indicatorMode: {\n      control: {\n        type: 'select'\n      },\n      options: IndicatorModes,\n      description: 'Indicator mode (not an accordion prop)'\n    },\n    tagBeforeMode: {\n      control: {\n        type: 'select'\n      },\n      options: tagModes,\n      description: 'Mode of the tag before title (not an accordion prop)'\n    },\n    tagBeforeLabel: {\n      control: {\n        type: 'text'\n      },\n      description: 'Text of the tag before title (not an accordion prop)'\n    },\n    tagAfterMode: {\n      control: {\n        type: 'select'\n      },\n      options: tagModes,\n      description: 'Mode of the tag after title (not an accordion prop)'\n    },\n    tagAfterLabel: {\n      control: {\n        type: 'text'\n      },\n      description: 'Text of the tag after title (not an accordion prop)'\n    },\n    ...sbHideControls(['theme', 'activeKey', 'defaultActiveKey', 'accordion', 'children', 'state'])\n  },\n  args: defaultArgs,\n  parameters: {\n    badges: [badges.stable, badges.reviewedByDesign],\n    docs: {\n      page: withMeta(MetaData)\n    },\n    design: MetaData.figmaView\n  }\n};\nexport default meta;\ntype Story = StoryObj<StoryAccordionProps>;\nexport const Basic: Story = {\n  render: ({\n    title,\n    withBorder,\n    expandIconPosition,\n    ...rest\n  }: StoryAccordionProps) => {\n    return <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n        <AccordionPanel {...rest} title={title} additionalText='' key={1}>\n          <P type='BTR5' themedColor='primary'>Accordion content</P>\n        </AccordionPanel>\n      </Accordion>;\n  }\n};\nexport const Variations: Story = {\n  render: ({\n    title,\n    titleSize,\n    additionalText,\n    indicatorMode,\n    tagBeforeLabel,\n    tagBeforeMode,\n    tagAfterLabel,\n    tagAfterMode,\n    withBorder,\n    expandIconPosition,\n    ...rest\n  }: StoryAccordionProps) => {\n    return <StoryColumn>\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} indicator={<Indicator mode={indicatorMode} />} key={1}>\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\n          </AccordionPanel>\n        </Accordion>\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />} key={1}>\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\n          </AccordionPanel>\n        </Accordion>\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />} key={1}>\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\n          </AccordionPanel>\n        </Accordion>\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} additionalText={additionalText} key={1}>\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\n          </AccordionPanel>\n        </Accordion>\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />} indicator={<Indicator mode={indicatorMode} />} additionalText={additionalText} key={1}>\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\n          </AccordionPanel>\n        </Accordion>\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />} tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />} indicator={<Indicator mode={indicatorMode} />} additionalText={additionalText} key={1}>\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\n          </AccordionPanel>\n        </Accordion>\n      </StoryColumn>;\n  }\n};\nexport const CustomHeader: Story = {\n  render: ({\n    title,\n    withBorder,\n    expandIconPosition,\n    ...rest\n  }: StoryAccordionProps) => {\n    return <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n        <AccordionPanel {...rest} title={title} additionalText='' header={<div>\n              <P type='H5'>Custom Header</P>\n              <Checkbox>Check me</Checkbox>\n            </div>} key={1}>\n          <div>\n            <P type='H6'>Accordion Content</P>\n            <Checkbox>Don`t check me</Checkbox>\n          </div>\n        </AccordionPanel>\n      </Accordion>;\n  }\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: ({\\n    title,\\n    withBorder,\\n    expandIconPosition,\\n    ...rest\\n  }: StoryAccordionProps) => {\\n    return <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\\n        <AccordionPanel {...rest} title={title} additionalText='' key={1}>\\n          <P type='BTR5' themedColor='primary'>Accordion content</P>\\n        </AccordionPanel>\\n      </Accordion>;\\n  }\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};\nVariations.parameters = {\n  ...Variations.parameters,\n  docs: {\n    ...Variations.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: ({\\n    title,\\n    titleSize,\\n    additionalText,\\n    indicatorMode,\\n    tagBeforeLabel,\\n    tagBeforeMode,\\n    tagAfterLabel,\\n    tagAfterMode,\\n    withBorder,\\n    expandIconPosition,\\n    ...rest\\n  }: StoryAccordionProps) => {\\n    return <StoryColumn>\\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} indicator={<Indicator mode={indicatorMode} />} key={1}>\\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\\n          </AccordionPanel>\\n        </Accordion>\\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />} key={1}>\\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\\n          </AccordionPanel>\\n        </Accordion>\\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />} key={1}>\\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\\n          </AccordionPanel>\\n        </Accordion>\\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} additionalText={additionalText} key={1}>\\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\\n          </AccordionPanel>\\n        </Accordion>\\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />} indicator={<Indicator mode={indicatorMode} />} additionalText={additionalText} key={1}>\\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\\n          </AccordionPanel>\\n        </Accordion>\\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />} tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />} indicator={<Indicator mode={indicatorMode} />} additionalText={additionalText} key={1}>\\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\\n          </AccordionPanel>\\n        </Accordion>\\n      </StoryColumn>;\\n  }\\n}\",\n      ...Variations.parameters?.docs?.source\n    }\n  }\n};\nCustomHeader.parameters = {\n  ...CustomHeader.parameters,\n  docs: {\n    ...CustomHeader.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: ({\\n    title,\\n    withBorder,\\n    expandIconPosition,\\n    ...rest\\n  }: StoryAccordionProps) => {\\n    return <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\\n        <AccordionPanel {...rest} title={title} additionalText='' header={<div>\\n              <P type='H5'>Custom Header</P>\\n              <Checkbox>Check me</Checkbox>\\n            </div>} key={1}>\\n          <div>\\n            <P type='H6'>Accordion Content</P>\\n            <Checkbox>Don`t check me</Checkbox>\\n          </div>\\n        </AccordionPanel>\\n      </Accordion>;\\n  }\\n}\",\n      ...CustomHeader.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{basic:{startLoc:{col:28,line:87},endLoc:{col:1,line:100},startBody:{col:28,line:87},endBody:{col:1,line:100}},variations:{startLoc:{col:33,line:101},endLoc:{col:1,line:148},startBody:{col:33,line:101},endBody:{col:1,line:148}},"custom-header":{startLoc:{col:35,line:149},endLoc:{col:1,line:168},startBody:{col:35,line:149},endBody:{col:1,line:168}}}},badges:[_badges.badges.stable,_badges.badges.reviewedByDesign],docs:{page:(0,_withMeta.withMeta)(_meta.default)},design:_meta.default.figmaView}};exports.default=meta;const Basic=exports.Basic={render:_ref=>{let{title,withBorder,expandIconPosition,...rest}=_ref;return(0,_jsxRuntime.jsx)(_Accordion.Accordion,{withBorder,expandIconPosition,children:(0,_react.createElement)(_Accordion.AccordionPanel,{...rest,title,additionalText:"",key:1},(0,_jsxRuntime.jsx)(_typography.P,{type:"BTR5",themedColor:"primary",children:"Accordion content"}))})}},Variations=exports.Variations={render:_ref2=>{let{title,titleSize,additionalText,indicatorMode,tagBeforeLabel,tagBeforeMode,tagAfterLabel,tagAfterMode,withBorder,expandIconPosition,...rest}=_ref2;return(0,_jsxRuntime.jsxs)(_StoryComponents.StoryColumn,{children:[(0,_jsxRuntime.jsx)(_Accordion.Accordion,{withBorder,expandIconPosition,children:(0,_react.createElement)(_Accordion.AccordionPanel,{...rest,title,titleSize,indicator:(0,_jsxRuntime.jsx)(_indicator.Indicator,{mode:indicatorMode}),key:1},(0,_jsxRuntime.jsx)(_typography.P,{type:"BTR5",themedColor:"primary",children:"Accordion content"}))}),(0,_jsxRuntime.jsx)(_Accordion.Accordion,{withBorder,expandIconPosition,children:(0,_react.createElement)(_Accordion.AccordionPanel,{...rest,title,titleSize,tagBefore:(0,_jsxRuntime.jsx)(_tag.Tag,{label:tagBeforeLabel,mode:tagBeforeMode}),key:1},(0,_jsxRuntime.jsx)(_typography.P,{type:"BTR5",themedColor:"primary",children:"Accordion content"}))}),(0,_jsxRuntime.jsx)(_Accordion.Accordion,{withBorder,expandIconPosition,children:(0,_react.createElement)(_Accordion.AccordionPanel,{...rest,title,titleSize,tagAfter:(0,_jsxRuntime.jsx)(_tag.Tag,{label:tagAfterLabel,mode:tagAfterMode}),key:1},(0,_jsxRuntime.jsx)(_typography.P,{type:"BTR5",themedColor:"primary",children:"Accordion content"}))}),(0,_jsxRuntime.jsx)(_Accordion.Accordion,{withBorder,expandIconPosition,children:(0,_react.createElement)(_Accordion.AccordionPanel,{...rest,title,titleSize,additionalText,key:1},(0,_jsxRuntime.jsx)(_typography.P,{type:"BTR5",themedColor:"primary",children:"Accordion content"}))}),(0,_jsxRuntime.jsx)(_Accordion.Accordion,{withBorder,expandIconPosition,children:(0,_react.createElement)(_Accordion.AccordionPanel,{...rest,title,titleSize,tagAfter:(0,_jsxRuntime.jsx)(_tag.Tag,{label:tagAfterLabel,mode:tagAfterMode}),indicator:(0,_jsxRuntime.jsx)(_indicator.Indicator,{mode:indicatorMode}),additionalText,key:1},(0,_jsxRuntime.jsx)(_typography.P,{type:"BTR5",themedColor:"primary",children:"Accordion content"}))}),(0,_jsxRuntime.jsx)(_Accordion.Accordion,{withBorder,expandIconPosition,children:(0,_react.createElement)(_Accordion.AccordionPanel,{...rest,title,titleSize,tagBefore:(0,_jsxRuntime.jsx)(_tag.Tag,{label:tagBeforeLabel,mode:tagBeforeMode}),tagAfter:(0,_jsxRuntime.jsx)(_tag.Tag,{label:tagAfterLabel,mode:tagAfterMode}),indicator:(0,_jsxRuntime.jsx)(_indicator.Indicator,{mode:indicatorMode}),additionalText,key:1},(0,_jsxRuntime.jsx)(_typography.P,{type:"BTR5",themedColor:"primary",children:"Accordion content"}))})]})}},CustomHeader=exports.CustomHeader={render:_ref3=>{let{title,withBorder,expandIconPosition,...rest}=_ref3;return(0,_jsxRuntime.jsx)(_Accordion.Accordion,{withBorder,expandIconPosition,children:(0,_react.createElement)(_Accordion.AccordionPanel,{...rest,title,additionalText:"",header:(0,_jsxRuntime.jsxs)("div",{children:[(0,_jsxRuntime.jsx)(_typography.P,{type:"H5",children:"Custom Header"}),(0,_jsxRuntime.jsx)(_checkbox.Checkbox,{children:"Check me"})]}),key:1},(0,_jsxRuntime.jsxs)("div",{children:[(0,_jsxRuntime.jsx)(_typography.P,{type:"H6",children:"Accordion Content"}),(0,_jsxRuntime.jsx)(_checkbox.Checkbox,{children:"Don`t check me"})]}))})}};Basic.parameters={...Basic.parameters,docs:{...null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs,source:{originalSource:"{\n  render: ({\n    title,\n    withBorder,\n    expandIconPosition,\n    ...rest\n  }: StoryAccordionProps) => {\n    return <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n        <AccordionPanel {...rest} title={title} additionalText='' key={1}>\n          <P type='BTR5' themedColor='primary'>Accordion content</P>\n        </AccordionPanel>\n      </Accordion>;\n  }\n}",...null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source}}},Variations.parameters={...Variations.parameters,docs:{...null===(_Variations$parameter=Variations.parameters)||void 0===_Variations$parameter?void 0:_Variations$parameter.docs,source:{originalSource:"{\n  render: ({\n    title,\n    titleSize,\n    additionalText,\n    indicatorMode,\n    tagBeforeLabel,\n    tagBeforeMode,\n    tagAfterLabel,\n    tagAfterMode,\n    withBorder,\n    expandIconPosition,\n    ...rest\n  }: StoryAccordionProps) => {\n    return <StoryColumn>\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} indicator={<Indicator mode={indicatorMode} />} key={1}>\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\n          </AccordionPanel>\n        </Accordion>\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />} key={1}>\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\n          </AccordionPanel>\n        </Accordion>\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />} key={1}>\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\n          </AccordionPanel>\n        </Accordion>\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} additionalText={additionalText} key={1}>\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\n          </AccordionPanel>\n        </Accordion>\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />} indicator={<Indicator mode={indicatorMode} />} additionalText={additionalText} key={1}>\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\n          </AccordionPanel>\n        </Accordion>\n        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n          <AccordionPanel {...rest} title={title} titleSize={titleSize} tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />} tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />} indicator={<Indicator mode={indicatorMode} />} additionalText={additionalText} key={1}>\n            <P type='BTR5' themedColor='primary'>Accordion content</P>\n          </AccordionPanel>\n        </Accordion>\n      </StoryColumn>;\n  }\n}",...null===(_Variations$parameter2=Variations.parameters)||void 0===_Variations$parameter2||null===(_Variations$parameter3=_Variations$parameter2.docs)||void 0===_Variations$parameter3?void 0:_Variations$parameter3.source}}},CustomHeader.parameters={...CustomHeader.parameters,docs:{...null===(_CustomHeader$paramet=CustomHeader.parameters)||void 0===_CustomHeader$paramet?void 0:_CustomHeader$paramet.docs,source:{originalSource:"{\n  render: ({\n    title,\n    withBorder,\n    expandIconPosition,\n    ...rest\n  }: StoryAccordionProps) => {\n    return <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>\n        <AccordionPanel {...rest} title={title} additionalText='' header={<div>\n              <P type='H5'>Custom Header</P>\n              <Checkbox>Check me</Checkbox>\n            </div>} key={1}>\n          <div>\n            <P type='H6'>Accordion Content</P>\n            <Checkbox>Don`t check me</Checkbox>\n          </div>\n        </AccordionPanel>\n      </Accordion>;\n  }\n}",...null===(_CustomHeader$paramet2=CustomHeader.parameters)||void 0===_CustomHeader$paramet2||null===(_CustomHeader$paramet3=_CustomHeader$paramet2.docs)||void 0===_CustomHeader$paramet3?void 0:_CustomHeader$paramet3.source}}};exports.__namedExportsOrder=["Basic","Variations","CustomHeader"]},"./src/accordion/__meta__/meta.json":module=>{module.exports=JSON.parse('{"dod":{"designTokens":true,"useThemedHook":true,"unitTests":true,"screenshotTests":false,"migration":false,"apiTable":true,"storybook":true,"figmaView":true},"component":"Accordion","description":"Компонент аккордеона. В качестве основы используется AntdCollapse из библиотеки Antd.\\n\\nВ заголовке аккордеона можно включать дополнительные элементы: tagBefore, indicator, tagAfter, additionalText. Каждый из них включается независимо, можно включить один или сразу несколько.","usage":"Элемент, при нажатии на который раскрывается или закрывается скрытый блок.","designLink":"https://www.figma.com/file/9hiN2DbkqbxbhR9EWRI1VK/%5BB2B%5D-UI-KIT?node-id=8415%3A35985&t=pu93diqHGcFyGjdG-0","figmaView":"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7TGvGlgGfTltMG1OBgLq8p%2F00-%255BB2B%255D-Hexa-UI-Kit%3Ftype%3Ddesign%26node-id%3D8415%253A35985%26mode%3Ddev"}')}}]);