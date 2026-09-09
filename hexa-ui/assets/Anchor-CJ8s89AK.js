import{R as p,ac as J,h as ve,m as D,n as z,o as O,q as H,d as b,t as E,r as h,b2 as K,v as re,y as ye,ad as ke,H as q,k as $,B as ae,C as U,ai as Ce,aj as be,l as W,j as ie,u as oe}from"./iframe-DedYZBTA.js";import{u as xe}from"./useIntersectionChildren-CtinNUu0.js";import{D as we}from"./Dropdown-C8Jtav0F.js";import{o as Te}from"./Menu2-vNCkCt-I.js";import{B as le}from"./Badge-MGlXnKsn.js";import{I as se}from"./Indicator-Bx9eTEZ-.js";import{a as ce,m as Ne,b as Ae}from"./type-8et6jEI2.js";import{a as R}from"./addEventListener-XwZ_2C5f.js";import{o as Le}from"./omit-DXgDXInf.js";import{g as Ee,s as _e}from"./scrollTo-D3QjD7w5.js";import{B as Ve}from"./Button-Dn3YNhT7.js";const ue=a=>typeof a=="number",B=({title:a,counter:l,hasNotification:n=!1})=>{const e=ue(l)&&l>0;return p.createElement("span",{className:"content-container"},p.createElement("span",null,a),p.createElement("span",{className:"description-container"},e&&p.createElement(le,{mode:"neutral",count:l,klId:"anchor-link-counter"}),n&&p.createElement("span",{className:"notification-container"},p.createElement(se,{mode:"high"}))))};try{B.displayName="AnchorLinkContent",B.__docgenInfo={description:"",displayName:"AnchorLinkContent",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},counter:{defaultValue:null,description:"",name:"counter",required:!1,type:{name:"number"}},hasNotification:{defaultValue:{value:"false"},description:"",name:"hasNotification",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}function Se(a){var l,n=function(r){return function(){l=null,a.apply(void 0,ve(r))}},e=function(){if(l==null){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];l=J(n(o))}};return e.cancel=function(){return J.cancel(l)},e}function de(){return function(l,n,e){var t=e.value,r=!1;return{configurable:!0,get:function(){if(r||this===l.prototype||this.hasOwnProperty(n))return t;var i=Se(t.bind(this));return r=!0,Object.defineProperty(this,n,{value:i,configurable:!0,writable:!0}),r=!1,i}}}}function I(a){return a!==window?a.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function Q(a,l,n){if(n!==void 0&&l.top>a.top-n)return n+l.top}function X(a,l,n){if(n!==void 0&&l.bottom<a.bottom+n){var e=window.innerHeight-l.bottom;return n+e}}var fe=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],L=[];function Y(a,l){if(a){var n=L.find(function(e){return e.target===a});n?n.affixList.push(l):(n={target:a,affixList:[l],eventHandlers:{}},L.push(n),fe.forEach(function(e){n.eventHandlers[e]=R(a,e,function(){n.affixList.forEach(function(t){t.lazyUpdatePosition()})})}))}}function Z(a){var l=L.find(function(n){var e=n.affixList.some(function(t){return t===a});return e&&(n.affixList=n.affixList.filter(function(t){return t!==a})),e});l&&l.affixList.length===0&&(L=L.filter(function(n){return n!==l}),fe.forEach(function(n){var e=l.eventHandlers[n];e&&e.remove&&e.remove()}))}var pe=function(a,l,n,e){var t=arguments.length,r=t<3?l:e===null?e=Object.getOwnPropertyDescriptor(l,n):e,o;if((typeof Reflect>"u"?"undefined":ye(Reflect))==="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,l,n,e);else for(var i=a.length-1;i>=0;i--)(o=a[i])&&(r=(t<3?o(r):t>3?o(l,n,r):o(l,n))||r);return t>3&&r&&Object.defineProperty(l,n,r),r};function Ie(){return typeof window<"u"?window:null}var A;(function(a){a[a.None=0]="None",a[a.Prepare=1]="Prepare"})(A||(A={}));var P=function(a){D(n,a);var l=z(n);function n(){var e;return O(this,n),e=l.apply(this,arguments),e.state={status:A.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props,r=t.offsetBottom,o=t.offsetTop;return r===void 0&&o===void 0?0:o},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,r=t.status,o=t.lastAffix,i=e.props.onChange,s=e.getTargetFunc();if(!(r!==A.Prepare||!e.fixedNode||!e.placeholderNode||!s)){var u=e.getOffsetTop(),f=e.getOffsetBottom(),m=s();if(m){var d={status:A.None},v=I(m),g=I(e.placeholderNode),y=Q(g,v,u),k=X(g,v,f);y!==void 0?(d.affixStyle={position:"fixed",top:y,width:g.width,height:g.height},d.placeholderStyle={width:g.width,height:g.height}):k!==void 0&&(d.affixStyle={position:"fixed",bottom:k,width:g.width,height:g.height},d.placeholderStyle={width:g.width,height:g.height}),d.lastAffix=!!d.affixStyle,i&&o!==d.lastAffix&&i(d.lastAffix),e.setState(d)}}},e.prepareMeasure=function(){e.setState({status:A.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e}return H(n,[{key:"getTargetFunc",value:function(){var t=this.context.getTargetContainer,r=this.props.target;return r!==void 0?r:t||Ie}},{key:"componentDidMount",value:function(){var t=this,r=this.getTargetFunc();r&&(this.timeout=setTimeout(function(){Y(r(),t),t.updatePosition()}))}},{key:"componentDidUpdate",value:function(t){var r=this.state.prevTarget,o=this.getTargetFunc(),i=(o==null?void 0:o())||null;r!==i&&(Z(this),i&&(Y(i,this),this.updatePosition()),this.setState({prevTarget:i})),(t.offsetTop!==this.props.offsetTop||t.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),Z(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var t=this.getTargetFunc(),r=this.state.affixStyle;if(t&&r){var o=this.getOffsetTop(),i=this.getOffsetBottom(),s=t();if(s&&this.placeholderNode){var u=I(s),f=I(this.placeholderNode),m=Q(f,u,o),d=X(f,u,i);if(m!==void 0&&r.top===m||d!==void 0&&r.bottom===d)return}}this.prepareMeasure()}},{key:"render",value:function(){var t=this,r=this.context.getPrefixCls,o=this.state,i=o.affixStyle,s=o.placeholderStyle,u=this.props,f=u.prefixCls,m=u.children,d=b(E({},r("affix",f),!!i)),v=Le(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return h.createElement(K,{onResize:function(){t.updatePosition()}},h.createElement("div",re({},v,{ref:this.savePlaceholderNode}),i&&h.createElement("div",{style:s,"aria-hidden":"true"}),h.createElement("div",{className:d,ref:this.saveFixedNode,style:i},h.createElement(K,{onResize:function(){t.updatePosition()}},m))))}}]),n}(h.Component);P.contextType=ce;pe([de()],P.prototype,"updatePosition",null);pe([de()],P.prototype,"lazyUpdatePosition",null);var he=h.createContext(null);function qe(){return window}function ee(a,l){if(!a.getClientRects().length)return 0;var n=a.getBoundingClientRect();return n.width||n.height?l===window?(l=a.ownerDocument.documentElement,n.top-l.clientTop):n.top-l.getBoundingClientRect().top:n.top}var te=/#([\S ]+)$/,_=function(a){D(n,a);var l=z(n);function n(){var e;return O(this,n),e=l.apply(this,arguments),e.state={activeLink:null},e.wrapperRef=h.createRef(),e.links=[],e.registerLink=function(t){e.links.includes(t)||e.links.push(t)},e.unregisterLink=function(t){var r=e.links.indexOf(t);r!==-1&&e.links.splice(r,1)},e.getContainer=function(){var t=e.context.getTargetContainer,r=e.props.getContainer,o=r||t||qe;return o()},e.handleScrollTo=function(t){var r=e.props,o=r.offsetTop,i=r.targetOffset;e.setCurrentActiveLink(t);var s=e.getContainer(),u=Ee(s),f=te.exec(t);if(f){var m=document.getElementById(f[1]);if(m){var d=ee(m,s),v=u+d;v-=i!==void 0?i:o||0,e.animating=!0,_e(v,{callback:function(){e.animating=!1},getContainer:e.getContainer})}}},e.saveInkNode=function(t){e.inkNode=t},e.setCurrentActiveLink=function(t){var r=e.state.activeLink,o=e.props,i=o.onChange,s=o.getCurrentAnchor;r!==t&&(e.setState({activeLink:typeof s=="function"?s():t}),i==null||i(t))},e.handleScroll=function(){if(!e.animating){var t=e.props,r=t.offsetTop,o=t.bounds,i=t.targetOffset,s=e.getCurrentAnchor(i!==void 0?i:r||0,o);e.setCurrentActiveLink(s)}},e.updateInk=function(){var t=ke(e),r=t.prefixCls,o=t.wrapperRef,i=o.current,s=i==null?void 0:i.getElementsByClassName("".concat(r,"-link-title-active"))[0];s&&(e.inkNode.style.top="".concat(s.offsetTop+s.clientHeight/2-4.5,"px"))},e.getMemoizedContextValue=Ne(function(t,r){return{registerLink:e.registerLink,unregisterLink:e.unregisterLink,scrollTo:e.handleScrollTo,activeLink:t,onClick:r}}),e}return H(n,[{key:"componentDidMount",value:function(){this.scrollContainer=this.getContainer(),this.scrollEvent=R(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentDidUpdate",value:function(){if(this.scrollEvent){var t=this.getContainer();this.scrollContainer!==t&&(this.scrollContainer=t,this.scrollEvent.remove(),this.scrollEvent=R(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll())}this.updateInk()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"getCurrentAnchor",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5,o=[],i=this.getContainer();if(this.links.forEach(function(u){var f=te.exec(u.toString());if(f){var m=document.getElementById(f[1]);if(m){var d=ee(m,i);d<t+r&&o.push({link:u,top:d})}}}),o.length){var s=o.reduce(function(u,f){return f.top>u.top?f:u});return s.link}return""}},{key:"render",value:function(){var t=this.context,r=t.getPrefixCls,o=t.direction,i=this.props,s=i.prefixCls,u=i.className,f=u===void 0?"":u,m=i.style,d=i.offsetTop,v=i.affix,g=i.showInkInFixed,y=i.children,k=i.onClick,V=this.state.activeLink,c=r("anchor",s);this.prefixCls=c;var C=b("".concat(c,"-ink-ball"),{visible:V}),x=b("".concat(c,"-wrapper"),E({},"".concat(c,"-rtl"),o==="rtl"),f),S=b(c,E({},"".concat(c,"-fixed"),!v&&!g)),me=re({maxHeight:d?"calc(100vh - ".concat(d,"px)"):"100vh"},m),G=h.createElement("div",{ref:this.wrapperRef,className:x,style:me},h.createElement("div",{className:S},h.createElement("div",{className:"".concat(c,"-ink")},h.createElement("span",{className:C,ref:this.saveInkNode})),y)),ge=this.getMemoizedContextValue(V,k);return h.createElement(he.Provider,{value:ge},v?h.createElement(P,{offsetTop:d,target:this.getContainer},G):G)}}]),n}(h.Component);_.defaultProps={affix:!0,showInkInFixed:!1};_.contextType=ce;var j=function(a){D(n,a);var l=z(n);function n(){var e;return O(this,n),e=l.apply(this,arguments),e.handleClick=function(t){var r=e.context,o=r.scrollTo,i=r.onClick,s=e.props,u=s.href,f=s.title;i==null||i(t,{title:f,href:u}),o(u)},e.renderAnchorLink=function(t){var r=t.getPrefixCls,o=e.props,i=o.prefixCls,s=o.href,u=o.title,f=o.children,m=o.className,d=o.target,v=r("anchor",i),g=e.context.activeLink===s,y=b("".concat(v,"-link"),E({},"".concat(v,"-link-active"),g),m),k=b("".concat(v,"-link-title"),E({},"".concat(v,"-link-title-active"),g));return h.createElement("div",{className:y},h.createElement("a",{className:k,href:s,title:typeof u=="string"?u:"",target:d,onClick:e.handleClick},u),f)},e}return H(n,[{key:"componentDidMount",value:function(){this.context.registerLink(this.props.href)}},{key:"componentDidUpdate",value:function(t){var r=t.href,o=this.props.href;r!==o&&(this.context.unregisterLink(r),this.context.registerLink(o))}},{key:"componentWillUnmount",value:function(){this.context.unregisterLink(this.props.href)}},{key:"render",value:function(){return h.createElement(Ae,null,this.renderAnchorLink)}}]),n}(h.Component);j.defaultProps={href:"#"};j.contextType=he;_.Link=j;const w=W(),T=Ce(be.BTM3),Pe=U`
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
`,$e=q(_.Link).withConfig({shouldForwardProp:a=>!["cssConfig","hidden"].includes(a)})`
  ${Pe}
`,Re=a=>ie(a,{componentName:"anchors",defaultValues:{}}),Be=a=>{const{counter:l,title:n,hasNotification:e,testAttributes:t,...r}=a;return p.createElement($e,{title:p.createElement(B,{title:n,counter:l,hasNotification:e}),...t,...r})},F=a=>{const l=Re(a),n=oe(l);return p.createElement(Be,{...n})};try{F.displayName="AnchorLink",F.__docgenInfo={description:"",displayName:"AnchorLink",props:{href:{defaultValue:null,description:"The target of hyperlink",name:"href",required:!0,type:{name:"string"}},target:{defaultValue:null,description:"Specifies where to display the linked URL",name:"target",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"The content of hyperlink",name:"title",required:!0,type:{name:"string"}},counter:{defaultValue:null,description:"Counter value",name:"counter",required:!1,type:{name:"number"}},hasNotification:{defaultValue:null,description:"Does the anchor link have notification dot",name:"hasNotification",required:!1,type:{name:"boolean"}},hidden:{defaultValue:null,description:"If anchor link is hidden in dropdown",name:"hidden",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"React children",name:"children",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}const N=W(),Fe=U`
  &&&&&.ant-btn {
    &:not([disabled]):focus-visible {
      box-shadow: ${N("focus.boxShadow")};
    }
  }

  &&&.ant-btn {
    &:not([disabled]) {
      &:hover {
        background-color: ${N("default.hover.background")};
      }
      &:active {
        background-color: ${N("default.pressed.background")};
      }
    }

    &.ant-dropdown-open, &.ant-dropdown-open:hover {
      background-color: ${N("default.pressed.background")};
    }

    &.active {
      &,
      :not([disabled]):hover,
      :not([disabled]):active {
        background: ${N("active.background")};
        box-shadow: ${N("boxShadow")};
      }
    }
  }
`,M=q(Ve).withConfig({shouldForwardProp:a=>!["cssConfig"].includes(a)})`
  ${Fe}
`;try{M.displayName="StyledMoreButton",M.__docgenInfo={description:"",displayName:"StyledMoreButton",props:{children:{defaultValue:null,description:"React children",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Css class",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"HTML attribute 'type'",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"On click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"Element id",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraLarge"'}]}},loading:{defaultValue:null,description:"Loading state",name:"loading",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Text",name:"text",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},form:{defaultValue:null,description:"Html form attribute",name:"form",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:"Color mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"dangerFilled"'},{value:'"dangerOutlined"'},{value:'"ai"'}]}},cssConfig:{defaultValue:null,description:"",name:"cssConfig",required:!0,type:{name:"AnchorLinkColorConfig"}},iconBefore:{defaultValue:null,description:"Icon before text",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:null,description:"Icon after text",name:"iconAfter",required:!1,type:{name:"ReactNode"}},isPressed:{defaultValue:null,description:"Display in :active state",name:"isPressed",required:!1,type:{name:"boolean"}},loadingSecond:{defaultValue:null,description:"Loading state second",name:"loadingSecond",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const Me=W(),De=U`
  
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
`,ze=q(_).withConfig({shouldForwardProp:a=>!["cssConfig"].includes(a)})`
  ${De}
`,Oe=q.div.withConfig({shouldForwardProp:a=>!["cssConfig"].includes(a)})``,He=a=>ie(a,{componentName:"anchors",defaultValues:{}}),Ue=40,We=a=>{const{testAttributes:l,items:n=[],onChange:e,onClick:t,...r}=a,[o,i]=h.useState(),s=h.useRef(null),u=h.useRef(null),f=xe(s,Ue),m=ue(f),d=m&&f<n.length-1,v=m?n.slice(f+1,n.length):[],g=v.some(c=>c.href===o),y=c=>{i(c),e==null||e(c)},k=(c,C)=>{var S;c.preventDefault();const{href:x}=C;y(x),(S=document.querySelector(x))==null||S.scrollIntoView({behavior:"smooth"}),t==null||t(c,C)},V=c=>C=>{k(C.domEvent,c)};return p.createElement(Oe,{ref:u,...l},p.createElement(ze,{onChange:y,onClick:k,...r},p.createElement("div",{ref:s,className:"container"},p.createElement(p.Fragment,null,n.map((c,C)=>{const x=m&&C>f;return p.createElement(F,{key:c.href,hidden:x,...c})}),d&&p.createElement("div",{className:"dropdown-container"},p.createElement(we,{trigger:["click"],placement:"bottomRight",overlay:v.map(c=>({children:c.title,onClick:V({href:c.href,title:c.title}),href:c.href,componentsAfter:[...c.counter?[p.createElement(le,{key:"badge",mode:"neutral",count:c.counter,klId:"anchor-link-counter"})]:[],...c.hasNotification?[p.createElement(se,{key:"indicator",mode:"high"})]:[]]}))},p.createElement(M,{size:"large",mode:"tertiary",iconBefore:p.createElement(Te,null),cssConfig:r.cssConfig,className:b(g&&"active")})))))))},ne=a=>{const l=He(a),n=oe(l);return p.createElement(We,{...n})};try{ne.displayName="Anchor",ne.__docgenInfo={description:"",displayName:"Anchor",props:{affix:{defaultValue:null,description:"Fixed mode of Anchor",name:"affix",required:!1,type:{name:"boolean"}},bounds:{defaultValue:null,description:"Bounding distance of anchor area",name:"bounds",required:!1,type:{name:"number"}},getContainer:{defaultValue:null,description:"Scrolling container",name:"getContainer",required:!1,type:{name:"(() => HTMLElement)"}},getCurrentAnchor:{defaultValue:null,description:"Customize the anchor highlight",name:"getCurrentAnchor",required:!1,type:{name:"((activeLink?: string) => string)"}},offsetTop:{defaultValue:null,description:"Pixels to offset from top when calculating position of scroll",name:"offsetTop",required:!1,type:{name:"number"}},showInkInFixed:{defaultValue:null,description:"Whether show ink-balls when affix={false}",name:"showInkInFixed",required:!1,type:{name:"boolean"}},targetOffset:{defaultValue:null,description:"Anchor scroll offset, default as offsetTop",name:"targetOffset",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Listening for anchor link change",name:"onChange",required:!1,type:{name:"((currentActiveLink?: string) => void)"}},onClick:{defaultValue:null,description:"Set the handler to handle click event",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLElement, MouseEvent>, link: AnchorLinkProps) => void)"}},items:{defaultValue:null,description:"Anchor links",name:"items",required:!0,type:{name:"AnchorLinkProps[]"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{ne as A,F as a};
