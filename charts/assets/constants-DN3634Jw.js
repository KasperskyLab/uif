var Oe=Object.defineProperty;var je=(t,a,e)=>a in t?Oe(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e;var O=(t,a,e)=>je(t,typeof a!="symbol"?a+"":a,e);import{r as G,R as g,g as Ne}from"./index-B3FZByPw.js";import{m as B,i as ne,x as Fe,y as Ve,a as Be,b as ze,g as U,z as ce,A as de,h as re,B as We,C as Ue,D as Xe,E as Ke,F as Ge,k as He,e as V,p as Ye,d as X,P as Ze,t as Je,v as Qe,V as Q,w as et,G as ee,H,f as pe,o as he,I as tt,J as fe,K as ye,N as nt}from"./MetricLabel-BnIofDCn.js";import{g as ae,e as be,h as xe,i as Ce,j as ve,k as Se,l as Y,m as Z,n as Pe,o as De,p as ke,q as Le,C as at}from"./ChartTooltipContent-D0avHoSt.js";import{b as ot,V as se}from"./useChartTheme-DIDp3-G3.js";import{A as rt}from"./constants-CCkeIBqD.js";import{l as we}from"./lodash-CJBAAX9X.js";import{C as st}from"./ChartTooltip-C6yaYZ6Z.js";const it=(t,a)=>{const e=r=>{let i=Xe(t.scale[r])==="log"?1/Number.MAX_SAFE_INTEGER:0;const l=Ke(t.domain[r]),u=Ge(t.domain[r]);return l<0&&u<=0?i=u:l>=0&&u>0&&(i=l),a[`_${r}`]instanceof Date?new Date(i):i},n=a._y0!==void 0?a._y0:e("y"),o=a._x0!==void 0?a._x0:e("x");return Ue(t,Object.assign({},a,{_y0:n,_x0:o}))},lt=t=>{var u;const{polar:a}=t,e=Be(t,"bar"),n=t.disableInlineStyles?{}:ze(t.style,e),o=t.range||{x:U(t,"x"),y:U(t,"y")},r={x:ae(t,"x"),y:ae(t,"y")},s={x:ce(t,"x").domain(r.x).range(t.horizontal?o.y:o.x),y:ce(t,"y").domain(r.y).range(t.horizontal?o.x:o.y)},i=a?t.origin||de(t):void 0;let l=re(t);return l=We(l,r,0),((u=t.groupComponent)==null?void 0:u.type)===be&&(l=l.map(c=>({...c,_x:c.x,_y:c.y}))),{style:n,data:l,scale:s,domain:r,origin:i}},ct=(t,a)=>{const e=B(t,a,"bar"),n=Object.assign({},e,lt(e)),{alignment:o,barRatio:r,cornerRadius:s,data:i,disableInlineStyles:l,domain:u,events:c,height:m,horizontal:d,origin:p,padding:h,polar:b,scale:x,sharedEvents:P,standalone:_,style:T,theme:f,width:y,labels:D,name:k,barWidth:L,getPath:C}=n,v={parent:{horizontal:d,domain:u,scale:x,width:y,height:m,data:i,standalone:_,name:k,theme:f,polar:b,origin:p,padding:h,style:T.parent}};return i.reduce((M,S,w)=>{const E=ne(S.eventKey)?w:S.eventKey,{x:R,y:$,y0:N,x0:A}=it(n,S),F={alignment:o,barRatio:r,barWidth:L,cornerRadius:s,data:i,datum:S,disableInlineStyles:l,getPath:C,horizontal:d,index:w,polar:b,origin:p,scale:x,style:T.data,width:y,height:m,x:R,y:$,y0:N,x0:A};M[E]={data:F};const I=Fe(n,S,w);return(I!=null||D&&(c||P))&&(M[E].labels=Ve(n,w)),M},v)},ut=8,mt=(t,a)=>{const{scale:e,data:n,style:o}=a;if(t)return V(t,a);if(o.width)return o.width;const r=e.x.range(),s=Math.abs(r[1]-r[0]),i=n.length+2,u=(a.barRatio||.5)*(n.length<2?ut:s/i);return Math.max(1,u)},gt=(t,a)=>{const e={topLeft:0,topRight:0,bottomLeft:0,bottomRight:0},n=(o,r)=>{ne(t[o])?ne(t[r])||(e[o]=V(t[r],a)):e[o]=V(t[o],a)};return n("topLeft","top"),n("topRight","top"),n("bottomLeft","bottom"),n("bottomRight","bottom"),e};function dt(t){return Ye(t)}const pt=(t,a)=>{const e={topLeft:0,topRight:0,bottomLeft:0,bottomRight:0};return t?dt(t)?gt(t,a):(e.topLeft=V(t,a),e.topRight=V(t,a),e):e},ht=function(t,a){if(t===void 0&&(t={}),a.disableInlineStyles)return{};const n={fill:"black",stroke:t.fill||"black"};return He(Object.assign(n,t),a)},j=(t,a)=>({x:t,y:a,distance(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))},add(e){return j(this.x+e.x,this.y+e.y)},subtract(e){return j(this.x-e.x,this.y-e.y)},scalarMult(e){return j(this.x*e,this.y*e)},scalarDivide(e){if(e===0)throw new Error("Division by 0 error");return j(this.x/e,this.y/e)},equals(e){return this.x===e.x&&this.y===e.y}}),J=(t,a)=>({center:t,radius:a,hasIntersection(e){const n=this.center,o=e.center,r=this.radius,s=e.radius,i=n.distance(o);return!(i>r+s||i<Math.abs(r-s))},equals(e){const n=this.center,o=e.center,r=this.radius,s=e.radius;return r===s&&n.equals(o)},intersection(e){const n=this.center,o=e.center,r=this.radius,s=e.radius,i=n.distance(o);if(!this.hasIntersection(e)||this.equals(e))return[];const l=(Math.pow(r,2)-Math.pow(s,2)+Math.pow(i,2))/(2*i),u=Math.sqrt(Math.pow(r,2)-Math.pow(l,2)),c=n.add(o.subtract(n).scalarMult(l).scalarDivide(i)),{x:m,y:d}=n,{x:p,y:h}=o,{x:b,y:x}=c,P=[j(b-u*(h-d)/i,x+u*(p-m)/i),j(b+u*(h-d)/i,x-u*(p-m)/i)];return P.sort((_,T)=>_.x-T.x),P},solveX(e){const n=Math.sqrt(Math.pow(this.radius,2)-Math.pow(e-this.center.y,2));return[this.center.x-n,this.center.x+n]},solveY(e){const n=Math.sqrt(Math.pow(this.radius,2)-Math.pow(e-this.center.x,2));return[this.center.y-n,this.center.y+n]}}),ie=(t,a)=>{const{x:e,x0:n,y:o,y0:r,horizontal:s}=t,i=t.alignment||"middle",l=i==="middle"?a/2:a,u=s?-1:1;return s?{x0:n,x1:e,y0:i==="start"?o:o-u*l,y1:i==="end"?o:o+u*l}:{x0:i==="start"?e:e-u*l,x1:i==="end"?e:e+u*l,y0:r,y1:o}},W=(t,a)=>{const{data:e,scale:n}=t,o=e[a]._x1===void 0?"_x":"_x1";return n.x(e[a][o])},ft=(t,a)=>{const{scale:e}=t,n=e.y.range(),o=Math.max(...n),r=Math.abs(e.x.range()[1]-e.x.range()[0]);return a/(2*Math.PI*o)*r},ue=t=>-1*t+Math.PI/2,yt=(t,a)=>{const{getPath:e}=t;if(typeof e=="function"){const n={...t,...ie(t,a)};return e(n)}},bt=(t,a)=>{const{data:e,scale:n,alignment:o}=t,r=W(t,a),s=Math.abs(n.x.range()[1]-n.x.range()[0]),i=a===0?W(t,e.length-1)-Math.PI*2:W(t,a-1);return a===0&&s<2*Math.PI?n.x.range()[0]:o==="start"||o==="end"?o==="start"?i:r:(r+i)/2},xt=(t,a)=>{const{data:e,scale:n,alignment:o}=t,r=W(t,a),s=Math.abs(n.x.range()[1]-n.x.range()[0]),i=n.x.range()[1]===2*Math.PI?W(t,0)+Math.PI*2:n.x.range()[1],l=a===e.length-1?W(t,0)+Math.PI*2:W(t,a+1);return a===e.length-1&&s<2*Math.PI?i:o==="start"||o==="end"?o==="start"?r:l:(r+l)/2},Me=(t,a,e)=>{const n=`${a.topLeft} ${a.topLeft} ${e}`,o=`${a.topRight} ${a.topRight} ${e}`,r=`${a.bottomLeft} ${a.bottomLeft} ${e}`,s=`${a.bottomRight} ${a.bottomRight} ${e}`;return`${["M",`A ${r},`,"L",`A ${n},`,"L",`A ${o},`,"L",`A ${s},`].reduce((u,c,m)=>`${u}${c} ${t[m].x}, ${t[m].y} 
`,"")} z`},Ct=(t,a,e)=>{const{x0:n,x1:o,y0:r,y1:s}=t,i=l=>{const u=l==="Left",c=u?1:-1,m=u?n:o;let d={x:m+c*e[`bottom${l}`],y:r},p={x:m,y:r-a*e[`bottom${l}`]},h={x:m,y:s+a*e[`top${l}`]},b={x:m+c*e[`top${l}`],y:s};if(a===1?r-e[`bottom${l}`]<s+e[`top${l}`]:r+e[`bottom${l}`]>s-e[`top${l}`]){const _=j(m+c*e[`top${l}`],s+a*e[`top${l}`]),T=J(_,e[`top${l}`]),f=j(m+c*e[`bottom${l}`],r-a*e[`bottom${l}`]),y=J(f,e[`bottom${l}`]),D=T.intersection(y);if(D.length>0){const L=D[u?0:1];p={x:L.x,y:L.y},h={x:L.x,y:L.y}}else if(e[`top${l}`]>e[`bottom${l}`]){const C=T.solveX(r)[u?0:1];d={x:C,y:r},p={x:C,y:r},h={x:C,y:r}}else{const C=y.solveX(s)[u?0:1];p={x:C,y:s},h={x:C,y:s},b={x:C,y:s}}}const P=[d,p,h,b];return u?P:P.reverse()};return i("Left").concat(i("Right"))},vt=(t,a,e)=>{const{y0:n,y1:o}=t,r=t.x0<t.x1?t.x0:t.x1,s=t.x0<t.x1?t.x1:t.x0,i=c=>{const m=c==="top",d=m?-1:1,p=m?o:n;let h={x:r,y:p-d*e[`${c}Left`]},b={x:r+e[`${c}Left`],y:p},x={x:s-e[`${c}Right`],y:p},P={x:s,y:p-d*e[`${c}Right`]};if(b.x>x.x){const T=j(r+e[`${c}Left`],p-d*e[`${c}Left`]),f=J(T,e[`${c}Left`]),y=j(s-e[`${c}Right`],p-d*e[`${c}Right`]),D=J(y,e[`${c}Right`]),k=f.intersection(D);if(k.length>0){const C=k[a>0?1:0];b={x:C.x,y:C.y},x={x:C.x,y:C.y}}else if(e[`${c}Right`]>e[`${c}Left`]){const v=D.solveY(r)[m?0:1];h={x:r,y:v},b={x:r,y:v},x={x:r,y:v}}else{const v=f.solveY(s)[m?0:1];P={x:s,y:v},x={x:s,y:v},b={x:s,y:v}}}return[h,b,x,P]},l=i("top"),u=i("bottom");return[u[1],u[0],...l,u[3],u[2]]},St=(t,a,e)=>{const n=ie(t,a),o=n.y0>n.y1?1:-1,r=o>0?"0 0 1":"0 0 0",s=Ct(n,o,e);return Me(s,e,r)},Pt=(t,a,e)=>{const n=ie(t,a),o=n.x0<n.x1?1:-1,r="0 0 1",s={topRight:o>0?e.topLeft:e.bottomLeft,bottomRight:o>0?e.topRight:e.bottomRight,bottomLeft:o>0?e.bottomRight:e.topRight,topLeft:o>0?e.bottomLeft:e.topLeft},i=vt(n,o,s);return Me(i,s,r)},Dt=(t,a)=>{const{datum:e,scale:n,index:o,alignment:r,style:s}=t,i=n.y(e._y0||0),l=n.y(e._y1!==void 0?e._y1:e._y),u=n.x(e._x1!==void 0?e._x1:e._x);let c,m;if(s.width){const f=ft(t,s.width),y=r==="middle"?f/2:f;c=r==="start"?u:u-y,m=r==="end"?u:u+y}else c=bt(t,Number(o)),m=xt(t,Number(o));const d=f=>ot().innerRadius(i).outerRadius(l).startAngle(ue(c)).endAngle(ue(m)).cornerRadius(a[f])(),p=f=>{const y=d(`${f}Right`),D=y.match(/[A-Z]/g)||[],k=y.split(/[A-Z]/).slice(1),L=D.indexOf("L"),C=d(`${f}Left`),v=C.match(/[A-Z]/g)||[],M=C.split(/[A-Z]/).slice(1),S=v.indexOf("L");return{rightMoves:D,rightCoords:k,rightMiddle:L,leftMoves:v,leftCoords:M,leftMiddle:S}},h=()=>{const{topRight:f,topLeft:y}=a,D=l*Math.abs(m-c),{rightMoves:k,rightCoords:L,rightMiddle:C,leftMoves:v,leftCoords:M,leftMiddle:S}=p("top");let w,E;if(f===y||D<2*f+2*y)w=f>y?k:v,E=f>y?L:M;else{const A=z=>z<3,F=y>f&&A(C)?1:2;let I;if(f>y){const z=A(C)?S:S-2;I=A(S)?S-1:z}else{const z=A(S)?1:2;I=A(C)?z:S-2}w=[...k.slice(0,F),...v.slice(I)],E=[...L.slice(0,F),...M.slice(I)]}const R=w.indexOf("L"),$=w.slice(0,R),N=E.slice(0,R);return $.map((A,F)=>({command:A,coords:N[F].split(",")}))},b=()=>{const{bottomRight:f,bottomLeft:y}=a,D=i*Math.abs(m-c),{rightMoves:k,rightCoords:L,rightMiddle:C,leftMoves:v,leftCoords:M,leftMiddle:S}=p("bottom");let w,E;if(f===y||D<2*f+2*y)w=f>y?k:v,E=f>y?L:M;else{const A=(z,Ie)=>z.length-Ie<4,I=(f>y?A(k,C):A(v,S))?-1:-3;w=[...v.slice(0,S+2),...k.slice(I)],E=[...M.slice(0,S+2),...L.slice(I)]}const R=w.indexOf("L"),$=w.slice(R,-1),N=E.slice(R,-1);return $.map((A,F)=>({command:A,coords:N[F].split(",")}))},x=h(),P=b();return`${[...x,...P].reduce((f,y)=>`${f}${y.command} ${y.coords.join()}`,"")} z`},kt=(t,a,e)=>t.getPath?yt(t,a):t.horizontal?Pt(t,a,e):St(t,a,e),Lt=(t,a)=>Dt(t,a),wt=t=>{const a=ht(t.style,t),e=mt(t.barWidth,Object.assign({},t,{style:a})),n=pt(t.cornerRadius,Object.assign({},t,{style:a,barWidth:e})),o=V(t.ariaLabel,t),r=V(t.desc,t),s=V(t.id,t),i=V(t.tabIndex,t);return Object.assign({},t,{ariaLabel:o,style:a,barWidth:e,cornerRadius:n,desc:r,id:s,tabIndex:i})},Mt={pathComponent:g.createElement(Ze,null),role:"presentation",shapeRendering:"auto"},_t=G.forwardRef(function(a,e){const n=wt(X({},a,Mt)),{polar:o,origin:r,style:s,barWidth:i,cornerRadius:l}=n,u=o?Lt(n,l):kt(n,i,l),c=o&&r?`translate(${r.x}, ${r.y})`:void 0;return n.pathComponent?g.cloneElement(n.pathComponent,{...n.events,"aria-label":n.ariaLabel,style:s,d:u,className:n.className,clipPath:n.clipPath,desc:n.desc,index:n.index,role:n.role,shapeRendering:n.shapeRendering,transform:n.transform||c,tabIndex:n.tabIndex,ref:e}):null}),me={width:450,height:300,padding:50},Tt=[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:4}],q=class q extends g.Component{static getBaseProps(a){return ct(a,me)}shouldAnimate(){return!!this.props.animate}render(){var s;const{animationWhitelist:a,role:e}=At,n=B(this.props,me,e);if(this.shouldAnimate())return this.animateComponent(n,a);let o;((s=n.groupComponent)==null?void 0:s.type)===be?o=this.renderData(n,q.shouldRenderDatum):o=this.renderData(n);const r=n.standalone?this.renderContainer(n.containerComponent,o):o;return et(r,n)}};O(q,"animationWhitelist",["data","domain","height","padding","style","width"]),O(q,"displayName","VictoryBar"),O(q,"role","bar"),O(q,"defaultTransitions",{onLoad:{duration:2e3,before:()=>({_y:0,_y1:0,_y0:0}),after:a=>({_y:a._y,_y1:a._y1,_y0:a._y0})},onExit:{duration:500,before:()=>({_y:0,yOffset:0})},onEnter:{duration:500,before:()=>({_y:0,_y1:0,_y0:0}),after:a=>({_y:a._y,_y1:a._y1,_y0:a._y0})}}),O(q,"defaultProps",{containerComponent:g.createElement(Q,null),data:Tt,dataComponent:g.createElement(_t,null),groupComponent:g.createElement("g",{role:"presentation"}),labelComponent:g.createElement(Qe,null),samples:50,sortOrder:"ascending",standalone:!0,theme:se.grayscale}),O(q,"getDomain",ae),O(q,"getData",re),O(q,"expectedComponents",["dataComponent","labelComponent","groupComponent","containerComponent"]),O(q,"shouldRenderDatum",()=>!0);let oe=q;const At=Je(oe),_e={width:450,height:300,padding:50,offset:0};function Te(t,a){const e="group",n=B(t,_e,e),o=Ce(n.theme,n.style,e),{offset:r,colorScale:s,color:i,polar:l,horizontal:u}=n,c=n.categories||ve(n,a,null),m=n.datasets||Se(n,null),d={x:Y(Object.assign({},n,{categories:c}),"x",a),y:Y(Object.assign({},n,{categories:c}),"y",a)},p=n.range||{x:U(n,"x"),y:U(n,"y")},h={x:H(n,"x")||Z(n,"x"),y:H(n,"y")||Z(n,"y")},b={x:h.x.domain(d.x).range(n.horizontal?p.y:p.x),y:h.y.domain(d.y).range(n.horizontal?p.x:p.y)},x=l?n.origin:de(n),P=pe(n.padding);return{datasets:m,categories:c,range:p,domain:d,horizontal:u,scale:b,style:o,colorScale:s,color:i,offset:r,origin:x,padding:P}}const Et=t=>{const{children:a}=t,e=g.Children.toArray(a).map(n=>({...n,props:he(n.props,["sharedEvents"])}));return t.children=e,t};function $t(t){const a=Et(t),[e,n]=g.useState(a);return g.useEffect(()=>{ee(a,e)||n(a)},[e,n,a]),g.useMemo(()=>Te(e,e.children),[e])}function qt(t,a,e){if(!t.offset)return 0;const n=tt(a,t.horizontal),o=e.domain[a],r=e.range[n],s=Math.max(...o)-Math.min(...o),i=Math.max(...r)-Math.min(...r);return s/i*t.offset}function Rt(t,a,e,n){const r=((n==="stack"?a.datasets[0].length:a.datasets.length)-1)/2,s=qt(t,"x",a);return(e-r)*s}function It(t,a,e,n){const r=((n==="stack"?a.datasets[0].length:a.datasets.length)-1)/2,s=Ot(t,a);return(e-r)*s}function Ot(t,a){const{range:e}=a,n=Math.abs(e.x[1]-e.x[0]),o=Math.max(...e.y);return t.offset/(2*Math.PI*o)*n}function jt(t,a,e){if(t.labels)return Math.floor(a.length/2)===e?t.labels:void 0}function Nt(t,a){const{categories:e,domain:n,range:o,scale:r,horizontal:s,origin:i,padding:l}=a,{width:u,height:c,theme:m,polar:d}=t;return{height:c,width:u,theme:m,polar:d,origin:i,categories:e,domain:n,range:o,scale:r,horizontal:s,padding:l,standalone:!1}}function Ft(t,a){const e=a.type&&a.type.role,n=a.props.colorScale||t.colorScale;if(!(e!=="group"&&e!=="stack"))return t.theme&&t.theme.group?n||t.theme.group.colorScale:n}function Vt(t,a,e){a===void 0&&(a=[]);const n=t.data||t.y?re(t):a,o=e||0;return n.map(r=>{const s=r._x instanceof Date?new Date(r._x.getTime()+o):r._x+o;return Object.assign({},r,{_x1:s})})}function Ae(t,a,e){const n=B(t,_e,"stack"),o=a||g.Children.toArray(n.children),r=e||Te(n,o),{datasets:s}=r,{labelComponent:i,polar:l,theme:u}=n,c=Nt(n,r),m=n.name||"group";return o.map((d,p)=>{const h=d.type&&d.type.role,b=l?It(n,r,p,h):Rt(n,r,p,h),x=h==="voronoi"||h==="tooltip"||h==="label"?d.props.style:xe(d,p,r,u),P=n.labels?jt(n,s,p):d.props.labels,_=d.props.name||`${m}-${h}-${p}`;return g.cloneElement(d,Object.assign({labels:P,style:x,key:`${_}-key-${p}`,name:_,data:Vt(n,s[p],b),colorScale:Ft(n,d),labelComponent:i||d.props.labelComponent,xOffset:b},c))})}const Bt={width:450,height:300,padding:50,offset:0},zt={containerComponent:g.createElement(Q,null),groupComponent:g.createElement("g",null),samples:50,standalone:!0,theme:se.grayscale},Wt=t=>{const a=K==null?void 0:K.role,{getAnimationProps:e,setAnimationState:n,getProps:o}=Pe(),r=g.useMemo(()=>X({},t,zt),[t]),s=o(r),i=B(s,Bt,a),{eventKey:l,containerComponent:u,standalone:c,groupComponent:m,externalEventMutations:d,width:p,height:h,theme:b,polar:x,horizontal:P,name:_}=i,T=g.Children.toArray(i.children),f=$t(i),{domain:y,scale:D,style:k,origin:L}=f,C=g.useMemo(()=>Ae(s,T,f).map(($,N)=>{const A=Object.assign({animate:e(s,$,N)},$.props);return g.cloneElement($,A)}),[s,T,f,e]),v=g.useMemo(()=>c?{domain:y,scale:D,width:p,height:h,standalone:c,theme:b,style:k.parent,horizontal:P,polar:x,origin:L,name:_}:{},[c,y,D,p,h,b,k,P,x,L,_]),M=g.useMemo(()=>fe(r),[r]),S=g.useMemo(()=>{if(c){const R=X({},u.props,v,M);return g.cloneElement(u,R)}return g.cloneElement(m,M)},[m,c,u,v,M]),w=g.useMemo(()=>De(s),[s]),E=ke(r);return g.useEffect(()=>()=>{r.animate&&n(E,s)},[n,E,r,s]),ye(w)?g.cloneElement(S,S.props,C):g.createElement(Le,{container:S,eventKey:l,events:w,externalEventMutations:d},C)},Ut={role:"group",expectedComponents:["groupComponent","containerComponent","labelComponent"],getChildren:Ae},K=Object.assign(g.memo(Wt,ee),Ut);K.displayName="VictoryGroup";const Ee={width:450,height:300,padding:50};function Xt(t,a){const{fillInMissingData:e}=t,n=a.reduce((s,i)=>(i.forEach(l=>{s[l._x instanceof Date?l._x.getTime():l._x]=!0}),s),{}),o=Object.keys(n).map(s=>Number(s)),r=nt(o);return a.map(s=>{let i=0;const l=s[0]&&s[0]._x instanceof Date;return r.map((c,m)=>{let d=Number(c);const p=s[m-i];if(p){if((l?p._x.getTime():p._x)===d)return p;i++;const x=e?0:null;return d=l?new Date(d):d,{x:d,y:x,_x:d,_y:x}}const h=e?0:null;return d=l?new Date(d):d,{x:d,y:h,_x:d,_y:h}})})}function Kt(t,a,e){if(t.y0)return t.y0;const n=t._y,o=t._group,r=e[0].map(u=>u.y0),i=e.slice(0,a).reduce((u,c)=>u.concat(c.filter(m=>t._x instanceof Date?m._x.getTime()===t._x.getTime():m._x===t._x).map(m=>m._y||0)),[]),l=i.length&&i.reduce((u,c)=>n<0&&c<0||n>=0&&c>=0?Number(c)+u:u,r[o]||0);return i.some(u=>u instanceof Date)?new Date(l):l}function Gt(t,a,e){const n=t.xOffset||0;return a[e].map(o=>{const r=Kt(o,e,a)||0;return Object.assign({},o,{_y0:o._y instanceof Date?r?new Date(r):o._y:r,_y1:o._y===null?null:o._y instanceof Date?new Date(Number(o._y)+Number(r)):o._y+r,_x1:o._x===null?null:o._x instanceof Date?new Date(Number(o._x)+Number(n)):o._x+n})})}function Ht(t,a){const e=Se(t,a),n=Xt(t,e);return n.map(r=>r.filter(s=>s._x!==null&&s._y!==null)).map((r,s)=>Gt(t,n,s))}function $e(t,a){const e=a||g.Children.toArray(t.children),n="stack",o=B(t,Ee,n),r=Ce(o.theme,o.style,n),s=o.categories||ve(o,e),i=o.datasets||Ht(o,e),l=e.map((b,x)=>g.cloneElement(b,{data:i[x]})),u={x:Y(Object.assign({},o,{categories:s}),"x",l),y:Y(Object.assign({},o,{categories:s}),"y",l)},c=o.range||{x:U(o,"x"),y:U(o,"y")},m={x:H(o,"x")||Z(o,"x"),y:H(o,"y")||Z(o,"y")},d={x:m.x.domain(u.x).range(o.horizontal?c.y:c.x),y:m.y.domain(u.y).range(o.horizontal?c.x:c.y)},{colorScale:p,horizontal:h}=o;return{datasets:i,categories:s,range:c,domain:u,horizontal:h,scale:d,style:r,colorScale:p,role:n}}const Yt=t=>{const{children:a}=t,e=g.Children.toArray(a).map(n=>{const o=n;return{...o,props:he(o.props,["sharedEvents"])}});return t.children=e,t};function Zt(t){const a=Yt(t),[e,n]=g.useState(a);return g.useEffect(()=>{ee(a,e)||n(a)},[e,n,a]),g.useMemo(()=>$e(e,e.children),[e])}function Jt(t,a,e){if(t.labels)return a.length===e+1?t.labels:void 0}function Qt(t,a){const{categories:e,domain:n,range:o,scale:r,horizontal:s}=a;return{height:t.height,width:t.width,padding:pe(t.padding),standalone:!1,theme:t.theme,categories:e,domain:n,range:o,scale:r,horizontal:s}}function en(t,a){const e=a.type&&a.type.role,n=a.props.colorScale||t.colorScale;if(!(e!=="group"&&e!=="stack"))return t.theme?n||t.theme.props.colorScale:n}function qe(t,a,e){const n=B(t,Ee,"stack"),o=a||g.Children.toArray(n.children),r=e||$e(n,o),{datasets:s}=r,i=Qt(n,r),l=n.name||"stack",{theme:u}=n;return o.map((c,m)=>{const d=c.type&&c.type.role,p=s[m],h=xe(c,m,r,u),b=n.labels?Jt(n,s,m):c.props.labels,x=c.props.name||`${l}-${d}-${m}`;return g.cloneElement(c,Object.assign({key:`${x}-key-${m}`,labels:b,name:x,domainPadding:c.props.domainPadding||n.domainPadding,theme:n.theme,labelComponent:n.labelComponent||c.props.labelComponent,style:h,colorScale:en(n,c),data:p,polar:n.polar},i))})}const tn={width:450,height:300,padding:50},nn={containerComponent:g.createElement(Q,null),groupComponent:g.createElement("g",null),standalone:!0,theme:se.grayscale,fillInMissingData:!0},an=t=>{const{role:a}=Re,e=g.useMemo(()=>X({},t,nn),[t]),{setAnimationState:n,getAnimationProps:o,getProps:r}=Pe(),s=r(e),i=B(s,tn,a),{eventKey:l,containerComponent:u,standalone:c,groupComponent:m,externalEventMutations:d,width:p,height:h,theme:b,polar:x,horizontal:P,name:_}=i,T=g.Children.toArray(i.children),f=Zt(i),{domain:y,scale:D,style:k}=f,L=g.useMemo(()=>qe(s,T,f).map(($,N)=>{const A=Object.assign({animate:o(s,$,N)},$.props);return g.cloneElement($,A)}).reverse(),[s,T,f,o]),C=g.useMemo(()=>c?{domain:y,scale:D,width:p,height:h,standalone:c,theme:b,style:k.parent,horizontal:P,polar:x,name:_}:{},[c,y,D,p,h,b,k,P,x,_]),v=g.useMemo(()=>fe(e),[e]),M=g.useMemo(()=>{if(c){const E=X({},u.props,C,v);return g.cloneElement(u,E)}return g.cloneElement(m,v)},[m,c,u,C,v]),S=g.useMemo(()=>De(s),[s]),w=ke(e);return g.useEffect(()=>()=>{e.animate&&n(w,e)},[n,w,e]),ye(S)?g.cloneElement(M,M.props,L):g.createElement(Le,{container:M,eventKey:l,events:S,externalEventMutations:d},L)},on={role:"stack",expectedComponents:["groupComponent","containerComponent","labelComponent"],getChildren:qe},Re=Object.assign(g.memo(an,ee),on);Re.displayName="VictoryStack";function rn(t){const a=t.reduce((e,[n,o])=>{let r=e.get(n);r||(r=new Map,e.set(n,r));for(const s of o)for(const i of s.data){const l=i.metric.toString();r.set(l,(r.get(l)||0)+i.value)}return e},new Map);return t.map(([e,n])=>{const o=a.get(e);if(!o)return[e,n];const r=n.map(s=>({...s,data:s.data.map(i=>{const l=o.get(i.metric.toString());return!l||l===0?{...i,value:0}:{...i,value:i.value/l*100}})}));return[e,r]})}var te,ge;function sn(){if(ge)return te;ge=1;var t=Array.prototype,a=t.reverse;function e(n){return n==null?n:a.call(n)}return te=e,te}var ln=sn();const cn=Ne(ln);function un(t){return t.map(([a,e])=>[a,e.map(n=>({...n,data:cn(n.data)}))])}function Sn(t,a=!1,e=!1){return G.useMemo(()=>{const o=t.map(s=>({...s,data:s.data.map(i=>({...i,[rt]:s}))})).reduce((s,i)=>{const l=i.group||"";let u=s.get(l);return u||(u=[],s.set(l,u)),u.push(i),s},new Map);let r=Array.from(o.entries());return r=a?rn(r):r,r=e?un(r):r,r},[t,a,e])}const mn="_foreignObjectContainer_9vt51_1",gn={foreignObjectContainer:mn},le=G.memo(({tooltipComponent:t=st,tooltipContentComponent:a=at,height:e=0,width:n=0,x:o=0,y:r=0,theme:s,active:i=!1,datum:l,barWidth:u=0,horizontal:c=!1,data:m,index:d=0,otherLabel:p,xScale:h,maxTooltipItems:b,showTotal:x,totalLabel:P,tooltipDateFormat:_})=>{const T=G.useMemo(()=>m.map(D=>{const k=we.get(D.data,d)||{};return{...D,...k,color:k.color||D.color}}),[m,d]),f=Math.min(Math.max(o+(c?0:u/2),0),n),y=Math.min(Math.max(r-(c?u/2:0),0),e);return i?g.createElement("foreignObject",{x:f,y,width:0,height:0,className:gn.foreignObjectContainer},g.createElement(t,{height:e,width:n,tooltipContentComponent:a,activeRecord:l,enrichedData:T,theme:s,horizontal:c,otherLabel:p,tooltipDateFormat:_,maxTooltipItems:b,showTotal:x,totalLabel:P,xScale:h})):null});le.displayName="ChartTooltipWrapper";we.set(le,"defaultEvents",()=>{const t=[{target:"labels",mutation:()=>({active:!0})}],a=[{target:"labels",mutation:()=>({active:void 0})}];return[{target:"data",eventHandlers:{onMouseOver:()=>t,onFocus:()=>t,onMouseOut:()=>a,onBlur:()=>a}}]});le.__docgenInfo={description:"",methods:[],displayName:"ChartTooltipWrapper",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"IStackedChartDataPoint",elements:[{name:"T"}],raw:"IStackedChartDataPoint<T>"}],raw:"IStackedChartDataPoint<T>[]"},description:""},theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,elements:[{name:"Partial",elements:[{name:"VictoryThemeDefinition"}],raw:"Partial<VictoryThemeDefinition>"},{name:"signature",type:"object",raw:`{
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,signature:{properties:[{key:"line",value:{name:"signature",type:"object",raw:"{ colorScale: string[], metricLineColor?: string }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"metricLineColor",value:{name:"string",required:!1}}]},required:!0}},{key:"bar",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"chart",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"labels",value:{name:"signature",type:"object",raw:"{ style?: VictoryLabelStyleObject }",signature:{properties:[{key:"style",value:{name:"VictoryLabelStyleObject",required:!1}}]},required:!0}},{key:"speedometer",value:{name:"signature",type:"object",raw:`{
  colorScale: string[],
  padding: BlockProps,
  style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},tooltipComponent:{required:!1,tsType:{name:"FC"},description:"",defaultValue:{value:`memo(
  ({
    tooltipContentComponent: TooltipContentComponent,
    horizontal = false,
    ...rest
  }) => (
    <Popover
      content={<TooltipContentComponent {...rest} />}
      placement={horizontal ? 'right' : 'top'}
      shouldLimitSize
      defaultVisible
      destroyTooltipOnHide
      overlayClassName={styles.disablePointEvents}
    >
      <div />
    </Popover>
  )
)`,computed:!0}},tooltipContentComponent:{required:!1,tsType:{name:"FC",elements:[{name:"signature",type:"object",raw:`{
  activeRecord?: IChartDataPoint,
  enrichedData?: StackedChartTooltipPointsData,
  theme?: CustomTheme,
  otherLabel?: string,
  xScale?: ScaleName,
  maxTooltipItems?: number,
  totalLabel?: string,
  showTotal?: boolean,
  tooltipDateFormat?: (date: number | Date, supposedFormat: string) => string
}`,signature:{properties:[{key:"activeRecord",value:{name:"IChartDataPoint",required:!1}},{key:"enrichedData",value:{name:"Array",elements:[{name:"unknown"}],raw:`(Pick<
  IStackedChartDataPoint,
  'name' | 'color' | 'title' | 'group'
> &
  IChartDataPoint<T> & { childName?: string })[]`,required:!1}},{key:"theme",value:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,elements:[{name:"Partial",elements:[{name:"VictoryThemeDefinition"}],raw:"Partial<VictoryThemeDefinition>"},{name:"signature",type:"object",raw:`{
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,signature:{properties:[{key:"line",value:{name:"signature",type:"object",raw:"{ colorScale: string[], metricLineColor?: string }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"metricLineColor",value:{name:"string",required:!1}}]},required:!0}},{key:"bar",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"chart",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"labels",value:{name:"signature",type:"object",raw:"{ style?: VictoryLabelStyleObject }",signature:{properties:[{key:"style",value:{name:"VictoryLabelStyleObject",required:!1}}]},required:!0}},{key:"speedometer",value:{name:"signature",type:"object",raw:`{
  colorScale: string[],
  padding: BlockProps,
  style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}],required:!1}},{key:"otherLabel",value:{name:"string",required:!1}},{key:"xScale",value:{name:"ScaleName",required:!1}},{key:"maxTooltipItems",value:{name:"number",required:!1}},{key:"totalLabel",value:{name:"string",required:!1}},{key:"showTotal",value:{name:"boolean",required:!1}},{key:"tooltipDateFormat",value:{name:"signature",type:"function",raw:"(date: number | Date, supposedFormat: string) => string",signature:{arguments:[{type:{name:"union",raw:"number | Date",elements:[{name:"number"},{name:"Date"}]},name:"date"},{type:{name:"string"},name:"supposedFormat"}],return:{name:"string"}},required:!1}}]}}],raw:"FC<ChartTooltipContentProps>"},description:"",defaultValue:{value:`memo(({
  showTotal,
  totalLabel,
  activeRecord,
  enrichedData,
  otherLabel,
  xScale,
  maxTooltipItems = 10,
  tooltipDateFormat
}) => {
  const formatter = useDateFormat(tooltipDateFormat)
  const total = useMemo(() => enrichedData ? preciseAdd(enrichedData.map(d => d.value || 0)) : 0, [enrichedData])

  if (activeRecord && enrichedData) {
    if (enrichedData.length === 1) {
      const [{ title, metric, value, color }] = enrichedData

      return (
        <Space gap={8} direction="horizontal" align="center" justify="space-between" className={styles.row}>
          <Space gap={8} direction="horizontal">
            { color && <div
              style={{
                background: color
              }}
              className={styles.dot}
            />}
            {xScale === 'time'
              ? <>
                  <Calendar color="var(--text-icons-elements--secondary2-solid)" className={styles.timeIcon} />
                  {formatter(metric as number | Date, 'FF')}
                </>
              : (
              <MetricLabel metric={metric} title={title} />
                )}
          </Space>
          <Text datatype="BTR3">{value}</Text>
        </Space>
      )
    }

    const stackIndex = (get(activeRecord, '_stack') || 0) - 1
    const barsDataWithSelected = enrichedData.map((b, idx) => ({ ...b, selected: idx === stackIndex }))
    const top10 = topStackedChartTooltipPointsData(barsDataWithSelected, maxTooltipItems, otherLabel)

    return (
      <Space wrap="nowrap" gap="related" direction="vertical" align="stretch">
      <Space gap={8} align="center" className={styles.time}>
        {xScale === 'time' || enrichedData[0]?.metric instanceof Date
          ? (
          <>
            <Calendar color="var(--text-icons-elements--secondary2-solid)" className={styles.timeIcon} />
            {formatter(enrichedData[0]?.metric as number | Date, 'FF')}
          </>
            )
          : (
          <Text datatype="BTR3">{enrichedData[0]?.metric}</Text>
            )}
      </Space>

      <Space direction="vertical" align="stretch" gap={2}>
        {top10.map(({ value, name, title, color, selected }) => (
          <Space
            key={(title || name).toString()}
            gap={8}
            direction="horizontal"
            align="center"
            className={clsx(styles.row, selected && styles.selected)}
          >
            <div
              style={{
                background: color
              }}
              className={styles.dot}
            />
            <Space gap={16} direction="horizontal" justify="space-between" className={styles.title}>
              <MetricLabel metric={name} title={title} />
              <Text type="BTR3">{value}</Text>
            </Space>
          </Space>
        ))}
        {showTotal && (
          <>
            <Divider className={styles.totalDivider} />
            <Space gap={16} justify="space-between">
              <Text type="BTR3">{totalLabel}</Text>
              <Text type="MTR3">{total}</Text>
            </Space>
          </>
        )
        }

      </Space>
      </Space>
    )
  }

  return null
})`,computed:!0}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},barWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},otherLabel:{required:!1,tsType:{name:"string"},description:""},xScale:{required:!1,tsType:{name:"ScaleName"},description:""},maxTooltipItems:{required:!1,tsType:{name:"number"},description:""},totalLabel:{required:!1,tsType:{name:"string"},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""},tooltipDateFormat:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | number, supposedFormat: string) => string",signature:{arguments:[{type:{name:"union",raw:"Date | number",elements:[{name:"Date"},{name:"number"}]},name:"date"},{type:{name:"string"},name:"supposedFormat"}],return:{name:"string"}}},description:""},height:{defaultValue:{value:"0",computed:!1},required:!1},width:{defaultValue:{value:"0",computed:!1},required:!1},x:{defaultValue:{value:"0",computed:!1},required:!1},y:{defaultValue:{value:"0",computed:!1},required:!1},horizontal:{defaultValue:{value:"false",computed:!1},required:!1},index:{defaultValue:{value:"0",computed:!1},required:!1}}};const dn=({children:t,...a})=>g.createElement(Q,{...a,style:{...a.style,height:a.height,width:a.width}},t);dn.__docgenInfo={description:"",methods:[],displayName:"Container"};const Pn=8,Dn=32,kn=16,Ln=32,wn=8,Mn=.12,_n=6;export{le as C,_n as D,Mn as S,K as V,Re as a,At as b,Dn as c,Pn as d,Ln as e,kn as f,wn as g,dn as h,Sn as u};
