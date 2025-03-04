"use strict";(self.webpackChunk_kaspersky_hexa_ui=self.webpackChunk_kaspersky_hexa_ui||[]).push([[9522],{"./.storybook/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ac:()=>sbSetDefaultValue,Of:()=>sbHideControls,RV:()=>sbMergeActions,zf:()=>sbFixArrayArgs});const sbSetDefaultValue=text=>({table:{defaultValue:{summary:text}}}),sbHideControls=controls=>controls.reduce(((acc,control)=>(acc[control]={control:!1},acc)),{});function sbFixArrayArgs(args,arrayKeys){const out={...args};for(const key of arrayKeys)Array.isArray(out[key])||delete out[key];return out}function sbMergeActions(args,actions){const out={...args};for(const key in actions){const addonAction=out[key],action=actions[key];out[key]=(...args2)=>{null==addonAction||addonAction(...args2),action(...args2)}}return out}},"./helpers/components/AdditionalContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>AdditionalContent});var _src_help_message__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/help-message/HelpMessage.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const StyledAdditionalContent=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div.withConfig({displayName:"AdditionalContent__StyledAdditionalContent",componentId:"sc-15dsamg-0"})(["display:flex;flex-direction:column;gap:8px;margin-top:4px;margin-left:","px;"],(({_margin})=>_margin)),AdditionalContent=({description,dependentElement,_margin=18})=>description||dependentElement?react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledAdditionalContent,{_margin},description&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_help_message__WEBPACK_IMPORTED_MODULE_2__.p,{text:description}),dependentElement):null;AdditionalContent.__docgenInfo={description:"",methods:[],displayName:"AdditionalContent",props:{description:{required:!1,tsType:{name:"string"},description:""},dependentElement:{required:!1,tsType:{name:"ReactNode"},description:""},_margin:{defaultValue:{value:"18",computed:!1},required:!1}}}},"./src/help-message/HelpMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>HelpMessage});var useTestAttribute=__webpack_require__("./helpers/hooks/useTestAttribute.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Text_styled=__webpack_require__("./src/typography/text/Text.styled.tsx");const fromProps=(0,__webpack_require__("./helpers/getFromProps.ts").P)(),helpMessageCss=(0,styled_components_browser_esm.AH)(["color:",""],fromProps("color"));var useThemedComponent=__webpack_require__("./helpers/useThemedComponent.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledHelpMessage=(0,styled_components_browser_esm.Ay)(Text_styled.E).withConfig({shouldForwardProp:prop=>!["cssConfig"].includes(prop)}).attrs({type:"BTR4"}).withConfig({displayName:"HelpMessage__StyledHelpMessage",componentId:"sc-1ij6otj-0"})(["",""],helpMessageCss),HelpMessage=rawProps=>{const themedProps=(props=>(0,useThemedComponent.K)(props,{componentName:"helpMessage",defaultValues:{mode:"common"}}))(rawProps),props=(0,useTestAttribute.a)(themedProps);return react.createElement(HelpMessageView,props)},HelpMessageView=({text,testAttributes,className,...rest})=>react.createElement(StyledHelpMessage,_extends({className:classnames_default()("kl6-help-message",className)},testAttributes,rest),text);HelpMessage.__docgenInfo={description:"",methods:[],displayName:"HelpMessage",props:{text:{required:!1,tsType:{name:"string"},description:"Displayed text (instead of count)"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},mode:{required:!1,tsType:{name:"union",raw:"'error' | 'warning' | 'success' | 'common'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'common'"}]},description:"Color mode"},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Custom theme"},testId:{required:!1,tsType:{name:"string"},description:"Actual identifier for autotesting, whill be passed to HTML attribute data-testid"},klId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, whill be passed to HTML attribute kl-id"},componentId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},dataTestId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},componentType:{required:!1,tsType:{name:"string"},description:""}}}},"./src/radio/Radio.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Radio});var AdditionalContent=__webpack_require__("./helpers/components/AdditionalContent.tsx"),useTestAttribute=__webpack_require__("./helpers/hooks/useTestAttribute.ts"),FormLabel=__webpack_require__("./src/form-label/FormLabel.tsx"),es_radio=__webpack_require__("./node_modules/antd/es/radio/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),radioCss=__webpack_require__("./src/radio/radioCss.ts"),useThemedComponent=__webpack_require__("./helpers/useThemedComponent.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledRadioGroup=(0,styled_components_browser_esm.Ay)(es_radio.Ay.Group).withConfig({shouldForwardProp:prop=>!["cssConfig"].includes(prop)}).withConfig({displayName:"Radio__StyledRadioGroup",componentId:"sc-xri1cq-0"})(["",""],radioCss.Nl),Radio=rawProps=>{try{checkDuplicateOptionValues(rawProps.options)}catch(error){console.error(error)}const props=(props=>(0,useThemedComponent.K)(props,{componentName:"radio",defaultValues:{}}))(rawProps),{testAttributes}=(0,useTestAttribute.a)(props);return react.createElement(RadioView,_extends({role:"radioList",testAttributes},props))},RadioView=({vertical,invalid,disabled,readonly,options,value,className,testId,theme,testAttributes,...rest})=>{const newClassName=(0,react.useMemo)((()=>classnames_default()(className,{"kl-radio-invalid":invalid,"ant-radio-vertical":vertical})),[vertical,invalid,className]),optionsWithIds=react.useMemo((()=>options.map((option=>({...option,_id:(0,v4.A)()})))),[options]);return react.createElement(StyledRadioGroup,_extends({className:newClassName,value,disabled:disabled||readonly},testAttributes,rest),optionsWithIds.map((option=>react.createElement("div",{key:option._id},react.createElement(es_radio.Ay,{id:option._id,value:option.value,"data-testid":`${testId}-${option.value}`,disabled:option.disabled||option.readonly,className:classnames_default()(className,{"kl-radio-readonly":option.readonly&&!disabled||readonly,"radio-string-label":"string"==typeof option.label})},"string"==typeof option.label?react.createElement(FormLabel.l,{testId:`${testId}-${option.value}`,required:option.required,tooltip:option.tooltip,disabled:option.disabled,theme,htmlFor:option._id},option.label):option.label),react.createElement(AdditionalContent.P,{description:option.description,dependentElement:option.dependentElement})))))},checkDuplicateOptionValues=options=>{const values=options.map((option=>option.value)),uniqueValues=new Set(values);if(values.length!==uniqueValues.size)throw new Error("Radio options must have unique values")};Radio.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{vertical:{required:!1,tsType:{name:"boolean"},description:"If orientation is vertical"},disabled:{required:!1,tsType:{name:"boolean"},description:"Is disabled"},readonly:{required:!1,tsType:{name:"boolean"},description:"Is readonly"},invalid:{required:!1,tsType:{name:"boolean"},description:"Is invalid"},role:{required:!1,tsType:{name:"string"},description:"HTML role"},options:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"T & {\n  description?: string,\n  dependentElement?: ReactNode\n}",elements:[{name:"signature",type:"object",raw:"{\n  label: Exclude<ReactNode, null | undefined>,\n  value: string,\n  disabled?: boolean,\n  readonly?: boolean,\n  required?: boolean,\n  tooltip?: ReactNode\n}",signature:{properties:[{key:"label",value:{name:"Exclude",elements:[{name:"ReactNode"},{name:"union",raw:"null | undefined",elements:[{name:"null"},{name:"undefined"}]}],raw:"Exclude<ReactNode, null | undefined>",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"readonly",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}}]}},{name:"signature",type:"object",raw:"{\n  description?: string,\n  dependentElement?: ReactNode\n}",signature:{properties:[{key:"description",value:{name:"string",required:!1}},{key:"dependentElement",value:{name:"ReactNode",required:!1}}]}}]}],raw:"RadioOption[]"},description:"Array of options"},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Custom theme"},testId:{required:!1,tsType:{name:"string"},description:"Actual identifier for autotesting, whill be passed to HTML attribute data-testid"},klId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, whill be passed to HTML attribute kl-id"},componentId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},dataTestId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},componentType:{required:!1,tsType:{name:"string"},description:""}}},RadioView.__docgenInfo={description:"",methods:[],displayName:"RadioView",props:{cssConfig:{required:!0,tsType:{name:"CssConfig"},description:""},testAttributes:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  'data-component-version'?: string,\n  'data-testid'?: string,\n  'kl-id'?: string,\n  'data-component-type'?: string\n}",signature:{properties:[{key:"data-component-version",value:{name:"string",required:!1}},{key:"data-testid",value:{name:"string",required:!1}},{key:"kl-id",value:{name:"string",required:!1}},{key:"data-component-type",value:{name:"string",required:!1}}]}},description:""}}}},"./src/radio/radioCss.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nl:()=>radioCss,_k:()=>getInternalRadioCss});var _helpers_getFromProps__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./helpers/getFromProps.ts"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const fromRadioProps=(0,_helpers_getFromProps__WEBPACK_IMPORTED_MODULE_0__.P)(),getInternalRadioCss=fromProps=>(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)([".ant-radio-wrapper{display:flex;flex-direction:row;align-items:start;padding:0;margin:0;color:",";white-space:unset;& > span + span{padding:0 0 0 4px;}}.ant-radio-inner{width:calc(14px);height:calc(14px);background-color:",";border-color:",";&::after{transform:scale(calc(0.5));width:calc(16px);height:calc(16px);margin-top:calc(-8px);margin-left:calc(-8px);transition:opacity 0.1s ease-in-out !important;left:50%;top:50%;background-color:",";}}.ant-radio-checked .ant-radio-inner::after{background-color:",";}.ant-radio-checked::after{display:none;}.ant-radio-wrapper:hover{.ant-radio-inner{border-color:",";background-color:",";&::after{background-color:",";}}}.ant-radio-wrapper:active,.ant-radio-wrapper:hover:active{.ant-radio-inner{border-color:",";background-color:",";&::after{background-color:",";}}}&& .ant-radio-input:focus + .ant-radio-inner{border-color:",";outline:none;box-shadow:none;}&& .ant-radio-input:focus-visible + .ant-radio-inner{border-color:",";outline:none;box-shadow:",";}.ant-radio-wrapper{&,&:hover,&:active,&:focus{&.ant-radio-wrapper-disabled{span{color:","}.ant-radio-inner{border-color:"," !important;background-color:",";&::after{background-color:",";}}}}}"],fromProps("enabled.color"),fromProps("enabled.background"),fromProps("enabled.border"),fromProps("enabled.dotColor"),fromProps("enabled.dotColor"),fromProps("hover.border"),fromProps("hover.background"),fromProps("hover.dotColor"),fromProps("active.border"),fromProps("active.background"),fromProps("active.dotColor"),fromProps("enabled.border"),fromProps("enabled.border"),fromProps("focus.boxShadow"),fromProps("disabled.color"),fromProps("disabled.border"),fromProps("disabled.background"),fromProps("disabled.dotColor")),radioCss=(fromProps=fromRadioProps,(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(["display:flex;flex-direction:row;gap:12px;.ant-radio{display:flex;top:inherit;height:20px;align-items:center;}&.ant-radio-vertical{flex-direction:column;gap:8px;}.kl-radio-readonly.ant-radio-wrapper{&,&:hover,&:active,&:focus{&.ant-radio-wrapper-disabled{&,*{cursor:default;}span{color:","}.ant-radio-inner{border-color:"," !important;background-color:",";&::after{background-color:",";}}}}}&.kl-radio-invalid .ant-radio-wrapper:not(.ant-radio-wrapper-disabled){&,&:hover,&:active,&:focus{.ant-radio-inner{border-color:",";&::after{background-color:",";}}.ant-radio-inner{background-color:",";}}}",""],fromProps("readonly.color"),fromProps("readonly.border"),fromProps("readonly.background"),fromProps("readonly.dotColor"),fromProps("invalid.border"),fromProps("invalid.dotColor"),fromProps("enabled.background"),getInternalRadioCss(fromRadioProps)));var fromProps},"./src/radio/Radio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,ColorTokens:()=>ColorTokens,Customizing:()=>Customizing,InlineOptions:()=>InlineOptions,WithAsyncSetValue:()=>WithAsyncSetValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Radio_stories});var Palette=__webpack_require__("./design-system/palette/Palette.tsx"),badges=__webpack_require__("./.storybook/badges.tsx"),withMeta=__webpack_require__("./.storybook/components/Meta/withMeta.tsx"),helpers=__webpack_require__("./.storybook/helpers.ts"),Textbox=__webpack_require__("./src/input/Textbox.tsx"),Tag=__webpack_require__("./src/tag/Tag.tsx"),react=__webpack_require__("./node_modules/react/index.js"),js=__webpack_require__("./node_modules/@kaspersky/hexa-ui-core/esm/colors/js/index.js");const meta_namespaceObject=JSON.parse('{"dod":{"designTokens":true,"useThemedHook":true,"unitTests":true,"screenshotTests":false,"migration":true,"apiTable":true,"storybook":true,"designLink":true,"figmaView":true},"component":"Radio","description":"Компонент для отрисовки радиобаттонов. В качестве основы используется AntdRadio из библиотеки Antd.","usage":"Используется для отрисовки радиобаттонов","designLink":"https://www.figma.com/file/9hiN2DbkqbxbhR9EWRI1VK/B2B-Kit?node-id=1%3A1586","figmaView":"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7TGvGlgGfTltMG1OBgLq8p%2F00-%255BB2B%255D-Hexa-UI-Kit%3Ftype%3Ddesign%26node-id%3D32988%253A116564%26mode%3Ddev"}');var Radio=__webpack_require__("./src/radio/Radio.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Radio_stories={title:"Hexa UI Components/Radio",component:Radio.s,argTypes:{...(0,helpers.Of)(["theme","optionType","mode"])},args:{disabled:!1,readonly:!1,vertical:!0,invalid:!1,name:"first",testId:"radio-test-id",klId:"radio-kl-id"},parameters:{badges:[badges.j.stable,badges.j.reviewedByDesign],docs:{page:(0,withMeta.C)(meta_namespaceObject)}}},radioOptions=[{label:"Summary report on workstation protection and Windows Server protection applications installed",value:"1"},{label:"Summary report on mail system protection applications installed",value:"2",description:"Radio option description"},{label:"First",value:"1st"},{label:"Second",value:"2nd"},{label:"Third",value:"3",disabled:!0}],Basic={render:args=>{const[radioState,changeRadioState]=(0,react.useState)();return react.createElement(Radio.s,_extends({},args,{onChange:e=>{changeRadioState(e.target.value)},value:radioState}))},args:{options:radioOptions}},Customizing={render:args=>{const[radioState,changeRadioState]=(0,react.useState)();return react.createElement(Radio.s,_extends({},args,{onChange:e=>{changeRadioState(e.target.value)},value:radioState}))},args:{options:[{label:"Required",value:"1",required:!0},{label:"With tooltip",value:"2",tooltip:"tooltip text"},{label:"Disabled",value:"3",disabled:!0},{label:react.createElement("div",null,react.createElement(Tag.v,null,"Four"),"React Element",react.createElement("br",null),"with multiple lines"),value:"4"},{label:"Readonly",value:"5",readonly:!0},{label:"With additionalElement",value:"4",description:"Some description",dependentElement:react.createElement(Textbox.R,{placeholder:"dependentElement"})}]}},WithAsyncSetValue={render:({value,...rest})=>{const[currentValue,setCurrentValue]=(0,react.useState)();return(0,react.useEffect)((()=>{setTimeout((()=>{setCurrentValue("1")}),3e3)}),[]),react.createElement(Radio.s,_extends({},rest,{onChange:e=>setCurrentValue(e.target.value),value:currentValue}))},args:{options:radioOptions,value:null}},InlineOptions={render:args=>{const[radioState,setRadioState]=(0,react.useState)();return react.createElement(Radio.s,_extends({},args,{onChange:e=>setRadioState(e.target.value),value:radioState}))},args:{options:radioOptions,vertical:!1}},ColorTokens={args:{source:js.Ah.radio},render:args=>react.createElement(Palette.r,args)};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: (args: RadioProps) => {\n    const [radioState, changeRadioState] = useState<string>();\n    return <Radio {...args} onChange={e => {\n      changeRadioState(e.target.value);\n    }} value={radioState} />;\n  },\n  args: {\n    options: radioOptions\n  }\n}",...Basic.parameters?.docs?.source}}},Customizing.parameters={...Customizing.parameters,docs:{...Customizing.parameters?.docs,source:{originalSource:"{\n  render: (args: RadioProps) => {\n    const [radioState, changeRadioState] = useState<string>();\n    return <Radio {...args} onChange={e => {\n      changeRadioState(e.target.value);\n    }} value={radioState} />;\n  },\n  args: {\n    options: radioOptionsCustomizing\n  }\n}",...Customizing.parameters?.docs?.source}}},WithAsyncSetValue.parameters={...WithAsyncSetValue.parameters,docs:{...WithAsyncSetValue.parameters?.docs,source:{originalSource:"{\n  render: ({\n    value,\n    ...rest\n  }: RadioProps) => {\n    const [currentValue, setCurrentValue] = useState<string>();\n    useEffect(() => {\n      setTimeout(() => {\n        setCurrentValue('1');\n      }, 3000);\n    }, []);\n    return <Radio {...rest} onChange={e => setCurrentValue(e.target.value)} value={currentValue} />;\n  },\n  args: {\n    options: radioOptions,\n    value: null\n  }\n}",...WithAsyncSetValue.parameters?.docs?.source}}},InlineOptions.parameters={...InlineOptions.parameters,docs:{...InlineOptions.parameters?.docs,source:{originalSource:"{\n  render: (args: RadioProps) => {\n    const [radioState, setRadioState] = useState<string>();\n    return <Radio {...args} onChange={e => setRadioState(e.target.value)} value={radioState} />;\n  },\n  args: {\n    options: radioOptions,\n    vertical: false\n  }\n}",...InlineOptions.parameters?.docs?.source}}},ColorTokens.parameters={...ColorTokens.parameters,docs:{...ColorTokens.parameters?.docs,source:{originalSource:"{\n  args: {\n    source: componentColors.radio\n  },\n  render: args => <ThemedPalette {...args} />\n}",...ColorTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Customizing","WithAsyncSetValue","InlineOptions","ColorTokens"]}}]);