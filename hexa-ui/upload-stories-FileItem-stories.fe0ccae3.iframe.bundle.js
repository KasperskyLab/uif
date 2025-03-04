"use strict";(self.webpackChunk_kaspersky_hexa_ui=self.webpackChunk_kaspersky_hexa_ui||[]).push([[2706],{"./src/divider/Divider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Divider});var useTestAttribute=__webpack_require__("./helpers/hooks/useTestAttribute.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const fromProps=(0,__webpack_require__("./helpers/getFromProps.ts").P)(),dividerCss=(0,styled_components_browser_esm.AH)(["padding:0;display:flex;background:",";",""],fromProps("color"),(({direction})=>"horizontal"===direction?(0,styled_components_browser_esm.AH)(["margin-top:0;margin-bottom:0;width:100%;height:1px;"]):(0,styled_components_browser_esm.AH)(["margin-left:0;margin-right:0;width:1px;"])));var useThemedComponent=__webpack_require__("./helpers/useThemedComponent.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledDivider=styled_components_browser_esm.Ay.div.withConfig({shouldForwardProp:prop=>!["cssConfig","direction"].includes(prop)}).withConfig({displayName:"Divider__StyledDivider",componentId:"sc-1h4urf-0"})(["",""],dividerCss),Divider=rawProps=>{const themedProps=(props=>(0,useThemedComponent.K)(props,{componentName:"divider",defaultValues:{mode:"normal"}}))(rawProps),props=(0,useTestAttribute.a)(themedProps);return react.createElement(DividerView,props)},DividerView=({testAttributes,cssConfig,direction="horizontal",...rest})=>react.createElement(StyledDivider,_extends({direction,cssConfig},testAttributes,rest));Divider.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Custom theme"},mode:{required:!1,tsType:{name:"union",raw:"'normal' | 'light' | 'bold' | 'onLight' | 'inverted'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'light'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'onLight'"},{name:"literal",value:"'inverted'"}]},description:"Color mode"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Direction"},testId:{required:!1,tsType:{name:"string"},description:"Actual identifier for autotesting, whill be passed to HTML attribute data-testid"},klId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, whill be passed to HTML attribute kl-id"},componentId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},dataTestId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},componentType:{required:!1,tsType:{name:"string"},description:""}}}},"./src/loader/Loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Loader});var useTestAttribute=__webpack_require__("./helpers/hooks/useTestAttribute.ts"),spin=__webpack_require__("./node_modules/antd/es/spin/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const fromProps=(0,__webpack_require__("./helpers/getFromProps.ts").P)(),loaderCss=(0,styled_components_browser_esm.AH)(["&.ant-spinner-centered{position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;}line-height:0;& > svg{height:",";width:",";}.ant-spin-text{color:",";font-family:",";font-weight:",";font-size:",";font-style:",";line-height:",";letter-spacing:",";padding-top:",";}"],fromProps("height"),fromProps("width"),fromProps("textColor"),fromProps("fontFamily"),fromProps("fontWeight"),fromProps("fontSize"),fromProps("fontStyle"),fromProps("lineHeight"),fromProps("letterSpacing"),fromProps("gap")),iconCss=(0,styled_components_browser_esm.AH)(["& path{stroke:","}"],(({color})=>color)),LoaderIcon=({className})=>react.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:classnames_default()(["anticon-spin",className])},react.createElement("path",{d:"M24 45.5C35.8741 45.5 45.5 35.8741 45.5 24C45.5 12.1259 35.8741 2.5 24 2.5C12.1259 2.5 2.5 12.1259 2.5 24",strokeWidth:"5",strokeLinecap:"round"}));LoaderIcon.__docgenInfo={description:"",methods:[],displayName:"LoaderIcon",props:{className:{required:!1,tsType:{name:"string"},description:""}}};var useThemedComponent=__webpack_require__("./helpers/useThemedComponent.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledSpin=(0,styled_components_browser_esm.Ay)(spin.A).withConfig({shouldForwardProp:prop=>!["centered","cssConfig"].includes(prop)}).withConfig({displayName:"Loader__StyledSpin",componentId:"sc-cmtvzq-0"})(["",""],loaderCss),StyledIcon=(0,styled_components_browser_esm.Ay)(LoaderIcon).withConfig({displayName:"Loader__StyledIcon",componentId:"sc-cmtvzq-1"})(["",""],iconCss),Loader=rawProps=>{const themedProps=(props=>(0,useThemedComponent.K)(props,{componentName:"loader",defaultValues:{mode:"default",size:"small"}}))(rawProps),props=(0,useTestAttribute.a)(themedProps);return react.createElement(LoaderView,props)},LoaderView=({spinning=!0,cssConfig,className,centered,testAttributes,...rest})=>react.createElement(StyledSpin,_extends({className:classnames_default()(className,{"ant-spinner-centered":centered}),centered,indicator:react.createElement(StyledIcon,{color:cssConfig.color}),spinning,cssConfig},testAttributes,rest));Loader.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{centered:{required:!1,tsType:{name:"boolean"},description:"Is centered"},delay:{required:!1,tsType:{name:"number"},description:"Specifies a delay in milliseconds for loading state (prevent flush)"},spinning:{required:!1,tsType:{name:"boolean"},description:"Whether Spin is visible"},className:{required:!1,tsType:{name:"string"},description:"Spinner className"},tip:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Customize description content when Spin has children"},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Custom theme"},mode:{required:!1,tsType:{name:"union",raw:"'default' | 'inverted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inverted'"}]},description:"Color mode"},size:{required:!1,tsType:{name:"union",raw:"Size | `${Size}`",elements:[{name:"Size"},{name:"literal",value:"`${Size}`"}]},description:"Size"},testId:{required:!1,tsType:{name:"string"},description:"Actual identifier for autotesting, whill be passed to HTML attribute data-testid"},klId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, whill be passed to HTML attribute kl-id"},componentId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},dataTestId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},componentType:{required:!1,tsType:{name:"string"},description:""}}}},"./src/upload/stories/FileItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FileItemStory:()=>FileItemStory,Status:()=>Status,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sb_components_designControls__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/components/designControls/withDesignControls.tsx"),_sb_StoryComponents__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./.storybook/StoryComponents.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_meta_meta_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/upload/__meta__/meta.json"),_UploadList_FileItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/upload/UploadList/FileItem.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Hexa UI Components/Upload/File Item",component:_UploadList_FileItem__WEBPACK_IMPORTED_MODULE_1__.I,tags:["!autodocs"],...(0,_sb_components_designControls__WEBPACK_IMPORTED_MODULE_2__.r)({componentName:"uploaderFileItem",meta:{argTypes:{error:{control:"text"},status:{control:{type:"radio"},options:["done","uploading","error"]}},args:{error:"Something goes wrong",name:"The quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog.png",size:1e6,status:"done",truncateName:!0},parameters:{actions:{argTypesRegex:"^(on.*)"},design:_meta_meta_json__WEBPACK_IMPORTED_MODULE_3__.figmaView}}})},StyledFileItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay)(_UploadList_FileItem__WEBPACK_IMPORTED_MODULE_1__.I).withConfig({displayName:"FileItemstories__StyledFileItem",componentId:"sc-bunh1u-0"})(["max-width:540px;"]),FileItemStory={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledFileItem,args),name:"File Item"},Status={render:args=>(0,_sb_StoryComponents__WEBPACK_IMPORTED_MODULE_5__.N9)([{label:"default",content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledFileItem,_extends({},args,{status:"done"}))},{label:"uploading",content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledFileItem,_extends({},args,{percent:50,status:"uploading"}))},{label:"error",content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledFileItem,_extends({},args,{status:"error"}))},{label:"disabled",content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledFileItem,_extends({},args,{disabled:!0,status:"done"}))}],!0)};FileItemStory.parameters={...FileItemStory.parameters,docs:{...FileItemStory.parameters?.docs,source:{originalSource:"{\n  render: args => <StyledFileItem {...args} />,\n  name: 'File Item'\n}",...FileItemStory.parameters?.docs?.source}}},Status.parameters={...Status.parameters,docs:{...Status.parameters?.docs,source:{originalSource:"{\n  render: args => renderVariants([{\n    label: 'default',\n    content: <StyledFileItem {...args} status=\"done\" />\n  }, {\n    label: 'uploading',\n    content: <StyledFileItem {...args} percent={50} status=\"uploading\" />\n  }, {\n    label: 'error',\n    content: <StyledFileItem {...args} status=\"error\" />\n  }, {\n    label: 'disabled',\n    content: <StyledFileItem {...args} disabled status=\"done\" />\n  }], true)\n}",...Status.parameters?.docs?.source}}};const __namedExportsOrder=["FileItemStory","Status"]}}]);