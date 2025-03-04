"use strict";(self.webpackChunk_kaspersky_hexa_ui=self.webpackChunk_kaspersky_hexa_ui||[]).push([[6451],{"./src/code-viewer/CodeViewer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>CodeViewer});var useTestAttribute=__webpack_require__("./helpers/hooks/useTestAttribute.ts"),shouldForwardProp=__webpack_require__("./helpers/shouldForwardProp.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),react_resizable=__webpack_require__("./node_modules/react-resizable/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ResizeInput=__webpack_require__("./node_modules/@kaspersky/hexa-ui-icons/esm/12/ResizeInput.js"),variables=__webpack_require__("./design-system/theme/themes/variables.ts"),typography=__webpack_require__("./design-system/tokens/typography.ts"),getFromProps=__webpack_require__("./helpers/getFromProps.ts"),js=__webpack_require__("./node_modules/@kaspersky/hexa-ui-core/esm/typography/js/index.js"),StatusWarningSolid=__webpack_require__("./node_modules/@kaspersky/hexa-ui-icons/esm/24/StatusWarningSolid.js"),StatusDangerSolid1=__webpack_require__("./node_modules/@kaspersky/hexa-ui-icons/esm/24/StatusDangerSolid1.js"),server_browser=__webpack_require__("./node_modules/react-dom/server.browser.js");const reactSvgComponentToMarkupString=(component,props)=>`data:image/svg+xml,${encodeURIComponent((0,server_browser.renderToStaticMarkup)(react.createElement(component,props)))}`,fromProps=(0,getFromProps.P)(),codeViewerCss=(0,styled_components_browser_esm.AH)(["position:relative;width:min-content;.cm-editor{padding:","px ","px;background:",";border:1px solid ",";border-radius:","px;&:hover{border-color:",";}}&& .cm-editor{&.cm-focused{outline:none;box-shadow:",";border-color:",";}","}"," .cm-scroller{.cm-content{.cm-line{padding:0;color:",";&,> span{","}.cm-lintRange{&,> span{","}}}.cm-activeLine{background:",";","}}.cm-gutters{background:",";"," padding-right:","px;border:none;position:relative;.cm-gutterElement{padding:0;color:",";","}.cm-activeLineGutter{background:inherit;color:",";","}.cm-gutter-lint{position:absolute;right:8px;width:","px;.cm-gutterElement{position:relative;.cm-lint-marker{position:absolute;right:0;}.cm-lint-marker-warning{","}.cm-lint-marker-error{","}}}}}.cm-tooltip{border-radius:","px;border:none;.cm-diagnostic{background:",";padding:","px;border-radius:","px;border:none;box-shadow:",";.cm-diagnosticText{"," color:",";}}}"],variables.m[3],variables.m[6],fromProps("enabled.background"),fromProps("enabled.border"),variables.a[4],fromProps("hover.border"),fromProps("focus.boxShadow"),fromProps("enabled.border"),(props=>`border-color: ${fromProps(`${props.validationStatus}.border`)(props)};`),(props=>props.readonly&&`\n    && .cm-editor {\n      &.cm-focused {\n        box-shadow: none;\n        border-color: transparent;\n      }\n\n      border-color: transparent;\n      background: ${fromProps("readonly.background")(props)};\n    }\n  `),fromProps("tagColors.mainTagColor"),(0,typography.ip)(js.sC.MTR3),(0,typography.ip)(js.sC.MTR3),fromProps("activeLine.background"),(props=>props.readonly&&"background: transparent;"),fromProps("enabled.background"),(props=>props.readonly&&`background: ${fromProps("readonly.background")(props)};`),variables.m[14],fromProps("enabled.color"),(0,typography.ip)(js.sC.MTR3),fromProps("activeLine.color"),(props=>props.readonly&&`color: ${fromProps("enabled.color")(props)};`),variables.m[10],(props=>`content: url(${reactSvgComponentToMarkupString(StatusWarningSolid.A,{style:{color:fromProps("warningIconColor")(props)}})});`),(props=>`content: url(${reactSvgComponentToMarkupString(StatusDangerSolid1.A,{style:{color:fromProps("errorIconColor")(props)}})});`),variables.a[4],fromProps("enabled.background"),variables.m[4],variables.a[4],fromProps("tooltipBoxShadow"),(0,typography.ip)(js.sC.MTR3),fromProps("activeLine.color")),CodeWrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"codeViewerCss__CodeWrapper",componentId:"sc-12qcxqy-0"})(["border-radius:","px;width:100%;height:100%;"],variables.a[4]),EditorContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"codeViewerCss__EditorContainer",componentId:"sc-12qcxqy-1"})(["border-radius:","px;width:100%;height:100%;position:relative;> div{width:100%;height:100%;}"],variables.a[4]),Handle=styled_components_browser_esm.Ay.div.withConfig({displayName:"codeViewerCss__Handle",componentId:"sc-12qcxqy-2"})(["position:absolute;right:2px;bottom:2px;display:flex;align-items:center;> svg{color:",";","}",""],fromProps("enabled.icon"),(props=>props.readonly&&`color: ${fromProps("readonly.icon")(props)};`),(props=>{switch(props.resizeAxis){case"x":return{cursor:"ew-resize"};case"y":return{cursor:"ns-resize"};case"none":return{cursor:"default"};default:return{cursor:"nwse-resize"}}}));var constants=__webpack_require__("./src/code-viewer/constants.ts"),dist=__webpack_require__("./node_modules/@codemirror/commands/dist/index.js"),language_dist=__webpack_require__("./node_modules/@codemirror/language/dist/index.js"),lint_dist=__webpack_require__("./node_modules/@codemirror/lint/dist/index.js"),state_dist=__webpack_require__("./node_modules/@codemirror/state/dist/index.js"),view_dist=__webpack_require__("./node_modules/@codemirror/view/dist/index.js"),highlight_dist=__webpack_require__("./node_modules/@lezer/highlight/dist/index.js");const hightlightingStyles_fromProps=(0,getFromProps.P)();function useCodeViewer(props,forwardedRef){const containerRef=(0,react.useRef)(null),editorStateRef=(0,react.useRef)(null),editorViewRef=(0,react.useRef)(null),highlightingExtensionRef=(0,react.useRef)(new state_dist.xx),languageExtensionRef=(0,react.useRef)(new state_dist.xx),readOnlyExtensionRef=(0,react.useRef)(new state_dist.xx),valueChangeListenerExtensionRef=(0,react.useRef)(new state_dist.xx),linesChangeListenerExtensionRef=(0,react.useRef)(new state_dist.xx),hasTextListenerExtensionRef=(0,react.useRef)(new state_dist.xx),focusListenerExtensionRef=(0,react.useRef)(new state_dist.xx),keymapExtensionRef=(0,react.useRef)(new state_dist.xx);(0,react.useEffect)((()=>{if(containerRef.current)return editorStateRef.current=state_dist.$t.create({doc:"",extensions:[languageExtensionRef.current.of([]),readOnlyExtensionRef.current.of([]),valueChangeListenerExtensionRef.current.of([]),highlightingExtensionRef.current.of([]),linesChangeListenerExtensionRef.current.of([]),hasTextListenerExtensionRef.current.of([]),keymapExtensionRef.current.of([]),focusListenerExtensionRef.current.of([]),(0,view_dist.$K)(),(0,view_dist.dz)(),(0,view_dist.Wu)(),...props.linter?[(0,lint_dist.bu)(props.linter)]:[],...props.linter?[(0,lint_dist.pJ)()]:[]]}),editorViewRef.current=new view_dist.Lz({state:editorStateRef.current,parent:containerRef.current}),()=>{var _editorViewRef$curren;null===(_editorViewRef$curren=editorViewRef.current)||void 0===_editorViewRef$curren||_editorViewRef$curren.destroy()}}),[]),(0,react.useEffect)((()=>{if(!editorViewRef.current)return;const readOnlyExtension=state_dist.$t.readOnly.of(!!props.readonly);editorViewRef.current.dispatch({effects:readOnlyExtensionRef.current.reconfigure(readOnlyExtension)})}),[props.readonly]),(0,react.useEffect)((()=>{if(!editorViewRef.current)return;const currentValue=editorViewRef.current.state.doc.toString(),transaction=editorViewRef.current.state.update({changes:{from:0,to:currentValue.length,insert:props.initialValue||""}});editorViewRef.current.dispatch(transaction)}),[props.initialValue]),(0,react.useEffect)((()=>{if(!editorViewRef.current||!props.onChange)return;const valueChangeListenerExtension=view_dist.Lz.updateListener.of((update=>{update.docChanged&&props.onChange&&props.onChange(update.state.doc.toString())})),effects=valueChangeListenerExtensionRef.current.reconfigure(valueChangeListenerExtension);editorViewRef.current.dispatch({effects})}),[props.onChange]),(0,react.useEffect)((()=>{if(!editorViewRef.current)return;const tagsColors=(cssConfig=props.cssConfig,language_dist.cr.define([{tag:[highlight_dist._A.atom,highlight_dist._A.bool,highlight_dist._A.separator],color:hightlightingStyles_fromProps("tagColors.mainTagColor")({cssConfig})},{tag:[highlight_dist._A.name,highlight_dist._A.namespace,highlight_dist._A.deleted,highlight_dist._A.character,highlight_dist._A.propertyName,highlight_dist._A.macroName,highlight_dist._A.keyword],color:hightlightingStyles_fromProps("tagColors.tagColor1")({cssConfig})},{tag:[highlight_dist._A.color,highlight_dist._A.constant(highlight_dist._A.name),highlight_dist._A.standard(highlight_dist._A.name),highlight_dist._A.typeName,highlight_dist._A.className,highlight_dist._A.number,highlight_dist._A.changed,highlight_dist._A.annotation,highlight_dist._A.modifier,highlight_dist._A.self,highlight_dist._A.processingInstruction,highlight_dist._A.string,highlight_dist._A.inserted],color:hightlightingStyles_fromProps("tagColors.tagColor2")({cssConfig})},{tag:[highlight_dist._A.meta,highlight_dist._A.comment,highlight_dist._A.heading,highlight_dist._A.special(highlight_dist._A.variableName),highlight_dist._A.definition(highlight_dist._A.name)],color:hightlightingStyles_fromProps("tagColors.tagColor3")({cssConfig})},{tag:[highlight_dist._A.url,highlight_dist._A.escape,highlight_dist._A.regexp,highlight_dist._A.link,highlight_dist._A.special(highlight_dist._A.string),highlight_dist._A.typeName],color:hightlightingStyles_fromProps("tagColors.tagColor4")({cssConfig})}]));var cssConfig;const effects=highlightingExtensionRef.current.reconfigure((0,language_dist.y9)(tagsColors));effects&&editorViewRef.current.dispatch({effects})}),[props.language,props.cssConfig]),(0,react.useEffect)((()=>{if(!editorViewRef.current)return;const keymapExtension=view_dist.w4.of([...dist.pw,{key:"Tab",preventDefault:!0,run:dist.pr},{key:"Shift-Tab",preventDefault:!0,run:dist.Mg}]);editorViewRef.current.dispatch({effects:keymapExtensionRef.current.reconfigure([keymapExtension])})}),[]),(0,react.useEffect)((()=>{if(!editorViewRef.current)return;const selectedLang=constants.k[props.language]||props.customLanguages&&props.customLanguages[props.language],effects=languageExtensionRef.current.reconfigure(selectedLang);effects&&editorViewRef.current.dispatch({effects})}),[props.language,props.customLanguages]);const[linesNum,setLinesNum]=(0,react.useState)(1);(0,react.useEffect)((()=>{if(!editorViewRef.current)return;setLinesNum(editorViewRef.current.state.doc.lines);const linesChangeListenerExtension=view_dist.Lz.updateListener.of((update=>{update.docChanged&&setLinesNum(update.state.doc.lines)})),effects=linesChangeListenerExtensionRef.current.reconfigure(linesChangeListenerExtension);editorViewRef.current.dispatch({effects})}),[]);const[hasText,setHasText]=(0,react.useState)((props.initialValue||"").trim().length>0);return(0,react.useEffect)((()=>{if(!editorViewRef.current)return;const hasTextListenerExtension=view_dist.Lz.updateListener.of((update=>{if(update.docChanged){const text=update.state.doc.toString().trim();setHasText(text.length>0)}})),effects=hasTextListenerExtensionRef.current.reconfigure(hasTextListenerExtension);editorViewRef.current.dispatch({effects})}),[]),(0,react.useEffect)((()=>{if(!forwardedRef)return;const isOldRef="function"==typeof forwardedRef,isEditorDefined=!!editorStateRef.current&&!!editorViewRef.current;isOldRef&&isEditorDefined&&forwardedRef({editorState:editorStateRef.current,editorView:editorViewRef.current}),isOldRef&&!isEditorDefined&&forwardedRef(null),!isOldRef&&isEditorDefined&&(forwardedRef.current={editorState:editorStateRef.current,editorView:editorViewRef.current}),isOldRef||isEditorDefined||(forwardedRef.current=null)}),[forwardedRef]),{containerRef,linesNum,hasText}}var useThemedComponent=__webpack_require__("./helpers/useThemedComponent.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledCodeViewer=styled_components_browser_esm.Ay.div.withConfig({shouldForwardProp:shouldForwardProp.M}).withConfig({displayName:"CodeViewer__StyledCodeViewer",componentId:"sc-hqykmf-0"})(["",""],codeViewerCss),CodeViewer=rawProps=>{const themedProps=(props=>(0,useThemedComponent.K)(props,{componentName:"codeViewer",defaultValues:{}}))(rawProps),props=(0,useTestAttribute.a)(themedProps);return react.createElement(CodeViewerForwardRef,props)},CodeViewerView=(props,ref)=>{const values=useCodeViewer(props,ref),{resizable,resizeAxis,cssConfig,readonly,validationStatus="default",wrapperClassName,className,width,height,minConstraints,maxConstraints,testAttributes}=props,handle=resizable&&react.createElement(Handle,{cssConfig,readonly,resizeAxis},react.createElement(ResizeInput.A,null));return react.createElement(StyledCodeViewer,_extends({cssConfig,className:classnames_default()("kl6-code-viewer",wrapperClassName),validationStatus,readonly},testAttributes),react.createElement(react_resizable.ResizableBox,{width:width||constants.f.width,height:height||constants.f.height,axis:resizeAxis,minConstraints:minConstraints||constants.f.minConstraints,maxConstraints:maxConstraints||constants.f.maxConstraints,handle},react.createElement(CodeWrapper,{className},react.createElement(EditorContainer,{ref:values.containerRef}))))},CodeViewerForwardRef=(0,react.memo)((0,react.forwardRef)(CodeViewerView));CodeViewer.__docgenInfo={description:"",methods:[],displayName:"CodeViewer",props:{theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Custom theme"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Wrapper class name"},initialValue:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Initial code"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(text: string) => unknown",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"unknown"}}},description:"On change handler"},readonly:{required:!1,tsType:{name:"boolean"},description:"Readonly state"},validationStatus:{required:!1,tsType:{name:"validationStatuses[number]",raw:"typeof validationStatuses[number]"},description:"Validation status"},resizable:{required:!1,tsType:{name:"boolean"},description:"Resizable view"},resizeAxis:{required:!1,tsType:{name:"Axis"},description:"Resize axis"},language:{required:!0,tsType:{name:"T"},description:"Language"},linter:{required:!1,tsType:{name:"signature",type:"function",raw:"(view: EditorView) => readonly Diagnostic[] | Promise<readonly Diagnostic[]>",signature:{arguments:[{type:{name:"EditorView"},name:"view"}],return:{name:"union",raw:"readonly Diagnostic[] | Promise<readonly Diagnostic[]>",elements:[{name:"unknown"},{name:"Promise",elements:[{name:"unknown"}],raw:"Promise<readonly Diagnostic[]>"}]}}},description:"Linter source"},customLanguages:{required:!1,tsType:{name:"T"},description:"Custom languages"},width:{required:!1,tsType:{name:"number"},description:"Width"},height:{required:!1,tsType:{name:"number"},description:"Height"},minConstraints:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"Minimal size constraints"},maxConstraints:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"Maximal size constraints"},testId:{required:!1,tsType:{name:"string"},description:"Actual identifier for autotesting, whill be passed to HTML attribute data-testid"},klId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, whill be passed to HTML attribute kl-id"},componentId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},dataTestId:{required:!1,tsType:{name:"string"},description:"@deprecated Use 'testId' prop instead"},componentType:{required:!1,tsType:{name:"string"},description:""}}}},"./src/code-viewer/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DEFAULT_SIZES,k:()=>DEFAULT_LANGUAGES});var _codemirror_lang_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@codemirror/lang-html/dist/index.js"),_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@codemirror/lang-javascript/dist/index.js"),_codemirror_lang_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@codemirror/lang-json/dist/index.js");const DEFAULT_LANGUAGES={xml:__webpack_require__("./node_modules/@codemirror/lang-xml/dist/index.js").s3,json:_codemirror_lang_json__WEBPACK_IMPORTED_MODULE_1__.jb,html:_codemirror_lang_html__WEBPACK_IMPORTED_MODULE_2__.iH,tsx:_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_3__.g4,jsx:_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_3__.W6,javascript:_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_3__.o$,typescript:_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_3__.sL},DEFAULT_SIZES={width:400,height:200,minConstraints:[300,150],maxConstraints:[1600,1200]}}}]);