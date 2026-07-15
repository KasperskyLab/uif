import{am as fo,a9 as G,an as Fe,aj as bo,r as Pt,ai as jn,ae as So,ao as ko,ap as Ro,a5 as en,a6 as R,aq as Mo,a8 as A,a7 as z,a3 as L,af as No,ar as $t,ah as Qe,_ as Ue,as as At,aa as Hn,at as Lt,au as Tt,a0 as Go,a1 as Po,a2 as $o,a4 as Ao,av as Kt,al as Vt,d as Lo,aw as go,ad as ho,g as To,b as Wt,f as ke,h as Ft,S as Ut,ax as jt,ab as Ht}from"./Link-B6aRyTdF.js";import{i as Bt}from"./isObject-BMjquL3L.js";import{R as _,r as d,g as Yt,C as Je,H as Re}from"./iframe-C54-I-iN.js";import{r as Ko}from"./index-LUg1m9AG.js";import{o as Me,s as qt,g as Xt,I as Qt,t as Jt,f as Zt,d as nr,C as er,W as or,F as tr,c as rr,D as dr,v as ar}from"./FormLabel-SCvX2okj.js";import{r as ir}from"./debounce-Rb0A5Rg5.js";function We(n){return n!==void 0}function ve(n,o){var r=o||{},e=r.defaultValue,t=r.value,a=r.onChange,i=r.postState,u=fo(function(){return We(t)?t:We(e)?typeof e=="function"?e():e:typeof n=="function"?n():n}),p=G(u,2),l=p[0],c=p[1],m=t!==void 0?t:l,s=i?i(m):m,f=Fe(a),w=fo([m]),x=G(w,2),v=x[0],O=x[1];bo(function(){var C=v[0];l!==C&&f(l,C)},[v]),bo(function(){We(t)||c(t)},[t]);var D=Fe(function(C,y){c(C,y),O([m],y)});return[s,D]}var fn={TAB:9,ENTER:13,ESC:27,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};const ur=_.forwardRef((n,o)=>_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",ref:o,...n},_.createElement("path",{fill:Pt(n.color)||n.color||"currentColor",fillRule:"evenodd",d:"M5.363 3.3223a.65.65 0 0 0 .0132.919L9.2388 7.995l-3.8632 3.7641a.65.65 0 0 0 .9072.9311l4.3416-4.2303a.65.65 0 0 0-.0006-.9316L6.2822 3.309a.65.65 0 0 0-.9191.0131",clipRule:"evenodd"}))),Vo=_.memo(_.forwardRef((n,o)=>{const{klId:r,testId:e,...t}=n;return _.createElement(ur,{"kl-id":r,"data-testid":e,ref:o,...t})}));Vo.displayName="ArrowRight";const yo={infoAccent:"info",black:"neutral",dot:"Indicator",primaryBlue:"primary",primaryBlack:"primary",danger:"dangerFilled",invertedPrimary:"primary",invertedSecondary:"secondary",invertedTertiary:"tertiary",default:"accent"},lr=(n,o,r)=>{let e=`'${n}' = '${o}' is deprecated.`;yo[o]?e+=` Use '${yo[o]}' instead`:r&&(e+=` ${r}`),console.warn(e)};var pr=fn.ESC,mr=fn.TAB;function sr(n){var o=n.visible,r=n.triggerRef,e=n.onVisibleChange,t=n.autoFocus,a=n.overlayRef,i=d.useRef(!1),u=function(){if(o){var m,s;(m=r.current)===null||m===void 0||(s=m.focus)===null||s===void 0||s.call(m),e==null||e(!1)}},p=function(){var m;return(m=a.current)!==null&&m!==void 0&&m.focus?(a.current.focus(),i.current=!0,!0):!1},l=function(m){switch(m.keyCode){case pr:u();break;case mr:{var s=!1;i.current||(s=p()),s?m.preventDefault():u();break}}};d.useEffect(function(){return o?(window.addEventListener("keydown",l),t&&jn(p,3),function(){window.removeEventListener("keydown",l),i.current=!1}):function(){i.current=!1}},[o])}var cr=d.forwardRef(function(n,o){var r=n.overlay,e=n.arrow,t=n.prefixCls,a=d.useMemo(function(){var u;return typeof r=="function"?u=r():u=r,u},[r]),i=So(o,ko(a));return _.createElement(_.Fragment,null,e&&_.createElement("div",{className:"".concat(t,"-arrow")}),_.cloneElement(a,{ref:Ro(a)?i:void 0}))}),ee={adjustX:1,adjustY:1},oe=[0,0],wr={topLeft:{points:["bl","tl"],overflow:ee,offset:[0,-4],targetOffset:oe},top:{points:["bc","tc"],overflow:ee,offset:[0,-4],targetOffset:oe},topRight:{points:["br","tr"],overflow:ee,offset:[0,-4],targetOffset:oe},bottomLeft:{points:["tl","bl"],overflow:ee,offset:[0,4],targetOffset:oe},bottom:{points:["tc","bc"],overflow:ee,offset:[0,4],targetOffset:oe},bottomRight:{points:["tr","br"],overflow:ee,offset:[0,4],targetOffset:oe}},_r=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function vr(n,o){var r,e=n.arrow,t=e===void 0?!1:e,a=n.prefixCls,i=a===void 0?"rc-dropdown":a,u=n.transitionName,p=n.animation,l=n.align,c=n.placement,m=c===void 0?"bottomLeft":c,s=n.placements,f=s===void 0?wr:s,w=n.getPopupContainer,x=n.showAction,v=n.hideAction,O=n.overlayClassName,D=n.overlayStyle,C=n.visible,y=n.trigger,h=y===void 0?["hover"]:y,g=n.autoFocus,M=n.overlay,b=n.children,S=n.onVisibleChange,N=en(n,_r),I=_.useState(),P=G(I,2),T=P[0],U=P[1],J="visible"in n?C:T,rn=_.useRef(null),q=_.useRef(null),dn=_.useRef(null);_.useImperativeHandle(o,function(){return rn.current});var on=function(H){U(H),S==null||S(H)};sr({visible:J,triggerRef:dn,onVisibleChange:on,autoFocus:g,overlayRef:q});var an=function(H){var V=n.onOverlayClick;U(!1),V&&V(H)},sn=function(){return _.createElement(cr,{ref:q,overlay:M,prefixCls:i,arrow:t})},gn=function(){return typeof M=="function"?sn:sn()},hn=function(){var H=n.minOverlayWidthMatchTrigger,V=n.alignPoint;return"minOverlayWidthMatchTrigger"in n?H:!V},X=function(){var H=n.openClassName;return H!==void 0?H:"".concat(i,"-open")},j=_.cloneElement(b,{className:R((r=b.props)===null||r===void 0?void 0:r.className,J&&X()),ref:Ro(b)?So(dn,ko(b)):void 0}),bn=v;return!bn&&h.indexOf("contextMenu")!==-1&&(bn=["click"]),_.createElement(Mo,A({builtinPlacements:f},N,{prefixCls:i,ref:rn,popupClassName:R(O,z({},"".concat(i,"-show-arrow"),t)),popupStyle:D,action:h,showAction:x,hideAction:bn,popupPlacement:m,popupAlign:l,popupTransitionName:u,popupAnimation:p,popupVisible:J,stretch:hn()?"minWidth":"",popup:gn(),onPopupVisibleChange:on,onPopupClick:an,getPopupContainer:w}),j)}const fr=_.forwardRef(vr);var br=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],te=void 0;function gr(n,o){var r=n.prefixCls,e=n.invalidate,t=n.item,a=n.renderItem,i=n.responsive,u=n.responsiveDisabled,p=n.registerSize,l=n.itemKey,c=n.className,m=n.style,s=n.children,f=n.display,w=n.order,x=n.component,v=x===void 0?"div":x,O=en(n,br),D=i&&!f;function C(b){p(l,b)}d.useEffect(function(){return function(){C(null)}},[]);var y=a&&t!==te?a(t,{index:w}):s,h;e||(h={opacity:D?0:1,height:D?0:te,overflowY:D?"hidden":te,order:i?w:te,pointerEvents:D?"none":te,position:D?"absolute":te});var g={};D&&(g["aria-hidden"]=!0);var M=d.createElement(v,A({className:R(!e&&r,c),style:L(L({},h),m)},g,O,{ref:o}),y);return i&&(M=d.createElement(No,{onResize:function(S){var N=S.offsetWidth;C(N)},disabled:u},M)),M}var de=d.forwardRef(gr);de.displayName="Item";function hr(n){if(typeof MessageChannel>"u")jn(n);else{var o=new MessageChannel;o.port1.onmessage=function(){return n()},o.port2.postMessage(void 0)}}function yr(){var n=d.useRef(null),o=function(e){n.current||(n.current=[],hr(function(){Ko.unstable_batchedUpdates(function(){n.current.forEach(function(t){t()}),n.current=null})})),n.current.push(e)};return o}function re(n,o){var r=d.useState(o),e=G(r,2),t=e[0],a=e[1],i=Fe(function(u){n(function(){a(u)})});return[t,i]}var Ie=_.createContext(null),Cr=["component"],xr=["className"],Dr=["className"],Er=function(o,r){var e=d.useContext(Ie);if(!e){var t=o.component,a=t===void 0?"div":t,i=en(o,Cr);return d.createElement(a,A({},i,{ref:r}))}var u=e.className,p=en(e,xr),l=o.className,c=en(o,Dr);return d.createElement(Ie.Provider,{value:null},d.createElement(de,A({ref:r,className:R(u,l)},p,c)))},Wo=d.forwardRef(Er);Wo.displayName="RawItem";var Or=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","prefix","suffix","component","itemComponent","onVisibleChange"],Fo="responsive",Uo="invalidate";function Ir(n){return"+ ".concat(n.length," ...")}function zr(n,o){var r=n.prefixCls,e=r===void 0?"rc-overflow":r,t=n.data,a=t===void 0?[]:t,i=n.renderItem,u=n.renderRawItem,p=n.itemKey,l=n.itemWidth,c=l===void 0?10:l,m=n.ssr,s=n.style,f=n.className,w=n.maxCount,x=n.renderRest,v=n.renderRawRest,O=n.prefix,D=n.suffix,C=n.component,y=C===void 0?"div":C,h=n.itemComponent,g=n.onVisibleChange,M=en(n,Or),b=m==="full",S=yr(),N=re(S,null),I=G(N,2),P=I[0],T=I[1],U=P||0,J=re(S,new Map),rn=G(J,2),q=rn[0],dn=rn[1],on=re(S,0),an=G(on,2),sn=an[0],gn=an[1],hn=re(S,0),X=G(hn,2),j=X[0],bn=X[1],ln=re(S,0),H=G(ln,2),V=H[0],cn=H[1],yn=re(S,0),Tn=G(yn,2),zn=Tn[0],Sn=Tn[1],Kn=d.useState(null),Yn=G(Kn,2),kn=Yn[0],Mn=Yn[1],qn=d.useState(null),Vn=G(qn,2),Nn=Vn[0],Xn=Vn[1],tn=d.useMemo(function(){return Nn===null&&b?Number.MAX_SAFE_INTEGER:Nn||0},[Nn,P]),ae=d.useState(!1),Qn=G(ae,2),Jn=Qn[0],Zn=Qn[1],Gn="".concat(e,"-item"),Cn=Math.max(sn,j),En=w===Fo,Z=a.length&&En,Pn=w===Uo,$n=Z||typeof w=="number"&&a.length>w,B=d.useMemo(function(){var E=a;return Z?P===null&&b?E=a:E=a.slice(0,Math.min(a.length,U/c)):typeof w=="number"&&(E=a.slice(0,w)),E},[a,c,P,w,Z]),pn=d.useMemo(function(){return Z?a.slice(tn+1):a.slice(B.length)},[a,B,Z,tn]),nn=d.useCallback(function(E,k){var Y;return typeof p=="function"?p(E):(Y=p&&(E==null?void 0:E[p]))!==null&&Y!==void 0?Y:k},[p]),Ge=d.useCallback(i||function(E){return E},[i]);function Wn(E,k,Y){Nn===E&&(k===void 0||k===kn)||(Xn(E),Y||(Zn(E<a.length-1),g==null||g(E)),k!==void 0&&Mn(k))}function Pe(E,k){T(k.clientWidth)}function ge(E,k){dn(function(Y){var wn=new Map(Y);return k===null?wn.delete(E):wn.set(E,k),wn})}function ie(E,k){bn(k),gn(j)}function $e(E,k){cn(k)}function he(E,k){Sn(k)}function An(E){return q.get(nn(B[E],E))}$t(function(){if(U&&typeof Cn=="number"&&B){var E=V+zn,k=B.length,Y=k-1;if(!k){Wn(0,null);return}for(var wn=0;wn<k;wn+=1){var On=An(wn);if(b&&(On=On||0),On===void 0){Wn(wn-1,void 0,!0);break}if(E+=On,Y===0&&E<=U||wn===Y-1&&E+An(Y)<=U){Wn(Y,null);break}else if(E+Cn>U){Wn(wn-1,E-On-zn+j);break}}D&&An(0)+zn>U&&Mn(null)}},[U,q,j,V,zn,nn,B]);var ne=Jn&&!!pn.length,ue={};kn!==null&&Z&&(ue={position:"absolute",left:kn,top:0});var Ln={prefixCls:Gn,responsive:Z,component:h,invalidate:Pn},ye=u?function(E,k){var Y=nn(E,k);return d.createElement(Ie.Provider,{key:Y,value:L(L({},Ln),{},{order:k,item:E,itemKey:Y,registerSize:ge,display:k<=tn})},u(E,k))}:function(E,k){var Y=nn(E,k);return d.createElement(de,A({},Ln,{order:k,key:Y,item:E,renderItem:Ge,itemKey:Y,registerSize:ge,display:k<=tn}))},xn={order:ne?tn:Number.MAX_SAFE_INTEGER,className:"".concat(Gn,"-rest"),registerSize:ie,display:ne},le=x||Ir,Ae=v?d.createElement(Ie.Provider,{value:L(L({},Ln),xn)},v(pn)):d.createElement(de,A({},Ln,xn),typeof le=="function"?le(pn):le),pe=d.createElement(y,A({className:R(!Pn&&e,f),style:s,ref:o},M),O&&d.createElement(de,A({},Ln,{responsive:En,responsiveDisabled:!Z,order:-1,className:"".concat(Gn,"-prefix"),registerSize:$e,display:!0}),O),B.map(ye),$n?Ae:null,D&&d.createElement(de,A({},Ln,{responsive:En,responsiveDisabled:!Z,order:tn,className:"".concat(Gn,"-suffix"),registerSize:he,display:!0,style:ue}),D));return En?d.createElement(No,{onResize:Pe,disabled:!Z},pe):pe}var Rn=d.forwardRef(zr);Rn.displayName="Overflow";Rn.Item=Wo;Rn.RESPONSIVE=Fo;Rn.INVALIDATE=Uo;function jo(n,o){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,e=new Set;function t(a,i){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,p=e.has(a);if(Qe(!p,"Warning: There may be circular references"),p)return!1;if(a===i)return!0;if(r&&u>1)return!1;e.add(a);var l=u+1;if(Array.isArray(a)){if(!Array.isArray(i)||a.length!==i.length)return!1;for(var c=0;c<a.length;c++)if(!t(a[c],i[c],l))return!1;return!0}if(a&&i&&Ue(a)==="object"&&Ue(i)==="object"){var m=Object.keys(a);return m.length!==Object.keys(i).length?!1:m.every(function(s){return t(a[s],i[s],l)})}return!1}return t(n,o)}var Ho=d.createContext(null);function Bo(n,o){return n===void 0?null:"".concat(n,"-").concat(o)}function Yo(n){var o=d.useContext(Ho);return Bo(o,n)}var Sr=["children","locked"],Dn=d.createContext(null);function kr(n,o){var r=L({},n);return Object.keys(o).forEach(function(e){var t=o[e];t!==void 0&&(r[e]=t)}),r}function fe(n){var o=n.children,r=n.locked,e=en(n,Sr),t=d.useContext(Dn),a=At(function(){return kr(t,e)},[t,e],function(i,u){return!r&&(i[0]!==u[0]||!jo(i[1],u[1],!0))});return d.createElement(Dn.Provider,{value:a},o)}var Rr=[],qo=d.createContext(null);function Ne(){return d.useContext(qo)}var Xo=d.createContext(Rr);function be(n){var o=d.useContext(Xo);return d.useMemo(function(){return n!==void 0?[].concat(Hn(o),[n]):o},[o,n])}var Qo=d.createContext(null),Ze=d.createContext({});function Co(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Lt(n)){var r=n.nodeName.toLowerCase(),e=["input","select","textarea","button"].includes(r)||n.isContentEditable||r==="a"&&!!n.getAttribute("href"),t=n.getAttribute("tabindex"),a=Number(t),i=null;return t&&!Number.isNaN(a)?i=a:e&&i===null&&(i=0),e&&n.disabled&&(i=null),i!==null&&(i>=0||o&&i<0)}return!1}function Mr(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=Hn(n.querySelectorAll("*")).filter(function(e){return Co(e,o)});return Co(n,o)&&r.unshift(n),r}var je=fn.LEFT,He=fn.RIGHT,Be=fn.UP,De=fn.DOWN,Ee=fn.ENTER,Jo=fn.ESC,ce=fn.HOME,we=fn.END,xo=[Be,De,je,He];function Nr(n,o,r,e){var t,a="prev",i="next",u="children",p="parent";if(n==="inline"&&e===Ee)return{inlineTrigger:!0};var l=z(z({},Be,a),De,i),c=z(z(z(z({},je,r?i:a),He,r?a:i),De,u),Ee,u),m=z(z(z(z(z(z({},Be,a),De,i),Ee,u),Jo,p),je,r?u:p),He,r?p:u),s={inline:l,horizontal:c,vertical:m,inlineSub:l,horizontalSub:m,verticalSub:m},f=(t=s["".concat(n).concat(o?"":"Sub")])===null||t===void 0?void 0:t[e];switch(f){case a:return{offset:-1,sibling:!0};case i:return{offset:1,sibling:!0};case p:return{offset:-1,sibling:!1};case u:return{offset:1,sibling:!1};default:return null}}function Gr(n){for(var o=n;o;){if(o.getAttribute("data-menu-list"))return o;o=o.parentElement}return null}function Pr(n,o){for(var r=n||document.activeElement;r;){if(o.has(r))return r;r=r.parentElement}return null}function no(n,o){var r=Mr(n,!0);return r.filter(function(e){return o.has(e)})}function Do(n,o,r){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!n)return null;var t=no(n,o),a=t.length,i=t.findIndex(function(u){return r===u});return e<0?i===-1?i=a-1:i-=1:e>0&&(i+=1),i=(i+a)%a,t[i]}var Ye=function(o,r){var e=new Set,t=new Map,a=new Map;return o.forEach(function(i){var u=document.querySelector("[data-menu-id='".concat(Bo(r,i),"']"));u&&(e.add(u),a.set(u,i),t.set(i,u))}),{elements:e,key2element:t,element2key:a}};function $r(n,o,r,e,t,a,i,u,p,l){var c=d.useRef(),m=d.useRef();m.current=o;var s=function(){jn.cancel(c.current)};return d.useEffect(function(){return function(){s()}},[]),function(f){var w=f.which;if([].concat(xo,[Ee,Jo,ce,we]).includes(w)){var x=a(),v=Ye(x,e),O=v,D=O.elements,C=O.key2element,y=O.element2key,h=C.get(o),g=Pr(h,D),M=y.get(g),b=Nr(n,i(M,!0).length===1,r,w);if(!b&&w!==ce&&w!==we)return;(xo.includes(w)||[ce,we].includes(w))&&f.preventDefault();var S=function(q){if(q){var dn=q,on=q.querySelector("a");on!=null&&on.getAttribute("href")&&(dn=on);var an=y.get(q);u(an),s(),c.current=jn(function(){m.current===an&&dn.focus()})}};if([ce,we].includes(w)||b.sibling||!g){var N;!g||n==="inline"?N=t.current:N=Gr(g);var I,P=no(N,D);w===ce?I=P[0]:w===we?I=P[P.length-1]:I=Do(N,D,g,b.offset),S(I)}else if(b.inlineTrigger)p(M);else if(b.offset>0)p(M,!0),s(),c.current=jn(function(){v=Ye(x,e);var rn=g.getAttribute("aria-controls"),q=document.getElementById(rn),dn=Do(q,v.elements);S(dn)},5);else if(b.offset<0){var T=i(M,!0),U=T[T.length-2],J=C.get(U);p(U,!1),S(J)}}l==null||l(f)}}function Ar(n){Promise.resolve().then(n)}var eo="__RC_UTIL_PATH_SPLIT__",Eo=function(o){return o.join(eo)},Lr=function(o){return o.split(eo)},qe="rc-menu-more";function Tr(){var n=d.useState({}),o=G(n,2),r=o[1],e=d.useRef(new Map),t=d.useRef(new Map),a=d.useState([]),i=G(a,2),u=i[0],p=i[1],l=d.useRef(0),c=d.useRef(!1),m=function(){c.current||r({})},s=d.useCallback(function(C,y){var h=Eo(y);t.current.set(h,C),e.current.set(C,h),l.current+=1;var g=l.current;Ar(function(){g===l.current&&m()})},[]),f=d.useCallback(function(C,y){var h=Eo(y);t.current.delete(h),e.current.delete(C)},[]),w=d.useCallback(function(C){p(C)},[]),x=d.useCallback(function(C,y){var h=e.current.get(C)||"",g=Lr(h);return y&&u.includes(g[0])&&g.unshift(qe),g},[u]),v=d.useCallback(function(C,y){return C.filter(function(h){return h!==void 0}).some(function(h){var g=x(h,!0);return g.includes(y)})},[x]),O=function(){var y=Hn(e.current.keys());return u.length&&y.push(qe),y},D=d.useCallback(function(C){var y="".concat(e.current.get(C)).concat(eo),h=new Set;return Hn(t.current.keys()).forEach(function(g){g.startsWith(y)&&h.add(t.current.get(g))}),h},[]);return d.useEffect(function(){return function(){c.current=!0}},[]),{registerPath:s,unregisterPath:f,refreshOverflowKeys:w,isSubPathKey:v,getKeyPath:x,getKeys:O,getSubPathKeys:D}}function _e(n){var o=d.useRef(n);o.current=n;var r=d.useCallback(function(){for(var e,t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(e=o.current)===null||e===void 0?void 0:e.call.apply(e,[o].concat(a))},[]);return n?r:void 0}var Kr=Math.random().toFixed(5).toString().slice(2),Oo=0;function Vr(n){var o=ve(n,{value:n}),r=G(o,2),e=r[0],t=r[1];return d.useEffect(function(){Oo+=1;var a="".concat(Kr,"-").concat(Oo);t("rc-menu-uuid-".concat(a))},[]),e}function Zo(n,o,r,e){var t=d.useContext(Dn),a=t.activeKey,i=t.onActive,u=t.onInactive,p={active:a===n};return o||(p.onMouseEnter=function(l){r==null||r({key:n,domEvent:l}),i(n)},p.onMouseLeave=function(l){e==null||e({key:n,domEvent:l}),u(n)}),p}function nt(n){var o=d.useContext(Dn),r=o.mode,e=o.rtl,t=o.inlineIndent;if(r!=="inline")return null;var a=n;return e?{paddingRight:a*t}:{paddingLeft:a*t}}function et(n){var o=n.icon,r=n.props,e=n.children,t;return o===null||o===!1?null:(typeof o=="function"?t=d.createElement(o,L({},r)):typeof o!="boolean"&&(t=o),t||e||null)}var Wr=["item"];function ze(n){var o=n.item,r=en(n,Wr);return Object.defineProperty(r,"item",{get:function(){return Qe(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),o}}),r}var Fr=["title","attribute","elementRef"],Ur=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],jr=["active"],Hr=function(n){Go(r,n);var o=Po(r);function r(){return $o(this,r),o.apply(this,arguments)}return Ao(r,[{key:"render",value:function(){var t=this.props,a=t.title,i=t.attribute,u=t.elementRef,p=en(t,Fr),l=Me(p,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Qe(!i,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),d.createElement(Rn.Item,A({},i,{title:typeof a=="string"?a:void 0},l,{ref:u}))}}]),r}(d.Component),Br=d.forwardRef(function(n,o){var r=n.style,e=n.className,t=n.eventKey;n.warnKey;var a=n.disabled,i=n.itemIcon,u=n.children,p=n.role,l=n.onMouseEnter,c=n.onMouseLeave,m=n.onClick,s=n.onKeyDown,f=n.onFocus,w=en(n,Ur),x=Yo(t),v=d.useContext(Dn),O=v.prefixCls,D=v.onItemClick,C=v.disabled,y=v.overflowDisabled,h=v.itemIcon,g=v.selectedKeys,M=v.onActive,b=d.useContext(Ze),S=b._internalRenderMenuItem,N="".concat(O,"-item"),I=d.useRef(),P=d.useRef(),T=C||a,U=Tt(o,P),J=be(t),rn=function(V){return{key:t,keyPath:Hn(J).reverse(),item:I.current,domEvent:V}},q=i||h,dn=Zo(t,T,l,c),on=dn.active,an=en(dn,jr),sn=g.includes(t),gn=nt(J.length),hn=function(V){if(!T){var cn=rn(V);m==null||m(ze(cn)),D(cn)}},X=function(V){if(s==null||s(V),V.which===fn.ENTER){var cn=rn(V);m==null||m(ze(cn)),D(cn)}},j=function(V){M(t),f==null||f(V)},bn={};n.role==="option"&&(bn["aria-selected"]=sn);var ln=d.createElement(Hr,A({ref:I,elementRef:U,role:p===null?"none":p||"menuitem",tabIndex:a?null:-1,"data-menu-id":y&&x?null:x},Me(w,["extra"]),an,bn,{component:"li","aria-disabled":a,style:L(L({},gn),r),className:R(N,z(z(z({},"".concat(N,"-active"),on),"".concat(N,"-selected"),sn),"".concat(N,"-disabled"),T),e),onClick:hn,onKeyDown:X,onFocus:j}),u,d.createElement(et,{props:L(L({},n),{},{isSelected:sn}),icon:q}));return S&&(ln=S(ln,n,{selected:sn})),ln});function Yr(n,o){var r=n.eventKey,e=Ne(),t=be(r);return d.useEffect(function(){if(e)return e.registerPath(r,t),function(){e.unregisterPath(r,t)}},[t]),e?null:d.createElement(Br,A({},n,{ref:o}))}const oo=d.forwardRef(Yr);var qr=["className","children"],Xr=function(o,r){var e=o.className,t=o.children,a=en(o,qr),i=d.useContext(Dn),u=i.prefixCls,p=i.mode,l=i.rtl;return d.createElement("ul",A({className:R(u,l&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(p==="inline"?"inline":"vertical"),e),role:"menu"},a,{"data-menu-list":!0,ref:r}),t)},to=d.forwardRef(Xr);to.displayName="SubMenuList";function ro(n,o){return Kt(n).map(function(r,e){if(d.isValidElement(r)){var t,a,i=r.key,u=(t=(a=r.props)===null||a===void 0?void 0:a.eventKey)!==null&&t!==void 0?t:i,p=u==null;p&&(u="tmp_key-".concat([].concat(Hn(o),[e]).join("-")));var l={key:u,eventKey:u};return d.cloneElement(r,l)}return r})}var un={adjustX:1,adjustY:1},Qr={topLeft:{points:["bl","tl"],overflow:un},topRight:{points:["br","tr"],overflow:un},bottomLeft:{points:["tl","bl"],overflow:un},bottomRight:{points:["tr","br"],overflow:un},leftTop:{points:["tr","tl"],overflow:un},leftBottom:{points:["br","bl"],overflow:un},rightTop:{points:["tl","tr"],overflow:un},rightBottom:{points:["bl","br"],overflow:un}},Jr={topLeft:{points:["bl","tl"],overflow:un},topRight:{points:["br","tr"],overflow:un},bottomLeft:{points:["tl","bl"],overflow:un},bottomRight:{points:["tr","br"],overflow:un},rightTop:{points:["tr","tl"],overflow:un},rightBottom:{points:["br","bl"],overflow:un},leftTop:{points:["tl","tr"],overflow:un},leftBottom:{points:["bl","br"],overflow:un}};function ot(n,o,r){if(o)return o;if(r)return r[n]||r.other}var Zr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function nd(n){var o=n.prefixCls,r=n.visible,e=n.children,t=n.popup,a=n.popupStyle,i=n.popupClassName,u=n.popupOffset,p=n.disabled,l=n.mode,c=n.onVisibleChange,m=d.useContext(Dn),s=m.getPopupContainer,f=m.rtl,w=m.subMenuOpenDelay,x=m.subMenuCloseDelay,v=m.builtinPlacements,O=m.triggerSubMenuAction,D=m.forceSubMenuRender,C=m.rootClassName,y=m.motion,h=m.defaultMotions,g=d.useState(!1),M=G(g,2),b=M[0],S=M[1],N=f?L(L({},Jr),v):L(L({},Qr),v),I=Zr[l],P=ot(l,y,h),T=d.useRef(P);l!=="inline"&&(T.current=P);var U=L(L({},T.current),{},{leavedClassName:"".concat(o,"-hidden"),removeOnLeave:!1,motionAppear:!0}),J=d.useRef();return d.useEffect(function(){return J.current=jn(function(){S(r)}),function(){jn.cancel(J.current)}},[r]),d.createElement(Mo,{prefixCls:o,popupClassName:R("".concat(o,"-popup"),z({},"".concat(o,"-rtl"),f),i,C),stretch:l==="horizontal"?"minWidth":null,getPopupContainer:s,builtinPlacements:N,popupPlacement:I,popupVisible:b,popup:t,popupStyle:a,popupAlign:u&&{offset:u},action:p?[]:[O],mouseEnterDelay:w,mouseLeaveDelay:x,onPopupVisibleChange:c,forceRender:D,popupMotion:U,fresh:!0},e)}function ed(n){var o=n.id,r=n.open,e=n.keyPath,t=n.children,a="inline",i=d.useContext(Dn),u=i.prefixCls,p=i.forceSubMenuRender,l=i.motion,c=i.defaultMotions,m=i.mode,s=d.useRef(!1);s.current=m===a;var f=d.useState(!s.current),w=G(f,2),x=w[0],v=w[1],O=s.current?r:!1;d.useEffect(function(){s.current&&v(!1)},[m]);var D=L({},ot(a,l,c));e.length>1&&(D.motionAppear=!1);var C=D.onVisibleChanged;return D.onVisibleChanged=function(y){return!s.current&&!y&&v(!0),C==null?void 0:C(y)},x?null:d.createElement(fe,{mode:a,locked:!s.current},d.createElement(Vt,A({visible:O},D,{forceRender:p,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(y){var h=y.className,g=y.style;return d.createElement(to,{id:o,className:h,style:g},t)}))}var od=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],td=["active"],rd=d.forwardRef(function(n,o){var r=n.style,e=n.className,t=n.title,a=n.eventKey;n.warnKey;var i=n.disabled,u=n.internalPopupClose,p=n.children,l=n.itemIcon,c=n.expandIcon,m=n.popupClassName,s=n.popupOffset,f=n.popupStyle,w=n.onClick,x=n.onMouseEnter,v=n.onMouseLeave,O=n.onTitleClick,D=n.onTitleMouseEnter,C=n.onTitleMouseLeave,y=en(n,od),h=Yo(a),g=d.useContext(Dn),M=g.prefixCls,b=g.mode,S=g.openKeys,N=g.disabled,I=g.overflowDisabled,P=g.activeKey,T=g.selectedKeys,U=g.itemIcon,J=g.expandIcon,rn=g.onItemClick,q=g.onOpenChange,dn=g.onActive,on=d.useContext(Ze),an=on._internalRenderSubMenuItem,sn=d.useContext(Qo),gn=sn.isSubPathKey,hn=be(),X="".concat(M,"-submenu"),j=N||i,bn=d.useRef(),ln=d.useRef(),H=l??U,V=c??J,cn=S.includes(a),yn=!I&&cn,Tn=gn(T,a),zn=Zo(a,j,D,C),Sn=zn.active,Kn=en(zn,td),Yn=d.useState(!1),kn=G(Yn,2),Mn=kn[0],qn=kn[1],Vn=function(nn){j||qn(nn)},Nn=function(nn){Vn(!0),x==null||x({key:a,domEvent:nn})},Xn=function(nn){Vn(!1),v==null||v({key:a,domEvent:nn})},tn=d.useMemo(function(){return Sn||(b!=="inline"?Mn||gn([P],a):!1)},[b,Sn,P,Mn,a,gn]),ae=nt(hn.length),Qn=function(nn){j||(O==null||O({key:a,domEvent:nn}),b==="inline"&&q(a,!cn))},Jn=_e(function(pn){w==null||w(ze(pn)),rn(pn)}),Zn=function(nn){b!=="inline"&&q(a,nn)},Gn=function(){dn(a)},Cn=h&&"".concat(h,"-popup"),En=d.useMemo(function(){return d.createElement(et,{icon:b!=="horizontal"?V:void 0,props:L(L({},n),{},{isOpen:yn,isSubMenu:!0})},d.createElement("i",{className:"".concat(X,"-arrow")}))},[b,V,n,yn,X]),Z=d.createElement("div",A({role:"menuitem",style:ae,className:"".concat(X,"-title"),tabIndex:j?null:-1,ref:bn,title:typeof t=="string"?t:null,"data-menu-id":I&&h?null:h,"aria-expanded":yn,"aria-haspopup":!0,"aria-controls":Cn,"aria-disabled":j,onClick:Qn,onFocus:Gn},Kn),t,En),Pn=d.useRef(b);if(b!=="inline"&&hn.length>1?Pn.current="vertical":Pn.current=b,!I){var $n=Pn.current;Z=d.createElement(nd,{mode:$n,prefixCls:X,visible:!u&&yn&&b!=="inline",popupClassName:m,popupOffset:s,popupStyle:f,popup:d.createElement(fe,{mode:$n==="horizontal"?"vertical":$n},d.createElement(to,{id:Cn,ref:ln},p)),disabled:j,onVisibleChange:Zn},Z)}var B=d.createElement(Rn.Item,A({ref:o,role:"none"},y,{component:"li",style:r,className:R(X,"".concat(X,"-").concat(b),e,z(z(z(z({},"".concat(X,"-open"),yn),"".concat(X,"-active"),tn),"".concat(X,"-selected"),Tn),"".concat(X,"-disabled"),j)),onMouseEnter:Nn,onMouseLeave:Xn}),Z,!I&&d.createElement(ed,{id:Cn,open:yn,keyPath:hn},p));return an&&(B=an(B,n,{selected:Tn,active:tn,open:yn,disabled:j})),d.createElement(fe,{onItemClick:Jn,mode:b==="horizontal"?"vertical":b,itemIcon:H,expandIcon:V},B)}),ao=d.forwardRef(function(n,o){var r=n.eventKey,e=n.children,t=be(r),a=ro(e,t),i=Ne();d.useEffect(function(){if(i)return i.registerPath(r,t),function(){i.unregisterPath(r,t)}},[t]);var u;return i?u=a:u=d.createElement(rd,A({ref:o},n),a),d.createElement(Xo.Provider,{value:t},u)});function tt(n){var o=n.className,r=n.style,e=d.useContext(Dn),t=e.prefixCls,a=Ne();return a?null:d.createElement("li",{role:"separator",className:R("".concat(t,"-item-divider"),o),style:r})}var dd=["className","title","eventKey","children"],ad=d.forwardRef(function(n,o){var r=n.className,e=n.title;n.eventKey;var t=n.children,a=en(n,dd),i=d.useContext(Dn),u=i.prefixCls,p="".concat(u,"-item-group");return d.createElement("li",A({ref:o,role:"presentation"},a,{onClick:function(c){return c.stopPropagation()},className:R(p,r)}),d.createElement("div",{role:"presentation",className:"".concat(p,"-title"),title:typeof e=="string"?e:void 0},e),d.createElement("ul",{role:"group",className:"".concat(p,"-list")},t))}),rt=d.forwardRef(function(n,o){var r=n.eventKey,e=n.children,t=be(r),a=ro(e,t),i=Ne();return i?a:d.createElement(ad,A({ref:o},Me(n,["warnKey"])),a)}),id=["label","children","key","type","extra"];function Xe(n,o,r){var e=o.item,t=o.group,a=o.submenu,i=o.divider;return(n||[]).map(function(u,p){if(u&&Ue(u)==="object"){var l=u,c=l.label,m=l.children,s=l.key,f=l.type,w=l.extra,x=en(l,id),v=s??"tmp-".concat(p);return m||f==="group"?f==="group"?d.createElement(t,A({key:v},x,{title:c}),Xe(m,o,r)):d.createElement(a,A({key:v},x,{title:c}),Xe(m,o,r)):f==="divider"?d.createElement(i,A({key:v},x)):d.createElement(e,A({key:v},x,{extra:w}),c,(!!w||w===0)&&d.createElement("span",{className:"".concat(r,"-item-extra")},w))}return null}).filter(function(u){return u})}function Io(n,o,r,e,t){var a=n,i=L({divider:tt,item:oo,group:rt,submenu:ao},e);return o&&(a=Xe(o,i,t)),ro(a,r)}var ud=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem","_internalComponents"],Un=[],ld=d.forwardRef(function(n,o){var r,e=n,t=e.prefixCls,a=t===void 0?"rc-menu":t,i=e.rootClassName,u=e.style,p=e.className,l=e.tabIndex,c=l===void 0?0:l,m=e.items,s=e.children,f=e.direction,w=e.id,x=e.mode,v=x===void 0?"vertical":x,O=e.inlineCollapsed,D=e.disabled,C=e.disabledOverflow,y=e.subMenuOpenDelay,h=y===void 0?.1:y,g=e.subMenuCloseDelay,M=g===void 0?.1:g,b=e.forceSubMenuRender,S=e.defaultOpenKeys,N=e.openKeys,I=e.activeKey,P=e.defaultActiveFirst,T=e.selectable,U=T===void 0?!0:T,J=e.multiple,rn=J===void 0?!1:J,q=e.defaultSelectedKeys,dn=e.selectedKeys,on=e.onSelect,an=e.onDeselect,sn=e.inlineIndent,gn=sn===void 0?24:sn,hn=e.motion,X=e.defaultMotions,j=e.triggerSubMenuAction,bn=j===void 0?"hover":j,ln=e.builtinPlacements,H=e.itemIcon,V=e.expandIcon,cn=e.overflowedIndicator,yn=cn===void 0?"...":cn,Tn=e.overflowedIndicatorPopupClassName,zn=e.getPopupContainer,Sn=e.onClick,Kn=e.onOpenChange,Yn=e.onKeyDown;e.openAnimation,e.openTransitionName;var kn=e._internalRenderMenuItem,Mn=e._internalRenderSubMenuItem,qn=e._internalComponents,Vn=en(e,ud),Nn=d.useMemo(function(){return[Io(s,m,Un,qn,a),Io(s,m,Un,{},a)]},[s,m,qn]),Xn=G(Nn,2),tn=Xn[0],ae=Xn[1],Qn=d.useState(!1),Jn=G(Qn,2),Zn=Jn[0],Gn=Jn[1],Cn=d.useRef(),En=Vr(w),Z=f==="rtl",Pn=ve(S,{value:N,postState:function($){return $||Un}}),$n=G(Pn,2),B=$n[0],pn=$n[1],nn=function($){var K=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function _n(){pn($),Kn==null||Kn($)}K?Ko.flushSync(_n):_n()},Ge=d.useState(B),Wn=G(Ge,2),Pe=Wn[0],ge=Wn[1],ie=d.useRef(!1),$e=d.useMemo(function(){return(v==="inline"||v==="vertical")&&O?["vertical",O]:[v,!1]},[v,O]),he=G($e,2),An=he[0],ne=he[1],ue=An==="inline",Ln=d.useState(An),ye=G(Ln,2),xn=ye[0],le=ye[1],Ae=d.useState(ne),pe=G(Ae,2),E=pe[0],k=pe[1];d.useEffect(function(){le(An),k(ne),ie.current&&(ue?pn(Pe):nn(Un))},[An,ne]);var Y=d.useState(0),wn=G(Y,2),On=wn[0],_t=wn[1],Le=On>=tn.length-1||xn!=="horizontal"||C;d.useEffect(function(){ue&&ge(B)},[B]),d.useEffect(function(){return ie.current=!0,function(){ie.current=!1}},[]);var Fn=Tr(),uo=Fn.registerPath,lo=Fn.unregisterPath,vt=Fn.refreshOverflowKeys,po=Fn.isSubPathKey,ft=Fn.getKeyPath,mo=Fn.getKeys,bt=Fn.getSubPathKeys,gt=d.useMemo(function(){return{registerPath:uo,unregisterPath:lo}},[uo,lo]),ht=d.useMemo(function(){return{isSubPathKey:po}},[po]);d.useEffect(function(){vt(Le?Un:tn.slice(On+1).map(function(W){return W.key}))},[On,Le]);var yt=ve(I||P&&((r=tn[0])===null||r===void 0?void 0:r.key),{value:I}),so=G(yt,2),me=so[0],Te=so[1],Ct=_e(function(W){Te(W)}),xt=_e(function(){Te(void 0)});d.useImperativeHandle(o,function(){return{list:Cn.current,focus:function($){var K,_n=mo(),vn=Ye(_n,En),xe=vn.elements,Ke=vn.key2element,Nt=vn.element2key,_o=no(Cn.current,xe),vo=me??(_o[0]?Nt.get(_o[0]):(K=tn.find(function(Gt){return!Gt.props.disabled}))===null||K===void 0?void 0:K.key),se=Ke.get(vo);if(vo&&se){var Ve;se==null||(Ve=se.focus)===null||Ve===void 0||Ve.call(se,$)}}}});var Dt=ve(q||[],{value:dn,postState:function($){return Array.isArray($)?$:$==null?Un:[$]}}),co=G(Dt,2),Ce=co[0],Et=co[1],Ot=function($){if(U){var K=$.key,_n=Ce.includes(K),vn;rn?_n?vn=Ce.filter(function(Ke){return Ke!==K}):vn=[].concat(Hn(Ce),[K]):vn=[K],Et(vn);var xe=L(L({},$),{},{selectedKeys:vn});_n?an==null||an(xe):on==null||on(xe)}!rn&&B.length&&xn!=="inline"&&nn(Un)},It=_e(function(W){Sn==null||Sn(ze(W)),Ot(W)}),wo=_e(function(W,$){var K=B.filter(function(vn){return vn!==W});if($)K.push(W);else if(xn!=="inline"){var _n=bt(W);K=K.filter(function(vn){return!_n.has(vn)})}jo(B,K,!0)||nn(K,!0)}),zt=function($,K){var _n=K??!B.includes($);wo($,_n)},St=$r(xn,me,Z,En,Cn,mo,ft,Te,zt,Yn);d.useEffect(function(){Gn(!0)},[]);var kt=d.useMemo(function(){return{_internalRenderMenuItem:kn,_internalRenderSubMenuItem:Mn}},[kn,Mn]),Rt=xn!=="horizontal"||C?tn:tn.map(function(W,$){return d.createElement(fe,{key:W.key,overflowDisabled:$>On},W)}),Mt=d.createElement(Rn,A({id:w,ref:Cn,prefixCls:"".concat(a,"-overflow"),component:"ul",itemComponent:oo,className:R(a,"".concat(a,"-root"),"".concat(a,"-").concat(xn),p,z(z({},"".concat(a,"-inline-collapsed"),E),"".concat(a,"-rtl"),Z),i),dir:f,style:u,role:"menu",tabIndex:c,data:Rt,renderRawItem:function($){return $},renderRawRest:function($){var K=$.length,_n=K?tn.slice(-K):null;return d.createElement(ao,{eventKey:qe,title:yn,disabled:Le,internalPopupClose:K===0,popupClassName:Tn},_n)},maxCount:xn!=="horizontal"||C?Rn.INVALIDATE:Rn.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function($){_t($)},onKeyDown:St},Vn));return d.createElement(Ze.Provider,{value:kt},d.createElement(Ho.Provider,{value:En},d.createElement(fe,{prefixCls:a,rootClassName:i,mode:xn,openKeys:B,rtl:Z,disabled:D,motion:Zn?hn:null,defaultMotions:Zn?X:null,activeKey:me,onActive:Ct,onInactive:xt,selectedKeys:Ce,inlineIndent:gn,subMenuOpenDelay:h,subMenuCloseDelay:M,forceSubMenuRender:b,builtinPlacements:ln,triggerSubMenuAction:bn,getPopupContainer:zn,itemIcon:H,expandIcon:V,onItemClick:It,onOpenChange:wo},d.createElement(Qo.Provider,{value:ht},Mt),d.createElement("div",{style:{display:"none"},"aria-hidden":!0},d.createElement(qo.Provider,{value:gt},ae)))))}),Bn=ld;Bn.Item=oo;Bn.SubMenu=ao;Bn.ItemGroup=rt;Bn.Divider=tt;var pd=`.Dropdown-module__h1___4uywN6-387-4 {
  font-family: var(--text--h1--font-family);
  font-size: var(--text--h1--font-size);
  font-style: var(--text--h1--font-style);
  font-weight: var(--text--h1--font-weight);
  letter-spacing: var(--text--h1--letter-spacing);
  line-height: var(--text--h1--line-height);
}

.Dropdown-module__h2___qlxmd6-387-4 {
  font-family: var(--text--h2--font-family);
  font-size: var(--text--h2--font-size);
  font-style: var(--text--h2--font-style);
  font-weight: var(--text--h2--font-weight);
  letter-spacing: var(--text--h2--letter-spacing);
  line-height: var(--text--h2--line-height);
}

h3 {
  font-family: var(--text--h3--font-family);
  font-size: var(--text--h3--font-size);
  font-style: var(--text--h3--font-style);
  font-weight: var(--text--h3--font-weight);
  letter-spacing: var(--text--h3--letter-spacing);
  line-height: var(--text--h3--line-height);
}

.Dropdown-module__h4___6R0CS6-387-4 {
  font-family: var(--text--h4--font-family);
  font-size: var(--text--h4--font-size);
  font-style: var(--text--h4--font-style);
  font-weight: var(--text--h4--font-weight);
  letter-spacing: var(--text--h4--letter-spacing);
  line-height: var(--text--h4--line-height);
}

.Dropdown-module__h5___cS9tl6-387-4 {
  font-family: var(--text--h5--font-family);
  font-size: var(--text--h5--font-size);
  font-style: var(--text--h5--font-style);
  font-weight: var(--text--h5--font-weight);
  letter-spacing: var(--text--h5--letter-spacing);
  line-height: var(--text--h5--line-height);
}

.Dropdown-module__h6___xYrlo6-387-4 {
  font-family: var(--text--h6--font-family);
  font-size: var(--text--h6--font-size);
  font-style: var(--text--h6--font-style);
  font-weight: var(--text--h6--font-weight);
  letter-spacing: var(--text--h6--letter-spacing);
  line-height: var(--text--h6--line-height);
}

.Dropdown-module__btr2___heEJ36-387-4 {
  font-family: var(--text--btr2--font-family);
  font-size: var(--text--btr2--font-size);
  font-style: var(--text--btr2--font-style);
  font-weight: var(--text--btr2--font-weight);
  letter-spacing: var(--text--btr2--letter-spacing);
  line-height: var(--text--btr2--line-height);
}

.Dropdown-module__btr3___J1qCx6-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownInnerActions___oZBU96-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownInnerActions___oZBU96-387-4, .Dropdown-module__dropdownItemInner___3UJwe6-387-4 .Dropdown-module__block___n2riW6-387-4 .Dropdown-module__textWrapper___L3wmp6-387-4 .Dropdown-module__text___1mMjX6-387-4 {
  font-family: var(--text--btr3--font-family);
  font-size: var(--text--btr3--font-size);
  font-style: var(--text--btr3--font-style);
  font-weight: var(--text--btr3--font-weight);
  letter-spacing: var(--text--btr3--letter-spacing);
  line-height: var(--text--btr3--line-height);
}

.Dropdown-module__btr4___y6jau6-387-4, .Dropdown-module__dropdownItemInner___3UJwe6-387-4 .Dropdown-module__block___n2riW6-387-4 .Dropdown-module__textWrapper___L3wmp6-387-4 .Dropdown-module__description___0YALE6-387-4 {
  font-family: var(--text--btr4--font-family);
  font-size: var(--text--btr4--font-size);
  font-style: var(--text--btr4--font-style);
  font-weight: var(--text--btr4--font-weight);
  letter-spacing: var(--text--btr4--letter-spacing);
  line-height: var(--text--btr4--line-height);
}

.Dropdown-module__btr5___zO4-n6-387-4 {
  font-family: var(--text--btr5--font-family);
  font-size: var(--text--btr5--font-size);
  font-style: var(--text--btr5--font-style);
  font-weight: var(--text--btr5--font-weight);
  letter-spacing: var(--text--btr5--letter-spacing);
  line-height: var(--text--btr5--line-height);
}

.Dropdown-module__btm2___e7BsN6-387-4 {
  font-family: var(--text--btm2--font-family);
  font-size: var(--text--btm2--font-size);
  font-style: var(--text--btm2--font-style);
  font-weight: var(--text--btm2--font-weight);
  letter-spacing: var(--text--btm2--letter-spacing);
  line-height: var(--text--btm2--line-height);
}

.Dropdown-module__btm3___ddPly6-387-4 {
  font-family: var(--text--btm3--font-family);
  font-size: var(--text--btm3--font-size);
  font-style: var(--text--btm3--font-style);
  font-weight: var(--text--btm3--font-weight);
  letter-spacing: var(--text--btm3--letter-spacing);
  line-height: var(--text--btm3--line-height);
}

.Dropdown-module__btm4___jaOUq6-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu > li.Dropdown-module__dropdownGroupTitle___LQWQX6-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu > li.Dropdown-module__dropdownGroupTitle___LQWQX6-387-4 {
  font-family: var(--text--btm4--font-family);
  font-size: var(--text--btm4--font-size);
  font-style: var(--text--btm4--font-style);
  font-weight: var(--text--btm4--font-weight);
  letter-spacing: var(--text--btm4--letter-spacing);
  line-height: var(--text--btm4--line-height);
}

.Dropdown-module__btm5___87QCB6-387-4 {
  font-family: var(--text--btm5--font-family);
  font-size: var(--text--btm5--font-size);
  font-style: var(--text--btm5--font-style);
  font-weight: var(--text--btm5--font-weight);
  letter-spacing: var(--text--btm5--letter-spacing);
  line-height: var(--text--btm5--line-height);
}

.Dropdown-module__mtr3___xEyYg6-387-4 {
  font-family: var(--text--mtr3--font-family);
  font-size: var(--text--mtr3--font-size);
  font-style: var(--text--mtr3--font-style);
  font-weight: var(--text--mtr3--font-weight);
  letter-spacing: var(--text--mtr3--letter-spacing);
  line-height: var(--text--mtr3--line-height);
}

.Dropdown-module__mtr4___Hd2506-387-4 {
  font-family: var(--text--mtr4--font-family);
  font-size: var(--text--mtr4--font-size);
  font-style: var(--text--mtr4--font-style);
  font-weight: var(--text--mtr4--font-weight);
  letter-spacing: var(--text--mtr4--letter-spacing);
  line-height: var(--text--mtr4--line-height);
}

/** Copied from rc-dropdown/assets/index.css */
@font-face {
  font-family: "anticon";
  src: url("//at.alicdn.com/t/font_1434092639_4910953.eot");
  /* IE9*/
  src: url("//at.alicdn.com/t/font_1434092639_4910953.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_1434092639_4910953.woff") format("woff"), url("//at.alicdn.com/t/font_1434092639_4910953.ttf") format("truetype"), url("//at.alicdn.com/t/font_1434092639_4910953.svg#iconfont") format("svg");
  /* iOS 4.1- */
}
.ant-dropdown {
  position: absolute;
  left: -9999px;
  top: -9999px;
  z-index: 1070;
  display: block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 1.5;
}

.ant-dropdown-hidden {
  display: none;
}

.ant-dropdown .ant-dropdown-menu {
  outline: none;
  position: relative;
  list-style-type: none;
  padding: 0;
  margin: 2px 0 2px;
  text-align: left;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 5px #ccc;
  background-clip: padding-box;
  border: 1px solid #ccc;
}

.ant-dropdown .ant-dropdown-menu > li {
  margin: 0;
}

.ant-dropdown .ant-dropdown-menu:before {
  content: "";
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 4px;
  background: #ffffff;
  background: rgba(255, 255, 255, 0.01);
}

.ant-dropdown .ant-dropdown-menu > .ant-dropdown .ant-dropdown-menu-item {
  position: relative;
  display: block;
  padding: 7px 10px;
  clear: both;
  font-size: 12px;
  font-weight: normal;
  color: #666666;
  white-space: nowrap;
}

.ant-dropdown .ant-dropdown-menu > .ant-dropdown .ant-dropdown-menu-item:hover,
.ant-dropdown .ant-dropdown-menu > .ant-dropdown .ant-dropdown-menu-item-active,
.ant-dropdown .ant-dropdown-menu > .ant-dropdown .ant-dropdown-menu-item-selected {
  background-color: #ebfaff;
}

.ant-dropdown .ant-dropdown-menu > .ant-dropdown .ant-dropdown-menu-item-selected {
  position: relative;
}

.ant-dropdown .ant-dropdown-menu > .ant-dropdown .ant-dropdown-menu-item-selected:after {
  content: "\\e613";
  font-family: "anticon";
  font-weight: bold;
  position: absolute;
  top: 6px;
  right: 16px;
  color: #3CB8F0;
}

.ant-dropdown .ant-dropdown-menu > .ant-dropdown .ant-dropdown-menu-item-disabled {
  color: #ccc;
  cursor: not-allowed;
  pointer-events: none;
}

.ant-dropdown .ant-dropdown-menu > .ant-dropdown .ant-dropdown-menu-item-disabled:hover {
  color: #ccc;
  background-color: #fff;
  cursor: not-allowed;
}

.ant-dropdown .ant-dropdown-menu > .ant-dropdown .ant-dropdown-menu-item:last-child {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

.ant-dropdown .ant-dropdown-menu > .ant-dropdown .ant-dropdown-menu-item:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.ant-dropdown .ant-dropdown-menu > .ant-dropdown .ant-dropdown-menu-item-divider {
  height: 1px;
  margin: 1px 0;
  overflow: hidden;
  background-color: #e5e5e5;
  line-height: 0;
}

.ant-dropdown-slide-up-enter,
.ant-dropdown-slide-up-appear {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  display: block !important;
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  animation-play-state: paused;
}

.ant-dropdown-slide-up-leave {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  display: block !important;
  opacity: 1;
  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  animation-play-state: paused;
}

.ant-dropdown-slide-up-enter.ant-dropdown-slide-up-enter-active.ant-dropdown-placement-bottomLeft,
.ant-dropdown-slide-up-appear.ant-dropdown-slide-up-appear-active.ant-dropdown-placement-bottomLeft,
.ant-dropdown-slide-up-enter.ant-dropdown-slide-up-enter-active.ant-dropdown-placement-bottomCenter,
.ant-dropdown-slide-up-appear.ant-dropdown-slide-up-appear-active.ant-dropdown-placement-bottomCenter,
.ant-dropdown-slide-up-enter.ant-dropdown-slide-up-enter-active.ant-dropdown-placement-bottomRight,
.ant-dropdown-slide-up-appear.ant-dropdown-slide-up-appear-active.ant-dropdown-placement-bottomRight {
  animation-name: Dropdown-module__rcDropdownSlideUpIn___SHeis6-387-4;
  animation-play-state: running;
}

.ant-dropdown-slide-up-enter.ant-dropdown-slide-up-enter-active.ant-dropdown-placement-topLeft,
.ant-dropdown-slide-up-appear.ant-dropdown-slide-up-appear-active.ant-dropdown-placement-topLeft,
.ant-dropdown-slide-up-enter.ant-dropdown-slide-up-enter-active.ant-dropdown-placement-topCenter,
.ant-dropdown-slide-up-appear.ant-dropdown-slide-up-appear-active.ant-dropdown-placement-topCenter,
.ant-dropdown-slide-up-enter.ant-dropdown-slide-up-enter-active.ant-dropdown-placement-topRight,
.ant-dropdown-slide-up-appear.ant-dropdown-slide-up-appear-active.ant-dropdown-placement-topRight {
  animation-name: Dropdown-module__rcDropdownSlideDownIn___uBMFT6-387-4;
  animation-play-state: running;
}

.ant-dropdown-slide-up-leave.ant-dropdown-slide-up-leave-active.ant-dropdown-placement-bottomLeft,
.ant-dropdown-slide-up-leave.ant-dropdown-slide-up-leave-active.ant-dropdown-placement-bottomCenter,
.ant-dropdown-slide-up-leave.ant-dropdown-slide-up-leave-active.ant-dropdown-placement-bottomRight {
  animation-name: Dropdown-module__rcDropdownSlideUpOut___UEoJ16-387-4;
  animation-play-state: running;
}

.ant-dropdown-slide-up-leave.ant-dropdown-slide-up-leave-active.ant-dropdown-placement-topLeft,
.ant-dropdown-slide-up-leave.ant-dropdown-slide-up-leave-active.ant-dropdown-placement-topCenter,
.ant-dropdown-slide-up-leave.ant-dropdown-slide-up-leave-active.ant-dropdown-placement-topRight {
  animation-name: Dropdown-module__rcDropdownSlideDownOut___Qgf9f6-387-4;
  animation-play-state: running;
}

@keyframes Dropdown-module__rcDropdownSlideUpIn___SHeis6-387-4 {
  0% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
  }
}
@keyframes Dropdown-module__rcDropdownSlideUpOut___UEoJ16-387-4 {
  0% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(0);
  }
}
@keyframes Dropdown-module__rcDropdownSlideDownIn___uBMFT6-387-4 {
  0% {
    opacity: 0;
    transform-origin: 0% 100%;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scaleY(1);
  }
}
@keyframes Dropdown-module__rcDropdownSlideDownOut___Qgf9f6-387-4 {
  0% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform-origin: 0% 100%;
    transform: scaleY(0);
  }
}
.ant-dropdown-arrow {
  position: absolute;
  border-width: 8px/2;
  border-color: transparent;
  box-shadow: 0 1px 5px #ccc;
  border-style: solid;
  transform: rotate(45deg);
}

.ant-dropdown-show-arrow.ant-dropdown-placement-top,
.ant-dropdown-show-arrow.ant-dropdown-placement-topLeft,
.ant-dropdown-show-arrow.ant-dropdown-placement-topRight {
  padding-bottom: 6px;
}

.ant-dropdown-show-arrow.ant-dropdown-placement-bottom,
.ant-dropdown-show-arrow.ant-dropdown-placement-bottomLeft,
.ant-dropdown-show-arrow.ant-dropdown-placement-bottomRight {
  padding-top: 6px;
}

.ant-dropdown-placement-top .ant-dropdown-arrow,
.ant-dropdown-placement-topLeft .ant-dropdown-arrow,
.ant-dropdown-placement-topRight .ant-dropdown-arrow {
  bottom: 4px;
  border-top-color: white;
}

.ant-dropdown-placement-top .ant-dropdown-arrow {
  left: 50%;
}

.ant-dropdown-placement-topLeft .ant-dropdown-arrow {
  left: 15%;
}

.ant-dropdown-placement-topRight .ant-dropdown-arrow {
  right: 15%;
}

.ant-dropdown-placement-bottom .ant-dropdown-arrow,
.ant-dropdown-placement-bottomLeft .ant-dropdown-arrow,
.ant-dropdown-placement-bottomRight .ant-dropdown-arrow {
  top: 4px;
  border-bottom-color: white;
}

.ant-dropdown-placement-bottom .ant-dropdown-arrow {
  left: 50%;
}

.ant-dropdown-placement-bottomLeft .ant-dropdown-arrow {
  left: 15%;
}

.ant-dropdown-placement-bottomRight .ant-dropdown-arrow {
  right: 15%;
}

/** Copied from rc-menu/assets/index.css */
@font-face {
  font-family: "FontAwesome";
  src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.eot");
  src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.eot?#iefix") format("embedded-opentype"), url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.woff") format("woff"), url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.ttf") format("truetype"), url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.svg?#fontawesomeregular") format("svg");
  font-weight: normal;
  font-style: normal;
}
.ant-dropdown-menu {
  outline: none;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  list-style: none;
  border: 1px solid #d9d9d9;
  box-shadow: 0 0 4px #d9d9d9;
  border-radius: 3px;
  color: #666;
}

.ant-dropdown-menu-rtl {
  direction: rtl;
}

.ant-dropdown-menu-hidden,
.ant-dropdown-menu-submenu-hidden {
  display: none;
}

.ant-dropdown-menu-collapse {
  overflow: hidden;
  transition: height 0.3s ease-out;
}

.ant-dropdown-menu-item-group-list {
  margin: 0;
  padding: 0;
}

.ant-dropdown-menu-item-group-title {
  color: #999;
  line-height: 1.5;
  padding: 8px 10px;
  border-bottom: 1px solid #dedede;
}

.ant-dropdown-menu-item-active,
.ant-dropdown-menu-submenu-active > .ant-dropdown-menu-submenu-title {
  background-color: #eaf8fe;
}

.ant-dropdown-menu-item-selected {
  background-color: #eaf8fe;
  transform: translateZ(0);
}

.ant-dropdown-menu-submenu-selected {
  background-color: #eaf8fe;
}

.ant-dropdown-menu > .ant-dropdown-menu-submenu {
  padding: 0;
}

.ant-dropdown-menu-horizontal.ant-dropdown-menu-sub,
.ant-dropdown-menu-vertical.ant-dropdown-menu-sub,
.ant-dropdown-menu-vertical-left.ant-dropdown-menu-sub,
.ant-dropdown-menu-vertical-right.ant-dropdown-menu-sub {
  min-width: 160px;
  margin-top: 0;
}

.ant-dropdown-menu-item,
.ant-dropdown-menu-submenu-title {
  margin: 0;
  position: relative;
  display: block;
  padding: 7px 7px 7px 16px;
  white-space: nowrap;
}

.ant-dropdown-menu-rtl .ant-dropdown-menu-item,
.ant-dropdown-menu-rtl .ant-dropdown-menu-submenu-title {
  padding: 7px 16px 7px 7px;
}

.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled,
.ant-dropdown-menu-submenu-title.ant-dropdown-menu-item-disabled,
.ant-dropdown-menu-item.ant-dropdown-menu-submenu-disabled,
.ant-dropdown-menu-submenu-title.ant-dropdown-menu-submenu-disabled {
  color: #777;
}

.ant-dropdown-menu-item {
  display: flex;
  align-items: center;
}

.ant-dropdown-menu-item .ant-dropdown-menu-item-extra {
  margin-left: auto;
  font-size: 14px;
}

.ant-dropdown-menu-item-divider {
  height: 1px;
  margin: 1px 0;
  overflow: hidden;
  padding: 0;
  line-height: 0;
  background-color: #e5e5e5;
}

.ant-dropdown-menu-submenu-popup {
  position: absolute;
}

.ant-dropdown-menu-submenu-popup .submenu-title-wrapper {
  padding-right: 20px;
}

.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-submenu-popup .submenu-title-wrapper,
.ant-dropdown-menu-submenu-rtl .ant-dropdown-menu-submenu-popup .submenu-title-wrapper {
  padding-right: 0;
  padding-left: 20px;
}

.ant-dropdown-menu > .ant-dropdown-menu-submenu > .ant-dropdown-menu {
  background-color: #fff;
}

.ant-dropdown-menu .ant-dropdown-menu-submenu-title .anticon,
.ant-dropdown-menu .ant-dropdown-menu-item .anticon {
  width: 14px;
  height: 14px;
  margin-right: 8px;
  top: -1px;
}

.ant-dropdown-menu-rtl .ant-dropdown-menu .ant-dropdown-menu-submenu-title .anticon,
.ant-dropdown-menu-rtl .ant-dropdown-menu .ant-dropdown-menu-item .anticon {
  margin-right: 0;
  margin-left: 8px;
}

.ant-dropdown-menu-horizontal {
  background-color: #f3f5f7;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  box-shadow: none;
  white-space: nowrap;
  overflow: hidden;
}

.ant-dropdown-menu-horizontal > .ant-dropdown-menu-item,
.ant-dropdown-menu-horizontal > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title {
  padding: 15px 20px;
}

.ant-dropdown-menu-horizontal > .ant-dropdown-menu-submenu,
.ant-dropdown-menu-horizontal > .ant-dropdown-menu-item {
  border-bottom: 2px solid transparent;
  display: inline-block;
  vertical-align: bottom;
}

.ant-dropdown-menu-horizontal > .ant-dropdown-menu-submenu-active,
.ant-dropdown-menu-horizontal > .ant-dropdown-menu-item-active {
  border-bottom: 2px solid #2db7f5;
  background-color: #f3f5f7;
  color: #2baee9;
}

.ant-dropdown-menu-horizontal:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
}

.ant-dropdown-menu-vertical,
.ant-dropdown-menu-vertical-left,
.ant-dropdown-menu-vertical-right,
.ant-dropdown-menu-inline {
  padding: 12px 0;
}

.ant-dropdown-menu-vertical > .ant-dropdown-menu-item,
.ant-dropdown-menu-vertical-left > .ant-dropdown-menu-item,
.ant-dropdown-menu-vertical-right > .ant-dropdown-menu-item,
.ant-dropdown-menu-inline > .ant-dropdown-menu-item,
.ant-dropdown-menu-vertical > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title,
.ant-dropdown-menu-vertical-left > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title,
.ant-dropdown-menu-vertical-right > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title,
.ant-dropdown-menu-inline > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title {
  padding: 12px 8px 12px 24px;
}

.ant-dropdown-menu-rtl.ant-dropdown-menu-vertical > .ant-dropdown-menu-item,
.ant-dropdown-menu-rtl.ant-dropdown-menu-vertical-left > .ant-dropdown-menu-item,
.ant-dropdown-menu-rtl.ant-dropdown-menu-vertical-right > .ant-dropdown-menu-item,
.ant-dropdown-menu-rtl.ant-dropdown-menu-inline > .ant-dropdown-menu-item,
.ant-dropdown-menu-rtl.ant-dropdown-menu-vertical > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title,
.ant-dropdown-menu-rtl.ant-dropdown-menu-vertical-left > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title,
.ant-dropdown-menu-rtl.ant-dropdown-menu-vertical-right > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title,
.ant-dropdown-menu-rtl.ant-dropdown-menu-inline > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title {
  padding: 12px 24px 12px 8px;
}

.ant-dropdown-menu-vertical .ant-dropdown-menu-submenu-arrow,
.ant-dropdown-menu-vertical-left .ant-dropdown-menu-submenu-arrow,
.ant-dropdown-menu-vertical-right .ant-dropdown-menu-submenu-arrow,
.ant-dropdown-menu-inline .ant-dropdown-menu-submenu-arrow {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  vertical-align: baseline;
  text-align: center;
  text-transform: none;
  text-rendering: auto;
  position: absolute;
  right: 16px;
  line-height: 1.5em;
}

.ant-dropdown-menu-vertical .ant-dropdown-menu-submenu-arrow:before,
.ant-dropdown-menu-vertical-left .ant-dropdown-menu-submenu-arrow:before,
.ant-dropdown-menu-vertical-right .ant-dropdown-menu-submenu-arrow:before,
.ant-dropdown-menu-inline .ant-dropdown-menu-submenu-arrow:before {
  content: "\\f0da";
}

.ant-dropdown-menu-rtl.ant-dropdown-menu-vertical .ant-dropdown-menu-submenu-arrow:before,
.ant-dropdown-menu-rtl.ant-dropdown-menu-vertical-left .ant-dropdown-menu-submenu-arrow:before,
.ant-dropdown-menu-rtl.ant-dropdown-menu-vertical-right .ant-dropdown-menu-submenu-arrow:before,
.ant-dropdown-menu-rtl.ant-dropdown-menu-inline .ant-dropdown-menu-submenu-arrow:before,
.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-vertical .ant-dropdown-menu-submenu-arrow:before,
.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-vertical-left .ant-dropdown-menu-submenu-arrow:before,
.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-vertical-right .ant-dropdown-menu-submenu-arrow:before,
.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-inline .ant-dropdown-menu-submenu-arrow:before {
  content: "\\f0d9";
}

.ant-dropdown-menu-rtl.ant-dropdown-menu-vertical .ant-dropdown-menu-submenu-arrow,
.ant-dropdown-menu-rtl.ant-dropdown-menu-vertical-left .ant-dropdown-menu-submenu-arrow,
.ant-dropdown-menu-rtl.ant-dropdown-menu-vertical-right .ant-dropdown-menu-submenu-arrow,
.ant-dropdown-menu-rtl.ant-dropdown-menu-inline .ant-dropdown-menu-submenu-arrow,
.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-vertical .ant-dropdown-menu-submenu-arrow,
.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-vertical-left .ant-dropdown-menu-submenu-arrow,
.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-vertical-right .ant-dropdown-menu-submenu-arrow,
.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-inline .ant-dropdown-menu-submenu-arrow {
  right: auto;
  left: 16px;
}

.ant-dropdown-menu-inline .ant-dropdown-menu-submenu-arrow {
  transform: rotate(90deg);
  transition: transform 0.3s;
}

.ant-dropdown-menu-inline .ant-dropdown-menu-submenu-open > .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow {
  transform: rotate(-90deg);
}

.ant-dropdown-menu-vertical.ant-dropdown-menu-sub,
.ant-dropdown-menu-vertical-left.ant-dropdown-menu-sub,
.ant-dropdown-menu-vertical-right.ant-dropdown-menu-sub {
  padding: 0;
}

.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-vertical.ant-dropdown-menu-sub,
.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-vertical-left.ant-dropdown-menu-sub,
.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-vertical-right.ant-dropdown-menu-sub {
  direction: rtl;
}

.ant-dropdown-menu-sub.ant-dropdown-menu-inline {
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.ant-dropdown-menu-sub.ant-dropdown-menu-inline > .ant-dropdown-menu-item,
.ant-dropdown-menu-sub.ant-dropdown-menu-inline > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 0;
}

.ant-dropdown-menu-rtl .ant-dropdown-menu-sub.ant-dropdown-menu-inline > .ant-dropdown-menu-item,
.ant-dropdown-menu-rtl .ant-dropdown-menu-sub.ant-dropdown-menu-inline > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title {
  padding-left: 0;
}

.ant-dropdown-menu-open-slide-up-enter,
.ant-dropdown-menu-open-slide-up-appear {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  animation-play-state: paused;
}

.ant-dropdown-menu-open-slide-up-leave {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  opacity: 1;
  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  animation-play-state: paused;
}

.ant-dropdown-menu-open-slide-up-enter.ant-dropdown-menu-open-slide-up-enter-active,
.ant-dropdown-menu-open-slide-up-appear.ant-dropdown-menu-open-slide-up-appear-active {
  animation-name: Dropdown-module__rcMenuOpenSlideUpIn___b-d-t6-387-4;
  animation-play-state: running;
}

.ant-dropdown-menu-open-slide-up-leave.ant-dropdown-menu-open-slide-up-leave-active {
  animation-name: Dropdown-module__rcMenuOpenSlideUpOut___QPFr26-387-4;
  animation-play-state: running;
}

@keyframes Dropdown-module__rcMenuOpenSlideUpIn___b-d-t6-387-4 {
  0% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
  }
}
@keyframes Dropdown-module__rcMenuOpenSlideUpOut___QPFr26-387-4 {
  0% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(0);
  }
}
.ant-dropdown-menu-open-zoom-enter,
.ant-dropdown-menu-open-zoom-appear {
  opacity: 0;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  animation-play-state: paused;
}

.ant-dropdown-menu-open-zoom-leave {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  animation-play-state: paused;
}

.ant-dropdown-menu-open-zoom-enter.ant-dropdown-menu-open-zoom-enter-active,
.ant-dropdown-menu-open-zoom-appear.ant-dropdown-menu-open-zoom-appear-active {
  animation-name: Dropdown-module__rcMenuOpenZoomIn___T1wTX6-387-4;
  animation-play-state: running;
}

.ant-dropdown-menu-open-zoom-leave.ant-dropdown-menu-open-zoom-leave-active {
  animation-name: Dropdown-module__rcMenuOpenZoomOut___VXARu6-387-4;
  animation-play-state: running;
}

.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-open-zoom-enter,
.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-open-zoom-appear,
.ant-dropdown-menu-submenu-rtl.ant-dropdown-menu-open-zoom-leave,
.ant-dropdown-menu-submenu-rtl .ant-dropdown-menu-open-zoom-enter,
.ant-dropdown-menu-submenu-rtl .ant-dropdown-menu-open-zoom-appear,
.ant-dropdown-menu-submenu-rtl .ant-dropdown-menu-open-zoom-leave {
  transform-origin: top right !important;
}

@keyframes Dropdown-module__rcMenuOpenZoomIn___T1wTX6-387-4 {
  0% {
    opacity: 0;
    transform: scale(0, 0);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}
@keyframes Dropdown-module__rcMenuOpenZoomOut___VXARu6-387-4 {
  0% {
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform: scale(0, 0);
  }
}
.Dropdown-module__dropdownChildren___dh1k-6-387-4 {
  display: inline-block;
}

.Dropdown-module__dropdownMenuInlinePreview___PdZm86-387-4 {
  position: relative;
  display: block;
  min-width: 280px;
}
.Dropdown-module__dropdownMenuInlinePreview___PdZm86-387-4.ant-dropdown {
  left: 0;
  top: 0;
}

.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown.Dropdown-module__dropdownMaxHeight___0AX4p6-387-4 .ant-dropdown-menu {
  max-height: var(--dropdown-max-height, 200px);
  overflow: auto;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown.ant-dropdown-slide-up-leave, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown.ant-dropdown-slide-up-enter, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown.ant-dropdown-slide-up-appear {
  animation-duration: 0.15s;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu {
  min-width: 120px;
  max-width: 600px;
  margin: 0;
  padding: 0.01px 0;
  border: none;
  border-radius: 8px;
  background: var(--dropdown--bg);
  box-shadow: 0px 8px 12px 0px var(--elevation--medium--2), 0px 0px 1px 0px var(--elevation--medium--1);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu > li, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu > li {
  padding: 6px 12px;
  cursor: pointer;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu > li:first-child, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu > li:first-child {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu > li:first-child:not(.Dropdown-module__dropdownItemStickyHeader___u3qbE6-387-4), .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu > li:first-child:not(.Dropdown-module__dropdownItemStickyHeader___u3qbE6-387-4) {
  margin-top: 4px;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu > li:last-child, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu > li:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu > li:last-child:not(.Dropdown-module__dropdownItemStickyFooter___q9DlW6-387-4), .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu > li:last-child:not(.Dropdown-module__dropdownItemStickyFooter___q9DlW6-387-4) {
  margin-bottom: 4px;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu > li:focus-visible, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu > li:focus-visible {
  outline: none;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu > li.Dropdown-module__dropdownGroupTitle___LQWQX6-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu > li.Dropdown-module__dropdownGroupTitle___LQWQX6-387-4 {
  padding: 10px 12px 6px;
  cursor: default;
  background: var(--dropdown_item--bg--enabled);
  color: var(--dropdown--headline);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title {
  display: flex;
  justify-content: space-between;
  gap: 4px;
  padding: 0;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title > svg, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu > .ant-dropdown-menu-submenu > .ant-dropdown-menu-submenu-title > svg {
  min-width: 16px;
  height: 20px;
  display: flex;
  align-items: center;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu {
  background: var(--dropdown_item--bg--enabled);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu .ant-dropdown-menu-submenu-title {
  color: var(--dropdown_item--text--enabled);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item:hover,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item:hover,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu:hover {
  background: var(--dropdown_item--bg--hover);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item:hover .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu:hover,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu:hover .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item:hover .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu:hover,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu:hover .ant-dropdown-menu-submenu-title {
  color: var(--dropdown_item--text--hover);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item:active,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu:active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item:active,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu:active {
  background: var(--dropdown_item--bg--active);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item:active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item:active .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu:active,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu:active .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item:active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item:active .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu:active,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu:active .ant-dropdown-menu-submenu-title {
  color: var(--dropdown_item--text--active);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-active,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-active,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-active {
  background: var(--dropdown_item--bg--hover);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-active .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-active .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-active .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-active .ant-dropdown-menu-submenu-title {
  background: transparent;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open {
  background: var(--dropdown_item--bg--enabled_selected);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open .ant-dropdown-menu-submenu-title {
  color: var(--dropdown_item--text--enabled_selected);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected:hover,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected:hover,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open:hover {
  background: var(--dropdown_item--bg--hover_selected);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected:hover .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open:hover,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open:hover .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected:hover .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open:hover,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open:hover .ant-dropdown-menu-submenu-title {
  color: var(--dropdown_item--text--hover_selected);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected:active,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open:active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected:active,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open:active {
  background: var(--dropdown_item--bg--active_selected);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected:active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected:active .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open:active,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open:active .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected:active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-selected.ant-dropdown-menu-item-selected:active .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open:active,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-open.ant-dropdown-menu-submenu-open:active .ant-dropdown-menu-submenu-title {
  color: var(--dropdown_item--text--active_selected);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-disabled, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-disabled .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-disabled:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-disabled:hover .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-disabled:active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item-disabled:active .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-disabled,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-disabled:hover,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-disabled:hover .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-disabled:active,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-submenu-disabled:active .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-disabled, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-disabled .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-disabled:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-disabled:hover .ant-dropdown-menu-submenu-title, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-disabled:active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-item-disabled:active .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-disabled,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-disabled:hover,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-disabled:hover .ant-dropdown-menu-submenu-title,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-disabled:active,
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .ant-dropdown-menu-submenu-disabled:active .ant-dropdown-menu-submenu-title {
  cursor: not-allowed;
  background: var(--dropdown_item--bg--disabled);
  color: var(--dropdown_item--text--disabled);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownItemAction___DmBYe6-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownItemAction___DmBYe6-387-4:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownItemAction___DmBYe6-387-4:active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownItemAction___DmBYe6-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownItemAction___DmBYe6-387-4:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownItemAction___DmBYe6-387-4:active {
  color: var(--dropdown_item--text--enabled_selected);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownItemCustom___2avMI6-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownItemCustom___2avMI6-387-4:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownItemCustom___2avMI6-387-4:active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownItemCustom___2avMI6-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownItemCustom___2avMI6-387-4:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownItemCustom___2avMI6-387-4:active {
  background: var(--dropdown_item--bg--enabled);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownItemStickyHeader___u3qbE6-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownItemStickyHeader___u3qbE6-387-4 {
  position: sticky;
  top: 0;
  padding: 10px 12px;
  border-bottom: 1px solid var(--divider--bg--light);
  z-index: 1;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownItemStickyFooter___q9DlW6-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownItemStickyFooter___q9DlW6-387-4 {
  position: sticky;
  bottom: 0;
  padding: 10px 12px;
  border-top: 1px solid var(--divider--bg--light);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownDivider___11Iw76-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownDivider___11Iw76-387-4 {
  margin: 4px 0;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu.Dropdown-module__dropdownLoading___imb696-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu.Dropdown-module__dropdownLoading___imb696-387-4 {
  padding: 16px 0px;
  display: flex;
  justify-content: center;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownInnerActions___oZBU96-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownInnerActions___oZBU96-387-4 {
  padding: var(--spacing--padding_sm) var(--spacing--padding_ml);
  color: var(--dropdown_item--text--enabled);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu::before, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu::before {
  display: none;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownToggle___zVKiL6-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownToggle___zVKiL6-387-4 {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing--gap_dependent);
  padding: 6px 12px;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownToggle___zVKiL6-387-4:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownToggle___zVKiL6-387-4:hover {
  background: var(--bg--neutral--level_0_hover);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownToggle___zVKiL6-387-4:active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownToggle___zVKiL6-387-4:active {
  background: var(--bg--neutral--level_0_active);
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownToggle___zVKiL6-387-4.Dropdown-module__itemDisabled___T4sbQ6-387-4, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownToggle___zVKiL6-387-4.Dropdown-module__itemDisabled___T4sbQ6-387-4 {
  cursor: not-allowed;
}
.Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownToggle___zVKiL6-387-4.Dropdown-module__itemDisabled___T4sbQ6-387-4:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown .ant-dropdown-menu .Dropdown-module__dropdownToggle___zVKiL6-387-4.Dropdown-module__itemDisabled___T4sbQ6-387-4:active, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownToggle___zVKiL6-387-4.Dropdown-module__itemDisabled___T4sbQ6-387-4:hover, .Dropdown-module__dropdownOverlay___C5EzG6-387-4.ant-dropdown-menu-submenu .ant-dropdown-menu .Dropdown-module__dropdownToggle___zVKiL6-387-4.Dropdown-module__itemDisabled___T4sbQ6-387-4:active {
  background: none;
}

.Dropdown-module__dropdownItemInner___3UJwe6-387-4 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
}
.Dropdown-module__dropdownItemInner___3UJwe6-387-4, .Dropdown-module__dropdownItemInner___3UJwe6-387-4:hover, .Dropdown-module__dropdownItemInner___3UJwe6-387-4:active {
  background: transparent;
}
.Dropdown-module__dropdownItemInner___3UJwe6-387-4 .Dropdown-module__additionalComponents___KX0AZ6-387-4 {
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.Dropdown-module__dropdownItemInner___3UJwe6-387-4 .Dropdown-module__block___n2riW6-387-4 {
  display: flex;
  flex-direction: row;
  gap: 4px;
}
.Dropdown-module__dropdownItemInner___3UJwe6-387-4 .Dropdown-module__block___n2riW6-387-4 .Dropdown-module__textWrapper___L3wmp6-387-4 {
  display: flex;
  flex-direction: column;
}
.Dropdown-module__dropdownItemInner___3UJwe6-387-4 .Dropdown-module__block___n2riW6-387-4 .Dropdown-module__textWrapper___L3wmp6-387-4 .Dropdown-module__text___1mMjX6-387-4 {
  text-wrap: wrap;
  display: flex;
  align-items: flex-end;
  gap: 8px;
}
.Dropdown-module__dropdownItemInner___3UJwe6-387-4 .Dropdown-module__block___n2riW6-387-4 .Dropdown-module__textWrapper___L3wmp6-387-4 .Dropdown-module__description___0YALE6-387-4 {
  white-space: pre-wrap;
  color: var(--dropdown_item--text--description);
}`,F={dropdownOverlay:"Dropdown-module__dropdownOverlay___C5EzG6-387-4",dropdownInnerActions:"Dropdown-module__dropdownInnerActions___oZBU96-387-4",dropdownItemInner:"Dropdown-module__dropdownItemInner___3UJwe6-387-4",block:"Dropdown-module__block___n2riW6-387-4",textWrapper:"Dropdown-module__textWrapper___L3wmp6-387-4",text:"Dropdown-module__text___1mMjX6-387-4",description:"Dropdown-module__description___0YALE6-387-4",dropdownGroupTitle:"Dropdown-module__dropdownGroupTitle___LQWQX6-387-4",dropdownChildren:"Dropdown-module__dropdownChildren___dh1k-6-387-4",dropdownMaxHeight:"Dropdown-module__dropdownMaxHeight___0AX4p6-387-4",dropdownItemStickyHeader:"Dropdown-module__dropdownItemStickyHeader___u3qbE6-387-4",dropdownItemStickyFooter:"Dropdown-module__dropdownItemStickyFooter___q9DlW6-387-4",dropdownItemAction:"Dropdown-module__dropdownItemAction___DmBYe6-387-4",dropdownItemCustom:"Dropdown-module__dropdownItemCustom___2avMI6-387-4",dropdownDivider:"Dropdown-module__dropdownDivider___11Iw76-387-4",dropdownLoading:"Dropdown-module__dropdownLoading___imb696-387-4",dropdownToggle:"Dropdown-module__dropdownToggle___zVKiL6-387-4",itemDisabled:"Dropdown-module__itemDisabled___T4sbQ6-387-4",additionalComponents:"Dropdown-module__additionalComponents___KX0AZ6-387-4"};qt(pd);const dt=({children:n,icon:o,type:r,tooltip:e,description:t,componentsBefore:a,componentsAfter:i})=>{const u=d.useMemo(()=>_.createElement("div",{className:F.dropdownItemInner},_.createElement("div",{className:F.block},o&&_.createElement("div",{className:F.additionalComponents},o),a==null?void 0:a.map((p,l)=>_.createElement("div",{key:l,className:F.additionalComponents},p)),_.createElement("div",{className:F.textWrapper},_.createElement("div",{className:F.text},n),t&&_.createElement("div",{className:F.description},t))),i==null?void 0:i.map((p,l)=>_.createElement("div",{key:l,className:F.additionalComponents},p))),[n,i,a,t,r]);return e?_.createElement(Lo,{text:e},u):u},at=({children:n,componentsBefore:o,componentsAfter:r,description:e,tooltip:t,type:a,title:i,truncateItemWidth:u,icon:p,...l})=>_.createElement(Bn.Item,{...l,title:typeof i=="string"?i:void 0},_.createElement(dt,{componentsBefore:o,componentsAfter:r,description:e,tooltip:t,icon:p},_.createElement(Xt,{truncationWidth:u},n)));var md=ir();const sd=Yt(md);var cd=d.createContext(void 0),wd={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},_d=function(o,r){return d.createElement(Qt,L(L({},o),{},{ref:r,icon:wd}))},vd=d.forwardRef(_d),fd=function(n,o){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&o.indexOf(e)<0&&(r[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)o.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(r[e[t]]=n[e[t]]);return r};Jt("small","default","large");var Oe=null;function bd(n,o){var r=o.indicator,e="".concat(n,"-dot");return r===null?null:go(r)?ho(r,{className:R(r.props.className,e)}):go(Oe)?ho(Oe,{className:R(Oe.props.className,e)}):d.createElement("span",{className:R(e,"".concat(n,"-dot-spin"))},d.createElement("i",{className:"".concat(n,"-dot-item")}),d.createElement("i",{className:"".concat(n,"-dot-item")}),d.createElement("i",{className:"".concat(n,"-dot-item")}),d.createElement("i",{className:"".concat(n,"-dot-item")}))}function gd(n,o){return!!n&&!!o&&!isNaN(Number(o))}var it=function(n){Go(r,n);var o=Po(r);function r(e){var t;$o(this,r),t=o.call(this,e),t.debouncifyUpdateSpinning=function(p){var l=p||t.props,c=l.delay;c&&(t.cancelExistingSpin(),t.updateSpinning=sd(t.originalUpdateSpinning,c))},t.updateSpinning=function(){var p=t.props.spinning,l=t.state.spinning;l!==p&&t.setState({spinning:p})},t.renderSpin=function(p){var l,c=p.getPrefixCls,m=p.direction,s=t.props,f=s.prefixCls,w=s.className,x=s.size,v=s.tip,O=s.wrapperClassName,D=s.style,C=fd(s,["prefixCls","className","size","tip","wrapperClassName","style"]),y=t.state.spinning,h=c("spin",f),g=R(h,(l={},z(l,"".concat(h,"-sm"),x==="small"),z(l,"".concat(h,"-lg"),x==="large"),z(l,"".concat(h,"-spinning"),y),z(l,"".concat(h,"-show-text"),!!v),z(l,"".concat(h,"-rtl"),m==="rtl"),l),w),M=Me(C,["spinning","delay","indicator"]),b=d.createElement("div",A({},M,{style:D,className:g}),bd(h,t.props),v?d.createElement("div",{className:"".concat(h,"-text")},v):null);if(t.isNestedPattern()){var S=R("".concat(h,"-container"),z({},"".concat(h,"-blur"),y));return d.createElement("div",A({},M,{className:R("".concat(h,"-nested-loading"),O)}),y&&d.createElement("div",{key:"loading"},b),d.createElement("div",{className:S,key:"container"},t.props.children))}return b};var a=e.spinning,i=e.delay,u=gd(a,i);return t.state={spinning:a&&!u},t.originalUpdateSpinning=t.updateSpinning,t.debouncifyUpdateSpinning(e),t}return Ao(r,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var t=this.updateSpinning;t&&t.cancel&&t.cancel()}},{key:"isNestedPattern",value:function(){return!!(this.props&&typeof this.props.children<"u")}},{key:"render",value:function(){return d.createElement(Zt,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(t){Oe=t}}]),r}(d.Component);it.defaultProps={spinning:!0,size:"default",wrapperClassName:""};const In=To(),hd=Je`
  &.ant-spinner-centered {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  line-height: 0;

  & > svg {
    height: ${In("height")};
    width: ${In("width")};
  }

  .ant-spin-text {
    color: ${In("textColor")};
    font-family: ${In("fontFamily")};
    font-weight: ${In("fontWeight")};
    font-size: ${In("fontSize")};
    font-style: ${In("fontStyle")};
    line-height: ${In("lineHeight")};
    letter-spacing: ${In("letterSpacing")};
    padding-top: ${In("gap")};
  }
`,yd=Je`
  & path {
    stroke: ${({color:n})=>n}
  }
`,Cd=({className:n})=>d.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:R(["anticon-spin",n])},d.createElement("path",{d:"M24 45.5C35.8741 45.5 45.5 35.8741 45.5 24C45.5 12.1259 35.8741 2.5 24 2.5C12.1259 2.5 2.5 12.1259 2.5 24",strokeWidth:"5",strokeLinecap:"round"})),xd=n=>Wt(n,{componentName:"loader",defaultValues:{mode:"default",size:"small"}}),Dd=Re(it).withConfig({shouldForwardProp:n=>!["centered","cssConfig"].includes(n)})`
  ${hd}
`,Ed=Re(Cd)`
  ${yd}
`,Od=n=>{const o=xd(n),r=ke(o);return _.createElement(Id,{...r})},Id=({spinning:n=!0,cssConfig:o,className:r,centered:e,testAttributes:t,...a})=>_.createElement(Dd,{className:R(r,{"ant-spinner-centered":e}),centered:e,indicator:_.createElement(Ed,{color:o.color}),spinning:n,cssConfig:o,...t,...a});var ut=d.forwardRef(function(n,o){var r,e=n.prefixCls,t=e===void 0?"rc-switch":e,a=n.className,i=n.checked,u=n.defaultChecked,p=n.disabled,l=n.loadingIcon,c=n.checkedChildren,m=n.unCheckedChildren,s=n.onClick,f=n.onChange,w=n.onKeyDown,x=en(n,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),v=ve(!1,{value:i,defaultValue:u}),O=G(v,2),D=O[0],C=O[1];function y(b,S){var N=D;return p||(N=b,C(N),f==null||f(N,S)),N}function h(b){b.which===fn.LEFT?y(!1,b):b.which===fn.RIGHT&&y(!0,b),w==null||w(b)}function g(b){var S=y(!D,b);s==null||s(S,b)}var M=R(t,a,(r={},z(r,"".concat(t,"-checked"),D),z(r,"".concat(t,"-disabled"),p),r));return d.createElement("button",Object.assign({},x,{type:"button",role:"switch","aria-checked":D,disabled:p,className:M,ref:o,onKeyDown:h,onClick:g}),l,d.createElement("span",{className:"".concat(t,"-inner")},D?c:m))});ut.displayName="Switch";var zd=function(n,o){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&o.indexOf(e)<0&&(r[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)o.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(r[e[t]]=n[e[t]]);return r},io=d.forwardRef(function(n,o){var r,e=n.prefixCls,t=n.size,a=n.loading,i=n.className,u=i===void 0?"":i,p=n.disabled,l=zd(n,["prefixCls","size","loading","className","disabled"]);nr("checked"in l||!("value"in l),"Switch","`value` is not a valid prop, do you mean `checked`?");var c=d.useContext(er),m=c.getPrefixCls,s=c.direction,f=d.useContext(cd),w=m("switch",e),x=d.createElement("div",{className:"".concat(w,"-handle")},a&&d.createElement(vd,{className:"".concat(w,"-loading-icon")})),v=R((r={},z(r,"".concat(w,"-small"),(t||f)==="small"),z(r,"".concat(w,"-loading"),a),z(r,"".concat(w,"-rtl"),s==="rtl"),r),u);return d.createElement(or,{insertExtraNode:!0},d.createElement(ut,A({},l,{prefixCls:w,className:v,disabled:p||a,ref:o,loadingIcon:x})))});io.__ANT_SWITCH=!0;io.displayName="Switch";const Q=To(),Sd=Je`
  background-color: ${Q("enabled.bgOff")};
  box-shadow: none;
  ${({labelPosition:n})=>{switch(n){case"before":return{order:100,margin:"0 0 0 4px;"};case"after":return{order:0,margin:"0 4px 0 0;"};default:return{order:0,margin:0}}}}
  
  &:last-child {
    translate: none;
  }

  &:not(.ant-switch-small) {
    height: 20px;
    min-width: 32px;
    
    & .ant-switch-handle {
      width: 16px;
      height: 16px;
    }

    & .ant-switch-loading-icon.anticon {
      top: 2px;
    }
  }
  
  & .ant-switch-handle {
    &::before {
      box-shadow: none;
      background-color: ${Q("enabled.knob")};
    }
  }
  &.ant-switch-checked {
    background-color: ${Q("enabled.bgOn")};
    & .ant-switch-handle::before {
      box-shadow: none;
      background-color: ${Q("enabled.knob")};
    }

    &:not(.ant-switch-small) {
      & .ant-switch-handle {
        left: calc(100% - 16px - 2px);
      }
    }
  }
  & .ant-click-animating-node {
    display: none;
  }

  // hover
  &:hover:not(:disabled),
  .ant-toggle-wrapper:hover &:not(:disabled) {
    background-color: ${Q("hover.bgOff")};
    &.ant-switch-checked {
      background-color: ${Q("hover.bgOn")};
    }
  }

  // active
  &:hover:active,
  &:active,
  .ant-toggle-wrapper:active &,
  .ant-toggle-wrapper:hover:active & {
    &:not(:disabled) {
      background-color: ${Q("active.bgOff")};
      &.ant-switch-checked {
        background-color: ${Q("active.bgOn")};
        .ant-switch-handle:before {
          left: 0;
        }
      }
      .ant-switch-handle:before {
        right: 0;
      }
    }
  }

  // focus
  &:not(:disabled) {
    &, &:hover, &:active {
      &:focus, &:focus-within {
        outline: none;
        box-shadow: none;
      }
      &:focus-visible {
        outline: none;
        box-shadow: ${Q("focus.boxShadow")};
      }
    }
  }

  // disabled
  &.ant-switch-disabled, &:disabled {
    opacity: 1;
    background-color: ${Q("disabled.bgOff")};
    & .ant-switch-handle:before {
      background-color: ${Q("disabled.knob")};
      box-shadow: none;
    }
    &.ant-switch-checked {
      background-color: ${Q("disabled.bgOn")};
      & .ant-switch-handle:before {
        background-color: ${Q("disabled.knob")};
        box-shadow: none;
      }
    }
  }

  &.ant-switch-disabled ~ .toggle-label span {
    color: ${Q("disabled.color")};
  }

  // readonly
  ${n=>n.readonly&&`
  && {
    background-color: ${Q("readonly.bgOff")(n)};
    .ant-switch-handle::before {
      background-color: ${Q("readonly.knob")(n)};
    }

    &, * {
      cursor: default;
    }
  }
  &&.ant-switch-checked {
    background-color: ${Q("readonly.bgOn")(n)};
    .ant-switch-handle::before {
      background-color: ${Q("readonly.knob")(n)};
    }
  }

  && ~ .toggle-label span {
    color: ${Q("readonly.color")(n)};
  }
  `}
  
  + .toggle-label {
    line-height: 20px;

    .ant-table-cell & {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  &:not(:disabled) + .toggle-label {
    cursor: pointer;
    user-select: none;
  }

  &:disabled + .toggle-label {
    cursor: not-allowed;
    user-select: none;
  }
`,kd=Re.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
`,Rd=n=>Ft(n,{componentName:"toggle",defaultValues:{}}),Md=Re(io).withConfig({shouldForwardProp:n=>!["cssConfig","readonly","labelPosition"].includes(n)})`${Sd}`,Nd=n=>{const o=Rd(n),r=ke(o);return _.createElement(Gd,{...r})},Gd=({onChange:n,checked:o,children:r,disabled:e,readonly:t,cssConfig:a,labelPosition:i="after",required:u,tooltip:p,testAttributes:l,description:c,dependentElement:m,...s})=>{const[f,w]=d.useState(!!o);d.useEffect(()=>{o===void 0||f===o||w(!!o)},[o]);const x=(v,O)=>{n==null||n(v,O),o===void 0&&w(v)};return _.createElement("div",{className:"ant-toggle-wrapper",role:"toggle"},_.createElement(kd,null,_.createElement(Md,{onChange:x,checked:f,cssConfig:a,disabled:e||t,readonly:t,labelPosition:r?i:void 0,...l,...s}),typeof r=="string"?_.createElement(tr,{onClick:()=>!e&&!t&&x(!f,new MouseEvent("click")),className:"toggle-label",disabled:e,required:u,tooltip:p},r):d.Children.map(r,v=>d.isValidElement(v)?d.cloneElement(v,{onClick:()=>!e&&x(!f,new MouseEvent("click"))}):v)),_.createElement(rr,{description:c,dependentElement:m,_margin:36}))},lt=n=>_.createElement(Bn,{...n,prefixCls:"ant-dropdown-menu"}),pt=({popupClassName:n,ref:o,...r})=>_.createElement(Bn.SubMenu,{ref:o,expandIcon:_.createElement(Vo,null),popupClassName:R(n,F.dropdownOverlay),popupOffset:[16,-10],...r}),mt=({eventKey:n,warnKey:o,...r})=>_.createElement("li",{...r,className:F.dropdownGroupTitle}),st=({className:n,eventKey:o,warnKey:r,...e})=>_.createElement(dr,{className:R(n,F.dropdownDivider),mode:"light",...e}),ct=({className:n,eventKey:o,warnKey:r,...e})=>_.createElement("div",{className:R(n,F.dropdownInnerActions),...e}),wt=({children:n,labelPosition:o,className:r,onChange:e,checked:t,tooltip:a,...i})=>{const{testAttributes:u,...p}=ke(i),[l,c]=d.useState(t);d.useEffect(()=>{c(t)},[t]);const m=(f,w)=>{e&&e(f,w.nativeEvent),c(f)},s=f=>{p.disabled||p.loading||(f.stopPropagation(),m(!l,f))};return _.createElement("li",{onClick:s,className:R(F.dropdownToggle,(p.disabled||p.loading)&&F.itemDisabled,r),...u},_.createElement(Lo,{text:a},_.createElement(Ut,{width:"100%",gap:"dependent",justify:"space-between",wrap:"inherit"},n,_.createElement(Nd,{...p,checked:l,labelPosition:"before"}))))},Se=(n,o)=>n.map(({key:r=ar(),type:e,disabled:t,title:a,description:i,tooltip:u,icon:p,componentsAfter:l,componentsBefore:c,children:m,...s})=>{const{testAttributes:f,...w}=ke(s);switch(e){case"submenu":return _.createElement(pt,{key:r,title:_.createElement(dt,{type:e,description:i,tooltip:u,componentsBefore:c,componentsAfter:l,icon:p},a),popupOffset:[16,-10],popupClassName:o,disabled:t,className:w.className,...f},Se(m,o));case"group":return _.createElement(_.Fragment,null,_.createElement(mt,{"data-dropdown-item-group":!0,key:r},a),Se(m,o));case"divider":return _.createElement(st,{key:r});case"innerActions":return _.createElement(ct,{key:r},m);case"toggle":return _.createElement(wt,{...s,disabled:t,tooltip:u},m);default:return _.createElement(at,{key:r,disabled:t,componentsBefore:c,componentsAfter:l,description:i,tooltip:u,icon:p,...w,...f,className:R(w.className,{[F.dropdownItemAction]:e==="action",[F.dropdownItemCustom]:typeof m!="string"})},m)}}),zo=(n,o)=>{if(!n)return;const{sticky:r,...e}=n;return Se([{...e,className:R(n.className,{[o]:r})}])},Pd=({overlay:n,loading:o,testId:r,klId:e,overlayClassName:t,onOverlaySelect:a,selectedItemsKeys:i,header:u,footer:p,...l})=>({overlay:d.useMemo(()=>Array.isArray(n)?_.createElement(lt,{"data-testid":r,"kl-id":e,className:R({[F.dropdownLoading]:o}),triggerSubMenuAction:"click",onSelect:a,selectedKeys:i},o?_.createElement(Od,{size:"medium"}):[zo(u,F.dropdownItemStickyHeader),Se(n,t),zo(p,F.dropdownItemStickyFooter)]):typeof n=="function"?_.cloneElement(n(),{onSelect:a}):_.cloneElement(n,{onSelect:a}),[n,o,e,r,t,a,i]),overlayClassName:t,...l}),$d=n=>n&&(n>100?n:100),Ad=n=>{if(n==="topCenter"||n==="bottomCenter"){const o=n.slice(0,n.indexOf("Center"));return lr("mode",n),o}return n},mn=n=>{var o,r;const{visible:e,onVisibleChange:t,onOverlaySelect:a,overlayClassName:i,placement:u,trigger:p,disabled:l,popupMaxHeight:c,children:m,getPopupContainer:s,usePortal:f,...w}=n,[x,v]=jt(!1,{value:e}),O=Ht({usePortal:!0}),D=d.useMemo(()=>$d(c),[c]),C=I=>{v(!1),a==null||a(I)},y=R(i,D&&F.dropdownMaxHeight),h=R(F.dropdownOverlay,y,u==="top"&&"ant-dropdown-placement-topCenter",u==="bottom"&&"ant-dropdown-placement-bottomCenter"),g=Pd({...w,overlayClassName:y,onOverlaySelect:C});d.useEffect(()=>{M()},[D]);const M=d.useCallback(()=>{setTimeout(()=>{document.querySelectorAll(".ant-dropdown").forEach(P=>{Number(P.style.getPropertyValue("min-width").split("px")[0])>600&&P.style.setProperty("min-width","600px"),D&&P.style.setProperty("--dropdown-max-height",`${D}px`)})},0)},[D]),b=d.useCallback(()=>{setTimeout(()=>{var I,P;const T=(I=document.querySelector(".ant-dropdown:not(.ant-dropdown-hidden) li"))===null||I===void 0?void 0:I.firstChild;(P=T==null?void 0:T.focus)===null||P===void 0||P.call(T)},0)},[]),S=d.useCallback(I=>{b(),I&&M(),v(I),t==null||t(I)},[b,M,v,t]),N=_.Children.only(Bt(m)?m:_.createElement("span",{className:F.dropdownChildren},m));return _.createElement(fr,{...g,getPopupContainer:(o=s??O.getPopupContainer)!==null&&o!==void 0?o:I=>f??O.usePortal?document.body:I.parentElement,prefixCls:"ant-dropdown",overlayClassName:h,visible:x,onVisibleChange:S,autoFocus:!0,trigger:l?[]:p,placement:Ad(u),animation:"slide-up"},_.cloneElement(N,{disabled:(r=N.props.disabled)!==null&&r!==void 0?r:l,className:R(N.props.className,"ant-dropdown-trigger")}))};mn.Menu=lt;mn.SubMenu=pt;mn.MenuItem=at;mn.MenuDivider=st;mn.GroupTitle=mt;mn.InnerActions=ct;mn.Toggle=wt;mn.displayName="Dropdown";mn.Menu.displayName="Dropdown.Menu";mn.SubMenu.displayName="Dropdown.SubMenu";mn.MenuItem.displayName="Dropdown.MenuItem";mn.MenuDivider.displayName="Dropdown.MenuDivider";mn.GroupTitle.displayName="Dropdown.GroupTitle";mn.InnerActions.displayName="Dropdown.InnerActions";mn.Toggle.displayName="Dropdown.Toggle";export{mn as D,fn as K,Od as L,vd as R,cd as S,sd as d,lr as s,ve as u};
