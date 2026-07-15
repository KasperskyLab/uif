import{G as i,R as o}from"./iframe-4-PRSI1I.js";import{w as p}from"./withMeta-BwOuJ6tr.js";import{s as g}from"./helpers-BytZKRkB.js";import{a as x}from"./StoryComponents-BWv8uEx9.js";import{T as h,B as u}from"./basic-data-transfer.addon-DAHqur_v.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./FormLabel-CoXJxjwh.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";const f={designTokens:!1,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0},B="Terminal",_="Для использования терминала требуется внешний сервер с WebSockets, для взаимодейсвтия с внешним сервером необходимо создать DataTransferAddon унаследовав его от BasicDataTransferAddon и реализовать методы onSocketMessage, onData, примером является: CommonDataTransferAddon (/terminal/addons)",w="Компонент треминала, используется для связи с внешним треминалом по WebSockets",b="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=169090%3A233127",k="https://pixso.net/app/design/nGSwmukind_xLZD1EKdbJw",T={dod:f,component:B,description:_,usage:w,designLink:b,pixsoView:k},A=`\r

total 244684\r

drwxr-x--- 11 xdr  xdr         4096 Jul  8 12:36 .\r
drwxr-xr-x  3 root root        4096 Oct  8  2024 ..\r
drwxrwxr-x  3 xdr  xdr         4096 Apr 28 15:08 AST\r
drwxrwxr-x  2 xdr  xdr         4096 Apr  4 13:27 \x1B[01;34m.astconfig\x1B[0m\r
-rw-------  1 xdr  xdr       119234 Jul  8 12:36 .bash_history\r
-rw-r--r--  1 xdr  xdr          220 Mar 31  2024 .bash_logout\r
-rw-r--r--  1 xdr  xdr         3902 Oct  8  2024 .bashrc\r
drwx------  5 xdr  xdr         4096 Dec 19  2024 \x1B[01;34m.cache\x1B[0m\r
drwx------  4 xdr  xdr         4096 Dec 12  2024 \x1B[01;34m.config\x1B[0m\r

\x1B[?2004hANSI colors\r

\x1B[00;30m 0030 black\r
\x1B[00;31m 0031 red\r
\x1B[00;32m 0032 green\r
\x1B[00;33m 0033 yellow\r
\x1B[00;34m 0034 blue\r
\x1B[00;35m 0035 magenta\r
\x1B[00;36m 0036 cyan\r
\x1B[00;37m 0037 white\r
\x1B[00;90m 0090 brightBlack\r
\x1B[00;91m 0091 brightRed\r
\x1B[00;92m 0092 brightGreen\r
\x1B[00;93m 0093 brightYellow\r
\x1B[00;94m 0094 brightBlue\r
\x1B[00;95m 0095 brightMagenta\r
\x1B[00;96m 0096 brightCyan\r
\x1B[00;97m 0097 brightWhite\r
`;class E{constructor(){this._handlers={open:[],message:[],error:[],close:[]}}connect(){setTimeout(()=>{this._triggerEvent("open",new Event("open")),this._sendWelcomeMessage()},100)}_sendWelcomeMessage(){setTimeout(()=>{this._triggerMessage({method:"output",data:"\x1B[?2004hmock@dcdcdc-dcdcd-1:~$ "})},150)}send(e){const t=JSON.parse(e);let r=t.data;r==="\r"&&(r=A),t.method==="input"&&setTimeout(()=>{this._triggerMessage({method:"output",data:r})},50)}close(){this._triggerEvent("close",new CloseEvent("close")),this._handlers={open:[],message:[],error:[],close:[]}}_triggerEvent(e,t){if(e==="close")return this._handlers[e].forEach(r=>r(t));this._handlers[e].forEach(r=>r(t))}_triggerMessage(e){const t=new MessageEvent("message",{data:JSON.stringify(e)});this._handlers.message.forEach(r=>r(t))}addEventListener(e,t){e==="open"?this._handlers.open.push(t):e==="message"?this._handlers.message.push(t):e==="error"?this._handlers.error.push(t):e==="close"&&this._handlers.close.push(t)}removeEventListener(e,t){let r;if(e==="open")r=this._handlers.open;else if(e==="message")r=this._handlers.message;else if(e==="error")r=this._handlers.error;else if(e==="close")r=this._handlers.close;else return;const a=r.indexOf(t);a!==-1&&r.splice(a,1)}get readyState(){return WebSocket.OPEN}}const ee={title:"Hexa UI Components/Terminal",component:h,argTypes:{...g(["theme"])},args:{},decorators:[(n,e)=>o.createElement(x,{style:{minWidth:"100px",maxWidth:"400px"}},o.createElement(n,{...e}))],parameters:{badges:[i.stable,i.missingDesign],docs:{page:p(T)}}};class S extends u{constructor(){super(...arguments),this._onBinary=e=>{if(!this.checkSocketIsOpen())return;const t=new Uint8Array(e.length);for(let r=0;r<e.length;++r)t[r]=e.charCodeAt(r)&255;this._socket.send(JSON.stringify({method:"input",data:t}))},this.onData=e=>{this.checkSocketIsOpen()&&this._socket.send(JSON.stringify({method:"input",data:e}))},this.onSocketMessage=e=>{var t;try{const r=JSON.parse(e.data);r.method==="output"&&((t=this._terminal)==null||t.write(r.data))}catch(r){console.error("Error parsing message:",r)}}}activate(e){super.activate(e),this.registerHandler(e.onBinary(t=>this._onBinary(t)))}dispose(){}deactivate(){this._socket.close()}}const l=new E;l.connect();const v=new S(l),s={render:()=>o.createElement("div",{style:{width:"1232px",height:"1000px"}},o.createElement(h,{dataTransferAddon:v}))};var d,m,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: '1232px',
      height: '1000px'
    }}>
        <Terminal dataTransferAddon={customAttachAddon} />
      </div>;
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const re=["CommonDataTransferAddon","Basic"];export{s as Basic,S as CommonDataTransferAddon,re as __namedExportsOrder,ee as default};
