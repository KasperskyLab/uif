import{_ as ie,aX as Ot,bl as Tt,n as Ne,r as t,i as tn,l as Xe,j as qe,k as de,X as $t,a as fe,bd as _t,bm as qt,aZ as Ft,p as Zn,bn as Lt,b9 as Vt,m as At,H as Je,a1 as Kt,a2 as et,aw as nt,a0 as In,R as S,ag as jt,T as Bt,A as Wt,aR as zt,a5 as Ht,u as Ut,aM as Gt,av as Xt}from"./iframe-DGvJ380d.js";import{T as Yt}from"./TextReducer-ClEwKs4l.js";import{u as Jt}from"./useGlobalStyles-BnCND3-l.js";import{D as Kn}from"./Divider-EZz3gDRj.js";import{L as tt}from"./Loader-CMdXHI8c.js";import{T as ot}from"./Tag-IWItRl7b.js";import{K as I,u as En}from"./KeyCode-9RiNU2cC.js";import{T as Qt}from"./index-DiXbnD1z.js";import{p as Dn}from"./pickAttrs-B2CwFqja.js";import{F as Zt}from"./Overflow-C7Z2yQ6d.js";import{o as eo,E as jn}from"./type-fFl6OLJD.js";import{L as no}from"./List-XBVItk64.js";import{C as Bn}from"./Checkbox-Vth7gTSI.js";import{I as to}from"./IconSearch-uXvsviOj.js";import{r as oo,u as ro}from"./v4-BoP187Zn.js";import{u as rt}from"./useTranslation-DicaTb9e.js";let Wn,yn,Sn=0,xn=0;function mn(e,n,r){let o=0;const a=new Array(16);e=e||{};let i=e.node||Wn,l=e.clockseq!==void 0?e.clockseq:yn;if(i==null||l==null){const c=e.random||(e.rng||oo)();i==null&&(i=Wn=[c[0]|1,c[1],c[2],c[3],c[4],c[5]]),l==null&&(l=yn=(c[6]<<8|c[7])&16383)}let s=e.msecs!==void 0?e.msecs:Date.now(),p=e.nsecs!==void 0?e.nsecs:xn+1;const g=s-Sn+(p-xn)/1e4;if(g<0&&e.clockseq===void 0&&(l=l+1&16383),(g<0||s>Sn)&&e.nsecs===void 0&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Sn=s,xn=p,yn=l,s+=122192928e5;const f=((s&268435455)*1e4+p)%4294967296;a[o++]=f>>>24&255,a[o++]=f>>>16&255,a[o++]=f>>>8&255,a[o++]=f&255;const u=s/4294967296*1e4&268435455;a[o++]=u>>>8&255,a[o++]=u&255,a[o++]=u>>>24&15|16,a[o++]=u>>>16&255,a[o++]=l>>>8|128,a[o++]=l&255;for(let c=0;c<6;++c)a[o+c]=i[c];return n||ro(a)}function zn(e,n){var r=e.key,o;return"value"in e&&(o=e.value),r??(o!==void 0?o:"rc-index-key-".concat(n))}function at(e,n){var r=e||{},o=r.label,a=r.value,i=r.options;return{label:o||(n?"children":"label"),value:a||"value",options:i||"options"}}function ao(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.fieldNames,o=n.childrenAsData,a=[],i=at(r,!1),l=i.label,s=i.value,p=i.options;function g(f,u){f.forEach(function(c){var m=c[l];if(u||!(p in c)){var d=c[s];a.push({key:zn(c,a.length),groupOption:u,data:c,label:m,value:d})}else{var T=m;T===void 0&&o&&(T=c.label),a.push({key:zn(c,a.length),group:!0,data:c,label:T}),g(c[p],!0)}})}return g(e,!1),a}function Pn(e){var n=ie({},e);return"props"in n||Object.defineProperty(n,"props",{get:function(){return Ot(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),n}}),n}function io(e,n){if(!n||!n.length)return null;var r=!1;function o(i,l){var s=Tt(l),p=s[0],g=s.slice(1);if(!p)return[i];var f=i.split(p);return r=r||f.length>1,f.reduce(function(u,c){return[].concat(Ne(u),Ne(o(c,g)))},[]).filter(function(u){return u})}var a=o(e,n);return r?a:null}var lo=["prefixCls","disabled","visible","children","popupElement","containerWidth","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],co=function(n){var r=n===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:r,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:r,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:r,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:r,adjustY:1}}}},so=function(n,r){var o=n.prefixCls;n.disabled;var a=n.visible,i=n.children,l=n.popupElement,s=n.containerWidth,p=n.animation,g=n.transitionName,f=n.dropdownStyle,u=n.dropdownClassName,c=n.direction,m=c===void 0?"ltr":c,d=n.placement,T=n.dropdownMatchSelectWidth,B=n.dropdownRender,q=n.dropdownAlign,D=n.getPopupContainer,K=n.empty,H=n.getTriggerDOMNode,W=n.onPopupVisibleChange,oe=n.onPopupMouseEnter,ve=tn(n,lo),F="".concat(o,"-dropdown"),A=l;B&&(A=B(l));var Y=t.useMemo(function(){return co(T)},[T]),X=p?"".concat(F,"-").concat(p):g,J=t.useRef(null);t.useImperativeHandle(r,function(){return{getPopupElement:function(){return J.current}}});var $=ie({minWidth:s},f);return typeof T=="number"?$.width=T:T&&($.width=s),t.createElement(Qt,Xe({},ve,{showAction:W?["click"]:[],hideAction:W?["click"]:[],popupPlacement:d||(m==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:Y,prefixCls:F,popupTransitionName:X,popup:t.createElement("div",{ref:J,onMouseEnter:oe},A),popupAlign:q,popupVisible:a,getPopupContainer:D,popupClassName:qe(u,de({},"".concat(F,"-empty"),K)),popupStyle:$,getTriggerDOMNode:H,onPopupVisibleChange:W}),i)},it=t.forwardRef(so);it.displayName="SelectTrigger";var vn=function(n){var r=n.className,o=n.customizeIcon,a=n.customizeIconProps,i=n.onMouseDown,l=n.onClick,s=n.children,p;return typeof o=="function"?p=o(a):p=o,t.createElement("span",{className:r,onMouseDown:function(f){f.preventDefault(),i&&i(f)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:l,"aria-hidden":!0},p!==void 0?p:t.createElement("span",{className:qe(r.split(/\s+/).map(function(g){return"".concat(g,"-icon")}))},s))},uo=function(n,r){var o,a,i=n.prefixCls,l=n.id,s=n.inputElement,p=n.disabled,g=n.tabIndex,f=n.autoFocus,u=n.autoComplete,c=n.editable,m=n.activeDescendantId,d=n.value,T=n.maxLength,B=n.onKeyDown,q=n.onMouseDown,D=n.onChange,K=n.onPaste,H=n.onCompositionStart,W=n.onCompositionEnd,oe=n.open,ve=n.attrs,F=s||t.createElement("input",null),A=F,Y=A.ref,X=A.props,J=X.onKeyDown,$=X.onChange,le=X.onMouseDown,N=X.onCompositionStart,v=X.onCompositionEnd,L=X.style;return F=t.cloneElement(F,ie(ie(ie({type:"search"},X),{},{id:l,ref:$t(r,Y),disabled:p,tabIndex:g,autoComplete:u||"off",autoFocus:f,className:qe("".concat(i,"-selection-search-input"),(o=F)===null||o===void 0||(a=o.props)===null||a===void 0?void 0:a.className),role:"combobox","aria-expanded":oe,"aria-haspopup":"listbox","aria-owns":"".concat(l,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(l,"_list"),"aria-activedescendant":m},ve),{},{value:c?d:"",maxLength:T,readOnly:!c,unselectable:c?null:"on",style:ie(ie({},L),{},{opacity:c?null:0}),onKeyDown:function(z){B(z),J&&J(z)},onMouseDown:function(z){q(z),le&&le(z)},onChange:function(z){D(z),$&&$(z)},onCompositionStart:function(z){H(z),N&&N(z)},onCompositionEnd:function(z){W(z),v&&v(z)},onPaste:K})),F},Mn=t.forwardRef(uo);Mn.displayName="Input";function lt(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}var fo=typeof window<"u"&&window.document&&window.document.documentElement,po=fo;function mo(e,n){po?t.useLayoutEffect(e,n):t.useEffect(e,n)}var Hn=function(n){n.preventDefault(),n.stopPropagation()},vo=function(n){var r=n.id,o=n.prefixCls,a=n.values,i=n.open,l=n.searchValue,s=n.inputRef,p=n.placeholder,g=n.disabled,f=n.mode,u=n.showSearch,c=n.autoFocus,m=n.autoComplete,d=n.activeDescendantId,T=n.tabIndex,B=n.removeIcon,q=n.maxTagCount,D=n.maxTagTextLength,K=n.maxTagPlaceholder,H=K===void 0?function(j){return"+ ".concat(j.length," ...")}:K,W=n.tagRender,oe=n.onToggleOpen,ve=n.onRemove,F=n.onInputChange,A=n.onInputPaste,Y=n.onInputKeyDown,X=n.onInputMouseDown,J=n.onInputCompositionStart,$=n.onInputCompositionEnd,le=t.useRef(null),N=t.useState(0),v=fe(N,2),L=v[0],Q=v[1],z=t.useState(!1),be=fe(z,2),ge=be[0],Oe=be[1],U="".concat(o,"-selection"),O=i||f==="tags"?l:"",h=f==="tags"||u&&(i||ge);mo(function(){Q(le.current.scrollWidth)},[O]);function P(j,V,re,ae,ce){return t.createElement("span",{className:qe("".concat(U,"-item"),de({},"".concat(U,"-item-disabled"),re)),title:typeof j=="string"||typeof j=="number"?j.toString():void 0},t.createElement("span",{className:"".concat(U,"-item-content")},V),ae&&t.createElement(vn,{className:"".concat(U,"-item-remove"),onMouseDown:Hn,onClick:ce,customizeIcon:B},"×"))}function G(j,V,re,ae,ce){var ke=function(we){Hn(we),oe(!i)};return t.createElement("span",{onMouseDown:ke},W({label:V,value:j,disabled:re,closable:ae,onClose:ce}))}function _(j){var V=j.disabled,re=j.label,ae=j.value,ce=!g&&!V,ke=re;if(typeof D=="number"&&(typeof re=="string"||typeof re=="number")){var pe=String(ke);pe.length>D&&(ke="".concat(pe.slice(0,D),"..."))}var we=function(Se){Se&&Se.stopPropagation(),ve(j)};return typeof W=="function"?G(ae,ke,V,ce,we):P(re,ke,V,ce,we)}function x(j){var V=typeof H=="function"?H(j):H;return P(V,V,!1)}var Z=t.createElement("div",{className:"".concat(U,"-search"),style:{width:L},onFocus:function(){Oe(!0)},onBlur:function(){Oe(!1)}},t.createElement(Mn,{ref:s,open:i,prefixCls:o,id:r,inputElement:null,disabled:g,autoFocus:c,autoComplete:m,editable:h,activeDescendantId:d,value:O,onKeyDown:Y,onMouseDown:X,onChange:F,onPaste:A,onCompositionStart:J,onCompositionEnd:$,tabIndex:T,attrs:Dn(n,!0)}),t.createElement("span",{ref:le,className:"".concat(U,"-search-mirror"),"aria-hidden":!0},O," ")),he=t.createElement(Zt,{prefixCls:"".concat(U,"-overflow"),data:a,renderItem:_,renderRest:x,suffix:Z,itemKey:"key",maxCount:q});return t.createElement(t.Fragment,null,he,!a.length&&!O&&t.createElement("span",{className:"".concat(U,"-placeholder")},p))},go=function(n){var r=n.inputElement,o=n.prefixCls,a=n.id,i=n.inputRef,l=n.disabled,s=n.autoFocus,p=n.autoComplete,g=n.activeDescendantId,f=n.mode,u=n.open,c=n.values,m=n.placeholder,d=n.tabIndex,T=n.showSearch,B=n.searchValue,q=n.activeValue,D=n.maxLength,K=n.onInputKeyDown,H=n.onInputMouseDown,W=n.onInputChange,oe=n.onInputPaste,ve=n.onInputCompositionStart,F=n.onInputCompositionEnd,A=t.useState(!1),Y=fe(A,2),X=Y[0],J=Y[1],$=f==="combobox",le=$||T,N=c[0],v=B||"";$&&q&&!X&&(v=q),t.useEffect(function(){$&&J(!1)},[$,q]);var L=f!=="combobox"&&!u&&!T?!1:!!v,Q=N&&(typeof N.label=="string"||typeof N.label=="number")?N.label.toString():void 0,z=function(){if(N)return null;var ge=L?{visibility:"hidden"}:void 0;return t.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:ge},m)};return t.createElement(t.Fragment,null,t.createElement("span",{className:"".concat(o,"-selection-search")},t.createElement(Mn,{ref:i,prefixCls:o,id:a,open:u,inputElement:r,disabled:l,autoFocus:s,autoComplete:p,editable:le,activeDescendantId:g,value:v,onKeyDown:K,onMouseDown:H,onChange:function(ge){J(!0),W(ge)},onPaste:oe,onCompositionStart:ve,onCompositionEnd:F,tabIndex:d,attrs:Dn(n,!0),maxLength:$?D:void 0})),!$&&N&&!L&&t.createElement("span",{className:"".concat(o,"-selection-item"),title:Q},N.label),z())};function ct(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,n=t.useRef(null),r=t.useRef(null);t.useEffect(function(){return function(){window.clearTimeout(r.current)}},[]);function o(a){(a||n.current===null)&&(n.current=a),window.clearTimeout(r.current),r.current=window.setTimeout(function(){n.current=null},e)}return[function(){return n.current},o]}function ho(e){return![I.ESC,I.SHIFT,I.BACKSPACE,I.TAB,I.WIN_KEY,I.ALT,I.META,I.WIN_KEY_RIGHT,I.CTRL,I.SEMICOLON,I.EQUALS,I.CAPS_LOCK,I.CONTEXT_MENU,I.F1,I.F2,I.F3,I.F4,I.F5,I.F6,I.F7,I.F8,I.F9,I.F10,I.F11,I.F12].includes(e)}var bo=function(n,r){var o=t.useRef(null),a=t.useRef(!1),i=n.prefixCls,l=n.open,s=n.mode,p=n.showSearch,g=n.tokenWithEnter,f=n.onSearch,u=n.onSearchSubmit,c=n.onToggleOpen,m=n.onInputKeyDown,d=n.domRef;t.useImperativeHandle(r,function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}});var T=ct(0),B=fe(T,2),q=B[0],D=B[1],K=function(v){var L=v.which;(L===I.UP||L===I.DOWN)&&v.preventDefault(),m&&m(v),L===I.ENTER&&s==="tags"&&!a.current&&!l&&(u==null||u(v.target.value)),ho(L)&&c(!0)},H=function(){D(!0)},W=t.useRef(null),oe=function(v){f(v,!0,a.current)!==!1&&c(!0)},ve=function(){a.current=!0},F=function(v){a.current=!1,s!=="combobox"&&oe(v.target.value)},A=function(v){var L=v.target.value;if(g&&W.current&&/[\r\n]/.test(W.current)){var Q=W.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");L=L.replace(Q,W.current)}W.current=null,oe(L)},Y=function(v){var L=v.clipboardData,Q=L.getData("text");W.current=Q},X=function(v){var L=v.target;if(L!==o.current){var Q=document.body.style.msTouchAction!==void 0;Q?setTimeout(function(){o.current.focus()}):o.current.focus()}},J=function(v){var L=q();v.target!==o.current&&!L&&v.preventDefault(),(s!=="combobox"&&(!p||!L)||!l)&&(l&&f("",!0,!1),c())},$={inputRef:o,onInputKeyDown:K,onInputMouseDown:H,onInputChange:A,onInputPaste:Y,onInputCompositionStart:ve,onInputCompositionEnd:F},le=s==="multiple"||s==="tags"?t.createElement(vo,Xe({},n,$)):t.createElement(go,Xe({},n,$));return t.createElement("div",{ref:d,className:"".concat(i,"-selector"),onClick:X,onMouseDown:J},le)},st=t.forwardRef(bo);st.displayName="Selector";function wo(e,n,r){var o=t.useRef(null);o.current={open:n,triggerOpen:r},t.useEffect(function(){function a(i){var l=i.target;l.shadowRoot&&i.composed&&(l=i.composedPath()[0]||l),o.current.open&&e().filter(function(s){return s}).every(function(s){return!s.contains(l)&&s!==l})&&o.current.triggerOpen(!1)}return window.addEventListener("mousedown",a),function(){return window.removeEventListener("mousedown",a)}},[])}function yo(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,n=t.useState(!1),r=fe(n,2),o=r[0],a=r[1],i=t.useRef(null),l=function(){window.clearTimeout(i.current)};t.useEffect(function(){return l},[]);var s=function(g,f){l(),i.current=window.setTimeout(function(){a(g),f&&f()},e)};return[o,s,l]}var ut=t.createContext(null);function So(){return t.useContext(ut)}var xo=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","showArrow","inputIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],ko=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function Rn(e){return e==="tags"||e==="multiple"}var Co=t.forwardRef(function(e,n){var r,o,a=e.id,i=e.prefixCls,l=e.className,s=e.showSearch,p=e.tagRender,g=e.direction,f=e.omitDomProps,u=e.displayValues,c=e.onDisplayValuesChange,m=e.emptyOptions,d=e.notFoundContent,T=d===void 0?"Not Found":d,B=e.onClear,q=e.mode,D=e.disabled,K=e.loading,H=e.getInputElement,W=e.getRawInputElement,oe=e.open,ve=e.defaultOpen,F=e.onDropdownVisibleChange,A=e.activeValue,Y=e.onActiveValueChange,X=e.activeDescendantId,J=e.searchValue,$=e.onSearch,le=e.onSearchSplit,N=e.tokenSeparators,v=e.allowClear,L=e.showArrow,Q=e.inputIcon,z=e.clearIcon,be=e.OptionList,ge=e.animation,Oe=e.transitionName,U=e.dropdownStyle,O=e.dropdownClassName,h=e.dropdownMatchSelectWidth,P=e.dropdownRender,G=e.dropdownAlign,_=e.placement,x=e.getPopupContainer,Z=e.showAction,he=Z===void 0?[]:Z,j=e.onFocus,V=e.onBlur,re=e.onKeyUp,ae=e.onKeyDown,ce=e.onMouseDown,ke=tn(e,xo),pe=Rn(q),we=(s!==void 0?s:pe)||q==="combobox",ne=ie({},ke);ko.forEach(function(C){delete ne[C]}),f==null||f.forEach(function(C){delete ne[C]});var Se=t.useState(!1),Ee=fe(Se,2),Pe=Ee[0],De=Ee[1];t.useEffect(function(){De(_t())},[]);var Ve=t.useRef(null),E=t.useRef(null),ye=t.useRef(null),se=t.useRef(null),Me=t.useRef(null),Ae=yo(),on=fe(Ae,3),Qe=on[0],rn=on[1],Ze=on[2];t.useImperativeHandle(n,function(){var C,k;return{focus:(C=se.current)===null||C===void 0?void 0:C.focus,blur:(k=se.current)===null||k===void 0?void 0:k.blur,scrollTo:function(Ie){var ue;return(ue=Me.current)===null||ue===void 0?void 0:ue.scrollTo(Ie)}}});var Fe=t.useMemo(function(){var C;if(q!=="combobox")return J;var k=(C=u[0])===null||C===void 0?void 0:C.value;return typeof k=="string"||typeof k=="number"?String(k):""},[J,q,u]),an=q==="combobox"&&typeof H=="function"&&H()||null,Ke=typeof W=="function"&&W(),hn=qt(E,Ke==null||(r=Ke.props)===null||r===void 0?void 0:r.ref),fn=En(void 0,{defaultValue:ve,value:oe}),ln=fe(fn,2),Ye=ln[0],en=ln[1],me=Ye,pn=!T&&m;(D||pn&&me&&q==="combobox")&&(me=!1);var Be=pn?!1:me,Te=t.useCallback(function(C){var k=C!==void 0?C:!me;me!==k&&!D&&(en(k),F==null||F(k))},[D,me,en,F]),y=t.useMemo(function(){return(N||[]).some(function(C){return[`
`,`\r
`].includes(C)})},[N]),w=function(k,xe,Ie){var ue=!0,Re=k;Y==null||Y(null);var _e=Ie?null:io(k,N);return q!=="combobox"&&_e&&(Re="",le==null||le(_e),Te(!1),ue=!1),$&&Fe!==Re&&$(Re,{source:xe?"typing":"effect"}),ue},b=function(k){!k||!k.trim()||$(k,{source:"submit"})};t.useEffect(function(){!me&&!pe&&q!=="combobox"&&w("",!1,!1)},[me]),t.useEffect(function(){Ye&&D&&en(!1),D&&rn(!1)},[D]);var M=ct(),ee=fe(M,2),te=ee[0],We=ee[1],$e=function(k){var xe=te(),Ie=k.which;if(Ie===I.ENTER&&(q!=="combobox"&&k.preventDefault(),me||Te(!0)),We(!!Fe),Ie===I.BACKSPACE&&!xe&&pe&&!Fe&&u.length){for(var ue=Ne(u),Re=null,_e=ue.length-1;_e>=0;_e-=1){var sn=ue[_e];if(!sn.disabled){ue.splice(_e,1),Re=sn;break}}Re&&c(ue,{type:"remove",values:[Re]})}for(var He=arguments.length,nn=new Array(He>1?He-1:0),Ue=1;Ue<He;Ue++)nn[Ue-1]=arguments[Ue];if(me&&Me.current){var An;(An=Me.current).onKeyDown.apply(An,[k].concat(nn))}ae==null||ae.apply(void 0,[k].concat(nn))},Ce=function(k){for(var xe=arguments.length,Ie=new Array(xe>1?xe-1:0),ue=1;ue<xe;ue++)Ie[ue-1]=arguments[ue];if(me&&Me.current){var Re;(Re=Me.current).onKeyUp.apply(Re,[k].concat(Ie))}re==null||re.apply(void 0,[k].concat(Ie))},ze=function(k){var xe=u.filter(function(Ie){return Ie!==k});c(xe,{type:"remove",values:[k]})},cn=t.useRef(!1),bn=function(){rn(!0),D||(j&&!cn.current&&j.apply(void 0,arguments),he.includes("focus")&&Te(!0)),cn.current=!0},On=function(){rn(!1,function(){cn.current=!1,Te(!1)}),!D&&(Fe&&(q==="tags"?$(Fe,{source:"submit"}):q==="multiple"&&$("",{source:"blur"})),V&&V.apply(void 0,arguments))},Le=[];t.useEffect(function(){return function(){Le.forEach(function(C){return clearTimeout(C)}),Le.splice(0,Le.length)}},[]);var je=function(k){var xe,Ie=k.target,ue=(xe=ye.current)===null||xe===void 0?void 0:xe.getPopupElement();if(ue&&ue.contains(Ie)){var Re=setTimeout(function(){var nn=Le.indexOf(Re);if(nn!==-1&&Le.splice(nn,1),Ze(),!Pe&&!ue.contains(document.activeElement)){var Ue;(Ue=se.current)===null||Ue===void 0||Ue.focus()}});Le.push(Re)}for(var _e=arguments.length,sn=new Array(_e>1?_e-1:0),He=1;He<_e;He++)sn[He-1]=arguments[He];ce==null||ce.apply(void 0,[k].concat(sn))},xt=t.useState(null),Tn=fe(xt,2),$n=Tn[0],kt=Tn[1],Ct=t.useState({}),It=fe(Ct,2),Et=It[1];function Pt(){Et({})}Ft(function(){if(Be){var C,k=Math.ceil((C=Ve.current)===null||C===void 0?void 0:C.offsetWidth);$n!==k&&!Number.isNaN(k)&&kt(k)}},[Be]);var _n;Ke&&(_n=function(k){Te(k)}),wo(function(){var C;return[Ve.current,(C=ye.current)===null||C===void 0?void 0:C.getPopupElement()]},Be,Te);var Rt=t.useMemo(function(){return ie(ie({},e),{},{notFoundContent:T,open:me,triggerOpen:Be,id:a,showSearch:we,multiple:pe,toggleOpen:Te})},[e,T,Be,me,a,we,pe,Te]),qn=L!==void 0?L:K||!pe&&q!=="combobox",Fn;qn&&(Fn=t.createElement(vn,{className:qe("".concat(i,"-arrow"),de({},"".concat(i,"-arrow-loading"),K)),customizeIcon:Q,customizeIconProps:{loading:K,searchValue:Fe,open:me,focused:Qe,showSearch:we}}));var Ln,Dt=function(){B==null||B(),c([],{type:"clear",values:u}),w("",!1,!1)};!D&&v&&(u.length||Fe)&&(Ln=t.createElement(vn,{className:"".concat(i,"-clear"),onMouseDown:Dt,customizeIcon:z},"×"));var Mt=t.createElement(be,{ref:Me}),Nt=qe(i,l,(o={},de(o,"".concat(i,"-focused"),Qe),de(o,"".concat(i,"-multiple"),pe),de(o,"".concat(i,"-single"),!pe),de(o,"".concat(i,"-allow-clear"),v),de(o,"".concat(i,"-show-arrow"),qn),de(o,"".concat(i,"-disabled"),D),de(o,"".concat(i,"-loading"),K),de(o,"".concat(i,"-open"),me),de(o,"".concat(i,"-customize-input"),an),de(o,"".concat(i,"-show-search"),we),o)),Vn=t.createElement(it,{ref:ye,disabled:D,prefixCls:i,visible:Be,popupElement:Mt,containerWidth:$n,animation:ge,transitionName:Oe,dropdownStyle:U,dropdownClassName:O,direction:g,dropdownMatchSelectWidth:h,dropdownRender:P,dropdownAlign:G,placement:_,getPopupContainer:x,empty:m,getTriggerDOMNode:function(){return E.current},onPopupVisibleChange:_n,onPopupMouseEnter:Pt},Ke?t.cloneElement(Ke,{ref:hn}):t.createElement(st,Xe({},e,{domRef:E,prefixCls:i,inputElement:an,ref:se,id:a,showSearch:we,mode:q,activeDescendantId:X,tagRender:p,values:u,open:me,onToggleOpen:Te,activeValue:A,searchValue:Fe,onSearch:w,onSearchSubmit:b,onRemove:ze,tokenWithEnter:y}))),wn;return Ke?wn=Vn:wn=t.createElement("div",Xe({className:Nt},ne,{ref:Ve,onMouseDown:je,onKeyDown:$e,onKeyUp:Ce,onFocus:bn,onBlur:On}),Qe&&!me&&t.createElement("span",{style:{width:0,height:0,display:"flex",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(u.map(function(C){var k=C.label,xe=C.value;return["number","string"].includes(Zn(k))?k:xe}).join(", "))),Vn,Fn,Ln),t.createElement(ut.Provider,{value:Rt},wn)});function Io(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var dt=t.createContext(null),Eo=["disabled","title","children","style","className"];function Un(e){return typeof e=="string"||typeof e=="number"}var Po=function(n,r){var o=So(),a=o.prefixCls,i=o.id,l=o.open,s=o.multiple,p=o.mode,g=o.searchValue,f=o.toggleOpen,u=o.notFoundContent,c=o.onPopupScroll,m=t.useContext(dt),d=m.flattenOptions,T=m.onActiveValue,B=m.defaultActiveFirstOption,q=m.onSelect,D=m.menuItemSelectedIcon,K=m.rawValues,H=m.fieldNames,W=m.virtual,oe=m.listHeight,ve=m.listItemHeight,F="".concat(a,"-item"),A=Lt(function(){return d},[l,d],function(O,h){return h[0]&&O[1]!==h[1]}),Y=t.useRef(null),X=function(h){h.preventDefault()},J=function(h){Y.current&&Y.current.scrollTo(typeof h=="number"?{index:h}:h)},$=function(h){for(var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,G=A.length,_=0;_<G;_+=1){var x=(h+_*P+G)%G,Z=A[x],he=Z.group,j=Z.data;if(!he&&!j.disabled)return x}return-1},le=t.useState(function(){return $(0)}),N=fe(le,2),v=N[0],L=N[1],Q=function(h){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;L(h);var G={source:P?"keyboard":"mouse"},_=A[h];if(!_){T(null,-1,G);return}T(_.value,h,G)};t.useEffect(function(){Q(B!==!1?$(0):-1)},[A.length,g]);var z=t.useCallback(function(O){return K.has(O)&&p!=="combobox"},[p,Ne(K).toString()]);t.useEffect(function(){var O=setTimeout(function(){if(!s&&l&&K.size===1){var P=Array.from(K)[0],G=A.findIndex(function(_){var x=_.data;return x.value===P});G!==-1&&(Q(G),J(G))}});if(l){var h;(h=Y.current)===null||h===void 0||h.scrollTo(void 0)}return function(){return clearTimeout(O)}},[l,g]);var be=function(h){h!==void 0&&q(h,{selected:!K.has(h)}),s||f(!1)};if(t.useImperativeHandle(r,function(){return{onKeyDown:function(h){var P=h.which,G=h.ctrlKey;switch(P){case I.N:case I.P:case I.UP:case I.DOWN:{var _=0;if(P===I.UP?_=-1:P===I.DOWN?_=1:Io()&&G&&(P===I.N?_=1:P===I.P&&(_=-1)),_!==0){var x=$(v+_,_);J(x),Q(x,!0)}break}case I.ENTER:{var Z=A[v];Z&&!Z.data.disabled?be(Z.value):be(void 0),l&&h.preventDefault();break}case I.ESC:f(!1),l&&h.stopPropagation()}},onKeyUp:function(){},scrollTo:function(h){J(h)}}}),A.length===0)return t.createElement("div",{role:"listbox",id:"".concat(i,"_list"),className:"".concat(F,"-empty"),onMouseDown:X},u);var ge=Object.keys(H).map(function(O){return H[O]}),Oe=function(h){return h.label},U=function(h){var P=A[h];if(!P)return null;var G=P.data||{},_=G.value,x=P.group,Z=Dn(G,!0),he=Oe(P);return P?t.createElement("div",Xe({"aria-label":typeof he=="string"&&!x?he:null},Z,{key:h,role:x?"presentation":"option",id:"".concat(i,"_list_").concat(h),"aria-selected":z(_)}),_):null};return t.createElement(t.Fragment,null,t.createElement("div",{role:"listbox",id:"".concat(i,"_list"),style:{height:0,width:0,overflow:"hidden"}},U(v-1),U(v),U(v+1)),t.createElement(no,{itemKey:"key",ref:Y,data:A,height:oe,itemHeight:ve,fullHeight:!1,onMouseDown:X,onScroll:c,virtual:W},function(O,h){var P,G=O.group,_=O.groupOption,x=O.data,Z=O.label,he=O.value,j=x.key;if(G){var V,re=(V=x.title)!==null&&V!==void 0?V:Un(Z)&&Z;return t.createElement("div",{className:qe(F,"".concat(F,"-group")),title:re},Z!==void 0?Z:j)}var ae=x.disabled,ce=x.title;x.children;var ke=x.style,pe=x.className,we=tn(x,Eo),ne=eo(we,ge),Se=z(he),Ee="".concat(F,"-option"),Pe=qe(F,Ee,pe,(P={},de(P,"".concat(Ee,"-grouped"),_),de(P,"".concat(Ee,"-active"),v===h&&!ae),de(P,"".concat(Ee,"-disabled"),ae),de(P,"".concat(Ee,"-selected"),Se),P)),De=Oe(O),Ve=!D||typeof D=="function"||Se,E=typeof De=="number"?De:De||he,ye=Un(E)?E.toString():void 0;return ce!==void 0&&(ye=ce),t.createElement("div",Xe({},ne,{"aria-selected":Se,className:Pe,title:ye,onMouseMove:function(){v===h||ae||Q(h)},onClick:function(){ae||be(he)},style:ke}),t.createElement("div",{className:"".concat(Ee,"-content")},E),t.isValidElement(D)||Se,Ve&&t.createElement(vn,{className:"".concat(F,"-option-state"),customizeIcon:D,customizeIconProps:{isSelected:Se}},Se?"✓":null))}))},ft=t.forwardRef(Po);ft.displayName="OptionList";var un=function(){return null};un.isSelectOption=!0;var gn=function(){return null};gn.isSelectOptGroup=!0;var Ro=["children","value"],Do=["children"];function Mo(e){var n=e.key,r=e.props,o=r.children,a=r.value,i=tn(r,Ro);return ie({key:n,value:a!==void 0?a:n,children:o},i)}function pt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Vt(e).map(function(r,o){if(!t.isValidElement(r)||!r.type)return null;var a=r.type.isSelectOptGroup,i=r.key,l=r.props,s=l.children,p=tn(l,Do);return n||!a?Mo(r):ie(ie({key:"__RC_SELECT_GRP__".concat(i===null?o:i,"__"),label:i},p),{},{options:pt(s)})}).filter(function(r){return r})}function No(e,n,r,o,a){return t.useMemo(function(){var i=e,l=!e;l&&(i=pt(n));var s=new Map,p=new Map,g=function(c,m,d){d&&typeof d=="string"&&c.set(m[d],m)};function f(u){for(var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=0;m<u.length;m+=1){var d=u[m];!d[r.options]||c?(s.set(d[r.value],d),g(p,d,r.label),g(p,d,o),g(p,d,a)):f(d[r.options],!0)}}return f(i),{options:i,valueOptions:s,labelOptions:p}},[e,n,r,o,a])}var Gn=0,Oo=At();function To(){var e;return Oo?(e=Gn,Gn+=1):e="TEST_OR_SSR",e}function $o(e){var n=t.useState(),r=fe(n,2),o=r[0],a=r[1];return t.useEffect(function(){a("rc_select_".concat(To()))},[]),e||o}function Xn(e){var n=t.useRef();n.current=e;var r=t.useCallback(function(){return n.current.apply(n,arguments)},[]);return r}function kn(e,n){return lt(e).join("").toUpperCase().includes(n)}const _o=function(e,n,r,o,a){return t.useMemo(function(){if(!r||o===!1)return e;var i=n.options,l=n.label,s=n.value,p=[],g=typeof o=="function",f=r.toUpperCase(),u=g?o:function(m,d){return a?kn(d[a],f):d[i]?kn(d[l!=="children"?l:"label"],f):kn(d[s],f)},c=g?function(m){return Pn(m)}:function(m){return m};return e.forEach(function(m){if(m[i]){var d=u(r,c(m));if(d)p.push(m);else{var T=m[i].filter(function(B){return u(r,c(B))});T.length&&p.push(ie(ie({},m),{},de({},i,T)))}return}u(r,c(m))&&p.push(m)}),p},[e,o,a,r,n])},qo=function(e,n){var r=t.useRef({values:new Map,options:new Map}),o=t.useMemo(function(){var i=r.current,l=i.values,s=i.options,p=e.map(function(u){if(u.label===void 0){var c;return ie(ie({},u),{},{label:(c=l.get(u.value))===null||c===void 0?void 0:c.label})}return u}),g=new Map,f=new Map;return p.forEach(function(u){g.set(u.value,u),f.set(u.value,n.get(u.value)||s.get(u.value))}),r.current.values=g,r.current.options=f,p},[e,n]),a=t.useCallback(function(i){return n.get(i)||r.current.options.get(i)},[n]);return[o,a]};var Fo=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],Lo=["inputValue"];function Vo(e){return!e||Zn(e)!=="object"}var Ao=t.forwardRef(function(e,n){var r=e.id,o=e.mode,a=e.prefixCls,i=a===void 0?"rc-select":a,l=e.backfill,s=e.fieldNames,p=e.inputValue,g=e.searchValue,f=e.onSearch,u=e.autoClearSearchValue,c=u===void 0?!0:u,m=e.onSelect,d=e.onDeselect,T=e.dropdownMatchSelectWidth,B=T===void 0?!0:T,q=e.filterOption,D=e.filterSort,K=e.optionFilterProp,H=e.optionLabelProp,W=e.options,oe=e.children,ve=e.defaultActiveFirstOption,F=e.menuItemSelectedIcon,A=e.virtual,Y=e.listHeight,X=Y===void 0?200:Y,J=e.listItemHeight,$=J===void 0?20:J,le=e.value,N=e.defaultValue,v=e.labelInValue,L=e.onChange,Q=tn(e,Fo),z=$o(r),be=Rn(o),ge=!!(!W&&oe),Oe=t.useMemo(function(){return q===void 0&&o==="combobox"?!1:q},[q,o]),U=t.useMemo(function(){return at(s,ge)},[JSON.stringify(s),ge]),O=En("",{value:g!==void 0?g:p,postState:function(w){return w||""}}),h=fe(O,2),P=h[0],G=h[1],_=No(W,oe,U,K,H),x=_.valueOptions,Z=_.labelOptions,he=_.options,j=t.useCallback(function(y){var w=lt(y);return w.map(function(b){var M,ee,te,We;if(Vo(b))M=b;else{var $e;te=b.key,ee=b.label,M=($e=b.value)!==null&&$e!==void 0?$e:te}var Ce=x.get(M);if(Ce){var ze;ee===void 0&&(ee=Ce==null?void 0:Ce[H||U.label]),te===void 0&&(te=(ze=Ce==null?void 0:Ce.key)!==null&&ze!==void 0?ze:M),We=Ce==null?void 0:Ce.disabled}return{label:ee,value:M,key:te,disabled:We}})},[U,H,x]),V=En(N,{value:le}),re=fe(V,2),ae=re[0],ce=re[1],ke=t.useMemo(function(){var y,w=j(ae);return o==="combobox"&&!(!((y=w[0])===null||y===void 0)&&y.value)?[]:w},[ae,j,o]),pe=qo(ke,x),we=fe(pe,2),ne=we[0],Se=we[1],Ee=t.useMemo(function(){if(!o&&ne.length===1){var y=ne[0];if(y.value===null&&(y.label===null||y.label===void 0))return[]}return ne.map(function(w){var b;return ie(ie({},w),{},{label:(b=w.label)!==null&&b!==void 0?b:w.value})})},[o,ne]),Pe=t.useMemo(function(){return new Set(ne.map(function(y){return y.value}))},[ne]);t.useEffect(function(){if(o==="combobox"){var y,w=(y=ne[0])===null||y===void 0?void 0:y.value;w!=null&&G(String(w))}},[ne]);var De=Xn(function(y,w){var b,M=w??y;return b={},de(b,U.value,y),de(b,U.label,M),b}),Ve=t.useMemo(function(){if(o!=="tags")return he;var y=Ne(he),w=function(M){return x.has(M)};return Ne(ne).sort(function(b,M){return b.value<M.value?-1:1}).forEach(function(b){var M=b.value;w(M)||y.push(De(M,b.label))}),y},[De,he,x,ne,o]),E=_o(Ve,U,P,Oe,K),ye=t.useMemo(function(){return o!=="tags"||!P||E.some(function(y){return y[K||"value"]===P})?E:[De(P)].concat(Ne(E))},[De,K,o,E,P]),se=t.useMemo(function(){return D?Ne(ye).sort(function(y,w){return D(y,w)}):ye},[ye,D]),Me=t.useMemo(function(){return ao(se,{fieldNames:U,childrenAsData:ge})},[se,U,ge]),Ae=function(w){var b=j(w);if(ce(b),L&&(b.length!==ne.length||b.some(function(te,We){var $e;return(($e=ne[We])===null||$e===void 0?void 0:$e.value)!==(te==null?void 0:te.value)}))){var M=v?b:b.map(function(te){return te.value}),ee=b.map(function(te){return Pn(Se(te.value))});L(be?M:M[0],be?ee:ee[0])}},on=t.useState(null),Qe=fe(on,2),rn=Qe[0],Ze=Qe[1],Fe=t.useState(0),an=fe(Fe,2),Ke=an[0],hn=an[1],fn=ve!==void 0?ve:o!=="combobox",ln=t.useCallback(function(y,w){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},M=b.source,ee=M===void 0?"keyboard":M;hn(w),l&&o==="combobox"&&y!==null&&ee==="keyboard"&&Ze(String(y))},[l,o]),Ye=function(w,b){var M=function(){var Le,je=Se(w);return[v?{label:je==null?void 0:je[U.label],value:w,key:(Le=je==null?void 0:je.key)!==null&&Le!==void 0?Le:w}:w,Pn(je)]};if(b&&m){var ee=M(),te=fe(ee,2),We=te[0],$e=te[1];m(We,$e)}else if(!b&&d){var Ce=M(),ze=fe(Ce,2),cn=ze[0],bn=ze[1];d(cn,bn)}},en=Xn(function(y,w){var b,M=be?w.selected:!0;M?b=be?[].concat(Ne(ne),[y]):[y]:b=ne.filter(function(ee){return ee.value!==y}),Ae(b),Ye(y,M),o==="combobox"?Ze(""):(!Rn||c)&&(G(""),Ze(""))}),me=function(w,b){Ae(w),(b.type==="remove"||b.type==="clear")&&b.values.forEach(function(M){Ye(M.value,!1)})},pn=function(w,b){if(G(w),Ze(null),b.source==="submit"){var M=(w||"").trim();if(M){var ee=Array.from(new Set([].concat(Ne(Pe),[M])));Ae(ee),Ye(M,!0),G("")}return}b.source!=="blur"&&(o==="combobox"&&Ae(w),f==null||f(w))},Be=function(w){var b=w;o!=="tags"&&(b=w.map(function(ee){var te=Z.get(ee);return te==null?void 0:te.value}).filter(function(ee){return ee!==void 0}));var M=Array.from(new Set([].concat(Ne(Pe),Ne(b))));Ae(M),M.forEach(function(ee){Ye(ee,!0)})},Te=t.useMemo(function(){var y=A!==!1&&B!==!1;return ie(ie({},_),{},{flattenOptions:Me,onActiveValue:ln,defaultActiveFirstOption:fn,onSelect:en,menuItemSelectedIcon:F,rawValues:Pe,fieldNames:U,virtual:y,listHeight:X,listItemHeight:$,childrenAsData:ge})},[_,Me,ln,fn,en,F,Pe,U,A,B,X,$,ge]);return t.createElement(dt.Provider,{value:Te},t.createElement(Co,Xe({},Q,{id:z,prefixCls:i,ref:n,omitDomProps:Lo,mode:o,displayValues:Ee,onDisplayValuesChange:me,searchValue:P,onSearch:pn,onSearchSplit:Be,dropdownMatchSelectWidth:B,OptionList:ft,emptyOptions:!Me.length,activeValue:rn,activeDescendantId:"".concat(z,"_list_").concat(Ke)})))}),Nn=Ao;Nn.Option=un;Nn.OptGroup=gn;const R=Kt(),Ge=et(nt.BTR3),Ko=Ge.lineHeight,Yn="18px";function Cn(e){return e.replace(/"/g,'\\"').replace(/\n/g,"\\A")}const jo=Je.div`
  width: 100%;
`,Bo=Je.div`
  width: 100%;
`,Wo=In`
  width: 100%;

  .ant-select-selector {
    font-family: ${Ge.fontFamily};
    font-size: ${Ge.fontSize};
    line-height: ${Ge.lineHeight};
    font-weight: ${Ge.fontWeight};
    font-style: ${Ge.fontStyle};
    letter-spacing: ${Ge.letterSpacing};

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
        box-shadow: ${R("focus.boxShadow")};
        background-color: ${R("enabled.background")};
      }
    }
  }

  // color states
  &&:not(.ant-select-customize-input) {
    // enabled
    &:not(.ant-select-disabled) {
      .ant-select-selector {
        background-color: ${R("enabled.background")};
        border: 1px solid ${R("enabled.border")};
      }

      .ant-select-selection-search-input {
        color: ${R("enabled.color")};
      }

      .ant-select-selection-item {
        color: ${R("enabled.color")};
        opacity: 1;
      }

      .ant-select-selection-placeholder {
        color: ${R("enabled.placeholder.color")};
      }

      .select-chevron,
      .ant-select-arrow {
        color: ${R("enabled.color")};
      }

      .ant-select-clear {
        background-color: ${R("enabled.background")};
      }

      // validation status
      ${e=>`
      &:not(.ant-select-focused) .ant-select-selector {
        border-color: ${R(`${e.validationStatus}.border`)(e)};
      }`}

      // focused
      &.ant-select-focused .ant-select-selector {
        box-shadow: ${R("focus.boxShadow")};
        background-color: ${R("enabled.background")};
      }

      // open
      &.ant-select-open .ant-select-selector {
        box-shadow: ${R("focus.boxShadow")};
        background-color: ${R("enabled.background")};
      }

      // hover
      &:not(.ant-select-focused):hover .ant-select-selector {
        border-color: ${R("hover.border")};
      }
    }

    // disabled
    &.ant-select-disabled {
      .ant-select-selector {
        background-color: ${R("disabled.background")};
        border: 1px solid ${R("disabled.border")};

        .ant-select-selection-item {
          color: ${R("disabled.color")};
        }
      }

      .ant-select-selection-placeholder {
        color: ${R("disabled.placeholder.color")};
      }
    }

    &.kl6-select-readonly {
      .ant-select-selector {
        cursor: auto;
        
        .ant-select-selection-item {
          color: ${R("readonly.color")};
        }
        input {
          cursor: auto;
        }
      }

      .ant-select-selection-placeholder {
        color: ${R("readonly.color")};
      }
    }

    .select-chevron {
      color: ${R("disabled.color")};
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
    background-color: ${R("enabled.dropdown.background")};
    border-radius: 4px;
    box-shadow: ${R("enabled.dropdown.boxShadow")};

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
`,zo=In`
  .ant-select-item-option {
    color: ${R("enabled.option.color")};
    position: relative;
    padding-inline-end: 30px;

    .ant-select-item-option-state {
      color: ${R("enabled.option.color")} !important;
      position: absolute;
      height: 16px;
      width: 16px;
      top: 50%;
      right: 13px;
      transform: translateY(-50%);
    }

    .ant-select-item-option-content {
      display: flex;
      align-items: center;

      .dropdown-v6-multi-checkbox {
        margin-right: 0;
      }
    }

    .kl6-select-option-content {
      display: flex;
      min-width: 0;
      width: 100%;
    }

    .kl6-select-option-text {
      display: flex;
      flex-direction: column;
      min-width: 0;
      flex: 1;
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
      background-color: ${R("hover.option.background")};
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
    background-color: ${R("selected.option.background")};
    color: ${R("selected.option.color")};
    font-weight: ${Ge.fontWeight};
  }

  .ant-select-item-option-active:not(.ant-select-item-option-disabled):not(.ant-select-item-option-selected) {
    &, &:hover {
      background-color: ${R("hover.option.background")};
    }
  }

  .ant-select-item-option-selected {
    color: ${R("hover.option.color")};
    background-color: ${R("selected.option.background")};
  }

  .ant-select-item-option-disabled {
    color: ${R("disabled.option.color")};
  }

  .ant-select-item-group {
    padding: 10px 12px 6px 12px;
    color: ${R("enabled.placeholder.color")};
    ${et(nt.BTM4)}
  }

  ${e=>e.isMultiSelect&&In`
    .ant-select-item-option-state {
      display: none;
    }

    .kl6-select-option-content {
      display: grid;
      grid-template-columns: ${Yn} 1fr;
      column-gap: 5px;
      align-items: start;
    }

    .kl6-select-option-checkbox-cell {
      width: ${Yn};
      height: ${Ko};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .dropdown-v6-multi-checkbox {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dropdown-v6-multi-checkbox .kl6-checkbox-wrapper {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .dropdown-v6-multi-checkbox-unchecked.ant-checkbox-wrapper,
    .dropdown-v6-multi-checkbox-checked.ant-checkbox-wrapper {
      align-items: center;
      line-height: 1;

      .ant-checkbox {
        top: 0;
      }
    }

    .dropdown-v6-multi-checkbox .ant-checkbox-wrapper + .ant-checkbox-wrapper {
      margin-left: 0;
    }
    
    .ant-select-item:not([label]) {
      &:not(.ant-select-item-option-selected) {
        background: ${R("selected.option.background")};
      }
      
      .ant-select-item-option-content {
        &, &:before {
          color: ${R("selected.option.color")};
        }
      }
      
      &:not(.ant-select-item-option-selected) .ant-select-item-option-content:before {
        content: "${Cn(e.t("select.tags.addPrefix"))}";
      }
      
      &.ant-select-item-option-selected .ant-select-item-option-content:before {
        content: "${Cn(e.t("select.tags.removePrefix"))}";
      }

      .ant-select-item-option-content:after {
        content: "${Cn(e.t("select.tags.addRemovePostfix"))}";
      }
    }
  `}
`,Ho=Je.div.withConfig({shouldForwardProp:e=>!["cssConfig","isMultiSelect","t"].includes(e)})`
  ${zo}
`;function Uo(e,n){return`
  .${n} {
    background-color: ${e.enabled.dropdown.background};
    border-radius: 4px;
    box-shadow: ${e.enabled.dropdown.boxShadow};
  }
  
  .${n}.dropdown-loading {
    min-height: 64px;
  }
  `}const Go=Je.div`
  display: flex;
  color: ${R("enabled.loadingError.color")};

  > svg {
   margin-top: 2px;
   margin-right: 4px;
  }

  > div {
   flex: 1;
  }
`,Xo=Je.span`
  color: ${R("enabled.option.description")};
`,Jn=e=>typeof e!="object"&&typeof e!="number"?{label:e,value:mn(),key:mn()}:e,Qn=(e,n,r)=>e==null||!n||r!=="tags"?e:Array.isArray(e)?e.map(Jn):[Jn(e)],Yo=(e,n)=>{if(Array.isArray(n)){let r=n[n.length-1];return typeof r!="object"&&typeof r!="number"&&(r={label:r,value:mn(),key:mn()}),[...e,r]}return n},Jo=(e,n)=>{if(Array.isArray(n)&&Array.isArray(e)){const r=[...e];if(n.length===0)return[];const o=r.findIndex((a,i)=>typeof a=="object"?n[i]!==(a==null?void 0:a.value):n[i]!==a);return r.splice(o,1),r}return n},mt=e=>{for(;e;){if(e instanceof Element&&(window.getComputedStyle(e).overflow==="auto"||window.getComputedStyle(e).overflow==="scroll"))return e;e=e.parentNode}return null},Qo=e=>{for(;e;){if(e instanceof Element){const n=window.getComputedStyle(e),{overflowY:r,overflow:o}=n;if(r==="auto"||r==="scroll"||r==="overlay"||o==="auto"||o==="scroll")return e}e=e.parentNode}return null},vt=()=>{const{t:e}=rt();return S.createElement(jn,{image:jn.PRESENTED_IMAGE_SIMPLE,description:S.createElement(Bt,{type:"BTR3"},e("select.empty")),className:"ant-empty-small","data-testid":"select-no-data","kl-id":"empty-data"})},gt=()=>S.createElement(jt,{testId:"select-chevron-icon",klId:"down-icon"}),Zo=()=>S.createElement(to,{testId:"select-search-icon",klId:"search-icon"}),ht=()=>S.createElement(Wt,{mode:"filled",testId:"select-clear-search-icon",klId:"clear-icon"});function bt({onLoad:e}){const n=t.useRef(null),r=t.useRef(e);return r.current=e,t.useEffect(()=>{const o=n.current;if(!o||typeof IntersectionObserver>"u")return;let a,i=!1,l=!1,s=0;const p=()=>Qo(o)??mt(o),g=u=>{a==null||a.disconnect(),a=new IntersectionObserver(([c])=>{if(l)return;const m=!!(c!=null&&c.isIntersecting);m&&!i&&r.current(),i=m},{...u?{root:u}:{},rootMargin:"0px",threshold:0}),a.observe(o)},f=p();return f?g(f):s=requestAnimationFrame(()=>{l||g(p())}),()=>{l=!0,a==null||a.disconnect(),s&&cancelAnimationFrame(s)}},[]),S.createElement("div",{ref:n,style:{width:"100%"}},S.createElement(tt,{centered:!0,testId:"select-option-loading-more"}))}function wt({cssConfig:e,children:n}){return S.createElement(Go,{cssConfig:e},S.createElement(zt,null),S.createElement("div",null,n))}const er=Je(({className:e})=>S.createElement("div",{className:qe("dropdown-v6-multi-checkbox",e)},S.createElement(Bn,{className:"dropdown-v6-multi-checkbox-unchecked",checked:!1}),S.createElement(Bn,{className:"dropdown-v6-multi-checkbox-checked",checked:!0})))`
  .ant-select-item-option.ant-select-item-option-selected & .dropdown-v6-multi-checkbox-unchecked,
  .ant-select-item-option:not(.ant-select-item-option-selected) & .dropdown-v6-multi-checkbox-checked {
    display: none;
  }
`;vt.__docgenInfo={description:"",methods:[],displayName:"EmptyData"};gt.__docgenInfo={description:"",methods:[],displayName:"ChevronIcon"};Zo.__docgenInfo={description:"",methods:[],displayName:"SearchIcon"};ht.__docgenInfo={description:"",methods:[],displayName:"ClearIcon"};bt.__docgenInfo={description:"",methods:[],displayName:"LoadingTrigger"};wt.__docgenInfo={description:"",methods:[],displayName:"LoadingErrorContent",props:{cssConfig:{required:!0,tsType:{name:"intersection",raw:`Focus & {
  enabled: StateProps & {
    dropdown: StateProps,
    option: StateProps & {
      description: string
    },
    placeholder: StateProps,
    loadingError: StateProps
  },
  disabled: StateProps & {
    placeholder?: StateProps,
    option: StateProps
  },
  selected: StateProps & {
    option: StateProps
  },
  hover: StateProps & {
    option: StateProps
  },
  readonly?: StateProps
} & Partial<Record<ValidationStatus, StateProps>>`,elements:[{name:"Focus"},{name:"signature",type:"object",raw:`{
  enabled: StateProps & {
    dropdown: StateProps,
    option: StateProps & {
      description: string
    },
    placeholder: StateProps,
    loadingError: StateProps
  },
  disabled: StateProps & {
    placeholder?: StateProps,
    option: StateProps
  },
  selected: StateProps & {
    option: StateProps
  },
  hover: StateProps & {
    option: StateProps
  },
  readonly?: StateProps
}`,signature:{properties:[{key:"enabled",value:{name:"intersection",raw:`StateProps & {
  dropdown: StateProps,
  option: StateProps & {
    description: string
  },
  placeholder: StateProps,
  loadingError: StateProps
}`,elements:[{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1},{name:"signature",type:"object",raw:`{
  dropdown: StateProps,
  option: StateProps & {
    description: string
  },
  placeholder: StateProps,
  loadingError: StateProps
}`,signature:{properties:[{key:"dropdown",value:{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1}},{key:"option",value:{name:"intersection",raw:`StateProps & {
  description: string
}`,elements:[{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1},{name:"signature",type:"object",raw:`{
  description: string
}`,signature:{properties:[{key:"description",value:{name:"string",required:!0}}]}}],required:!0}},{key:"placeholder",value:{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1}},{key:"loadingError",value:{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1}}]}}],required:!0}},{key:"disabled",value:{name:"intersection",raw:`StateProps & {
  placeholder?: StateProps,
  option: StateProps
}`,elements:[{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1},{name:"signature",type:"object",raw:`{
  placeholder?: StateProps,
  option: StateProps
}`,signature:{properties:[{key:"placeholder",value:{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1}},{key:"option",value:{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1}}]}}],required:!0}},{key:"selected",value:{name:"intersection",raw:`StateProps & {
  option: StateProps
}`,elements:[{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1},{name:"signature",type:"object",raw:`{
  option: StateProps
}`,signature:{properties:[{key:"option",value:{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1}}]}}],required:!0}},{key:"hover",value:{name:"intersection",raw:`StateProps & {
  option: StateProps
}`,elements:[{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1},{name:"signature",type:"object",raw:`{
  option: StateProps
}`,signature:{properties:[{key:"option",value:{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1}}]}}],required:!0}},{key:"readonly",value:{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"Partial",elements:[{name:"Record",elements:[{name:"ValidationStatus"},{name:"signature",type:"object",raw:`{
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1}],raw:"Record<ValidationStatus, StateProps>"}],raw:"Partial<Record<ValidationStatus, StateProps>>"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const nr=e=>Ht({...e,mode:void 0},{componentName:"select",defaultValues:{}}),tr=Je(Nn).withConfig({shouldForwardProp:e=>!["cssConfig","validationStatus"].includes(e)})`${Wo}`,yt=e=>S.createElement(ot,{size:"small"},`+ ${e.length} ...`),dn=t.forwardRef((e,n)=>{const{children:r,hasMore:o,onLoadMore:a,options:i,cssConfig:l,...s}=Ut(nr(e)),[p,g]=t.useState(),f=t.useRef(a);f.current=a;const u=t.useCallback(()=>{var d;(d=f.current)==null||d.call(f)},[]),c=e.mode==="multiple"||e.mode==="tags";function m(d){return d.options?S.createElement(gn,{key:d.value,label:d.label},d.options.map(m)):S.createElement(un,{...d,key:d.value,"data-value":d.value,label:typeof d.label=="string"?d.label.trim():d.label,role:"option"},S.createElement("div",{className:"kl6-select-option-content"},c&&S.createElement("div",{className:"kl6-select-option-checkbox-cell"},S.createElement(er,null)),S.createElement("div",{className:"kl6-select-option-text"},S.createElement(Yt,{truncationWidth:p},d.label),d.description&&S.createElement(Xo,{cssConfig:l},d.description))))}return S.createElement(St,{...s,ref:n,mode:e.mode,cssConfig:l,setSelectOffsetWidth:g},r||(i==null?void 0:i.map(m)),o&&S.createElement(un,{key:"loading-more-option",disabled:!0},S.createElement(bt,{onLoad:u})))}),St=t.forwardRef(({setSelectOffsetWidth:e,allowNonUniqueValues:n,autoClearSearchValue:r=!0,autoFocus:o=!1,children:a,className:i,closeOnParentScroll:l,cssConfig:s,defaultValue:p,disabled:g=!1,dropdownClassName:f,dropdownMaxHeight:u,filterOption:c,getPopupContainer:m,loading:d=!1,loadingError:T,mode:B,notFoundContent:q,onChange:D,onDropdownVisibleChange:K,onSearch:H,onClear:W,open:oe,optionFilterProp:ve="label",optionLabelProp:F="label",placement:A="bottomLeft",readOnly:Y,renderDropdown:X,renderFooter:J,renderHeader:$,showArrow:le=!0,showSearch:N=!1,testAttributes:v,usePortal:L,validationStatus:Q="default",value:z,virtual:be=!1,...ge},Oe)=>{Jt();const U=Gt(s,Uo,dn),O=Xt(),{t:h}=rt(),[P,G]=t.useState(()=>Qn(p,n,B)),_=t.useMemo(()=>Qn(z,n,B),[z]),x=_!==void 0?_:P,Z=B==="multiple"||B==="tags",[he,j]=t.useState(!!oe),V=t.useRef(null);t.useEffect(()=>{if(V.current){const E=V.current.offsetWidth;e&&e(E)}},[V]);const re=t.useCallback(()=>{l&&(V!=null&&V.current)&&j(!1)},[l,V]),[ae,ce]=t.useState(""),ke=E=>{r||E!==""?(ce(E),H==null||H(E)):H==null||H(ae)},pe=()=>{ce(""),W==null||W()},we=E=>{N&&!r&&E.code==="Backspace"&&ae.length===1&&pe()},ne=()=>{r&&ce("")},Se=t.useCallback((E,ye)=>{let se=E;n&&Array.isArray(se)&&(Array.isArray(x)&&x.length<se.length?se=Yo(x,E):se=Jo(x,E)),G(se),r&&ce(""),D==null||D(se,ye)},[D,x,n,r]);t.useEffect(()=>{const E=mt(V==null?void 0:V.current);if(!(!(E instanceof Element)||!l))return E.addEventListener("scroll",re),()=>E.removeEventListener("scroll",re)},[l,oe,V,re]);const Ee=t.useCallback(E=>{const ye=v!=null&&v["data-testid"]?`${v==null?void 0:v["data-testid"]}-select-dropdown`:"select-dropdown",se=v!=null&&v["kl-id"]?`${v==null?void 0:v["kl-id"]}-select-dropdown`:"select-dropdown";return S.createElement(Ho,{cssConfig:s,"data-testid":ye,"kl-id":se,isMultiSelect:Z,t:h},d?S.createElement(tt,{centered:!0,testId:"select-loader",klId:"loader"}):S.createElement(S.Fragment,null,$&&S.createElement(S.Fragment,null,$(),S.createElement(Kn,{mode:"light"})),X?X(E):E,J&&S.createElement(S.Fragment,null,S.createElement(Kn,{mode:"light"}),J())))},[J,$,d,s,Z,X,v]),Pe=t.useRef(null),De=t.useCallback(E=>{if(E&&Pe.current){const ye=Array.isArray(x);if(!x||ye&&!x.length)Pe.current.scrollTo(0);else if(ye){const se=[...x].sort((Me,Ae)=>Ae-Me).pop();Pe.current.scrollTo(se??0)}}if(l){j(E);return}K&&K(E)},[l,K,x]),Ve=T&&S.createElement(wt,{cssConfig:s},T);return S.createElement(jo,{ref:Oe},S.createElement(Bo,{ref:V},S.createElement(tr,{ref:Pe,allowClear:Z,"aria-disabled":g,autoClearSearchValue:r,autoFocus:o,className:qe(i,{"kl6-select-readonly":Y}),clearIcon:S.createElement(ht,null),cssConfig:s,"data-validationstatus":Q,"data-value":x,disabled:g||Y,dropdownAlign:{offset:[0,A!=null&&A.includes("top")?-8:8]},dropdownClassName:qe("dropdown-custom",f,U,{"dropdown-loading":d}),dropdownRender:Ee,filterOption:c,getPopupContainer:m??O.getPopupContainer??(E=>L??O.usePortal?document.body:E.parentElement),listHeight:u??256,loading:d,maxTagPlaceholder:yt,menuItemSelectedIcon:null,mode:B,notFoundContent:Ve||q||S.createElement(vt,null),onBlurCapture:ne,onChange:Se,onDropdownVisibleChange:De,onSearch:ke,onClear:pe,onKeyDown:we,open:l?he:oe,optionFilterProp:ve,optionLabelProp:F,placement:A,prefixCls:"ant-select",searchValue:ae,showArrow:N||le,showSearch:N,inputIcon:S.createElement(gt,null),tagRender:E=>S.createElement(ot,{...E,disabled:g,readOnly:Y,size:"small"}),transitionName:"ant-slide-up",validationStatus:Q,value:x,virtual:be,...ge,...v},T?null:a)))});St.displayName="SelectView";dn.displayName="Select";dn.Option=un;dn.OptGroup=gn;yt.__docgenInfo={description:"",methods:[],displayName:"maxTagPlaceholder"};dn.__docgenInfo={description:"",methods:[],displayName:"Select",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};export{gt as C,vt as E,er as M,dn as S,Zo as a,ht as b,yt as m,Wo as s};
