"use strict";(self.webpackChunk_kaspersky_hexa_ui=self.webpackChunk_kaspersky_hexa_ui||[]).push([[6569],{"./node_modules/@kaspersky/hexa-ui-icons/esm/32/NotificationBell.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_resolveColorToken_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@kaspersky/hexa-ui-icons/esm/helpers/resolveColorToken.js");const r=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((r,l)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:l,...r},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 2C16.5523 2 17 2.44772 17 3V4.05493C21.5 4.55237 25 8.36745 25 13V24C25.5523 24 26 24.4477 26 25C26 25.5523 25.5523 26 25 26H7C6.44772 26 6 25.5523 6 25C6 24.4477 6.44772 24 7 24V13C7 8.36745 10.5 4.55237 15 4.05493V3C15 2.44772 15.4477 2 16 2ZM23 24V13C23 9.13401 19.866 6 16 6C12.134 6 9 9.13401 9 13V24H23Z",fill:(0,_helpers_resolveColorToken_js__WEBPACK_IMPORTED_MODULE_1__.$)(r.color)||r.color||"currentColor"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.9999 30C14.6937 30 13.5825 29.1652 13.1707 28H18.8292C18.4174 29.1652 17.3062 30 15.9999 30Z",fill:(0,_helpers_resolveColorToken_js__WEBPACK_IMPORTED_MODULE_1__.$)(r.color)||r.color||"currentColor"})))),l=react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((o,l)=>{const{klId:t,testId:a,...d}=o;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(r,{"kl-id":t,"data-testid":a,ref:l,...d})})));l.displayName="NotificationBell"},"./.storybook/components/Meta/withMeta.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>withMeta});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Link=__webpack_require__("./src/link/Link.tsx"),Space=__webpack_require__("./src/space/Space.tsx"),Typography=__webpack_require__("./src/typography/Typography.tsx"),Grid=__webpack_require__("./src/grid/Grid.tsx"),GridItem=__webpack_require__("./src/grid/GridItem.tsx");const metaDod={designTokens:"Design tokens",useThemedHook:"Theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Migration",apiTable:"API",storybook:"Storybook",figmaView:"Figma"};var StatusOkOutline=__webpack_require__("./node_modules/@kaspersky/hexa-ui-icons/esm/24/StatusOkOutline.js"),StatusNoThreadOutline=__webpack_require__("./node_modules/@kaspersky/hexa-ui-icons/esm/24/StatusNoThreadOutline.js"),js=__webpack_require__("./node_modules/@kaspersky/hexa-ui-core/esm/colors/js/index.js");const MetaDod=({list})=>{const metaDodKeys=(0,react.useMemo)((()=>Object.keys(metaDod)),[]);return react.createElement(Grid.x,{layout:{cols:["repeat(2, 240px)"]}},metaDodKeys.map((key=>react.createElement(GridItem.E,{key},react.createElement(Space.$,{size:8},list[key]?react.createElement(StatusOkOutline.A,{color:js.CE.icon.status.statusgrass.light}):react.createElement(StatusNoThreadOutline.A,{color:js.CE.icon.status.statusneutral.light}),react.createElement(Typography.E,null,metaDod[key]))))))};MetaDod.__docgenInfo={description:"",methods:[],displayName:"MetaDod",props:{list:{required:!0,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof metaDod",elements:[{name:"literal",value:"designTokens"},{name:"literal",value:"useThemedHook"},{name:"literal",value:"unitTests"},{name:"literal",value:"screenshotTests"},{name:"literal",value:"migration"},{name:"literal",value:"apiTable"},{name:"literal",value:"storybook"},{name:"literal",value:"figmaView"}]},{name:"boolean"}],raw:"Record<keyof typeof metaDod, boolean>"}],raw:"Partial<Record<keyof typeof metaDod, boolean>>"},description:""}}};const StyledHeading=(0,styled_components_browser_esm.Ay)(Typography.D).withConfig({displayName:"withMeta__StyledHeading",componentId:"sc-1xyrw4j-0"})(["border:none !important;padding:0 !important;margin:0 !important;"]),StyledLink=(0,styled_components_browser_esm.Ay)(Link.N).withConfig({displayName:"withMeta__StyledLink",componentId:"sc-1xyrw4j-1"})(["height:20px !important;> span{font-family:inherit !important;font-size:inherit !important;}"]);function withMeta(list,Component){return props=>react.createElement(Space.$,{gap:32,direction:"vertical",align:"start"},react.createElement(Space.$,{gap:16,direction:"vertical",align:"start"},react.createElement(StyledHeading,{type:"H2"},null==list?void 0:list.component),((null==list?void 0:list.figmaView)||(null==list?void 0:list.designLink))&&react.createElement(Space.$,{gap:16},(null==list?void 0:list.figmaView)&&react.createElement(StyledLink,{href:list.figmaView,target:"_blank",decoration:"icon",size:"medium"},"Документация в Figma"),(null==list?void 0:list.designLink)&&react.createElement(StyledLink,{href:list.designLink,target:"_blank",decoration:"icon",size:"medium"},"Компонент в Figma"))),react.createElement(Space.$,{gap:16,direction:"vertical",align:"start"},react.createElement(Typography.D,{type:"H4"},"Назначение"),react.createElement(Typography.E,null,(null==list?void 0:list.usage)||"-")),react.createElement(Space.$,{gap:16,direction:"vertical",align:"start"},react.createElement(Typography.D,{type:"H4"},"Технические особенности"),react.createElement(Typography.E,null,(null==list?void 0:list.description)||"-")),(null==list?void 0:list.dod)&&react.createElement(MetaDod,{list:list.dod}),Component&&react.createElement(Component,props))}},"./src/grid/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Grid});var useTestAttribute=__webpack_require__("./helpers/hooks/useTestAttribute.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),gridCss=__webpack_require__("./src/grid/gridCss.ts");const layoutBaseCss=(0,styled_components_browser_esm.AH)(["display:grid;gap:",";row-gap:",";column-gap:",";align-items:",";justify-items:",";"],(({gap})=>`${gap}px`),(({rowGap})=>rowGap?`${rowGap}px`:""),(({columnGap})=>columnGap?`${columnGap}px`:""),(({alignItems=""})=>alignItems),(({justifyItems=""})=>justifyItems)),singleRowLayoutCss=(0,styled_components_browser_esm.AH)(["grid-auto-columns:min-content;grid-auto-flow:column;"]),twoColumnsLayoutCss=(0,styled_components_browser_esm.AH)(['grid-template-columns:0.5fr 1fr;grid-template-areas:"left right";']),defaultLayoutCss=(0,styled_components_browser_esm.AH)(["grid-template-columns:repeat(12,1fr);"]),LayoutBase=styled_components_browser_esm.Ay.div.withConfig({shouldForwardProp:prop=>["className","data-testid","kl-id","children","data-component-version"].includes(prop)}).withConfig({displayName:"layouts__LayoutBase",componentId:"sc-x0fr0a-0"})(["",""],layoutBaseCss);(0,styled_components_browser_esm.Ay)(LayoutBase).withConfig({displayName:"layouts__SingleRowLayout",componentId:"sc-x0fr0a-1"})(["",""],singleRowLayoutCss),(0,styled_components_browser_esm.Ay)(LayoutBase).withConfig({displayName:"layouts__TwoColumnsLayout",componentId:"sc-x0fr0a-2"})(["",""],twoColumnsLayoutCss),(0,styled_components_browser_esm.Ay)(LayoutBase).withConfig({displayName:"layouts__DefaultLayout",componentId:"sc-x0fr0a-3"})(["",""],defaultLayoutCss);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledGrid=(0,styled_components_browser_esm.Ay)(LayoutBase).withConfig({displayName:"Grid__StyledGrid",componentId:"sc-287glv-0"})(["",""],gridCss.i),Grid=({layout,children,className,layoutProperty,cols,gridType,withPadding,...rest})=>{var _layoutProperty$gap2;const colsValue=cols?[`repeat(${cols}, 1fr)`]:null==layout?void 0:layout.cols,{testAttributes}=(0,useTestAttribute.a)(rest);if((0,styled_components_browser_esm.p4)(layout)){var _layoutProperty$gap;const GridContainer=layout;return react.createElement(GridContainer,_extends({className,alignItems:null==layoutProperty?void 0:layoutProperty.alignItems,justifyItems:null==layoutProperty?void 0:layoutProperty.justifyItems,gap:null!==(_layoutProperty$gap=null==layoutProperty?void 0:layoutProperty.gap)&&void 0!==_layoutProperty$gap?_layoutProperty$gap:16,rowGap:null==layoutProperty?void 0:layoutProperty.rowGap,cols:null!=colsValue?colsValue:["repeat(12, 1fr)"],columnGap:null==layoutProperty?void 0:layoutProperty.columnGap,gridType,withPadding},testAttributes),children)}return react.createElement(StyledGrid,_extends({className,direction:null==layout?void 0:layout.direction,alignItems:null==layoutProperty?void 0:layoutProperty.alignItems,justifyItems:null==layoutProperty?void 0:layoutProperty.justifyItems,gap:null!==(_layoutProperty$gap2=null==layoutProperty?void 0:layoutProperty.gap)&&void 0!==_layoutProperty$gap2?_layoutProperty$gap2:16,rowGap:null==layoutProperty?void 0:layoutProperty.rowGap,columnGap:null==layoutProperty?void 0:layoutProperty.columnGap,rows:null==layout?void 0:layout.rows,cols:null!=colsValue?colsValue:["repeat(12, 1fr)"],areas:null==layout?void 0:layout.areas,gridType,withPadding},testAttributes),children)};Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{testId:{required:!1,tsType:{name:"string"},description:"Actual identifier for autotesting, whill be passed to HTML attribute data-testid"},klId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, whill be passed to HTML attribute kl-id"},componentId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},dataTestId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},componentType:{required:!1,tsType:{name:"string"},description:""}}}},"./src/grid/GridItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>GridItem});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_gridCss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/grid/gridCss.ts");const GridItem=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div.withConfig({shouldForwardProp:prop=>["className","data-testid","kl-id","children"].includes(prop)}).withConfig({displayName:"GridItem",componentId:"sc-hpc6x5-0"})(["",""],_gridCss__WEBPACK_IMPORTED_MODULE_1__.H)},"./src/grid/gridCss.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>gridItemCss,i:()=>gridCss});var _design_system_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./design-system/theme/themes/variables.ts"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const GRID_PADDING=`0 ${_design_system_theme__WEBPACK_IMPORTED_MODULE_0__.m[12]}px`,gridCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)([""," "," "," "," "," ",""],(({direction})=>direction?`grid-auto-flow: ${direction};`:""),(({cols})=>cols?`grid-template-columns: ${cols.join(" ")};`:""),(({rows})=>rows?`grid-template-rows: ${rows.join(" ")};`:""),(({areas})=>areas?`grid-template-areas: "${areas.map((a=>a.join(" "))).join('" "')}";`:""),(({withPadding})=>withPadding?`padding: ${GRID_PADDING};\n      box-sizing: content-box;`:""),(({gridType})=>{switch(gridType){case"fix":return"width: 872px;";case"sidebar":return"width: 100%;";default:return"max-width: 1592px;\n          min-width: 400px;\n          width: 100%;\n        "}})),gridItemCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)([""," "," ",""],(({areaName})=>areaName?`grid-area: ${areaName};`:""),(({rowSpan})=>rowSpan?`grid-row: span ${rowSpan};`:""),(({span,columnSpan})=>span||columnSpan?`grid-column: span ${span||columnSpan};`:""))},"./src/table/stories/TableHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Header:()=>Header,StickyHeader:()=>StickyHeader,StickyHeaderWithToolbar:()=>StickyHeaderWithToolbar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sb_badges__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/badges.tsx"),_sb_components_Meta__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/components/Meta/withMeta.tsx"),_src_table_meta_meta_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/table/__meta__/meta.json"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_kaspersky_hexa_ui_icons_32__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@kaspersky/hexa-ui-icons/esm/32/NotificationBell.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/table/index.ts"),_commonConstants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/table/stories/_commonConstants.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Hexa UI Components/Table/Header",component:___WEBPACK_IMPORTED_MODULE_1__.X,args:{pagination:{pageSize:200},columns:_commonConstants__WEBPACK_IMPORTED_MODULE_2__.q0,dataSource:_commonConstants__WEBPACK_IMPORTED_MODULE_2__.MF.slice(0,40)},argTypes:{stickyHeader:_commonConstants__WEBPACK_IMPORTED_MODULE_2__.I7},parameters:{badges:[_sb_badges__WEBPACK_IMPORTED_MODULE_3__.j.stable,_sb_badges__WEBPACK_IMPORTED_MODULE_3__.j.needsDesignReview],docs:{page:(0,_sb_components_Meta__WEBPACK_IMPORTED_MODULE_4__.C)(_src_table_meta_meta_json__WEBPACK_IMPORTED_MODULE_5__)},controls:{exclude:["pagination","dataSource","columns"]}}},StyledIconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div.withConfig({displayName:"TableHeaderstories__StyledIconWrapper",componentId:"sc-8b4963-0"})(["background-color:#000;border-radius:50%;width:40px;height:40px;display:flex;justify-content:center;align-items:center;"]),Header={render:_commonConstants__WEBPACK_IMPORTED_MODULE_2__.iU.bind({}),args:{columns:[{key:"name",title:"table.column.name",dataIndex:"name"},{key:"description",title:react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledIconWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_kaspersky_hexa_ui_icons_32__WEBPACK_IMPORTED_MODULE_7__.A,{color:"white"})),dataIndex:"description"}]},argTypes:{columns:(0,_commonConstants__WEBPACK_IMPORTED_MODULE_2__.hz)("You can set custom content in columns")},parameters:{controls:{exclude:["pagination","dataSource","stickyHeader"]}}},StickyHeader={render:_commonConstants__WEBPACK_IMPORTED_MODULE_2__.iU.bind({}),args:{stickyHeader:0}},itemsToolbar=[{type:"button",key:"1",label:"Tool 1",onClick:()=>console.log("Tool 1")},{type:"button",key:"2",label:"Tool 2",onClick:()=>console.log("Tool 2")},{type:"dropdown",key:"4",label:"Tool 4",overlay:[{children:"item 1"},{children:"item 2"}]}],StickyHeaderWithToolbar={render:_commonConstants__WEBPACK_IMPORTED_MODULE_2__.iU.bind({}),args:{stickyHeader:48,toolbar:{sticky:0,left:itemsToolbar}}};Header.parameters={...Header.parameters,docs:{...Header.parameters?.docs,source:{originalSource:"{\n  render: BasicTableStory.bind({}),\n  args: {\n    columns: [{\n      key: 'name',\n      title: 'table.column.name',\n      dataIndex: 'name'\n    }, {\n      key: 'description',\n      title: <StyledIconWrapper><NotificationBell color=\"white\" /></StyledIconWrapper>,\n      dataIndex: 'description'\n    }]\n  },\n  argTypes: {\n    columns: genArgType('You can set custom content in columns')\n  },\n  parameters: {\n    controls: {\n      exclude: ['pagination', 'dataSource', 'stickyHeader']\n    }\n  }\n}",...Header.parameters?.docs?.source}}},StickyHeader.parameters={...StickyHeader.parameters,docs:{...StickyHeader.parameters?.docs,source:{originalSource:"{\n  render: BasicTableStory.bind({}),\n  args: {\n    stickyHeader: 0\n  }\n}",...StickyHeader.parameters?.docs?.source}}},StickyHeaderWithToolbar.parameters={...StickyHeaderWithToolbar.parameters,docs:{...StickyHeaderWithToolbar.parameters?.docs,source:{originalSource:"{\n  render: BasicTableStory.bind({}),\n  args: {\n    stickyHeader: 48,\n    toolbar: {\n      sticky: 0,\n      left: itemsToolbar\n    }\n  }\n}",...StickyHeaderWithToolbar.parameters?.docs?.source}}};const __namedExportsOrder=["Header","StickyHeader","StickyHeaderWithToolbar"]}}]);