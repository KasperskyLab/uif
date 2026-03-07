import{r as a,a as ee,l as i,j as O,Y as re,k as f,p as ve,aD as ye,a1 as ge,a0 as be,B as te,at as he,w as Ce,u as Ne,R as oe,H as xe}from"./iframe-zz6a49H8.js";import{a as U}from"./type-CR-gS43P.js";import{P as we}from"./colors-Pn4JZYjC.js";function ne(t){var e=t.prefixCls,o=t.value,n=t.current,r=t.offset,u=r===void 0?0:r,s;return u&&(s={position:"absolute",top:"".concat(u,"00%"),left:0}),a.createElement("span",{style:s,className:O("".concat(e,"-only-unit"),{current:n})},o)}function Se(t,e,o){for(var n=t,r=0;(n+10)%10!==e;)n+=o,r+=o;return r}function $e(t){var e=t.prefixCls,o=t.count,n=t.value,r=Number(n),u=Math.abs(o),s=a.useState(r),p=ee(s,2),b=p[0],l=p[1],S=a.useState(u),v=ee(S,2),$=v[0],P=v[1],d=function(){l(r),P(u)};a.useEffect(function(){var C=setTimeout(function(){d()},1e3);return function(){clearTimeout(C)}},[r]);var y,h;if(b===r||Number.isNaN(r)||Number.isNaN(b))y=[a.createElement(ne,i({},t,{key:r,current:!0}))],h={transition:"none"};else{y=[];for(var x=r+10,g=[],m=r;m<=x;m+=1)g.push(m);var E=g.findIndex(function(C){return C%10===b});y=g.map(function(C,M){var D=C%10;return a.createElement(ne,i({},t,{key:C,value:D,offset:M-E,current:M===E}))});var I=$<u?1:-1;h={transform:"translateY(".concat(-Se(b,r,I),"00%)")}}return a.createElement("span",{className:"".concat(e,"-only"),style:h,onTransitionEnd:d},y)}var Pe=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o},Ee=function(e){var o=e.prefixCls,n=e.count,r=e.className,u=e.motionClassName,s=e.style,p=e.title,b=e.show,l=e.component,S=l===void 0?"sup":l,v=e.children,$=Pe(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),P=a.useContext(U),d=P.getPrefixCls,y=d("scroll-number",o),h=i(i({},$),{"data-show":b,style:s,className:O(y,r,u),title:p}),x=n;if(n&&Number(n)%1===0){var g=String(n).split("");x=g.map(function(m,E){return a.createElement($e,{prefixCls:y,count:Number(n),value:m,key:g.length-E})})}return s&&s.borderColor&&(h.style=i(i({},s),{boxShadow:"0 0 0 1px ".concat(s.borderColor," inset")})),v?re(v,function(m){return{className:O("".concat(y,"-custom-component"),m==null?void 0:m.className,u)}}):a.createElement(S,h,x)};function B(t){return we.indexOf(t)!==-1}var Te=function(e){var o,n=e.className,r=e.prefixCls,u=e.style,s=e.color,p=e.children,b=e.text,l=e.placement,S=l===void 0?"end":l,v=a.useContext(U),$=v.getPrefixCls,P=v.direction,d=$("ribbon",r),y=B(s),h=O(d,"".concat(d,"-placement-").concat(S),(o={},f(o,"".concat(d,"-rtl"),P==="rtl"),f(o,"".concat(d,"-color-").concat(s),y),o),n),x={},g={};return s&&!y&&(x.background=s,g.color=s),a.createElement("div",{className:"".concat(d,"-wrapper")},p,a.createElement("div",{className:h,style:i(i({},x),u)},a.createElement("span",{className:"".concat(d,"-text")},b),a.createElement("div",{className:"".concat(d,"-corner"),style:g})))},Oe=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o},ae=function(e){var o,n,r=e.prefixCls,u=e.scrollNumberPrefixCls,s=e.children,p=e.status,b=e.text,l=e.color,S=e.count,v=S===void 0?null:S,$=e.overflowCount,P=$===void 0?99:$,d=e.dot,y=d===void 0?!1:d,h=e.size,x=h===void 0?"default":h,g=e.title,m=e.offset,E=e.style,I=e.className,C=e.showZero,M=C===void 0?!1:C,D=Oe(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),Y=a.useContext(U),G=Y.getPrefixCls,Z=Y.direction,c=G("badge",r),V=v>P?"".concat(P,"+"):v,A=p!=null||l!=null,F=V==="0"||V===0,j=y&&!F,R=j?"":V,z=a.useMemo(function(){var w=R==null||R==="";return(w||F&&!M)&&!j},[R,F,M,j]),J=a.useRef(v);z||(J.current=v);var k=J.current,K=a.useRef(R);z||(K.current=R);var W=K.current,Q=a.useRef(j);z||(Q.current=j);var q=a.useMemo(function(){if(!m)return i({},E);var w={marginTop:m[1]};return Z==="rtl"?w.left=parseInt(m[0],10):w.right=-parseInt(m[0],10),i(i({},w),E)},[Z,m,E]),le=g??(typeof k=="string"||typeof k=="number"?k:void 0),ce=z||!b?null:a.createElement("span",{className:"".concat(c,"-status-text")},b),ie=!k||ve(k)!=="object"?void 0:re(k,function(w){return{style:i(i({},q),w.style)}}),ue=O((o={},f(o,"".concat(c,"-status-dot"),A),f(o,"".concat(c,"-status-").concat(p),!!p),f(o,"".concat(c,"-status-").concat(l),B(l)),o)),X={};l&&!B(l)&&(X.background=l);var L=O(c,(n={},f(n,"".concat(c,"-status"),A),f(n,"".concat(c,"-not-a-wrapper"),!s),f(n,"".concat(c,"-rtl"),Z==="rtl"),n),I);if(!s&&A){var de=q.color;return a.createElement("span",i({},D,{className:L,style:q}),a.createElement("span",{className:ue,style:X}),a.createElement("span",{style:{color:de},className:"".concat(c,"-status-text")},b))}return a.createElement("span",i({},D,{className:L}),s,a.createElement(ye,{visible:!z,motionName:"".concat(c,"-zoom"),motionAppear:!1,motionDeadline:1e3},function(w){var T,me=w.className,fe=G("scroll-number",u),_=Q.current,pe=O((T={},f(T,"".concat(c,"-dot"),_),f(T,"".concat(c,"-count"),!_),f(T,"".concat(c,"-count-sm"),x==="small"),f(T,"".concat(c,"-multiple-words"),!_&&W&&W.toString().length>1),f(T,"".concat(c,"-status-").concat(p),!!p),f(T,"".concat(c,"-status-").concat(l),B(l)),T)),H=i({},q);return l&&!B(l)&&(H=H||{},H.background=l),a.createElement(Ee,{prefixCls:fe,show:!z,motionClassName:me,className:pe,count:W,title:le,style:H,key:"scrollNumber"},ie)}),ce)};ae.Ribbon=Te;const N=ge(),Re=be`
  .ant-badge-count {
    background-color: ${N("background")};
    color: ${N("color")};
    font-family: ${N("fontFamily")};
    font-size: ${N("fontSize")};
    line-height: ${N("lineHeight")};
    height: ${N("lineHeight")};
    font-weight: ${N("fontWeight")};
    font-style: ${N("fontStyle")};
    letter-spacing: ${N("letterSpacing")};
    min-width: ${N("lineHeight")};
    box-shadow: none;
  }


  &.is-transparent {
    .ant-badge-count {
      display: flex;
      border-radius: 0;
      height: auto;
      min-width: auto;
      padding: 0;
    }

    .ant-scroll-number-only {
      height: auto;
      display: flex;
    }
  }

  &::selection,
  & .ant-badge-count::selection {
    color: inherit;
    background-color: inherit;
  }

  .ant-badge-dot {
    transform: none;
    height: 8px;
    width: 8px;
    box-shadow: none;
  }
`,ze=(t,e)=>a.useMemo(()=>{if(t!==void 0)return t>e?`+${e}`:`${t}`},[t,e]),se=["neutral_transparent","critical_transparent"],ke=["neutral","info","new","update","in-progress","resolved","positive","accent","low","medium","high","in-incident","critical",...se],Ze=[`${te.Medium}`,`${te.Large}`],Me=t=>{let e=t.mode||"neutral";const o=!ke.includes(e);t.mode&&o&&(he("mode",t.mode),e="neutral"),!t.mode&&t.size==="large"&&(e="neutral_transparent");const n={...t,mode:t.mode};return Ce(n,{componentName:"badge",defaultValues:{mode:"neutral",size:"medium"}})},je=xe(ae).withConfig({shouldForwardProp:t=>!["cssConfig"].includes(t)})`${Re}`,Be=({className:t,...e})=>{const o=Me(e),n=Ne(o);return oe.createElement(De,{className:O(t,{"is-transparent":se.some(r=>r===e.mode)}),...n})},De=({count:t,overflowCount:e=99,text:o,testAttributes:n,title:r,...u})=>{const s=ze(t,e);return oe.createElement(je,{count:o||s,title:r||"",overflowCount:e,...n,...u})};Be.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{className:{required:!1,tsType:{name:"string"},description:"CSS Class name"},count:{required:!1,tsType:{name:"number"},description:"Displayed number"},text:{required:!1,tsType:{name:"string"},description:"Displayed text (instead of count)"},overflowCount:{required:!1,tsType:{name:"number"},description:"Max count to show"},title:{required:!1,tsType:{name:"string"},description:"@deprecated Text to show when hovering over the badge"},showZero:{required:!1,tsType:{name:"boolean"},description:"Whether to show badge when count is zero"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};export{Be as B,Ze as a,ke as b,se as c};
