import{aX as ze,n as Y,e as Fe,f as we,g as Te,k as $,U as C,p as Pe,h as Ee,i as Se,j as le,R as y,l as oe,_ as Ae,r as w,aF as $e,H as z,T as Ne,A as Be,a5 as He,P as S,L as xe,u as Ie,bb as We,S as ne}from"./iframe-zz6a49H8.js";import{B as Ve}from"./Button-Djh220XQ.js";import{_ as M}from"./regeneratorRuntime-D-GllPJF.js";import{_ as N}from"./type-CR-gS43P.js";import{p as Xe}from"./pickAttrs-BgtJ82nl.js";import{o as ge,t as Ke}from"./Upload-BgoxvLW9.js";import{D as Le}from"./Dropdown-D5otA5yN.js";import{o as Je,a as _e}from"./StatusDangerOutlineSquare-CfDrKxro.js";import{t as Qe}from"./Menu2-gmgzxp5q.js";import{c as ye,U as pe,F as Ye}from"./FileItem-LsQwFAIP.js";import{u as G}from"./useTranslation-7a9748wG.js";import{P as Ze}from"./Popover-B2Trw9mJ.js";import{l as Ge,t as er}from"./UploadFull-CznKQlPq.js";const ae=function(e,a){if(e&&a){var i=Array.isArray(a)?a:a.split(","),r=e.name||"",n=e.type||"",s=n.replace(/\/.*$/,"");return i.some(function(u){var l=u.trim();if(/^\*(\/\*)?$/.test(u))return!0;if(l.charAt(0)==="."){var c=r.toLowerCase(),p=l.toLowerCase(),t=[p];return(p===".jpg"||p===".jpeg")&&(t=[".jpg",".jpeg"]),t.some(function(v){return c.endsWith(v)})}return/\/\*$/.test(l)?s===l.replace(/\/.*$/,""):n===l?!0:/^\w+$/.test(l)?(ze(!1,"Upload takes an invalidate 'accept' type '".concat(l,"'.Skip for check.")),!0):!1})}return!0};function rr(e,a){var i="cannot ".concat(e.method," ").concat(e.action," ").concat(a.status,"'"),r=new Error(i);return r.status=a.status,r.method=e.method,r.url=e.action,r}function he(e){var a=e.responseText||e.response;if(!a)return a;try{return JSON.parse(a)}catch{return a}}function nr(e){var a=new XMLHttpRequest;e.onProgress&&a.upload&&(a.upload.onprogress=function(s){s.total>0&&(s.percent=s.loaded/s.total*100),e.onProgress(s)});var i=new FormData;e.data&&Object.keys(e.data).forEach(function(n){var s=e.data[n];if(Array.isArray(s)){s.forEach(function(u){i.append("".concat(n,"[]"),u)});return}i.append(n,s)}),e.file instanceof Blob?i.append(e.filename,e.file,e.file.name):i.append(e.filename,e.file),a.onerror=function(s){e.onError(s)},a.onload=function(){return a.status<200||a.status>=300?e.onError(rr(e,a),he(a)):e.onSuccess(he(a),a)},a.open(e.method,e.action,!0),e.withCredentials&&"withCredentials"in a&&(a.withCredentials=!0);var r=e.headers||{};return r["X-Requested-With"]!==null&&a.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(r).forEach(function(n){r[n]!==null&&a.setRequestHeader(n,r[n])}),a.send(i),{abort:function(){a.abort()}}}var ar=function(){var e=N(M().mark(function a(i,r){var n,s,u,l,c,p,t,v;return M().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:p=function(){return p=N(M().mark(function g(h){return M().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",new Promise(function(q){h.file(function(T){r(T)?(h.fullPath&&!T.webkitRelativePath&&(Object.defineProperties(T,{webkitRelativePath:{writable:!0}}),T.webkitRelativePath=h.fullPath.replace(/^\//,""),Object.defineProperties(T,{webkitRelativePath:{writable:!1}})),q(T)):q(null)})}));case 1:case"end":return b.stop()}},g)})),p.apply(this,arguments)},c=function(g){return p.apply(this,arguments)},l=function(){return l=N(M().mark(function g(h){var k,b,q,T,o;return M().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:k=h.createReader(),b=[];case 2:return F.next=5,new Promise(function(P){k.readEntries(P,function(){return P([])})});case 5:if(q=F.sent,T=q.length,T){F.next=9;break}return F.abrupt("break",12);case 9:for(o=0;o<T;o++)b.push(q[o]);F.next=2;break;case 12:return F.abrupt("return",b);case 13:case"end":return F.stop()}},g)})),l.apply(this,arguments)},u=function(g){return l.apply(this,arguments)},n=[],s=[],i.forEach(function(m){return s.push(m.webkitGetAsEntry())}),t=function(){var m=N(M().mark(function g(h,k){var b,q;return M().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(h){o.next=2;break}return o.abrupt("return");case 2:if(h.path=k||"",!h.isFile){o.next=10;break}return o.next=6,c(h);case 6:b=o.sent,b&&n.push(b),o.next=15;break;case 10:if(!h.isDirectory){o.next=15;break}return o.next=13,u(h);case 13:q=o.sent,s.push.apply(s,Y(q));case 15:case"end":return o.stop()}},g)}));return function(h,k){return m.apply(this,arguments)}}(),v=0;case 9:if(!(v<s.length)){d.next=15;break}return d.next=12,t(s[v]);case 12:v++,d.next=9;break;case 15:return d.abrupt("return",n);case 16:case"end":return d.stop()}},a)}));return function(i,r){return e.apply(this,arguments)}}(),tr=+new Date,ir=0;function te(){return"rc-upload-".concat(tr,"-").concat(++ir)}var sr=["component","prefixCls","className","classNames","disabled","id","name","style","styles","multiple","accept","capture","children","directory","openFileDialogOnClick","onMouseEnter","onMouseLeave","hasControlInside"],lr=function(e){Fe(i,e);var a=we(i);function i(){var r;Te(this,i);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return r=a.call.apply(a,[this].concat(s)),$(C(r),"state",{uid:te()}),$(C(r),"reqs",{}),$(C(r),"fileInput",void 0),$(C(r),"_isMounted",void 0),$(C(r),"onChange",function(l){var c=r.props,p=c.accept,t=c.directory,v=l.target.files,f=Y(v).filter(function(d){return!t||ae(d,p)});r.uploadFiles(f),r.reset()}),$(C(r),"onClick",function(l){var c=r.fileInput;if(c){var p=l.target,t=r.props.onClick;if(p&&p.tagName==="BUTTON"){var v=c.parentNode;v.focus(),p.blur()}c.click(),t&&t(l)}}),$(C(r),"onKeyDown",function(l){l.key==="Enter"&&r.onClick(l)}),$(C(r),"onFileDrop",function(){var l=N(M().mark(function c(p){var t,v,f;return M().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(t=r.props.multiple,p.preventDefault(),p.type!=="dragover"){m.next=4;break}return m.abrupt("return");case 4:if(!r.props.directory){m.next=11;break}return m.next=7,ar(Array.prototype.slice.call(p.dataTransfer.items),function(g){return ae(g,r.props.accept)});case 7:v=m.sent,r.uploadFiles(v),m.next=14;break;case 11:f=Y(p.dataTransfer.files).filter(function(g){return ae(g,r.props.accept)}),t===!1&&(f=f.slice(0,1)),r.uploadFiles(f);case 14:case"end":return m.stop()}},c)}));return function(c){return l.apply(this,arguments)}}()),$(C(r),"uploadFiles",function(l){var c=Y(l),p=c.map(function(t){return t.uid=te(),r.processFile(t,c)});Promise.all(p).then(function(t){var v=r.props.onBatchStart;v==null||v(t.map(function(f){var d=f.origin,m=f.parsedFile;return{file:d,parsedFile:m}})),t.filter(function(f){return f.parsedFile!==null}).forEach(function(f){r.post(f)})})}),$(C(r),"processFile",function(){var l=N(M().mark(function c(p,t){var v,f,d,m,g,h,k,b,q;return M().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(v=r.props.beforeUpload,f=p,!v){o.next=14;break}return o.prev=3,o.next=6,v(p,t);case 6:f=o.sent,o.next=12;break;case 9:o.prev=9,o.t0=o.catch(3),f=!1;case 12:if(f!==!1){o.next=14;break}return o.abrupt("return",{origin:p,parsedFile:null,action:null,data:null});case 14:if(d=r.props.action,typeof d!="function"){o.next=21;break}return o.next=18,d(p);case 18:m=o.sent,o.next=22;break;case 21:m=d;case 22:if(g=r.props.data,typeof g!="function"){o.next=29;break}return o.next=26,g(p);case 26:h=o.sent,o.next=30;break;case 29:h=g;case 30:return k=(Pe(f)==="object"||typeof f=="string")&&f?f:p,k instanceof File?b=k:b=new File([k],p.name,{type:p.type}),q=b,q.uid=p.uid,o.abrupt("return",{origin:p,data:h,parsedFile:q,action:m});case 35:case"end":return o.stop()}},c,null,[[3,9]])}));return function(c,p){return l.apply(this,arguments)}}()),$(C(r),"saveFileInput",function(l){r.fileInput=l}),r}return Ee(i,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.abort()}},{key:"post",value:function(n){var s=this,u=n.data,l=n.origin,c=n.action,p=n.parsedFile;if(this._isMounted){var t=this.props,v=t.onStart,f=t.customRequest,d=t.name,m=t.headers,g=t.withCredentials,h=t.method,k=l.uid,b=f||nr,q={action:c,filename:d,data:u,file:p,headers:m,withCredentials:g,method:h||"post",onProgress:function(o){var j=s.props.onProgress;j==null||j(o,p)},onSuccess:function(o,j){var F=s.props.onSuccess;F==null||F(o,p,j),delete s.reqs[k]},onError:function(o,j){var F=s.props.onError;F==null||F(o,j,p),delete s.reqs[k]}};v(l),this.reqs[k]=b(q)}}},{key:"reset",value:function(){this.setState({uid:te()})}},{key:"abort",value:function(n){var s=this.reqs;if(n){var u=n.uid?n.uid:n;s[u]&&s[u].abort&&s[u].abort(),delete s[u]}else Object.keys(s).forEach(function(l){s[l]&&s[l].abort&&s[l].abort(),delete s[l]})}},{key:"render",value:function(){var n=this.props,s=n.component,u=n.prefixCls,l=n.className,c=n.classNames,p=c===void 0?{}:c,t=n.disabled,v=n.id,f=n.name,d=n.style,m=n.styles,g=m===void 0?{}:m,h=n.multiple,k=n.accept,b=n.capture,q=n.children,T=n.directory,o=n.openFileDialogOnClick,j=n.onMouseEnter,F=n.onMouseLeave,P=n.hasControlInside,B=Se(n,sr),O=le($($($({},u,!0),"".concat(u,"-disabled"),t),l,l)),H=T?{directory:"directory",webkitdirectory:"webkitdirectory"}:{},K=t?{}:{onClick:o?this.onClick:function(){},onKeyDown:o?this.onKeyDown:function(){},onMouseEnter:j,onMouseLeave:F,onDrop:this.onFileDrop,onDragOver:this.onFileDrop,tabIndex:P?void 0:"0"};return y.createElement(s,oe({},K,{className:O,role:P?void 0:"button",style:d}),y.createElement("input",oe({},Xe(B,{aria:!0,data:!0}),{id:v,name:f,disabled:t,type:"file",ref:this.saveFileInput,onClick:function(I){return I.stopPropagation()},key:this.state.uid,style:Ae({display:"none"},g.input),className:p.input,accept:k},H,{multiple:h,onChange:this.onChange},b!=null?{capture:b}:{})),q)}}]),i}(w.Component);function ie(){}var ue=function(e){Fe(i,e);var a=we(i);function i(){var r;Te(this,i);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return r=a.call.apply(a,[this].concat(s)),$(C(r),"uploader",void 0),$(C(r),"saveUploader",function(l){r.uploader=l}),r}return Ee(i,[{key:"abort",value:function(n){this.uploader.abort(n)}},{key:"render",value:function(){return y.createElement(lr,oe({},this.props,{ref:this.saveUploader}))}}]),i}(w.Component);$(ue,"defaultProps",{component:"span",prefixCls:"rc-upload",data:{},headers:{},name:"file",multipart:!1,onStart:ie,onError:ie,onSuccess:ie,multiple:!1,beforeUpload:null,customRequest:null,withCredentials:!1,openFileDialogOnClick:!0,hasControlInside:!1});const be=$e(),or=z(({disabled:e,fileList:a,maxCount:i,maxTotalSize:r,onDeleteAll:n,onDeleteErrors:s,onReloadErrors:u,onDownloadAll:l,...c})=>{const{t:p}=G(),t=[];if(i&&t.push(p("uploader.total.files",{filesCount:a.length,total:i})),r){const d=a.reduce((m,g)=>m+g.size,0);t.push(p("uploader.total.size",{size:ye(d),total:ye(r*1024)}))}const v=t.length===0?p("uploader.total.simple",{filesCount:a.length}):t.join(", "),f=[{children:p("uploader.actions.deleteAll"),componentsBefore:[y.createElement(ge,{key:"icon"})],onClick:n}];return a.some(d=>!!d.error)&&f.push({children:p("uploader.actions.deleteErrors",{count:a.filter(d=>!!d.error).length}),componentsBefore:[y.createElement(ge,{key:"icon"})],onClick:s},{children:p("uploader.actions.reloadErrors",{count:a.filter(d=>!!d.error).length}),componentsBefore:[y.createElement(Je,{key:"icon"})],onClick:u}),l&&f.push({children:p("uploader.actions.downloadAll"),componentsBefore:[y.createElement(_e,{key:"icon"})],onClick:l}),y.createElement(Ne,{...c,type:"BTR4"},v,y.createElement(Le,{disabled:e,overlay:f,trigger:["click"]},y.createElement(Be,{disabled:e,icon:y.createElement(Qe,null),size:"large"})))})`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${e=>e.disabled?be.disabled.total:be.enabled.total};
`;function Ce({disabled:e,items:a=[],onDownload:i,onRemove:r,onUpload:n,showProgress:s,truncateFileName:u}){const l=c=>{typeof i=="function"?i(c):c.url&&window.open(c.url)};return w.createElement(pe,null,a.map(c=>w.createElement(Ye,{...c,key:c.uid,disabled:e,onDownload:()=>l(c),onRemove:()=>r==null?void 0:r(c),onUpload:()=>n==null?void 0:n(c),percent:s?c.percent:void 0,truncateName:u})))}Ce.__docgenInfo={description:"",methods:[],displayName:"UploadList",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  error?: any,
  lastModified?: number,
  name: string,
  originFileObj?: RcFile,
  percent?: number,
  response?: T,
  size: number,
  status?: 'error' | 'success' | 'done' | 'uploading' | 'removed',
  uid: string,
  url?: string,
  xhr?: T
}`,signature:{properties:[{key:"error",value:{name:"any",required:!1}},{key:"lastModified",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"originFileObj",value:{name:"RcFile",required:!1}},{key:"percent",value:{name:"number",required:!1}},{key:"response",value:{name:"T",required:!1}},{key:"size",value:{name:"number",required:!0}},{key:"status",value:{name:"union",raw:"'error' | 'success' | 'done' | 'uploading' | 'removed'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'done'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'removed'"}],required:!1}},{key:"uid",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"xhr",value:{name:"T",required:!1}}]}}],raw:"Array<UploadFile>"},description:"",defaultValue:{value:"[]",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: UploadFile) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  error?: any,
  lastModified?: number,
  name: string,
  originFileObj?: RcFile,
  percent?: number,
  response?: T,
  size: number,
  status?: 'error' | 'success' | 'done' | 'uploading' | 'removed',
  uid: string,
  url?: string,
  xhr?: T
}`,signature:{properties:[{key:"error",value:{name:"any",required:!1}},{key:"lastModified",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"originFileObj",value:{name:"RcFile",required:!1}},{key:"percent",value:{name:"number",required:!1}},{key:"response",value:{name:"T",required:!1}},{key:"size",value:{name:"number",required:!0}},{key:"status",value:{name:"union",raw:"'error' | 'success' | 'done' | 'uploading' | 'removed'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'done'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'removed'"}],required:!1}},{key:"uid",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"xhr",value:{name:"T",required:!1}}]}},name:"file"}],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: UploadFile) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  error?: any,
  lastModified?: number,
  name: string,
  originFileObj?: RcFile,
  percent?: number,
  response?: T,
  size: number,
  status?: 'error' | 'success' | 'done' | 'uploading' | 'removed',
  uid: string,
  url?: string,
  xhr?: T
}`,signature:{properties:[{key:"error",value:{name:"any",required:!1}},{key:"lastModified",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"originFileObj",value:{name:"RcFile",required:!1}},{key:"percent",value:{name:"number",required:!1}},{key:"response",value:{name:"T",required:!1}},{key:"size",value:{name:"number",required:!0}},{key:"status",value:{name:"union",raw:"'error' | 'success' | 'done' | 'uploading' | 'removed'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'done'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'removed'"}],required:!1}},{key:"uid",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"xhr",value:{name:"T",required:!1}}]}},name:"file"}],return:{name:"void"}}},description:""},onUpload:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: UploadFile) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  error?: any,
  lastModified?: number,
  name: string,
  originFileObj?: RcFile,
  percent?: number,
  response?: T,
  size: number,
  status?: 'error' | 'success' | 'done' | 'uploading' | 'removed',
  uid: string,
  url?: string,
  xhr?: T
}`,signature:{properties:[{key:"error",value:{name:"any",required:!1}},{key:"lastModified",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"originFileObj",value:{name:"RcFile",required:!1}},{key:"percent",value:{name:"number",required:!1}},{key:"response",value:{name:"T",required:!1}},{key:"size",value:{name:"number",required:!0}},{key:"status",value:{name:"union",raw:"'error' | 'success' | 'done' | 'uploading' | 'removed'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'done'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'removed'"}],required:!1}},{key:"uid",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"xhr",value:{name:"T",required:!1}}]}},name:"file"}],return:{name:"void"}}},description:""},showProgress:{required:!0,tsType:{name:"boolean"},description:""},truncateFileName:{required:!1,tsType:{name:"boolean"},description:""}}};const ur=e=>He(e,{componentName:"upload",defaultValues:{}});function _(e,a){return{...e,lastModified:e.lastModified,name:e.name,originFileObj:e,percent:0,size:e.size,uid:e.uid,...a}}function Q(e,a){const i=[...a],r=i.findIndex(({uid:n})=>n===e.uid);return r===-1?i.push(e):i[r]=e,i}function se(e,a){const i=e.uid!==void 0?"uid":"name";return a.filter(r=>r[i]===e[i])[0]}function dr(e,a){const i=e.uid!==void 0?"uid":"name",r=a.filter(n=>n[i]!==e[i]);return r.length===a.length?null:r}function cr(e){return e.sort((a,i)=>a.status==="error"&&i.status!=="error"?-1:a.status!=="error"&&i.status==="error"?1:0),e}function pr(e,a,i,r,n){return{handleRemove:async t=>{const v=Array.isArray(t)?t:[t],f=await Promise.allSettled(v.map(async g=>({file:g,res:await(n==null?void 0:n(g))})));let d,m=e;for(const g of f){if(g.status==="rejected"||g.value.res===!1)continue;const h=g.value.file,k=dr(h,m);k&&(m=k,d={...h,status:"removed"},e==null||e.forEach(b=>{const q=d.uid!==void 0?"uid":"name";b[q]===d[q]&&!Object.isFrozen(b)&&(b.status="removed")}),r(d))}d&&a(d,m)},onBatchStart:t=>{const v=t.filter(m=>!m.file[i]);if(!v.length)return;const f=v.map(m=>_(m.file));let d=[...e];f.forEach(m=>{d=Q(m,d)}),f.forEach((m,g)=>{let h=m;if(v[g].parsedFile)m.status="uploading";else{const{originFileObj:k}=m;let b;try{b=new File([k],k.name,{type:k.type})}catch{b=new Blob([k],{type:k.type}),b.name=k.name,b.lastModified=new Date().getTime()}b.uid=m.uid,h=b}a(h,d)})},onError:(t,v,f)=>{if(!se(f,e))return;const d=_(f,{error:t,response:v,status:"error"});a(d,cr(Q(d,e)))},onProgress:(t,v)=>{if(!se(v,e))return;const f=_(v,{percent:t.percent,status:"uploading"});a(f,Q(f,e),t)},onSuccess:(t,v,f)=>{if(!se(v,e))return;try{typeof t=="string"&&(t=JSON.parse(t))}catch(m){console.error(m)}const d=_(v,{percent:100,response:t,status:"done",xhr:f});a(d,Q(d,e))}}}function de(e){return e.reduce((a,i)=>a+i.size,0)}function mr(e,a,i,r){const n=[];if(a){for(const s of e)if(s.size>a*1024){n.push("uploader.validation.maxFileSize2");break}}return i&&e.length>i&&n.push("uploader.validation.maxCount2"),r&&de(e)>r*1024&&n.push("uploader.validation.maxTotalSize2"),n}function fr(e,a,i,r,n){const s=[],u={},l=[];if(i)for(const c of a)c.size>i*1024?(u["uploader.validation.maxFileSize"]??(u["uploader.validation.maxFileSize"]=[]),u["uploader.validation.maxFileSize"].push(c.name),s.push(c)):l.push(c);else l.push(...a);return r&&e.length+l.length>r&&(u["uploader.validation.maxCount"]=l.map(c=>c.name),s.push(...l)),n&&de(e)+de(l)>n*1024&&(u["uploader.validation.maxTotalSize"]=l.map(c=>c.name),s.push(...l)),{errors:u,failedFiles:Array.from(new Set(s))}}function ke(e,a){return e.length>0||Object.keys(a).filter(i=>i!=="uploader.validation.maxFileSize").length>0}function vr(e,a,i,r,n,s,u){const l=w.useMemo(()=>mr(e,n,s,u),[e,n,s,u]),[c,p]=w.useState({}),t=w.useRef(new WeakMap),v=(d,m)=>{if(r&&a.current)return;if(t.current.has(d))return t.current.get(d)===i?i:r?!1:void 0;for(const k of m)t.current.set(k,!0);const{errors:g,failedFiles:h}=fr(e,m,n,s,u);for(const k of h)t.current.set(k,i);if(p(g),t.current.get(d)===i)return i;if(r)return!1};return{beforeUpload:async(d,m)=>{let g=d;const h=await v(d,m);return h===!1?!1:(delete d[i],h===i?(Object.defineProperty(d,i,{value:!0,configurable:!0}),!1):(typeof h=="object"&&h&&(g=h),g))},errors:l,errorsForNewFiles:c}}const E=$e(),Z=z(({invalid:e,...a})=>e?w.createElement(Ge,{...a}):w.createElement(er,{...a}))`
  align-self: normal;
`,ce=z(({disabled:e,fileList:a,hasErrors:i,maxCount:r,onOpenFileDialog:n,...s})=>{const{t:u}=G();return i?w.createElement(S,{...s,type:"BTM3"},u("uploader.validation.filesDoNotMeetRequirements")):r&&a.length>=r?w.createElement(S,{...s,type:"BTM3"},u("uploader.maxCountUploaded")):w.createElement(S,{...s,type:"BTM3"},w.createElement(xe,{disabled:e,onClick:n},u(r===1?"uploader.dropText.beginningSingle":"uploader.dropText.beginningMultiple"))," ",u(r===1?"uploader.dropText.endingSingle":"uploader.dropText.endingMultiple"))})``,gr=z(S).attrs({type:"BTR3"})`
  min-height: calc(60px - 16px * 2);
  display: flex;
  align-items: center;

  ol {
    margin: 0;
    padding-left: 12px;
    list-style-type: square;
  }
`,yr=z(({disabled:e,errors:a,errorsForNewFiles:i,...r})=>{const{t:n}=G();function s(l){return w.createElement(S,{...r,key:l,type:"BTR4"},n(l))}function u([l,c]){const p=w.createElement(gr,null,w.createElement("ol",null,c.map(t=>w.createElement("li",{key:t},t))));return w.createElement(S,{...r,key:l,type:"BTR4"},n(l,{count:c.length})," ",w.createElement(Ze,{placement:"left",content:p},w.createElement(xe,{disabled:e,size:"noSize"},n("uploader.showFiles"))))}return a.length>0?a.map(s):Object.entries(i).map(u)})`
  color: ${e=>e.disabled?E.disabled.requirements:E.invalid.validation};

  a {
    white-space: nowrap;
  }
`,X=z(S).attrs({type:"BTR4"})`
  text-align: initial;
`,hr=z.div`
  background: ${E.enabled.background};
  border: 1px dashed ${E.enabled.border};
  border-radius: 8px;
  cursor: initial;
  width: ${({width:e})=>e?`${e}px`:"100%"};
  min-width: 338px;
  ${e=>!e.$minimize&&e.$fullHeight&&`
    &, .hexa-upload-drag-container { 
      height: 100%;
    }
  `}

  .hexa-upload-drag-container {
    display: flex;
    flex-direction: column;
    padding: 24px;

    > :nth-child(2) {
      margin-top: 16px;
    }

    > :nth-child(n + 3) {
      margin-top: 8px;
    }
  }

  ${e=>e.$minimize&&`
    background: none;
    border: none;
    border-radius: 0;

    .hexa-upload-drag-container {
      padding: 0;
    }
  `}

  ${pe} {
    margin-right: -24px;
    padding-right: 24px;
    overflow-y: auto;

    ${e=>!e.$fullHeight&&`
      max-height: 287px;
    `}

    > :not(:first-child) {
      margin-top: 8px;
    }
  }

  ${Z} {
    color: ${E.enabled.header.icon};
  }

  ${ce} {
    color: ${E.enabled.header.text};
  }

  ${X} {
    color: ${E.enabled.requirements};
  }

  ${e=>e.$invalid&&`
    border-color: ${E.invalid.validation};

    ${Z} {
      color: ${E.invalid.header.icon};
    }
  `}

  ${e=>e.disabled&&`
    background: ${E.disabled.background};
    border-color: ${E.disabled.border};
    
    ${Z} {
      color: ${E.disabled.header.icon};
    }

    ${ce} {
      color: ${E.disabled.header.text};
    }

    ${X} {
      color: ${E.disabled.requirements};
    }
  `}

  ${e=>!e.disabled&&!e.$maxCountReached&&e.$dragOver&&`
    background: ${E.active.background};
    border-color: ${E.active.border};
  `}
`,br=z.div`
  width: ${({width:e})=>e?`${e}px`:"100%"};
  min-width: 338px;

  .hexa-upload-select-container > :not(:first-child) {
    margin-top: 8px;
  }

  ${pe} > :not(:first-child) {
    margin-top: 8px;
  }

  ${X} {
    color: ${E.enabled.requirements};
  }

  ${e=>e.disabled&&`
    ${X} {
      color: ${E.disabled.requirements};
    }
  `}
`,me=y.forwardRef(({size:e,...a},i)=>{const{t:r}=G(),{className:n,description:s,disabled:u,fileList:l,fullHeight:c,manual:p,maxCount:t,maxFileSize:v,maxTotalSize:f,onChange:d,onDownload:m,onDownloadAll:g,onRemove:h,showProgress:k=!0,style:b,testAttributes:q,truncateFileName:T}=Ie(ur(a)),[o,j]=We([],{value:l}),[F,P]=y.useState("drop"),B=y.useRef(!1),O=y.useRef(),H=!!t&&o.length>=t,K=H&&t===1;function L(){return{...O.current.uploader,openFileDialog:()=>O.current.uploader.fileInput.click(),post:x=>O.current.uploader.post(x)}}async function I(x){B.current=!0;const R=L(),U=x.originFileObj,D=await R.processFile(U,[U]);R.post(D),B.current=!1}y.useImperativeHandle(i,()=>({upload:()=>{o.filter(x=>x.status!=="error"&&x.status!=="uploading"&&x.status!=="done").forEach(I)}}));const{beforeUpload:je,errors:A,errorsForNewFiles:J}=vr(o,B,qe,p,v,t,f),De=(x,R,U)=>{let D=[...R];t===1?D=D.slice(-1):t&&(D=D.slice(0,t)),j(D);const W={file:x,fileList:D};U&&(W.event=U),d==null||d(W)},{handleRemove:ee,onBatchStart:Me,onError:Re,onProgress:Oe,onSuccess:Ue}=pr(o,De,qe,x=>{var R;return(R=O.current)==null?void 0:R.abort(x)},h),re=x=>{if(H){x.dataTransfer.dropEffect="none",x.preventDefault();return}P(x.type)};function fe(){const R=(A.length>0||Object.keys(J).length>0)&&y.createElement(yr,{disabled:u,errors:A,errorsForNewFiles:J}),U=o.length>0&&y.createElement(or,{disabled:u,fileList:o,maxCount:t,maxTotalSize:f,onDeleteAll:()=>ee(o),onDeleteErrors:()=>ee(o.filter(V=>!!V.error)),onDownloadAll:g,onReloadErrors:()=>{o.filter(V=>!!V.error).forEach(I)}}),D=o.length>0&&y.createElement(Ce,{disabled:u,items:o,onDownload:m,onRemove:V=>ee(V),onUpload:I,showProgress:k,truncateFileName:T}),W=s&&y.createElement(X,null,s);return K?D:e==="medium"?y.createElement(y.Fragment,null,y.createElement(ne,{align:"normal",direction:"vertical",gap:16,justify:"start"},y.createElement(ne,{gap:10,justify:"start",wrap:"nowrap"},y.createElement(Z,{invalid:ke(A,J)}),y.createElement("div",null,y.createElement(ce,{disabled:u,fileList:o,hasErrors:A.length>0,maxCount:t,onOpenFileDialog:()=>L().openFileDialog()}),R))),U,D,W):y.createElement(y.Fragment,null,y.createElement(ne,{gap:8,justify:"space-between"},y.createElement(Ve,{disabled:u||!!t&&o.length>=t||A.length>0,iconBefore:y.createElement(Ke,{key:"upload-icon"}),mode:"secondary",onClick:()=>L().openFileDialog()},r("uploader.actions.upload")),U),R,D,W)}const ve={...a,beforeUpload:je,hasControlInside:!0,multiple:t===void 0||t>1,onBatchStart:Me,onChange:void 0,onError:Re,onProgress:Oe,onSuccess:Ue,openFileDialogOnClick:!1,prefixCls:"hexa-upload"};return e==="medium"?y.createElement(hr,{...q,$dragOver:F==="dragover",$invalid:ke(A,J),$fullHeight:c,$maxCountReached:H,$minimize:K,$size:e,className:le(n,"hexa-upload hexa-upload-drag"),disabled:u,onDrop:re,onDragOver:re,onDragLeave:re,style:b},y.createElement(ue,{...ve,ref:O},y.createElement("div",{className:"hexa-upload-drag-container"},fe()))):y.createElement(br,{...q,className:le(n,"hexa-upload hexa-upload-select"),disabled:u,style:b},y.createElement(ue,{...ve,ref:O},y.createElement("div",{className:"hexa-upload-select-container"},fe())))});me.defaultProps={size:"medium",truncateFileName:!0};me.displayName="Uploader";const qe=`__LIST_IGNORE_${Date.now()}__`;me.__docgenInfo={description:"",methods:[{name:"upload",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Uploader",props:{className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},fileList:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  error?: any,
  lastModified?: number,
  name: string,
  originFileObj?: RcFile,
  percent?: number,
  response?: T,
  size: number,
  status?: 'error' | 'success' | 'done' | 'uploading' | 'removed',
  uid: string,
  url?: string,
  xhr?: T
}`,signature:{properties:[{key:"error",value:{name:"any",required:!1}},{key:"lastModified",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"originFileObj",value:{name:"RcFile",required:!1}},{key:"percent",value:{name:"number",required:!1}},{key:"response",value:{name:"T",required:!1}},{key:"size",value:{name:"number",required:!0}},{key:"status",value:{name:"union",raw:"'error' | 'success' | 'done' | 'uploading' | 'removed'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'done'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'removed'"}],required:!1}},{key:"uid",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"xhr",value:{name:"T",required:!1}}]}}],raw:"UploadFile[]"},description:""},fullHeight:{required:!1,tsType:{name:"boolean"},description:"Expand the drag and drop container vertically as much as possible. Only for `medium` size"},manual:{required:!1,tsType:{name:"boolean"},description:"Do not upload automatically"},maxCount:{required:!1,tsType:{name:"number"},description:"Max number of files that can be uploaded"},maxFileSize:{required:!1,tsType:{name:"number"},description:"Max size of a single file (Kilobyte)"},maxTotalSize:{required:!1,tsType:{name:"number"},description:"Max size of all files (Kilobyte)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(info: UploadChangeParam) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  file: UploadFile,
  fileList: UploadFile[],
  event?: {
      percent: number
  }
}`,signature:{properties:[{key:"file",value:{name:"signature",type:"object",raw:`{
  error?: any,
  lastModified?: number,
  name: string,
  originFileObj?: RcFile,
  percent?: number,
  response?: T,
  size: number,
  status?: 'error' | 'success' | 'done' | 'uploading' | 'removed',
  uid: string,
  url?: string,
  xhr?: T
}`,signature:{properties:[{key:"error",value:{name:"any",required:!1}},{key:"lastModified",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"originFileObj",value:{name:"RcFile",required:!1}},{key:"percent",value:{name:"number",required:!1}},{key:"response",value:{name:"T",required:!1}},{key:"size",value:{name:"number",required:!0}},{key:"status",value:{name:"union",raw:"'error' | 'success' | 'done' | 'uploading' | 'removed'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'done'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'removed'"}],required:!1}},{key:"uid",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"xhr",value:{name:"T",required:!1}}]},required:!0}},{key:"fileList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  error?: any,
  lastModified?: number,
  name: string,
  originFileObj?: RcFile,
  percent?: number,
  response?: T,
  size: number,
  status?: 'error' | 'success' | 'done' | 'uploading' | 'removed',
  uid: string,
  url?: string,
  xhr?: T
}`,signature:{properties:[{key:"error",value:{name:"any",required:!1}},{key:"lastModified",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"originFileObj",value:{name:"RcFile",required:!1}},{key:"percent",value:{name:"number",required:!1}},{key:"response",value:{name:"T",required:!1}},{key:"size",value:{name:"number",required:!0}},{key:"status",value:{name:"union",raw:"'error' | 'success' | 'done' | 'uploading' | 'removed'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'done'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'removed'"}],required:!1}},{key:"uid",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"xhr",value:{name:"T",required:!1}}]},required:!0}],raw:"UploadFile[]",required:!0}},{key:"event",value:{name:"signature",type:"object",raw:`{
    percent: number
}`,signature:{properties:[{key:"percent",value:{name:"number",required:!0}}]},required:!1}}]}},name:"info"}],return:{name:"void"}}},description:""},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: UploadFile) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  error?: any,
  lastModified?: number,
  name: string,
  originFileObj?: RcFile,
  percent?: number,
  response?: T,
  size: number,
  status?: 'error' | 'success' | 'done' | 'uploading' | 'removed',
  uid: string,
  url?: string,
  xhr?: T
}`,signature:{properties:[{key:"error",value:{name:"any",required:!1}},{key:"lastModified",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"originFileObj",value:{name:"RcFile",required:!1}},{key:"percent",value:{name:"number",required:!1}},{key:"response",value:{name:"T",required:!1}},{key:"size",value:{name:"number",required:!0}},{key:"status",value:{name:"union",raw:"'error' | 'success' | 'done' | 'uploading' | 'removed'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'done'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'removed'"}],required:!1}},{key:"uid",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"xhr",value:{name:"T",required:!1}}]}},name:"file"}],return:{name:"void"}}},description:""},onDownloadAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: UploadFile) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  error?: any,
  lastModified?: number,
  name: string,
  originFileObj?: RcFile,
  percent?: number,
  response?: T,
  size: number,
  status?: 'error' | 'success' | 'done' | 'uploading' | 'removed',
  uid: string,
  url?: string,
  xhr?: T
}`,signature:{properties:[{key:"error",value:{name:"any",required:!1}},{key:"lastModified",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"originFileObj",value:{name:"RcFile",required:!1}},{key:"percent",value:{name:"number",required:!1}},{key:"response",value:{name:"T",required:!1}},{key:"size",value:{name:"number",required:!0}},{key:"status",value:{name:"union",raw:"'error' | 'success' | 'done' | 'uploading' | 'removed'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'done'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'removed'"}],required:!1}},{key:"uid",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"xhr",value:{name:"T",required:!1}}]}},name:"file"}],return:{name:"void"}}},description:""},showProgress:{required:!1,tsType:{name:"boolean"},description:"Should show progress of uploading files"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},truncateFileName:{required:!1,tsType:{name:"boolean"},description:"Shorten a long file name with ellipses if it doesn't fit on one line",defaultValue:{value:"true",computed:!1}}}};export{me as U};
