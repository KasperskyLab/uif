import{R as p,a5 as J,p as ve,g as D,h as z,i as U,j as O,l as x,m as L,r as h,a_ as K,n as re,s as ye,a6 as ke,H as S,z as $,B as ae,C as H,a1 as Ce,ao as xe,D as W,F as ie,w as oe}from"./iframe-4-PRSI1I.js";import{u as be}from"./useIntersectionChildren-D4PDHuHj.js";import{B as le}from"./Badge-B3_Y1H2J.js";import{D as we}from"./Dropdown-BZXGqesC.js";import{I as se}from"./Indicator-D1HJCmfp.js";import{o as Te}from"./Menu2-CvX9huZG.js";import{a as de,m as Ie,C as Ne}from"./index-C0IykO9V.js";import{a as R}from"./addEventListener-DmCE5wjQ.js";import{o as Ae}from"./omit-DXgDXInf.js";import{g as Le,s as Ee}from"./scrollTo-BlJ51Yvf.js";import{B as Ve}from"./Button-D2E54Ulj.js";const ce=a=>typeof a=="number",F=({title:a,counter:l,hasNotification:n=!1})=>{const e=ce(l)&&l>0;return p.createElement("span",{className:"content-container"},p.createElement("span",null,a),p.createElement("span",{className:"description-container"},e&&p.createElement(le,{mode:"neutral",count:l,klId:"anchor-link-counter"}),n&&p.createElement("span",{className:"notification-container"},p.createElement(se,{mode:"high"}))))};try{F.displayName="AnchorLinkContent",F.__docgenInfo={description:"",displayName:"AnchorLinkContent",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},counter:{defaultValue:null,description:"",name:"counter",required:!1,type:{name:"number"}},hasNotification:{defaultValue:{value:"false"},description:"",name:"hasNotification",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}function _e(a){var l,n=function(r){return function(){l=null,a.apply(void 0,ve(r))}},e=function(){if(l==null){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];l=J(n(o))}};return e.cancel=function(){return J.cancel(l)},e}function ue(){return function(l,n,e){var t=e.value,r=!1;return{configurable:!0,get:function(){if(r||this===l.prototype||this.hasOwnProperty(n))return t;var i=_e(t.bind(this));return r=!0,Object.defineProperty(this,n,{value:i,configurable:!0,writable:!0}),r=!1,i}}}}function q(a){return a!==window?a.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function Q(a,l,n){if(n!==void 0&&l.top>a.top-n)return n+l.top}function X(a,l,n){if(n!==void 0&&l.bottom<a.bottom+n){var e=window.innerHeight-l.bottom;return n+e}}var fe=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],A=[];function Y(a,l){if(a){var n=A.find(function(e){return e.target===a});n?n.affixList.push(l):(n={target:a,affixList:[l],eventHandlers:{}},A.push(n),fe.forEach(function(e){n.eventHandlers[e]=R(a,e,function(){n.affixList.forEach(function(t){t.lazyUpdatePosition()})})}))}}function Z(a){var l=A.find(function(n){var e=n.affixList.some(function(t){return t===a});return e&&(n.affixList=n.affixList.filter(function(t){return t!==a})),e});l&&l.affixList.length===0&&(A=A.filter(function(n){return n!==l}),fe.forEach(function(n){var e=l.eventHandlers[n];e&&e.remove&&e.remove()}))}var pe=function(a,l,n,e){var t=arguments.length,r=t<3?l:e===null?e=Object.getOwnPropertyDescriptor(l,n):e,o;if((typeof Reflect>"u"?"undefined":ye(Reflect))==="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,l,n,e);else for(var i=a.length-1;i>=0;i--)(o=a[i])&&(r=(t<3?o(r):t>3?o(l,n,r):o(l,n))||r);return t>3&&r&&Object.defineProperty(l,n,r),r};function qe(){return typeof window<"u"?window:null}var N;(function(a){a[a.None=0]="None",a[a.Prepare=1]="Prepare"})(N||(N={}));var P=function(a){D(n,a);var l=z(n);function n(){var e;return U(this,n),e=l.apply(this,arguments),e.state={status:N.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props,r=t.offsetBottom,o=t.offsetTop;return r===void 0&&o===void 0?0:o},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,r=t.status,o=t.lastAffix,i=e.props.onChange,s=e.getTargetFunc();if(!(r!==N.Prepare||!e.fixedNode||!e.placeholderNode||!s)){var c=e.getOffsetTop(),f=e.getOffsetBottom(),m=s();if(m){var u={status:N.None},v=q(m),g=q(e.placeholderNode),y=Q(g,v,c),k=X(g,v,f);y!==void 0?(u.affixStyle={position:"fixed",top:y,width:g.width,height:g.height},u.placeholderStyle={width:g.width,height:g.height}):k!==void 0&&(u.affixStyle={position:"fixed",bottom:k,width:g.width,height:g.height},u.placeholderStyle={width:g.width,height:g.height}),u.lastAffix=!!u.affixStyle,i&&o!==u.lastAffix&&i(u.lastAffix),e.setState(u)}}},e.prepareMeasure=function(){e.setState({status:N.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e}return O(n,[{key:"getTargetFunc",value:function(){var t=this.context.getTargetContainer,r=this.props.target;return r!==void 0?r:t||qe}},{key:"componentDidMount",value:function(){var t=this,r=this.getTargetFunc();r&&(this.timeout=setTimeout(function(){Y(r(),t),t.updatePosition()}))}},{key:"componentDidUpdate",value:function(t){var r=this.state.prevTarget,o=this.getTargetFunc(),i=(o==null?void 0:o())||null;r!==i&&(Z(this),i&&(Y(i,this),this.updatePosition()),this.setState({prevTarget:i})),(t.offsetTop!==this.props.offsetTop||t.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),Z(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var t=this.getTargetFunc(),r=this.state.affixStyle;if(t&&r){var o=this.getOffsetTop(),i=this.getOffsetBottom(),s=t();if(s&&this.placeholderNode){var c=q(s),f=q(this.placeholderNode),m=Q(f,c,o),u=X(f,c,i);if(m!==void 0&&r.top===m||u!==void 0&&r.bottom===u)return}}this.prepareMeasure()}},{key:"render",value:function(){var t=this,r=this.context.getPrefixCls,o=this.state,i=o.affixStyle,s=o.placeholderStyle,c=this.props,f=c.prefixCls,m=c.children,u=x(L({},r("affix",f),!!i)),v=Ae(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return h.createElement(K,{onResize:function(){t.updatePosition()}},h.createElement("div",re({},v,{ref:this.savePlaceholderNode}),i&&h.createElement("div",{style:s,"aria-hidden":"true"}),h.createElement("div",{className:u,ref:this.saveFixedNode,style:i},h.createElement(K,{onResize:function(){t.updatePosition()}},m))))}}]),n}(h.Component);P.contextType=de;pe([ue()],P.prototype,"updatePosition",null);pe([ue()],P.prototype,"lazyUpdatePosition",null);var he=h.createContext(null);function Se(){return window}function ee(a,l){if(!a.getClientRects().length)return 0;var n=a.getBoundingClientRect();return n.width||n.height?l===window?(l=a.ownerDocument.documentElement,n.top-l.clientTop):n.top-l.getBoundingClientRect().top:n.top}var te=/#([\S ]+)$/,E=function(a){D(n,a);var l=z(n);function n(){var e;return U(this,n),e=l.apply(this,arguments),e.state={activeLink:null},e.wrapperRef=h.createRef(),e.links=[],e.registerLink=function(t){e.links.includes(t)||e.links.push(t)},e.unregisterLink=function(t){var r=e.links.indexOf(t);r!==-1&&e.links.splice(r,1)},e.getContainer=function(){var t=e.context.getTargetContainer,r=e.props.getContainer,o=r||t||Se;return o()},e.handleScrollTo=function(t){var r=e.props,o=r.offsetTop,i=r.targetOffset;e.setCurrentActiveLink(t);var s=e.getContainer(),c=Le(s),f=te.exec(t);if(f){var m=document.getElementById(f[1]);if(m){var u=ee(m,s),v=c+u;v-=i!==void 0?i:o||0,e.animating=!0,Ee(v,{callback:function(){e.animating=!1},getContainer:e.getContainer})}}},e.saveInkNode=function(t){e.inkNode=t},e.setCurrentActiveLink=function(t){var r=e.state.activeLink,o=e.props,i=o.onChange,s=o.getCurrentAnchor;r!==t&&(e.setState({activeLink:typeof s=="function"?s():t}),i==null||i(t))},e.handleScroll=function(){if(!e.animating){var t=e.props,r=t.offsetTop,o=t.bounds,i=t.targetOffset,s=e.getCurrentAnchor(i!==void 0?i:r||0,o);e.setCurrentActiveLink(s)}},e.updateInk=function(){var t=ke(e),r=t.prefixCls,o=t.wrapperRef,i=o.current,s=i==null?void 0:i.getElementsByClassName("".concat(r,"-link-title-active"))[0];s&&(e.inkNode.style.top="".concat(s.offsetTop+s.clientHeight/2-4.5,"px"))},e.getMemoizedContextValue=Ie(function(t,r){return{registerLink:e.registerLink,unregisterLink:e.unregisterLink,scrollTo:e.handleScrollTo,activeLink:t,onClick:r}}),e}return O(n,[{key:"componentDidMount",value:function(){this.scrollContainer=this.getContainer(),this.scrollEvent=R(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentDidUpdate",value:function(){if(this.scrollEvent){var t=this.getContainer();this.scrollContainer!==t&&(this.scrollContainer=t,this.scrollEvent.remove(),this.scrollEvent=R(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll())}this.updateInk()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"getCurrentAnchor",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5,o=[],i=this.getContainer();if(this.links.forEach(function(c){var f=te.exec(c.toString());if(f){var m=document.getElementById(f[1]);if(m){var u=ee(m,i);u<t+r&&o.push({link:c,top:u})}}}),o.length){var s=o.reduce(function(c,f){return f.top>c.top?f:c});return s.link}return""}},{key:"render",value:function(){var t=this.context,r=t.getPrefixCls,o=t.direction,i=this.props,s=i.prefixCls,c=i.className,f=c===void 0?"":c,m=i.style,u=i.offsetTop,v=i.affix,g=i.showInkInFixed,y=i.children,k=i.onClick,V=this.state.activeLink,d=r("anchor",s);this.prefixCls=d;var C=x("".concat(d,"-ink-ball"),{visible:V}),b=x("".concat(d,"-wrapper"),L({},"".concat(d,"-rtl"),o==="rtl"),f),_=x(d,L({},"".concat(d,"-fixed"),!v&&!g)),me=re({maxHeight:u?"calc(100vh - ".concat(u,"px)"):"100vh"},m),G=h.createElement("div",{ref:this.wrapperRef,className:b,style:me},h.createElement("div",{className:_},h.createElement("div",{className:"".concat(d,"-ink")},h.createElement("span",{className:C,ref:this.saveInkNode})),y)),ge=this.getMemoizedContextValue(V,k);return h.createElement(he.Provider,{value:ge},v?h.createElement(P,{offsetTop:u,target:this.getContainer},G):G)}}]),n}(h.Component);E.defaultProps={affix:!0,showInkInFixed:!1};E.contextType=de;var j=function(a){D(n,a);var l=z(n);function n(){var e;return U(this,n),e=l.apply(this,arguments),e.handleClick=function(t){var r=e.context,o=r.scrollTo,i=r.onClick,s=e.props,c=s.href,f=s.title;i==null||i(t,{title:f,href:c}),o(c)},e.renderAnchorLink=function(t){var r=t.getPrefixCls,o=e.props,i=o.prefixCls,s=o.href,c=o.title,f=o.children,m=o.className,u=o.target,v=r("anchor",i),g=e.context.activeLink===s,y=x("".concat(v,"-link"),L({},"".concat(v,"-link-active"),g),m),k=x("".concat(v,"-link-title"),L({},"".concat(v,"-link-title-active"),g));return h.createElement("div",{className:y},h.createElement("a",{className:k,href:s,title:typeof c=="string"?c:"",target:u,onClick:e.handleClick},c),f)},e}return O(n,[{key:"componentDidMount",value:function(){this.context.registerLink(this.props.href)}},{key:"componentDidUpdate",value:function(t){var r=t.href,o=this.props.href;r!==o&&(this.context.unregisterLink(r),this.context.registerLink(o))}},{key:"componentWillUnmount",value:function(){this.context.unregisterLink(this.props.href)}},{key:"render",value:function(){return h.createElement(Ne,null,this.renderAnchorLink)}}]),n}(h.Component);j.defaultProps={href:"#"};j.contextType=he;E.Link=j;const w=W(),T=Ce(xe.BTM3),Pe=H`
  &.ant-anchor-link {
    transition: opacity .2s;
    padding: 0;

    ${({hidden:a})=>a&&"opacity: 0; pointer-events: none;"}

    && .ant-anchor-link-title {
      &:not([disabled]):focus-visible {
        box-shadow: ${w("focus.boxShadow")};
      }
    }

    .ant-anchor-link-title {
      color: ${w("default.enabled.color")};
      font-family: ${T.fontFamily};
      font-size: ${T.fontSize};
      font-weight: ${T.fontWeight};
      font-style: ${T.fontStyle};
      line-height: ${T.lineHeight};
      letter-spacing: ${T.letterSpacing};
      margin-bottom: 0;
      position: relative;
      padding: ${$[5]}px ${$[8]}px;
      border-radius: ${ae[4]}px;

      &:not([disabled]) {
        &:hover {
          background-color: ${w("default.hover.background")};
        }
        &:active {
          background-color: ${w("default.pressed.background")};
        }
      }

      &-active {
        &,
        :not([disabled]):hover,
        :not([disabled]):active {
          background: ${w("active.background")};
          box-shadow: ${w("boxShadow")};
        }
      }

      .content-container {
        display: flex;
        column-gap: 4px;
        align-items: center;
      }

      .notification-container {
        position: absolute;
        right: 4px;
        top: 4px;
        line-height: 0;
      }
    }
  }
`,$e=S(E.Link).withConfig({shouldForwardProp:a=>!["cssConfig","hidden"].includes(a)})`
  ${Pe}
`,Re=a=>ie(a,{componentName:"anchors",defaultValues:{}}),Fe=a=>{const{counter:l,title:n,hasNotification:e,testAttributes:t,...r}=a;return p.createElement($e,{title:p.createElement(F,{title:n,counter:l,hasNotification:e}),...t,...r})},B=a=>{const l=Re(a),n=oe(l);return p.createElement(Fe,{...n})};try{B.displayName="AnchorLink",B.__docgenInfo={description:"",displayName:"AnchorLink",props:{href:{defaultValue:null,description:"The target of hyperlink",name:"href",required:!0,type:{name:"string"}},target:{defaultValue:null,description:"Specifies where to display the linked URL",name:"target",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"The content of hyperlink",name:"title",required:!0,type:{name:"string"}},counter:{defaultValue:null,description:"Counter value",name:"counter",required:!1,type:{name:"number"}},hasNotification:{defaultValue:null,description:"Does the anchor link have notification dot",name:"hasNotification",required:!1,type:{name:"boolean"}},hidden:{defaultValue:null,description:"If anchor link is hidden in dropdown",name:"hidden",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"React children",name:"children",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}const I=W(),Be=H`
  &&&&&.ant-btn {
    &:not([disabled]):focus-visible {
      box-shadow: ${I("focus.boxShadow")};
    }
  }

  &&&.ant-btn {
    &:not([disabled]) {
      &:hover {
        background-color: ${I("default.hover.background")};
      }
      &:active {
        background-color: ${I("default.pressed.background")};
      }
    }

    &.ant-dropdown-open, &.ant-dropdown-open:hover {
      background-color: ${I("default.pressed.background")};
    }

    &.active {
      &,
      :not([disabled]):hover,
      :not([disabled]):active {
        background: ${I("active.background")};
        box-shadow: ${I("boxShadow")};
      }
    }
  }
`,M=S(Ve).withConfig({shouldForwardProp:a=>!["cssConfig"].includes(a)})`
  ${Be}
`;try{M.displayName="StyledMoreButton",M.__docgenInfo={description:"",displayName:"StyledMoreButton",props:{children:{defaultValue:null,description:"React children",name:"children",required:!1,type:{name:"ReactNode"}},type:{defaultValue:null,description:"HTML attribute 'type'",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},className:{defaultValue:null,description:"Css class",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"On click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"Element id",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraLarge"'}]}},loading:{defaultValue:null,description:"Loading state",name:"loading",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Text",name:"text",required:!1,type:{name:"string"}},iconBefore:{defaultValue:null,description:"Icon before text",name:"iconBefore",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"Color mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"dangerFilled"'},{value:'"dangerOutlined"'},{value:'"ai"'}]}},cssConfig:{defaultValue:null,description:"",name:"cssConfig",required:!0,type:{name:"AnchorLinkColorConfig"}},iconAfter:{defaultValue:null,description:"Icon after text",name:"iconAfter",required:!1,type:{name:"ReactNode"}},isPressed:{defaultValue:null,description:"Display in :active state",name:"isPressed",required:!1,type:{name:"boolean"}},loadingSecond:{defaultValue:null,description:"Loading state second",name:"loadingSecond",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const Me=W(),De=H`
  
  &.ant-anchor-wrapper {
    overflow: visible;
    background: transparent;
  }
  
  & .ant-anchor {
    display: flex;
    background: ${Me("background")};
    width: 100%;
    padding: ${$[2]}px;
    border-radius: ${ae[6]}px;
    overflow: hidden;

    &-ink {
      display: none;
    }
  }

  .container {
    display: flex;
    gap: 2px;
    width: 100%;
    position: relative;
    align-items: center;
  }

  .dropdown-container {
    position: absolute;
    right: 4px;
  }
`,ze=S(E).withConfig({shouldForwardProp:a=>!["cssConfig"].includes(a)})`
  ${De}
`,Ue=S.div.withConfig({shouldForwardProp:a=>!["cssConfig"].includes(a)})``,Oe=a=>ie(a,{componentName:"anchors",defaultValues:{}}),He=40,We=a=>{const{testAttributes:l,items:n=[],onChange:e,onClick:t,...r}=a,[o,i]=h.useState(),s=h.useRef(null),c=h.useRef(null),f=be(s,He),m=ce(f),u=m&&f<n.length-1,v=m?n.slice(f+1,n.length):[],g=v.some(d=>d.href===o),y=d=>{i(d),e==null||e(d)},k=(d,C)=>{var _;d.preventDefault();const{href:b}=C;y(b),(_=document.querySelector(b))==null||_.scrollIntoView({behavior:"smooth"}),t==null||t(d,C)},V=d=>C=>{k(C.domEvent,d)};return p.createElement(Ue,{ref:c,...l},p.createElement(ze,{onChange:y,onClick:k,...r},p.createElement("div",{ref:s,className:"container"},p.createElement(p.Fragment,null,n.map((d,C)=>{const b=m&&C>f;return p.createElement(B,{key:d.href,hidden:b,...d})}),u&&p.createElement("div",{className:"dropdown-container"},p.createElement(we,{trigger:["click"],placement:"bottomRight",overlay:v.map(d=>({children:d.title,onClick:V({href:d.href,title:d.title}),href:d.href,componentsAfter:[...d.counter?[p.createElement(le,{key:"badge",mode:"neutral",count:d.counter,klId:"anchor-link-counter"})]:[],...d.hasNotification?[p.createElement(se,{key:"indicator",mode:"high"})]:[]]}))},p.createElement(M,{size:"large",mode:"tertiary",iconBefore:p.createElement(Te,null),cssConfig:r.cssConfig,className:x(g&&"active")})))))))},ne=a=>{const l=Oe(a),n=oe(l);return p.createElement(We,{...n})};try{ne.displayName="Anchor",ne.__docgenInfo={description:"",displayName:"Anchor",props:{affix:{defaultValue:null,description:"Fixed mode of Anchor",name:"affix",required:!1,type:{name:"boolean"}},bounds:{defaultValue:null,description:"Bounding distance of anchor area",name:"bounds",required:!1,type:{name:"number"}},getContainer:{defaultValue:null,description:"Scrolling container",name:"getContainer",required:!1,type:{name:"(() => HTMLElement)"}},getCurrentAnchor:{defaultValue:null,description:"Customize the anchor highlight",name:"getCurrentAnchor",required:!1,type:{name:"((activeLink?: string) => string)"}},offsetTop:{defaultValue:null,description:"Pixels to offset from top when calculating position of scroll",name:"offsetTop",required:!1,type:{name:"number"}},showInkInFixed:{defaultValue:null,description:"Whether show ink-balls when affix={false}",name:"showInkInFixed",required:!1,type:{name:"boolean"}},targetOffset:{defaultValue:null,description:"Anchor scroll offset, default as offsetTop",name:"targetOffset",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Listening for anchor link change",name:"onChange",required:!1,type:{name:"((currentActiveLink?: string) => void)"}},onClick:{defaultValue:null,description:"Set the handler to handle click event",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLElement, MouseEvent>, link: AnchorLinkProps) => void)"}},items:{defaultValue:null,description:"Anchor links",name:"items",required:!0,type:{name:"AnchorLinkProps[]"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{ne as A,B as a};
