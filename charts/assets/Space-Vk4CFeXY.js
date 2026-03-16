import{d as S,b as g,e as b,u as w}from"./Typography-CwddtZBH.js";import{r as x,R as $}from"./index-B3FZByPw.js";import{H as q}from"./palette-CcbSufZ2.js";var u,y;function T(){if(y)return u;y=1;function r(t,e){for(var i=-1,a=t==null?0:t.length,o=Array(a);++i<a;)o[i]=e(t[i],i,t);return o}return u=r,u}var f,h;function _(){if(h)return f;h=1;var r=S(),t=T(),e=b(),i=g(),a=r?r.prototype:void 0,o=a?a.toString:void 0;function s(n){if(typeof n=="string")return n;if(e(n))return t(n,s)+"";if(i(n))return o?o.call(n):"";var l=n+"";return l=="0"&&1/n==-1/0?"-0":l}return f=s,f}var d,p;function P(){if(p)return d;p=1;var r=_();function t(e){return e==null?"":r(e)}return d=t,d}function c(r){return r===void 0?"":Array.isArray(r)?`${c(r[0])} ${c(r[1])}`:typeof r=="string"?`var(--spacing--gap_${r})`:r===0?"0":`${r}px`}function v(r){switch(r){case"large":return"1592px";case"medium":return"872px";default:return""}}const A=q.div.withConfig({shouldForwardProp:r=>!["direction","gap","align","wrap","justify","width","maxWidth"].includes(r)})`
  display: flex;
  flex-direction: ${({direction:r})=>r==="vertical"?"column":"row"};
  gap: ${({gap:r,size:t})=>c(r??t)};
  align-items: ${({align:r})=>r};
  flex-wrap: ${({wrap:r})=>r};
  justify-content: ${({justify:r})=>r};
  max-width: ${({maxWidth:r})=>v(r)};
  width: ${({width:r})=>r||"inherit"};
  ${r=>r.height&&`height: ${r.height};`};
`,m=x.forwardRef(({children:r,align:t="center",wrap:e="wrap",...i},a)=>{const{testAttributes:o,...s}=w(i);return $.createElement(A,{ref:a,align:t,wrap:e,...o,...s},r)});m.displayName="Space";m.defaultProps={maxWidth:"none"};export{m as S,_ as a,T as b,P as r};
