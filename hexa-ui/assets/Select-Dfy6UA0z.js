import{aV as Vt,_ as ie,aX as Lt,bq as At,n as Ne,r as t,i as tn,l as Xe,j as qe,k as de,X as Kt,a as fe,bd as jt,bp as Bt,aZ as Wt,p as it,bo as zt,b9 as Ht,m as Ut,H as Be,a1 as Gt,a2 as lt,aw as ct,a0 as Dn,R as C,ag as Xt,T as Yt,A as Qt,aQ as Jt,a5 as Zt,u as eo,aM as no,av as to}from"./iframe-DlY6n6Um.js";import{T as oo}from"./TextReducer-mTsc_fVR.js";import{u as ro}from"./useGlobalStyles-DCO_4ztA.js";import{D as zn}from"./Divider-BzNbSw2T.js";import{L as ut}from"./Loader-BjmnRfIR.js";import{T as st}from"./Tag-Cd3srqW9.js";import{r as ao}from"./index-CY9qp4ym.js";import{K as E,u as Mn}from"./KeyCode-B45xthVk.js";import{T as io}from"./index-Bz97onRI.js";import{p as Tn}from"./pickAttrs-CzltAtTh.js";import{F as lo}from"./Overflow-wC_Ss__i.js";import{o as co,E as Hn}from"./type-Cyafuwrq.js";import{L as uo}from"./List-wDBxy9Ze.js";import{C as Un}from"./Checkbox-lkNIXc0L.js";import{I as so}from"./IconSearch-CS25M_v0.js";import{r as fo,u as po}from"./v4-BoP187Zn.js";import{u as dt}from"./useTranslation-CGS-Ff88.js";var yn,Gn;function mo(){if(Gn)return yn;Gn=1;var e=ao(),n=1/0,r=17976931348623157e292;function o(a){if(!a)return a===0?a:0;if(a=e(a),a===n||a===-n){var i=a<0?-1:1;return i*r}return a===a?a:0}return yn=o,yn}var Sn,Xn;function vo(){if(Xn)return Sn;Xn=1;var e=mo();function n(r){var o=e(r),a=o%1;return o===o?a?o-a:o:0}return Sn=n,Sn}let Yn,xn,Cn=0,kn=0;function mn(e,n,r){let o=0;const a=new Array(16);e=e||{};let i=e.node||Yn,l=e.clockseq!==void 0?e.clockseq:xn;if(i==null||l==null){const c=e.random||(e.rng||fo)();i==null&&(i=Yn=[c[0]|1,c[1],c[2],c[3],c[4],c[5]]),l==null&&(l=xn=(c[6]<<8|c[7])&16383)}let d=e.msecs!==void 0?e.msecs:Date.now(),p=e.nsecs!==void 0?e.nsecs:kn+1;const h=d-Cn+(p-kn)/1e4;if(h<0&&e.clockseq===void 0&&(l=l+1&16383),(h<0||d>Cn)&&e.nsecs===void 0&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Cn=d,kn=p,xn=l,d+=122192928e5;const m=((d&268435455)*1e4+p)%4294967296;a[o++]=m>>>24&255,a[o++]=m>>>16&255,a[o++]=m>>>8&255,a[o++]=m&255;const s=d/4294967296*1e4&268435455;a[o++]=s>>>8&255,a[o++]=s&255,a[o++]=s>>>24&15|16,a[o++]=s>>>16&255,a[o++]=l>>>8|128,a[o++]=l&255;for(let c=0;c<6;++c)a[o+c]=i[c];return n||po(a)}var En,Qn;function go(){if(Qn)return En;Qn=1;var e=vo(),n="Expected a function";function r(o,a){var i;if(typeof a!="function")throw new TypeError(n);return o=e(o),function(){return--o>0&&(i=a.apply(this,arguments)),o<=1&&(a=void 0),i}}return En=r,En}var In,Jn;function ho(){if(Jn)return In;Jn=1;var e=go();function n(r){return e(2,r)}return In=n,In}var bo=ho();const wo=Vt(bo);function Zn(e,n){var r=e.key,o;return"value"in e&&(o=e.value),r??(o!==void 0?o:"rc-index-key-".concat(n))}function ft(e,n){var r=e||{},o=r.label,a=r.value,i=r.options;return{label:o||(n?"children":"label"),value:a||"value",options:i||"options"}}function yo(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.fieldNames,o=n.childrenAsData,a=[],i=ft(r,!1),l=i.label,d=i.value,p=i.options;function h(m,s){m.forEach(function(c){var u=c[l];if(s||!(p in c)){var w=c[d];a.push({key:Zn(c,a.length),groupOption:s,data:c,label:u,value:w})}else{var T=u;T===void 0&&o&&(T=c.label),a.push({key:Zn(c,a.length),group:!0,data:c,label:T}),h(c[p],!0)}})}return h(e,!1),a}function Nn(e){var n=ie({},e);return"props"in n||Object.defineProperty(n,"props",{get:function(){return Lt(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),n}}),n}function So(e,n){if(!n||!n.length)return null;var r=!1;function o(i,l){var d=At(l),p=d[0],h=d.slice(1);if(!p)return[i];var m=i.split(p);return r=r||m.length>1,m.reduce(function(s,c){return[].concat(Ne(s),Ne(o(c,h)))},[]).filter(function(s){return s})}var a=o(e,n);return r?a:null}var xo=["prefixCls","disabled","visible","children","popupElement","containerWidth","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],Co=function(n){var r=n===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:r,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:r,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:r,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:r,adjustY:1}}}},ko=function(n,r){var o=n.prefixCls;n.disabled;var a=n.visible,i=n.children,l=n.popupElement,d=n.containerWidth,p=n.animation,h=n.transitionName,m=n.dropdownStyle,s=n.dropdownClassName,c=n.direction,u=c===void 0?"ltr":c,w=n.placement,T=n.dropdownMatchSelectWidth,B=n.dropdownRender,q=n.dropdownAlign,D=n.getPopupContainer,K=n.empty,H=n.getTriggerDOMNode,W=n.onPopupVisibleChange,oe=n.onPopupMouseEnter,ve=tn(n,xo),F="".concat(o,"-dropdown"),A=l;B&&(A=B(l));var Y=t.useMemo(function(){return Co(T)},[T]),X=p?"".concat(F,"-").concat(p):h,Q=t.useRef(null);t.useImperativeHandle(r,function(){return{getPopupElement:function(){return Q.current}}});var _=ie({minWidth:d},m);return typeof T=="number"?_.width=T:T&&(_.width=d),t.createElement(io,Xe({},ve,{showAction:W?["click"]:[],hideAction:W?["click"]:[],popupPlacement:w||(u==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:Y,prefixCls:F,popupTransitionName:X,popup:t.createElement("div",{ref:Q,onMouseEnter:oe},A),popupAlign:q,popupVisible:a,getPopupContainer:D,popupClassName:qe(s,de({},"".concat(F,"-empty"),K)),popupStyle:_,getTriggerDOMNode:H,onPopupVisibleChange:W}),i)},pt=t.forwardRef(ko);pt.displayName="SelectTrigger";var vn=function(n){var r=n.className,o=n.customizeIcon,a=n.customizeIconProps,i=n.onMouseDown,l=n.onClick,d=n.children,p;return typeof o=="function"?p=o(a):p=o,t.createElement("span",{className:r,onMouseDown:function(m){m.preventDefault(),i&&i(m)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:l,"aria-hidden":!0},p!==void 0?p:t.createElement("span",{className:qe(r.split(/\s+/).map(function(h){return"".concat(h,"-icon")}))},d))},Eo=function(n,r){var o,a,i=n.prefixCls,l=n.id,d=n.inputElement,p=n.disabled,h=n.tabIndex,m=n.autoFocus,s=n.autoComplete,c=n.editable,u=n.activeDescendantId,w=n.value,T=n.maxLength,B=n.onKeyDown,q=n.onMouseDown,D=n.onChange,K=n.onPaste,H=n.onCompositionStart,W=n.onCompositionEnd,oe=n.open,ve=n.attrs,F=d||t.createElement("input",null),A=F,Y=A.ref,X=A.props,Q=X.onKeyDown,_=X.onChange,le=X.onMouseDown,N=X.onCompositionStart,f=X.onCompositionEnd,V=X.style;return F=t.cloneElement(F,ie(ie(ie({type:"search"},X),{},{id:l,ref:Kt(r,Y),disabled:p,tabIndex:h,autoComplete:s||"off",autoFocus:m,className:qe("".concat(i,"-selection-search-input"),(o=F)===null||o===void 0||(a=o.props)===null||a===void 0?void 0:a.className),role:"combobox","aria-expanded":oe,"aria-haspopup":"listbox","aria-owns":"".concat(l,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(l,"_list"),"aria-activedescendant":u},ve),{},{value:c?w:"",maxLength:T,readOnly:!c,unselectable:c?null:"on",style:ie(ie({},V),{},{opacity:c?null:0}),onKeyDown:function(z){B(z),Q&&Q(z)},onMouseDown:function(z){q(z),le&&le(z)},onChange:function(z){D(z),_&&_(z)},onCompositionStart:function(z){H(z),N&&N(z)},onCompositionEnd:function(z){W(z),f&&f(z)},onPaste:K})),F},_n=t.forwardRef(Eo);_n.displayName="Input";function mt(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}var Io=typeof window<"u"&&window.document&&window.document.documentElement,Po=Io;function Ro(e,n){Po?t.useLayoutEffect(e,n):t.useEffect(e,n)}var et=function(n){n.preventDefault(),n.stopPropagation()},Do=function(n){var r=n.id,o=n.prefixCls,a=n.values,i=n.open,l=n.searchValue,d=n.inputRef,p=n.placeholder,h=n.disabled,m=n.mode,s=n.showSearch,c=n.autoFocus,u=n.autoComplete,w=n.activeDescendantId,T=n.tabIndex,B=n.removeIcon,q=n.maxTagCount,D=n.maxTagTextLength,K=n.maxTagPlaceholder,H=K===void 0?function(j){return"+ ".concat(j.length," ...")}:K,W=n.tagRender,oe=n.onToggleOpen,ve=n.onRemove,F=n.onInputChange,A=n.onInputPaste,Y=n.onInputKeyDown,X=n.onInputMouseDown,Q=n.onInputCompositionStart,_=n.onInputCompositionEnd,le=t.useRef(null),N=t.useState(0),f=fe(N,2),V=f[0],J=f[1],z=t.useState(!1),be=fe(z,2),ge=be[0],Oe=be[1],U="".concat(o,"-selection"),O=i||m==="tags"?l:"",v=m==="tags"||s&&(i||ge);Ro(function(){J(le.current.scrollWidth)},[O]);function P(j,L,re,ae,ce){return t.createElement("span",{className:qe("".concat(U,"-item"),de({},"".concat(U,"-item-disabled"),re)),title:typeof j=="string"||typeof j=="number"?j.toString():void 0},t.createElement("span",{className:"".concat(U,"-item-content")},L),ae&&t.createElement(vn,{className:"".concat(U,"-item-remove"),onMouseDown:et,onClick:ce,customizeIcon:B},"×"))}function G(j,L,re,ae,ce){var Ce=function(we){et(we),oe(!i)};return t.createElement("span",{onMouseDown:Ce},W({label:L,value:j,disabled:re,closable:ae,onClose:ce}))}function $(j){var L=j.disabled,re=j.label,ae=j.value,ce=!h&&!L,Ce=re;if(typeof D=="number"&&(typeof re=="string"||typeof re=="number")){var pe=String(Ce);pe.length>D&&(Ce="".concat(pe.slice(0,D),"..."))}var we=function(Se){Se&&Se.stopPropagation(),ve(j)};return typeof W=="function"?G(ae,Ce,L,ce,we):P(re,Ce,L,ce,we)}function S(j){var L=typeof H=="function"?H(j):H;return P(L,L,!1)}var Z=t.createElement("div",{className:"".concat(U,"-search"),style:{width:V},onFocus:function(){Oe(!0)},onBlur:function(){Oe(!1)}},t.createElement(_n,{ref:d,open:i,prefixCls:o,id:r,inputElement:null,disabled:h,autoFocus:c,autoComplete:u,editable:v,activeDescendantId:w,value:O,onKeyDown:Y,onMouseDown:X,onChange:F,onPaste:A,onCompositionStart:Q,onCompositionEnd:_,tabIndex:T,attrs:Tn(n,!0)}),t.createElement("span",{ref:le,className:"".concat(U,"-search-mirror"),"aria-hidden":!0},O," ")),he=t.createElement(lo,{prefixCls:"".concat(U,"-overflow"),data:a,renderItem:$,renderRest:S,suffix:Z,itemKey:"key",maxCount:q});return t.createElement(t.Fragment,null,he,!a.length&&!O&&t.createElement("span",{className:"".concat(U,"-placeholder")},p))},Mo=function(n){var r=n.inputElement,o=n.prefixCls,a=n.id,i=n.inputRef,l=n.disabled,d=n.autoFocus,p=n.autoComplete,h=n.activeDescendantId,m=n.mode,s=n.open,c=n.values,u=n.placeholder,w=n.tabIndex,T=n.showSearch,B=n.searchValue,q=n.activeValue,D=n.maxLength,K=n.onInputKeyDown,H=n.onInputMouseDown,W=n.onInputChange,oe=n.onInputPaste,ve=n.onInputCompositionStart,F=n.onInputCompositionEnd,A=t.useState(!1),Y=fe(A,2),X=Y[0],Q=Y[1],_=m==="combobox",le=_||T,N=c[0],f=B||"";_&&q&&!X&&(f=q),t.useEffect(function(){_&&Q(!1)},[_,q]);var V=m!=="combobox"&&!s&&!T?!1:!!f,J=N&&(typeof N.label=="string"||typeof N.label=="number")?N.label.toString():void 0,z=function(){if(N)return null;var ge=V?{visibility:"hidden"}:void 0;return t.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:ge},u)};return t.createElement(t.Fragment,null,t.createElement("span",{className:"".concat(o,"-selection-search")},t.createElement(_n,{ref:i,prefixCls:o,id:a,open:s,inputElement:r,disabled:l,autoFocus:d,autoComplete:p,editable:le,activeDescendantId:h,value:f,onKeyDown:K,onMouseDown:H,onChange:function(ge){Q(!0),W(ge)},onPaste:oe,onCompositionStart:ve,onCompositionEnd:F,tabIndex:w,attrs:Tn(n,!0),maxLength:_?D:void 0})),!_&&N&&!V&&t.createElement("span",{className:"".concat(o,"-selection-item"),title:J},N.label),z())};function vt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,n=t.useRef(null),r=t.useRef(null);t.useEffect(function(){return function(){window.clearTimeout(r.current)}},[]);function o(a){(a||n.current===null)&&(n.current=a),window.clearTimeout(r.current),r.current=window.setTimeout(function(){n.current=null},e)}return[function(){return n.current},o]}function No(e){return![E.ESC,E.SHIFT,E.BACKSPACE,E.TAB,E.WIN_KEY,E.ALT,E.META,E.WIN_KEY_RIGHT,E.CTRL,E.SEMICOLON,E.EQUALS,E.CAPS_LOCK,E.CONTEXT_MENU,E.F1,E.F2,E.F3,E.F4,E.F5,E.F6,E.F7,E.F8,E.F9,E.F10,E.F11,E.F12].includes(e)}var Oo=function(n,r){var o=t.useRef(null),a=t.useRef(!1),i=n.prefixCls,l=n.open,d=n.mode,p=n.showSearch,h=n.tokenWithEnter,m=n.onSearch,s=n.onSearchSubmit,c=n.onToggleOpen,u=n.onInputKeyDown,w=n.domRef;t.useImperativeHandle(r,function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}});var T=vt(0),B=fe(T,2),q=B[0],D=B[1],K=function(f){var V=f.which;(V===E.UP||V===E.DOWN)&&f.preventDefault(),u&&u(f),V===E.ENTER&&d==="tags"&&!a.current&&!l&&(s==null||s(f.target.value)),No(V)&&c(!0)},H=function(){D(!0)},W=t.useRef(null),oe=function(f){m(f,!0,a.current)!==!1&&c(!0)},ve=function(){a.current=!0},F=function(f){a.current=!1,d!=="combobox"&&oe(f.target.value)},A=function(f){var V=f.target.value;if(h&&W.current&&/[\r\n]/.test(W.current)){var J=W.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");V=V.replace(J,W.current)}W.current=null,oe(V)},Y=function(f){var V=f.clipboardData,J=V.getData("text");W.current=J},X=function(f){var V=f.target;if(V!==o.current){var J=document.body.style.msTouchAction!==void 0;J?setTimeout(function(){o.current.focus()}):o.current.focus()}},Q=function(f){var V=q();f.target!==o.current&&!V&&f.preventDefault(),(d!=="combobox"&&(!p||!V)||!l)&&(l&&m("",!0,!1),c())},_={inputRef:o,onInputKeyDown:K,onInputMouseDown:H,onInputChange:A,onInputPaste:Y,onInputCompositionStart:ve,onInputCompositionEnd:F},le=d==="multiple"||d==="tags"?t.createElement(Do,Xe({},n,_)):t.createElement(Mo,Xe({},n,_));return t.createElement("div",{ref:w,className:"".concat(i,"-selector"),onClick:X,onMouseDown:Q},le)},gt=t.forwardRef(Oo);gt.displayName="Selector";function To(e,n,r){var o=t.useRef(null);o.current={open:n,triggerOpen:r},t.useEffect(function(){function a(i){var l=i.target;l.shadowRoot&&i.composed&&(l=i.composedPath()[0]||l),o.current.open&&e().filter(function(d){return d}).every(function(d){return!d.contains(l)&&d!==l})&&o.current.triggerOpen(!1)}return window.addEventListener("mousedown",a),function(){return window.removeEventListener("mousedown",a)}},[])}function _o(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,n=t.useState(!1),r=fe(n,2),o=r[0],a=r[1],i=t.useRef(null),l=function(){window.clearTimeout(i.current)};t.useEffect(function(){return l},[]);var d=function(h,m){l(),i.current=window.setTimeout(function(){a(h),m&&m()},e)};return[o,d,l]}var ht=t.createContext(null);function $o(){return t.useContext(ht)}var qo=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","showArrow","inputIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],Fo=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function On(e){return e==="tags"||e==="multiple"}var Vo=t.forwardRef(function(e,n){var r,o,a=e.id,i=e.prefixCls,l=e.className,d=e.showSearch,p=e.tagRender,h=e.direction,m=e.omitDomProps,s=e.displayValues,c=e.onDisplayValuesChange,u=e.emptyOptions,w=e.notFoundContent,T=w===void 0?"Not Found":w,B=e.onClear,q=e.mode,D=e.disabled,K=e.loading,H=e.getInputElement,W=e.getRawInputElement,oe=e.open,ve=e.defaultOpen,F=e.onDropdownVisibleChange,A=e.activeValue,Y=e.onActiveValueChange,X=e.activeDescendantId,Q=e.searchValue,_=e.onSearch,le=e.onSearchSplit,N=e.tokenSeparators,f=e.allowClear,V=e.showArrow,J=e.inputIcon,z=e.clearIcon,be=e.OptionList,ge=e.animation,Oe=e.transitionName,U=e.dropdownStyle,O=e.dropdownClassName,v=e.dropdownMatchSelectWidth,P=e.dropdownRender,G=e.dropdownAlign,$=e.placement,S=e.getPopupContainer,Z=e.showAction,he=Z===void 0?[]:Z,j=e.onFocus,L=e.onBlur,re=e.onKeyUp,ae=e.onKeyDown,ce=e.onMouseDown,Ce=tn(e,qo),pe=On(q),we=(d!==void 0?d:pe)||q==="combobox",ne=ie({},Ce);Fo.forEach(function(k){delete ne[k]}),m==null||m.forEach(function(k){delete ne[k]});var Se=t.useState(!1),Ie=fe(Se,2),Pe=Ie[0],De=Ie[1];t.useEffect(function(){De(jt())},[]);var Le=t.useRef(null),I=t.useRef(null),ye=t.useRef(null),ue=t.useRef(null),Me=t.useRef(null),Ae=_o(),on=fe(Ae,3),Je=on[0],rn=on[1],Ze=on[2];t.useImperativeHandle(n,function(){var k,x;return{focus:(k=ue.current)===null||k===void 0?void 0:k.focus,blur:(x=ue.current)===null||x===void 0?void 0:x.blur,scrollTo:function(Ee){var se;return(se=Me.current)===null||se===void 0?void 0:se.scrollTo(Ee)}}});var Fe=t.useMemo(function(){var k;if(q!=="combobox")return Q;var x=(k=s[0])===null||k===void 0?void 0:k.value;return typeof x=="string"||typeof x=="number"?String(x):""},[Q,q,s]),an=q==="combobox"&&typeof H=="function"&&H()||null,Ke=typeof W=="function"&&W(),hn=Bt(I,Ke==null||(r=Ke.props)===null||r===void 0?void 0:r.ref),fn=Mn(void 0,{defaultValue:ve,value:oe}),ln=fe(fn,2),Ye=ln[0],en=ln[1],me=Ye,pn=!T&&u;(D||pn&&me&&q==="combobox")&&(me=!1);var We=pn?!1:me,Te=t.useCallback(function(k){var x=k!==void 0?k:!me;me!==x&&!D&&(en(x),F==null||F(x))},[D,me,en,F]),y=t.useMemo(function(){return(N||[]).some(function(k){return[`
`,`\r
`].includes(k)})},[N]),b=function(x,xe,Ee){var se=!0,Re=x;Y==null||Y(null);var $e=Ee?null:So(x,N);return q!=="combobox"&&$e&&(Re="",le==null||le($e),Te(!1),se=!1),_&&Fe!==Re&&_(Re,{source:xe?"typing":"effect"}),se},g=function(x){!x||!x.trim()||_(x,{source:"submit"})};t.useEffect(function(){!me&&!pe&&q!=="combobox"&&b("",!1,!1)},[me]),t.useEffect(function(){Ye&&D&&en(!1),D&&rn(!1)},[D]);var M=vt(),ee=fe(M,2),te=ee[0],ze=ee[1],_e=function(x){var xe=te(),Ee=x.which;if(Ee===E.ENTER&&(q!=="combobox"&&x.preventDefault(),me||Te(!0)),ze(!!Fe),Ee===E.BACKSPACE&&!xe&&pe&&!Fe&&s.length){for(var se=Ne(s),Re=null,$e=se.length-1;$e>=0;$e-=1){var un=se[$e];if(!un.disabled){se.splice($e,1),Re=un;break}}Re&&c(se,{type:"remove",values:[Re]})}for(var Ue=arguments.length,nn=new Array(Ue>1?Ue-1:0),Ge=1;Ge<Ue;Ge++)nn[Ge-1]=arguments[Ge];if(me&&Me.current){var Wn;(Wn=Me.current).onKeyDown.apply(Wn,[x].concat(nn))}ae==null||ae.apply(void 0,[x].concat(nn))},ke=function(x){for(var xe=arguments.length,Ee=new Array(xe>1?xe-1:0),se=1;se<xe;se++)Ee[se-1]=arguments[se];if(me&&Me.current){var Re;(Re=Me.current).onKeyUp.apply(Re,[x].concat(Ee))}re==null||re.apply(void 0,[x].concat(Ee))},He=function(x){var xe=s.filter(function(Ee){return Ee!==x});c(xe,{type:"remove",values:[x]})},cn=t.useRef(!1),bn=function(){rn(!0),D||(j&&!cn.current&&j.apply(void 0,arguments),he.includes("focus")&&Te(!0)),cn.current=!0},qn=function(){rn(!1,function(){cn.current=!1,Te(!1)}),!D&&(Fe&&(q==="tags"?_(Fe,{source:"submit"}):q==="multiple"&&_("",{source:"blur"})),L&&L.apply(void 0,arguments))},Ve=[];t.useEffect(function(){return function(){Ve.forEach(function(k){return clearTimeout(k)}),Ve.splice(0,Ve.length)}},[]);var je=function(x){var xe,Ee=x.target,se=(xe=ye.current)===null||xe===void 0?void 0:xe.getPopupElement();if(se&&se.contains(Ee)){var Re=setTimeout(function(){var nn=Ve.indexOf(Re);if(nn!==-1&&Ve.splice(nn,1),Ze(),!Pe&&!se.contains(document.activeElement)){var Ge;(Ge=ue.current)===null||Ge===void 0||Ge.focus()}});Ve.push(Re)}for(var $e=arguments.length,un=new Array($e>1?$e-1:0),Ue=1;Ue<$e;Ue++)un[Ue-1]=arguments[Ue];ce==null||ce.apply(void 0,[x].concat(un))},Rt=t.useState(null),Fn=fe(Rt,2),Vn=Fn[0],Dt=Fn[1],Mt=t.useState({}),Nt=fe(Mt,2),Ot=Nt[1];function Tt(){Ot({})}Wt(function(){if(We){var k,x=Math.ceil((k=Le.current)===null||k===void 0?void 0:k.offsetWidth);Vn!==x&&!Number.isNaN(x)&&Dt(x)}},[We]);var Ln;Ke&&(Ln=function(x){Te(x)}),To(function(){var k;return[Le.current,(k=ye.current)===null||k===void 0?void 0:k.getPopupElement()]},We,Te);var _t=t.useMemo(function(){return ie(ie({},e),{},{notFoundContent:T,open:me,triggerOpen:We,id:a,showSearch:we,multiple:pe,toggleOpen:Te})},[e,T,We,me,a,we,pe,Te]),An=V!==void 0?V:K||!pe&&q!=="combobox",Kn;An&&(Kn=t.createElement(vn,{className:qe("".concat(i,"-arrow"),de({},"".concat(i,"-arrow-loading"),K)),customizeIcon:J,customizeIconProps:{loading:K,searchValue:Fe,open:me,focused:Je,showSearch:we}}));var jn,$t=function(){B==null||B(),c([],{type:"clear",values:s}),b("",!1,!1)};!D&&f&&(s.length||Fe)&&(jn=t.createElement(vn,{className:"".concat(i,"-clear"),onMouseDown:$t,customizeIcon:z},"×"));var qt=t.createElement(be,{ref:Me}),Ft=qe(i,l,(o={},de(o,"".concat(i,"-focused"),Je),de(o,"".concat(i,"-multiple"),pe),de(o,"".concat(i,"-single"),!pe),de(o,"".concat(i,"-allow-clear"),f),de(o,"".concat(i,"-show-arrow"),An),de(o,"".concat(i,"-disabled"),D),de(o,"".concat(i,"-loading"),K),de(o,"".concat(i,"-open"),me),de(o,"".concat(i,"-customize-input"),an),de(o,"".concat(i,"-show-search"),we),o)),Bn=t.createElement(pt,{ref:ye,disabled:D,prefixCls:i,visible:We,popupElement:qt,containerWidth:Vn,animation:ge,transitionName:Oe,dropdownStyle:U,dropdownClassName:O,direction:h,dropdownMatchSelectWidth:v,dropdownRender:P,dropdownAlign:G,placement:$,getPopupContainer:S,empty:u,getTriggerDOMNode:function(){return I.current},onPopupVisibleChange:Ln,onPopupMouseEnter:Tt},Ke?t.cloneElement(Ke,{ref:hn}):t.createElement(gt,Xe({},e,{domRef:I,prefixCls:i,inputElement:an,ref:ue,id:a,showSearch:we,mode:q,activeDescendantId:X,tagRender:p,values:s,open:me,onToggleOpen:Te,activeValue:A,searchValue:Fe,onSearch:b,onSearchSubmit:g,onRemove:He,tokenWithEnter:y}))),wn;return Ke?wn=Bn:wn=t.createElement("div",Xe({className:Ft},ne,{ref:Le,onMouseDown:je,onKeyDown:_e,onKeyUp:ke,onFocus:bn,onBlur:qn}),Je&&!me&&t.createElement("span",{style:{width:0,height:0,display:"flex",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(s.map(function(k){var x=k.label,xe=k.value;return["number","string"].includes(it(x))?x:xe}).join(", "))),Bn,Kn,jn),t.createElement(ht.Provider,{value:_t},wn)});function Lo(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var bt=t.createContext(null),Ao=["disabled","title","children","style","className"];function nt(e){return typeof e=="string"||typeof e=="number"}var Ko=function(n,r){var o=$o(),a=o.prefixCls,i=o.id,l=o.open,d=o.multiple,p=o.mode,h=o.searchValue,m=o.toggleOpen,s=o.notFoundContent,c=o.onPopupScroll,u=t.useContext(bt),w=u.flattenOptions,T=u.onActiveValue,B=u.defaultActiveFirstOption,q=u.onSelect,D=u.menuItemSelectedIcon,K=u.rawValues,H=u.fieldNames,W=u.virtual,oe=u.listHeight,ve=u.listItemHeight,F="".concat(a,"-item"),A=zt(function(){return w},[l,w],function(O,v){return v[0]&&O[1]!==v[1]}),Y=t.useRef(null),X=function(v){v.preventDefault()},Q=function(v){Y.current&&Y.current.scrollTo(typeof v=="number"?{index:v}:v)},_=function(v){for(var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,G=A.length,$=0;$<G;$+=1){var S=(v+$*P+G)%G,Z=A[S],he=Z.group,j=Z.data;if(!he&&!j.disabled)return S}return-1},le=t.useState(function(){return _(0)}),N=fe(le,2),f=N[0],V=N[1],J=function(v){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;V(v);var G={source:P?"keyboard":"mouse"},$=A[v];if(!$){T(null,-1,G);return}T($.value,v,G)};t.useEffect(function(){J(B!==!1?_(0):-1)},[A.length,h]);var z=t.useCallback(function(O){return K.has(O)&&p!=="combobox"},[p,Ne(K).toString()]);t.useEffect(function(){var O=setTimeout(function(){if(!d&&l&&K.size===1){var P=Array.from(K)[0],G=A.findIndex(function($){var S=$.data;return S.value===P});G!==-1&&(J(G),Q(G))}});if(l){var v;(v=Y.current)===null||v===void 0||v.scrollTo(void 0)}return function(){return clearTimeout(O)}},[l,h]);var be=function(v){v!==void 0&&q(v,{selected:!K.has(v)}),d||m(!1)};if(t.useImperativeHandle(r,function(){return{onKeyDown:function(v){var P=v.which,G=v.ctrlKey;switch(P){case E.N:case E.P:case E.UP:case E.DOWN:{var $=0;if(P===E.UP?$=-1:P===E.DOWN?$=1:Lo()&&G&&(P===E.N?$=1:P===E.P&&($=-1)),$!==0){var S=_(f+$,$);Q(S),J(S,!0)}break}case E.ENTER:{var Z=A[f];Z&&!Z.data.disabled?be(Z.value):be(void 0),l&&v.preventDefault();break}case E.ESC:m(!1),l&&v.stopPropagation()}},onKeyUp:function(){},scrollTo:function(v){Q(v)}}}),A.length===0)return t.createElement("div",{role:"listbox",id:"".concat(i,"_list"),className:"".concat(F,"-empty"),onMouseDown:X},s);var ge=Object.keys(H).map(function(O){return H[O]}),Oe=function(v){return v.label},U=function(v){var P=A[v];if(!P)return null;var G=P.data||{},$=G.value,S=P.group,Z=Tn(G,!0),he=Oe(P);return P?t.createElement("div",Xe({"aria-label":typeof he=="string"&&!S?he:null},Z,{key:v,role:S?"presentation":"option",id:"".concat(i,"_list_").concat(v),"aria-selected":z($)}),$):null};return t.createElement(t.Fragment,null,t.createElement("div",{role:"listbox",id:"".concat(i,"_list"),style:{height:0,width:0,overflow:"hidden"}},U(f-1),U(f),U(f+1)),t.createElement(uo,{itemKey:"key",ref:Y,data:A,height:oe,itemHeight:ve,fullHeight:!1,onMouseDown:X,onScroll:c,virtual:W},function(O,v){var P,G=O.group,$=O.groupOption,S=O.data,Z=O.label,he=O.value,j=S.key;if(G){var L,re=(L=S.title)!==null&&L!==void 0?L:nt(Z)&&Z;return t.createElement("div",{className:qe(F,"".concat(F,"-group")),title:re},Z!==void 0?Z:j)}var ae=S.disabled,ce=S.title;S.children;var Ce=S.style,pe=S.className,we=tn(S,Ao),ne=co(we,ge),Se=z(he),Ie="".concat(F,"-option"),Pe=qe(F,Ie,pe,(P={},de(P,"".concat(Ie,"-grouped"),$),de(P,"".concat(Ie,"-active"),f===v&&!ae),de(P,"".concat(Ie,"-disabled"),ae),de(P,"".concat(Ie,"-selected"),Se),P)),De=Oe(O),Le=!D||typeof D=="function"||Se,I=typeof De=="number"?De:De||he,ye=nt(I)?I.toString():void 0;return ce!==void 0&&(ye=ce),t.createElement("div",Xe({},ne,{"aria-selected":Se,className:Pe,title:ye,onMouseMove:function(){f===v||ae||J(v)},onClick:function(){ae||be(he)},style:Ce}),t.createElement("div",{className:"".concat(Ie,"-content")},I),t.isValidElement(D)||Se,Le&&t.createElement(vn,{className:"".concat(F,"-option-state"),customizeIcon:D,customizeIconProps:{isSelected:Se}},Se?"✓":null))}))},wt=t.forwardRef(Ko);wt.displayName="OptionList";var sn=function(){return null};sn.isSelectOption=!0;var gn=function(){return null};gn.isSelectOptGroup=!0;var jo=["children","value"],Bo=["children"];function Wo(e){var n=e.key,r=e.props,o=r.children,a=r.value,i=tn(r,jo);return ie({key:n,value:a!==void 0?a:n,children:o},i)}function yt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Ht(e).map(function(r,o){if(!t.isValidElement(r)||!r.type)return null;var a=r.type.isSelectOptGroup,i=r.key,l=r.props,d=l.children,p=tn(l,Bo);return n||!a?Wo(r):ie(ie({key:"__RC_SELECT_GRP__".concat(i===null?o:i,"__"),label:i},p),{},{options:yt(d)})}).filter(function(r){return r})}function zo(e,n,r,o,a){return t.useMemo(function(){var i=e,l=!e;l&&(i=yt(n));var d=new Map,p=new Map,h=function(c,u,w){w&&typeof w=="string"&&c.set(u[w],u)};function m(s){for(var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=0;u<s.length;u+=1){var w=s[u];!w[r.options]||c?(d.set(w[r.value],w),h(p,w,r.label),h(p,w,o),h(p,w,a)):m(w[r.options],!0)}}return m(i),{options:i,valueOptions:d,labelOptions:p}},[e,n,r,o,a])}var tt=0,Ho=Ut();function Uo(){var e;return Ho?(e=tt,tt+=1):e="TEST_OR_SSR",e}function Go(e){var n=t.useState(),r=fe(n,2),o=r[0],a=r[1];return t.useEffect(function(){a("rc_select_".concat(Uo()))},[]),e||o}function ot(e){var n=t.useRef();n.current=e;var r=t.useCallback(function(){return n.current.apply(n,arguments)},[]);return r}function Pn(e,n){return mt(e).join("").toUpperCase().includes(n)}const Xo=function(e,n,r,o,a){return t.useMemo(function(){if(!r||o===!1)return e;var i=n.options,l=n.label,d=n.value,p=[],h=typeof o=="function",m=r.toUpperCase(),s=h?o:function(u,w){return a?Pn(w[a],m):w[i]?Pn(w[l!=="children"?l:"label"],m):Pn(w[d],m)},c=h?function(u){return Nn(u)}:function(u){return u};return e.forEach(function(u){if(u[i]){var w=s(r,c(u));if(w)p.push(u);else{var T=u[i].filter(function(B){return s(r,c(B))});T.length&&p.push(ie(ie({},u),{},de({},i,T)))}return}s(r,c(u))&&p.push(u)}),p},[e,o,a,r,n])},Yo=function(e,n){var r=t.useRef({values:new Map,options:new Map}),o=t.useMemo(function(){var i=r.current,l=i.values,d=i.options,p=e.map(function(s){if(s.label===void 0){var c;return ie(ie({},s),{},{label:(c=l.get(s.value))===null||c===void 0?void 0:c.label})}return s}),h=new Map,m=new Map;return p.forEach(function(s){h.set(s.value,s),m.set(s.value,n.get(s.value)||d.get(s.value))}),r.current.values=h,r.current.options=m,p},[e,n]),a=t.useCallback(function(i){return n.get(i)||r.current.options.get(i)},[n]);return[o,a]};var Qo=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],Jo=["inputValue"];function Zo(e){return!e||it(e)!=="object"}var er=t.forwardRef(function(e,n){var r=e.id,o=e.mode,a=e.prefixCls,i=a===void 0?"rc-select":a,l=e.backfill,d=e.fieldNames,p=e.inputValue,h=e.searchValue,m=e.onSearch,s=e.autoClearSearchValue,c=s===void 0?!0:s,u=e.onSelect,w=e.onDeselect,T=e.dropdownMatchSelectWidth,B=T===void 0?!0:T,q=e.filterOption,D=e.filterSort,K=e.optionFilterProp,H=e.optionLabelProp,W=e.options,oe=e.children,ve=e.defaultActiveFirstOption,F=e.menuItemSelectedIcon,A=e.virtual,Y=e.listHeight,X=Y===void 0?200:Y,Q=e.listItemHeight,_=Q===void 0?20:Q,le=e.value,N=e.defaultValue,f=e.labelInValue,V=e.onChange,J=tn(e,Qo),z=Go(r),be=On(o),ge=!!(!W&&oe),Oe=t.useMemo(function(){return q===void 0&&o==="combobox"?!1:q},[q,o]),U=t.useMemo(function(){return ft(d,ge)},[JSON.stringify(d),ge]),O=Mn("",{value:h!==void 0?h:p,postState:function(b){return b||""}}),v=fe(O,2),P=v[0],G=v[1],$=zo(W,oe,U,K,H),S=$.valueOptions,Z=$.labelOptions,he=$.options,j=t.useCallback(function(y){var b=mt(y);return b.map(function(g){var M,ee,te,ze;if(Zo(g))M=g;else{var _e;te=g.key,ee=g.label,M=(_e=g.value)!==null&&_e!==void 0?_e:te}var ke=S.get(M);if(ke){var He;ee===void 0&&(ee=ke==null?void 0:ke[H||U.label]),te===void 0&&(te=(He=ke==null?void 0:ke.key)!==null&&He!==void 0?He:M),ze=ke==null?void 0:ke.disabled}return{label:ee,value:M,key:te,disabled:ze}})},[U,H,S]),L=Mn(N,{value:le}),re=fe(L,2),ae=re[0],ce=re[1],Ce=t.useMemo(function(){var y,b=j(ae);return o==="combobox"&&!(!((y=b[0])===null||y===void 0)&&y.value)?[]:b},[ae,j,o]),pe=Yo(Ce,S),we=fe(pe,2),ne=we[0],Se=we[1],Ie=t.useMemo(function(){if(!o&&ne.length===1){var y=ne[0];if(y.value===null&&(y.label===null||y.label===void 0))return[]}return ne.map(function(b){var g;return ie(ie({},b),{},{label:(g=b.label)!==null&&g!==void 0?g:b.value})})},[o,ne]),Pe=t.useMemo(function(){return new Set(ne.map(function(y){return y.value}))},[ne]);t.useEffect(function(){if(o==="combobox"){var y,b=(y=ne[0])===null||y===void 0?void 0:y.value;b!=null&&G(String(b))}},[ne]);var De=ot(function(y,b){var g,M=b??y;return g={},de(g,U.value,y),de(g,U.label,M),g}),Le=t.useMemo(function(){if(o!=="tags")return he;var y=Ne(he),b=function(M){return S.has(M)};return Ne(ne).sort(function(g,M){return g.value<M.value?-1:1}).forEach(function(g){var M=g.value;b(M)||y.push(De(M,g.label))}),y},[De,he,S,ne,o]),I=Xo(Le,U,P,Oe,K),ye=t.useMemo(function(){return o!=="tags"||!P||I.some(function(y){return y[K||"value"]===P})?I:[De(P)].concat(Ne(I))},[De,K,o,I,P]),ue=t.useMemo(function(){return D?Ne(ye).sort(function(y,b){return D(y,b)}):ye},[ye,D]),Me=t.useMemo(function(){return yo(ue,{fieldNames:U,childrenAsData:ge})},[ue,U,ge]),Ae=function(b){var g=j(b);if(ce(g),V&&(g.length!==ne.length||g.some(function(te,ze){var _e;return((_e=ne[ze])===null||_e===void 0?void 0:_e.value)!==(te==null?void 0:te.value)}))){var M=f?g:g.map(function(te){return te.value}),ee=g.map(function(te){return Nn(Se(te.value))});V(be?M:M[0],be?ee:ee[0])}},on=t.useState(null),Je=fe(on,2),rn=Je[0],Ze=Je[1],Fe=t.useState(0),an=fe(Fe,2),Ke=an[0],hn=an[1],fn=ve!==void 0?ve:o!=="combobox",ln=t.useCallback(function(y,b){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},M=g.source,ee=M===void 0?"keyboard":M;hn(b),l&&o==="combobox"&&y!==null&&ee==="keyboard"&&Ze(String(y))},[l,o]),Ye=function(b,g){var M=function(){var Ve,je=Se(b);return[f?{label:je==null?void 0:je[U.label],value:b,key:(Ve=je==null?void 0:je.key)!==null&&Ve!==void 0?Ve:b}:b,Nn(je)]};if(g&&u){var ee=M(),te=fe(ee,2),ze=te[0],_e=te[1];u(ze,_e)}else if(!g&&w){var ke=M(),He=fe(ke,2),cn=He[0],bn=He[1];w(cn,bn)}},en=ot(function(y,b){var g,M=be?b.selected:!0;M?g=be?[].concat(Ne(ne),[y]):[y]:g=ne.filter(function(ee){return ee.value!==y}),Ae(g),Ye(y,M),o==="combobox"?Ze(""):(!On||c)&&(G(""),Ze(""))}),me=function(b,g){Ae(b),(g.type==="remove"||g.type==="clear")&&g.values.forEach(function(M){Ye(M.value,!1)})},pn=function(b,g){if(G(b),Ze(null),g.source==="submit"){var M=(b||"").trim();if(M){var ee=Array.from(new Set([].concat(Ne(Pe),[M])));Ae(ee),Ye(M,!0),G("")}return}g.source!=="blur"&&(o==="combobox"&&Ae(b),m==null||m(b))},We=function(b){var g=b;o!=="tags"&&(g=b.map(function(ee){var te=Z.get(ee);return te==null?void 0:te.value}).filter(function(ee){return ee!==void 0}));var M=Array.from(new Set([].concat(Ne(Pe),Ne(g))));Ae(M),M.forEach(function(ee){Ye(ee,!0)})},Te=t.useMemo(function(){var y=A!==!1&&B!==!1;return ie(ie({},$),{},{flattenOptions:Me,onActiveValue:ln,defaultActiveFirstOption:fn,onSelect:en,menuItemSelectedIcon:F,rawValues:Pe,fieldNames:U,virtual:y,listHeight:X,listItemHeight:_,childrenAsData:ge})},[$,Me,ln,fn,en,F,Pe,U,A,B,X,_,ge]);return t.createElement(bt.Provider,{value:Te},t.createElement(Vo,Xe({},J,{id:z,prefixCls:i,ref:n,omitDomProps:Jo,mode:o,displayValues:Ie,onDisplayValuesChange:me,searchValue:P,onSearch:pn,onSearchSplit:We,dropdownMatchSelectWidth:B,OptionList:wt,emptyOptions:!Me.length,activeValue:rn,activeDescendantId:"".concat(z,"_list_").concat(Ke)})))}),$n=er;$n.Option=sn;$n.OptGroup=gn;const R=Gt(),Qe=lt(ct.BTR3);function Rn(e){return e.replace(/"/g,'\\"').replace(/\n/g,"\\A")}const nr=Be.div`
  width: 100%;
`,tr=Be.div`
  width: 100%;
`,or=Dn`
  width: 100%;

  .ant-select-selector {
    font-family: ${Qe.fontFamily};
    font-size: ${Qe.fontSize};
    line-height: ${Qe.lineHeight};
    font-weight: ${Qe.fontWeight};
    font-style: ${Qe.fontStyle};
    letter-spacing: ${Qe.letterSpacing};

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
`,rr=Dn`
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
    font-weight: ${Qe.fontWeight};
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
    ${lt(ct.BTM4)}
  }

  ${e=>e.isMultiSelect&&Dn`
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
        content: "${Rn(e.t("select.tags.addPrefix"))}";
      }
      
      &.ant-select-item-option-selected .ant-select-item-option-content:before {
        content: "${Rn(e.t("select.tags.removePrefix"))}";
      }

      .ant-select-item-option-content:after {
        content: "${Rn(e.t("select.tags.addRemovePostfix"))}";
      }
    }
  `}
`,ar=Be.div.withConfig({shouldForwardProp:e=>!["cssConfig","isMultiSelect","t"].includes(e)})`
  ${rr}
`;function ir(e,n){return`
  .${n} {
    background-color: ${e.enabled.dropdown.background};
    border-radius: 4px;
    box-shadow: ${e.enabled.dropdown.boxShadow};
  }
  
  .${n}.dropdown-loading {
    min-height: 64px;
  }
  `}const lr=Be.div`
  display: flex;
  color: ${R("enabled.loadingError.color")};

  > svg {
   margin-top: 2px;
   margin-right: 4px;
  }

  > div {
   flex: 1;
  }
`,cr=Be.span`
  color: ${R("enabled.option.description")};
`,ur=Be.div`
  display: flex;
`,sr=Be.div`
  display: flex;
  flex-direction: column;
`,rt=e=>typeof e!="object"&&typeof e!="number"?{label:e,value:mn(),key:mn()}:e,at=(e,n,r)=>e==null||!n||r!=="tags"?e:Array.isArray(e)?e.map(rt):[rt(e)],dr=(e,n)=>{if(Array.isArray(n)){let r=n[n.length-1];return typeof r!="object"&&typeof r!="number"&&(r={label:r,value:mn(),key:mn()}),[...e,r]}return n},fr=(e,n)=>{if(Array.isArray(n)&&Array.isArray(e)){const r=[...e];if(n.length===0)return[];const o=r.findIndex((a,i)=>typeof a=="object"?n[i]!==(a==null?void 0:a.value):n[i]!==a);return r.splice(o,1),r}return n},pr=e=>{for(;e;){if(e instanceof Element&&(window.getComputedStyle(e).overflow==="auto"||window.getComputedStyle(e).overflow==="scroll"))return e;e=e.parentNode}return null},St=()=>{const{t:e}=dt();return C.createElement(Hn,{image:Hn.PRESENTED_IMAGE_SIMPLE,description:C.createElement(Yt,{type:"BTR3"},e("select.empty")),className:"ant-empty-small","data-testid":"select-no-data","kl-id":"empty-data"})},xt=()=>C.createElement(Xt,{testId:"select-chevron-icon",klId:"down-icon"}),mr=()=>C.createElement(so,{testId:"select-search-icon",klId:"search-icon"}),Ct=()=>C.createElement(Qt,{mode:"filled",testId:"select-clear-search-icon",klId:"clear-icon"});function kt({onLoad:e}){return t.useEffect(()=>{e()},[e]),C.createElement(ut,{centered:!0,testId:"select-option-loading-more"})}function Et({cssConfig:e,children:n}){return C.createElement(lr,{cssConfig:e},C.createElement(Jt,null),C.createElement("div",null,n))}const vr=Be(({className:e})=>C.createElement("div",{className:qe("dropdown-v6-multi-checkbox",e)},C.createElement(Un,{className:"dropdown-v6-multi-checkbox-unchecked",checked:!1}),C.createElement(Un,{className:"dropdown-v6-multi-checkbox-checked",checked:!0})))`
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
`;St.__docgenInfo={description:"",methods:[],displayName:"EmptyData"};xt.__docgenInfo={description:"",methods:[],displayName:"ChevronIcon"};mr.__docgenInfo={description:"",methods:[],displayName:"SearchIcon"};Ct.__docgenInfo={description:"",methods:[],displayName:"ClearIcon"};kt.__docgenInfo={description:"",methods:[],displayName:"LoadingTrigger"};Et.__docgenInfo={description:"",methods:[],displayName:"LoadingErrorContent",props:{cssConfig:{required:!0,tsType:{name:"intersection",raw:`Focus & {
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
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}}]},required:!1}],raw:"Record<ValidationStatus, StateProps>"}],raw:"Partial<Record<ValidationStatus, StateProps>>"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const gr=e=>Zt({...e,mode:void 0},{componentName:"select",defaultValues:{}}),hr=Be($n).withConfig({shouldForwardProp:e=>!["cssConfig","validationStatus"].includes(e)})`${or}`,It=e=>C.createElement(st,{size:"small"},`+ ${e.length} ...`),dn=t.forwardRef((e,n)=>{const{children:r,hasMore:o,onLoadMore:a,options:i,cssConfig:l,...d}=eo(gr(e)),[p,h]=t.useState(),m=t.useMemo(()=>wo(()=>{a==null||a()}),[a]),s=e.mode==="multiple"||e.mode==="tags";function c(u){return u.options?C.createElement(gn,{key:u.value,label:u.label},u.options.map(c)):C.createElement(sn,{...u,key:u.value,"data-value":u.value,label:typeof u.label=="string"?u.label.trim():u.label,role:"option"},C.createElement(ur,null,s&&C.createElement(vr,null),C.createElement(sr,null,C.createElement(oo,{truncationWidth:p},u.label),u.description&&C.createElement(cr,{cssConfig:l},u.description))))}return C.createElement(Pt,{...d,ref:n,mode:e.mode,cssConfig:l,setSelectOffsetWidth:h},r||(i==null?void 0:i.map(c)),o&&C.createElement(sn,{key:"loading-more-option",disabled:!0},C.createElement(kt,{onLoad:m})))}),Pt=t.forwardRef(({setSelectOffsetWidth:e,allowNonUniqueValues:n,autoClearSearchValue:r=!0,autoFocus:o=!1,children:a,className:i,closeOnParentScroll:l,cssConfig:d,defaultValue:p,disabled:h=!1,dropdownClassName:m,dropdownMaxHeight:s,filterOption:c,getPopupContainer:u,loading:w=!1,loadingError:T,mode:B,notFoundContent:q,onChange:D,onDropdownVisibleChange:K,onSearch:H,onClear:W,open:oe,optionFilterProp:ve="label",optionLabelProp:F="label",placement:A="bottomLeft",readOnly:Y,renderDropdown:X,renderFooter:Q,renderHeader:_,showArrow:le=!0,showSearch:N=!1,testAttributes:f,usePortal:V,validationStatus:J="default",value:z,virtual:be=!1,...ge},Oe)=>{ro();const U=no(d,ir,dn),O=to(),{t:v}=dt(),[P,G]=t.useState(()=>at(p,n,B)),$=t.useMemo(()=>at(z,n,B),[z]),S=$!==void 0?$:P,Z=B==="multiple"||B==="tags",[he,j]=t.useState(!!oe),L=t.useRef(null);t.useEffect(()=>{if(L.current){const I=L.current.offsetWidth;e&&e(I)}},[L]);const re=t.useCallback(()=>{l&&(L!=null&&L.current)&&j(!1)},[l,L]),[ae,ce]=t.useState(""),Ce=I=>{r||I!==""?(ce(I),H==null||H(I)):H==null||H(ae)},pe=()=>{ce(""),W==null||W()},we=I=>{N&&!r&&I.code==="Backspace"&&ae.length===1&&pe()},ne=()=>{r&&ce("")},Se=t.useCallback((I,ye)=>{let ue=I;n&&Array.isArray(ue)&&(Array.isArray(S)&&S.length<ue.length?ue=dr(S,I):ue=fr(S,I)),G(ue),r&&ce(""),D==null||D(ue,ye)},[D,S,n,r]);t.useEffect(()=>{const I=pr(L==null?void 0:L.current);if(!(!(I instanceof Element)||!l))return I.addEventListener("scroll",re),()=>I.removeEventListener("scroll",re)},[l,oe,L,re]);const Ie=t.useCallback(I=>{const ye=f!=null&&f["data-testid"]?`${f==null?void 0:f["data-testid"]}-select-dropdown`:"select-dropdown",ue=f!=null&&f["kl-id"]?`${f==null?void 0:f["kl-id"]}-select-dropdown`:"select-dropdown";return C.createElement(ar,{cssConfig:d,"data-testid":ye,"kl-id":ue,isMultiSelect:Z,t:v},w?C.createElement(ut,{centered:!0,testId:"select-loader",klId:"loader"}):C.createElement(C.Fragment,null,_&&C.createElement(C.Fragment,null,_(),C.createElement(zn,{mode:"light"})),X?X(I):I,Q&&C.createElement(C.Fragment,null,C.createElement(zn,{mode:"light"}),Q())))},[Q,_,w,d,Z,X,f]),Pe=t.useRef(null),De=t.useCallback(I=>{if(I&&Pe.current){const ye=Array.isArray(S);if(!S||ye&&!S.length)Pe.current.scrollTo(0);else if(ye){const ue=[...S].sort((Me,Ae)=>Ae-Me).pop();Pe.current.scrollTo(ue??0)}}if(l){j(I);return}K&&K(I)},[l,K,S]),Le=T&&C.createElement(Et,{cssConfig:d},T);return C.createElement(nr,{ref:Oe},C.createElement(tr,{ref:L},C.createElement(hr,{ref:Pe,allowClear:Z,"aria-disabled":h,autoClearSearchValue:r,autoFocus:o,className:qe(i,{"kl6-select-readonly":Y}),clearIcon:C.createElement(Ct,null),cssConfig:d,"data-validationstatus":J,"data-value":S,disabled:h||Y,dropdownAlign:{offset:[0,A!=null&&A.includes("top")?-8:8]},dropdownClassName:qe("dropdown-custom",m,U,{"dropdown-loading":w}),dropdownRender:Ie,filterOption:c,getPopupContainer:u??O.getPopupContainer??(I=>V??O.usePortal?document.body:I.parentElement),listHeight:s??256,loading:w,maxTagPlaceholder:It,menuItemSelectedIcon:null,mode:B,notFoundContent:Le||q||C.createElement(St,null),onBlurCapture:ne,onChange:Se,onDropdownVisibleChange:De,onSearch:Ce,onClear:pe,onKeyDown:we,open:l?he:oe,optionFilterProp:ve,optionLabelProp:F,placement:A,prefixCls:"ant-select",searchValue:ae,showArrow:N||le,showSearch:N,inputIcon:C.createElement(xt,null),tagRender:I=>C.createElement(st,{...I,disabled:h,readOnly:Y,size:"small"}),transitionName:"ant-slide-up",validationStatus:J,value:S,virtual:be,...ge,...f},T?null:a)))});Pt.displayName="SelectView";dn.displayName="Select";dn.Option=sn;dn.OptGroup=gn;It.__docgenInfo={description:"",methods:[],displayName:"maxTagPlaceholder"};dn.__docgenInfo={description:"",methods:[],displayName:"Select",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};export{xt as C,St as E,vr as M,dn as S,mr as a,Ct as b,It as m,or as s};
