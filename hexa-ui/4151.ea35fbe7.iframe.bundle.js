"use strict";(self.webpackChunk_kaspersky_hexa_ui=self.webpackChunk_kaspersky_hexa_ui||[]).push([[4151],{"./.storybook/components/Meta/withMeta.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>withMeta});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Link=__webpack_require__("./src/link/Link.tsx"),Space=__webpack_require__("./src/space/Space.tsx"),Typography=__webpack_require__("./src/typography/Typography.tsx"),Grid=__webpack_require__("./src/grid/Grid.tsx"),GridItem=__webpack_require__("./src/grid/GridItem.tsx");const metaDod={designTokens:"Design tokens",useThemedHook:"Theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Migration",apiTable:"API",storybook:"Storybook",figmaView:"Figma"};var StatusOkOutline=__webpack_require__("./node_modules/@kaspersky/hexa-ui-icons/esm/24/StatusOkOutline.js"),StatusNoThreadOutline=__webpack_require__("./node_modules/@kaspersky/hexa-ui-icons/esm/24/StatusNoThreadOutline.js"),js=__webpack_require__("./node_modules/@kaspersky/hexa-ui-core/esm/colors/js/index.js");const MetaDod=({list})=>{const metaDodKeys=(0,react.useMemo)((()=>Object.keys(metaDod)),[]);return react.createElement(Grid.x,{layout:{cols:["repeat(2, 240px)"]}},metaDodKeys.map((key=>react.createElement(GridItem.E,{key},react.createElement(Space.$,{size:8},list[key]?react.createElement(StatusOkOutline.A,{color:js.CE.icon.status.statusgrass.light}):react.createElement(StatusNoThreadOutline.A,{color:js.CE.icon.status.statusneutral.light}),react.createElement(Typography.E,null,metaDod[key]))))))};MetaDod.__docgenInfo={description:"",methods:[],displayName:"MetaDod",props:{list:{required:!0,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof metaDod",elements:[{name:"literal",value:"designTokens"},{name:"literal",value:"useThemedHook"},{name:"literal",value:"unitTests"},{name:"literal",value:"screenshotTests"},{name:"literal",value:"migration"},{name:"literal",value:"apiTable"},{name:"literal",value:"storybook"},{name:"literal",value:"figmaView"}]},{name:"boolean"}],raw:"Record<keyof typeof metaDod, boolean>"}],raw:"Partial<Record<keyof typeof metaDod, boolean>>"},description:""}}};const StyledHeading=(0,styled_components_browser_esm.Ay)(Typography.D).withConfig({displayName:"withMeta__StyledHeading",componentId:"sc-1xyrw4j-0"})(["border:none !important;padding:0 !important;margin:0 !important;"]),StyledLink=(0,styled_components_browser_esm.Ay)(Link.N).withConfig({displayName:"withMeta__StyledLink",componentId:"sc-1xyrw4j-1"})(["height:20px !important;> span{font-family:inherit !important;font-size:inherit !important;}"]);function withMeta(list,Component){return props=>react.createElement(Space.$,{gap:32,direction:"vertical",align:"start"},react.createElement(Space.$,{gap:16,direction:"vertical",align:"start"},react.createElement(StyledHeading,{type:"H2"},null==list?void 0:list.component),((null==list?void 0:list.figmaView)||(null==list?void 0:list.designLink))&&react.createElement(Space.$,{gap:16},(null==list?void 0:list.figmaView)&&react.createElement(StyledLink,{href:list.figmaView,target:"_blank",decoration:"icon",size:"medium"},"Документация в Figma"),(null==list?void 0:list.designLink)&&react.createElement(StyledLink,{href:list.designLink,target:"_blank",decoration:"icon",size:"medium"},"Компонент в Figma"))),react.createElement(Space.$,{gap:16,direction:"vertical",align:"start"},react.createElement(Typography.D,{type:"H4"},"Назначение"),react.createElement(Typography.E,null,(null==list?void 0:list.usage)||"-")),react.createElement(Space.$,{gap:16,direction:"vertical",align:"start"},react.createElement(Typography.D,{type:"H4"},"Технические особенности"),react.createElement(Typography.E,null,(null==list?void 0:list.description)||"-")),(null==list?void 0:list.dod)&&react.createElement(MetaDod,{list:list.dod}),Component&&react.createElement(Component,props))}},"./src/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var useTestAttribute=__webpack_require__("./helpers/hooks/useTestAttribute.ts"),showDeprecationWarn=__webpack_require__("./helpers/showDeprecationWarn.ts"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),variables=__webpack_require__("./design-system/theme/themes/variables.ts");const fromProps=(0,__webpack_require__("./helpers/getFromProps.ts").P)(),groupCss=(0,styled_components_browser_esm.AH)(["gap:6px;&.ant-btn-group > .ant-btn:first-child:not(:last-child){border-radius:7px 0 0 7px;}&.ant-btn-group > .ant-btn:not(:last-child):not(:first-child){border-radius:0;}&.ant-btn-group > .ant-btn:last-child:not(:first-child){border-radius:0 7px 7px 0;}"]),buttonCss=(0,styled_components_browser_esm.AH)(["&.ant-btn{display:inline-flex;flex-direction:row;justify-content:center;align-items:center;gap:","px;outline:none;height:",";min-width:",";max-width:100%;padding:",";border-radius:",";background-color:",";color:",";border:",";box-shadow:none;.kl-components-button-text{max-width:100%;text-overflow:ellipsis;overflow:hidden;font-family:",";font-size:",";line-height:",";font-weight:",";font-style:",";letter-spacing:",';}&:not([disabled]) > span[role="img"] > svg{color:',";}&:focus-visible{box-shadow:",";}&:hover,&:hover:focus{color:",";background-color:",";}&:active,&:active:focus{background-color:",";border:",";transition-duration:.02s;}&[disabled],&.ant-btn-loading{&,&:hover,&:active,&:focus{background-color:",";color:",";border:",";box-shadow:none;cursor:not-allowed;svg{color:",";}}}&.ant-btn-loading{& > span:not(.ant-btn-loading-icon),& > svg:not(.ant-btn-loading-icon){visibility:",";overflow:hidden;transition:visibility 0.3s;}}.ant-btn-loading-icon{position:absolute;left:50%;top:50%;margin-top:-8px;margin-left:-8px;transition:opacity 0.3s;color:",";svg{width:16px;height:16px;}span{padding-right:0;}}.anticon{line-height:0;}&::before{opacity:0;}&.icon-only{width:",";min-width:",";padding:unset;line-height:unset;}&.ant-dropdown-trigger.ant-dropdown-open{background-color:",";border:",";}}&[ant-click-animating-without-extra-node=true]::after,.ant-click-animating-node{display:none;}"],variables.m[2],fromProps("height"),fromProps("minWidth"),fromProps("padding"),fromProps("borderRadius"),(({isPressed})=>fromProps((isPressed?"active":"enabled")+".background")),fromProps("enabled.color"),fromProps("enabled.border"),fromProps("fontFamily"),fromProps("fontSize"),fromProps("lineHeight"),fromProps("fontWeight"),fromProps("fontStyle"),fromProps("letterSpacing"),fromProps("enabled.color"),fromProps("focus.boxShadow"),fromProps("hover.color"),fromProps("hover.background"),fromProps("active.background"),fromProps("active.border"),fromProps("disabled.background"),fromProps("disabled.color"),fromProps("disabled.border"),fromProps("disabled.color"),(props=>props.loading?"hidden":"visible"),fromProps("disabled.color"),fromProps("height"),fromProps("height"),fromProps("active.background"),fromProps("active.border"));var types=__webpack_require__("./src/button/types.ts"),useComponentCssConfig=__webpack_require__("./design-system/css-configs/helpers/useComponentCssConfig.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledButton=(0,styled_components_browser_esm.Ay)(es_button.A).withConfig({shouldForwardProp:prop=>!["cssConfig","isPressed"].includes(prop)}).withConfig({displayName:"Button__StyledButton",componentId:"sc-5urxsu-0"})(["",""],buttonCss),Button=rawProps=>{const{mode="primary",...notDeprecatedProps}=rawProps;let notDeprecatedMode=mode;types.b.includes(mode)||(notDeprecatedMode="primary",(0,showDeprecationWarn.w)("mode",mode));const themedProps=(props=>(0,useComponentCssConfig.M)(props,{componentName:"button",defaultValues:{mode:"primary",size:"medium"}}))({...notDeprecatedProps,mode:notDeprecatedMode}),props=(0,useTestAttribute.a)(themedProps);return react.createElement(ButtonView,props)},ButtonView=({className,text,children,type,iconBefore,iconAfter,testAttributes,...rest})=>{const child=text||children;return react.createElement(StyledButton,_extends({className:classnames_default()(className,{"icon-only":!child}),htmlType:type},testAttributes,rest,{icon:void 0}),child?[iconBefore,react.createElement("span",{key:"radio",className:"kl-components-button-text"}," ",child," "),iconAfter]:iconBefore||iconAfter)},StyledButtonGroup=(0,styled_components_browser_esm.Ay)(es_button.A.Group).withConfig({shouldForwardProp:prop=>!["cssConfig"].includes(prop)}).withConfig({displayName:"Button__StyledButtonGroup",componentId:"sc-5urxsu-1"})(["",""],groupCss);Button.Group=rawProps=>{const{testAttributes,...rest}=(0,useTestAttribute.a)(rawProps);return react.createElement(StyledButtonGroup,_extends({},testAttributes,rest))},Button.__docgenInfo={description:"",methods:[{name:"Group",docblock:null,modifiers:["static"],params:[{name:"rawProps",optional:!1,type:{name:"intersection",raw:"AntdButtonGroupProps & {\n  /** React children */\n  children?: ReactNode\n} & TestingProps",elements:[{name:"AntdButtonGroupProps"},{name:"signature",type:"object",raw:"{\n  /** React children */\n  children?: ReactNode\n}",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!1},description:"React children"}]}},{name:"signature",type:"object",raw:"{\n  /** Actual identifier for autotesting, whill be passed to HTML attribute data-testid */\n  testId?: string,\n  /** @deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, whill be passed to HTML attribute kl-id */\n  klId?: string,\n  /** @deprecated Use 'testId' prop instead */\n  componentId?: string,\n  /** @deprecated Use 'testId' prop instead */\n  dataTestId?: string,\n  componentType?: string\n}",signature:{properties:[{key:"testId",value:{name:"string",required:!1},description:"Actual identifier for autotesting, whill be passed to HTML attribute data-testid"},{key:"klId",value:{name:"string",required:!1},description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, whill be passed to HTML attribute kl-id"},{key:"componentId",value:{name:"string",required:!1},description:"@deprecated Use 'testId' prop instead"},{key:"dataTestId",value:{name:"string",required:!1},description:"@deprecated Use 'testId' prop instead"},{key:"componentType",value:{name:"string",required:!1}}]}}],alias:"ButtonGroupProps"}}],returns:{type:{name:"JSX.Element"}}}],displayName:"Button",props:{size:{required:!1,tsType:{name:"literal",value:"`${Exclude<Size, Size.ExtraSmall>}`"},description:"Size"},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Custom theme"},mode:{required:!1,tsType:{name:"buttonModes[number]",raw:"typeof buttonModes[number]"},description:"Color mode"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state"},className:{required:!1,tsType:{name:"string"},description:"Css class"},iconBefore:{required:!1,tsType:{name:"ReactNode"},description:"Icon before text"},iconAfter:{required:!1,tsType:{name:"ReactNode"},description:"Icon after text"},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLElement"}],raw:"MouseEventHandler<HTMLElement>"},description:"On click handler"},text:{required:!1,tsType:{name:"string"},description:"Text"},type:{required:!1,tsType:{name:"ButtonHTMLType"},description:"HTML attribute 'type'"},isPressed:{required:!1,tsType:{name:"boolean"},description:"Display in :active state"},children:{required:!1,tsType:{name:"ReactNode"},description:"React children"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},testId:{required:!1,tsType:{name:"string"},description:"Actual identifier for autotesting, whill be passed to HTML attribute data-testid"},klId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, whill be passed to HTML attribute kl-id"},componentId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},dataTestId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},componentType:{required:!1,tsType:{name:"string"},description:""}}}},"./src/button/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>buttonModes});const buttonModes=["primary","secondary","tertiary","dangerFilled","dangerOutlined"]},"./src/grid/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Grid});var useTestAttribute=__webpack_require__("./helpers/hooks/useTestAttribute.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),gridCss=__webpack_require__("./src/grid/gridCss.ts");const layoutBaseCss=(0,styled_components_browser_esm.AH)(["display:grid;gap:",";row-gap:",";column-gap:",";align-items:",";justify-items:",";"],(({gap})=>`${gap}px`),(({rowGap})=>rowGap?`${rowGap}px`:""),(({columnGap})=>columnGap?`${columnGap}px`:""),(({alignItems=""})=>alignItems),(({justifyItems=""})=>justifyItems)),singleRowLayoutCss=(0,styled_components_browser_esm.AH)(["grid-auto-columns:min-content;grid-auto-flow:column;"]),twoColumnsLayoutCss=(0,styled_components_browser_esm.AH)(['grid-template-columns:0.5fr 1fr;grid-template-areas:"left right";']),defaultLayoutCss=(0,styled_components_browser_esm.AH)(["grid-template-columns:repeat(12,1fr);"]),LayoutBase=styled_components_browser_esm.Ay.div.withConfig({shouldForwardProp:prop=>["className","data-testid","kl-id","children","data-component-version"].includes(prop)}).withConfig({displayName:"layouts__LayoutBase",componentId:"sc-x0fr0a-0"})(["",""],layoutBaseCss);(0,styled_components_browser_esm.Ay)(LayoutBase).withConfig({displayName:"layouts__SingleRowLayout",componentId:"sc-x0fr0a-1"})(["",""],singleRowLayoutCss),(0,styled_components_browser_esm.Ay)(LayoutBase).withConfig({displayName:"layouts__TwoColumnsLayout",componentId:"sc-x0fr0a-2"})(["",""],twoColumnsLayoutCss),(0,styled_components_browser_esm.Ay)(LayoutBase).withConfig({displayName:"layouts__DefaultLayout",componentId:"sc-x0fr0a-3"})(["",""],defaultLayoutCss);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledGrid=(0,styled_components_browser_esm.Ay)(LayoutBase).withConfig({displayName:"Grid__StyledGrid",componentId:"sc-287glv-0"})(["",""],gridCss.i),Grid=({layout,children,className,layoutProperty,cols,gridType,withPadding,...rest})=>{var _layoutProperty$gap2;const colsValue=cols?[`repeat(${cols}, 1fr)`]:null==layout?void 0:layout.cols,{testAttributes}=(0,useTestAttribute.a)(rest);if((0,styled_components_browser_esm.p4)(layout)){var _layoutProperty$gap;const GridContainer=layout;return react.createElement(GridContainer,_extends({className,alignItems:null==layoutProperty?void 0:layoutProperty.alignItems,justifyItems:null==layoutProperty?void 0:layoutProperty.justifyItems,gap:null!==(_layoutProperty$gap=null==layoutProperty?void 0:layoutProperty.gap)&&void 0!==_layoutProperty$gap?_layoutProperty$gap:16,rowGap:null==layoutProperty?void 0:layoutProperty.rowGap,cols:null!=colsValue?colsValue:["repeat(12, 1fr)"],columnGap:null==layoutProperty?void 0:layoutProperty.columnGap,gridType,withPadding},testAttributes),children)}return react.createElement(StyledGrid,_extends({className,direction:null==layout?void 0:layout.direction,alignItems:null==layoutProperty?void 0:layoutProperty.alignItems,justifyItems:null==layoutProperty?void 0:layoutProperty.justifyItems,gap:null!==(_layoutProperty$gap2=null==layoutProperty?void 0:layoutProperty.gap)&&void 0!==_layoutProperty$gap2?_layoutProperty$gap2:16,rowGap:null==layoutProperty?void 0:layoutProperty.rowGap,columnGap:null==layoutProperty?void 0:layoutProperty.columnGap,rows:null==layout?void 0:layout.rows,cols:null!=colsValue?colsValue:["repeat(12, 1fr)"],areas:null==layout?void 0:layout.areas,gridType,withPadding},testAttributes),children)};Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{testId:{required:!1,tsType:{name:"string"},description:"Actual identifier for autotesting, whill be passed to HTML attribute data-testid"},klId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, whill be passed to HTML attribute kl-id"},componentId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},dataTestId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},componentType:{required:!1,tsType:{name:"string"},description:""}}}},"./src/grid/GridItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>GridItem});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_gridCss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/grid/gridCss.ts");const GridItem=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div.withConfig({shouldForwardProp:prop=>["className","data-testid","kl-id","children"].includes(prop)}).withConfig({displayName:"GridItem",componentId:"sc-hpc6x5-0"})(["",""],_gridCss__WEBPACK_IMPORTED_MODULE_1__.H)},"./src/grid/gridCss.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>gridItemCss,i:()=>gridCss});var _design_system_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./design-system/theme/themes/variables.ts"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const GRID_PADDING=`0 ${_design_system_theme__WEBPACK_IMPORTED_MODULE_0__.m[12]}px`,gridCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)([""," "," "," "," "," ",""],(({direction})=>direction?`grid-auto-flow: ${direction};`:""),(({cols})=>cols?`grid-template-columns: ${cols.join(" ")};`:""),(({rows})=>rows?`grid-template-rows: ${rows.join(" ")};`:""),(({areas})=>areas?`grid-template-areas: "${areas.map((a=>a.join(" "))).join('" "')}";`:""),(({withPadding})=>withPadding?`padding: ${GRID_PADDING};\n      box-sizing: content-box;`:""),(({gridType})=>{switch(gridType){case"fix":return"width: 872px;";case"sidebar":return"width: 100%;";default:return"max-width: 1592px;\n          min-width: 400px;\n          width: 100%;\n        "}})),gridItemCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)([""," "," ",""],(({areaName})=>areaName?`grid-area: ${areaName};`:""),(({rowSpan})=>rowSpan?`grid-row: span ${rowSpan};`:""),(({span,columnSpan})=>span||columnSpan?`grid-column: span ${span||columnSpan};`:""))},"./src/key-value/KeyValue.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>KeyValue});var variables=__webpack_require__("./design-system/theme/themes/variables.ts"),useTestAttribute=__webpack_require__("./helpers/hooks/useTestAttribute.ts"),Button=__webpack_require__("./src/button/Button.tsx"),FormLabel=__webpack_require__("./src/form-label/FormLabel.tsx"),Textbox=__webpack_require__("./src/input/Textbox.tsx"),react=__webpack_require__("./node_modules/react/index.js"),getFromProps=(__webpack_require__("./src/icon/Icon.tsx"),__webpack_require__("./src/space/Space.tsx"),__webpack_require__("./helpers/getFromProps.ts")),shouldForwardProp=__webpack_require__("./helpers/shouldForwardProp.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const fromProps=(0,getFromProps.P)(),KeyValueWrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"KeyValueCss__KeyValueWrapper",componentId:"sc-5xa3bh-0"})([""," ",""],(({gridLayout})=>{if(gridLayout){let styles="display: grid;";return gridLayout.cols&&(styles+=`grid-template-columns: ${gridLayout.cols.join(" ")};`),gridLayout.rows&&(styles+=`grid-template-rows: ${gridLayout.rows.join(" ")};`),styles}return"display: flex;"}),(({labelPosition})=>{switch(labelPosition){case"right":return{flexDirection:"row-reverse"};case"top":return{flexDirection:"column"};default:return{flexDirection:"row"}}})),KeyValueComponent=styled_components_browser_esm.Ay.div.withConfig({shouldForwardProp:shouldForwardProp.M}).withConfig({displayName:"KeyValueCss__KeyValueComponent",componentId:"sc-5xa3bh-1"})(["display:flex;flex-direction:column;"," ",""],(({padding})=>`\n    gap: ${padding}px;\n  `),(props=>props.gridLayout&&"width: 100%;")),Key=styled_components_browser_esm.Ay.div.withConfig({shouldForwardProp:shouldForwardProp.M}).withConfig({displayName:"KeyValueCss__Key",componentId:"sc-5xa3bh-2"})(["display:flex;align-items:start;color:",";"," "," ",""],fromProps("enabled.keyColor"),(props=>!("top"===props.labelPosition||props.gridLayout)&&"min-width: 235px; max-width: 235px;"),(props=>"right"===props.labelPosition&&`margin-left: ${variables.m[10]}px;`),(props=>`\n    margin-right: ${props.keysMargin}px;\n    margin-top: ${props.verticalOffset}px;\n  `)),Value=styled_components_browser_esm.Ay.div.withConfig({shouldForwardProp:shouldForwardProp.M}).withConfig({displayName:"KeyValueCss__Value",componentId:"sc-5xa3bh-3"})(["display:flex;align-items:start;white-space:pre-wrap;color:",";"],fromProps("enabled.valueColor"));var useThemedComponent=__webpack_require__("./helpers/useThemedComponent.tsx");const useThemedKeyValue=props=>(0,useThemedComponent.K)(props,{componentName:"keyValue",defaultValues:{}});function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const KeyValue=rawProps=>{const themedProps=useThemedKeyValue(rawProps),props=(0,useTestAttribute.a)(themedProps);return react.createElement(KeyValueView,props)},KeyValueView=props=>{const{data,padding=variables.m[8],wrapperClasses={},cssConfig,labelPosition="aside",gridLayout,keysMargin=16,keyRequired=!1,keyMode="secondary",keyTooltip,testAttributes}=props;return react.createElement(KeyValueComponent,_extends({},testAttributes,{padding,gridLayout}),null==data?void 0:data.map(((pair,index)=>{var _pair$key,_pair$key2;const testId=`${null==testAttributes?void 0:testAttributes["kl-id"]}-${null!==(_pair$key=pair.key)&&void 0!==_pair$key?_pair$key:index}`;return react.createElement(KeyValueWrapper,{key:null!==(_pair$key2=pair.key)&&void 0!==_pair$key2?_pair$key2:index,labelPosition,gridLayout},react.createElement(Key,{"kl-id":`kv-key-${testId}`,"data-testid":`kv-key-${testId}`,"data-role":"kv-key",gridLayout:Boolean(gridLayout),className:wrapperClasses.keyClassName,cssConfig,labelPosition,keysMargin,verticalOffset:(node=pair.pairValue,!react.isValidElement(node)||(null==node?void 0:node.type)!==Button.$&&(null==node?void 0:node.type)!==Textbox.R&&(null==node?void 0:node.type)!==Textbox.R.Textarea?0:6)},react.createElement(FormLabel.l,{required:keyRequired,mode:keyMode,tooltip:keyTooltip},pair.pairKey)),react.createElement(Value,{"kl-id":`kv-value-${testId}`,"data-testid":`kv-value-${testId}`,"data-role":"kv-value",className:wrapperClasses.valueClassName,cssConfig},pair.pairValue instanceof String?react.createElement("span",null,pair.pairValue):pair.pairValue));var node})))};KeyValue.__docgenInfo={description:"@deprecated Use FieldSet instead. It has FieldSet.KeyValueMapper for quick replacement",methods:[],displayName:"KeyValue",props:{gridLayout:{required:!1,tsType:{name:"intersection['layout']",raw:"GridProps['layout']"},description:"Set key-value view as grid and apply config from gridLayout"},keyRequired:{required:!1,tsType:{name:"boolean"},description:"Is key label required"},keyTooltip:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Key label tooltip"},keyMode:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'disabled'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'disabled'"}]},description:"Key label mode"},labelPosition:{required:!1,tsType:{name:"union",raw:"'none' | 'top' | 'aside' | 'right'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'top'"},{name:"literal",value:"'aside'"},{name:"literal",value:"'right'"}]},description:"Key label position"},data:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  pairKey: React.ReactNode,\n  pairValue: React.ReactNode,\n  key?: React.Key\n}",signature:{properties:[{key:"pairKey",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"pairValue",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"key",value:{name:"ReactKey",raw:"React.Key",required:!1}}]}}],raw:"KeyValuePair[]"},description:"Key-value pairs (use unique `key` prop in `KeyValuePair` to avoid rerendering of `data` list)"},rowHeight:{required:!1,tsType:{name:"number"},description:"Row height"},padding:{required:!1,tsType:{name:"number"},description:"Padding between key-value pairs"},keysMargin:{required:!1,tsType:{name:"number"},description:"Right margin of key"},wrapperClasses:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  keyClassName?: string,\n  valueClassName?: string\n}",signature:{properties:[{key:"keyClassName",value:{name:"string",required:!1}},{key:"valueClassName",value:{name:"string",required:!1}}]}},description:"Wrapper classes"},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Custom theme"},testId:{required:!1,tsType:{name:"string"},description:"Actual identifier for autotesting, whill be passed to HTML attribute data-testid"},klId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, whill be passed to HTML attribute kl-id"},componentId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},dataTestId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},componentType:{required:!1,tsType:{name:"string"},description:""}}}}}]);