"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[1425],{"./helpers/hocs/MetaComponent/MetaDod.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MetaDod=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_types=__webpack_require__("./helpers/hocs/MetaComponent/types.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const StyledTableContainer=_styledComponents.default.div.withConfig({displayName:"MetaDod__StyledTableContainer",componentId:"sc-1gxe50k-0"})(["&&&&&{width:300px;td,th,tr{background:transparent;border:none;}}"]),MetaDod=_ref=>{let{list}=_ref;const metaDodKeys=(0,_react.useMemo)((()=>Object.keys(_types.metaDod)),[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:`Definition of done ${(new Date).getDate()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`}),(0,_jsxRuntime.jsx)(StyledTableContainer,{children:(0,_jsxRuntime.jsxs)("table",{children:[(0,_jsxRuntime.jsx)("thead",{children:(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Point"})}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Status"})})]})}),(0,_jsxRuntime.jsx)("tbody",{children:metaDodKeys.map((key=>(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:_types.metaDod[key]}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)(_tag.Tag,{mode:list[key]?"grass":"red",children:list[key]?"ready":"need"})})]},key)))})]})})]})};exports.MetaDod=MetaDod;try{MetaDod.displayName="MetaDod",MetaDod.__docgenInfo={description:"",displayName:"MetaDod",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Partial<Record<"storybook" | "designTokens" | "useThemedHook" | "unitTests" | "screenshotTests" | "migration" | "apiTable" | "figmaView", boolean>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"]={docgenInfo:MetaDod.__docgenInfo,name:"MetaDod",path:"helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.metaDod=void 0;exports.metaDod={designTokens:"Дизайн токены",useThemedHook:"Использование theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Описание миграции",apiTable:"api table",storybook:"storybook",figmaView:"Отображение в Фигме"}},"./helpers/hocs/MetaComponent/withMeta.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMeta=function withMeta(list,Component){return props=>(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Title,{children:list.component}),(0,_jsxRuntime.jsx)(_MetaDod.MetaDod,{list:list.dod}),(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Описание"}),list.description?(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.description}):"-",(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Использование"}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.usage}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:`[Дизайн](${list.designLink})`}),Component&&(0,_jsxRuntime.jsx)(Component,{...props}),(0,_jsxRuntime.jsx)(_blocks.Primary,{}),(0,_jsxRuntime.jsx)(_blocks.ArgsTable,{story:_blocks.PRIMARY_STORY}),(0,_jsxRuntime.jsx)(_blocks.Stories,{title:"Variants of View"})]})};(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _MetaDod=__webpack_require__("./helpers/hocs/MetaComponent/MetaDod.tsx"),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js")},"./src/grid/Grid.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.WithCustomLayout=exports.GridTemplate=exports.Basic=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_WithCustomLayout$par,_WithCustomLayout$par2,_WithCustomLayout$par3,_GridTemplate$paramet,_GridTemplate$paramet2,_GridTemplate$paramet3,_styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_badges=__webpack_require__("./.storybook/badges.ts"),_Grid=__webpack_require__("./src/grid/Grid.tsx"),_withMeta=__webpack_require__("./helpers/hocs/MetaComponent/withMeta.tsx"),_meta=_interopRequireDefault(__webpack_require__("./src/grid/__meta__/meta.json")),_GridItem=__webpack_require__("./src/grid/GridItem.tsx"),_select=__webpack_require__("./src/select/index.ts"),_templates=__webpack_require__("./src/grid/templates/index.ts"),_keyValue=__webpack_require__("./src/key-value/index.ts"),_input=__webpack_require__("./src/input/index.ts"),_typography=__webpack_require__("./src/typography/index.ts"),_space=__webpack_require__("./src/space/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const meta={title:"Molecules/Grid",component:_Grid.Grid,argTypes:{cols:{control:{type:"number",min:1}}},args:{testId:"grid-test-id",klId:"grid-kl-id"},parameters:{storySource:{source:"import React, { PropsWithChildren } from 'react';\nimport styled from 'styled-components';\nimport { badges } from '@sb/badges';\nimport { Grid } from './Grid';\nimport { GridProps } from './types';\nimport { withMeta } from '@helpers/hocs/MetaComponent/withMeta';\nimport { Meta, StoryObj } from '@storybook/react';\nimport MetaData from './__meta__/meta.json';\nimport { GridItem } from './GridItem';\nimport { Select } from '../select';\nimport { FormGrid } from './templates';\nimport { KeyValue } from '@src/key-value';\nimport { Textbox } from '@src/input';\nimport { Text } from '@src/typography';\nimport { Space } from '@src/space';\ntype GridPropsStory = PropsWithChildren<GridProps>;\nconst meta: Meta<GridPropsStory> = {\n  title: 'Molecules/Grid',\n  component: Grid,\n  argTypes: {\n    cols: {\n      control: {\n        type: 'number',\n        min: 1\n      }\n    }\n  },\n  args: {\n    testId: 'grid-test-id',\n    klId: 'grid-kl-id'\n  },\n  parameters: {\n    badges: [badges.stable, badges.needsDesignReview],\n    docs: {\n      page: withMeta(MetaData)\n    }\n  }\n};\nexport default meta;\ntype Story = StoryObj<GridPropsStory>;\nconst Widget = styled.div`\n  width: 100%;\n  height: 100%;\n  border : solid 2px blue;\n  text-align: center;\n  font-weight: bold;\n`;\nconst Card = styled('div')`\n  width: 100%;\n  height: 100%;\n  background: #F8FAFC;\n  border-radius: 16px;\n  padding: 16px;\n`;\nconst defaultArray = Array(28).fill('empty value');\nexport const Basic: Story = {\n  render: (args: GridProps) => {\n    return <>\n      <Grid {...args}>\n        {defaultArray.map((el, i) => <GridItem key={i}>\n          <Widget>Widget #{i + 1}</Widget>\n        </GridItem>)}\n      </Grid>\n    </>;\n  }\n};\nexport const WithCustomLayout: Story = {\n  render: (args: GridProps) => <Grid {...args}>\n      {Array.from(Array(6).keys()).map(widget => <GridItem key={widget + 1}>\n            <Widget>Widget #{widget + 1}</Widget>\n          </GridItem>)}\n    </Grid>,\n  args: {\n    layout: {\n      cols: ['repeat(2, 280px)'],\n      rows: ['repeat(3, 100px)']\n    }\n  }\n};\nconst opts = [{\n  label: 'Create new',\n  value: 1\n}, {\n  label: 'kata/edr',\n  value: 2\n}, {\n  label: 'DestinationID',\n  value: 3\n}, {\n  label: 'Enable network isolation',\n  value: 4\n}, {\n  label: 'Inbount/outbound',\n  value: 5\n}, {\n  label: 'sqas',\n  value: 6\n}];\nconst dataKeyValue2 = [{\n  pairKey: 'Workers',\n  pairValue: <Textbox.Number value={0} />\n}, {\n  pairKey: 'Some very very long text that consist 2 lines or maybe more. Some very very long text that consist 2 lines or maybe more.Some very very long text that consist 2 lines or maybe more.',\n  pairValue: <Text>Some very very long text that consist 2 lines or maybe more. Some very very long text that consist 2 lines or maybe more. Some very very long text that consist 2 lines or maybe more.</Text>\n}, {\n  pairKey: 'Response rule',\n  pairValue: <Select placeholder=\"Select\" options={opts} value={1} />\n}];\nexport const GridTemplate: Story = {\n  render: (args: GridProps) => <Space size={24} width={'100%'} direction={'vertical'}>\n      <FormGrid {...args} gridPreset={'4fr 6fr 2fr'}>\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n          <Text type='H3'>GridPreset &apos;4fr 6fr 2fr&apos;</Text>\n          <KeyValue data={dataKeyValue2} />\n        </Space>\n      </FormGrid>\n      <FormGrid {...args} gridPreset={'4fr 8fr'}>\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n          <Text type='H3'>GridPreset &apos;4fr 8fr&apos;</Text>\n          <KeyValue data={dataKeyValue2} />\n        </Space>\n      </FormGrid>\n      <FormGrid {...args} gridPreset={'3fr 6fr 3fr'}>\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n          <Text type='H3'>GridPreset &apos;3fr 6fr 3fr&apos;</Text>\n          <KeyValue data={dataKeyValue2} />\n        </Space>\n      </FormGrid>\n      <FormGrid gridPreset={'4fr 6fr 2fr'}>\n        <Text type='BTM2'>Filter</Text>\n        <Card>\n            <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n            <Text type='H5'>GridPreset &apos;4fr 6fr 2fr&apos;</Text>\n            <KeyValue gridLayout={{\n            cols: ['4fr 6fr 2fr']\n          }} data={dataKeyValue2} />\n            <Text type='H5'>GridPreset &apos;4fr 8fr&apos;</Text>\n            <KeyValue gridLayout={{\n            cols: ['4fr 8fr']\n          }} data={dataKeyValue2} />\n            <Text type='H5'>GridPreset &apos;3fr 6fr 3fr&apos;</Text>\n            <KeyValue gridLayout={{\n            cols: ['3fr 6fr 3fr']\n          }} data={dataKeyValue2} />\n          </Space>\n        </Card>\n      </FormGrid>\n      <FormGrid gridPreset={'4fr 6fr 2fr'}>\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n          <Text type='H3'>4fr 6fr 2fr</Text>\n          <KeyValue data={dataKeyValue2} />\n          <Card>\n            <KeyValue data={dataKeyValue2} />\n          </Card>\n          <KeyValue data={dataKeyValue2} />\n        </Space>\n      </FormGrid>\n      <FormGrid gridPreset={'4fr 8fr'}>\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n          <Text type='H3'>4fr 8fr</Text>\n          <KeyValue data={dataKeyValue2} />\n          <Card>\n            <KeyValue data={dataKeyValue2} />\n          </Card>\n          <KeyValue data={dataKeyValue2} />\n        </Space>\n      </FormGrid>\n      <FormGrid gridPreset={'3fr 6fr 3fr'}>\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n          <Text type='H3'>3fr 6fr 3fr</Text>\n          <KeyValue data={dataKeyValue2} />\n          <Card>\n            <KeyValue data={dataKeyValue2} />\n          </Card>\n          <KeyValue data={dataKeyValue2} />\n        </Space>\n      </FormGrid>\n    </Space>\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: GridProps) => {\\n    return <>\\n      <Grid {...args}>\\n        {defaultArray.map((el, i) => <GridItem key={i}>\\n          <Widget>Widget #{i + 1}</Widget>\\n        </GridItem>)}\\n      </Grid>\\n    </>;\\n  }\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};\nWithCustomLayout.parameters = {\n  ...WithCustomLayout.parameters,\n  docs: {\n    ...WithCustomLayout.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: GridProps) => <Grid {...args}>\\n      {Array.from(Array(6).keys()).map(widget => <GridItem key={widget + 1}>\\n            <Widget>Widget #{widget + 1}</Widget>\\n          </GridItem>)}\\n    </Grid>,\\n  args: {\\n    layout: {\\n      cols: ['repeat(2, 280px)'],\\n      rows: ['repeat(3, 100px)']\\n    }\\n  }\\n}\",\n      ...WithCustomLayout.parameters?.docs?.source\n    }\n  }\n};\nGridTemplate.parameters = {\n  ...GridTemplate.parameters,\n  docs: {\n    ...GridTemplate.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: GridProps) => <Space size={24} width={'100%'} direction={'vertical'}>\\n      <FormGrid {...args} gridPreset={'4fr 6fr 2fr'}>\\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\\n          <Text type='H3'>GridPreset &apos;4fr 6fr 2fr&apos;</Text>\\n          <KeyValue data={dataKeyValue2} />\\n        </Space>\\n      </FormGrid>\\n      <FormGrid {...args} gridPreset={'4fr 8fr'}>\\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\\n          <Text type='H3'>GridPreset &apos;4fr 8fr&apos;</Text>\\n          <KeyValue data={dataKeyValue2} />\\n        </Space>\\n      </FormGrid>\\n      <FormGrid {...args} gridPreset={'3fr 6fr 3fr'}>\\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\\n          <Text type='H3'>GridPreset &apos;3fr 6fr 3fr&apos;</Text>\\n          <KeyValue data={dataKeyValue2} />\\n        </Space>\\n      </FormGrid>\\n      <FormGrid gridPreset={'4fr 6fr 2fr'}>\\n        <Text type='BTM2'>Filter</Text>\\n        <Card>\\n            <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\\n            <Text type='H5'>GridPreset &apos;4fr 6fr 2fr&apos;</Text>\\n            <KeyValue gridLayout={{\\n            cols: ['4fr 6fr 2fr']\\n          }} data={dataKeyValue2} />\\n            <Text type='H5'>GridPreset &apos;4fr 8fr&apos;</Text>\\n            <KeyValue gridLayout={{\\n            cols: ['4fr 8fr']\\n          }} data={dataKeyValue2} />\\n            <Text type='H5'>GridPreset &apos;3fr 6fr 3fr&apos;</Text>\\n            <KeyValue gridLayout={{\\n            cols: ['3fr 6fr 3fr']\\n          }} data={dataKeyValue2} />\\n          </Space>\\n        </Card>\\n      </FormGrid>\\n      <FormGrid gridPreset={'4fr 6fr 2fr'}>\\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\\n          <Text type='H3'>4fr 6fr 2fr</Text>\\n          <KeyValue data={dataKeyValue2} />\\n          <Card>\\n            <KeyValue data={dataKeyValue2} />\\n          </Card>\\n          <KeyValue data={dataKeyValue2} />\\n        </Space>\\n      </FormGrid>\\n      <FormGrid gridPreset={'4fr 8fr'}>\\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\\n          <Text type='H3'>4fr 8fr</Text>\\n          <KeyValue data={dataKeyValue2} />\\n          <Card>\\n            <KeyValue data={dataKeyValue2} />\\n          </Card>\\n          <KeyValue data={dataKeyValue2} />\\n        </Space>\\n      </FormGrid>\\n      <FormGrid gridPreset={'3fr 6fr 3fr'}>\\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\\n          <Text type='H3'>3fr 6fr 3fr</Text>\\n          <KeyValue data={dataKeyValue2} />\\n          <Card>\\n            <KeyValue data={dataKeyValue2} />\\n          </Card>\\n          <KeyValue data={dataKeyValue2} />\\n        </Space>\\n      </FormGrid>\\n    </Space>\\n}\",\n      ...GridTemplate.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{basic:{startLoc:{col:28,line:56},endLoc:{col:1,line:66},startBody:{col:28,line:56},endBody:{col:1,line:66}},"with-custom-layout":{startLoc:{col:39,line:67},endLoc:{col:1,line:79},startBody:{col:39,line:67},endBody:{col:1,line:79}},"grid-template":{startLoc:{col:35,line:109},endLoc:{col:1,line:179},startBody:{col:35,line:109},endBody:{col:1,line:179}}}},badges:[_badges.badges.stable,_badges.badges.needsDesignReview],docs:{page:(0,_withMeta.withMeta)(_meta.default)}}};exports.default=meta;const Widget=_styledComponents.default.div.withConfig({displayName:"Gridstories__Widget",componentId:"sc-kgia82-0"})(["width:100%;height:100%;border:solid 2px blue;text-align:center;font-weight:bold;"]),Card=(0,_styledComponents.default)("div").withConfig({displayName:"Gridstories__Card",componentId:"sc-kgia82-1"})(["width:100%;height:100%;background:#F8FAFC;border-radius:16px;padding:16px;"]),defaultArray=Array(28).fill("empty value"),Basic=exports.Basic={render:args=>(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:(0,_jsxRuntime.jsx)(_Grid.Grid,{...args,children:defaultArray.map(((el,i)=>(0,_jsxRuntime.jsx)(_GridItem.GridItem,{children:(0,_jsxRuntime.jsxs)(Widget,{children:["Widget #",i+1]})},i)))})})},WithCustomLayout=exports.WithCustomLayout={render:args=>(0,_jsxRuntime.jsx)(_Grid.Grid,{...args,children:Array.from(Array(6).keys()).map((widget=>(0,_jsxRuntime.jsx)(_GridItem.GridItem,{children:(0,_jsxRuntime.jsxs)(Widget,{children:["Widget #",widget+1]})},widget+1)))}),args:{layout:{cols:["repeat(2, 280px)"],rows:["repeat(3, 100px)"]}}},dataKeyValue2=[{pairKey:"Workers",pairValue:(0,_jsxRuntime.jsx)(_input.Textbox.Number,{value:0})},{pairKey:"Some very very long text that consist 2 lines or maybe more. Some very very long text that consist 2 lines or maybe more.Some very very long text that consist 2 lines or maybe more.",pairValue:(0,_jsxRuntime.jsx)(_typography.Text,{children:"Some very very long text that consist 2 lines or maybe more. Some very very long text that consist 2 lines or maybe more. Some very very long text that consist 2 lines or maybe more."})},{pairKey:"Response rule",pairValue:(0,_jsxRuntime.jsx)(_select.Select,{placeholder:"Select",options:[{label:"Create new",value:1},{label:"kata/edr",value:2},{label:"DestinationID",value:3},{label:"Enable network isolation",value:4},{label:"Inbount/outbound",value:5},{label:"sqas",value:6}],value:1})}],GridTemplate=exports.GridTemplate={render:args=>(0,_jsxRuntime.jsxs)(_space.Space,{size:24,width:"100%",direction:"vertical",children:[(0,_jsxRuntime.jsx)(_templates.FormGrid,{...args,gridPreset:"4fr 6fr 2fr",children:(0,_jsxRuntime.jsxs)(_space.Space,{size:16,width:"100%",direction:"vertical",align:"start",children:[(0,_jsxRuntime.jsx)(_typography.Text,{type:"H3",children:"GridPreset '4fr 6fr 2fr'"}),(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{data:dataKeyValue2})]})}),(0,_jsxRuntime.jsx)(_templates.FormGrid,{...args,gridPreset:"4fr 8fr",children:(0,_jsxRuntime.jsxs)(_space.Space,{size:16,width:"100%",direction:"vertical",align:"start",children:[(0,_jsxRuntime.jsx)(_typography.Text,{type:"H3",children:"GridPreset '4fr 8fr'"}),(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{data:dataKeyValue2})]})}),(0,_jsxRuntime.jsx)(_templates.FormGrid,{...args,gridPreset:"3fr 6fr 3fr",children:(0,_jsxRuntime.jsxs)(_space.Space,{size:16,width:"100%",direction:"vertical",align:"start",children:[(0,_jsxRuntime.jsx)(_typography.Text,{type:"H3",children:"GridPreset '3fr 6fr 3fr'"}),(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{data:dataKeyValue2})]})}),(0,_jsxRuntime.jsxs)(_templates.FormGrid,{gridPreset:"4fr 6fr 2fr",children:[(0,_jsxRuntime.jsx)(_typography.Text,{type:"BTM2",children:"Filter"}),(0,_jsxRuntime.jsx)(Card,{children:(0,_jsxRuntime.jsxs)(_space.Space,{size:16,width:"100%",direction:"vertical",align:"start",children:[(0,_jsxRuntime.jsx)(_typography.Text,{type:"H5",children:"GridPreset '4fr 6fr 2fr'"}),(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{gridLayout:{cols:["4fr 6fr 2fr"]},data:dataKeyValue2}),(0,_jsxRuntime.jsx)(_typography.Text,{type:"H5",children:"GridPreset '4fr 8fr'"}),(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{gridLayout:{cols:["4fr 8fr"]},data:dataKeyValue2}),(0,_jsxRuntime.jsx)(_typography.Text,{type:"H5",children:"GridPreset '3fr 6fr 3fr'"}),(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{gridLayout:{cols:["3fr 6fr 3fr"]},data:dataKeyValue2})]})})]}),(0,_jsxRuntime.jsx)(_templates.FormGrid,{gridPreset:"4fr 6fr 2fr",children:(0,_jsxRuntime.jsxs)(_space.Space,{size:16,width:"100%",direction:"vertical",align:"start",children:[(0,_jsxRuntime.jsx)(_typography.Text,{type:"H3",children:"4fr 6fr 2fr"}),(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{data:dataKeyValue2}),(0,_jsxRuntime.jsx)(Card,{children:(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{data:dataKeyValue2})}),(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{data:dataKeyValue2})]})}),(0,_jsxRuntime.jsx)(_templates.FormGrid,{gridPreset:"4fr 8fr",children:(0,_jsxRuntime.jsxs)(_space.Space,{size:16,width:"100%",direction:"vertical",align:"start",children:[(0,_jsxRuntime.jsx)(_typography.Text,{type:"H3",children:"4fr 8fr"}),(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{data:dataKeyValue2}),(0,_jsxRuntime.jsx)(Card,{children:(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{data:dataKeyValue2})}),(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{data:dataKeyValue2})]})}),(0,_jsxRuntime.jsx)(_templates.FormGrid,{gridPreset:"3fr 6fr 3fr",children:(0,_jsxRuntime.jsxs)(_space.Space,{size:16,width:"100%",direction:"vertical",align:"start",children:[(0,_jsxRuntime.jsx)(_typography.Text,{type:"H3",children:"3fr 6fr 3fr"}),(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{data:dataKeyValue2}),(0,_jsxRuntime.jsx)(Card,{children:(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{data:dataKeyValue2})}),(0,_jsxRuntime.jsx)(_keyValue.KeyValue,{data:dataKeyValue2})]})})]})};Basic.parameters={...Basic.parameters,docs:{...null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs,source:{originalSource:"{\n  render: (args: GridProps) => {\n    return <>\n      <Grid {...args}>\n        {defaultArray.map((el, i) => <GridItem key={i}>\n          <Widget>Widget #{i + 1}</Widget>\n        </GridItem>)}\n      </Grid>\n    </>;\n  }\n}",...null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source}}},WithCustomLayout.parameters={...WithCustomLayout.parameters,docs:{...null===(_WithCustomLayout$par=WithCustomLayout.parameters)||void 0===_WithCustomLayout$par?void 0:_WithCustomLayout$par.docs,source:{originalSource:"{\n  render: (args: GridProps) => <Grid {...args}>\n      {Array.from(Array(6).keys()).map(widget => <GridItem key={widget + 1}>\n            <Widget>Widget #{widget + 1}</Widget>\n          </GridItem>)}\n    </Grid>,\n  args: {\n    layout: {\n      cols: ['repeat(2, 280px)'],\n      rows: ['repeat(3, 100px)']\n    }\n  }\n}",...null===(_WithCustomLayout$par2=WithCustomLayout.parameters)||void 0===_WithCustomLayout$par2||null===(_WithCustomLayout$par3=_WithCustomLayout$par2.docs)||void 0===_WithCustomLayout$par3?void 0:_WithCustomLayout$par3.source}}},GridTemplate.parameters={...GridTemplate.parameters,docs:{...null===(_GridTemplate$paramet=GridTemplate.parameters)||void 0===_GridTemplate$paramet?void 0:_GridTemplate$paramet.docs,source:{originalSource:"{\n  render: (args: GridProps) => <Space size={24} width={'100%'} direction={'vertical'}>\n      <FormGrid {...args} gridPreset={'4fr 6fr 2fr'}>\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n          <Text type='H3'>GridPreset &apos;4fr 6fr 2fr&apos;</Text>\n          <KeyValue data={dataKeyValue2} />\n        </Space>\n      </FormGrid>\n      <FormGrid {...args} gridPreset={'4fr 8fr'}>\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n          <Text type='H3'>GridPreset &apos;4fr 8fr&apos;</Text>\n          <KeyValue data={dataKeyValue2} />\n        </Space>\n      </FormGrid>\n      <FormGrid {...args} gridPreset={'3fr 6fr 3fr'}>\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n          <Text type='H3'>GridPreset &apos;3fr 6fr 3fr&apos;</Text>\n          <KeyValue data={dataKeyValue2} />\n        </Space>\n      </FormGrid>\n      <FormGrid gridPreset={'4fr 6fr 2fr'}>\n        <Text type='BTM2'>Filter</Text>\n        <Card>\n            <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n            <Text type='H5'>GridPreset &apos;4fr 6fr 2fr&apos;</Text>\n            <KeyValue gridLayout={{\n            cols: ['4fr 6fr 2fr']\n          }} data={dataKeyValue2} />\n            <Text type='H5'>GridPreset &apos;4fr 8fr&apos;</Text>\n            <KeyValue gridLayout={{\n            cols: ['4fr 8fr']\n          }} data={dataKeyValue2} />\n            <Text type='H5'>GridPreset &apos;3fr 6fr 3fr&apos;</Text>\n            <KeyValue gridLayout={{\n            cols: ['3fr 6fr 3fr']\n          }} data={dataKeyValue2} />\n          </Space>\n        </Card>\n      </FormGrid>\n      <FormGrid gridPreset={'4fr 6fr 2fr'}>\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n          <Text type='H3'>4fr 6fr 2fr</Text>\n          <KeyValue data={dataKeyValue2} />\n          <Card>\n            <KeyValue data={dataKeyValue2} />\n          </Card>\n          <KeyValue data={dataKeyValue2} />\n        </Space>\n      </FormGrid>\n      <FormGrid gridPreset={'4fr 8fr'}>\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n          <Text type='H3'>4fr 8fr</Text>\n          <KeyValue data={dataKeyValue2} />\n          <Card>\n            <KeyValue data={dataKeyValue2} />\n          </Card>\n          <KeyValue data={dataKeyValue2} />\n        </Space>\n      </FormGrid>\n      <FormGrid gridPreset={'3fr 6fr 3fr'}>\n        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>\n          <Text type='H3'>3fr 6fr 3fr</Text>\n          <KeyValue data={dataKeyValue2} />\n          <Card>\n            <KeyValue data={dataKeyValue2} />\n          </Card>\n          <KeyValue data={dataKeyValue2} />\n        </Space>\n      </FormGrid>\n    </Space>\n}",...null===(_GridTemplate$paramet2=GridTemplate.parameters)||void 0===_GridTemplate$paramet2||null===(_GridTemplate$paramet3=_GridTemplate$paramet2.docs)||void 0===_GridTemplate$paramet3?void 0:_GridTemplate$paramet3.source}}};exports.__namedExportsOrder=["Basic","WithCustomLayout","GridTemplate"]},"./src/grid/__meta__/meta.json":module=>{module.exports=JSON.parse('{"dod":{"designTokens":true,"useThemedHook":true,"unitTests":true,"screenshotTests":false,"migration":true,"apiTable":true,"storybook":true},"component":"Grid","description":"Компонент для композиции элементов на странице с помощью грид системы","usage":"Расположение элементов на странице и внутри самостоятельных блоков"}')}}]);