import{m as We,r as n,aD as Te,l as m,j as Z,_ as W,a as L,bc as Ve,k as oe,bi as ae,D as fe,n as ne,s as Ue,a2 as re,a1 as Ke,aw as ie,H as se,bj as Ge,a0 as Qe,w as Xe,u as Ye,R as w,S as Je,A as Ze}from"./iframe-zz6a49H8.js";import{B as te}from"./Button-Djh220XQ.js";import{o as et,l as tt,a as nt}from"./StatusWarningOutline-DZEZTt6V.js";import{o as ot}from"./StatusOkOutline-BBn674wO.js";import{P as at}from"./PortalWrapper-CaqowjBr.js";import{K as me}from"./KeyCode-D_nTN6KT.js";import{p as rt}from"./pickAttrs-BgtJ82nl.js";import{a as we,R as it,L as Ne,g as Re,d as Pe,f as lt,h as Se,i as ct,j as st,k as ut,l as dt,n as ft}from"./type-CR-gS43P.js";import{B as le,c as Me}from"./button-nrifPwP7.js";var mt=function(){return We()&&window.document.documentElement};function vt(e){var t=e.prefixCls,o=e.style,a=e.visible,r=e.maskProps,i=e.motionName;return n.createElement(Te,{key:"mask",visible:a,motionName:i,leavedClassName:"".concat(t,"-mask-hidden")},function(u){var l=u.className,d=u.style;return n.createElement("div",m({style:W(W({},d),o),className:Z("".concat(t,"-mask"),l)},r))})}function ve(e,t,o){var a=t;return!a&&o&&(a="".concat(e,"-").concat(o)),a}var ge=-1;function gt(){return ge+=1,ge}function Ce(e,t){var o=e["page".concat(t?"Y":"X","Offset")],a="scroll".concat(t?"Top":"Left");if(typeof o!="number"){var r=e.document;o=r.documentElement[a],typeof o!="number"&&(o=r.body[a])}return o}function Ct(e){var t=e.getBoundingClientRect(),o={left:t.left,top:t.top},a=e.ownerDocument,r=a.defaultView||a.parentWindow;return o.left+=Ce(r),o.top+=Ce(r,!0),o}const yt=n.memo(function(e){var t=e.children;return t},function(e,t){var o=t.shouldUpdate;return!o});var ye={width:0,height:0,overflow:"hidden",outline:"none"},$e=n.forwardRef(function(e,t){var o=e.closable,a=e.prefixCls,r=e.width,i=e.height,u=e.footer,l=e.title,d=e.closeIcon,C=e.style,s=e.className,c=e.visible,y=e.forceRender,b=e.bodyStyle,E=e.bodyProps,v=e.children,f=e.destroyOnClose,g=e.modalRender,k=e.motionName,h=e.ariaId,x=e.onClose,M=e.onVisibleChanged,$=e.onMouseDown,p=e.onMouseUp,T=e.mousePosition,N=n.useRef(),P=n.useRef(),S=n.useRef();n.useImperativeHandle(t,function(){return{focus:function(){var I;(I=N.current)===null||I===void 0||I.focus()},changeActive:function(I){var G=document,X=G.activeElement;I&&X===P.current?N.current.focus():!I&&X===N.current&&P.current.focus()}}});var V=n.useState(),R=L(V,2),H=R[0],U=R[1],z={};r!==void 0&&(z.width=r),i!==void 0&&(z.height=i),H&&(z.transformOrigin=H);function K(){var A=Ct(S.current);U(T?"".concat(T.x-A.left,"px ").concat(T.y-A.top,"px"):"")}var F;u&&(F=n.createElement("div",{className:"".concat(a,"-footer")},u));var j;l&&(j=n.createElement("div",{className:"".concat(a,"-header")},n.createElement("div",{className:"".concat(a,"-title"),id:h},l)));var q;o&&(q=n.createElement("button",{type:"button",onClick:x,"aria-label":"Close",className:"".concat(a,"-close")},d||n.createElement("span",{className:"".concat(a,"-close-x")})));var Q=n.createElement("div",{className:"".concat(a,"-content")},q,j,n.createElement("div",m({className:"".concat(a,"-body"),style:b},E),v),F);return n.createElement(Te,{visible:c,onVisibleChanged:M,onAppearPrepare:K,onEnterPrepare:K,forceRender:y,motionName:k,removeOnLeave:f,ref:S},function(A,I){var G=A.className,X=A.style;return n.createElement("div",{key:"dialog-element",role:"document",ref:I,style:W(W(W({},X),C),z),className:Z(a,s,G),onMouseDown:$,onMouseUp:p},n.createElement("div",{tabIndex:0,ref:N,style:ye,"aria-hidden":"true"}),n.createElement(yt,{shouldUpdate:c||y},g?g(Q):Q),n.createElement("div",{tabIndex:0,ref:P,style:ye,"aria-hidden":"true"}))})});$e.displayName="Content";function be(e){var t=e.prefixCls,o=t===void 0?"rc-dialog":t,a=e.zIndex,r=e.visible,i=r===void 0?!1:r,u=e.keyboard,l=u===void 0?!0:u,d=e.focusTriggerAfterClose,C=d===void 0?!0:d,s=e.scrollLocker,c=e.title,y=e.wrapStyle,b=e.wrapClassName,E=e.wrapProps,v=e.onClose,f=e.afterClose,g=e.transitionName,k=e.animation,h=e.closable,x=h===void 0?!0:h,M=e.mask,$=M===void 0?!0:M,p=e.maskTransitionName,T=e.maskAnimation,N=e.maskClosable,P=N===void 0?!0:N,S=e.maskStyle,V=e.maskProps,R=n.useRef(),H=n.useRef(),U=n.useRef(),z=n.useState(i),K=L(z,2),F=K[0],j=K[1],q=n.useRef();q.current||(q.current="rcDialogTitle".concat(gt()));function Q(O){if(O){if(!Ve(H.current,document.activeElement)){var Y;R.current=document.activeElement,(Y=U.current)===null||Y===void 0||Y.focus()}}else{if(j(!1),$&&R.current&&C){try{R.current.focus({preventScroll:!0})}catch{}R.current=null}F&&(f==null||f())}}function A(O){v==null||v(O)}var I=n.useRef(!1),G=n.useRef(),X=function(){clearTimeout(G.current),I.current=!0},ze=function(){G.current=setTimeout(function(){I.current=!1})},de=null;P&&(de=function(Y){I.current?I.current=!1:H.current===Y.target&&A(Y)});function je(O){if(l&&O.keyCode===me.ESC){O.stopPropagation(),A(O);return}i&&O.keyCode===me.TAB&&U.current.changeActive(!O.shiftKey)}return n.useEffect(function(){return i&&j(!0),function(){}},[i]),n.useEffect(function(){return function(){clearTimeout(G.current)}},[]),n.useEffect(function(){return F?(s==null||s.lock(),s==null?void 0:s.unLock):function(){}},[F,s]),n.createElement("div",m({className:"".concat(o,"-root")},rt(e,{data:!0})),n.createElement(vt,{prefixCls:o,visible:$&&i,motionName:ve(o,p,T),style:W({zIndex:a},S),maskProps:V}),n.createElement("div",m({tabIndex:-1,onKeyDown:je,className:Z("".concat(o,"-wrap"),b),ref:H,onClick:de,role:"dialog","aria-labelledby":c?q.current:null,style:W(W({zIndex:a},y),{},{display:F?null:"none"})},E),n.createElement($e,m({},e,{onMouseDown:X,onMouseUp:ze,ref:U,closable:x,ariaId:q.current,prefixCls:o,visible:i,onClose:A,onVisibleChanged:Q,motionName:ve(o,g,k)}))))}var Ie=function(t){var o=t.visible,a=t.getContainer,r=t.forceRender,i=t.destroyOnClose,u=i===void 0?!1:i,l=t.afterClose,d=n.useState(o),C=L(d,2),s=C[0],c=C[1];return n.useEffect(function(){o&&c(!0)},[o]),a===!1?n.createElement(be,m({},t,{getOpenCount:function(){return 2}})):!r&&u&&!s?null:n.createElement(at,{visible:o,forceRender:r,getContainer:a},function(y){return n.createElement(be,m({},t,{destroyOnClose:u,afterClose:function(){l==null||l(),c(!1)}},y))})};Ie.displayName="Dialog";var bt=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]]);return o},ce,ht=function(t){ce={x:t.pageX,y:t.pageY},setTimeout(function(){ce=null},100)};mt()&&document.documentElement.addEventListener("click",ht,!0);var ue=function(t){var o,a=n.useContext(we),r=a.getPopupContainer,i=a.getPrefixCls,u=a.direction,l=function(P){var S=t.onCancel;S==null||S(P)},d=function(P){var S=t.onOk;S==null||S(P)},C=function(P){var S=t.okText,V=t.okType,R=t.cancelText,H=t.confirmLoading;return n.createElement(n.Fragment,null,n.createElement(le,m({onClick:l},t.cancelButtonProps),R||P.cancelText),n.createElement(le,m({},Me(V),{loading:H,onClick:d},t.okButtonProps),S||P.okText))},s=t.prefixCls,c=t.footer,y=t.visible,b=t.wrapClassName,E=t.centered,v=t.getContainer,f=t.closeIcon,g=t.focusTriggerAfterClose,k=g===void 0?!0:g,h=bt(t,["prefixCls","footer","visible","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose"]),x=i("modal",s),M=i(),$=n.createElement(Ne,{componentName:"Modal",defaultLocale:Re()},C),p=n.createElement("span",{className:"".concat(x,"-close-x")},f||n.createElement(it,{className:"".concat(x,"-close-icon")})),T=Z(b,(o={},oe(o,"".concat(x,"-centered"),!!E),oe(o,"".concat(x,"-wrap-rtl"),u==="rtl"),o));return n.createElement(Ie,m({},h,{getContainer:v===void 0?r:v,prefixCls:x,wrapClassName:T,footer:c===void 0?$:c,visible:y,mousePosition:ce,onClose:l,closeIcon:p,focusTriggerAfterClose:k,transitionName:ae(M,"zoom",t.transitionName),maskTransitionName:ae(M,"fade",t.maskTransitionName)}))};ue.defaultProps={width:520,confirmLoading:!1,visible:!1,okType:"primary"};function kt(){var e=n.useRef(!0);return n.useEffect(function(){return function(){e.current=!1}},[]),function(){return!e.current}}function he(e){return!!(e&&e.then)}var ke=function(t){var o=n.useRef(!1),a=n.useRef(),r=kt(),i=n.useState(!1),u=L(i,2),l=u[0],d=u[1];n.useEffect(function(){var v;if(t.autoFocus){var f=a.current;v=setTimeout(function(){return f.focus()})}return function(){v&&clearTimeout(v)}},[]);var C=function(f){var g=t.close;he(f)&&(d(!0),f.then(function(){r()||d(!1),g.apply(void 0,arguments),o.current=!1},function(k){console.error(k),r()||d(!1),o.current=!1}))},s=function(f){var g=t.actionFn,k=t.close;if(!o.current){if(o.current=!0,!g){k();return}var h;if(t.emitEvent){if(h=g(f),t.quitOnNullishReturnValue&&!he(h)){o.current=!1,k(f);return}}else if(g.length)h=g(k),o.current=!1;else if(h=g(),!h){k();return}C(h)}},c=t.type,y=t.children,b=t.prefixCls,E=t.buttonProps;return n.createElement(le,m({},Me(c),{onClick:s,loading:l,prefixCls:b},E,{ref:a}),y)},pe=function(t){var o=t.icon,a=t.onCancel,r=t.onOk,i=t.close,u=t.zIndex,l=t.afterClose,d=t.visible,C=t.keyboard,s=t.centered,c=t.getContainer,y=t.maskStyle,b=t.okText,E=t.okButtonProps,v=t.cancelText,f=t.cancelButtonProps,g=t.direction,k=t.prefixCls,h=t.wrapClassName,x=t.rootPrefixCls,M=t.iconPrefixCls,$=t.bodyStyle,p=t.closable,T=p===void 0?!1:p,N=t.closeIcon,P=t.modalRender,S=t.focusTriggerAfterClose;Pe(!(typeof o=="string"&&o.length>2),"Modal","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(o,"` at https://ant.design/components/icon"));var V=t.okType||"primary",R="".concat(k,"-confirm"),H="okCancel"in t?t.okCancel:!0,U=t.width||416,z=t.style||{},K=t.mask===void 0?!0:t.mask,F=t.maskClosable===void 0?!1:t.maskClosable,j=t.autoFocusButton===null?!1:t.autoFocusButton||"ok",q=Z(R,"".concat(R,"-").concat(t.type),oe({},"".concat(R,"-rtl"),g==="rtl"),t.className),Q=H&&n.createElement(ke,{actionFn:a,close:i,autoFocus:j==="cancel",buttonProps:f,prefixCls:"".concat(x,"-btn")},v);return n.createElement(lt,{prefixCls:x,iconPrefixCls:M,direction:g},n.createElement(ue,{prefixCls:k,className:q,wrapClassName:Z(oe({},"".concat(R,"-centered"),!!t.centered),h),onCancel:function(){return i({triggerCancel:!0})},visible:d,title:"",footer:"",transitionName:ae(x,"zoom",t.transitionName),maskTransitionName:ae(x,"fade",t.maskTransitionName),mask:K,maskClosable:F,maskStyle:y,style:z,bodyStyle:$,width:U,zIndex:u,afterClose:l,keyboard:C,centered:s,getContainer:c,closable:T,closeIcon:N,modalRender:P,focusTriggerAfterClose:S},n.createElement("div",{className:"".concat(R,"-body-wrapper")},n.createElement("div",{className:"".concat(R,"-body")},o,t.title===void 0?null:n.createElement("span",{className:"".concat(R,"-title")},t.title),n.createElement("div",{className:"".concat(R,"-content")},t.content)),n.createElement("div",{className:"".concat(R,"-btns")},Q,n.createElement(ke,{type:V,actionFn:r,close:i,autoFocus:j==="ok",buttonProps:E,prefixCls:"".concat(x,"-btn")},b)))))},J=[],xt=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]]);return o},Ae="";function Et(){return Ae}function ee(e){var t=document.createDocumentFragment(),o=m(m({},e),{close:i,visible:!0});function a(){fe.unmountComponentAtNode(t);for(var l=arguments.length,d=new Array(l),C=0;C<l;C++)d[C]=arguments[C];var s=d.some(function(b){return b&&b.triggerCancel});e.onCancel&&s&&e.onCancel.apply(e,d);for(var c=0;c<J.length;c++){var y=J[c];if(y===i){J.splice(c,1);break}}}function r(l){var d=l.okText,C=l.cancelText,s=l.prefixCls,c=xt(l,["okText","cancelText","prefixCls"]);setTimeout(function(){var y=Re(),b=dt(),E=b.getPrefixCls,v=b.getIconPrefixCls,f=E(void 0,Et()),g=s||"".concat(f,"-modal"),k=v();fe.render(n.createElement(pe,m({},c,{prefixCls:g,rootPrefixCls:f,iconPrefixCls:k,okText:d||(c.okCancel?y.okText:y.justOkText),cancelText:C||y.cancelText})),t)})}function i(){for(var l=this,d=arguments.length,C=new Array(d),s=0;s<d;s++)C[s]=arguments[s];o=m(m({},o),{visible:!1,afterClose:function(){typeof e.afterClose=="function"&&e.afterClose(),a.apply(l,C)}}),r(o)}function u(l){typeof l=="function"?o=l(o):o=m(m({},o),l),r(o)}return r(o),J.push(i),{destroy:i,update:u}}function Oe(e){return m(m({icon:n.createElement(Se,null),okCancel:!1},e),{type:"warning"})}function He(e){return m(m({icon:n.createElement(ut,null),okCancel:!1},e),{type:"info"})}function _e(e){return m(m({icon:n.createElement(st,null),okCancel:!1},e),{type:"success"})}function Be(e){return m(m({icon:n.createElement(ct,null),okCancel:!1},e),{type:"error"})}function De(e){return m(m({icon:n.createElement(Se,null),okCancel:!0},e),{type:"confirm"})}function Tt(e){var t=e.rootPrefixCls;Pe(!1,"Modal","Modal.config is deprecated. Please use ConfigProvider.config instead."),Ae=t}function wt(){var e=n.useState([]),t=L(e,2),o=t[0],a=t[1],r=n.useCallback(function(i){return a(function(u){return[].concat(ne(u),[i])}),function(){a(function(u){return u.filter(function(l){return l!==i})})}},[]);return[o,r]}var Nt=function(t,o){var a=t.afterClose,r=t.config,i=n.useState(!0),u=L(i,2),l=u[0],d=u[1],C=n.useState(r),s=L(C,2),c=s[0],y=s[1],b=n.useContext(we),E=b.direction,v=b.getPrefixCls,f=v("modal"),g=v(),k=function(){d(!1);for(var x=arguments.length,M=new Array(x),$=0;$<x;$++)M[$]=arguments[$];var p=M.some(function(T){return T&&T.triggerCancel});c.onCancel&&p&&c.onCancel()};return n.useImperativeHandle(o,function(){return{destroy:k,update:function(x){y(function(M){return m(m({},M),x)})}}}),n.createElement(Ne,{componentName:"Modal",defaultLocale:ft.Modal},function(h){return n.createElement(pe,m({prefixCls:f,rootPrefixCls:g},c,{close:k,visible:l,afterClose:a,okText:c.okText||(c.okCancel?h.okText:h.justOkText),direction:E,cancelText:c.cancelText||h.cancelText}))})};const Rt=n.forwardRef(Nt);var xe=0,Pt=n.memo(n.forwardRef(function(e,t){var o=wt(),a=L(o,2),r=a[0],i=a[1];return n.useImperativeHandle(t,function(){return{patchElement:i}},[]),n.createElement(n.Fragment,null,r)}));function St(){var e=n.useRef(null),t=n.useState([]),o=L(t,2),a=o[0],r=o[1];n.useEffect(function(){if(a.length){var l=ne(a);l.forEach(function(d){d()}),r([])}},[a]);var i=n.useCallback(function(l){return function(C){var s;xe+=1;var c=n.createRef(),y,b=n.createElement(Rt,{key:"modal-".concat(xe),config:l(C),ref:c,afterClose:function(){y()}});return y=(s=e.current)===null||s===void 0?void 0:s.patchElement(b),{destroy:function(){function v(){var f;(f=c.current)===null||f===void 0||f.destroy()}c.current?v():r(function(f){return[].concat(ne(f),[v])})},update:function(v){function f(){var g;(g=c.current)===null||g===void 0||g.update(v)}c.current?f():r(function(g){return[].concat(ne(g),[f])})}}}},[]),u=n.useMemo(function(){return{info:i(He),success:i(_e),error:i(Be),warning:i(Oe),confirm:i(De)}},[]);return[u,n.createElement(Pt,{ref:e})]}function Fe(e){return ee(Oe(e))}var D=ue;D.useModal=St;D.info=function(t){return ee(He(t))};D.success=function(t){return ee(_e(t))};D.error=function(t){return ee(Be(t))};D.warning=Fe;D.warn=Fe;D.confirm=function(t){return ee(De(t))};D.destroyAll=function(){for(;J.length;){var t=J.pop();t&&t()}};D.config=Tt;const Ee=(e,t)=>{const[o,a]=n.useState({width:0,height:0}),r=n.useRef(null);return n.useLayoutEffect(()=>{if(e.current)return r.current=new Ue((i=[])=>{i.forEach(u=>{const{width:l,height:d}=u.contentRect;a({width:l,height:d})})}),r.current.observe(e.current),a({width:e.current.clientWidth,height:e.current.clientHeight}),()=>{r.current&&r.current.disconnect()}},[e,JSON.stringify(t)]),o},_=Ke(),B={minHeight:"180px",borderWidth:"1px",titlePadding:"24px",footerPadding:"24px"},Mt=(e,t,o)=>`
  calc(100vh - ${e.top} * 2 - ${t}px - ${o}px -
    ${B.titlePadding} * 2 - ${B.footerPadding} * 2)
`,$t=(e,t)=>`
  calc(${B.minHeight} - ${e}px - ${t}px -
    ${B.titlePadding} * 2 - ${B.footerPadding} * 2)
`,It=se.span`
  padding: 0;
  height: ${re(ie.H5).lineHeight};
  svg {
    color: ${_("icon")};
  }
`,qe=se.div`
  max-height: ${e=>`${Mt(e.cssConfig,e.titleHeight,e.footerHeight)}`};
  min-height: ${e=>`${$t(e.titleHeight,e.footerHeight)}`};
  overflow-y: auto;
  padding: 0 24px;
`,pt=Ge``;function At(e){return{backgroundColor:e.maskBackground}}const Ot=Qe`
  padding: 0;
  margin: 0 auto;
  position: relative;
  min-width: ${_("width")};
  max-width: ${_("width")};
  
  .ant-modal-close {
    width: auto;
    height: auto;
    top: 28px;
    right: 24px;

    .ant-modal-close-x {
      width: auto;
      height: auto;
      display: flex;
    }
  }

  .ant-modal-content, 
  .ant-modal-header,
  .ant-modal-footer {
    background: ${_("background")};
    color: ${_("color")};
  }

  .ant-modal-content {
    width: 100%;
    border-radius: 12px;
    box-shadow: ${_("boxShadow")};
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: ${_("modeBorder")};
    }

    .ant-modal-body {
      padding: 0;
      ${re(ie.BTR3)}
    }
  }

  .ant-modal-header {
    padding: ${B.titlePadding};
    border-bottom: ${B.borderWidth} solid;
    border-bottom-color: ${e=>e.showTopBorder?`${_("border")(e)}`:"transparent"};

    .ant-modal-title div {
      display: flex;
      gap: 8px;
      color: ${_("color")};
      ${e=>e.closable&&"padding-right: 40px;"}
      word-wrap: break-word;
      ${re(ie.H5)}
    }
  }

  .ant-modal-footer {
    padding: ${B.titlePadding};
    border-top: ${B.borderWidth} solid;
    border-top-color: ${e=>e.showBottomBorder?`${_("border")(e)}`:"transparent"};
    border-radius: 0;

    .ant-btn + .ant-btn {
      margin-left: 0;
    }
  }

  &:not(:has(.ant-modal-footer))
   ${qe} {
      padding-bottom: ${B.footerPadding};
    }
`,Ht=e=>Xe(e,{componentName:"modal",defaultValues:{mode:"default",size:"small"},propsToDrill:["mode"]}),_t=se(D).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${Ot}`,Le=e=>{const t=Ht(e),o=Ye(t);return w.createElement(Bt,{...o})},Bt=e=>{const{mode:t="default",header:o,content:a,actions:r,cssConfig:i,visible:u,centered:l=!0,closable:d=!0,testAttributes:C,customButtons:s}=e,c=n.useMemo(()=>({warning:()=>w.createElement(nt,{testId:"modal-warning-icon",klId:"icon-warning"}),error:()=>w.createElement(tt,{testId:"modal-error-icon",klId:"icon-error"}),success:()=>w.createElement(ot,{testId:"modal-success-icon",klId:"icon-success"}),ai:()=>w.createElement(et,{testId:"modal-ai-icon",klId:"icon-ai"})}),[]),y=n.useMemo(()=>t!=="default"&&c[t],[c,t]),b=n.useRef(null),E=n.useRef(null),{height:v}=Ee(b,[u]),{height:f}=Ee(E,[u]);n.useEffect(()=>{if(u&&E.current){const T=E.current.querySelector("button");setTimeout(()=>{T==null||T.focus()})}},[u]);const g=n.useMemo(()=>w.createElement("div",{ref:b},y&&w.createElement(It,{cssConfig:i},w.createElement(y,null)),o),[o,y,i]),k=n.useMemo(()=>!r&&!s?null:w.createElement("div",{ref:E},w.createElement(Je,{direction:"horizontal",gap:8},(r==null?void 0:r.FIRST_ACTION)&&w.createElement(te,{size:"medium",...r.FIRST_ACTION},r.FIRST_ACTION.text),(r==null?void 0:r.SECOND_ACTION)&&w.createElement(te,{size:"medium",mode:"secondary",...r.SECOND_ACTION},r.SECOND_ACTION.text),(r==null?void 0:r.THIRD_ACTION)&&w.createElement(te,{size:"medium",mode:"secondary",...r.THIRD_ACTION},r.THIRD_ACTION.text),s&&s.map(({text:T,...N},P)=>w.createElement(te,{key:`modalCustomButton${P}`,size:"medium",mode:"secondary",...N},T)))),[r,s]),[h,x]=n.useState(!1),[M,$]=n.useState(!1),p=T=>{const N=T.target,P=N.scrollHeight-N.scrollTop===N.clientHeight;$(!P);const S=N.scrollTop===0;x(!S)};return w.createElement(w.Fragment,null,w.createElement(pt,{cssConfig:i,titleHeight:v,footerHeight:f,showTopBorder:h,showBottomBorder:M,closable:d}),w.createElement(_t,{title:g,footer:k,mask:!0,maskClosable:!1,maskStyle:At(i),keyboard:!1,centered:l,closable:d,closeIcon:w.createElement(Ze,{_wrapInSpan:!0,size:"large"}),...C,...e,cssConfig:i,titleHeight:v,footerHeight:f,showTopBorder:h,showBottomBorder:M},w.createElement(qe,{cssConfig:i,titleHeight:v,footerHeight:f,onScroll:p},a)))};Le.displayName="Modal";Le.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{header:{required:!1,tsType:{name:"ReactNode"},description:"Header"},content:{required:!1,tsType:{name:"ReactNode"},description:"Content"},actions:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"unknown"},{name:"intersection",raw:`{
  text?: string,
  mode?: ButtonMode,
  loading?: boolean,
  disabled?: boolean,
  iconBefore?: ReactNode,
  iconAfter?: ReactNode,
  onClick?: MouseEventHandler<HTMLElement> | (() => void),
  id?: string,
  className?: string
} & TestingProps`,elements:[{name:"signature",type:"object",raw:`{
  text?: string,
  mode?: ButtonMode,
  loading?: boolean,
  disabled?: boolean,
  iconBefore?: ReactNode,
  iconAfter?: ReactNode,
  onClick?: MouseEventHandler<HTMLElement> | (() => void),
  id?: string,
  className?: string
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"mode",value:{name:"ButtonMode",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"iconBefore",value:{name:"ReactNode",required:!1}},{key:"iconAfter",value:{name:"ReactNode",required:!1}},{key:"onClick",value:{name:"union",raw:"MouseEventHandler<HTMLElement> | (() => void)",elements:[{name:"MouseEventHandler",elements:[{name:"HTMLElement"}],raw:"MouseEventHandler<HTMLElement>"},{name:"unknown"}],required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"TestingProps"}]}],raw:"Record<keyof typeof ActionsMap, ActionType>"}],raw:"Partial<Record<keyof typeof ActionsMap, ActionType>>"},description:"Actions set, use the actions prop to let users act on the content in the modal"},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Width"},customButtons:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  text?: string,
  mode?: ButtonMode,
  loading?: boolean,
  disabled?: boolean,
  iconBefore?: ReactNode,
  iconAfter?: ReactNode,
  onClick?: MouseEventHandler<HTMLElement> | (() => void),
  id?: string,
  className?: string
} & TestingProps`,elements:[{name:"signature",type:"object",raw:`{
  text?: string,
  mode?: ButtonMode,
  loading?: boolean,
  disabled?: boolean,
  iconBefore?: ReactNode,
  iconAfter?: ReactNode,
  onClick?: MouseEventHandler<HTMLElement> | (() => void),
  id?: string,
  className?: string
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"mode",value:{name:"ButtonMode",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"iconBefore",value:{name:"ReactNode",required:!1}},{key:"iconAfter",value:{name:"ReactNode",required:!1}},{key:"onClick",value:{name:"union",raw:"MouseEventHandler<HTMLElement> | (() => void)",elements:[{name:"MouseEventHandler",elements:[{name:"HTMLElement"}],raw:"MouseEventHandler<HTMLElement>"},{name:"unknown"}],required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"TestingProps"}]}],raw:"ActionType[]"},description:"More buttons for modal, need for backward compatibility with console Confirmation Popup"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},mode:{required:!1,tsType:{name:"union",raw:"'default' | 'warning' | 'error' | 'success' | 'ai'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'ai'"}]},description:"Color mode"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"Size"}}};export{Le as M};
