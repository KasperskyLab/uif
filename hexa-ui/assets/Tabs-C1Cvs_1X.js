import{r as t,a5 as Re,b as K,l as te,m as M,_ as H,k as he,bq as ra,bh as Pn,b0 as Tn,p as Ae,n as Se,g as ia,h as oa,i as la,j as sa,b9 as kn,aI as ca,a9 as Mn,a8 as ua,a_ as un,s as Nn,bc as da,H as Oe,C as Ct,a1 as fa,a2 as va,D as ma,T as pa,R as Y,ai as ba,aq as ha,w as ga,b7 as ya,E as Ca,S as xa,v as dn,am as Sa}from"./iframe-4-PRSI1I.js";import{i as fn}from"./useLocalization-45JHytlv.js";import{s as Ia}from"./shouldForwardProp-Cdy-RLhZ.js";import{B as Ea}from"./Badge-B3_Y1H2J.js";import{I as wa}from"./Indicator-D1HJCmfp.js";import{u as at}from"./useMergedState-5V6OeSqY.js";import{K as re}from"./KeyCode-c5NdJp32.js";import{F as ht}from"./isEqual-vUrjsNbx.js";import{o as $n}from"./omit-DXgDXInf.js";import{T as Kn}from"./index-8yXvUTGn.js";import{g as Ra}from"./focus-C8_PqSex.js";import{R as Pa}from"./EllipsisOutlined-gpHztdP3.js";import{I as Ta,a as ka,d as Ma,S as Na,R as $a}from"./index-C0IykO9V.js";import{D as Ka}from"./Divider-Cb8Cmzqg.js";import{u as vn}from"./useIntersectionChildren-D4PDHuHj.js";import{B as _a}from"./Button-D2E54Ulj.js";import{D as La}from"./Dropdown-BZXGqesC.js";import{L as Aa}from"./Locale-b5przm_V.js";import{g as Oa}from"./generateId-BXJELych.js";function _n(e){var n=t.useRef(),a=t.useRef(!1);function i(){for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];a.current||(Re.cancel(n.current),n.current=Re(function(){e.apply(void 0,o)}))}return t.useEffect(function(){return function(){a.current=!0,Re.cancel(n.current)}},[]),i}function Va(e){var n=t.useRef([]),a=t.useState({}),i=K(a,2),r=i[1],o=t.useRef(typeof e=="function"?e():e),l=_n(function(){var s=o.current;n.current.forEach(function(f){s=f(s)}),n.current=[],o.current=s,r({})});function u(s){n.current.push(s),l()}return[o.current,u]}function Da(e,n){var a,i=e.prefixCls,r=e.id,o=e.active,l=e.tab,u=l.key,s=l.tab,f=l.disabled,c=l.closeIcon,h=e.closable,v=e.renderWrapper,y=e.removeAriaLabel,m=e.editable,d=e.onClick,P=e.onRemove,R=e.onFocus,N=e.style,p="".concat(i,"-tab");t.useEffect(function(){return P},[]);var b=m&&h!==!1&&!f;function I(E){f||d(E)}function C(E){E.preventDefault(),E.stopPropagation(),m.onEdit("remove",{key:u,event:E})}var V=t.createElement("div",{key:u,ref:n,className:te(p,(a={},M(a,"".concat(p,"-with-remove"),b),M(a,"".concat(p,"-active"),o),M(a,"".concat(p,"-disabled"),f),a)),style:N,onClick:I},t.createElement("div",{role:"tab","aria-selected":o,id:r&&"".concat(r,"-tab-").concat(u),className:"".concat(p,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(u),"aria-disabled":f,tabIndex:f?null:0,onClick:function(x){x.stopPropagation(),I(x)},onKeyDown:function(x){[re.SPACE,re.ENTER].includes(x.which)&&(x.preventDefault(),I(x))},onFocus:R},s),b&&t.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(p,"-remove"),onClick:function(x){x.stopPropagation(),C(x)}},c||m.removeIcon||"×"));return v?v(V):V}const Wa=t.forwardRef(Da);var mn={width:0,height:0,left:0,top:0};function Ba(e,n,a){return t.useMemo(function(){for(var i,r=new Map,o=n.get((i=e[0])===null||i===void 0?void 0:i.key)||mn,l=o.left+o.width,u=0;u<e.length;u+=1){var s=e[u].key,f=n.get(s);if(!f){var c;f=n.get((c=e[u-1])===null||c===void 0?void 0:c.key)||mn}var h=r.get(s)||H({},f);h.right=l-h.left-h.width,r.set(s,h)}return r},[e.map(function(i){return i.key}).join("_"),n,a])}var pn={width:0,height:0,left:0,top:0,right:0};function qa(e,n,a,i,r){var o=r.tabs,l=r.tabPosition,u=r.rtl,s,f,c;["top","bottom"].includes(l)?(s="width",f=u?"right":"left",c=Math.abs(n.left)):(s="height",f="top",c=-n.top);var h=n[s],v=a[s],y=i[s],m=h;return v+y>h&&v<h&&(m=h-y),t.useMemo(function(){if(!o.length)return[0,0];for(var d=o.length,P=d,R=0;R<d;R+=1){var N=e.get(o[R].key)||pn;if(N[f]+N[s]>c+m){P=R-1;break}}for(var p=0,b=d-1;b>=0;b-=1){var I=e.get(o[b].key)||pn;if(I[f]<c){p=b+1;break}}return[p,P]},[e,c,m,l,o.map(function(d){return d.key}).join("_"),u])}var Fa=["children","locked"],Pe=t.createContext(null);function Ha(e,n){var a=H({},e);return Object.keys(n).forEach(function(i){var r=n[i];r!==void 0&&(a[i]=r)}),a}function gt(e){var n=e.children,a=e.locked,i=he(e,Fa),r=t.useContext(Pe),o=ra(function(){return Ha(r,i)},[r,i],function(l,u){return!a&&(l[0]!==u[0]||!Pn(l[1],u[1]))});return t.createElement(Pe.Provider,{value:o},n)}function Ln(e,n,a,i){var r=t.useContext(Pe),o=r.activeKey,l=r.onActive,u=r.onInactive,s={active:o===e};return n||(s.onMouseEnter=function(f){a==null||a({key:e,domEvent:f}),l(e)},s.onMouseLeave=function(f){i==null||i({key:e,domEvent:f}),u(e)}),s}var za=["item"];function At(e){var n=e.item,a=he(e,za);return Object.defineProperty(a,"item",{get:function(){return Tn(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),a}function An(e){var n=e.icon,a=e.props,i=e.children,r;return typeof n=="function"?r=t.createElement(n,H({},a)):r=n,r||i||null}function On(e){var n=t.useContext(Pe),a=n.mode,i=n.rtl,r=n.inlineIndent;if(a!=="inline")return null;var o=e;return i?{paddingRight:o*r}:{paddingLeft:o*r}}var Ua=[],Vn=t.createContext(null);function Dt(){return t.useContext(Vn)}var Dn=t.createContext(Ua);function xt(e){var n=t.useContext(Dn);return t.useMemo(function(){return e!==void 0?[].concat(Ae(n),[e]):n},[n,e])}var Wn=t.createContext(null),Bn=t.createContext(null);function qn(e,n){return e===void 0?null:"".concat(e,"-").concat(n)}function Fn(e){var n=t.useContext(Bn);return qn(n,e)}var tn=t.createContext({}),Ga=["title","attribute","elementRef"],ja=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Ya=["active"],Xa=function(e){ia(a,e);var n=oa(a);function a(){return la(this,a),n.apply(this,arguments)}return sa(a,[{key:"render",value:function(){var r=this.props,o=r.title,l=r.attribute,u=r.elementRef,s=he(r,Ga),f=$n(s,["eventKey"]);return Tn(!l,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(ht.Item,Se({},l,{title:typeof o=="string"?o:void 0},f,{ref:u}))}}]),a}(t.Component),Za=function(n){var a,i=n.style,r=n.className,o=n.eventKey;n.warnKey;var l=n.disabled,u=n.itemIcon,s=n.children,f=n.role,c=n.onMouseEnter,h=n.onMouseLeave,v=n.onClick,y=n.onKeyDown,m=n.onFocus,d=he(n,ja),P=Fn(o),R=t.useContext(Pe),N=R.prefixCls,p=R.onItemClick,b=R.disabled,I=R.overflowDisabled,C=R.itemIcon,V=R.selectedKeys,E=R.onActive,x=t.useContext(tn),w=x._internalRenderMenuItem,T="".concat(N,"-item"),g=t.useRef(),_=t.useRef(),O=b||l,$=xt(o),U=function(le){return{key:o,keyPath:Ae($).reverse(),item:g.current,domEvent:le}},F=u||C,X=Ln(o,O,c,h),J=X.active,k=he(X,Ya),D=V.includes(o),L=On($.length),A=function(le){if(!O){var de=U(le);v==null||v(At(de)),p(de)}},W=function(le){if(y==null||y(le),le.which===re.ENTER){var de=U(le);v==null||v(At(de)),p(de)}},S=function(le){E(o),m==null||m(le)},B={};n.role==="option"&&(B["aria-selected"]=D);var ne=t.createElement(Xa,Se({ref:g,elementRef:_,role:f===null?"none":f||"menuitem",tabIndex:l?null:-1,"data-menu-id":I&&P?null:P},d,k,B,{component:"li","aria-disabled":l,style:H(H({},L),i),className:te(T,(a={},M(a,"".concat(T,"-active"),J),M(a,"".concat(T,"-selected"),D),M(a,"".concat(T,"-disabled"),O),a),r),onClick:A,onKeyDown:W,onFocus:S}),s,t.createElement(An,{props:H(H({},n),{},{isSelected:D}),icon:F}));return w&&(ne=w(ne,n,{selected:D})),ne};function nn(e){var n=e.eventKey,a=Dt(),i=xt(n);return t.useEffect(function(){if(a)return a.registerPath(n,i),function(){a.unregisterPath(n,i)}},[i]),a?null:t.createElement(Za,e)}function an(e,n){return kn(e).map(function(a,i){if(t.isValidElement(a)){var r,o,l=a.key,u=(r=(o=a.props)===null||o===void 0?void 0:o.eventKey)!==null&&r!==void 0?r:l,s=u==null;s&&(u="tmp_key-".concat([].concat(Ae(n),[i]).join("-")));var f={key:u,eventKey:u};return t.cloneElement(a,f)}return a})}function nt(e){var n=t.useRef(e);n.current=e;var a=t.useCallback(function(){for(var i,r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(i=n.current)===null||i===void 0?void 0:i.call.apply(i,[n].concat(o))},[]);return e?a:void 0}var Ja=["className","children"],Qa=function(n,a){var i=n.className,r=n.children,o=he(n,Ja),l=t.useContext(Pe),u=l.prefixCls,s=l.mode,f=l.rtl;return t.createElement("ul",Se({className:te(u,f&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(s==="inline"?"inline":"vertical"),i)},o,{"data-menu-list":!0,ref:a}),r)},rn=t.forwardRef(Qa);rn.displayName="SubMenuList";var Le={adjustX:1,adjustY:1},er={topLeft:{points:["bl","tl"],overflow:Le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Le,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Le,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Le,offset:[4,0]}},tr={topLeft:{points:["bl","tl"],overflow:Le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Le,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Le,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Le,offset:[4,0]}};function Hn(e,n,a){if(n)return n;if(a)return a[e]||a.other}var nr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ar(e){var n=e.prefixCls,a=e.visible,i=e.children,r=e.popup,o=e.popupClassName,l=e.popupOffset,u=e.disabled,s=e.mode,f=e.onVisibleChange,c=t.useContext(Pe),h=c.getPopupContainer,v=c.rtl,y=c.subMenuOpenDelay,m=c.subMenuCloseDelay,d=c.builtinPlacements,P=c.triggerSubMenuAction,R=c.forceSubMenuRender,N=c.motion,p=c.defaultMotions,b=t.useState(!1),I=K(b,2),C=I[0],V=I[1],E=v?H(H({},tr),d):H(H({},er),d),x=nr[s],w=Hn(s,N,p),T=H(H({},w),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),g=t.useRef();return t.useEffect(function(){return g.current=Re(function(){V(a)}),function(){Re.cancel(g.current)}},[a]),t.createElement(Kn,{prefixCls:n,popupClassName:te("".concat(n,"-popup"),M({},"".concat(n,"-rtl"),v),o),stretch:s==="horizontal"?"minWidth":null,getPopupContainer:h,builtinPlacements:E,popupPlacement:x,popupVisible:C,popup:r,popupAlign:l&&{offset:l},action:u?[]:[P],mouseEnterDelay:y,mouseLeaveDelay:m,onPopupVisibleChange:f,forceRender:R,popupMotion:T},i)}function rr(e){var n=e.id,a=e.open,i=e.keyPath,r=e.children,o="inline",l=t.useContext(Pe),u=l.prefixCls,s=l.forceSubMenuRender,f=l.motion,c=l.defaultMotions,h=l.mode,v=t.useRef(!1);v.current=h===o;var y=t.useState(!v.current),m=K(y,2),d=m[0],P=m[1],R=v.current?a:!1;t.useEffect(function(){v.current&&P(!1)},[h]);var N=H({},Hn(o,f,c));i.length>1&&(N.motionAppear=!1);var p=N.onVisibleChanged;return N.onVisibleChanged=function(b){return!v.current&&!b&&P(!0),p==null?void 0:p(b)},d?null:t.createElement(gt,{mode:o,locked:!v.current},t.createElement(ca,Se({visible:R},N,{forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(b){var I=b.className,C=b.style;return t.createElement(rn,{id:n,className:I,style:C},r)}))}var ir=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],or=["active"],lr=function(n){var a,i=n.style,r=n.className,o=n.title,l=n.eventKey;n.warnKey;var u=n.disabled,s=n.internalPopupClose,f=n.children,c=n.itemIcon,h=n.expandIcon,v=n.popupClassName,y=n.popupOffset,m=n.onClick,d=n.onMouseEnter,P=n.onMouseLeave,R=n.onTitleClick,N=n.onTitleMouseEnter,p=n.onTitleMouseLeave,b=he(n,ir),I=Fn(l),C=t.useContext(Pe),V=C.prefixCls,E=C.mode,x=C.openKeys,w=C.disabled,T=C.overflowDisabled,g=C.activeKey,_=C.selectedKeys,O=C.itemIcon,$=C.expandIcon,U=C.onItemClick,F=C.onOpenChange,X=C.onActive,J=t.useContext(tn),k=J._internalRenderSubMenuItem,D=t.useContext(Wn),L=D.isSubPathKey,A=xt(),W="".concat(V,"-submenu"),S=w||u,B=t.useRef(),ne=t.useRef(),ce=c||O,le=h||$,de=x.includes(l),Q=!T&&de,Te=L(_,l),Ie=Ln(l,S,N,p),ge=Ie.active,me=he(Ie,or),Z=t.useState(!1),ye=K(Z,2),ue=ye[0],rt=ye[1],Ve=function(fe){S||rt(fe)},Ge=function(fe){Ve(!0),d==null||d({key:l,domEvent:fe})},je=function(fe){Ve(!1),P==null||P({key:l,domEvent:fe})},De=t.useMemo(function(){return ge||(E!=="inline"?ue||L([g],l):!1)},[E,ge,g,ue,l,L]),it=On(A.length),Ye=function(fe){S||(R==null||R({key:l,domEvent:fe}),E==="inline"&&F(l,!de))},_e=nt(function(be){m==null||m(At(be)),U(be)}),ot=function(fe){E!=="inline"&&F(l,fe)},Xe=function(){X(l)},se=I&&"".concat(I,"-popup"),We=t.createElement("div",Se({role:"menuitem",style:it,className:"".concat(W,"-title"),tabIndex:S?null:-1,ref:B,title:typeof o=="string"?o:null,"data-menu-id":T&&I?null:I,"aria-expanded":Q,"aria-haspopup":!0,"aria-controls":se,"aria-disabled":S,onClick:Ye,onFocus:Xe},me),o,t.createElement(An,{icon:E!=="horizontal"?le:null,props:H(H({},n),{},{isOpen:Q,isSubMenu:!0})},t.createElement("i",{className:"".concat(W,"-arrow")}))),ke=t.useRef(E);if(E!=="inline"&&(ke.current=A.length>1?"vertical":E),!T){var Ce=ke.current;We=t.createElement(ar,{mode:Ce,prefixCls:W,visible:!s&&Q&&E!=="inline",popupClassName:v,popupOffset:y,popup:t.createElement(gt,{mode:Ce==="horizontal"?"vertical":Ce},t.createElement(rn,{id:se,ref:ne},f)),disabled:S,onVisibleChange:ot},We)}var xe=t.createElement(ht.Item,Se({role:"none"},b,{component:"li",style:i,className:te(W,"".concat(W,"-").concat(E),r,(a={},M(a,"".concat(W,"-open"),Q),M(a,"".concat(W,"-active"),De),M(a,"".concat(W,"-selected"),Te),M(a,"".concat(W,"-disabled"),S),a)),onMouseEnter:Ge,onMouseLeave:je}),We,!T&&t.createElement(rr,{id:se,open:Q,keyPath:A},f));return k&&(xe=k(xe,n,{selected:Te,active:De,open:Q,disabled:S})),t.createElement(gt,{onItemClick:_e,mode:E==="horizontal"?"vertical":E,itemIcon:ce,expandIcon:le},xe)};function zn(e){var n=e.eventKey,a=e.children,i=xt(n),r=an(a,i),o=Dt();t.useEffect(function(){if(o)return o.registerPath(n,i),function(){o.unregisterPath(n,i)}},[i]);var l;return o?l=r:l=t.createElement(lr,e,r),t.createElement(Dn.Provider,{value:i},l)}var jt=re.LEFT,Yt=re.RIGHT,Xt=re.UP,Kt=re.DOWN,_t=re.ENTER,Un=re.ESC,pt=re.HOME,bt=re.END,bn=[Xt,Kt,jt,Yt];function sr(e,n,a,i){var r,o,l,u,s="prev",f="next",c="children",h="parent";if(e==="inline"&&i===_t)return{inlineTrigger:!0};var v=(r={},M(r,Xt,s),M(r,Kt,f),r),y=(o={},M(o,jt,a?f:s),M(o,Yt,a?s:f),M(o,Kt,c),M(o,_t,c),o),m=(l={},M(l,Xt,s),M(l,Kt,f),M(l,_t,c),M(l,Un,h),M(l,jt,a?c:h),M(l,Yt,a?h:c),l),d={inline:v,horizontal:y,vertical:m,inlineSub:v,horizontalSub:m,verticalSub:m},P=(u=d["".concat(e).concat(n?"":"Sub")])===null||u===void 0?void 0:u[i];switch(P){case s:return{offset:-1,sibling:!0};case f:return{offset:1,sibling:!0};case h:return{offset:-1,sibling:!1};case c:return{offset:1,sibling:!1};default:return null}}function cr(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}function ur(e,n){for(var a=e||document.activeElement;a;){if(n.has(a))return a;a=a.parentElement}return null}function Gn(e,n){var a=Ra(e,!0);return a.filter(function(i){return n.has(i)})}function hn(e,n,a){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var r=Gn(e,n),o=r.length,l=r.findIndex(function(u){return a===u});return i<0?l===-1?l=o-1:l-=1:i>0&&(l+=1),l=(l+o)%o,r[l]}function dr(e,n,a,i,r,o,l,u,s,f){var c=t.useRef(),h=t.useRef();h.current=n;var v=function(){Re.cancel(c.current)};return t.useEffect(function(){return function(){v()}},[]),function(y){var m=y.which;if([].concat(bn,[_t,Un,pt,bt]).includes(m)){var d,P,R,N=function(){d=new Set,P=new Map,R=new Map;var $=o();return $.forEach(function(U){var F=document.querySelector("[data-menu-id='".concat(qn(i,U),"']"));F&&(d.add(F),R.set(F,U),P.set(U,F))}),d};N();var p=P.get(n),b=ur(p,d),I=R.get(b),C=sr(e,l(I,!0).length===1,a,m);if(!C&&m!==pt&&m!==bt)return;(bn.includes(m)||[pt,bt].includes(m))&&y.preventDefault();var V=function($){if($){var U=$,F=$.querySelector("a");F!=null&&F.getAttribute("href")&&(U=F);var X=R.get($);u(X),v(),c.current=Re(function(){h.current===X&&U.focus()})}};if([pt,bt].includes(m)||C.sibling||!b){var E;!b||e==="inline"?E=r.current:E=cr(b);var x,w=Gn(E,d);m===pt?x=w[0]:m===bt?x=w[w.length-1]:x=hn(E,d,b,C.offset),V(x)}else if(C.inlineTrigger)s(I);else if(C.offset>0)s(I,!0),v(),c.current=Re(function(){N();var O=b.getAttribute("aria-controls"),$=document.getElementById(O),U=hn($,d);V(U)},5);else if(C.offset<0){var T=l(I,!0),g=T[T.length-2],_=P.get(g);s(g,!1),V(_)}}f==null||f(y)}}var fr=Math.random().toFixed(5).toString().slice(2),gn=0;function vr(e){var n=at(e,{value:e}),a=K(n,2),i=a[0],r=a[1];return t.useEffect(function(){gn+=1;var o="".concat(fr,"-").concat(gn);r("rc-menu-uuid-".concat(o))},[]),i}function mr(e){Promise.resolve().then(e)}var on="__RC_UTIL_PATH_SPLIT__",yn=function(n){return n.join(on)},pr=function(n){return n.split(on)},Zt="rc-menu-more";function br(){var e=t.useState({}),n=K(e,2),a=n[1],i=t.useRef(new Map),r=t.useRef(new Map),o=t.useState([]),l=K(o,2),u=l[0],s=l[1],f=t.useRef(0),c=t.useRef(!1),h=function(){c.current||a({})},v=t.useCallback(function(p,b){var I=yn(b);r.current.set(I,p),i.current.set(p,I),f.current+=1;var C=f.current;mr(function(){C===f.current&&h()})},[]),y=t.useCallback(function(p,b){var I=yn(b);r.current.delete(I),i.current.delete(p)},[]),m=t.useCallback(function(p){s(p)},[]),d=t.useCallback(function(p,b){var I=i.current.get(p)||"",C=pr(I);return b&&u.includes(C[0])&&C.unshift(Zt),C},[u]),P=t.useCallback(function(p,b){return p.some(function(I){var C=d(I,!0);return C.includes(b)})},[d]),R=function(){var b=Ae(i.current.keys());return u.length&&b.push(Zt),b},N=t.useCallback(function(p){var b="".concat(i.current.get(p)).concat(on),I=new Set;return Ae(r.current.keys()).forEach(function(C){C.startsWith(b)&&I.add(r.current.get(C))}),I},[]);return t.useEffect(function(){return function(){c.current=!0}},[]),{registerPath:v,unregisterPath:y,refreshOverflowKeys:m,isSubPathKey:P,getKeyPath:d,getKeys:R,getSubPathKeys:N}}var hr=["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Qe=[],gr=t.forwardRef(function(e,n){var a,i,r=e.prefixCls,o=r===void 0?"rc-menu":r,l=e.style,u=e.className,s=e.tabIndex,f=s===void 0?0:s,c=e.children,h=e.direction,v=e.id,y=e.mode,m=y===void 0?"vertical":y,d=e.inlineCollapsed,P=e.disabled,R=e.disabledOverflow,N=e.subMenuOpenDelay,p=N===void 0?.1:N,b=e.subMenuCloseDelay,I=b===void 0?.1:b,C=e.forceSubMenuRender,V=e.defaultOpenKeys,E=e.openKeys,x=e.activeKey,w=e.defaultActiveFirst,T=e.selectable,g=T===void 0?!0:T,_=e.multiple,O=_===void 0?!1:_,$=e.defaultSelectedKeys,U=e.selectedKeys,F=e.onSelect,X=e.onDeselect,J=e.inlineIndent,k=J===void 0?24:J,D=e.motion,L=e.defaultMotions,A=e.triggerSubMenuAction,W=A===void 0?"hover":A,S=e.builtinPlacements,B=e.itemIcon,ne=e.expandIcon,ce=e.overflowedIndicator,le=ce===void 0?"...":ce,de=e.overflowedIndicatorPopupClassName,Q=e.getPopupContainer,Te=e.onClick,Ie=e.onOpenChange,ge=e.onKeyDown;e.openAnimation,e.openTransitionName;var me=e._internalRenderMenuItem,Z=e._internalRenderSubMenuItem,ye=he(e,hr),ue=an(c,Qe),rt=t.useState(!1),Ve=K(rt,2),Ge=Ve[0],je=Ve[1],De=t.useRef(),it=Mn(De,n),Ye=vr(v),_e=h==="rtl",ot=t.useMemo(function(){return(m==="inline"||m==="vertical")&&d?["vertical",d]:[m,!1]},[m,d]),Xe=K(ot,2),se=Xe[0],We=Xe[1],ke=t.useState(0),Ce=K(ke,2),xe=Ce[0],be=Ce[1],fe=xe>=ue.length-1||se!=="horizontal"||R,It=at(V,{value:E,postState:function(G){return G||Qe}}),Be=K(It,2),Ee=Be[0],Ze=Be[1],qe=function(G){Ze(G),Ie==null||Ie(G)},Et=t.useState(Ee),wt=K(Et,2),Rt=wt[0],Bt=wt[1],lt=se==="inline",Fe=t.useRef(!1);t.useEffect(function(){lt&&Bt(Ee)},[Ee]),t.useEffect(function(){if(!Fe.current){Fe.current=!0;return}lt?Ze(Rt):qe(Qe)},[lt]);var Me=br(),Je=Me.registerPath,Pt=Me.unregisterPath,qt=Me.refreshOverflowKeys,st=Me.isSubPathKey,Ft=Me.getKeyPath,Tt=Me.getKeys,Ht=Me.getSubPathKeys,zt=t.useMemo(function(){return{registerPath:Je,unregisterPath:Pt}},[Je,Pt]),Ne=t.useMemo(function(){return{isSubPathKey:st}},[st]);t.useEffect(function(){qt(fe?Qe:ue.slice(xe+1).map(function(ee){return ee.key}))},[xe,fe]);var kt=at(x||w&&((a=ue[0])===null||a===void 0?void 0:a.key),{value:x}),ct=K(kt,2),ut=ct[0],Ke=ct[1],dt=nt(function(ee){Ke(ee)}),ft=nt(function(){Ke(void 0)}),Mt=at($||[],{value:U,postState:function(G){return Array.isArray(G)?G:G==null?Qe:[G]}}),vt=K(Mt,2),q=vt[0],z=vt[1],ae=function(G){if(g){var ie=G.key,we=q.includes(ie),ve;O?we?ve=q.filter(function(aa){return aa!==ie}):ve=[].concat(Ae(q),[ie]):ve=[ie],z(ve);var cn=H(H({},G),{},{selectedKeys:ve});we?X==null||X(cn):F==null||F(cn)}!O&&Ee.length&&se!=="inline"&&qe(Qe)},pe=nt(function(ee){Te==null||Te(At(ee)),ae(ee)}),$e=nt(function(ee,G){var ie=Ee.filter(function(ve){return ve!==ee});if(G)ie.push(ee);else if(se!=="inline"){var we=Ht(ee);ie=ie.filter(function(ve){return!we.has(ve)})}Pn(Ee,ie)||qe(ie)}),He=nt(Q),mt=function(G,ie){var we=ie??!Ee.includes(G);$e(G,we)},Ut=dr(se,ut,_e,Ye,De,Tt,Ft,Ke,mt,ge);t.useEffect(function(){je(!0)},[]);var Nt=t.useMemo(function(){return{_internalRenderMenuItem:me,_internalRenderSubMenuItem:Z}},[me,Z]),$t=se!=="horizontal"||R?ue:ue.map(function(ee,G){return t.createElement(gt,{key:ee.key,overflowDisabled:G>xe},ee)}),Gt=t.createElement(ht,Se({id:v,ref:it,prefixCls:"".concat(o,"-overflow"),component:"ul",itemComponent:nn,className:te(o,"".concat(o,"-root"),"".concat(o,"-").concat(se),u,(i={},M(i,"".concat(o,"-inline-collapsed"),We),M(i,"".concat(o,"-rtl"),_e),i)),dir:h,style:l,role:"menu",tabIndex:f,data:$t,renderRawItem:function(G){return G},renderRawRest:function(G){var ie=G.length,we=ie?ue.slice(-ie):null;return t.createElement(zn,{eventKey:Zt,title:le,disabled:fe,internalPopupClose:ie===0,popupClassName:de},we)},maxCount:se!=="horizontal"||R?ht.INVALIDATE:ht.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(G){be(G)},onKeyDown:Ut},ye));return t.createElement(tn.Provider,{value:Nt},t.createElement(Bn.Provider,{value:Ye},t.createElement(gt,{prefixCls:o,mode:se,openKeys:Ee,rtl:_e,disabled:P,motion:Ge?D:null,defaultMotions:Ge?L:null,activeKey:ut,onActive:dt,onInactive:ft,selectedKeys:q,inlineIndent:k,subMenuOpenDelay:p,subMenuCloseDelay:I,forceSubMenuRender:C,builtinPlacements:S,triggerSubMenuAction:W,getPopupContainer:He,itemIcon:B,expandIcon:ne,onItemClick:pe,onOpenChange:$e},t.createElement(Wn.Provider,{value:Ne},Gt),t.createElement("div",{style:{display:"none"},"aria-hidden":!0},t.createElement(Vn.Provider,{value:zt},ue)))))}),yr=["className","title","eventKey","children"],Cr=["children"],xr=function(n){var a=n.className,i=n.title;n.eventKey;var r=n.children,o=he(n,yr),l=t.useContext(Pe),u=l.prefixCls,s="".concat(u,"-item-group");return t.createElement("li",Se({},o,{onClick:function(c){return c.stopPropagation()},className:te(s,a)}),t.createElement("div",{className:"".concat(s,"-title"),title:typeof i=="string"?i:void 0},i),t.createElement("ul",{className:"".concat(s,"-list")},r))};function Sr(e){var n=e.children,a=he(e,Cr),i=xt(a.eventKey),r=an(n,i),o=Dt();return o?r:t.createElement(xr,$n(a,["warnKey"]),r)}function Ir(e){var n=e.className,a=e.style,i=t.useContext(Pe),r=i.prefixCls,o=Dt();return o?null:t.createElement("li",{className:te("".concat(r,"-item-divider"),n),style:a})}var St=gr;St.Item=nn;St.SubMenu=zn;St.ItemGroup=Sr;St.Divider=Ir;var et={adjustX:1,adjustY:1},tt=[0,0],Er={topLeft:{points:["bl","tl"],overflow:et,offset:[0,-4],targetOffset:tt},topCenter:{points:["bc","tc"],overflow:et,offset:[0,-4],targetOffset:tt},topRight:{points:["br","tr"],overflow:et,offset:[0,-4],targetOffset:tt},bottomLeft:{points:["tl","bl"],overflow:et,offset:[0,4],targetOffset:tt},bottomCenter:{points:["tc","bc"],overflow:et,offset:[0,4],targetOffset:tt},bottomRight:{points:["tr","br"],overflow:et,offset:[0,4],targetOffset:tt}},wr=re.ESC,Rr=re.TAB;function Pr(e){var n=e.visible,a=e.setTriggerVisible,i=e.triggerRef,r=e.menuRef,o=e.onVisibleChange,l=e.autoFocus,u=t.useRef(!1),s=function(){if(n&&i.current){var v,y,m,d;(v=i.current)===null||v===void 0||(y=v.triggerRef)===null||y===void 0||(m=y.current)===null||m===void 0||(d=m.focus)===null||d===void 0||d.call(m),a(!1),typeof o=="function"&&o(!1)}},f=function(){var v,y;(v=r.current)===null||v===void 0||(y=v.focus)===null||y===void 0||y.call(v),u.current=!0},c=function(v){var y;switch(v.keyCode){case wr:s();break;case Rr:!u.current&&(!((y=r.current)===null||y===void 0)&&y.focus)?(v.preventDefault(),f()):s();break}};t.useEffect(function(){return n?(window.addEventListener("keydown",c),l&&Re(f,3),function(){window.removeEventListener("keydown",c),u.current=!1}):function(){u.current=!1}},[n])}var Tr=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function kr(e,n){var a=e.arrow,i=a===void 0?!1:a,r=e.prefixCls,o=r===void 0?"rc-dropdown":r,l=e.transitionName,u=e.animation,s=e.align,f=e.placement,c=f===void 0?"bottomLeft":f,h=e.placements,v=h===void 0?Er:h,y=e.getPopupContainer,m=e.showAction,d=e.hideAction,P=e.overlayClassName,R=e.overlayStyle,N=e.visible,p=e.trigger,b=p===void 0?["hover"]:p,I=e.autoFocus,C=he(e,Tr),V=t.useState(),E=K(V,2),x=E[0],w=E[1],T="visible"in e?N:x,g=t.useRef(null);t.useImperativeHandle(n,function(){return g.current});var _=t.useRef(null),O="".concat(o,"-menu");Pr({visible:T,setTriggerVisible:w,triggerRef:g,menuRef:_,onVisibleChange:e.onVisibleChange,autoFocus:I});var $=function(){var S=e.overlay,B;return typeof S=="function"?B=S():B=S,B},U=function(S){var B=e.onOverlayClick,ne=$().props;w(!1),B&&B(S),ne.onClick&&ne.onClick(S)},F=function(S){var B=e.onVisibleChange;w(S),typeof B=="function"&&B(S)},X=function(){var S,B=$(),ne=Mn(_,B.ref),ce=(S={prefixCls:O},M(S,"data-dropdown-inject",!0),M(S,"onClick",U),M(S,"ref",ua(B)?ne:void 0),S);return typeof B.type=="string"&&(delete ce.prefixCls,delete ce["data-dropdown-inject"]),t.createElement(t.Fragment,null,i&&t.createElement("div",{className:"".concat(o,"-arrow")}),t.cloneElement(B,ce))},J=function(){var S=e.overlay;return typeof S=="function"?X:X()},k=function(){var S=e.minOverlayWidthMatchTrigger,B=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?S:!B},D=function(){var S=e.openClassName;return S!==void 0?S:"".concat(o,"-open")},L=function(){var S=e.children,B=S.props?S.props:{},ne=te(B.className,D());return T&&S?t.cloneElement(S,{className:ne}):S},A=d;return!A&&b.indexOf("contextMenu")!==-1&&(A=["click"]),t.createElement(Kn,H(H({builtinPlacements:v},C),{},{prefixCls:o,ref:g,popupClassName:te(P,M({},"".concat(o,"-show-arrow"),i)),popupStyle:R,action:b,showAction:m,hideAction:A||[],popupPlacement:c,popupAlign:s,popupTransitionName:l,popupAnimation:u,popupVisible:T,stretch:k()?"minWidth":"",popup:J(),onPopupVisibleChange:F,getPopupContainer:y}),L())}const Mr=t.forwardRef(kr);function Nr(e,n){var a=e.prefixCls,i=e.editable,r=e.locale,o=e.style;return!i||i.showAdd===!1?null:t.createElement("button",{ref:n,type:"button",className:"".concat(a,"-nav-add"),style:o,"aria-label":(r==null?void 0:r.addAriaLabel)||"Add tab",onClick:function(u){i.onEdit("add",{event:u})}},i.addIcon||"+")}const jn=t.forwardRef(Nr);function $r(e,n){var a=e.prefixCls,i=e.id,r=e.tabs,o=e.locale,l=e.mobile,u=e.moreIcon,s=u===void 0?"More":u,f=e.moreTransitionName,c=e.style,h=e.className,v=e.editable,y=e.tabBarGutter,m=e.rtl,d=e.removeAriaLabel,P=e.onTabClick,R=t.useState(!1),N=K(R,2),p=N[0],b=N[1],I=t.useState(null),C=K(I,2),V=C[0],E=C[1],x="".concat(i,"-more-popup"),w="".concat(a,"-dropdown"),T=V!==null?"".concat(x,"-").concat(V):null,g=o==null?void 0:o.dropdownAriaLabel;function _(k,D){k.preventDefault(),k.stopPropagation(),v.onEdit("remove",{key:D,event:k})}var O=t.createElement(St,{onClick:function(D){var L=D.key,A=D.domEvent;P(L,A),b(!1)},id:x,tabIndex:-1,role:"listbox","aria-activedescendant":T,selectedKeys:[V],"aria-label":g!==void 0?g:"expanded dropdown"},r.map(function(k){var D=v&&k.closable!==!1&&!k.disabled;return t.createElement(nn,{key:k.key,id:"".concat(x,"-").concat(k.key),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(k.key),disabled:k.disabled},t.createElement("span",null,k.tab),D&&t.createElement("button",{type:"button","aria-label":d||"remove",tabIndex:0,className:"".concat(w,"-menu-item-remove"),onClick:function(A){A.stopPropagation(),_(A,k.key)}},k.closeIcon||v.removeIcon||"×"))}));function $(k){for(var D=r.filter(function(B){return!B.disabled}),L=D.findIndex(function(B){return B.key===V})||0,A=D.length,W=0;W<A;W+=1){L=(L+k+A)%A;var S=D[L];if(!S.disabled){E(S.key);return}}}function U(k){var D=k.which;if(!p){[re.DOWN,re.SPACE,re.ENTER].includes(D)&&(b(!0),k.preventDefault());return}switch(D){case re.UP:$(-1),k.preventDefault();break;case re.DOWN:$(1),k.preventDefault();break;case re.ESC:b(!1);break;case re.SPACE:case re.ENTER:V!==null&&P(V,k);break}}t.useEffect(function(){var k=document.getElementById(T);k&&k.scrollIntoView&&k.scrollIntoView(!1)},[V]),t.useEffect(function(){p||E(null)},[p]);var F=M({},m?"marginRight":"marginLeft",y);r.length||(F.visibility="hidden",F.order=1);var X=te(M({},"".concat(w,"-rtl"),m)),J=l?null:t.createElement(Mr,{prefixCls:w,overlay:O,trigger:["hover"],visible:p,transitionName:f,onVisibleChange:b,overlayClassName:X,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(a,"-nav-more"),style:F,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":x,id:"".concat(i,"-more"),"aria-expanded":p,onKeyDown:U},s));return t.createElement("div",{className:te("".concat(a,"-nav-operations"),h),style:c,ref:n},J,t.createElement(jn,{prefixCls:a,locale:o,editable:v}))}const Kr=t.memo(t.forwardRef($r),function(e,n){return n.tabMoving}),ln=t.createContext(null);var _r=.1,Cn=.01,Lt=20,xn=Math.pow(.995,Lt);function Lr(e,n){var a=t.useState(),i=K(a,2),r=i[0],o=i[1],l=t.useState(0),u=K(l,2),s=u[0],f=u[1],c=t.useState(0),h=K(c,2),v=h[0],y=h[1],m=t.useState(),d=K(m,2),P=d[0],R=d[1],N=t.useRef();function p(x){var w=x.touches[0],T=w.screenX,g=w.screenY;o({x:T,y:g}),window.clearInterval(N.current)}function b(x){if(r){x.preventDefault();var w=x.touches[0],T=w.screenX,g=w.screenY;o({x:T,y:g});var _=T-r.x,O=g-r.y;n(_,O);var $=Date.now();f($),y($-s),R({x:_,y:O})}}function I(){if(r&&(o(null),R(null),P)){var x=P.x/v,w=P.y/v,T=Math.abs(x),g=Math.abs(w);if(Math.max(T,g)<_r)return;var _=x,O=w;N.current=window.setInterval(function(){if(Math.abs(_)<Cn&&Math.abs(O)<Cn){window.clearInterval(N.current);return}_*=xn,O*=xn,n(_*Lt,O*Lt)},Lt)}}var C=t.useRef();function V(x){var w=x.deltaX,T=x.deltaY,g=0,_=Math.abs(w),O=Math.abs(T);_===O?g=C.current==="x"?w:T:_>O?(g=w,C.current="x"):(g=T,C.current="y"),n(-g,-g)&&x.preventDefault()}var E=t.useRef(null);E.current={onTouchStart:p,onTouchMove:b,onTouchEnd:I,onWheel:V},t.useEffect(function(){function x(_){E.current.onTouchStart(_)}function w(_){E.current.onTouchMove(_)}function T(_){E.current.onTouchEnd(_)}function g(_){E.current.onWheel(_)}return document.addEventListener("touchmove",w,{passive:!1}),document.addEventListener("touchend",T,{passive:!1}),e.current.addEventListener("touchstart",x,{passive:!1}),e.current.addEventListener("wheel",g),function(){document.removeEventListener("touchmove",w),document.removeEventListener("touchend",T)}},[])}function Ar(){var e=t.useRef(new Map);function n(i){return e.current.has(i)||e.current.set(i,t.createRef()),e.current.get(i)}function a(i){e.current.delete(i)}return[n,a]}function Sn(e,n){var a=t.useRef(e),i=t.useState({}),r=K(i,2),o=r[1];function l(u){var s=typeof u=="function"?u(a.current):u;s!==a.current&&n(s,a.current),a.current=s,o({})}return[a.current,l]}var In=function(n){var a=n.position,i=n.prefixCls,r=n.extra;if(!r)return null;var o,l={};return r&&Nn(r)==="object"&&!t.isValidElement(r)?l=r:l.right=r,a==="right"&&(o=l.right),a==="left"&&(o=l.left),o?t.createElement("div",{className:"".concat(i,"-extra-content")},o):null};function Or(e,n){var a,i=t.useContext(ln),r=i.prefixCls,o=i.tabs,l=e.className,u=e.style,s=e.id,f=e.animated,c=e.activeKey,h=e.rtl,v=e.extra,y=e.editable,m=e.locale,d=e.tabPosition,P=e.tabBarGutter,R=e.children,N=e.onTabClick,p=e.onTabScroll,b=t.useRef(),I=t.useRef(),C=t.useRef(),V=t.useRef(),E=Ar(),x=K(E,2),w=x[0],T=x[1],g=d==="top"||d==="bottom",_=Sn(0,function(q,z){g&&p&&p({direction:q>z?"left":"right"})}),O=K(_,2),$=O[0],U=O[1],F=Sn(0,function(q,z){!g&&p&&p({direction:q>z?"top":"bottom"})}),X=K(F,2),J=X[0],k=X[1],D=t.useState(0),L=K(D,2),A=L[0],W=L[1],S=t.useState(0),B=K(S,2),ne=B[0],ce=B[1],le=t.useState(null),de=K(le,2),Q=de[0],Te=de[1],Ie=t.useState(null),ge=K(Ie,2),me=ge[0],Z=ge[1],ye=t.useState(0),ue=K(ye,2),rt=ue[0],Ve=ue[1],Ge=t.useState(0),je=K(Ge,2),De=je[0],it=je[1],Ye=Va(new Map),_e=K(Ye,2),ot=_e[0],Xe=_e[1],se=Ba(o,ot,A),We="".concat(r,"-nav-operations-hidden"),ke=0,Ce=0;g?h?(ke=0,Ce=Math.max(0,A-Q)):(ke=Math.min(0,Q-A),Ce=0):(ke=Math.min(0,me-ne),Ce=0);function xe(q){return q<ke?ke:q>Ce?Ce:q}var be=t.useRef(),fe=t.useState(),It=K(fe,2),Be=It[0],Ee=It[1];function Ze(){Ee(Date.now())}function qe(){window.clearTimeout(be.current)}Lr(b,function(q,z){function ae(pe,$e){pe(function(He){var mt=xe(He+$e);return mt})}if(g){if(Q>=A)return!1;ae(U,q)}else{if(me>=ne)return!1;ae(k,z)}return qe(),Ze(),!0}),t.useEffect(function(){return qe(),Be&&(be.current=window.setTimeout(function(){Ee(0)},100)),qe},[Be]);function Et(){var q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c,z=se.get(q)||{width:0,height:0,left:0,right:0,top:0};if(g){var ae=$;h?z.right<$?ae=z.right:z.right+z.width>$+Q&&(ae=z.right+z.width-Q):z.left<-$?ae=-z.left:z.left+z.width>-$+Q&&(ae=-(z.left+z.width-Q)),k(0),U(xe(ae))}else{var pe=J;z.top<-J?pe=-z.top:z.top+z.height>-J+me&&(pe=-(z.top+z.height-me)),U(0),k(xe(pe))}}var wt=qa(se,{width:Q,height:me,left:$,top:J},{width:A,height:ne},{width:rt,height:De},H(H({},e),{},{tabs:o})),Rt=K(wt,2),Bt=Rt[0],lt=Rt[1],Fe={};d==="top"||d==="bottom"?Fe[h?"marginRight":"marginLeft"]=P:Fe.marginTop=P;var Me=o.map(function(q,z){var ae=q.key;return t.createElement(Wa,{id:s,prefixCls:r,key:ae,tab:q,style:z===0?void 0:Fe,closable:q.closable,editable:y,active:ae===c,renderWrapper:R,removeAriaLabel:m==null?void 0:m.removeAriaLabel,ref:w(ae),onClick:function($e){N(ae,$e)},onRemove:function(){T(ae)},onFocus:function(){Et(ae),Ze(),b.current&&(h||(b.current.scrollLeft=0),b.current.scrollTop=0)}})}),Je=_n(function(){var q,z,ae,pe,$e,He,mt=((q=b.current)===null||q===void 0?void 0:q.offsetWidth)||0,Ut=((z=b.current)===null||z===void 0?void 0:z.offsetHeight)||0,Nt=((ae=V.current)===null||ae===void 0?void 0:ae.offsetWidth)||0,$t=((pe=V.current)===null||pe===void 0?void 0:pe.offsetHeight)||0;Te(mt),Z(Ut),Ve(Nt),it($t);var Gt=((($e=I.current)===null||$e===void 0?void 0:$e.offsetWidth)||0)-Nt,ee=(((He=I.current)===null||He===void 0?void 0:He.offsetHeight)||0)-$t;W(Gt),ce(ee),Xe(function(){var G=new Map;return o.forEach(function(ie){var we=ie.key,ve=w(we).current;ve&&G.set(we,{width:ve.offsetWidth,height:ve.offsetHeight,left:ve.offsetLeft,top:ve.offsetTop})}),G})}),Pt=o.slice(0,Bt),qt=o.slice(lt+1),st=[].concat(Ae(Pt),Ae(qt)),Ft=t.useState(),Tt=K(Ft,2),Ht=Tt[0],zt=Tt[1],Ne=se.get(c),kt=t.useRef();function ct(){Re.cancel(kt.current)}t.useEffect(function(){var q={};return Ne&&(g?(h?q.right=Ne.right:q.left=Ne.left,q.width=Ne.width):(q.top=Ne.top,q.height=Ne.height)),ct(),kt.current=Re(function(){zt(q)}),ct},[Ne,g,h]),t.useEffect(function(){Et()},[c,Ne,se,g]),t.useEffect(function(){Je()},[h,P,c,o.map(function(q){return q.key}).join("_")]);var ut=!!st.length,Ke="".concat(r,"-nav-wrap"),dt,ft,Mt,vt;return g?h?(ft=$>0,dt=$+Q<A):(dt=$<0,ft=-$+Q<A):(Mt=J<0,vt=-J+me<ne),t.createElement("div",{ref:n,role:"tablist",className:te("".concat(r,"-nav"),l),style:u,onKeyDown:function(){Ze()}},t.createElement(In,{position:"left",extra:v,prefixCls:r}),t.createElement(un,{onResize:Je},t.createElement("div",{className:te(Ke,(a={},M(a,"".concat(Ke,"-ping-left"),dt),M(a,"".concat(Ke,"-ping-right"),ft),M(a,"".concat(Ke,"-ping-top"),Mt),M(a,"".concat(Ke,"-ping-bottom"),vt),a)),ref:b},t.createElement(un,{onResize:Je},t.createElement("div",{ref:I,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat($,"px, ").concat(J,"px)"),transition:Be?"none":void 0}},Me,t.createElement(jn,{ref:V,prefixCls:r,locale:m,editable:y,style:H(H({},Me.length===0?void 0:Fe),{},{visibility:ut?"hidden":null})}),t.createElement("div",{className:te("".concat(r,"-ink-bar"),M({},"".concat(r,"-ink-bar-animated"),f.inkBar)),style:Ht}))))),t.createElement(Kr,Se({},e,{removeAriaLabel:m==null?void 0:m.removeAriaLabel,ref:C,prefixCls:r,tabs:st,className:!ut&&We,tabMoving:!!Be})),t.createElement(In,{position:"right",extra:v,prefixCls:r}))}const En=t.forwardRef(Or);function Vr(e){var n=e.id,a=e.activeKey,i=e.animated,r=e.tabPosition,o=e.rtl,l=e.destroyInactiveTabPane,u=t.useContext(ln),s=u.prefixCls,f=u.tabs,c=i.tabPane,h=f.findIndex(function(v){return v.key===a});return t.createElement("div",{className:te("".concat(s,"-content-holder"))},t.createElement("div",{className:te("".concat(s,"-content"),"".concat(s,"-content-").concat(r),M({},"".concat(s,"-content-animated"),c)),style:h&&c?M({},o?"marginRight":"marginLeft","-".concat(h,"00%")):null},f.map(function(v){return t.cloneElement(v.node,{key:v.key,prefixCls:s,tabKey:v.key,id:n,animated:c,active:v.key===a,destroyInactiveTabPane:l})})))}function Yn(e){var n=e.prefixCls,a=e.forceRender,i=e.className,r=e.style,o=e.id,l=e.active,u=e.animated,s=e.destroyInactiveTabPane,f=e.tabKey,c=e.children,h=t.useState(a),v=K(h,2),y=v[0],m=v[1];t.useEffect(function(){l?m(!0):s&&m(!1)},[l,s]);var d={};return l||(u?(d.visibility="hidden",d.height=0,d.overflowY="hidden"):d.display="none"),t.createElement("div",{id:o&&"".concat(o,"-panel-").concat(f),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(f),"aria-hidden":!l,style:H(H({},d),r),className:te("".concat(n,"-tabpane"),l&&"".concat(n,"-tabpane-active"),i)},(l||y||a)&&c)}var Dr=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],wn=0;function Wr(e){return kn(e).map(function(n){if(t.isValidElement(n)){var a=n.key!==void 0?String(n.key):void 0;return H(H({key:a},n.props),{},{node:n})}return null}).filter(function(n){return n})}function Br(e,n){var a,i=e.id,r=e.prefixCls,o=r===void 0?"rc-tabs":r,l=e.className,u=e.children,s=e.direction,f=e.activeKey,c=e.defaultActiveKey,h=e.editable,v=e.animated,y=v===void 0?{inkBar:!0,tabPane:!1}:v,m=e.tabPosition,d=m===void 0?"top":m,P=e.tabBarGutter,R=e.tabBarStyle,N=e.tabBarExtraContent,p=e.locale,b=e.moreIcon,I=e.moreTransitionName,C=e.destroyInactiveTabPane,V=e.renderTabBar,E=e.onChange,x=e.onTabClick,w=e.onTabScroll,T=he(e,Dr),g=Wr(u),_=s==="rtl",O;y===!1?O={inkBar:!1,tabPane:!1}:y===!0?O={inkBar:!0,tabPane:!0}:O=H({inkBar:!0,tabPane:!1},Nn(y)==="object"?y:{});var $=t.useState(!1),U=K($,2),F=U[0],X=U[1];t.useEffect(function(){X(da())},[]);var J=at(function(){var Z;return(Z=g[0])===null||Z===void 0?void 0:Z.key},{value:f,defaultValue:c}),k=K(J,2),D=k[0],L=k[1],A=t.useState(function(){return g.findIndex(function(Z){return Z.key===D})}),W=K(A,2),S=W[0],B=W[1];t.useEffect(function(){var Z=g.findIndex(function(ue){return ue.key===D});if(Z===-1){var ye;Z=Math.max(0,Math.min(S,g.length-1)),L((ye=g[Z])===null||ye===void 0?void 0:ye.key)}B(Z)},[g.map(function(Z){return Z.key}).join("_"),D,S]);var ne=at(null,{value:i}),ce=K(ne,2),le=ce[0],de=ce[1],Q=d;F&&!["left","right"].includes(d)&&(Q="top"),t.useEffect(function(){i||(de("rc-tabs-".concat(wn)),wn+=1)},[]);function Te(Z,ye){x==null||x(Z,ye);var ue=Z!==D;L(Z),ue&&(E==null||E(Z))}var Ie={id:le,activeKey:D,animated:O,tabPosition:Q,rtl:_,mobile:F},ge,me=H(H({},Ie),{},{editable:h,locale:p,moreIcon:b,moreTransitionName:I,tabBarGutter:P,onTabClick:Te,onTabScroll:w,extra:N,style:R,panes:u});return V?ge=V(me,En):ge=t.createElement(En,me),t.createElement(ln.Provider,{value:{tabs:g,prefixCls:o}},t.createElement("div",Se({ref:n,id:i,className:te(o,"".concat(o,"-").concat(Q),(a={},M(a,"".concat(o,"-mobile"),F),M(a,"".concat(o,"-editable"),h),M(a,"".concat(o,"-rtl"),_),a),l)},T),ge,t.createElement(Vr,Se({destroyInactiveTabPane:C},Ie,{animated:O}))))}var Xn=t.forwardRef(Br);Xn.TabPane=Yn;var qr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},Fr=function(n,a){return t.createElement(Ta,H(H({},n),{},{ref:a,icon:qr}))},Hr=t.forwardRef(Fr),zr=function(e,n){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(a[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(a[i[r]]=e[i[r]]);return a};function Wt(e){var n=e.type,a=e.className,i=e.size,r=e.onEdit,o=e.hideAdd,l=e.centered,u=e.addIcon,s=zr(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),f=s.prefixCls,c=s.moreIcon,h=c===void 0?t.createElement(Pa,null):c,v=t.useContext(ka),y=v.getPrefixCls,m=v.direction,d=y("tabs",f),P;n==="editable-card"&&(P={onEdit:function(p,b){var I=b.key,C=b.event;r==null||r(p==="add"?C:I,p)},removeIcon:t.createElement($a,null),addIcon:u||t.createElement(Hr,null),showAdd:o!==!0});var R=y();return Ma(!("onPrevClick"in s)&&!("onNextClick"in s),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),t.createElement(Na.Consumer,null,function(N){var p,b=i!==void 0?i:N;return t.createElement(Xn,Se({direction:m,moreTransitionName:"".concat(R,"-slide-up")},s,{className:te((p={},M(p,"".concat(d,"-").concat(b),b),M(p,"".concat(d,"-card"),["card","editable-card"].includes(n)),M(p,"".concat(d,"-editable-card"),n==="editable-card"),M(p,"".concat(d,"-centered"),l),p),a),editable:P,moreIcon:h,prefixCls:d}))})}Wt.TabPane=Yn;const Zn=t.createContext({}),ze=Oe.div``,Ue=Oe.div``,Jn=Oe(Ka)``,Qn=Oe(pa)``,ea=Oe.div``,j=ma(),oe={tabList:{gap:"4px",padding:"24px 12px",margin:"0 0 24px 0"},topTab:{padding:"2px 8px",margin:"8px",borderRadius:"4px"},leftTab:{padding:"6px 12px",borderRadius:"8px"},inkBar:{borderRadius:"2px"},...fa(va.BTM3)},sn=Ct`
  font-family: ${oe.fontFamily};
  font-size: ${oe.fontSize};
  font-weight: ${oe.fontWeight};
  font-style: ${oe.fontStyle};
  line-height: ${oe.lineHeight};
  letter-spacing: ${oe.letterSpacing};
`,Ur=Ct`
  && > .ant-tabs-nav {
    width: 280px;
    padding: ${oe.tabList.padding};
    border-right: 1px solid ${j("divider.color")};

    .ant-tabs-nav-list {
      &::before {
        display: none;
      }
    }

    .ant-tabs-tab-active > .ant-tabs-tab-btn {
      background-color: ${j("selected.pressed.background")};
    }

    .ant-tabs-tab {
      text-align: left;
      border: none;
      padding: 0;
      margin: 0;

      ${Qn} {
        pointer-events: none;
        cursor: pointer !important;
      }

      ${Jn} {
        margin: 0 0 8px 0;
        
        &:last-child {
          margin-bottom: 0;
        }
      }

      .ant-tabs-tab-btn {
        width: 100%;
        border-radius: ${oe.leftTab.borderRadius};
        padding: ${oe.leftTab.padding};
        &:hover {
          &::before {
            display: none;
          }
        }
      }
    }

    .ant-tabs-tab + .ant-tabs-tab {
      margin-top: ${oe.tabList.gap};
    }

    .ant-tabs-ink-bar {
      display: none;
    }
  }

  & > .ant-tabs-content-holder {
    border-left: unset;
  }

  ${Ue} {
    width: 100%;
  }
`,Gr=Ct`
  width: 100%;
  overflow: visible;

  &.ant-tabs-top > .ant-tabs-nav {
    margin: ${oe.tabList.margin};
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
      background-color: ${j("divider.color")};
      height: 1px;
      width: 100%;
      border-radius: ${oe.inkBar.borderRadius};
    }
  }
 
  && .ant-tabs-nav-operations {
    display: none;
    visibility: hidden;
    pointer-events: none;
  }

  .ant-tabs-content-holder .ant-tabs-tabpane-active {
    color: ${j("unselected.enabled.color")};
  }

  &&& .ant-tabs-tab-active > .ant-tabs-tab-btn {
    color: ${j("selected.enabled.color")};
    text-shadow: none;

    &:hover {
      background-color: ${j("selected.hover.background")};
    }
    &:active {
      background-color: ${j("selected.pressed.background")};
    }

    ${Ue}, ${ze} path {
      color: ${j("selected.enabled.color")};
    }
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin-left: ${oe.tabList.gap};
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
    margin: 0 0 ${oe.topTab.margin} 0;
    transition: none;
    border: none;

    .ant-tabs-tab-btn {
      display: flex;
      padding: ${oe.topTab.padding};
      border-radius: ${oe.topTab.borderRadius};
      color: ${j("unselected.enabled.color")};
      background-color: ${j("unselected.enabled.background")};
      ${sn};
      height: 100%;
      width: 100%;
    }

    &:not(.ant-tabs-tab-disabled) {
      .ant-tabs-tab-btn {   
        &:focus-visible {
          box-shadow: ${j("focus.boxShadow")};
        }
        &:hover {
          background-color: ${j("unselected.hover.background")};
          &::before {
            display: inline;
            position: absolute;
            content: '';
            bottom: -8px;
            right: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: ${j("unselected.enabled.border")};
            border-radius: ${oe.inkBar.borderRadius};
            transform: none;
          }
        }
        &:active {
          background-color: ${j("unselected.pressed.background")};
        }
      }
    }
  }

  && .ant-tabs-tab-disabled > .ant-tabs-tab-btn {
    color: ${j("selected.disabled.color")};

    ${Ue}, ${ze} path {
      color: ${j("selected.disabled.color")};
    }
    &:hover {
      border-color: transparent;
    }
  }

  && .ant-tabs-ink-bar {
    background-color: ${j("selected.enabled.border")};
    height: 2px;
    border-radius: ${oe.inkBar.borderRadius};
  }

  &.ant-tabs-left {
    ${Ur}
  }
`,jr=Ct`
  display: flex;
  gap: 4px;
  align-items: center;
  position: relative;

  .ant-badge-count {
    min-width: 0;
  }

  .hexa-ui-indicator {
    position: absolute;
    top: 0px;
    right: -6px;
    z-index: 1;
  }

  ${ze} {
    display: flex;
    align-items: center;
    path {
      color: ${j("unselected.enabled.color")};
    }
  }
  ${Ue} {
    ${sn};
    color: ${j("unselected.enabled.color")};
  }
`,Yr=Ct`
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
  
  & ${ea} {
    position: absolute;
    right: 0px;
  }

  & > .kl6-tabs-more-button {
    position: absolute;
    right: ${e=>e.extraContentWidth+"px"};
    color: ${j("unselected.enabled.color")};
    ${e=>e.selectedMoreButton&&`
      color: ${j("selected.enabled.color")(e)};
    `}
    ${e=>e.shouldShowMoreButton?"":"visibility: hidden;"}
    ${sn}; 

    padding: ${oe.topTab.padding};
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
      background-color: ${j("unselected.enabled.border")};
      ${e=>e.selectedMoreButton&&`
        display: inline;
        bottom: -8px;
        background-color: ${j("selected.enabled.border")(e)};
      `}
      border-radius: ${oe.inkBar.borderRadius};
    }
    &:hover {
      background-color: ${j("unselected.hover.background")};
      ${e=>e.selectedMoreButton&&`
        background-color: ${j("selected.hover.background")(e)};
      `}
      &::before {
        display: inline;
      }
    }
    &:active {
      background-color: ${j("unselected.pressed.background")};
      ${e=>e.selectedMoreButton&&`
        background-color: ${j("selected.pressed.background")(e)};
      `}
    }
    &:focus-visible {
      box-shadow: ${j("focus.boxShadow")};
    }
  }
`,Xr=(e,n)=>{var a,i,r,o;return`
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
        & ${Ue},
        & ${ze} path {
          color: ${(a=e.unselected.disabled)==null?void 0:a.color};
        }
      }
    }

    .ant-dropdown-menu > li.kl6-dropdown-item-custom {
      &.ant-dropdown-menu-item-active:not(.kl6-dropdown-group-title) {
        &,
        &:hover {
          background: ${(i=e.unselected.hover)==null?void 0:i.background};
        }
      }
    }

    .ant-dropdown-menu > li,
    .ant-dropdown-menu > li.kl6-dropdown-item-custom {
      &.kl6-dropdown-active-tab:not(.kl6-dropdown-group-title) {
        &,
        & ${Ue},
        & ${ze} path {
          color: ${(r=e.selected.enabled)==null?void 0:r.color};
        }
        
        &:hover {
          background: ${(o=e.selected.hover)==null?void 0:o.background};
        }
      }
    }
  }    
`};function Zr(e,n,a,i,r){const o=vn(e,i,".ant-tabs-nav-list",r),l=vn(e,a+i,".ant-tabs-nav-list",r);return o===void 0||l===void 0?n.length:l}const Jt=({tabs:e,onChange:n,activeKey:a,className:i})=>Y.createElement(La,{trigger:["click"],placement:"bottomRight",overlayClassName:i,overlay:e.map(r=>({children:r.props.tab,onClick:()=>n==null?void 0:n(String(r.key)||""),key:r.key,disabled:r.props.disabled,className:r.key===a?"kl6-dropdown-active-tab":""}))},Y.createElement(_a,{className:"kl6-tabs-more-button",mode:"tertiary",iconAfter:Y.createElement(ba,null)},Y.createElement(Aa,{localizationKey:"tabs.dropdown.more"})));try{Jt.displayName="TabsDropdown",Jt.__docgenInfo={description:"",displayName:"TabsDropdown",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>[]"}},activeKey:{defaultValue:null,description:"",name:"activeKey",required:!0,type:{name:"Key"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((activeKey: string) => void) | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Jr=e=>ha(e,{componentName:"tabs",defaultValues:{},propsToDrill:["theme"]}),ta=e=>{const{divider:n,dividerClassName:a,title:i,children:r,...o}=e,l=e.tabKey||Oa();return Y.createElement(Wt.TabPane,{key:l,...o,tab:Y.createElement(Y.Fragment,null,n?Y.createElement(Jn,{className:a}):null,r||i&&Y.createElement(Qn,{type:"BTR4",themedColor:"secondary"},i)),disabled:!0})},Ot=e=>ta(e),Qt=e=>{const n=[];return t.Children.forEach(e,a=>{t.isValidElement(a)&&(a.type===Ot?n.push(ta(a.props)):n.push(a))}),n};function Vt(e){return e!=null&&e.type&&e.type===Y.Fragment?Vt(e.props.children):e}try{Vt.displayName="extractChildrenFromFragment",Vt.__docgenInfo={description:"",displayName:"extractChildrenFromFragment",props:{}}}catch{}try{Ot.displayName="GroupTabHeader",Ot.__docgenInfo={description:"",displayName:"GroupTabHeader",props:{divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"boolean"}},dividerClassName:{defaultValue:null,description:"",name:"dividerClassName",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{Qt.displayName="extractTabPanes",Qt.__docgenInfo={description:"",displayName:"extractTabPanes",props:{}}}catch{}const Rn=4,Qr=Oe(Wt).withConfig({shouldForwardProp:e=>!["cssConfig","hiddenTabsLength"].includes(e)})`
  ${Gr}
`,yt=e=>{const n=Jr(e),a=ga(n);return Y.createElement(na,{...a})};yt.TabPane=Wt.TabPane;const ei=Oe(xa).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${jr}
`,ti=Oe.div.withConfig({shouldForwardProp:Ia})`
  ${Yr}
`,ni=({text:e,infoTooltip:n,disabledTooltip:a,iconBefore:i,iconAfter:r,number:o,indicator:l,indicatorMode:u,...s})=>{const{cssConfig:f,testAttributes:c}=t.useContext(Zn),h=Y.createElement(ei,{...s,gap:"related",wrap:"nowrap",cssConfig:f},i&&Y.createElement(ze,null,i),Y.createElement(Ue,null,e),r&&Y.createElement(ze,null,r),n&&Y.createElement(dn,{text:n},Y.createElement(Sa,{testId:`${(c==null?void 0:c["data-testid"])??"tabs"}-tab-info-icon`,klId:`${(c==null?void 0:c["kl-id"])??"tabs"}-tab-info-icon`})),o!==void 0&&Y.createElement(Ea,{count:o,showZero:!0,mode:"neutral"}),l&&Y.createElement(wa,{mode:u??"critical",testId:`${(c==null?void 0:c["data-testid"])??"tabs"}-tab-indicator`}));return a?Y.createElement(dn,{text:a,defaultAlign:!0},h):h};yt.TabPaneHead=ni;const en=({className:e,...n})=>Y.createElement(yt,{...n,className:te("group-tabs",e),tabPosition:"left"});en.TabPaneHeader=Ot;const na=({cssConfig:e,tabPosition:n="top",destroyInactiveTabPane:a=!1,children:i,activeKey:r,defaultActiveKey:o,onChange:l,testId:u,testAttributes:s,className:f,tabBarExtraContent:c,padding:h=!1,noMargin:v=!1,...y})=>{var D;const m=ya(e,Xr,na),d=t.useRef(null),P=t.useRef(null),R=r??o??((D=i[0])==null?void 0:D.key)??"",[N,p]=t.useState(R),[b,I]=t.useState(0),[C,V]=t.useState(0),[E,x]=t.useState(0),w=t.useMemo(()=>{const L=[],A=Vt(i);return t.Children.forEach(A,W=>{t.isValidElement(W)&&L.push(W)}),L},[i]);let T=0;P.current&&(T=P.current.clientWidth+Rn);let g=Zr(d,w,b,T,C);if(d.current){const L=d.current.querySelectorAll(".ant-tab > .ant-tabs-nav .ant-tabs-tab"),A=d.current.querySelector(".ant-tabs-extra-content"),W=A?A.clientWidth+Rn:0,S=L[L.length-1];S&&S.offsetLeft+S.clientWidth+T+W<E&&(g=w.length)}n==="left"&&(g=w.length);const _=g+1<w.length,O=w.findIndex(L=>N===L.key)>g,$=_?w.slice(g+1,w.length):[];t.useEffect(()=>{p(R)},[R]),t.useEffect(()=>{V(C+1)},[w]);const U=async L=>{await(l==null?void 0:l(L))!==!1&&p(L)},F=()=>{var L;if(d.current){const A=((L=d.current.querySelector(".kl6-tabs-more-button"))==null?void 0:L.getBoundingClientRect().width)||0;I(A)}},X=()=>{setTimeout(()=>{F(),d.current&&V(C+1)},0)};t.useLayoutEffect(F,[]),t.useEffect(()=>{const L=new Ca(()=>{d.current&&x(d.current.clientWidth)});return d.current&&L.observe(d.current),fn.on("languageChanged",X),()=>{L.disconnect(),fn.off("languageChanged",X)}},[]);const J={left:void 0};let k;return c&&(typeof c=="object"&&("left"in c||"right"in c)?("left"in c&&(J.left=c.left),"right"in c&&(k=c.right)):k=c),Y.createElement(Zn.Provider,{value:{cssConfig:e,testAttributes:s}},Y.createElement(ti,{ref:d,className:te(f,m,{"with-padding":h},{"no-margin":v}),cssConfig:e,selectedMoreButton:O,extraContentWidth:T,shouldShowMoreButton:_},Y.createElement(Qr,{cssConfig:e,type:"line",tabPosition:n,destroyInactiveTabPane:a,...y,tabBarExtraContent:J,activeKey:N,onChange:U,hiddenTabsLength:w.length-g,...s},Qt(w)),Y.createElement(ea,{ref:P,className:"extraContent"},k),Y.createElement(Jt,{activeKey:N,className:m,tabs:$,onChange:U})))};try{yt.displayName="Tabs",yt.__docgenInfo={description:"",displayName:"Tabs",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},tabBarExtraContent:{defaultValue:null,description:"Extra content at left and right side of tabs. Intends should be set manually (until design review)",name:"tabBarExtraContent",required:!1,type:{name:"ReactNode | ComplexTabBarExtraContent"}},className:{defaultValue:null,description:"TabPane's className",name:"className",required:!1,type:{name:"string"}},tabPosition:{defaultValue:{value:"top"},description:"Tabs position",name:"tabPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"top"'}]}},activeKey:{defaultValue:null,description:"Current TabPane's key",name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:null,description:"Initial active TabPane's key, if activeKey is not set",name:"defaultActiveKey",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback executed when active tab is changed\nIf `false` is returned, tab transition will be prevented",name:"onChange",required:!1,type:{name:"((activeKey: string) => boolean | void | Promise<boolean | void>)"}},onTabClick:{defaultValue:null,description:"Callback executed when tab is clicked",name:"onTabClick",required:!1,type:{name:"((activeKey: string, e: KeyboardEvent<Element> | MouseEvent<Element, MouseEvent>) => void)"}},style:{defaultValue:null,description:"Style properties",name:"style",required:!1,type:{name:"CSSProperties"}},destroyInactiveTabPane:{defaultValue:{value:"false"},description:"Whether destroy inactive TabPane when change tab",name:"destroyInactiveTabPane",required:!1,type:{name:"boolean"}},padding:{defaultValue:{value:"false"},description:"Add horizontal padding (24px)",name:"padding",required:!1,type:{name:"boolean"}},noMargin:{defaultValue:{value:"false"},description:"Removes the margin from the component",name:"noMargin",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}try{en.displayName="GroupTabs",en.__docgenInfo={description:"",displayName:"GroupTabs",props:{children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"TabPane's className",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},activeKey:{defaultValue:null,description:"Current TabPane's key",name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:null,description:"Initial active TabPane's key, if activeKey is not set",name:"defaultActiveKey",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},onChange:{defaultValue:null,description:"Callback executed when active tab is changed\nIf `false` is returned, tab transition will be prevented",name:"onChange",required:!1,type:{name:"((activeKey: string) => boolean | void | Promise<boolean | void>)"}},style:{defaultValue:null,description:"Style properties",name:"style",required:!1,type:{name:"CSSProperties"}},tabBarExtraContent:{defaultValue:null,description:"Extra content at left and right side of tabs. Intends should be set manually (until design review)",name:"tabBarExtraContent",required:!1,type:{name:"ReactNode | ComplexTabBarExtraContent"}},onTabClick:{defaultValue:null,description:"Callback executed when tab is clicked",name:"onTabClick",required:!1,type:{name:"((activeKey: string, e: KeyboardEvent<Element> | MouseEvent<Element, MouseEvent>) => void)"}},destroyInactiveTabPane:{defaultValue:{value:"false"},description:"Whether destroy inactive TabPane when change tab",name:"destroyInactiveTabPane",required:!1,type:{name:"boolean"}},padding:{defaultValue:{value:"false"},description:"Add horizontal padding (24px)",name:"padding",required:!1,type:{name:"boolean"}},noMargin:{defaultValue:{value:"false"},description:"Removes the margin from the component",name:"noMargin",required:!1,type:{name:"boolean"}}}}}catch{}export{en as G,yt as T,Rn as a,ni as b};
