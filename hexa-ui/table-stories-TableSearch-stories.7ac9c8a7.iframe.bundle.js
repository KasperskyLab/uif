"use strict";(self.webpackChunk_kaspersky_hexa_ui=self.webpackChunk_kaspersky_hexa_ui||[]).push([[5858],{"./.storybook/components/Meta/withMeta.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>withMeta});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Link=__webpack_require__("./src/link/Link.tsx"),Space=__webpack_require__("./src/space/Space.tsx"),Typography=__webpack_require__("./src/typography/Typography.tsx"),Grid=__webpack_require__("./src/grid/Grid.tsx"),GridItem=__webpack_require__("./src/grid/GridItem.tsx");const metaDod={designTokens:"Design tokens",useThemedHook:"Theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Migration",apiTable:"API",storybook:"Storybook",figmaView:"Figma"};var StatusOkOutline=__webpack_require__("./node_modules/@kaspersky/hexa-ui-icons/esm/24/StatusOkOutline.js"),StatusNoThreadOutline=__webpack_require__("./node_modules/@kaspersky/hexa-ui-icons/esm/24/StatusNoThreadOutline.js"),js=__webpack_require__("./node_modules/@kaspersky/hexa-ui-core/esm/colors/js/index.js");const MetaDod=({list})=>{const metaDodKeys=(0,react.useMemo)((()=>Object.keys(metaDod)),[]);return react.createElement(Grid.x,{layout:{cols:["repeat(2, 240px)"]}},metaDodKeys.map((key=>react.createElement(GridItem.E,{key},react.createElement(Space.$,{size:8},list[key]?react.createElement(StatusOkOutline.A,{color:js.CE.icon.status.statusgrass.light}):react.createElement(StatusNoThreadOutline.A,{color:js.CE.icon.status.statusneutral.light}),react.createElement(Typography.E,null,metaDod[key]))))))};MetaDod.__docgenInfo={description:"",methods:[],displayName:"MetaDod",props:{list:{required:!0,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof metaDod",elements:[{name:"literal",value:"designTokens"},{name:"literal",value:"useThemedHook"},{name:"literal",value:"unitTests"},{name:"literal",value:"screenshotTests"},{name:"literal",value:"migration"},{name:"literal",value:"apiTable"},{name:"literal",value:"storybook"},{name:"literal",value:"figmaView"}]},{name:"boolean"}],raw:"Record<keyof typeof metaDod, boolean>"}],raw:"Partial<Record<keyof typeof metaDod, boolean>>"},description:""}}};const StyledHeading=(0,styled_components_browser_esm.Ay)(Typography.D).withConfig({displayName:"withMeta__StyledHeading",componentId:"sc-1xyrw4j-0"})(["border:none !important;padding:0 !important;margin:0 !important;"]),StyledLink=(0,styled_components_browser_esm.Ay)(Link.N).withConfig({displayName:"withMeta__StyledLink",componentId:"sc-1xyrw4j-1"})(["height:20px !important;> span{font-family:inherit !important;font-size:inherit !important;}"]);function withMeta(list,Component){return props=>react.createElement(Space.$,{gap:32,direction:"vertical",align:"start"},react.createElement(Space.$,{gap:16,direction:"vertical",align:"start"},react.createElement(StyledHeading,{type:"H2"},null==list?void 0:list.component),((null==list?void 0:list.figmaView)||(null==list?void 0:list.designLink))&&react.createElement(Space.$,{gap:16},(null==list?void 0:list.figmaView)&&react.createElement(StyledLink,{href:list.figmaView,target:"_blank",decoration:"icon",size:"medium"},"Документация в Figma"),(null==list?void 0:list.designLink)&&react.createElement(StyledLink,{href:list.designLink,target:"_blank",decoration:"icon",size:"medium"},"Компонент в Figma"))),react.createElement(Space.$,{gap:16,direction:"vertical",align:"start"},react.createElement(Typography.D,{type:"H4"},"Назначение"),react.createElement(Typography.E,null,(null==list?void 0:list.usage)||"-")),react.createElement(Space.$,{gap:16,direction:"vertical",align:"start"},react.createElement(Typography.D,{type:"H4"},"Технические особенности"),react.createElement(Typography.E,null,(null==list?void 0:list.description)||"-")),(null==list?void 0:list.dod)&&react.createElement(MetaDod,{list:list.dod}),Component&&react.createElement(Component,props))}},"./src/grid/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Grid});var useTestAttribute=__webpack_require__("./helpers/hooks/useTestAttribute.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),gridCss=__webpack_require__("./src/grid/gridCss.ts");const layoutBaseCss=(0,styled_components_browser_esm.AH)(["display:grid;gap:",";row-gap:",";column-gap:",";align-items:",";justify-items:",";"],(({gap})=>`${gap}px`),(({rowGap})=>rowGap?`${rowGap}px`:""),(({columnGap})=>columnGap?`${columnGap}px`:""),(({alignItems=""})=>alignItems),(({justifyItems=""})=>justifyItems)),singleRowLayoutCss=(0,styled_components_browser_esm.AH)(["grid-auto-columns:min-content;grid-auto-flow:column;"]),twoColumnsLayoutCss=(0,styled_components_browser_esm.AH)(['grid-template-columns:0.5fr 1fr;grid-template-areas:"left right";']),defaultLayoutCss=(0,styled_components_browser_esm.AH)(["grid-template-columns:repeat(12,1fr);"]),LayoutBase=styled_components_browser_esm.Ay.div.withConfig({shouldForwardProp:prop=>["className","data-testid","kl-id","children","data-component-version"].includes(prop)}).withConfig({displayName:"layouts__LayoutBase",componentId:"sc-x0fr0a-0"})(["",""],layoutBaseCss);(0,styled_components_browser_esm.Ay)(LayoutBase).withConfig({displayName:"layouts__SingleRowLayout",componentId:"sc-x0fr0a-1"})(["",""],singleRowLayoutCss),(0,styled_components_browser_esm.Ay)(LayoutBase).withConfig({displayName:"layouts__TwoColumnsLayout",componentId:"sc-x0fr0a-2"})(["",""],twoColumnsLayoutCss),(0,styled_components_browser_esm.Ay)(LayoutBase).withConfig({displayName:"layouts__DefaultLayout",componentId:"sc-x0fr0a-3"})(["",""],defaultLayoutCss);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledGrid=(0,styled_components_browser_esm.Ay)(LayoutBase).withConfig({displayName:"Grid__StyledGrid",componentId:"sc-287glv-0"})(["",""],gridCss.i),Grid=({layout,children,className,layoutProperty,cols,gridType,withPadding,...rest})=>{var _layoutProperty$gap2;const colsValue=cols?[`repeat(${cols}, 1fr)`]:null==layout?void 0:layout.cols,{testAttributes}=(0,useTestAttribute.a)(rest);if((0,styled_components_browser_esm.p4)(layout)){var _layoutProperty$gap;const GridContainer=layout;return react.createElement(GridContainer,_extends({className,alignItems:null==layoutProperty?void 0:layoutProperty.alignItems,justifyItems:null==layoutProperty?void 0:layoutProperty.justifyItems,gap:null!==(_layoutProperty$gap=null==layoutProperty?void 0:layoutProperty.gap)&&void 0!==_layoutProperty$gap?_layoutProperty$gap:16,rowGap:null==layoutProperty?void 0:layoutProperty.rowGap,cols:null!=colsValue?colsValue:["repeat(12, 1fr)"],columnGap:null==layoutProperty?void 0:layoutProperty.columnGap,gridType,withPadding},testAttributes),children)}return react.createElement(StyledGrid,_extends({className,direction:null==layout?void 0:layout.direction,alignItems:null==layoutProperty?void 0:layoutProperty.alignItems,justifyItems:null==layoutProperty?void 0:layoutProperty.justifyItems,gap:null!==(_layoutProperty$gap2=null==layoutProperty?void 0:layoutProperty.gap)&&void 0!==_layoutProperty$gap2?_layoutProperty$gap2:16,rowGap:null==layoutProperty?void 0:layoutProperty.rowGap,columnGap:null==layoutProperty?void 0:layoutProperty.columnGap,rows:null==layout?void 0:layout.rows,cols:null!=colsValue?colsValue:["repeat(12, 1fr)"],areas:null==layout?void 0:layout.areas,gridType,withPadding},testAttributes),children)};Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{testId:{required:!1,tsType:{name:"string"},description:"Actual identifier for autotesting, whill be passed to HTML attribute data-testid"},klId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, whill be passed to HTML attribute kl-id"},componentId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},dataTestId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},componentType:{required:!1,tsType:{name:"string"},description:""}}}},"./src/grid/GridItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>GridItem});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_gridCss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/grid/gridCss.ts");const GridItem=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div.withConfig({shouldForwardProp:prop=>["className","data-testid","kl-id","children"].includes(prop)}).withConfig({displayName:"GridItem",componentId:"sc-hpc6x5-0"})(["",""],_gridCss__WEBPACK_IMPORTED_MODULE_1__.H)},"./src/grid/gridCss.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>gridItemCss,i:()=>gridCss});var _design_system_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./design-system/theme/themes/variables.ts"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const GRID_PADDING=`0 ${_design_system_theme__WEBPACK_IMPORTED_MODULE_0__.m[12]}px`,gridCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)([""," "," "," "," "," ",""],(({direction})=>direction?`grid-auto-flow: ${direction};`:""),(({cols})=>cols?`grid-template-columns: ${cols.join(" ")};`:""),(({rows})=>rows?`grid-template-rows: ${rows.join(" ")};`:""),(({areas})=>areas?`grid-template-areas: "${areas.map((a=>a.join(" "))).join('" "')}";`:""),(({withPadding})=>withPadding?`padding: ${GRID_PADDING};\n      box-sizing: content-box;`:""),(({gridType})=>{switch(gridType){case"fix":return"width: 872px;";case"sidebar":return"width: 100%;";default:return"max-width: 1592px;\n          min-width: 400px;\n          width: 100%;\n        "}})),gridItemCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)([""," "," ",""],(({areaName})=>areaName?`grid-area: ${areaName};`:""),(({rowSpan})=>rowSpan?`grid-row: span ${rowSpan};`:""),(({span,columnSpan})=>span||columnSpan?`grid-column: span ${span||columnSpan};`:""))},"./src/table/stories/TableSearch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Search:()=>Search,SearchInRender:()=>SearchInRender,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sb_badges__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/badges.tsx"),_sb_components_Meta__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/components/Meta/withMeta.tsx"),_src_link__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/link/Link.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/table/index.ts"),_meta_meta_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/table/__meta__/meta.json"),_commonConstants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/table/stories/_commonConstants.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Hexa UI Components/Table/Search",component:___WEBPACK_IMPORTED_MODULE_1__.X,args:{toolbar:{showSearch:!0},columns:_commonConstants__WEBPACK_IMPORTED_MODULE_2__.q0,dataSource:(0,_commonConstants__WEBPACK_IMPORTED_MODULE_2__.Dn)(_commonConstants__WEBPACK_IMPORTED_MODULE_2__.W4),enableSearchHighlighting:!0},argTypes:{toolbar:(0,_commonConstants__WEBPACK_IMPORTED_MODULE_2__.hz)('You need to set "{ showSearch: true }" to enable the search'),enableSearchHighlighting:_commonConstants__WEBPACK_IMPORTED_MODULE_2__.I7.enableSearchHighlighting},parameters:{badges:[_sb_badges__WEBPACK_IMPORTED_MODULE_3__.j.stable,_sb_badges__WEBPACK_IMPORTED_MODULE_3__.j.needsDesignReview],docs:{page:(0,_sb_components_Meta__WEBPACK_IMPORTED_MODULE_4__.C)(_meta_meta_json__WEBPACK_IMPORTED_MODULE_5__)},controls:{exclude:["dataSource","columns"]}}},Search={render:_commonConstants__WEBPACK_IMPORTED_MODULE_2__.iU.bind({})},SearchInRender={render:_commonConstants__WEBPACK_IMPORTED_MODULE_2__.iU.bind({}),args:{columns:[{..._commonConstants__WEBPACK_IMPORTED_MODULE_2__.q0[0],render:data=>({children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,data," in jsx"),props:{}})},{..._commonConstants__WEBPACK_IMPORTED_MODULE_2__.q0[0],render:data=>({children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{dangerouslySetInnerHTML:{__html:'<a href="">Text in jsx</a>'}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null," ",data)),props:{}})},{..._commonConstants__WEBPACK_IMPORTED_MODULE_2__.q0[1],render:data=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_link__WEBPACK_IMPORTED_MODULE_6__.N,{href:"#"},"Link: ",data)}]},argTypes:{filterItems:_commonConstants__WEBPACK_IMPORTED_MODULE_2__.I7.filterItems}};Search.parameters={...Search.parameters,docs:{...Search.parameters?.docs,source:{originalSource:"{\n  render: BasicTableStory.bind({})\n}",...Search.parameters?.docs?.source}}},SearchInRender.parameters={...SearchInRender.parameters,docs:{...SearchInRender.parameters?.docs,source:{originalSource:'{\n  render: BasicTableStory.bind({}),\n  args: {\n    columns: [{\n      ...basicTwoColumns[0],\n      render: (data: ReactNode) => ({\n        children: <b>{data} in jsx</b>,\n        props: {}\n      })\n    }, {\n      ...basicTwoColumns[0],\n      render: (data: ReactNode) => ({\n        children: <>\n            <span dangerouslySetInnerHTML={{\n            __html: \'<a href="">Text in jsx</a>\'\n          }} />\n            <b> {data}</b>\n          </>,\n        props: {}\n      })\n    }, {\n      ...basicTwoColumns[1],\n      render: (data: ReactNode) => <Link href="#">Link: {data}</Link>\n    }]\n  },\n  argTypes: {\n    filterItems: basicArgTypes.filterItems\n  }\n}',...SearchInRender.parameters?.docs?.source}}};const __namedExportsOrder=["Search","SearchInRender"]}}]);