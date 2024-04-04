"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[4212],{"./src/time-input/stories/RangeTime.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.RangeTime=void 0;var _RangeTime$parameters,_RangeTime$parameters2,_RangeTime$parameters3,_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_badges=__webpack_require__("./.storybook/badges.ts"),_typography=__webpack_require__("./src/typography/index.ts"),_space=__webpack_require__("./src/space/index.ts"),_TimeInput=__webpack_require__("./src/time-input/TimeInput.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const disableArg={table:{disable:!0}},meta={title:"Organisms/DateRanges",component:_TimeInput.TimeInput,argTypes:{format:disableArg,placeholder:disableArg,theme:disableArg,value:disableArg,onChange:disableArg,klId:disableArg,testId:disableArg,componentId:disableArg,dataTestId:disableArg,className:disableArg,disabled:disableArg,readOnly:disableArg,invalid:disableArg,valid:disableArg,error:disableArg,positive:disableArg},parameters:{storySource:{source:"import React, { useState } from 'react';\nimport styled from 'styled-components';\nimport { Meta, StoryObj } from '@storybook/react';\nimport { badges } from '@sb/badges';\nimport { H6 } from '@src/typography';\nimport { Space } from '@src/space';\nimport { TimeInputProps } from '../types';\nimport { TimeInput } from '../TimeInput';\nconst disableArg = {\n  table: {\n    disable: true\n  }\n};\nconst meta: Meta<TimeInputProps> = {\n  title: 'Organisms/DateRanges',\n  component: TimeInput,\n  argTypes: {\n    format: disableArg,\n    placeholder: disableArg,\n    theme: disableArg,\n    value: disableArg,\n    onChange: disableArg,\n    klId: disableArg,\n    testId: disableArg,\n    componentId: disableArg,\n    dataTestId: disableArg,\n    className: disableArg,\n    disabled: disableArg,\n    readOnly: disableArg,\n    invalid: disableArg,\n    valid: disableArg,\n    error: disableArg,\n    positive: disableArg\n  },\n  parameters: {\n    badges: [badges.stable, badges.needsDesignReview]\n  },\n  decorators: [(Story, context) => <Wrapper>\n        <Story {...context} />\n      </Wrapper>]\n};\nexport default meta;\nconst Wrapper = styled.div`\n  width: 300px;\n`;\nexport const RangeTime: StoryObj<TimeInputProps> = {\n  render: args => {\n    const [firstTime, setFirstTime] = useState<string>();\n    const [secondTime, setSecondTime] = useState<string>();\n    return <>\n      <H6>Range time picker is composition of 2 TimeInputs</H6>\n      <Space size={4} direction={'horizontal'} wrap={'nowrap'}>\n        <TimeInput {...args} value={firstTime} onChange={setFirstTime} format={'HH:mm:ss'} placeholder={'00:00:00'} />\n        – <TimeInput {...args} value={secondTime} onChange={setSecondTime} format={'HH:mm:ss'} placeholder={'00:00:00'} />\n      </Space>\n    </>;\n  }\n};\nRangeTime.parameters = {\n  ...RangeTime.parameters,\n  docs: {\n    ...RangeTime.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: args => {\\n    const [firstTime, setFirstTime] = useState<string>();\\n    const [secondTime, setSecondTime] = useState<string>();\\n    return <>\\n      <H6>Range time picker is composition of 2 TimeInputs</H6>\\n      <Space size={4} direction={'horizontal'} wrap={'nowrap'}>\\n        <TimeInput {...args} value={firstTime} onChange={setFirstTime} format={'HH:mm:ss'} placeholder={'00:00:00'} />\\n        \\u2013 <TimeInput {...args} value={secondTime} onChange={setSecondTime} format={'HH:mm:ss'} placeholder={'00:00:00'} />\\n      </Space>\\n    </>;\\n  }\\n}\",\n      ...RangeTime.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"range-time":{startLoc:{col:51,line:46},endLoc:{col:1,line:58},startBody:{col:51,line:46},endBody:{col:1,line:58}}}},badges:[_badges.badges.stable,_badges.badges.needsDesignReview]},decorators:[(Story,context)=>(0,_jsxRuntime.jsx)(Wrapper,{children:(0,_jsxRuntime.jsx)(Story,{...context})})]};exports.default=meta;const Wrapper=_styledComponents.default.div.withConfig({displayName:"RangeTimestories__Wrapper",componentId:"sc-g4z271-0"})(["width:300px;"]),RangeTime=exports.RangeTime={render:args=>{const[firstTime,setFirstTime]=(0,_react.useState)(),[secondTime,setSecondTime]=(0,_react.useState)();return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_typography.H6,{children:"Range time picker is composition of 2 TimeInputs"}),(0,_jsxRuntime.jsxs)(_space.Space,{size:4,direction:"horizontal",wrap:"nowrap",children:[(0,_jsxRuntime.jsx)(_TimeInput.TimeInput,{...args,value:firstTime,onChange:setFirstTime,format:"HH:mm:ss",placeholder:"00:00:00"}),"– ",(0,_jsxRuntime.jsx)(_TimeInput.TimeInput,{...args,value:secondTime,onChange:setSecondTime,format:"HH:mm:ss",placeholder:"00:00:00"})]})]})}};RangeTime.parameters={...RangeTime.parameters,docs:{...null===(_RangeTime$parameters=RangeTime.parameters)||void 0===_RangeTime$parameters?void 0:_RangeTime$parameters.docs,source:{originalSource:"{\n  render: args => {\n    const [firstTime, setFirstTime] = useState<string>();\n    const [secondTime, setSecondTime] = useState<string>();\n    return <>\n      <H6>Range time picker is composition of 2 TimeInputs</H6>\n      <Space size={4} direction={'horizontal'} wrap={'nowrap'}>\n        <TimeInput {...args} value={firstTime} onChange={setFirstTime} format={'HH:mm:ss'} placeholder={'00:00:00'} />\n        – <TimeInput {...args} value={secondTime} onChange={setSecondTime} format={'HH:mm:ss'} placeholder={'00:00:00'} />\n      </Space>\n    </>;\n  }\n}",...null===(_RangeTime$parameters2=RangeTime.parameters)||void 0===_RangeTime$parameters2||null===(_RangeTime$parameters3=_RangeTime$parameters2.docs)||void 0===_RangeTime$parameters3?void 0:_RangeTime$parameters3.source}}};exports.__namedExportsOrder=["RangeTime"]}}]);