import{e as he,f as ve,g as ye,aE as Fe,U as Be,h as we,i as ee,j as U,k as A,r as u,l as N,_ as qe,a as Ve,R as m,H,ah as je,T as J,A as Ue,a1 as Xe,a0 as Ke,w as Ye,u as Ze,aC as Ge}from"./iframe-DlY6n6Um.js";import{T as Je}from"./TextWithTruncation-CKM_ry59.js";import{P as Qe}from"./PortalWrapper-BiZl32E3.js";import{K as et}from"./KeyCode-B45xthVk.js";import{o as tt,a as at,R as nt,t as ge}from"./type-Cyafuwrq.js";import{u as rt}from"./useForceUpdate-Baz3Ps8R.js";function ot(n){return Array.isArray(n)?n:[n]}var be={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},Ce=Object.keys(be).filter(function(n){if(typeof document>"u")return!1;var c=document.getElementsByTagName("html")[0];return n in(c?c.style:{})})[0],ie=be[Ce];function le(n,c,s,i){n.addEventListener?n.addEventListener(c,s,i):n.attachEvent&&n.attachEvent("on".concat(c),s)}function ce(n,c,s,i){n.removeEventListener?n.removeEventListener(c,s,i):n.attachEvent&&n.detachEvent("on".concat(c),s)}function st(n,c){var s=typeof n=="function"?n(c):n;return Array.isArray(s)?s.length===2?s:[s[0],s[1]]:[s]}var de=function(c){return!isNaN(parseFloat(c))&&isFinite(c)},Q=!(typeof window<"u"&&window.document&&window.document.createElement),it=function n(c,s,i,e){if(!s||s===document||s instanceof Document)return!1;if(s===c.parentNode)return!0;var a=Math.max(Math.abs(i),Math.abs(e))===Math.abs(e),t=Math.max(Math.abs(i),Math.abs(e))===Math.abs(i),o=s.scrollHeight-s.clientHeight,r=s.scrollWidth-s.clientWidth,l=document.defaultView.getComputedStyle(s),p=l.overflowY==="auto"||l.overflowY==="scroll",d=l.overflowX==="auto"||l.overflowX==="scroll",h=o&&p,f=r&&d;return a&&(!h||h&&(s.scrollTop>=o&&e<0||s.scrollTop<=0&&e>0))||t&&(!f||f&&(s.scrollLeft>=r&&i<0||s.scrollLeft<=0&&i>0))?n(c,s.parentNode,i,e):!1},lt=["className","children","style","width","height","defaultOpen","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","handler","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","onClose","onHandleClick","keyboard","getOpenCount","scrollLocker","contentWrapperStyle"],V={},pe=function(n){he(s,n);var c=ve(s);function s(i){var e;return ye(this,s),e=c.call(this,i),e.levelDom=void 0,e.dom=void 0,e.contentWrapper=void 0,e.contentDom=void 0,e.maskDom=void 0,e.handlerDom=void 0,e.drawerId=void 0,e.timeout=void 0,e.passive=void 0,e.startPos=void 0,e.domFocus=function(){e.dom&&e.dom.focus()},e.removeStartHandler=function(a){if(a.touches.length>1){e.startPos=null;return}e.startPos={x:a.touches[0].clientX,y:a.touches[0].clientY}},e.removeMoveHandler=function(a){if(!(a.changedTouches.length>1||!e.startPos)){var t=a.currentTarget,o=a.changedTouches[0].clientX-e.startPos.x,r=a.changedTouches[0].clientY-e.startPos.y;(t===e.maskDom||t===e.handlerDom||t===e.contentDom&&it(t,a.target,o,r))&&a.cancelable&&a.preventDefault()}},e.transitionEnd=function(a){var t=a.target;ce(t,ie,e.transitionEnd),t.style.transition=""},e.onKeyDown=function(a){if(a.keyCode===et.ESC){var t=e.props.onClose;a.stopPropagation(),t&&t(a)}},e.onWrapperTransitionEnd=function(a){var t=e.props,o=t.open,r=t.afterVisibleChange;a.target===e.contentWrapper&&a.propertyName.match(/transform$/)&&(e.dom.style.transition="",!o&&e.getCurrentDrawerSome()&&(document.body.style.overflowX="",e.maskDom&&(e.maskDom.style.left="",e.maskDom.style.width="")),r&&r(!!o))},e.openLevelTransition=function(){var a=e.props,t=a.open,o=a.width,r=a.height,l=e.getHorizontalBoolAndPlacementName(),p=l.isHorizontal,d=l.placementName,h=e.contentDom?e.contentDom.getBoundingClientRect()[p?"width":"height"]:0,f=(p?o:r)||h;e.setLevelAndScrolling(t,d,f)},e.setLevelTransform=function(a,t,o,r){var l=e.props,p=l.placement,d=l.levelMove,h=l.duration,f=l.ease,y=l.showMask;e.levelDom.forEach(function(C){C.style.transition="transform ".concat(h," ").concat(f),le(C,ie,e.transitionEnd);var b=a?o:0;if(d){var S=st(d,{target:C,open:a});b=a?S[0]:S[1]||0}var D=typeof b=="number"?"".concat(b,"px"):b,E=p==="left"||p==="top"?D:"-".concat(D);E=y&&p==="right"&&r?"calc(".concat(E," + ").concat(r,"px)"):E,C.style.transform=b?"".concat(t,"(").concat(E,")"):""})},e.setLevelAndScrolling=function(a,t,o){var r=e.props.onChange;if(!Q){var l=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth?Fe(!0):0;e.setLevelTransform(a,t,o,l),e.toggleScrollingToDrawerAndBody(l)}r&&r(a)},e.toggleScrollingToDrawerAndBody=function(a){var t=e.props,o=t.getContainer,r=t.showMask,l=t.open,p=o&&o();if(p&&p.parentNode===document.body&&r){var d=["touchstart"],h=[document.body,e.maskDom,e.handlerDom,e.contentDom];l&&document.body.style.overflow!=="hidden"?(a&&e.addScrollingEffect(a),document.body.style.touchAction="none",h.forEach(function(f,y){f&&le(f,d[y]||"touchmove",y?e.removeMoveHandler:e.removeStartHandler,e.passive)})):e.getCurrentDrawerSome()&&(document.body.style.touchAction="",a&&e.remScrollingEffect(a),h.forEach(function(f,y){f&&ce(f,d[y]||"touchmove",y?e.removeMoveHandler:e.removeStartHandler,e.passive)}))}},e.addScrollingEffect=function(a){var t=e.props,o=t.placement,r=t.duration,l=t.ease,p="width ".concat(r," ").concat(l),d="transform ".concat(r," ").concat(l);switch(e.dom.style.transition="none",o){case"right":e.dom.style.transform="translateX(-".concat(a,"px)");break;case"top":case"bottom":e.dom.style.width="calc(100% - ".concat(a,"px)"),e.dom.style.transform="translateZ(0)";break}clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.dom&&(e.dom.style.transition="".concat(d,",").concat(p),e.dom.style.width="",e.dom.style.transform="")})},e.remScrollingEffect=function(a){var t=e.props,o=t.placement,r=t.duration,l=t.ease;Ce&&(document.body.style.overflowX="hidden"),e.dom.style.transition="none";var p,d="width ".concat(r," ").concat(l),h="transform ".concat(r," ").concat(l);switch(o){case"left":{e.dom.style.width="100%",d="width 0s ".concat(l," ").concat(r);break}case"right":{e.dom.style.transform="translateX(".concat(a,"px)"),e.dom.style.width="100%",d="width 0s ".concat(l," ").concat(r),e.maskDom&&(e.maskDom.style.left="-".concat(a,"px"),e.maskDom.style.width="calc(100% + ".concat(a,"px)"));break}case"top":case"bottom":{e.dom.style.width="calc(100% + ".concat(a,"px)"),e.dom.style.height="100%",e.dom.style.transform="translateZ(0)",p="height 0s ".concat(l," ").concat(r);break}}clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.dom&&(e.dom.style.transition="".concat(h,",").concat(p?"".concat(p,","):"").concat(d),e.dom.style.transform="",e.dom.style.width="",e.dom.style.height="")})},e.getCurrentDrawerSome=function(){return!Object.keys(V).some(function(a){return V[a]})},e.getLevelDom=function(a){var t=a.level,o=a.getContainer;if(!Q){var r=o&&o(),l=r?r.parentNode:null;if(e.levelDom=[],t==="all"){var p=l?Array.prototype.slice.call(l.children):[];p.forEach(function(d){d.nodeName!=="SCRIPT"&&d.nodeName!=="STYLE"&&d.nodeName!=="LINK"&&d!==r&&e.levelDom.push(d)})}else t&&ot(t).forEach(function(d){document.querySelectorAll(d).forEach(function(h){e.levelDom.push(h)})})}},e.getHorizontalBoolAndPlacementName=function(){var a=e.props.placement,t=a==="left"||a==="right",o="translate".concat(t?"X":"Y");return{isHorizontal:t,placementName:o}},e.state={_self:Be(e)},e}return we(s,[{key:"componentDidMount",value:function(){var e=this;if(!Q){var a=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){return a=!0,null}}))}catch{}this.passive=a?{passive:!1}:!1}var t=this.props,o=t.open,r=t.getContainer,l=t.showMask,p=t.autoFocus,d=r&&r();if(this.drawerId="drawer_id_".concat(Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)),this.getLevelDom(this.props),o&&(d&&d.parentNode===document.body&&(V[this.drawerId]=o),this.openLevelTransition(),this.forceUpdate(function(){p&&e.domFocus()}),l)){var h;(h=this.props.scrollLocker)===null||h===void 0||h.lock()}}},{key:"componentDidUpdate",value:function(e){var a=this.props,t=a.open,o=a.getContainer,r=a.scrollLocker,l=a.showMask,p=a.autoFocus,d=o&&o();t!==e.open&&(d&&d.parentNode===document.body&&(V[this.drawerId]=!!t),this.openLevelTransition(),t?(p&&this.domFocus(),l&&(r==null||r.lock())):r==null||r.unLock())}},{key:"componentWillUnmount",value:function(){var e=this.props,a=e.open,t=e.scrollLocker;delete V[this.drawerId],a&&(this.setLevelTransform(!1),document.body.style.touchAction=""),t==null||t.unLock()}},{key:"render",value:function(){var e,a=this,t=this.props,o=t.className,r=t.children,l=t.style,p=t.width,d=t.height;t.defaultOpen;var h=t.open,f=t.prefixCls,y=t.placement;t.level,t.levelMove,t.ease,t.duration,t.getContainer;var C=t.handler;t.onChange,t.afterVisibleChange;var b=t.showMask,S=t.maskClosable,D=t.maskStyle,E=t.onClose,M=t.onHandleClick,P=t.keyboard;t.getOpenCount,t.scrollLocker;var W=t.contentWrapperStyle,F=ee(t,lt),g=this.dom?h:!1,B=U(f,(e={},A(e,"".concat(f,"-").concat(y),!0),A(e,"".concat(f,"-open"),g),A(e,o||"",!!o),A(e,"no-mask",!b),e)),q=this.getHorizontalBoolAndPlacementName(),x=q.placementName,I=y==="left"||y==="top"?"-100%":"100%",z=g?"":"".concat(x,"(").concat(I,")"),k=C&&u.cloneElement(C,{onClick:function(v){C.props.onClick&&C.props.onClick(),M&&M(v)},ref:function(v){a.handlerDom=v}});return u.createElement("div",N({},tt(F,["switchScrollingEffect","autoFocus"]),{tabIndex:-1,className:B,style:l,ref:function(v){a.dom=v},onKeyDown:g&&P?this.onKeyDown:void 0,onTransitionEnd:this.onWrapperTransitionEnd}),b&&u.createElement("div",{className:"".concat(f,"-mask"),onClick:S?E:void 0,style:D,ref:function(v){a.maskDom=v}}),u.createElement("div",{className:"".concat(f,"-content-wrapper"),style:qe({transform:z,msTransform:z,width:de(p)?"".concat(p,"px"):p,height:de(d)?"".concat(d,"px"):d},W),ref:function(v){a.contentWrapper=v}},u.createElement("div",{className:"".concat(f,"-content"),ref:function(v){a.contentDom=v}},r),k))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=a.prevProps,o=a._self,r={prevProps:e};if(t!==void 0){var l=e.placement,p=e.level;l!==t.placement&&(o.contentDom=null),p!==t.level&&o.getLevelDom(e)}return r}}]),s}(u.Component),ct=["defaultOpen","getContainer","wrapperClassName","forceRender","handler"],dt=["visible","afterClose"],ke=function(n){he(s,n);var c=ve(s);function s(i){var e;ye(this,s),e=c.call(this,i),e.dom=void 0,e.onHandleClick=function(t){var o=e.props,r=o.onHandleClick,l=o.open;if(r&&r(t),typeof l>"u"){var p=e.state.open;e.setState({open:!p})}},e.onClose=function(t){var o=e.props,r=o.onClose,l=o.open;r&&r(t),typeof l>"u"&&e.setState({open:!1})};var a=typeof i.open<"u"?i.open:!!i.defaultOpen;return e.state={open:a},"onMaskClick"in i&&console.warn("`onMaskClick` are removed, please use `onClose` instead."),e}return we(s,[{key:"render",value:function(){var e=this,a=this.props;a.defaultOpen;var t=a.getContainer,o=a.wrapperClassName,r=a.forceRender,l=a.handler,p=ee(a,ct),d=this.state.open;if(!t)return u.createElement("div",{className:o,ref:function(y){e.dom=y}},u.createElement(pe,N({},p,{open:d,handler:l,getContainer:function(){return e.dom},onClose:this.onClose,onHandleClick:this.onHandleClick})));var h=!!l||r;return u.createElement(Qe,{visible:d,forceRender:h,getContainer:t,wrapperClassName:o},function(f){var y=f.visible,C=f.afterClose,b=ee(f,dt);return u.createElement(pe,N({},p,b,{open:y!==void 0?y:d,afterVisibleChange:C!==void 0?C:p.afterVisibleChange,handler:l,onClose:e.onClose,onHandleClick:e.onHandleClick}))})}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=a.prevProps,o={prevProps:e};return typeof t<"u"&&e.open!==t.open&&(o.open=e.open),o}}]),s}(u.Component);ke.defaultProps={prefixCls:"drawer",placement:"left",getContainer:"body",defaultOpen:!1,level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",onChange:function(){},afterVisibleChange:function(){},handler:u.createElement("div",{className:"drawer-handle"},u.createElement("i",{className:"drawer-handle-icon"})),showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",className:"",keyboard:!0,forceRender:!1,autoFocus:!0};var pt=function(n,c){var s={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&c.indexOf(i)<0&&(s[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,i=Object.getOwnPropertySymbols(n);e<i.length;e++)c.indexOf(i[e])<0&&Object.prototype.propertyIsEnumerable.call(n,i[e])&&(s[i[e]]=n[i[e]]);return s},ue=u.createContext(null);ge("top","right","bottom","left");ge("default","large");var fe={distance:180},Ee=u.forwardRef(function(n,c){var s=n.width,i=n.height,e=n.size,a=e===void 0?"default":e,t=n.closable,o=t===void 0?!0:t,r=n.placement,l=r===void 0?"right":r,p=n.maskClosable,d=p===void 0?!0:p,h=n.mask,f=h===void 0?!0:h,y=n.level,C=y===void 0?null:y,b=n.keyboard,S=b===void 0?!0:b,D=n.push,E=D===void 0?fe:D,M=n.closeIcon,P=M===void 0?u.createElement(nt,null):M,W=n.bodyStyle,F=n.drawerStyle,g=n.prefixCls,B=n.className,q=n.direction,x=n.visible,I=n.children,z=n.zIndex,k=n.destroyOnClose,w=n.style,v=n.title,T=n.headerStyle,X=n.onClose,te=n.footer,Pe=n.footerStyle,K=n.extra,Te=pt(n,["width","height","size","closable","placement","maskClosable","mask","level","keyboard","push","closeIcon","bodyStyle","drawerStyle","prefixCls","className","direction","visible","children","zIndex","destroyOnClose","style","title","headerStyle","onClose","footer","footerStyle","extra"]),Re=rt(),$e=u.useState(!1),ae=Ve($e,2),He=ae[0],ne=ae[1],L=u.useContext(ue),Y=u.useRef(!1);u.useEffect(function(){return x&&L&&L.push(),function(){L&&L.pull()}},[]),u.useEffect(function(){L&&(x?L.push():L.pull())},[x]);var Z=u.useMemo(function(){return{push:function(){E&&ne(!0)},pull:function(){E&&ne(!1)}}},[E]);u.useImperativeHandle(c,function(){return Z},[Z]);var re=k&&!x,Me=function(){re&&(x||(Y.current=!0,Re()))},oe=function(){if(!x&&!f)return{};var R={};if(l==="left"||l==="right"){var G=a==="large"?736:378;R.width=typeof s>"u"?G:s}else{var se=a==="large"?736:378;R.height=typeof i>"u"?se:i}return R},Le=function(){var R=function(O){var $;if(typeof E=="boolean"?$=E?fe.distance:0:$=E.distance,$=parseFloat(String($||0)),O==="left"||O==="right")return"translateX(".concat(O==="left"?$:-$,"px)");if(O==="top"||O==="bottom")return"translateY(".concat(O==="top"?$:-$,"px)")},G=f?{}:oe();return N(N({zIndex:z,transform:He?R(l):void 0},G),w)},_e=o&&u.createElement("button",{type:"button",onClick:X,"aria-label":"Close",className:"".concat(g,"-close")},P);function Ie(){return!v&&!o?null:u.createElement("div",{className:U("".concat(g,"-header"),A({},"".concat(g,"-header-close-only"),o&&!v&&!K)),style:T},u.createElement("div",{className:"".concat(g,"-header-title")},_e,v&&u.createElement("div",{className:"".concat(g,"-title")},v)),K&&u.createElement("div",{className:"".concat(g,"-extra")},K))}function ze(){if(!te)return null;var _="".concat(g,"-footer");return u.createElement("div",{className:_,style:Pe},te)}var Oe=function(){if(Y.current&&!x)return null;Y.current=!1;var R={};return re&&(R.opacity=0,R.transition="opacity .3s"),u.createElement("div",{className:"".concat(g,"-wrapper-body"),style:N(N({},R),F),onTransitionEnd:Me},Ie(),u.createElement("div",{className:"".concat(g,"-body"),style:W},I),ze())},Ae=U(A({"no-mask":!f},"".concat(g,"-rtl"),q==="rtl"),B),We=f?oe():{};return u.createElement(ue.Provider,{value:Z},u.createElement(ke,N({handler:!1},N({placement:l,prefixCls:g,maskClosable:d,level:C,keyboard:S,children:I,onClose:X},Te),We,{open:x,showMask:f,style:Le(),className:Ae}),Oe()))});Ee.displayName="Drawer";var xe=u.forwardRef(function(n,c){var s=n.prefixCls,i=n.getContainer,e=u.useContext(at),a=e.getPopupContainer,t=e.getPrefixCls,o=e.direction,r=t("drawer",s),l=i===void 0&&a?function(){return a(document.body)}:i;return u.createElement(Ee,N({},n,{ref:c,prefixCls:r,getContainer:l,direction:o}))});xe.displayName="DrawerWrapper";function ut({visible:n,onClose:c,isTopmost:s}){m.useEffect(()=>{if(!n||!c)return;const i=a=>a.key==="Escape",e=a=>{i(a)&&(s&&!s()||c(a))};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[n,c,s])}const ft=H.div`
  display: grid;
  grid-template-columns: ${n=>n.hasPrefix?"max-content auto 1fr":"auto 1fr"};
  align-items: start;
  grid-gap: 8px;
  flex: 1;

  .hexa-ui-truncated-title {
    overflow: hidden;
  }

  .hexa-ui-sidebar-custom-title {
    overflow: hidden;
  }
`,me=H.div`
  display: flex;
  align-items: center;
  margin-top: 4px;

  &.sidebar-postfix {
    margin-right: 8px;
  }
`,mt=H.div`
  grid-column: ${n=>n.hasPrefix?"2 / 4":"1 / 3"};
  word-break: break-word;
`,ht=H.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Se=H.div`
  display: flex;
  justify-content: space-between;
`,Ne=H.div``,Pt=H.div`
  padding: 0 24px;
  padding-bottom: ${({paddingBottom:n})=>n?"24px":"0px"};
`,vt=({onClose:n})=>m.createElement(Ue,{onClick:n,size:"large",testId:"sidebar-close-icon",klId:"close-icon"}),De=({title:n,subtitle:c,postfix:s,prefix:i,headerActions:e,onClose:a,subHeader:t,truncateTitle:o,lineClamp:r})=>{const l=typeof n=="string"?m.createElement(je,{testId:"sidebar-title",klId:"title",className:U((o||r&&r>=1)&&"hexa-ui-truncated-title")},m.createElement(Je,{text:n,truncate:o,lineClamp:r},n)):m.createElement("div",{"data-testid":"sidebar-title",className:"hexa-ui-sidebar-custom-title"},m.createElement(J,null,n));return m.createElement(m.Fragment,null,m.createElement(Se,null,m.createElement(ft,{hasPrefix:!!i},!!i&&m.createElement(me,null,i),l,!!s&&m.createElement(me,{className:"sidebar-postfix"},s),!!c&&m.createElement(mt,{hasPrefix:!!i},m.createElement(m.Fragment,null,typeof c=="string"?m.createElement(J,{type:"BTR2",testId:"sidebar-subtitle",klId:"sidebar-subtitle"},c):m.createElement(J,null,c)))),m.createElement("div",{className:"ant-drawer-extra"},m.createElement(ht,null,e,m.createElement(vt,{onClose:a})))),t||m.createElement(Ne,null))};De.__docgenInfo={description:"",methods:[],displayName:"SidebarHeader",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},postfix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subHeader:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headerActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},truncateTitle:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"SidebarProps['onClose']",raw:"SidebarProps['onClose']"},description:""},lineClamp:{required:!1,tsType:{name:"number"},description:""}}};const j=Xe(),yt=Ke`
  .ant-drawer-header {
    padding: 0;
    border-bottom: 0;
    background: transparent;
    border-radius: unset;
    align-items: flex-start;

    .ant-drawer-extra {
      padding-top: 6px;
    }

    & > .ant-drawer-header-title {
      width: 100%;
      flex-direction: row-reverse;
      gap: ${j("gap")};
    }

    .ant-drawer-close {
      padding: 0;
      top: 2px;
      width: 32px;
      height: 32px;

      margin-right: 0;

      & > {
        display: inline-block;
      }
    }

    .ant-drawer-title {
      overflow: hidden;

      h3 {
        margin-bottom: 0;
        word-break: break-word;
      }
    }
  }

  [data-testid="sidebar-title"] {
    width: 100%;
  }

  &.no-padding .ant-drawer-body {
    padding: 0;
    .antd-sidebar-content {
      height: 100%;
    }
  }

  .antd-sidebar-content {
    position: relative;
  }

  &.ant-drawer-right.ant-drawer-open .ant-drawer-content-wrapper {
    box-shadow: 0 18px 28px rgba(9, 30, 66, 0.15),
      0 0 1px rgba(9, 30, 66, 0.31);
  }

  .ant-drawer-footer {
    border-top: 1px solid ${j("drawer.border")};
    padding: ${j("padding")};
  }

  .ant-drawer-footer > * {
    display: flex;
  }

  .ant-drawer-footer .antd-sidebar-footer-left {
    display: inline-flex;
    gap: var(--spacing--gap_related);
  }

  .ant-drawer-footer .antd-sidebar-footer-right {
    display: inline-flex;
    gap: var(--spacing--gap_related);
    margin-left: auto;
  }

  div${Se} {
    padding: ${j("padding")};
  }
  
  div${Ne} {
    margin: 0;
    height: 1px;
    background: ${j("drawer.border")};
  }
`,wt=n=>Ye(n,{componentName:"sidebar",defaultValues:{size:"medium"}}),gt=H(xe).withConfig({shouldForwardProp:n=>!["cssConfig"].includes(n)})`
  ${yt}
`,bt=n=>{const c=wt(n),s=Ze(c);return m.createElement(Ct,{...s})},Ct=({title:n,cssConfig:c,mask:s=!0,visible:i=!1,zIndex:e=1e3,flex:a=!1,onClose:t,headerActions:o=null,subtitle:r,titlePrefix:l,titlePostfix:p,children:d,testAttributes:h,subHeader:f,destroyOnClose:y,truncateTitle:C,footerLeft:b,footerRight:S,noPaddingContent:D,titleLineClamp:E,...M})=>{const P=m.useRef(null),[W,F]=u.useState(Math.random()),[g,B]=u.useState(!1),q=m.useCallback(()=>{var w,v;const k=(v=(w=P.current)==null?void 0:w.closest(".ant-drawer"))==null?void 0:v.parentElement;return!!k&&k.classList.contains("antd-sidebar-wrapper_last")},[]),x=m.useCallback(k=>{var T;if(!i)return t==null?void 0:t(k);const w=Array.from(document.querySelectorAll(".antd-sidebar-wrapper .ant-drawer-open"));if(w.length<=1)return t==null?void 0:t(k);document.querySelectorAll(".antd-sidebar-wrapper_last").forEach(X=>X.classList.remove("antd-sidebar-wrapper_last"));const v=w[w.length-2];(T=v==null?void 0:v.parentElement)==null||T.classList.add("antd-sidebar-wrapper_last"),t==null||t(k)},[i,t]);ut({visible:i,onClose:x,isTopmost:q}),u.useEffect(()=>{var k,w;if(i){if(document.querySelectorAll(".antd-sidebar-wrapper_last").forEach(T=>{T.classList.remove("antd-sidebar-wrapper_last")}),!P.current)return;((w=(k=P.current)==null?void 0:k.closest(".ant-drawer"))==null?void 0:w.parentNode).classList.add("antd-sidebar-wrapper_last")}},[i]);const I=m.useCallback(k=>{var v,T;const w=(T=(v=P.current)==null?void 0:v.closest(".ant-drawer"))==null?void 0:T.parentNode;k&&w.classList.add("antd-sidebar-wrapper"),B(k)},[]);u.useEffect(()=>{y&&!i&&!g&&F(Math.random())},[y,g,i]);const z=a?`calc(100% - ${c.flexMarginLeft}px)`:c.width;return m.createElement(gt,{className:U({"no-padding":D}),key:W,maskStyle:{backgroundColor:c.mask.background,animation:"none",transition:"none"},drawerStyle:{backgroundColor:c.drawer.background},afterVisibleChange:I,title:m.createElement(De,{title:n,subtitle:r,prefix:l,postfix:p,headerActions:o,onClose:x,subHeader:f,truncateTitle:C,lineClamp:E}),closeIcon:null,width:z,onClose:x,cssConfig:c,closable:!1,keyboard:!0,mask:s,maskClosable:!0,placement:"right",visible:i,zIndex:e,push:!1,footer:b||S?m.createElement("div",null,b&&m.createElement("div",{className:"antd-sidebar-footer-left"},b),S&&m.createElement("div",{className:"antd-sidebar-footer-right"},S)):void 0,...h,...M},m.createElement("div",{className:"antd-sidebar-content",ref:P,...Ge("sidebar-content",h)},d))};bt.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{size:{required:!1,tsType:{name:"literal",value:"`${Exclude<Size, Size.ExtraLarge>}`"},description:"Size"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};export{bt as S,Ne as a,Pt as b};
