import{g as c}from"./_commonjsHelpers-de833af9.js";import{r as f}from"./java-31e93124.js";function u(t,a){for(var e=0;e<a.length;e++){const r=a[e];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in t)){const n=Object.getOwnPropertyDescriptor(r,l);n&&Object.defineProperty(t,l,n.get?n:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o,s;function d(){if(s)return o;s=1;var t=f();o=a,a.displayName="scala",a.aliases=[];function a(e){e.register(t),e.languages.scala=e.languages.extend("java",{keyword:/<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0}],builtin:/\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,number:/\b0x[\da-f]*\.?[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e\d+)?[dfl]?/i,symbol:/'[^\d\s\\]\w*/}),delete e.languages.scala["class-name"],delete e.languages.scala.function}return o}var i=d();const g=c(i),b=u({__proto__:null,default:g},[i]);export{b as s};
//# sourceMappingURL=scala-c9681d5a.js.map
