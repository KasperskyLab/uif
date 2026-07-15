import{aS as An,_ as ue,b0 as Kn,bs as Bn,p as Me,r as n,k as ot,n as Ge,l as Le,m as se,a9 as Wn,b as de,bc as Hn,br as Un,a$ as zn,s as fn,bq as jn,b9 as Gn,o as Xn,H as Be,a1 as pn,a2 as mn,C as Mt,D as Yn,R as y,ai as Jn,T as Qn,A as vn,al as Zn,aq as eo,w as to,b7 as no,ag as oo,S as ao}from"./iframe-4-PRSI1I.js";import{T as Yt}from"./TextReducer-JHIejSuK.js";import{u as ro}from"./useGlobalStyles-B7OAA5LN.js";import{D as Jt}from"./Divider-Cb8Cmzqg.js";import{L as gn}from"./Loader-CzWCOjAf.js";import{T as hn}from"./Tag-B3SARhhR.js";import{r as lo}from"./index-CJ8XlVHE.js";import{u as Nt}from"./useMergedState-5V6OeSqY.js";import{K as R}from"./KeyCode-c5NdJp32.js";import{T as io}from"./index-8yXvUTGn.js";import{p as $t}from"./pickAttrs-ACVbvRAI.js";import{F as uo}from"./isEqual-vUrjsNbx.js";import{o as co}from"./omit-DXgDXInf.js";import{L as so}from"./List-CY7M4ryI.js";import{a as Qt}from"./Checkbox-C_Wci0Rq.js";import{E as Zt}from"./index-C0IykO9V.js";import{I as fo}from"./IconSearch-P_ay4iUp.js";import{r as po,u as mo}from"./v4-BoP187Zn.js";import{u as bn}from"./useTranslation-jUtuSwd5.js";let en,yt,St=0,Ct=0;function pt(e,t,a){let o=0;const r=new Array(16);e=e||{};let l=e.node||en,u=e.clockseq!==void 0?e.clockseq:yt;if(l==null||u==null){const c=e.random||(e.rng||po)();l==null&&(l=en=[c[0]|1,c[1],c[2],c[3],c[4],c[5]]),u==null&&(u=yt=(c[6]<<8|c[7])&16383)}let s=e.msecs!==void 0?e.msecs:Date.now(),d=e.nsecs!==void 0?e.nsecs:Ct+1;const b=s-St+(d-Ct)/1e4;if(b<0&&e.clockseq===void 0&&(u=u+1&16383),(b<0||s>St)&&e.nsecs===void 0&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");St=s,Ct=d,yt=u,s+=122192928e5;const p=((s&268435455)*1e4+d)%4294967296;r[o++]=p>>>24&255,r[o++]=p>>>16&255,r[o++]=p>>>8&255,r[o++]=p&255;const i=s/4294967296*1e4&268435455;r[o++]=i>>>8&255,r[o++]=i&255,r[o++]=i>>>24&15|16,r[o++]=i>>>16&255,r[o++]=u>>>8|128,r[o++]=u&255;for(let c=0;c<6;++c)r[o+c]=l[c];return t||mo(r)}var It,tn;function vo(){if(tn)return It;tn=1;var e=lo(),t=1/0,a=17976931348623157e292;function o(r){if(!r)return r===0?r:0;if(r=e(r),r===t||r===-t){var l=r<0?-1:1;return l*a}return r===r?r:0}return It=o,It}var Et,nn;function go(){if(nn)return Et;nn=1;var e=vo();function t(a){var o=e(a),r=o%1;return o===o?r?o-r:o:0}return Et=t,Et}var xt,on;function ho(){if(on)return xt;on=1;var e=go(),t="Expected a function";function a(o,r){var l;if(typeof r!="function")throw new TypeError(t);return o=e(o),function(){return--o>0&&(l=r.apply(this,arguments)),o<=1&&(r=void 0),l}}return xt=a,xt}var Vt,an;function bo(){if(an)return Vt;an=1;var e=ho();function t(a){return e(2,a)}return Vt=t,Vt}var wo=bo();const yo=An(wo);function rn(e,t){var a=e.key,o;return"value"in e&&(o=e.value),a??(o!==void 0?o:"rc-index-key-".concat(t))}function wn(e,t){var a=e||{},o=a.label,r=a.value,l=a.options;return{label:o||(t?"children":"label"),value:r||"value",options:l||"options"}}function So(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.fieldNames,o=t.childrenAsData,r=[],l=wn(a,!1),u=l.label,s=l.value,d=l.options;function b(p,i){p.forEach(function(c){var f=c[u];if(i||!(d in c)){var w=c[s];r.push({key:rn(c,r.length),groupOption:i,data:c,label:f,value:w})}else{var x=f;x===void 0&&o&&(x=c.label),r.push({key:rn(c,r.length),group:!0,data:c,label:x}),b(c[d],!0)}})}return b(e,!1),r}function Ot(e){var t=ue({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return Kn(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),t}}),t}function Co(e,t){if(!t||!t.length)return null;var a=!1;function o(l,u){var s=Bn(u),d=s[0],b=s.slice(1);if(!d)return[l];var p=l.split(d);return a=a||p.length>1,p.reduce(function(i,c){return[].concat(Me(i),Me(o(c,b)))},[]).filter(function(i){return i})}var r=o(e,t);return a?r:null}var Io=["prefixCls","disabled","visible","children","popupElement","containerWidth","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],Eo=function(t){var a=t===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:a,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:a,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:a,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:a,adjustY:1}}}},xo=function(t,a){var o=t.prefixCls;t.disabled;var r=t.visible,l=t.children,u=t.popupElement,s=t.containerWidth,d=t.animation,b=t.transitionName,p=t.dropdownStyle,i=t.dropdownClassName,c=t.direction,f=c===void 0?"ltr":c,w=t.placement,x=t.dropdownMatchSelectWidth,U=t.dropdownRender,D=t.dropdownAlign,k=t.getPopupContainer,_=t.empty,j=t.getTriggerDOMNode,K=t.onPopupVisibleChange,fe=t.onPopupMouseEnter,ve=ot(t,Io),L="".concat(o,"-dropdown"),B=u;U&&(B=U(u));var X=n.useMemo(function(){return Eo(x)},[x]),G=d?"".concat(L,"-").concat(d):b,Y=n.useRef(null);n.useImperativeHandle(a,function(){return{getPopupElement:function(){return Y.current}}});var $=ue({minWidth:s},p);return typeof x=="number"?$.width=x:x&&($.width=s),n.createElement(io,Ge({},ve,{showAction:K?["click"]:[],hideAction:K?["click"]:[],popupPlacement:w||(f==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:X,prefixCls:L,popupTransitionName:G,popup:n.createElement("div",{ref:Y,onMouseEnter:fe},B),popupAlign:D,popupVisible:r,getPopupContainer:k,popupClassName:Le(i,se({},"".concat(L,"-empty"),_)),popupStyle:$,getTriggerDOMNode:j,onPopupVisibleChange:K}),l)},yn=n.forwardRef(xo);yn.displayName="SelectTrigger";var mt=function(t){var a=t.className,o=t.customizeIcon,r=t.customizeIconProps,l=t.onMouseDown,u=t.onClick,s=t.children,d;return typeof o=="function"?d=o(r):d=o,n.createElement("span",{className:a,onMouseDown:function(p){p.preventDefault(),l&&l(p)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:u,"aria-hidden":!0},d!==void 0?d:n.createElement("span",{className:Le(a.split(/\s+/).map(function(b){return"".concat(b,"-icon")}))},s))},Vo=function(t,a){var o,r,l=t.prefixCls,u=t.id,s=t.inputElement,d=t.disabled,b=t.tabIndex,p=t.autoFocus,i=t.autoComplete,c=t.editable,f=t.activeDescendantId,w=t.value,x=t.maxLength,U=t.onKeyDown,D=t.onMouseDown,k=t.onChange,_=t.onPaste,j=t.onCompositionStart,K=t.onCompositionEnd,fe=t.open,ve=t.attrs,L=s||n.createElement("input",null),B=L,X=B.ref,G=B.props,Y=G.onKeyDown,$=G.onChange,te=G.onMouseDown,g=G.onCompositionStart,C=G.onCompositionEnd,q=G.style;return L=n.cloneElement(L,ue(ue(ue({type:"search"},G),{},{id:u,ref:Wn(a,X),disabled:d,tabIndex:b,autoComplete:i||"off",autoFocus:p,className:Le("".concat(l,"-selection-search-input"),(o=L)===null||o===void 0||(r=o.props)===null||r===void 0?void 0:r.className),role:"combobox","aria-expanded":fe,"aria-haspopup":"listbox","aria-owns":"".concat(u,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(u,"_list"),"aria-activedescendant":f},ve),{},{value:c?w:"",maxLength:x,readOnly:!c,unselectable:c?null:"on",style:ue(ue({},q),{},{opacity:c?null:0}),onKeyDown:function(z){U(z),Y&&Y(z)},onMouseDown:function(z){D(z),te&&te(z)},onChange:function(z){k(z),$&&$(z)},onCompositionStart:function(z){j(z),g&&g(z)},onCompositionEnd:function(z){K(z),C&&C(z)},onPaste:_})),L},qt=n.forwardRef(Vo);qt.displayName="Input";function Sn(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}var Ro=typeof window<"u"&&window.document&&window.document.documentElement,ko=Ro;function Do(e,t){ko?n.useLayoutEffect(e,t):n.useEffect(e,t)}var ln=function(t){t.preventDefault(),t.stopPropagation()},Mo=function(t){var a=t.id,o=t.prefixCls,r=t.values,l=t.open,u=t.searchValue,s=t.inputRef,d=t.placeholder,b=t.disabled,p=t.mode,i=t.showSearch,c=t.autoFocus,f=t.autoComplete,w=t.activeDescendantId,x=t.tabIndex,U=t.removeIcon,D=t.maxTagCount,k=t.maxTagTextLength,_=t.maxTagPlaceholder,j=_===void 0?function(O){return"+ ".concat(O.length," ...")}:_,K=t.tagRender,fe=t.onToggleOpen,ve=t.onRemove,L=t.onInputChange,B=t.onInputPaste,X=t.onInputKeyDown,G=t.onInputMouseDown,Y=t.onInputCompositionStart,$=t.onInputCompositionEnd,te=n.useRef(null),g=n.useState(0),C=de(g,2),q=C[0],J=C[1],z=n.useState(!1),be=de(z,2),ge=be[0],Ne=be[1],W="".concat(o,"-selection"),F=l||p==="tags"?u:"",m=p==="tags"||i&&(l||ge);Do(function(){J(te.current.scrollWidth)},[F]);function M(O,Q,le,oe,we){return n.createElement("span",{className:Le("".concat(W,"-item"),se({},"".concat(W,"-item-disabled"),le)),title:typeof O=="string"||typeof O=="number"?O.toString():void 0},n.createElement("span",{className:"".concat(W,"-item-content")},Q),oe&&n.createElement(mt,{className:"".concat(W,"-item-remove"),onMouseDown:ln,onClick:we,customizeIcon:U},"×"))}function H(O,Q,le,oe,we){var Ee=function(ye){ln(ye),fe(!l)};return n.createElement("span",{onMouseDown:Ee},K({label:Q,value:O,disabled:le,closable:oe,onClose:we}))}function S(O){var Q=O.disabled,le=O.label,oe=O.value,we=!b&&!Q,Ee=le;if(typeof k=="number"&&(typeof le=="string"||typeof le=="number")){var he=String(Ee);he.length>k&&(Ee="".concat(he.slice(0,k),"..."))}var ye=function(Se){Se&&Se.stopPropagation(),ve(O)};return typeof K=="function"?H(oe,Ee,Q,we,ye):M(le,Ee,Q,we,ye)}function A(O){var Q=typeof j=="function"?j(O):j;return M(Q,Q,!1)}var ne=n.createElement("div",{className:"".concat(W,"-search"),style:{width:q},onFocus:function(){Ne(!0)},onBlur:function(){Ne(!1)}},n.createElement(qt,{ref:s,open:l,prefixCls:o,id:a,inputElement:null,disabled:b,autoFocus:c,autoComplete:f,editable:m,activeDescendantId:w,value:F,onKeyDown:X,onMouseDown:G,onChange:L,onPaste:B,onCompositionStart:Y,onCompositionEnd:$,tabIndex:x,attrs:$t(t,!0)}),n.createElement("span",{ref:te,className:"".concat(W,"-search-mirror"),"aria-hidden":!0},F," ")),pe=n.createElement(uo,{prefixCls:"".concat(W,"-overflow"),data:r,renderItem:S,renderRest:A,suffix:ne,itemKey:"key",maxCount:D});return n.createElement(n.Fragment,null,pe,!r.length&&!F&&n.createElement("span",{className:"".concat(W,"-placeholder")},d))},No=function(t){var a=t.inputElement,o=t.prefixCls,r=t.id,l=t.inputRef,u=t.disabled,s=t.autoFocus,d=t.autoComplete,b=t.activeDescendantId,p=t.mode,i=t.open,c=t.values,f=t.placeholder,w=t.tabIndex,x=t.showSearch,U=t.searchValue,D=t.activeValue,k=t.maxLength,_=t.onInputKeyDown,j=t.onInputMouseDown,K=t.onInputChange,fe=t.onInputPaste,ve=t.onInputCompositionStart,L=t.onInputCompositionEnd,B=n.useState(!1),X=de(B,2),G=X[0],Y=X[1],$=p==="combobox",te=$||x,g=c[0],C=U||"";$&&D&&!G&&(C=D),n.useEffect(function(){$&&Y(!1)},[$,D]);var q=p!=="combobox"&&!i&&!x?!1:!!C,J=g&&(typeof g.label=="string"||typeof g.label=="number")?g.label.toString():void 0,z=function(){if(g)return null;var ge=q?{visibility:"hidden"}:void 0;return n.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:ge},f)};return n.createElement(n.Fragment,null,n.createElement("span",{className:"".concat(o,"-selection-search")},n.createElement(qt,{ref:l,prefixCls:o,id:r,open:i,inputElement:a,disabled:u,autoFocus:s,autoComplete:d,editable:te,activeDescendantId:b,value:C,onKeyDown:_,onMouseDown:j,onChange:function(ge){Y(!0),K(ge)},onPaste:fe,onCompositionStart:ve,onCompositionEnd:L,tabIndex:w,attrs:$t(t,!0),maxLength:$?k:void 0})),!$&&g&&!q&&n.createElement("span",{className:"".concat(o,"-selection-item"),title:J},g.label),z())};function Cn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,t=n.useRef(null),a=n.useRef(null);n.useEffect(function(){return function(){window.clearTimeout(a.current)}},[]);function o(r){(r||t.current===null)&&(t.current=r),window.clearTimeout(a.current),a.current=window.setTimeout(function(){t.current=null},e)}return[function(){return t.current},o]}function Oo(e){return![R.ESC,R.SHIFT,R.BACKSPACE,R.TAB,R.WIN_KEY,R.ALT,R.META,R.WIN_KEY_RIGHT,R.CTRL,R.SEMICOLON,R.EQUALS,R.CAPS_LOCK,R.CONTEXT_MENU,R.F1,R.F2,R.F3,R.F4,R.F5,R.F6,R.F7,R.F8,R.F9,R.F10,R.F11,R.F12].includes(e)}var To=function(t,a){var o=n.useRef(null),r=n.useRef(!1),l=t.prefixCls,u=t.open,s=t.mode,d=t.showSearch,b=t.tokenWithEnter,p=t.onSearch,i=t.onSearchSubmit,c=t.onToggleOpen,f=t.onInputKeyDown,w=t.domRef;n.useImperativeHandle(a,function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}});var x=Cn(0),U=de(x,2),D=U[0],k=U[1],_=function(C){var q=C.which;(q===R.UP||q===R.DOWN)&&C.preventDefault(),f&&f(C),q===R.ENTER&&s==="tags"&&!r.current&&!u&&(i==null||i(C.target.value)),Oo(q)&&c(!0)},j=function(){k(!0)},K=n.useRef(null),fe=function(C){p(C,!0,r.current)!==!1&&c(!0)},ve=function(){r.current=!0},L=function(C){r.current=!1,s!=="combobox"&&fe(C.target.value)},B=function(C){var q=C.target.value;if(b&&K.current&&/[\r\n]/.test(K.current)){var J=K.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");q=q.replace(J,K.current)}K.current=null,fe(q)},X=function(C){var q=C.clipboardData,J=q.getData("text");K.current=J},G=function(C){var q=C.target;if(q!==o.current){var J=document.body.style.msTouchAction!==void 0;J?setTimeout(function(){o.current.focus()}):o.current.focus()}},Y=function(C){var q=D();C.target!==o.current&&!q&&C.preventDefault(),(s!=="combobox"&&(!d||!q)||!u)&&(u&&p("",!0,!1),c())},$={inputRef:o,onInputKeyDown:_,onInputMouseDown:j,onInputChange:B,onInputPaste:X,onInputCompositionStart:ve,onInputCompositionEnd:L},te=s==="multiple"||s==="tags"?n.createElement(Mo,Ge({},t,$)):n.createElement(No,Ge({},t,$));return n.createElement("div",{ref:w,className:"".concat(l,"-selector"),onClick:G,onMouseDown:Y},te)},In=n.forwardRef(To);In.displayName="Selector";function Po(e,t,a){var o=n.useRef(null);o.current={open:t,triggerOpen:a},n.useEffect(function(){function r(l){var u=l.target;u.shadowRoot&&l.composed&&(u=l.composedPath()[0]||u),o.current.open&&e().filter(function(s){return s}).every(function(s){return!s.contains(u)&&s!==u})&&o.current.triggerOpen(!1)}return window.addEventListener("mousedown",r),function(){return window.removeEventListener("mousedown",r)}},[])}function _o(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,t=n.useState(!1),a=de(t,2),o=a[0],r=a[1],l=n.useRef(null),u=function(){window.clearTimeout(l.current)};n.useEffect(function(){return u},[]);var s=function(b,p){u(),l.current=window.setTimeout(function(){r(b),p&&p()},e)};return[o,s,u]}var En=n.createContext(null);function Lo(){return n.useContext(En)}var Fo=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","showArrow","inputIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],$o=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function Tt(e){return e==="tags"||e==="multiple"}var qo=n.forwardRef(function(e,t){var a,o,r=e.id,l=e.prefixCls,u=e.className,s=e.showSearch,d=e.tagRender,b=e.direction,p=e.omitDomProps,i=e.displayValues,c=e.onDisplayValuesChange,f=e.emptyOptions,w=e.notFoundContent,x=w===void 0?"Not Found":w,U=e.onClear,D=e.mode,k=e.disabled,_=e.loading,j=e.getInputElement,K=e.getRawInputElement,fe=e.open,ve=e.defaultOpen,L=e.onDropdownVisibleChange,B=e.activeValue,X=e.onActiveValueChange,G=e.activeDescendantId,Y=e.searchValue,$=e.onSearch,te=e.onSearchSplit,g=e.tokenSeparators,C=e.allowClear,q=e.showArrow,J=e.inputIcon,z=e.clearIcon,be=e.OptionList,ge=e.animation,Ne=e.transitionName,W=e.dropdownStyle,F=e.dropdownClassName,m=e.dropdownMatchSelectWidth,M=e.dropdownRender,H=e.dropdownAlign,S=e.placement,A=e.getPopupContainer,ne=e.showAction,pe=ne===void 0?[]:ne,O=e.onFocus,Q=e.onBlur,le=e.onKeyUp,oe=e.onKeyDown,we=e.onMouseDown,Ee=ot(e,Fo),he=Tt(D),ye=(s!==void 0?s:he)||D==="combobox",ee=ue({},Ee);$o.forEach(function(V){delete ee[V]}),p==null||p.forEach(function(V){delete ee[V]});var Se=n.useState(!1),Ce=de(Se,2),Fe=Ce[0],ke=Ce[1];n.useEffect(function(){ke(Hn())},[]);var N=n.useRef(null),ae=n.useRef(null),ie=n.useRef(null),Oe=n.useRef(null),De=n.useRef(null),Xe=_o(),at=de(Xe,3),Qe=at[0],rt=at[1],Ze=at[2];n.useImperativeHandle(t,function(){var V,E;return{focus:(V=Oe.current)===null||V===void 0?void 0:V.focus,blur:(E=Oe.current)===null||E===void 0?void 0:E.blur,scrollTo:function(Ve){var ce;return(ce=De.current)===null||ce===void 0?void 0:ce.scrollTo(Ve)}}});var $e=n.useMemo(function(){var V;if(D!=="combobox")return Y;var E=(V=i[0])===null||V===void 0?void 0:V.value;return typeof E=="string"||typeof E=="number"?String(E):""},[Y,D,i]),lt=D==="combobox"&&typeof j=="function"&&j()||null,Ae=typeof K=="function"&&K(),ht=Un(ae,Ae==null||(a=Ae.props)===null||a===void 0?void 0:a.ref),dt=Nt(void 0,{defaultValue:ve,value:fe}),it=de(dt,2),Ye=it[0],et=it[1],me=Ye,ft=!x&&f;(k||ft&&me&&D==="combobox")&&(me=!1);var We=ft?!1:me,Te=n.useCallback(function(V){var E=V!==void 0?V:!me;me!==E&&!k&&(et(E),L==null||L(E))},[k,me,et,L]),I=n.useMemo(function(){return(g||[]).some(function(V){return[`
`,`\r
`].includes(V)})},[g]),h=function(E,Ie,Ve){var ce=!0,Re=E;X==null||X(null);var _e=Ve?null:Co(E,g);return D!=="combobox"&&_e&&(Re="",te==null||te(_e),Te(!1),ce=!1),$&&$e!==Re&&$(Re,{source:Ie?"typing":"effect"}),ce},v=function(E){!E||!E.trim()||$(E,{source:"submit"})};n.useEffect(function(){!me&&!he&&D!=="combobox"&&h("",!1,!1)},[me]),n.useEffect(function(){Ye&&k&&et(!1),k&&rt(!1)},[k]);var T=Cn(),Z=de(T,2),re=Z[0],He=Z[1],Pe=function(E){var Ie=re(),Ve=E.which;if(Ve===R.ENTER&&(D!=="combobox"&&E.preventDefault(),me||Te(!0)),He(!!$e),Ve===R.BACKSPACE&&!Ie&&he&&!$e&&i.length){for(var ce=Me(i),Re=null,_e=ce.length-1;_e>=0;_e-=1){var ct=ce[_e];if(!ct.disabled){ce.splice(_e,1),Re=ct;break}}Re&&c(ce,{type:"remove",values:[Re]})}for(var ze=arguments.length,tt=new Array(ze>1?ze-1:0),je=1;je<ze;je++)tt[je-1]=arguments[je];if(me&&De.current){var Xt;(Xt=De.current).onKeyDown.apply(Xt,[E].concat(tt))}oe==null||oe.apply(void 0,[E].concat(tt))},xe=function(E){for(var Ie=arguments.length,Ve=new Array(Ie>1?Ie-1:0),ce=1;ce<Ie;ce++)Ve[ce-1]=arguments[ce];if(me&&De.current){var Re;(Re=De.current).onKeyUp.apply(Re,[E].concat(Ve))}le==null||le.apply(void 0,[E].concat(Ve))},Ue=function(E){var Ie=i.filter(function(Ve){return Ve!==E});c(Ie,{type:"remove",values:[E]})},ut=n.useRef(!1),bt=function(){rt(!0),k||(O&&!ut.current&&O.apply(void 0,arguments),pe.includes("focus")&&Te(!0)),ut.current=!0},Kt=function(){rt(!1,function(){ut.current=!1,Te(!1)}),!k&&($e&&(D==="tags"?$($e,{source:"submit"}):D==="multiple"&&$("",{source:"blur"})),Q&&Q.apply(void 0,arguments))},qe=[];n.useEffect(function(){return function(){qe.forEach(function(V){return clearTimeout(V)}),qe.splice(0,qe.length)}},[]);var Ke=function(E){var Ie,Ve=E.target,ce=(Ie=ie.current)===null||Ie===void 0?void 0:Ie.getPopupElement();if(ce&&ce.contains(Ve)){var Re=setTimeout(function(){var tt=qe.indexOf(Re);if(tt!==-1&&qe.splice(tt,1),Ze(),!Fe&&!ce.contains(document.activeElement)){var je;(je=Oe.current)===null||je===void 0||je.focus()}});qe.push(Re)}for(var _e=arguments.length,ct=new Array(_e>1?_e-1:0),ze=1;ze<_e;ze++)ct[ze-1]=arguments[ze];we==null||we.apply(void 0,[E].concat(ct))},Mn=n.useState(null),Bt=de(Mn,2),Wt=Bt[0],Nn=Bt[1],On=n.useState({}),Tn=de(On,2),Pn=Tn[1];function _n(){Pn({})}zn(function(){if(We){var V,E=Math.ceil((V=N.current)===null||V===void 0?void 0:V.offsetWidth);Wt!==E&&!Number.isNaN(E)&&Nn(E)}},[We]);var Ht;Ae&&(Ht=function(E){Te(E)}),Po(function(){var V;return[N.current,(V=ie.current)===null||V===void 0?void 0:V.getPopupElement()]},We,Te);var Ln=n.useMemo(function(){return ue(ue({},e),{},{notFoundContent:x,open:me,triggerOpen:We,id:r,showSearch:ye,multiple:he,toggleOpen:Te})},[e,x,We,me,r,ye,he,Te]),Ut=q!==void 0?q:_||!he&&D!=="combobox",zt;Ut&&(zt=n.createElement(mt,{className:Le("".concat(l,"-arrow"),se({},"".concat(l,"-arrow-loading"),_)),customizeIcon:J,customizeIconProps:{loading:_,searchValue:$e,open:me,focused:Qe,showSearch:ye}}));var jt,Fn=function(){U==null||U(),c([],{type:"clear",values:i}),h("",!1,!1)};!k&&C&&(i.length||$e)&&(jt=n.createElement(mt,{className:"".concat(l,"-clear"),onMouseDown:Fn,customizeIcon:z},"×"));var $n=n.createElement(be,{ref:De}),qn=Le(l,u,(o={},se(o,"".concat(l,"-focused"),Qe),se(o,"".concat(l,"-multiple"),he),se(o,"".concat(l,"-single"),!he),se(o,"".concat(l,"-allow-clear"),C),se(o,"".concat(l,"-show-arrow"),Ut),se(o,"".concat(l,"-disabled"),k),se(o,"".concat(l,"-loading"),_),se(o,"".concat(l,"-open"),me),se(o,"".concat(l,"-customize-input"),lt),se(o,"".concat(l,"-show-search"),ye),o)),Gt=n.createElement(yn,{ref:ie,disabled:k,prefixCls:l,visible:We,popupElement:$n,containerWidth:Wt,animation:ge,transitionName:Ne,dropdownStyle:W,dropdownClassName:F,direction:b,dropdownMatchSelectWidth:m,dropdownRender:M,dropdownAlign:H,placement:S,getPopupContainer:A,empty:f,getTriggerDOMNode:function(){return ae.current},onPopupVisibleChange:Ht,onPopupMouseEnter:_n},Ae?n.cloneElement(Ae,{ref:ht}):n.createElement(In,Ge({},e,{domRef:ae,prefixCls:l,inputElement:lt,ref:Oe,id:r,showSearch:ye,mode:D,activeDescendantId:G,tagRender:d,values:i,open:me,onToggleOpen:Te,activeValue:B,searchValue:$e,onSearch:h,onSearchSubmit:v,onRemove:Ue,tokenWithEnter:I}))),wt;return Ae?wt=Gt:wt=n.createElement("div",Ge({className:qn},ee,{ref:N,onMouseDown:Ke,onKeyDown:Pe,onKeyUp:xe,onFocus:bt,onBlur:Kt}),Qe&&!me&&n.createElement("span",{style:{width:0,height:0,display:"flex",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(i.map(function(V){var E=V.label,Ie=V.value;return["number","string"].includes(fn(E))?E:Ie}).join(", "))),Gt,zt,jt),n.createElement(En.Provider,{value:Ln},wt)});function Ao(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var xn=n.createContext(null),Ko=["disabled","title","children","style","className"];function un(e){return typeof e=="string"||typeof e=="number"}var Bo=function(t,a){var o=Lo(),r=o.prefixCls,l=o.id,u=o.open,s=o.multiple,d=o.mode,b=o.searchValue,p=o.toggleOpen,i=o.notFoundContent,c=o.onPopupScroll,f=n.useContext(xn),w=f.flattenOptions,x=f.onActiveValue,U=f.defaultActiveFirstOption,D=f.onSelect,k=f.menuItemSelectedIcon,_=f.rawValues,j=f.fieldNames,K=f.virtual,fe=f.listHeight,ve=f.listItemHeight,L="".concat(r,"-item"),B=jn(function(){return w},[u,w],function(F,m){return m[0]&&F[1]!==m[1]}),X=n.useRef(null),G=function(m){m.preventDefault()},Y=function(m){X.current&&X.current.scrollTo(typeof m=="number"?{index:m}:m)},$=function(m){for(var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,H=B.length,S=0;S<H;S+=1){var A=(m+S*M+H)%H,ne=B[A],pe=ne.group,O=ne.data;if(!pe&&!O.disabled)return A}return-1},te=n.useState(function(){return $(0)}),g=de(te,2),C=g[0],q=g[1],J=function(m){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;q(m);var H={source:M?"keyboard":"mouse"},S=B[m];if(!S){x(null,-1,H);return}x(S.value,m,H)};n.useEffect(function(){J(U!==!1?$(0):-1)},[B.length,b]);var z=n.useCallback(function(F){return _.has(F)&&d!=="combobox"},[d,Me(_).toString()]);n.useEffect(function(){var F=setTimeout(function(){if(!s&&u&&_.size===1){var M=Array.from(_)[0],H=B.findIndex(function(S){var A=S.data;return A.value===M});H!==-1&&(J(H),Y(H))}});if(u){var m;(m=X.current)===null||m===void 0||m.scrollTo(void 0)}return function(){return clearTimeout(F)}},[u,b]);var be=function(m){m!==void 0&&D(m,{selected:!_.has(m)}),s||p(!1)};if(n.useImperativeHandle(a,function(){return{onKeyDown:function(m){var M=m.which,H=m.ctrlKey;switch(M){case R.N:case R.P:case R.UP:case R.DOWN:{var S=0;if(M===R.UP?S=-1:M===R.DOWN?S=1:Ao()&&H&&(M===R.N?S=1:M===R.P&&(S=-1)),S!==0){var A=$(C+S,S);Y(A),J(A,!0)}break}case R.ENTER:{var ne=B[C];ne&&!ne.data.disabled?be(ne.value):be(void 0),u&&m.preventDefault();break}case R.ESC:p(!1),u&&m.stopPropagation()}},onKeyUp:function(){},scrollTo:function(m){Y(m)}}}),B.length===0)return n.createElement("div",{role:"listbox",id:"".concat(l,"_list"),className:"".concat(L,"-empty"),onMouseDown:G},i);var ge=Object.keys(j).map(function(F){return j[F]}),Ne=function(m){return m.label},W=function(m){var M=B[m];if(!M)return null;var H=M.data||{},S=H.value,A=M.group,ne=$t(H,!0),pe=Ne(M);return M?n.createElement("div",Ge({"aria-label":typeof pe=="string"&&!A?pe:null},ne,{key:m,role:A?"presentation":"option",id:"".concat(l,"_list_").concat(m),"aria-selected":z(S)}),S):null};return n.createElement(n.Fragment,null,n.createElement("div",{role:"listbox",id:"".concat(l,"_list"),style:{height:0,width:0,overflow:"hidden"}},W(C-1),W(C),W(C+1)),n.createElement(so,{itemKey:"key",ref:X,data:B,height:fe,itemHeight:ve,fullHeight:!1,onMouseDown:G,onScroll:c,virtual:K},function(F,m){var M,H=F.group,S=F.groupOption,A=F.data,ne=F.label,pe=F.value,O=A.key;if(H){var Q,le=(Q=A.title)!==null&&Q!==void 0?Q:un(ne)&&ne;return n.createElement("div",{className:Le(L,"".concat(L,"-group")),title:le},ne!==void 0?ne:O)}var oe=A.disabled,we=A.title;A.children;var Ee=A.style,he=A.className,ye=ot(A,Ko),ee=co(ye,ge),Se=z(pe),Ce="".concat(L,"-option"),Fe=Le(L,Ce,he,(M={},se(M,"".concat(Ce,"-grouped"),S),se(M,"".concat(Ce,"-active"),C===m&&!oe),se(M,"".concat(Ce,"-disabled"),oe),se(M,"".concat(Ce,"-selected"),Se),M)),ke=Ne(F),N=!k||typeof k=="function"||Se,ae=typeof ke=="number"?ke:ke||pe,ie=un(ae)?ae.toString():void 0;return we!==void 0&&(ie=we),n.createElement("div",Ge({},ee,{"aria-selected":Se,className:Fe,title:ie,onMouseMove:function(){C===m||oe||J(m)},onClick:function(){oe||be(pe)},style:Ee}),n.createElement("div",{className:"".concat(Ce,"-content")},ae),n.isValidElement(k)||Se,N&&n.createElement(mt,{className:"".concat(L,"-option-state"),customizeIcon:k,customizeIconProps:{isSelected:Se}},Se?"✓":null))}))},Vn=n.forwardRef(Bo);Vn.displayName="OptionList";var st=function(){return null};st.isSelectOption=!0;var gt=function(){return null};gt.isSelectOptGroup=!0;var Wo=["children","value"],Ho=["children"];function Uo(e){var t=e.key,a=e.props,o=a.children,r=a.value,l=ot(a,Wo);return ue({key:t,value:r!==void 0?r:t,children:o},l)}function Rn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Gn(e).map(function(a,o){if(!n.isValidElement(a)||!a.type)return null;var r=a.type.isSelectOptGroup,l=a.key,u=a.props,s=u.children,d=ot(u,Ho);return t||!r?Uo(a):ue(ue({key:"__RC_SELECT_GRP__".concat(l===null?o:l,"__"),label:l},d),{},{options:Rn(s)})}).filter(function(a){return a})}function zo(e,t,a,o,r){return n.useMemo(function(){var l=e,u=!e;u&&(l=Rn(t));var s=new Map,d=new Map,b=function(c,f,w){w&&typeof w=="string"&&c.set(f[w],f)};function p(i){for(var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,f=0;f<i.length;f+=1){var w=i[f];!w[a.options]||c?(s.set(w[a.value],w),b(d,w,a.label),b(d,w,o),b(d,w,r)):p(w[a.options],!0)}}return p(l),{options:l,valueOptions:s,labelOptions:d}},[e,t,a,o,r])}var cn=0,jo=Xn();function Go(){var e;return jo?(e=cn,cn+=1):e="TEST_OR_SSR",e}function Xo(e){var t=n.useState(),a=de(t,2),o=a[0],r=a[1];return n.useEffect(function(){r("rc_select_".concat(Go()))},[]),e||o}function sn(e){var t=n.useRef();t.current=e;var a=n.useCallback(function(){return t.current.apply(t,arguments)},[]);return a}function Rt(e,t){return Sn(e).join("").toUpperCase().includes(t)}const Yo=function(e,t,a,o,r){return n.useMemo(function(){if(!a||o===!1)return e;var l=t.options,u=t.label,s=t.value,d=[],b=typeof o=="function",p=a.toUpperCase(),i=b?o:function(f,w){return r?Rt(w[r],p):w[l]?Rt(w[u!=="children"?u:"label"],p):Rt(w[s],p)},c=b?function(f){return Ot(f)}:function(f){return f};return e.forEach(function(f){if(f[l]){var w=i(a,c(f));if(w)d.push(f);else{var x=f[l].filter(function(U){return i(a,c(U))});x.length&&d.push(ue(ue({},f),{},se({},l,x)))}return}i(a,c(f))&&d.push(f)}),d},[e,o,r,a,t])},Jo=function(e,t){var a=n.useRef({values:new Map,options:new Map}),o=n.useMemo(function(){var l=a.current,u=l.values,s=l.options,d=e.map(function(i){if(i.label===void 0){var c;return ue(ue({},i),{},{label:(c=u.get(i.value))===null||c===void 0?void 0:c.label})}return i}),b=new Map,p=new Map;return d.forEach(function(i){b.set(i.value,i),p.set(i.value,t.get(i.value)||s.get(i.value))}),a.current.values=b,a.current.options=p,d},[e,t]),r=n.useCallback(function(l){return t.get(l)||a.current.options.get(l)},[t]);return[o,r]};var Qo=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],Zo=["inputValue"];function ea(e){return!e||fn(e)!=="object"}var ta=n.forwardRef(function(e,t){var a=e.id,o=e.mode,r=e.prefixCls,l=r===void 0?"rc-select":r,u=e.backfill,s=e.fieldNames,d=e.inputValue,b=e.searchValue,p=e.onSearch,i=e.autoClearSearchValue,c=i===void 0?!0:i,f=e.onSelect,w=e.onDeselect,x=e.dropdownMatchSelectWidth,U=x===void 0?!0:x,D=e.filterOption,k=e.filterSort,_=e.optionFilterProp,j=e.optionLabelProp,K=e.options,fe=e.children,ve=e.defaultActiveFirstOption,L=e.menuItemSelectedIcon,B=e.virtual,X=e.listHeight,G=X===void 0?200:X,Y=e.listItemHeight,$=Y===void 0?20:Y,te=e.value,g=e.defaultValue,C=e.labelInValue,q=e.onChange,J=ot(e,Qo),z=Xo(a),be=Tt(o),ge=!!(!K&&fe),Ne=n.useMemo(function(){return D===void 0&&o==="combobox"?!1:D},[D,o]),W=n.useMemo(function(){return wn(s,ge)},[JSON.stringify(s),ge]),F=Nt("",{value:b!==void 0?b:d,postState:function(h){return h||""}}),m=de(F,2),M=m[0],H=m[1],S=zo(K,fe,W,_,j),A=S.valueOptions,ne=S.labelOptions,pe=S.options,O=n.useCallback(function(I){var h=Sn(I);return h.map(function(v){var T,Z,re,He;if(ea(v))T=v;else{var Pe;re=v.key,Z=v.label,T=(Pe=v.value)!==null&&Pe!==void 0?Pe:re}var xe=A.get(T);if(xe){var Ue;Z===void 0&&(Z=xe==null?void 0:xe[j||W.label]),re===void 0&&(re=(Ue=xe==null?void 0:xe.key)!==null&&Ue!==void 0?Ue:T),He=xe==null?void 0:xe.disabled}return{label:Z,value:T,key:re,disabled:He}})},[W,j,A]),Q=Nt(g,{value:te}),le=de(Q,2),oe=le[0],we=le[1],Ee=n.useMemo(function(){var I,h=O(oe);return o==="combobox"&&!(!((I=h[0])===null||I===void 0)&&I.value)?[]:h},[oe,O,o]),he=Jo(Ee,A),ye=de(he,2),ee=ye[0],Se=ye[1],Ce=n.useMemo(function(){if(!o&&ee.length===1){var I=ee[0];if(I.value===null&&(I.label===null||I.label===void 0))return[]}return ee.map(function(h){var v;return ue(ue({},h),{},{label:(v=h.label)!==null&&v!==void 0?v:h.value})})},[o,ee]),Fe=n.useMemo(function(){return new Set(ee.map(function(I){return I.value}))},[ee]);n.useEffect(function(){if(o==="combobox"){var I,h=(I=ee[0])===null||I===void 0?void 0:I.value;h!=null&&H(String(h))}},[ee]);var ke=sn(function(I,h){var v,T=h??I;return v={},se(v,W.value,I),se(v,W.label,T),v}),N=n.useMemo(function(){if(o!=="tags")return pe;var I=Me(pe),h=function(T){return A.has(T)};return Me(ee).sort(function(v,T){return v.value<T.value?-1:1}).forEach(function(v){var T=v.value;h(T)||I.push(ke(T,v.label))}),I},[ke,pe,A,ee,o]),ae=Yo(N,W,M,Ne,_),ie=n.useMemo(function(){return o!=="tags"||!M||ae.some(function(I){return I[_||"value"]===M})?ae:[ke(M)].concat(Me(ae))},[ke,_,o,ae,M]),Oe=n.useMemo(function(){return k?Me(ie).sort(function(I,h){return k(I,h)}):ie},[ie,k]),De=n.useMemo(function(){return So(Oe,{fieldNames:W,childrenAsData:ge})},[Oe,W,ge]),Xe=function(h){var v=O(h);if(we(v),q&&(v.length!==ee.length||v.some(function(re,He){var Pe;return((Pe=ee[He])===null||Pe===void 0?void 0:Pe.value)!==(re==null?void 0:re.value)}))){var T=C?v:v.map(function(re){return re.value}),Z=v.map(function(re){return Ot(Se(re.value))});q(be?T:T[0],be?Z:Z[0])}},at=n.useState(null),Qe=de(at,2),rt=Qe[0],Ze=Qe[1],$e=n.useState(0),lt=de($e,2),Ae=lt[0],ht=lt[1],dt=ve!==void 0?ve:o!=="combobox",it=n.useCallback(function(I,h){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},T=v.source,Z=T===void 0?"keyboard":T;ht(h),u&&o==="combobox"&&I!==null&&Z==="keyboard"&&Ze(String(I))},[u,o]),Ye=function(h,v){var T=function(){var qe,Ke=Se(h);return[C?{label:Ke==null?void 0:Ke[W.label],value:h,key:(qe=Ke==null?void 0:Ke.key)!==null&&qe!==void 0?qe:h}:h,Ot(Ke)]};if(v&&f){var Z=T(),re=de(Z,2),He=re[0],Pe=re[1];f(He,Pe)}else if(!v&&w){var xe=T(),Ue=de(xe,2),ut=Ue[0],bt=Ue[1];w(ut,bt)}},et=sn(function(I,h){var v,T=be?h.selected:!0;T?v=be?[].concat(Me(ee),[I]):[I]:v=ee.filter(function(Z){return Z.value!==I}),Xe(v),Ye(I,T),o==="combobox"?Ze(""):(!Tt||c)&&(H(""),Ze(""))}),me=function(h,v){Xe(h),(v.type==="remove"||v.type==="clear")&&v.values.forEach(function(T){Ye(T.value,!1)})},ft=function(h,v){if(H(h),Ze(null),v.source==="submit"){var T=(h||"").trim();if(T){var Z=Array.from(new Set([].concat(Me(Fe),[T])));Xe(Z),Ye(T,!0),H("")}return}v.source!=="blur"&&(o==="combobox"&&Xe(h),p==null||p(h))},We=function(h){var v=h;o!=="tags"&&(v=h.map(function(Z){var re=ne.get(Z);return re==null?void 0:re.value}).filter(function(Z){return Z!==void 0}));var T=Array.from(new Set([].concat(Me(Fe),Me(v))));Xe(T),T.forEach(function(Z){Ye(Z,!0)})},Te=n.useMemo(function(){var I=B!==!1&&U!==!1;return ue(ue({},S),{},{flattenOptions:De,onActiveValue:it,defaultActiveFirstOption:dt,onSelect:et,menuItemSelectedIcon:L,rawValues:Fe,fieldNames:W,virtual:I,listHeight:G,listItemHeight:$,childrenAsData:ge})},[S,De,it,dt,et,L,Fe,W,B,U,G,$,ge]);return n.createElement(xn.Provider,{value:Te},n.createElement(qo,Ge({},J,{id:z,prefixCls:l,ref:t,omitDomProps:Zo,mode:o,displayValues:Ce,onDisplayValuesChange:me,searchValue:M,onSearch:ft,onSearchSplit:We,dropdownMatchSelectWidth:U,OptionList:Vn,emptyOptions:!De.length,activeValue:rt,activeDescendantId:"".concat(z,"_list_").concat(Ae)})))}),At=ta;At.Option=st;At.OptGroup=gt;const P=Yn(),Je=pn(mn.BTR3);function kt(e){return e.replace(/"/g,'\\"').replace(/\n/g,"\\A")}const na=Be.div`
  width: 100%;
`,oa=Be.div`
  width: 100%;
`,aa=Mt`
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
          margin-right: 4px;
        }
      }

      .ant-tag {
        margin-right: 0;
      }
    }

    > .ant-select-selection-search > .ant-select-selection-search-input {
      height: 100%;
    }
  }

  &.ant-select-single {
    .ant-select-selector {
      padding: 6px 36px 6px 12px;
    }

    &.ant-select-show-arrow {
      .ant-select-selection-placeholder,
      .ant-select-selection-item {
        padding-right: 0;
      }
    }
  }

  &.ant-select-multiple {
    .ant-select-selector {
      padding: 0 64px 0 12px;
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
    right: 12px;
    margin-top: 0;
    transform: none;
    top: 8px;
  }

  > .ant-select-clear {
    opacity: 1;
    right: 32px;
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
`,ra=Mt`
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
        margin-right: 5px;
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
    ${pn(mn.BTM4)}
  }

  ${e=>e.isMultiSelect&&Mt`
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
   margin-right: 4px;
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
`,vt=e=>typeof e!="object"&&typeof e!="number"?{label:e,value:pt(),key:pt()}:e,dn=(e,t,a)=>e==null||!t||a!=="tags"?e:Array.isArray(e)?e.map(vt):[vt(e)],fa=(e,t)=>{if(Array.isArray(t)){let a=t[t.length-1];return typeof a!="object"&&typeof a!="number"&&(a={label:a,value:pt(),key:pt()}),[...e,a]}return t},pa=(e,t)=>{if(Array.isArray(t)&&Array.isArray(e)){const a=[...e];if(t.length===0)return[];const o=a.findIndex((r,l)=>typeof r=="object"?t[l]!==(r==null?void 0:r.value):t[l]!==r);return a.splice(o,1),a}return t},Pt=e=>{for(;e;){if(e instanceof Element&&(window.getComputedStyle(e).overflowY==="auto"||window.getComputedStyle(e).overflowY==="scroll"||window.getComputedStyle(e).overflowX==="auto"||window.getComputedStyle(e).overflowX==="scroll"))return e;e=e.parentNode}return null},ma=()=>{const{t:e}=bn();return y.createElement(Zt,{image:Zt.PRESENTED_IMAGE_SIMPLE,description:y.createElement(Qn,{type:"BTR3"},e("select.empty")),className:"ant-empty-small","data-testid":"select-no-data","kl-id":"empty-data"})},va=()=>y.createElement(Jn,{testId:"select-chevron-icon",klId:"down-icon"}),Ha=()=>y.createElement(fo,{testId:"select-search-icon",klId:"search-icon"}),ga=()=>y.createElement(vn,{mode:"filled",testId:"select-clear-search-icon",klId:"clear-icon"});function _t({onLoad:e}){return n.useEffect(()=>{e()},[e]),y.createElement(gn,{centered:!0,testId:"select-option-loading-more"})}function Lt({cssConfig:e,children:t}){return y.createElement(ua,{cssConfig:e},y.createElement(Zn,null),y.createElement("div",null,t))}const Ft=Be(({className:e})=>y.createElement("div",{className:Le("dropdown-v6-multi-checkbox",e)},y.createElement(Qt,{className:"dropdown-v6-multi-checkbox-unchecked",checked:!1}),y.createElement(Qt,{className:"dropdown-v6-multi-checkbox-checked",checked:!0})))`
  width: 18px;
  height: 22px;
  display: inline-flex;

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }

  .ant-checkbox {
    top: 4px;
  }

  .ant-select-item-option.ant-select-item-option-selected & .dropdown-v6-multi-checkbox-unchecked,
  .ant-select-item-option:not(.ant-select-item-option-selected) & .dropdown-v6-multi-checkbox-checked {
    display: none;
  }
`;try{_t.displayName="LoadingTrigger",_t.__docgenInfo={description:"",displayName:"LoadingTrigger",props:{onLoad:{defaultValue:null,description:"",name:"onLoad",required:!0,type:{name:"() => void"}}}}}catch{}try{Lt.displayName="LoadingErrorContent",Lt.__docgenInfo={description:"",displayName:"LoadingErrorContent",props:{cssConfig:{defaultValue:null,description:"",name:"cssConfig",required:!0,type:{name:"SelectColorConfig"}},children:{defaultValue:null,description:"",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}try{vt.displayName="createUniqueSelectElementFromLabel",vt.__docgenInfo={description:"",displayName:"createUniqueSelectElementFromLabel",props:{key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"RawValue"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}}}}}catch{}try{Pt.displayName="findScrollableParent",Pt.__docgenInfo={description:"",displayName:"findScrollableParent",props:{}}}catch{}try{Ft.displayName="MultiSelectCheckBox",Ft.__docgenInfo={description:"",displayName:"MultiSelectCheckBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const ha="_option_ver45_1",ba="_optionAction_ver45_1",wa="_optionActions_ver45_5",Dt={option:ha,optionAction:ba,optionActions:wa},ya=e=>eo({...e,mode:void 0},{componentName:"select",defaultValues:{}}),Sa=16,Ca=22,Ia=Be(At).withConfig({shouldForwardProp:e=>!["cssConfig","validationStatus"].includes(e)})`${aa}`,Ea=e=>y.createElement(hn,{size:"small"},`+ ${e.length} ...`),kn=e=>typeof e=="string"||typeof e=="number"?String(e):y.isValidElement(e)&&e.props.children?y.Children.toArray(e.props.children).map(kn).join(""):"",nt=n.forwardRef((e,t)=>{const{children:a,hasMore:o,onLoadMore:r,options:l,cssConfig:u,...s}=to(ya(e)),d=n.useMemo(()=>yo(()=>{r==null||r()}),[r]),b=e.mode==="multiple"||e.mode==="tags";function p(i){var w,x,U;if(i.options)return y.createElement(gt,{key:i.value,label:i.label},i.options.map(p));const c=(w=i.actions)!=null&&w.length?i.actions.length*Sa+i.actions.length*4:0,f=(b?Ca:0)+c;return y.createElement(st,{...i,key:i.value,"data-value":i.value,label:typeof i.label=="string"?i.label.trim():i.label,"data-label":i.dataLabel??kn(i.label).trim(),role:"option",className:Dt.option},y.createElement(sa,null,b&&y.createElement(Ft,null),y.createElement(da,{reservedSpace:f},y.createElement(Yt,null,i.label),i.description&&y.createElement(ca,{cssConfig:u},y.createElement(Yt,null,i.description)))),(x=i.actions)!=null&&x.length?y.createElement(ao,{gap:"dependent",className:Dt.optionActions,wrap:"nowrap"},(U=i.actions)==null?void 0:U.map(({key:D,icon:k,onClick:_},j)=>y.createElement(vn,{key:D??j,icon:k,className:Dt.optionAction,onClick:K=>{K.stopPropagation(),_()}}))):null)}return y.createElement(Dn,{...s,ref:t,mode:e.mode,cssConfig:u},a||(l==null?void 0:l.map(p)),o&&y.createElement(st,{key:"loading-more-option",disabled:!0},y.createElement(_t,{onLoad:d})))}),Dn=n.forwardRef(({allowNonUniqueValues:e,autoClearSearchValue:t=!0,autoFocus:a=!1,children:o,className:r,closeOnParentScroll:l,cssConfig:u,defaultValue:s,disabled:d=!1,dropdownClassName:b,dropdownMaxHeight:p,filterOption:i,getPopupContainer:c,loading:f=!1,loadingError:w,mode:x,notFoundContent:U,onChange:D,onDropdownVisibleChange:k,onSearch:_,onClear:j,open:K,optionFilterProp:fe="label",optionLabelProp:ve="label",placement:L="bottomLeft",readOnly:B,renderDropdown:X,renderFooter:G,renderHeader:Y,showArrow:$=!0,showSearch:te=!1,testAttributes:g,usePortal:C,validationStatus:q="default",value:J,virtual:z=!1,...be},ge)=>{ro();const Ne=no(u,ia,nt),W=oo(),{t:F}=bn(),[m,M]=n.useState(()=>dn(s,e,x)),H=n.useMemo(()=>dn(J,e,x),[J]),S=H!==void 0?H:m,A=x==="multiple"||x==="tags",[ne,pe]=n.useState(!!K),O=n.useRef(null),Q=n.useCallback(N=>{var ae;(ae=N==null?void 0:N.target)!=null&&ae.closest(".dropdown-custom")||l&&(O!=null&&O.current)&&pe(!1)},[l,O]),[le,oe]=n.useState(""),we=N=>{t||N!==""?(oe(N),_==null||_(N)):_==null||_(le)},Ee=()=>{oe(""),j==null||j()},he=N=>{te&&!t&&N.code==="Backspace"&&le.length===1&&Ee()},ye=()=>{t&&oe("")},ee=n.useCallback((N,ae)=>{let ie=N;e&&Array.isArray(ie)&&(Array.isArray(S)&&S.length<ie.length?ie=fa(S,N):ie=pa(S,N)),M(ie),t&&oe(""),D==null||D(ie,ae)},[D,S,e,t]);n.useEffect(()=>{if(!l)return;const N=Pt(O==null?void 0:O.current);if(N instanceof Element)return N.addEventListener("scroll",Q),N.addEventListener("wheel",Q),()=>{N.removeEventListener("wheel",Q),N.removeEventListener("scroll",Q)}},[l,K,O,Q]);const Se=n.useCallback(N=>{const ae=g!=null&&g["data-testid"]?`${g==null?void 0:g["data-testid"]}-select-dropdown`:"select-dropdown",ie=g!=null&&g["kl-id"]?`${g==null?void 0:g["kl-id"]}-select-dropdown`:"select-dropdown";return y.createElement(la,{cssConfig:u,"data-testid":ae,"kl-id":ie,isMultiSelect:A,t:F},f?y.createElement(gn,{centered:!0,testId:"select-loader",klId:"loader"}):y.createElement(y.Fragment,null,Y&&y.createElement(y.Fragment,null,Y(),y.createElement(Jt,{mode:"light"})),X?X(N):N,G&&y.createElement(y.Fragment,null,y.createElement(Jt,{mode:"light"}),G())))},[G,Y,f,u,A,X,g]),Ce=n.useRef(null),Fe=n.useCallback(N=>{if(N&&Ce.current){const ae=Array.isArray(S);if(!S||ae&&!S.length)Ce.current.scrollTo(0);else if(ae){const ie=[...S].sort((Oe,De)=>De-Oe).pop();Ce.current.scrollTo(ie??0)}}if(k==null||k(N),l){pe(N);return}},[l,k,S]),ke=w&&y.createElement(Lt,{cssConfig:u},w);return y.createElement(na,{ref:ge},y.createElement(oa,{ref:O},y.createElement(Ia,{ref:Ce,allowClear:A,"aria-disabled":d,autoClearSearchValue:t,autoFocus:a,className:Le(r,{"kl6-select-readonly":B}),clearIcon:y.createElement(ga,null),cssConfig:u,"data-validationstatus":q,"data-value":S,disabled:d||B,dropdownAlign:{offset:[0,L!=null&&L.includes("top")?-8:8]},dropdownClassName:Le("dropdown-custom",b,Ne,{"dropdown-loading":f}),dropdownRender:Se,filterOption:i,getPopupContainer:c??W.getPopupContainer??(N=>C??W.usePortal?document.body:N.parentElement),listHeight:p??256,loading:f,maxTagPlaceholder:Ea,menuItemSelectedIcon:null,mode:x,notFoundContent:ke||U||y.createElement(ma,null),onBlurCapture:ye,onChange:ee,onDropdownVisibleChange:Fe,onSearch:we,onClear:Ee,onKeyDown:he,open:l?ne:K,optionFilterProp:fe,optionLabelProp:ve,placement:L,prefixCls:"ant-select",searchValue:le,showArrow:te||$,showSearch:te,inputIcon:y.createElement(va,null),tagRender:N=>y.createElement(hn,{...N,disabled:d,readOnly:B,size:"small"}),transitionName:"ant-slide-up",validationStatus:q,value:S,virtual:z,...be,...g},w?null:o)))});Dn.displayName="SelectView";nt.displayName="Select";nt.Option=st;nt.OptGroup=gt;try{nt.displayName="Select",nt.__docgenInfo={description:"",displayName:"Select",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},renderFooter:{defaultValue:null,description:"Footer renderer",name:"renderFooter",required:!1,type:{name:"(() => Element)"}},renderHeader:{defaultValue:null,description:"Header renderer",name:"renderHeader",required:!1,type:{name:"(() => Element)"}},renderDropdown:{defaultValue:null,description:"Entire dropdown renderer. This prop is directly passing to Antd Select",name:"renderDropdown",required:!1,type:{name:"((menu: ReactElement<any, string | JSXElementConstructor<any>>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:"Set mode of Select",name:"mode",required:!1,type:{name:"enum",value:[{value:'"tags"'},{value:'"multiple"'}]}},allowClear:{defaultValue:null,description:"Show clear button",name:"allowClear",required:!1,type:{name:"boolean"}},autoClearSearchValue:{defaultValue:{value:"true"},description:"Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags",name:"autoClearSearchValue",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"false"},description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Initial selected option",name:"defaultValue",required:!1,type:{name:"LabelValue | LabelValue[]"}},disabled:{defaultValue:{value:"false"},description:"Whether disabled select",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},validationStatus:{defaultValue:{value:"default"},description:"Validation status",name:"validationStatus",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"error"'}]}},dropdownClassName:{defaultValue:null,description:"The class name of dropdown menu",name:"dropdownClassName",required:!1,type:{name:"string"}},dropdownMaxHeight:{defaultValue:null,description:"",name:"dropdownMaxHeight",required:!1,type:{name:"number"}},filterOption:{defaultValue:null,description:`If true, filter options by input, if function,
filter options against it. The function will receive two arguments,
inputValue and option, if the function returns true, the option will be included in the filtered set;
Otherwise, it will be excluded. By default filtered with label and inputValue.`,name:"filterOption",required:!1,type:{name:"boolean | ((input: string, option: OptionProp) => boolean)"}},filterSort:{defaultValue:null,description:"Sort function for search options sorting, see Array.sort's compareFunction",name:"filterSort",required:!1,type:{name:"((optionA: OptionProp, optionB: OptionProp) => number)"}},getPopupContainer:{defaultValue:null,description:"Parent Node which the selector should be rendered to",name:"getPopupContainer",required:!1,type:{name:"((node: HTMLElement) => HTMLElement)"}},closeOnParentScroll:{defaultValue:null,description:"If set to true, the select container will close when the parent scrollable element is scrolled",name:"closeOnParentScroll",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Indicate loading state",name:"loading",required:!1,type:{name:"boolean"}},loadingError:{defaultValue:null,description:"Loading error content showing in the dropdown. Overrides notFoundContent, options and notFoundContent props",name:"loadingError",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},maxTagCount:{defaultValue:null,description:"Max tag count to show. responsive will cost render performance",name:"maxTagCount",required:!1,type:{name:'number | "responsive"'}},maxTagPlaceholder:{defaultValue:null,description:"Placeholder for not showing tags",name:"maxTagPlaceholder",required:!1,type:{name:"ReactNode | ((omittedValues: DisplayValueType[]) => ReactNode)"}},maxTagTextLength:{defaultValue:null,description:"Max tag text length to show",name:"maxTagTextLength",required:!1,type:{name:"number"}},notFoundContent:{defaultValue:null,description:"Specify content to show when no result matches",name:"notFoundContent",required:!1,type:{name:"ReactNode"}},open:{defaultValue:null,description:"Controlled open state of dropdown",name:"open",required:!1,type:{name:"boolean"}},optionFilterProp:{defaultValue:{value:"label"},description:"Which prop value of option will be used for filter if filterOption is true. If options is set, it should be set to label",name:"optionFilterProp",required:!1,type:{name:"string"}},optionLabelProp:{defaultValue:{value:"label"},description:"Which prop value of option will render as content of select",name:"optionLabelProp",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"Select options. Will get better perf than jsx definition",name:"options",required:!1,type:{name:"OptionType[]"}},placeholder:{defaultValue:null,description:"Placeholder of select",name:"placeholder",required:!1,type:{name:"ReactNode"}},placement:{defaultValue:{value:"bottomLeft"},description:"The position where the selection box pops up",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottomRight"'}]}},searchValue:{defaultValue:null,description:'The current input "search" text',name:"searchValue",required:!1,type:{name:"string"}},showArrow:{defaultValue:{value:"true"},description:"Whether to show the drop-down arrow",name:"showArrow",required:!1,type:{name:"boolean"}},showSearch:{defaultValue:{value:"false"},description:"Whether select is searchable",name:"showSearch",required:!1,type:{name:"boolean"}},tokenSeparators:{defaultValue:null,description:'Separator used to tokenize, only applies when mode="tags"',name:"tokenSeparators",required:!1,type:{name:"string[]"}},allowNonUniqueValues:{defaultValue:null,description:`Allowed add non unique values in tag mode. In this mode the original value lies in title field.
Value of any element have LabeledValue type even if you give it a set of rings
['aa', 'aa'] => [{label: 'aa', value: {uniqueId}, {label: 'aa', value: {uniqueId2}}]`,name:"allowNonUniqueValues",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Current selected option (considered as a immutable array)",name:"value",required:!1,type:{name:"LabelValue | LabelValue[]"}},virtual:{defaultValue:{value:"false"},description:"Disable virtual scroll when set to false",name:"virtual",required:!1,type:{name:"boolean"}},hasMore:{defaultValue:null,description:"Show spinner at the end of options",name:"hasMore",required:!1,type:{name:"boolean"}},onLoadMore:{defaultValue:null,description:`Called when the user scrolls to the end of options. Using with *hasMore* prop
Note: Does not work if the *virtual* prop is false
Note 2: Trigger the function only once. Make sure it properly cached with useCallback`,name:"onLoadMore",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:null,description:"Called when blur",name:"onBlur",required:!1,type:{name:"FocusEventHandler"}},onChange:{defaultValue:null,description:"Called when select an option or input value change",name:"onChange",required:!1,type:{name:"((value: any, option: OptionProp | OptionProp[]) => void)"}},onClear:{defaultValue:null,description:"Called when clear",name:"onClear",required:!1,type:{name:"(() => void)"}},onDeselect:{defaultValue:null,description:`Called when an option is deselected, param is the selected option's value.
Only called for multiple or tags, effective in multiple or tags mode only`,name:"onDeselect",required:!1,type:{name:"((value: SelectValue, option: OptionProp | OptionProp[]) => void)"}},onDropdownVisibleChange:{defaultValue:null,description:"Called when dropdown opens",name:"onDropdownVisibleChange",required:!1,type:{name:"((open: boolean) => void)"}},onFocus:{defaultValue:null,description:"Called when focused",name:"onFocus",required:!1,type:{name:"FocusEventHandler"}},onInputKeyDown:{defaultValue:null,description:"Called when key is pressed",name:"onInputKeyDown",required:!1,type:{name:"(() => void)"}},onMouseEnter:{defaultValue:null,description:"Called when mouse enter",name:"onMouseEnter",required:!1,type:{name:"(() => void)"}},onMouseLeave:{defaultValue:null,description:"Called when mouse leaves",name:"onMouseLeave",required:!1,type:{name:"(() => void)"}},onPopupScroll:{defaultValue:null,description:"Called when dropdown scrolls",name:"onPopupScroll",required:!1,type:{name:"(() => void)"}},onSearch:{defaultValue:null,description:"Callback function that is fired when input changed",name:"onSearch",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"Called when an option is selected, the params are option's value (or key) and option instance",name:"onSelect",required:!1,type:{name:"((value: SelectValue, option: OptionProp | OptionProp[]) => void)"}},labelInValue:{defaultValue:null,description:"Whether to embed label in value, turn the format of value from string to { value: string, label: ReactNode }",name:"labelInValue",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tagRender:{defaultValue:null,description:"Customize tag render, only applies when mode is set to multiple or tags",name:"tagRender",required:!1,type:{name:"((props: CustomTagProps) => ReactElement<any, string | JSXElementConstructor<any>>)"}},dropdownStyle:{defaultValue:null,description:"The style of dropdown menu",name:"dropdownStyle",required:!1,type:{name:"CSSProperties"}},usePortal:{defaultValue:null,description:"Shorthand getPopupContainer={() => document.body}",name:"usePortal",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{va as C,ma as E,Ft as M,nt as S,Ha as a,ga as b,Ea as m,aa as s};
