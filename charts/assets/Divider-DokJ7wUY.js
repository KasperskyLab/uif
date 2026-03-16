import{u as E}from"./Typography-CwddtZBH.js";import{R as U}from"./index-B3FZByPw.js";import{C as c,H as j}from"./palette-CcbSufZ2.js";import{u as z}from"./useThemedComponent-Bu04EU6r.js";var d,_;function F(){if(_)return d;_=1;function r(o,e,i){var n=-1,a=o.length;e<0&&(e=-e>a?0:a+e),i=i>a?a:i,i<0&&(i+=a),a=e>i?0:i-e>>>0,e>>>=0;for(var u=Array(a);++n<a;)u[n]=o[n+e];return u}return d=r,d}var l,T;function rr(){if(T)return l;T=1;var r=F();function o(e,i,n){var a=e.length;return n=n===void 0?a:n,!i&&n>=a?e:r(e,i,n)}return l=o,l}var m,C;function J(){if(C)return m;C=1;var r="\\ud800-\\udfff",o="\\u0300-\\u036f",e="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",n=o+e+i,a="\\ufe0e\\ufe0f",u="\\u200d",s=RegExp("["+u+r+n+a+"]");function t(f){return s.test(f)}return m=t,m}var g,S;function O(){if(S)return g;S=1;function r(o){return o.split("")}return g=r,g}var v,q;function $(){if(q)return v;q=1;var r="\\ud800-\\udfff",o="\\u0300-\\u036f",e="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",n=o+e+i,a="\\ufe0e\\ufe0f",u="["+r+"]",s="["+n+"]",t="\\ud83c[\\udffb-\\udfff]",f="(?:"+s+"|"+t+")",h="[^"+r+"]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",R="[\\ud800-\\udbff][\\udc00-\\udfff]",w="\\u200d",A=f+"?",y="["+a+"]?",M="(?:"+w+"(?:"+[h,p,R].join("|")+")"+y+A+")*",P=y+A+M,V="(?:"+[h+s+"?",s,p,R,u].join("|")+")",k=RegExp(t+"(?="+t+")|"+V+P,"g");function D(H){return H.match(k)||[]}return v=D,v}var b,x;function er(){if(x)return b;x=1;var r=O(),o=J(),e=$();function i(n){return o(n)?e(n):r(n)}return b=i,b}function N(){return r=>({cssConfig:o})=>r==null?void 0:r.toString().split(".").reduce((e,i)=>W(e)?e:e[i],o)}function W(r){return typeof r!="object"}const Z=N(),B=c`
  padding: 0;
  display: flex;
  background: ${Z("color")};
  
  ${({direction:r})=>r==="horizontal"?c`
        margin-top: 0;
        margin-bottom: 0;
        width: 100%;
        height: 1px;
      `:c`
        margin-left: 0;
        margin-right: 0;
        width: 1px;
      `}
`,G=r=>z(r,{componentName:"divider",defaultValues:{mode:"bold"}}),I=j.div.withConfig({shouldForwardProp:r=>!["cssConfig","direction"].includes(r)})`
  ${B}
`,ir=r=>{const o=G(r),e=E(o);return U.createElement(K,{...e})},K=({testAttributes:r,cssConfig:o,direction:e="horizontal",...i})=>U.createElement(I,{direction:e,cssConfig:o,...r,...i});export{ir as D,er as a,rr as b,N as g,J as r};
