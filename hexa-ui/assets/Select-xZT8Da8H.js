import{aV as Kn,p as ce,b4 as Bn,bv as Wn,h as De,r as n,s as ot,v as Ge,d as Le,t as fe,ag as Hn,_ as pe,bg as zn,bt as Un,b3 as jn,y as pn,bs as Gn,bc as Xn,x as Yn,H as Be,ai as mn,aE as vn,C as Dt,l as Jn,R as w,Y as Qn,T as Zn,A as gn,ao as eo,al as to,u as Yt,aq as no,S as oo}from"./iframe-DedYZBTA.js";import{T as Jt}from"./TextReducer-DfctGdJH.js";import{u as ao}from"./useGlobalStyles-DdWamh97.js";import{u as ro}from"./FormLabel-a_agw1kt.js";import{T as hn}from"./Tag-BKPu3-sD.js";import{r as lo}from"./index-DlVZRnRV.js";import{u as Nt}from"./useMergedState-Rc5-DXZ5.js";import{K as R}from"./KeyCode-c5NdJp32.js";import{T as io}from"./index-SJNK96pD.js";import{p as $t}from"./pickAttrs-C2PClXaq.js";import{F as uo}from"./isEqual-BEs9Hbuo.js";import{o as co}from"./omit-DXgDXInf.js";import{L as so}from"./List-Dn04FqKX.js";import{E as Qt}from"./type-8et6jEI2.js";import{I as fo}from"./IconSearch-tU4SVZjn.js";import{r as po,u as mo}from"./v4-BoP187Zn.js";import{u as bn}from"./useTranslation-od-Kmf1k.js";import{a as Zt}from"./Checkbox-CNZ65EGY.js";import{L as wn}from"./Loader-C9846UWr.js";import{D as en}from"./Divider-CSCFEdMt.js";let tn,yt,St=0,Ct=0;function pt(e,t,a){let o=0;const r=new Array(16);e=e||{};let l=e.node||tn,u=e.clockseq!==void 0?e.clockseq:yt;if(l==null||u==null){const c=e.random||(e.rng||po)();l==null&&(l=tn=[c[0]|1,c[1],c[2],c[3],c[4],c[5]]),u==null&&(u=yt=(c[6]<<8|c[7])&16383)}let d=e.msecs!==void 0?e.msecs:Date.now(),f=e.nsecs!==void 0?e.nsecs:Ct+1;const b=d-St+(f-Ct)/1e4;if(b<0&&e.clockseq===void 0&&(u=u+1&16383),(b<0||d>St)&&e.nsecs===void 0&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");St=d,Ct=f,yt=u,d+=122192928e5;const p=((d&268435455)*1e4+f)%4294967296;r[o++]=p>>>24&255,r[o++]=p>>>16&255,r[o++]=p>>>8&255,r[o++]=p&255;const s=d/4294967296*1e4&268435455;r[o++]=s>>>8&255,r[o++]=s&255,r[o++]=s>>>24&15|16,r[o++]=s>>>16&255,r[o++]=u>>>8|128,r[o++]=u&255;for(let c=0;c<6;++c)r[o+c]=l[c];return t||mo(r)}var Et,nn;function vo(){if(nn)return Et;nn=1;var e=lo(),t=1/0,a=17976931348623157e292;function o(r){if(!r)return r===0?r:0;if(r=e(r),r===t||r===-t){var l=r<0?-1:1;return l*a}return r===r?r:0}return Et=o,Et}var xt,on;function go(){if(on)return xt;on=1;var e=vo();function t(a){var o=e(a),r=o%1;return o===o?r?o-r:o:0}return xt=t,xt}var It,an;function ho(){if(an)return It;an=1;var e=go(),t="Expected a function";function a(o,r){var l;if(typeof r!="function")throw new TypeError(t);return o=e(o),function(){return--o>0&&(l=r.apply(this,arguments)),o<=1&&(r=void 0),l}}return It=a,It}var Vt,rn;function bo(){if(rn)return Vt;rn=1;var e=ho();function t(a){return e(2,a)}return Vt=t,Vt}var wo=bo();const yo=Kn(wo);function ln(e,t){var a=e.key,o;return"value"in e&&(o=e.value),a??(o!==void 0?o:"rc-index-key-".concat(t))}function yn(e,t){var a=e||{},o=a.label,r=a.value,l=a.options;return{label:o||(t?"children":"label"),value:r||"value",options:l||"options"}}function So(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.fieldNames,o=t.childrenAsData,r=[],l=yn(a,!1),u=l.label,d=l.value,f=l.options;function b(p,s){p.forEach(function(c){var i=c[u];if(s||!(f in c)){var y=c[d];r.push({key:ln(c,r.length),groupOption:s,data:c,label:i,value:y})}else{var k=i;k===void 0&&o&&(k=c.label),r.push({key:ln(c,r.length),group:!0,data:c,label:k}),b(c[f],!0)}})}return b(e,!1),r}function Ot(e){var t=ce({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return Bn(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),t}}),t}function Co(e,t){if(!t||!t.length)return null;var a=!1;function o(l,u){var d=Wn(u),f=d[0],b=d.slice(1);if(!f)return[l];var p=l.split(f);return a=a||p.length>1,p.reduce(function(s,c){return[].concat(De(s),De(o(c,b)))},[]).filter(function(s){return s})}var r=o(e,t);return a?r:null}var Eo=["prefixCls","disabled","visible","children","popupElement","containerWidth","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],xo=function(t){var a=t===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:a,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:a,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:a,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:a,adjustY:1}}}},Io=function(t,a){var o=t.prefixCls;t.disabled;var r=t.visible,l=t.children,u=t.popupElement,d=t.containerWidth,f=t.animation,b=t.transitionName,p=t.dropdownStyle,s=t.dropdownClassName,c=t.direction,i=c===void 0?"ltr":c,y=t.placement,k=t.dropdownMatchSelectWidth,z=t.dropdownRender,M=t.dropdownAlign,I=t.getPopupContainer,_=t.empty,j=t.getTriggerDOMNode,K=t.onPopupVisibleChange,le=t.onPopupMouseEnter,se=ot(t,Eo),L="".concat(o,"-dropdown"),B=u;z&&(B=z(u));var X=n.useMemo(function(){return xo(k)},[k]),G=f?"".concat(L,"-").concat(f):b,Y=n.useRef(null);n.useImperativeHandle(a,function(){return{getPopupElement:function(){return Y.current}}});var $=ce({minWidth:d},p);return typeof k=="number"?$.width=k:k&&($.width=d),n.createElement(io,Ge({},se,{showAction:K?["click"]:[],hideAction:K?["click"]:[],popupPlacement:y||(i==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:X,prefixCls:L,popupTransitionName:G,popup:n.createElement("div",{ref:Y,onMouseEnter:le},B),popupAlign:M,popupVisible:r,getPopupContainer:I,popupClassName:Le(s,fe({},"".concat(L,"-empty"),_)),popupStyle:$,getTriggerDOMNode:j,onPopupVisibleChange:K}),l)},Sn=n.forwardRef(Io);Sn.displayName="SelectTrigger";var mt=function(t){var a=t.className,o=t.customizeIcon,r=t.customizeIconProps,l=t.onMouseDown,u=t.onClick,d=t.children,f;return typeof o=="function"?f=o(r):f=o,n.createElement("span",{className:a,onMouseDown:function(p){p.preventDefault(),l&&l(p)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:u,"aria-hidden":!0},f!==void 0?f:n.createElement("span",{className:Le(a.split(/\s+/).map(function(b){return"".concat(b,"-icon")}))},d))},Vo=function(t,a){var o,r,l=t.prefixCls,u=t.id,d=t.inputElement,f=t.disabled,b=t.tabIndex,p=t.autoFocus,s=t.autoComplete,c=t.editable,i=t.activeDescendantId,y=t.value,k=t.maxLength,z=t.onKeyDown,M=t.onMouseDown,I=t.onChange,_=t.onPaste,j=t.onCompositionStart,K=t.onCompositionEnd,le=t.open,se=t.attrs,L=d||n.createElement("input",null),B=L,X=B.ref,G=B.props,Y=G.onKeyDown,$=G.onChange,te=G.onMouseDown,g=G.onCompositionStart,C=G.onCompositionEnd,q=G.style;return L=n.cloneElement(L,ce(ce(ce({type:"search"},G),{},{id:u,ref:Hn(a,X),disabled:f,tabIndex:b,autoComplete:s||"off",autoFocus:p,className:Le("".concat(l,"-selection-search-input"),(o=L)===null||o===void 0||(r=o.props)===null||r===void 0?void 0:r.className),role:"combobox","aria-expanded":le,"aria-haspopup":"listbox","aria-owns":"".concat(u,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(u,"_list"),"aria-activedescendant":i},se),{},{value:c?y:"",maxLength:k,readOnly:!c,unselectable:c?null:"on",style:ce(ce({},q),{},{opacity:c?null:0}),onKeyDown:function(U){z(U),Y&&Y(U)},onMouseDown:function(U){M(U),te&&te(U)},onChange:function(U){I(U),$&&$(U)},onCompositionStart:function(U){j(U),g&&g(U)},onCompositionEnd:function(U){K(U),C&&C(U)},onPaste:_})),L},qt=n.forwardRef(Vo);qt.displayName="Input";function Cn(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}var Ro=typeof window<"u"&&window.document&&window.document.documentElement,ko=Ro;function Mo(e,t){ko?n.useLayoutEffect(e,t):n.useEffect(e,t)}var un=function(t){t.preventDefault(),t.stopPropagation()},Do=function(t){var a=t.id,o=t.prefixCls,r=t.values,l=t.open,u=t.searchValue,d=t.inputRef,f=t.placeholder,b=t.disabled,p=t.mode,s=t.showSearch,c=t.autoFocus,i=t.autoComplete,y=t.activeDescendantId,k=t.tabIndex,z=t.removeIcon,M=t.maxTagCount,I=t.maxTagTextLength,_=t.maxTagPlaceholder,j=_===void 0?function(O){return"+ ".concat(O.length," ...")}:_,K=t.tagRender,le=t.onToggleOpen,se=t.onRemove,L=t.onInputChange,B=t.onInputPaste,X=t.onInputKeyDown,G=t.onInputMouseDown,Y=t.onInputCompositionStart,$=t.onInputCompositionEnd,te=n.useRef(null),g=n.useState(0),C=pe(g,2),q=C[0],J=C[1],U=n.useState(!1),be=pe(U,2),ge=be[0],Ne=be[1],W="".concat(o,"-selection"),F=l||p==="tags"?u:"",m=p==="tags"||s&&(l||ge);Mo(function(){J(te.current.scrollWidth)},[F]);function D(O,Q,ie,oe,we){return n.createElement("span",{className:Le("".concat(W,"-item"),fe({},"".concat(W,"-item-disabled"),ie)),title:typeof O=="string"||typeof O=="number"?O.toString():void 0},n.createElement("span",{className:"".concat(W,"-item-content")},Q),oe&&n.createElement(mt,{className:"".concat(W,"-item-remove"),onMouseDown:un,onClick:we,customizeIcon:z},"×"))}function H(O,Q,ie,oe,we){var xe=function(ye){un(ye),le(!l)};return n.createElement("span",{onMouseDown:xe},K({label:Q,value:O,disabled:ie,closable:oe,onClose:we}))}function S(O){var Q=O.disabled,ie=O.label,oe=O.value,we=!b&&!Q,xe=ie;if(typeof I=="number"&&(typeof ie=="string"||typeof ie=="number")){var he=String(xe);he.length>I&&(xe="".concat(he.slice(0,I),"..."))}var ye=function(Se){Se&&Se.stopPropagation(),se(O)};return typeof K=="function"?H(oe,xe,Q,we,ye):D(ie,xe,Q,we,ye)}function A(O){var Q=typeof j=="function"?j(O):j;return D(Q,Q,!1)}var ne=n.createElement("div",{className:"".concat(W,"-search"),style:{width:q},onFocus:function(){Ne(!0)},onBlur:function(){Ne(!1)}},n.createElement(qt,{ref:d,open:l,prefixCls:o,id:a,inputElement:null,disabled:b,autoFocus:c,autoComplete:i,editable:m,activeDescendantId:y,value:F,onKeyDown:X,onMouseDown:G,onChange:L,onPaste:B,onCompositionStart:Y,onCompositionEnd:$,tabIndex:k,attrs:$t(t,!0)}),n.createElement("span",{ref:te,className:"".concat(W,"-search-mirror"),"aria-hidden":!0},F," ")),me=n.createElement(uo,{prefixCls:"".concat(W,"-overflow"),data:r,renderItem:S,renderRest:A,suffix:ne,itemKey:"key",maxCount:M});return n.createElement(n.Fragment,null,me,!r.length&&!F&&n.createElement("span",{className:"".concat(W,"-placeholder")},f))},No=function(t){var a=t.inputElement,o=t.prefixCls,r=t.id,l=t.inputRef,u=t.disabled,d=t.autoFocus,f=t.autoComplete,b=t.activeDescendantId,p=t.mode,s=t.open,c=t.values,i=t.placeholder,y=t.tabIndex,k=t.showSearch,z=t.searchValue,M=t.activeValue,I=t.maxLength,_=t.onInputKeyDown,j=t.onInputMouseDown,K=t.onInputChange,le=t.onInputPaste,se=t.onInputCompositionStart,L=t.onInputCompositionEnd,B=n.useState(!1),X=pe(B,2),G=X[0],Y=X[1],$=p==="combobox",te=$||k,g=c[0],C=z||"";$&&M&&!G&&(C=M),n.useEffect(function(){$&&Y(!1)},[$,M]);var q=p!=="combobox"&&!s&&!k?!1:!!C,J=g&&(typeof g.label=="string"||typeof g.label=="number")?g.label.toString():void 0,U=function(){if(g)return null;var ge=q?{visibility:"hidden"}:void 0;return n.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:ge},i)};return n.createElement(n.Fragment,null,n.createElement("span",{className:"".concat(o,"-selection-search")},n.createElement(qt,{ref:l,prefixCls:o,id:r,open:s,inputElement:a,disabled:u,autoFocus:d,autoComplete:f,editable:te,activeDescendantId:b,value:C,onKeyDown:_,onMouseDown:j,onChange:function(ge){Y(!0),K(ge)},onPaste:le,onCompositionStart:se,onCompositionEnd:L,tabIndex:y,attrs:$t(t,!0),maxLength:$?I:void 0})),!$&&g&&!q&&n.createElement("span",{className:"".concat(o,"-selection-item"),title:J},g.label),U())};function En(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,t=n.useRef(null),a=n.useRef(null);n.useEffect(function(){return function(){window.clearTimeout(a.current)}},[]);function o(r){(r||t.current===null)&&(t.current=r),window.clearTimeout(a.current),a.current=window.setTimeout(function(){t.current=null},e)}return[function(){return t.current},o]}function Oo(e){return![R.ESC,R.SHIFT,R.BACKSPACE,R.TAB,R.WIN_KEY,R.ALT,R.META,R.WIN_KEY_RIGHT,R.CTRL,R.SEMICOLON,R.EQUALS,R.CAPS_LOCK,R.CONTEXT_MENU,R.F1,R.F2,R.F3,R.F4,R.F5,R.F6,R.F7,R.F8,R.F9,R.F10,R.F11,R.F12].includes(e)}var To=function(t,a){var o=n.useRef(null),r=n.useRef(!1),l=t.prefixCls,u=t.open,d=t.mode,f=t.showSearch,b=t.tokenWithEnter,p=t.onSearch,s=t.onSearchSubmit,c=t.onToggleOpen,i=t.onInputKeyDown,y=t.domRef;n.useImperativeHandle(a,function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}});var k=En(0),z=pe(k,2),M=z[0],I=z[1],_=function(C){var q=C.which;(q===R.UP||q===R.DOWN)&&C.preventDefault(),i&&i(C),q===R.ENTER&&d==="tags"&&!r.current&&!u&&(s==null||s(C.target.value)),Oo(q)&&c(!0)},j=function(){I(!0)},K=n.useRef(null),le=function(C){p(C,!0,r.current)!==!1&&c(!0)},se=function(){r.current=!0},L=function(C){r.current=!1,d!=="combobox"&&le(C.target.value)},B=function(C){var q=C.target.value;if(b&&K.current&&/[\r\n]/.test(K.current)){var J=K.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");q=q.replace(J,K.current)}K.current=null,le(q)},X=function(C){var q=C.clipboardData,J=q.getData("text");K.current=J},G=function(C){var q=C.target;if(q!==o.current){var J=document.body.style.msTouchAction!==void 0;J?setTimeout(function(){o.current.focus()}):o.current.focus()}},Y=function(C){var q=M();C.target!==o.current&&!q&&C.preventDefault(),(d!=="combobox"&&(!f||!q)||!u)&&(u&&p("",!0,!1),c())},$={inputRef:o,onInputKeyDown:_,onInputMouseDown:j,onInputChange:B,onInputPaste:X,onInputCompositionStart:se,onInputCompositionEnd:L},te=d==="multiple"||d==="tags"?n.createElement(Do,Ge({},t,$)):n.createElement(No,Ge({},t,$));return n.createElement("div",{ref:y,className:"".concat(l,"-selector"),onClick:G,onMouseDown:Y},te)},xn=n.forwardRef(To);xn.displayName="Selector";function Po(e,t,a){var o=n.useRef(null);o.current={open:t,triggerOpen:a},n.useEffect(function(){function r(l){var u=l.target;u.shadowRoot&&l.composed&&(u=l.composedPath()[0]||u),o.current.open&&e().filter(function(d){return d}).every(function(d){return!d.contains(u)&&d!==u})&&o.current.triggerOpen(!1)}return window.addEventListener("mousedown",r),function(){return window.removeEventListener("mousedown",r)}},[])}function _o(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,t=n.useState(!1),a=pe(t,2),o=a[0],r=a[1],l=n.useRef(null),u=function(){window.clearTimeout(l.current)};n.useEffect(function(){return u},[]);var d=function(b,p){u(),l.current=window.setTimeout(function(){r(b),p&&p()},e)};return[o,d,u]}var In=n.createContext(null);function Lo(){return n.useContext(In)}var Fo=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","showArrow","inputIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],$o=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function Tt(e){return e==="tags"||e==="multiple"}var qo=n.forwardRef(function(e,t){var a,o,r=e.id,l=e.prefixCls,u=e.className,d=e.showSearch,f=e.tagRender,b=e.direction,p=e.omitDomProps,s=e.displayValues,c=e.onDisplayValuesChange,i=e.emptyOptions,y=e.notFoundContent,k=y===void 0?"Not Found":y,z=e.onClear,M=e.mode,I=e.disabled,_=e.loading,j=e.getInputElement,K=e.getRawInputElement,le=e.open,se=e.defaultOpen,L=e.onDropdownVisibleChange,B=e.activeValue,X=e.onActiveValueChange,G=e.activeDescendantId,Y=e.searchValue,$=e.onSearch,te=e.onSearchSplit,g=e.tokenSeparators,C=e.allowClear,q=e.showArrow,J=e.inputIcon,U=e.clearIcon,be=e.OptionList,ge=e.animation,Ne=e.transitionName,W=e.dropdownStyle,F=e.dropdownClassName,m=e.dropdownMatchSelectWidth,D=e.dropdownRender,H=e.dropdownAlign,S=e.placement,A=e.getPopupContainer,ne=e.showAction,me=ne===void 0?[]:ne,O=e.onFocus,Q=e.onBlur,ie=e.onKeyUp,oe=e.onKeyDown,we=e.onMouseDown,xe=ot(e,Fo),he=Tt(M),ye=(d!==void 0?d:he)||M==="combobox",ee=ce({},xe);$o.forEach(function(V){delete ee[V]}),p==null||p.forEach(function(V){delete ee[V]});var Se=n.useState(!1),Ce=pe(Se,2),Fe=Ce[0],ke=Ce[1];n.useEffect(function(){ke(zn())},[]);var N=n.useRef(null),ae=n.useRef(null),ue=n.useRef(null),Oe=n.useRef(null),Me=n.useRef(null),Xe=_o(),at=pe(Xe,3),Qe=at[0],rt=at[1],Ze=at[2];n.useImperativeHandle(t,function(){var V,x;return{focus:(V=Oe.current)===null||V===void 0?void 0:V.focus,blur:(x=Oe.current)===null||x===void 0?void 0:x.blur,scrollTo:function(Ve){var de;return(de=Me.current)===null||de===void 0?void 0:de.scrollTo(Ve)}}});var $e=n.useMemo(function(){var V;if(M!=="combobox")return Y;var x=(V=s[0])===null||V===void 0?void 0:V.value;return typeof x=="string"||typeof x=="number"?String(x):""},[Y,M,s]),lt=M==="combobox"&&typeof j=="function"&&j()||null,Ae=typeof K=="function"&&K(),ht=Un(ae,Ae==null||(a=Ae.props)===null||a===void 0?void 0:a.ref),dt=Nt(void 0,{defaultValue:se,value:le}),it=pe(dt,2),Ye=it[0],et=it[1],ve=Ye,ft=!k&&i;(I||ft&&ve&&M==="combobox")&&(ve=!1);var We=ft?!1:ve,Te=n.useCallback(function(V){var x=V!==void 0?V:!ve;ve!==x&&!I&&(et(x),L==null||L(x))},[I,ve,et,L]),E=n.useMemo(function(){return(g||[]).some(function(V){return[`
`,`\r
`].includes(V)})},[g]),h=function(x,Ee,Ve){var de=!0,Re=x;X==null||X(null);var _e=Ve?null:Co(x,g);return M!=="combobox"&&_e&&(Re="",te==null||te(_e),Te(!1),de=!1),$&&$e!==Re&&$(Re,{source:Ee?"typing":"effect"}),de},v=function(x){!x||!x.trim()||$(x,{source:"submit"})};n.useEffect(function(){!ve&&!he&&M!=="combobox"&&h("",!1,!1)},[ve]),n.useEffect(function(){Ye&&I&&et(!1),I&&rt(!1)},[I]);var T=En(),Z=pe(T,2),re=Z[0],He=Z[1],Pe=function(x){var Ee=re(),Ve=x.which;if(Ve===R.ENTER&&(M!=="combobox"&&x.preventDefault(),ve||Te(!0)),He(!!$e),Ve===R.BACKSPACE&&!Ee&&he&&!$e&&s.length){for(var de=De(s),Re=null,_e=de.length-1;_e>=0;_e-=1){var ct=de[_e];if(!ct.disabled){de.splice(_e,1),Re=ct;break}}Re&&c(de,{type:"remove",values:[Re]})}for(var Ue=arguments.length,tt=new Array(Ue>1?Ue-1:0),je=1;je<Ue;je++)tt[je-1]=arguments[je];if(ve&&Me.current){var Xt;(Xt=Me.current).onKeyDown.apply(Xt,[x].concat(tt))}oe==null||oe.apply(void 0,[x].concat(tt))},Ie=function(x){for(var Ee=arguments.length,Ve=new Array(Ee>1?Ee-1:0),de=1;de<Ee;de++)Ve[de-1]=arguments[de];if(ve&&Me.current){var Re;(Re=Me.current).onKeyUp.apply(Re,[x].concat(Ve))}ie==null||ie.apply(void 0,[x].concat(Ve))},ze=function(x){var Ee=s.filter(function(Ve){return Ve!==x});c(Ee,{type:"remove",values:[x]})},ut=n.useRef(!1),bt=function(){rt(!0),I||(O&&!ut.current&&O.apply(void 0,arguments),me.includes("focus")&&Te(!0)),ut.current=!0},Kt=function(){rt(!1,function(){ut.current=!1,Te(!1)}),!I&&($e&&(M==="tags"?$($e,{source:"submit"}):M==="multiple"&&$("",{source:"blur"})),Q&&Q.apply(void 0,arguments))},qe=[];n.useEffect(function(){return function(){qe.forEach(function(V){return clearTimeout(V)}),qe.splice(0,qe.length)}},[]);var Ke=function(x){var Ee,Ve=x.target,de=(Ee=ue.current)===null||Ee===void 0?void 0:Ee.getPopupElement();if(de&&de.contains(Ve)){var Re=setTimeout(function(){var tt=qe.indexOf(Re);if(tt!==-1&&qe.splice(tt,1),Ze(),!Fe&&!de.contains(document.activeElement)){var je;(je=Oe.current)===null||je===void 0||je.focus()}});qe.push(Re)}for(var _e=arguments.length,ct=new Array(_e>1?_e-1:0),Ue=1;Ue<_e;Ue++)ct[Ue-1]=arguments[Ue];we==null||we.apply(void 0,[x].concat(ct))},Nn=n.useState(null),Bt=pe(Nn,2),Wt=Bt[0],On=Bt[1],Tn=n.useState({}),Pn=pe(Tn,2),_n=Pn[1];function Ln(){_n({})}jn(function(){if(We){var V,x=Math.ceil((V=N.current)===null||V===void 0?void 0:V.offsetWidth);Wt!==x&&!Number.isNaN(x)&&On(x)}},[We]);var Ht;Ae&&(Ht=function(x){Te(x)}),Po(function(){var V;return[N.current,(V=ue.current)===null||V===void 0?void 0:V.getPopupElement()]},We,Te);var Fn=n.useMemo(function(){return ce(ce({},e),{},{notFoundContent:k,open:ve,triggerOpen:We,id:r,showSearch:ye,multiple:he,toggleOpen:Te})},[e,k,We,ve,r,ye,he,Te]),zt=q!==void 0?q:_||!he&&M!=="combobox",Ut;zt&&(Ut=n.createElement(mt,{className:Le("".concat(l,"-arrow"),fe({},"".concat(l,"-arrow-loading"),_)),customizeIcon:J,customizeIconProps:{loading:_,searchValue:$e,open:ve,focused:Qe,showSearch:ye}}));var jt,$n=function(){z==null||z(),c([],{type:"clear",values:s}),h("",!1,!1)};!I&&C&&(s.length||$e)&&(jt=n.createElement(mt,{className:"".concat(l,"-clear"),onMouseDown:$n,customizeIcon:U},"×"));var qn=n.createElement(be,{ref:Me}),An=Le(l,u,(o={},fe(o,"".concat(l,"-focused"),Qe),fe(o,"".concat(l,"-multiple"),he),fe(o,"".concat(l,"-single"),!he),fe(o,"".concat(l,"-allow-clear"),C),fe(o,"".concat(l,"-show-arrow"),zt),fe(o,"".concat(l,"-disabled"),I),fe(o,"".concat(l,"-loading"),_),fe(o,"".concat(l,"-open"),ve),fe(o,"".concat(l,"-customize-input"),lt),fe(o,"".concat(l,"-show-search"),ye),o)),Gt=n.createElement(Sn,{ref:ue,disabled:I,prefixCls:l,visible:We,popupElement:qn,containerWidth:Wt,animation:ge,transitionName:Ne,dropdownStyle:W,dropdownClassName:F,direction:b,dropdownMatchSelectWidth:m,dropdownRender:D,dropdownAlign:H,placement:S,getPopupContainer:A,empty:i,getTriggerDOMNode:function(){return ae.current},onPopupVisibleChange:Ht,onPopupMouseEnter:Ln},Ae?n.cloneElement(Ae,{ref:ht}):n.createElement(xn,Ge({},e,{domRef:ae,prefixCls:l,inputElement:lt,ref:Oe,id:r,showSearch:ye,mode:M,activeDescendantId:G,tagRender:f,values:s,open:ve,onToggleOpen:Te,activeValue:B,searchValue:$e,onSearch:h,onSearchSubmit:v,onRemove:ze,tokenWithEnter:E}))),wt;return Ae?wt=Gt:wt=n.createElement("div",Ge({className:An},ee,{ref:N,onMouseDown:Ke,onKeyDown:Pe,onKeyUp:Ie,onFocus:bt,onBlur:Kt}),Qe&&!ve&&n.createElement("span",{style:{width:0,height:0,display:"flex",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(s.map(function(V){var x=V.label,Ee=V.value;return["number","string"].includes(pn(x))?x:Ee}).join(", "))),Gt,Ut,jt),n.createElement(In.Provider,{value:Fn},wt)});function Ao(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var Vn=n.createContext(null),Ko=["disabled","title","children","style","className"];function cn(e){return typeof e=="string"||typeof e=="number"}var Bo=function(t,a){var o=Lo(),r=o.prefixCls,l=o.id,u=o.open,d=o.multiple,f=o.mode,b=o.searchValue,p=o.toggleOpen,s=o.notFoundContent,c=o.onPopupScroll,i=n.useContext(Vn),y=i.flattenOptions,k=i.onActiveValue,z=i.defaultActiveFirstOption,M=i.onSelect,I=i.menuItemSelectedIcon,_=i.rawValues,j=i.fieldNames,K=i.virtual,le=i.listHeight,se=i.listItemHeight,L="".concat(r,"-item"),B=Gn(function(){return y},[u,y],function(F,m){return m[0]&&F[1]!==m[1]}),X=n.useRef(null),G=function(m){m.preventDefault()},Y=function(m){X.current&&X.current.scrollTo(typeof m=="number"?{index:m}:m)},$=function(m){for(var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,H=B.length,S=0;S<H;S+=1){var A=(m+S*D+H)%H,ne=B[A],me=ne.group,O=ne.data;if(!me&&!O.disabled)return A}return-1},te=n.useState(function(){return $(0)}),g=pe(te,2),C=g[0],q=g[1],J=function(m){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;q(m);var H={source:D?"keyboard":"mouse"},S=B[m];if(!S){k(null,-1,H);return}k(S.value,m,H)};n.useEffect(function(){J(z!==!1?$(0):-1)},[B.length,b]);var U=n.useCallback(function(F){return _.has(F)&&f!=="combobox"},[f,De(_).toString()]);n.useEffect(function(){var F=setTimeout(function(){if(!d&&u&&_.size===1){var D=Array.from(_)[0],H=B.findIndex(function(S){var A=S.data;return A.value===D});H!==-1&&(J(H),Y(H))}});if(u){var m;(m=X.current)===null||m===void 0||m.scrollTo(void 0)}return function(){return clearTimeout(F)}},[u,b]);var be=function(m){m!==void 0&&M(m,{selected:!_.has(m)}),d||p(!1)};if(n.useImperativeHandle(a,function(){return{onKeyDown:function(m){var D=m.which,H=m.ctrlKey;switch(D){case R.N:case R.P:case R.UP:case R.DOWN:{var S=0;if(D===R.UP?S=-1:D===R.DOWN?S=1:Ao()&&H&&(D===R.N?S=1:D===R.P&&(S=-1)),S!==0){var A=$(C+S,S);Y(A),J(A,!0)}break}case R.ENTER:{var ne=B[C];ne&&!ne.data.disabled?be(ne.value):be(void 0),u&&m.preventDefault();break}case R.ESC:p(!1),u&&m.stopPropagation()}},onKeyUp:function(){},scrollTo:function(m){Y(m)}}}),B.length===0)return n.createElement("div",{role:"listbox",id:"".concat(l,"_list"),className:"".concat(L,"-empty"),onMouseDown:G},s);var ge=Object.keys(j).map(function(F){return j[F]}),Ne=function(m){return m.label},W=function(m){var D=B[m];if(!D)return null;var H=D.data||{},S=H.value,A=D.group,ne=$t(H,!0),me=Ne(D);return D?n.createElement("div",Ge({"aria-label":typeof me=="string"&&!A?me:null},ne,{key:m,role:A?"presentation":"option",id:"".concat(l,"_list_").concat(m),"aria-selected":U(S)}),S):null};return n.createElement(n.Fragment,null,n.createElement("div",{role:"listbox",id:"".concat(l,"_list"),style:{height:0,width:0,overflow:"hidden"}},W(C-1),W(C),W(C+1)),n.createElement(so,{itemKey:"key",ref:X,data:B,height:le,itemHeight:se,fullHeight:!1,onMouseDown:G,onScroll:c,virtual:K},function(F,m){var D,H=F.group,S=F.groupOption,A=F.data,ne=F.label,me=F.value,O=A.key;if(H){var Q,ie=(Q=A.title)!==null&&Q!==void 0?Q:cn(ne)&&ne;return n.createElement("div",{className:Le(L,"".concat(L,"-group")),title:ie},ne!==void 0?ne:O)}var oe=A.disabled,we=A.title;A.children;var xe=A.style,he=A.className,ye=ot(A,Ko),ee=co(ye,ge),Se=U(me),Ce="".concat(L,"-option"),Fe=Le(L,Ce,he,(D={},fe(D,"".concat(Ce,"-grouped"),S),fe(D,"".concat(Ce,"-active"),C===m&&!oe),fe(D,"".concat(Ce,"-disabled"),oe),fe(D,"".concat(Ce,"-selected"),Se),D)),ke=Ne(F),N=!I||typeof I=="function"||Se,ae=typeof ke=="number"?ke:ke||me,ue=cn(ae)?ae.toString():void 0;return we!==void 0&&(ue=we),n.createElement("div",Ge({},ee,{"aria-selected":Se,className:Fe,title:ue,onMouseMove:function(){C===m||oe||J(m)},onClick:function(){oe||be(me)},style:xe}),n.createElement("div",{className:"".concat(Ce,"-content")},ae),n.isValidElement(I)||Se,N&&n.createElement(mt,{className:"".concat(L,"-option-state"),customizeIcon:I,customizeIconProps:{isSelected:Se}},Se?"✓":null))}))},Rn=n.forwardRef(Bo);Rn.displayName="OptionList";var st=function(){return null};st.isSelectOption=!0;var gt=function(){return null};gt.isSelectOptGroup=!0;var Wo=["children","value"],Ho=["children"];function zo(e){var t=e.key,a=e.props,o=a.children,r=a.value,l=ot(a,Wo);return ce({key:t,value:r!==void 0?r:t,children:o},l)}function kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Xn(e).map(function(a,o){if(!n.isValidElement(a)||!a.type)return null;var r=a.type.isSelectOptGroup,l=a.key,u=a.props,d=u.children,f=ot(u,Ho);return t||!r?zo(a):ce(ce({key:"__RC_SELECT_GRP__".concat(l===null?o:l,"__"),label:l},f),{},{options:kn(d)})}).filter(function(a){return a})}function Uo(e,t,a,o,r){return n.useMemo(function(){var l=e,u=!e;u&&(l=kn(t));var d=new Map,f=new Map,b=function(c,i,y){y&&typeof y=="string"&&c.set(i[y],i)};function p(s){for(var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=0;i<s.length;i+=1){var y=s[i];!y[a.options]||c?(d.set(y[a.value],y),b(f,y,a.label),b(f,y,o),b(f,y,r)):p(y[a.options],!0)}}return p(l),{options:l,valueOptions:d,labelOptions:f}},[e,t,a,o,r])}var sn=0,jo=Yn();function Go(){var e;return jo?(e=sn,sn+=1):e="TEST_OR_SSR",e}function Xo(e){var t=n.useState(),a=pe(t,2),o=a[0],r=a[1];return n.useEffect(function(){r("rc_select_".concat(Go()))},[]),e||o}function dn(e){var t=n.useRef();t.current=e;var a=n.useCallback(function(){return t.current.apply(t,arguments)},[]);return a}function Rt(e,t){return Cn(e).join("").toUpperCase().includes(t)}const Yo=function(e,t,a,o,r){return n.useMemo(function(){if(!a||o===!1)return e;var l=t.options,u=t.label,d=t.value,f=[],b=typeof o=="function",p=a.toUpperCase(),s=b?o:function(i,y){return r?Rt(y[r],p):y[l]?Rt(y[u!=="children"?u:"label"],p):Rt(y[d],p)},c=b?function(i){return Ot(i)}:function(i){return i};return e.forEach(function(i){if(i[l]){var y=s(a,c(i));if(y)f.push(i);else{var k=i[l].filter(function(z){return s(a,c(z))});k.length&&f.push(ce(ce({},i),{},fe({},l,k)))}return}s(a,c(i))&&f.push(i)}),f},[e,o,r,a,t])},Jo=function(e,t){var a=n.useRef({values:new Map,options:new Map}),o=n.useMemo(function(){var l=a.current,u=l.values,d=l.options,f=e.map(function(s){if(s.label===void 0){var c;return ce(ce({},s),{},{label:(c=u.get(s.value))===null||c===void 0?void 0:c.label})}return s}),b=new Map,p=new Map;return f.forEach(function(s){b.set(s.value,s),p.set(s.value,t.get(s.value)||d.get(s.value))}),a.current.values=b,a.current.options=p,f},[e,t]),r=n.useCallback(function(l){return t.get(l)||a.current.options.get(l)},[t]);return[o,r]};var Qo=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],Zo=["inputValue"];function ea(e){return!e||pn(e)!=="object"}var ta=n.forwardRef(function(e,t){var a=e.id,o=e.mode,r=e.prefixCls,l=r===void 0?"rc-select":r,u=e.backfill,d=e.fieldNames,f=e.inputValue,b=e.searchValue,p=e.onSearch,s=e.autoClearSearchValue,c=s===void 0?!0:s,i=e.onSelect,y=e.onDeselect,k=e.dropdownMatchSelectWidth,z=k===void 0?!0:k,M=e.filterOption,I=e.filterSort,_=e.optionFilterProp,j=e.optionLabelProp,K=e.options,le=e.children,se=e.defaultActiveFirstOption,L=e.menuItemSelectedIcon,B=e.virtual,X=e.listHeight,G=X===void 0?200:X,Y=e.listItemHeight,$=Y===void 0?20:Y,te=e.value,g=e.defaultValue,C=e.labelInValue,q=e.onChange,J=ot(e,Qo),U=Xo(a),be=Tt(o),ge=!!(!K&&le),Ne=n.useMemo(function(){return M===void 0&&o==="combobox"?!1:M},[M,o]),W=n.useMemo(function(){return yn(d,ge)},[JSON.stringify(d),ge]),F=Nt("",{value:b!==void 0?b:f,postState:function(h){return h||""}}),m=pe(F,2),D=m[0],H=m[1],S=Uo(K,le,W,_,j),A=S.valueOptions,ne=S.labelOptions,me=S.options,O=n.useCallback(function(E){var h=Cn(E);return h.map(function(v){var T,Z,re,He;if(ea(v))T=v;else{var Pe;re=v.key,Z=v.label,T=(Pe=v.value)!==null&&Pe!==void 0?Pe:re}var Ie=A.get(T);if(Ie){var ze;Z===void 0&&(Z=Ie==null?void 0:Ie[j||W.label]),re===void 0&&(re=(ze=Ie==null?void 0:Ie.key)!==null&&ze!==void 0?ze:T),He=Ie==null?void 0:Ie.disabled}return{label:Z,value:T,key:re,disabled:He}})},[W,j,A]),Q=Nt(g,{value:te}),ie=pe(Q,2),oe=ie[0],we=ie[1],xe=n.useMemo(function(){var E,h=O(oe);return o==="combobox"&&!(!((E=h[0])===null||E===void 0)&&E.value)?[]:h},[oe,O,o]),he=Jo(xe,A),ye=pe(he,2),ee=ye[0],Se=ye[1],Ce=n.useMemo(function(){if(!o&&ee.length===1){var E=ee[0];if(E.value===null&&(E.label===null||E.label===void 0))return[]}return ee.map(function(h){var v;return ce(ce({},h),{},{label:(v=h.label)!==null&&v!==void 0?v:h.value})})},[o,ee]),Fe=n.useMemo(function(){return new Set(ee.map(function(E){return E.value}))},[ee]);n.useEffect(function(){if(o==="combobox"){var E,h=(E=ee[0])===null||E===void 0?void 0:E.value;h!=null&&H(String(h))}},[ee]);var ke=dn(function(E,h){var v,T=h??E;return v={},fe(v,W.value,E),fe(v,W.label,T),v}),N=n.useMemo(function(){if(o!=="tags")return me;var E=De(me),h=function(T){return A.has(T)};return De(ee).sort(function(v,T){return v.value<T.value?-1:1}).forEach(function(v){var T=v.value;h(T)||E.push(ke(T,v.label))}),E},[ke,me,A,ee,o]),ae=Yo(N,W,D,Ne,_),ue=n.useMemo(function(){return o!=="tags"||!D||ae.some(function(E){return E[_||"value"]===D})?ae:[ke(D)].concat(De(ae))},[ke,_,o,ae,D]),Oe=n.useMemo(function(){return I?De(ue).sort(function(E,h){return I(E,h)}):ue},[ue,I]),Me=n.useMemo(function(){return So(Oe,{fieldNames:W,childrenAsData:ge})},[Oe,W,ge]),Xe=function(h){var v=O(h);if(we(v),q&&(v.length!==ee.length||v.some(function(re,He){var Pe;return((Pe=ee[He])===null||Pe===void 0?void 0:Pe.value)!==(re==null?void 0:re.value)}))){var T=C?v:v.map(function(re){return re.value}),Z=v.map(function(re){return Ot(Se(re.value))});q(be?T:T[0],be?Z:Z[0])}},at=n.useState(null),Qe=pe(at,2),rt=Qe[0],Ze=Qe[1],$e=n.useState(0),lt=pe($e,2),Ae=lt[0],ht=lt[1],dt=se!==void 0?se:o!=="combobox",it=n.useCallback(function(E,h){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},T=v.source,Z=T===void 0?"keyboard":T;ht(h),u&&o==="combobox"&&E!==null&&Z==="keyboard"&&Ze(String(E))},[u,o]),Ye=function(h,v){var T=function(){var qe,Ke=Se(h);return[C?{label:Ke==null?void 0:Ke[W.label],value:h,key:(qe=Ke==null?void 0:Ke.key)!==null&&qe!==void 0?qe:h}:h,Ot(Ke)]};if(v&&i){var Z=T(),re=pe(Z,2),He=re[0],Pe=re[1];i(He,Pe)}else if(!v&&y){var Ie=T(),ze=pe(Ie,2),ut=ze[0],bt=ze[1];y(ut,bt)}},et=dn(function(E,h){var v,T=be?h.selected:!0;T?v=be?[].concat(De(ee),[E]):[E]:v=ee.filter(function(Z){return Z.value!==E}),Xe(v),Ye(E,T),o==="combobox"?Ze(""):(!Tt||c)&&(H(""),Ze(""))}),ve=function(h,v){Xe(h),(v.type==="remove"||v.type==="clear")&&v.values.forEach(function(T){Ye(T.value,!1)})},ft=function(h,v){if(H(h),Ze(null),v.source==="submit"){var T=(h||"").trim();if(T){var Z=Array.from(new Set([].concat(De(Fe),[T])));Xe(Z),Ye(T,!0),H("")}return}v.source!=="blur"&&(o==="combobox"&&Xe(h),p==null||p(h))},We=function(h){var v=h;o!=="tags"&&(v=h.map(function(Z){var re=ne.get(Z);return re==null?void 0:re.value}).filter(function(Z){return Z!==void 0}));var T=Array.from(new Set([].concat(De(Fe),De(v))));Xe(T),T.forEach(function(Z){Ye(Z,!0)})},Te=n.useMemo(function(){var E=B!==!1&&z!==!1;return ce(ce({},S),{},{flattenOptions:Me,onActiveValue:it,defaultActiveFirstOption:dt,onSelect:et,menuItemSelectedIcon:L,rawValues:Fe,fieldNames:W,virtual:E,listHeight:G,listItemHeight:$,childrenAsData:ge})},[S,Me,it,dt,et,L,Fe,W,B,z,G,$,ge]);return n.createElement(Vn.Provider,{value:Te},n.createElement(qo,Ge({},J,{id:U,prefixCls:l,ref:t,omitDomProps:Zo,mode:o,displayValues:Ce,onDisplayValuesChange:ve,searchValue:D,onSearch:ft,onSearchSplit:We,dropdownMatchSelectWidth:z,OptionList:Rn,emptyOptions:!Me.length,activeValue:rt,activeDescendantId:"".concat(U,"_list_").concat(Ae)})))}),At=ta;At.Option=st;At.OptGroup=gt;const P=Jn(),Je=mn(vn.BTR3);function kt(e){return e.replace(/"/g,'\\"').replace(/\n/g,"\\A")}const na=Be.div`
  width: 100%;
`,oa=Be.div`
  width: 100%;
`,aa=Dt`
  width: 100%;

  .ant-select-selector {
    font-family: ${Je.fontFamily};
    font-size: ${Je.fontSize};
    line-height: ${Je.lineHeight};
    font-weight: ${Je.fontWeight};
    font-style: ${Je.fontStyle};
    letter-spacing: ${Je.letterSpacing};

    .ant-select-selection-overflow {
      padding: 3px 0;

      .ant-select-selection-overflow-item {
        display: flex;
        align-items: center;
        min-height: 24px;
    
        &.ant-select-selection-overflow-item-suffix {
          bottom: 0;
          top: 0;
        }
        &:not(.ant-select-selection-overflow-item-rest) > span {
          margin-right: unset;
          margin-inline-end: 4px;
        }
      }

      .ant-tag {
        margin-right: unset;
        margin-inline-end: 0;
      }
    }

    > .ant-select-selection-search > .ant-select-selection-search-input {
      height: 100%;
    }
  }

  &.ant-select-single {
    .ant-select-selector {
      padding: unset;
      padding-block: 6px;
      padding-inline: 12px 36px;
    }

    &.ant-select-show-arrow {
      .ant-select-selection-placeholder,
      .ant-select-selection-item {
        padding-right: unset;
        padding-inline-end: 0;
      }
    }
  }

  &.ant-select-multiple {
    .ant-select-selector {
      padding: unset;
      padding-block: 0;
      padding-inline: 12px 64px;
    }

    .ant-select-selection-search {
      margin-inline-start: 0;
      line-height: 20px;
    }

    &.ant-select-focused,
    &.ant-select-open {
      .ant-select-selector {
        border: none;
        box-shadow: ${P("focus.boxShadow")};
        background-color: ${P("enabled.background")};
      }
    }
  }

  // color states
  &&:not(.ant-select-customize-input) {
    // enabled
    &:not(.ant-select-disabled) {
      .ant-select-selector {
        background-color: ${P("enabled.background")};
        border: 1px solid ${P("enabled.border")};
      }

      .ant-select-selection-search-input {
        color: ${P("enabled.color")};
      }

      .ant-select-selection-item {
        color: ${P("enabled.color")};
        opacity: 1;
      }

      .ant-select-selection-placeholder {
        color: ${P("enabled.placeholder.color")};
      }

      .select-chevron,
      .ant-select-arrow {
        color: ${P("enabled.color")};
      }

      .ant-select-clear {
        background-color: ${P("enabled.background")};
      }

      // validation status
      ${e=>`
      &:not(.ant-select-focused) .ant-select-selector {
        border-color: ${P(`${e.validationStatus}.border`)(e)};
      }`}

      // focused
      &.ant-select-focused .ant-select-selector {
        box-shadow: ${P("focus.boxShadow")};
        background-color: ${P("enabled.background")};
      }

      // open
      &.ant-select-open .ant-select-selector {
        box-shadow: ${P("focus.boxShadow")};
        background-color: ${P("enabled.background")};
      }

      // hover
      &:not(.ant-select-focused):hover .ant-select-selector {
        border-color: ${P("hover.border")};
      }
    }

    // disabled
    &.ant-select-disabled {
      .ant-select-selector {
        background-color: ${P("disabled.background")};
        border: 1px solid ${P("disabled.border")};

        .ant-select-selection-item {
          color: ${P("disabled.color")};
        }
      }

      .ant-select-selection-placeholder {
        color: ${P("disabled.placeholder.color")};
      }
    }

    &.kl6-select-readonly {
      .ant-select-selector {
        cursor: auto;
        
        .ant-select-selection-item {
          color: ${P("readonly.color")};
        }
        input {
          cursor: auto;
        }
      }

      .ant-select-selection-placeholder {
        color: ${P("readonly.color")};
      }
    }

    .select-chevron {
      color: ${P("disabled.color")};
    }
  }

  .ant-select-selector {
    border-radius: 8px !important;

    > .ant-select-selection-placeholder {
      opacity: 1;
      line-height: 20px;
    }

    > .ant-select-selection-item {
      display: inline-block;
      line-height: 20px;
    }
  }

  &.ant-select-open .ant-select-arrow {
    transform: rotate(0.5turn);
  }

  > .ant-select-arrow {
    width: 16px;
    height: 16px;
    right: unset;
    inset-inline-end: 12px;
    margin-top: 0;
    transform: none;
    top: 8px;
  }

  > .ant-select-clear {
    opacity: 1;
    right: unset;
    inset-inline-end: 32px;
    top: 8px;
    bottom: 1px;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    margin-top: 0;
  }

  .dropdown-custom { // duplicate for TreeSelect
    background-color: ${P("enabled.dropdown.background")};
    border-radius: 4px;
    box-shadow: ${P("enabled.dropdown.boxShadow")};

    &.dropdown-loading {
      min-height: 64px;
    }
  }

  .ant-select-selection-overflow-item-rest .ant-select-selection-item {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
  }
`,ra=Dt`
  .ant-select-item-option {
    color: ${P("enabled.option.color")};
    position: relative;
    padding-inline-end: 12px;

    .ant-select-item-option-state {
      display: none;
    }

    .ant-select-item-option-content {
      display: flex;
      align-items: center;

      .dropdown-v6-multi-checkbox {
        margin-inline-end: 5px;
      }
    }

    .ant-select-item-option-content > span {
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis
    }

    .ant-select-item-option-content .dropdown-v6-multi-checkbox + span {
      max-width: calc(100% - 23px);
    }

    &:focus-visible {
      background-color: ${P("hover.option.background")};
      outline: none;
    }
  }

  .ant-select-item-option-grouped {
    padding-left: unset;
    padding-inline-start: 12px;
  }

  .rc-virtual-list {
    & ::-webkit-scrollbar {
      -webkit-appearance: none;
      height: 8px;
      width: 8px;
      background-color: var(--scrollbar--bg--enabled);
      border-radius: 4px;

      &:hover {
        background-color: var(--scrollbar--bg--hover);
      }

      &:active {
        background-color: var(--scrollbar--bg--active);
      }
    }

    & ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: var(--scrollbar--bar--enabled);

      &:hover {
        background-color: var(--scrollbar--bar--hover);
      }

      &:active {
        background-color: var(--scrollbar--bar--active);
      }
    }
  }

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${P("selected.option.background")};
    color: ${P("selected.option.color")};
    font-weight: ${Je.fontWeight};
  }

  .ant-select-item-option-active:not(.ant-select-item-option-disabled):not(.ant-select-item-option-selected) {
    &, &:hover {
      background-color: ${P("hover.option.background")};
    }
  }

  .ant-select-item-option-selected {
    color: ${P("hover.option.color")};
    background-color: ${P("selected.option.background")};
  }

  .ant-select-item-option-disabled {
    color: ${P("disabled.option.color")};
  }

  .ant-select-item-group {
    padding: 10px 12px 6px 12px;
    color: ${P("enabled.placeholder.color")};
    ${mn(vn.BTM4)}
  }

  ${e=>e.isMultiSelect&&Dt`
    .ant-select-item:not([label]) {
      &:not(.ant-select-item-option-selected) {
        background: ${P("selected.option.background")};
      }
      
      .ant-select-item-option-content {
        &, &:before {
          color: ${P("selected.option.color")};
        }
      }
      
      &:not(.ant-select-item-option-selected) .ant-select-item-option-content:before {
        content: "${kt(e.t("select.tags.addPrefix"))}";
      }
      
      &.ant-select-item-option-selected .ant-select-item-option-content:before {
        content: "${kt(e.t("select.tags.removePrefix"))}";
      }

      .ant-select-item-option-content:after {
        content: "${kt(e.t("select.tags.addRemovePostfix"))}";
      }
    }
  `}
`,la=Be.div.withConfig({shouldForwardProp:e=>!["cssConfig","isMultiSelect","t"].includes(e)})`
  ${ra}
`;function ia(e,t){return`
  .${t} {
    background-color: ${e.enabled.dropdown.background};
    border-radius: 4px;
    box-shadow: ${e.enabled.dropdown.boxShadow};
  }
  
  .${t}.dropdown-loading {
    min-height: 64px;
  }
  `}const ua=Be.div`
  display: flex;
  color: ${P("enabled.loadingError.color")};

  > svg {
    margin-top: 2px;
    margin-inline-end: 4px;
  }

  > div {
    flex: 1;
  }
`,ca=Be.span`
  color: ${P("enabled.option.description")};
`,sa=Be.div`
  display: flex;
  width: 100%;
`,da=Be.div`
  display: flex;
  flex-direction: column;

  ${e=>e.reservedSpace?`width: calc(100% - ${e.reservedSpace}px)`:"width: 100%"}
`,vt=e=>typeof e!="object"&&typeof e!="number"?{label:e,value:pt(),key:pt()}:e,fn=(e,t,a)=>e==null||!t||a!=="tags"?e:Array.isArray(e)?e.map(vt):[vt(e)],fa=(e,t)=>{if(Array.isArray(t)){let a=t[t.length-1];return typeof a!="object"&&typeof a!="number"&&(a={label:a,value:pt(),key:pt()}),[...e,a]}return t},pa=(e,t)=>{if(Array.isArray(t)&&Array.isArray(e)){const a=[...e];if(t.length===0)return[];const o=a.findIndex((r,l)=>typeof r=="object"?t[l]!==(r==null?void 0:r.value):t[l]!==r);return a.splice(o,1),a}return t},Pt=e=>{for(;e;){if(e instanceof Element&&(window.getComputedStyle(e).overflowY==="auto"||window.getComputedStyle(e).overflowY==="scroll"||window.getComputedStyle(e).overflowX==="auto"||window.getComputedStyle(e).overflowX==="scroll"))return e;e=e.parentNode}return null},ma=()=>{const{t:e}=bn();return w.createElement(Qt,{image:Qt.PRESENTED_IMAGE_SIMPLE,description:w.createElement(Zn,{type:"BTR3"},e("select.empty")),className:"ant-empty-small","data-testid":"select-no-data","kl-id":"empty-data"})},va=()=>w.createElement(Qn,{testId:"select-chevron-icon",klId:"down-icon"}),za=()=>w.createElement(fo,{testId:"select-search-icon",klId:"search-icon"}),ga=()=>w.createElement(gn,{mode:"filled",testId:"select-clear-search-icon",klId:"clear-icon"});function _t({onLoad:e}){return n.useEffect(()=>{e()},[e]),w.createElement(wn,{centered:!0,testId:"select-option-loading-more"})}function Lt({cssConfig:e,children:t}){return w.createElement(ua,{cssConfig:e},w.createElement(eo,null),w.createElement("div",null,t))}const Ft=Be(({className:e})=>w.createElement("div",{className:Le("dropdown-v6-multi-checkbox",e)},w.createElement(Zt,{className:"dropdown-v6-multi-checkbox-unchecked",checked:!1}),w.createElement(Zt,{className:"dropdown-v6-multi-checkbox-checked",checked:!0})))`
  width: 18px;
  height: 22px;
  display: inline-flex;

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: unset;
    margin-inline-start: 0;
  }

  .ant-checkbox {
    top: 4px;
  }

  .ant-select-item-option.ant-select-item-option-selected & .dropdown-v6-multi-checkbox-unchecked,
  .ant-select-item-option:not(.ant-select-item-option-selected) & .dropdown-v6-multi-checkbox-checked {
    display: none;
  }
`;try{_t.displayName="LoadingTrigger",_t.__docgenInfo={description:"",displayName:"LoadingTrigger",props:{onLoad:{defaultValue:null,description:"",name:"onLoad",required:!0,type:{name:"() => void"}}}}}catch{}try{Lt.displayName="LoadingErrorContent",Lt.__docgenInfo={description:"",displayName:"LoadingErrorContent",props:{cssConfig:{defaultValue:null,description:"",name:"cssConfig",required:!0,type:{name:"SelectColorConfig"}},children:{defaultValue:null,description:"",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}try{vt.displayName="createUniqueSelectElementFromLabel",vt.__docgenInfo={description:"",displayName:"createUniqueSelectElementFromLabel",props:{key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"RawValue"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}}}}}catch{}try{Pt.displayName="findScrollableParent",Pt.__docgenInfo={description:"",displayName:"findScrollableParent",props:{}}}catch{}try{Ft.displayName="MultiSelectCheckBox",Ft.__docgenInfo={description:"",displayName:"MultiSelectCheckBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const ha="_option_3alo0_1",ba="_optionAction_3alo0_1",wa="_optionActions_3alo0_5",Mt={option:ha,optionAction:ba,optionActions:wa},ya=e=>to({...e,mode:void 0},{componentName:"select",defaultValues:{}}),Sa=16,Ca=22,Ea=Be(At).withConfig({shouldForwardProp:e=>!["cssConfig","validationStatus"].includes(e)})`${aa}`,xa=e=>w.createElement(hn,{size:"small"},`+ ${e.length} ...`),Mn=e=>typeof e=="string"||typeof e=="number"?String(e):w.isValidElement(e)&&e.props.children?w.Children.toArray(e.props.children).map(Mn).join(""):"",nt=n.forwardRef((e,t)=>{const{children:a,hasMore:o,onLoadMore:r,options:l,cssConfig:u,...d}=Yt(ya(e)),f=n.useMemo(()=>yo(()=>{r==null||r()}),[r]),b=e.mode==="multiple"||e.mode==="tags";function p(s){var z,M,I;const{testAttributes:c,...i}=Yt(s);if(i.options)return w.createElement(gt,{key:i.value,label:i.label,...c},i.options.map(p));const y=(z=i.actions)!=null&&z.length?i.actions.length*Sa+i.actions.length*4:0,k=(b?Ca:0)+y;return w.createElement(st,{...c,...i,key:i.value,"data-value":i.value,label:typeof i.label=="string"?i.label.trim():i.label,"data-label":i.dataLabel??Mn(i.label).trim(),role:"option",className:Mt.option},w.createElement(sa,null,b&&w.createElement(Ft,null),w.createElement(da,{reservedSpace:k},w.createElement(Jt,null,i.label),i.description&&w.createElement(ca,{cssConfig:u},w.createElement(Jt,null,i.description)))),(M=i.actions)!=null&&M.length?w.createElement(oo,{gap:"dependent",className:Mt.optionActions,wrap:"nowrap"},(I=i.actions)==null?void 0:I.map(({key:_,icon:j,onClick:K},le)=>w.createElement(gn,{key:_??le,icon:j,className:Mt.optionAction,onClick:se=>{se.stopPropagation(),K()}}))):null)}return w.createElement(Dn,{...d,ref:t,mode:e.mode,cssConfig:u},a||(l==null?void 0:l.map(p)),o&&w.createElement(st,{key:"loading-more-option",disabled:!0},w.createElement(_t,{onLoad:f})))}),Dn=n.forwardRef(({allowNonUniqueValues:e,autoClearSearchValue:t=!0,autoFocus:a=!1,children:o,className:r,closeOnParentScroll:l,cssConfig:u,defaultValue:d,disabled:f=!1,dropdownClassName:b,dropdownMaxHeight:p,filterOption:s,getPopupContainer:c,loading:i=!1,loadingError:y,mode:k,notFoundContent:z,onChange:M,onDropdownVisibleChange:I,onSearch:_,onClear:j,open:K,optionFilterProp:le="label",optionLabelProp:se="label",placement:L="bottomLeft",readOnly:B,renderDropdown:X,renderFooter:G,renderHeader:Y,showArrow:$=!0,showSearch:te=!1,testAttributes:g,usePortal:C,validationStatus:q="default",value:J,virtual:U=!1,...be},ge)=>{ao();const Ne=ro(u,ia,nt),W=no(),{t:F}=bn(),[m,D]=n.useState(()=>fn(d,e,k)),H=n.useMemo(()=>fn(J,e,k),[J]),S=H!==void 0?H:m,A=k==="multiple"||k==="tags",[ne,me]=n.useState(!!K),O=n.useRef(null),Q=n.useCallback(N=>{var ae;(ae=N==null?void 0:N.target)!=null&&ae.closest(".dropdown-custom")||l&&(O!=null&&O.current)&&me(!1)},[l,O]),[ie,oe]=n.useState(""),we=N=>{t||N!==""?(oe(N),_==null||_(N)):_==null||_(ie)},xe=()=>{oe(""),j==null||j()},he=N=>{te&&!t&&N.code==="Backspace"&&ie.length===1&&xe()},ye=()=>{t&&oe("")},ee=n.useCallback((N,ae)=>{let ue=N;e&&Array.isArray(ue)&&(Array.isArray(S)&&S.length<ue.length?ue=fa(S,N):ue=pa(S,N)),D(ue),t&&oe(""),M==null||M(ue,ae)},[M,S,e,t]);n.useEffect(()=>{if(!l)return;const N=Pt(O==null?void 0:O.current);if(N instanceof Element)return N.addEventListener("scroll",Q),N.addEventListener("wheel",Q),()=>{N.removeEventListener("wheel",Q),N.removeEventListener("scroll",Q)}},[l,K,O,Q]);const Se=n.useCallback(N=>{const ae=g!=null&&g["data-testid"]?`${g==null?void 0:g["data-testid"]}-select-dropdown`:"select-dropdown",ue=g!=null&&g["kl-id"]?`${g==null?void 0:g["kl-id"]}-select-dropdown`:"select-dropdown";return w.createElement(la,{cssConfig:u,"data-testid":ae,"kl-id":ue,isMultiSelect:A,t:F},i?w.createElement(wn,{centered:!0,testId:"select-loader",klId:"loader"}):w.createElement(w.Fragment,null,Y&&w.createElement(w.Fragment,null,Y(),w.createElement(en,{mode:"light"})),X?X(N):N,G&&w.createElement(w.Fragment,null,w.createElement(en,{mode:"light"}),G())))},[G,Y,i,u,A,X,g]),Ce=n.useRef(null),Fe=n.useCallback(N=>{if(N&&Ce.current){const ae=Array.isArray(S);if(!S||ae&&!S.length)Ce.current.scrollTo(0);else if(ae){const ue=[...S].sort((Oe,Me)=>Me-Oe).pop();Ce.current.scrollTo(ue??0)}}if(I==null||I(N),l){me(N);return}},[l,I,S]),ke=y&&w.createElement(Lt,{cssConfig:u},y);return w.createElement(na,{ref:ge},w.createElement(oa,{ref:O},w.createElement(Ea,{ref:Ce,allowClear:A,"aria-disabled":f,autoClearSearchValue:t,autoFocus:a,className:Le(r,{"kl6-select-readonly":B}),clearIcon:w.createElement(ga,null),cssConfig:u,"data-validationstatus":q,"data-value":S,disabled:f||B,dropdownAlign:{offset:[0,L!=null&&L.includes("top")?-8:8]},dropdownClassName:Le("dropdown-custom",b,Ne,{"dropdown-loading":i}),dropdownRender:Se,filterOption:s,getPopupContainer:c??W.getPopupContainer??(N=>C??W.usePortal?document.body:N.parentElement),listHeight:p??256,loading:i,maxTagPlaceholder:xa,menuItemSelectedIcon:null,mode:k,notFoundContent:ke||z||w.createElement(ma,null),onBlurCapture:ye,onChange:ee,onDropdownVisibleChange:Fe,onSearch:we,onClear:xe,onKeyDown:he,open:l?ne:K,optionFilterProp:le,optionLabelProp:se,placement:L,prefixCls:"ant-select",searchValue:ie,showArrow:te||$,showSearch:te,inputIcon:w.createElement(va,null),tagRender:N=>w.createElement(hn,{...N,disabled:f,readOnly:B,size:"small"}),transitionName:"ant-slide-up",validationStatus:q,value:S,virtual:U,...be,...g},y?null:o)))});Dn.displayName="SelectView";nt.displayName="Select";nt.Option=st;nt.OptGroup=gt;try{nt.displayName="Select",nt.__docgenInfo={description:"",displayName:"Select",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},renderFooter:{defaultValue:null,description:"Footer renderer",name:"renderFooter",required:!1,type:{name:"(() => Element)"}},renderHeader:{defaultValue:null,description:"Header renderer",name:"renderHeader",required:!1,type:{name:"(() => Element)"}},renderDropdown:{defaultValue:null,description:"Entire dropdown renderer. This prop is directly passing to Antd Select",name:"renderDropdown",required:!1,type:{name:"((menu: ReactElement<any, string | JSXElementConstructor<any>>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:"Set mode of Select",name:"mode",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"tags"'}]}},allowClear:{defaultValue:null,description:"Show clear button",name:"allowClear",required:!1,type:{name:"boolean"}},autoClearSearchValue:{defaultValue:{value:"true"},description:"Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags",name:"autoClearSearchValue",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"false"},description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Initial selected option",name:"defaultValue",required:!1,type:{name:"LabelValue | LabelValue[]"}},disabled:{defaultValue:{value:"false"},description:"Whether disabled select",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},validationStatus:{defaultValue:{value:"default"},description:"Validation status",name:"validationStatus",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"error"'}]}},dropdownClassName:{defaultValue:null,description:"The class name of dropdown menu",name:"dropdownClassName",required:!1,type:{name:"string"}},dropdownMaxHeight:{defaultValue:null,description:"",name:"dropdownMaxHeight",required:!1,type:{name:"number"}},filterOption:{defaultValue:null,description:`If true, filter options by input, if function,
filter options against it. The function will receive two arguments,
inputValue and option, if the function returns true, the option will be included in the filtered set;
Otherwise, it will be excluded. By default filtered with label and inputValue.`,name:"filterOption",required:!1,type:{name:"boolean | ((input: string, option: OptionProp) => boolean)"}},filterSort:{defaultValue:null,description:"Sort function for search options sorting, see Array.sort's compareFunction",name:"filterSort",required:!1,type:{name:"((optionA: OptionProp, optionB: OptionProp) => number)"}},getPopupContainer:{defaultValue:null,description:"Parent Node which the selector should be rendered to",name:"getPopupContainer",required:!1,type:{name:"((node: HTMLElement) => HTMLElement)"}},closeOnParentScroll:{defaultValue:null,description:"If set to true, the select container will close when the parent scrollable element is scrolled",name:"closeOnParentScroll",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Indicate loading state",name:"loading",required:!1,type:{name:"boolean"}},loadingError:{defaultValue:null,description:"Loading error content showing in the dropdown. Overrides notFoundContent, options and notFoundContent props",name:"loadingError",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},maxTagCount:{defaultValue:null,description:"Max tag count to show. responsive will cost render performance",name:"maxTagCount",required:!1,type:{name:'number | "responsive"'}},maxTagPlaceholder:{defaultValue:null,description:"Placeholder for not showing tags",name:"maxTagPlaceholder",required:!1,type:{name:"ReactNode | ((omittedValues: DisplayValueType[]) => ReactNode)"}},maxTagTextLength:{defaultValue:null,description:"Max tag text length to show",name:"maxTagTextLength",required:!1,type:{name:"number"}},notFoundContent:{defaultValue:null,description:"Specify content to show when no result matches",name:"notFoundContent",required:!1,type:{name:"ReactNode"}},open:{defaultValue:null,description:"Controlled open state of dropdown",name:"open",required:!1,type:{name:"boolean"}},optionFilterProp:{defaultValue:{value:"label"},description:"Which prop value of option will be used for filter if filterOption is true. If options is set, it should be set to label",name:"optionFilterProp",required:!1,type:{name:"string"}},optionLabelProp:{defaultValue:{value:"label"},description:"Which prop value of option will render as content of select",name:"optionLabelProp",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"Select options. Will get better perf than jsx definition",name:"options",required:!1,type:{name:"OptionType[]"}},placeholder:{defaultValue:null,description:"Placeholder of select",name:"placeholder",required:!1,type:{name:"ReactNode"}},placement:{defaultValue:{value:"bottomLeft"},description:"The position where the selection box pops up",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottomRight"'}]}},searchValue:{defaultValue:null,description:'The current input "search" text',name:"searchValue",required:!1,type:{name:"string"}},showArrow:{defaultValue:{value:"true"},description:"Whether to show the drop-down arrow",name:"showArrow",required:!1,type:{name:"boolean"}},showSearch:{defaultValue:{value:"false"},description:"Whether select is searchable",name:"showSearch",required:!1,type:{name:"boolean"}},tokenSeparators:{defaultValue:null,description:'Separator used to tokenize, only applies when mode="tags"',name:"tokenSeparators",required:!1,type:{name:"string[]"}},allowNonUniqueValues:{defaultValue:null,description:`Allowed add non unique values in tag mode. In this mode the original value lies in title field.
Value of any element have LabeledValue type even if you give it a set of rings
['aa', 'aa'] => [{label: 'aa', value: {uniqueId}, {label: 'aa', value: {uniqueId2}}]`,name:"allowNonUniqueValues",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Current selected option (considered as a immutable array)",name:"value",required:!1,type:{name:"LabelValue | LabelValue[]"}},virtual:{defaultValue:{value:"false"},description:"Disable virtual scroll when set to false",name:"virtual",required:!1,type:{name:"boolean"}},hasMore:{defaultValue:null,description:"Show spinner at the end of options",name:"hasMore",required:!1,type:{name:"boolean"}},onLoadMore:{defaultValue:null,description:`Called when the user scrolls to the end of options. Using with *hasMore* prop
Note: Does not work if the *virtual* prop is false
Note 2: Trigger the function only once. Make sure it properly cached with useCallback`,name:"onLoadMore",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:null,description:"Called when blur",name:"onBlur",required:!1,type:{name:"FocusEventHandler"}},onChange:{defaultValue:null,description:"Called when select an option or input value change",name:"onChange",required:!1,type:{name:"((value: any, option: OptionProp | OptionProp[]) => void)"}},onClear:{defaultValue:null,description:"Called when clear",name:"onClear",required:!1,type:{name:"(() => void)"}},onDeselect:{defaultValue:null,description:`Called when an option is deselected, param is the selected option's value.
Only called for multiple or tags, effective in multiple or tags mode only`,name:"onDeselect",required:!1,type:{name:"((value: SelectValue, option: OptionProp | OptionProp[]) => void)"}},onDropdownVisibleChange:{defaultValue:null,description:"Called when dropdown opens",name:"onDropdownVisibleChange",required:!1,type:{name:"((open: boolean) => void)"}},onFocus:{defaultValue:null,description:"Called when focused",name:"onFocus",required:!1,type:{name:"FocusEventHandler"}},onInputKeyDown:{defaultValue:null,description:"Called when key is pressed",name:"onInputKeyDown",required:!1,type:{name:"(() => void)"}},onMouseEnter:{defaultValue:null,description:"Called when mouse enter",name:"onMouseEnter",required:!1,type:{name:"(() => void)"}},onMouseLeave:{defaultValue:null,description:"Called when mouse leaves",name:"onMouseLeave",required:!1,type:{name:"(() => void)"}},onPopupScroll:{defaultValue:null,description:"Called when dropdown scrolls",name:"onPopupScroll",required:!1,type:{name:"(() => void)"}},onSearch:{defaultValue:null,description:"Callback function that is fired when input changed",name:"onSearch",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"Called when an option is selected, the params are option's value (or key) and option instance",name:"onSelect",required:!1,type:{name:"((value: SelectValue, option: OptionProp | OptionProp[]) => void)"}},labelInValue:{defaultValue:null,description:"Whether to embed label in value, turn the format of value from string to { value: string, label: ReactNode }",name:"labelInValue",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tagRender:{defaultValue:null,description:"Customize tag render, only applies when mode is set to multiple or tags",name:"tagRender",required:!1,type:{name:"((props: CustomTagProps) => ReactElement<any, string | JSXElementConstructor<any>>)"}},dropdownStyle:{defaultValue:null,description:"The style of dropdown menu",name:"dropdownStyle",required:!1,type:{name:"CSSProperties"}},usePortal:{defaultValue:null,description:"Shorthand getPopupContainer={() => document.body}",name:"usePortal",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{va as C,ma as E,Ft as M,nt as S,za as a,ga as b,xa as m,aa as s};
