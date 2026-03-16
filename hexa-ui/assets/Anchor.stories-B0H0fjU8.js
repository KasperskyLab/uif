import{T as Le}from"./Palette-Bcbt30O7.js";import{Q as G,n as Ne,e as z,f as q,g as O,h as H,j as C,k as N,r as h,aY as J,l as ue,p as Se,U as Pe,R as p,H as B,a1 as U,a2 as _e,ak as F,al as fe,a0 as W,a3 as $e,w as pe,u as he,b as Ie,c as Q,z as Re}from"./iframe-DlY6n6Um.js";import{w as Be}from"./withMeta-B77fl0Sa.js";import{s as De,a as K}from"./helpers-BytZKRkB.js";import{u as Fe}from"./useIntersectionChildren-CM3eGnjc.js";import{B as me}from"./Badge-B6JIvdem.js";import{D as Me}from"./Dropdown-WtVSJYv5.js";import{I as ge}from"./Indicator-CQY-Y-dA.js";import{t as ze}from"./Menu2-BBlUvDgt.js";import{o as qe,a as ve,m as Oe,C as He}from"./type-Cyafuwrq.js";import{a as M}from"./addEventListener-DLbRjLat.js";import{g as Ue,s as We}from"./scrollTo-C0HuubAk.js";import{B as Ve}from"./Button-CgqUalcg.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./useResizeObserver-CIT607-3.js";import"./colors-Cs2HIvKh.js";import"./KeyCode-B45xthVk.js";import"./Overflow-wC_Ss__i.js";import"./focus-oe9vj3c6.js";import"./Loader-BjmnRfIR.js";import"./index-CY9qp4ym.js";import"./Divider-BzNbSw2T.js";import"./ArrowRight-Db3Ij3DE.js";import"./v4-BoP187Zn.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./button-CjggZd63.js";import"./wave-CgaPvuQn.js";function je(o){var a,n=function(r){return function(){a=null,o.apply(void 0,Ne(r))}},e=function(){if(a==null){for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];a=G(n(s))}};return e.cancel=function(){return G.cancel(a)},e}function ke(){return function(a,n,e){var t=e.value,r=!1;return{configurable:!0,get:function(){if(r||this===a.prototype||this.hasOwnProperty(n))return t;var i=je(t.bind(this));return r=!0,Object.defineProperty(this,n,{value:i,configurable:!0,writable:!0}),r=!1,i}}}}function $(o){return o!==window?o.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function Z(o,a,n){if(n!==void 0&&a.top>o.top-n)return n+a.top}function X(o,a,n){if(n!==void 0&&a.bottom<o.bottom+n){var e=window.innerHeight-a.bottom;return n+e}}var ye=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],L=[];function ee(o,a){if(o){var n=L.find(function(e){return e.target===o});n?n.affixList.push(a):(n={target:o,affixList:[a],eventHandlers:{}},L.push(n),ye.forEach(function(e){n.eventHandlers[e]=M(o,e,function(){n.affixList.forEach(function(t){t.lazyUpdatePosition()})})}))}}function te(o){var a=L.find(function(n){var e=n.affixList.some(function(t){return t===o});return e&&(n.affixList=n.affixList.filter(function(t){return t!==o})),e});a&&a.affixList.length===0&&(L=L.filter(function(n){return n!==a}),ye.forEach(function(n){var e=a.eventHandlers[n];e&&e.remove&&e.remove()}))}var xe=function(o,a,n,e){var t=arguments.length,r=t<3?a:e===null?e=Object.getOwnPropertyDescriptor(a,n):e,s;if((typeof Reflect>"u"?"undefined":Se(Reflect))==="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,a,n,e);else for(var i=o.length-1;i>=0;i--)(s=o[i])&&(r=(t<3?s(r):t>3?s(a,n,r):s(a,n))||r);return t>3&&r&&Object.defineProperty(a,n,r),r};function Ye(){return typeof window<"u"?window:null}var E;(function(o){o[o.None=0]="None",o[o.Prepare=1]="Prepare"})(E||(E={}));var D=function(o){z(n,o);var a=q(n);function n(){var e;return O(this,n),e=a.apply(this,arguments),e.state={status:E.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props,r=t.offsetBottom,s=t.offsetTop;return r===void 0&&s===void 0?0:s},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,r=t.status,s=t.lastAffix,i=e.props.onChange,c=e.getTargetFunc();if(!(r!==E.Prepare||!e.fixedNode||!e.placeholderNode||!c)){var d=e.getOffsetTop(),f=e.getOffsetBottom(),m=c();if(m){var u={status:E.None},v=$(m),g=$(e.placeholderNode),k=Z(g,v,d),y=X(g,v,f);k!==void 0?(u.affixStyle={position:"fixed",top:k,width:g.width,height:g.height},u.placeholderStyle={width:g.width,height:g.height}):y!==void 0&&(u.affixStyle={position:"fixed",bottom:y,width:g.width,height:g.height},u.placeholderStyle={width:g.width,height:g.height}),u.lastAffix=!!u.affixStyle,i&&s!==u.lastAffix&&i(u.lastAffix),e.setState(u)}}},e.prepareMeasure=function(){e.setState({status:E.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e}return H(n,[{key:"getTargetFunc",value:function(){var t=this.context.getTargetContainer,r=this.props.target;return r!==void 0?r:t||Ye}},{key:"componentDidMount",value:function(){var t=this,r=this.getTargetFunc();r&&(this.timeout=setTimeout(function(){ee(r(),t),t.updatePosition()}))}},{key:"componentDidUpdate",value:function(t){var r=this.state.prevTarget,s=this.getTargetFunc(),i=(s==null?void 0:s())||null;r!==i&&(te(this),i&&(ee(i,this),this.updatePosition()),this.setState({prevTarget:i})),(t.offsetTop!==this.props.offsetTop||t.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),te(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var t=this.getTargetFunc(),r=this.state.affixStyle;if(t&&r){var s=this.getOffsetTop(),i=this.getOffsetBottom(),c=t();if(c&&this.placeholderNode){var d=$(c),f=$(this.placeholderNode),m=Z(f,d,s),u=X(f,d,i);if(m!==void 0&&r.top===m||u!==void 0&&r.bottom===u)return}}this.prepareMeasure()}},{key:"render",value:function(){var t=this,r=this.context.getPrefixCls,s=this.state,i=s.affixStyle,c=s.placeholderStyle,d=this.props,f=d.prefixCls,m=d.children,u=C(N({},r("affix",f),!!i)),v=qe(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return h.createElement(J,{onResize:function(){t.updatePosition()}},h.createElement("div",ue({},v,{ref:this.savePlaceholderNode}),i&&h.createElement("div",{style:c,"aria-hidden":"true"}),h.createElement("div",{className:u,ref:this.saveFixedNode,style:i},h.createElement(J,{onResize:function(){t.updatePosition()}},m))))}}]),n}(h.Component);D.contextType=ve;xe([ke()],D.prototype,"updatePosition",null);xe([ke()],D.prototype,"lazyUpdatePosition",null);var Ce=h.createContext(null);function Ge(){return window}function ne(o,a){if(!o.getClientRects().length)return 0;var n=o.getBoundingClientRect();return n.width||n.height?a===window?(a=o.ownerDocument.documentElement,n.top-a.clientTop):n.top-a.getBoundingClientRect().top:n.top}var re=/#([\S ]+)$/,S=function(o){z(n,o);var a=q(n);function n(){var e;return O(this,n),e=a.apply(this,arguments),e.state={activeLink:null},e.wrapperRef=h.createRef(),e.links=[],e.registerLink=function(t){e.links.includes(t)||e.links.push(t)},e.unregisterLink=function(t){var r=e.links.indexOf(t);r!==-1&&e.links.splice(r,1)},e.getContainer=function(){var t=e.context.getTargetContainer,r=e.props.getContainer,s=r||t||Ge;return s()},e.handleScrollTo=function(t){var r=e.props,s=r.offsetTop,i=r.targetOffset;e.setCurrentActiveLink(t);var c=e.getContainer(),d=Ue(c),f=re.exec(t);if(f){var m=document.getElementById(f[1]);if(m){var u=ne(m,c),v=d+u;v-=i!==void 0?i:s||0,e.animating=!0,We(v,{callback:function(){e.animating=!1},getContainer:e.getContainer})}}},e.saveInkNode=function(t){e.inkNode=t},e.setCurrentActiveLink=function(t){var r=e.state.activeLink,s=e.props,i=s.onChange,c=s.getCurrentAnchor;r!==t&&(e.setState({activeLink:typeof c=="function"?c():t}),i==null||i(t))},e.handleScroll=function(){if(!e.animating){var t=e.props,r=t.offsetTop,s=t.bounds,i=t.targetOffset,c=e.getCurrentAnchor(i!==void 0?i:r||0,s);e.setCurrentActiveLink(c)}},e.updateInk=function(){var t=Pe(e),r=t.prefixCls,s=t.wrapperRef,i=s.current,c=i==null?void 0:i.getElementsByClassName("".concat(r,"-link-title-active"))[0];c&&(e.inkNode.style.top="".concat(c.offsetTop+c.clientHeight/2-4.5,"px"))},e.getMemoizedContextValue=Oe(function(t,r){return{registerLink:e.registerLink,unregisterLink:e.unregisterLink,scrollTo:e.handleScrollTo,activeLink:t,onClick:r}}),e}return H(n,[{key:"componentDidMount",value:function(){this.scrollContainer=this.getContainer(),this.scrollEvent=M(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentDidUpdate",value:function(){if(this.scrollEvent){var t=this.getContainer();this.scrollContainer!==t&&(this.scrollContainer=t,this.scrollEvent.remove(),this.scrollEvent=M(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll())}this.updateInk()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"getCurrentAnchor",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5,s=[],i=this.getContainer();if(this.links.forEach(function(d){var f=re.exec(d.toString());if(f){var m=document.getElementById(f[1]);if(m){var u=ne(m,i);u<t+r&&s.push({link:d,top:u})}}}),s.length){var c=s.reduce(function(d,f){return f.top>d.top?f:d});return c.link}return""}},{key:"render",value:function(){var t=this.context,r=t.getPrefixCls,s=t.direction,i=this.props,c=i.prefixCls,d=i.className,f=d===void 0?"":d,m=i.style,u=i.offsetTop,v=i.affix,g=i.showInkInFixed,k=i.children,y=i.onClick,P=this.state.activeLink,l=r("anchor",c);this.prefixCls=l;var x=C("".concat(l,"-ink-ball"),{visible:P}),T=C("".concat(l,"-wrapper"),N({},"".concat(l,"-rtl"),s==="rtl"),f),_=C(l,N({},"".concat(l,"-fixed"),!v&&!g)),Ae=ue({maxHeight:u?"calc(100vh - ".concat(u,"px)"):"100vh"},m),Y=h.createElement("div",{ref:this.wrapperRef,className:T,style:Ae},h.createElement("div",{className:_},h.createElement("div",{className:"".concat(l,"-ink")},h.createElement("span",{className:x,ref:this.saveInkNode})),k)),Ee=this.getMemoizedContextValue(P,y);return h.createElement(Ce.Provider,{value:Ee},v?h.createElement(D,{offsetTop:u,target:this.getContainer},Y):Y)}}]),n}(h.Component);S.defaultProps={affix:!0,showInkInFixed:!1};S.contextType=ve;var V=function(o){z(n,o);var a=q(n);function n(){var e;return O(this,n),e=a.apply(this,arguments),e.handleClick=function(t){var r=e.context,s=r.scrollTo,i=r.onClick,c=e.props,d=c.href,f=c.title;i==null||i(t,{title:f,href:d}),s(d)},e.renderAnchorLink=function(t){var r=t.getPrefixCls,s=e.props,i=s.prefixCls,c=s.href,d=s.title,f=s.children,m=s.className,u=s.target,v=r("anchor",i),g=e.context.activeLink===c,k=C("".concat(v,"-link"),N({},"".concat(v,"-link-active"),g),m),y=C("".concat(v,"-link-title"),N({},"".concat(v,"-link-title-active"),g));return h.createElement("div",{className:k},h.createElement("a",{className:y,href:c,title:typeof d=="string"?d:"",target:u,onClick:e.handleClick},d),f)},e}return H(n,[{key:"componentDidMount",value:function(){this.context.registerLink(this.props.href)}},{key:"componentDidUpdate",value:function(t){var r=t.href,s=this.props.href;r!==s&&(this.context.unregisterLink(r),this.context.registerLink(s))}},{key:"componentWillUnmount",value:function(){this.context.unregisterLink(this.props.href)}},{key:"render",value:function(){return h.createElement(He,null,this.renderAnchorLink)}}]),n}(h.Component);V.defaultProps={href:"#"};V.contextType=Ce;S.Link=V;const Je={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},Qe="AnchorLinks",Ke="В качестве основы используется AnchorLink из библиотеки Antd.",Ze="Переключения в одном окне, между несколькими табами",Xe="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=29963%3A101579",et="https://pixso.net/app/design/hD3Tb31jr4YLaPBf6JEN5Q",oe={dod:Je,component:Qe,description:Ke,usage:Ze,designLink:Xe,pixsoView:et},Te=o=>typeof o=="number",be=({title:o,counter:a,hasNotification:n=!1})=>{const e=Te(a)&&a>0;return p.createElement("span",{className:"content-container"},p.createElement("span",null,o),p.createElement("span",{className:"description-container"},e&&p.createElement(me,{mode:"neutral",count:a,klId:"anchor-link-counter"}),n&&p.createElement("span",{className:"notification-container"},p.createElement(ge,{mode:"high"}))))};be.__docgenInfo={description:"",methods:[],displayName:"AnchorLinkContent",props:{title:{required:!1,tsType:{name:"string"},description:""},counter:{required:!1,tsType:{name:"number"},description:""},hasNotification:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b=U(),w=_e($e.BTM3),tt=W`
  &.ant-anchor-link {
    transition: opacity .2s;
    padding: 0;

    ${({hidden:o})=>o&&"opacity: 0; pointer-events: none;"}

    && .ant-anchor-link-title {
      &:not([disabled]):focus-visible {
        box-shadow: ${b("focus.boxShadow")};
      }
    }

    .ant-anchor-link-title {
      color: ${b("default.enabled.color")};
      font-family: ${w.fontFamily};
      font-size: ${w.fontSize};
      font-weight: ${w.fontWeight};
      font-style: ${w.fontStyle};
      line-height: ${w.lineHeight};
      letter-spacing: ${w.letterSpacing};
      margin-bottom: 0;
      position: relative;
      padding: ${F[5]}px ${F[8]}px;
      border-radius: ${fe[4]}px;

      &:not([disabled]) {
        &:hover {
          background-color: ${b("default.hover.background")};
        }
        &:active {
          background-color: ${b("default.pressed.background")};
        }
      }

      &-active {
        &,
        :not([disabled]):hover,
        :not([disabled]):active {
          background: ${b("active.background")};
          box-shadow: ${b("boxShadow")};
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
`,nt=B(S.Link).withConfig({shouldForwardProp:o=>!["cssConfig","hidden"].includes(o)})`
  ${tt}
`,rt=o=>pe(o,{componentName:"anchors",defaultValues:{}}),ot=o=>{const{counter:a,title:n,hasNotification:e,testAttributes:t,...r}=o;return p.createElement(nt,{title:p.createElement(be,{title:n,counter:a,hasNotification:e}),...t,...r})},we=o=>{const a=rt(o),n=he(a);return p.createElement(ot,{...n})};we.__docgenInfo={description:"@deprecated use AnchorNavigation instead",methods:[],displayName:"AnchorLink",props:{href:{required:!0,tsType:{name:"string"},description:"The target of hyperlink"},target:{required:!1,tsType:{name:"number"},description:"Specifies where to display the linked URL"},title:{required:!0,tsType:{name:"string"},description:"The content of hyperlink"},counter:{required:!1,tsType:{name:"number"},description:"Counter value"},hasNotification:{required:!1,tsType:{name:"boolean"},description:"Does the anchor link have notification dot"},hidden:{required:!1,tsType:{name:"boolean"},description:"If anchor link is hidden in dropdown"},children:{required:!1,tsType:{name:"union",raw:"ReactNode | undefined",elements:[{name:"ReactNode"},{name:"undefined"}]},description:"React children"},theme:{required:!1,tsType:{name:"Theme"},description:""}}};const A=U(),it=W`
  &&&&&.ant-btn {
    &:not([disabled]):focus-visible {
      box-shadow: ${A("focus.boxShadow")};
    }
  }

  &&&.ant-btn {
    &:not([disabled]) {
      &:hover {
        background-color: ${A("default.hover.background")};
      }
      &:active {
        background-color: ${A("default.pressed.background")};
      }
    }

    &.ant-dropdown-open, &.ant-dropdown-open:hover {
      background-color: ${A("default.pressed.background")};
    }

    &.active {
      &,
      :not([disabled]):hover,
      :not([disabled]):active {
        background: ${A("active.background")};
        box-shadow: ${A("boxShadow")};
      }
    }
  }
`,at=B(Ve).withConfig({shouldForwardProp:o=>!["cssConfig"].includes(o)})`
  ${it}
`,st=U(),ct=W`
  
  &.ant-anchor-wrapper {
    overflow: visible;
    background: transparent;
  }
  
  & .ant-anchor {
    display: flex;
    background: ${st("background")};
    width: 100%;
    padding: ${F[2]}px;
    border-radius: ${fe[6]}px;
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
`,lt=B(S).withConfig({shouldForwardProp:o=>!["cssConfig"].includes(o)})`
  ${ct}
`,dt=B.div.withConfig({shouldForwardProp:o=>!["cssConfig"].includes(o)})``,ut=o=>pe(o,{componentName:"anchors",defaultValues:{}}),ft=40,pt=o=>{const{testAttributes:a,items:n=[],onChange:e,onClick:t,...r}=o,[s,i]=h.useState(),c=h.useRef(null),d=h.useRef(null),f=Fe(c,ft),m=Te(f),u=m&&f<n.length-1,v=m?n.slice(f+1,n.length):[],g=v.some(l=>l.href===s),k=l=>{i(l),e==null||e(l)},y=(l,x)=>{var _;l.preventDefault();const{href:T}=x;k(T),(_=document.querySelector(T))==null||_.scrollIntoView({behavior:"smooth"}),t==null||t(l,x)},P=l=>x=>{y(x.domEvent,l)};return p.createElement(dt,{ref:d,...a},p.createElement(lt,{onChange:k,onClick:y,...r},p.createElement("div",{ref:c,className:"container"},p.createElement(p.Fragment,null,n.map((l,x)=>{const T=m&&x>f;return p.createElement(we,{key:l.href,hidden:T,...l})}),u&&p.createElement("div",{className:"dropdown-container"},p.createElement(Me,{trigger:["click"],placement:"bottomRight",overlay:v.map(l=>({children:l.title,onClick:P({href:l.href,title:l.title}),href:l.href,componentsAfter:[...l.counter?[p.createElement(me,{key:"badge",mode:"neutral",count:l.counter,klId:"anchor-link-counter"})]:[],...l.hasNotification?[p.createElement(ge,{key:"indicator",mode:"high"})]:[]]}))},p.createElement(at,{size:"large",mode:"tertiary",iconBefore:p.createElement(ze,null),cssConfig:r.cssConfig,className:C(g&&"active")})))))))},j=o=>{const a=ut(o),n=he(a);return p.createElement(pt,{...n})};j.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{affix:{required:!1,tsType:{name:"boolean"},description:"Fixed mode of Anchor"},bounds:{required:!1,tsType:{name:"number"},description:"Bounding distance of anchor area"},getContainer:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement",signature:{arguments:[],return:{name:"HTMLElement"}}},description:"Scrolling container"},getCurrentAnchor:{required:!1,tsType:{name:"signature",type:"function",raw:"(activeLink?: string) => string",signature:{arguments:[{type:{name:"string"},name:"activeLink"}],return:{name:"string"}}},description:"Customize the anchor highlight"},offsetTop:{required:!1,tsType:{name:"number"},description:"Pixels to offset from top when calculating position of scroll"},showInkInFixed:{required:!1,tsType:{name:"boolean"},description:"Whether show ink-balls when affix={false}"},targetOffset:{required:!1,tsType:{name:"number"},description:"Anchor scroll offset, default as offsetTop"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(currentActiveLink?: string) => void",signature:{arguments:[{type:{name:"string"},name:"currentActiveLink"}],return:{name:"void"}}},description:"Listening for anchor link change"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLElement>, link: AnchorLinkProps) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"e"},{type:{name:"AnchorLinkProps"},name:"link"}],return:{name:"void"}}},description:"Set the handler to handle click event"},items:{required:!0,tsType:{name:"Array",elements:[{name:"AnchorLinkProps"}],raw:"AnchorLinkProps[]"},description:"Anchor links"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};const Ut={title:"Deprecated/Anchor",component:j,argTypes:{affix:{...K("true"),control:{type:"boolean"}},offsetTop:{...K("0"),control:{type:"number"}},items:{table:{type:{summary:"AnchorLinkProps[]",detail:`
[
  {
    href: string;
    title: string;
    counter?: number;
    hasNotification?: boolean;
  }
]
        `}}},...De(["theme"])},args:{items:[{href:"#anchor-1",title:"Simple title"},{href:"#anchor-2",title:"With counter",counter:10},{href:"#anchor-3",title:"With notification",hasNotification:!0},{href:"#anchor-4",title:"With counter & notification",counter:25,hasNotification:!0},{href:"#anchor-5",title:"Anchor 5",counter:20},{href:"#anchor-6",title:"Anchor 6",hasNotification:!0}],testId:"anchor-test-id",klId:"anchor-kl-id"},parameters:{badges:[Ie.deprecated],deprecatedLink:"Hexa UI Components/AnchorNavigation",docs:{page:Be(oe)},design:oe.pixsoView}},I={render:o=>{const a=Re(),n={height:"120vw",border:`1px solid ${a.colors["text-icons-elements"].primary}`,color:a.colors["text-icons-elements"].primary,verticalAlign:"middle",lineHeight:"100vw",textAlign:"center"};return p.createElement("div",{style:{minWidth:"90vw"}},p.createElement(j,{...o}),[...Array(10).keys()].map(e=>p.createElement("div",{id:`anchor-${e}`,style:{...n,textAlign:"center"},key:e},e)))}},R={args:{source:{anchor_links:Q.anchor_links,anchor_links_item:Q.anchor_links_item}},render:o=>p.createElement(Le,{...o})};var ie,ae,se;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: (args: AnchorProps) => {
    const theme = useTheme();
    const baseBlockStyle = {
      height: '120vw',
      border: \`1px solid \${theme.colors['text-icons-elements'].primary}\`,
      color: theme.colors['text-icons-elements'].primary,
      verticalAlign: 'middle',
      lineHeight: '100vw',
      textAlign: 'center'
    };
    return <div style={{
      minWidth: '90vw'
    }}>
        <Anchor {...args} />
        {[...Array(10).keys()].map(item => <div id={\`anchor-\${item}\`} style={{
        ...baseBlockStyle,
        textAlign: 'center'
      }} key={item}>
              {item}
            </div>)}
      </div>;
  }
}`,...(se=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ce,le,de;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    source: {
      anchor_links: componentColors.anchor_links,
      anchor_links_item: componentColors.anchor_links_item
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(de=(le=R.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};const Wt=["Basic","ColorTokens"];export{I as Basic,R as ColorTokens,Wt as __namedExportsOrder,Ut as default};
