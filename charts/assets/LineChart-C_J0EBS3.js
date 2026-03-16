var fa=Object.defineProperty;var ga=(e,t,n)=>t in e?fa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var M=(e,t,n)=>ga(e,typeof t!="symbol"?t+"":t,n);import{R as P,g as pn,r as B}from"./index-B3FZByPw.js";import{g as fn,w as _a,x as va,u as zt,T as ba,b as ka,h as Sa,A as ut,L as gn,m as Bt,n as Wt,q as Ta}from"./constants-CCkeIBqD.js";import{g as xa}from"./getPaddings-DLadn5mT.js";import{w as Tt,c as A,s as O,r as xt,t as Ue,v as ht,x as $e,y as _n,z as Yt,b as Pa,V as Pt,u as wa,g as Xt}from"./useChartTheme-DIDp3-G3.js";import{g as mt,e as Ca,s as Da,v as dt,C as vn,u as La,x as Ht,w as qa,V as Ea,b as Kt,A as Ia}from"./ChartTooltipContent-D0avHoSt.js";import{O as Ma,d as z,J as wt,e as E,k as fe,P as Ct,m as Le,x as bn,i as kn,y as Sn,a as Tn,b as xn,g as ze,z as Be,A as Pn,h as qe,D as Aa,E as yt,F as Ra,Q as Na,t as wn,v as Dt,V as Lt,w as Cn,R as Ne,S as Oa,T as Ut,f as qt,U as Gt,p as Oe,N as ja,W as Fa,X as Va,C as Et,K as Zt,j as De,G as $a,Y as za,Z as Ba,_ as Wa,B as Ya,$ as Xa,a0 as Ha,u as Ka}from"./MetricLabel-BnIofDCn.js";import{a as Ua,g as Ga}from"./getCategoriesFromData-BcvAD3wb.js";import"./transform-BfyqfA4I.js";import{l as Jt}from"./lodash-CJBAAX9X.js";import{P as Za}from"./Popover-D3xfojl9.js";import{v as Ja}from"./v4-Dz_GI0CC.js";import{a as Dn,s as Qa,p as ei}from"./pie-CabiigDw.js";import{c as Ge,x as Ln,y as qn,l as Ze}from"./line-BPuaW5bH.js";import{t as ti}from"./throttle-BSKUDDXS.js";function ni(){return{onLoad:{duration:2e3},onExit:{duration:500},onEnter:{duration:500}}}function ai(){return{onLoad:{duration:2e3,before:()=>({_y:0,_y1:0,_y0:0}),after:e=>({_y:e._y,_y1:e._y1,_y0:e._y0})},onExit:{duration:500,before:(e,t,n)=>{const a=i=>(t===0?n[t+1]:n[t-1])[i];return{_x:a("_x"),_y:a("_y"),_y0:a("_y0")}}},onEnter:{duration:500,before:(e,t,n)=>{const a=i=>(t===0?n[t+1]:n[t-1])[i];return{_x:a("_x"),_y:a("_y"),_y0:a("_y0")}},after:e=>({_x:e._x,_y:e._y,_y1:e._y1,_y0:e._y0})}}}function ii(){return{onLoad:{duration:2e3,before:()=>({opacity:0}),after:e=>e},onExit:{duration:600,before:()=>({opacity:0})},onEnter:{duration:600,before:()=>({opacity:0}),after:e=>e}}}function We(e,t,n){var a=null,i=A(!0),r=null,o=Ge,l=null,c=Tt(s);e=typeof e=="function"?e:e===void 0?Ln:A(+e),t=typeof t=="function"?t:t===void 0?A(0):A(+t),n=typeof n=="function"?n:n===void 0?qn:A(+n);function s(u){var y,g,f,k=(u=Dn(u)).length,m,p=!1,h,_=new Array(k),b=new Array(k);for(r==null&&(l=o(h=c())),y=0;y<=k;++y){if(!(y<k&&i(m=u[y],y,u))===p)if(p=!p)g=y,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),f=y-1;f>=g;--f)l.point(_[f],b[f]);l.lineEnd(),l.areaEnd()}p&&(_[y]=+e(m,y,u),b[y]=+t(m,y,u),l.point(a?+a(m,y,u):_[y],n?+n(m,y,u):b[y]))}if(h)return l=null,h+""||null}function d(){return Ze().defined(i).curve(o).context(r)}return s.x=function(u){return arguments.length?(e=typeof u=="function"?u:A(+u),a=null,s):e},s.x0=function(u){return arguments.length?(e=typeof u=="function"?u:A(+u),s):e},s.x1=function(u){return arguments.length?(a=u==null?null:typeof u=="function"?u:A(+u),s):a},s.y=function(u){return arguments.length?(t=typeof u=="function"?u:A(+u),n=null,s):t},s.y0=function(u){return arguments.length?(t=typeof u=="function"?u:A(+u),s):t},s.y1=function(u){return arguments.length?(n=u==null?null:typeof u=="function"?u:A(+u),s):n},s.lineX0=s.lineY0=function(){return d().x(e).y(t)},s.lineY1=function(){return d().x(e).y(n)},s.lineX1=function(){return d().x(a).y(t)},s.defined=function(u){return arguments.length?(i=typeof u=="function"?u:A(!!u),s):i},s.curve=function(u){return arguments.length?(o=u,r!=null&&(l=o(r)),s):o},s.context=function(u){return arguments.length?(u==null?r=l=null:l=o(r=u),s):r},s}var En=It(Ge);function In(e){this._curve=e}In.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(e,t){this._curve.point(t*Math.sin(e),t*-Math.cos(e))}};function It(e){function t(n){return new In(e(n))}return t._curve=e,t}function we(e){var t=e.curve;return e.angle=e.x,delete e.x,e.radius=e.y,delete e.y,e.curve=function(n){return arguments.length?t(It(n)):t()._curve},e}function pt(){return we(Ze().curve(En))}function ft(){var e=We().curve(En),t=e.curve,n=e.lineX0,a=e.lineX1,i=e.lineY0,r=e.lineY1;return e.angle=e.x,delete e.x,e.startAngle=e.x0,delete e.x0,e.endAngle=e.x1,delete e.x1,e.radius=e.y,delete e.y,e.innerRadius=e.y0,delete e.y0,e.outerRadius=e.y1,delete e.y1,e.lineStartAngle=function(){return we(n())},delete e.lineX0,e.lineEndAngle=function(){return we(a())},delete e.lineX1,e.lineInnerRadius=function(){return we(i())},delete e.lineY0,e.lineOuterRadius=function(){return we(r())},delete e.lineY1,e.curve=function(o){return arguments.length?t(It(o)):t()._curve},e}function Ce(e,t){return[(t=+t)*Math.cos(e-=Math.PI/2),t*Math.sin(e)]}class Mn{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}class ri{constructor(t){this._context=t}lineStart(){this._point=0}lineEnd(){}point(t,n){if(t=+t,n=+n,this._point===0)this._point=1;else{const a=Ce(this._x0,this._y0),i=Ce(this._x0,this._y0=(this._y0+n)/2),r=Ce(t,this._y0),o=Ce(t,n);this._context.moveTo(...a),this._context.bezierCurveTo(...i,...r,...o)}this._x0=t,this._y0=n}}function An(e){return new Mn(e,!0)}function Rn(e){return new Mn(e,!1)}function oi(e){return new ri(e)}function si(e){return e.source}function li(e){return e.target}function Je(e){let t=si,n=li,a=Ln,i=qn,r=null,o=null,l=Tt(c);function c(){let s;const d=Qa.call(arguments),u=t.apply(this,d),y=n.apply(this,d);if(r==null&&(o=e(s=l())),o.lineStart(),d[0]=u,o.point(+a.apply(this,d),+i.apply(this,d)),d[0]=y,o.point(+a.apply(this,d),+i.apply(this,d)),o.lineEnd(),s)return o=null,s+""||null}return c.source=function(s){return arguments.length?(t=s,c):t},c.target=function(s){return arguments.length?(n=s,c):n},c.x=function(s){return arguments.length?(a=typeof s=="function"?s:A(+s),c):a},c.y=function(s){return arguments.length?(i=typeof s=="function"?s:A(+s),c):i},c.context=function(s){return arguments.length?(s==null?r=o=null:o=e(r=s),c):r},c}function ci(){return Je(An)}function ui(){return Je(Rn)}function hi(){const e=Je(oi);return e.angle=e.x,delete e.x,e.radius=e.y,delete e.y,e}const mi=O(3),Nn={draw(e,t){const n=O(t+xt(t/28,.75))*.59436,a=n/2,i=a*mi;e.moveTo(0,n),e.lineTo(0,-n),e.moveTo(-i,-a),e.lineTo(i,a),e.moveTo(-i,a),e.lineTo(i,-a)}},Qe={draw(e,t){const n=O(t/ht);e.moveTo(n,0),e.arc(0,0,n,0,Ue)}},On={draw(e,t){const n=O(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},jn=O(1/3),di=jn*2,Fn={draw(e,t){const n=O(t/di),a=n*jn;e.moveTo(0,-n),e.lineTo(a,0),e.lineTo(0,n),e.lineTo(-a,0),e.closePath()}},Vn={draw(e,t){const n=O(t)*.62625;e.moveTo(0,-n),e.lineTo(n,0),e.lineTo(0,n),e.lineTo(-n,0),e.closePath()}},$n={draw(e,t){const n=O(t-xt(t/7,2))*.87559;e.moveTo(-n,0),e.lineTo(n,0),e.moveTo(0,n),e.lineTo(0,-n)}},zn={draw(e,t){const n=O(t),a=-n/2;e.rect(a,a,n,n)}},Bn={draw(e,t){const n=O(t)*.4431;e.moveTo(n,n),e.lineTo(n,-n),e.lineTo(-n,-n),e.lineTo(-n,n),e.closePath()}},yi=.8908130915292852,Wn=$e(ht/10)/$e(7*ht/10),pi=$e(Ue/10)*Wn,fi=-_n(Ue/10)*Wn,Yn={draw(e,t){const n=O(t*yi),a=pi*n,i=fi*n;e.moveTo(0,-n),e.lineTo(a,i);for(let r=1;r<5;++r){const o=Ue*r/5,l=_n(o),c=$e(o);e.lineTo(c*n,-l*n),e.lineTo(l*a-c*i,c*a+l*i)}e.closePath()}},ot=O(3),Xn={draw(e,t){const n=-O(t/(ot*3));e.moveTo(0,n*2),e.lineTo(-ot*n,-n),e.lineTo(ot*n,-n),e.closePath()}},gi=O(3),Hn={draw(e,t){const n=O(t)*.6824,a=n/2,i=n*gi/2;e.moveTo(0,-n),e.lineTo(i,a),e.lineTo(-i,a),e.closePath()}},K=-.5,U=O(3)/2,gt=1/O(12),_i=(gt/2+1)*3,Kn={draw(e,t){const n=O(t/_i),a=n/2,i=n*gt,r=a,o=n*gt+n,l=-r,c=o;e.moveTo(a,i),e.lineTo(r,o),e.lineTo(l,c),e.lineTo(K*a-U*i,U*a+K*i),e.lineTo(K*r-U*o,U*r+K*o),e.lineTo(K*l-U*c,U*l+K*c),e.lineTo(K*a+U*i,K*i-U*a),e.lineTo(K*r+U*o,K*o-U*r),e.lineTo(K*l+U*c,K*c-U*l),e.closePath()}},_t={draw(e,t){const n=O(t-xt(t/6,1.7))*.6189;e.moveTo(-n,-n),e.lineTo(n,n),e.moveTo(-n,n),e.lineTo(n,-n)}},Qt=[Qe,On,Fn,zn,Yn,Xn,Kn],vi=[Qe,$n,_t,Hn,Nn,Bn,Vn];function bi(e,t){let n=null,a=Tt(i);e=typeof e=="function"?e:A(e||Qe),t=typeof t=="function"?t:A(t===void 0?64:+t);function i(){let r;if(n||(n=r=a()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),r)return n=null,r+""||null}return i.type=function(r){return arguments.length?(e=typeof r=="function"?r:A(r),i):e},i.size=function(r){return arguments.length?(t=typeof r=="function"?r:A(+r),i):t},i.context=function(r){return arguments.length?(n=r??null,i):n},i}function ce(){}function Ye(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function et(e){this._context=e}et.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Ye(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Ye(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function ki(e){return new et(e)}function Un(e){this._context=e}Un.prototype={areaStart:ce,areaEnd:ce,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Ye(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Si(e){return new Un(e)}function Gn(e){this._context=e}Gn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,a=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,a):this._context.moveTo(n,a);break;case 3:this._point=4;default:Ye(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Ti(e){return new Gn(e)}function Zn(e,t){this._basis=new et(e),this._beta=t}Zn.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var e=this._x,t=this._y,n=e.length-1;if(n>0)for(var a=e[0],i=t[0],r=e[n]-a,o=t[n]-i,l=-1,c;++l<=n;)c=l/n,this._basis.point(this._beta*e[l]+(1-this._beta)*(a+c*r),this._beta*t[l]+(1-this._beta)*(i+c*o));this._x=this._y=null,this._basis.lineEnd()},point:function(e,t){this._x.push(+e),this._y.push(+t)}};const xi=function e(t){function n(a){return t===1?new et(a):new Zn(a,t)}return n.beta=function(a){return e(+a)},n}(.85);function Xe(e,t,n){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-t),e._y2+e._k*(e._y1-n),e._x2,e._y2)}function Mt(e,t){this._context=e,this._k=(1-t)/6}Mt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Xe(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2,this._x1=e,this._y1=t;break;case 2:this._point=3;default:Xe(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const Pi=function e(t){function n(a){return new Mt(a,t)}return n.tension=function(a){return e(+a)},n}(0);function At(e,t){this._context=e,this._k=(1-t)/6}At.prototype={areaStart:ce,areaEnd:ce,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:Xe(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const wi=function e(t){function n(a){return new At(a,t)}return n.tension=function(a){return e(+a)},n}(0);function Rt(e,t){this._context=e,this._k=(1-t)/6}Rt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Xe(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const Ci=function e(t){function n(a){return new Rt(a,t)}return n.tension=function(a){return e(+a)},n}(0);function Nt(e,t,n){var a=e._x1,i=e._y1,r=e._x2,o=e._y2;if(e._l01_a>Yt){var l=2*e._l01_2a+3*e._l01_a*e._l12_a+e._l12_2a,c=3*e._l01_a*(e._l01_a+e._l12_a);a=(a*l-e._x0*e._l12_2a+e._x2*e._l01_2a)/c,i=(i*l-e._y0*e._l12_2a+e._y2*e._l01_2a)/c}if(e._l23_a>Yt){var s=2*e._l23_2a+3*e._l23_a*e._l12_a+e._l12_2a,d=3*e._l23_a*(e._l23_a+e._l12_a);r=(r*s+e._x1*e._l23_2a-t*e._l12_2a)/d,o=(o*s+e._y1*e._l23_2a-n*e._l12_2a)/d}e._context.bezierCurveTo(a,i,r,o,e._x2,e._y2)}function Jn(e,t){this._context=e,this._alpha=t}Jn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+a*a,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3;default:Nt(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const Di=function e(t){function n(a){return t?new Jn(a,t):new Mt(a,0)}return n.alpha=function(a){return e(+a)},n}(.5);function Qn(e,t){this._context=e,this._alpha=t}Qn.prototype={areaStart:ce,areaEnd:ce,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+a*a,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:Nt(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const Li=function e(t){function n(a){return t?new Qn(a,t):new At(a,0)}return n.alpha=function(a){return e(+a)},n}(.5);function ea(e,t){this._context=e,this._alpha=t}ea.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+a*a,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Nt(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const qi=function e(t){function n(a){return t?new ea(a,t):new Rt(a,0)}return n.alpha=function(a){return e(+a)},n}(.5);function ta(e){this._context=e}ta.prototype={areaStart:ce,areaEnd:ce,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function Ei(e){return new ta(e)}function en(e){return e<0?-1:1}function tn(e,t,n){var a=e._x1-e._x0,i=t-e._x1,r=(e._y1-e._y0)/(a||i<0&&-0),o=(n-e._y1)/(i||a<0&&-0),l=(r*i+o*a)/(a+i);return(en(r)+en(o))*Math.min(Math.abs(r),Math.abs(o),.5*Math.abs(l))||0}function nn(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function st(e,t,n){var a=e._x0,i=e._y0,r=e._x1,o=e._y1,l=(r-a)/3;e._context.bezierCurveTo(a+l,i+l*t,r-l,o-l*n,r,o)}function He(e){this._context=e}He.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:st(this,this._t0,nn(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,st(this,nn(this,n=tn(this,e,t)),n);break;default:st(this,this._t0,n=tn(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function na(e){this._context=new aa(e)}(na.prototype=Object.create(He.prototype)).point=function(e,t){He.prototype.point.call(this,t,e)};function aa(e){this._context=e}aa.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,a,i,r){this._context.bezierCurveTo(t,e,a,n,r,i)}};function Ii(e){return new He(e)}function Mi(e){return new na(e)}function ia(e){this._context=e}ia.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var a=an(e),i=an(t),r=0,o=1;o<n;++r,++o)this._context.bezierCurveTo(a[0][r],i[0][r],a[1][r],i[1][r],e[o],t[o]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function an(e){var t,n=e.length-1,a,i=new Array(n),r=new Array(n),o=new Array(n);for(i[0]=0,r[0]=2,o[0]=e[0]+2*e[1],t=1;t<n-1;++t)i[t]=1,r[t]=4,o[t]=4*e[t]+2*e[t+1];for(i[n-1]=2,r[n-1]=7,o[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)a=i[t]/r[t-1],r[t]-=a,o[t]-=a*o[t-1];for(i[n-1]=o[n-1]/r[n-1],t=n-2;t>=0;--t)i[t]=(o[t]-i[t+1])/r[t];for(r[n-1]=(e[n]+i[n-1])/2,t=0;t<n-1;++t)r[t]=2*e[t+1]-i[t+1];return[i,r]}function Ai(e){return new ia(e)}function tt(e,t){this._context=e,this._t=t}tt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function Ri(e){return new tt(e,.5)}function Ni(e){return new tt(e,0)}function Oi(e){return new tt(e,1)}function ve(e,t){if((o=e.length)>1)for(var n=1,a,i,r=e[t[0]],o,l=r.length;n<o;++n)for(i=r,r=e[t[n]],a=0;a<l;++a)r[a][1]+=r[a][0]=isNaN(i[a][1])?i[a][0]:i[a][1]}function be(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function ji(e,t){return e[t]}function Fi(e){const t=[];return t.key=e,t}function Vi(){var e=A([]),t=be,n=ve,a=ji;function i(r){var o=Array.from(e.apply(this,arguments),Fi),l,c=o.length,s=-1,d;for(const u of r)for(l=0,++s;l<c;++l)(o[l][s]=[0,+a(u,o[l].key,s,r)]).data=u;for(l=0,d=Dn(t(o));l<c;++l)o[d[l]].index=l;return n(o,d),o}return i.keys=function(r){return arguments.length?(e=typeof r=="function"?r:A(Array.from(r)),i):e},i.value=function(r){return arguments.length?(a=typeof r=="function"?r:A(+r),i):a},i.order=function(r){return arguments.length?(t=r==null?be:typeof r=="function"?r:A(Array.from(r)),i):t},i.offset=function(r){return arguments.length?(n=r??ve,i):n},i}function $i(e,t){if((a=e.length)>0){for(var n,a,i=0,r=e[0].length,o;i<r;++i){for(o=n=0;n<a;++n)o+=e[n][i][1]||0;if(o)for(n=0;n<a;++n)e[n][i][1]/=o}ve(e,t)}}function zi(e,t){if((c=e.length)>0)for(var n,a=0,i,r,o,l,c,s=e[t[0]].length;a<s;++a)for(o=l=0,n=0;n<c;++n)(r=(i=e[t[n]][a])[1]-i[0])>0?(i[0]=o,i[1]=o+=r):r<0?(i[1]=l,i[0]=l+=r):(i[0]=0,i[1]=r)}function Bi(e,t){if((i=e.length)>0){for(var n=0,a=e[t[0]],i,r=a.length;n<r;++n){for(var o=0,l=0;o<i;++o)l+=e[o][n][1]||0;a[n][1]+=a[n][0]=-l/2}ve(e,t)}}function Wi(e,t){if(!(!((o=e.length)>0)||!((r=(i=e[t[0]]).length)>0))){for(var n=0,a=1,i,r,o;a<r;++a){for(var l=0,c=0,s=0;l<o;++l){for(var d=e[t[l]],u=d[a][1]||0,y=d[a-1][1]||0,g=(u-y)/2,f=0;f<l;++f){var k=e[t[f]],m=k[a][1]||0,p=k[a-1][1]||0;g+=m-p}c+=u,s+=g*u}i[a-1][1]+=i[a-1][0]=n,c&&(n-=s/c)}i[a-1][1]+=i[a-1][0]=n,ve(e,t)}}function ra(e){var t=e.map(Yi);return be(e).sort(function(n,a){return t[n]-t[a]})}function Yi(e){for(var t=-1,n=0,a=e.length,i,r=-1/0;++t<a;)(i=+e[t][1])>r&&(r=i,n=t);return n}function oa(e){var t=e.map(sa);return be(e).sort(function(n,a){return t[n]-t[a]})}function sa(e){for(var t=0,n=-1,a=e.length,i;++n<a;)(i=+e[n][1])&&(t+=i);return t}function Xi(e){return oa(e).reverse()}function Hi(e){var t=e.length,n,a,i=e.map(sa),r=ra(e),o=0,l=0,c=[],s=[];for(n=0;n<t;++n)a=r[n],o<l?(o+=i[a],c.push(a)):(l+=i[a],s.push(a));return s.reverse().concat(c)}function Ki(e){return be(e).reverse()}const Ui=Object.freeze(Object.defineProperty({__proto__:null,arc:Pa,area:We,areaRadial:ft,curveBasis:ki,curveBasisClosed:Si,curveBasisOpen:Ti,curveBumpX:An,curveBumpY:Rn,curveBundle:xi,curveCardinal:Pi,curveCardinalClosed:wi,curveCardinalOpen:Ci,curveCatmullRom:Di,curveCatmullRomClosed:Li,curveCatmullRomOpen:qi,curveLinear:Ge,curveLinearClosed:Ei,curveMonotoneX:Ii,curveMonotoneY:Mi,curveNatural:Ai,curveStep:Ri,curveStepAfter:Oi,curveStepBefore:Ni,line:Ze,lineRadial:pt,link:Je,linkHorizontal:ci,linkRadial:hi,linkVertical:ui,pie:ei,pointRadial:Ce,radialArea:ft,radialLine:pt,stack:Vi,stackOffsetDiverging:zi,stackOffsetExpand:$i,stackOffsetNone:ve,stackOffsetSilhouette:Bi,stackOffsetWiggle:Wi,stackOrderAppearance:ra,stackOrderAscending:oa,stackOrderDescending:Xi,stackOrderInsideOut:Hi,stackOrderNone:be,stackOrderReverse:Ki,symbol:bi,symbolAsterisk:Nn,symbolCircle:Qe,symbolCross:On,symbolDiamond:Fn,symbolDiamond2:Vn,symbolPlus:$n,symbolSquare:zn,symbolSquare2:Bn,symbolStar:Yn,symbolTimes:_t,symbolTriangle:Xn,symbolTriangle2:Hn,symbolWye:Kn,symbolX:_t,symbols:Qt,symbolsFill:Qt,symbolsStroke:vi},Symbol.toStringTag,{value:"Module"})),rn=e=>{const t=e._y1!==void 0?e._y1:e._y;return t!=null&&e._y0!==null},on=e=>t=>e.x(t._x1!==void 0?t._x1:t._x),lt=e=>t=>e.y(t._y1!==void 0?t._y1:t._y),Gi=e=>t=>-1*e.x(t._x1!==void 0?t._x1:t._x)+Math.PI/2,la=e=>`curve${(n=>n&&n[0].toUpperCase()+n.slice(1))(e)}`,Zi=e=>`${la(e)}Closed`,Ke=e=>{const{interpolation:t}=e;if(typeof t=="function")return t;if(typeof t=="string"){const{polar:n,openCurve:a=!n}=e,i=a?la(t):Zi(t);return Ui[i]}return Ge},Ji=e=>{const{polar:t,scale:n,horizontal:a}=e;return t?pt().defined(rn).curve(Ke(e)).angle(Gi(n)).radius(lt(n)):Ze().defined(rn).curve(Ke(e)).x(a?lt(n):on(n)).y(a?on(n):lt(n))};function Qi(e,t,n){return`M ${e}, ${t}
      m ${-n}, 0
      a ${n}, ${n} 0 1,0 ${n*2},0
      a ${n}, ${n} 0 1,0 ${-n*2},0`}function er(e,t,n){const a=.87*n,i=e-a,r=t+a,o=e+a-i;return`M ${i}, ${r}
      h${o}
      v-${o}
      h-${o}
      z`}function tr(e,t,n){const a=.87*n,i=Math.sqrt(2*(a*a));return`M ${e}, ${t+i}
      l ${i}, -${i}
      l -${i}, -${i}
      l -${i}, ${i}
      l ${i}, ${i}
      z`}function nr(e,t,n){const a=n/2*Math.sqrt(3),i=e-n,r=e+n,o=t-n,l=t+a;return`M ${i}, ${o}
      L ${r}, ${o}
      L ${e}, ${l}
      z`}function ar(e,t,n){const a=n/2*Math.sqrt(3),i=e-n,r=e+n,o=t-a,l=t+n;return`M ${i}, ${l}
      L ${r}, ${l}
      L ${e}, ${o}
      z`}function ir(e,t,n){const a=1.1*n,i=a/1.5;return`
      M ${e-i/2}, ${t+a}
      v-${i}
      h-${i}
      v-${i}
      h${i}
      v-${i}
      h${i}
      v${i}
      h${i}
      v${i}
      h-${i}
      v${i}
      z`}function rr(e,t,n){const a=.8*n,i=a/1.5;return`
      M ${e-i/2}, ${t+a+i}
      v-${i*2}
      h-${i}
      v-${i}
      h${i}
      v-${i}
      h${i}
      v${i}
      h${i}
      v${i}
      h-${i}
      v${i*2}
      z`}function or(e,t,n){const a=1.1*n,i=a-a*.3,r=e-a,o=t+i/2,l=e+a-r;return`M ${r}, ${o}
      h${l}
      v-${i}
      h-${l}
      z`}function sr(e,t,n){const a=1.35*n,i=Math.PI/5;return`M ${Ma(10).map(o=>{const l=o%2===0?a:a/2;return`${l*Math.sin(i*(o+1))+e},
        ${l*Math.cos(i*(o+1))+t}`}).join("L")} z`}const lr=Object.freeze(Object.defineProperty({__proto__:null,circle:Qi,cross:rr,diamond:tr,minus:or,plus:ir,square:er,star:sr,triangleDown:nr,triangleUp:ar},Symbol.toStringTag,{value:"Module"}));function sn(e,t,n){const{a,d:i,e:r,f:o}=t;return n==="y"?i*e+o:a*e+r}function cr(e){return e.getScreenCTM().inverse()}function ca(e){return!!(e&&e.identifier!==void 0)}function ur(e){return e.changedTouches&&e.changedTouches.length>0}function ua(e){if(ca(e.nativeEvent))return;const t=n=>n.nodeName==="svg"?n:n.parentNode?t(n.parentNode):n;return t(e.target)}function hr(e,t){if(ca(e.nativeEvent))return{x:e.nativeEvent.locationX,y:e.nativeEvent.locationY};const n=ur(e)?e.changedTouches[0]:e,a=cr(t||ua(n));return{x:sn(n.clientX,a,"x"),y:sn(n.clientY,a,"y")}}const mr=e=>{const{x:t,y:n,size:a,symbol:i}=e;if(e.getPath)return e.getPath(t,n,a);const r=lr;return(typeof r[i]=="function"?r[i]:r.circle)(t,n,a)},dr=e=>{const t=E(e.ariaLabel,e),n=E(e.desc,e),a=E(e.id,e),i=E(e.size,e),r=fe(e.style,e),o=E(e.symbol,e),l=E(e.tabIndex,e);return Object.assign({},e,{ariaLabel:t,desc:n,id:a,size:i,style:r,symbol:o,tabIndex:l})},yr={pathComponent:P.createElement(Ct,null),role:"presentation",shapeRendering:"auto"},pr=e=>{const t=dr(z({},e,yr)),n=wt(t);return P.cloneElement(t.pathComponent,{...t.events,"aria-label":t.ariaLabel,d:mr(t),style:t.style,desc:t.desc,tabIndex:t.tabIndex,role:t.role,shapeRendering:t.shapeRendering,className:t.className,transform:t.transform,clipPath:t.clipPath,...n})},fr=(e,t)=>{let n=qe(e);n.length<2&&(n=[]);const a=i=>{const r=Aa(t[i])==="log"?1/Number.MAX_SAFE_INTEGER:0,o=t[i].domain(),l=yt(o),c=Ra(o);let s=r;return l.valueOf()<0&&c.valueOf()<=0?s=c:l.valueOf()>=0&&c.valueOf()>0&&(s=l),Na(o)?new Date(s):s};return n.map(i=>{const r=i._y1!==void 0?i._y1:i._y,o=i._y0!==void 0?i._y0:a("y"),l=i._x1!==void 0?i._x1:i._x,c=i._x0!==void 0?i._x0:a("x");return Object.assign({},i,{_y0:o,_y1:r,_x0:c,_x1:l})})},gr=e=>{const{polar:t}=e,n=Tn(e,"area"),a=xn(e.style,n),i={x:ze(e,"x"),y:ze(e,"y")},r={x:mt(e,"x"),y:mt(e,"y")},o={x:Be(e,"x").domain(r.x).range(e.horizontal?i.y:i.x),y:Be(e,"y").domain(r.y).range(e.horizontal?i.x:i.y)},l=t?e.origin||Pn(e):void 0,c=fr(e,o);return{style:a,data:c,scale:o,domain:r,origin:l}},_r=(e,t)=>{const n=Le(e,t,"area"),a=Object.assign({},n,gr(n)),{data:i,domain:r,events:o,groupComponent:l,height:c,horizontal:s,interpolation:d,origin:u,padding:y,polar:g,scale:f,sharedEvents:k,standalone:m,style:p,theme:h,width:_,labels:b,name:S,disableInlineStyles:T}=a,v={parent:{style:p.parent,width:_,height:c,scale:f,data:i,domain:r,standalone:m,theme:h,polar:g,origin:u,padding:y,name:S,horizontal:s},all:{data:{horizontal:s,polar:g,origin:u,scale:f,data:i,interpolation:d,groupComponent:l,style:T?{}:p.data,disableInlineStyles:T}}};return i.reduce((w,x,C)=>{const D=bn(a,x,C);if(D!=null||b&&(o||k)){const L=kn(x.eventKey)?C:x.eventKey;w[L]={labels:Sn(a,C)}}return w},v)},vt=e=>{const t=e._y1!==void 0?e._y1:e._y;return t!=null&&e._y0!==null},ln=e=>t=>e.x(t._x1!==void 0?t._x1:t._x),bt=e=>t=>e.y(t._y1!==void 0?t._y1:t._y),kt=e=>t=>e.y(t._y0),vr=e=>t=>-1*e.x(t._x1!==void 0?t._x1:t._x)+Math.PI/2,br=e=>{const{horizontal:t,scale:n}=e,a=Ke(e);return t?We().defined(vt).curve(a).x0(kt(n)).x1(bt(n)).y(ln(n)):We().defined(vt).curve(a).x(ln(n)).y1(bt(n)).y0(kt(n))},kr=e=>{const{polar:t,scale:n}=e,a=Ke(e);return t?ft().defined(vt).curve(a).angle(vr(n)).outerRadius(bt(n)).innerRadius(kt(n)):br(e)},Sr=e=>{const t=E(e.ariaLabel,e),n=E(e.desc,e),a=E(e.id,e),i=fe(Object.assign({fill:"black"},e.style),e),r=E(e.tabIndex,e);return Object.assign({},e,{ariaLabel:t,desc:n,id:a,style:i,tabIndex:r})},Tr={groupComponent:P.createElement("g",null),pathComponent:P.createElement(Ct,null),role:"presentation",shapeRendering:"auto"},xr=e=>{const t=Sr(z({},e,Tr)),{ariaLabel:n,role:a,shapeRendering:i,className:r,polar:o,origin:l,data:c,pathComponent:s,events:d,groupComponent:u,clipPath:y,id:g,style:f,desc:k,tabIndex:m}=t,p=wt(t),h=o&&l?`translate(${l.x}, ${l.y})`:void 0,_=t.transform||h,b=f.stroke&&f.stroke!=="none"&&f.stroke!=="transparent",S=kr(t),T=b&&Ji(t),v=f.stroke?"none":f.fill,w={"aria-label":n,className:r,role:a,shapeRendering:i,transform:_,...d,clipPath:y,tabIndex:m},x=P.cloneElement(s,Object.assign({key:`${g}-area`,style:Object.assign({},f,{stroke:v}),d:S(c),desc:k,tabIndex:m},w,p)),C=b?P.cloneElement(s,Object.assign({key:`${g}-area-stroke`,style:Object.assign({},f,{fill:"none"}),d:T(c)},w)):null;return b?P.cloneElement(u,p,[x,C]):x},cn={width:450,height:300,padding:50,interpolation:"linear"},Pr={components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]},H=class H extends P.Component{static getBaseProps(t){return _r(t,cn)}shouldAnimate(){return!!this.props.animate}render(){const{animationWhitelist:t,role:n}=H,a=Le(this.props,cn,n);if(this.shouldAnimate())return this.animateComponent(a,t);const i=this.renderContinuousData(a),r=a.standalone?this.renderContainer(a.containerComponent,i):i;return Cn(r,a)}};M(H,"animationWhitelist",["data","domain","height","padding","style","width"]),M(H,"defaultProps",{containerComponent:P.createElement(Lt,null),dataComponent:P.createElement(xr,null),groupComponent:P.createElement(Ca,null),labelComponent:P.createElement(Dt,{renderInPortal:!0}),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:Pt.grayscale}),M(H,"displayName","VictoryArea"),M(H,"role","area"),M(H,"continuous",!0),M(H,"defaultTransitions",ni()),M(H,"defaultPolarTransitions",ai()),M(H,"getDomain",mt),M(H,"getData",qe),M(H,"expectedComponents",["dataComponent","labelComponent","groupComponent","containerComponent"]);let St=H;const wr=wn(St,Pr),Cr=e=>{const{pointerWidth:t,cornerRadius:n,orientation:a,width:i,height:r,center:o}=e,l=a==="bottom"?1:-1,c=e.x+(e.dx||0),s=e.y+(e.dy||0),d=o.x,u=o.y,y=u+l*(r/2),g=u-l*(r/2),f=d+i/2,k=d-i/2,m=l*(s-y)<0?0:e.pointerLength,h=`${n} ${n} ${a==="bottom"?"0 0 0":"0 0 1"}`;return`M ${d-t/2}, ${y}
    L ${m?c:d+t/2}, ${m?s:y}
    L ${d+t/2}, ${y}
    L ${f-n}, ${y}
    A ${h} ${f}, ${y-l*n}
    L ${f}, ${g+l*n}
    A ${h} ${f-n}, ${g}
    L ${k+n}, ${g}
    A ${h} ${k}, ${g+l*n}
    L ${k}, ${y-l*n}
    A ${h} ${k+n}, ${y}
    z`},Dr=e=>{const{pointerWidth:t,cornerRadius:n,orientation:a,width:i,height:r,center:o}=e,l=a==="left"?1:-1,c=e.x+(e.dx||0),s=e.y+(e.dy||0),d=o.x,u=o.y,y=d-l*(i/2),g=d+l*(i/2),f=u+r/2,k=u-r/2,m=l*(c-y)>0?0:e.pointerLength,h=`${n} ${n} ${a==="left"?"0 0 0":"0 0 1"}`;return`M ${y}, ${u-t/2}
    L ${m?c:y}, ${m?s:u+t/2}
    L ${y}, ${u+t/2}
    L ${y}, ${f-n}
    A ${h} ${y+l*n}, ${f}
    L ${g-l*n}, ${f}
    A ${h} ${g}, ${f-n}
    L ${g}, ${k+n}
    A ${h} ${g-l*n}, ${k}
    L ${y+l*n}, ${k}
    A ${h} ${y}, ${k+n}
    z`},Lr=e=>{const t=e.orientation||"top";return t==="left"||t==="right"?Dr(e):Cr(e)},qr=e=>{const t=E(e.id,e),n=fe(e.style,e);return{...e,id:t,style:n}},Er={pathComponent:P.createElement(Ct,null),role:"presentation",shapeRendering:"auto"},Ir=e=>{const t=qr(z({},e,Er)),n=wt(t);Ne(t.height,"Flyout props[height] is undefined"),Ne(t.width,"Flyout props[width] is undefined"),Ne(t.x,"Flyout props[x] is undefined"),Ne(t.y,"Flyout props[y] is undefined");const a={center:t.center||{x:0,y:0},cornerRadius:t.cornerRadius||0,dx:t.dx,dy:t.dy,height:t.height,orientation:t.orientation||"top",pointerLength:t.pointerLength||0,pointerWidth:t.pointerWidth||0,width:t.width,x:t.x,y:t.y};return P.cloneElement(t.pathComponent,{...t.events,...n,style:t.style,d:Lr(a),className:t.className,shapeRendering:t.shapeRendering,role:t.role,transform:t.transform,clipPath:t.clipPath})},Mr={cornerRadius:5,pointerLength:10,pointerWidth:10};class Fe extends P.Component{static defaultEvents(t){const n=t.activateData?[{target:"labels",mutation:()=>({active:!0})},{target:"data",mutation:()=>({active:!0})}]:[{target:"labels",mutation:()=>({active:!0})}],a=t.activateData?[{target:"labels",mutation:()=>({active:void 0})},{target:"data",mutation:()=>({active:void 0})}]:[{target:"labels",mutation:()=>({active:void 0})}];return[{target:"data",eventHandlers:{onMouseOver:()=>n,onFocus:()=>n,onTouchStart:()=>n,onMouseOut:()=>a,onBlur:()=>a,onTouchEnd:()=>a}}]}constructor(t){super(t),this.id=t.id===void 0?Oa("tooltip-"):t.id}getDefaultOrientation(t){const{datum:n,horizontal:a,polar:i}=t;if(!i){const r=a?"right":"top",o=a?"left":"bottom";return n&&n.y<0?o:r}return this.getPolarOrientation(t)}getPolarOrientation(t){const n=Ut(t,t.datum),a=t.labelPlacement||"vertical";return a==="vertical"?this.getVerticalOrientations(n):a==="parallel"?n<90||n>270?"right":"left":n>180?"bottom":"top"}getVerticalOrientations(t){return t<45||t>315?"right":t>=45&&t<=135?"top":t>135&&t<225?"left":"bottom"}getStyles(t){const n=t.theme||Pt.grayscale,a=n&&n.tooltip&&n.tooltip.style?n.tooltip.style:{},i=Array.isArray(t.style)?t.style.map(s=>z({},s,a)):z({},t.style,a),r=n&&n.tooltip&&n.tooltip.flyoutStyle?n.tooltip.flyoutStyle:{},o=t.flyoutStyle?z({},t.flyoutStyle,r):r,l=Array.isArray(i)?i.map(s=>fe(s,t)):fe(i,t),c=fe(o,Object.assign({},t,{style:l}));return{style:l,flyoutStyle:c}}getEvaluatedProps(t){const{cornerRadius:n,centerOffset:a,dx:i,dy:r}=t,o=E(t.active,t);let l=E(t.text,Object.assign({},t,{active:o}));l==null&&(l=""),typeof l=="number"&&(l=l.toString());const{style:c,flyoutStyle:s}=this.getStyles(Object.assign({},t,{active:o,text:l})),d=E(t.orientation,Object.assign({},t,{active:o,text:l,style:c,flyoutStyle:s}))||this.getDefaultOrientation(t),u=E(t.flyoutPadding,Object.assign({},t,{active:o,text:l,style:c,flyoutStyle:s,orientation:d}))||this.getLabelPadding(c),y=qt(u),g=E(t.pointerWidth,Object.assign({},t,{active:o,text:l,style:c,flyoutStyle:s,orientation:d})),f=E(t.pointerLength,Object.assign({},t,{active:o,text:l,style:c,flyoutStyle:s,orientation:d})),k=Gt(l,c),{flyoutHeight:m,flyoutWidth:p}=this.getDimensions(Object.assign({},t,{style:c,flyoutStyle:s,active:o,text:l,orientation:d,flyoutPadding:y,pointerWidth:g,pointerLength:f}),k),h=Object.assign({},t,{active:o,text:l,style:c,flyoutStyle:s,orientation:d,flyoutHeight:m,flyoutWidth:p,flyoutPadding:y,pointerWidth:g,pointerLength:f}),_=Oe(a)&&(a==null?void 0:a.x)!==void 0?E(a.x,h):0,b=Oe(a)&&(a==null?void 0:a.y)!==void 0?E(a.y,h):0;return{...h,centerOffset:{x:_,y:b},dx:i!==void 0?E(i,h):0,dy:r!==void 0?E(r,h):0,cornerRadius:E(n,h)}}getCalculatedValues(t){const{style:n,text:a,flyoutStyle:i,flyoutHeight:r,flyoutWidth:o}=t,l=Gt(a,n),c={height:r,width:o},s=this.getFlyoutCenter(t,c),d=this.getTransform(t);return{style:n,flyoutStyle:i,labelSize:l,flyoutDimensions:c,flyoutCenter:s,transform:d}}getTransform(t){const{x:n,y:a,style:i}=t,o=(i||{}).angle||t.angle||this.getDefaultAngle(t);return o?`rotate(${o} ${n} ${a})`:void 0}getDefaultAngle(t){const{polar:n,labelPlacement:a,orientation:i,datum:r}=t;if(!n||!a||a==="vertical")return 0;const o=Ut(t,r),l=o>90&&o<180||o>270?1:-1,c=a==="perpendicular"?0:90;let s=0;return o===0||o===180?s=i==="top"&&o===180?270:90:o>0&&o<180?s=90-o:o>180&&o<360&&(s=270-o),s+l*c}constrainTooltip(t,n,a){const{x:i,y:r}=t,{width:o,height:l}=a,c={x:[0,n.width],y:[0,n.height]},s={x:[i-o/2,i+o/2],y:[r-l/2,r+l/2]},d={x:[s.x[0]<c.x[0]?c.x[0]-s.x[0]:0,s.x[1]>c.x[1]?s.x[1]-c.x[1]:0],y:[s.y[0]<c.y[0]?c.y[0]-s.y[0]:0,s.y[1]>c.y[1]?s.y[1]-c.y[1]:0]};return{x:Math.round(i+d.x[0]-d.x[1]),y:Math.round(r+d.y[0]-d.y[1])}}getFlyoutCenter(t,n){const{x:a,y:i,dx:r,dy:o,pointerLength:l,orientation:c,constrainToVisibleArea:s,centerOffset:d}=t,{height:u,width:y}=n,g=c==="left"?-1:1,f=c==="bottom"?-1:1,k={x:c==="left"||c==="right"?a+g*(l+y/2+g*r):a+r,y:c==="top"||c==="bottom"?i-f*(l+u/2-f*o):i+o},m={x:Oe(t.center)&&t.center.x!==void 0?t.center.x:k.x,y:Oe(t.center)&&t.center.y!==void 0?t.center.y:k.y},p={x:m.x+d.x,y:m.y+d.y};return s?this.constrainTooltip(p,t,n):p}getLabelPadding(t){if(!t)return 0;const n=Array.isArray(t)?t.map(a=>a.padding):[t.padding];return Math.max(...n,0)}getDimensions(t,n){const{orientation:a,pointerLength:i,pointerWidth:r,flyoutHeight:o,flyoutWidth:l,flyoutPadding:c}=t,s=E(t.cornerRadius,t),d=()=>{const y=n.height+c.top+c.bottom,g=a==="top"||a==="bottom"?2*s:2*s+r;return Math.max(g,y)},u=()=>{const y=n.width+c.left+c.right,g=a==="left"||a==="right"?2*s+i:2*s;return Math.max(g,y)};return{flyoutHeight:o?E(o,t):d(),flyoutWidth:l?E(l,t):u()}}getLabelProps(t,n){const{flyoutCenter:a,style:i,labelSize:r,dy:o=0,dx:l=0}=n,{text:c,datum:s,activePoints:d,labelComponent:u,index:y,flyoutPadding:g}=t,f=(Array.isArray(i)&&i.length?i[0].textAnchor:i.textAnchor)||"middle",k=()=>{if(f==="middle")return a.x;const m=f==="end"?-1:1;return a.x-m*(r.width/2)};return z({},u.props,{key:`${this.id}-label-${y}`,text:c,datum:s,activePoints:d,textAnchor:f,dy:o,dx:l,style:i,x:k()+(g.left-g.right)/2,y:a.y+(g.top-g.bottom)/2,verticalAnchor:"middle",angle:i.angle})}getPointerOrientation(t,n,a){const i={bottom:n.y+a.height/2,top:n.y-a.height/2,left:n.x-a.width/2,right:n.x+a.width/2},r=[{side:"top",val:i.top>t.y?i.top-t.y:-1},{side:"bottom",val:i.bottom<t.y?t.y-i.bottom:-1},{side:"right",val:i.right<t.x?t.x-i.right:-1},{side:"left",val:i.left>t.x?i.left-t.x:-1}];return ja(r,"val","desc")[0].side}getFlyoutProps(t,n){const{flyoutDimensions:a,flyoutStyle:i,flyoutCenter:r}=n,{x:o,y:l,dx:c,dy:s,datum:d,activePoints:u,index:y,pointerLength:g,pointerWidth:f,cornerRadius:k,events:m,flyoutComponent:p}=t,h=E(t.pointerOrientation,t);return z({},p.props,{x:o,y:l,dx:c,dy:s,datum:d,activePoints:u,index:y,pointerLength:g,pointerWidth:f,cornerRadius:k,events:m,orientation:h||this.getPointerOrientation({x:o,y:l},r,a),key:`${this.id}-tooltip-${y}`,width:a.width,height:a.height,style:i,center:r})}renderTooltip(t){const n=E(t.active,t),{renderInPortal:a}=t;if(!n)return null;const i=this.getEvaluatedProps(t),{flyoutComponent:r,labelComponent:o,groupComponent:l}=i,c=this.getCalculatedValues(i),s=[P.cloneElement(r,this.getFlyoutProps(i,c)),P.cloneElement(o,this.getLabelProps(i,c))],d=P.cloneElement(l,{role:"presentation",transform:c.transform},s);return a?P.createElement(Fa,null,d):d}render(){const t=Le(this.props,Mr,"tooltip");return this.renderTooltip(t)}}M(Fe,"displayName","VictoryTooltip"),M(Fe,"role","tooltip"),M(Fe,"defaultProps",{active:!1,renderInPortal:!0,labelComponent:P.createElement(Dt,null),flyoutComponent:P.createElement(Ir,null),groupComponent:P.createElement("g",null)});var Ar=Da();const Rr=pn(Ar);var ct={},Ve={exports:{}},Nr=Ve.exports,un;function Or(){return un||(un=1,function(e,t){(function(n,a){e.exports=a()})(Nr,function(){var n=Math.pow(2,-52),a=new Uint32Array(512),i=function(p){var h=p.length>>1;if(h>0&&typeof p[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=p;var _=Math.max(2*h-5,0);this._triangles=new Uint32Array(_*3),this._halfedges=new Int32Array(_*3),this._hashSize=Math.ceil(Math.sqrt(h)),this._hullPrev=new Uint32Array(h),this._hullNext=new Uint32Array(h),this._hullTri=new Uint32Array(h),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(h),this._dists=new Float64Array(h),this.update()};i.from=function(p,h,_){h===void 0&&(h=f),_===void 0&&(_=k);for(var b=p.length,S=new Float64Array(b*2),T=0;T<b;T++){var v=p[T];S[2*T]=h(v),S[2*T+1]=_(v)}return new i(S)},i.prototype.update=function(){for(var p=this,h=p.coords,_=p._hullPrev,b=p._hullNext,S=p._hullTri,T=p._hullHash,v=h.length>>1,w=1/0,x=1/0,C=-1/0,D=-1/0,L=0;L<v;L++){var q=h[2*L],R=h[2*L+1];q<w&&(w=q),R<x&&(x=R),q>C&&(C=q),R>D&&(D=R),this._ids[L]=L}for(var G=(w+C)/2,W=(x+D)/2,Y=1/0,j,N,F,ue=0;ue<v;ue++){var Ee=o(G,W,h[2*ue],h[2*ue+1]);Ee<Y&&(j=ue,Y=Ee)}var Z=h[2*j],re=h[2*j+1];Y=1/0;for(var oe=0;oe<v;oe++)if(oe!==j){var ge=o(Z,re,h[2*oe],h[2*oe+1]);ge<Y&&ge>0&&(N=oe,Y=ge)}for(var J=h[2*N],ee=h[2*N+1],_e=1/0,te=0;te<v;te++)if(!(te===j||te===N)){var ke=d(Z,re,J,ee,h[2*te],h[2*te+1]);ke<_e&&(F=te,_e=ke)}var se=h[2*F],he=h[2*F+1];if(_e===1/0){for(var me=0;me<v;me++)this._dists[me]=h[2*me]-h[0]||h[2*me+1]-h[1];y(this._ids,this._dists,0,v-1);for(var Se=new Uint32Array(v),Te=0,X=0,Q=-1/0;X<v;X++){var le=this._ids[X];this._dists[le]>Q&&(Se[Te++]=le,Q=this._dists[le])}this.hull=Se.subarray(0,Te),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(c(Z,re,J,ee,se,he)){var Ie=N,Me=J,nt=ee;N=F,J=se,ee=he,F=Ie,se=Me,he=nt}var Ae=u(Z,re,J,ee,se,he);this._cx=Ae.x,this._cy=Ae.y;for(var xe=0;xe<v;xe++)this._dists[xe]=o(h[2*xe],h[2*xe+1],Ae.x,Ae.y);y(this._ids,this._dists,0,v-1),this._hullStart=j;var Pe=3;b[j]=_[F]=N,b[N]=_[j]=F,b[F]=_[N]=j,S[j]=0,S[N]=1,S[F]=2,T.fill(-1),T[this._hashKey(Z,re)]=j,T[this._hashKey(J,ee)]=N,T[this._hashKey(se,he)]=F,this.trianglesLen=0,this._addTriangle(j,N,F,-1,-1,-1);for(var Re=0,Vt=void 0,$t=void 0;Re<this._ids.length;Re++){var $=this._ids[Re],de=h[2*$],ye=h[2*$+1];if(!(Re>0&&Math.abs(de-Vt)<=n&&Math.abs(ye-$t)<=n)&&(Vt=de,$t=ye,!($===j||$===N||$===F))){for(var ae=0,at=0,pa=this._hashKey(de,ye);at<this._hashSize&&(ae=T[(pa+at)%this._hashSize],!(ae!==-1&&ae!==b[ae]));at++);ae=_[ae];for(var I=ae,V=void 0;V=b[I],!c(de,ye,h[2*I],h[2*I+1],h[2*V],h[2*V+1]);)if(I=V,I===ae){I=-1;break}if(I!==-1){var pe=this._addTriangle(I,$,b[I],-1,-1,S[I]);S[$]=this._legalize(pe+2),S[I]=pe,Pe++;for(var ne=b[I];V=b[ne],c(de,ye,h[2*ne],h[2*ne+1],h[2*V],h[2*V+1]);)pe=this._addTriangle(ne,$,V,S[$],-1,S[ne]),S[$]=this._legalize(pe+2),b[ne]=ne,Pe--,ne=V;if(I===ae)for(;V=_[I],c(de,ye,h[2*V],h[2*V+1],h[2*I],h[2*I+1]);)pe=this._addTriangle(V,$,I,-1,S[I],S[V]),this._legalize(pe+2),S[V]=pe,b[I]=I,Pe--,I=V;this._hullStart=_[$]=I,b[I]=_[ne]=$,b[$]=ne,T[this._hashKey(de,ye)]=$,T[this._hashKey(h[2*I],h[2*I+1])]=I}}}this.hull=new Uint32Array(Pe);for(var it=0,rt=this._hullStart;it<Pe;it++)this.hull[it]=rt,rt=b[rt];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)},i.prototype._hashKey=function(p,h){return Math.floor(r(p-this._cx,h-this._cy)*this._hashSize)%this._hashSize},i.prototype._legalize=function(p){for(var h=this,_=h._triangles,b=h._halfedges,S=h.coords,T=0,v=0;;){var w=b[p],x=p-p%3;if(v=x+(p+2)%3,w===-1){if(T===0)break;p=a[--T];continue}var C=w-w%3,D=x+(p+1)%3,L=C+(w+2)%3,q=_[v],R=_[p],G=_[D],W=_[L],Y=s(S[2*q],S[2*q+1],S[2*R],S[2*R+1],S[2*G],S[2*G+1],S[2*W],S[2*W+1]);if(Y){_[p]=W,_[w]=q;var j=b[L];if(j===-1){var N=this._hullStart;do{if(this._hullTri[N]===L){this._hullTri[N]=p;break}N=this._hullPrev[N]}while(N!==this._hullStart)}this._link(p,j),this._link(w,b[v]),this._link(v,L);var F=C+(w+1)%3;T<a.length&&(a[T++]=F)}else{if(T===0)break;p=a[--T]}}return v},i.prototype._link=function(p,h){this._halfedges[p]=h,h!==-1&&(this._halfedges[h]=p)},i.prototype._addTriangle=function(p,h,_,b,S,T){var v=this.trianglesLen;return this._triangles[v]=p,this._triangles[v+1]=h,this._triangles[v+2]=_,this._link(v,b),this._link(v+1,S),this._link(v+2,T),this.trianglesLen+=3,v};function r(m,p){var h=m/(Math.abs(m)+Math.abs(p));return(p>0?3-h:1+h)/4}function o(m,p,h,_){var b=m-h,S=p-_;return b*b+S*S}function l(m,p,h,_,b,S){var T=(_-p)*(b-m),v=(h-m)*(S-p);return Math.abs(T-v)>=33306690738754716e-32*Math.abs(T+v)?T-v:0}function c(m,p,h,_,b,S){var T=l(b,S,m,p,h,_)||l(m,p,h,_,b,S)||l(h,_,b,S,m,p);return T<0}function s(m,p,h,_,b,S,T,v){var w=m-T,x=p-v,C=h-T,D=_-v,L=b-T,q=S-v,R=w*w+x*x,G=C*C+D*D,W=L*L+q*q;return w*(D*W-G*q)-x*(C*W-G*L)+R*(C*q-D*L)<0}function d(m,p,h,_,b,S){var T=h-m,v=_-p,w=b-m,x=S-p,C=T*T+v*v,D=w*w+x*x,L=.5/(T*x-v*w),q=(x*C-v*D)*L,R=(T*D-w*C)*L;return q*q+R*R}function u(m,p,h,_,b,S){var T=h-m,v=_-p,w=b-m,x=S-p,C=T*T+v*v,D=w*w+x*x,L=.5/(T*x-v*w),q=m+(x*C-v*D)*L,R=p+(T*D-w*C)*L;return{x:q,y:R}}function y(m,p,h,_){if(_-h<=20)for(var b=h+1;b<=_;b++){for(var S=m[b],T=p[S],v=b-1;v>=h&&p[m[v]]>T;)m[v+1]=m[v--];m[v+1]=S}else{var w=h+_>>1,x=h+1,C=_;g(m,w,x),p[m[h]]>p[m[_]]&&g(m,h,_),p[m[x]]>p[m[_]]&&g(m,x,_),p[m[h]]>p[m[x]]&&g(m,h,x);for(var D=m[x],L=p[D];;){do x++;while(p[m[x]]<L);do C--;while(p[m[C]]>L);if(C<x)break;g(m,x,C)}m[h+1]=m[C],m[C]=D,_-x+1>=C-h?(y(m,p,x,_),y(m,p,h,C-1)):(y(m,p,h,C-1),y(m,p,x,_))}}function g(m,p,h){var _=m[p];m[p]=m[h],m[h]=_}function f(m){return m[0]}function k(m){return m[1]}return i})}(Ve)),Ve.exports}var hn;function jr(){return hn||(hn=1,function(e){e.__esModule=!0,e.default=void 0;var t=n(Or());function n(s){return s&&s.__esModule?s:{default:s}}function a(s){return s[0]}function i(s){return s[1]}function r(s){for(var d=s.triangles,u=s.coords,y=0;y<d.length;y+=3){var g=2*d[y],f=2*d[y+1],k=2*d[y+2],m=(u[k]-u[g])*(u[f+1]-u[g+1])-(u[f]-u[g])*(u[k+1]-u[g+1]);if(m>1e-10)return!1}return!0}function o(s,d,u){return[s+Math.sin(s+d)*u,d+Math.cos(s-d)*u]}function l(s,d,u,y){for(var g=s.length,f=new Float64Array(g*2),k=0;k<g;++k){var m=s[k];f[k*2]=d.call(y,m,k,s),f[k*2+1]=u.call(y,m,k,s)}return f}var c=function(){function s(u){var y=new t.default(u);this.inedges=new Int32Array(u.length/2),this._hullIndex=new Int32Array(u.length/2),this.points=y.coords,this._init(y)}var d=s.prototype;return d._init=function(y){var g=y,f=this.points;if(g.hull&&g.hull.length>2&&r(g)){this.collinear=Int32Array.from({length:f.length/2},function(W,Y){return Y}).sort(function(W,Y){return f[2*W]-f[2*Y]||f[2*W+1]-f[2*Y+1]});for(var k=this.collinear[0],m=this.collinear[this.collinear.length-1],p=[f[2*k],f[2*k+1],f[2*m],f[2*m+1]],h=1e-8*Math.sqrt(Math.pow(p[3]-p[1],2)+Math.pow(p[2]-p[0],2)),_=0,b=f.length/2;_<b;++_){var S=o(f[2*_],f[2*_+1],h);f[2*_]=S[0],f[2*_+1]=S[1]}y=new t.default(f)}for(var T=this.halfedges=y.halfedges,v=this.hull=y.hull,w=this.triangles=y.triangles,x=this.inedges.fill(-1),C=this._hullIndex.fill(-1),D=0,L=T.length;D<L;++D){var q=w[D%3===2?D-2:D+1];(T[D]===-1||x[q]===-1)&&(x[q]=D)}for(var R=0,G=v.length;R<G;++R)C[v[R]]=R;v.length<=2&&v.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=v[0],this.triangles[1]=v[1],this.triangles[2]=v[1],x[v[0]]=1,v.length===2&&(x[v[1]]=0))},d.neighbors=function(y){var g=[],f=this.inedges,k=this.hull,m=this._hullIndex,p=this.halfedges,h=this.triangles,_=f[y];if(_===-1)return g;var b=_,S=-1;do{if(S=h[b],g.push(S),b=b%3===2?b-2:b+1,h[b]!==y)break;if(b=p[b],b===-1){var T=k[(m[y]+1)%k.length];T!==S&&g.push(T);break}}while(b!==_);return g},d.find=function(y,g,f){if(f===void 0&&(f=0),y=+y,y!==y||(g=+g,g!==g))return-1;for(var k=f,m;(m=this._step(f,y,g))>=0&&m!==f&&m!==k;)f=m;return m},d._step=function(y,g,f){var k=this.inedges,m=this.points;if(k[y]===-1||!m.length)return(y+1)%(m.length>>1);for(var p=y,h=Math.pow(g-m[y*2],2)+Math.pow(f-m[y*2+1],2),S=this.neighbors(y),_=Array.isArray(S),b=0,S=_?S:S[Symbol.iterator]();;){var T;if(_){if(b>=S.length)break;T=S[b++]}else{if(b=S.next(),b.done)break;T=b.value}var v=T,w=Math.pow(g-m[v*2],2)+Math.pow(f-m[v*2+1],2);w<h&&(h=w,p=v)}return p},s}();e.default=c,c.from=function(s,d,u,y){return d===void 0&&(d=a),u===void 0&&(u=i),new c(l(s,d,u,y))}}(ct)),ct}var Fr=jr();const Vr=pn(Fr),$r=32;class zr{constructor(){M(this,"onMouseLeave",(t,n)=>{this.onMouseMove.cancel();const a=n.activePoints||[];this.onDeactivated(n,a);const i=a.length?a.map(r=>this.getInactiveMutations(n,r)):[];return this.getParentMutation([]).concat(...i)});M(this,"handleMouseMove",(t,n)=>{const a=n.activePoints||[],i=n.parentSVG||ua(t),r=hr(t,i);if(!this.withinBounds(n,r)){this.onDeactivated(n,a);const u=a.length?a.map(y=>this.getInactiveMutations(n,y)):[];return this.getParentMutation([],r,i).concat(...u)}const{points:o=[],index:l}=this.getVoronoiPoints(n,r),c=this.getParentMutation(o,r,i,l);if(a.length&&$a(o,a))return c;this.onActivated(n,o),this.onDeactivated(n,a);const s=o.length?o.map(u=>this.getActiveMutations(n,u)):[],d=a.length?a.map(u=>this.getInactiveMutations(n,u)):[];return c.concat(...d,...s)});M(this,"onMouseMove",ti(this.handleMouseMove,$r,{leading:!0,trailing:!1}))}withinBounds(t,n){const{width:a,height:i,polar:r,origin:o,scale:l}=t,c=qt(t.voronoiPadding),{x:s,y:d}=n;if(r){const u=Math.pow(s-o.x,2)+Math.pow(d-o.y,2),y=Math.max(...l.y.range());return u<Math.pow(y,2)}return s>=c.left&&s<=a-c.right&&d>=c.top&&d<=i-c.bottom}getDatasets(t){const n={x:yt(t.domain.x),y:yt(t.domain.y)},a=P.Children.toArray(t.children),i=(l,c,s)=>{const d=s&&s.type&&s.type.continuous,u=s?s.props&&s.props.style:t.style;return l.map((y,g)=>{const{x:f,y:k,y0:m,x0:p}=za(y),h=(Number(f)+Number(p))/2,_=(Number(k)+Number(m))/2;return Object.assign({_voronoiX:t.voronoiDimension==="y"?n.x:h,_voronoiY:t.voronoiDimension==="x"?n.y:_,eventKey:g,childName:c,continuous:d,style:u},y)})};if(t.data)return i(t.data);const r=l=>{const c=qe(l);return Array.isArray(c)&&c.length>0?c:void 0};return Va(a,(l,c)=>{const d=(l.props||{}).name||c,u=t.voronoiBlacklist||[],y=u.filter(p=>!!p&&typeof p.valueOf()=="string"),f=u.filter(Rr).some(p=>p.test(d));if(!Ba(l)||y.includes(d)||f)return null;const m=(l.type&&De(l.type.getData)?l.type.getData:r)(l.props);return m?i(m,d,l):null},t)}findPoints(t,n){return t.filter(a=>n._voronoiX===a._voronoiX&&n._voronoiY===a._voronoiY)}withinRadius(t,n,a){if(!t)return!1;if(!a)return!0;const{x:i,y:r}=n;return Math.pow(i-t[0],2)+Math.pow(r-t[1],2)<Math.pow(a,2)}getVoronoiPoints(t,n){const a=this.getDatasets(t),i=a.map(s=>{const{x:d,y:u}=Et(t,s);return[d,u]}),o=Vr.from(i).find(n.x,n.y);return{points:this.withinRadius(i[o],n,t.radius)?this.findPoints(a,a[o]):[],index:o}}getActiveMutations(t,n){const{childName:a,continuous:i}=n,{activateData:r,activateLabels:o,labels:l}=t;if(!r&&!o)return[];const c=r?["data"]:[],s=l&&!o?c:c.concat("labels");return Zt(s)?[]:s.map(d=>{const u=i===!0&&d==="data"?"all":n.eventKey;return{childName:a,eventKey:u,target:d,mutation:()=>({active:!0})}})}getInactiveMutations(t,n){const{childName:a,continuous:i}=n,{activateData:r,activateLabels:o,labels:l}=t;if(!r&&!o)return[];const c=r?["data"]:[],s=l&&!o?c:c.concat("labels");return Zt(s)?[]:s.map(d=>{const u=i&&d==="data"?"all":n.eventKey;return{childName:a,eventKey:u,target:d,mutation:()=>null}})}getParentMutation(t,n,a,i){return[{target:"parent",eventKey:"parent",mutation:()=>({activePoints:t,mousePosition:n,parentSVG:a,vIndex:i})}]}onActivated(t,n){De(t.onActivated)&&t.onActivated(n,t)}onDeactivated(t,n){De(t.onDeactivated)&&t.onDeactivated(n,t)}}const je=new zr,ha={activateData:!0,activateLabels:!0,labelComponent:P.createElement(Fe,null),voronoiPadding:5},mn=e=>Wa(e,["_x","_x1","_x0","_y","_y1","_y0"]),Br=e=>{const t={...ha,...e},{children:n}=t,a=()=>{const{horizontal:s,voronoiDimension:d}=t;return!s||!d?d:d==="x"?"y":"x"},i=(s,d)=>{const{mousePosition:u,mouseFollowTooltips:y}=t,g=a(),f=mn(d[0]),k=Et(t,f);let m=y?u:void 0;if(!g||d.length<2)return{...k,center:z({},s.center,m)};const p=g==="y"?u.x:k.x,h=g==="x"?u.y:k.y;return m=y?u:{x:p,y:h},{x:p,y:h,center:z({},s.center,m)}},r=(s,d)=>{const{labels:u,labelComponent:y,theme:g}=t,f=y.props||{},k=g&&g.voronoi&&g.voronoi.style?g.voronoi.style:{},m=d==="flyout"?f.flyoutStyle:f.style;return s.reduce((p,h,_)=>{const b=z({},f,{datum:h,active:!0}),S=De(u)?u(b):void 0,T=S!==void 0?`${S}`.split(`
`):[],v=h.style&&h.style[d]||{},w=Array.isArray(m)?m[_]:m,x=fe(z({},w,v,k[d]),b),C=T.length?T.map(()=>x):[x];return p.concat(C)},[])},o=s=>{const{voronoiDimension:d,horizontal:u,mouseFollowTooltips:y}=t,g=mn(s[0]),f=d&&s.length>1,k=g._y1!==void 0?g._y1:g._y,m=k<0?"left":"right",p=k<0?"bottom":"top";return{orientation:y?void 0:u?m:p,pointerLength:f?0:void 0,constrainToVisibleArea:f||y?!0:void 0}},l=s=>{const{labels:d,scale:u,labelComponent:y,theme:g,width:f,height:k}=t,m=y.props||{},p=s.reduce((C,D)=>{const L=z({},m,{datum:D,active:!0}),q=De(d)?d(L):null;return q==null?C:C.concat(`${q}`.split(`
`))},[]),{childName:h,eventKey:_,style:b,continuous:S,...T}=s[0],v=t.name===h?h:`${t.name}-${h}`,w=z({key:`${v}-${_}-voronoi-tooltip`,id:`${v}-${_}-voronoi-tooltip`,active:!0,renderInPortal:!1,activePoints:s,datum:T,scale:u,theme:g},m,{text:p,width:f,height:k,style:r(s,"labels"),flyoutStyle:r(s,"flyout")[0]},o(s)),x=i(w,s);return z({},x,w)},c=()=>{const{labels:s,activePoints:d,labelComponent:u}=t;if(!s)return null;if(Array.isArray(d)&&d.length){const y=l(d),{text:g}=y;return(Array.isArray(g)?g.filter(Boolean).length:g)?P.cloneElement(u,y):null}return null};return{props:t,children:[...P.Children.toArray(n),c()]}},Ot=e=>{const{props:t,children:n}=Br(e);return P.createElement(Lt,t,n)};Ot.role="container";Ot.defaultEvents=e=>{const t={...ha,...e},n=(a,i)=>(r,o,l,c)=>t.disable?{}:a(r,{...t,...o},l,c);return[{target:"parent",eventHandlers:{onMouseLeave:n(je.onMouseLeave),onTouchCancel:n(je.onMouseLeave),onMouseMove:n(je.onMouseMove),onTouchMove:n(je.onMouseMove)}},{target:"data",eventHandlers:t.disable?{}:{onMouseOver:()=>null,onMouseOut:()=>null,onMouseMove:()=>null}}]};const Wr=(e,t)=>t.bubbleProperty?"circle":e.symbol||t.symbol,Yr=(e,t)=>{const{data:n,z:a,maxBubbleSize:i,minBubbleSize:r}=t,o=n.map(p=>p[a]),l=Math.min(...o),c=Math.max(...o),d=i||(()=>{const p=Math.min(...Object.values(qt(t.padding)));return Math.max(p,5)})(),u=r||d*.1;if(c===l)return Math.max(u,1);const y=Math.PI*Math.pow(d,2),g=Math.PI*Math.pow(u,2),f=(e[a]-l)/(c-l)*y,k=Math.max(f,g),m=Math.sqrt(k/Math.PI);return Math.max(m,1)},Xr=(e,t)=>{const{size:n,z:a}=t;return e.size?typeof e.size=="function"?e.size:Math.max(e.size,1):typeof t.size=="function"?n:e[a]?Yr(e,t):Math.max(n||0,1)},Hr=e=>{const t=Tn(e,"scatter"),n=xn(e.style,t),a={x:ze(e,"x"),y:ze(e,"y")},i={x:dt(e,"x"),y:dt(e,"y")},r={x:Be(e,"x").domain(i.x).range(e.horizontal?a.y:a.x),y:Be(e,"y").domain(i.y).range(e.horizontal?a.x:a.y)},o=e.polar?e.origin||Pn(e):void 0,l=e.bubbleProperty||"z";let c=qe(e);return c=Ya(c,i),{domain:i,data:c,scale:r,style:n,origin:o,z:l}},Kr=(e,t)=>{const n=Le(e,t,"scatter"),a=Object.assign({},n,Hr(n)),{data:i,domain:r,events:o,height:l,origin:c,padding:s,polar:d,scale:u,name:y,sharedEvents:g,standalone:f,style:k,theme:m,width:p,labels:h,horizontal:_,disableInlineStyles:b}=a,S={parent:{style:k.parent,scale:u,domain:r,data:i,height:l,width:p,standalone:f,theme:m,origin:c,polar:d,padding:s,name:y,horizontal:_}};return i.reduce((T,v,w)=>{const x=kn(v.eventKey)?w:v.eventKey,{x:C,y:D}=Et(a,v),L={x:C,y:D,datum:v,data:i,index:w,scale:u,polar:d,origin:c,horizontal:_,size:Xr(v,a),symbol:Wr(v,a),style:b?{}:k.data,disableInlineStyles:b};T[x]={data:L};const q=bn(a,v,w);return(q!=null||h&&(o||g))&&(T[x].labels=Sn(a,w)),T},S)},dn={width:450,height:300,padding:50,size:3,symbol:"circle"};class ie extends P.Component{static getBaseProps(t){return Kr(t,dn)}shouldAnimate(){return!!this.props.animate}render(){const{animationWhitelist:t,role:n}=ma,a=Le(this.props,dn,n);if(this.shouldAnimate())return this.animateComponent(a,t);const i=this.renderData(a),r=a.standalone?this.renderContainer(a.containerComponent,i):i;return Cn(r,a)}}M(ie,"animationWhitelist",["data","domain","height","maxBubbleSize","padding","samples","size","style","width"]),M(ie,"displayName","VictoryScatter"),M(ie,"role","scatter"),M(ie,"defaultTransitions",ii()),M(ie,"defaultProps",{containerComponent:P.createElement(Lt,null),dataComponent:P.createElement(pr,null),labelComponent:P.createElement(Dt,null),groupComponent:P.createElement("g",null),samples:50,sortOrder:"ascending",standalone:!0,theme:Pt.grayscale}),M(ie,"getDomain",dt),M(ie,"getData",qe),M(ie,"expectedComponents",["dataComponent","labelComponent","groupComponent","containerComponent"]);const ma=wn(ie);function Ur(e,t,n=fn,a){if(e===void 0)return _a;const i=Xa(t.map(r=>new Date(r)),[0,e]);for(let r=Math.max(Math.ceil(e/ba),zt);r>0;r--)if(i.ticks(r).map(a).map(s=>s.length).reduce((s,d)=>s+d*n+va,0)<e)return r;return zt}function Gr(e,t,n,a,i,r,o=c=>c.toString(),l=fn){return B.useMemo(()=>{const c=Ua(e),s=Math.max(...c.map((k,m)=>r(k,m,c).length)),d=Math.min(s,n),u=Math.max(d*l,Sa),y=Ga(e,o).map(k=>Number.parseInt(k)),g={...a,left:(a.left??0)+u,right:Math.max(a.right??0,ka)},f=Ur(t-g.left-g.right,y,l,i);return{paddingWithLabel:g,maxYTextLength:d,xTickCount:f}},[a,e,n,r,t,i,o])}const jt=B.memo(({theme:e,height:t=0,metricLineWidth:n=2,padding:a,onClick:i})=>P.createElement("div",{style:{height:t-((a==null?void 0:a.bottom)||0),width:n,background:e==null?void 0:e.line.metricLineColor},onClick:i}));jt.__docgenInfo={description:"",methods:[],displayName:"MetricLine",props:{theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
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
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},padding:{required:!1,tsType:{name:"BlockProps"},description:""},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},metricLineWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},xScale:{required:!1,tsType:{name:"ScaleName"},description:""},yScale:{required:!1,tsType:{name:"ScaleName"},description:""},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLDivElement"}],raw:"MouseEventHandler<HTMLDivElement>"},description:""}}};const Zr="_disableAnimation_le06d_1",Jr={disableAnimation:Zr},da=({theme:e,padding:t,height:n,showTotal:a,totalLabel:i,metricLineWidth:r,lineComponent:o=jt,tooltipContentComponent:l=vn,activeRecord:c,enrichedData:s,data:d,xScale:u,otherLabel:y,tooltipDateFormat:g,onClick:f})=>{const k=B.useCallback(m=>{if(f)if(s&&s[0]){const[p]=d||[];f(Ha(m),s[0],p)}else console.error("ChartTooltip: points are not defined")},[d,f,s]);return P.createElement(Za,{content:P.createElement(l,{showTotal:a,totalLabel:i,enrichedData:s,activeRecord:c,theme:e,otherLabel:y,xScale:u,tooltipDateFormat:g}),placement:"bottom",shouldLimitSize:!0,defaultVisible:!0,overlayClassName:Jr.disableAnimation},P.createElement(o,{onClick:k,height:n,metricLineWidth:r,theme:e,padding:t}))},Qr=B.memo(da);da.__docgenInfo={description:"",methods:[],displayName:"GenericChartTooltip",props:{theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
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
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},lineComponent:{required:!1,tsType:{name:"FC",elements:[{name:"MetricLineProps"}],raw:"FC<MetricLineProps>"},description:"",defaultValue:{value:`memo(({ theme, height = 0, metricLineWidth = 2, padding, onClick }) => (
  <div
    style={{
      height: height - (padding?.bottom || 0),
      width: metricLineWidth,
      background: theme?.line.metricLineColor
    }}
    onClick={onClick}
  />
))`,computed:!0}},tooltipContentComponent:{required:!1,tsType:{name:"FC",elements:[{name:"signature",type:"object",raw:`{
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
})`,computed:!0}},top:{required:!1,tsType:{name:"number"},description:""},left:{required:!1,tsType:{name:"number"},description:""},x:{required:!1,tsType:{name:"number"},description:""},y:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},width:{required:!1,tsType:{name:"number"},description:""},totalLabel:{required:!1,tsType:{name:"string"},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""},metricLineWidth:{required:!1,tsType:{name:"number"},description:""},activeRecord:{required:!0,tsType:{name:"IChartDataPoint",elements:[{name:"T"}],raw:"IChartDataPoint<T>"},description:""},enrichedData:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:`(Pick<
  IStackedChartDataPoint,
  'name' | 'color' | 'title' | 'group'
> &
  IChartDataPoint<T> & { childName?: string })[]`},description:""},data:{required:!1,tsType:{name:"Array",elements:[{name:"IStackedChartDataPoint",elements:[{name:"T"}],raw:"IStackedChartDataPoint<T>"}],raw:"IStackedChartDataPoint<T>[]"},description:""},padding:{required:!1,tsType:{name:"BlockProps"},description:""},xScale:{required:!1,tsType:{name:"ScaleName"},description:""},otherLabel:{required:!1,tsType:{name:"string"},description:""},tooltipDateFormat:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: number | Date) => string",signature:{arguments:[{type:{name:"union",raw:"number | Date",elements:[{name:"number"},{name:"Date"}]},name:"date"}],return:{name:"string"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"T"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"T"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"T"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}}},description:""}}};const eo="_foreignObjectContainer_9vt51_1",to={foreignObjectContainer:eo},Ft=B.memo(({tooltipComponent:e=Qr,lineComponent:t=jt,tooltipContentComponent:n=vn,height:a=0,width:i=0,x:r=0,y:o=0,metricLineWidth:l=2,theme:c,activePoints:s=[],padding:d,xScale:u,yScale:y,showTotal:g,totalLabel:f,otherLabel:k,datum:m,tooltipDateFormat:p,onClick:h})=>{const _=B.useRef(null),[{top:b,left:S},T]=B.useState({}),v=B.useMemo(()=>s.map(x=>Jt.get(x,ut)),[s]),w=B.useMemo(()=>s.map(x=>{const C=Jt.get(x,ut)||{};return{...x,...C,color:C.color||x.color}}).filter(x=>x&&(x.name||x.title)&&x.childName!==gn),[s]);return B.useLayoutEffect(()=>{var D;const{top:x,left:C}=((D=_.current)==null?void 0:D.getBoundingClientRect())??{top:0,left:0};T({top:x,left:C})},[r]),P.createElement("foreignObject",{ref:_,x:r,y:0,width:0,height:0,className:to.foreignObjectContainer},b&&S?P.createElement(e,{showTotal:g,totalLabel:f,top:b,left:S,x:b,y:o,height:a,width:i,lineComponent:t,tooltipContentComponent:n,metricLineWidth:l,activeRecord:m,enrichedData:w,data:v,theme:c,padding:d,xScale:u,yScale:y,otherLabel:k,tooltipDateFormat:p,onClick:h}):null)});Ft.displayName="ChartTooltipWrapper";Ft.__docgenInfo={description:"",methods:[],displayName:"ChartTooltipWrapper",props:{theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
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
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},metricLineWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},tooltipComponent:{required:!1,tsType:{name:"FC",elements:[{name:"signature",type:"object",raw:`{
  theme?: CustomTheme,
  lineComponent?: FC<MetricLineProps>,
  tooltipContentComponent?: FC<ChartTooltipContentProps>,
  top?: number,
  left?: number,
  x?: number,
  y?: number,
  height?: number,
  width?: number,
  totalLabel?: string,
  showTotal?: boolean,
  metricLineWidth?: number,
  activeRecord: IChartDataPoint<T>,
  enrichedData?: StackedChartTooltipPointsData<T>,
  data?: IStackedChartData<T>,
  padding?: BlockProps,
  xScale?: ScaleName,
  otherLabel?: string,
  tooltipDateFormat?: (date: number | Date) => string,
  onClick?: TChartEventCallback<T>
}`,signature:{properties:[{key:"theme",value:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
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
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}],required:!1}},{key:"lineComponent",value:{name:"FC",elements:[{name:"MetricLineProps"}],raw:"FC<MetricLineProps>",required:!1}},{key:"tooltipContentComponent",value:{name:"FC",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}],required:!1}},{key:"otherLabel",value:{name:"string",required:!1}},{key:"xScale",value:{name:"ScaleName",required:!1}},{key:"maxTooltipItems",value:{name:"number",required:!1}},{key:"totalLabel",value:{name:"string",required:!1}},{key:"showTotal",value:{name:"boolean",required:!1}},{key:"tooltipDateFormat",value:{name:"signature",type:"function",raw:"(date: number | Date, supposedFormat: string) => string",signature:{arguments:[{type:{name:"union",raw:"number | Date",elements:[{name:"number"},{name:"Date"}]},name:"date"},{type:{name:"string"},name:"supposedFormat"}],return:{name:"string"}},required:!1}}]}}],raw:"FC<ChartTooltipContentProps>",required:!1}},{key:"top",value:{name:"number",required:!1}},{key:"left",value:{name:"number",required:!1}},{key:"x",value:{name:"number",required:!1}},{key:"y",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"totalLabel",value:{name:"string",required:!1}},{key:"showTotal",value:{name:"boolean",required:!1}},{key:"metricLineWidth",value:{name:"number",required:!1}},{key:"activeRecord",value:{name:"IChartDataPoint",elements:[{name:"T"}],raw:"IChartDataPoint<T>",required:!0}},{key:"enrichedData",value:{name:"Array",elements:[{name:"unknown"}],raw:`(Pick<
  IStackedChartDataPoint,
  'name' | 'color' | 'title' | 'group'
> &
  IChartDataPoint<T> & { childName?: string })[]`,required:!1}},{key:"data",value:{name:"Array",elements:[{name:"IStackedChartDataPoint",elements:[{name:"T"}],raw:"IStackedChartDataPoint<T>"}],raw:"IStackedChartDataPoint<T>[]",required:!1}},{key:"padding",value:{name:"BlockProps",required:!1}},{key:"xScale",value:{name:"ScaleName",required:!1}},{key:"otherLabel",value:{name:"string",required:!1}},{key:"tooltipDateFormat",value:{name:"signature",type:"function",raw:"(date: number | Date) => string",signature:{arguments:[{type:{name:"union",raw:"number | Date",elements:[{name:"number"},{name:"Date"}]},name:"date"}],return:{name:"string"}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"T"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"T"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"T"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}},required:!1}}]}}],raw:"FC<ChartTooltipProps>"},description:"",defaultValue:{value:"memo(GenericChartTooltip)",computed:!0}},lineComponent:{required:!1,tsType:{name:"FC",elements:[{name:"MetricLineProps"}],raw:"FC<MetricLineProps>"},description:"",defaultValue:{value:`memo(({ theme, height = 0, metricLineWidth = 2, padding, onClick }) => (
  <div
    style={{
      height: height - (padding?.bottom || 0),
      width: metricLineWidth,
      background: theme?.line.metricLineColor
    }}
    onClick={onClick}
  />
))`,computed:!0}},tooltipContentComponent:{required:!1,tsType:{name:"FC",elements:[{name:"signature",type:"object",raw:`{
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
})`,computed:!0}},padding:{required:!1,tsType:{name:"BlockProps"},description:""},xScale:{required:!1,tsType:{name:"ScaleName"},description:""},yScale:{required:!1,tsType:{name:"ScaleName"},description:""},totalLabel:{required:!1,tsType:{name:"string"},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""},otherLabel:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"T"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"T"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"T"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}}},description:""},tooltipDateFormat:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: number | Date) => string",signature:{arguments:[{type:{name:"union",raw:"number | Date",elements:[{name:"number"},{name:"Date"}]},name:"date"}],return:{name:"string"}}},description:""},height:{defaultValue:{value:"0",computed:!1},required:!1},width:{defaultValue:{value:"0",computed:!1},required:!1},x:{defaultValue:{value:"0",computed:!1},required:!1},y:{defaultValue:{value:"0",computed:!1},required:!1},activePoints:{defaultValue:{value:"[]",computed:!1},required:!1}}};const no=5;function yn(e,t){return`${e}-${t}`}const ao="_svgGradient_nawfu_1",io={svgGradient:ao},ro=e=>e;function ya({data:e,padding:t,lineWidth:n,pointSize:a=0,xMax:i,xMin:r,yMax:o,yMin:l,showTotal:c,totalLabel:s,width:d=400,height:u=400,xScale:y="linear",yScale:g="linear",metricLineWidth:f,colors:k,theme:m,standalone:p=!0,minTickLabelYLength:h=Ta,yFixLabelOverlap:_,yTickCount:b,xTickFormat:S,yTickFormat:T,showTooltip:v,gradient:w,maxLinesForGradient:x=no,tooltipComponent:C,lineComponent:D,tooltipContentComponent:L,chartAfter:q,domain:R,otherLabel:G,tickLetterSize:W,tooltipDateFormat:Y,onClickData:j,onHoverData:N,onLeaveData:F,onMoveData:ue}){var Se,Te;const Ee=Ka(void 0,N,F,ue),Z=wa(k,m),re=xa(((Se=Z.line)==null?void 0:Se.padding)||((Te=Z.chart)==null?void 0:Te.padding)),oe=B.useMemo(()=>({...re,...t}),[t,re]),ge=B.useMemo(Ja,[]),J=B.useMemo(()=>e.map(X=>({...X,data:X.data.map(Q=>({...Q,[ut]:X}))})),[e]),ee=La(),{xTickFormatWithLocale:_e,yTickFormatWithLocale:te}=B.useMemo(()=>({xTickFormatWithLocale:S?qa(S):Ht(ee),yTickFormatWithLocale:T||Ht(ee)}),[ee,S,T]),ke=w&&J.length<=x,{paddingWithLabel:se,maxYTextLength:he,xTickCount:me}=Gr(J,d,h,oe,_e,te,X=>X.toString(),W);return P.createElement(P.Fragment,null,ke&&P.createElement("svg",{className:io.svgGradient},P.createElement("defs",null,J.map(({color:X},Q)=>{const le=X||Xt(Z.line.colorScale,Q);return P.createElement("linearGradient",{id:`${yn(ge,Q)}`,x1:"0",x2:"0",y1:"1",y2:"0",key:Q},P.createElement("stop",{offset:"0",stopOpacity:0,stopColor:le}),P.createElement("stop",{offset:"100%",stopOpacity:.4,stopColor:le}))}))),P.createElement(Ea,{containerComponent:v?P.createElement(Ot,{voronoiDimension:"x",labels:ro,labelComponent:P.createElement(Ft,{totalLabel:s,showTotal:c,tooltipComponent:C,lineComponent:D,tooltipContentComponent:L,metricLineWidth:f,padding:se,xScale:y,yScale:g,otherLabel:G,tooltipDateFormat:Y,onClick:j})}):void 0,width:d,height:u,theme:Z,padding:se,domain:R,maxDomain:{x:i||void 0,y:o||void 0},minDomain:{x:r||void 0,y:l||void 0},scale:{x:y,y:g},events:Ee,standalone:p,horizontal:!1},P.createElement(Kt,{tickFormat:_e,tickCount:me,axisComponent:P.createElement(P.Fragment,null)}),P.createElement(Kt,{dependentAxis:!0,tickLabelComponent:P.createElement(Ia,{maxLength:he}),fixLabelOverlap:_??!0,tickFormat:te,tickCount:b}),J.map(({name:X,data:Q,color:le},Ie)=>{const Me=le||Xt(Z.line.colorScale,Ie);return[P.createElement(wr,{key:X,x:Wt,y:Bt,data:Q,style:{data:{fill:ke?`url(#${yn(ge,Ie)})`:"none",stroke:Me,strokeWidth:n}}}),a?P.createElement(ma,{name:gn,key:X,data:Q,x:Wt,y:Bt,size:nt=>nt.active?a*1.5:a,style:{data:{fill:Me}}}):null]}),q))}const So=B.memo(ya);ya.__docgenInfo={description:"",methods:[],displayName:"GenericLineChart",props:{padding:{required:!1,tsType:{name:"BlockProps"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"400",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"400",computed:!1}},standalone:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
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
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"IStackedChartDataPoint",elements:[{name:"T"}],raw:"IStackedChartDataPoint<T>"}],raw:"IStackedChartDataPoint<T>[]"},description:""},xMin:{required:!1,tsType:{name:"number"},description:""},xMax:{required:!1,tsType:{name:"number"},description:""},yMin:{required:!1,tsType:{name:"number"},description:""},yMax:{required:!1,tsType:{name:"number"},description:""},totalLabel:{required:!1,tsType:{name:"string"},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""},lineWidth:{required:!1,tsType:{name:"number"},description:""},pointSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},xScale:{required:!1,tsType:{name:"ScaleName"},description:"",defaultValue:{value:"'linear'",computed:!1}},yScale:{required:!1,tsType:{name:"ScaleName"},description:"",defaultValue:{value:"'linear'",computed:!1}},chartAfter:{required:!1,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""},minTickLabelYLength:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},yFixLabelOverlap:{required:!1,tsType:{name:"boolean"},description:""},xTickFormat:{required:!1,tsType:{name:"signature",type:"function",raw:"(tick: any, index: number, ticks: any[], supposedFormat?: string) => string",signature:{arguments:[{type:{name:"any"},name:"tick"},{type:{name:"number"},name:"index"},{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"ticks"},{type:{name:"string"},name:"supposedFormat"}],return:{name:"string"}}},description:""},yTickFormat:{required:!1,tsType:{name:"signature",type:"function",raw:"(tick: any, index: number, ticks: any[]) => string",signature:{arguments:[{type:{name:"any"},name:"tick"},{type:{name:"number"},name:"index"},{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"ticks"}],return:{name:"string"}}},description:""},yTickCount:{required:!1,tsType:{name:"number"},description:""},showTooltip:{required:!1,tsType:{name:"boolean"},description:""},gradient:{required:!1,tsType:{name:"boolean"},description:""},maxLinesForGradient:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},domain:{required:!1,tsType:{name:"DomainPropType"},description:""},otherLabel:{required:!1,tsType:{name:"string"},description:""},tickLetterSize:{required:!1,tsType:{name:"number"},description:""},onClickData:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"T"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"T"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"T"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}}},description:""},onHoverData:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"T"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"T"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"T"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}}},description:""},onLeaveData:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"T"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"T"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"T"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}}},description:""},onMoveData:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"T"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"T"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"T"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}}},description:""}}};export{So as L};
