import{_ as ie,aX as Nt,bl as Tt,n as Oe,r as t,i as tn,l as Ye,j as qe,k as de,X as $t,a as fe,bd as _t,bm as qt,aZ as Ft,p as Jn,bn as Lt,b9 as Vt,m as At,H as Ve,a2 as Zn,a1 as Kt,aw as et,a0 as In,R as S,ag as jt,T as Bt,A as Wt,aQ as zt,a5 as Ht,u as Ut,aM as Gt,av as Xt}from"./iframe-DijVn6lr.js";import{T as Yt}from"./TextReducer-BIfgSXBQ.js";import{u as Qt}from"./useGlobalStyles-Clp_neqU.js";import{D as Kn}from"./Divider-D-bCk8Cb.js";import{L as nt}from"./Loader-D2XHvBNY.js";import{T as tt}from"./Tag-UgBikWKe.js";import{K as I,u as En}from"./KeyCode-Dc0kQrxh.js";import{T as Jt}from"./index-BqzR3hwt.js";import{p as Dn}from"./pickAttrs-7oyop8I4.js";import{F as Zt}from"./Overflow-DkuW95mG.js";import{o as eo,E as jn}from"./type-DN7uEUoT.js";import{L as no}from"./List-5CiQLL9E.js";import{C as Bn}from"./Checkbox-zEfJeMcN.js";import{I as to}from"./IconSearch-DdHPmvVx.js";import{r as oo,u as ro}from"./v4-BoP187Zn.js";import{u as ot}from"./useTranslation-BLQw3CeK.js";let Wn,yn,Sn=0,xn=0;function mn(e,n,r){let o=0;const a=new Array(16);e=e||{};let i=e.node||Wn,l=e.clockseq!==void 0?e.clockseq:yn;if(i==null||l==null){const c=e.random||(e.rng||oo)();i==null&&(i=Wn=[c[0]|1,c[1],c[2],c[3],c[4],c[5]]),l==null&&(l=yn=(c[6]<<8|c[7])&16383)}let u=e.msecs!==void 0?e.msecs:Date.now(),p=e.nsecs!==void 0?e.nsecs:xn+1;const g=u-Sn+(p-xn)/1e4;if(g<0&&e.clockseq===void 0&&(l=l+1&16383),(g<0||u>Sn)&&e.nsecs===void 0&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Sn=u,xn=p,yn=l,u+=122192928e5;const f=((u&268435455)*1e4+p)%4294967296;a[o++]=f>>>24&255,a[o++]=f>>>16&255,a[o++]=f>>>8&255,a[o++]=f&255;const s=u/4294967296*1e4&268435455;a[o++]=s>>>8&255,a[o++]=s&255,a[o++]=s>>>24&15|16,a[o++]=s>>>16&255,a[o++]=l>>>8|128,a[o++]=l&255;for(let c=0;c<6;++c)a[o+c]=i[c];return n||ro(a)}function zn(e,n){var r=e.key,o;return"value"in e&&(o=e.value),r??(o!==void 0?o:"rc-index-key-".concat(n))}function rt(e,n){var r=e||{},o=r.label,a=r.value,i=r.options;return{label:o||(n?"children":"label"),value:a||"value",options:i||"options"}}function ao(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.fieldNames,o=n.childrenAsData,a=[],i=rt(r,!1),l=i.label,u=i.value,p=i.options;function g(f,s){f.forEach(function(c){var m=c[l];if(s||!(p in c)){var d=c[u];a.push({key:zn(c,a.length),groupOption:s,data:c,label:m,value:d})}else{var T=m;T===void 0&&o&&(T=c.label),a.push({key:zn(c,a.length),group:!0,data:c,label:T}),g(c[p],!0)}})}return g(e,!1),a}function Pn(e){var n=ie({},e);return"props"in n||Object.defineProperty(n,"props",{get:function(){return Nt(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),n}}),n}function io(e,n){if(!n||!n.length)return null;var r=!1;function o(i,l){var u=Tt(l),p=u[0],g=u.slice(1);if(!p)return[i];var f=i.split(p);return r=r||f.length>1,f.reduce(function(s,c){return[].concat(Oe(s),Oe(o(c,g)))},[]).filter(function(s){return s})}var a=o(e,n);return r?a:null}var lo=["prefixCls","disabled","visible","children","popupElement","containerWidth","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],co=function(n){var r=n===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:r,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:r,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:r,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:r,adjustY:1}}}},uo=function(n,r){var o=n.prefixCls;n.disabled;var a=n.visible,i=n.children,l=n.popupElement,u=n.containerWidth,p=n.animation,g=n.transitionName,f=n.dropdownStyle,s=n.dropdownClassName,c=n.direction,m=c===void 0?"ltr":c,d=n.placement,T=n.dropdownMatchSelectWidth,B=n.dropdownRender,q=n.dropdownAlign,D=n.getPopupContainer,K=n.empty,H=n.getTriggerDOMNode,W=n.onPopupVisibleChange,oe=n.onPopupMouseEnter,ve=tn(n,lo),F="".concat(o,"-dropdown"),A=l;B&&(A=B(l));var Y=t.useMemo(function(){return co(T)},[T]),X=p?"".concat(F,"-").concat(p):g,Q=t.useRef(null);t.useImperativeHandle(r,function(){return{getPopupElement:function(){return Q.current}}});var $=ie({minWidth:u},f);return typeof T=="number"?$.width=T:T&&($.width=u),t.createElement(Jt,Ye({},ve,{showAction:W?["click"]:[],hideAction:W?["click"]:[],popupPlacement:d||(m==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:Y,prefixCls:F,popupTransitionName:X,popup:t.createElement("div",{ref:Q,onMouseEnter:oe},A),popupAlign:q,popupVisible:a,getPopupContainer:D,popupClassName:qe(s,de({},"".concat(F,"-empty"),K)),popupStyle:$,getTriggerDOMNode:H,onPopupVisibleChange:W}),i)},at=t.forwardRef(uo);at.displayName="SelectTrigger";var vn=function(n){var r=n.className,o=n.customizeIcon,a=n.customizeIconProps,i=n.onMouseDown,l=n.onClick,u=n.children,p;return typeof o=="function"?p=o(a):p=o,t.createElement("span",{className:r,onMouseDown:function(f){f.preventDefault(),i&&i(f)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:l,"aria-hidden":!0},p!==void 0?p:t.createElement("span",{className:qe(r.split(/\s+/).map(function(g){return"".concat(g,"-icon")}))},u))},so=function(n,r){var o,a,i=n.prefixCls,l=n.id,u=n.inputElement,p=n.disabled,g=n.tabIndex,f=n.autoFocus,s=n.autoComplete,c=n.editable,m=n.activeDescendantId,d=n.value,T=n.maxLength,B=n.onKeyDown,q=n.onMouseDown,D=n.onChange,K=n.onPaste,H=n.onCompositionStart,W=n.onCompositionEnd,oe=n.open,ve=n.attrs,F=u||t.createElement("input",null),A=F,Y=A.ref,X=A.props,Q=X.onKeyDown,$=X.onChange,le=X.onMouseDown,O=X.onCompositionStart,v=X.onCompositionEnd,L=X.style;return F=t.cloneElement(F,ie(ie(ie({type:"search"},X),{},{id:l,ref:$t(r,Y),disabled:p,tabIndex:g,autoComplete:s||"off",autoFocus:f,className:qe("".concat(i,"-selection-search-input"),(o=F)===null||o===void 0||(a=o.props)===null||a===void 0?void 0:a.className),role:"combobox","aria-expanded":oe,"aria-haspopup":"listbox","aria-owns":"".concat(l,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(l,"_list"),"aria-activedescendant":m},ve),{},{value:c?d:"",maxLength:T,readOnly:!c,unselectable:c?null:"on",style:ie(ie({},L),{},{opacity:c?null:0}),onKeyDown:function(z){B(z),Q&&Q(z)},onMouseDown:function(z){q(z),le&&le(z)},onChange:function(z){D(z),$&&$(z)},onCompositionStart:function(z){H(z),O&&O(z)},onCompositionEnd:function(z){W(z),v&&v(z)},onPaste:K})),F},Mn=t.forwardRef(so);Mn.displayName="Input";function it(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}var fo=typeof window<"u"&&window.document&&window.document.documentElement,po=fo;function mo(e,n){po?t.useLayoutEffect(e,n):t.useEffect(e,n)}var Hn=function(n){n.preventDefault(),n.stopPropagation()},vo=function(n){var r=n.id,o=n.prefixCls,a=n.values,i=n.open,l=n.searchValue,u=n.inputRef,p=n.placeholder,g=n.disabled,f=n.mode,s=n.showSearch,c=n.autoFocus,m=n.autoComplete,d=n.activeDescendantId,T=n.tabIndex,B=n.removeIcon,q=n.maxTagCount,D=n.maxTagTextLength,K=n.maxTagPlaceholder,H=K===void 0?function(j){return"+ ".concat(j.length," ...")}:K,W=n.tagRender,oe=n.onToggleOpen,ve=n.onRemove,F=n.onInputChange,A=n.onInputPaste,Y=n.onInputKeyDown,X=n.onInputMouseDown,Q=n.onInputCompositionStart,$=n.onInputCompositionEnd,le=t.useRef(null),O=t.useState(0),v=fe(O,2),L=v[0],J=v[1],z=t.useState(!1),be=fe(z,2),ge=be[0],Ne=be[1],U="".concat(o,"-selection"),N=i||f==="tags"?l:"",h=f==="tags"||s&&(i||ge);mo(function(){J(le.current.scrollWidth)},[N]);function P(j,V,re,ae,ce){return t.createElement("span",{className:qe("".concat(U,"-item"),de({},"".concat(U,"-item-disabled"),re)),title:typeof j=="string"||typeof j=="number"?j.toString():void 0},t.createElement("span",{className:"".concat(U,"-item-content")},V),ae&&t.createElement(vn,{className:"".concat(U,"-item-remove"),onMouseDown:Hn,onClick:ce,customizeIcon:B},"×"))}function G(j,V,re,ae,ce){var Ce=function(we){Hn(we),oe(!i)};return t.createElement("span",{onMouseDown:Ce},W({label:V,value:j,disabled:re,closable:ae,onClose:ce}))}function _(j){var V=j.disabled,re=j.label,ae=j.value,ce=!g&&!V,Ce=re;if(typeof D=="number"&&(typeof re=="string"||typeof re=="number")){var pe=String(Ce);pe.length>D&&(Ce="".concat(pe.slice(0,D),"..."))}var we=function(Se){Se&&Se.stopPropagation(),ve(j)};return typeof W=="function"?G(ae,Ce,V,ce,we):P(re,Ce,V,ce,we)}function x(j){var V=typeof H=="function"?H(j):H;return P(V,V,!1)}var Z=t.createElement("div",{className:"".concat(U,"-search"),style:{width:L},onFocus:function(){Ne(!0)},onBlur:function(){Ne(!1)}},t.createElement(Mn,{ref:u,open:i,prefixCls:o,id:r,inputElement:null,disabled:g,autoFocus:c,autoComplete:m,editable:h,activeDescendantId:d,value:N,onKeyDown:Y,onMouseDown:X,onChange:F,onPaste:A,onCompositionStart:Q,onCompositionEnd:$,tabIndex:T,attrs:Dn(n,!0)}),t.createElement("span",{ref:le,className:"".concat(U,"-search-mirror"),"aria-hidden":!0},N," ")),he=t.createElement(Zt,{prefixCls:"".concat(U,"-overflow"),data:a,renderItem:_,renderRest:x,suffix:Z,itemKey:"key",maxCount:q});return t.createElement(t.Fragment,null,he,!a.length&&!N&&t.createElement("span",{className:"".concat(U,"-placeholder")},p))},go=function(n){var r=n.inputElement,o=n.prefixCls,a=n.id,i=n.inputRef,l=n.disabled,u=n.autoFocus,p=n.autoComplete,g=n.activeDescendantId,f=n.mode,s=n.open,c=n.values,m=n.placeholder,d=n.tabIndex,T=n.showSearch,B=n.searchValue,q=n.activeValue,D=n.maxLength,K=n.onInputKeyDown,H=n.onInputMouseDown,W=n.onInputChange,oe=n.onInputPaste,ve=n.onInputCompositionStart,F=n.onInputCompositionEnd,A=t.useState(!1),Y=fe(A,2),X=Y[0],Q=Y[1],$=f==="combobox",le=$||T,O=c[0],v=B||"";$&&q&&!X&&(v=q),t.useEffect(function(){$&&Q(!1)},[$,q]);var L=f!=="combobox"&&!s&&!T?!1:!!v,J=O&&(typeof O.label=="string"||typeof O.label=="number")?O.label.toString():void 0,z=function(){if(O)return null;var ge=L?{visibility:"hidden"}:void 0;return t.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:ge},m)};return t.createElement(t.Fragment,null,t.createElement("span",{className:"".concat(o,"-selection-search")},t.createElement(Mn,{ref:i,prefixCls:o,id:a,open:s,inputElement:r,disabled:l,autoFocus:u,autoComplete:p,editable:le,activeDescendantId:g,value:v,onKeyDown:K,onMouseDown:H,onChange:function(ge){Q(!0),W(ge)},onPaste:oe,onCompositionStart:ve,onCompositionEnd:F,tabIndex:d,attrs:Dn(n,!0),maxLength:$?D:void 0})),!$&&O&&!L&&t.createElement("span",{className:"".concat(o,"-selection-item"),title:J},O.label),z())};function lt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,n=t.useRef(null),r=t.useRef(null);t.useEffect(function(){return function(){window.clearTimeout(r.current)}},[]);function o(a){(a||n.current===null)&&(n.current=a),window.clearTimeout(r.current),r.current=window.setTimeout(function(){n.current=null},e)}return[function(){return n.current},o]}function ho(e){return![I.ESC,I.SHIFT,I.BACKSPACE,I.TAB,I.WIN_KEY,I.ALT,I.META,I.WIN_KEY_RIGHT,I.CTRL,I.SEMICOLON,I.EQUALS,I.CAPS_LOCK,I.CONTEXT_MENU,I.F1,I.F2,I.F3,I.F4,I.F5,I.F6,I.F7,I.F8,I.F9,I.F10,I.F11,I.F12].includes(e)}var bo=function(n,r){var o=t.useRef(null),a=t.useRef(!1),i=n.prefixCls,l=n.open,u=n.mode,p=n.showSearch,g=n.tokenWithEnter,f=n.onSearch,s=n.onSearchSubmit,c=n.onToggleOpen,m=n.onInputKeyDown,d=n.domRef;t.useImperativeHandle(r,function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}});var T=lt(0),B=fe(T,2),q=B[0],D=B[1],K=function(v){var L=v.which;(L===I.UP||L===I.DOWN)&&v.preventDefault(),m&&m(v),L===I.ENTER&&u==="tags"&&!a.current&&!l&&(s==null||s(v.target.value)),ho(L)&&c(!0)},H=function(){D(!0)},W=t.useRef(null),oe=function(v){f(v,!0,a.current)!==!1&&c(!0)},ve=function(){a.current=!0},F=function(v){a.current=!1,u!=="combobox"&&oe(v.target.value)},A=function(v){var L=v.target.value;if(g&&W.current&&/[\r\n]/.test(W.current)){var J=W.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");L=L.replace(J,W.current)}W.current=null,oe(L)},Y=function(v){var L=v.clipboardData,J=L.getData("text");W.current=J},X=function(v){var L=v.target;if(L!==o.current){var J=document.body.style.msTouchAction!==void 0;J?setTimeout(function(){o.current.focus()}):o.current.focus()}},Q=function(v){var L=q();v.target!==o.current&&!L&&v.preventDefault(),(u!=="combobox"&&(!p||!L)||!l)&&(l&&f("",!0,!1),c())},$={inputRef:o,onInputKeyDown:K,onInputMouseDown:H,onInputChange:A,onInputPaste:Y,onInputCompositionStart:ve,onInputCompositionEnd:F},le=u==="multiple"||u==="tags"?t.createElement(vo,Ye({},n,$)):t.createElement(go,Ye({},n,$));return t.createElement("div",{ref:d,className:"".concat(i,"-selector"),onClick:X,onMouseDown:Q},le)},ct=t.forwardRef(bo);ct.displayName="Selector";function wo(e,n,r){var o=t.useRef(null);o.current={open:n,triggerOpen:r},t.useEffect(function(){function a(i){var l=i.target;l.shadowRoot&&i.composed&&(l=i.composedPath()[0]||l),o.current.open&&e().filter(function(u){return u}).every(function(u){return!u.contains(l)&&u!==l})&&o.current.triggerOpen(!1)}return window.addEventListener("mousedown",a),function(){return window.removeEventListener("mousedown",a)}},[])}function yo(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,n=t.useState(!1),r=fe(n,2),o=r[0],a=r[1],i=t.useRef(null),l=function(){window.clearTimeout(i.current)};t.useEffect(function(){return l},[]);var u=function(g,f){l(),i.current=window.setTimeout(function(){a(g),f&&f()},e)};return[o,u,l]}var ut=t.createContext(null);function So(){return t.useContext(ut)}var xo=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","showArrow","inputIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],Co=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function Rn(e){return e==="tags"||e==="multiple"}var ko=t.forwardRef(function(e,n){var r,o,a=e.id,i=e.prefixCls,l=e.className,u=e.showSearch,p=e.tagRender,g=e.direction,f=e.omitDomProps,s=e.displayValues,c=e.onDisplayValuesChange,m=e.emptyOptions,d=e.notFoundContent,T=d===void 0?"Not Found":d,B=e.onClear,q=e.mode,D=e.disabled,K=e.loading,H=e.getInputElement,W=e.getRawInputElement,oe=e.open,ve=e.defaultOpen,F=e.onDropdownVisibleChange,A=e.activeValue,Y=e.onActiveValueChange,X=e.activeDescendantId,Q=e.searchValue,$=e.onSearch,le=e.onSearchSplit,O=e.tokenSeparators,v=e.allowClear,L=e.showArrow,J=e.inputIcon,z=e.clearIcon,be=e.OptionList,ge=e.animation,Ne=e.transitionName,U=e.dropdownStyle,N=e.dropdownClassName,h=e.dropdownMatchSelectWidth,P=e.dropdownRender,G=e.dropdownAlign,_=e.placement,x=e.getPopupContainer,Z=e.showAction,he=Z===void 0?[]:Z,j=e.onFocus,V=e.onBlur,re=e.onKeyUp,ae=e.onKeyDown,ce=e.onMouseDown,Ce=tn(e,xo),pe=Rn(q),we=(u!==void 0?u:pe)||q==="combobox",ne=ie({},Ce);Co.forEach(function(k){delete ne[k]}),f==null||f.forEach(function(k){delete ne[k]});var Se=t.useState(!1),Ee=fe(Se,2),Pe=Ee[0],De=Ee[1];t.useEffect(function(){De(_t())},[]);var Ae=t.useRef(null),E=t.useRef(null),ye=t.useRef(null),ue=t.useRef(null),Me=t.useRef(null),Ke=yo(),on=fe(Ke,3),Je=on[0],rn=on[1],Ze=on[2];t.useImperativeHandle(n,function(){var k,C;return{focus:(k=ue.current)===null||k===void 0?void 0:k.focus,blur:(C=ue.current)===null||C===void 0?void 0:C.blur,scrollTo:function(Ie){var se;return(se=Me.current)===null||se===void 0?void 0:se.scrollTo(Ie)}}});var Fe=t.useMemo(function(){var k;if(q!=="combobox")return Q;var C=(k=s[0])===null||k===void 0?void 0:k.value;return typeof C=="string"||typeof C=="number"?String(C):""},[Q,q,s]),an=q==="combobox"&&typeof H=="function"&&H()||null,je=typeof W=="function"&&W(),hn=qt(E,je==null||(r=je.props)===null||r===void 0?void 0:r.ref),fn=En(void 0,{defaultValue:ve,value:oe}),ln=fe(fn,2),Qe=ln[0],en=ln[1],me=Qe,pn=!T&&m;(D||pn&&me&&q==="combobox")&&(me=!1);var We=pn?!1:me,Te=t.useCallback(function(k){var C=k!==void 0?k:!me;me!==C&&!D&&(en(C),F==null||F(C))},[D,me,en,F]),y=t.useMemo(function(){return(O||[]).some(function(k){return[`
`,`\r
`].includes(k)})},[O]),w=function(C,xe,Ie){var se=!0,Re=C;Y==null||Y(null);var _e=Ie?null:io(C,O);return q!=="combobox"&&_e&&(Re="",le==null||le(_e),Te(!1),se=!1),$&&Fe!==Re&&$(Re,{source:xe?"typing":"effect"}),se},b=function(C){!C||!C.trim()||$(C,{source:"submit"})};t.useEffect(function(){!me&&!pe&&q!=="combobox"&&w("",!1,!1)},[me]),t.useEffect(function(){Qe&&D&&en(!1),D&&rn(!1)},[D]);var M=lt(),ee=fe(M,2),te=ee[0],ze=ee[1],$e=function(C){var xe=te(),Ie=C.which;if(Ie===I.ENTER&&(q!=="combobox"&&C.preventDefault(),me||Te(!0)),ze(!!Fe),Ie===I.BACKSPACE&&!xe&&pe&&!Fe&&s.length){for(var se=Oe(s),Re=null,_e=se.length-1;_e>=0;_e-=1){var un=se[_e];if(!un.disabled){se.splice(_e,1),Re=un;break}}Re&&c(se,{type:"remove",values:[Re]})}for(var Ue=arguments.length,nn=new Array(Ue>1?Ue-1:0),Ge=1;Ge<Ue;Ge++)nn[Ge-1]=arguments[Ge];if(me&&Me.current){var An;(An=Me.current).onKeyDown.apply(An,[C].concat(nn))}ae==null||ae.apply(void 0,[C].concat(nn))},ke=function(C){for(var xe=arguments.length,Ie=new Array(xe>1?xe-1:0),se=1;se<xe;se++)Ie[se-1]=arguments[se];if(me&&Me.current){var Re;(Re=Me.current).onKeyUp.apply(Re,[C].concat(Ie))}re==null||re.apply(void 0,[C].concat(Ie))},He=function(C){var xe=s.filter(function(Ie){return Ie!==C});c(xe,{type:"remove",values:[C]})},cn=t.useRef(!1),bn=function(){rn(!0),D||(j&&!cn.current&&j.apply(void 0,arguments),he.includes("focus")&&Te(!0)),cn.current=!0},Nn=function(){rn(!1,function(){cn.current=!1,Te(!1)}),!D&&(Fe&&(q==="tags"?$(Fe,{source:"submit"}):q==="multiple"&&$("",{source:"blur"})),V&&V.apply(void 0,arguments))},Le=[];t.useEffect(function(){return function(){Le.forEach(function(k){return clearTimeout(k)}),Le.splice(0,Le.length)}},[]);var Be=function(C){var xe,Ie=C.target,se=(xe=ye.current)===null||xe===void 0?void 0:xe.getPopupElement();if(se&&se.contains(Ie)){var Re=setTimeout(function(){var nn=Le.indexOf(Re);if(nn!==-1&&Le.splice(nn,1),Ze(),!Pe&&!se.contains(document.activeElement)){var Ge;(Ge=ue.current)===null||Ge===void 0||Ge.focus()}});Le.push(Re)}for(var _e=arguments.length,un=new Array(_e>1?_e-1:0),Ue=1;Ue<_e;Ue++)un[Ue-1]=arguments[Ue];ce==null||ce.apply(void 0,[C].concat(un))},xt=t.useState(null),Tn=fe(xt,2),$n=Tn[0],Ct=Tn[1],kt=t.useState({}),It=fe(kt,2),Et=It[1];function Pt(){Et({})}Ft(function(){if(We){var k,C=Math.ceil((k=Ae.current)===null||k===void 0?void 0:k.offsetWidth);$n!==C&&!Number.isNaN(C)&&Ct(C)}},[We]);var _n;je&&(_n=function(C){Te(C)}),wo(function(){var k;return[Ae.current,(k=ye.current)===null||k===void 0?void 0:k.getPopupElement()]},We,Te);var Rt=t.useMemo(function(){return ie(ie({},e),{},{notFoundContent:T,open:me,triggerOpen:We,id:a,showSearch:we,multiple:pe,toggleOpen:Te})},[e,T,We,me,a,we,pe,Te]),qn=L!==void 0?L:K||!pe&&q!=="combobox",Fn;qn&&(Fn=t.createElement(vn,{className:qe("".concat(i,"-arrow"),de({},"".concat(i,"-arrow-loading"),K)),customizeIcon:J,customizeIconProps:{loading:K,searchValue:Fe,open:me,focused:Je,showSearch:we}}));var Ln,Dt=function(){B==null||B(),c([],{type:"clear",values:s}),w("",!1,!1)};!D&&v&&(s.length||Fe)&&(Ln=t.createElement(vn,{className:"".concat(i,"-clear"),onMouseDown:Dt,customizeIcon:z},"×"));var Mt=t.createElement(be,{ref:Me}),Ot=qe(i,l,(o={},de(o,"".concat(i,"-focused"),Je),de(o,"".concat(i,"-multiple"),pe),de(o,"".concat(i,"-single"),!pe),de(o,"".concat(i,"-allow-clear"),v),de(o,"".concat(i,"-show-arrow"),qn),de(o,"".concat(i,"-disabled"),D),de(o,"".concat(i,"-loading"),K),de(o,"".concat(i,"-open"),me),de(o,"".concat(i,"-customize-input"),an),de(o,"".concat(i,"-show-search"),we),o)),Vn=t.createElement(at,{ref:ye,disabled:D,prefixCls:i,visible:We,popupElement:Mt,containerWidth:$n,animation:ge,transitionName:Ne,dropdownStyle:U,dropdownClassName:N,direction:g,dropdownMatchSelectWidth:h,dropdownRender:P,dropdownAlign:G,placement:_,getPopupContainer:x,empty:m,getTriggerDOMNode:function(){return E.current},onPopupVisibleChange:_n,onPopupMouseEnter:Pt},je?t.cloneElement(je,{ref:hn}):t.createElement(ct,Ye({},e,{domRef:E,prefixCls:i,inputElement:an,ref:ue,id:a,showSearch:we,mode:q,activeDescendantId:X,tagRender:p,values:s,open:me,onToggleOpen:Te,activeValue:A,searchValue:Fe,onSearch:w,onSearchSubmit:b,onRemove:He,tokenWithEnter:y}))),wn;return je?wn=Vn:wn=t.createElement("div",Ye({className:Ot},ne,{ref:Ae,onMouseDown:Be,onKeyDown:$e,onKeyUp:ke,onFocus:bn,onBlur:Nn}),Je&&!me&&t.createElement("span",{style:{width:0,height:0,display:"flex",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(s.map(function(k){var C=k.label,xe=k.value;return["number","string"].includes(Jn(C))?C:xe}).join(", "))),Vn,Fn,Ln),t.createElement(ut.Provider,{value:Rt},wn)});function Io(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var st=t.createContext(null),Eo=["disabled","title","children","style","className"];function Un(e){return typeof e=="string"||typeof e=="number"}var Po=function(n,r){var o=So(),a=o.prefixCls,i=o.id,l=o.open,u=o.multiple,p=o.mode,g=o.searchValue,f=o.toggleOpen,s=o.notFoundContent,c=o.onPopupScroll,m=t.useContext(st),d=m.flattenOptions,T=m.onActiveValue,B=m.defaultActiveFirstOption,q=m.onSelect,D=m.menuItemSelectedIcon,K=m.rawValues,H=m.fieldNames,W=m.virtual,oe=m.listHeight,ve=m.listItemHeight,F="".concat(a,"-item"),A=Lt(function(){return d},[l,d],function(N,h){return h[0]&&N[1]!==h[1]}),Y=t.useRef(null),X=function(h){h.preventDefault()},Q=function(h){Y.current&&Y.current.scrollTo(typeof h=="number"?{index:h}:h)},$=function(h){for(var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,G=A.length,_=0;_<G;_+=1){var x=(h+_*P+G)%G,Z=A[x],he=Z.group,j=Z.data;if(!he&&!j.disabled)return x}return-1},le=t.useState(function(){return $(0)}),O=fe(le,2),v=O[0],L=O[1],J=function(h){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;L(h);var G={source:P?"keyboard":"mouse"},_=A[h];if(!_){T(null,-1,G);return}T(_.value,h,G)};t.useEffect(function(){J(B!==!1?$(0):-1)},[A.length,g]);var z=t.useCallback(function(N){return K.has(N)&&p!=="combobox"},[p,Oe(K).toString()]);t.useEffect(function(){var N=setTimeout(function(){if(!u&&l&&K.size===1){var P=Array.from(K)[0],G=A.findIndex(function(_){var x=_.data;return x.value===P});G!==-1&&(J(G),Q(G))}});if(l){var h;(h=Y.current)===null||h===void 0||h.scrollTo(void 0)}return function(){return clearTimeout(N)}},[l,g]);var be=function(h){h!==void 0&&q(h,{selected:!K.has(h)}),u||f(!1)};if(t.useImperativeHandle(r,function(){return{onKeyDown:function(h){var P=h.which,G=h.ctrlKey;switch(P){case I.N:case I.P:case I.UP:case I.DOWN:{var _=0;if(P===I.UP?_=-1:P===I.DOWN?_=1:Io()&&G&&(P===I.N?_=1:P===I.P&&(_=-1)),_!==0){var x=$(v+_,_);Q(x),J(x,!0)}break}case I.ENTER:{var Z=A[v];Z&&!Z.data.disabled?be(Z.value):be(void 0),l&&h.preventDefault();break}case I.ESC:f(!1),l&&h.stopPropagation()}},onKeyUp:function(){},scrollTo:function(h){Q(h)}}}),A.length===0)return t.createElement("div",{role:"listbox",id:"".concat(i,"_list"),className:"".concat(F,"-empty"),onMouseDown:X},s);var ge=Object.keys(H).map(function(N){return H[N]}),Ne=function(h){return h.label},U=function(h){var P=A[h];if(!P)return null;var G=P.data||{},_=G.value,x=P.group,Z=Dn(G,!0),he=Ne(P);return P?t.createElement("div",Ye({"aria-label":typeof he=="string"&&!x?he:null},Z,{key:h,role:x?"presentation":"option",id:"".concat(i,"_list_").concat(h),"aria-selected":z(_)}),_):null};return t.createElement(t.Fragment,null,t.createElement("div",{role:"listbox",id:"".concat(i,"_list"),style:{height:0,width:0,overflow:"hidden"}},U(v-1),U(v),U(v+1)),t.createElement(no,{itemKey:"key",ref:Y,data:A,height:oe,itemHeight:ve,fullHeight:!1,onMouseDown:X,onScroll:c,virtual:W},function(N,h){var P,G=N.group,_=N.groupOption,x=N.data,Z=N.label,he=N.value,j=x.key;if(G){var V,re=(V=x.title)!==null&&V!==void 0?V:Un(Z)&&Z;return t.createElement("div",{className:qe(F,"".concat(F,"-group")),title:re},Z!==void 0?Z:j)}var ae=x.disabled,ce=x.title;x.children;var Ce=x.style,pe=x.className,we=tn(x,Eo),ne=eo(we,ge),Se=z(he),Ee="".concat(F,"-option"),Pe=qe(F,Ee,pe,(P={},de(P,"".concat(Ee,"-grouped"),_),de(P,"".concat(Ee,"-active"),v===h&&!ae),de(P,"".concat(Ee,"-disabled"),ae),de(P,"".concat(Ee,"-selected"),Se),P)),De=Ne(N),Ae=!D||typeof D=="function"||Se,E=typeof De=="number"?De:De||he,ye=Un(E)?E.toString():void 0;return ce!==void 0&&(ye=ce),t.createElement("div",Ye({},ne,{"aria-selected":Se,className:Pe,title:ye,onMouseMove:function(){v===h||ae||J(h)},onClick:function(){ae||be(he)},style:Ce}),t.createElement("div",{className:"".concat(Ee,"-content")},E),t.isValidElement(D)||Se,Ae&&t.createElement(vn,{className:"".concat(F,"-option-state"),customizeIcon:D,customizeIconProps:{isSelected:Se}},Se?"✓":null))}))},dt=t.forwardRef(Po);dt.displayName="OptionList";var sn=function(){return null};sn.isSelectOption=!0;var gn=function(){return null};gn.isSelectOptGroup=!0;var Ro=["children","value"],Do=["children"];function Mo(e){var n=e.key,r=e.props,o=r.children,a=r.value,i=tn(r,Ro);return ie({key:n,value:a!==void 0?a:n,children:o},i)}function ft(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Vt(e).map(function(r,o){if(!t.isValidElement(r)||!r.type)return null;var a=r.type.isSelectOptGroup,i=r.key,l=r.props,u=l.children,p=tn(l,Do);return n||!a?Mo(r):ie(ie({key:"__RC_SELECT_GRP__".concat(i===null?o:i,"__"),label:i},p),{},{options:ft(u)})}).filter(function(r){return r})}function Oo(e,n,r,o,a){return t.useMemo(function(){var i=e,l=!e;l&&(i=ft(n));var u=new Map,p=new Map,g=function(c,m,d){d&&typeof d=="string"&&c.set(m[d],m)};function f(s){for(var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=0;m<s.length;m+=1){var d=s[m];!d[r.options]||c?(u.set(d[r.value],d),g(p,d,r.label),g(p,d,o),g(p,d,a)):f(d[r.options],!0)}}return f(i),{options:i,valueOptions:u,labelOptions:p}},[e,n,r,o,a])}var Gn=0,No=At();function To(){var e;return No?(e=Gn,Gn+=1):e="TEST_OR_SSR",e}function $o(e){var n=t.useState(),r=fe(n,2),o=r[0],a=r[1];return t.useEffect(function(){a("rc_select_".concat(To()))},[]),e||o}function Xn(e){var n=t.useRef();n.current=e;var r=t.useCallback(function(){return n.current.apply(n,arguments)},[]);return r}function Cn(e,n){return it(e).join("").toUpperCase().includes(n)}const _o=function(e,n,r,o,a){return t.useMemo(function(){if(!r||o===!1)return e;var i=n.options,l=n.label,u=n.value,p=[],g=typeof o=="function",f=r.toUpperCase(),s=g?o:function(m,d){return a?Cn(d[a],f):d[i]?Cn(d[l!=="children"?l:"label"],f):Cn(d[u],f)},c=g?function(m){return Pn(m)}:function(m){return m};return e.forEach(function(m){if(m[i]){var d=s(r,c(m));if(d)p.push(m);else{var T=m[i].filter(function(B){return s(r,c(B))});T.length&&p.push(ie(ie({},m),{},de({},i,T)))}return}s(r,c(m))&&p.push(m)}),p},[e,o,a,r,n])},qo=function(e,n){var r=t.useRef({values:new Map,options:new Map}),o=t.useMemo(function(){var i=r.current,l=i.values,u=i.options,p=e.map(function(s){if(s.label===void 0){var c;return ie(ie({},s),{},{label:(c=l.get(s.value))===null||c===void 0?void 0:c.label})}return s}),g=new Map,f=new Map;return p.forEach(function(s){g.set(s.value,s),f.set(s.value,n.get(s.value)||u.get(s.value))}),r.current.values=g,r.current.options=f,p},[e,n]),a=t.useCallback(function(i){return n.get(i)||r.current.options.get(i)},[n]);return[o,a]};var Fo=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],Lo=["inputValue"];function Vo(e){return!e||Jn(e)!=="object"}var Ao=t.forwardRef(function(e,n){var r=e.id,o=e.mode,a=e.prefixCls,i=a===void 0?"rc-select":a,l=e.backfill,u=e.fieldNames,p=e.inputValue,g=e.searchValue,f=e.onSearch,s=e.autoClearSearchValue,c=s===void 0?!0:s,m=e.onSelect,d=e.onDeselect,T=e.dropdownMatchSelectWidth,B=T===void 0?!0:T,q=e.filterOption,D=e.filterSort,K=e.optionFilterProp,H=e.optionLabelProp,W=e.options,oe=e.children,ve=e.defaultActiveFirstOption,F=e.menuItemSelectedIcon,A=e.virtual,Y=e.listHeight,X=Y===void 0?200:Y,Q=e.listItemHeight,$=Q===void 0?20:Q,le=e.value,O=e.defaultValue,v=e.labelInValue,L=e.onChange,J=tn(e,Fo),z=$o(r),be=Rn(o),ge=!!(!W&&oe),Ne=t.useMemo(function(){return q===void 0&&o==="combobox"?!1:q},[q,o]),U=t.useMemo(function(){return rt(u,ge)},[JSON.stringify(u),ge]),N=En("",{value:g!==void 0?g:p,postState:function(w){return w||""}}),h=fe(N,2),P=h[0],G=h[1],_=Oo(W,oe,U,K,H),x=_.valueOptions,Z=_.labelOptions,he=_.options,j=t.useCallback(function(y){var w=it(y);return w.map(function(b){var M,ee,te,ze;if(Vo(b))M=b;else{var $e;te=b.key,ee=b.label,M=($e=b.value)!==null&&$e!==void 0?$e:te}var ke=x.get(M);if(ke){var He;ee===void 0&&(ee=ke==null?void 0:ke[H||U.label]),te===void 0&&(te=(He=ke==null?void 0:ke.key)!==null&&He!==void 0?He:M),ze=ke==null?void 0:ke.disabled}return{label:ee,value:M,key:te,disabled:ze}})},[U,H,x]),V=En(O,{value:le}),re=fe(V,2),ae=re[0],ce=re[1],Ce=t.useMemo(function(){var y,w=j(ae);return o==="combobox"&&!(!((y=w[0])===null||y===void 0)&&y.value)?[]:w},[ae,j,o]),pe=qo(Ce,x),we=fe(pe,2),ne=we[0],Se=we[1],Ee=t.useMemo(function(){if(!o&&ne.length===1){var y=ne[0];if(y.value===null&&(y.label===null||y.label===void 0))return[]}return ne.map(function(w){var b;return ie(ie({},w),{},{label:(b=w.label)!==null&&b!==void 0?b:w.value})})},[o,ne]),Pe=t.useMemo(function(){return new Set(ne.map(function(y){return y.value}))},[ne]);t.useEffect(function(){if(o==="combobox"){var y,w=(y=ne[0])===null||y===void 0?void 0:y.value;w!=null&&G(String(w))}},[ne]);var De=Xn(function(y,w){var b,M=w??y;return b={},de(b,U.value,y),de(b,U.label,M),b}),Ae=t.useMemo(function(){if(o!=="tags")return he;var y=Oe(he),w=function(M){return x.has(M)};return Oe(ne).sort(function(b,M){return b.value<M.value?-1:1}).forEach(function(b){var M=b.value;w(M)||y.push(De(M,b.label))}),y},[De,he,x,ne,o]),E=_o(Ae,U,P,Ne,K),ye=t.useMemo(function(){return o!=="tags"||!P||E.some(function(y){return y[K||"value"]===P})?E:[De(P)].concat(Oe(E))},[De,K,o,E,P]),ue=t.useMemo(function(){return D?Oe(ye).sort(function(y,w){return D(y,w)}):ye},[ye,D]),Me=t.useMemo(function(){return ao(ue,{fieldNames:U,childrenAsData:ge})},[ue,U,ge]),Ke=function(w){var b=j(w);if(ce(b),L&&(b.length!==ne.length||b.some(function(te,ze){var $e;return(($e=ne[ze])===null||$e===void 0?void 0:$e.value)!==(te==null?void 0:te.value)}))){var M=v?b:b.map(function(te){return te.value}),ee=b.map(function(te){return Pn(Se(te.value))});L(be?M:M[0],be?ee:ee[0])}},on=t.useState(null),Je=fe(on,2),rn=Je[0],Ze=Je[1],Fe=t.useState(0),an=fe(Fe,2),je=an[0],hn=an[1],fn=ve!==void 0?ve:o!=="combobox",ln=t.useCallback(function(y,w){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},M=b.source,ee=M===void 0?"keyboard":M;hn(w),l&&o==="combobox"&&y!==null&&ee==="keyboard"&&Ze(String(y))},[l,o]),Qe=function(w,b){var M=function(){var Le,Be=Se(w);return[v?{label:Be==null?void 0:Be[U.label],value:w,key:(Le=Be==null?void 0:Be.key)!==null&&Le!==void 0?Le:w}:w,Pn(Be)]};if(b&&m){var ee=M(),te=fe(ee,2),ze=te[0],$e=te[1];m(ze,$e)}else if(!b&&d){var ke=M(),He=fe(ke,2),cn=He[0],bn=He[1];d(cn,bn)}},en=Xn(function(y,w){var b,M=be?w.selected:!0;M?b=be?[].concat(Oe(ne),[y]):[y]:b=ne.filter(function(ee){return ee.value!==y}),Ke(b),Qe(y,M),o==="combobox"?Ze(""):(!Rn||c)&&(G(""),Ze(""))}),me=function(w,b){Ke(w),(b.type==="remove"||b.type==="clear")&&b.values.forEach(function(M){Qe(M.value,!1)})},pn=function(w,b){if(G(w),Ze(null),b.source==="submit"){var M=(w||"").trim();if(M){var ee=Array.from(new Set([].concat(Oe(Pe),[M])));Ke(ee),Qe(M,!0),G("")}return}b.source!=="blur"&&(o==="combobox"&&Ke(w),f==null||f(w))},We=function(w){var b=w;o!=="tags"&&(b=w.map(function(ee){var te=Z.get(ee);return te==null?void 0:te.value}).filter(function(ee){return ee!==void 0}));var M=Array.from(new Set([].concat(Oe(Pe),Oe(b))));Ke(M),M.forEach(function(ee){Qe(ee,!0)})},Te=t.useMemo(function(){var y=A!==!1&&B!==!1;return ie(ie({},_),{},{flattenOptions:Me,onActiveValue:ln,defaultActiveFirstOption:fn,onSelect:en,menuItemSelectedIcon:F,rawValues:Pe,fieldNames:U,virtual:y,listHeight:X,listItemHeight:$,childrenAsData:ge})},[_,Me,ln,fn,en,F,Pe,U,A,B,X,$,ge]);return t.createElement(st.Provider,{value:Te},t.createElement(ko,Ye({},J,{id:z,prefixCls:i,ref:n,omitDomProps:Lo,mode:o,displayValues:Ee,onDisplayValuesChange:me,searchValue:P,onSearch:pn,onSearchSplit:We,dropdownMatchSelectWidth:B,OptionList:dt,emptyOptions:!Me.length,activeValue:rn,activeDescendantId:"".concat(z,"_list_").concat(je)})))}),On=Ao;On.Option=sn;On.OptGroup=gn;const R=Kt(),Xe=Zn(et.BTR3),Ko=Xe.lineHeight,pt="18px";function kn(e){return e.replace(/"/g,'\\"').replace(/\n/g,"\\A")}const jo=Ve.div`
  width: 100%;
`,Bo=Ve.div`
  width: 100%;
`,Wo=In`
  width: 100%;

  .ant-select-selector {
    font-family: ${Xe.fontFamily};
    font-size: ${Xe.fontSize};
    line-height: ${Xe.lineHeight};
    font-weight: ${Xe.fontWeight};
    font-style: ${Xe.fontStyle};
    letter-spacing: ${Xe.letterSpacing};

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
    font-weight: ${Xe.fontWeight};
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
    ${Zn(et.BTM4)}
  }

  ${e=>e.isMultiSelect&&In`
    .ant-select-item-option-state {
      display: none;
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
        content: "${kn(e.t("select.tags.addPrefix"))}";
      }
      
      &.ant-select-item-option-selected .ant-select-item-option-content:before {
        content: "${kn(e.t("select.tags.removePrefix"))}";
      }

      .ant-select-item-option-content:after {
        content: "${kn(e.t("select.tags.addRemovePostfix"))}";
      }
    }
  `}
`,Ho=Ve.div.withConfig({shouldForwardProp:e=>!["cssConfig","isMultiSelect","t"].includes(e)})`
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
  `}const Go=Ve.div`
  display: flex;
  color: ${R("enabled.loadingError.color")};

  > svg {
   margin-top: 2px;
   margin-right: 4px;
  }

  > div {
   flex: 1;
  }
`,Xo=Ve.span`
  color: ${R("enabled.option.description")};
`,Yo=Ve.div`
  display: grid;
  grid-template-columns: ${pt} 1fr;
  column-gap: 5px;
  align-items: start;
`,Qo=Ve.div`
  width: ${pt};
  height: ${Ko};
  display: flex;
  align-items: center;
  justify-content: center;
`,Jo=Ve.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,Yn=e=>typeof e!="object"&&typeof e!="number"?{label:e,value:mn(),key:mn()}:e,Qn=(e,n,r)=>e==null||!n||r!=="tags"?e:Array.isArray(e)?e.map(Yn):[Yn(e)],Zo=(e,n)=>{if(Array.isArray(n)){let r=n[n.length-1];return typeof r!="object"&&typeof r!="number"&&(r={label:r,value:mn(),key:mn()}),[...e,r]}return n},er=(e,n)=>{if(Array.isArray(n)&&Array.isArray(e)){const r=[...e];if(n.length===0)return[];const o=r.findIndex((a,i)=>typeof a=="object"?n[i]!==(a==null?void 0:a.value):n[i]!==a);return r.splice(o,1),r}return n},mt=e=>{for(;e;){if(e instanceof Element&&(window.getComputedStyle(e).overflow==="auto"||window.getComputedStyle(e).overflow==="scroll"))return e;e=e.parentNode}return null},nr=e=>{for(;e;){if(e instanceof Element){const n=window.getComputedStyle(e),{overflowY:r,overflow:o}=n;if(r==="auto"||r==="scroll"||r==="overlay"||o==="auto"||o==="scroll")return e}e=e.parentNode}return null},vt=()=>{const{t:e}=ot();return S.createElement(jn,{image:jn.PRESENTED_IMAGE_SIMPLE,description:S.createElement(Bt,{type:"BTR3"},e("select.empty")),className:"ant-empty-small","data-testid":"select-no-data","kl-id":"empty-data"})},gt=()=>S.createElement(jt,{testId:"select-chevron-icon",klId:"down-icon"}),tr=()=>S.createElement(to,{testId:"select-search-icon",klId:"search-icon"}),ht=()=>S.createElement(Wt,{mode:"filled",testId:"select-clear-search-icon",klId:"clear-icon"});function bt({onLoad:e}){const n=t.useRef(null),r=t.useRef(e);return r.current=e,t.useEffect(()=>{const o=n.current;if(!o||typeof IntersectionObserver>"u")return;let a,i=!1,l=!1,u=0;const p=()=>nr(o)??mt(o),g=s=>{a==null||a.disconnect(),a=new IntersectionObserver(([c])=>{if(l)return;const m=!!(c!=null&&c.isIntersecting);m&&!i&&r.current(),i=m},{...s?{root:s}:{},rootMargin:"0px",threshold:0}),a.observe(o)},f=p();return f?g(f):u=requestAnimationFrame(()=>{l||g(p())}),()=>{l=!0,a==null||a.disconnect(),u&&cancelAnimationFrame(u)}},[]),S.createElement("div",{ref:n,style:{width:"100%"}},S.createElement(nt,{centered:!0,testId:"select-option-loading-more"}))}function wt({cssConfig:e,children:n}){return S.createElement(Go,{cssConfig:e},S.createElement(zt,null),S.createElement("div",null,n))}const or=Ve(({className:e})=>S.createElement("div",{className:qe("dropdown-v6-multi-checkbox",e)},S.createElement(Bn,{className:"dropdown-v6-multi-checkbox-unchecked",checked:!1}),S.createElement(Bn,{className:"dropdown-v6-multi-checkbox-checked",checked:!0})))`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .kl6-checkbox-wrapper {
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

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }

  .ant-select-item-option.ant-select-item-option-selected & .dropdown-v6-multi-checkbox-unchecked,
  .ant-select-item-option:not(.ant-select-item-option-selected) & .dropdown-v6-multi-checkbox-checked {
    display: none;
  }
`;vt.__docgenInfo={description:"",methods:[],displayName:"EmptyData"};gt.__docgenInfo={description:"",methods:[],displayName:"ChevronIcon"};tr.__docgenInfo={description:"",methods:[],displayName:"SearchIcon"};ht.__docgenInfo={description:"",methods:[],displayName:"ClearIcon"};bt.__docgenInfo={description:"",methods:[],displayName:"LoadingTrigger"};wt.__docgenInfo={description:"",methods:[],displayName:"LoadingErrorContent",props:{cssConfig:{required:!0,tsType:{name:"intersection",raw:`Focus & {
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
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1}],raw:"Record<ValidationStatus, StateProps>"}],raw:"Partial<Record<ValidationStatus, StateProps>>"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const rr=e=>Ht({...e,mode:void 0},{componentName:"select",defaultValues:{}}),ar=Ve(On).withConfig({shouldForwardProp:e=>!["cssConfig","validationStatus"].includes(e)})`${Wo}`,yt=e=>S.createElement(tt,{size:"small"},`+ ${e.length} ...`),dn=t.forwardRef((e,n)=>{const{children:r,hasMore:o,onLoadMore:a,options:i,cssConfig:l,...u}=Ut(rr(e)),[p,g]=t.useState(),f=t.useRef(a);f.current=a;const s=t.useCallback(()=>{var d;(d=f.current)==null||d.call(f)},[]),c=e.mode==="multiple"||e.mode==="tags";function m(d){return d.options?S.createElement(gn,{key:d.value,label:d.label},d.options.map(m)):S.createElement(sn,{...d,key:d.value,"data-value":d.value,label:typeof d.label=="string"?d.label.trim():d.label,role:"option"},S.createElement(Yo,null,c&&S.createElement(Qo,null,S.createElement(or,null)),S.createElement(Jo,null,S.createElement(Yt,{truncationWidth:p},d.label),d.description&&S.createElement(Xo,{cssConfig:l},d.description))))}return S.createElement(St,{...u,ref:n,mode:e.mode,cssConfig:l,setSelectOffsetWidth:g},r||(i==null?void 0:i.map(m)),o&&S.createElement(sn,{key:"loading-more-option",disabled:!0},S.createElement(bt,{onLoad:s})))}),St=t.forwardRef(({setSelectOffsetWidth:e,allowNonUniqueValues:n,autoClearSearchValue:r=!0,autoFocus:o=!1,children:a,className:i,closeOnParentScroll:l,cssConfig:u,defaultValue:p,disabled:g=!1,dropdownClassName:f,dropdownMaxHeight:s,filterOption:c,getPopupContainer:m,loading:d=!1,loadingError:T,mode:B,notFoundContent:q,onChange:D,onDropdownVisibleChange:K,onSearch:H,onClear:W,open:oe,optionFilterProp:ve="label",optionLabelProp:F="label",placement:A="bottomLeft",readOnly:Y,renderDropdown:X,renderFooter:Q,renderHeader:$,showArrow:le=!0,showSearch:O=!1,testAttributes:v,usePortal:L,validationStatus:J="default",value:z,virtual:be=!1,...ge},Ne)=>{Qt();const U=Gt(u,Uo,dn),N=Xt(),{t:h}=ot(),[P,G]=t.useState(()=>Qn(p,n,B)),_=t.useMemo(()=>Qn(z,n,B),[z]),x=_!==void 0?_:P,Z=B==="multiple"||B==="tags",[he,j]=t.useState(!!oe),V=t.useRef(null);t.useEffect(()=>{if(V.current){const E=V.current.offsetWidth;e&&e(E)}},[V]);const re=t.useCallback(()=>{l&&(V!=null&&V.current)&&j(!1)},[l,V]),[ae,ce]=t.useState(""),Ce=E=>{r||E!==""?(ce(E),H==null||H(E)):H==null||H(ae)},pe=()=>{ce(""),W==null||W()},we=E=>{O&&!r&&E.code==="Backspace"&&ae.length===1&&pe()},ne=()=>{r&&ce("")},Se=t.useCallback((E,ye)=>{let ue=E;n&&Array.isArray(ue)&&(Array.isArray(x)&&x.length<ue.length?ue=Zo(x,E):ue=er(x,E)),G(ue),r&&ce(""),D==null||D(ue,ye)},[D,x,n,r]);t.useEffect(()=>{const E=mt(V==null?void 0:V.current);if(!(!(E instanceof Element)||!l))return E.addEventListener("scroll",re),()=>E.removeEventListener("scroll",re)},[l,oe,V,re]);const Ee=t.useCallback(E=>{const ye=v!=null&&v["data-testid"]?`${v==null?void 0:v["data-testid"]}-select-dropdown`:"select-dropdown",ue=v!=null&&v["kl-id"]?`${v==null?void 0:v["kl-id"]}-select-dropdown`:"select-dropdown";return S.createElement(Ho,{cssConfig:u,"data-testid":ye,"kl-id":ue,isMultiSelect:Z,t:h},d?S.createElement(nt,{centered:!0,testId:"select-loader",klId:"loader"}):S.createElement(S.Fragment,null,$&&S.createElement(S.Fragment,null,$(),S.createElement(Kn,{mode:"light"})),X?X(E):E,Q&&S.createElement(S.Fragment,null,S.createElement(Kn,{mode:"light"}),Q())))},[Q,$,d,u,Z,X,v]),Pe=t.useRef(null),De=t.useCallback(E=>{if(E&&Pe.current){const ye=Array.isArray(x);if(!x||ye&&!x.length)Pe.current.scrollTo(0);else if(ye){const ue=[...x].sort((Me,Ke)=>Ke-Me).pop();Pe.current.scrollTo(ue??0)}}if(l){j(E);return}K&&K(E)},[l,K,x]),Ae=T&&S.createElement(wt,{cssConfig:u},T);return S.createElement(jo,{ref:Ne},S.createElement(Bo,{ref:V},S.createElement(ar,{ref:Pe,allowClear:Z,"aria-disabled":g,autoClearSearchValue:r,autoFocus:o,className:qe(i,{"kl6-select-readonly":Y}),clearIcon:S.createElement(ht,null),cssConfig:u,"data-validationstatus":J,"data-value":x,disabled:g||Y,dropdownAlign:{offset:[0,A!=null&&A.includes("top")?-8:8]},dropdownClassName:qe("dropdown-custom",f,U,{"dropdown-loading":d}),dropdownRender:Ee,filterOption:c,getPopupContainer:m??N.getPopupContainer??(E=>L??N.usePortal?document.body:E.parentElement),listHeight:s??256,loading:d,maxTagPlaceholder:yt,menuItemSelectedIcon:null,mode:B,notFoundContent:Ae||q||S.createElement(vt,null),onBlurCapture:ne,onChange:Se,onDropdownVisibleChange:De,onSearch:Ce,onClear:pe,onKeyDown:we,open:l?he:oe,optionFilterProp:ve,optionLabelProp:F,placement:A,prefixCls:"ant-select",searchValue:ae,showArrow:O||le,showSearch:O,inputIcon:S.createElement(gt,null),tagRender:E=>S.createElement(tt,{...E,disabled:g,readOnly:Y,size:"small"}),transitionName:"ant-slide-up",validationStatus:J,value:x,virtual:be,...ge,...v},T?null:a)))});St.displayName="SelectView";dn.displayName="Select";dn.Option=sn;dn.OptGroup=gn;yt.__docgenInfo={description:"",methods:[],displayName:"maxTagPlaceholder"};dn.__docgenInfo={description:"",methods:[],displayName:"Select",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};export{gt as C,vt as E,or as M,dn as S,tr as a,ht as b,yt as m,Wo as s};
