import{r as t,Q as Re,a as q,j as te,k as M,_ as j,i as ge,bo as ra,bf as Sn,aX as wn,n as Ke,l as xe,e as oa,f as ia,g as la,h as sa,b9 as In,aD as ca,X as Rn,W as ua,aY as on,p as En,bd as da,H as Oe,a1 as fa,a2 as va,a0 as yt,aw as ma,T as ba,R as Y,ag as pa,a5 as ga,u as ha,aM as ya,s as Ca,S as ka,y as ln,aj as xa}from"./iframe-zz6a49H8.js";import{i as sn}from"./useLocalization-CR8m5dji.js";import{s as Sa}from"./shouldForwardProp-Cdy-RLhZ.js";import{B as wa}from"./Badge-DMO-MXiW.js";import{I as Ia}from"./Indicator-DNWfFabI.js";import{D as Ra}from"./Divider-DNO5OI2y.js";import{u as cn}from"./useIntersectionChildren-B_rui53K.js";import{B as Ea}from"./Button-Djh220XQ.js";import{D as Pa}from"./Dropdown-D5otA5yN.js";import{L as Ta}from"./Locale-3RTKV40-.js";import{g as Ma}from"./generateId-BXJELych.js";import{K as re,u as at}from"./KeyCode-D_nTN6KT.js";import{F as gt}from"./Overflow-8LRqTPgc.js";import{o as Pn,I as Na,a as $a,d as qa,S as Aa,R as La}from"./type-CR-gS43P.js";import{T as Tn}from"./index-BUgDoPiZ.js";import{g as Ka}from"./focus-rl8Tx3sL.js";import{R as Oa}from"./EllipsisOutlined-DUDKE8qX.js";function Mn(e){var n=t.useRef(),a=t.useRef(!1);function o(){for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];a.current||(Re.cancel(n.current),n.current=Re(function(){e.apply(void 0,i)}))}return t.useEffect(function(){return function(){a.current=!0,Re.cancel(n.current)}},[]),o}function Da(e){var n=t.useRef([]),a=t.useState({}),o=q(a,2),r=o[1],i=t.useRef(typeof e=="function"?e():e),l=Mn(function(){var s=i.current;n.current.forEach(function(f){s=f(s)}),n.current=[],i.current=s,r({})});function u(s){n.current.push(s),l()}return[i.current,u]}function _a(e,n){var a,o=e.prefixCls,r=e.id,i=e.active,l=e.tab,u=l.key,s=l.tab,f=l.disabled,c=l.closeIcon,g=e.closable,v=e.renderWrapper,y=e.removeAriaLabel,m=e.editable,d=e.onClick,E=e.onRemove,R=e.onFocus,N=e.style,b="".concat(o,"-tab");t.useEffect(function(){return E},[]);var p=m&&g!==!1&&!f;function S(w){f||d(w)}function C(w){w.preventDefault(),w.stopPropagation(),m.onEdit("remove",{key:u,event:w})}var D=t.createElement("div",{key:u,ref:n,className:te(b,(a={},M(a,"".concat(b,"-with-remove"),p),M(a,"".concat(b,"-active"),i),M(a,"".concat(b,"-disabled"),f),a)),style:N,onClick:S},t.createElement("div",{role:"tab","aria-selected":i,id:r&&"".concat(r,"-tab-").concat(u),className:"".concat(b,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(u),"aria-disabled":f,tabIndex:f?null:0,onClick:function(k){k.stopPropagation(),S(k)},onKeyDown:function(k){[re.SPACE,re.ENTER].includes(k.which)&&(k.preventDefault(),S(k))},onFocus:R},s),p&&t.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(b,"-remove"),onClick:function(k){k.stopPropagation(),C(k)}},c||m.removeIcon||"×"));return v?v(D):D}const Ba=t.forwardRef(_a);var un={width:0,height:0,left:0,top:0};function Wa(e,n,a){return t.useMemo(function(){for(var o,r=new Map,i=n.get((o=e[0])===null||o===void 0?void 0:o.key)||un,l=i.left+i.width,u=0;u<e.length;u+=1){var s=e[u].key,f=n.get(s);if(!f){var c;f=n.get((c=e[u-1])===null||c===void 0?void 0:c.key)||un}var g=r.get(s)||j({},f);g.right=l-g.left-g.width,r.set(s,g)}return r},[e.map(function(o){return o.key}).join("_"),n,a])}var dn={width:0,height:0,left:0,top:0,right:0};function Fa(e,n,a,o,r){var i=r.tabs,l=r.tabPosition,u=r.rtl,s,f,c;["top","bottom"].includes(l)?(s="width",f=u?"right":"left",c=Math.abs(n.left)):(s="height",f="top",c=-n.top);var g=n[s],v=a[s],y=o[s],m=g;return v+y>g&&v<g&&(m=g-y),t.useMemo(function(){if(!i.length)return[0,0];for(var d=i.length,E=d,R=0;R<d;R+=1){var N=e.get(i[R].key)||dn;if(N[f]+N[s]>c+m){E=R-1;break}}for(var b=0,p=d-1;p>=0;p-=1){var S=e.get(i[p].key)||dn;if(S[f]<c){b=p+1;break}}return[b,E]},[e,c,m,l,i.map(function(d){return d.key}).join("_"),u])}var Va=["children","locked"],Ee=t.createContext(null);function ja(e,n){var a=j({},e);return Object.keys(n).forEach(function(o){var r=n[o];r!==void 0&&(a[o]=r)}),a}function ht(e){var n=e.children,a=e.locked,o=ge(e,Va),r=t.useContext(Ee),i=ra(function(){return ja(r,o)},[r,o],function(l,u){return!a&&(l[0]!==u[0]||!Sn(l[1],u[1]))});return t.createElement(Ee.Provider,{value:i},n)}function Nn(e,n,a,o){var r=t.useContext(Ee),i=r.activeKey,l=r.onActive,u=r.onInactive,s={active:i===e};return n||(s.onMouseEnter=function(f){a==null||a({key:e,domEvent:f}),l(e)},s.onMouseLeave=function(f){o==null||o({key:e,domEvent:f}),u(e)}),s}var Ha=["item"];function Lt(e){var n=e.item,a=ge(e,Ha);return Object.defineProperty(a,"item",{get:function(){return wn(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),a}function $n(e){var n=e.icon,a=e.props,o=e.children,r;return typeof n=="function"?r=t.createElement(n,j({},a)):r=n,r||o||null}function qn(e){var n=t.useContext(Ee),a=n.mode,o=n.rtl,r=n.inlineIndent;if(a!=="inline")return null;var i=e;return o?{paddingRight:i*r}:{paddingLeft:i*r}}var za=[],An=t.createContext(null);function Kt(){return t.useContext(An)}var Ln=t.createContext(za);function Ct(e){var n=t.useContext(Ln);return t.useMemo(function(){return e!==void 0?[].concat(Ke(n),[e]):n},[n,e])}var Kn=t.createContext(null),On=t.createContext(null);function Dn(e,n){return e===void 0?null:"".concat(e,"-").concat(n)}function _n(e){var n=t.useContext(On);return Dn(n,e)}var Xt=t.createContext({}),Ga=["title","attribute","elementRef"],Ua=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Ya=["active"],Xa=function(e){oa(a,e);var n=ia(a);function a(){return la(this,a),n.apply(this,arguments)}return sa(a,[{key:"render",value:function(){var r=this.props,i=r.title,l=r.attribute,u=r.elementRef,s=ge(r,Ga),f=Pn(s,["eventKey"]);return wn(!l,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(gt.Item,xe({},l,{title:typeof i=="string"?i:void 0},f,{ref:u}))}}]),a}(t.Component),Za=function(n){var a,o=n.style,r=n.className,i=n.eventKey;n.warnKey;var l=n.disabled,u=n.itemIcon,s=n.children,f=n.role,c=n.onMouseEnter,g=n.onMouseLeave,v=n.onClick,y=n.onKeyDown,m=n.onFocus,d=ge(n,Ua),E=_n(i),R=t.useContext(Ee),N=R.prefixCls,b=R.onItemClick,p=R.disabled,S=R.overflowDisabled,C=R.itemIcon,D=R.selectedKeys,w=R.onActive,k=t.useContext(Xt),I=k._internalRenderMenuItem,P="".concat(N,"-item"),h=t.useRef(),A=t.useRef(),O=p||l,$=Ct(i),z=function(le){return{key:i,keyPath:Ke($).reverse(),item:h.current,domEvent:le}},V=u||C,X=Nn(i,O,c,g),J=X.active,T=ge(X,Ya),_=D.includes(i),L=qn($.length),K=function(le){if(!O){var de=z(le);v==null||v(Lt(de)),b(de)}},B=function(le){if(y==null||y(le),le.which===re.ENTER){var de=z(le);v==null||v(Lt(de)),b(de)}},x=function(le){w(i),m==null||m(le)},W={};n.role==="option"&&(W["aria-selected"]=_);var ne=t.createElement(Xa,xe({ref:h,elementRef:A,role:f===null?"none":f||"menuitem",tabIndex:l?null:-1,"data-menu-id":S&&E?null:E},d,T,W,{component:"li","aria-disabled":l,style:j(j({},L),o),className:te(P,(a={},M(a,"".concat(P,"-active"),J),M(a,"".concat(P,"-selected"),_),M(a,"".concat(P,"-disabled"),O),a),r),onClick:K,onKeyDown:B,onFocus:x}),s,t.createElement($n,{props:j(j({},n),{},{isSelected:_}),icon:V}));return I&&(ne=I(ne,n,{selected:_})),ne};function Zt(e){var n=e.eventKey,a=Kt(),o=Ct(n);return t.useEffect(function(){if(a)return a.registerPath(n,o),function(){a.unregisterPath(n,o)}},[o]),a?null:t.createElement(Za,e)}function Jt(e,n){return In(e).map(function(a,o){if(t.isValidElement(a)){var r,i,l=a.key,u=(r=(i=a.props)===null||i===void 0?void 0:i.eventKey)!==null&&r!==void 0?r:l,s=u==null;s&&(u="tmp_key-".concat([].concat(Ke(n),[o]).join("-")));var f={key:u,eventKey:u};return t.cloneElement(a,f)}return a})}function nt(e){var n=t.useRef(e);n.current=e;var a=t.useCallback(function(){for(var o,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(o=n.current)===null||o===void 0?void 0:o.call.apply(o,[n].concat(i))},[]);return e?a:void 0}var Ja=["className","children"],Qa=function(n,a){var o=n.className,r=n.children,i=ge(n,Ja),l=t.useContext(Ee),u=l.prefixCls,s=l.mode,f=l.rtl;return t.createElement("ul",xe({className:te(u,f&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(s==="inline"?"inline":"vertical"),o)},i,{"data-menu-list":!0,ref:a}),r)},Qt=t.forwardRef(Qa);Qt.displayName="SubMenuList";var Le={adjustX:1,adjustY:1},er={topLeft:{points:["bl","tl"],overflow:Le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Le,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Le,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Le,offset:[4,0]}},tr={topLeft:{points:["bl","tl"],overflow:Le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Le,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Le,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Le,offset:[4,0]}};function Bn(e,n,a){if(n)return n;if(a)return a[e]||a.other}var nr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ar(e){var n=e.prefixCls,a=e.visible,o=e.children,r=e.popup,i=e.popupClassName,l=e.popupOffset,u=e.disabled,s=e.mode,f=e.onVisibleChange,c=t.useContext(Ee),g=c.getPopupContainer,v=c.rtl,y=c.subMenuOpenDelay,m=c.subMenuCloseDelay,d=c.builtinPlacements,E=c.triggerSubMenuAction,R=c.forceSubMenuRender,N=c.motion,b=c.defaultMotions,p=t.useState(!1),S=q(p,2),C=S[0],D=S[1],w=v?j(j({},tr),d):j(j({},er),d),k=nr[s],I=Bn(s,N,b),P=j(j({},I),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),h=t.useRef();return t.useEffect(function(){return h.current=Re(function(){D(a)}),function(){Re.cancel(h.current)}},[a]),t.createElement(Tn,{prefixCls:n,popupClassName:te("".concat(n,"-popup"),M({},"".concat(n,"-rtl"),v),i),stretch:s==="horizontal"?"minWidth":null,getPopupContainer:g,builtinPlacements:w,popupPlacement:k,popupVisible:C,popup:r,popupAlign:l&&{offset:l},action:u?[]:[E],mouseEnterDelay:y,mouseLeaveDelay:m,onPopupVisibleChange:f,forceRender:R,popupMotion:P},o)}function rr(e){var n=e.id,a=e.open,o=e.keyPath,r=e.children,i="inline",l=t.useContext(Ee),u=l.prefixCls,s=l.forceSubMenuRender,f=l.motion,c=l.defaultMotions,g=l.mode,v=t.useRef(!1);v.current=g===i;var y=t.useState(!v.current),m=q(y,2),d=m[0],E=m[1],R=v.current?a:!1;t.useEffect(function(){v.current&&E(!1)},[g]);var N=j({},Bn(i,f,c));o.length>1&&(N.motionAppear=!1);var b=N.onVisibleChanged;return N.onVisibleChanged=function(p){return!v.current&&!p&&E(!0),b==null?void 0:b(p)},d?null:t.createElement(ht,{mode:i,locked:!v.current},t.createElement(ca,xe({visible:R},N,{forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(p){var S=p.className,C=p.style;return t.createElement(Qt,{id:n,className:S,style:C},r)}))}var or=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],ir=["active"],lr=function(n){var a,o=n.style,r=n.className,i=n.title,l=n.eventKey;n.warnKey;var u=n.disabled,s=n.internalPopupClose,f=n.children,c=n.itemIcon,g=n.expandIcon,v=n.popupClassName,y=n.popupOffset,m=n.onClick,d=n.onMouseEnter,E=n.onMouseLeave,R=n.onTitleClick,N=n.onTitleMouseEnter,b=n.onTitleMouseLeave,p=ge(n,or),S=_n(l),C=t.useContext(Ee),D=C.prefixCls,w=C.mode,k=C.openKeys,I=C.disabled,P=C.overflowDisabled,h=C.activeKey,A=C.selectedKeys,O=C.itemIcon,$=C.expandIcon,z=C.onItemClick,V=C.onOpenChange,X=C.onActive,J=t.useContext(Xt),T=J._internalRenderSubMenuItem,_=t.useContext(Kn),L=_.isSubPathKey,K=Ct(),B="".concat(D,"-submenu"),x=I||u,W=t.useRef(),ne=t.useRef(),ce=c||O,le=g||$,de=k.includes(l),Q=!P&&de,Pe=L(A,l),Se=Nn(l,x,N,b),he=Se.active,me=ge(Se,ir),Z=t.useState(!1),ye=q(Z,2),ue=ye[0],rt=ye[1],De=function(fe){x||rt(fe)},Ge=function(fe){De(!0),d==null||d({key:l,domEvent:fe})},Ue=function(fe){De(!1),E==null||E({key:l,domEvent:fe})},_e=t.useMemo(function(){return he||(w!=="inline"?ue||L([h],l):!1)},[w,he,h,ue,l,L]),ot=qn(K.length),Ye=function(fe){x||(R==null||R({key:l,domEvent:fe}),w==="inline"&&V(l,!de))},Ae=nt(function(pe){m==null||m(Lt(pe)),z(pe)}),it=function(fe){w!=="inline"&&V(l,fe)},Xe=function(){X(l)},se=S&&"".concat(S,"-popup"),Be=t.createElement("div",xe({role:"menuitem",style:ot,className:"".concat(B,"-title"),tabIndex:x?null:-1,ref:W,title:typeof i=="string"?i:null,"data-menu-id":P&&S?null:S,"aria-expanded":Q,"aria-haspopup":!0,"aria-controls":se,"aria-disabled":x,onClick:Ye,onFocus:Xe},me),i,t.createElement($n,{icon:w!=="horizontal"?le:null,props:j(j({},n),{},{isOpen:Q,isSubMenu:!0})},t.createElement("i",{className:"".concat(B,"-arrow")}))),Te=t.useRef(w);if(w!=="inline"&&(Te.current=K.length>1?"vertical":w),!P){var Ce=Te.current;Be=t.createElement(ar,{mode:Ce,prefixCls:B,visible:!s&&Q&&w!=="inline",popupClassName:v,popupOffset:y,popup:t.createElement(ht,{mode:Ce==="horizontal"?"vertical":Ce},t.createElement(Qt,{id:se,ref:ne},f)),disabled:x,onVisibleChange:it},Be)}var ke=t.createElement(gt.Item,xe({role:"none"},p,{component:"li",style:o,className:te(B,"".concat(B,"-").concat(w),r,(a={},M(a,"".concat(B,"-open"),Q),M(a,"".concat(B,"-active"),_e),M(a,"".concat(B,"-selected"),Pe),M(a,"".concat(B,"-disabled"),x),a)),onMouseEnter:Ge,onMouseLeave:Ue}),Be,!P&&t.createElement(rr,{id:se,open:Q,keyPath:K},f));return T&&(ke=T(ke,n,{selected:Pe,active:_e,open:Q,disabled:x})),t.createElement(ht,{onItemClick:Ae,mode:w==="horizontal"?"vertical":w,itemIcon:ce,expandIcon:le},ke)};function Wn(e){var n=e.eventKey,a=e.children,o=Ct(n),r=Jt(a,o),i=Kt();t.useEffect(function(){if(i)return i.registerPath(n,o),function(){i.unregisterPath(n,o)}},[o]);var l;return i?l=r:l=t.createElement(lr,e,r),t.createElement(Ln.Provider,{value:o},l)}var zt=re.LEFT,Gt=re.RIGHT,Ut=re.UP,$t=re.DOWN,qt=re.ENTER,Fn=re.ESC,bt=re.HOME,pt=re.END,fn=[Ut,$t,zt,Gt];function sr(e,n,a,o){var r,i,l,u,s="prev",f="next",c="children",g="parent";if(e==="inline"&&o===qt)return{inlineTrigger:!0};var v=(r={},M(r,Ut,s),M(r,$t,f),r),y=(i={},M(i,zt,a?f:s),M(i,Gt,a?s:f),M(i,$t,c),M(i,qt,c),i),m=(l={},M(l,Ut,s),M(l,$t,f),M(l,qt,c),M(l,Fn,g),M(l,zt,a?c:g),M(l,Gt,a?g:c),l),d={inline:v,horizontal:y,vertical:m,inlineSub:v,horizontalSub:m,verticalSub:m},E=(u=d["".concat(e).concat(n?"":"Sub")])===null||u===void 0?void 0:u[o];switch(E){case s:return{offset:-1,sibling:!0};case f:return{offset:1,sibling:!0};case g:return{offset:-1,sibling:!1};case c:return{offset:1,sibling:!1};default:return null}}function cr(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}function ur(e,n){for(var a=e||document.activeElement;a;){if(n.has(a))return a;a=a.parentElement}return null}function Vn(e,n){var a=Ka(e,!0);return a.filter(function(o){return n.has(o)})}function vn(e,n,a){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var r=Vn(e,n),i=r.length,l=r.findIndex(function(u){return a===u});return o<0?l===-1?l=i-1:l-=1:o>0&&(l+=1),l=(l+i)%i,r[l]}function dr(e,n,a,o,r,i,l,u,s,f){var c=t.useRef(),g=t.useRef();g.current=n;var v=function(){Re.cancel(c.current)};return t.useEffect(function(){return function(){v()}},[]),function(y){var m=y.which;if([].concat(fn,[qt,Fn,bt,pt]).includes(m)){var d,E,R,N=function(){d=new Set,E=new Map,R=new Map;var $=i();return $.forEach(function(z){var V=document.querySelector("[data-menu-id='".concat(Dn(o,z),"']"));V&&(d.add(V),R.set(V,z),E.set(z,V))}),d};N();var b=E.get(n),p=ur(b,d),S=R.get(p),C=sr(e,l(S,!0).length===1,a,m);if(!C&&m!==bt&&m!==pt)return;(fn.includes(m)||[bt,pt].includes(m))&&y.preventDefault();var D=function($){if($){var z=$,V=$.querySelector("a");V!=null&&V.getAttribute("href")&&(z=V);var X=R.get($);u(X),v(),c.current=Re(function(){g.current===X&&z.focus()})}};if([bt,pt].includes(m)||C.sibling||!p){var w;!p||e==="inline"?w=r.current:w=cr(p);var k,I=Vn(w,d);m===bt?k=I[0]:m===pt?k=I[I.length-1]:k=vn(w,d,p,C.offset),D(k)}else if(C.inlineTrigger)s(S);else if(C.offset>0)s(S,!0),v(),c.current=Re(function(){N();var O=p.getAttribute("aria-controls"),$=document.getElementById(O),z=vn($,d);D(z)},5);else if(C.offset<0){var P=l(S,!0),h=P[P.length-2],A=E.get(h);s(h,!1),D(A)}}f==null||f(y)}}var fr=Math.random().toFixed(5).toString().slice(2),mn=0;function vr(e){var n=at(e,{value:e}),a=q(n,2),o=a[0],r=a[1];return t.useEffect(function(){mn+=1;var i="".concat(fr,"-").concat(mn);r("rc-menu-uuid-".concat(i))},[]),o}function mr(e){Promise.resolve().then(e)}var en="__RC_UTIL_PATH_SPLIT__",bn=function(n){return n.join(en)},br=function(n){return n.split(en)},Yt="rc-menu-more";function pr(){var e=t.useState({}),n=q(e,2),a=n[1],o=t.useRef(new Map),r=t.useRef(new Map),i=t.useState([]),l=q(i,2),u=l[0],s=l[1],f=t.useRef(0),c=t.useRef(!1),g=function(){c.current||a({})},v=t.useCallback(function(b,p){var S=bn(p);r.current.set(S,b),o.current.set(b,S),f.current+=1;var C=f.current;mr(function(){C===f.current&&g()})},[]),y=t.useCallback(function(b,p){var S=bn(p);r.current.delete(S),o.current.delete(b)},[]),m=t.useCallback(function(b){s(b)},[]),d=t.useCallback(function(b,p){var S=o.current.get(b)||"",C=br(S);return p&&u.includes(C[0])&&C.unshift(Yt),C},[u]),E=t.useCallback(function(b,p){return b.some(function(S){var C=d(S,!0);return C.includes(p)})},[d]),R=function(){var p=Ke(o.current.keys());return u.length&&p.push(Yt),p},N=t.useCallback(function(b){var p="".concat(o.current.get(b)).concat(en),S=new Set;return Ke(r.current.keys()).forEach(function(C){C.startsWith(p)&&S.add(r.current.get(C))}),S},[]);return t.useEffect(function(){return function(){c.current=!0}},[]),{registerPath:v,unregisterPath:y,refreshOverflowKeys:m,isSubPathKey:E,getKeyPath:d,getKeys:R,getSubPathKeys:N}}var gr=["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Qe=[],hr=t.forwardRef(function(e,n){var a,o,r=e.prefixCls,i=r===void 0?"rc-menu":r,l=e.style,u=e.className,s=e.tabIndex,f=s===void 0?0:s,c=e.children,g=e.direction,v=e.id,y=e.mode,m=y===void 0?"vertical":y,d=e.inlineCollapsed,E=e.disabled,R=e.disabledOverflow,N=e.subMenuOpenDelay,b=N===void 0?.1:N,p=e.subMenuCloseDelay,S=p===void 0?.1:p,C=e.forceSubMenuRender,D=e.defaultOpenKeys,w=e.openKeys,k=e.activeKey,I=e.defaultActiveFirst,P=e.selectable,h=P===void 0?!0:P,A=e.multiple,O=A===void 0?!1:A,$=e.defaultSelectedKeys,z=e.selectedKeys,V=e.onSelect,X=e.onDeselect,J=e.inlineIndent,T=J===void 0?24:J,_=e.motion,L=e.defaultMotions,K=e.triggerSubMenuAction,B=K===void 0?"hover":K,x=e.builtinPlacements,W=e.itemIcon,ne=e.expandIcon,ce=e.overflowedIndicator,le=ce===void 0?"...":ce,de=e.overflowedIndicatorPopupClassName,Q=e.getPopupContainer,Pe=e.onClick,Se=e.onOpenChange,he=e.onKeyDown;e.openAnimation,e.openTransitionName;var me=e._internalRenderMenuItem,Z=e._internalRenderSubMenuItem,ye=ge(e,gr),ue=Jt(c,Qe),rt=t.useState(!1),De=q(rt,2),Ge=De[0],Ue=De[1],_e=t.useRef(),ot=Rn(_e,n),Ye=vr(v),Ae=g==="rtl",it=t.useMemo(function(){return(m==="inline"||m==="vertical")&&d?["vertical",d]:[m,!1]},[m,d]),Xe=q(it,2),se=Xe[0],Be=Xe[1],Te=t.useState(0),Ce=q(Te,2),ke=Ce[0],pe=Ce[1],fe=ke>=ue.length-1||se!=="horizontal"||R,xt=at(D,{value:w,postState:function(G){return G||Qe}}),We=q(xt,2),we=We[0],Ze=We[1],Fe=function(G){Ze(G),Se==null||Se(G)},St=t.useState(we),wt=q(St,2),It=wt[0],_t=wt[1],lt=se==="inline",Ve=t.useRef(!1);t.useEffect(function(){lt&&_t(we)},[we]),t.useEffect(function(){if(!Ve.current){Ve.current=!0;return}lt?Ze(It):Fe(Qe)},[lt]);var Me=pr(),Je=Me.registerPath,Rt=Me.unregisterPath,Bt=Me.refreshOverflowKeys,st=Me.isSubPathKey,Wt=Me.getKeyPath,Et=Me.getKeys,Ft=Me.getSubPathKeys,Vt=t.useMemo(function(){return{registerPath:Je,unregisterPath:Rt}},[Je,Rt]),Ne=t.useMemo(function(){return{isSubPathKey:st}},[st]);t.useEffect(function(){Bt(fe?Qe:ue.slice(ke+1).map(function(ee){return ee.key}))},[ke,fe]);var Pt=at(k||I&&((a=ue[0])===null||a===void 0?void 0:a.key),{value:k}),ct=q(Pt,2),ut=ct[0],qe=ct[1],dt=nt(function(ee){qe(ee)}),ft=nt(function(){qe(void 0)}),Tt=at($||[],{value:z,postState:function(G){return Array.isArray(G)?G:G==null?Qe:[G]}}),vt=q(Tt,2),F=vt[0],H=vt[1],ae=function(G){if(h){var oe=G.key,Ie=F.includes(oe),ve;O?Ie?ve=F.filter(function(aa){return aa!==oe}):ve=[].concat(Ke(F),[oe]):ve=[oe],H(ve);var rn=j(j({},G),{},{selectedKeys:ve});Ie?X==null||X(rn):V==null||V(rn)}!O&&we.length&&se!=="inline"&&Fe(Qe)},be=nt(function(ee){Pe==null||Pe(Lt(ee)),ae(ee)}),$e=nt(function(ee,G){var oe=we.filter(function(ve){return ve!==ee});if(G)oe.push(ee);else if(se!=="inline"){var Ie=Ft(ee);oe=oe.filter(function(ve){return!Ie.has(ve)})}Sn(we,oe)||Fe(oe)}),je=nt(Q),mt=function(G,oe){var Ie=oe??!we.includes(G);$e(G,Ie)},jt=dr(se,ut,Ae,Ye,_e,Et,Wt,qe,mt,he);t.useEffect(function(){Ue(!0)},[]);var Mt=t.useMemo(function(){return{_internalRenderMenuItem:me,_internalRenderSubMenuItem:Z}},[me,Z]),Nt=se!=="horizontal"||R?ue:ue.map(function(ee,G){return t.createElement(ht,{key:ee.key,overflowDisabled:G>ke},ee)}),Ht=t.createElement(gt,xe({id:v,ref:ot,prefixCls:"".concat(i,"-overflow"),component:"ul",itemComponent:Zt,className:te(i,"".concat(i,"-root"),"".concat(i,"-").concat(se),u,(o={},M(o,"".concat(i,"-inline-collapsed"),Be),M(o,"".concat(i,"-rtl"),Ae),o)),dir:g,style:l,role:"menu",tabIndex:f,data:Nt,renderRawItem:function(G){return G},renderRawRest:function(G){var oe=G.length,Ie=oe?ue.slice(-oe):null;return t.createElement(Wn,{eventKey:Yt,title:le,disabled:fe,internalPopupClose:oe===0,popupClassName:de},Ie)},maxCount:se!=="horizontal"||R?gt.INVALIDATE:gt.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(G){pe(G)},onKeyDown:jt},ye));return t.createElement(Xt.Provider,{value:Mt},t.createElement(On.Provider,{value:Ye},t.createElement(ht,{prefixCls:i,mode:se,openKeys:we,rtl:Ae,disabled:E,motion:Ge?_:null,defaultMotions:Ge?L:null,activeKey:ut,onActive:dt,onInactive:ft,selectedKeys:F,inlineIndent:T,subMenuOpenDelay:b,subMenuCloseDelay:S,forceSubMenuRender:C,builtinPlacements:x,triggerSubMenuAction:B,getPopupContainer:je,itemIcon:W,expandIcon:ne,onItemClick:be,onOpenChange:$e},t.createElement(Kn.Provider,{value:Ne},Ht),t.createElement("div",{style:{display:"none"},"aria-hidden":!0},t.createElement(An.Provider,{value:Vt},ue)))))}),yr=["className","title","eventKey","children"],Cr=["children"],kr=function(n){var a=n.className,o=n.title;n.eventKey;var r=n.children,i=ge(n,yr),l=t.useContext(Ee),u=l.prefixCls,s="".concat(u,"-item-group");return t.createElement("li",xe({},i,{onClick:function(c){return c.stopPropagation()},className:te(s,a)}),t.createElement("div",{className:"".concat(s,"-title"),title:typeof o=="string"?o:void 0},o),t.createElement("ul",{className:"".concat(s,"-list")},r))};function xr(e){var n=e.children,a=ge(e,Cr),o=Ct(a.eventKey),r=Jt(n,o),i=Kt();return i?r:t.createElement(kr,Pn(a,["warnKey"]),r)}function Sr(e){var n=e.className,a=e.style,o=t.useContext(Ee),r=o.prefixCls,i=Kt();return i?null:t.createElement("li",{className:te("".concat(r,"-item-divider"),n),style:a})}var kt=hr;kt.Item=Zt;kt.SubMenu=Wn;kt.ItemGroup=xr;kt.Divider=Sr;var et={adjustX:1,adjustY:1},tt=[0,0],wr={topLeft:{points:["bl","tl"],overflow:et,offset:[0,-4],targetOffset:tt},topCenter:{points:["bc","tc"],overflow:et,offset:[0,-4],targetOffset:tt},topRight:{points:["br","tr"],overflow:et,offset:[0,-4],targetOffset:tt},bottomLeft:{points:["tl","bl"],overflow:et,offset:[0,4],targetOffset:tt},bottomCenter:{points:["tc","bc"],overflow:et,offset:[0,4],targetOffset:tt},bottomRight:{points:["tr","br"],overflow:et,offset:[0,4],targetOffset:tt}},Ir=re.ESC,Rr=re.TAB;function Er(e){var n=e.visible,a=e.setTriggerVisible,o=e.triggerRef,r=e.menuRef,i=e.onVisibleChange,l=e.autoFocus,u=t.useRef(!1),s=function(){if(n&&o.current){var v,y,m,d;(v=o.current)===null||v===void 0||(y=v.triggerRef)===null||y===void 0||(m=y.current)===null||m===void 0||(d=m.focus)===null||d===void 0||d.call(m),a(!1),typeof i=="function"&&i(!1)}},f=function(){var v,y;(v=r.current)===null||v===void 0||(y=v.focus)===null||y===void 0||y.call(v),u.current=!0},c=function(v){var y;switch(v.keyCode){case Ir:s();break;case Rr:!u.current&&(!((y=r.current)===null||y===void 0)&&y.focus)?(v.preventDefault(),f()):s();break}};t.useEffect(function(){return n?(window.addEventListener("keydown",c),l&&Re(f,3),function(){window.removeEventListener("keydown",c),u.current=!1}):function(){u.current=!1}},[n])}var Pr=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function Tr(e,n){var a=e.arrow,o=a===void 0?!1:a,r=e.prefixCls,i=r===void 0?"rc-dropdown":r,l=e.transitionName,u=e.animation,s=e.align,f=e.placement,c=f===void 0?"bottomLeft":f,g=e.placements,v=g===void 0?wr:g,y=e.getPopupContainer,m=e.showAction,d=e.hideAction,E=e.overlayClassName,R=e.overlayStyle,N=e.visible,b=e.trigger,p=b===void 0?["hover"]:b,S=e.autoFocus,C=ge(e,Pr),D=t.useState(),w=q(D,2),k=w[0],I=w[1],P="visible"in e?N:k,h=t.useRef(null);t.useImperativeHandle(n,function(){return h.current});var A=t.useRef(null),O="".concat(i,"-menu");Er({visible:P,setTriggerVisible:I,triggerRef:h,menuRef:A,onVisibleChange:e.onVisibleChange,autoFocus:S});var $=function(){var x=e.overlay,W;return typeof x=="function"?W=x():W=x,W},z=function(x){var W=e.onOverlayClick,ne=$().props;I(!1),W&&W(x),ne.onClick&&ne.onClick(x)},V=function(x){var W=e.onVisibleChange;I(x),typeof W=="function"&&W(x)},X=function(){var x,W=$(),ne=Rn(A,W.ref),ce=(x={prefixCls:O},M(x,"data-dropdown-inject",!0),M(x,"onClick",z),M(x,"ref",ua(W)?ne:void 0),x);return typeof W.type=="string"&&(delete ce.prefixCls,delete ce["data-dropdown-inject"]),t.createElement(t.Fragment,null,o&&t.createElement("div",{className:"".concat(i,"-arrow")}),t.cloneElement(W,ce))},J=function(){var x=e.overlay;return typeof x=="function"?X:X()},T=function(){var x=e.minOverlayWidthMatchTrigger,W=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?x:!W},_=function(){var x=e.openClassName;return x!==void 0?x:"".concat(i,"-open")},L=function(){var x=e.children,W=x.props?x.props:{},ne=te(W.className,_());return P&&x?t.cloneElement(x,{className:ne}):x},K=d;return!K&&p.indexOf("contextMenu")!==-1&&(K=["click"]),t.createElement(Tn,j(j({builtinPlacements:v},C),{},{prefixCls:i,ref:h,popupClassName:te(E,M({},"".concat(i,"-show-arrow"),o)),popupStyle:R,action:p,showAction:m,hideAction:K||[],popupPlacement:c,popupAlign:s,popupTransitionName:l,popupAnimation:u,popupVisible:P,stretch:T()?"minWidth":"",popup:J(),onPopupVisibleChange:V,getPopupContainer:y}),L())}const Mr=t.forwardRef(Tr);function Nr(e,n){var a=e.prefixCls,o=e.editable,r=e.locale,i=e.style;return!o||o.showAdd===!1?null:t.createElement("button",{ref:n,type:"button",className:"".concat(a,"-nav-add"),style:i,"aria-label":(r==null?void 0:r.addAriaLabel)||"Add tab",onClick:function(u){o.onEdit("add",{event:u})}},o.addIcon||"+")}const jn=t.forwardRef(Nr);function $r(e,n){var a=e.prefixCls,o=e.id,r=e.tabs,i=e.locale,l=e.mobile,u=e.moreIcon,s=u===void 0?"More":u,f=e.moreTransitionName,c=e.style,g=e.className,v=e.editable,y=e.tabBarGutter,m=e.rtl,d=e.removeAriaLabel,E=e.onTabClick,R=t.useState(!1),N=q(R,2),b=N[0],p=N[1],S=t.useState(null),C=q(S,2),D=C[0],w=C[1],k="".concat(o,"-more-popup"),I="".concat(a,"-dropdown"),P=D!==null?"".concat(k,"-").concat(D):null,h=i==null?void 0:i.dropdownAriaLabel;function A(T,_){T.preventDefault(),T.stopPropagation(),v.onEdit("remove",{key:_,event:T})}var O=t.createElement(kt,{onClick:function(_){var L=_.key,K=_.domEvent;E(L,K),p(!1)},id:k,tabIndex:-1,role:"listbox","aria-activedescendant":P,selectedKeys:[D],"aria-label":h!==void 0?h:"expanded dropdown"},r.map(function(T){var _=v&&T.closable!==!1&&!T.disabled;return t.createElement(Zt,{key:T.key,id:"".concat(k,"-").concat(T.key),role:"option","aria-controls":o&&"".concat(o,"-panel-").concat(T.key),disabled:T.disabled},t.createElement("span",null,T.tab),_&&t.createElement("button",{type:"button","aria-label":d||"remove",tabIndex:0,className:"".concat(I,"-menu-item-remove"),onClick:function(K){K.stopPropagation(),A(K,T.key)}},T.closeIcon||v.removeIcon||"×"))}));function $(T){for(var _=r.filter(function(W){return!W.disabled}),L=_.findIndex(function(W){return W.key===D})||0,K=_.length,B=0;B<K;B+=1){L=(L+T+K)%K;var x=_[L];if(!x.disabled){w(x.key);return}}}function z(T){var _=T.which;if(!b){[re.DOWN,re.SPACE,re.ENTER].includes(_)&&(p(!0),T.preventDefault());return}switch(_){case re.UP:$(-1),T.preventDefault();break;case re.DOWN:$(1),T.preventDefault();break;case re.ESC:p(!1);break;case re.SPACE:case re.ENTER:D!==null&&E(D,T);break}}t.useEffect(function(){var T=document.getElementById(P);T&&T.scrollIntoView&&T.scrollIntoView(!1)},[D]),t.useEffect(function(){b||w(null)},[b]);var V=M({},m?"marginRight":"marginLeft",y);r.length||(V.visibility="hidden",V.order=1);var X=te(M({},"".concat(I,"-rtl"),m)),J=l?null:t.createElement(Mr,{prefixCls:I,overlay:O,trigger:["hover"],visible:b,transitionName:f,onVisibleChange:p,overlayClassName:X,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(a,"-nav-more"),style:V,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":k,id:"".concat(o,"-more"),"aria-expanded":b,onKeyDown:z},s));return t.createElement("div",{className:te("".concat(a,"-nav-operations"),g),style:c,ref:n},J,t.createElement(jn,{prefixCls:a,locale:i,editable:v}))}const qr=t.memo(t.forwardRef($r),function(e,n){return n.tabMoving}),tn=t.createContext(null);var Ar=.1,pn=.01,At=20,gn=Math.pow(.995,At);function Lr(e,n){var a=t.useState(),o=q(a,2),r=o[0],i=o[1],l=t.useState(0),u=q(l,2),s=u[0],f=u[1],c=t.useState(0),g=q(c,2),v=g[0],y=g[1],m=t.useState(),d=q(m,2),E=d[0],R=d[1],N=t.useRef();function b(k){var I=k.touches[0],P=I.screenX,h=I.screenY;i({x:P,y:h}),window.clearInterval(N.current)}function p(k){if(r){k.preventDefault();var I=k.touches[0],P=I.screenX,h=I.screenY;i({x:P,y:h});var A=P-r.x,O=h-r.y;n(A,O);var $=Date.now();f($),y($-s),R({x:A,y:O})}}function S(){if(r&&(i(null),R(null),E)){var k=E.x/v,I=E.y/v,P=Math.abs(k),h=Math.abs(I);if(Math.max(P,h)<Ar)return;var A=k,O=I;N.current=window.setInterval(function(){if(Math.abs(A)<pn&&Math.abs(O)<pn){window.clearInterval(N.current);return}A*=gn,O*=gn,n(A*At,O*At)},At)}}var C=t.useRef();function D(k){var I=k.deltaX,P=k.deltaY,h=0,A=Math.abs(I),O=Math.abs(P);A===O?h=C.current==="x"?I:P:A>O?(h=I,C.current="x"):(h=P,C.current="y"),n(-h,-h)&&k.preventDefault()}var w=t.useRef(null);w.current={onTouchStart:b,onTouchMove:p,onTouchEnd:S,onWheel:D},t.useEffect(function(){function k(A){w.current.onTouchStart(A)}function I(A){w.current.onTouchMove(A)}function P(A){w.current.onTouchEnd(A)}function h(A){w.current.onWheel(A)}return document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",P,{passive:!1}),e.current.addEventListener("touchstart",k,{passive:!1}),e.current.addEventListener("wheel",h),function(){document.removeEventListener("touchmove",I),document.removeEventListener("touchend",P)}},[])}function Kr(){var e=t.useRef(new Map);function n(o){return e.current.has(o)||e.current.set(o,t.createRef()),e.current.get(o)}function a(o){e.current.delete(o)}return[n,a]}function hn(e,n){var a=t.useRef(e),o=t.useState({}),r=q(o,2),i=r[1];function l(u){var s=typeof u=="function"?u(a.current):u;s!==a.current&&n(s,a.current),a.current=s,i({})}return[a.current,l]}var yn=function(n){var a=n.position,o=n.prefixCls,r=n.extra;if(!r)return null;var i,l={};return r&&En(r)==="object"&&!t.isValidElement(r)?l=r:l.right=r,a==="right"&&(i=l.right),a==="left"&&(i=l.left),i?t.createElement("div",{className:"".concat(o,"-extra-content")},i):null};function Or(e,n){var a,o=t.useContext(tn),r=o.prefixCls,i=o.tabs,l=e.className,u=e.style,s=e.id,f=e.animated,c=e.activeKey,g=e.rtl,v=e.extra,y=e.editable,m=e.locale,d=e.tabPosition,E=e.tabBarGutter,R=e.children,N=e.onTabClick,b=e.onTabScroll,p=t.useRef(),S=t.useRef(),C=t.useRef(),D=t.useRef(),w=Kr(),k=q(w,2),I=k[0],P=k[1],h=d==="top"||d==="bottom",A=hn(0,function(F,H){h&&b&&b({direction:F>H?"left":"right"})}),O=q(A,2),$=O[0],z=O[1],V=hn(0,function(F,H){!h&&b&&b({direction:F>H?"top":"bottom"})}),X=q(V,2),J=X[0],T=X[1],_=t.useState(0),L=q(_,2),K=L[0],B=L[1],x=t.useState(0),W=q(x,2),ne=W[0],ce=W[1],le=t.useState(null),de=q(le,2),Q=de[0],Pe=de[1],Se=t.useState(null),he=q(Se,2),me=he[0],Z=he[1],ye=t.useState(0),ue=q(ye,2),rt=ue[0],De=ue[1],Ge=t.useState(0),Ue=q(Ge,2),_e=Ue[0],ot=Ue[1],Ye=Da(new Map),Ae=q(Ye,2),it=Ae[0],Xe=Ae[1],se=Wa(i,it,K),Be="".concat(r,"-nav-operations-hidden"),Te=0,Ce=0;h?g?(Te=0,Ce=Math.max(0,K-Q)):(Te=Math.min(0,Q-K),Ce=0):(Te=Math.min(0,me-ne),Ce=0);function ke(F){return F<Te?Te:F>Ce?Ce:F}var pe=t.useRef(),fe=t.useState(),xt=q(fe,2),We=xt[0],we=xt[1];function Ze(){we(Date.now())}function Fe(){window.clearTimeout(pe.current)}Lr(p,function(F,H){function ae(be,$e){be(function(je){var mt=ke(je+$e);return mt})}if(h){if(Q>=K)return!1;ae(z,F)}else{if(me>=ne)return!1;ae(T,H)}return Fe(),Ze(),!0}),t.useEffect(function(){return Fe(),We&&(pe.current=window.setTimeout(function(){we(0)},100)),Fe},[We]);function St(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c,H=se.get(F)||{width:0,height:0,left:0,right:0,top:0};if(h){var ae=$;g?H.right<$?ae=H.right:H.right+H.width>$+Q&&(ae=H.right+H.width-Q):H.left<-$?ae=-H.left:H.left+H.width>-$+Q&&(ae=-(H.left+H.width-Q)),T(0),z(ke(ae))}else{var be=J;H.top<-J?be=-H.top:H.top+H.height>-J+me&&(be=-(H.top+H.height-me)),z(0),T(ke(be))}}var wt=Fa(se,{width:Q,height:me,left:$,top:J},{width:K,height:ne},{width:rt,height:_e},j(j({},e),{},{tabs:i})),It=q(wt,2),_t=It[0],lt=It[1],Ve={};d==="top"||d==="bottom"?Ve[g?"marginRight":"marginLeft"]=E:Ve.marginTop=E;var Me=i.map(function(F,H){var ae=F.key;return t.createElement(Ba,{id:s,prefixCls:r,key:ae,tab:F,style:H===0?void 0:Ve,closable:F.closable,editable:y,active:ae===c,renderWrapper:R,removeAriaLabel:m==null?void 0:m.removeAriaLabel,ref:I(ae),onClick:function($e){N(ae,$e)},onRemove:function(){P(ae)},onFocus:function(){St(ae),Ze(),p.current&&(g||(p.current.scrollLeft=0),p.current.scrollTop=0)}})}),Je=Mn(function(){var F,H,ae,be,$e,je,mt=((F=p.current)===null||F===void 0?void 0:F.offsetWidth)||0,jt=((H=p.current)===null||H===void 0?void 0:H.offsetHeight)||0,Mt=((ae=D.current)===null||ae===void 0?void 0:ae.offsetWidth)||0,Nt=((be=D.current)===null||be===void 0?void 0:be.offsetHeight)||0;Pe(mt),Z(jt),De(Mt),ot(Nt);var Ht=((($e=S.current)===null||$e===void 0?void 0:$e.offsetWidth)||0)-Mt,ee=(((je=S.current)===null||je===void 0?void 0:je.offsetHeight)||0)-Nt;B(Ht),ce(ee),Xe(function(){var G=new Map;return i.forEach(function(oe){var Ie=oe.key,ve=I(Ie).current;ve&&G.set(Ie,{width:ve.offsetWidth,height:ve.offsetHeight,left:ve.offsetLeft,top:ve.offsetTop})}),G})}),Rt=i.slice(0,_t),Bt=i.slice(lt+1),st=[].concat(Ke(Rt),Ke(Bt)),Wt=t.useState(),Et=q(Wt,2),Ft=Et[0],Vt=Et[1],Ne=se.get(c),Pt=t.useRef();function ct(){Re.cancel(Pt.current)}t.useEffect(function(){var F={};return Ne&&(h?(g?F.right=Ne.right:F.left=Ne.left,F.width=Ne.width):(F.top=Ne.top,F.height=Ne.height)),ct(),Pt.current=Re(function(){Vt(F)}),ct},[Ne,h,g]),t.useEffect(function(){St()},[c,Ne,se,h]),t.useEffect(function(){Je()},[g,E,c,i.map(function(F){return F.key}).join("_")]);var ut=!!st.length,qe="".concat(r,"-nav-wrap"),dt,ft,Tt,vt;return h?g?(ft=$>0,dt=$+Q<K):(dt=$<0,ft=-$+Q<K):(Tt=J<0,vt=-J+me<ne),t.createElement("div",{ref:n,role:"tablist",className:te("".concat(r,"-nav"),l),style:u,onKeyDown:function(){Ze()}},t.createElement(yn,{position:"left",extra:v,prefixCls:r}),t.createElement(on,{onResize:Je},t.createElement("div",{className:te(qe,(a={},M(a,"".concat(qe,"-ping-left"),dt),M(a,"".concat(qe,"-ping-right"),ft),M(a,"".concat(qe,"-ping-top"),Tt),M(a,"".concat(qe,"-ping-bottom"),vt),a)),ref:p},t.createElement(on,{onResize:Je},t.createElement("div",{ref:S,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat($,"px, ").concat(J,"px)"),transition:We?"none":void 0}},Me,t.createElement(jn,{ref:D,prefixCls:r,locale:m,editable:y,style:j(j({},Me.length===0?void 0:Ve),{},{visibility:ut?"hidden":null})}),t.createElement("div",{className:te("".concat(r,"-ink-bar"),M({},"".concat(r,"-ink-bar-animated"),f.inkBar)),style:Ft}))))),t.createElement(qr,xe({},e,{removeAriaLabel:m==null?void 0:m.removeAriaLabel,ref:C,prefixCls:r,tabs:st,className:!ut&&Be,tabMoving:!!We})),t.createElement(yn,{position:"right",extra:v,prefixCls:r}))}const Cn=t.forwardRef(Or);function Dr(e){var n=e.id,a=e.activeKey,o=e.animated,r=e.tabPosition,i=e.rtl,l=e.destroyInactiveTabPane,u=t.useContext(tn),s=u.prefixCls,f=u.tabs,c=o.tabPane,g=f.findIndex(function(v){return v.key===a});return t.createElement("div",{className:te("".concat(s,"-content-holder"))},t.createElement("div",{className:te("".concat(s,"-content"),"".concat(s,"-content-").concat(r),M({},"".concat(s,"-content-animated"),c)),style:g&&c?M({},i?"marginRight":"marginLeft","-".concat(g,"00%")):null},f.map(function(v){return t.cloneElement(v.node,{key:v.key,prefixCls:s,tabKey:v.key,id:n,animated:c,active:v.key===a,destroyInactiveTabPane:l})})))}function Hn(e){var n=e.prefixCls,a=e.forceRender,o=e.className,r=e.style,i=e.id,l=e.active,u=e.animated,s=e.destroyInactiveTabPane,f=e.tabKey,c=e.children,g=t.useState(a),v=q(g,2),y=v[0],m=v[1];t.useEffect(function(){l?m(!0):s&&m(!1)},[l,s]);var d={};return l||(u?(d.visibility="hidden",d.height=0,d.overflowY="hidden"):d.display="none"),t.createElement("div",{id:i&&"".concat(i,"-panel-").concat(f),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(f),"aria-hidden":!l,style:j(j({},d),r),className:te("".concat(n,"-tabpane"),l&&"".concat(n,"-tabpane-active"),o)},(l||y||a)&&c)}var _r=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],kn=0;function Br(e){return In(e).map(function(n){if(t.isValidElement(n)){var a=n.key!==void 0?String(n.key):void 0;return j(j({key:a},n.props),{},{node:n})}return null}).filter(function(n){return n})}function Wr(e,n){var a,o=e.id,r=e.prefixCls,i=r===void 0?"rc-tabs":r,l=e.className,u=e.children,s=e.direction,f=e.activeKey,c=e.defaultActiveKey,g=e.editable,v=e.animated,y=v===void 0?{inkBar:!0,tabPane:!1}:v,m=e.tabPosition,d=m===void 0?"top":m,E=e.tabBarGutter,R=e.tabBarStyle,N=e.tabBarExtraContent,b=e.locale,p=e.moreIcon,S=e.moreTransitionName,C=e.destroyInactiveTabPane,D=e.renderTabBar,w=e.onChange,k=e.onTabClick,I=e.onTabScroll,P=ge(e,_r),h=Br(u),A=s==="rtl",O;y===!1?O={inkBar:!1,tabPane:!1}:y===!0?O={inkBar:!0,tabPane:!0}:O=j({inkBar:!0,tabPane:!1},En(y)==="object"?y:{});var $=t.useState(!1),z=q($,2),V=z[0],X=z[1];t.useEffect(function(){X(da())},[]);var J=at(function(){var Z;return(Z=h[0])===null||Z===void 0?void 0:Z.key},{value:f,defaultValue:c}),T=q(J,2),_=T[0],L=T[1],K=t.useState(function(){return h.findIndex(function(Z){return Z.key===_})}),B=q(K,2),x=B[0],W=B[1];t.useEffect(function(){var Z=h.findIndex(function(ue){return ue.key===_});if(Z===-1){var ye;Z=Math.max(0,Math.min(x,h.length-1)),L((ye=h[Z])===null||ye===void 0?void 0:ye.key)}W(Z)},[h.map(function(Z){return Z.key}).join("_"),_,x]);var ne=at(null,{value:o}),ce=q(ne,2),le=ce[0],de=ce[1],Q=d;V&&!["left","right"].includes(d)&&(Q="top"),t.useEffect(function(){o||(de("rc-tabs-".concat(kn)),kn+=1)},[]);function Pe(Z,ye){k==null||k(Z,ye);var ue=Z!==_;L(Z),ue&&(w==null||w(Z))}var Se={id:le,activeKey:_,animated:O,tabPosition:Q,rtl:A,mobile:V},he,me=j(j({},Se),{},{editable:g,locale:b,moreIcon:p,moreTransitionName:S,tabBarGutter:E,onTabClick:Pe,onTabScroll:I,extra:N,style:R,panes:u});return D?he=D(me,Cn):he=t.createElement(Cn,me),t.createElement(tn.Provider,{value:{tabs:h,prefixCls:i}},t.createElement("div",xe({ref:n,id:o,className:te(i,"".concat(i,"-").concat(Q),(a={},M(a,"".concat(i,"-mobile"),V),M(a,"".concat(i,"-editable"),g),M(a,"".concat(i,"-rtl"),A),a),l)},P),he,t.createElement(Dr,xe({destroyInactiveTabPane:C},Se,{animated:O}))))}var zn=t.forwardRef(Wr);zn.TabPane=Hn;var Fr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},Vr=function(n,a){return t.createElement(Na,j(j({},n),{},{ref:a,icon:Fr}))},jr=t.forwardRef(Vr),Hr=function(e,n){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a};function Ot(e){var n=e.type,a=e.className,o=e.size,r=e.onEdit,i=e.hideAdd,l=e.centered,u=e.addIcon,s=Hr(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),f=s.prefixCls,c=s.moreIcon,g=c===void 0?t.createElement(Oa,null):c,v=t.useContext($a),y=v.getPrefixCls,m=v.direction,d=y("tabs",f),E;n==="editable-card"&&(E={onEdit:function(b,p){var S=p.key,C=p.event;r==null||r(b==="add"?C:S,b)},removeIcon:t.createElement(La,null),addIcon:u||t.createElement(jr,null),showAdd:i!==!0});var R=y();return qa(!("onPrevClick"in s)&&!("onNextClick"in s),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),t.createElement(Aa.Consumer,null,function(N){var b,p=o!==void 0?o:N;return t.createElement(zn,xe({direction:m,moreTransitionName:"".concat(R,"-slide-up")},s,{className:te((b={},M(b,"".concat(d,"-").concat(p),p),M(b,"".concat(d,"-card"),["card","editable-card"].includes(n)),M(b,"".concat(d,"-editable-card"),n==="editable-card"),M(b,"".concat(d,"-centered"),l),b),a),editable:E,moreIcon:g,prefixCls:d}))})}Ot.TabPane=Hn;const Gn=t.createContext({}),He=Oe.div``,ze=Oe.div``,Un=Oe(Ra)``,Yn=Oe(ba)``,Xn=Oe.div``,U=fa(),ie={tabList:{gap:"4px",padding:"24px 12px",margin:"0 0 24px 0"},topTab:{padding:"2px 8px",margin:"8px",borderRadius:"4px"},leftTab:{padding:"6px 12px",borderRadius:"8px"},inkBar:{borderRadius:"2px"},...va(ma.BTM3)},nn=yt`
  font-family: ${ie.fontFamily};
  font-size: ${ie.fontSize};
  font-weight: ${ie.fontWeight};
  font-style: ${ie.fontStyle};
  line-height: ${ie.lineHeight};
  letter-spacing: ${ie.letterSpacing};
`,zr=yt`
  && > .ant-tabs-nav {
    width: 280px;
    padding: ${ie.tabList.padding};
    border-right: 1px solid ${U("divider.color")};

    .ant-tabs-nav-list {
      &::before {
        display: none;
      }
    }

    .ant-tabs-tab-active > .ant-tabs-tab-btn {
      background-color: ${U("selected.pressed.background")};
    }

    .ant-tabs-tab {
      text-align: left;
      border: none;
      padding: 0;
      margin: 0;

      ${Yn} {
        pointer-events: none;
        cursor: pointer !important;
      }

      ${Un} {
        margin: 0 0 8px 0;
        
        &:last-child {
          margin-bottom: 0;
        }
      }

      .ant-tabs-tab-btn {
        width: 100%;
        border-radius: ${ie.leftTab.borderRadius};
        padding: ${ie.leftTab.padding};
        &:hover {
          &::before {
            display: none;
          }
        }
      }
    }

    .ant-tabs-tab + .ant-tabs-tab {
      margin-top: ${ie.tabList.gap};
    }

    .ant-tabs-ink-bar {
      display: none;
    }
  }

  & > .ant-tabs-content-holder {
    border-left: unset;
  }

  ${ze} {
    width: 100%;
  }
`,Gr=yt`
  width: 100%;
  overflow: visible;

  &.ant-tabs-top > .ant-tabs-nav {
    margin: ${ie.tabList.margin};
  }

  && .ant-tabs-nav-wrap {
    overflow: visible;
    width: 100%;
  }

  .ant-tabs-nav, .ant-tabs-nav-wrap {
    &::before, &::after {
      display: none;
    }
  }

  .ant-tabs-nav-list {
    width: 100%;
    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${U("divider.color")};
      height: 1px;
      width: 100%;
      border-radius: ${ie.inkBar.borderRadius};
    }
  }
 
  && .ant-tabs-nav-operations {
    display: none;
    visibility: hidden;
    pointer-events: none;
  }

  .ant-tabs-content-holder .ant-tabs-tabpane-active {
    color: ${U("unselected.enabled.color")};
  }

  &&& .ant-tabs-tab-active > .ant-tabs-tab-btn {
    color: ${U("selected.enabled.color")};
    text-shadow: none;

    &:hover {
      background-color: ${U("selected.hover.background")};
    }
    &:active {
      background-color: ${U("selected.pressed.background")};
    }

    ${ze}, ${He} path {
      color: ${U("selected.enabled.color")};
    }
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin-left: ${ie.tabList.gap};
  }

  ${e=>e.hiddenTabsLength?`& > .ant-tabs-nav .ant-tabs-tab:nth-last-child(-n + ${e.hiddenTabsLength}) {
        visibility: hidden;

        .ant-tabs-tab-btn {
          transition: none;
        }
      }
    `:""}

  .ant-tabs-tab {
    padding: 0;
    margin: 0 0 ${ie.topTab.margin} 0;
    transition: none;
    border: none;

    .ant-tabs-tab-btn {
      display: flex;
      padding: ${ie.topTab.padding};
      border-radius: ${ie.topTab.borderRadius};
      color: ${U("unselected.enabled.color")};
      background-color: ${U("unselected.enabled.background")};
      ${nn};
      height: 100%;
      width: 100%;
    }

    &:not(.ant-tabs-tab-disabled) {
      .ant-tabs-tab-btn {   
        &:focus-visible {
          box-shadow: ${U("focus.boxShadow")};
        }
        &:hover {
          background-color: ${U("unselected.hover.background")};
          &::before {
            display: inline;
            position: absolute;
            content: '';
            bottom: -8px;
            right: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: ${U("unselected.enabled.border")};
            border-radius: ${ie.inkBar.borderRadius};
            transform: none;
          }
        }
        &:active {
          background-color: ${U("unselected.pressed.background")};
        }
      }
    }
  }

  && .ant-tabs-tab-disabled > .ant-tabs-tab-btn {
    color: ${U("selected.disabled.color")};

    ${ze}, ${He} path {
      color: ${U("selected.disabled.color")};
    }
    &:hover {
      border-color: transparent;
    }
  }

  && .ant-tabs-ink-bar {
    background-color: ${U("selected.enabled.border")};
    height: 2px;
    border-radius: ${ie.inkBar.borderRadius};
  }

  &.ant-tabs-left {
    ${zr}
  }
`,Ur=yt`
  display: flex;
  gap: 4px;
  align-items: center;

  .ant-badge-count {
    min-width: 0;
  }

  ${He} {
    display: flex;
    align-items: center;
    path {
      color: ${U("unselected.enabled.color")};
    }
  }
  ${ze} {
    ${nn};
    color: ${U("unselected.enabled.color")};
  }
`,Yr=yt`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;

  &.with-padding {
    > .ant-tabs {
      padding: 0 var(--spacing--padding_xl);

      .ant-tabs-nav-list::before,
      .ant-tabs-content-holder {
        margin: 0 calc(var(--spacing--padding_xl) * -1);
      }
    }

    > .kl6-tabs-more-button {
      right: calc(var(--spacing--padding_xl) + 4px);
    }
  }

  &.no-margin {
    .ant-tabs-top > .ant-tabs-nav {
      margin: 0;
    } 
  }

  &.group-tabs {
    .ant-tabs-tab-disabled {
      cursor: inherit;
    }
    .ant-tabs-tab-btn {
      flex-direction: column;
    }
  }

  .ant-tabs-ink-bar {
    ${e=>e.selectedMoreButton&&`
      display: none;
    `}
  }

  .ant-tabs-extra-content {
    padding-right: 4px;
  }
  
  & ${Xn} {
    position: absolute;
    right: 0px;
  }

  & > .kl6-tabs-more-button {
    position: absolute;
    right: ${e=>e.extraContentWidth+"px"};
    color: ${U("unselected.enabled.color")};
    ${e=>e.selectedMoreButton&&`
      color: ${U("selected.enabled.color")(e)};
    `}
    ${e=>e.shouldShowMoreButton?"":"visibility: hidden;"}
    ${nn}; 

    padding: ${ie.topTab.padding};
    margin: 0;
    gap: 4px;
    height: 24px;
    border-radius: 4px;
    min-width: fit-content;
    transition: none;

    &::before {
      display: none;
      position: absolute;
      opacity: 1;
      content: '';
      box-shadow: none;
      top: unset;
      right: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: ${U("unselected.enabled.border")};
      ${e=>e.selectedMoreButton&&`
        display: inline;
        bottom: -8px;
        background-color: ${U("selected.enabled.border")(e)};
      `}
      border-radius: ${ie.inkBar.borderRadius};
    }
    &:hover {
      background-color: ${U("unselected.hover.background")};
      ${e=>e.selectedMoreButton&&`
        background-color: ${U("selected.hover.background")(e)};
      `}
      &::before {
        display: inline;
      }
    }
    &:active {
      background-color: ${U("unselected.pressed.background")};
      ${e=>e.selectedMoreButton&&`
        background-color: ${U("selected.pressed.background")(e)};
      `}
    }
    &:focus-visible {
      box-shadow: ${U("focus.boxShadow")};
    }
  }
`,Xr=(e,n)=>{var a,o,r,i;return`
  .${n} {
    .ant-dropdown-placement-bottomLeft,
    .ant-dropdown-placement-bottomRight {
      padding-top: 4px;
    }

    .ant-dropdown-menu {
      transition: all 0.3s;
    }
    
    .ant-dropdown-menu > li.kl6-dropdown-item-custom {
      &.ant-dropdown-menu-item-disabled:not(.kl6-dropdown-group-title) {
        &,
        &:hover,
        & ${ze},
        & ${He} path {
          color: ${(a=e.unselected.disabled)==null?void 0:a.color};
        }
      }
    }

    .ant-dropdown-menu > li.kl6-dropdown-item-custom {
      &.ant-dropdown-menu-item-active:not(.kl6-dropdown-group-title) {
        &,
        &:hover {
          background: ${(o=e.unselected.hover)==null?void 0:o.background};
        }
      }
    }

    .ant-dropdown-menu > li,
    .ant-dropdown-menu > li.kl6-dropdown-item-custom {
      &.kl6-dropdown-active-tab:not(.kl6-dropdown-group-title) {
        &,
        & ${ze},
        & ${He} path {
          color: ${(r=e.selected.enabled)==null?void 0:r.color};
        }
        
        &:hover {
          background: ${(i=e.selected.hover)==null?void 0:i.background};
        }
      }
    }
  }    
`};function Zr(e,n,a,o,r){const i=cn(e,o,".ant-tabs-nav-list",r),l=cn(e,a+o,".ant-tabs-nav-list",r);return i===void 0||l===void 0?n.length:l}const Zn=({tabs:e,onChange:n,activeKey:a,className:o})=>Y.createElement(Pa,{trigger:["click"],placement:"bottomRight",overlayClassName:o,overlay:e.map(r=>({children:r.props.tab,onClick:()=>n==null?void 0:n(String(r.key)||""),key:r.key,disabled:r.props.disabled,className:r.key===a?"kl6-dropdown-active-tab":""}))},Y.createElement(Ea,{className:"kl6-tabs-more-button",mode:"tertiary",iconAfter:Y.createElement(pa,null)},Y.createElement(Ta,{localizationKey:"tabs.dropdown.more"})));Zn.__docgenInfo={description:"",methods:[],displayName:"TabsDropdown",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},activeKey:{required:!0,tsType:{name:"Key"},description:""},onChange:{required:!0,tsType:{name:"union",raw:"((activeKey: string) => void) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Jr=e=>ga(e,{componentName:"tabs",defaultValues:{},propsToDrill:["theme"]}),Jn=e=>{const{divider:n,dividerClassName:a,title:o,children:r,...i}=e,l=e.tabKey||Ma();return Y.createElement(Ot.TabPane,{key:l,...i,tab:Y.createElement(Y.Fragment,null,n?Y.createElement(Un,{className:a}):null,r||o&&Y.createElement(Yn,{type:"BTR4",themedColor:"secondary"},o)),disabled:!0})},an=e=>Jn(e),Qr=e=>{const n=[];return t.Children.forEach(e,a=>{t.isValidElement(a)&&(a.type===an?n.push(Jn(a.props)):n.push(a))}),n};function Qn(e){return e!=null&&e.type&&e.type===Y.Fragment?Qn(e.props.children):e}an.__docgenInfo={description:"",methods:[],displayName:"GroupTabHeader"};const xn=4,eo=Oe(Ot).withConfig({shouldForwardProp:e=>!["cssConfig","hiddenTabsLength"].includes(e)})`
  ${Gr}
`,Dt=e=>{const n=Jr(e),a=ha(n);return Y.createElement(na,{...a})};Dt.TabPane=Ot.TabPane;const to=Oe(ka).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${Ur}
`,no=Oe.div.withConfig({shouldForwardProp:Sa})`
  ${Yr}
`,ea=({text:e,infoTooltip:n,disabledTooltip:a,iconBefore:o,iconAfter:r,number:i,indicator:l,indicatorMode:u,...s})=>{const{cssConfig:f,testAttributes:c}=t.useContext(Gn),g=Y.createElement(to,{...s,gap:"related",wrap:"nowrap",cssConfig:f},o&&Y.createElement(He,null,o),Y.createElement(ze,null,e),r&&Y.createElement(He,null,r),n&&Y.createElement(ln,{text:n},Y.createElement(xa,{testId:`${(c==null?void 0:c["data-testid"])??"tabs"}-tab-info-icon`,klId:`${(c==null?void 0:c["kl-id"])??"tabs"}-tab-info-icon`})),i!==void 0&&Y.createElement(wa,{count:i,showZero:!0,mode:"neutral"}),l&&Y.createElement(Ia,{mode:u??"critical",testId:`${(c==null?void 0:c["data-testid"])??"tabs"}-tab-indicator`}));return a?Y.createElement(ln,{text:a,defaultAlign:!0},g):g};Dt.TabPaneHead=ea;const ta=({className:e,...n})=>Y.createElement(Dt,{...n,className:te("group-tabs",e),tabPosition:"left"});ta.TabPaneHeader=an;const na=({cssConfig:e,tabPosition:n="top",destroyInactiveTabPane:a=!1,children:o,activeKey:r,defaultActiveKey:i,onChange:l,testId:u,testAttributes:s,className:f,tabBarExtraContent:c,padding:g=!1,noMargin:v=!1,...y})=>{var _;const m=ya(e,Xr,na),d=t.useRef(null),E=t.useRef(null),R=r??i??((_=o[0])==null?void 0:_.key)??"",[N,b]=t.useState(R),[p,S]=t.useState(0),[C,D]=t.useState(0),[w,k]=t.useState(0),I=t.useMemo(()=>{const L=[],K=Qn(o);return t.Children.forEach(K,B=>{t.isValidElement(B)&&L.push(B)}),L},[o]);let P=0;E.current&&(P=E.current.clientWidth+xn);let h=Zr(d,I,p,P,C);if(d.current){const L=d.current.querySelectorAll(".ant-tab > .ant-tabs-nav .ant-tabs-tab"),K=d.current.querySelector(".ant-tabs-extra-content"),B=K?K.clientWidth+xn:0,x=L[L.length-1];x&&x.offsetLeft+x.clientWidth+P+B<w&&(h=I.length)}n==="left"&&(h=I.length);const A=h+1<I.length,O=I.findIndex(L=>N===L.key)>h,$=A?I.slice(h+1,I.length):[];t.useEffect(()=>{b(R)},[R]),t.useEffect(()=>{D(C+1)},[I]);const z=async L=>{await(l==null?void 0:l(L))!==!1&&b(L)},V=()=>{var L;if(d.current){const K=((L=d.current.querySelector(".kl6-tabs-more-button"))==null?void 0:L.getBoundingClientRect().width)||0;S(K)}},X=()=>{setTimeout(()=>{V(),d.current&&D(C+1)},0)};t.useLayoutEffect(V,[]),t.useEffect(()=>{const L=new Ca(()=>{d.current&&k(d.current.clientWidth)});return d.current&&L.observe(d.current),sn.on("languageChanged",X),()=>{L.disconnect(),sn.off("languageChanged",X)}},[]);const J={left:void 0};let T;return c&&(typeof c=="object"&&("left"in c||"right"in c)?("left"in c&&(J.left=c.left),"right"in c&&(T=c.right)):T=c),Y.createElement(Gn.Provider,{value:{cssConfig:e,testAttributes:s}},Y.createElement(no,{ref:d,className:te(f,m,{"with-padding":g},{"no-margin":v}),cssConfig:e,selectedMoreButton:O,extraContentWidth:P,shouldShowMoreButton:A},Y.createElement(eo,{cssConfig:e,type:"line",tabPosition:n,destroyInactiveTabPane:a,...y,tabBarExtraContent:J,activeKey:N,onChange:z,hiddenTabsLength:I.length-h,...s},Qr(I)),Y.createElement(Xn,{ref:E,className:"extraContent"},T),Y.createElement(Zn,{activeKey:N,className:m,tabs:$,onChange:z})))};Dt.__docgenInfo={description:"",methods:[{name:"TabPaneHead",docblock:null,modifiers:["static"],params:[{name:`{
  text,
  infoTooltip,
  disabledTooltip,
  iconBefore,
  iconAfter,
  number,
  indicator,
  indicatorMode,
  ...rest
}: TabPaneHeadProps`,optional:!1,type:{name:"intersection",raw:`{
  /** Tab text */
  text: string,
  /** Icon before text */
  iconBefore?: ReactNode,
  /** Icon after text */
  iconAfter?: ReactNode,
  /** Tooltip content */
  infoTooltip?: ReactNode,
  /** Tooltip content for disabled tabs */
  disabledTooltip?: ReactNode,
  /** Badge counter */
  number?: number,
  /** Indicator after text */
  indicator?: boolean,
  /** Indicator mode,  */
  indicatorMode?: Extract<IndicatorMode, 'critical' | 'accent'>,
  cssConfig?: TabsCssConfig
} & TestingProps`,elements:[{name:"signature",type:"object",raw:`{
  /** Tab text */
  text: string,
  /** Icon before text */
  iconBefore?: ReactNode,
  /** Icon after text */
  iconAfter?: ReactNode,
  /** Tooltip content */
  infoTooltip?: ReactNode,
  /** Tooltip content for disabled tabs */
  disabledTooltip?: ReactNode,
  /** Badge counter */
  number?: number,
  /** Indicator after text */
  indicator?: boolean,
  /** Indicator mode,  */
  indicatorMode?: Extract<IndicatorMode, 'critical' | 'accent'>,
  cssConfig?: TabsCssConfig
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0},description:"Tab text"},{key:"iconBefore",value:{name:"ReactNode",required:!1},description:"Icon before text"},{key:"iconAfter",value:{name:"ReactNode",required:!1},description:"Icon after text"},{key:"infoTooltip",value:{name:"ReactNode",required:!1},description:"Tooltip content"},{key:"disabledTooltip",value:{name:"ReactNode",required:!1},description:"Tooltip content for disabled tabs"},{key:"number",value:{name:"number",required:!1},description:"Badge counter"},{key:"indicator",value:{name:"boolean",required:!1},description:"Indicator after text"},{key:"indicatorMode",value:{name:"Extract",elements:[{name:"IndicatorMode"},{name:"union",raw:"'critical' | 'accent'",elements:[{name:"literal",value:"'critical'"},{name:"literal",value:"'accent'"}]}],raw:"Extract<IndicatorMode, 'critical' | 'accent'>",required:!1},description:"Indicator mode,"},{key:"cssConfig",value:{name:"intersection",raw:`Focus & {
  selected: TabsStateConfig,
  unselected: TabsStateConfig,
  divider: StateProps
}`,elements:[{name:"Focus"},{name:"signature",type:"object",raw:`{
  selected: TabsStateConfig,
  unselected: TabsStateConfig,
  divider: StateProps
}`,signature:{properties:[{key:"selected",value:{name:"signature",type:"object",raw:`{
  enabled?: StateProps,
  hover?: StateProps,
  pressed?: StateProps,
  disabled?: StateProps
}`,signature:{properties:[{key:"enabled",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}},{key:"hover",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}},{key:"pressed",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}},{key:"disabled",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}}]},required:!0}},{key:"unselected",value:{name:"signature",type:"object",raw:`{
  enabled?: StateProps,
  hover?: StateProps,
  pressed?: StateProps,
  disabled?: StateProps
}`,signature:{properties:[{key:"enabled",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}},{key:"hover",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}},{key:"pressed",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}},{key:"disabled",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}}]},required:!0}},{key:"divider",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}}]}}],required:!1}}]}},{name:"TestingProps"}],alias:"TabPaneHeadProps"}}],returns:null}],displayName:"Tabs",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};ea.__docgenInfo={description:"",methods:[],displayName:"TabPaneHead",props:{text:{required:!0,tsType:{name:"string"},description:"Tab text"},iconBefore:{required:!1,tsType:{name:"ReactNode"},description:"Icon before text"},iconAfter:{required:!1,tsType:{name:"ReactNode"},description:"Icon after text"},infoTooltip:{required:!1,tsType:{name:"ReactNode"},description:"Tooltip content"},disabledTooltip:{required:!1,tsType:{name:"ReactNode"},description:"Tooltip content for disabled tabs"},number:{required:!1,tsType:{name:"number"},description:"Badge counter"},indicator:{required:!1,tsType:{name:"boolean"},description:"Indicator after text"},indicatorMode:{required:!1,tsType:{name:"Extract",elements:[{name:"IndicatorMode"},{name:"union",raw:"'critical' | 'accent'",elements:[{name:"literal",value:"'critical'"},{name:"literal",value:"'accent'"}]}],raw:"Extract<IndicatorMode, 'critical' | 'accent'>"},description:"Indicator mode,"},cssConfig:{required:!1,tsType:{name:"intersection",raw:`Focus & {
  selected: TabsStateConfig,
  unselected: TabsStateConfig,
  divider: StateProps
}`,elements:[{name:"Focus"},{name:"signature",type:"object",raw:`{
  selected: TabsStateConfig,
  unselected: TabsStateConfig,
  divider: StateProps
}`,signature:{properties:[{key:"selected",value:{name:"signature",type:"object",raw:`{
  enabled?: StateProps,
  hover?: StateProps,
  pressed?: StateProps,
  disabled?: StateProps
}`,signature:{properties:[{key:"enabled",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}},{key:"hover",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}},{key:"pressed",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}},{key:"disabled",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}}]},required:!0}},{key:"unselected",value:{name:"signature",type:"object",raw:`{
  enabled?: StateProps,
  hover?: StateProps,
  pressed?: StateProps,
  disabled?: StateProps
}`,signature:{properties:[{key:"enabled",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}},{key:"hover",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}},{key:"pressed",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}},{key:"disabled",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}}]},required:!0}},{key:"divider",value:{name:"signature",type:"object",raw:`{
  color?: string,
  border?: string,
  background?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]},required:!0}}]}}]},description:""}}};ta.__docgenInfo={description:"",methods:[{name:"TabPaneHeader",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`PropsWithChildren<{
  divider?: boolean,
  dividerClassName?: string,
  title?: ReactNode
}> & TabPaneProps`,elements:[{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  divider?: boolean,
  dividerClassName?: string,
  title?: ReactNode
}`,signature:{properties:[{key:"divider",value:{name:"boolean",required:!1}},{key:"dividerClassName",value:{name:"string",required:!1}},{key:"title",value:{name:"ReactNode",required:!1}}]}}],raw:`PropsWithChildren<{
  divider?: boolean,
  dividerClassName?: string,
  title?: ReactNode
}>`},{name:"TabPaneProps"}],alias:"TabPaneHeaderProps"}}],returns:null}],displayName:"GroupTabs"};export{ta as G,Dt as T};
