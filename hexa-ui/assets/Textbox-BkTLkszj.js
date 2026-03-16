import{u as Q}from"./useGlobalStyles-DCO_4ztA.js";import{h as Qe,g as Ye,r as i,bd as In,j as T,k as w,l as fe,aX as Nn,Q as Ue,i as Sn,a as ie,p as xn,O as Se,X as Cn,_ as je,Y as Ke,u as Y,R as y,H as P,S as xe,T as Le,y as ze,A as kn,P as Tn}from"./iframe-DlY6n6Um.js";import{u as L,i as J,b as En,c as Pn,d as Rn}from"./useThemedTextbox-Bmu1H12-.js";import{a as Vn}from"./input-mXow91b_.js";import{P as qn,Q as On,R as Bn,S as Dn,T as Mn}from"./index-BbitUTuv.js";import{K as ce}from"./KeyCode-B45xthVk.js";import{I as _n,a as An,S as Hn}from"./type-Cyafuwrq.js";import{a as Fn}from"./SearchOutlined-CqDp9aMg.js";import{B as $n}from"./Button-CgqUalcg.js";import{r as Un}from"./StatusOkSolid-IKyijn-S.js";import{u as Je}from"./useTranslation-CGS-Ff88.js";import{I as jn}from"./IconResolver-k9Mxg6Vr.js";import{I as ve}from"./index-iGBsBt8Q.js";import{P as Kn}from"./Popover-D8ys_ap7.js";function Ce(){return typeof BigInt=="function"}function K(e){var t=e.trim(),n=t.startsWith("-");n&&(t=t.slice(1)),t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),t.startsWith(".")&&(t="0".concat(t));var a=t||"0",r=a.split("."),o=r[0]||"0",l=r[1]||"0";o==="0"&&l==="0"&&(n=!1);var s=n?"-":"";return{negative:n,negativeStr:s,trimStr:a,integerStr:o,decimalStr:l,fullStr:"".concat(s).concat(a)}}function ke(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function oe(e){var t=String(e);if(ke(e)){var n=Number(t.slice(t.indexOf("e-")+2)),a=t.match(/\.(\d+)/);return a!=null&&a[1]&&(n+=a[1].length),n}return t.includes(".")&&Te(t)?t.length-t.indexOf(".")-1:0}function ge(e){var t=String(e);if(ke(e)){if(e>Number.MAX_SAFE_INTEGER)return String(Ce()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(Ce()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(oe(t))}return K(t).fullStr}function Te(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}function We(e){var t=typeof e=="number"?ge(e):K(e).fullStr,n=t.includes(".");return n?K(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var Ln=function(){function e(t){if(Ye(this,e),this.origin="",this.number=void 0,this.empty=void 0,!t&&t!==0||!String(t).trim()){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return Qe(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var a=Number(n);if(Number.isNaN(a))return this;var r=this.number+a;if(r>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(r<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var o=Math.max(oe(this.number),oe(a));return new e(r.toFixed(o))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toNumber()===(n==null?void 0:n.toNumber())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":ge(this.number):this.origin}}]),e}(),zn=function(){function e(t){if(Ye(this,e),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,!t&&t!==0||!String(t).trim()){this.empty=!0;return}if(this.origin=String(t),t==="-"){this.nan=!0;return}var n=t;if(ke(n)&&(n=Number(n)),n=typeof n=="string"?n:ge(n),Te(n)){var a=K(n);this.negative=a.negative;var r=a.trimStr.split(".");this.integer=BigInt(r[0]);var o=r[1]||"0";this.decimal=BigInt(o),this.decimalLen=o.length}else this.nan=!0}return Qe(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(n){var a="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n,"0"));return BigInt(a)}},{key:"negate",value:function(){var n=new e(this.toString());return n.negative=!n.negative,n}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var a=new e(n);if(a.isInvalidate())return this;var r=Math.max(this.getDecimalStr().length,a.getDecimalStr().length),o=this.alignDecimal(r),l=a.alignDecimal(r),s=(o+l).toString(),f=K(s),p=f.negativeStr,d=f.trimStr,v="".concat(p).concat(d.padStart(r+1,"0"));return new e("".concat(v.slice(0,-r),".").concat(v.slice(-r)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toString()===(n==null?void 0:n.toString())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":K("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function E(e){return Ce()?new zn(e):new Ln(e)}function pe(e,t,n){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var r=K(e),o=r.negativeStr,l=r.integerStr,s=r.decimalStr,f="".concat(t).concat(s),p="".concat(o).concat(l);if(n>=0){var d=Number(s[n]);if(d>=5&&!a){var v=E(e).add("".concat(o,"0.").concat("0".repeat(n)).concat(10-d));return pe(v.toString(),t,n,a)}return n===0?p:"".concat(p).concat(t).concat(s.padEnd(n,"0").slice(0,n))}return f===".0"?p:"".concat(p).concat(f)}var Wn=200,Gn=600;function Xn(e){var t=e.prefixCls,n=e.upNode,a=e.downNode,r=e.upDisabled,o=e.downDisabled,l=e.onStep,s=i.useRef(),f=i.useRef();f.current=l;var p=function(x,B){x.preventDefault(),f.current(B);function R(){f.current(B),s.current=setTimeout(R,Wn)}s.current=setTimeout(R,Gn)},d=function(){clearTimeout(s.current)};if(i.useEffect(function(){return d},[]),In())return null;var v="".concat(t,"-handler"),b=T(v,"".concat(v,"-up"),w({},"".concat(v,"-up-disabled"),r)),S=T(v,"".concat(v,"-down"),w({},"".concat(v,"-down-disabled"),o)),C={unselectable:"on",role:"button",onMouseUp:d,onMouseLeave:d};return i.createElement("div",{className:"".concat(v,"-wrap")},i.createElement("span",fe({},C,{onMouseDown:function(x){p(x,!0)},"aria-label":"Increase Value","aria-disabled":r,className:b}),n||i.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})),i.createElement("span",fe({},C,{onMouseDown:function(x){p(x,!1)},"aria-label":"Decrease Value","aria-disabled":o,className:S}),a||i.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})))}function Qn(e,t){var n=i.useRef(null);function a(){try{var o=e.selectionStart,l=e.selectionEnd,s=e.value,f=s.substring(0,o),p=s.substring(l);n.current={start:o,end:l,value:s,beforeTxt:f,afterTxt:p}}catch{}}function r(){if(e&&n.current&&t)try{var o=e.value,l=n.current,s=l.beforeTxt,f=l.afterTxt,p=l.start,d=o.length;if(o.endsWith(f))d=o.length-n.current.afterTxt.length;else if(o.startsWith(s))d=s.length;else{var v=s[p-1],b=o.indexOf(v,p-1);b!==-1&&(d=b+1)}e.setSelectionRange(d,d)}catch(S){Nn(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(S.message))}}return[a,r]}const Yn=function(){var e=i.useRef(0),t=function(){Ue.cancel(e.current)};return i.useEffect(function(){return t},[]),function(n){t(),e.current=Ue(function(){n()})}};var Jn=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],Ge=function(t,n){return t||n.isEmpty()?n.toString():n.toNumber()},Xe=function(t){var n=E(t);return n.isInvalidate()?null:n},Ze=i.forwardRef(function(e,t){var n,a=e.prefixCls,r=a===void 0?"rc-input-number":a,o=e.className,l=e.style,s=e.min,f=e.max,p=e.step,d=p===void 0?1:p,v=e.defaultValue,b=e.value,S=e.disabled,C=e.readOnly,N=e.upHandler,x=e.downHandler,B=e.keyboard,R=e.controls,z=R===void 0?!0:R,H=e.stringMode,D=e.parser,u=e.formatter,V=e.precision,F=e.decimalSeparator,W=e.onChange,ne=e.onInput,M=e.onPressEnter,k=e.onStep,ye=Sn(e,Jn),$="".concat(r,"-input"),U=i.useRef(null),se=i.useState(!1),le=ie(se,2),ue=le[0],de=le[1],q=i.useRef(!1),j=i.useRef(!1),_=i.useRef(!1),A=i.useState(function(){return E(b??v)}),Pe=ie(A,2),I=Pe[0],Re=Pe[1];function ln(m){b===void 0&&Re(m)}var he=i.useCallback(function(m,c){if(!c)return V>=0?V:Math.max(oe(m),oe(d))},[V,d]),be=i.useCallback(function(m){var c=String(m);if(D)return D(c);var h=c;return F&&(h=h.replace(F,".")),h.replace(/[^\w.-]+/g,"")},[D,F]),Ve=i.useRef(""),qe=i.useCallback(function(m,c){if(u)return u(m,{userTyping:c,input:String(Ve.current)});var h=typeof m=="number"?ge(m):m;if(!c){var g=he(h,c);if(Te(h)&&(F||g>=0)){var O=F||".";h=pe(h,O,g)}}return h},[u,he,F]),un=i.useState(function(){var m=v??b;return I.isInvalidate()&&["string","number"].includes(xn(m))?Number.isNaN(m)?"":m:qe(I.toString(),!1)}),Oe=ie(un,2),te=Oe[0],Be=Oe[1];Ve.current=te;function ae(m,c){Be(qe(m.isInvalidate()?m.toString(!1):m.toString(!c),c))}var G=i.useMemo(function(){return Xe(f)},[f,V]),X=i.useMemo(function(){return Xe(s)},[s,V]),De=i.useMemo(function(){return!G||!I||I.isInvalidate()?!1:G.lessEquals(I)},[G,I]),Me=i.useMemo(function(){return!X||!I||I.isInvalidate()?!1:I.lessEquals(X)},[X,I]),dn=Qn(U.current,ue),_e=ie(dn,2),cn=_e[0],mn=_e[1],Ae=function(c){return G&&!c.lessEquals(G)?G:X&&!X.lessEquals(c)?X:null},we=function(c){return!Ae(c)},Ie=function(c,h){var g=c,O=we(g)||g.isEmpty();if(!g.isEmpty()&&!h&&(g=Ae(g)||g,O=!0),!C&&!S&&O){var re=g.toString(),Ne=he(re,h);return Ne>=0&&(g=E(pe(re,".",Ne)),we(g)||(g=E(pe(re,".",Ne,!0)))),g.equals(I)||(ln(g),W==null||W(g.isEmpty()?null:Ge(H,g)),b===void 0&&ae(g,h)),g}return I},pn=Yn(),He=function m(c){if(cn(),Be(c),!j.current){var h=be(c),g=E(h);g.isNaN()||Ie(g,!0)}ne==null||ne(c),pn(function(){var O=c;D||(O=c.replace(/。/g,".")),O!==c&&m(O)})},fn=function(){j.current=!0},vn=function(){j.current=!1,He(U.current.value)},gn=function(c){He(c.target.value)},Fe=function(c){var h;if(!(c&&De||!c&&Me)){q.current=!1;var g=E(_.current?We(d):d);c||(g=g.negate());var O=(I||E(0)).add(g.toString()),re=Ie(O,!1);k==null||k(Ge(H,re),{offset:_.current?We(d):d,type:c?"up":"down"}),(h=U.current)===null||h===void 0||h.focus()}},$e=function(c){var h=E(be(te)),g=h;h.isNaN()?g=I:g=Ie(h,c),b!==void 0?ae(I,!1):g.isNaN()||ae(g,!1)},yn=function(){q.current=!0},hn=function(c){var h=c.which,g=c.shiftKey;q.current=!0,g?_.current=!0:_.current=!1,h===ce.ENTER&&(j.current||(q.current=!1),$e(!1),M==null||M(c)),B!==!1&&!j.current&&[ce.UP,ce.DOWN].includes(h)&&(Fe(ce.UP===h),c.preventDefault())},bn=function(){q.current=!1,_.current=!1},wn=function(){$e(!1),de(!1),q.current=!1};return Se(function(){I.isInvalidate()||ae(I,!1)},[V]),Se(function(){var m=E(b);Re(m);var c=E(be(te));(!m.equals(c)||!q.current||u)&&ae(m,q.current)},[b]),Se(function(){u&&mn()},[te]),i.createElement("div",{className:T(r,o,(n={},w(n,"".concat(r,"-focused"),ue),w(n,"".concat(r,"-disabled"),S),w(n,"".concat(r,"-readonly"),C),w(n,"".concat(r,"-not-a-number"),I.isNaN()),w(n,"".concat(r,"-out-of-range"),!I.isInvalidate()&&!we(I)),n)),style:l,onFocus:function(){de(!0)},onBlur:wn,onKeyDown:hn,onKeyUp:bn,onCompositionStart:fn,onCompositionEnd:vn,onBeforeInput:yn},z&&i.createElement(Xn,{prefixCls:r,upNode:N,downNode:x,upDisabled:De,downDisabled:Me,onStep:Fe}),i.createElement("div",{className:"".concat($,"-wrap")},i.createElement("input",fe({autoComplete:"off",role:"spinbutton","aria-valuemin":s,"aria-valuemax":f,"aria-valuenow":I.isInvalidate()?null:I.toString(),step:d},ye,{ref:Cn(U,t),className:$,value:te,onChange:gn,disabled:S,readOnly:C}))))});Ze.displayName="InputNumber";var Zn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},et=function(t,n){return i.createElement(_n,je(je({},t),{},{ref:n,icon:Zn}))},nt=i.forwardRef(et),tt=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},at=i.forwardRef(function(e,t){var n,a=i.useContext(An),r=a.getPrefixCls,o=a.direction,l=i.useContext(Hn),s=i.useState(!1),f=ie(s,2),p=f[0],d=f[1],v=i.useRef(null);i.useImperativeHandle(t,function(){return v.current});var b=e.className,S=e.size,C=e.prefixCls,N=e.addonBefore,x=e.addonAfter,B=e.prefix,R=e.bordered,z=R===void 0?!0:R,H=e.readOnly,D=tt(e,["className","size","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly"]),u=r("input-number",C),V=i.createElement(nt,{className:"".concat(u,"-handler-up-inner")}),F=i.createElement(Fn,{className:"".concat(u,"-handler-down-inner")}),W=S||l,ne=T((n={},w(n,"".concat(u,"-lg"),W==="large"),w(n,"".concat(u,"-sm"),W==="small"),w(n,"".concat(u,"-rtl"),o==="rtl"),w(n,"".concat(u,"-readonly"),H),w(n,"".concat(u,"-borderless"),!z),n),b),M=i.createElement(Ze,fe({ref:v,className:ne,upHandler:V,downHandler:F,prefixCls:u,readOnly:H},D));if(B!=null){var k,ye=T("".concat(u,"-affix-wrapper"),(k={},w(k,"".concat(u,"-affix-wrapper-focused"),p),w(k,"".concat(u,"-affix-wrapper-disabled"),e.disabled),w(k,"".concat(u,"-affix-wrapper-sm"),l==="small"),w(k,"".concat(u,"-affix-wrapper-lg"),l==="large"),w(k,"".concat(u,"-affix-wrapper-rtl"),o==="rtl"),w(k,"".concat(u,"-affix-wrapper-readonly"),H),w(k,"".concat(u,"-affix-wrapper-borderless"),!z),w(k,"".concat(b),!(N||x)&&b),k));M=i.createElement("div",{className:ye,style:e.style,onMouseUp:function(){return v.current.focus()}},i.createElement("span",{className:"".concat(u,"-prefix")},B),Ke(M,{style:null,value:e.value,onFocus:function(_){var A;d(!0),(A=e.onFocus)===null||A===void 0||A.call(e,_)},onBlur:function(_){var A;d(!1),(A=e.onBlur)===null||A===void 0||A.call(e,_)}}))}if(N!=null||x!=null){var $,U="".concat(u,"-group"),se="".concat(U,"-addon"),le=N?i.createElement("div",{className:se},N):null,ue=x?i.createElement("div",{className:se},x):null,de=T("".concat(u,"-wrapper"),U,w({},"".concat(U,"-rtl"),o==="rtl")),q=T("".concat(u,"-group-wrapper"),($={},w($,"".concat(u,"-group-wrapper-sm"),l==="small"),w($,"".concat(u,"-group-wrapper-lg"),l==="large"),w($,"".concat(u,"-group-wrapper-rtl"),o==="rtl"),$),b);M=i.createElement("div",{className:q,style:e.style},i.createElement("div",{className:de},le,Ke(M,{style:null}),ue))}return M});const Z=({className:e,disabled:t,readOnly:n,validationStatus:a="default",...r})=>{const o=T(e,a,{"kl6-textbox-disabled":t,"kl6-textbox-readonly":n});return{...r,disabled:t,readOnly:n,className:o}},rt=P.input.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${J}
`,it=Vn(({className:e,inputRef:t,...n})=>y.createElement(rt,{className:T("ant-input",e),...n,ref:t})),en=e=>{const{className:t,disabled:n,readOnly:a,autoFocus:r,onChange:o,maskOptions:l,testAttributes:s,id:f,value:p,cssConfig:d,onBlur:v,onKeyUp:b,...S}=Y(L(Z(e)));Q();const C=i.useRef(null);return i.useEffect(()=>{var N;r&&((N=C==null?void 0:C.current)==null||N.focus())},[]),y.createElement(it,{inputRef:N=>{C.current=N},onAccept:(N,x)=>{p===void 0&&N===""||o==null||o(N,x)},readOnly:a,id:f,className:t,value:p,disabled:n,cssConfig:d,onBlur:v,onKeyUp:b,...s,...l,...S})};en.__docgenInfo={description:"",methods:[],displayName:"InputMasked",props:{maskOptions:{required:!1,tsType:{name:"IMaskInputProps"},description:"Mask options"}}};const ot=P(at).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${J}
  ${En}
`,nn=e=>{const{onChange:t,controls:n,value:a,min:r,testAttributes:o,allowEmpty:l=!1,integerOnly:s=!1,...f}=Y(L(Z(e)));return Q(),y.createElement(ot,{upHandler:(n==null?void 0:n.upIcon)||y.createElement(On,null),downHandler:(n==null?void 0:n.downIcon)||y.createElement(qn,null),...o,...f,onChange:p=>{t==null||t(p)},min:r,value:a,formatter:p=>{let d;return l&&p===null?d="":d=String(p),d},onKeyPress:p=>{({true:/\d|-/,false:/\d|[.]|-/})[String(s)].test(p.key)||p.preventDefault()}})};nn.__docgenInfo={description:"",methods:[],displayName:"InputNumber",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TextboxNumberProps['value']) => void",signature:{arguments:[{type:{name:"intersection['value']",raw:"TextboxNumberProps['value']"},name:"value"}],return:{name:"void"}}},description:"Handler"},controls:{required:!1,tsType:{name:"union",raw:`boolean | undefined | any | {
  upIcon?: ReactNode,
  downIcon?: ReactNode
}`,elements:[{name:"boolean"},{name:"undefined"},{name:"any"},{name:"signature",type:"object",raw:`{
  upIcon?: ReactNode,
  downIcon?: ReactNode
}`,signature:{properties:[{key:"upIcon",value:{name:"ReactNode",required:!1}},{key:"downIcon",value:{name:"ReactNode",required:!1}}]}}]},description:"(optional) Icons for controls"},integerOnly:{required:!1,tsType:{name:"boolean"},description:"Allow input of integers only"},allowEmpty:{required:!1,tsType:{name:"boolean"},description:"Allow input have not the value"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Controlled Value"},min:{required:!1,tsType:{name:"number"},description:"The min value"},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled"},readOnly:{required:!1,tsType:{name:"boolean"},description:"Read only"},validationStatus:{required:!1,tsType:{name:"ValidationStatus"},description:"Validation status"},theme:{required:!1,tsType:{name:"ThemeKey"},description:"Custom theme"}}};const st="_ruleItem_1jxci_1",lt="_ruleIcon_1jxci_1",ut="_ruleContent_1jxci_4",dt="_valid_1jxci_9",me={ruleItem:st,ruleIcon:lt,ruleContent:ut,valid:dt};function tn({rules:e=[]}){return y.createElement(xe,{gap:"related"},e.map(t=>y.createElement(xe,{gap:"related",wrap:"nowrap",align:"start",key:t.message,className:T(me.ruleItem,{[me.valid]:t.isValid})},y.createElement(Le,{type:"BTR4",className:me.ruleIcon},t.isValid?y.createElement(Un,null):y.createElement(Bn,null)),y.createElement(Le,{type:"BTR4",className:me.ruleContent},t.message))))}tn.__docgenInfo={description:"",methods:[],displayName:"ValidationRules",props:{rules:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Description text of the validation rule */
  message: string,
  /** Indicates whether the value satisfies the rule */
  isValid: boolean
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0},description:"Description text of the validation rule"},{key:"isValid",value:{name:"boolean",required:!0},description:"Indicates whether the value satisfies the rule"}]}}],raw:"ValidationRule[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const ct=P(ve.Password).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${J}
  ${Pn}
`,an=e=>{const{onChange:t,testAttributes:n,value:a,clearBeforeFirstChange:r=!1,onFocus:o,onBlur:l,visibilityToggle:s,validationRules:f,showVisibilityIcon:p=!0,actions:d,disabled:v,...b}=Y(L(Z(e)));Q();const{t:S}=Je(),[C,N]=i.useState(!1),[x,B]=i.useState(!1),[R,z]=i.useState(!r),H=C&&r&&!x,D=y.createElement(ct,{disabled:v,iconRender:u=>!p||v?null:y.createElement(ze,{text:S(u?"input.password.hide":"input.password.show")},y.createElement(kn,{interactive:!1,icon:u?y.createElement(Dn,null):y.createElement(Mn,null),klId:e.klId?`${e.klId}-input-password-icon`:void 0,testId:e.testId?`${e.testId}-input-password-icon`:void 0})),onChange:({target:{value:u}})=>{t==null||t(u),B(!0)},value:H?"":a,visibilityToggle:s!==void 0?s:R,onFocus:u=>{N(!0),o&&o(u)},onBlur:u=>{N(!1),x&&z(!0),l&&l(u)},...n,...b});return y.createElement(xe,{gap:"related",wrap:"nowrap"},f!=null&&f.length?y.createElement(Kn,{trigger:"focus",content:y.createElement(tn,{rules:f})},D):D,d&&d.map((u,V)=>y.createElement(ze,{key:`${u.tooltip} - ${V}`,text:u.tooltip},y.createElement($n,{iconBefore:u.icon?y.createElement(jn,{name:u.icon,size:16}):null,mode:u.mode||"secondary",onClick:u.onClick}))))};an.__docgenInfo={description:"",methods:[],displayName:"InputPassword",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Handler"},value:{required:!1,tsType:{name:"string"},description:"Controlled Value"},clearBeforeFirstChange:{required:!1,tsType:{name:"boolean"},description:"Clear value before first change"},validationRules:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Description text of the validation rule */
  message: string,
  /** Indicates whether the value satisfies the rule */
  isValid: boolean
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0},description:"Description text of the validation rule"},{key:"isValid",value:{name:"boolean",required:!0},description:"Indicates whether the value satisfies the rule"}]}}],raw:"ValidationRule[]"},description:"Validation rules"},showVisibilityIcon:{required:!1,tsType:{name:"boolean"},description:"Show visibility icon"},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Tooltip text */
  tooltip?: string,
  /** Icon name for the action */
  icon?: IconNames,
  /** Button mode */
  mode?: ButtonProps['mode'],
  /** Handler called when the action button is clicked */
  onClick?: () => void
}`,signature:{properties:[{key:"tooltip",value:{name:"string",required:!1},description:"Tooltip text"},{key:"icon",value:{name:"IconNames",required:!1},description:"Icon name for the action"},{key:"mode",value:{name:"ButtonProps['mode']",raw:"ButtonProps['mode']",required:!1},description:"Button mode"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Handler called when the action button is clicked"}]}}],raw:`Array<{
  /** Tooltip text */
  tooltip?: string,
  /** Icon name for the action */
  icon?: IconNames,
  /** Button mode */
  mode?: ButtonProps['mode'],
  /** Handler called when the action button is clicked */
  onClick?: () => void
}>`},description:"actions displayed after input password"},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled"},readOnly:{required:!1,tsType:{name:"boolean"},description:"Read only"},validationStatus:{required:!1,tsType:{name:"ValidationStatus"},description:"Validation status"},theme:{required:!1,tsType:{name:"ThemeKey"},description:"Custom theme"}}};const mt=P(ve.TextArea).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${J}
  
  && {
    height: unset;
  }
`,pt=P.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${Rn}
`,Ee=i.forwardRef((e,t)=>{const{className:n,cssConfig:a,disabled:r,maxLength:o,onChange:l,onKeyDown:s,showCount:f,testAttributes:p,value:d,...v}=Y(L(Z(e)));Q();const{t:b}=Je();return y.createElement(pt,{cssConfig:a,className:T({"kl6-textbox-textarea-has-counter":f}),disabled:r},y.createElement(mt,{ref:t,className:T("kl-v6-textarea",n),onChange:({target:{value:S}})=>l==null?void 0:l(S),onKeyDown:S=>{S.stopPropagation(),s==null||s(S)},value:d,rows:3,maxLength:o,cssConfig:a,disabled:r,...p,...v}),f&&y.createElement(Tn,{type:"BTR4",themedColor:"baseicon",className:"kl6-textbox-textarea-counter"},b("textarea.wordsCount",{count:(d==null?void 0:d.length)||0,total:o})))});Ee.displayName="Textarea";Ee.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{showCount:{required:!1,tsType:{name:"boolean"},description:"Is counter shown"},maxLength:{required:!1,tsType:{name:"number"},description:"Max length"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Handler"},value:{required:!1,tsType:{name:"string"},description:"Controlled Value"},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled"},readOnly:{required:!1,tsType:{name:"boolean"},description:"Read only"},validationStatus:{required:!1,tsType:{name:"ValidationStatus"},description:"Validation status"},theme:{required:!1,tsType:{name:"ThemeKey"},description:"Custom theme"}}};const rn=P(ve).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${J}
`,ft=P.div`
  display: flex;
  align-items: center;
`,vt=P(rn)`
  width: 100%;
  flex-grow: 1;
`,gt=P.div`
  margin: 0;
  flex-grow: 0;
  text-align: center;
  align-self: center;
  width: 16px;
`,yt=P(rn)`
  width: 60px;
  flex-grow: 0;
`,on=e=>{const{validationStatus:t,disabled:n,className:a,onPathChange:r,onPortChange:o,pathValue:l,portValue:s,testId:f,klId:p,...d}=L(e);return y.createElement("div",{"data-testid":f,"kl-id":p},y.createElement(ft,null,y.createElement(vt,{className:T({error:t==="error"&&!n}),disabled:n,value:l,onChange:v=>r==null?void 0:r(v),"kl-id":"kl-v6-path-input",...d,"data-testid":"url-input-path"}),y.createElement(gt,null,":"),y.createElement(yt,{className:T({error:t==="error"&&!n}),disabled:n,value:s,onChange:v=>o==null?void 0:o(v),"kl-id":"kl-v6-port-input",...d,"data-testid":"url-input-port"})))};on.__docgenInfo={description:"@deprecated Compose components like this in product layout",methods:[],displayName:"UrlInput",props:{onPathChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"union",raw:"string | React.ChangeEvent<HTMLInputElement>",elements:[{name:"string"},{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}]},name:"value"}],return:{name:"void"}}},description:""},onPortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"union",raw:"string | React.ChangeEvent<HTMLInputElement>",elements:[{name:"string"},{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}]},name:"value"}],return:{name:"void"}}},description:""},pathValue:{required:!1,tsType:{name:"string"},description:""},portValue:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const sn=P(ve).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${J}
`,ht=i.forwardRef((e,t)=>{const{onChange:n,onKeyDown:a,testAttributes:r,...o}=Y(L(Z(e)));return Q(),y.createElement(sn,{ref:t,onChange:l=>n==null?void 0:n(l.target.value),onKeyDown:l=>{l.stopPropagation(),a==null||a(l)},...r,...o})}),ee=e=>{const{autoFocus:t,onChange:n,onKeyDown:a,testAttributes:r,...o}=Y(L(Z(e)));Q();const l=i.useRef(null);return i.useEffect(()=>{var s;t&&((s=l==null?void 0:l.current)==null||s.focus())},[t]),y.createElement(sn,{ref:l,onChange:s=>typeof s=="object"?n==null?void 0:n(s.target.value):void 0,onKeyDown:s=>{s.stopPropagation(),a==null||a(s)},...r,...o})};ee.Textarea=Ee;ee.Password=an;ee.Number=nn;ee.Masked=en;ee.Url=on;ht.__docgenInfo={description:"",methods:[],displayName:"TextboxWithRef"};ee.__docgenInfo={description:"",methods:[{name:"Password",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`Omit<ComponentProps<typeof Input.Password>, TypesToOmit> & {
  /** Handler */
  onChange?: (value: string) => void,
  /** Controlled Value */
  value?: string,
  /** Clear value before first change */
  clearBeforeFirstChange?: boolean,
  /** Validation rules */
  validationRules?: ValidationRule[],
  /** Show visibility icon */
  showVisibilityIcon?: boolean,
  /** actions displayed after input password */
  actions?: Array<{
    /** Tooltip text */
    tooltip?: string,
    /** Icon name for the action */
    icon?: IconNames,
    /** Button mode */
    mode?: ButtonProps['mode'],
    /** Handler called when the action button is clicked */
    onClick?: () => void
  }>
} & BaseTextboxProps`,elements:[{name:"Omit",elements:[{name:"ComponentProps",elements:[{name:"Input.Password"}],raw:"ComponentProps<typeof Input.Password>"},{name:"union",raw:"'onChange' | 'value' | 'defaultValue'| 'onInput' | 'size' | 'disabled' | 'readOnly' | 'className' | 'addonBefore' | 'addonAfter'",elements:[{name:"literal",value:"'onChange'"},{name:"literal",value:"'value'"},{name:"literal",value:"'defaultValue'"},{name:"literal",value:"'onInput'"},{name:"literal",value:"'size'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'readOnly'"},{name:"literal",value:"'className'"},{name:"literal",value:"'addonBefore'"},{name:"literal",value:"'addonAfter'"}]}],raw:"Omit<ComponentProps<typeof Input.Password>, TypesToOmit>"},{name:"signature",type:"object",raw:`{
  /** Handler */
  onChange?: (value: string) => void,
  /** Controlled Value */
  value?: string,
  /** Clear value before first change */
  clearBeforeFirstChange?: boolean,
  /** Validation rules */
  validationRules?: ValidationRule[],
  /** Show visibility icon */
  showVisibilityIcon?: boolean,
  /** actions displayed after input password */
  actions?: Array<{
    /** Tooltip text */
    tooltip?: string,
    /** Icon name for the action */
    icon?: IconNames,
    /** Button mode */
    mode?: ButtonProps['mode'],
    /** Handler called when the action button is clicked */
    onClick?: () => void
  }>
}`,signature:{properties:[{key:"onChange",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}},required:!1},description:"Handler"},{key:"value",value:{name:"string",required:!1},description:"Controlled Value"},{key:"clearBeforeFirstChange",value:{name:"boolean",required:!1},description:"Clear value before first change"},{key:"validationRules",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Description text of the validation rule */
  message: string,
  /** Indicates whether the value satisfies the rule */
  isValid: boolean
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0},description:"Description text of the validation rule"},{key:"isValid",value:{name:"boolean",required:!0},description:"Indicates whether the value satisfies the rule"}]}}],raw:"ValidationRule[]",required:!1},description:"Validation rules"},{key:"showVisibilityIcon",value:{name:"boolean",required:!1},description:"Show visibility icon"},{key:"actions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Tooltip text */
  tooltip?: string,
  /** Icon name for the action */
  icon?: IconNames,
  /** Button mode */
  mode?: ButtonProps['mode'],
  /** Handler called when the action button is clicked */
  onClick?: () => void
}`,signature:{properties:[{key:"tooltip",value:{name:"string",required:!1},description:"Tooltip text"},{key:"icon",value:{name:"IconNames",required:!1},description:"Icon name for the action"},{key:"mode",value:{name:"ButtonProps['mode']",raw:"ButtonProps['mode']",required:!1},description:"Button mode"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Handler called when the action button is clicked"}]}}],raw:`Array<{
  /** Tooltip text */
  tooltip?: string,
  /** Icon name for the action */
  icon?: IconNames,
  /** Button mode */
  mode?: ButtonProps['mode'],
  /** Handler called when the action button is clicked */
  onClick?: () => void
}>`,required:!1},description:"actions displayed after input password"}]}},{name:"intersection",raw:"TextboxClassNamedProps & TestingProps & TextboxThemedProps",elements:[{name:"signature",type:"object",raw:`{
  className?: string,
  /** Disabled */
  disabled?: boolean,
  /** Read only */
  readOnly?: boolean,
  /** Validation status */
  validationStatus?: ValidationStatus
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1},description:"Disabled"},{key:"readOnly",value:{name:"boolean",required:!1},description:"Read only"},{key:"validationStatus",value:{name:"ValidationStatus",required:!1},description:"Validation status"}]}},{name:"TestingProps"},{name:"signature",type:"object",raw:`{
  /** Custom theme */
  theme?: ThemeKey
}`,signature:{properties:[{key:"theme",value:{name:"ThemeKey",required:!1},description:"Custom theme"}]}}]}],alias:"TextboxPasswordProps"}}],returns:null},{name:"Number",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`Omit<ComponentProps<typeof AntdInputNumber>, TypesToOmit | 'controls'> & {
  /** Handler  */
  onChange?: (value: TextboxNumberProps['value']) => void,
  /** (optional) Icons for controls */
  controls?: boolean | undefined | any | {
    upIcon?: ReactNode,
    downIcon?: ReactNode
  },
  /** Allow input of integers only */
  integerOnly?: boolean
  /** Allow input have not the value  */
  allowEmpty?: boolean,
  /** Controlled Value */
  value?: number | string,
  /** The min value */
  min?: number
} & BaseTextboxProps`,elements:[{name:"Omit",elements:[{name:"ComponentProps",elements:[{name:"AntdInputNumber"}],raw:"ComponentProps<typeof AntdInputNumber>"},{name:"union",raw:"TypesToOmit | 'controls'",elements:[{name:"union",raw:"'onChange' | 'value' | 'defaultValue'| 'onInput' | 'size' | 'disabled' | 'readOnly' | 'className' | 'addonBefore' | 'addonAfter'",elements:[{name:"literal",value:"'onChange'"},{name:"literal",value:"'value'"},{name:"literal",value:"'defaultValue'"},{name:"literal",value:"'onInput'"},{name:"literal",value:"'size'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'readOnly'"},{name:"literal",value:"'className'"},{name:"literal",value:"'addonBefore'"},{name:"literal",value:"'addonAfter'"}]},{name:"literal",value:"'controls'"}]}],raw:"Omit<ComponentProps<typeof AntdInputNumber>, TypesToOmit | 'controls'>"},{name:"signature",type:"object",raw:`{
  /** Handler  */
  onChange?: (value: TextboxNumberProps['value']) => void,
  /** (optional) Icons for controls */
  controls?: boolean | undefined | any | {
    upIcon?: ReactNode,
    downIcon?: ReactNode
  },
  /** Allow input of integers only */
  integerOnly?: boolean
  /** Allow input have not the value  */
  allowEmpty?: boolean,
  /** Controlled Value */
  value?: number | string,
  /** The min value */
  min?: number
}`,signature:{properties:[{key:"onChange",value:{name:"signature",type:"function",raw:"(value: TextboxNumberProps['value']) => void",signature:{arguments:[{type:{name:"TextboxNumberProps['value']",raw:"TextboxNumberProps['value']"},name:"value"}],return:{name:"void"}},required:!1},description:"Handler"},{key:"controls",value:{name:"union",raw:`boolean | undefined | any | {
  upIcon?: ReactNode,
  downIcon?: ReactNode
}`,elements:[{name:"boolean"},{name:"undefined"},{name:"any"},{name:"signature",type:"object",raw:`{
  upIcon?: ReactNode,
  downIcon?: ReactNode
}`,signature:{properties:[{key:"upIcon",value:{name:"ReactNode",required:!1}},{key:"downIcon",value:{name:"ReactNode",required:!1}}]}}],required:!1},description:"(optional) Icons for controls"},{key:"integerOnly",value:{name:"boolean",required:!1},description:"Allow input of integers only"},{key:"allowEmpty",value:{name:"boolean",required:!1},description:"Allow input have not the value"},{key:"value",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Controlled Value"},{key:"min",value:{name:"number",required:!1},description:"The min value"}]}},{name:"intersection",raw:"TextboxClassNamedProps & TestingProps & TextboxThemedProps",elements:[{name:"signature",type:"object",raw:`{
  className?: string,
  /** Disabled */
  disabled?: boolean,
  /** Read only */
  readOnly?: boolean,
  /** Validation status */
  validationStatus?: ValidationStatus
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1},description:"Disabled"},{key:"readOnly",value:{name:"boolean",required:!1},description:"Read only"},{key:"validationStatus",value:{name:"ValidationStatus",required:!1},description:"Validation status"}]}},{name:"TestingProps"},{name:"signature",type:"object",raw:`{
  /** Custom theme */
  theme?: ThemeKey
}`,signature:{properties:[{key:"theme",value:{name:"ThemeKey",required:!1},description:"Custom theme"}]}}]}],alias:"TextboxNumberProps"}}],returns:null},{name:"Masked",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`Omit<TextboxProps, 'maskOptions'> & {
  /** Mask options */
  maskOptions?: IMaskInputProps
}`,elements:[{name:"Omit",elements:[{name:"PropsWithChildren",elements:[{name:"intersection",raw:`Omit<ComponentProps<typeof Input>, TypesToOmit> & {
  /** Handler */
  onChange?: (value: string, mask?: IMaskInputProps) => void,
  /** Controlled Value */
  value?: string,
  onBlur?: FocusEventHandler
} & BaseTextboxProps`,elements:[{name:"Omit",elements:[{name:"ComponentProps",elements:[{name:"Input"}],raw:"ComponentProps<typeof Input>"},{name:"union",raw:"'onChange' | 'value' | 'defaultValue'| 'onInput' | 'size' | 'disabled' | 'readOnly' | 'className' | 'addonBefore' | 'addonAfter'",elements:[{name:"literal",value:"'onChange'"},{name:"literal",value:"'value'"},{name:"literal",value:"'defaultValue'"},{name:"literal",value:"'onInput'"},{name:"literal",value:"'size'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'readOnly'"},{name:"literal",value:"'className'"},{name:"literal",value:"'addonBefore'"},{name:"literal",value:"'addonAfter'"}]}],raw:"Omit<ComponentProps<typeof Input>, TypesToOmit>"},{name:"signature",type:"object",raw:`{
  /** Handler */
  onChange?: (value: string, mask?: IMaskInputProps) => void,
  /** Controlled Value */
  value?: string,
  onBlur?: FocusEventHandler
}`,signature:{properties:[{key:"onChange",value:{name:"signature",type:"function",raw:"(value: string, mask?: IMaskInputProps) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"IMaskInputProps"},name:"mask"}],return:{name:"void"}},required:!1},description:"Handler"},{key:"value",value:{name:"string",required:!1},description:"Controlled Value"},{key:"onBlur",value:{name:"FocusEventHandler",required:!1}}]}},{name:"intersection",raw:"TextboxClassNamedProps & TestingProps & TextboxThemedProps",elements:[{name:"signature",type:"object",raw:`{
  className?: string,
  /** Disabled */
  disabled?: boolean,
  /** Read only */
  readOnly?: boolean,
  /** Validation status */
  validationStatus?: ValidationStatus
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1},description:"Disabled"},{key:"readOnly",value:{name:"boolean",required:!1},description:"Read only"},{key:"validationStatus",value:{name:"ValidationStatus",required:!1},description:"Validation status"}]}},{name:"TestingProps"},{name:"signature",type:"object",raw:`{
  /** Custom theme */
  theme?: ThemeKey
}`,signature:{properties:[{key:"theme",value:{name:"ThemeKey",required:!1},description:"Custom theme"}]}}]}]}],raw:`PropsWithChildren<Omit<ComponentProps<typeof Input>, TypesToOmit> & {
  /** Handler */
  onChange?: (value: string, mask?: IMaskInputProps) => void,
  /** Controlled Value */
  value?: string,
  onBlur?: FocusEventHandler
} & BaseTextboxProps>`},{name:"literal",value:"'maskOptions'"}],raw:"Omit<TextboxProps, 'maskOptions'>"},{name:"signature",type:"object",raw:`{
  /** Mask options */
  maskOptions?: IMaskInputProps
}`,signature:{properties:[{key:"maskOptions",value:{name:"IMaskInputProps",required:!1},description:"Mask options"}]}}],alias:"TextboxMaskedProps"}}],returns:null},{name:"Url",docblock:"@deprecated Compose components like this in product layout",modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"IUrlInputProps",alias:"IUrlInputProps"}}],returns:{type:{name:"ReactElement",elements:[{name:"IUrlInputProps"}],raw:"ReactElement<IUrlInputProps>"}},description:null}],displayName:"Textbox"};export{ee as T};
