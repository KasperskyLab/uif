import{r as v,w as Ps,R as m,a1 as Bs,a2 as Ha,ch as to,a0 as be,a3 as Ya,H as L,j as je,ag as ro,d as Us,k as X,aV as jn,e as na,g as et,ci as ta,cj as ra,U as W,h as nt,D as tt,l as aa,a as ao,n as Ls,ak as Tt,T as on,y as ia,S as Nt,b8 as oa,cc as Vs,L as la,ck as jt,cl as sa,cm as $s,cn as io,c7 as Ws,co as Hs,c6 as ua,cp as oo,cq as lo,cg as Ys,cr as zs,cs as Gs,ct as Ks,b6 as Zs,aT as Js,cu as Xs,A as Qs,Z as eu,b2 as nu,u as ma,aa as tu}from"./iframe-zz6a49H8.js";import{t as ru}from"./ArrowRight-DPBBrE_M.js";import{T as xt,i as so,r as uo,a as mo,b as au,c as iu,d as ou,e as lu}from"./Table-C2xM44ZW.js";import{g as po,C as Nn}from"./Checkbox-CLDGkQjT.js";import{g as su,R as uu}from"./Radio-Be_5Z3PZ.js";import{P as V}from"./input-Dg6A0g4J.js";import{I as pa}from"./Icon-BdnUIR-w.js";import{u as tn}from"./useLocalization-CR8m5dji.js";import{r as co,q as mu,E as za}from"./type-CR-gS43P.js";import{L as le}from"./Locale-3RTKV40-.js";import{L as yo}from"./Loader-Y1gOuUZF.js";import{t as pu}from"./ArrowDownSolid-DU27KX-r.js";import{o as du}from"./ArrowRightSolid-6Unlqm7I.js";import{D as ge,s as cu}from"./Dropdown-D5otA5yN.js";import{u as rt}from"./useTranslation-7a9748wG.js";import{c as yu}from"./imaskDateOptionsGenerator-wBwCAmst.js";import{v as fo}from"./v4-BoP187Zn.js";import{T as fu,P as gu}from"./Pagination-78RDIjDb.js";import{T as Qt}from"./TextReducer-CXi1K97e.js";import{E as bu}from"./ExpandableText-CCtZtlav.js";import{a as da}from"./_getTag-IxJI3cV3.js";import{s as go}from"./shouldForwardProp-Cdy-RLhZ.js";import{u as hu}from"./useImmutableRef-owuA66Vn.js";import{u as vu}from"./useIntersectionChildren-B_rui53K.js";import{B as rn,a as Fu}from"./Button-Djh220XQ.js";import{w as wu,V as Ou,W as Mt,X as ku,Y as qu,Z as Tu,_ as bo,$ as ho,a0 as Ga,a1 as xu,M as Du,f as Eu,q as Su}from"./index-BDzolQnr.js";import{t as Ka}from"./Menu2-gmgzxp5q.js";import{I as Ru}from"./Indicator-DNWfFabI.js";import{T as Pt}from"./Textbox-O3s0uqSG.js";import{S as ca,s as Cu}from"./Search-D82BV3EU.js";import{I as Za}from"./IconSearch-DTlFALI4.js";import{a as ya}from"./typesHelpers-tpz7Of7L.js";import{C as _u}from"./Chip-Cy8tqxyi.js";import{S as vo}from"./Sidebar-BShqmRdS.js";import{T as er}from"./Tabs-UMVvaRzt.js";import{D as Au}from"./Divider-DNO5OI2y.js";import{F as zn}from"./Field-C2ORP2lZ.js";import{S as Dt}from"./Select-AFVn7dC3.js";import{R as Iu}from"./RangePicker-CAPN7Kop.js";import{C as Ur}from"./Calendar-CDnpIhMK.js";import{G as Nu}from"./Grid-Buhf4xpe.js";import{S as ju}from"./SegmentedButton-RLIkkpaw.js";import{C as Mu}from"./Card-CG7TF_ol.js";import{o as Pu}from"./Plus-C59NrE5b.js";//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Fo;function A(){return Fo.apply(null,arguments)}function Bu(e){Fo=e}function Ce(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function yn(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function z(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function fa(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(z(e,n))return!1;return!0}function Oe(e){return e===void 0}function Ge(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function at(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function wo(e,n){var t=[],r,a=e.length;for(r=0;r<a;++r)t.push(n(e[r],r));return t}function Qe(e,n){for(var t in n)z(n,t)&&(e[t]=n[t]);return z(n,"toString")&&(e.toString=n.toString),z(n,"valueOf")&&(e.valueOf=n.valueOf),e}function Pe(e,n,t,r){return Wo(e,n,t,r,!0).utc()}function Uu(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function $(e){return e._pf==null&&(e._pf=Uu()),e._pf}var Lr;Array.prototype.some?Lr=Array.prototype.some:Lr=function(e){var n=Object(this),t=n.length>>>0,r;for(r=0;r<t;r++)if(r in n&&e.call(this,n[r],r,n))return!0;return!1};function ga(e){var n=null,t=!1,r=e._d&&!isNaN(e._d.getTime());if(r&&(n=$(e),t=Lr.call(n.parsedDateParts,function(a){return a!=null}),r=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&t),e._strict&&(r=r&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r;return e._isValid}function Bt(e){var n=Pe(NaN);return e!=null?Qe($(n),e):$(n).userInvalidated=!0,n}var Ja=A.momentProperties=[],nr=!1;function ba(e,n){var t,r,a,i=Ja.length;if(Oe(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),Oe(n._i)||(e._i=n._i),Oe(n._f)||(e._f=n._f),Oe(n._l)||(e._l=n._l),Oe(n._strict)||(e._strict=n._strict),Oe(n._tzm)||(e._tzm=n._tzm),Oe(n._isUTC)||(e._isUTC=n._isUTC),Oe(n._offset)||(e._offset=n._offset),Oe(n._pf)||(e._pf=$(n)),Oe(n._locale)||(e._locale=n._locale),i>0)for(t=0;t<i;t++)r=Ja[t],a=n[r],Oe(a)||(e[r]=a);return e}function it(e){ba(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),nr===!1&&(nr=!0,A.updateOffset(this),nr=!1)}function _e(e){return e instanceof it||e!=null&&e._isAMomentObject!=null}function Oo(e){A.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function De(e,n){var t=!0;return Qe(function(){if(A.deprecationHandler!=null&&A.deprecationHandler(null,e),t){var r=[],a,i,l,o=arguments.length;for(i=0;i<o;i++){if(a="",typeof arguments[i]=="object"){a+=`
[`+i+"] ";for(l in arguments[0])z(arguments[0],l)&&(a+=l+": "+arguments[0][l]+", ");a=a.slice(0,-2)}else a=arguments[i];r.push(a)}Oo(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),t=!1}return n.apply(this,arguments)},n)}var Xa={};function ko(e,n){A.deprecationHandler!=null&&A.deprecationHandler(e,n),Xa[e]||(Oo(n),Xa[e]=!0)}A.suppressDeprecationWarnings=!1;A.deprecationHandler=null;function Be(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Lu(e){var n,t;for(t in e)z(e,t)&&(n=e[t],Be(n)?this[t]=n:this["_"+t]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Vr(e,n){var t=Qe({},e),r;for(r in n)z(n,r)&&(yn(e[r])&&yn(n[r])?(t[r]={},Qe(t[r],e[r]),Qe(t[r],n[r])):n[r]!=null?t[r]=n[r]:delete t[r]);for(r in e)z(e,r)&&!z(n,r)&&yn(e[r])&&(t[r]=Qe({},t[r]));return t}function ha(e){e!=null&&this.set(e)}var $r;Object.keys?$r=Object.keys:$r=function(e){var n,t=[];for(n in e)z(e,n)&&t.push(n);return t};var Vu={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function $u(e,n,t){var r=this._calendar[e]||this._calendar.sameElse;return Be(r)?r.call(n,t):r}function Me(e,n,t){var r=""+Math.abs(e),a=n-r.length,i=e>=0;return(i?t?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+r}var va=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,dt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,tr={},Rn={};function P(e,n,t,r){var a=r;typeof r=="string"&&(a=function(){return this[r]()}),e&&(Rn[e]=a),n&&(Rn[n[0]]=function(){return Me(a.apply(this,arguments),n[1],n[2])}),t&&(Rn[t]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function Wu(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Hu(e){var n=e.match(va),t,r;for(t=0,r=n.length;t<r;t++)Rn[n[t]]?n[t]=Rn[n[t]]:n[t]=Wu(n[t]);return function(a){var i="",l;for(l=0;l<r;l++)i+=Be(n[l])?n[l].call(a,e):n[l];return i}}function ht(e,n){return e.isValid()?(n=qo(n,e.localeData()),tr[n]=tr[n]||Hu(n),tr[n](e)):e.localeData().invalidDate()}function qo(e,n){var t=5;function r(a){return n.longDateFormat(a)||a}for(dt.lastIndex=0;t>=0&&dt.test(e);)e=e.replace(dt,r),dt.lastIndex=0,t-=1;return e}var Yu={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function zu(e){var n=this._longDateFormat[e],t=this._longDateFormat[e.toUpperCase()];return n||!t?n:(this._longDateFormat[e]=t.match(va).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var Gu="Invalid date";function Ku(){return this._invalidDate}var Zu="%d",Ju=/\d{1,2}/;function Xu(e){return this._ordinal.replace("%d",e)}var Qu={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function em(e,n,t,r){var a=this._relativeTime[t];return Be(a)?a(e,n,t,r):a.replace(/%d/i,e)}function nm(e,n){var t=this._relativeTime[e>0?"future":"past"];return Be(t)?t(n):t.replace(/%s/i,n)}var Qa={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Ee(e){return typeof e=="string"?Qa[e]||Qa[e.toLowerCase()]:void 0}function Fa(e){var n={},t,r;for(r in e)z(e,r)&&(t=Ee(r),t&&(n[t]=e[r]));return n}var tm={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function rm(e){var n=[],t;for(t in e)z(e,t)&&n.push({unit:t,priority:tm[t]});return n.sort(function(r,a){return r.priority-a.priority}),n}var To=/\d/,Te=/\d\d/,xo=/\d{3}/,wa=/\d{4}/,Ut=/[+-]?\d{6}/,re=/\d\d?/,Do=/\d\d\d\d?/,Eo=/\d\d\d\d\d\d?/,Lt=/\d{1,3}/,Oa=/\d{1,4}/,Vt=/[+-]?\d{1,6}/,Mn=/\d+/,$t=/[+-]?\d+/,am=/Z|[+-]\d\d:?\d\d/gi,Wt=/Z|[+-]\d\d(?::?\d\d)?/gi,im=/[+-]?\d+(\.\d{1,3})?/,ot=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Pn=/^[1-9]\d?/,ka=/^([1-9]\d|\d)/,Et;Et={};function N(e,n,t){Et[e]=Be(n)?n:function(r,a){return r&&t?t:n}}function om(e,n){return z(Et,e)?Et[e](n._strict,n._locale):new RegExp(lm(e))}function lm(e){return Ye(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,t,r,a,i){return t||r||a||i}))}function Ye(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function xe(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function H(e){var n=+e,t=0;return n!==0&&isFinite(n)&&(t=xe(n)),t}var Wr={};function ee(e,n){var t,r=n,a;for(typeof e=="string"&&(e=[e]),Ge(n)&&(r=function(i,l){l[n]=H(i)}),a=e.length,t=0;t<a;t++)Wr[e[t]]=r}function lt(e,n){ee(e,function(t,r,a,i){a._w=a._w||{},n(t,a._w,a,i)})}function sm(e,n,t){n!=null&&z(Wr,e)&&Wr[e](n,t._a,t,e)}function Ht(e){return e%4===0&&e%100!==0||e%400===0}var he=0,We=1,Ne=2,pe=3,Re=4,He=5,dn=6,um=7,mm=8;P("Y",0,0,function(){var e=this.year();return e<=9999?Me(e,4):"+"+e});P(0,["YY",2],0,function(){return this.year()%100});P(0,["YYYY",4],0,"year");P(0,["YYYYY",5],0,"year");P(0,["YYYYYY",6,!0],0,"year");N("Y",$t);N("YY",re,Te);N("YYYY",Oa,wa);N("YYYYY",Vt,Ut);N("YYYYYY",Vt,Ut);ee(["YYYYY","YYYYYY"],he);ee("YYYY",function(e,n){n[he]=e.length===2?A.parseTwoDigitYear(e):H(e)});ee("YY",function(e,n){n[he]=A.parseTwoDigitYear(e)});ee("Y",function(e,n){n[he]=parseInt(e,10)});function Gn(e){return Ht(e)?366:365}A.parseTwoDigitYear=function(e){return H(e)+(H(e)>68?1900:2e3)};var So=Bn("FullYear",!0);function pm(){return Ht(this.year())}function Bn(e,n){return function(t){return t!=null?(Ro(this,e,t),A.updateOffset(this,n),this):Zn(this,e)}}function Zn(e,n){if(!e.isValid())return NaN;var t=e._d,r=e._isUTC;switch(n){case"Milliseconds":return r?t.getUTCMilliseconds():t.getMilliseconds();case"Seconds":return r?t.getUTCSeconds():t.getSeconds();case"Minutes":return r?t.getUTCMinutes():t.getMinutes();case"Hours":return r?t.getUTCHours():t.getHours();case"Date":return r?t.getUTCDate():t.getDate();case"Day":return r?t.getUTCDay():t.getDay();case"Month":return r?t.getUTCMonth():t.getMonth();case"FullYear":return r?t.getUTCFullYear():t.getFullYear();default:return NaN}}function Ro(e,n,t){var r,a,i,l,o;if(!(!e.isValid()||isNaN(t))){switch(r=e._d,a=e._isUTC,n){case"Milliseconds":return void(a?r.setUTCMilliseconds(t):r.setMilliseconds(t));case"Seconds":return void(a?r.setUTCSeconds(t):r.setSeconds(t));case"Minutes":return void(a?r.setUTCMinutes(t):r.setMinutes(t));case"Hours":return void(a?r.setUTCHours(t):r.setHours(t));case"Date":return void(a?r.setUTCDate(t):r.setDate(t));case"FullYear":break;default:return}i=t,l=e.month(),o=e.date(),o=o===29&&l===1&&!Ht(i)?28:o,a?r.setUTCFullYear(i,l,o):r.setFullYear(i,l,o)}}function dm(e){return e=Ee(e),Be(this[e])?this[e]():this}function cm(e,n){if(typeof e=="object"){e=Fa(e);var t=rm(e),r,a=t.length;for(r=0;r<a;r++)this[t[r].unit](e[t[r].unit])}else if(e=Ee(e),Be(this[e]))return this[e](n);return this}function ym(e,n){return(e%n+n)%n}var ue;Array.prototype.indexOf?ue=Array.prototype.indexOf:ue=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function qa(e,n){if(isNaN(e)||isNaN(n))return NaN;var t=ym(n,12);return e+=(n-t)/12,t===1?Ht(e)?29:28:31-t%7%2}P("M",["MM",2],"Mo",function(){return this.month()+1});P("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});P("MMMM",0,0,function(e){return this.localeData().months(this,e)});N("M",re,Pn);N("MM",re,Te);N("MMM",function(e,n){return n.monthsShortRegex(e)});N("MMMM",function(e,n){return n.monthsRegex(e)});ee(["M","MM"],function(e,n){n[We]=H(e)-1});ee(["MMM","MMMM"],function(e,n,t,r){var a=t._locale.monthsParse(e,r,t._strict);a!=null?n[We]=a:$(t).invalidMonth=e});var fm="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Co="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),_o=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,gm=ot,bm=ot;function hm(e,n){return e?Ce(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||_o).test(n)?"format":"standalone"][e.month()]:Ce(this._months)?this._months:this._months.standalone}function vm(e,n){return e?Ce(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[_o.test(n)?"format":"standalone"][e.month()]:Ce(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Fm(e,n,t){var r,a,i,l=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)i=Pe([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(i,"").toLocaleLowerCase();return t?n==="MMM"?(a=ue.call(this._shortMonthsParse,l),a!==-1?a:null):(a=ue.call(this._longMonthsParse,l),a!==-1?a:null):n==="MMM"?(a=ue.call(this._shortMonthsParse,l),a!==-1?a:(a=ue.call(this._longMonthsParse,l),a!==-1?a:null)):(a=ue.call(this._longMonthsParse,l),a!==-1?a:(a=ue.call(this._shortMonthsParse,l),a!==-1?a:null))}function wm(e,n,t){var r,a,i;if(this._monthsParseExact)return Fm.call(this,e,n,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(a=Pe([2e3,r]),t&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!t&&!this._monthsParse[r]&&(i="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[r]=new RegExp(i.replace(".",""),"i")),t&&n==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(t&&n==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!t&&this._monthsParse[r].test(e))return r}}function Ao(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=H(n);else if(n=e.localeData().monthsParse(n),!Ge(n))return e}var t=n,r=e.date();return r=r<29?r:Math.min(r,qa(e.year(),t)),e._isUTC?e._d.setUTCMonth(t,r):e._d.setMonth(t,r),e}function Io(e){return e!=null?(Ao(this,e),A.updateOffset(this,!0),this):Zn(this,"Month")}function Om(){return qa(this.year(),this.month())}function km(e){return this._monthsParseExact?(z(this,"_monthsRegex")||No.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(z(this,"_monthsShortRegex")||(this._monthsShortRegex=gm),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function qm(e){return this._monthsParseExact?(z(this,"_monthsRegex")||No.call(this),e?this._monthsStrictRegex:this._monthsRegex):(z(this,"_monthsRegex")||(this._monthsRegex=bm),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function No(){function e(f,u){return u.length-f.length}var n=[],t=[],r=[],a,i,l,o;for(a=0;a<12;a++)i=Pe([2e3,a]),l=Ye(this.monthsShort(i,"")),o=Ye(this.months(i,"")),n.push(l),t.push(o),r.push(o),r.push(l);n.sort(e),t.sort(e),r.sort(e),this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Tm(e,n,t,r,a,i,l){var o;return e<100&&e>=0?(o=new Date(e+400,n,t,r,a,i,l),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,n,t,r,a,i,l),o}function Jn(e){var n,t;return e<100&&e>=0?(t=Array.prototype.slice.call(arguments),t[0]=e+400,n=new Date(Date.UTC.apply(null,t)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function St(e,n,t){var r=7+n-t,a=(7+Jn(e,0,r).getUTCDay()-n)%7;return-a+r-1}function jo(e,n,t,r,a){var i=(7+t-r)%7,l=St(e,r,a),o=1+7*(n-1)+i+l,f,u;return o<=0?(f=e-1,u=Gn(f)+o):o>Gn(e)?(f=e+1,u=o-Gn(e)):(f=e,u=o),{year:f,dayOfYear:u}}function Xn(e,n,t){var r=St(e.year(),n,t),a=Math.floor((e.dayOfYear()-r-1)/7)+1,i,l;return a<1?(l=e.year()-1,i=a+ze(l,n,t)):a>ze(e.year(),n,t)?(i=a-ze(e.year(),n,t),l=e.year()+1):(l=e.year(),i=a),{week:i,year:l}}function ze(e,n,t){var r=St(e,n,t),a=St(e+1,n,t);return(Gn(e)-r+a)/7}P("w",["ww",2],"wo","week");P("W",["WW",2],"Wo","isoWeek");N("w",re,Pn);N("ww",re,Te);N("W",re,Pn);N("WW",re,Te);lt(["w","ww","W","WW"],function(e,n,t,r){n[r.substr(0,1)]=H(e)});function xm(e){return Xn(e,this._week.dow,this._week.doy).week}var Dm={dow:0,doy:6};function Em(){return this._week.dow}function Sm(){return this._week.doy}function Rm(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function Cm(e){var n=Xn(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}P("d",0,"do","day");P("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});P("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});P("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});P("e",0,0,"weekday");P("E",0,0,"isoWeekday");N("d",re);N("e",re);N("E",re);N("dd",function(e,n){return n.weekdaysMinRegex(e)});N("ddd",function(e,n){return n.weekdaysShortRegex(e)});N("dddd",function(e,n){return n.weekdaysRegex(e)});lt(["dd","ddd","dddd"],function(e,n,t,r){var a=t._locale.weekdaysParse(e,r,t._strict);a!=null?n.d=a:$(t).invalidWeekday=e});lt(["d","e","E"],function(e,n,t,r){n[r]=H(e)});function _m(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Am(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Ta(e,n){return e.slice(n,7).concat(e.slice(0,n))}var Im="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Mo="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Nm="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),jm=ot,Mm=ot,Pm=ot;function Bm(e,n){var t=Ce(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?Ta(t,this._week.dow):e?t[e.day()]:t}function Um(e){return e===!0?Ta(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Lm(e){return e===!0?Ta(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Vm(e,n,t){var r,a,i,l=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)i=Pe([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(i,"").toLocaleLowerCase();return t?n==="dddd"?(a=ue.call(this._weekdaysParse,l),a!==-1?a:null):n==="ddd"?(a=ue.call(this._shortWeekdaysParse,l),a!==-1?a:null):(a=ue.call(this._minWeekdaysParse,l),a!==-1?a:null):n==="dddd"?(a=ue.call(this._weekdaysParse,l),a!==-1||(a=ue.call(this._shortWeekdaysParse,l),a!==-1)?a:(a=ue.call(this._minWeekdaysParse,l),a!==-1?a:null)):n==="ddd"?(a=ue.call(this._shortWeekdaysParse,l),a!==-1||(a=ue.call(this._weekdaysParse,l),a!==-1)?a:(a=ue.call(this._minWeekdaysParse,l),a!==-1?a:null)):(a=ue.call(this._minWeekdaysParse,l),a!==-1||(a=ue.call(this._weekdaysParse,l),a!==-1)?a:(a=ue.call(this._shortWeekdaysParse,l),a!==-1?a:null))}function $m(e,n,t){var r,a,i;if(this._weekdaysParseExact)return Vm.call(this,e,n,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(a=Pe([2e3,1]).day(r),t&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(i="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[r]=new RegExp(i.replace(".",""),"i")),t&&n==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(t&&n==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(t&&n==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!t&&this._weekdaysParse[r].test(e))return r}}function Wm(e){if(!this.isValid())return e!=null?this:NaN;var n=Zn(this,"Day");return e!=null?(e=_m(e,this.localeData()),this.add(e-n,"d")):n}function Hm(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function Ym(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=Am(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function zm(e){return this._weekdaysParseExact?(z(this,"_weekdaysRegex")||xa.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(z(this,"_weekdaysRegex")||(this._weekdaysRegex=jm),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Gm(e){return this._weekdaysParseExact?(z(this,"_weekdaysRegex")||xa.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(z(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Mm),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Km(e){return this._weekdaysParseExact?(z(this,"_weekdaysRegex")||xa.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(z(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Pm),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function xa(){function e(d,s){return s.length-d.length}var n=[],t=[],r=[],a=[],i,l,o,f,u;for(i=0;i<7;i++)l=Pe([2e3,1]).day(i),o=Ye(this.weekdaysMin(l,"")),f=Ye(this.weekdaysShort(l,"")),u=Ye(this.weekdays(l,"")),n.push(o),t.push(f),r.push(u),a.push(o),a.push(f),a.push(u);n.sort(e),t.sort(e),r.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Da(){return this.hours()%12||12}function Zm(){return this.hours()||24}P("H",["HH",2],0,"hour");P("h",["hh",2],0,Da);P("k",["kk",2],0,Zm);P("hmm",0,0,function(){return""+Da.apply(this)+Me(this.minutes(),2)});P("hmmss",0,0,function(){return""+Da.apply(this)+Me(this.minutes(),2)+Me(this.seconds(),2)});P("Hmm",0,0,function(){return""+this.hours()+Me(this.minutes(),2)});P("Hmmss",0,0,function(){return""+this.hours()+Me(this.minutes(),2)+Me(this.seconds(),2)});function Po(e,n){P(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}Po("a",!0);Po("A",!1);function Bo(e,n){return n._meridiemParse}N("a",Bo);N("A",Bo);N("H",re,ka);N("h",re,Pn);N("k",re,Pn);N("HH",re,Te);N("hh",re,Te);N("kk",re,Te);N("hmm",Do);N("hmmss",Eo);N("Hmm",Do);N("Hmmss",Eo);ee(["H","HH"],pe);ee(["k","kk"],function(e,n,t){var r=H(e);n[pe]=r===24?0:r});ee(["a","A"],function(e,n,t){t._isPm=t._locale.isPM(e),t._meridiem=e});ee(["h","hh"],function(e,n,t){n[pe]=H(e),$(t).bigHour=!0});ee("hmm",function(e,n,t){var r=e.length-2;n[pe]=H(e.substr(0,r)),n[Re]=H(e.substr(r)),$(t).bigHour=!0});ee("hmmss",function(e,n,t){var r=e.length-4,a=e.length-2;n[pe]=H(e.substr(0,r)),n[Re]=H(e.substr(r,2)),n[He]=H(e.substr(a)),$(t).bigHour=!0});ee("Hmm",function(e,n,t){var r=e.length-2;n[pe]=H(e.substr(0,r)),n[Re]=H(e.substr(r))});ee("Hmmss",function(e,n,t){var r=e.length-4,a=e.length-2;n[pe]=H(e.substr(0,r)),n[Re]=H(e.substr(r,2)),n[He]=H(e.substr(a))});function Jm(e){return(e+"").toLowerCase().charAt(0)==="p"}var Xm=/[ap]\.?m?\.?/i,Qm=Bn("Hours",!0);function ep(e,n,t){return e>11?t?"pm":"PM":t?"am":"AM"}var Uo={calendar:Vu,longDateFormat:Yu,invalidDate:Gu,ordinal:Zu,dayOfMonthOrdinalParse:Ju,relativeTime:Qu,months:fm,monthsShort:Co,week:Dm,weekdays:Im,weekdaysMin:Nm,weekdaysShort:Mo,meridiemParse:Xm},ie={},Un={},Qn;function np(e,n){var t,r=Math.min(e.length,n.length);for(t=0;t<r;t+=1)if(e[t]!==n[t])return t;return r}function ei(e){return e&&e.toLowerCase().replace("_","-")}function tp(e){for(var n=0,t,r,a,i;n<e.length;){for(i=ei(e[n]).split("-"),t=i.length,r=ei(e[n+1]),r=r?r.split("-"):null;t>0;){if(a=Yt(i.slice(0,t).join("-")),a)return a;if(r&&r.length>=t&&np(i,r)>=t-1)break;t--}n++}return Qn}function rp(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Yt(e){var n=null,t;if(ie[e]===void 0&&typeof module<"u"&&module&&module.exports&&rp(e))try{n=Qn._abbr,t=require,t("./locale/"+e),nn(n)}catch{ie[e]=null}return ie[e]}function nn(e,n){var t;return e&&(Oe(n)?t=Ke(e):t=Ea(e,n),t?Qn=t:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Qn._abbr}function Ea(e,n){if(n!==null){var t,r=Uo;if(n.abbr=e,ie[e]!=null)ko("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=ie[e]._config;else if(n.parentLocale!=null)if(ie[n.parentLocale]!=null)r=ie[n.parentLocale]._config;else if(t=Yt(n.parentLocale),t!=null)r=t._config;else return Un[n.parentLocale]||(Un[n.parentLocale]=[]),Un[n.parentLocale].push({name:e,config:n}),null;return ie[e]=new ha(Vr(r,n)),Un[e]&&Un[e].forEach(function(a){Ea(a.name,a.config)}),nn(e),ie[e]}else return delete ie[e],null}function ap(e,n){if(n!=null){var t,r,a=Uo;ie[e]!=null&&ie[e].parentLocale!=null?ie[e].set(Vr(ie[e]._config,n)):(r=Yt(e),r!=null&&(a=r._config),n=Vr(a,n),r==null&&(n.abbr=e),t=new ha(n),t.parentLocale=ie[e],ie[e]=t),nn(e)}else ie[e]!=null&&(ie[e].parentLocale!=null?(ie[e]=ie[e].parentLocale,e===nn()&&nn(e)):ie[e]!=null&&delete ie[e]);return ie[e]}function Ke(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Qn;if(!Ce(e)){if(n=Yt(e),n)return n;e=[e]}return tp(e)}function ip(){return $r(ie)}function Sa(e){var n,t=e._a;return t&&$(e).overflow===-2&&(n=t[We]<0||t[We]>11?We:t[Ne]<1||t[Ne]>qa(t[he],t[We])?Ne:t[pe]<0||t[pe]>24||t[pe]===24&&(t[Re]!==0||t[He]!==0||t[dn]!==0)?pe:t[Re]<0||t[Re]>59?Re:t[He]<0||t[He]>59?He:t[dn]<0||t[dn]>999?dn:-1,$(e)._overflowDayOfYear&&(n<he||n>Ne)&&(n=Ne),$(e)._overflowWeeks&&n===-1&&(n=um),$(e)._overflowWeekday&&n===-1&&(n=mm),$(e).overflow=n),e}var op=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,lp=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,sp=/Z|[+-]\d\d(?::?\d\d)?/,ct=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],rr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],up=/^\/?Date\((-?\d+)/i,mp=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,pp={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Lo(e){var n,t,r=e._i,a=op.exec(r)||lp.exec(r),i,l,o,f,u=ct.length,d=rr.length;if(a){for($(e).iso=!0,n=0,t=u;n<t;n++)if(ct[n][1].exec(a[1])){l=ct[n][0],i=ct[n][2]!==!1;break}if(l==null){e._isValid=!1;return}if(a[3]){for(n=0,t=d;n<t;n++)if(rr[n][1].exec(a[3])){o=(a[2]||" ")+rr[n][0];break}if(o==null){e._isValid=!1;return}}if(!i&&o!=null){e._isValid=!1;return}if(a[4])if(sp.exec(a[4]))f="Z";else{e._isValid=!1;return}e._f=l+(o||"")+(f||""),Ca(e)}else e._isValid=!1}function dp(e,n,t,r,a,i){var l=[cp(e),Co.indexOf(n),parseInt(t,10),parseInt(r,10),parseInt(a,10)];return i&&l.push(parseInt(i,10)),l}function cp(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function yp(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function fp(e,n,t){if(e){var r=Mo.indexOf(e),a=new Date(n[0],n[1],n[2]).getDay();if(r!==a)return $(t).weekdayMismatch=!0,t._isValid=!1,!1}return!0}function gp(e,n,t){if(e)return pp[e];if(n)return 0;var r=parseInt(t,10),a=r%100,i=(r-a)/100;return i*60+a}function Vo(e){var n=mp.exec(yp(e._i)),t;if(n){if(t=dp(n[4],n[3],n[2],n[5],n[6],n[7]),!fp(n[1],t,e))return;e._a=t,e._tzm=gp(n[8],n[9],n[10]),e._d=Jn.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),$(e).rfc2822=!0}else e._isValid=!1}function bp(e){var n=up.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(Lo(e),e._isValid===!1)delete e._isValid;else return;if(Vo(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:A.createFromInputFallback(e)}A.createFromInputFallback=De("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function xn(e,n,t){return e??n??t}function hp(e){var n=new Date(A.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function Ra(e){var n,t,r=[],a,i,l;if(!e._d){for(a=hp(e),e._w&&e._a[Ne]==null&&e._a[We]==null&&vp(e),e._dayOfYear!=null&&(l=xn(e._a[he],a[he]),(e._dayOfYear>Gn(l)||e._dayOfYear===0)&&($(e)._overflowDayOfYear=!0),t=Jn(l,0,e._dayOfYear),e._a[We]=t.getUTCMonth(),e._a[Ne]=t.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=r[n]=a[n];for(;n<7;n++)e._a[n]=r[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[pe]===24&&e._a[Re]===0&&e._a[He]===0&&e._a[dn]===0&&(e._nextDay=!0,e._a[pe]=0),e._d=(e._useUTC?Jn:Tm).apply(null,r),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[pe]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==i&&($(e).weekdayMismatch=!0)}}function vp(e){var n,t,r,a,i,l,o,f,u;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(i=1,l=4,t=xn(n.GG,e._a[he],Xn(te(),1,4).year),r=xn(n.W,1),a=xn(n.E,1),(a<1||a>7)&&(f=!0)):(i=e._locale._week.dow,l=e._locale._week.doy,u=Xn(te(),i,l),t=xn(n.gg,e._a[he],u.year),r=xn(n.w,u.week),n.d!=null?(a=n.d,(a<0||a>6)&&(f=!0)):n.e!=null?(a=n.e+i,(n.e<0||n.e>6)&&(f=!0)):a=i),r<1||r>ze(t,i,l)?$(e)._overflowWeeks=!0:f!=null?$(e)._overflowWeekday=!0:(o=jo(t,r,a,i,l),e._a[he]=o.year,e._dayOfYear=o.dayOfYear)}A.ISO_8601=function(){};A.RFC_2822=function(){};function Ca(e){if(e._f===A.ISO_8601){Lo(e);return}if(e._f===A.RFC_2822){Vo(e);return}e._a=[],$(e).empty=!0;var n=""+e._i,t,r,a,i,l,o=n.length,f=0,u,d;for(a=qo(e._f,e._locale).match(va)||[],d=a.length,t=0;t<d;t++)i=a[t],r=(n.match(om(i,e))||[])[0],r&&(l=n.substr(0,n.indexOf(r)),l.length>0&&$(e).unusedInput.push(l),n=n.slice(n.indexOf(r)+r.length),f+=r.length),Rn[i]?(r?$(e).empty=!1:$(e).unusedTokens.push(i),sm(i,r,e)):e._strict&&!r&&$(e).unusedTokens.push(i);$(e).charsLeftOver=o-f,n.length>0&&$(e).unusedInput.push(n),e._a[pe]<=12&&$(e).bigHour===!0&&e._a[pe]>0&&($(e).bigHour=void 0),$(e).parsedDateParts=e._a.slice(0),$(e).meridiem=e._meridiem,e._a[pe]=Fp(e._locale,e._a[pe],e._meridiem),u=$(e).era,u!==null&&(e._a[he]=e._locale.erasConvertYear(u,e._a[he])),Ra(e),Sa(e)}function Fp(e,n,t){var r;return t==null?n:e.meridiemHour!=null?e.meridiemHour(n,t):(e.isPM!=null&&(r=e.isPM(t),r&&n<12&&(n+=12),!r&&n===12&&(n=0)),n)}function wp(e){var n,t,r,a,i,l,o=!1,f=e._f.length;if(f===0){$(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<f;a++)i=0,l=!1,n=ba({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[a],Ca(n),ga(n)&&(l=!0),i+=$(n).charsLeftOver,i+=$(n).unusedTokens.length*10,$(n).score=i,o?i<r&&(r=i,t=n):(r==null||i<r||l)&&(r=i,t=n,l&&(o=!0));Qe(e,t||n)}function Op(e){if(!e._d){var n=Fa(e._i),t=n.day===void 0?n.date:n.day;e._a=wo([n.year,n.month,t,n.hour,n.minute,n.second,n.millisecond],function(r){return r&&parseInt(r,10)}),Ra(e)}}function kp(e){var n=new it(Sa($o(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function $o(e){var n=e._i,t=e._f;return e._locale=e._locale||Ke(e._l),n===null||t===void 0&&n===""?Bt({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),_e(n)?new it(Sa(n)):(at(n)?e._d=n:Ce(t)?wp(e):t?Ca(e):qp(e),ga(e)||(e._d=null),e))}function qp(e){var n=e._i;Oe(n)?e._d=new Date(A.now()):at(n)?e._d=new Date(n.valueOf()):typeof n=="string"?bp(e):Ce(n)?(e._a=wo(n.slice(0),function(t){return parseInt(t,10)}),Ra(e)):yn(n)?Op(e):Ge(n)?e._d=new Date(n):A.createFromInputFallback(e)}function Wo(e,n,t,r,a){var i={};return(n===!0||n===!1)&&(r=n,n=void 0),(t===!0||t===!1)&&(r=t,t=void 0),(yn(e)&&fa(e)||Ce(e)&&e.length===0)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=a,i._l=t,i._i=e,i._f=n,i._strict=r,kp(i)}function te(e,n,t,r){return Wo(e,n,t,r,!1)}var Tp=De("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=te.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Bt()}),xp=De("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=te.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Bt()});function Ho(e,n){var t,r;if(n.length===1&&Ce(n[0])&&(n=n[0]),!n.length)return te();for(t=n[0],r=1;r<n.length;++r)(!n[r].isValid()||n[r][e](t))&&(t=n[r]);return t}function Dp(){var e=[].slice.call(arguments,0);return Ho("isBefore",e)}function Ep(){var e=[].slice.call(arguments,0);return Ho("isAfter",e)}var Sp=function(){return Date.now?Date.now():+new Date},Ln=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Rp(e){var n,t=!1,r,a=Ln.length;for(n in e)if(z(e,n)&&!(ue.call(Ln,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(r=0;r<a;++r)if(e[Ln[r]]){if(t)return!1;parseFloat(e[Ln[r]])!==H(e[Ln[r]])&&(t=!0)}return!0}function Cp(){return this._isValid}function _p(){return Ae(NaN)}function zt(e){var n=Fa(e),t=n.year||0,r=n.quarter||0,a=n.month||0,i=n.week||n.isoWeek||0,l=n.day||0,o=n.hour||0,f=n.minute||0,u=n.second||0,d=n.millisecond||0;this._isValid=Rp(n),this._milliseconds=+d+u*1e3+f*6e4+o*1e3*60*60,this._days=+l+i*7,this._months=+a+r*3+t*12,this._data={},this._locale=Ke(),this._bubble()}function vt(e){return e instanceof zt}function Hr(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Ap(e,n,t){var r=Math.min(e.length,n.length),a=Math.abs(e.length-n.length),i=0,l;for(l=0;l<r;l++)H(e[l])!==H(n[l])&&i++;return i+a}function Yo(e,n){P(e,0,0,function(){var t=this.utcOffset(),r="+";return t<0&&(t=-t,r="-"),r+Me(~~(t/60),2)+n+Me(~~t%60,2)})}Yo("Z",":");Yo("ZZ","");N("Z",Wt);N("ZZ",Wt);ee(["Z","ZZ"],function(e,n,t){t._useUTC=!0,t._tzm=_a(Wt,e)});var Ip=/([\+\-]|\d\d)/gi;function _a(e,n){var t=(n||"").match(e),r,a,i;return t===null?null:(r=t[t.length-1]||[],a=(r+"").match(Ip)||["-",0,0],i=+(a[1]*60)+H(a[2]),i===0?0:a[0]==="+"?i:-i)}function Aa(e,n){var t,r;return n._isUTC?(t=n.clone(),r=(_e(e)||at(e)?e.valueOf():te(e).valueOf())-t.valueOf(),t._d.setTime(t._d.valueOf()+r),A.updateOffset(t,!1),t):te(e).local()}function Yr(e){return-Math.round(e._d.getTimezoneOffset())}A.updateOffset=function(){};function Np(e,n,t){var r=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=_a(Wt,e),e===null)return this}else Math.abs(e)<16&&!t&&(e=e*60);return!this._isUTC&&n&&(a=Yr(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),r!==e&&(!n||this._changeInProgress?Ko(this,Ae(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,A.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:Yr(this)}function jp(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function Mp(e){return this.utcOffset(0,e)}function Pp(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Yr(this),"m")),this}function Bp(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=_a(am,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Up(e){return this.isValid()?(e=e?te(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Lp(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Vp(){if(!Oe(this._isDSTShifted))return this._isDSTShifted;var e={},n;return ba(e,this),e=$o(e),e._a?(n=e._isUTC?Pe(e._a):te(e._a),this._isDSTShifted=this.isValid()&&Ap(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function $p(){return this.isValid()?!this._isUTC:!1}function Wp(){return this.isValid()?this._isUTC:!1}function zo(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Hp=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Yp=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ae(e,n){var t=e,r=null,a,i,l;return vt(e)?t={ms:e._milliseconds,d:e._days,M:e._months}:Ge(e)||!isNaN(+e)?(t={},n?t[n]=+e:t.milliseconds=+e):(r=Hp.exec(e))?(a=r[1]==="-"?-1:1,t={y:0,d:H(r[Ne])*a,h:H(r[pe])*a,m:H(r[Re])*a,s:H(r[He])*a,ms:H(Hr(r[dn]*1e3))*a}):(r=Yp.exec(e))?(a=r[1]==="-"?-1:1,t={y:un(r[2],a),M:un(r[3],a),w:un(r[4],a),d:un(r[5],a),h:un(r[6],a),m:un(r[7],a),s:un(r[8],a)}):t==null?t={}:typeof t=="object"&&("from"in t||"to"in t)&&(l=zp(te(t.from),te(t.to)),t={},t.ms=l.milliseconds,t.M=l.months),i=new zt(t),vt(e)&&z(e,"_locale")&&(i._locale=e._locale),vt(e)&&z(e,"_isValid")&&(i._isValid=e._isValid),i}Ae.fn=zt.prototype;Ae.invalid=_p;function un(e,n){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*n}function ni(e,n){var t={};return t.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(t.months,"M").isAfter(n)&&--t.months,t.milliseconds=+n-+e.clone().add(t.months,"M"),t}function zp(e,n){var t;return e.isValid()&&n.isValid()?(n=Aa(n,e),e.isBefore(n)?t=ni(e,n):(t=ni(n,e),t.milliseconds=-t.milliseconds,t.months=-t.months),t):{milliseconds:0,months:0}}function Go(e,n){return function(t,r){var a,i;return r!==null&&!isNaN(+r)&&(ko(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=t,t=r,r=i),a=Ae(t,r),Ko(this,a,e),this}}function Ko(e,n,t,r){var a=n._milliseconds,i=Hr(n._days),l=Hr(n._months);e.isValid()&&(r=r??!0,l&&Ao(e,Zn(e,"Month")+l*t),i&&Ro(e,"Date",Zn(e,"Date")+i*t),a&&e._d.setTime(e._d.valueOf()+a*t),r&&A.updateOffset(e,i||l))}var Gp=Go(1,"add"),Kp=Go(-1,"subtract");function Zo(e){return typeof e=="string"||e instanceof String}function Zp(e){return _e(e)||at(e)||Zo(e)||Ge(e)||Xp(e)||Jp(e)||e===null||e===void 0}function Jp(e){var n=yn(e)&&!fa(e),t=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,i,l=r.length;for(a=0;a<l;a+=1)i=r[a],t=t||z(e,i);return n&&t}function Xp(e){var n=Ce(e),t=!1;return n&&(t=e.filter(function(r){return!Ge(r)&&Zo(e)}).length===0),n&&t}function Qp(e){var n=yn(e)&&!fa(e),t=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,i;for(a=0;a<r.length;a+=1)i=r[a],t=t||z(e,i);return n&&t}function ed(e,n){var t=e.diff(n,"days",!0);return t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"}function nd(e,n){arguments.length===1&&(arguments[0]?Zp(arguments[0])?(e=arguments[0],n=void 0):Qp(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var t=e||te(),r=Aa(t,this).startOf("day"),a=A.calendarFormat(this,r)||"sameElse",i=n&&(Be(n[a])?n[a].call(this,t):n[a]);return this.format(i||this.localeData().calendar(a,this,te(t)))}function td(){return new it(this)}function rd(e,n){var t=_e(e)?e:te(e);return this.isValid()&&t.isValid()?(n=Ee(n)||"millisecond",n==="millisecond"?this.valueOf()>t.valueOf():t.valueOf()<this.clone().startOf(n).valueOf()):!1}function ad(e,n){var t=_e(e)?e:te(e);return this.isValid()&&t.isValid()?(n=Ee(n)||"millisecond",n==="millisecond"?this.valueOf()<t.valueOf():this.clone().endOf(n).valueOf()<t.valueOf()):!1}function id(e,n,t,r){var a=_e(e)?e:te(e),i=_e(n)?n:te(n);return this.isValid()&&a.isValid()&&i.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(a,t):!this.isBefore(a,t))&&(r[1]===")"?this.isBefore(i,t):!this.isAfter(i,t))):!1}function od(e,n){var t=_e(e)?e:te(e),r;return this.isValid()&&t.isValid()?(n=Ee(n)||"millisecond",n==="millisecond"?this.valueOf()===t.valueOf():(r=t.valueOf(),this.clone().startOf(n).valueOf()<=r&&r<=this.clone().endOf(n).valueOf())):!1}function ld(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function sd(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function ud(e,n,t){var r,a,i;if(!this.isValid())return NaN;if(r=Aa(e,this),!r.isValid())return NaN;switch(a=(r.utcOffset()-this.utcOffset())*6e4,n=Ee(n),n){case"year":i=Ft(this,r)/12;break;case"month":i=Ft(this,r);break;case"quarter":i=Ft(this,r)/3;break;case"second":i=(this-r)/1e3;break;case"minute":i=(this-r)/6e4;break;case"hour":i=(this-r)/36e5;break;case"day":i=(this-r-a)/864e5;break;case"week":i=(this-r-a)/6048e5;break;default:i=this-r}return t?i:xe(i)}function Ft(e,n){if(e.date()<n.date())return-Ft(n,e);var t=(n.year()-e.year())*12+(n.month()-e.month()),r=e.clone().add(t,"months"),a,i;return n-r<0?(a=e.clone().add(t-1,"months"),i=(n-r)/(r-a)):(a=e.clone().add(t+1,"months"),i=(n-r)/(a-r)),-(t+i)||0}A.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";A.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function md(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function pd(e){if(!this.isValid())return null;var n=e!==!0,t=n?this.clone().utc():this;return t.year()<0||t.year()>9999?ht(t,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Be(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",ht(t,"Z")):ht(t,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function dd(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",t,r,a,i;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),t="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",i=n+'[")]',this.format(t+r+a+i)}function cd(e){e||(e=this.isUtc()?A.defaultFormatUtc:A.defaultFormat);var n=ht(this,e);return this.localeData().postformat(n)}function yd(e,n){return this.isValid()&&(_e(e)&&e.isValid()||te(e).isValid())?Ae({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function fd(e){return this.from(te(),e)}function gd(e,n){return this.isValid()&&(_e(e)&&e.isValid()||te(e).isValid())?Ae({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function bd(e){return this.to(te(),e)}function Jo(e){var n;return e===void 0?this._locale._abbr:(n=Ke(e),n!=null&&(this._locale=n),this)}var Xo=De("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Qo(){return this._locale}var Rt=1e3,Cn=60*Rt,Ct=60*Cn,el=(365*400+97)*24*Ct;function _n(e,n){return(e%n+n)%n}function nl(e,n,t){return e<100&&e>=0?new Date(e+400,n,t)-el:new Date(e,n,t).valueOf()}function tl(e,n,t){return e<100&&e>=0?Date.UTC(e+400,n,t)-el:Date.UTC(e,n,t)}function hd(e){var n,t;if(e=Ee(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(t=this._isUTC?tl:nl,e){case"year":n=t(this.year(),0,1);break;case"quarter":n=t(this.year(),this.month()-this.month()%3,1);break;case"month":n=t(this.year(),this.month(),1);break;case"week":n=t(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=t(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=_n(n+(this._isUTC?0:this.utcOffset()*Cn),Ct);break;case"minute":n=this._d.valueOf(),n-=_n(n,Cn);break;case"second":n=this._d.valueOf(),n-=_n(n,Rt);break}return this._d.setTime(n),A.updateOffset(this,!0),this}function vd(e){var n,t;if(e=Ee(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(t=this._isUTC?tl:nl,e){case"year":n=t(this.year()+1,0,1)-1;break;case"quarter":n=t(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=t(this.year(),this.month()+1,1)-1;break;case"week":n=t(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=t(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=Ct-_n(n+(this._isUTC?0:this.utcOffset()*Cn),Ct)-1;break;case"minute":n=this._d.valueOf(),n+=Cn-_n(n,Cn)-1;break;case"second":n=this._d.valueOf(),n+=Rt-_n(n,Rt)-1;break}return this._d.setTime(n),A.updateOffset(this,!0),this}function Fd(){return this._d.valueOf()-(this._offset||0)*6e4}function wd(){return Math.floor(this.valueOf()/1e3)}function Od(){return new Date(this.valueOf())}function kd(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function qd(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Td(){return this.isValid()?this.toISOString():null}function xd(){return ga(this)}function Dd(){return Qe({},$(this))}function Ed(){return $(this).overflow}function Sd(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}P("N",0,0,"eraAbbr");P("NN",0,0,"eraAbbr");P("NNN",0,0,"eraAbbr");P("NNNN",0,0,"eraName");P("NNNNN",0,0,"eraNarrow");P("y",["y",1],"yo","eraYear");P("y",["yy",2],0,"eraYear");P("y",["yyy",3],0,"eraYear");P("y",["yyyy",4],0,"eraYear");N("N",Ia);N("NN",Ia);N("NNN",Ia);N("NNNN",Ud);N("NNNNN",Ld);ee(["N","NN","NNN","NNNN","NNNNN"],function(e,n,t,r){var a=t._locale.erasParse(e,r,t._strict);a?$(t).era=a:$(t).invalidEra=e});N("y",Mn);N("yy",Mn);N("yyy",Mn);N("yyyy",Mn);N("yo",Vd);ee(["y","yy","yyy","yyyy"],he);ee(["yo"],function(e,n,t,r){var a;t._locale._eraYearOrdinalRegex&&(a=e.match(t._locale._eraYearOrdinalRegex)),t._locale.eraYearOrdinalParse?n[he]=t._locale.eraYearOrdinalParse(e,a):n[he]=parseInt(e,10)});function Rd(e,n){var t,r,a,i=this._eras||Ke("en")._eras;for(t=0,r=i.length;t<r;++t){switch(typeof i[t].since){case"string":a=A(i[t].since).startOf("day"),i[t].since=a.valueOf();break}switch(typeof i[t].until){case"undefined":i[t].until=1/0;break;case"string":a=A(i[t].until).startOf("day").valueOf(),i[t].until=a.valueOf();break}}return i}function Cd(e,n,t){var r,a,i=this.eras(),l,o,f;for(e=e.toUpperCase(),r=0,a=i.length;r<a;++r)if(l=i[r].name.toUpperCase(),o=i[r].abbr.toUpperCase(),f=i[r].narrow.toUpperCase(),t)switch(n){case"N":case"NN":case"NNN":if(o===e)return i[r];break;case"NNNN":if(l===e)return i[r];break;case"NNNNN":if(f===e)return i[r];break}else if([l,o,f].indexOf(e)>=0)return i[r]}function _d(e,n){var t=e.since<=e.until?1:-1;return n===void 0?A(e.since).year():A(e.since).year()+(n-e.offset)*t}function Ad(){var e,n,t,r=this.localeData().eras();for(e=0,n=r.length;e<n;++e)if(t=this.clone().startOf("day").valueOf(),r[e].since<=t&&t<=r[e].until||r[e].until<=t&&t<=r[e].since)return r[e].name;return""}function Id(){var e,n,t,r=this.localeData().eras();for(e=0,n=r.length;e<n;++e)if(t=this.clone().startOf("day").valueOf(),r[e].since<=t&&t<=r[e].until||r[e].until<=t&&t<=r[e].since)return r[e].narrow;return""}function Nd(){var e,n,t,r=this.localeData().eras();for(e=0,n=r.length;e<n;++e)if(t=this.clone().startOf("day").valueOf(),r[e].since<=t&&t<=r[e].until||r[e].until<=t&&t<=r[e].since)return r[e].abbr;return""}function jd(){var e,n,t,r,a=this.localeData().eras();for(e=0,n=a.length;e<n;++e)if(t=a[e].since<=a[e].until?1:-1,r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return(this.year()-A(a[e].since).year())*t+a[e].offset;return this.year()}function Md(e){return z(this,"_erasNameRegex")||Na.call(this),e?this._erasNameRegex:this._erasRegex}function Pd(e){return z(this,"_erasAbbrRegex")||Na.call(this),e?this._erasAbbrRegex:this._erasRegex}function Bd(e){return z(this,"_erasNarrowRegex")||Na.call(this),e?this._erasNarrowRegex:this._erasRegex}function Ia(e,n){return n.erasAbbrRegex(e)}function Ud(e,n){return n.erasNameRegex(e)}function Ld(e,n){return n.erasNarrowRegex(e)}function Vd(e,n){return n._eraYearOrdinalRegex||Mn}function Na(){var e=[],n=[],t=[],r=[],a,i,l,o,f,u=this.eras();for(a=0,i=u.length;a<i;++a)l=Ye(u[a].name),o=Ye(u[a].abbr),f=Ye(u[a].narrow),n.push(l),e.push(o),t.push(f),r.push(l),r.push(o),r.push(f);this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+t.join("|")+")","i")}P(0,["gg",2],0,function(){return this.weekYear()%100});P(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Gt(e,n){P(0,[e,e.length],0,n)}Gt("gggg","weekYear");Gt("ggggg","weekYear");Gt("GGGG","isoWeekYear");Gt("GGGGG","isoWeekYear");N("G",$t);N("g",$t);N("GG",re,Te);N("gg",re,Te);N("GGGG",Oa,wa);N("gggg",Oa,wa);N("GGGGG",Vt,Ut);N("ggggg",Vt,Ut);lt(["gggg","ggggg","GGGG","GGGGG"],function(e,n,t,r){n[r.substr(0,2)]=H(e)});lt(["gg","GG"],function(e,n,t,r){n[r]=A.parseTwoDigitYear(e)});function $d(e){return rl.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Wd(e){return rl.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Hd(){return ze(this.year(),1,4)}function Yd(){return ze(this.isoWeekYear(),1,4)}function zd(){var e=this.localeData()._week;return ze(this.year(),e.dow,e.doy)}function Gd(){var e=this.localeData()._week;return ze(this.weekYear(),e.dow,e.doy)}function rl(e,n,t,r,a){var i;return e==null?Xn(this,r,a).year:(i=ze(e,r,a),n>i&&(n=i),Kd.call(this,e,n,t,r,a))}function Kd(e,n,t,r,a){var i=jo(e,n,t,r,a),l=Jn(i.year,0,i.dayOfYear);return this.year(l.getUTCFullYear()),this.month(l.getUTCMonth()),this.date(l.getUTCDate()),this}P("Q",0,"Qo","quarter");N("Q",To);ee("Q",function(e,n){n[We]=(H(e)-1)*3});function Zd(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}P("D",["DD",2],"Do","date");N("D",re,Pn);N("DD",re,Te);N("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient});ee(["D","DD"],Ne);ee("Do",function(e,n){n[Ne]=H(e.match(re)[0])});var al=Bn("Date",!0);P("DDD",["DDDD",3],"DDDo","dayOfYear");N("DDD",Lt);N("DDDD",xo);ee(["DDD","DDDD"],function(e,n,t){t._dayOfYear=H(e)});function Jd(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}P("m",["mm",2],0,"minute");N("m",re,ka);N("mm",re,Te);ee(["m","mm"],Re);var Xd=Bn("Minutes",!1);P("s",["ss",2],0,"second");N("s",re,ka);N("ss",re,Te);ee(["s","ss"],He);var Qd=Bn("Seconds",!1);P("S",0,0,function(){return~~(this.millisecond()/100)});P(0,["SS",2],0,function(){return~~(this.millisecond()/10)});P(0,["SSS",3],0,"millisecond");P(0,["SSSS",4],0,function(){return this.millisecond()*10});P(0,["SSSSS",5],0,function(){return this.millisecond()*100});P(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});P(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});P(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});P(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});N("S",Lt,To);N("SS",Lt,Te);N("SSS",Lt,xo);var en,il;for(en="SSSS";en.length<=9;en+="S")N(en,Mn);function ec(e,n){n[dn]=H(("0."+e)*1e3)}for(en="S";en.length<=9;en+="S")ee(en,ec);il=Bn("Milliseconds",!1);P("z",0,0,"zoneAbbr");P("zz",0,0,"zoneName");function nc(){return this._isUTC?"UTC":""}function tc(){return this._isUTC?"Coordinated Universal Time":""}var E=it.prototype;E.add=Gp;E.calendar=nd;E.clone=td;E.diff=ud;E.endOf=vd;E.format=cd;E.from=yd;E.fromNow=fd;E.to=gd;E.toNow=bd;E.get=dm;E.invalidAt=Ed;E.isAfter=rd;E.isBefore=ad;E.isBetween=id;E.isSame=od;E.isSameOrAfter=ld;E.isSameOrBefore=sd;E.isValid=xd;E.lang=Xo;E.locale=Jo;E.localeData=Qo;E.max=xp;E.min=Tp;E.parsingFlags=Dd;E.set=cm;E.startOf=hd;E.subtract=Kp;E.toArray=kd;E.toObject=qd;E.toDate=Od;E.toISOString=pd;E.inspect=dd;typeof Symbol<"u"&&Symbol.for!=null&&(E[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});E.toJSON=Td;E.toString=md;E.unix=wd;E.valueOf=Fd;E.creationData=Sd;E.eraName=Ad;E.eraNarrow=Id;E.eraAbbr=Nd;E.eraYear=jd;E.year=So;E.isLeapYear=pm;E.weekYear=$d;E.isoWeekYear=Wd;E.quarter=E.quarters=Zd;E.month=Io;E.daysInMonth=Om;E.week=E.weeks=Rm;E.isoWeek=E.isoWeeks=Cm;E.weeksInYear=zd;E.weeksInWeekYear=Gd;E.isoWeeksInYear=Hd;E.isoWeeksInISOWeekYear=Yd;E.date=al;E.day=E.days=Wm;E.weekday=Hm;E.isoWeekday=Ym;E.dayOfYear=Jd;E.hour=E.hours=Qm;E.minute=E.minutes=Xd;E.second=E.seconds=Qd;E.millisecond=E.milliseconds=il;E.utcOffset=Np;E.utc=Mp;E.local=Pp;E.parseZone=Bp;E.hasAlignedHourOffset=Up;E.isDST=Lp;E.isLocal=$p;E.isUtcOffset=Wp;E.isUtc=zo;E.isUTC=zo;E.zoneAbbr=nc;E.zoneName=tc;E.dates=De("dates accessor is deprecated. Use date instead.",al);E.months=De("months accessor is deprecated. Use month instead",Io);E.years=De("years accessor is deprecated. Use year instead",So);E.zone=De("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",jp);E.isDSTShifted=De("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Vp);function rc(e){return te(e*1e3)}function ac(){return te.apply(null,arguments).parseZone()}function ol(e){return e}var G=ha.prototype;G.calendar=$u;G.longDateFormat=zu;G.invalidDate=Ku;G.ordinal=Xu;G.preparse=ol;G.postformat=ol;G.relativeTime=em;G.pastFuture=nm;G.set=Lu;G.eras=Rd;G.erasParse=Cd;G.erasConvertYear=_d;G.erasAbbrRegex=Pd;G.erasNameRegex=Md;G.erasNarrowRegex=Bd;G.months=hm;G.monthsShort=vm;G.monthsParse=wm;G.monthsRegex=qm;G.monthsShortRegex=km;G.week=xm;G.firstDayOfYear=Sm;G.firstDayOfWeek=Em;G.weekdays=Bm;G.weekdaysMin=Lm;G.weekdaysShort=Um;G.weekdaysParse=$m;G.weekdaysRegex=zm;G.weekdaysShortRegex=Gm;G.weekdaysMinRegex=Km;G.isPM=Jm;G.meridiem=ep;function _t(e,n,t,r){var a=Ke(),i=Pe().set(r,n);return a[t](i,e)}function ll(e,n,t){if(Ge(e)&&(n=e,e=void 0),e=e||"",n!=null)return _t(e,n,t,"month");var r,a=[];for(r=0;r<12;r++)a[r]=_t(e,r,t,"month");return a}function ja(e,n,t,r){typeof e=="boolean"?(Ge(n)&&(t=n,n=void 0),n=n||""):(n=e,t=n,e=!1,Ge(n)&&(t=n,n=void 0),n=n||"");var a=Ke(),i=e?a._week.dow:0,l,o=[];if(t!=null)return _t(n,(t+i)%7,r,"day");for(l=0;l<7;l++)o[l]=_t(n,(l+i)%7,r,"day");return o}function ic(e,n){return ll(e,n,"months")}function oc(e,n){return ll(e,n,"monthsShort")}function lc(e,n,t){return ja(e,n,t,"weekdays")}function sc(e,n,t){return ja(e,n,t,"weekdaysShort")}function uc(e,n,t){return ja(e,n,t,"weekdaysMin")}nn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,t=H(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+t}});A.lang=De("moment.lang is deprecated. Use moment.locale instead.",nn);A.langData=De("moment.langData is deprecated. Use moment.localeData instead.",Ke);var Ue=Math.abs;function mc(){var e=this._data;return this._milliseconds=Ue(this._milliseconds),this._days=Ue(this._days),this._months=Ue(this._months),e.milliseconds=Ue(e.milliseconds),e.seconds=Ue(e.seconds),e.minutes=Ue(e.minutes),e.hours=Ue(e.hours),e.months=Ue(e.months),e.years=Ue(e.years),this}function sl(e,n,t,r){var a=Ae(n,t);return e._milliseconds+=r*a._milliseconds,e._days+=r*a._days,e._months+=r*a._months,e._bubble()}function pc(e,n){return sl(this,e,n,1)}function dc(e,n){return sl(this,e,n,-1)}function ti(e){return e<0?Math.floor(e):Math.ceil(e)}function cc(){var e=this._milliseconds,n=this._days,t=this._months,r=this._data,a,i,l,o,f;return e>=0&&n>=0&&t>=0||e<=0&&n<=0&&t<=0||(e+=ti(zr(t)+n)*864e5,n=0,t=0),r.milliseconds=e%1e3,a=xe(e/1e3),r.seconds=a%60,i=xe(a/60),r.minutes=i%60,l=xe(i/60),r.hours=l%24,n+=xe(l/24),f=xe(ul(n)),t+=f,n-=ti(zr(f)),o=xe(t/12),t%=12,r.days=n,r.months=t,r.years=o,this}function ul(e){return e*4800/146097}function zr(e){return e*146097/4800}function yc(e){if(!this.isValid())return NaN;var n,t,r=this._milliseconds;if(e=Ee(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+r/864e5,t=this._months+ul(n),e){case"month":return t;case"quarter":return t/3;case"year":return t/12}else switch(n=this._days+Math.round(zr(this._months)),e){case"week":return n/7+r/6048e5;case"day":return n+r/864e5;case"hour":return n*24+r/36e5;case"minute":return n*1440+r/6e4;case"second":return n*86400+r/1e3;case"millisecond":return Math.floor(n*864e5)+r;default:throw new Error("Unknown unit "+e)}}function Ze(e){return function(){return this.as(e)}}var ml=Ze("ms"),fc=Ze("s"),gc=Ze("m"),bc=Ze("h"),hc=Ze("d"),vc=Ze("w"),Fc=Ze("M"),wc=Ze("Q"),Oc=Ze("y"),kc=ml;function qc(){return Ae(this)}function Tc(e){return e=Ee(e),this.isValid()?this[e+"s"]():NaN}function gn(e){return function(){return this.isValid()?this._data[e]:NaN}}var xc=gn("milliseconds"),Dc=gn("seconds"),Ec=gn("minutes"),Sc=gn("hours"),Rc=gn("days"),Cc=gn("months"),_c=gn("years");function Ac(){return xe(this.days()/7)}var Le=Math.round,Dn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Ic(e,n,t,r,a){return a.relativeTime(n||1,!!t,e,r)}function Nc(e,n,t,r){var a=Ae(e).abs(),i=Le(a.as("s")),l=Le(a.as("m")),o=Le(a.as("h")),f=Le(a.as("d")),u=Le(a.as("M")),d=Le(a.as("w")),s=Le(a.as("y")),p=i<=t.ss&&["s",i]||i<t.s&&["ss",i]||l<=1&&["m"]||l<t.m&&["mm",l]||o<=1&&["h"]||o<t.h&&["hh",o]||f<=1&&["d"]||f<t.d&&["dd",f];return t.w!=null&&(p=p||d<=1&&["w"]||d<t.w&&["ww",d]),p=p||u<=1&&["M"]||u<t.M&&["MM",u]||s<=1&&["y"]||["yy",s],p[2]=n,p[3]=+e>0,p[4]=r,Ic.apply(null,p)}function jc(e){return e===void 0?Le:typeof e=="function"?(Le=e,!0):!1}function Mc(e,n){return Dn[e]===void 0?!1:n===void 0?Dn[e]:(Dn[e]=n,e==="s"&&(Dn.ss=n-1),!0)}function Pc(e,n){if(!this.isValid())return this.localeData().invalidDate();var t=!1,r=Dn,a,i;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(t=e),typeof n=="object"&&(r=Object.assign({},Dn,n),n.s!=null&&n.ss==null&&(r.ss=n.s-1)),a=this.localeData(),i=Nc(this,!t,r,a),t&&(i=a.pastFuture(+this,i)),a.postformat(i)}var ar=Math.abs;function kn(e){return(e>0)-(e<0)||+e}function Kt(){if(!this.isValid())return this.localeData().invalidDate();var e=ar(this._milliseconds)/1e3,n=ar(this._days),t=ar(this._months),r,a,i,l,o=this.asSeconds(),f,u,d,s;return o?(r=xe(e/60),a=xe(r/60),e%=60,r%=60,i=xe(t/12),t%=12,l=e?e.toFixed(3).replace(/\.?0+$/,""):"",f=o<0?"-":"",u=kn(this._months)!==kn(o)?"-":"",d=kn(this._days)!==kn(o)?"-":"",s=kn(this._milliseconds)!==kn(o)?"-":"",f+"P"+(i?u+i+"Y":"")+(t?u+t+"M":"")+(n?d+n+"D":"")+(a||r||e?"T":"")+(a?s+a+"H":"")+(r?s+r+"M":"")+(e?s+l+"S":"")):"P0D"}var Y=zt.prototype;Y.isValid=Cp;Y.abs=mc;Y.add=pc;Y.subtract=dc;Y.as=yc;Y.asMilliseconds=ml;Y.asSeconds=fc;Y.asMinutes=gc;Y.asHours=bc;Y.asDays=hc;Y.asWeeks=vc;Y.asMonths=Fc;Y.asQuarters=wc;Y.asYears=Oc;Y.valueOf=kc;Y._bubble=cc;Y.clone=qc;Y.get=Tc;Y.milliseconds=xc;Y.seconds=Dc;Y.minutes=Ec;Y.hours=Sc;Y.days=Rc;Y.weeks=Ac;Y.months=Cc;Y.years=_c;Y.humanize=Pc;Y.toISOString=Kt;Y.toString=Kt;Y.toJSON=Kt;Y.locale=Jo;Y.localeData=Qo;Y.toIsoString=De("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Kt);Y.lang=Xo;P("X",0,0,"unix");P("x",0,0,"valueOf");N("x",$t);N("X",im);ee("X",function(e,n,t){t._d=new Date(parseFloat(e)*1e3)});ee("x",function(e,n,t){t._d=new Date(H(e))});//! moment.js
A.version="2.30.1";Bu(te);A.fn=E;A.min=Dp;A.max=Ep;A.now=Sp;A.utc=Pe;A.unix=rc;A.months=ic;A.isDate=at;A.locale=nn;A.invalid=Bt;A.duration=Ae;A.isMoment=_e;A.weekdays=lc;A.parseZone=ac;A.localeData=Ke;A.isDuration=vt;A.monthsShort=oc;A.weekdaysMin=uc;A.defineLocale=Ea;A.updateLocale=ap;A.locales=ip;A.weekdaysShort=sc;A.normalizeUnits=Ee;A.relativeTimeRounding=jc;A.relativeTimeThreshold=Mc;A.calendarFormat=ed;A.prototype=E;A.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};function At(e,n){const t=v.useRef(!1);v.useEffect(()=>{if(t.current)return e();t.current=!0},n)}const Bc=e=>Ps(e,{componentName:"table",defaultValues:{},propsToDrill:["theme"]}),pl={cssConfig:null,filterApi:null,filterVersion:1,groupBy:"",searchValue:"",sorting:{},pagination:{shouldCountClientTotal:!1,useDataSourceFunction:!1},updateContext:()=>{}},dl=v.createContext(pl),fe=()=>v.useContext(dl),Uc=e=>function(t){const{cssConfig:r,dateFormat:a,filterVersion:i=1,useV3TestId:l,...o}=Bc(t),[f,u]=v.useState({...pl,cssConfig:r,dateFormat:a,filterVersion:i,useV3TestId:l}),d=v.useCallback(p=>{u(c=>({...c,...p}))},[]),s=v.useMemo(()=>({...f,updateContext:d}),[f,d]);return m.createElement(dl.Provider,{value:s},m.createElement(e,{...o}))},Lc=[xt.SELECTION_COLUMN,xt.EXPAND_COLUMN],Vc=["_owner","_store"],Gr=function(e,n=""){const t=[],r=a=>{const i=/(<([^>]+)>)/ig;return a.replace(i,"")};if(!e)return"";if(typeof e=="string")t.push(e);else if(e.props&&e.props.dangerouslySetInnerHTML){const a=e.props.dangerouslySetInnerHTML.__html;t.push(a?r(a):"")}else Array.isArray(e)?e.forEach(a=>t.push(Gr(a))):t.push(Gr(e.props.children));return t.join(n)},ve=e=>Lc.includes(e),$c=e=>Vc.includes(e),Wc=(e,n)=>{if(typeof e=="string"&&e.endsWith("%")){const t=parseFloat(e);if(!isNaN(t)&&t>=0&&t<=100)return t/100*n}else if(typeof e=="number"&&e>=0)return e},Hc=(e,n)=>e.map(({sorter:t,filters:r,...a})=>({...a,width:Wc(a.width,n)})),Yc=(e,n)=>{let t=e.parentNode;for(;(t==null?void 0:t.getElementsByClassName(n).length)===0;){if(!t.parentNode){t=null;break}t=t.parentNode}return t},ae=Bs(),cl=to("checkbox"),zc=to("radio"),ye={headSizes:Ha(Ya.BTM3),cellSizes:Ha(Ya.BTR3),dragHandler:{size:20}},yl=e=>{const{rowMode:n="standard"}=e;return n==="standard"?be`
      height: 40px;
      padding: 10px 8px 9px 8px;
    `:be`
      height: 28px;
      padding: 4px 8px 3px 8px;
    `},Gc=e=>{const n=Number(e.stickyHeader)>-1e3&&e.resizingMode!=="scroll"?be`
      position: sticky;
      top: ${e.stickyHeader}px;
      z-index: 3;
    `:"";return be`
    &.ant-table-cell-fix-left,
    .ant-table-cell-fix-right {
      z-index: 4;
    }
    ${n}
    ${yl(e)}
  `},Kc=be`
  .ant-table {
    width: max-content;
    min-width: 100%;

    & table {
      width: max-content;
      min-width: 100%;
      
      thead.ant-table-thead {
        background: ${ae("cell.enabled.background")};
      }
    }
  }
`,Zc=be`
  outline: 1px solid ${ae("validation.outline")};
`,Jc=["cssConfig","resizingMode","useDragDrop","scroll","rowMode","stickyHeader","isValid","columnVerticalAlign"],fl=be`
  .ant-table {
    background-color: ${ae("root.background")};
    color: ${ae("root.color")};

    .ant-table-thead > tr > th {
        background-color: ${ae("root.background")};
        padding: 10px 8px;
        
        &:has(.kl6-table-dropdown) {
          padding: 0 8px;
        }

        border-bottom: none;
        color: inherit;
        
        font-family: ${ye.headSizes.fontFamily};
        font-size: ${ye.headSizes.fontSize};
        line-height: ${ye.headSizes.lineHeight};
        font-weight: ${ye.headSizes.fontWeight};
        font-style: ${ye.headSizes.fontStyle};
        letter-spacing: ${ye.headSizes.letterSpacing};

        &::after {
          content: "";
          border-bottom: 1px solid ${ae("headCell.enabled.border")};
          position: absolute;
          left: 8px;
          bottom: 0;
          right: 8px;
        }

        &:first-child::after {
          left: 0;
        }

        &:last-child::after {
          right: 0;
        }

        &:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
          content: none;
        }
      }

    .ant-table-tbody > tr > td {
      padding: 8px;
      max-width: 100px;

      :not(.ant-table-selection-column) {
        min-width: 100px;
      }

      font-family: ${ye.cellSizes.fontFamily};
      font-size: ${ye.cellSizes.fontSize};
      line-height: ${ye.cellSizes.lineHeight};
      font-weight: ${ye.cellSizes.fontWeight};
      font-style: ${ye.cellSizes.fontStyle};
      letter-spacing: ${ye.cellSizes.letterSpacing};
      position: static;

      border-bottom-color: ${ae("cell.enabled.border")};
      
      tr:last-child td {
        border-bottom: none;
      }

      .hexa-ui-empty-dash-cell {
        color: var(--table_cell--text--disabled);
      }
    }

    &.ant-table-small .ant-table-tbody .ant-table-wrapper:only-child .ant-table {
      margin: 0;
    }
    
    .ant-table-footer {
      color: unset;
      background: unset;
    }
  }

  .ant-spin-container.ant-spin-blur {
    overflow: inherit;
  }
  
  &.table-draggable {
    .ant-table-header, .ant-table-body {
      padding-left: ${ye.dragHandler.size}px;
      margin-left: -${ye.dragHandler.size}px;
    }

    .ant-table-tbody > tr > td {
      position: relative;
    }

    .drag-handle-container {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
    }

    .drag-handle {
      display: inline-block;
      position: relative;
      top: 3px;
      left: -${ye.dragHandler.size}px;
      width: ${ye.dragHandler.size}px;
      opacity: 0;
      text-align: center;
      transition: opacity .1s;

      &:hover {
        opacity: 1;
        transition: opacity .1s;
      }
    }

    tr:hover .drag-handle {
      opacity: 1;
      transition: opacity .1s;
    }

    &.table-row-selection .drag-handle {
      left: calc(-38px - ${ye.dragHandler.size}px);
    }
  }

  .ant-table-container::before {
    width: ${ye.dragHandler.size}px;
  }

  .ant-table-content {
    position: relative;
  }

  .ant-table-tbody > tr.ant-table-row > td {
    background-color: var(--table_row--bg--base);
  }

  .ant-table-tbody > tr.ant-table-placeholder:hover > td {
    background-color: transparent;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: ${ae("cell.hover.background")};
  }

  .ant-table-tbody > tr.ant-table-row:hover [data-expandable-gradient]::after,
  .ant-table-tbody > tr.ant-table-row.ant-table-row-selected:hover [data-expandable-gradient]::after {
    background-color: var(--table_row--bg--hover);
  }

  .ant-table-tbody > tr.ant-table-row.ant-table-row-selected [data-expandable-gradient]::after {
    background-color: var(--table_row--bg--selected);
  }

  .ant-table-bordered td, .ant-table-bordered th {
    border-right: none !important;
  }

  .ant-table-tbody > tr.ant-table-row-selected > td {
    background-color: ${ae("cell.selected.background")};
  }

  .resizing-handle-container {
    position: absolute;
    right: -8px;
    bottom: 0;
    z-index: 1;
    width: 16px;
    height: 100%;
    cursor: col-resize;
    display: flex;
    flex-direction: column;
    align-items: center;

    .resizing-handle {
      opacity: 0;
      width: 1px;
      background: ${ae("resize.hover")};
      height: 100%;
    }

    &:active .resizing-handle {
      background-color: ${ae("resize.active")};
    }

    &:hover .resizing-handle {
      opacity: 1;
    }
  }

  .ant-table-column-sorter {
    display: none;
  }

  .ant-dropdown-trigger {
    width: 100%;
  }

  .ant-checkbox-wrapper {
    ${po(cl)}
  }

  ${su(zc)}
  
  .ant-radio-wrapper {
    justify-content: center;
    &:not(.kl-radio-button-group) {
      line-height: unset;
      gap: unset;
    }
  }

  &&& {
    table {
      mark {
        padding: 0;
      }
    }
    .ant-table-thead th {
      ${e=>Gc(e)}
    }

    .hexa-ui-ellipsis {
      display: inline-grid;
    }

    && td.ant-table-cell {
      vertical-align: ${({columnVerticalAlign:e})=>e||"top"};
      ${e=>yl(e)}
      &:has(.ant-select), &:has(.ant-input) {
        padding: 4px 8px;
      }
    }

    .ant-table-thead th:not(.ant-table-selection-column) {
      min-width: 100px;
    }

    .kl-components-expandable-icon.icon {
      color: ${ae("expandable.icon")};
    }

    .ant-table-thead > tr > th,
    && .ant-table-tbody > tr > td {
      &.ant-table-cell-with-append {
        white-space: nowrap;
      }

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    ${e=>e.useDragDrop?`.drag-handle {
          &:hover {
            cursor: grab
          }
        }`:""}

    .ant-table-tbody > tr.ant-table-row.group-title-row:hover {
      background: ${ae("cell.enabled.background")};

      &:hover {
        background: ${ae("cell.enabled.background")};
      }
    }

    .ant-table-tbody > tr.ant-table-row.group-title-row > td.ant-table-selection-column {
      position: relative; 

      label {
        opacity: 0;
        pointer-events: none;
      }

      &:hover {
        background: ${ae("cell.enabled.background")};
      }
    }

    .ant-table-tbody > tr.ant-table-row:hover > td.group-title {
      background: ${ae("cell.enabled.background")};
    }

    .ant-table-tbody > tr.ant-table-row.group-title-row:hover > td {
      background: ${ae("cell.enabled.background")};
    }

    .ant-table-tbody {
      --line-color: var(--color--neutral_50);
      --bg-mode: multiply;

      .theme-dark & {
        --line-color: var(--color--neutral_800);
        --bg-mode: exclusion;
      }
      .table-bg-diagonal & {
        background-image: repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 10px,
          var(--line-color) 10px,
          var(--line-color) 20px
        );
      }

      .table-bg-diagonal & > tr.row-table-bg-pattern.ant-table-row td {
        mix-blend-mode: var(--bg-mode);
      }
    }
    ${e=>e.resizingMode==="scroll"?Kc:""}
    
    ${({isValid:e})=>e===!1?Zc:""}
  }

  col.ant-table-selection-col, .ant-table-selection-column  {
    width: 30px;
    min-width: 22px;
  }
  
  .ant-empty,
  .ant-empty-normal {
    color: var(--text-color);
  }

  .ant-table-cell-fix-left,
  .ant-table-cell-fix-right {
    background-color: ${ae("root.background")};
  }

  .ant-table-cell-fix-left-last::after {
    width: calc(100% - 8px);
    transform: unset
  }

  ${({scroll:e})=>e!=null&&e.y?be`
        .ant-table-body {
          overflow-y: auto !important;
        }


        .ant-table-header {
          & .ant-table-cell-scrollbar::after {
            display: none;
          }
        }
      `:""}
`;be`
  &.table-height-full {
    display: flex;
    flex-direction: column;
    flex: 1;

    .ant-table-wrapper,
    .ant-spin-nested-loading,
    .ant-spin-container,
    .ant-table,
    .ant-table-container,
    .ant-table-conten,
    .ant-table-content,
    .hexa-ui-table-ref {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .ant-table table {
      height: 100%;
    }

    .hexa-ui-table-ref {
      flex-direction: column;
    }
  }

  ${e=>e.resizingMode==="scroll"?`
    width: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  `:""}
`;const Xc=be`
  .row-dragging {
    background: var(--table-row-hover-bg);
  }

  .row-dragging td {
    padding: 8px 0px 8px 28px;
  }

  .row-dragging .drag-handle {
    visibility: hidden;
  }

  .ant-checkbox-wrapper {
    ${po(cl)}
  }
`;L.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;const Qc=L.div``,ey=L.div`
  &:hover {
    cursor: pointer;
  }

  padding-top: 4px;
  padding-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`,ny=L.span.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: transparent;

  svg {
    color: ${ae("root.color")};
  }
`,ty=L.div`
  margin-top: 8px;
`,ry=e=>{const[n,t]=v.useState(!1);return m.createElement(Qc,null,m.createElement(ey,{onClick:()=>t(!n)},m.createElement(ny,{className:"table-accordion-icon",cssConfig:e.cssConfig},n?m.createElement(ro,null):m.createElement(ru,null)),e.title),n?m.createElement(ty,null,e.children):null)},ay=(e,n,t)=>(r,a)=>{const i={children:r,props:{className:"table-cell-with-accordeon",colSpan:1}};return a.accordeon&&(i.props.colSpan=e===0?n:0,i.children=m.createElement(ry,{title:a.accordeon.title,cssConfig:t},a.accordeon.children),i.props.className=je(i.props.className,"accordeon-row")),i},iy=e=>n=>{const{cssConfig:t}=fe();if(!t)return null;if(!n.useAccordion)return m.createElement(e,{...n});const r=n.columns.map((a,i)=>ve(a)?a:{...a,render:ay(i,n.columns.length,t)});return m.createElement(e,{...n,columns:r})},oy=({children:e,domApi:n=Us,rootElement:t=document.body,element:r=document.createElement("div")})=>{const[a]=v.useState(r);return v.useEffect(()=>(t.appendChild(a),()=>{t.removeChild(a)}),[]),n.createPortal(e,a)};function ri(e){return e===!1||e===void 0?{enabled:!1,showHeader:!1}:e===!0?{enabled:!0,showHeader:!0}:{enabled:!0,showHeader:!e.hideTabHeader}}function gl(e){const{enabled:n,showHeader:t}=ri(e==null?void 0:e.showColumns),{enabled:r,showHeader:a}=ri(e==null?void 0:e.showGrouping);return{showColumnsTab:n,showColumnsHeader:t,showGroupingTab:r,showGroupingHeader:a}}const ly=L.div`
  display: flex;
  gap: 12px;
`,bl=({onSave:e,onClose:n,isSaveDisabled:t})=>m.createElement(ly,null,m.createElement(rn,{"data-testid":"table-settings-save","kl-id":"save",className:"selector-button",disabled:t,onClick:e},m.createElement(le,{localizationKey:"actionBar.save"})),m.createElement(rn,{"data-testid":"table-settings-cancel","kl-id":"cancel",className:"selector-button",mode:"secondary",onClick:n},m.createElement(le,{localizationKey:"actionBar.cancel"}))),sy=m.memo(bl);bl.__docgenInfo={description:"",methods:[],displayName:"ColumnSelectionActions",props:{onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSaveDisabled:{required:!1,tsType:{name:"boolean"},description:""}}};function ir(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&r.push.apply(r,Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.forEach(function(a){X(e,a,t[a])})}return e}var or,ai;function uy(){if(ai)return or;ai=1;var e=function(n,t,r,a,i,l,o,f){if(!n){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[r,a,i,l,o,f],s=0;u=new Error(t.replace(/%s/g,function(){return d[s++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}};return or=e,or}var my=uy();const fn=jn(my);var py=function(){function e(){et(this,e),X(this,"refs",{})}return nt(e,[{key:"add",value:function(t,r){this.refs[t]||(this.refs[t]=[]),this.refs[t].push(r)}},{key:"remove",value:function(t,r){var a=this.getIndex(t,r);a!==-1&&this.refs[t].splice(a,1)}},{key:"isActive",value:function(){return this.active}},{key:"getActive",value:function(){var t=this;return this.refs[this.active.collection].find(function(r){var a=r.node;return a.sortableInfo.index==t.active.index})}},{key:"getIndex",value:function(t,r){return this.refs[t].indexOf(r)}},{key:"getOrderedRefs",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.active.collection;return this.refs[t].sort(dy)}}]),e}();function dy(e,n){var t=e.node.sortableInfo.index,r=n.node.sortableInfo.index;return t-r}function hl(e,n){return Object.keys(e).reduce(function(t,r){return n.indexOf(r)===-1&&(t[r]=e[r]),t},{})}var qn={end:["touchend","touchcancel","mouseup"],move:["touchmove","mousemove"],start:["touchstart","mousedown"]},vl=function(){if(typeof window>"u"||typeof document>"u")return"";var e=window.getComputedStyle(document.documentElement,"")||["-moz-hidden-iframe"],n=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||e.OLink===""&&["","o"])[1];switch(n){case"ms":return"ms";default:return n&&n.length?n[0].toUpperCase()+n.substr(1):""}}();function yt(e,n){Object.keys(n).forEach(function(t){e.style[t]=n[t]})}function ft(e,n){e.style["".concat(vl,"Transform")]=n==null?"":"translate3d(".concat(n.x,"px,").concat(n.y,"px,0)")}function lr(e,n){e.style["".concat(vl,"TransitionDuration")]=n==null?"":"".concat(n,"ms")}function Hn(e,n){for(;e;){if(n(e))return e;e=e.parentNode}return null}function ii(e,n,t){return Math.max(e,Math.min(t,n))}function En(e){return e.substr(-2)==="px"?parseFloat(e):0}function cy(e){var n=window.getComputedStyle(e);return{bottom:En(n.marginBottom),left:En(n.marginLeft),right:En(n.marginRight),top:En(n.marginTop)}}function Ma(e,n){var t=n.displayName||n.name;return t?"".concat(e,"(").concat(t,")"):e}function sr(e,n){var t=e.getBoundingClientRect();return{top:t.top+n.top,left:t.left+n.left}}function Vn(e){return e.touches&&e.touches.length?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.changedTouches&&e.changedTouches.length?{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}:{x:e.pageX,y:e.pageY}}function yy(e){return e.touches&&e.touches.length||e.changedTouches&&e.changedTouches.length}function wt(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{left:0,top:0};if(e){var r={left:t.left+e.offsetLeft,top:t.top+e.offsetTop};return e.parentNode===n?r:wt(e.parentNode,n,r)}}function fy(e,n,t){return e<t&&e>n?e-1:e>t&&e<n?e+1:e}function oi(e){var n=e.lockOffset,t=e.width,r=e.height,a=n,i=n,l="px";if(typeof n=="string"){var o=/^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(n);fn(o!==null,'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',n),a=parseFloat(n),i=parseFloat(n),l=o[1]}return fn(isFinite(a)&&isFinite(i),"lockOffset value should be a finite. Given %s",n),l==="%"&&(a=a*t/100,i=i*r/100),{x:a,y:i}}function gy(e){var n=e.height,t=e.width,r=e.lockOffset,a=Array.isArray(r)?r:[r,r];fn(a.length===2,"lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s",r);var i=ao(a,2),l=i[0],o=i[1];return[oi({height:n,lockOffset:l,width:t}),oi({height:n,lockOffset:o,width:t})]}function by(e){var n=window.getComputedStyle(e),t=/(auto|scroll)/,r=["overflow","overflowX","overflowY"];return r.find(function(a){return t.test(n[a])})}function Fl(e){return e instanceof HTMLElement?by(e)?e:Fl(e.parentNode):null}function hy(e){var n=window.getComputedStyle(e);return n.display==="grid"?{x:En(n.gridColumnGap),y:En(n.gridRowGap)}:{x:0,y:0}}var mn={ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40},pn={Anchor:"A",Button:"BUTTON",Canvas:"CANVAS",Input:"INPUT",Option:"OPTION",Textarea:"TEXTAREA",Select:"SELECT"};function vy(e){var n="input, textarea, select, canvas, [contenteditable]",t=e.querySelectorAll(n),r=e.cloneNode(!0),a=Ls(r.querySelectorAll(n));return a.forEach(function(i,l){if(i.type!=="file"&&(i.value=t[l].value),i.type==="radio"&&i.name&&(i.name="__sortableClone__".concat(i.name)),i.tagName===pn.Canvas&&t[l].width>0&&t[l].height>0){var o=i.getContext("2d");o.drawImage(t[l],0,0)}}),r}function wl(e){var n,t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{withRef:!1};return t=n=function(a){na(i,a);function i(){var l,o;et(this,i);for(var f=arguments.length,u=new Array(f),d=0;d<f;d++)u[d]=arguments[d];return o=ta(this,(l=ra(i)).call.apply(l,[this].concat(u))),X(W(W(o)),"wrappedInstance",v.createRef()),o}return nt(i,[{key:"componentDidMount",value:function(){var o=tt.findDOMNode(this);o.sortableHandle=!0}},{key:"getWrappedInstance",value:function(){return fn(r.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"),this.wrappedInstance.current}},{key:"render",value:function(){var o=r.withRef?this.wrappedInstance:null;return v.createElement(e,aa({ref:o},this.props))}}]),i}(v.Component),X(n,"displayName",Ma("sortableHandle",e)),t}function li(e){return e.sortableHandle!=null}var Fy=function(){function e(n,t){et(this,e),this.container=n,this.onScrollCallback=t}return nt(e,[{key:"clear",value:function(){this.interval!=null&&(clearInterval(this.interval),this.interval=null)}},{key:"update",value:function(t){var r=this,a=t.translate,i=t.minTranslate,l=t.maxTranslate,o=t.width,f=t.height,u={x:0,y:0},d={x:1,y:1},s={x:10,y:10},p=this.container,c=p.scrollTop,y=p.scrollLeft,b=p.scrollHeight,h=p.scrollWidth,g=p.clientHeight,w=p.clientWidth,F=c===0,O=b-c-g===0,k=y===0,T=h-y-w===0;a.y>=l.y-f/2&&!O?(u.y=1,d.y=s.y*Math.abs((l.y-f/2-a.y)/f)):a.x>=l.x-o/2&&!T?(u.x=1,d.x=s.x*Math.abs((l.x-o/2-a.x)/o)):a.y<=i.y+f/2&&!F?(u.y=-1,d.y=s.y*Math.abs((a.y-f/2-i.y)/f)):a.x<=i.x+o/2&&!k&&(u.x=-1,d.x=s.x*Math.abs((a.x-o/2-i.x)/o)),this.interval&&(this.clear(),this.isAutoScrolling=!1),(u.x!==0||u.y!==0)&&(this.interval=setInterval(function(){r.isAutoScrolling=!0;var q={left:d.x*u.x,top:d.y*u.y};r.container.scrollTop+=q.top,r.container.scrollLeft+=q.left,r.onScrollCallback(q)},5))}}]),e}();function wy(e){var n=e.node;return{height:n.offsetHeight,width:n.offsetWidth}}function Oy(e){var n=[pn.Input,pn.Textarea,pn.Select,pn.Option,pn.Button];return!!(n.indexOf(e.target.tagName)!==-1||Hn(e.target,function(t){return t.contentEditable==="true"}))}var Ol={axis:V.oneOf(["x","y","xy"]),contentWindow:V.any,disableAutoscroll:V.bool,distance:V.number,getContainer:V.func,getHelperDimensions:V.func,helperClass:V.string,helperContainer:V.oneOfType([V.func,typeof HTMLElement>"u"?V.any:V.instanceOf(HTMLElement)]),hideSortableGhost:V.bool,keyboardSortingTransitionDuration:V.number,lockAxis:V.string,lockOffset:V.oneOfType([V.number,V.string,V.arrayOf(V.oneOfType([V.number,V.string]))]),lockToContainerEdges:V.bool,onSortEnd:V.func,onSortMove:V.func,onSortOver:V.func,onSortStart:V.func,pressDelay:V.number,pressThreshold:V.number,keyCodes:V.shape({lift:V.arrayOf(V.number),drop:V.arrayOf(V.number),cancel:V.arrayOf(V.number),up:V.arrayOf(V.number),down:V.arrayOf(V.number)}),shouldCancelStart:V.func,transitionDuration:V.number,updateBeforeSortStart:V.func,useDragHandle:V.bool,useWindowAsScrollContainer:V.bool},kl={lift:[mn.SPACE],drop:[mn.SPACE],cancel:[mn.ESC],up:[mn.UP,mn.LEFT],down:[mn.DOWN,mn.RIGHT]},ky={axis:"y",disableAutoscroll:!1,distance:0,getHelperDimensions:wy,hideSortableGhost:!0,lockOffset:"50%",lockToContainerEdges:!1,pressDelay:0,pressThreshold:5,keyCodes:kl,shouldCancelStart:Oy,transitionDuration:300,useWindowAsScrollContainer:!1},qy=Object.keys(Ol);function Ty(e){fn(!(e.distance&&e.pressDelay),"Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")}function xy(e,n){try{var t=e()}catch(r){return n(!0,r)}return t&&t.then?t.then(n.bind(null,!1),n.bind(null,!0)):n(!1,value)}var ql=v.createContext({manager:{}});function Tl(e){var n,t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{withRef:!1};return t=n=function(a){na(i,a);function i(l){var o;et(this,i),o=ta(this,ra(i).call(this,l)),X(W(W(o)),"state",{}),X(W(W(o)),"handleStart",function(u){var d=o.props,s=d.distance,p=d.shouldCancelStart;if(!(u.button===2||p(u))){o.touched=!0,o.position=Vn(u);var c=Hn(u.target,function(F){return F.sortableInfo!=null});if(c&&c.sortableInfo&&o.nodeIsChild(c)&&!o.state.sorting){var y=o.props.useDragHandle,b=c.sortableInfo,h=b.index,g=b.collection,w=b.disabled;if(w||y&&!Hn(u.target,li))return;o.manager.active={collection:g,index:h},!yy(u)&&u.target.tagName===pn.Anchor&&u.preventDefault(),s||(o.props.pressDelay===0?o.handlePress(u):o.pressTimer=setTimeout(function(){return o.handlePress(u)},o.props.pressDelay))}}}),X(W(W(o)),"nodeIsChild",function(u){return u.sortableInfo.manager===o.manager}),X(W(W(o)),"handleMove",function(u){var d=o.props,s=d.distance,p=d.pressThreshold;if(!o.state.sorting&&o.touched&&!o._awaitingUpdateBeforeSortStart){var c=Vn(u),y={x:o.position.x-c.x,y:o.position.y-c.y},b=Math.abs(y.x)+Math.abs(y.y);o.delta=y,!s&&(!p||b>=p)?(clearTimeout(o.cancelTimer),o.cancelTimer=setTimeout(o.cancel,0)):s&&b>=s&&o.manager.isActive()&&o.handlePress(u)}}),X(W(W(o)),"handleEnd",function(){o.touched=!1,o.cancel()}),X(W(W(o)),"cancel",function(){var u=o.props.distance,d=o.state.sorting;d||(u||clearTimeout(o.pressTimer),o.manager.active=null)}),X(W(W(o)),"handlePress",function(u){try{var d=o.manager.getActive(),s=function(){if(d){var p=function(){var S=k.sortableInfo.index,R=cy(k),C=hy(o.container),U=o.scrollContainer.getBoundingClientRect(),j=b({index:S,node:k,collection:T});if(o.node=k,o.margin=R,o.gridGap=C,o.width=j.width,o.height=j.height,o.marginOffset={x:o.margin.left+o.margin.right+o.gridGap.x,y:Math.max(o.margin.top,o.margin.bottom,o.gridGap.y)},o.boundingClientRect=k.getBoundingClientRect(),o.containerBoundingRect=U,o.index=S,o.newIndex=S,o.axis={x:y.indexOf("x")>=0,y:y.indexOf("y")>=0},o.offsetEdge=wt(k,o.container),q?o.initialOffset=Vn(ir({},u,{pageX:o.boundingClientRect.left,pageY:o.boundingClientRect.top})):o.initialOffset=Vn(u),o.initialScroll={left:o.scrollContainer.scrollLeft,top:o.scrollContainer.scrollTop},o.initialWindowScroll={left:window.pageXOffset,top:window.pageYOffset},o.helper=o.helperContainer.appendChild(vy(k)),yt(o.helper,{boxSizing:"border-box",height:"".concat(o.height,"px"),left:"".concat(o.boundingClientRect.left-R.left,"px"),pointerEvents:"none",position:"fixed",top:"".concat(o.boundingClientRect.top-R.top,"px"),width:"".concat(o.width,"px")}),q&&o.helper.focus(),g&&(o.sortableGhost=k,yt(k,{opacity:0,visibility:"hidden"})),o.minTranslate={},o.maxTranslate={},q){var B=O?{top:0,left:0,width:o.contentWindow.innerWidth,height:o.contentWindow.innerHeight}:o.containerBoundingRect,M=B.top,Z=B.left,me=B.width,ln=B.height,bn=M+ln,hn=Z+me;o.axis.x&&(o.minTranslate.x=Z-o.boundingClientRect.left,o.maxTranslate.x=hn-(o.boundingClientRect.left+o.width)),o.axis.y&&(o.minTranslate.y=M-o.boundingClientRect.top,o.maxTranslate.y=bn-(o.boundingClientRect.top+o.height))}else o.axis.x&&(o.minTranslate.x=(O?0:U.left)-o.boundingClientRect.left-o.width/2,o.maxTranslate.x=(O?o.contentWindow.innerWidth:U.left+U.width)-o.boundingClientRect.left-o.width/2),o.axis.y&&(o.minTranslate.y=(O?0:U.top)-o.boundingClientRect.top-o.height/2,o.maxTranslate.y=(O?o.contentWindow.innerHeight:U.top+U.height)-o.boundingClientRect.top-o.height/2);h&&h.split(" ").forEach(function(Ie){return o.helper.classList.add(Ie)}),o.listenerNode=u.touches?u.target:o.contentWindow,q?(o.listenerNode.addEventListener("wheel",o.handleKeyEnd,!0),o.listenerNode.addEventListener("mousedown",o.handleKeyEnd,!0),o.listenerNode.addEventListener("keydown",o.handleKeyDown)):(qn.move.forEach(function(Ie){return o.listenerNode.addEventListener(Ie,o.handleSortMove,!1)}),qn.end.forEach(function(Ie){return o.listenerNode.addEventListener(Ie,o.handleSortEnd,!1)})),o.setState({sorting:!0,sortingIndex:S}),F&&F({node:k,index:S,collection:T,isKeySorting:q,nodes:o.manager.getOrderedRefs(),helper:o.helper},u),q&&o.keyMove(0)},c=o.props,y=c.axis,b=c.getHelperDimensions,h=c.helperClass,g=c.hideSortableGhost,w=c.updateBeforeSortStart,F=c.onSortStart,O=c.useWindowAsScrollContainer,k=d.node,T=d.collection,q=o.manager.isKeySorting,D=function(){if(typeof w=="function"){o._awaitingUpdateBeforeSortStart=!0;var _=xy(function(){var S=k.sortableInfo.index;return Promise.resolve(w({collection:T,index:S,node:k,isKeySorting:q},u)).then(function(){})},function(S,R){if(o._awaitingUpdateBeforeSortStart=!1,S)throw R;return R});if(_&&_.then)return _.then(function(){})}}();return D&&D.then?D.then(p):p(D)}}();return Promise.resolve(s&&s.then?s.then(function(){}):void 0)}catch(p){return Promise.reject(p)}}),X(W(W(o)),"handleSortMove",function(u){var d=o.props.onSortMove;typeof u.preventDefault=="function"&&u.cancelable&&u.preventDefault(),o.updateHelperPosition(u),o.animateNodes(),o.autoscroll(),d&&d(u)}),X(W(W(o)),"handleSortEnd",function(u){var d=o.props,s=d.hideSortableGhost,p=d.onSortEnd,c=o.manager,y=c.active.collection,b=c.isKeySorting,h=o.manager.getOrderedRefs();o.listenerNode&&(b?(o.listenerNode.removeEventListener("wheel",o.handleKeyEnd,!0),o.listenerNode.removeEventListener("mousedown",o.handleKeyEnd,!0),o.listenerNode.removeEventListener("keydown",o.handleKeyDown)):(qn.move.forEach(function(k){return o.listenerNode.removeEventListener(k,o.handleSortMove)}),qn.end.forEach(function(k){return o.listenerNode.removeEventListener(k,o.handleSortEnd)}))),o.helper.parentNode.removeChild(o.helper),s&&o.sortableGhost&&yt(o.sortableGhost,{opacity:"",visibility:""});for(var g=0,w=h.length;g<w;g++){var F=h[g],O=F.node;F.edgeOffset=null,F.boundingClientRect=null,ft(O,null),lr(O,null),F.translate=null}o.autoScroller.clear(),o.manager.active=null,o.manager.isKeySorting=!1,o.setState({sorting:!1,sortingIndex:null}),typeof p=="function"&&p({collection:y,newIndex:o.newIndex,oldIndex:o.index,isKeySorting:b,nodes:h},u),o.touched=!1}),X(W(W(o)),"autoscroll",function(){var u=o.props.disableAutoscroll,d=o.manager.isKeySorting;if(u){o.autoScroller.clear();return}if(d){var s=ir({},o.translate),p=0,c=0;o.axis.x&&(s.x=Math.min(o.maxTranslate.x,Math.max(o.minTranslate.x,o.translate.x)),p=o.translate.x-s.x),o.axis.y&&(s.y=Math.min(o.maxTranslate.y,Math.max(o.minTranslate.y,o.translate.y)),c=o.translate.y-s.y),o.translate=s,ft(o.helper,o.translate),o.scrollContainer.scrollLeft+=p,o.scrollContainer.scrollTop+=c;return}o.autoScroller.update({height:o.height,maxTranslate:o.maxTranslate,minTranslate:o.minTranslate,translate:o.translate,width:o.width})}),X(W(W(o)),"onAutoScroll",function(u){o.translate.x+=u.left,o.translate.y+=u.top,o.animateNodes()}),X(W(W(o)),"handleKeyDown",function(u){var d=u.keyCode,s=o.props,p=s.shouldCancelStart,c=s.keyCodes,y=c===void 0?{}:c,b=ir({},kl,y);o.manager.active&&!o.manager.isKeySorting||!o.manager.active&&(!b.lift.includes(d)||p(u)||!o.isValidSortingTarget(u))||(u.stopPropagation(),u.preventDefault(),b.lift.includes(d)&&!o.manager.active?o.keyLift(u):b.drop.includes(d)&&o.manager.active?o.keyDrop(u):b.cancel.includes(d)?(o.newIndex=o.manager.active.index,o.keyDrop(u)):b.up.includes(d)?o.keyMove(-1):b.down.includes(d)&&o.keyMove(1))}),X(W(W(o)),"keyLift",function(u){var d=u.target,s=Hn(d,function(b){return b.sortableInfo!=null}),p=s.sortableInfo,c=p.index,y=p.collection;o.initialFocusedNode=d,o.manager.isKeySorting=!0,o.manager.active={index:c,collection:y},o.handlePress(u)}),X(W(W(o)),"keyMove",function(u){var d=o.manager.getOrderedRefs(),s=d[d.length-1].node.sortableInfo.index,p=o.newIndex+u,c=o.newIndex;if(!(p<0||p>s)){o.prevIndex=c,o.newIndex=p;var y=fy(o.newIndex,o.prevIndex,o.index),b=d.find(function(q){var D=q.node;return D.sortableInfo.index===y}),h=b.node,g=o.containerScrollDelta,w=b.boundingClientRect||sr(h,g),F=b.translate||{x:0,y:0},O={top:w.top+F.y-g.top,left:w.left+F.x-g.left},k=c<p,T={x:k&&o.axis.x?h.offsetWidth-o.width:0,y:k&&o.axis.y?h.offsetHeight-o.height:0};o.handleSortMove({pageX:O.left+T.x,pageY:O.top+T.y,ignoreTransition:u===0})}}),X(W(W(o)),"keyDrop",function(u){o.handleSortEnd(u),o.initialFocusedNode&&o.initialFocusedNode.focus()}),X(W(W(o)),"handleKeyEnd",function(u){o.manager.active&&o.keyDrop(u)}),X(W(W(o)),"isValidSortingTarget",function(u){var d=o.props.useDragHandle,s=u.target,p=Hn(s,function(c){return c.sortableInfo!=null});return p&&p.sortableInfo&&!p.sortableInfo.disabled&&(d?li(s):s.sortableInfo)});var f=new py;return Ty(l),o.manager=f,o.wrappedInstance=v.createRef(),o.sortableContextValue={manager:f},o.events={end:o.handleEnd,move:o.handleMove,start:o.handleStart},o}return nt(i,[{key:"componentDidMount",value:function(){var o=this,f=this.props.useWindowAsScrollContainer,u=this.getContainer();Promise.resolve(u).then(function(d){o.container=d,o.document=o.container.ownerDocument||document;var s=o.props.contentWindow||o.document.defaultView||window;o.contentWindow=typeof s=="function"?s():s,o.scrollContainer=f?o.document.scrollingElement||o.document.documentElement:Fl(o.container)||o.container,o.autoScroller=new Fy(o.scrollContainer,o.onAutoScroll),Object.keys(o.events).forEach(function(p){return qn[p].forEach(function(c){return o.container.addEventListener(c,o.events[p],!1)})}),o.container.addEventListener("keydown",o.handleKeyDown)})}},{key:"componentWillUnmount",value:function(){var o=this;this.helper&&this.helper.parentNode&&this.helper.parentNode.removeChild(this.helper),this.container&&(Object.keys(this.events).forEach(function(f){return qn[f].forEach(function(u){return o.container.removeEventListener(u,o.events[f])})}),this.container.removeEventListener("keydown",this.handleKeyDown))}},{key:"updateHelperPosition",value:function(o){var f=this.props,u=f.lockAxis,d=f.lockOffset,s=f.lockToContainerEdges,p=f.transitionDuration,c=f.keyboardSortingTransitionDuration,y=c===void 0?p:c,b=this.manager.isKeySorting,h=o.ignoreTransition,g=Vn(o),w={x:g.x-this.initialOffset.x,y:g.y-this.initialOffset.y};if(w.y-=window.pageYOffset-this.initialWindowScroll.top,w.x-=window.pageXOffset-this.initialWindowScroll.left,this.translate=w,s){var F=gy({height:this.height,lockOffset:d,width:this.width}),O=ao(F,2),k=O[0],T=O[1],q={x:this.width/2-k.x,y:this.height/2-k.y},D={x:this.width/2-T.x,y:this.height/2-T.y};w.x=ii(this.minTranslate.x+q.x,this.maxTranslate.x-D.x,w.x),w.y=ii(this.minTranslate.y+q.y,this.maxTranslate.y-D.y,w.y)}u==="x"?w.y=0:u==="y"&&(w.x=0),b&&y&&!h&&lr(this.helper,y),ft(this.helper,w)}},{key:"animateNodes",value:function(){var o=this.props,f=o.transitionDuration,u=o.hideSortableGhost,d=o.onSortOver,s=this.containerScrollDelta,p=this.windowScrollDelta,c=this.manager.getOrderedRefs(),y={left:this.offsetEdge.left+this.translate.x+s.left,top:this.offsetEdge.top+this.translate.y+s.top},b=this.manager.isKeySorting,h=this.newIndex;this.newIndex=null;for(var g=0,w=c.length;g<w;g++){var F=c[g].node,O=F.sortableInfo.index,k=F.offsetWidth,T=F.offsetHeight,q={height:this.height>T?T/2:this.height/2,width:this.width>k?k/2:this.width/2},D=b&&O>this.index&&O<=h,_=b&&O<this.index&&O>=h,S={x:0,y:0},R=c[g].edgeOffset;R||(R=wt(F,this.container),c[g].edgeOffset=R,b&&(c[g].boundingClientRect=sr(F,s)));var C=g<c.length-1&&c[g+1],U=g>0&&c[g-1];if(C&&!C.edgeOffset&&(C.edgeOffset=wt(C.node,this.container),b&&(C.boundingClientRect=sr(C.node,s))),O===this.index){u&&(this.sortableGhost=F,yt(F,{opacity:0,visibility:"hidden"}));continue}f&&lr(F,f),this.axis.x?this.axis.y?_||O<this.index&&(y.left+p.left-q.width<=R.left&&y.top+p.top<=R.top+q.height||y.top+p.top+q.height<=R.top)?(S.x=this.width+this.marginOffset.x,R.left+S.x>this.containerBoundingRect.width-q.width&&C&&(S.x=C.edgeOffset.left-R.left,S.y=C.edgeOffset.top-R.top),this.newIndex===null&&(this.newIndex=O)):(D||O>this.index&&(y.left+p.left+q.width>=R.left&&y.top+p.top+q.height>=R.top||y.top+p.top+q.height>=R.top+T))&&(S.x=-(this.width+this.marginOffset.x),R.left+S.x<this.containerBoundingRect.left+q.width&&U&&(S.x=U.edgeOffset.left-R.left,S.y=U.edgeOffset.top-R.top),this.newIndex=O):D||O>this.index&&y.left+p.left+q.width>=R.left?(S.x=-(this.width+this.marginOffset.x),this.newIndex=O):(_||O<this.index&&y.left+p.left<=R.left+q.width)&&(S.x=this.width+this.marginOffset.x,this.newIndex==null&&(this.newIndex=O)):this.axis.y&&(D||O>this.index&&y.top+p.top+q.height>=R.top?(S.y=-(this.height+this.marginOffset.y),this.newIndex=O):(_||O<this.index&&y.top+p.top<=R.top+q.height)&&(S.y=this.height+this.marginOffset.y,this.newIndex==null&&(this.newIndex=O))),ft(F,S),c[g].translate=S}this.newIndex==null&&(this.newIndex=this.index),b&&(this.newIndex=h);var j=b?this.prevIndex:h;d&&this.newIndex!==j&&d({collection:this.manager.active.collection,index:this.index,newIndex:this.newIndex,oldIndex:j,isKeySorting:b,nodes:c,helper:this.helper})}},{key:"getWrappedInstance",value:function(){return fn(r.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"),this.wrappedInstance.current}},{key:"getContainer",value:function(){var o=this.props.getContainer;return typeof o!="function"?tt.findDOMNode(this):o(r.withRef?this.getWrappedInstance():void 0)}},{key:"render",value:function(){var o=r.withRef?this.wrappedInstance:null;return v.createElement(ql.Provider,{value:this.sortableContextValue},v.createElement(e,aa({ref:o},hl(this.props,qy))))}},{key:"helperContainer",get:function(){var o=this.props.helperContainer;return typeof o=="function"?o():this.props.helperContainer||this.document.body}},{key:"containerScrollDelta",get:function(){var o=this.props.useWindowAsScrollContainer;return o?{left:0,top:0}:{left:this.scrollContainer.scrollLeft-this.initialScroll.left,top:this.scrollContainer.scrollTop-this.initialScroll.top}}},{key:"windowScrollDelta",get:function(){return{left:this.contentWindow.pageXOffset-this.initialWindowScroll.left,top:this.contentWindow.pageYOffset-this.initialWindowScroll.top}}}]),i}(v.Component),X(n,"displayName",Ma("sortableList",e)),X(n,"defaultProps",ky),X(n,"propTypes",Ol),t}var xl={index:V.number.isRequired,collection:V.oneOfType([V.number,V.string]),disabled:V.bool},Dy=Object.keys(xl);function Dl(e){var n,t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{withRef:!1};return t=n=function(a){na(i,a);function i(){var l,o;et(this,i);for(var f=arguments.length,u=new Array(f),d=0;d<f;d++)u[d]=arguments[d];return o=ta(this,(l=ra(i)).call.apply(l,[this].concat(u))),X(W(W(o)),"wrappedInstance",v.createRef()),o}return nt(i,[{key:"componentDidMount",value:function(){this.register()}},{key:"componentDidUpdate",value:function(o){this.node&&(o.index!==this.props.index&&(this.node.sortableInfo.index=this.props.index),o.disabled!==this.props.disabled&&(this.node.sortableInfo.disabled=this.props.disabled)),o.collection!==this.props.collection&&(this.unregister(o.collection),this.register())}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"register",value:function(){var o=this.props,f=o.collection,u=o.disabled,d=o.index,s=tt.findDOMNode(this);s.sortableInfo={collection:f,disabled:u,index:d,manager:this.context.manager},this.node=s,this.ref={node:s},this.context.manager.add(f,this.ref)}},{key:"unregister",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.collection;this.context.manager.remove(o,this.ref)}},{key:"getWrappedInstance",value:function(){return fn(r.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"),this.wrappedInstance.current}},{key:"render",value:function(){var o=r.withRef?this.wrappedInstance:null;return v.createElement(e,aa({ref:o},hl(this.props,Dy)))}}]),i}(v.Component),X(n,"displayName",Ma("sortableElement",e)),X(n,"contextType",ql),X(n,"propTypes",xl),X(n,"defaultProps",{collection:0}),t}const Ey=L.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 0;

  .select-all-item {
    align-items: center;
    margin-left: 20px;
    margin-top: 0;

    p {
      margin-left: ${Tt[8]}px;
    }
  }

  .grouping-item {
    p {
      display: contents;
    }
  }
`,Sy=L.div`
  flex-grow: 1;
  overflow: auto;
`,Pa=({children:e})=>m.createElement(Ey,null,m.createElement(Sy,null,e));Pa.__docgenInfo={description:"",methods:[],displayName:"SelectorWrapper"};const Ry=L(wu)`
  display: block;
`,Cy=wl(()=>m.createElement(Ry,{name:"DragDrop"})),si=L.div`
  padding-top: 4px;
`,_y=L.div`
  cursor: pointer;
  justify-self: flex-end;
  color: var(--action_button--icon--ghost--enabled);
`,El=L.div`
  flex-grow: 1;

  span{
    font-weight: 400;
    user-select: none;
  }
`,Sl=L.label`
  cursor: pointer;
  display: flex;
  z-index: 700;
  margin-top: 8px;
  align-items: center;
  line-height: 1;
  gap: 4px;

  &.selector-item-dragging {
    z-index: 1200;
  }

  p {
    margin-top: ${Tt[1]}px;
    margin-left: ${Tt[4]}px;
  }
`,Rl=L.div`
  display: flex;
  gap: 4px;
  align-items: center;
`,Ay=L.div`
  padding-left: 20px;
`,Cl=({value:e,prefix:n})=>{const{column:t,column:{show:r,title:a,dataIndex:i,hideColumnAvailable:l}}=e,o=m.createElement(Rl,null,m.createElement(Nn,{checked:r,disabled:!l,onChange:()=>e.onChange(t)}),m.createElement(El,null,m.createElement(on,{type:"BTM3"},a)));return m.createElement(Sl,{className:"selector-item","data-testid":`selector-item-${i}`},n,l?o:m.createElement(ia,{text:m.createElement(le,{localizationKey:"table.columnsSettings.columnHideIsUnavailable"})},o))},Iy=Dl(({value:e})=>m.createElement(Cl,{value:e,prefix:m.createElement(_y,null,m.createElement(Cy,null))})),Ny=({value:e})=>m.createElement(Cl,{value:e}),jy=Tl(({children:e,draggingAvailable:n})=>n?m.createElement(si,null,e):m.createElement(si,null,m.createElement(Ay,null,e))),My=(e,n,t)=>{const r=n<0?e.length+n:n;if(r>=0&&r<e.length){const a=t<0?e.length+t:t,[i]=e.splice(n,1);e.splice(a,0,i)}},Py=(e,n,t)=>(e=[...e],My(e,n,t),e);function By(e){return e.reduce((n,t)=>n=n||t.show,!1)}function ui(e){return e.filter(t=>!ve(t)).every(({show:t})=>t)}function mi(e){const n=e.filter(a=>!ve(a)&&a.hideColumnAvailable),t=n.every(({show:a})=>a);return n.some(({show:a})=>a)&&!t}const _l=({columns:e,setColumns:n,draggingAvailable:t=!0,searchValue:r})=>{const[a,i]=v.useState(ui(e)),[l,o]=v.useState(mi(e)),f=y=>{const b=r?y.filter(h=>h.dataIndex.toLowerCase().includes(r.toLowerCase())):y;i(ui(b)),o(mi(b))},u=({oldIndex:y,newIndex:b})=>{n(Py(e,y,b))},d=()=>{const y=new Set(p.map(h=>h.dataIndex)),b=e.map(h=>y.has(h.dataIndex)?ve(h)?h:{...h,show:h.hideColumnAvailable?!a:!0}:h);n(b),f(b)},s=y=>{const b=e.findIndex(g=>{var w;return((w=g.dataIndex)==null?void 0:w.localeCompare(y.dataIndex))===0}),h=e.map((g,w)=>w===b?{...g,show:y.hideColumnAvailable?!g.show:!0}:g);n(h),f(h)},p=v.useMemo(()=>e.filter(b=>!ve(b)).filter(b=>b.dataIndex.toLowerCase().includes(r==null?void 0:r.toLowerCase())),[e,r]),c=v.useMemo(()=>e.some(({hideColumnAvailable:y})=>y),[e]);return v.useEffect(()=>{f(e)},[e,r]),m.createElement(Pa,null,m.createElement(Sl,{className:"selector-item select-all-item"},m.createElement(Rl,null,m.createElement(Nn,{checked:a,indeterminate:l,disabled:!c,onChange:d}),m.createElement(El,null,m.createElement(on,{type:"BTM3"},m.createElement(le,{localizationKey:"table.columnsSettings.selectAll"}))))),m.createElement(jy,{distance:2,onSortEnd:u,helperClass:"selector-item-dragging",draggingAvailable:t},p.map((y,b)=>t?m.createElement(Iy,{key:`item-${y.dataIndex}-${b}`,index:b,value:{column:y,onChange:()=>s(y)}}):m.createElement(Ny,{key:`item-${y.dataIndex}-${b}`,value:{column:y,onChange:()=>s(y)}}))))};_l.__docgenInfo={description:"",methods:[],displayName:"ColumnsSelector",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},setColumns:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: any[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"value"}],return:{name:"void"}}},description:""},draggingAvailable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},searchValue:{required:!1,tsType:{name:"string"},description:""}}};const Al=({groupBy:e,setGroupBy:n,options:t,searchValue:r})=>{const a=v.useMemo(()=>r?t.filter(i=>i.value.toLowerCase().includes(r.toLowerCase())):t,[t,r]);return m.createElement(Pa,null,m.createElement(uu,{vertical:!0,className:"grouping-item",options:[{label:m.createElement(on,{type:"BTM3"},m.createElement(le,{localizationKey:"table.columnsSettings.noGrouping"})),value:""},...a],onChange:i=>{n(i.target.value)},value:e}))};Al.__docgenInfo={description:"",methods:[],displayName:"GroupingSelector",props:{groupBy:{required:!0,tsType:{name:"string"},description:""},setGroupBy:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},searchValue:{required:!1,tsType:{name:"string"},description:""}}};const Uy=L.div`
  .ant-tabs-nav-list {
    padding: 0 24px;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
`,pi=(e,n)=>e.map(t=>{if(ve(t))return t;const a={...t};return(n==null?void 0:n.expandColumnName)===a.dataIndex&&(a.show=!0,a.hideColumnAvailable=!1),a.show===void 0&&(a.show=!0),a}),Ly=(e,n,t)=>{let r=n;const a=[];return e.forEach(i=>{const l=t&&t.every(o=>Object.prototype.hasOwnProperty.call(o,i.dataIndex));i.groupingAvailable&&l&&i.show&&a.push({label:i.title,value:i.dataIndex}),i.dataIndex===n&&!i.show&&(r="")}),{options:a,groupByValue:r}},Vy=e=>function(t){var U;const{showColumnsTab:r,showColumnsHeader:a,showGroupingTab:i,showGroupingHeader:l}=gl(t.toolbar),[o,f]=v.useState(()=>r?"columns":i?"grouping":"columns"),[u,d]=v.useState(pi(t.columns??[],t.expandable)),[s,p]=v.useState(t.groupBy??""),[c,y]=v.useState(u),[b,h]=v.useState(s),[g,w]=v.useState(""),[F,O]=v.useState([]),{updateContext:k}=fe();v.useEffect(()=>{p(t.groupBy??"")},[t.groupBy]),v.useEffect(()=>{k({groupBy:s})},[s]),v.useEffect(()=>{o==="columns"&&!r&&f("grouping"),o==="grouping"&&!i&&f("columns"),!r&&!i&&f(void 0)},[o,r,i]),v.useEffect(()=>{d(pi(t.columns??[],t.expandable))},[t.columns,t.expandable]),At(()=>{y(u)},[u]),At(()=>{h(s)},[s]),v.useEffect(()=>{if(o==="grouping"){const{options:j,groupByValue:B}=Ly(c,b,t.dataSource);O(j),h(B)}},[o]);const T=v.useMemo(()=>u.filter(j=>ve(j)||j.show),[u]),q=()=>{var j;h(s),y(u),(j=t.onCloseColumnsSelector)==null||j.call(t),w("")},D=()=>{var j,B,M;d(c),p(b),(j=t.onColumnsChange)==null||j.call(t,c),(B=t.onGroupByChange)==null||B.call(t,b),(M=t.onCloseColumnsSelector)==null||M.call(t),w("")},_=tn("table.columnsSettings.header"),S=v.useMemo(()=>o==="columns"&&!By(c),[o,c]),R=!a&&!l,C=j=>{y(B=>g?B.map(M=>j.find(me=>me.dataIndex===M.dataIndex)??M):j)};return m.createElement(m.Fragment,null,t.showColumnsSelector&&m.createElement(oy,null,m.createElement(vo,{size:"extraSmall",onClose:q,visible:t.showColumnsSelector,title:_,subHeader:!R&&m.createElement(Uy,null,m.createElement(er,{activeKey:o,onChange:j=>{f(j)}},r&&m.createElement(er.TabPane,{key:"columns",tab:m.createElement("span",{"data-testid":"table-settings-columns-tab","kl-id":"columns-tab"},m.createElement(le,{localizationKey:"table.columnsSettings.columns"}))}),i&&m.createElement(er.TabPane,{key:"grouping",tab:m.createElement("span",{"data-testid":"table-settings-grouping-tab","kl-id":"grouping-tab"},m.createElement(le,{localizationKey:"table.columnsSettings.grouping"}))}))),footer:m.createElement(sy,{onSave:D,onClose:q,isSaveDisabled:S})},m.createElement(Nt,{gap:"section"},((U=t.toolbar)==null?void 0:U.showSettingsSearch)&&m.createElement(ca,{value:g,onChange:w,onClearClick:()=>w("")}),o==="columns"&&m.createElement(_l,{columns:c,setColumns:C,draggingAvailable:g==="",searchValue:g}),o==="grouping"&&m.createElement(Al,{groupBy:b,setGroupBy:h,options:F,searchValue:g})))),m.createElement(e,{...t,columns:T,groupBy:s}))},$y=wl(()=>m.createElement("span",{className:"drag-handle-container"},m.createElement(pa,{size:"small",name:"DragDrop",className:"drag-handle"}))),Wy=Dl(e=>m.createElement("tr",{...e})),Hy=Tl(e=>m.createElement("tbody",{...e})),Yy=(e,n,t)=>{const r=[...e],a=t<0?r.length+t:t,[i]=r.splice(n,1);return r.splice(a,0,i),r},zy=e=>function(t){const r=m.useRef(t.dataSource?[...t.dataSource]:[]),[a,i]=v.useState([...t.columns]),[l,o]=v.useState({...t.components});return v.useEffect(()=>{if(t.useDragDrop&&t.dataSource&&!so(t.dataSource,r.current)){const f=[...t.dataSource];f.forEach((u,d)=>{u.index=d}),r.current=f}},[t.dataSource,t.useDragDrop]),v.useEffect(()=>{if(t.useDragDrop&&t.columns.length){const f=t.columns[0];i([{...f,render:(u,d,s)=>m.createElement(m.Fragment,null,m.createElement($y,null),f.render?f.render(u,d,s):u)},...t.columns.slice(1)])}},[t.useDragDrop,t.columns]),v.useEffect(()=>{if(t.useDragDrop){const f=document.querySelector(".row-dragging-container"),u=({oldIndex:p,newIndex:c})=>{const y=Yy(r.current,p,c);r.current=y,t.onDragEnd&&typeof t.onDragEnd=="function"&&t.onDragEnd(y)};o({body:{wrapper:p=>m.createElement(Hy,{useDragHandle:!0,disableAutoscroll:!0,helperClass:"row-dragging",onSortEnd:u,helperContainer:f,axis:"y",lockAxis:"y",...p}),row:p=>{const c=r.current.findIndex(y=>y.key===p["data-row-key"]);return m.createElement(Wy,{index:c,...p})}}})}},[r,t.useDragDrop]),t.useDragDrop?m.createElement(e,{...t,dataSource:r.current,columns:a,components:l,className:je(t.className,"table-draggable",{"table-row-selection":!!t.rowSelection})}):m.createElement(e,{...t})},di=()=>m.createElement(on,{className:"hexa-ui-empty-dash-cell","data-hexa-empty-dash":!0},"—"),Gy=e=>({columns:n=[],...t})=>{const r=v.useMemo(()=>n.map(a=>a.hasEmptyCellDash?{...a,render:(i,l,o)=>a.render?a.render(i,l,o)||m.createElement(di,null):i||m.createElement(di,null)}:a),[n]);return m.createElement(e,{...t,columns:r})};var I=(e=>(e.Text="text",e.Number="number",e.Boolean="boolean",e.Enum="enum",e.DateTime="datetime",e.DateRange="dateRange",e.DaysBefore="daysBefore",e.Radio="radio",e.IP="ip",e))(I||{}),x=(e=>(e.eq="=",e.neq="≠",e.gt=">",e.ge="≥",e.lt="<",e.le="≤",e.cont="⊆",e.ncont="⊄",e.cont_and="cont_and",e.cont_or="cont_or",e.ncont_or="ncont_or",e.regexp="*=",e.empty="empty",e.nempty="nempty",e.range="range",e.nrange="nrange",e.custom="filters",e))(x||{}),ur,ci;function Ky(){if(ci)return ur;ci=1;var e=oa(),n=co(),t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,l){if(e(i))return!1;var o=typeof i;return o=="number"||o=="symbol"||o=="boolean"||i==null||n(i)?!0:r.test(i)||!t.test(i)||l!=null&&i in Object(l)}return ur=a,ur}var mr,yi;function Zy(){if(yi)return mr;yi=1;var e=Vs(),n="Expected a function";function t(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(n);var i=function(){var l=arguments,o=a?a.apply(this,l):l[0],f=i.cache;if(f.has(o))return f.get(o);var u=r.apply(this,l);return i.cache=f.set(o,u)||f,u};return i.cache=new(t.Cache||e),i}return t.Cache=e,mr=t,mr}var pr,fi;function Jy(){if(fi)return pr;fi=1;var e=Zy(),n=500;function t(r){var a=e(r,function(l){return i.size===n&&i.clear(),l}),i=a.cache;return a}return pr=t,pr}var dr,gi;function Xy(){if(gi)return dr;gi=1;var e=Jy(),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,t=/\\(\\)?/g,r=e(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(n,function(l,o,f,u){i.push(f?u.replace(t,"$1"):o||l)}),i});return dr=r,dr}var cr,bi;function Qy(){if(bi)return cr;bi=1;var e=oa(),n=Ky(),t=Xy(),r=mu();function a(i,l){return e(i)?i:n(i,l)?[i]:t(r(i))}return cr=a,cr}var yr,hi;function ef(){if(hi)return yr;hi=1;var e=co();function n(t){if(typeof t=="string"||e(t))return t;var r=t+"";return r=="0"&&1/t==-1/0?"-0":r}return yr=n,yr}var fr,vi;function nf(){if(vi)return fr;vi=1;var e=Qy(),n=ef();function t(r,a){a=e(a,r);for(var i=0,l=a.length;r!=null&&i<l;)r=r[n(a[i++])];return i&&i==l?r:void 0}return fr=t,fr}var gr,Fi;function tf(){if(Fi)return gr;Fi=1;var e=nf();function n(t,r,a){var i=t==null?void 0:e(t,r);return i===void 0?a:i}return gr=n,gr}var rf=tf();const $e=jn(rf),ke=e=>{if(typeof e=="number")return e;if(e==null)return NaN;if(typeof e=="string"){const n=Date.parse(e);if(!isNaN(n))return n;try{return yu(e,"dd.MM.yyyy HH:mm:ss",new Date).getTime()}catch{return NaN}}return e.getTime()},An=e=>{try{return e?e instanceof Date?e:new Date(e):null}catch(n){console.error("Wrong ISO-string format",n)}return null},$n=(e,n)=>A(An(e)).format(n),Kr=e=>Array.isArray(e)?e.map(Kr):isNaN(+e)?e:+e,af=(e,n)=>({name:n,filterName:e.name,predicate:e.filter}),of=e=>{const n=[];return Object.entries(e).forEach(([t,r])=>{Object.entries(r).forEach(([a,i])=>{n.push({name:t,filterName:a,predicate:i})})}),n},Il=(e,n=[])=>{var r;const t=(r=n.find(a=>a.name===e))==null?void 0:r.filter;if(!t){console.warn(`${oe} Can't find filter function ${e}`);return}return t},Nl=(e,n)=>n.find(t=>t.dataIndex===e).filters,lf=async e=>{var t;const n={};for(const r of e)if(r.dataIndex&&((t=r.filterType)==null?void 0:t.type)===I.Enum)try{let a=[];r.filterType.getAvailableOptions?a=await r.filterType.getAvailableOptions():r.filterType.getAvailableValues&&(a=(await r.filterType.getAvailableValues()).map(i=>({value:i,label:String(i)}))),n[r.dataIndex]=a}catch(a){console.error(`${oe} Error loading enum options for column ${r.dataIndex}:`,a)}return n},It=(e,n=!0)=>se(e)||an(e,n),se=e=>e&&!("items"in e)&&!("predicate"in e)&&"name"in e&&"type"in e&&"condition"in e&&"value"in e,Ot=e=>se(e)&&"id"in e,an=(e,n=!0)=>e&&!("items"in e)&&(n?"predicate"in e:!0)&&"name"in e&&"filterName"in e,de=e=>e&&"items"in e&&"id"in e,In=(e,n)=>se(e)&&se(n)?e.name===n.name&&e.type===n.type&&e.condition===n.condition&&so(e.value,n.value)&&e.attribute===n.attribute:an(e)&&an(n)?e.filterName===n.filterName&&e.name===n.name:de(e)&&de(n)?e.id===n.id:!1,oe="[hexa-ui][Filters]:",sf=({message:e,shouldThrowError:n=!1})=>{if(n)throw new Error(e);console.warn(e)},wi=({filters:e,message:n,shouldThrowError:t=!1,withPredicate:r})=>{let a=!0;const i=l=>de(l)?l.items.every(i):It(l,r);Array.isArray(e)?a=e.every(i):a=i(e),a||sf({message:n,shouldThrowError:t})},uf=e=>(e==null?void 0:e.some(n=>{var t;return(t=n==null?void 0:n.filters)==null?void 0:t.length}))??!1,Sn=e=>[x.cont_and,x.cont_or,x.ncont_or].includes(e),Zr=e=>e!==null&&typeof e=="object"&&"from"in e,kt=e=>e.map(n=>de(n)?{...n,items:kt(n.items)}:se(n)?{...n,id:fo()}:n),Jr=e=>e.map(n=>de(n)?{...n,items:Jr(n.items)}:se(n)?{...n,id:void 0}:n),Yn=e=>e==null||e==="",mf=e=>[t=>{const r=[],a="table.columnsSettings.filtering.validation.emptyValue";return t.forEach(i=>{const{value:l,type:o=I.Text,condition:f=x.eq}=i;!Yn(l)||[x.empty,x.nempty].includes(f)||[I.Text,I.Number].includes(o)&&r.push({id:i.id,validationMessage:a})}),r},t=>{const r=[],a="table.columnsSettings.filtering.validation.duplicateFilters";return t.forEach((i,l)=>{t.slice(l+1).forEach(o=>{In(i,o)&&r.push({id:i.id,validationMessage:a},{id:o.id,validationMessage:a})})}),r}].reduce((t,r)=>[...t,...r(e)],[]),pf=L.div`
  display: none;
  
  &:has(.ant-tag:not(.ant-tag-hidden)) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }
`,Xr=(e,n)=>{try{const r=n[e.name].find(a=>a.value===e.value);return r.label||r.value}catch(t){return console.error(`${oe} Can't get label for filter: ${JSON.stringify(e)}`,t),e.value}};function br(e,n){const t=[...e],r=[t.shift()];for(;t.length>0;)r.push(n,t.shift());return r}const df=({filter:e,filter:{name:n,condition:t,type:r,value:a,attribute:i},dateFormat:l="MM/DD/YYYY",enumOptionsMap:o,filterTitle:f,t:u})=>{const d=f||(i==null?void 0:i.name)||n,s=m.createElement(m.Fragment,null,d," ",t," ");if(t===x.empty||t===x.nempty)return m.createElement(m.Fragment,null,d," ",u(`table.filterTag.${t}`));switch(r){case I.Boolean:return m.createElement(m.Fragment,null,s,u(a?"common.yes":"common.no"));case I.DateRange:return m.createElement(m.Fragment,null,s,$n(a.from,l)," - ",$n(a.to,l));case I.DateTime:return Zr(a)?m.createElement(m.Fragment,null,d," ",u(`table.filterTag.${t}`,{from:$n(a.from,l),to:$n(a.to,l)}).replace(/&#x2F;/g,"/")):m.createElement(m.Fragment,null,s,$n(a,l));case I.Enum:{if(Sn(e.condition)){const p=e.value.map(c=>Xr({...e,value:c},o));if(e.condition===x.cont_and)return m.createElement(m.Fragment,null,d," = ",br(p," & "));if(e.condition===x.cont_or)return m.createElement(m.Fragment,null,d," = ",br(p," | "));if(e.condition===x.ncont_or)return m.createElement(m.Fragment,null,d," ≠ ",br(p," | "))}return m.createElement(m.Fragment,null,s,Xr(e,o))}case I.Text:case I.Number:case I.Radio:return t===x.cont||t===x.ncont?m.createElement(m.Fragment,null,d," ",u(`table.filterTag.${t}`,{value:a})):m.createElement(m.Fragment,null,s,a)}return ya(r,"Incorrect filter item"),""};function jl(e){const{filterApi:n,dateFormat:t,enumOptionsMap:r}=fe(),{t:a}=rt(),i="table-filters-reset-button",[l,o]=v.useState([]),[f,u]=v.useState(e.items||[]);v.useEffect(()=>{if(n){const s=()=>{o(n.getRootGroupFilters().filter(se))};return s(),n.subscribe(s)}},[n]),v.useEffect(()=>{n||u(e.items||[])},[e.items]),v.useEffect(()=>{n&&u(l.map(s=>{var p;return{text:df({filter:s,dateFormat:t,enumOptionsMap:r,filterTitle:cf(e.columns,s.name,(p=s.attribute)==null?void 0:p.name),t:a}),key:JSON.stringify(s),onClose:()=>{var c;n.removeFilter(s),(c=e.onSidebarFiltersChange)==null||c.call(e,n.getRootGroupFilters().filter(se))}}}))},[l,r,a]);const d=()=>{var s,p;n?(n.resetFilters(void 0,c=>!se(c)),(s=e.onSidebarFiltersChange)==null||s.call(e,n.getRootGroupFilters().filter(se))):(p=e.onClear)==null||p.call(e)};return m.createElement(pf,null,f.map(s=>m.createElement(_u,{key:s.key,label:s.text,onClose:s.onClose})),f.length&&m.createElement(la,{onClick:e.onClear||d,klId:i,testId:i},e.clearLinkText||a("table.columnsSettings.clear")))}const cf=(e,n,t)=>{var r,a;try{const i=e.find(l=>l.dataIndex===n);return((a=(r=i==null?void 0:i.filterAttributes)==null?void 0:r.find(l=>l.name===t))==null?void 0:a.label)||(i==null?void 0:i.title)}catch(i){return console.error("Can't get filter title",i),""}};jl.__docgenInfo={description:"",methods:[],displayName:"FilterItems",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`Pick<ChipProps, 'counter' | 'onClose' | 'testId'> & {
  text?: ChipProps['label'],
  key?: string
}`,elements:[{name:"Pick",elements:[{name:"ChipProps"},{name:"union",raw:"'counter' | 'onClose' | 'testId'",elements:[{name:"literal",value:"'counter'"},{name:"literal",value:"'onClose'"},{name:"literal",value:"'testId'"}]}],raw:"Pick<ChipProps, 'counter' | 'onClose' | 'testId'>"},{name:"signature",type:"object",raw:`{
  text?: ChipProps['label'],
  key?: string
}`,signature:{properties:[{key:"text",value:{name:"ChipProps['label']",raw:"ChipProps['label']",required:!1}},{key:"key",value:{name:"string",required:!1}}]}}]}],raw:"TableInternalFilterItemsTagProps[]"},description:""},clearLinkText:{required:!1,tsType:{name:"string"},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var hr,Oi;function yf(){if(Oi)return hr;Oi=1;function e(n,t){for(var r=-1,a=n==null?0:n.length;++r<a&&t(n[r],r,n)!==!1;);return n}return hr=e,hr}var vr,ki;function ff(){if(ki)return vr;ki=1;var e=jt(),n=uo();function t(r,a){return r&&e(a,n(a),r)}return vr=t,vr}var Fr,qi;function gf(){if(qi)return Fr;qi=1;var e=jt(),n=sa();function t(r,a){return r&&e(a,n(a),r)}return Fr=t,Fr}var wr,Ti;function bf(){if(Ti)return wr;Ti=1;var e=jt(),n=mo();function t(r,a){return e(r,n(r),a)}return wr=t,wr}var Or,xi;function Ml(){if(xi)return Or;xi=1;var e=iu(),n=$s(),t=mo(),r=au(),a=Object.getOwnPropertySymbols,i=a?function(l){for(var o=[];l;)e(o,t(l)),l=n(l);return o}:r;return Or=i,Or}var kr,Di;function hf(){if(Di)return kr;Di=1;var e=jt(),n=Ml();function t(r,a){return e(r,n(r),a)}return kr=t,kr}var qr,Ei;function vf(){if(Ei)return qr;Ei=1;var e=ou(),n=Ml(),t=sa();function r(a){return e(a,t,n)}return qr=r,qr}var Tr,Si;function Ff(){if(Si)return Tr;Si=1;var e=Object.prototype,n=e.hasOwnProperty;function t(r){var a=r.length,i=new r.constructor(a);return a&&typeof r[0]=="string"&&n.call(r,"index")&&(i.index=r.index,i.input=r.input),i}return Tr=t,Tr}var xr,Ri;function wf(){if(Ri)return xr;Ri=1;var e=io();function n(t,r){var a=r?e(t.buffer):t.buffer;return new t.constructor(a,t.byteOffset,t.byteLength)}return xr=n,xr}var Dr,Ci;function Of(){if(Ci)return Dr;Ci=1;var e=/\w*$/;function n(t){var r=new t.constructor(t.source,e.exec(t));return r.lastIndex=t.lastIndex,r}return Dr=n,Dr}var Er,_i;function kf(){if(_i)return Er;_i=1;var e=Ws(),n=e?e.prototype:void 0,t=n?n.valueOf:void 0;function r(a){return t?Object(t.call(a)):{}}return Er=r,Er}var Sr,Ai;function qf(){if(Ai)return Sr;Ai=1;var e=io(),n=wf(),t=Of(),r=kf(),a=Hs(),i="[object Boolean]",l="[object Date]",o="[object Map]",f="[object Number]",u="[object RegExp]",d="[object Set]",s="[object String]",p="[object Symbol]",c="[object ArrayBuffer]",y="[object DataView]",b="[object Float32Array]",h="[object Float64Array]",g="[object Int8Array]",w="[object Int16Array]",F="[object Int32Array]",O="[object Uint8Array]",k="[object Uint8ClampedArray]",T="[object Uint16Array]",q="[object Uint32Array]";function D(_,S,R){var C=_.constructor;switch(S){case c:return e(_);case i:case l:return new C(+_);case y:return n(_,R);case b:case h:case g:case w:case F:case O:case k:case T:case q:return a(_,R);case o:return new C;case f:case s:return new C(_);case u:return t(_);case d:return new C;case p:return r(_)}}return Sr=D,Sr}var Rr,Ii;function Tf(){if(Ii)return Rr;Ii=1;var e=da(),n=ua(),t="[object Map]";function r(a){return n(a)&&e(a)==t}return Rr=r,Rr}var Cr,Ni;function xf(){if(Ni)return Cr;Ni=1;var e=Tf(),n=oo(),t=lo(),r=t&&t.isMap,a=r?n(r):e;return Cr=a,Cr}var _r,ji;function Df(){if(ji)return _r;ji=1;var e=da(),n=ua(),t="[object Set]";function r(a){return n(a)&&e(a)==t}return _r=r,_r}var Ar,Mi;function Ef(){if(Mi)return Ar;Mi=1;var e=Df(),n=oo(),t=lo(),r=t&&t.isSet,a=r?n(r):e;return Ar=a,Ar}var Ir,Pi;function Pl(){if(Pi)return Ir;Pi=1;var e=Ys(),n=yf(),t=zs(),r=ff(),a=gf(),i=Gs(),l=Xs(),o=bf(),f=hf(),u=lu(),d=vf(),s=da(),p=Ff(),c=qf(),y=Ks(),b=oa(),h=Zs(),g=xf(),w=Js(),F=Ef(),O=uo(),k=sa(),T=1,q=2,D=4,_="[object Arguments]",S="[object Array]",R="[object Boolean]",C="[object Date]",U="[object Error]",j="[object Function]",B="[object GeneratorFunction]",M="[object Map]",Z="[object Number]",me="[object Object]",ln="[object RegExp]",bn="[object Set]",hn="[object String]",Ie="[object Symbol]",ce="[object WeakMap]",Fe="[object ArrayBuffer]",vn="[object DataView]",xs="[object Float32Array]",Ds="[object Float64Array]",Es="[object Int8Array]",Ss="[object Int16Array]",Rs="[object Int32Array]",Cs="[object Uint8Array]",_s="[object Uint8ClampedArray]",As="[object Uint16Array]",Is="[object Uint32Array]",ne={};ne[_]=ne[S]=ne[Fe]=ne[vn]=ne[R]=ne[C]=ne[xs]=ne[Ds]=ne[Es]=ne[Ss]=ne[Rs]=ne[M]=ne[Z]=ne[me]=ne[ln]=ne[bn]=ne[hn]=ne[Ie]=ne[Cs]=ne[_s]=ne[As]=ne[Is]=!0,ne[U]=ne[j]=ne[ce]=!1;function st(J,Fn,wn,Ns,ut,Je){var we,mt=Fn&T,pt=Fn&q,js=Fn&D;if(wn&&(we=ut?wn(J,Ns,ut,Je):wn(J)),we!==void 0)return we;if(!w(J))return J;var La=b(J);if(La){if(we=p(J),!mt)return l(J,we)}else{var On=s(J),Va=On==j||On==B;if(h(J))return i(J,mt);if(On==me||On==_||Va&&!ut){if(we=pt||Va?{}:y(J),!mt)return pt?f(J,a(we,J)):o(J,r(we,J))}else{if(!ne[On])return ut?J:{};we=c(J,On,mt)}}Je||(Je=new e);var $a=Je.get(J);if($a)return $a;Je.set(J,we),F(J)?J.forEach(function(Xe){we.add(st(Xe,Fn,wn,Xe,J,Je))}):g(J)&&J.forEach(function(Xe,sn){we.set(sn,st(Xe,Fn,wn,sn,J,Je))});var Ms=js?pt?d:u:pt?k:O,Wa=La?void 0:Ms(J);return n(Wa||J,function(Xe,sn){Wa&&(sn=Xe,Xe=J[sn]),t(we,sn,st(Xe,Fn,wn,sn,J,Je))}),we}return Ir=st,Ir}var Nr,Bi;function Sf(){if(Bi)return Nr;Bi=1;var e=Pl(),n=1,t=4;function r(a){return e(a,n|t)}return Nr=r,Nr}var Rf=Sf();const Se=jn(Rf),Bl=(e,n)=>{if(Array.isArray(e)&&Array.isArray(n))return Ul(e,n);if(!Array.isArray(e)&&!Array.isArray(n))return Ll(e,n);throw new Error(`${oe} Cannot merge array with group directly`)},Ul=(e,n)=>{const t=new Map,r=[];return e.forEach(a=>{de(a)&&t.set(a.id,Se(a)),r.push(a)}),n.forEach(a=>{if(de(a)){const i=t.get(a.id);if(i){const l=Ll(i,a),o=r.findIndex(f=>de(f)&&f.id===a.id);o!==-1&&(r[o]=l),t.set(a.id,l)}else{const l=Se(a);t.set(a.id,l),r.push(l)}}else r.some(i=>It(i)&&In(a,i))||r.push(a)}),r},Ll=(e,n)=>({...Se(e),...Se(n),items:Ul(e.items,n.items)});class Cf{constructor(n={}){this.listeners=[];const t={id:"root",items:[],logicOperation:n.logicOperation||"AND"};this.rootGroup=t}subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}}notifyListeners(){this.listeners.forEach(n=>n())}initPredefinedFilters(n){wi({filters:n,message:"Failed to initialize predefined filters. Format is not correct",shouldThrowError:!0,withPredicate:!1});const t=Array.isArray(n)?{id:"root",logicOperation:this.rootGroup.logicOperation,items:Se(n)}:Se(this.rootGroup);this.rootGroup=Bl(this.rootGroup,t)}setExternalFilters(n,t="root"){const r=this.findGroup(this.rootGroup,t);if(!r){console.warn(`${oe} External filters wasn't set, because group ${t} wasn't found.
        
 ExternalFilters: ${n}`);return}wi({filters:n,message:"Failed to set external filters. Format is not correct",shouldThrowError:!0}),r.items=Se(n),this.notifyListeners()}setExternalSidebarFilters(n){const t=this.rootGroup.items.filter(r=>!se(r));this.rootGroup.items=[...t,...Se(n)],this.notifyListeners()}addFilter(n,t="root"){const r=this.findGroup(this.rootGroup,t);if(!r){console.warn(`${oe} Filter wasn't added, because group ${t} wasn't found. 
 Filter: ${n}`);return}r.items.push(Se(n)),this.notifyListeners()}updateFilter(n,t,r="root"){const a=this.findGroup(this.rootGroup,r);if(!a){console.warn(`${oe} Filter wasn't updated, because group ${r} wasn't found.
        
 Filter: ${n} 
 Changes: ${t}`);return}const i=a.items.findIndex(l=>se(l)&&In(l,n));i!==-1&&(a.items[i]={...a.items[i],...t}),this.notifyListeners()}removeFilter(n,t="root"){const r=this.findGroup(this.rootGroup,t);if(!r){console.warn(`${oe} Filter wasn't removed, because group ${t} wasn't found. 
 Filter: ${n}`);return}r.items=r.items.filter(a=>!(It(a)&&In(a,n))),this.notifyListeners()}createGroup(n,t="root"){const r=this.findGroup(this.rootGroup,t);if(!r){console.warn(`${oe} Group wasn't created, because parent group ${t} wasn't found.
        
 Group props: ${n}`);return}if(this.isGroupExists(n.id,t)){console.warn(`${oe} Group ${n.id} wasn't created, because parent group ${t} already have group with
        this id. 
 Group props: ${n}`);return}r.items.push({id:n.id,items:Se(n.items)||[],logicOperation:n.logicOperation||"AND"}),this.notifyListeners()}resetFilters(n="root",t=()=>!1){const r=this.findGroup(this.rootGroup,n);if(!r){console.warn(`${oe} Filters wasn't reset, because group ${n} wasn't found.`);return}r.items=r.items.filter(t),this.notifyListeners()}ungroupGroup(n){if(n==="root"){console.warn(`${oe} Can't ungroup root group`);return}const t=this.findParentGroup(this.rootGroup,{id:n,items:[]});if(!t){console.warn(`${oe} Group ${n} wasn't ungrouped. Parent group not found`);return}const r=t.items.findIndex(i=>!It(i)&&i.id===n);if(r===-1){console.warn(`${oe} Group ${n} wasn't ungrouped. It wasn't found in FilterApi structure.`);return}const a=t.items[r].items;t.items.splice(r,1,...a),this.notifyListeners()}getGroupItems(n){const t=this.findGroup(this.rootGroup,n);return t?Se(t.items):(console.warn(`${oe} Can't get group, because group ${n} wasn't found.`),[])}getRootGroupFilters(){return this.getGroupItems("root")}findGroup(n,t){if(n.id===t)return n;for(const r of n.items)if(de(r)){const a=this.findGroup(r,t);if(a)return a}return null}isGroupExists(n,t="root"){const r=this.findGroup(this.rootGroup,t);if(!r){console.warn(`${oe} Can't check is group exists, because parent group ${t} wasn't found.
        
 Group to check ID: ${n}`);return}return!!this.findGroup(r,n)}findParentGroup(n,t){if(n.items.findIndex(a=>In(a,t))!==-1)return n;for(const a of n.items)if(de(a)){const i=this.findParentGroup(a,t);if(i)return i}return null}}const _f=(e,n)=>e.filter(t=>de(t)?n.map(r=>`column.${r.dataIndex}`).filter(Boolean).includes(t.id):!0),Vl=(e,n)=>e.map(t=>de(t)?{...t,items:Vl(t.items)}:se(t)&&t.type===I.DateRange?{...t,value:{from:ke(t.value.from),to:ke(t.value.to)}}:t),Af=(e,n)=>e.map(t=>{if(de(t)&&t.id.startsWith("column.")){const r=t.items.map(a=>{if(an(a,!1)){const i=Il(a.filterName,Nl(a.name,n));return i?{...a,predicate:i}:null}return a}).filter(a=>a!==null);return{...t,items:r}}return t}),$l=(e,n)=>[_f,Vl,Af].reduce((t,r)=>r(t,n),e);class If extends Cf{constructor({columns:n,customFilterFunction:t,predefinedFilters:r,...a}){super(a),this.enumOptionsMap={},this.initColumnGroups(n),r&&this.initPredefinedFilters($l(r,n)),t&&(this.customFilterFunction=t)}initColumnGroups(n){n.forEach(t=>{var r;if(t.dataIndex!==void 0&&t.dataIndex!==null){const a=`column.${t.dataIndex}`;this.isGroupExists(a)||this.createGroup({id:a,logicOperation:(r=t.filterType)==null?void 0:r.logicOperation})}else console.warn(`${oe} Column should have dataIndex. Column: ${t}`)}),console.log(`${oe} FilterApi initialized`)}setEnumOptionsMap(n){this.enumOptionsMap=n}filterRows(n){return this.customFilterFunction?this.filterRowsWithCustomFunction(n):n.filter(t=>this.rowMatchesGroup(t,this.rootGroup))}filterRowsWithCustomFunction(n){if(!this.customFilterFunction)return n;const t=this.rootGroup.items.filter(se);let r=[];const a=i=>{r=i};return this.customFilterFunction(n,t,a,{isMatch:this.isMatch.bind(this),parseDate:ke,rowMatchesFilter:this.rowMatchesFilter.bind(this)}),r}rowMatchesFilter(n,t){const{name:r,value:a,type:i=I.Text,condition:l=x.eq,attribute:o}=t;let f=a,u=$e(n,o?`${r}.${o.name}`:r);if(Yn(u)&&l!==x.empty&&i!==I.Text&&i!==I.DateTime&&i!==I.Enum)return!1;if(typeof u=="object"&&(u!=null&&u.text)&&(u=u.text),l===x.empty)return Yn(u);if(l===x.nempty)return!Yn(u);switch(i){case I.Text:typeof u>"u"&&(u=""),Array.isArray(u)&&(u=u.join(""));break;case I.Number:case I.Boolean:f=+f,u=+u;break;case I.Enum:f=Kr(f),u=Kr(u);break;case I.DateRange:case I.DateTime:u=ke((u==null?void 0:u.type)==="datetime"?u.value:u);break;case I.Radio:break;default:ya(i,"[hexa-ui]: Incorrect filter operation")}return this.isMatch({type:i,condition:l,filterName:r,filterValue:f,fieldValue:u})}rowMatchesGroup(n,t){if(t.items.length===0)return!0;const r=t.items.map(a=>se(a)?this.rowMatchesFilter(n,a):an(a)?a.predicate(n):de(a)?this.rowMatchesGroup(n,a):(console.warn(`${oe} Incorrect filter item. It filters out as if this filter doesn't exist.
        
 Filter item: ${a}`),!0));return t.logicOperation==="OR"?r.some(Boolean):r.every(Boolean)}isMatch(n){const{filterName:t,filterValue:r,fieldValue:a,condition:i,type:l}=n;if(i===x.empty)return Yn(a);if(i===x.nempty)return!this.isMatch({...n,condition:x.empty});let o;const f=a==null?void 0:a.toString().toLowerCase();switch(l){case I.Text:case I.Radio:{const u=(r==null?void 0:r.toLowerCase())||"";switch(i){case x.cont:return a&&~f.indexOf(r.toLowerCase());case x.ncont:return!(a&&~f.indexOf(r.toLowerCase()));case x.regexp:return new RegExp(r).test(f);case x.neq:return u!==f;case x.eq:default:return u===f}}case I.DateRange:o=r.from<=a&&a<=r.to;break;case I.DateTime:if(i===x.eq){const u=new Date(r);u.setHours(0,0,0,0);const d=new Date(r);return d.setHours(23,59,59,999),this.isMatch({...n,condition:x.range,filterValue:{from:ke(u),to:ke(d)}})}return i===x.neq?!this.isMatch({...n,condition:x.eq}):i===x.range?r.from<=a&&a<=r.to:i===x.nrange?!this.isMatch({...n,condition:x.range}):this.isMatch({...n,type:I.Number});case I.IP:o=r.ipFrom<=a&&a<=r.ipTo;break;case I.DaysBefore:o=r<=a;break;case I.Enum:if(i===x.cont_and)return!1;if(i===x.cont_or)return r.includes(a);if(i===x.ncont_or)return!r.includes(a);if(i===x.regexp){const u=Xr({name:t,value:a},this.enumOptionsMap);return typeof u!="string"?(console.warn(`${oe} Enum label is ReactNode. Can not filter by regex.`),!1):new RegExp(r).test(u.toLowerCase())}return this.isMatch({...n,type:I.Number});default:switch(i){case x.gt:return a>r;case x.ge:return a>=r;case x.lt:return a<r;case x.le:return a<=r;case x.neq:return r!==a;case x.eq:default:return r===a}}return i===x.eq?o:!o}}const Zt=({storageKey:e,featureKey:n})=>{const t=localStorage.getItem(e);return t?JSON.parse(t)[n]:void 0},Jt=({storageKey:e,featureKey:n,updatedValue:t})=>{try{const r=localStorage.getItem(e);r||console.log(`[hexa-ui]: state with key ${e} wasn't found. Creating a new one to save ${n}`);const i={...JSON.parse(r||"{}"),[n]:t};localStorage.setItem(e,JSON.stringify(i))}catch(r){console.error(`[hexa-ui]: Error while saving ${n} to localStorage.`,r)}},Wl="SET_FILTER_API",Qr="SET_FILTERED_ROWS",Hl="INIT_EXTERNAL_FILTERS",Yl="INIT_ACTIVE_FILTERS",zl="INIT_SAVED_FILTERS",Gl="INIT_ALL";function Nf(e,n){switch(n.type){case Wl:return{...e,filterApi:n.api};case Qr:return{...e,filteredRows:n.rows};case Hl:return{...e,init:{...e.init,externalFiltersInit:n.value}};case Yl:return{...e,init:{...e.init,activeFiltersInit:n.value}};case zl:return{...e,init:{...e.init,savedFiltersInit:n.value}};case Gl:return{...e,init:{...e.init,allInit:!!e.filterApi&&e.init.activeFiltersInit&&e.init.externalFiltersInit&&e.init.savedFiltersInit}};default:return e}}const Kl=(e,n,t)=>e.map(r=>{if(de(r))return{id:r.id,items:Kl(r.items,n),logicOperation:r.logicOperation};if(!r.isUserDefined)return null;if(an(r,!1)){const a=r.name,i=Nl(a,n),l=Il(r.filterName,i);return l?{...r,predicate:l}:null}return se(r)?r:(console.warn(`${oe} Filter was't restored, because it has incorrect format. 
 Filter item: ${JSON.stringify(r)}`),null)}).filter(r=>r!==null),jf=e=>{const{columns:n,sorting:t,pageSize:r,openedRows:a,groupBy:i,filters:l,...o}=e,f=o,u=Array.isArray(l)?l:[];return Object.entries(f).forEach(([d,s])=>{Object.keys(s).forEach(p=>{u.find(y=>de(y)&&y.id===`column.${d}`)||u.push({id:`column.${d}`,logicOperation:"AND",items:[]}),u.find(y=>de(y)&&y.id===`column.${d}`).items.push({name:d,filterName:p,predicate:()=>!0})})}),{columns:n,sorting:t,pageSize:r,openedRows:a,groupBy:i,filters:u}},Mf=(e,n,t)=>{var r;try{const a=jf(JSON.parse(localStorage.getItem(e)||"{filters:[]}"));return localStorage.setItem(e,JSON.stringify(a)),(r=a.filters)!=null&&r.length?Kl(a.filters,n,t):[]}catch(a){console.error("[hexa-ui][Filters]: Error while loading filters from localStorage:",a)}return[]},Pf=e=>function({columns:t,...r}){return t?r.useFiltersSidebar||uf(t)?m.createElement(Bf,{Component:e,...r,columns:t}):m.createElement(e,{...r,columns:t}):m.createElement(e,{...r})};function Bf({defaultFiltersConfig:e,defaultSidebarFilters:n,initialFilters:t,appliedFilters:r,predefinedFilters:a,sidebarFilters:i,externalFilters:l,onFilterChange:o,onFiltersChange:f,customFilterFunction:u,isServerFiltering:d,saveFilters:s,storageKey:p,storageMergeFiltersMode:c="merge",dataSource:y,columns:b,Component:h,...g}){const{updateContext:w}=fe(),[{filterApi:F,filteredRows:O,init:{externalFiltersInit:k,activeFiltersInit:T,savedFiltersInit:q,allInit:D}},_]=v.useReducer(Nf,{filterApi:null,filteredRows:y,init:{}}),S=v.useRef(y);v.useEffect(()=>{const j=a||n||e||[],B=new If({predefinedFilters:j,columns:b,customFilterFunction:u});_({type:Wl,api:B})},[]),v.useEffect(()=>{F&&(l?(F.setExternalFilters($l(l,b)),F.initColumnGroups(b)):i&&F.setExternalSidebarFilters(i),k||_({type:Hl,value:!0}))},[F,l,i]),v.useEffect(()=>{if(!F)return;const j=r||t;if(!l&&j){const B=of(j).reduce((M,Z)=>(M[Z.name]=M[Z.name]||[],M[Z.name].push(Z),M),{});b.forEach(M=>{if(M.dataIndex!==void 0&&M.dataIndex!==null){const Z=B[M.dataIndex],me=`column.${M.dataIndex}`;if(a!=null&&a.filter(de).find(ln=>ln.id===`column.${M.dataIndex}`))return;Z?F.setExternalFilters(Z,me):F.resetFilters(me)}else console.warn(`${oe} Column should have dataIndex. Column: ${M}`)})}_({type:Yl,value:!0})},[F,l,t,r]),v.useEffect(()=>{if(!F||!T||!k)return;const j=p||(s==null?void 0:s.storageKey);if(j&&c==="merge"){const B=Bl(F.getRootGroupFilters(),Mf(j,b,!0));F.setExternalFilters(B)}_({type:zl,value:!0})},[F,s,T,k]),v.useEffect(()=>{F&&_({type:Gl})},[F,T,k,q]);const R=()=>{if(!(!F||!D))if(d)_({type:Qr,rows:S.current});else{const j=F.filterRows(S.current);_({type:Qr,rows:j})}};v.useEffect(()=>{if(!(!F||!D)&&(R(),!d))return F.subscribe(R)},[F,D,d]),v.useEffect(()=>{S.current=y||[],R()},[y]),v.useEffect(()=>{if(!F||!D)return;const j=f?F.subscribe(()=>{const Z=F.getRootGroupFilters();f(Z)}):void 0,B=()=>{const Z=F.getRootGroupFilters();o==null||o(jg(Z))};B();const M=o?F.subscribe(B):void 0;return()=>{j==null||j(),M==null||M()}},[F,D]),v.useEffect(()=>{const j=p||(s==null?void 0:s.storageKey);if(!F||!D||!j)return;const B=()=>{const M=F.getRootGroupFilters();Jt({storageKey:j,featureKey:"filters",updatedValue:M})};return B(),F.subscribe(B)},[F,D]);const[C,U]=v.useState({});return v.useEffect(()=>{if(!F||!D)return;(async()=>{const B=await lf(b);U(B),F.setEnumOptionsMap(B)})()},[F,D,b]),v.useEffect(()=>{w({filterApi:D?F:null,enumOptionsMap:C})},[F,D,C,w]),m.createElement(h,{...g,dataSource:O,columns:b,storageKey:p})}const Uf=(e,n,t,r)=>(a,i)=>{const l={children:t?t(a,i):a,props:{className:"",colSpan:1}};if(i.getGroupTitleText){const o=i.getGroupTitleText();l.props.colSpan=e===0?n:0,l.children=i.groupTitleRender?i.groupTitleRender(o):m.createElement(on,{type:"BTM3"},r?r(o):o),l.props.className="group-title"}return l},Lf=(e,n)=>e!=null&&e.text||typeof e=="string"?e!=null&&e.text?e.text.localeCompare((n==null?void 0:n.text)||""):e.localeCompare(n||""):e===n?0:e>n?1:-1,Vf=e=>function({groupBy:t,customGroupSorter:r,...a}){const{dataSource:i,columns:l,groupTitleRender:o,rowSelection:f,disabled:u}=a;if(!(t&&Array.isArray(i)))return m.createElement(e,{...a});const d=r||Lf,s=a.isClientGroupSortingDisabled?i:[...i].sort((g,w)=>d($e(g,t,""),$e(w,t,""))),p=tn("table.groupingEmpty"),c=s.reduce((g,w,F)=>{var _;const O=i.length+F,k=$e(w,t,"")||p,T=(_=l==null?void 0:l.find(S=>S.dataIndex===t))==null?void 0:_.renderGroupTitle,q={accordeon:null,getGroupTitleText:()=>k??k.toString(),groupTitleRender:T,key:O};return F===0?[...g,q,w]:$e(w,t)===$e(g[g.length-1],t)?[...g,w]:[...g,q,w]},[]),y=l==null?void 0:l.map((g,w)=>ve(g)?g:{...g,render:Uf(w,l.length,g.render,o)}),b=f&&{...f,getCheckboxProps:g=>({disabled:u||!!g.getGroupTitleText,name:g.name})},h=g=>g.getGroupTitleText?"group-title-row":je("row-class",g.rowClassName);return m.createElement(e,{...a,columns:y,dataSource:c,rowSelection:b,rowClassName:h})},Zl=({text:e})=>m.createElement(on,{type:"BTM3",htmlTag:"span"},e||m.createElement(le,{localizationKey:"table.end"}));Zl.__docgenInfo={description:"",methods:[],displayName:"EndOfTable",props:{text:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const $f=L.span`
  & > *:not(last-child) {
    margin-right: ${Tt[4]}px;
  }

  .icon {
    vertical-align: middle;
  }
`,Jl=({onClick:e,errorText:n,retryText:t})=>m.createElement($f,null,m.createElement(pa,{size:"small",name:"Warning"}),m.createElement(on,{type:"BTM3",htmlTag:"span"},n||m.createElement(le,{localizationKey:"table.loadingError"})),m.createElement(la,{onClick:e},t||m.createElement(le,{localizationKey:"table.loadingRetry"})));Jl.__docgenInfo={description:"",methods:[],displayName:"Error",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},errorText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},retryText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Wf=L.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  background-color: ${ae("cell.enabled.background")};
  padding: 24px 0;
  text-align: center;
`,Hf=L.div`
  display: flex;
  flex-direction: column;
  .ant-pagination-container {
    order: 1;
  }
`,Yf=e=>n=>{var O;const t=v.useRef(null),[r,a]=v.useState(!1),[i,l]=v.useState(!1),[o,f]=v.useState(!1),[u,d]=v.useState(null),[s,p]=v.useState(n.dataSource||[]),[c,y]=v.useState(s.length?1:0),{cssConfig:b}=fe();if(v.useEffect(()=>{const k=n.pagination&&n.pagination.infiniteScrollPageGetter||null;d(k&&(()=>k)||null)},[n.pagination]),v.useEffect(()=>{var k;f(!1),l(!1),a(!1),p(n.dataSource||[]),y((k=n.dataSource)!=null&&k.length?1:0)},[n.dataSource]),v.useEffect(()=>{if(!u)return;const{current:k}=t;if(!k)return;const T=new IntersectionObserver(([q])=>{q.isIntersecting&&(r||f(!0))});return T.observe(k),()=>{T.unobserve(k),T.disconnect()}},[u,s]),v.useEffect(()=>{u&&!r&&o&&Promise.resolve(u(c)).then(k=>{if(!k||!k.length){l(!0);return}y(T=>T+1),p(T=>[...T,...k])}).catch(()=>{a(!0)}).finally(()=>{f(!1)})},[u,r,o,c]),!u)return m.createElement(e,{...n});if(!b)return null;const h=()=>{a(!1),f(!0)},g=o&&!r,w=r&&!o,F=i&&!o&&!r;return m.createElement(Hf,null,m.createElement(e,{...n,dataSource:s,pagination:n.pagination&&((O=n.pagination)!=null&&O.showOnlyTotalSummary)?{showOnlyTotalSummary:!0,total:n.pagination.total}:!1}),m.createElement(Wf,{ref:t,cssConfig:b},g&&m.createElement(yo,null),w&&m.createElement(Jl,{onClick:h,errorText:n.infiniteScrollErrorText,retryText:n.infiniteScrollRetryText}),F&&m.createElement(Zl,{text:n.infiniteScrollEndTableText})))},Kn=e=>{const[n,t]=v.useState(e);return v.useEffect(()=>{t(e)},[e]),[n,t]},zf=L.span`
  display: inline-block;
  margin-right: 2px;
  cursor: pointer;
  text-align: center;
`,Gf=L.div`
  .table-height-full & {
    display: flex;
    flex: 1;
  }
  .ant-table .ant-table-tbody > tr > td:first-child {
    padding-left: 12px;
  }

  &:has(.row-dragging-container:not(:empty)) .table-draggable {
    user-select: none;

    .drag-handle {
      visibility: hidden;
    }
  }

  .ant-table-placeholder > .ant-table-cell > .hexa-ui-placeholder {
    ${({$previewTableWidth:e})=>e&&e>0&&`width: ${e}px;`}
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 200px;
  }

  ${({hasSelectionColumn:e})=>{if(e)return be`
      .ant-table-row-indent {
        padding-left: 0 !important;
      }

      .ant-table-selection-column {
        position: relative;

        &.ant-table-cell-with-append:has(.table-row-has-expandable) {
          direction: rtl;
          
          .ant-checkbox-wrapper, .ant-radio-wrapper {
            direction: ltr;
          }
          .kl-components-expandable-icon {
            direction: ltr;
            margin-right: -14px;
            margin-left: 6px;
          }
        }
      }

      ${Array.from({length:100}).map((n,t)=>`
          .ant-table-row-level-${t} td:nth-child(1) > .kl-components-expandable-icon {
            position: relative;
            transform: translateX(${t*16}px);
            z-index: 1;
          }

          .ant-table-row-level-${t} td:nth-child(2) {
            padding-left: ${8+t*16}px !important;
          }
        `)}
      `}}
`,Tn={expandIconColumnIndex:0,expandIcon:({expandable:e,expanded:n,onExpand:t,record:r})=>e?m.createElement(zf,{className:"kl-components-expandable-icon icon",onClick:a=>t(r,a)},m.createElement(Qs,{interactive:!1,size:"small",icon:n?m.createElement(pu,null):m.createElement(du,null)})):null};function Kf(e){return e.some(({children:n})=>Array.isArray(n))}const Xl=({disableSelectAll:e,selectedRowsLength:n,deselectedRowsLength:t,isSelectedAll:r,resetSelection:a,onSelectAll:i,onSelectCurrentPage:l,useDataSourceFunction:o,tableId:f})=>{const{t:u}=rt(),[d,s]=v.useState("nothing");v.useEffect(()=>{s(r&&(!o||t===0)?"all":n===0?"nothing":"some")},[r,o,n,t]);const p=f?`${f}-`:"table-",c=`${p}select-all-checkbox`,y=`${p}select-all-dropdown`,b=[{testId:"select-current-page",klId:"select-current-page",onClick:l,children:u("table.selectAll.selectCurrentPage")},{testId:"select-all",klId:"select-all",onClick:i,children:u("table.selectAll.selectAll")},...d==="some"?[{testId:"deselect-all",klId:"deselect-all",onClick:a,children:u("table.selectAll.deselectAll")}]:[]];return d!=="all"?m.createElement(ge,{overlay:b,trigger:["click"],disabled:e,klId:y,testId:y},m.createElement(Nn,{checked:!1,indeterminate:d==="some",testId:c,klId:c,disabled:e})):m.createElement(Nn,{checked:!0,onChange:a,testId:c,klId:c,disabled:e})};Xl.__docgenInfo={description:"",methods:[],displayName:"HeaderCheckbox",props:{tableId:{required:!1,tsType:{name:"string"},description:""},disableSelectAll:{required:!0,tsType:{name:"boolean"},description:""},selectedRowsLength:{required:!0,tsType:{name:"number"},description:""},deselectedRowsLength:{required:!0,tsType:{name:"number"},description:""},isSelectedAll:{required:!0,tsType:{name:"boolean"},description:""},resetSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSelectAll:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSelectCurrentPage:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},useDataSourceFunction:{required:!0,tsType:{name:"boolean"},description:""}}};const Zf=(e,n,t,r)=>n._disabled&&n._disabledHint?m.createElement(ia,{text:n._disabledHint,key:`${n.key}-disabled-hint-tooltip`},r):r,Jf=({rowSelection:e,current:n,dataSource:t,disabled:r,tableId:a,pageSize:i,withSelection:l,useDataSourceFunction:o})=>{if(!e)return;const{getPreselectedRows:f,hasSelectAll:u=!0,processSelection:d,builtInRowSelection:s,...p}=e;if(!e.builtInRowSelection)return e;const c=S=>({"data-testid":S.key?`table-row__select-${S.key}`:"table-row__select",className:l?"table-row-has-expandable":void 0,disabled:r||S._disabled||S._selectionDisabled}),[y,b]=v.useState([]),[h,g]=v.useState([]),[w,F]=v.useState(!1);v.useEffect(()=>{o||F(t.length!==0&&y.length===t.length)},[o,y.length,t.length]),v.useEffect(()=>{d==null||d({selectedRowKeys:y,deselectedRowKeys:h,isSelectedAll:w})},[y,h,w]);const O=S=>{S.forEach(R=>k(R.key,!0))},k=(S,R)=>{var C;(C=t.find(U=>U.key===S))!=null&&C._disabled||(e.type==="radio"?b([S]):R?(g(U=>U.filter(j=>j!==S)),y.includes(S)||b(U=>[...U,S])):(b(U=>U.filter(j=>j!==S)),o&&g(U=>[...U,S])))};v.useEffect(()=>{const S=async()=>{let R=[];f?R=await f(t):t.forEach(C=>{C._selected&&!h.includes(C.id)&&R.push(C.key)}),b(C=>Array.from(new Set([...C,...R])))};t.length&&S()},[t,f]);const T=v.useCallback(()=>{b([]),g([]),F(!1)},[]),q=()=>{T(),O(t),F(!0)},D=()=>{O(o?t:t.slice((n-1)*i,n*i))};return{...p,columnWidth:0,columnTitle:u&&m.createElement(Xl,{tableId:a,disableSelectAll:t.length===0||t.every(S=>S._disabled)||r,selectedRowsLength:y.length,deselectedRowsLength:h.length,useDataSourceFunction:o,isSelectedAll:w,resetSelection:T,onSelectAll:q,onSelectCurrentPage:D}),hideSelectAll:u===!1,onSelect:(S,R)=>k(S.key,R),selectedRowKeys:y,renderCell:p.renderCell??Zf,getCheckboxProps:p.getCheckboxProps??c}},Ui=[],Xf=({additional:e,dataSourceClient:n,dataSourceFunction:t,patchDataSource:r,onDataSourceChange:a,pagination:i,setLoading:l,setIsDefaultSortDisabled:o,setIsClientGroupSortingDisabled:f})=>{const[u,d]=v.useState(Ui);if(v.useEffect(()=>{if(n){const g=r?r(n):n;d(g),a==null||a(g)}},[n,a]),i.paginationDisabled||!t)return u||Ui;const{groupBy:s,filterApi:p,searchValue:c,sorting:y}=fe(),[b,h]=v.useState((p==null?void 0:p.getRootGroupFilters().filter(se))||[]);return v.useEffect(()=>{if(p)return p.subscribe(()=>{h(p.getRootGroupFilters().filter(se)||[])})},[p]),v.useEffect(()=>{t&&(l(!0),t({page:i.current-1,pageSize:i.pageSize,params:{filters:b,groupBy:s,searchString:c},sorting:{attribute:y.attribute,field:y.columnId||y.field,isDefaultSortDisabled:y.isDefaultSortDisabled,isAsc:y.direction==="asc"}}).then(({rows:g,isClientGroupsSortingDisabled:w,isDefaultSortDisabled:F,paginationDisabled:O,totalCount:k})=>{const T=r?r(g):g;d(T),!i.paginationDisabled&&(e==null||e.setTotal(k)),w!==void 0&&f(w),F!==void 0&&o(F),O!==void 0&&(e==null||e.setHideOnSinglePage(O)),a==null||a(T),l(!1)}).catch(g=>{console.error("[hexa-ui][table] Unable to fetch data from dataSourceFunction",g)}))},[t,i.current,i.pageSize,b,s,c,y]),u},gt=1,Qf=20,eg=["10","20","50","100"],ng=({pagination:e,...n})=>e===!1?{pagination:{paginationDisabled:!0,current:1,pageSize:1/0},additional:void 0}:tg({pagination:e,...n}),tg=({pagination:{showOnlyTotalSummary:e=!1,current:n=gt,pageSize:t,total:r,total:a,onChange:i,onShowSizeChange:l,cursor:o=!1,simple:f=!1,jumper:u=!1,restoreCurrentWhenDataChange:d,selected:s,showSelected:p,showSizeChanger:c,hideOnSinglePage:y,pageSizeOptions:b=eg,isServerPagination:h}={},serverPagination:g,storageKey:w})=>{const[F,O]=Kn(n),[k,T]=v.useState(Qf),[q,D]=v.useState(r),[_,S]=Kn(y);v.useEffect(()=>{const M=w&&Zt({storageKey:w,featureKey:"pageSize"})||t;M&&T(M)},[t]),v.useEffect(()=>{a!==void 0?D(a):r!==void 0&&D(r)},[a,r]);const R=h||g||r!==void 0||a!==void 0;v.useEffect(()=>{R&&O(gt)},[q,R]);const C=Math.ceil((q||0)/k)<F;return v.useEffect(()=>{i&&R&&(O(gt),i(F,k))},[C,R]),v.useEffect(()=>{d&&C&&O(gt)},[C,d]),{pagination:{cursor:o,current:F,hideOnSinglePage:_,onChange:B=>{i?i(B,k):O(B)},onShowSizeChange:(B,M)=>{l?l(F,M):T(M),w&&Jt({storageKey:w,featureKey:"pageSize",updatedValue:M})},pageSize:k,pageSizeOptions:b,restoreCurrentWhenDataChange:d,showOnlyTotalSummary:e,showSelected:p,showSizeChanger:c,selected:s,simple:f,jumper:u,total:q,isServerPagination:R},additional:{setHideOnSinglePage:S,setTotal:D}}},rg=(e,n)=>e===!1?!1:(e==null?void 0:e.total)===void 0&&(e==null?void 0:e.totalRoot)===void 0&&!n,ag=e=>function({dataSource:t,dataSourceFunction:r,patchDataSource:a,onDataSourceChange:i,loading:l,isDefaultSortDisabled:o,isClientGroupSortingDisabled:f,pagination:u,rowSelection:d,...s}){const{updateContext:p}=fe(),[c,y]=Kn(o),[b,h]=Kn(f),[g,w]=Kn(l),{pagination:F,additional:O}=ng({pagination:u,serverPagination:!!r,storageKey:s.storageKey});v.useEffect(()=>{p({pagination:{setTotal:O==null?void 0:O.setTotal,shouldCountClientTotal:rg(u,!!r),useDataSourceFunction:!!r}})},[r]);const k=Xf({additional:O,dataSourceClient:t,dataSourceFunction:r,patchDataSource:a,onDataSourceChange:i,pagination:F,setLoading:w,setIsClientGroupSortingDisabled:h,setIsDefaultSortDisabled:y}),T=Jf({rowSelection:d,current:F.current,dataSource:k,disabled:s.disabled||!1,tableId:s.testId||s.klId||void 0,pageSize:F.pageSize,withSelection:Kf(t||[]),useDataSourceFunction:!!r});return m.createElement(e,{...s,loading:g,dataSource:k,pagination:F,rowSelection:T,isDefaultSortDisabled:c,isClientGroupSortingDisabled:b})},Ql=e=>({columns:n=[],...t})=>{const r=v.useMemo(()=>n.map(a=>ve(a)?a:{...a,title:typeof a.title=="string"?m.createElement(le,{localizationKey:a.title}):a.title}),[n]);return m.createElement(e,{...t,columns:r})},ig=L.div`
  margin: 16px 0;
  ${e=>e.$enableStickyFooter&&e.pagination&&`
    margin: 8px 0;
    position: sticky;
    bottom: 0;
    clip-path: inset(-100vw 0 0 0);
    > div {
      padding: 5px 0;
      background: ${e.pagination.background};
      box-shadow: ${e.pagination.boxShadow};
    }
  `}
`,og=({data:e=[],current:n,pageSize:t})=>e.slice((n-1)*t,n*t),lg=e=>function({pagination:t,...r}){return t===!1||t!=null&&t.paginationDisabled?m.createElement(e,{...r,pagination:!1}):m.createElement(sg,{...r,pagination:t||{},Component:e})};function sg({pagination:{showOnlyTotalSummary:e,current:n,pageSize:t,total:r,selected:a,showSelected:i,showSizeChanger:l,isServerPagination:o,...f},dataSource:u,Component:d,...s}){var w,F,O;const{cssConfig:p,pagination:c}=fe();v.useEffect(()=>{c.shouldCountClientTotal&&c.setTotal&&c.setTotal(u.length)},[u.length,c.shouldCountClientTotal]);const y=a!==void 0?a:(F=(w=s.rowSelection)==null?void 0:w.selectedRowKeys)==null?void 0:F.length,b=i??((O=s.rowSelection)==null?void 0:O.type)==="radio"?!1:!!s.rowSelection,h=!!s.stickyFooter&&s.resizingMode!=="scroll",g=!e&&!o?og({data:u,current:Number(n),pageSize:Number(t)}):u;return m.createElement(m.Fragment,null,m.createElement(d,{...s,pagination:!1,dataSource:g}),g.length>0&&m.createElement(ig,{className:"ant-pagination-container",$enableStickyFooter:h,pagination:p==null?void 0:p.pagination},m.createElement("div",{"data-testid":"table-pagination","kl-id":"table-pagination"},e?m.createElement(fu,{total:r,showSelected:b,selected:y||0,testId:"total",klId:"total"}):m.createElement(gu,{...f,total:r,selected:y,showSelected:b,pageSize:t,current:n,showSizeChanger:f.simple?!1:l}))))}const ug=e=>function({columns:t,...r}){const a=v.useMemo(()=>t&&t.map(({ellipsis:i,expandableText:l,...o})=>!o.title||i===!1?{...o,title:m.createElement(Qt,{className:"hexa-ui-ellipsis"},o.title)}:{...o,title:m.createElement(Qt,{className:"hexa-ui-ellipsis"},o.title),render:(f,u,d)=>{const s=o.render?o.render(f,u,d):f;return m.isValidElement(s)&&"data-hexa-empty-dash"in s.props?s:l?m.createElement(bu,{useGradient:!0},s):m.createElement(Qt,{className:"hexa-ui-ellipsis"},s)}}),[t]);return m.createElement(e,{...r,columns:a})},es=v.createContext({columns:[],setOverflow:()=>{}});function ns(){return v.useContext(es)}const mg=L.div.withConfig({shouldForwardProp:e=>!["resizingMode"].includes(e)})`
  &.table-height-full {
    display: flex;
    flex-direction: column;
    flex: 1;

    .ant-table-wrapper,
    .ant-spin-nested-loading,
    .ant-spin-container,
    .ant-table,
    .ant-table-container,
    .ant-table-conten,
    .ant-table-content,
    .hexa-ui-table-ref {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .ant-table table {
      height: 100%;
    }

    .hexa-ui-table-ref {
      flex-direction: column;
    }
  }

  ${({resizingMode:e})=>e==="scroll"?be`
    width: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  `:""}
`,ts=v.forwardRef(function(n,t){const r=v.useRef(null);v.useImperativeHandle(t,()=>r.current);const{setOverflow:a}=ns();return v.useEffect(()=>{var s;if(!r.current)return;const i=r.current,l=(s=r.current)==null?void 0:s.querySelector("table");if(!l)return;let o=0,f=0,u=!1;const d=new ResizeObserver(p=>{for(const y of p)y.target===i?o=y.contentRect.width:y.target===l&&(f=y.contentRect.width);const c=f>o;c!==u&&(u=c,a(c))});return d.observe(i),d.observe(l),()=>{d.disconnect()}},[]),m.createElement(mg,{...n,ref:r})});ts.__docgenInfo={description:"",methods:[],displayName:"ObservableScrollableContainer",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Li=({tableBody:e,horizontalScrollbarRef:n,stickyHeaderRef:t})=>{var l;const r=n.current,a=r==null?void 0:r.firstChild;e&&(a!=null&&a.style)&&(a.style.width=`${e.offsetWidth}px`);const i=(l=t.current)==null?void 0:l.querySelector("table");i!=null&&i.style&&(i.style.width=`${e.offsetWidth}px`)},Ba="hexa-ui-table-sticky-header",pg=L.div.withConfig({shouldForwardProp:e=>!Jc.includes(e)})`
  position: sticky;
  z-index: 3;
  overflow: hidden;
  ${({stickyHeader:e})=>`top: ${e}px;`} 
  ${({useDragDrop:e})=>e&&"padding-left: 16px;"}
  ${fl}
`;function rs({children:e,className:n}){const t=v.useRef(document.createElement("table")),r=v.useRef(null),{columns:a,rowSelection:i}=ns();return v.useEffect(()=>{if(t.current&&r.current&&!t.current.parentNode){const l=Yc(r.current,Ba),o=l==null?void 0:l.querySelector(".ant-table");o==null||o.appendChild(t.current)}},[]),m.createElement("thead",{ref:r},tt.createPortal(m.createElement(m.Fragment,null,m.createElement("colgroup",null,i!==void 0?m.createElement("col",{className:"ant-table-selection-col"}):null,a.map(l=>m.createElement("col",{key:l.key,style:{width:l.width}}))),m.createElement("thead",{className:n},e)),t.current))}rs.__docgenInfo={description:"",methods:[],displayName:"StickyHeaderWrapper",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!0,tsType:{name:"string"},description:""}}};const dg=({horizontalScrollbarRef:e,scrollableContainerRef:n,stickyHeaderRef:t})=>{v.useEffect(()=>{const r=e.current,a=n.current,i=t.current;if(!r||!a)return;const l=o=>{const f=o.target.scrollLeft;if(a.scrollLeft=f,r.scrollLeft=f,i)i.scrollLeft=f;else{const u=document.querySelector(".ant-table-thead");u&&(u.scrollLeft=f)}};return a.addEventListener("scroll",l),r.addEventListener("scroll",l),()=>{a.removeEventListener("scroll",l),r.removeEventListener("scroll",l)}},[])};var jr,Vi;function cg(){if(Vi)return jr;Vi=1;var e=Pl(),n=1,t=4;function r(a,i){return i=typeof i=="function"?i:void 0,e(a,n|t,i)}return jr=r,jr}var yg=cg();const fg=jn(yg),as=e=>fg(e,(n,t)=>ve(n)||$c(t)?n:void 0);function gg(e){var t;const n=as(e);if(e.length>=1){let r=!0,a=-1;for(let i=n.length-1;i>=0;--i){if(ve(n[i]))continue;n[i].width||(r=!1);const l=(t=n[i].resizing)==null?void 0:t.disabled;if(i===0&&(a=a<0?i:a),!l){a=i;break}}r&&(n[a].width=void 0)}return n}function bg(e){var a;const n=as(e);let t=0,r=0;for(let i=0;i<n.length;++i){if(ve(n[i]))continue;const l=(a=n[i].resizing)==null?void 0:a.disabled;if(!n[i].width){t=-1;break}if(!l){const o=Number(n[i].width);o>r&&(t=i,r=o)}}return n.length>=1&&t>=0&&(n[t].width=void 0),n}function bt(e,n,t){const r=a=>a.map(i=>ve(i)?i:{...i,width:i.width?i.width:t});switch(n){case"max":return bg(e);case"last":case"scroll":return gg(r(e));default:return r(e)}}const hg=function(e,n,t,r){return(e==null?void 0:e.reduce((i,l)=>i+(l.show||l.dataIndex||l.render?1:0),0))>t&&r&&n==="scroll"||n!=="scroll"?n:"last"},$i=({columns:e,storageKey:n})=>{if(!e)return[];if(!n)return e;const t=Zt({storageKey:n,featureKey:"columns"});return t?e.map(r=>{if(!r.dataIndex)return r;const a=t[r.dataIndex];if(!a)return r;const{width:i,isUserDefinedWidth:l}=a;return{...r,isUserDefinedWidth:l,width:l?i:r.width}}):e},vg=220,Fg=100,wg=L.th`
  position: relative;
  width: ${e=>e.$width}px;
  overflow: visible;
`,Og=({children:e,width:n,onResize:t,disabled:r})=>{const a=v.useRef(null),[i,l]=v.useState(!1),[o,f]=v.useState(0),[u,d]=v.useState(0),[s,p]=v.useState(null),c=v.useCallback(h=>{r||(h.preventDefault(),h.stopPropagation(),l(!0),f(h.clientX),d(n))},[r,n]),y=v.useCallback(h=>{var F;if(!i)return;const g=h.clientX-o,w=Math.max(Fg,u+g);p(w),(F=a.current)==null||F.style.setProperty("transform",`translateX(${g}px)`)},[i,o,u]),b=v.useCallback(()=>{var h;i&&((h=a.current)==null||h.style.removeProperty("transform"),s!==null&&t(s),l(!1),p(null))},[i,s,t]);return v.useEffect(()=>{if(i)return document.addEventListener("mousemove",y),document.addEventListener("mouseup",b),()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",b)}},[i,y,b]),m.createElement(wg,{$width:n},e,!r&&m.createElement("div",{ref:a,onMouseDown:c,className:"resizing-handle-container"},m.createElement("div",{className:"resizing-handle"})))},kg=e=>{const{onResize:n,width:t,resizing:r,children:a,...i}=e,l={...i,children:a,...e.className.includes("selection-column")&&{"kl-value":"selectAll"}};return!t||r&&r.disabled?m.createElement("th",{...l},a):m.createElement(Og,{width:t,onResize:n,disabled:r==null?void 0:r.disabled},a)},qg=(e,n,t,r)=>{const a=[...t];return a[e]={...a[e],width:n,isUserDefinedWidth:!0},r==null||r(a[e]),a},Wi=(e,n,t,r)=>e.map((a,i)=>ve(a)?a:{...a,onHeaderCell:l=>(t==null||t(l),{resizing:l.resizing,width:l.width,onResize:o=>n(qg(i,o,e,r))})}),Tg=e=>function(t){var k;const{resizingMode:r="last",maxColumnsForAutoResizing:a=1,defaultColumnWidth:i=vg}=t,l={...t.components,header:{cell:kg,...t.stickyHeader!==void 0&&{wrapper:rs}}},[o,f]=v.useState($i({columns:t.columns,storageKey:t.storageKey})),[u,d]=v.useState(r),s=v.useRef(null),[p,c]=v.useState(!1),[y,b]=v.useState(!1),[h,g]=v.useState(bt(o,u,i)),[w,F]=v.useState(Wi(h,g,t.onColumnResize,t.onManualColumnResize)),O=!!((k=t.dataSource)!=null&&k.length);return v.useEffect(()=>{if(y&&O){const T=hg(o,r,a,p);d(T),g(bt(w,T,i))}},[p,y,o,r,a,O]),v.useEffect(()=>{var D;const T=(D=s.current)==null?void 0:D.parentElement;if(!T)return;const q=new ResizeObserver(_=>{const[{contentRect:S}]=_;b(!!(S.width+S.height))});return q.observe(T),()=>q.disconnect()},[]),v.useEffect(()=>{const T=o.map(q=>{const D=h.find(_=>_.dataIndex===q.dataIndex);return{...q,width:(D==null?void 0:D.width)??(q==null?void 0:q.width)}});g(bt(T,u,i))},[t.columns]),At(()=>{let T;return t.stickyHeader!==void 0&&y&&(T=setInterval(()=>{const q=s.current.parentNode,D=q.querySelectorAll(".table-scrolling-wrapper colgroup col");if(D.length>0){clearInterval(T);const _=q.querySelectorAll(`.${Ba} th`);g(S=>{const R=[...S];let C=0;return _.forEach(U=>{var j;if(!U.classList.contains("ant-table-selection-column")){const B=U.getBoundingClientRect().width,M=t.rowSelection?C+1:C;((j=D[M])==null?void 0:j.clientWidth)!==B&&(R[C]={...R[C],width:B}),C++}}),R})}},150)),()=>T&&clearInterval(T)},[t.stickyHeader,t.dataSource,t.rowSelection,y]),v.useEffect(()=>{f($i({columns:t.columns,storageKey:t.storageKey}))},[t.columns]),v.useEffect(()=>{g(T=>{const q=o.map(D=>{if(ve(D))return D;const _=T.find(S=>S.key===D.key);return _?{...D,width:_.width}:D});return bt(q,u,i)})},[o,u,i]),v.useEffect(()=>{if(t.storageKey){const T=Zt({storageKey:t.storageKey,featureKey:"columns"})||{},q=w.reduce((D,_)=>(_.dataIndex&&(D[_.dataIndex]={...D[_.dataIndex],width:_.width,isUserDefinedWidth:_.isUserDefinedWidth}),D),T);Jt({storageKey:t.storageKey,featureKey:"columns",updatedValue:q})}},[w]),At(()=>{F(Wi(h,g,t.onColumnResize,t.onManualColumnResize))},[h,t.onColumnResize,t.onManualColumnResize]),m.createElement(es.Provider,{value:{columns:w,rowSelection:t.rowSelection,setOverflow:c}},m.createElement("div",{ref:s,hidden:!0}),m.createElement(e,{...t,resizingMode:u,columns:w,components:l}))},xg=(e,n)=>{function t(r){return n!==2?null:r}switch(e){case I.Text:return[x.eq,x.neq,x.cont,x.ncont,t(x.regexp),t(x.empty),t(x.nempty)].filter(Boolean);case I.DateTime:return[x.eq,x.neq,x.gt,x.ge,x.lt,x.le,x.empty,x.nempty,x.range,x.nrange];case I.Number:return[x.eq,x.neq,x.gt,t(x.ge),x.lt,t(x.le),t(x.empty),t(x.nempty)].filter(Boolean);case I.DaysBefore:return[x.gt,x.lt];case I.Enum:return[x.eq,x.neq,t(x.cont_or),t(x.cont_and),t(x.ncont_or),t(x.regexp)].filter(Boolean);case I.Boolean:return[x.eq];case I.DateRange:case I.IP:case I.Radio:return[x.eq,x.neq];default:return ya(e,"Incorrect filter operation"),[]}},ea=e=>e||ke(new Date(new Date().setHours(0,0,0,0))),is=e=>e||ke(new Date(new Date().setHours(23,59,59,999))),Dg=e=>e.value===null||typeof e.value=="number"?{...e,value:ea(e.value)}:{...e,value:{from:ea(e.value.from),to:is(e.value.to)}},Eg=e=>({...e,value:{from:ea(e.value.from),to:is(e.value.to)}}),Sg=e=>e.map(n=>n.type===I.DateRange?Eg(n):n.type===I.DateTime?Dg(n):n);function os({handleFilterChange:e,filter:n,operations:t,index:r}){const{t:a}=rt(),{filterVersion:i}=fe(),l=v.useMemo(()=>t&&t.length?t.map(({label:p,operation:c})=>({label:p||c,value:c})):xg(n.type,i||1).map(p=>({label:a(`table.filterOperation.${p}`,p),value:p})),[a,n.type,i,t]),o=s=>{const p=s===x.range||s===x.nrange;let c=n.value;p&&!Zr(c)?c={from:c,to:null}:!p&&Zr(c)&&(c=c.from),e({...n,condition:s,value:c},n.id)},f=s=>{let p=n.value;[n.condition,s].includes(x.regexp)&&(p=null),Sn(s)&&!Sn(n.condition)&&(p?p=[p]:p=[]),!Sn(s)&&Sn(n.condition)&&(Array.isArray(p)&&p.length>0?p=p[0]:p=null),e({...n,condition:s,value:p},n.id)},u=s=>{e({...n,condition:s},n.id)},d=n.type===I.DateTime?o:n.type===I.Enum?f:u;return m.createElement(Dt,{onChange:d,value:n.condition,options:l,testId:`filter-item-condition-select-${r}`,listHeight:400})}os.__docgenInfo={description:"",methods:[],displayName:"FilterItemCondition",props:{handleFilterChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filterTo: FilterConfigInternal, id?: string) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & { id: string }",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},name:"filterTo"},{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},operations:{required:!0,tsType:{name:"unknown"},description:""},index:{required:!0,tsType:{name:"number"},description:""},filter:{required:!0,tsType:{name:"intersection",raw:"T & { id: string }",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},description:""}}};const ls=({filter:e,onChange:n,index:t,validationStatus:r})=>{const a=l=>{n({...e,value:l})},i=`filter-item-value-${t}`;return m.createElement(Pt,{klId:i,testId:i,value:e.value??"",onChange:a,validationStatus:r})};ls.__docgenInfo={description:"",methods:[],displayName:"StringItem",props:{index:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: WithId<Filter>) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & { id: string }",elements:[{name:"Filter"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},name:"filter"}],return:{name:"void"}}},description:""},filter:{required:!0,tsType:{name:"intersection",raw:"T & { id: string }",elements:[{name:"Filter"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},description:""},validationStatus:{required:!1,tsType:{name:"ValidationStatus"},description:""}}};const ss=({filter:e,onChange:n,validationStatus:t})=>{const r=a=>{n({...e,value:a})};return m.createElement(Pt.Number,{value:e.value,onChange:r,validationStatus:t})};ss.__docgenInfo={description:"",methods:[],displayName:"NumberItem",props:{index:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: WithId<Filter>) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & { id: string }",elements:[{name:"Filter"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},name:"filter"}],return:{name:"void"}}},description:""},filter:{required:!0,tsType:{name:"intersection",raw:"T & { id: string }",elements:[{name:"Filter"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},description:""},validationStatus:{required:!1,tsType:{name:"ValidationStatus"},description:""}}};const us=({filter:e,onChange:n})=>{const{t}=rt(),r=v.useMemo(()=>[{value:"true",text:t("common.yes")},{value:"false",text:t("common.no")}],[t]),a=i=>{n({...e,value:i[0]==="true"})};return m.createElement(ju,{items:r,onChange:a,size:"large",value:[e.value===!0?"true":"false"]})};us.__docgenInfo={description:"",methods:[],displayName:"BooleanItem",props:{index:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: WithId<Filter>) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & { id: string }",elements:[{name:"Filter"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},name:"filter"}],return:{name:"void"}}},description:""},filter:{required:!0,tsType:{name:"intersection",raw:"T & { id: string }",elements:[{name:"Filter"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},description:""},validationStatus:{required:!1,tsType:{name:"ValidationStatus"},description:""}}};const ms=({filter:e,onChange:n,validationStatus:t})=>{const{dateFormat:r}=fe(),a=v.useCallback(l=>{const o=l!==null?new Date(l.setHours(0,0,0,0)):l;n({...e,value:{from:ke(o),to:e.value.to}})},[e,n]),i=v.useCallback(l=>{const o=l!==null?new Date(l.setHours(23,59,59,999)).toISOString():l;n({...e,value:{from:e.value.from,to:ke(o)}})},[e,n]);return m.createElement(Nu,{cols:2,layoutProperty:{gap:8}},m.createElement(zn,{label:tn("table.columnsSettings.filtering.from"),control:m.createElement(Ur,{format:r,value:An(e.value.from),onChange:a,validationStatus:t})}),m.createElement(zn,{label:tn("table.columnsSettings.filtering.to"),control:m.createElement(Ur,{format:r,value:An(e.value.to),onChange:i,validationStatus:t})}))};ms.__docgenInfo={description:"",methods:[],displayName:"DateItem",props:{index:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: WithId<Filter>) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & { id: string }",elements:[{name:"Filter"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},name:"filter"}],return:{name:"void"}}},description:""},filter:{required:!0,tsType:{name:"intersection",raw:"T & { id: string }",elements:[{name:"Filter"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},description:""},validationStatus:{required:!1,tsType:{name:"ValidationStatus"},description:""}}};const ps=({filter:e,onChange:n,dateOnly:t,validationStatus:r})=>{const{dateFormat:a}=fe(),i=e.value,l=e.value,o=d=>{n({...e,value:ke(d)})},f=d=>{if(!d){n({...e,value:{from:null,to:null}});return}const s=d[0],p=d[1];s&&!(l!=null&&l.from)&&s.setHours(0,0,0,0),p&&!(l!=null&&l.to)&&p.setHours(23,59,59,999),n({...e,value:{from:ke(s),to:ke(p)}})};return e.condition===x.range||e.condition===x.nrange?m.createElement(Iu,{format:a,onChange:f,showTime:!t,value:[An(l==null?void 0:l.from),An(l==null?void 0:l.to)],validationStatus:r}):m.createElement(Ur,{format:a,onChange:o,showTime:!t,value:An(i),validationStatus:r})};ps.__docgenInfo={description:"",methods:[],displayName:"DateTimeItem",props:{index:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: WithId<Filter>) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & { id: string }",elements:[{name:"Filter"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},name:"filter"}],return:{name:"void"}}},description:""},filter:{required:!0,tsType:{name:"intersection",raw:"T & { id: string }",elements:[{name:"Filter"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},description:""},validationStatus:{required:!1,tsType:{name:"ValidationStatus"},description:""},dateOnly:{required:!1,tsType:{name:"boolean"},description:"Show only dates without time for datetime filter"}}};const Hi=e=>!isNaN(e.valueOf()),ds=e=>typeof e>"u"||e===null?null:typeof e=="string"||typeof e=="number"||typeof e=="boolean"?{label:String(e),value:e}:{label:e.label,value:e.value},cs=async(e,n)=>{var a,i,l,o,f;const t={id:fo(),name:e.dataIndex,isUserDefined:!0,type:((a=e.filterType)==null?void 0:a.type)||I.Text,condition:x.eq},r=e.filterAttributes;if(r&&((i=r[0])!=null&&i.name)){const u=r.find(d=>d.name===n)||r[0];t.attribute={name:u.name,getAvailableOptions:(l=u.filter)==null?void 0:l.getAvailableOptions},t.type=u.filter.type}switch(t.type){case I.Enum:{const u=t,d=((o=u==null?void 0:u.attribute)==null?void 0:o.getAvailableOptions)||((f=e.filterType)==null?void 0:f.getAvailableOptions),s=await(d==null?void 0:d()),p=ds(s==null?void 0:s[0]);return{...u,condition:x.eq,value:(p==null?void 0:p.value)??null}}case I.Boolean:return{...t,condition:x.eq,type:I.Boolean,value:!0};case I.DateRange:return{...t,condition:x.eq,type:I.DateRange,value:{from:null,to:null}};case I.DateTime:return{...t,condition:x.eq,type:I.DateTime,value:null};case I.Number:return{...t,condition:x.eq,type:I.Number,value:null};case I.Text:default:return{...t,condition:x.eq,type:I.Text,value:null}}},Rg=e=>({date:n=>{const t=new Date(n[e.name]),r=new Date(e.value.from||""),a=new Date(e.value.to||"");switch(e.condition){case x.eq:return t>=r&&t<=a||!Hi(r)&&t<=a||!Hi(a)&&t>=r;default:return t<r||t>a}}}),Cg=e=>({number:n=>{const t=e.value,r=n[e.name];if(t==null)return r===""||r==null;switch(e.condition){case x.eq:return r===t;case x.lt:return r<t;case x.gt:return r>t;default:return r!==t}}}),_g=e=>({text:n=>{var a,i,l,o;const t=((i=(a=$e(n,e.name))==null?void 0:a.toLowerCase)==null?void 0:i.call(a))??"",r=((o=(l=e.value)==null?void 0:l.toLowerCase)==null?void 0:o.call(l))??"";switch(e.condition){case x.eq:return t===r;case x.cont:return t.includes(r);case x.ncont:return!t.includes(r);default:return t!==r}}}),Ag=e=>({text:n=>{var a,i,l,o;const t=((i=(a=n==null?void 0:n[e.name])==null?void 0:a.toLowerCase)==null?void 0:i.call(a))??"",r=((o=(l=e.value)==null?void 0:l.toLowerCase)==null?void 0:o.call(l))??"";switch(e.condition){case x.eq:return t===r;default:return t!==r}}});function Ig(e){return e.reduce((n,t,r)=>{switch(t.type){case I.DateRange:n[r]=Rg(t);break;case I.Number:n[r]=Cg(t);break;case I.Enum:n[r]=Ag(t);break;case I.Text:default:n[r]=_g(t)}return n},{})}const Ng=e=>e.reduce((n,t)=>(de(t)&&t.id.startsWith("column.")&&t.items.filter(r=>an(r)).forEach(r=>{n[r.name]?n[r.name][r.filterName]=r.predicate:n[r.name]={[r.filterName]:r.predicate}}),n),{}),jg=e=>{const n=Ig(e.filter(se)),t=Ng(e);return eu(n,t)},ys=({filter:e,onChange:n,validationStatus:t,getAvailableOptions:r,getAvailableValues:a})=>{const[i,l]=v.useState([]);v.useEffect(()=>{if(r){r().then(l);return}if(a){a().then(l);return}console.warn("getAvailableOptions or getAvailableValues is required for EnumItem")},[]);const o=u=>{n({...e,value:u})};if(e.condition===x.regexp)return m.createElement(Pt,{value:e.value??"",onChange:o});const f=Sn(e.condition);return m.createElement(Dt,{mode:f?"multiple":void 0,onChange:o,value:e.value??void 0,options:i.map((u,d)=>{const{value:s,label:p}=ds(u)||{};return{value:s,label:p,key:`${s}:${d}`}}),validationStatus:t})};ys.__docgenInfo={description:"",methods:[],displayName:"EnumItem",props:{index:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: WithId<Filter>) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & { id: string }",elements:[{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:`EqualsOperations
| FilterOperation.cont_and
| FilterOperation.cont_or
| FilterOperation.ncont_or
| FilterOperation.regexp`,elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"FilterOperation.cont_and"},{name:"FilterOperation.cont_or"},{name:"FilterOperation.ncont_or"},{name:"FilterOperation.regexp"}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:`{
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"getAvailableOptions",value:{name:"signature",type:"function",raw:"() => Promise<EnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string | number | boolean,
  label?: ReactNode
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!0}},{key:"label",value:{name:"ReactNode",required:!1}}]}}],raw:"EnumOption[]"}],raw:"Promise<EnumOption[]>"}},required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},name:"filter"}],return:{name:"void"}}},description:""},filter:{required:!0,tsType:{name:"intersection",raw:"T & { id: string }",elements:[{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:`EqualsOperations
| FilterOperation.cont_and
| FilterOperation.cont_or
| FilterOperation.ncont_or
| FilterOperation.regexp`,elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"FilterOperation.cont_and"},{name:"FilterOperation.cont_or"},{name:"FilterOperation.ncont_or"},{name:"FilterOperation.regexp"}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:`{
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"getAvailableOptions",value:{name:"signature",type:"function",raw:"() => Promise<EnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string | number | boolean,
  label?: ReactNode
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!0}},{key:"label",value:{name:"ReactNode",required:!1}}]}}],raw:"EnumOption[]"}],raw:"Promise<EnumOption[]>"}},required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},description:""},validationStatus:{required:!1,tsType:{name:"ValidationStatus"},description:""},getAvailableValues:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<LegacyEnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"LegacyEnumOption[]"}],raw:"Promise<LegacyEnumOption[]>"}}},description:"`getAvailableValues` is deprecated, use getAvailableOptions instead.\nIf `getAvailableOptions` is provided, `getAvailableValues` will be ignored.\n\n@deprecated Use getAvailableOptions instead"},getAvailableOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<EnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string | number | boolean,
  label?: ReactNode
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!0}},{key:"label",value:{name:"ReactNode",required:!1}}]}}],raw:"EnumOption[]"}],raw:"Promise<EnumOption[]>"}}},description:""}}};function fs({columns:e,filter:n,validationMessage:t,...r}){var l,o,f,u,d,s,p;const a=v.useMemo(()=>e.find(c=>n.name===(c==null?void 0:c.dataIndex)),[e,n.name]),i=t?"error":"default";switch(n.type){case I.Boolean:return m.createElement(us,{filter:n,...r});case I.DateRange:return m.createElement(ms,{filter:n,validationStatus:i,...r});case I.DateTime:return m.createElement(ps,{filter:n,dateOnly:((l=a==null?void 0:a.filterType)==null?void 0:l.type)===I.DateTime&&((o=a==null?void 0:a.filterType)==null?void 0:o.dateOnly),validationStatus:i,...r});case I.Text:return m.createElement(ls,{filter:n,validationStatus:i,...r});case I.Enum:{const c=((f=n.attribute)==null?void 0:f.getAvailableOptions)||(((u=a==null?void 0:a.filterType)==null?void 0:u.type)===I.Enum?(d=a==null?void 0:a.filterType)==null?void 0:d.getAvailableOptions:void 0);return m.createElement(ys,{filter:n,getAvailableOptions:c,getAvailableValues:((s=a==null?void 0:a.filterType)==null?void 0:s.type)===I.Enum?(p=a==null?void 0:a.filterType)==null?void 0:p.getAvailableValues:void 0,validationStatus:i,...r})}case I.Number:return m.createElement(ss,{filter:n,validationStatus:i,...r});default:return m.createElement(m.Fragment,null)}}fs.__docgenInfo={description:"",methods:[],displayName:"FilterItemValue",props:{index:{required:!1,tsType:{name:"number"},description:""},filter:{required:!0,tsType:{name:"intersection",raw:"T & { id: string }",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: FilterConfigInternal) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & { id: string }",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},name:"filter"}],return:{name:"void"}}},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  ColumnType<TableRecord>,
  'key' | 'sorter' | 'filters' | 'dataIndex'
> & {
  key: React.Key,
  title?: string | ReactElement,
  /* Show Dash in empty cell for column */
  hasEmptyCellDash?: boolean,
  dataIndex?: string,
  columnId?: string,
  /* When the content exceeds the width of the cell, an arrow is drawn, and when clicked, the full content is displayed. It works with custom
   * render also and is not compatible with ellipsis: true. If ellipsis: false it disables expandableText also
   */
  expandableText?: boolean,
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter,
  filteringAvailable?: boolean,
  groupingAvailable?: boolean,
  hideColumnAvailable?: boolean,
  show?: boolean,
  closeDropdownOnSelect?: boolean,
  filters?: ColumnFilter[],
  filterType?: TableFilterType,
  /** 
   * It's used for manually setting the display of filtering icon in column title. 
   * By default, filter icon is displayed when at least one filter is applied to the column,
   * but this option overrides default behaivour 
  */
  showFilterIcon?: boolean,
  width?: number | string,
  isUserDefinedWidth?: boolean,
  renderGroupTitle?: (data: string) => ReactNode,
  resizing?: {
    disabled: boolean
  },
  sortingAttributes?: SortingAttributes,
  filterAttributes?: FilterAttributes
}`,elements:[{name:"Omit",elements:[{name:"ColumnType",elements:[{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}}],raw:"ColumnType<TableRecord>"},{name:"union",raw:"'key' | 'sorter' | 'filters' | 'dataIndex'",elements:[{name:"literal",value:"'key'"},{name:"literal",value:"'sorter'"},{name:"literal",value:"'filters'"},{name:"literal",value:"'dataIndex'"}]}],raw:`Omit<
  ColumnType<TableRecord>,
  'key' | 'sorter' | 'filters' | 'dataIndex'
>`},{name:"signature",type:"object",raw:`{
  key: React.Key,
  title?: string | ReactElement,
  /* Show Dash in empty cell for column */
  hasEmptyCellDash?: boolean,
  dataIndex?: string,
  columnId?: string,
  /* When the content exceeds the width of the cell, an arrow is drawn, and when clicked, the full content is displayed. It works with custom
   * render also and is not compatible with ellipsis: true. If ellipsis: false it disables expandableText also
   */
  expandableText?: boolean,
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter,
  filteringAvailable?: boolean,
  groupingAvailable?: boolean,
  hideColumnAvailable?: boolean,
  show?: boolean,
  closeDropdownOnSelect?: boolean,
  filters?: ColumnFilter[],
  filterType?: TableFilterType,
  /** 
   * It's used for manually setting the display of filtering icon in column title. 
   * By default, filter icon is displayed when at least one filter is applied to the column,
   * but this option overrides default behaivour 
  */
  showFilterIcon?: boolean,
  width?: number | string,
  isUserDefinedWidth?: boolean,
  renderGroupTitle?: (data: string) => ReactNode,
  resizing?: {
    disabled: boolean
  },
  sortingAttributes?: SortingAttributes,
  filterAttributes?: FilterAttributes
}`,signature:{properties:[{key:"key",value:{name:"ReactKey",raw:"React.Key",required:!0}},{key:"title",value:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}],required:!1}},{key:"hasEmptyCellDash",value:{name:"boolean",required:!1}},{key:"dataIndex",value:{name:"string",required:!1}},{key:"columnId",value:{name:"string",required:!1}},{key:"expandableText",value:{name:"boolean",required:!1}},{key:"isSortable",value:{name:"boolean",required:!1}},{key:"allowMultipleFilters",value:{name:"boolean",required:!1}},{key:"sorter",value:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}},required:!1}},{key:"customSorter",value:{name:"signature",type:"function",raw:"<T extends TableRecord>(rows: T[], propName: keyof T, isAsc: boolean, attribute: string) => T[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"rows"},{type:{name:"T"},name:"propName"},{type:{name:"boolean"},name:"isAsc"},{type:{name:"string"},name:"attribute"}],return:{name:"Array",elements:[{name:"T"}],raw:"T[]"}},required:!1},description:"@deprecated Use **sorter** for custom column sorting"},{key:"filteringAvailable",value:{name:"boolean",required:!1}},{key:"groupingAvailable",value:{name:"boolean",required:!1}},{key:"hideColumnAvailable",value:{name:"boolean",required:!1}},{key:"show",value:{name:"boolean",required:!1}},{key:"closeDropdownOnSelect",value:{name:"boolean",required:!1}},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  localizationKey?: string,
  name: string,
  elementBefore?: ReactNode,
  filter: FilterFunction
}`,signature:{properties:[{key:"localizationKey",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"elementBefore",value:{name:"ReactNode",required:!1}},{key:"filter",value:{name:"signature",type:"function",raw:"(record: TableRecord) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"record"}],return:{name:"boolean"}},required:!0}}]}}],raw:"ColumnFilter[]",required:!1}},{key:"filterType",value:{name:"union",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
} & SharedFilterType<FilterType.DateTime>
| EnumFilterType
| { type: FilterType.Text } & SharedFilterType<FilterType.Text>
| { type: FilterType.Number } & SharedFilterType<FilterType.Number>
| { type: FilterType.Boolean } & SharedFilterType<FilterType.Boolean>
| { type: FilterType.DateRange } & SharedFilterType<FilterType.DateRange>
| { type: FilterType.DaysBefore } & SharedFilterType<FilterType.DaysBefore>
| { type: FilterType.Radio } & SharedFilterType<FilterType.Radio>
| { type: FilterType.IP } & SharedFilterType<FilterType.IP>`,elements:[{name:"intersection",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
} & SharedFilterType<FilterType.DateTime>`,elements:[{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"dateOnly",value:{name:"boolean",required:!1},description:"Show only dates without time"}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:`{
  type: FilterType.Enum,
  /**
   * @deprecated Use **getAvailableOptions** instead
   */
  getAvailableValues?: () => Promise<LegacyEnumOption[]>,
  /**
   * @returns Array of options
   *
   * @example
   * \`\`\`ts
   * getAvailableOptions: () => Promise.resolve([
   *  { label: "option1", value: "Option 1" },
   *  { label: <span>Option 2</span>, value: "Option 2" },
   * ])
   * \`\`\`
   */
  getAvailableOptions?: () => Promise<EnumOption[]>
} & SharedFilterType<FilterType.Enum>`,elements:[{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  /**
   * @deprecated Use **getAvailableOptions** instead
   */
  getAvailableValues?: () => Promise<LegacyEnumOption[]>,
  /**
   * @returns Array of options
   *
   * @example
   * \`\`\`ts
   * getAvailableOptions: () => Promise.resolve([
   *  { label: "option1", value: "Option 1" },
   *  { label: <span>Option 2</span>, value: "Option 2" },
   * ])
   * \`\`\`
   */
  getAvailableOptions?: () => Promise<EnumOption[]>
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"getAvailableValues",value:{name:"signature",type:"function",raw:"() => Promise<LegacyEnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"LegacyEnumOption[]"}],raw:"Promise<LegacyEnumOption[]>"}},required:!1},description:"@deprecated Use **getAvailableOptions** instead"},{key:"getAvailableOptions",value:{name:"signature",type:"function",raw:"() => Promise<EnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string | number | boolean,
  label?: ReactNode
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!0}},{key:"label",value:{name:"ReactNode",required:!1}}]}}],raw:"EnumOption[]"}],raw:"Promise<EnumOption[]>"}},required:!1},description:`@returns Array of options

@example
\`\`\`ts
getAvailableOptions: () => Promise.resolve([
 { label: "option1", value: "Option 1" },
 { label: <span>Option 2</span>, value: "Option 2" },
])
\`\`\``}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Text } & SharedFilterType<FilterType.Text>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Text }",signature:{properties:[{key:"type",value:{name:"FilterType.Text",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Number } & SharedFilterType<FilterType.Number>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Number }",signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Boolean } & SharedFilterType<FilterType.Boolean>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Boolean }",signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.DateRange } & SharedFilterType<FilterType.DateRange>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.DateRange }",signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.DaysBefore } & SharedFilterType<FilterType.DaysBefore>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.DaysBefore }",signature:{properties:[{key:"type",value:{name:"FilterType.DaysBefore",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Radio } & SharedFilterType<FilterType.Radio>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Radio }",signature:{properties:[{key:"type",value:{name:"FilterType.Radio",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.IP } & SharedFilterType<FilterType.IP>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.IP }",signature:{properties:[{key:"type",value:{name:"FilterType.IP",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]}],required:!1}},{key:"showFilterIcon",value:{name:"boolean",required:!1},description:`It's used for manually setting the display of filtering icon in column title. 
By default, filter icon is displayed when at least one filter is applied to the column,
but this option overrides default behaivour`},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"isUserDefinedWidth",value:{name:"boolean",required:!1}},{key:"renderGroupTitle",value:{name:"signature",type:"function",raw:"(data: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"data"}],return:{name:"ReactNode"}},required:!1}},{key:"resizing",value:{name:"signature",type:"object",raw:`{
  disabled: boolean
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!0}}]},required:!1}},{key:"sortingAttributes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"attribute",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}[]`,required:!1}},{key:"filterAttributes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string,
  name: string,
  filter: {
    type: FilterType,
    getAvailableOptions?: (() => Promise<EnumOption[]>)
  }
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"filter",value:{name:"signature",type:"object",raw:`{
  type: FilterType,
  getAvailableOptions?: (() => Promise<EnumOption[]>)
}`,signature:{properties:[{key:"type",value:{name:"FilterType",required:!0}},{key:"getAvailableOptions",value:{name:"unknown",required:!1}}]},required:!0}}]}}],raw:`{
  label: string,
  name: string,
  filter: {
    type: FilterType,
    getAvailableOptions?: (() => Promise<EnumOption[]>)
  }
}[]`,required:!1}}]}}]}],raw:"TableColumn[]"},description:""},validationMessage:{required:!1,tsType:{name:"string"},description:""}}};const Mg="_filtersList_1cvw7_1",Pg="_filterItemContainer_1cvw7_7",Bg="_propertyRow_1cvw7_14",Ug="_valueRow_1cvw7_20",Lg="_grid48_1cvw7_29",Vg="_filtersToolbar_1cvw7_33",$g="_filtersFooter_1cvw7_44",cn={filtersList:Mg,filterItemContainer:Pg,propertyRow:Bg,valueRow:Ug,grid48:Lg,filtersToolbar:Vg,filtersFooter:$g};function gs({index:e,handlePropertyChange:n,handleFilterChange:t,handleRemove:r,columnsToShow:a,filter:i,validationMessage:l}){var p,c,y,b;const{t:o}=rt(),f=v.useMemo(()=>a.map(h=>({label:h.title,value:h.dataIndex,key:h.key})),[a]),u=v.useMemo(()=>a.find(h=>i.name===(h==null?void 0:h.dataIndex)),[a,i.name]),d=((p=u==null?void 0:u.filterAttributes)==null?void 0:p.map(({label:h,name:g})=>({label:h,value:g,key:g})))||[],s=i.condition!==x.empty&&i.condition!==x.nempty;return m.createElement(Mu,{size:"large",mode:"filled",closable:!0,onCloseButtonClick:()=>r(i),testId:`table-filter-item-${e}`,klId:`table-filter-item-${e}`},m.createElement("div",{className:cn.filterItemContainer,role:"filter"},m.createElement("div",{className:je(cn.propertyRow)},m.createElement(zn,{label:o("table.columnsSettings.filtering.property"),control:m.createElement(Dt,{value:(c=a.find(h=>i.name===h.dataIndex))==null?void 0:c.dataIndex,onChange:h=>n(h,i.id),options:f,testId:`filter-item-property-select-${e}`})}),d.length>0&&m.createElement(zn,{label:o("table.columnsSettings.filtering.attribute"),control:m.createElement(Dt,{value:((y=i==null?void 0:i.attribute)==null?void 0:y.name)||d[0].value,onChange:h=>n(i.name,i.id,h),options:d,testId:`filter-item-property-attribute-select-${e}`})})),m.createElement("div",{className:je(cn.valueRow,cn.grid48)},m.createElement(os,{handleFilterChange:t,filter:i,operations:((b=u==null?void 0:u.filterType)==null?void 0:b.operations)||[],index:e}),s&&m.createElement(zn,{message:o(l||"")??void 0,control:m.createElement(fs,{index:e,filter:i,onChange:h=>t(h,i.id),columns:a,validationMessage:l})}))))}gs.__docgenInfo={description:"",methods:[],displayName:"FilterItem",props:{index:{required:!0,tsType:{name:"number"},description:""},handlePropertyChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(columnIndex: string, id?: string, attribute?: string) => void",signature:{arguments:[{type:{name:"string"},name:"columnIndex"},{type:{name:"string"},name:"id"},{type:{name:"string"},name:"attribute"}],return:{name:"void"}}},description:""},handleFilterChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filterTo: FilterConfigInternal, id?: string) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & { id: string }",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},name:"filterTo"},{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},handleRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: FilterConfigInternal) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & { id: string }",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},name:"filter"}],return:{name:"void"}}},description:""},columnsToShow:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  ColumnType<TableRecord>,
  'key' | 'sorter' | 'filters' | 'dataIndex'
> & {
  key: React.Key,
  title?: string | ReactElement,
  /* Show Dash in empty cell for column */
  hasEmptyCellDash?: boolean,
  dataIndex?: string,
  columnId?: string,
  /* When the content exceeds the width of the cell, an arrow is drawn, and when clicked, the full content is displayed. It works with custom
   * render also and is not compatible with ellipsis: true. If ellipsis: false it disables expandableText also
   */
  expandableText?: boolean,
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter,
  filteringAvailable?: boolean,
  groupingAvailable?: boolean,
  hideColumnAvailable?: boolean,
  show?: boolean,
  closeDropdownOnSelect?: boolean,
  filters?: ColumnFilter[],
  filterType?: TableFilterType,
  /** 
   * It's used for manually setting the display of filtering icon in column title. 
   * By default, filter icon is displayed when at least one filter is applied to the column,
   * but this option overrides default behaivour 
  */
  showFilterIcon?: boolean,
  width?: number | string,
  isUserDefinedWidth?: boolean,
  renderGroupTitle?: (data: string) => ReactNode,
  resizing?: {
    disabled: boolean
  },
  sortingAttributes?: SortingAttributes,
  filterAttributes?: FilterAttributes
}`,elements:[{name:"Omit",elements:[{name:"ColumnType",elements:[{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}}],raw:"ColumnType<TableRecord>"},{name:"union",raw:"'key' | 'sorter' | 'filters' | 'dataIndex'",elements:[{name:"literal",value:"'key'"},{name:"literal",value:"'sorter'"},{name:"literal",value:"'filters'"},{name:"literal",value:"'dataIndex'"}]}],raw:`Omit<
  ColumnType<TableRecord>,
  'key' | 'sorter' | 'filters' | 'dataIndex'
>`},{name:"signature",type:"object",raw:`{
  key: React.Key,
  title?: string | ReactElement,
  /* Show Dash in empty cell for column */
  hasEmptyCellDash?: boolean,
  dataIndex?: string,
  columnId?: string,
  /* When the content exceeds the width of the cell, an arrow is drawn, and when clicked, the full content is displayed. It works with custom
   * render also and is not compatible with ellipsis: true. If ellipsis: false it disables expandableText also
   */
  expandableText?: boolean,
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter,
  filteringAvailable?: boolean,
  groupingAvailable?: boolean,
  hideColumnAvailable?: boolean,
  show?: boolean,
  closeDropdownOnSelect?: boolean,
  filters?: ColumnFilter[],
  filterType?: TableFilterType,
  /** 
   * It's used for manually setting the display of filtering icon in column title. 
   * By default, filter icon is displayed when at least one filter is applied to the column,
   * but this option overrides default behaivour 
  */
  showFilterIcon?: boolean,
  width?: number | string,
  isUserDefinedWidth?: boolean,
  renderGroupTitle?: (data: string) => ReactNode,
  resizing?: {
    disabled: boolean
  },
  sortingAttributes?: SortingAttributes,
  filterAttributes?: FilterAttributes
}`,signature:{properties:[{key:"key",value:{name:"ReactKey",raw:"React.Key",required:!0}},{key:"title",value:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}],required:!1}},{key:"hasEmptyCellDash",value:{name:"boolean",required:!1}},{key:"dataIndex",value:{name:"string",required:!1}},{key:"columnId",value:{name:"string",required:!1}},{key:"expandableText",value:{name:"boolean",required:!1}},{key:"isSortable",value:{name:"boolean",required:!1}},{key:"allowMultipleFilters",value:{name:"boolean",required:!1}},{key:"sorter",value:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}},required:!1}},{key:"customSorter",value:{name:"signature",type:"function",raw:"<T extends TableRecord>(rows: T[], propName: keyof T, isAsc: boolean, attribute: string) => T[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"rows"},{type:{name:"T"},name:"propName"},{type:{name:"boolean"},name:"isAsc"},{type:{name:"string"},name:"attribute"}],return:{name:"Array",elements:[{name:"T"}],raw:"T[]"}},required:!1},description:"@deprecated Use **sorter** for custom column sorting"},{key:"filteringAvailable",value:{name:"boolean",required:!1}},{key:"groupingAvailable",value:{name:"boolean",required:!1}},{key:"hideColumnAvailable",value:{name:"boolean",required:!1}},{key:"show",value:{name:"boolean",required:!1}},{key:"closeDropdownOnSelect",value:{name:"boolean",required:!1}},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  localizationKey?: string,
  name: string,
  elementBefore?: ReactNode,
  filter: FilterFunction
}`,signature:{properties:[{key:"localizationKey",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"elementBefore",value:{name:"ReactNode",required:!1}},{key:"filter",value:{name:"signature",type:"function",raw:"(record: TableRecord) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"record"}],return:{name:"boolean"}},required:!0}}]}}],raw:"ColumnFilter[]",required:!1}},{key:"filterType",value:{name:"union",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
} & SharedFilterType<FilterType.DateTime>
| EnumFilterType
| { type: FilterType.Text } & SharedFilterType<FilterType.Text>
| { type: FilterType.Number } & SharedFilterType<FilterType.Number>
| { type: FilterType.Boolean } & SharedFilterType<FilterType.Boolean>
| { type: FilterType.DateRange } & SharedFilterType<FilterType.DateRange>
| { type: FilterType.DaysBefore } & SharedFilterType<FilterType.DaysBefore>
| { type: FilterType.Radio } & SharedFilterType<FilterType.Radio>
| { type: FilterType.IP } & SharedFilterType<FilterType.IP>`,elements:[{name:"intersection",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
} & SharedFilterType<FilterType.DateTime>`,elements:[{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"dateOnly",value:{name:"boolean",required:!1},description:"Show only dates without time"}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:`{
  type: FilterType.Enum,
  /**
   * @deprecated Use **getAvailableOptions** instead
   */
  getAvailableValues?: () => Promise<LegacyEnumOption[]>,
  /**
   * @returns Array of options
   *
   * @example
   * \`\`\`ts
   * getAvailableOptions: () => Promise.resolve([
   *  { label: "option1", value: "Option 1" },
   *  { label: <span>Option 2</span>, value: "Option 2" },
   * ])
   * \`\`\`
   */
  getAvailableOptions?: () => Promise<EnumOption[]>
} & SharedFilterType<FilterType.Enum>`,elements:[{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  /**
   * @deprecated Use **getAvailableOptions** instead
   */
  getAvailableValues?: () => Promise<LegacyEnumOption[]>,
  /**
   * @returns Array of options
   *
   * @example
   * \`\`\`ts
   * getAvailableOptions: () => Promise.resolve([
   *  { label: "option1", value: "Option 1" },
   *  { label: <span>Option 2</span>, value: "Option 2" },
   * ])
   * \`\`\`
   */
  getAvailableOptions?: () => Promise<EnumOption[]>
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"getAvailableValues",value:{name:"signature",type:"function",raw:"() => Promise<LegacyEnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"LegacyEnumOption[]"}],raw:"Promise<LegacyEnumOption[]>"}},required:!1},description:"@deprecated Use **getAvailableOptions** instead"},{key:"getAvailableOptions",value:{name:"signature",type:"function",raw:"() => Promise<EnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string | number | boolean,
  label?: ReactNode
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!0}},{key:"label",value:{name:"ReactNode",required:!1}}]}}],raw:"EnumOption[]"}],raw:"Promise<EnumOption[]>"}},required:!1},description:`@returns Array of options

@example
\`\`\`ts
getAvailableOptions: () => Promise.resolve([
 { label: "option1", value: "Option 1" },
 { label: <span>Option 2</span>, value: "Option 2" },
])
\`\`\``}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Text } & SharedFilterType<FilterType.Text>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Text }",signature:{properties:[{key:"type",value:{name:"FilterType.Text",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Number } & SharedFilterType<FilterType.Number>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Number }",signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Boolean } & SharedFilterType<FilterType.Boolean>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Boolean }",signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.DateRange } & SharedFilterType<FilterType.DateRange>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.DateRange }",signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.DaysBefore } & SharedFilterType<FilterType.DaysBefore>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.DaysBefore }",signature:{properties:[{key:"type",value:{name:"FilterType.DaysBefore",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Radio } & SharedFilterType<FilterType.Radio>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Radio }",signature:{properties:[{key:"type",value:{name:"FilterType.Radio",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.IP } & SharedFilterType<FilterType.IP>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.IP }",signature:{properties:[{key:"type",value:{name:"FilterType.IP",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]}],required:!1}},{key:"showFilterIcon",value:{name:"boolean",required:!1},description:`It's used for manually setting the display of filtering icon in column title. 
By default, filter icon is displayed when at least one filter is applied to the column,
but this option overrides default behaivour`},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"isUserDefinedWidth",value:{name:"boolean",required:!1}},{key:"renderGroupTitle",value:{name:"signature",type:"function",raw:"(data: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"data"}],return:{name:"ReactNode"}},required:!1}},{key:"resizing",value:{name:"signature",type:"object",raw:`{
  disabled: boolean
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!0}}]},required:!1}},{key:"sortingAttributes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"attribute",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}[]`,required:!1}},{key:"filterAttributes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string,
  name: string,
  filter: {
    type: FilterType,
    getAvailableOptions?: (() => Promise<EnumOption[]>)
  }
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"filter",value:{name:"signature",type:"object",raw:`{
  type: FilterType,
  getAvailableOptions?: (() => Promise<EnumOption[]>)
}`,signature:{properties:[{key:"type",value:{name:"FilterType",required:!0}},{key:"getAvailableOptions",value:{name:"unknown",required:!1}}]},required:!0}}]}}],raw:`{
  label: string,
  name: string,
  filter: {
    type: FilterType,
    getAvailableOptions?: (() => Promise<EnumOption[]>)
  }
}[]`,required:!1}}]}}]}],raw:"TableColumn[]"},description:""},filter:{required:!0,tsType:{name:"intersection",raw:"T & { id: string }",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]},description:""},validationMessage:{required:!1,tsType:{name:"string"},description:""}}};const bs=({onChange:e,filters:n,columns:t})=>{const r=async()=>{const i=await cs(t[0]);e([...n,i])},a=()=>{e(n.filter(i=>!Ot(i)))};return m.createElement("div",{className:cn.filtersToolbar},m.createElement(rn,{iconBefore:m.createElement(Pu,null),mode:"tertiary",onClick:r,testId:"table-filters-add-button",klId:"filters_add_button"},m.createElement(le,{localizationKey:"table.columnsSettings.filtering.add"})),n.length>0&&m.createElement(rn,{iconBefore:m.createElement(Ou,null),mode:"tertiary",onClick:a,testId:"table-filters-clear-all-button",klId:"filters_clear_all_button"},m.createElement(le,{localizationKey:"table.columnsSettings.filtering.clearAll"})))};bs.__docgenInfo={description:"",methods:[],displayName:"FilterToolbar",props:{filters:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"T & { id: string }",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]}],raw:"FilterConfigInternal[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filters: FilterConfigInternal[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:"T & { id: string }",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]}],raw:"FilterConfigInternal[]"},name:"filters"}],return:{name:"void"}}},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  ColumnType<TableRecord>,
  'key' | 'sorter' | 'filters' | 'dataIndex'
> & {
  key: React.Key,
  title?: string | ReactElement,
  /* Show Dash in empty cell for column */
  hasEmptyCellDash?: boolean,
  dataIndex?: string,
  columnId?: string,
  /* When the content exceeds the width of the cell, an arrow is drawn, and when clicked, the full content is displayed. It works with custom
   * render also and is not compatible with ellipsis: true. If ellipsis: false it disables expandableText also
   */
  expandableText?: boolean,
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter,
  filteringAvailable?: boolean,
  groupingAvailable?: boolean,
  hideColumnAvailable?: boolean,
  show?: boolean,
  closeDropdownOnSelect?: boolean,
  filters?: ColumnFilter[],
  filterType?: TableFilterType,
  /** 
   * It's used for manually setting the display of filtering icon in column title. 
   * By default, filter icon is displayed when at least one filter is applied to the column,
   * but this option overrides default behaivour 
  */
  showFilterIcon?: boolean,
  width?: number | string,
  isUserDefinedWidth?: boolean,
  renderGroupTitle?: (data: string) => ReactNode,
  resizing?: {
    disabled: boolean
  },
  sortingAttributes?: SortingAttributes,
  filterAttributes?: FilterAttributes
}`,elements:[{name:"Omit",elements:[{name:"ColumnType",elements:[{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}}],raw:"ColumnType<TableRecord>"},{name:"union",raw:"'key' | 'sorter' | 'filters' | 'dataIndex'",elements:[{name:"literal",value:"'key'"},{name:"literal",value:"'sorter'"},{name:"literal",value:"'filters'"},{name:"literal",value:"'dataIndex'"}]}],raw:`Omit<
  ColumnType<TableRecord>,
  'key' | 'sorter' | 'filters' | 'dataIndex'
>`},{name:"signature",type:"object",raw:`{
  key: React.Key,
  title?: string | ReactElement,
  /* Show Dash in empty cell for column */
  hasEmptyCellDash?: boolean,
  dataIndex?: string,
  columnId?: string,
  /* When the content exceeds the width of the cell, an arrow is drawn, and when clicked, the full content is displayed. It works with custom
   * render also and is not compatible with ellipsis: true. If ellipsis: false it disables expandableText also
   */
  expandableText?: boolean,
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter,
  filteringAvailable?: boolean,
  groupingAvailable?: boolean,
  hideColumnAvailable?: boolean,
  show?: boolean,
  closeDropdownOnSelect?: boolean,
  filters?: ColumnFilter[],
  filterType?: TableFilterType,
  /** 
   * It's used for manually setting the display of filtering icon in column title. 
   * By default, filter icon is displayed when at least one filter is applied to the column,
   * but this option overrides default behaivour 
  */
  showFilterIcon?: boolean,
  width?: number | string,
  isUserDefinedWidth?: boolean,
  renderGroupTitle?: (data: string) => ReactNode,
  resizing?: {
    disabled: boolean
  },
  sortingAttributes?: SortingAttributes,
  filterAttributes?: FilterAttributes
}`,signature:{properties:[{key:"key",value:{name:"ReactKey",raw:"React.Key",required:!0}},{key:"title",value:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}],required:!1}},{key:"hasEmptyCellDash",value:{name:"boolean",required:!1}},{key:"dataIndex",value:{name:"string",required:!1}},{key:"columnId",value:{name:"string",required:!1}},{key:"expandableText",value:{name:"boolean",required:!1}},{key:"isSortable",value:{name:"boolean",required:!1}},{key:"allowMultipleFilters",value:{name:"boolean",required:!1}},{key:"sorter",value:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}},required:!1}},{key:"customSorter",value:{name:"signature",type:"function",raw:"<T extends TableRecord>(rows: T[], propName: keyof T, isAsc: boolean, attribute: string) => T[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"rows"},{type:{name:"T"},name:"propName"},{type:{name:"boolean"},name:"isAsc"},{type:{name:"string"},name:"attribute"}],return:{name:"Array",elements:[{name:"T"}],raw:"T[]"}},required:!1},description:"@deprecated Use **sorter** for custom column sorting"},{key:"filteringAvailable",value:{name:"boolean",required:!1}},{key:"groupingAvailable",value:{name:"boolean",required:!1}},{key:"hideColumnAvailable",value:{name:"boolean",required:!1}},{key:"show",value:{name:"boolean",required:!1}},{key:"closeDropdownOnSelect",value:{name:"boolean",required:!1}},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  localizationKey?: string,
  name: string,
  elementBefore?: ReactNode,
  filter: FilterFunction
}`,signature:{properties:[{key:"localizationKey",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"elementBefore",value:{name:"ReactNode",required:!1}},{key:"filter",value:{name:"signature",type:"function",raw:"(record: TableRecord) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"record"}],return:{name:"boolean"}},required:!0}}]}}],raw:"ColumnFilter[]",required:!1}},{key:"filterType",value:{name:"union",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
} & SharedFilterType<FilterType.DateTime>
| EnumFilterType
| { type: FilterType.Text } & SharedFilterType<FilterType.Text>
| { type: FilterType.Number } & SharedFilterType<FilterType.Number>
| { type: FilterType.Boolean } & SharedFilterType<FilterType.Boolean>
| { type: FilterType.DateRange } & SharedFilterType<FilterType.DateRange>
| { type: FilterType.DaysBefore } & SharedFilterType<FilterType.DaysBefore>
| { type: FilterType.Radio } & SharedFilterType<FilterType.Radio>
| { type: FilterType.IP } & SharedFilterType<FilterType.IP>`,elements:[{name:"intersection",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
} & SharedFilterType<FilterType.DateTime>`,elements:[{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"dateOnly",value:{name:"boolean",required:!1},description:"Show only dates without time"}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:`{
  type: FilterType.Enum,
  /**
   * @deprecated Use **getAvailableOptions** instead
   */
  getAvailableValues?: () => Promise<LegacyEnumOption[]>,
  /**
   * @returns Array of options
   *
   * @example
   * \`\`\`ts
   * getAvailableOptions: () => Promise.resolve([
   *  { label: "option1", value: "Option 1" },
   *  { label: <span>Option 2</span>, value: "Option 2" },
   * ])
   * \`\`\`
   */
  getAvailableOptions?: () => Promise<EnumOption[]>
} & SharedFilterType<FilterType.Enum>`,elements:[{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  /**
   * @deprecated Use **getAvailableOptions** instead
   */
  getAvailableValues?: () => Promise<LegacyEnumOption[]>,
  /**
   * @returns Array of options
   *
   * @example
   * \`\`\`ts
   * getAvailableOptions: () => Promise.resolve([
   *  { label: "option1", value: "Option 1" },
   *  { label: <span>Option 2</span>, value: "Option 2" },
   * ])
   * \`\`\`
   */
  getAvailableOptions?: () => Promise<EnumOption[]>
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"getAvailableValues",value:{name:"signature",type:"function",raw:"() => Promise<LegacyEnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"LegacyEnumOption[]"}],raw:"Promise<LegacyEnumOption[]>"}},required:!1},description:"@deprecated Use **getAvailableOptions** instead"},{key:"getAvailableOptions",value:{name:"signature",type:"function",raw:"() => Promise<EnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string | number | boolean,
  label?: ReactNode
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!0}},{key:"label",value:{name:"ReactNode",required:!1}}]}}],raw:"EnumOption[]"}],raw:"Promise<EnumOption[]>"}},required:!1},description:`@returns Array of options

@example
\`\`\`ts
getAvailableOptions: () => Promise.resolve([
 { label: "option1", value: "Option 1" },
 { label: <span>Option 2</span>, value: "Option 2" },
])
\`\`\``}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Text } & SharedFilterType<FilterType.Text>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Text }",signature:{properties:[{key:"type",value:{name:"FilterType.Text",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Number } & SharedFilterType<FilterType.Number>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Number }",signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Boolean } & SharedFilterType<FilterType.Boolean>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Boolean }",signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.DateRange } & SharedFilterType<FilterType.DateRange>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.DateRange }",signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.DaysBefore } & SharedFilterType<FilterType.DaysBefore>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.DaysBefore }",signature:{properties:[{key:"type",value:{name:"FilterType.DaysBefore",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Radio } & SharedFilterType<FilterType.Radio>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Radio }",signature:{properties:[{key:"type",value:{name:"FilterType.Radio",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.IP } & SharedFilterType<FilterType.IP>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.IP }",signature:{properties:[{key:"type",value:{name:"FilterType.IP",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]}],required:!1}},{key:"showFilterIcon",value:{name:"boolean",required:!1},description:`It's used for manually setting the display of filtering icon in column title. 
By default, filter icon is displayed when at least one filter is applied to the column,
but this option overrides default behaivour`},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"isUserDefinedWidth",value:{name:"boolean",required:!1}},{key:"renderGroupTitle",value:{name:"signature",type:"function",raw:"(data: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"data"}],return:{name:"ReactNode"}},required:!1}},{key:"resizing",value:{name:"signature",type:"object",raw:`{
  disabled: boolean
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!0}}]},required:!1}},{key:"sortingAttributes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"attribute",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}[]`,required:!1}},{key:"filterAttributes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string,
  name: string,
  filter: {
    type: FilterType,
    getAvailableOptions?: (() => Promise<EnumOption[]>)
  }
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"filter",value:{name:"signature",type:"object",raw:`{
  type: FilterType,
  getAvailableOptions?: (() => Promise<EnumOption[]>)
}`,signature:{properties:[{key:"type",value:{name:"FilterType",required:!0}},{key:"getAvailableOptions",value:{name:"unknown",required:!1}}]},required:!0}}]}}],raw:`{
  label: string,
  name: string,
  filter: {
    type: FilterType,
    getAvailableOptions?: (() => Promise<EnumOption[]>)
  }
}[]`,required:!1}}]}}]}],raw:"TableColumn[]"},description:""}}};const Wg=e=>function({useFiltersSidebar:t,...r}){const{filterApi:a}=fe();return!t||!a?m.createElement(e,{...r}):m.createElement(Hg,{...r,Component:e,filterApi:a})};function Hg({Component:e,onCloseFilterSidebar:n,showFilterSidebar:t,onSidebarFiltersChange:r,isServerFiltering:a,filterApi:i,...l}){const{columns:o}=l,f=v.useMemo(()=>(o||[]).filter(O=>O.show&&O.filteringAvailable!==!1||O.filteringAvailable),[o]),[u,d]=v.useState(kt(i.getRootGroupFilters()).filter(Ot)),[s,p]=v.useState([]),[c,y]=v.useState(kt(i.getRootGroupFilters()).filter(Ot));v.useEffect(()=>(r==null||r(Jr(u).filter(se)),i.subscribe(()=>{const O=kt(i.getRootGroupFilters()).filter(Ot);d(O),y(O)})),[i]);const b=()=>{const O=Sg(u),k=mf(O);if(p(k),k.length>0)return;y(O);const T=Jr(O).filter(se);r==null||r(T),i.setExternalSidebarFilters(T),n==null||n()},h=v.useCallback(O=>{d(k=>k.filter(T=>T.id!==O.id))},[]),g=v.useCallback((O,k)=>{const T=u.map(q=>q.id===k?O:q);p(q=>q&&q.filter(D=>D.id!==k)),d(T)},[u,s]),w=v.useCallback(async(O,k,T)=>{const q=f.find(D=>D.dataIndex===O);if(q){const D=await cs(q,T);g(D,k)}},[f,g]),F=()=>{d(c),n==null||n()};return m.createElement(m.Fragment,null,m.createElement(vo,{size:"small",onClose:F,visible:t,title:tn("common.filters"),subHeader:m.createElement(Nt,{gap:"section"},m.createElement(bs,{columns:f,filters:u,onChange:d}),m.createElement(Au,null)),footer:m.createElement("div",{className:cn.filtersFooter},m.createElement(rn,{onClick:b,testId:"table-filters-apply-button",klId:"filters-button_apply"},m.createElement(le,{localizationKey:"table.columnsSettings.apply"})),m.createElement(rn,{onClick:F,mode:"secondary",testId:"table-filters-cancel-button",klId:"filters-button_cancel"},m.createElement(le,{localizationKey:"table.columnsSettings.cancel"})))},m.createElement("div",{className:cn.filtersList},u.map((O,k)=>{var T;return m.createElement(gs,{key:`filter-item-${k}`,index:k,columnsToShow:f,filter:O,handleRemove:h,handlePropertyChange:w,handleFilterChange:g,validationMessage:(T=s.find(q=>q.id===O.id))==null?void 0:T.validationMessage})}))),m.createElement(e,{...l}))}const Yg=({columns:e})=>{const n=r=>r.reduce((a,{dataIndex:i,customSorter:l})=>(l&&a.set(i,l),a),new Map),t=v.useRef(n(e||[]));return v.useEffect(()=>{t.current=n(e||[])},[e]),{columnsSortersConfig:t.current}},Xt=be`
  min-height: 20px;
  min-width: 16px;
`,Q="table-header-dropdown",zg=L(Tu)`${Xt}`,Gg=L(Mt)`${Xt}`,Yi=L(qu)`${Xt}`,zi=L(ku)`${Xt}`,Kg=L.div.withConfig({shouldForwardProp:go})`
  color: ${ae("root.color")};
  cursor: pointer;
  padding: 10px 0;
  max-width: 100%;
  
  &:hover {
    background: ${ae("headCell.hover.background")};
  }
  
  &:active {
    background: ${ae("headCell.active.background")};
  }

  ${e=>e.isPressed&&`
    background: ${ae("headCell.active.background")(e)};
  `}
`,Zg=L(ge.Menu)`
  &&& {
    padding-bottom: 0;

    .hexa-ui-dropdown-item-divider-wrapper {
      background: var(--dropdown_item--bg--enabled);
      position: sticky;
      bottom: 40px;
      margin-top: 4px;

      .hexa-ui-dropdown-item-divider {
        margin-bottom: 0;
      }
    }

    .hexa-ui-dropdown-item-action {
      position: sticky;
      bottom: 0;
      padding: 10px 12px;
    }
  }
`,Mr=L.div`
  display: flex;
  align-items: start;
  gap: 4px;
  cursor: pointer;
`,Jg=L.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`,Xg=L.span`
  display: flex;
  align-items: center;
  min-height: 20px;
`,hs=({testId:e,klId:n,dataIndex:t,title:r,columnId:a,isSortable:i,sortingAttributes:l,sorter:o,availableFilters:f,filterApi:u,onDropdownFiltersChange:d,activeSorting:s,setActiveSorting:p,closeDropdownOnSelect:c=!0,showFilterIcon:y,allowMultipleFilters:b})=>{const{cssConfig:h}=fe(),g=`column.${t}`,[w,F]=v.useState(!1),[O,k]=v.useState(u==null?void 0:u.getGroupItems(g)),T={"kl6-table-dropdown":!0};let q=null;f&&u&&(q=f.map((R,C)=>{const U={...af(R,t),isUserDefined:!0},j=O&&O.filter(M=>In(M,U)).length,B=()=>{b?j?u.removeFilter(U,g):u.addFilter(U,g):j?u.resetFilters(g):u.setExternalFilters([U],g),d==null||d(u.getGroupItems(g).filter(M=>an(M)).map(M=>f.find(Z=>Z.name===M.filterName))),k(u.getGroupItems(g))};return b?m.createElement(ge.InnerActions,{"data-testid":e?`${e}-${Q}-${C}-filters`:`${Q}-${C}-filters`,"kl-id":n?`${n}-${Q}-${C}-filters`:`${Q}-${C}-filters`,key:`${R.name}-${C}`},m.createElement(Mr,{onClick:B},m.createElement(Nn,{checked:!!j}),R.elementBefore&&m.createElement(Xg,null,R.elementBefore),m.createElement("span",null,R.localizationKey?m.createElement(le,{localizationKey:R.localizationKey}):R.name))):m.createElement(ge.MenuItem,{"data-testid":e?`${e}-${Q}-filters`:`${Q}-${C}-filters`,"kl-id":n?`${n}-${Q}-filters`:`${Q}-${C}-filters`,className:j?"ant-dropdown-menu-item-selected":"",onClick:B,key:`${R.name}-${C}`},R.name)}));let D=null,_=null;const S=y??(u==null?void 0:u.getGroupItems(g).length)?m.createElement(Gg,null):void 0;if((o||i||l)&&p){const R=[{key:"asc",name:m.createElement(le,{localizationKey:"table.columnDropdown.ascending"}),icon:m.createElement(zi,null)},{key:"desc",name:m.createElement(le,{localizationKey:"table.columnDropdown.descending"}),icon:m.createElement(Yi,null)}];D=l?l.map(({label:C,attribute:U,field:j})=>{const B=U||j;return m.createElement(ge.SubMenu,{"data-testid":e?`${e}-${Q}-${B}`:`${Q}-${B}`,"kl-id":n?`${n}-${Q}-${B}`:`${Q}-${B}`,key:B,title:C},R.map(M=>{const Z=s&&s.field===t&&s.direction===M.key;return m.createElement(ge.MenuItem,{"data-testid":e?`${e}-${Q}-${M.key}`:`${Q}-${M.key}`,"kl-id":n?`${n}-${Q}-${M.key}`:`${Q}-${M.key}`,className:Z?"ant-dropdown-menu-item-selected":"",key:`${B}-${M.key}`,onClick:()=>{p({field:j,attribute:U,direction:M.key,columnId:a,isDefaultSortDisabled:s.isDefaultSortDisabled})}},m.createElement(Mr,null,M.icon," ",M.name))}))}):R.map(C=>{const U=s&&s.field===t&&s.direction===C.key;return m.createElement(ge.MenuItem,{"data-testid":e?`${e}-${Q}-${C.key}`:`${Q}-${C.key}`,"kl-id":n?`${n}-${Q}-${C.key}`:`${Q}-${C.key}`,className:U?"ant-dropdown-menu-item-selected":"",key:C.key,onClick:()=>{p({field:t,direction:C.key,columnId:a,isDefaultSortDisabled:s.isDefaultSortDisabled})}},m.createElement(Mr,null,C.icon," ",C.name))}),s&&s.field===t&&(_=s.direction==="asc"?m.createElement(zi,null):m.createElement(Yi,null))}return h?m.createElement(ge,{popupMaxHeight:370,trigger:["click"],onVisibleChange:R=>F(R),visible:w,selectedItemsKeys:[],overlay:m.createElement(Zg,{"data-testid":e?`${e}-${Q}`:Q,"kl-id":n?`${n}-${Q}`:Q,multiple:!1,onClick:c?()=>F(!1):void 0},D&&[m.createElement(ge.GroupTitle,{key:"sorting"},m.createElement(le,{localizationKey:"table.columnDropdown.sorting"}))],D,D&&q&&[m.createElement(ge.MenuDivider,{key:"filterDivider"})],q&&[m.createElement(ge.GroupTitle,{key:"filters"},m.createElement(le,{localizationKey:"table.columnDropdown.filters"}))],q,q&&[m.createElement("div",{key:"resetFiltersDivider",className:"hexa-ui-dropdown-item-divider-wrapper"},m.createElement(ge.MenuDivider,{className:"hexa-ui-dropdown-item-divider"})),m.createElement(ge.MenuItem,{"data-testid":e?`${e}-${Q}-filters-reset-button`:`${Q}-filters-reset-button`,"kl-id":n?`${n}-${Q}-filters-reset-button`:`${Q}-filters-reset-button`,className:je(cu.dropdownItemAction,"hexa-ui-dropdown-item-action"),key:"resetFiltersButton",onClick:u?()=>{u.setExternalFilters([],g),k(u.getGroupItems(g))}:void 0},m.createElement(le,{localizationKey:"table.columnDropdown.resetFilters"}))])},m.createElement(Kg,{className:je(T),cssConfig:h,isPressed:w},m.createElement(Jg,null,r," ",!_&&!S&&m.createElement(zg,null)," ",_," ",S))):m.createElement(m.Fragment,null)};hs.__docgenInfo={description:"",methods:[],displayName:"DropdownColumnTitle",props:{testId:{required:!1,tsType:{name:"string"},description:""},klId:{required:!1,tsType:{name:"string"},description:""},dataIndex:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},columnId:{required:!1,tsType:{name:"string"},description:""},isSortable:{required:!1,tsType:{name:"boolean"},description:""},sortingAttributes:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"attribute",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}[]`},description:""},sorter:{required:!1,tsType:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}}},description:""},availableFilters:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  localizationKey?: string,
  name: string,
  elementBefore?: ReactNode,
  filter: FilterFunction
}`,signature:{properties:[{key:"localizationKey",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"elementBefore",value:{name:"ReactNode",required:!1}},{key:"filter",value:{name:"signature",type:"function",raw:"(record: TableRecord) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"record"}],return:{name:"boolean"}},required:!0}}]}}],raw:"ColumnFilter[]"},description:""},allowMultipleFilters:{required:!0,tsType:{name:"boolean"},description:""},closeDropdownOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},filterApi:{required:!1,tsType:{name:"union",raw:"FilterApi | null",elements:[{name:"FilterApi"},{name:"null"}]},description:""},onDropdownFiltersChange:{required:!0,tsType:{name:"intersection['onDropdownFiltersChange']",raw:"ITableProps['onDropdownFiltersChange']"},description:""},activeSorting:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  field?: string,
  attribute?: string,
  direction?: SortType,
  columnId?: string,
  columnServerField?: string,
  isDefaultSortDisabled?: boolean,
  customSorter?: CustomSorter
}`,signature:{properties:[{key:"field",value:{name:"string",required:!1}},{key:"attribute",value:{name:"string",required:!1}},{key:"direction",value:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}],required:!1}},{key:"columnId",value:{name:"string",required:!1}},{key:"columnServerField",value:{name:"string",required:!1}},{key:"isDefaultSortDisabled",value:{name:"boolean",required:!1}},{key:"customSorter",value:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}},required:!1}}]}},description:""},setActiveSorting:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: ActiveSorting) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  field?: string,
  attribute?: string,
  direction?: SortType,
  columnId?: string,
  columnServerField?: string,
  isDefaultSortDisabled?: boolean,
  customSorter?: CustomSorter
}`,signature:{properties:[{key:"field",value:{name:"string",required:!1}},{key:"attribute",value:{name:"string",required:!1}},{key:"direction",value:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}],required:!1}},{key:"columnId",value:{name:"string",required:!1}},{key:"columnServerField",value:{name:"string",required:!1}},{key:"isDefaultSortDisabled",value:{name:"boolean",required:!1}},{key:"customSorter",value:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}},required:!1}}]}},name:"val"}],return:{name:"void"}}},description:""}},composes:["Pick"]};const Qg=(e,n,t,r)=>[...e.sort((a,i)=>{let l=p=>typeof p=="string"?p.toUpperCase():p;const o=r?`${n}.${r}`:n,f=$e(a,o),u=$e(i,o);(f==null?void 0:f.type)==="datetime"&&(u==null?void 0:u.type)==="datetime"&&(l=p=>new Date(p.value).getTime());const d=l(f),s=l(u);return d===s?0:d>s&&t||d<s&&!t?1:-1})],eb=(e,n,t)=>[...e.sort((r,a)=>n(r,a,t))],nb=e=>e.some(({filters:n,isSortable:t})=>n||t),tb=Object.freeze({}),rb=e=>function({columns:t,dataSource:r,onSortChange:a,onDropdownFiltersChange:i,isDefaultSortDisabled:l,externalSorting:o,setExternalSorting:f,storageKey:u,...d}){if(!t||!Array.isArray(r))return m.createElement(e,{...d,storageKey:u});if(!nb(t))return m.createElement(e,{...d,columns:t,dataSource:r,storageKey:u});const{filterApi:s,pagination:p,updateContext:c}=fe(),y=d.initialSorting||tb,[b,h]=v.useState(y),[g,w]=v.useState(b||y),{columnsSortersConfig:F}=Yg({columns:t});v.useEffect(()=>{w(b||y)},[d.initialSorting,b]),v.useEffect(()=>{c({sorting:g})},[g]),v.useEffect(()=>{if(!d.initialSorting&&!o&&u){const q=Zt({storageKey:u,featureKey:"sorting"});q&&h(q)}},[d.initialSorting,o]);const O=v.useMemo(()=>t.map((q,D)=>!(q.isSortable||q.filters||q.sorter)||ve(q)?q:{...q,sorter:void 0,filters:void 0,key:q.dataIndex||D,title:m.createElement(hs,{testId:d==null?void 0:d.testId,klId:d==null?void 0:d.klId,allowMultipleFilters:!!q.allowMultipleFilters,closeDropdownOnSelect:q.closeDropdownOnSelect,title:q.title,columnId:q.columnId,dataIndex:q.dataIndex,availableFilters:q.filters,isSortable:q.isSortable,sortingAttributes:q.sortingAttributes,sorter:q.sorter,filterApi:s,onDropdownFiltersChange:i,activeSorting:b,setActiveSorting:f||h,showFilterIcon:q.showFilterIcon})}),[t,b]),k=v.useMemo(()=>{const q="field"in g&&!l&&!p.useDataSourceFunction;let D=r;if(q){const _=g.columnId||g.field,S=g.attribute,R=C=>{var Z;if(!_)return C;let U=g.customSorter;U||(U=(Z=t.find(me=>me.dataIndex===_))==null?void 0:Z.sorter);const j=g.direction==="asc",B=F.get(_)||Qg,M=U?eb(C,U,j):B(C,_,j,S);return M.forEach(me=>{me._hasChildren&&(me.children=R(me.children))}),M};D=R(D)}return D},[r,g,t,F,l]),T=v.useRef(g);return v.useEffect(()=>{a&&b!==T.current&&(T.current=g,a(g)),u&&Jt({storageKey:u,featureKey:"sorting",updatedValue:{field:g.field,direction:g.direction,columnId:g.columnId,columnServerField:g.columnServerField,isDefaultSortDisabled:g.isDefaultSortDisabled}})},[b,g,a,u,l]),v.useEffect(()=>{o&&h(o)},[o]),m.createElement(e,{...d,dataSource:k,columns:O,storageKey:u})};var Pr,Gi;function ab(){if(Gi)return Pr;Gi=1;var e=nu(),n=ua(),t="[object Number]";function r(a){return typeof a=="number"||n(a)&&e(a)==t}return Pr=r,Pr}var ib=ab();const ob=jn(ib),vs=L(rn)``,Fs=L(ca)``,lb=L(Ru)`
  position: absolute;
  top: -2px;
  right: -2px;
`,sb=L.span`
  && {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,ub=be`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  z-index: 1;
  padding: 4px;
  gap: ${e=>e.$autoDropdown?24:64}px;
  background: var(--toolbar--bg);
  border-radius: 8px;
  width: 100%;
  min-width: ${e=>e.$autoDropdown?0:"max-content"};

  .toolbar-divider {
    vertical-align: middle;
    background: var(--divider--bg--bold);
    border: 0;
    display: inline-block;
    height: 24px;
    width: 1px;
    margin: 0 4px;
  }

  .kl-components-button-text {
    display: flex;
  }

  .ant-btn > span[role=img] + span,
  .ant-btn > span + span[role=img] {
    margin-left: 0px;
  }

  &.sticky {
    position: sticky;
    top: ${e=>e.$sticky?e.$sticky:0}px;
    z-index: 2;
  }

  &&& ${Fs}, &&& .ant-input-affix-wrapper {
    width: 300px;
    color: var(--toolbar_search--text--placeholder_enabled);
    background-color: var(--toolbar_search--bg--enabled);
    border-color: transparent;
  }

  &&& ${vs}, .ant-btn {
    border-radius: 8px;
    &, &:focus {
      &:hover {
        background-color: var(--toolbar_button--bg--hover);
      }
      &:active,
      &.${Fu.buttonPressed} {
        background-color: var(--toolbar_button--bg--active);
      }
    }
    
    &[disabled] {
      &, &:hover, &:active, &:focus {
        background: none;
      }
    }
  }
`,Ki=L(Nt)`
  position: ${({$autoDropdown:e})=>e?"relative":"absolute"};
  ${({$side:e,$autoDropdown:n})=>n?"":`${e}: 4px;`}
  ${({$side:e,$autoDropdown:n})=>e==="left"&&n&&"min-width: 0;"}
  ${({$side:e,$autoDropdown:n})=>n&&`
  flex-grow: ${e==="left"?1:"initial"};
  flex-shrink: ${e==="right"?0:"initial"};
  `}

  ${({$oneElement:e,$oneElementSelector:n})=>e&&`
    &, ${n} {
      width: 100%;
    }
    & > * {
      justify-content: end;
    }
    position: unset;
    right: unset;
    left: unset;
  `}
`,Zi=L.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  transition: opacity .2s;
  ${({$isHidden:e})=>e&&"opacity: 0; pointer-events: none;"}
`,mb=L.div`
  visibility: ${({$isHidden:e})=>e?"hidden":"visible"};
  flex-shrink: 0;
  position: absolute;
  right: 0;
`,pb=L.div`
  position: relative;
  padding: 6px 12px;
  background-color: var(--toolbar_search--bg--enabled);
  color: var(--toolbar_search--text--placeholder_enabled);
  border-radius: 8px;
  cursor: pointer;
  height: 32px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: var(--toolbar_search--bg--hover);
  }
  &:focus-visible {
    box-shadow: 0px 0px 0px 2px var(--focus--stroke);
    outline: none;
  }

  ${e=>e.$visible&&be`
    background-color: transparent;
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
    * {
      z-index: 1;
    }
    &:focus-visible {
      box-shadow: none;
    }
  `}
`,db=L(Pt)`
  ${Cu}

  &&&&.ant-input {
    background-color: var(--toolbar_search--bg--enabled);
    border-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    padding-right: 32px;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: 300px center;
    transition: all 0.3s, transform 150ms ease;
    
    ${e=>e.$visible&&be`
      transform: scaleX(1);
      opacity: 1;
     
      &:hover:not(:focus-within) {
        border-color: var(--toolbar_search--border--hover);
      }
    `}
  }
`,cb=L.div``,ws=e=>{const{value:n,placeholder:t="search.dotted",dropdownOverlay:r,children:a,onClearClick:i,prefix:l,suffix:o,onPressEnter:f,onChange:u,searchIconTestId:d="toolbar-search-icon",...s}=ma(e),[p,c]=v.useState(!1),[y,b]=v.useState(!1),[h,g]=v.useState(!1),{useV3TestId:w}=fe(),F=k=>{k.stopPropagation(),h?(g(!1),f==null||f(k)):c(!p)},O=tn(t);return m.createElement(pb,{...s.testAttributes,$visible:p,tabIndex:0},m.createElement(db,{...s,testId:"toolbar-search-input",$visible:p,placeholder:O,value:n,prefix:l,allowClear:!1,suffix:null,onChange:k=>{b(!!(k!=null&&k.length)),g(!0),u==null||u(k)},onPressEnter:k=>{g(!1),f==null||f(k)},autoFocus:p}),w?m.createElement("div",{"data-testid":d,"kl-id":d},m.createElement(Za,{className:"icon",indicator:y,onClick:F})):m.createElement(Za,{className:"icon",indicator:y,onClick:F,testId:"toolbar-search-icon",klId:"toolbar-search-icon"}))};ws.__docgenInfo={description:"",methods:[],displayName:"ToolbarSearch"};const Ve={BUTTON:"button",LINK:"link",ICON:"icon",DROPDOWN:"dropdown",DIVIDER:"divider",CHILDREN:"children"},yb=L.div.withConfig({shouldForwardProp:go})`
  ${ub}
`,qe=({label:e,children:n,tooltip:t,showIndicator:r,iconBefore:a,...i})=>m.createElement(ia,{text:t,defaultAlign:!0},m.createElement("span",null,m.createElement(vs,{mode:"tertiary",iconBefore:a&&m.createElement(sb,null,a,r&&m.createElement(lb,{mode:"critical"})),...i},e||n))),Os=()=>m.createElement("hr",{className:"toolbar-divider"}),fb={[Ve.BUTTON]:e=>{const{type:n,visible:t,...r}=e;return m.createElement(qe,{...r})},[Ve.LINK]:e=>{const{type:n,label:t,...r}=e;return m.createElement(la,{size:"medium",...r},t)},[Ve.ICON]:e=>{const{label:n,type:t,icon:r,onClick:a,...i}=e;return m.createElement(Nt,{align:"center",gap:4,width:"max-content",onClick:a,style:{cursor:"pointer"}},r&&m.createElement(pa,{name:r,size:"medium",...i}),m.createElement(on,{type:"BTM3"},n))},[Ve.DROPDOWN]:e=>{const{type:n,overlay:t,...r}=e,[a,i]=v.useState(!1);return m.createElement(ge,{trigger:["click"],overlay:t,onVisibleChange:l=>i(l),onOverlayClick:()=>i(!1),...r},m.createElement(qe,{iconAfter:m.createElement(ro,null),isPressed:a,...r}))},[Ve.DIVIDER]:()=>m.createElement(Os,null),[Ve.CHILDREN]:e=>{const{children:n}=e;return n}},Ji=(e,n=!1,t=!1,r=0)=>e.filter(({visible:i})=>i!==!1).map((i,l)=>{const{type:o,children:f}=i,u=t&&l>r;if(o){const d=fb[o];return n?m.createElement(Zi,{"data-toolbarkey":i.key,$isHidden:u},m.createElement(d,{...i})):m.createElement(d,{...i})}return n?m.createElement(Zi,{"data-toolbarkey":i.key,$isHidden:u},f):f}),Xi=e=>{const t=e.filter(({visible:r})=>r!==!1).map(r=>{const{children:a,key:i,testId:l,type:o}=r;if(o)switch(o){case Ve.BUTTON:{const{label:f,iconBefore:u,iconAfter:d,onClick:s,disabled:p,tooltip:c}=r;return{key:i,children:f,...u&&{componentsBefore:[u]},...d&&{componentsAfter:[d]},disabled:!!p,onClick:({domEvent:y})=>{s==null||s(y)},testId:l,tooltip:c}}case Ve.DROPDOWN:{const{label:f,overlay:u,iconBefore:d,disabled:s,tooltip:p}=r;return{key:i,type:"submenu",title:f,...d&&{componentsBefore:[d]},disabled:!!s,children:u,testId:l,tooltip:p}}case Ve.DIVIDER:return{key:i,type:"divider",children:null};default:return{key:i,children:a,testId:l}}return{key:i,children:a,testId:l}});return t&&t[0]&&t[0].type==="divider"&&t.splice(0,1),t},gb=36,K=e=>{const{autoDropdown:n=!1,left:t=[],leftLimit:r=4,right:a,styleLeft:i,styleRight:l,sticky:o,testAttributes:f,...u}=ma(e),d=t.filter(F=>F.visible!==!1),[s,p]=v.useState(!1),[c,y]=hu(),b=vu(c,gb),h=ob(b),g=h&&b<d.length-1,w=h?d.slice(b+1,d.length):[];return m.createElement(m.Fragment,null,m.createElement(yb,{...f,...u,className:je(tu(e),Number(o)>-1e3?"sticky":"toolbar-wrapper"),$sticky:o,$autoDropdown:n},d.length>0&&m.createElement(Ki,{gap:4,align:"center",direction:"horizontal",width:"initial",wrap:"nowrap",$side:"left",style:i,$oneElement:!1,$autoDropdown:n,ref:y},Ji(n?d:d.slice(0,r),n,h,b),d.length>r&&!n&&m.createElement(ge,{trigger:["click"],testId:"toolbar-rest-items",klId:"toolbar-dropdown",overlay:Xi(d.slice(r,d.length)),selectedItemsKeys:[]},m.createElement(qe,{mode:"tertiary",testId:"toolbar-show-rest-items",klId:"toolbar-dropdown-button",iconBefore:m.createElement(Ka,null)})),n?m.createElement(mb,{$isHidden:!g},m.createElement(ge,{trigger:["click"],testId:"toolbar-rest-items",klId:"toolbar-dropdown",overlay:Xi(w),onVisibleChange:F=>p(F),onOverlayClick:()=>p(!1),selectedItemsKeys:[]},m.createElement(qe,{mode:"tertiary",testId:"toolbar-show-rest-items",klId:"toolbar-dropdown-button",iconBefore:m.createElement(Ka,null),isPressed:s}))):null),a&&m.createElement(Ki,{gap:8,align:"center",direction:"horizontal",width:"initial",wrap:"nowrap",$side:"right",style:l,$oneElement:!t&&a.length===1,$oneElementSelector:"span.ant-input-affix-wrapper",$autoDropdown:n},Ji(a))))};K.Button=e=>m.createElement(qe,{mode:"tertiary",...e});K.Search=e=>m.createElement(Fs,{...e});K.CollapsibleSearch=e=>m.createElement(ws,{...e});K.FilterItem=e=>m.createElement(qe,{mode:"tertiary",iconBefore:m.createElement(Mt,null),...e});K.ImportItem=e=>m.createElement(qe,{mode:"tertiary",iconBefore:m.createElement(bo,null),...e});K.ExportItem=e=>m.createElement(qe,{mode:"tertiary",iconBefore:m.createElement(ho,null),...e});K.ImportExportItem=({dropdown:e,...n})=>{if(e&&("onExport"in n||"onImport"in n)){const{onImport:t,onExport:r,...a}=n,i=[],[l,o]=v.useState(!1);return t&&i.push({componentsBefore:[m.createElement(bo,{key:"import-action-key"})],children:tn("common.import"),onClick:t}),r&&i.push({componentsBefore:[m.createElement(ho,{key:"export-action-key"})],children:tn("common.export"),onClick:r}),m.createElement(ge,{trigger:["click"],testId:"toolbar-dropdown-import-export",klId:"toolbar-dropdown-import-export",overlay:i,onVisibleChange:f=>o(f),onOverlayClick:()=>o(!1)},m.createElement(cb,null,m.createElement(rn,{mode:"tertiary",isPressed:l,iconBefore:m.createElement(Ga,null),...a})))}else return m.createElement(qe,{mode:"tertiary",iconBefore:m.createElement(Ga,null),...n})};K.FilterActiveItem=e=>m.createElement(qe,{mode:"tertiary",iconBefore:m.createElement(xu,null),...e});K.SettingsItem=e=>m.createElement(qe,{mode:"tertiary",iconBefore:m.createElement(Du,null),...e});K.FilterSidebar=e=>m.createElement(qe,{mode:"tertiary",iconBefore:m.createElement(Mt,null),...e});K.ScaleItem=e=>m.createElement(qe,{mode:"tertiary",iconBefore:m.createElement(Eu,null),...e});K.Divider=Os;K.displayName="Toolbar";K.Button.displayName="Toolbar.Button";K.ExportItem.displayName="Toolbar.ExportItem";K.Search.displayName="Toolbar.Search";K.CollapsibleSearch.displayName="Toolbar.CollapsibleSearch";K.FilterItem.displayName="Toolbar.FilterItem";K.FilterActiveItem.displayName="Toolbar.FilterActiveItem";K.ImportItem.displayName="Toolbar.ImportItem";K.ImportExportItem.displayName="Toolbar.ImportExportItem";K.SettingsItem.displayName="Toolbar.SettingsItem";K.FilterSidebar.displayName="Toolbar.FilterSidebar";K.ScaleItem.displayName="Toolbar.ScaleItem";K.Divider.displayName="Toolbar.Divider";K.__docgenInfo={description:"",methods:[{name:"Button",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null},{name:"Search",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null},{name:"CollapsibleSearch",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null},{name:"FilterItem",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null},{name:"ImportItem",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null},{name:"ExportItem",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null},{name:"ImportExportItem",docblock:null,modifiers:["static"],params:[{name:"{ dropdown, ...rest }",optional:!1,type:null}],returns:null},{name:"FilterActiveItem",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null},{name:"SettingsItem",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null},{name:"FilterSidebar",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null},{name:"ScaleItem",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null},{name:"Divider",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Toolbar",props:{left:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  key: string,
  children?: ReactNode,
  type: T,
  testId?: string,
  visible?: boolean
} & (
  | ToolbarButtonProps
  | ToolbarDropdownProps
  | ToolbarIconProps
  | ToolbarLinkProps
  | ToolbarDividerProps
  | ToolbarChildrenProps
)`,elements:[{name:"signature",type:"object",raw:`{
  key: string,
  children?: ReactNode,
  type: T,
  testId?: string,
  visible?: boolean
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"type",value:{name:"T",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"visible",value:{name:"boolean",required:!1}}]}},{name:"unknown"}]}],raw:"ToolbarItems[]"},description:"Items in left part"},styleLeft:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style properties for items in left part"},right:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  key: string,
  children?: ReactNode,
  type: T,
  testId?: string,
  visible?: boolean
} & (
  | ToolbarButtonProps
  | ToolbarDropdownProps
  | ToolbarIconProps
  | ToolbarLinkProps
  | ToolbarDividerProps
  | ToolbarChildrenProps
)`,elements:[{name:"signature",type:"object",raw:`{
  key: string,
  children?: ReactNode,
  type: T,
  testId?: string,
  visible?: boolean
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"type",value:{name:"T",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"visible",value:{name:"boolean",required:!1}}]}},{name:"unknown"}]}],raw:"ToolbarItems[]"},description:"Items in right part"},styleRight:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style properties for items in right part"},leftLimit:{required:!1,tsType:{name:"number"},description:"Limit of left part items"},sticky:{required:!1,tsType:{name:"number"},description:"Sticky position"},autoDropdown:{required:!1,tsType:{name:"boolean"},description:"Automatic dropdown enabled"},children:{required:!1,tsType:{name:"ReactNode"},description:"React children"},theme:{required:!1,tsType:{name:"ThemeKey"},description:"Custom theme"}}};var qt={exports:{}};/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/var bb=qt.exports,Qi;function hb(){return Qi||(Qi=1,function(e,n){(function(t,r){e.exports=r()})(bb,function(){var t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},r=function(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")},a=function(){function u(d,s){for(var p=0;p<s.length;p++){var c=s[p];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(d,c.key,c)}}return function(d,s,p){return s&&u(d.prototype,s),p&&u(d,p),d}}(),i=Object.assign||function(u){for(var d=1;d<arguments.length;d++){var s=arguments[d];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(u[p]=s[p])}return u},l=function(){function u(d){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:5e3;r(this,u),this.ctx=d,this.iframes=s,this.exclude=p,this.iframesTimeout=c}return a(u,[{key:"getContexts",value:function(){var s=void 0,p=[];return typeof this.ctx>"u"||!this.ctx?s=[]:NodeList.prototype.isPrototypeOf(this.ctx)?s=Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?s=this.ctx:typeof this.ctx=="string"?s=Array.prototype.slice.call(document.querySelectorAll(this.ctx)):s=[this.ctx],s.forEach(function(c){var y=p.filter(function(b){return b.contains(c)}).length>0;p.indexOf(c)===-1&&!y&&p.push(c)}),p}},{key:"getIframeContents",value:function(s,p){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},y=void 0;try{var b=s.contentWindow;if(y=b.document,!b||!y)throw new Error("iframe inaccessible")}catch{c()}y&&p(y)}},{key:"isIframeBlank",value:function(s){var p="about:blank",c=s.getAttribute("src").trim(),y=s.contentWindow.location.href;return y===p&&c!==p&&c}},{key:"observeIframeLoad",value:function(s,p,c){var y=this,b=!1,h=null,g=function w(){if(!b){b=!0,clearTimeout(h);try{y.isIframeBlank(s)||(s.removeEventListener("load",w),y.getIframeContents(s,p,c))}catch{c()}}};s.addEventListener("load",g),h=setTimeout(g,this.iframesTimeout)}},{key:"onIframeReady",value:function(s,p,c){try{s.contentWindow.document.readyState==="complete"?this.isIframeBlank(s)?this.observeIframeLoad(s,p,c):this.getIframeContents(s,p,c):this.observeIframeLoad(s,p,c)}catch{c()}}},{key:"waitForIframes",value:function(s,p){var c=this,y=0;this.forEachIframe(s,function(){return!0},function(b){y++,c.waitForIframes(b.querySelector("html"),function(){--y||p()})},function(b){b||p()})}},{key:"forEachIframe",value:function(s,p,c){var y=this,b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(){},h=s.querySelectorAll("iframe"),g=h.length,w=0;h=Array.prototype.slice.call(h);var F=function(){--g<=0&&b(w)};g||F(),h.forEach(function(O){u.matches(O,y.exclude)?F():y.onIframeReady(O,function(k){p(O)&&(w++,c(k)),F()},F)})}},{key:"createIterator",value:function(s,p,c){return document.createNodeIterator(s,p,c,!1)}},{key:"createInstanceOnIframe",value:function(s){return new u(s.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(s,p,c){var y=s.compareDocumentPosition(c),b=Node.DOCUMENT_POSITION_PRECEDING;if(y&b)if(p!==null){var h=p.compareDocumentPosition(c),g=Node.DOCUMENT_POSITION_FOLLOWING;if(h&g)return!0}else return!0;return!1}},{key:"getIteratorNode",value:function(s){var p=s.previousNode(),c=void 0;return p===null?c=s.nextNode():c=s.nextNode()&&s.nextNode(),{prevNode:p,node:c}}},{key:"checkIframeFilter",value:function(s,p,c,y){var b=!1,h=!1;return y.forEach(function(g,w){g.val===c&&(b=w,h=g.handled)}),this.compareNodeIframe(s,p,c)?(b===!1&&!h?y.push({val:c,handled:!0}):b!==!1&&!h&&(y[b].handled=!0),!0):(b===!1&&y.push({val:c,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(s,p,c,y){var b=this;s.forEach(function(h){h.handled||b.getIframeContents(h.val,function(g){b.createInstanceOnIframe(g).forEachNode(p,c,y)})})}},{key:"iterateThroughNodes",value:function(s,p,c,y,b){for(var h=this,g=this.createIterator(p,s,y),w=[],F=[],O=void 0,k=void 0,T=function(){var D=h.getIteratorNode(g);return k=D.prevNode,O=D.node,O};T();)this.iframes&&this.forEachIframe(p,function(q){return h.checkIframeFilter(O,k,q,w)},function(q){h.createInstanceOnIframe(q).forEachNode(s,function(D){return F.push(D)},y)}),F.push(O);F.forEach(function(q){c(q)}),this.iframes&&this.handleOpenIframes(w,s,c,y),b()}},{key:"forEachNode",value:function(s,p,c){var y=this,b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(){},h=this.getContexts(),g=h.length;g||b(),h.forEach(function(w){var F=function(){y.iterateThroughNodes(s,w,p,c,function(){--g<=0&&b()})};y.iframes?y.waitForIframes(w,F):F()})}}],[{key:"matches",value:function(s,p){var c=typeof p=="string"?[p]:p,y=s.matches||s.matchesSelector||s.msMatchesSelector||s.mozMatchesSelector||s.oMatchesSelector||s.webkitMatchesSelector;if(y){var b=!1;return c.every(function(h){return y.call(s,h)?(b=!0,!1):!0}),b}else return!1}}]),u}(),o=function(){function u(d){r(this,u),this.ctx=d,this.ie=!1;var s=window.navigator.userAgent;(s.indexOf("MSIE")>-1||s.indexOf("Trident")>-1)&&(this.ie=!0)}return a(u,[{key:"log",value:function(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"debug",c=this.opt.log;this.opt.debug&&(typeof c>"u"?"undefined":t(c))==="object"&&typeof c[p]=="function"&&c[p]("mark.js: "+s)}},{key:"escapeStr",value:function(s){return s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createRegExp",value:function(s){return this.opt.wildcards!=="disabled"&&(s=this.setupWildcardsRegExp(s)),s=this.escapeStr(s),Object.keys(this.opt.synonyms).length&&(s=this.createSynonymsRegExp(s)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(s=this.setupIgnoreJoinersRegExp(s)),this.opt.diacritics&&(s=this.createDiacriticsRegExp(s)),s=this.createMergedBlanksRegExp(s),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(s=this.createJoinersRegExp(s)),this.opt.wildcards!=="disabled"&&(s=this.createWildcardsRegExp(s)),s=this.createAccuracyRegExp(s),s}},{key:"createSynonymsRegExp",value:function(s){var p=this.opt.synonyms,c=this.opt.caseSensitive?"":"i",y=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var b in p)if(p.hasOwnProperty(b)){var h=p[b],g=this.opt.wildcards!=="disabled"?this.setupWildcardsRegExp(b):this.escapeStr(b),w=this.opt.wildcards!=="disabled"?this.setupWildcardsRegExp(h):this.escapeStr(h);g!==""&&w!==""&&(s=s.replace(new RegExp("("+this.escapeStr(g)+"|"+this.escapeStr(w)+")","gm"+c),y+("("+this.processSynomyms(g)+"|")+(this.processSynomyms(w)+")")+y))}return s}},{key:"processSynomyms",value:function(s){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(s=this.setupIgnoreJoinersRegExp(s)),s}},{key:"setupWildcardsRegExp",value:function(s){return s=s.replace(/(?:\\)*\?/g,function(p){return p.charAt(0)==="\\"?"?":""}),s.replace(/(?:\\)*\*/g,function(p){return p.charAt(0)==="\\"?"*":""})}},{key:"createWildcardsRegExp",value:function(s){var p=this.opt.wildcards==="withSpaces";return s.replace(/\u0001/g,p?"[\\S\\s]?":"\\S?").replace(/\u0002/g,p?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(s){return s.replace(/[^(|)\\]/g,function(p,c,y){var b=y.charAt(c+1);return/[(|)\\]/.test(b)||b===""?p:p+"\0"})}},{key:"createJoinersRegExp",value:function(s){var p=[],c=this.opt.ignorePunctuation;return Array.isArray(c)&&c.length&&p.push(this.escapeStr(c.join(""))),this.opt.ignoreJoiners&&p.push("\\u00ad\\u200b\\u200c\\u200d"),p.length?s.split(/\u0000+/).join("["+p.join("")+"]*"):s}},{key:"createDiacriticsRegExp",value:function(s){var p=this.opt.caseSensitive?"":"i",c=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],y=[];return s.split("").forEach(function(b){c.every(function(h){if(h.indexOf(b)!==-1){if(y.indexOf(h)>-1)return!1;s=s.replace(new RegExp("["+h+"]","gm"+p),"["+h+"]"),y.push(h)}return!0})}),s}},{key:"createMergedBlanksRegExp",value:function(s){return s.replace(/[\s]+/gmi,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(s){var p=this,c="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿",y=this.opt.accuracy,b=typeof y=="string"?y:y.value,h=typeof y=="string"?[]:y.limiters,g="";switch(h.forEach(function(w){g+="|"+p.escapeStr(w)}),b){case"partially":default:return"()("+s+")";case"complementary":return g="\\s"+(g||this.escapeStr(c)),"()([^"+g+"]*"+s+"[^"+g+"]*)";case"exactly":return"(^|\\s"+g+")("+s+")(?=$|\\s"+g+")"}}},{key:"getSeparatedKeywords",value:function(s){var p=this,c=[];return s.forEach(function(y){p.opt.separateWordSearch?y.split(" ").forEach(function(b){b.trim()&&c.indexOf(b)===-1&&c.push(b)}):y.trim()&&c.indexOf(y)===-1&&c.push(y)}),{keywords:c.sort(function(y,b){return b.length-y.length}),length:c.length}}},{key:"isNumeric",value:function(s){return Number(parseFloat(s))==s}},{key:"checkRanges",value:function(s){var p=this;if(!Array.isArray(s)||Object.prototype.toString.call(s[0])!=="[object Object]")return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(s),[];var c=[],y=0;return s.sort(function(b,h){return b.start-h.start}).forEach(function(b){var h=p.callNoMatchOnInvalidRanges(b,y),g=h.start,w=h.end,F=h.valid;F&&(b.start=g,b.length=w-g,c.push(b),y=w)}),c}},{key:"callNoMatchOnInvalidRanges",value:function(s,p){var c=void 0,y=void 0,b=!1;return s&&typeof s.start<"u"?(c=parseInt(s.start,10),y=c+parseInt(s.length,10),this.isNumeric(s.start)&&this.isNumeric(s.length)&&y-p>0&&y-c>0?b=!0:(this.log("Ignoring invalid or overlapping range: "+(""+JSON.stringify(s))),this.opt.noMatch(s))):(this.log("Ignoring invalid range: "+JSON.stringify(s)),this.opt.noMatch(s)),{start:c,end:y,valid:b}}},{key:"checkWhitespaceRanges",value:function(s,p,c){var y=void 0,b=!0,h=c.length,g=p-h,w=parseInt(s.start,10)-g;return w=w>h?h:w,y=w+parseInt(s.length,10),y>h&&(y=h,this.log("End range automatically set to the max value of "+h)),w<0||y-w<0||w>h||y>h?(b=!1,this.log("Invalid range: "+JSON.stringify(s)),this.opt.noMatch(s)):c.substring(w,y).replace(/\s+/g,"")===""&&(b=!1,this.log("Skipping whitespace only range: "+JSON.stringify(s)),this.opt.noMatch(s)),{start:w,end:y,valid:b}}},{key:"getTextNodes",value:function(s){var p=this,c="",y=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,function(b){y.push({start:c.length,end:(c+=b.textContent).length,node:b})},function(b){return p.matchesExclude(b.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},function(){s({value:c,nodes:y})})}},{key:"matchesExclude",value:function(s){return l.matches(s,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(s,p,c){var y=this.opt.element?this.opt.element:"mark",b=s.splitText(p),h=b.splitText(c-p),g=document.createElement(y);return g.setAttribute("data-markjs","true"),this.opt.className&&g.setAttribute("class",this.opt.className),g.textContent=b.textContent,b.parentNode.replaceChild(g,b),h}},{key:"wrapRangeInMappedTextNode",value:function(s,p,c,y,b){var h=this;s.nodes.every(function(g,w){var F=s.nodes[w+1];if(typeof F>"u"||F.start>p){if(!y(g.node))return!1;var O=p-g.start,k=(c>g.end?g.end:c)-g.start,T=s.value.substr(0,g.start),q=s.value.substr(k+g.start);if(g.node=h.wrapRangeInTextNode(g.node,O,k),s.value=T+q,s.nodes.forEach(function(D,_){_>=w&&(s.nodes[_].start>0&&_!==w&&(s.nodes[_].start-=k),s.nodes[_].end-=k)}),c-=k,b(g.node.previousSibling,g.start),c>g.end)p=g.end;else return!1}return!0})}},{key:"wrapMatches",value:function(s,p,c,y,b){var h=this,g=p===0?0:p+1;this.getTextNodes(function(w){w.nodes.forEach(function(F){F=F.node;for(var O=void 0;(O=s.exec(F.textContent))!==null&&O[g]!=="";)if(c(O[g],F)){var k=O.index;if(g!==0)for(var T=1;T<g;T++)k+=O[T].length;F=h.wrapRangeInTextNode(F,k,k+O[g].length),y(F.previousSibling),s.lastIndex=0}}),b()})}},{key:"wrapMatchesAcrossElements",value:function(s,p,c,y,b){var h=this,g=p===0?0:p+1;this.getTextNodes(function(w){for(var F=void 0;(F=s.exec(w.value))!==null&&F[g]!=="";){var O=F.index;if(g!==0)for(var k=1;k<g;k++)O+=F[k].length;var T=O+F[g].length;h.wrapRangeInMappedTextNode(w,O,T,function(q){return c(F[g],q)},function(q,D){s.lastIndex=D,y(q)})}b()})}},{key:"wrapRangeFromIndex",value:function(s,p,c,y){var b=this;this.getTextNodes(function(h){var g=h.value.length;s.forEach(function(w,F){var O=b.checkWhitespaceRanges(w,g,h.value),k=O.start,T=O.end,q=O.valid;q&&b.wrapRangeInMappedTextNode(h,k,T,function(D){return p(D,w,h.value.substring(k,T),F)},function(D){c(D,w)})}),y()})}},{key:"unwrapMatches",value:function(s){for(var p=s.parentNode,c=document.createDocumentFragment();s.firstChild;)c.appendChild(s.removeChild(s.firstChild));p.replaceChild(c,s),this.ie?this.normalizeTextNode(p):p.normalize()}},{key:"normalizeTextNode",value:function(s){if(s){if(s.nodeType===3)for(;s.nextSibling&&s.nextSibling.nodeType===3;)s.nodeValue+=s.nextSibling.nodeValue,s.parentNode.removeChild(s.nextSibling);else this.normalizeTextNode(s.firstChild);this.normalizeTextNode(s.nextSibling)}}},{key:"markRegExp",value:function(s,p){var c=this;this.opt=p,this.log('Searching with expression "'+s+'"');var y=0,b="wrapMatches",h=function(w){y++,c.opt.each(w)};this.opt.acrossElements&&(b="wrapMatchesAcrossElements"),this[b](s,this.opt.ignoreGroups,function(g,w){return c.opt.filter(w,g,y)},h,function(){y===0&&c.opt.noMatch(s),c.opt.done(y)})}},{key:"mark",value:function(s,p){var c=this;this.opt=p;var y=0,b="wrapMatches",h=this.getSeparatedKeywords(typeof s=="string"?[s]:s),g=h.keywords,w=h.length,F=this.opt.caseSensitive?"":"i",O=function k(T){var q=new RegExp(c.createRegExp(T),"gm"+F),D=0;c.log('Searching with expression "'+q+'"'),c[b](q,1,function(_,S){return c.opt.filter(S,T,y,D)},function(_){D++,y++,c.opt.each(_)},function(){D===0&&c.opt.noMatch(T),g[w-1]===T?c.opt.done(y):k(g[g.indexOf(T)+1])})};this.opt.acrossElements&&(b="wrapMatchesAcrossElements"),w===0?this.opt.done(y):O(g[0])}},{key:"markRanges",value:function(s,p){var c=this;this.opt=p;var y=0,b=this.checkRanges(s);b&&b.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(b)),this.wrapRangeFromIndex(b,function(h,g,w,F){return c.opt.filter(h,g,w,F)},function(h,g){y++,c.opt.each(h,g)},function(){c.opt.done(y)})):this.opt.done(y)}},{key:"unmark",value:function(s){var p=this;this.opt=s;var c=this.opt.element?this.opt.element:"*";c+="[data-markjs]",this.opt.className&&(c+="."+this.opt.className),this.log('Removal selector "'+c+'"'),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,function(y){p.unwrapMatches(y)},function(y){var b=l.matches(y,c),h=p.matchesExclude(y);return!b||h?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},this.opt.done)}},{key:"opt",set:function(s){this._opt=i({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},s)},get:function(){return this._opt}},{key:"iterator",get:function(){return new l(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),u}();function f(u){var d=this,s=new o(u);return this.mark=function(p,c){return s.mark(p,c),d},this.markRegExp=function(p,c){return s.markRegExp(p,c),d},this.markRanges=function(p,c){return s.markRanges(p,c),d},this.unmark=function(p){return s.unmark(p),d},this}return f})}(qt)),qt.exports}var vb=hb();const Fb=jn(vb),wb=function(e,n,t,r){if(!e)return!1;const a=e(n,t),i=a!=null&&a.children?{props:{children:a.children}}:a;return Gr(i).toLowerCase().indexOf(r.toLowerCase())>=0},ks=({setFilteredRows:e,setExpandedRowKeys:n,dataSource:t=[],onSearch:r,onClientSearch:a,columns:i,tableContainer:l,collapsibleSearch:o=!1,enableSearchHighlighting:f})=>{const[u,d]=v.useState(""),s=()=>{setTimeout(()=>{const F=l;if(F){const O=new Fb(F.querySelector("tbody"));O.unmark({done:function(){u&&O.mark(u,{})}})}},0)},p=i==null?void 0:i.reduce((F,O)=>(F[O.dataIndex]?F[O.dataIndex].push(O.render):F[O.dataIndex]=[O.render],F),[]),c=F=>{const O=F??u;if(r){r(O);return}if(a){e(t.filter((T,q)=>a(O,T,q)));return}let k=[];if(O.length>0){const T=q=>{const D=[];return q.forEach(_=>{const S={..._};let R=!1;for(const C in S)if(S[C]&&typeof S[C]=="string"&&(S[C].split(new RegExp(`(${O})`,"gi")).length>1&&(R=!0),p[C])){const j=p[C].reduce((B,M)=>B||wb(M,S[C],S,u),!1);R=R||j}S.children&&(S.children=T(S.children),!R&&S.children.length>0&&(n(C=>[...C,S.key]),R=!0)),R&&D.push(S)}),D};k=T(t)}else k.push(...t);f&&s(),e(k)},{updateContext:y,pagination:b,useV3TestId:h}=fe();v.useEffect(()=>{y({searchValue:u})},[u]);const g=()=>{d(""),c("")},w=o?K.CollapsibleSearch:ca;return m.createElement(w,{testId:"table-search",klId:"table-search",value:u,onChange:d,onPressEnter:b.useDataSourceFunction?void 0:()=>c(),onClearClick:g,searchIconTestId:h?"toggle-table-search":void 0})};ks.__docgenInfo={description:"",methods:[],displayName:"SearchModule",props:{setFilteredRows:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: Record<string, unknown>[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Record<string, unknown>[]"},name:"val"}],return:{name:"void"}}},description:""},setExpandedRowKeys:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: SetStateAction<Key[]>) => void",signature:{arguments:[{type:{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"Key"}],raw:"Key[]"}],raw:"SetStateAction<Key[]>"},name:"val"}],return:{name:"void"}}},description:""},dataSource:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"[]",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchString: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchString"}],return:{name:"void"}}},description:""},onClientSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchString: string, row: TableRecord, index: number) => boolean",signature:{arguments:[{type:{name:"string"},name:"searchString"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"boolean"}}},description:""},columns:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},tableContainer:{required:!1,tsType:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},description:""},collapsibleSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},enableSearchHighlighting:{required:!1,tsType:{name:"boolean"},description:""}}};const Ob=L.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  [data-testid="table-toolbar"] {
    z-index: 3;
  }

  .hexa-ui-table-ref {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  ${({fullHeight:e})=>e&&be`height: 100%;`}
`,eo=e=>e.map((n,t)=>({type:"children",key:`item-${t}`,children:n})),kb=e=>function(t){var h,g,w;const{filterApi:r}=fe(),[a,i]=v.useState(t.dataSource),[l,o]=v.useState([]),[f,u]=v.useState(!1),[d,s]=v.useState(!1),[p,c]=v.useState(null),y=[],b=v.useRef(null);if(v.useEffect(()=>{i(t.dataSource)},[t.dataSource]),v.useEffect(()=>{c(b.current)},[b]),t.toolbar){t.toolbar.showSearch&&y.push(m.createElement(ks,{setFilteredRows:i,setExpandedRowKeys:o,dataSource:t.dataSource,onSearch:t.onSearch,onClientSearch:t.onClientSearch,columns:t.columns,tableContainer:p,enableSearchHighlighting:t.enableSearchHighlighting,collapsibleSearch:t.toolbar.collapsibleSearch}));const{showColumnsTab:F,showGroupingTab:O}=gl(t.toolbar);if((F||O)&&y.push(m.createElement(K.SettingsItem,{testId:"table-settings",klId:"table-configuration",onClick:()=>u(!0)})),t.toolbar.showFilterSidebar){const T=!!(r!=null&&r.getRootGroupFilters().filter(se).length);y.push(m.createElement(K.FilterSidebar,{testId:"table-filter-sidebar",onClick:()=>s(!0),showIndicator:T,iconBefore:T?m.createElement(Su,null):m.createElement(Mt,null)}))}}return t.toolbar?m.createElement(Ob,{className:"hexa-ui-tabletoolbar-container",fullHeight:t.fullHeight},m.createElement(K,{testId:"table-toolbar",componentId:"table-toolbar",sticky:t.toolbar.sticky,leftLimit:t.toolbar.leftLimit,left:t.toolbar.left??[],right:t.toolbar.right?eo(t.toolbar.right(y)):eo(y),autoDropdown:t.toolbar.autoDropdown}),m.createElement(jl,{items:(h=t==null?void 0:t.filterItems)==null?void 0:h.items,clearLinkText:(g=t==null?void 0:t.filterItems)==null?void 0:g.clearLinkText,onClear:(w=t==null?void 0:t.filterItems)==null?void 0:w.onClear,onSidebarFiltersChange:t.onSidebarFiltersChange,columns:t.columns}),m.createElement("div",{className:"hexa-ui-table-ref",ref:b},m.createElement(e,{...t,showColumnsSelector:f,onCloseColumnsSelector:()=>u(!1),showFilterSidebar:d,onCloseFilterSidebar:()=>s(!1),dataSource:a,expandedRowKeys:l,onExpand:(F,O)=>{const k=O.key;o(F&&k?[...l,k]:[...l].filter(T=>T!==k))}}))):m.createElement(e,{...t})};function Wn(e,n,t){let r=t.initialDeps??[],a;return()=>{var i,l,o,f;let u;t.key&&((i=t.debug)!=null&&i.call(t))&&(u=Date.now());const d=e();if(!(d.length!==r.length||d.some((c,y)=>r[y]!==c)))return a;r=d;let p;if(t.key&&((l=t.debug)!=null&&l.call(t))&&(p=Date.now()),a=n(...d),t.key&&((o=t.debug)!=null&&o.call(t))){const c=Math.round((Date.now()-u)*100)/100,y=Math.round((Date.now()-p)*100)/100,b=y/16,h=(g,w)=>{for(g=String(g);g.length<w;)g=" "+g;return g};console.info(`%c⏱ ${h(y,5)} /${h(c,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*b,120))}deg 100% 31%);`,t==null?void 0:t.key)}return(f=t==null?void 0:t.onChange)==null||f.call(t,a),a}}function Br(e,n){if(e===void 0)throw new Error("Unexpected undefined");return e}const qb=(e,n)=>Math.abs(e-n)<1,Tb=(e,n,t)=>{let r;return function(...a){e.clearTimeout(r),r=e.setTimeout(()=>n.apply(this,a),t)}},xb=e=>e,Db=e=>{const n=Math.max(e.startIndex-e.overscan,0),t=Math.min(e.endIndex+e.overscan,e.count-1),r=[];for(let a=n;a<=t;a++)r.push(a);return r},Eb=(e,n)=>{const t=e.scrollElement;if(!t)return;const r=e.targetWindow;if(!r)return;const a=l=>{const{width:o,height:f}=l;n({width:Math.round(o),height:Math.round(f)})};if(a(t.getBoundingClientRect()),!r.ResizeObserver)return()=>{};const i=new r.ResizeObserver(l=>{const o=l[0];if(o!=null&&o.borderBoxSize){const f=o.borderBoxSize[0];if(f){a({width:f.inlineSize,height:f.blockSize});return}}a(t.getBoundingClientRect())});return i.observe(t,{box:"border-box"}),()=>{i.unobserve(t)}},no={passive:!0},Sb=typeof window>"u"?!0:"onscrollend"in window,Rb=(e,n)=>{const t=e.scrollElement;if(!t)return;const r=e.targetWindow;if(!r)return;let a=0;const i=Sb?()=>{}:Tb(r,()=>{n(a,!1)},e.options.isScrollingResetDelay),l=u=>()=>{const{horizontal:d,isRtl:s}=e.options;a=d?t.scrollLeft*(s&&-1||1):t.scrollTop,i(),n(a,u)},o=l(!0),f=l(!1);return f(),t.addEventListener("scroll",o,no),t.addEventListener("scrollend",f,no),()=>{t.removeEventListener("scroll",o),t.removeEventListener("scrollend",f)}},Cb=(e,n,t)=>{if(n!=null&&n.borderBoxSize){const r=n.borderBoxSize[0];if(r)return Math.round(r[t.options.horizontal?"inlineSize":"blockSize"])}return Math.round(e.getBoundingClientRect()[t.options.horizontal?"width":"height"])},_b=(e,{adjustments:n=0,behavior:t},r)=>{var a,i;const l=e+n;(i=(a=r.scrollElement)==null?void 0:a.scrollTo)==null||i.call(a,{[r.options.horizontal?"left":"top"]:l,behavior:t})};class Ab{constructor(n){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let t=null;const r=()=>t||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:t=new this.targetWindow.ResizeObserver(a=>{a.forEach(i=>{this._measureElement(i.target,i)})}));return{disconnect:()=>{var a;return(a=r())==null?void 0:a.disconnect()},observe:a=>{var i;return(i=r())==null?void 0:i.observe(a,{box:"border-box"})},unobserve:a=>{var i;return(i=r())==null?void 0:i.unobserve(a)}}})(),this.range=null,this.setOptions=t=>{Object.entries(t).forEach(([r,a])=>{typeof a>"u"&&delete t[r]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:xb,rangeExtractor:Db,onChange:()=>{},measureElement:Cb,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,...t}},this.notify=(t,r)=>{var a,i;const{startIndex:l,endIndex:o}=this.range??{startIndex:void 0,endIndex:void 0},f=this.calculateRange();(t||l!==(f==null?void 0:f.startIndex)||o!==(f==null?void 0:f.endIndex))&&((i=(a=this.options).onChange)==null||i.call(a,this,r))},this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(t=>t()),this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.observer.disconnect(),this.elementsCache.clear()},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var t;const r=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==r){if(this.cleanup(),!r){this.notify(!1,!1);return}this.scrollElement=r,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((t=this.scrollElement)==null?void 0:t.window)??null,this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,a=>{this.scrollRect=a,this.notify(!1,!1)})),this.unsubs.push(this.options.observeElementOffset(this,(a,i)=>{this.scrollAdjustments=0,this.scrollDirection=i?this.getScrollOffset()<a?"forward":"backward":null,this.scrollOffset=a;const l=this.isScrolling;this.isScrolling=i,this.notify(l!==i,i)}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(t,r)=>{const a=new Map,i=new Map;for(let l=r-1;l>=0;l--){const o=t[l];if(a.has(o.lane))continue;const f=i.get(o.lane);if(f==null||o.end>f.end?i.set(o.lane,o):o.end<f.end&&a.set(o.lane,!0),a.size===this.options.lanes)break}return i.size===this.options.lanes?Array.from(i.values()).sort((l,o)=>l.end===o.end?l.index-o.index:l.end-o.end)[0]:void 0},this.getMeasurementOptions=Wn(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(t,r,a,i,l)=>(this.pendingMeasuredCacheIndexes=[],{count:t,paddingStart:r,scrollMargin:a,getItemKey:i,enabled:l}),{key:!1}),this.getMeasurements=Wn(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:t,paddingStart:r,scrollMargin:a,getItemKey:i,enabled:l},o)=>{if(!l)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(d=>{this.itemSizeCache.set(d.key,d.size)}));const f=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const u=this.measurementsCache.slice(0,f);for(let d=f;d<t;d++){const s=i(d),p=this.options.lanes===1?u[d-1]:this.getFurthestMeasurement(u,d),c=p?p.end+this.options.gap:r+a,y=o.get(s),b=typeof y=="number"?y:this.options.estimateSize(d),h=c+b,g=p?p.lane:d%this.options.lanes;u[d]={index:d,start:c,size:b,end:h,key:s,lane:g,measureElement:this.measureElement}}return this.measurementsCache=u,u},{key:!1,debug:()=>this.options.debug}),this.calculateRange=Wn(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(t,r,a)=>this.range=t.length>0&&r>0?Ib({measurements:t,outerSize:r,scrollOffset:a}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=Wn(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(t,r,a,i)=>r===null?[]:t({startIndex:r.startIndex,endIndex:r.endIndex,overscan:a,count:i}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=t=>{const r=this.options.indexAttribute,a=t.getAttribute(r);return a?parseInt(a,10):(console.warn(`Missing attribute name '${r}={index}' on measured element.`),-1)},this._measureElement=(t,r)=>{const a=this.indexFromElement(t),i=this.options.getItemKey(a),l=this.elementsCache.get(i);l!==t&&(l&&this.observer.unobserve(l),this.observer.observe(t),this.elementsCache.set(i,t)),t.isConnected&&this.resizeItem(a,this.options.measureElement(t,r,this))},this.resizeItem=(t,r)=>{const a=this.getMeasurements()[t];if(!a)return;const i=this.itemSizeCache.get(a.key)??a.size,l=r-i;l!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(a,l,this):a.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=l,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(a.index),this.itemSizeCache=new Map(this.itemSizeCache.set(a.key,r)),this.notify(!0,!1))},this.measureElement=t=>{if(!t){this.elementsCache.forEach((r,a)=>{r.isConnected||(this.observer.unobserve(r),this.elementsCache.delete(a))});return}this._measureElement(t,void 0)},this.getVirtualItems=Wn(()=>[this.getIndexes(),this.getMeasurements()],(t,r)=>{const a=[];for(let i=0,l=t.length;i<l;i++){const o=t[i],f=r[o];a.push(f)}return a},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=t=>{const r=this.getMeasurements();if(r.length!==0)return Br(r[qs(0,r.length-1,a=>Br(r[a]).start,t)])},this.getOffsetForAlignment=(t,r)=>{const a=this.getSize(),i=this.getScrollOffset();r==="auto"&&(t<=i?r="start":t>=i+a?r="end":r="start"),r==="start"?t=t:r==="end"?t=t-a:r==="center"&&(t=t-a/2);const l=this.options.horizontal?"scrollWidth":"scrollHeight",f=(this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[l]:this.scrollElement[l]:0)-a;return Math.max(Math.min(f,t),0)},this.getOffsetForIndex=(t,r="auto")=>{t=Math.max(0,Math.min(t,this.options.count-1));const a=this.getMeasurements()[t];if(!a)return;const i=this.getSize(),l=this.getScrollOffset();if(r==="auto")if(a.end>=l+i-this.options.scrollPaddingEnd)r="end";else if(a.start<=l+this.options.scrollPaddingStart)r="start";else return[l,r];const o=r==="end"?a.end+this.options.scrollPaddingEnd:a.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(o,r),r]},this.isDynamicMode=()=>this.elementsCache.size>0,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(t,{align:r="start",behavior:a}={})=>{this.cancelScrollToIndex(),a==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(t,r),{adjustments:void 0,behavior:a})},this.scrollToIndex=(t,{align:r="auto",behavior:a}={})=>{t=Math.max(0,Math.min(t,this.options.count-1)),this.cancelScrollToIndex(),a==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const i=this.getOffsetForIndex(t,r);if(!i)return;const[l,o]=i;this._scrollToOffset(l,{adjustments:void 0,behavior:a}),a!=="smooth"&&this.isDynamicMode()&&this.targetWindow&&(this.scrollToIndexTimeoutId=this.targetWindow.setTimeout(()=>{if(this.scrollToIndexTimeoutId=null,this.elementsCache.has(this.options.getItemKey(t))){const[u]=Br(this.getOffsetForIndex(t,o));qb(u,this.getScrollOffset())||this.scrollToIndex(t,{align:o,behavior:a})}else this.scrollToIndex(t,{align:o,behavior:a})}))},this.scrollBy=(t,{behavior:r}={})=>{this.cancelScrollToIndex(),r==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+t,{adjustments:void 0,behavior:r})},this.getTotalSize=()=>{var t;const r=this.getMeasurements();let a;return r.length===0?a=this.options.paddingStart:a=this.options.lanes===1?((t=r[r.length-1])==null?void 0:t.end)??0:Math.max(...r.slice(-this.options.lanes).map(i=>i.end)),a-this.options.scrollMargin+this.options.paddingEnd},this._scrollToOffset=(t,{adjustments:r,behavior:a})=>{this.options.scrollToFn(t,{behavior:a,adjustments:r},this)},this.measure=()=>{var t,r;this.itemSizeCache=new Map,(r=(t=this.options).onChange)==null||r.call(t,this,!1)},this.setOptions(n)}}const qs=(e,n,t,r)=>{for(;e<=n;){const a=(e+n)/2|0,i=t(a);if(i<r)e=a+1;else if(i>r)n=a-1;else return a}return e>0?e-1:0};function Ib({measurements:e,outerSize:n,scrollOffset:t}){const r=e.length-1,i=qs(0,r,o=>e[o].start,t);let l=i;for(;l<r&&e[l].end<t+n;)l++;return{startIndex:i,endIndex:l}}const Nb=typeof document<"u"?v.useLayoutEffect:v.useEffect;function jb(e){const n=v.useReducer(()=>({}),{})[1],t={...e,onChange:(a,i)=>{var l;i?tt.flushSync(n):n(),(l=e.onChange)==null||l.call(e,a,i)}},[r]=v.useState(()=>new Ab(t));return r.setOptions(t),v.useEffect(()=>r._didMount(),[]),Nb(()=>r._willUpdate()),r}function Mb(e){return jb({observeElementRect:Eb,observeElementOffset:Rb,scrollToFn:_b,...e})}const Pb=e=>n=>{var i;const t=v.useRef(null),r=Mb({count:((i=n.dataSource)==null?void 0:i.length)??0,getScrollElement:()=>t.current,estimateSize:()=>40,overscan:5}),a=l=>m.createElement("div",{ref:t,style:{height:600,width:"100%",overflow:"auto"}},m.createElement("div",{style:{height:`${r.getTotalSize()}px`}},m.createElement("table",null,m.createElement("tbody",{className:"ant-table-tbody"},r.getVirtualItems().map((o,f)=>{var p;const u=l[o.index],d=u.key,s=()=>{if(!n.rowSelection)return null;const{selectedRowKeys:c=[],onChange:y}=n.rowSelection,b=c.includes(d),h=()=>{b?y==null||y(c.filter(g=>g!==d),[]):y==null||y([...c,d],[])};return m.createElement("td",{className:"ant-table-cell ant-table-selection-column ant-table-cell-with-append"},m.createElement(Nn,{checked:b,onChange:h}))};return m.createElement("tr",{className:"ant-table-row",key:u.key,style:{height:`${o.size}px`,transform:`translateY(${o.start-f*o.size}px)`}},s(),(p=n.columns)==null?void 0:p.map((c,y)=>{var h,g;const b=(h=n.columns)!=null&&h.length?y===((g=n.columns)==null?void 0:g.length)-1:!1;return m.createElement("td",{className:"ant-table-cell",key:`${u.key}-${c.dataIndex}`,style:{width:b?"auto":c.width?c.width:"200px",maxWidth:"200px",minWidth:"100px"}},u[c.dataIndex])}))})))));return n.__EXPERIMENTAL__VIRTUAL?m.createElement(e,{...n,pagination:!1,resizingMode:"last",components:{body:a}}):m.createElement(e,{...n})},Bb=({expandable:e,columns:n,rowSelection:t})=>{const[r,a]=v.useState({...Tn,...e});return v.useEffect(()=>{if(!(e!=null&&e.expandColumnName&&n)){a({...Tn,...e});return}e!=null&&e.expandIconColumnIndex&&console.warn("KL-components -> Table -> useExpandColumnName -> expandableConfig","It`s not allowed to use `expandIconColumnIndex` and `expandColumnName` together. Only `expandIconColumnIndex` will be used");const i=n.findIndex(({dataIndex:f})=>f===e.expandColumnName);if(i<0){a({...Tn,...e});return}const l={...Tn,...e,expandIconColumnIndex:i};if(!t){a({...Tn,...l});return}l.expandIconColumnIndex+=1,n.findIndex(f=>f===xt.SELECTION_COLUMN)<0&&(l.expandIconColumnIndex+=1),a({...Tn,...l})},[n,e==null?void 0:e.expandColumnName,t]),r},Ub=e=>({expandableConfig:Bb(e)}),Ts=(e,n)=>{const t=n.reduce((r,a)=>a(r),e);return Uc(t)},Lb=[Vf,lg,rb,ug,Tg,iy,Gy,zy,Vy,Wg,Yf,kb,Pb,Ql,Pf,ag],Vb=L.div`
  --scrollbar--bar--radius: 6px;

  & {
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      border-radius: var(--scrollbar--bar--radius);
      height: 8px;
    }
  
    ::-webkit-scrollbar-thumb {
      background: var(--scrollbar--bar--enabled);
      border-radius: var(--scrollbar--bar--radius);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--scrollbar--bar--hover);
    }

    scrollbar-color: var(--scrollbar--bar--enabled);
    position: sticky;
    overflow: hidden;
    overflow-x: auto;
    bottom: ${e=>e.stickyScrollbarOffset||"0"}px;
    z-index: 3;
    border-bottom: 5px solid transparent;
    outline: transparent solid 1px;

    .table-horizontal-filler {
      height: 1px;
      width: 1px;
      overflow: hidden;
    }
  }
`,$b=L(xt).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${fl}
`,Wb=L.div`
  ${Xc}
`,Hb=()=>m.createElement(za,{image:za.PRESENTED_IMAGE_SIMPLE,description:m.createElement(le,{localizationKey:"common.empty"})}),Ua=e=>{var bn,hn,Ie;const{cssConfig:n}=fe(),{expandableConfig:t}=Ub(e),{testAttributes:r}=ma(e),a=v.useRef(null),[i,l]=v.useState(0),o=v.useRef(null),f=v.useRef(null),u=v.useRef(null),[d,s]=v.useState((bn=o.current)==null?void 0:bn.offsetWidth);dg({horizontalScrollbarRef:u,scrollableContainerRef:o,stickyHeaderRef:f}),v.useEffect(()=>{var vn;const ce=(vn=o.current)==null?void 0:vn.querySelector(".ant-table");if(!ce)return;const Fe=new ResizeObserver(()=>Li({tableBody:ce,horizontalScrollbarRef:u,stickyHeaderRef:f}));return Fe.observe(ce),()=>Fe.unobserve(ce)},[]);const p=!!((hn=e.dataSource)!=null&&hn.length);v.useEffect(()=>{var Fe;const ce=(Fe=o.current)==null?void 0:Fe.querySelector(".ant-table");ce&&Li({tableBody:ce,horizontalScrollbarRef:u,stickyHeaderRef:f})},[p]),v.useEffect(()=>{a.current&&l(a.current.offsetWidth)},[]);const{loaderProps:c={indicator:m.createElement(yo,null)},loading:y,expandable:b,emptyText:h=Hb,showSorterTooltip:g=!1,columns:w,rowSelection:F,rowClassName:O,backgroundPattern:k,klId:T,testId:q,isValid:D,fullHeight:_,resizingMode:S,useDragDrop:R,scroll:C,rowMode:U,stickyHeader:j,columnVerticalAlign:B,...M}=e;v.useLayoutEffect(()=>{const ce=()=>{var Fe;s((Fe=o.current)==null?void 0:Fe.offsetWidth)};return window.addEventListener("resize",ce),()=>window.removeEventListener("resize",ce)},[]);const Z=v.useMemo(()=>e.columns?Hc(e.columns,i):[],[e.columns,i]);if(!n)return null;v.useEffect(()=>{var Fe;const ce=(Fe=o.current)==null?void 0:Fe.querySelector(".ant-table-body");ce&&(ce.scrollLeft-=1)},[Z==null?void 0:Z.length]);const me={cssConfig:n,resizingMode:S,useDragDrop:R,scroll:C,rowMode:U,stickyHeader:j,isValid:D,columnVerticalAlign:B},ln=R?m.createElement(Wb,{...me,className:"row-dragging-container"}):"";return m.createElement(m.Fragment,null,j!==void 0?m.createElement(pg,{...me,ref:f,className:Ba},m.createElement("div",{className:"ant-table ant-table-small"})):null,m.createElement(ts,{ref:o,className:je("table-scrolling-wrapper",{"table-height-full":_},{"table-bg-diagonal":k==="diagonal"}),resizingMode:S,...r},m.createElement(Gf,{hasSelectionColumn:!!F,$previewTableWidth:d??((Ie=o.current)==null?void 0:Ie.offsetWidth)},m.createElement($b,{...M,...me,ref:a,columns:Z,rowSelection:F,rowClassName:(ce,Fe,vn)=>je({"row-table-bg-pattern":!!ce._blendedBackground},typeof O=="string"?O:O==null?void 0:O(ce,Fe,vn)),expandable:t,"kl-id":T,loading:y&&c,locale:{emptyText:y?m.createElement(m.Fragment,null):h},showSorterTooltip:g,size:"small"}),ln)),m.createElement(Vb,{ref:u,className:"table-horizontal-scrollbar",stickyScrollbarOffset:e.stickyScrollbarOffset},m.createElement("div",{className:"table-horizontal-filler"})))};Ua.__docgenInfo={description:"",methods:[],displayName:"Table",props:{theme:{required:!1,tsType:{name:"ThemeKey"},description:""},dataSource:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},dataSourceFunction:{required:!1,tsType:{name:"signature",type:"function",raw:"(config: TableDataSourceFunctionArgs) => Promise<TableDataSourceFunctionReturn<T>>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  page: number,
  pageSize: number,
  params?: {
    filters: FilterConfig[],
    searchString?: string,
    groupBy?: string
  },
  sorting?: Pick<ActiveSorting, 'attribute' | 'field' | 'isDefaultSortDisabled'> & {
    isAsc: boolean
  }
}`,signature:{properties:[{key:"page",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"params",value:{name:"signature",type:"object",raw:`{
  filters: FilterConfig[],
  searchString?: string,
  groupBy?: string
}`,signature:{properties:[{key:"filters",value:{name:"Array",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]}],raw:"FilterConfig[]",required:!0}},{key:"searchString",value:{name:"string",required:!1}},{key:"groupBy",value:{name:"string",required:!1}}]},required:!1}},{key:"sorting",value:{name:"intersection",raw:`Pick<ActiveSorting, 'attribute' | 'field' | 'isDefaultSortDisabled'> & {
  isAsc: boolean
}`,elements:[{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  field?: string,
  attribute?: string,
  direction?: SortType,
  columnId?: string,
  columnServerField?: string,
  isDefaultSortDisabled?: boolean,
  customSorter?: CustomSorter
}`,signature:{properties:[{key:"field",value:{name:"string",required:!1}},{key:"attribute",value:{name:"string",required:!1}},{key:"direction",value:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}],required:!1}},{key:"columnId",value:{name:"string",required:!1}},{key:"columnServerField",value:{name:"string",required:!1}},{key:"isDefaultSortDisabled",value:{name:"boolean",required:!1}},{key:"customSorter",value:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}},required:!1}}]}},{name:"union",raw:"'attribute' | 'field' | 'isDefaultSortDisabled'",elements:[{name:"literal",value:"'attribute'"},{name:"literal",value:"'field'"},{name:"literal",value:"'isDefaultSortDisabled'"}]}],raw:"Pick<ActiveSorting, 'attribute' | 'field' | 'isDefaultSortDisabled'>"},{name:"signature",type:"object",raw:`{
  isAsc: boolean
}`,signature:{properties:[{key:"isAsc",value:{name:"boolean",required:!0}}]}}],required:!1}}]}},name:"config"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:`{
  rows: T[],
  isDefaultSortDisabled?: boolean,
  isClientGroupsSortingDisabled?: boolean,
  totalCount: number,
  /** @deprecated If you have only one page, use hideOnSinglePage prop for Table */
  paginationDisabled?: boolean
}`,signature:{properties:[{key:"rows",value:{name:"Array",elements:[{name:"T"}],raw:"T[]",required:!0}},{key:"isDefaultSortDisabled",value:{name:"boolean",required:!1}},{key:"isClientGroupsSortingDisabled",value:{name:"boolean",required:!1}},{key:"totalCount",value:{name:"number",required:!0}},{key:"paginationDisabled",value:{name:"boolean",required:!1},description:"@deprecated If you have only one page, use hideOnSinglePage prop for Table"}]}}],raw:"Promise<TableDataSourceFunctionReturn<T>>"}}},description:""},patchDataSource:{required:!1,tsType:{name:"signature",type:"function",raw:"(rows: T[]) => T[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"rows"}],return:{name:"Array",elements:[{name:"T"}],raw:"T[]"}}},description:""},onDataSourceChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(rows: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"rows"}],return:{name:"void"}}},description:""},columns:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  ColumnType<TableRecord>,
  'key' | 'sorter' | 'filters' | 'dataIndex'
> & {
  key: React.Key,
  title?: string | ReactElement,
  /* Show Dash in empty cell for column */
  hasEmptyCellDash?: boolean,
  dataIndex?: string,
  columnId?: string,
  /* When the content exceeds the width of the cell, an arrow is drawn, and when clicked, the full content is displayed. It works with custom
   * render also and is not compatible with ellipsis: true. If ellipsis: false it disables expandableText also
   */
  expandableText?: boolean,
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter,
  filteringAvailable?: boolean,
  groupingAvailable?: boolean,
  hideColumnAvailable?: boolean,
  show?: boolean,
  closeDropdownOnSelect?: boolean,
  filters?: ColumnFilter[],
  filterType?: TableFilterType,
  /** 
   * It's used for manually setting the display of filtering icon in column title. 
   * By default, filter icon is displayed when at least one filter is applied to the column,
   * but this option overrides default behaivour 
  */
  showFilterIcon?: boolean,
  width?: number | string,
  isUserDefinedWidth?: boolean,
  renderGroupTitle?: (data: string) => ReactNode,
  resizing?: {
    disabled: boolean
  },
  sortingAttributes?: SortingAttributes,
  filterAttributes?: FilterAttributes
}`,elements:[{name:"Omit",elements:[{name:"ColumnType",elements:[{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}}],raw:"ColumnType<TableRecord>"},{name:"union",raw:"'key' | 'sorter' | 'filters' | 'dataIndex'",elements:[{name:"literal",value:"'key'"},{name:"literal",value:"'sorter'"},{name:"literal",value:"'filters'"},{name:"literal",value:"'dataIndex'"}]}],raw:`Omit<
  ColumnType<TableRecord>,
  'key' | 'sorter' | 'filters' | 'dataIndex'
>`},{name:"signature",type:"object",raw:`{
  key: React.Key,
  title?: string | ReactElement,
  /* Show Dash in empty cell for column */
  hasEmptyCellDash?: boolean,
  dataIndex?: string,
  columnId?: string,
  /* When the content exceeds the width of the cell, an arrow is drawn, and when clicked, the full content is displayed. It works with custom
   * render also and is not compatible with ellipsis: true. If ellipsis: false it disables expandableText also
   */
  expandableText?: boolean,
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter,
  filteringAvailable?: boolean,
  groupingAvailable?: boolean,
  hideColumnAvailable?: boolean,
  show?: boolean,
  closeDropdownOnSelect?: boolean,
  filters?: ColumnFilter[],
  filterType?: TableFilterType,
  /** 
   * It's used for manually setting the display of filtering icon in column title. 
   * By default, filter icon is displayed when at least one filter is applied to the column,
   * but this option overrides default behaivour 
  */
  showFilterIcon?: boolean,
  width?: number | string,
  isUserDefinedWidth?: boolean,
  renderGroupTitle?: (data: string) => ReactNode,
  resizing?: {
    disabled: boolean
  },
  sortingAttributes?: SortingAttributes,
  filterAttributes?: FilterAttributes
}`,signature:{properties:[{key:"key",value:{name:"ReactKey",raw:"React.Key",required:!0}},{key:"title",value:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}],required:!1}},{key:"hasEmptyCellDash",value:{name:"boolean",required:!1}},{key:"dataIndex",value:{name:"string",required:!1}},{key:"columnId",value:{name:"string",required:!1}},{key:"expandableText",value:{name:"boolean",required:!1}},{key:"isSortable",value:{name:"boolean",required:!1}},{key:"allowMultipleFilters",value:{name:"boolean",required:!1}},{key:"sorter",value:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}},required:!1}},{key:"customSorter",value:{name:"signature",type:"function",raw:"<T extends TableRecord>(rows: T[], propName: keyof T, isAsc: boolean, attribute: string) => T[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"rows"},{type:{name:"T"},name:"propName"},{type:{name:"boolean"},name:"isAsc"},{type:{name:"string"},name:"attribute"}],return:{name:"Array",elements:[{name:"T"}],raw:"T[]"}},required:!1},description:"@deprecated Use **sorter** for custom column sorting"},{key:"filteringAvailable",value:{name:"boolean",required:!1}},{key:"groupingAvailable",value:{name:"boolean",required:!1}},{key:"hideColumnAvailable",value:{name:"boolean",required:!1}},{key:"show",value:{name:"boolean",required:!1}},{key:"closeDropdownOnSelect",value:{name:"boolean",required:!1}},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  localizationKey?: string,
  name: string,
  elementBefore?: ReactNode,
  filter: FilterFunction
}`,signature:{properties:[{key:"localizationKey",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"elementBefore",value:{name:"ReactNode",required:!1}},{key:"filter",value:{name:"signature",type:"function",raw:"(record: TableRecord) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"record"}],return:{name:"boolean"}},required:!0}}]}}],raw:"ColumnFilter[]",required:!1}},{key:"filterType",value:{name:"union",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
} & SharedFilterType<FilterType.DateTime>
| EnumFilterType
| { type: FilterType.Text } & SharedFilterType<FilterType.Text>
| { type: FilterType.Number } & SharedFilterType<FilterType.Number>
| { type: FilterType.Boolean } & SharedFilterType<FilterType.Boolean>
| { type: FilterType.DateRange } & SharedFilterType<FilterType.DateRange>
| { type: FilterType.DaysBefore } & SharedFilterType<FilterType.DaysBefore>
| { type: FilterType.Radio } & SharedFilterType<FilterType.Radio>
| { type: FilterType.IP } & SharedFilterType<FilterType.IP>`,elements:[{name:"intersection",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
} & SharedFilterType<FilterType.DateTime>`,elements:[{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"dateOnly",value:{name:"boolean",required:!1},description:"Show only dates without time"}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:`{
  type: FilterType.Enum,
  /**
   * @deprecated Use **getAvailableOptions** instead
   */
  getAvailableValues?: () => Promise<LegacyEnumOption[]>,
  /**
   * @returns Array of options
   *
   * @example
   * \`\`\`ts
   * getAvailableOptions: () => Promise.resolve([
   *  { label: "option1", value: "Option 1" },
   *  { label: <span>Option 2</span>, value: "Option 2" },
   * ])
   * \`\`\`
   */
  getAvailableOptions?: () => Promise<EnumOption[]>
} & SharedFilterType<FilterType.Enum>`,elements:[{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  /**
   * @deprecated Use **getAvailableOptions** instead
   */
  getAvailableValues?: () => Promise<LegacyEnumOption[]>,
  /**
   * @returns Array of options
   *
   * @example
   * \`\`\`ts
   * getAvailableOptions: () => Promise.resolve([
   *  { label: "option1", value: "Option 1" },
   *  { label: <span>Option 2</span>, value: "Option 2" },
   * ])
   * \`\`\`
   */
  getAvailableOptions?: () => Promise<EnumOption[]>
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"getAvailableValues",value:{name:"signature",type:"function",raw:"() => Promise<LegacyEnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"LegacyEnumOption[]"}],raw:"Promise<LegacyEnumOption[]>"}},required:!1},description:"@deprecated Use **getAvailableOptions** instead"},{key:"getAvailableOptions",value:{name:"signature",type:"function",raw:"() => Promise<EnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string | number | boolean,
  label?: ReactNode
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!0}},{key:"label",value:{name:"ReactNode",required:!1}}]}}],raw:"EnumOption[]"}],raw:"Promise<EnumOption[]>"}},required:!1},description:`@returns Array of options

@example
\`\`\`ts
getAvailableOptions: () => Promise.resolve([
 { label: "option1", value: "Option 1" },
 { label: <span>Option 2</span>, value: "Option 2" },
])
\`\`\``}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Text } & SharedFilterType<FilterType.Text>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Text }",signature:{properties:[{key:"type",value:{name:"FilterType.Text",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Number } & SharedFilterType<FilterType.Number>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Number }",signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Boolean } & SharedFilterType<FilterType.Boolean>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Boolean }",signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.DateRange } & SharedFilterType<FilterType.DateRange>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.DateRange }",signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.DaysBefore } & SharedFilterType<FilterType.DaysBefore>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.DaysBefore }",signature:{properties:[{key:"type",value:{name:"FilterType.DaysBefore",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Radio } & SharedFilterType<FilterType.Radio>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Radio }",signature:{properties:[{key:"type",value:{name:"FilterType.Radio",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.IP } & SharedFilterType<FilterType.IP>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.IP }",signature:{properties:[{key:"type",value:{name:"FilterType.IP",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]}],required:!1}},{key:"showFilterIcon",value:{name:"boolean",required:!1},description:`It's used for manually setting the display of filtering icon in column title. 
By default, filter icon is displayed when at least one filter is applied to the column,
but this option overrides default behaivour`},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"isUserDefinedWidth",value:{name:"boolean",required:!1}},{key:"renderGroupTitle",value:{name:"signature",type:"function",raw:"(data: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"data"}],return:{name:"ReactNode"}},required:!1}},{key:"resizing",value:{name:"signature",type:"object",raw:`{
  disabled: boolean
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!0}}]},required:!1}},{key:"sortingAttributes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"attribute",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}[]`,required:!1}},{key:"filterAttributes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string,
  name: string,
  filter: {
    type: FilterType,
    getAvailableOptions?: (() => Promise<EnumOption[]>)
  }
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"filter",value:{name:"signature",type:"object",raw:`{
  type: FilterType,
  getAvailableOptions?: (() => Promise<EnumOption[]>)
}`,signature:{properties:[{key:"type",value:{name:"FilterType",required:!0}},{key:"getAvailableOptions",value:{name:"unknown",required:!1}}]},required:!0}}]}}],raw:`{
  label: string,
  name: string,
  filter: {
    type: FilterType,
    getAvailableOptions?: (() => Promise<EnumOption[]>)
  }
}[]`,required:!1}}]}}]}],raw:"TableColumn[]"},description:""},onColumnResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(column: any) => void",signature:{arguments:[{type:{name:"any"},name:"column"}],return:{name:"void"}}},description:"This prop should be memoized"},onManualColumnResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(column: TableRecord) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"column"}],return:{name:"void"}}},description:"This prop should be memoized"},onGroupByChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(dataIndex: string) => void",signature:{arguments:[{type:{name:"string"},name:"dataIndex"}],return:{name:"void"}}},description:""},search:{required:!1,tsType:{name:"boolean"},description:""},header:{required:!1,tsType:{name:"string"},description:""},pagination:{required:!1,tsType:{name:"union",raw:"false | TablePaginationProps",elements:[{name:"literal",value:"false"},{name:"intersection",raw:`PaginationProps & {
  paginationDisabled?: boolean,
  showOnlyTotalSummary?: boolean,
  infiniteScrollPageGetter?: (page: number) => null | TableRecord[] | Promise<null>,
  restoreCurrentWhenDataChange?: boolean,
  isServerPagination?: boolean
}`,elements:[{name:"PaginationProps"},{name:"signature",type:"object",raw:`{
  paginationDisabled?: boolean,
  showOnlyTotalSummary?: boolean,
  infiniteScrollPageGetter?: (page: number) => null | TableRecord[] | Promise<null>,
  restoreCurrentWhenDataChange?: boolean,
  isServerPagination?: boolean
}`,signature:{properties:[{key:"paginationDisabled",value:{name:"boolean",required:!1}},{key:"showOnlyTotalSummary",value:{name:"boolean",required:!1}},{key:"infiniteScrollPageGetter",value:{name:"signature",type:"function",raw:"(page: number) => null | TableRecord[] | Promise<null>",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"union",raw:"null | TableRecord[] | Promise<null>",elements:[{name:"null"},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}}],raw:"TableRecord[]"},{name:"Promise",elements:[{name:"null"}],raw:"Promise<null>"}]}},required:!1}},{key:"restoreCurrentWhenDataChange",value:{name:"boolean",required:!1}},{key:"isServerPagination",value:{name:"boolean",required:!1}}]}}]}]},description:""},showColumnsSelector:{required:!1,tsType:{name:"boolean"},description:""},onCloseColumnsSelector:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onColumnsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(columns: any[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"columns"}],return:{name:"void"}}},description:""},groupBy:{required:!1,tsType:{name:"string"},description:""},customGroupSorter:{required:!1,tsType:{name:"signature",type:"function",raw:"(a: any, b: any) => number",signature:{arguments:[{type:{name:"any"},name:"a"},{type:{name:"any"},name:"b"}],return:{name:"number"}}},description:"Compares group titles"},useAccordion:{required:!1,tsType:{name:"boolean"},description:""},stickyHeader:{required:!1,tsType:{name:"number"},description:""},stickyScrollbarOffset:{required:!1,tsType:{name:"number"},description:""},stickyFooter:{required:!1,tsType:{name:"boolean"},description:""},toolbar:{required:!1,tsType:{name:"union",raw:`| ToolbarWithAllVisibleTabHeaders
| ToolbarWithOnlyOneHiddenTabHeader`,elements:[{name:"intersection",raw:`ToolbarCommonProps & {
  showColumns?: true | ColumnsTabConfig & { hideTabHeader?: false },
  showGrouping?: true | GroupingTabConfig & { hideTabHeader?: false }
}`,elements:[{name:"intersection",raw:`Omit<OriginToolbarProps, 'right'> & {
  right?: (existingElements: ReactNode[]) => ReactNode[],
  showSearch?: boolean,
  collapsibleSearch?: boolean,
  showFilter?: boolean,
  showFilterSidebar?: boolean,
  showSettingsSearch?: boolean
}`,elements:[{name:"Omit",elements:[{name:"OriginToolbarProps"},{name:"literal",value:"'right'"}],raw:"Omit<OriginToolbarProps, 'right'>"},{name:"signature",type:"object",raw:`{
  right?: (existingElements: ReactNode[]) => ReactNode[],
  showSearch?: boolean,
  collapsibleSearch?: boolean,
  showFilter?: boolean,
  showFilterSidebar?: boolean,
  showSettingsSearch?: boolean
}`,signature:{properties:[{key:"right",value:{name:"signature",type:"function",raw:"(existingElements: ReactNode[]) => ReactNode[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},name:"existingElements"}],return:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}},required:!1}},{key:"showSearch",value:{name:"boolean",required:!1}},{key:"collapsibleSearch",value:{name:"boolean",required:!1}},{key:"showFilter",value:{name:"boolean",required:!1}},{key:"showFilterSidebar",value:{name:"boolean",required:!1}},{key:"showSettingsSearch",value:{name:"boolean",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  showColumns?: true | ColumnsTabConfig & { hideTabHeader?: false },
  showGrouping?: true | GroupingTabConfig & { hideTabHeader?: false }
}`,signature:{properties:[{key:"showColumns",value:{name:"union",raw:"true | ColumnsTabConfig & { hideTabHeader?: false }",elements:[{name:"literal",value:"true"},{name:"intersection",raw:"ColumnsTabConfig & { hideTabHeader?: false }",elements:[{name:"intersection",raw:`TabConfigBase & {
  // дополнительные пропы если потребуются
}`,elements:[{name:"union",raw:`boolean | {
  hideTabHeader?: boolean
}`,elements:[{name:"boolean"},{name:"signature",type:"object",raw:`{
  hideTabHeader?: boolean
}`,signature:{properties:[{key:"hideTabHeader",value:{name:"boolean",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  // дополнительные пропы если потребуются
}`,signature:{properties:[]}}]},{name:"signature",type:"object",raw:"{ hideTabHeader?: false }",signature:{properties:[{key:"hideTabHeader",value:{name:"literal",value:"false",required:!1}}]}}]}],required:!1}},{key:"showGrouping",value:{name:"union",raw:"true | GroupingTabConfig & { hideTabHeader?: false }",elements:[{name:"literal",value:"true"},{name:"intersection",raw:"GroupingTabConfig & { hideTabHeader?: false }",elements:[{name:"intersection",raw:`TabConfigBase & {
  // дополнительные пропы если потребуются
}`,elements:[{name:"union",raw:`boolean | {
  hideTabHeader?: boolean
}`,elements:[{name:"boolean"},{name:"signature",type:"object",raw:`{
  hideTabHeader?: boolean
}`,signature:{properties:[{key:"hideTabHeader",value:{name:"boolean",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  // дополнительные пропы если потребуются
}`,signature:{properties:[]}}]},{name:"signature",type:"object",raw:"{ hideTabHeader?: false }",signature:{properties:[{key:"hideTabHeader",value:{name:"literal",value:"false",required:!1}}]}}]}],required:!1}}]}}]},{name:"union",raw:`| (ToolbarCommonProps & {
    showColumns: ColumnsTabConfig & { hideTabHeader: true },
    showGrouping?: never
  })
| (ToolbarCommonProps & {
    showColumns?: never,
    showGrouping: GroupingTabConfig & { hideTabHeader: true }
  })`,elements:[{name:"unknown"},{name:"unknown"}]}]},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchString: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchString"}],return:{name:"void"}}},description:"Search is done from the product side. For example, when using server-side filtering"},onClientSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchString: string, row: TableRecord, index: number) => boolean",signature:{arguments:[{type:{name:"string"},name:"searchString"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"boolean"}}},description:"Custom search using internal state of the component for filtered data"},groupTitleRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"data"}],return:{name:"ReactNode"}}},description:""},resizingMode:{required:!1,tsType:{name:"union",raw:"'max' | 'last' | 'scroll' | DeprecatedManual",elements:[{name:"literal",value:"'max'"},{name:"literal",value:"'last'"},{name:"literal",value:"'scroll'"},{name:"literal",value:"'manual'"}]},description:""},rowSelection:{required:!1,tsType:{name:"intersection",raw:"RowSelectionAntd<TableRecord> & TableRowSelectionAdditionalProps",elements:[{name:"RowSelectionAntd",elements:[{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}}],raw:"RowSelectionAntd<TableRecord>"},{name:"signature",type:"object",raw:`{
  /** Async function returns keys of the rows should be selected. Works only with builtInRowSelection: true */
  getPreselectedRows?: (rows: TableRecord[]) => Promise<string[]>,
  /** Should render "Select all" checkbox and dropdown. Works only with builtInRowSelection: true */
  hasSelectAll?: boolean,
  /** Callback executes on every change of selection. Works only with builtInRowSelection: true */
  processSelection?: (rowSelectionData: TableRowSelectionData) => void,
  /** Flag that enables the built-in functionality of row selection  */
  builtInRowSelection?: boolean
}`,signature:{properties:[{key:"getPreselectedRows",value:{name:"signature",type:"function",raw:"(rows: TableRecord[]) => Promise<string[]>",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}}],raw:"TableRecord[]"},name:"rows"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"Promise<string[]>"}},required:!1},description:"Async function returns keys of the rows should be selected. Works only with builtInRowSelection: true"},{key:"hasSelectAll",value:{name:"boolean",required:!1},description:'Should render "Select all" checkbox and dropdown. Works only with builtInRowSelection: true'},{key:"processSelection",value:{name:"signature",type:"function",raw:"(rowSelectionData: TableRowSelectionData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  selectedRowKeys: string[],
  deselectedRowKeys?: string[],
  isSelectedAll?: boolean
}`,signature:{properties:[{key:"selectedRowKeys",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"deselectedRowKeys",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"isSelectedAll",value:{name:"boolean",required:!1}}]}},name:"rowSelectionData"}],return:{name:"void"}},required:!1},description:"Callback executes on every change of selection. Works only with builtInRowSelection: true"},{key:"builtInRowSelection",value:{name:"boolean",required:!1},description:"Flag that enables the built-in functionality of row selection"}]}}]},description:"Config for controllable row selection"},backgroundPattern:{required:!1,tsType:{name:"literal",value:"'diagonal'"},description:"Background pattern that will be visible on rows with _blendedBackground"},enableSearchHighlighting:{required:!1,tsType:{name:"boolean"},description:""},maxColumnsForAutoResizing:{required:!1,tsType:{name:"number"},description:""},defaultColumnWidth:{required:!1,tsType:{name:"number"},description:""},isDefaultSortDisabled:{required:!1,tsType:{name:"boolean"},description:""},isClientGroupSortingDisabled:{required:!1,tsType:{name:"boolean"},description:""},infiniteScrollEndTableText:{required:!1,tsType:{name:"ReactNode"},description:""},infiniteScrollErrorText:{required:!1,tsType:{name:"ReactNode"},description:""},infiniteScrollRetryText:{required:!1,tsType:{name:"ReactNode"},description:""},loaderProps:{required:!1,tsType:{name:"SpinProps"},description:"Config object for spinner while loading"},useV3TestId:{required:!1,tsType:{name:"boolean"},description:""},useDragDrop:{required:!1,tsType:{name:"boolean"},description:""},onDragStart:{required:!1,tsType:{name:"signature",type:"function",raw:"(rows: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"rows"}],return:{name:"void"}}},description:""},onDragEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(rows: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"rows"}],return:{name:"void"}}},description:""},expandable:{required:!1,tsType:{name:"intersection",raw:"TableProps<T>['expandable'] & { expandColumnName?: string }",elements:[{name:"TableProps['expandable']",raw:"TableProps<T>['expandable']"},{name:"signature",type:"object",raw:"{ expandColumnName?: string }",signature:{properties:[{key:"expandColumnName",value:{name:"string",required:!1}}]}}]},description:""},emptyText:{required:!1,tsType:{name:"ReactNode"},description:""},columnVerticalAlign:{required:!1,tsType:{name:"union",raw:"'top' | 'middle' | 'bottom' | 'inherit'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'inherit'"}]},description:""},rowMode:{required:!1,tsType:{name:"union",raw:"'standard' | 'compact'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'compact'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},isValid:{required:!1,tsType:{name:"boolean"},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(val: ActiveSorting) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  field?: string,
  attribute?: string,
  direction?: SortType,
  columnId?: string,
  columnServerField?: string,
  isDefaultSortDisabled?: boolean,
  customSorter?: CustomSorter
}`,signature:{properties:[{key:"field",value:{name:"string",required:!1}},{key:"attribute",value:{name:"string",required:!1}},{key:"direction",value:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}],required:!1}},{key:"columnId",value:{name:"string",required:!1}},{key:"columnServerField",value:{name:"string",required:!1}},{key:"isDefaultSortDisabled",value:{name:"boolean",required:!1}},{key:"customSorter",value:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}},required:!1}}]}},name:"val"}],return:{name:"void"}}},description:"Call back when sort changed"},showSorterTooltip:{required:!1,tsType:{name:"union",raw:"boolean | TooltipProps",elements:[{name:"boolean"},{name:"TooltipProps"}]},description:""},initialSorting:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  field?: string,
  attribute?: string,
  direction?: SortType,
  columnId?: string,
  columnServerField?: string,
  isDefaultSortDisabled?: boolean,
  customSorter?: CustomSorter
}`,signature:{properties:[{key:"field",value:{name:"string",required:!1}},{key:"attribute",value:{name:"string",required:!1}},{key:"direction",value:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}],required:!1}},{key:"columnId",value:{name:"string",required:!1}},{key:"columnServerField",value:{name:"string",required:!1}},{key:"isDefaultSortDisabled",value:{name:"boolean",required:!1}},{key:"customSorter",value:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}},required:!1}}]}},description:""},externalSorting:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  field?: string,
  attribute?: string,
  direction?: SortType,
  columnId?: string,
  columnServerField?: string,
  isDefaultSortDisabled?: boolean,
  customSorter?: CustomSorter
}`,signature:{properties:[{key:"field",value:{name:"string",required:!1}},{key:"attribute",value:{name:"string",required:!1}},{key:"direction",value:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}],required:!1}},{key:"columnId",value:{name:"string",required:!1}},{key:"columnServerField",value:{name:"string",required:!1}},{key:"isDefaultSortDisabled",value:{name:"boolean",required:!1}},{key:"customSorter",value:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}},required:!1}}]}},description:""},setExternalSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(arg0: ActiveSorting) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  field?: string,
  attribute?: string,
  direction?: SortType,
  columnId?: string,
  columnServerField?: string,
  isDefaultSortDisabled?: boolean,
  customSorter?: CustomSorter
}`,signature:{properties:[{key:"field",value:{name:"string",required:!1}},{key:"attribute",value:{name:"string",required:!1}},{key:"direction",value:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}],required:!1}},{key:"columnId",value:{name:"string",required:!1}},{key:"columnServerField",value:{name:"string",required:!1}},{key:"isDefaultSortDisabled",value:{name:"boolean",required:!1}},{key:"customSorter",value:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}},required:!1}}]}},name:"arg0"}],return:{name:"void"}}},description:""},fullHeight:{required:!1,tsType:{name:"boolean"},description:""},dateFormat:{required:!1,tsType:{name:"string"},description:"Date format for filters"},storageKey:{required:!1,tsType:{name:"string"},description:"Key for localStorage to store different settings - column width, sorting, filters, etc..."},predefinedFilters:{required:!1,tsType:{name:"Array",elements:[{name:"Array[number]",raw:"FilterGroup['items'][number]"}],raw:"UnitedFilter[]"},description:`Filters to set by default. Prop is applied only once, further changes won't change the filters. If you want to
dynamically change filters, use externalFilters.`},externalFilters:{required:!1,tsType:{name:"Array",raw:"FilterGroup['items']"},description:`Replaces existing filters. Sidebar filters should be in the root, but columns filters should be in the group
with id: \`column.\${dataIndex}\`.
@example
\`\`\`ts
[
  { ...sidebarFilter1 },
  { ...sidebarFilter2 },
  {
    id: 'column.someColumnName',
    items: [someColumnFilter]
  }
]
\`\`\``},filterVersion:{required:!1,tsType:{name:"union",raw:"1 | 2",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:`1 - default
2 - add the following operations to v1 filters:
  text filter: Regexp, Empty, Not empty
  number filter: ≥, ≤, Empty, Not empty
  enum filter: Contains (AND), Contains (OR), Doesn't contain, Regexp`},customFilterFunction:{required:!1,tsType:{name:"signature",type:"function",raw:`<T extends TableRecord>(
  rows: T[],
  filters: FilterConfig[],
  renderList: (rows: T[]) => void,
  params: {
    isMatch: (props: FilterIsMatchProps) => boolean,
    localizedFields?: TableColumn[],
    parseDate: ParseDateFunction,
    rowMatchesFilter: (row: T, filter: FilterConfig) => boolean
  }
) => void`,signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"rows"},{type:{name:"Array",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]}],raw:"FilterConfig[]"},name:"filters"},{type:{name:"signature",type:"function",raw:"(rows: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"rows"}],return:{name:"void"}}},name:"renderList"},{type:{name:"signature",type:"object",raw:`{
  isMatch: (props: FilterIsMatchProps) => boolean,
  localizedFields?: TableColumn[],
  parseDate: ParseDateFunction,
  rowMatchesFilter: (row: T, filter: FilterConfig) => boolean
}`,signature:{properties:[{key:"isMatch",value:{name:"signature",type:"function",raw:"(props: FilterIsMatchProps) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  filterName: string, 
  filterValue: any
  fieldValue: any
  condition: FilterOperation
  type: FilterType
}`,signature:{properties:[{key:"filterName",value:{name:"string",required:!0}},{key:"filterValue",value:{name:"any",required:!0}},{key:"fieldValue",value:{name:"any",required:!0}},{key:"condition",value:{name:"FilterOperation",required:!0}},{key:"type",value:{name:"FilterType",required:!0}}]}},name:"props"}],return:{name:"boolean"}},required:!0}},{key:"localizedFields",value:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  ColumnType<TableRecord>,
  'key' | 'sorter' | 'filters' | 'dataIndex'
> & {
  key: React.Key,
  title?: string | ReactElement,
  /* Show Dash in empty cell for column */
  hasEmptyCellDash?: boolean,
  dataIndex?: string,
  columnId?: string,
  /* When the content exceeds the width of the cell, an arrow is drawn, and when clicked, the full content is displayed. It works with custom
   * render also and is not compatible with ellipsis: true. If ellipsis: false it disables expandableText also
   */
  expandableText?: boolean,
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter,
  filteringAvailable?: boolean,
  groupingAvailable?: boolean,
  hideColumnAvailable?: boolean,
  show?: boolean,
  closeDropdownOnSelect?: boolean,
  filters?: ColumnFilter[],
  filterType?: TableFilterType,
  /** 
   * It's used for manually setting the display of filtering icon in column title. 
   * By default, filter icon is displayed when at least one filter is applied to the column,
   * but this option overrides default behaivour 
  */
  showFilterIcon?: boolean,
  width?: number | string,
  isUserDefinedWidth?: boolean,
  renderGroupTitle?: (data: string) => ReactNode,
  resizing?: {
    disabled: boolean
  },
  sortingAttributes?: SortingAttributes,
  filterAttributes?: FilterAttributes
}`,elements:[{name:"Omit",elements:[{name:"ColumnType",elements:[{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}}],raw:"ColumnType<TableRecord>"},{name:"union",raw:"'key' | 'sorter' | 'filters' | 'dataIndex'",elements:[{name:"literal",value:"'key'"},{name:"literal",value:"'sorter'"},{name:"literal",value:"'filters'"},{name:"literal",value:"'dataIndex'"}]}],raw:`Omit<
  ColumnType<TableRecord>,
  'key' | 'sorter' | 'filters' | 'dataIndex'
>`},{name:"signature",type:"object",raw:`{
  key: React.Key,
  title?: string | ReactElement,
  /* Show Dash in empty cell for column */
  hasEmptyCellDash?: boolean,
  dataIndex?: string,
  columnId?: string,
  /* When the content exceeds the width of the cell, an arrow is drawn, and when clicked, the full content is displayed. It works with custom
   * render also and is not compatible with ellipsis: true. If ellipsis: false it disables expandableText also
   */
  expandableText?: boolean,
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter,
  filteringAvailable?: boolean,
  groupingAvailable?: boolean,
  hideColumnAvailable?: boolean,
  show?: boolean,
  closeDropdownOnSelect?: boolean,
  filters?: ColumnFilter[],
  filterType?: TableFilterType,
  /** 
   * It's used for manually setting the display of filtering icon in column title. 
   * By default, filter icon is displayed when at least one filter is applied to the column,
   * but this option overrides default behaivour 
  */
  showFilterIcon?: boolean,
  width?: number | string,
  isUserDefinedWidth?: boolean,
  renderGroupTitle?: (data: string) => ReactNode,
  resizing?: {
    disabled: boolean
  },
  sortingAttributes?: SortingAttributes,
  filterAttributes?: FilterAttributes
}`,signature:{properties:[{key:"key",value:{name:"ReactKey",raw:"React.Key",required:!0}},{key:"title",value:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}],required:!1}},{key:"hasEmptyCellDash",value:{name:"boolean",required:!1}},{key:"dataIndex",value:{name:"string",required:!1}},{key:"columnId",value:{name:"string",required:!1}},{key:"expandableText",value:{name:"boolean",required:!1}},{key:"isSortable",value:{name:"boolean",required:!1}},{key:"allowMultipleFilters",value:{name:"boolean",required:!1}},{key:"sorter",value:{name:"signature",type:"function",raw:"(a: TableRecord, b: TableRecord, isAsc: boolean) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"a"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"b"},{type:{name:"boolean"},name:"isAsc"}],return:{name:"number"}},required:!1}},{key:"customSorter",value:{name:"signature",type:"function",raw:"<T extends TableRecord>(rows: T[], propName: keyof T, isAsc: boolean, attribute: string) => T[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"rows"},{type:{name:"T"},name:"propName"},{type:{name:"boolean"},name:"isAsc"},{type:{name:"string"},name:"attribute"}],return:{name:"Array",elements:[{name:"T"}],raw:"T[]"}},required:!1},description:"@deprecated Use **sorter** for custom column sorting"},{key:"filteringAvailable",value:{name:"boolean",required:!1}},{key:"groupingAvailable",value:{name:"boolean",required:!1}},{key:"hideColumnAvailable",value:{name:"boolean",required:!1}},{key:"show",value:{name:"boolean",required:!1}},{key:"closeDropdownOnSelect",value:{name:"boolean",required:!1}},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  localizationKey?: string,
  name: string,
  elementBefore?: ReactNode,
  filter: FilterFunction
}`,signature:{properties:[{key:"localizationKey",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"elementBefore",value:{name:"ReactNode",required:!1}},{key:"filter",value:{name:"signature",type:"function",raw:"(record: TableRecord) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"record"}],return:{name:"boolean"}},required:!0}}]}}],raw:"ColumnFilter[]",required:!1}},{key:"filterType",value:{name:"union",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
} & SharedFilterType<FilterType.DateTime>
| EnumFilterType
| { type: FilterType.Text } & SharedFilterType<FilterType.Text>
| { type: FilterType.Number } & SharedFilterType<FilterType.Number>
| { type: FilterType.Boolean } & SharedFilterType<FilterType.Boolean>
| { type: FilterType.DateRange } & SharedFilterType<FilterType.DateRange>
| { type: FilterType.DaysBefore } & SharedFilterType<FilterType.DaysBefore>
| { type: FilterType.Radio } & SharedFilterType<FilterType.Radio>
| { type: FilterType.IP } & SharedFilterType<FilterType.IP>`,elements:[{name:"intersection",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
} & SharedFilterType<FilterType.DateTime>`,elements:[{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  /** Show only dates without time */
  dateOnly?: boolean,
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"dateOnly",value:{name:"boolean",required:!1},description:"Show only dates without time"}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:`{
  type: FilterType.Enum,
  /**
   * @deprecated Use **getAvailableOptions** instead
   */
  getAvailableValues?: () => Promise<LegacyEnumOption[]>,
  /**
   * @returns Array of options
   *
   * @example
   * \`\`\`ts
   * getAvailableOptions: () => Promise.resolve([
   *  { label: "option1", value: "Option 1" },
   *  { label: <span>Option 2</span>, value: "Option 2" },
   * ])
   * \`\`\`
   */
  getAvailableOptions?: () => Promise<EnumOption[]>
} & SharedFilterType<FilterType.Enum>`,elements:[{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  /**
   * @deprecated Use **getAvailableOptions** instead
   */
  getAvailableValues?: () => Promise<LegacyEnumOption[]>,
  /**
   * @returns Array of options
   *
   * @example
   * \`\`\`ts
   * getAvailableOptions: () => Promise.resolve([
   *  { label: "option1", value: "Option 1" },
   *  { label: <span>Option 2</span>, value: "Option 2" },
   * ])
   * \`\`\`
   */
  getAvailableOptions?: () => Promise<EnumOption[]>
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"getAvailableValues",value:{name:"signature",type:"function",raw:"() => Promise<LegacyEnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"LegacyEnumOption[]"}],raw:"Promise<LegacyEnumOption[]>"}},required:!1},description:"@deprecated Use **getAvailableOptions** instead"},{key:"getAvailableOptions",value:{name:"signature",type:"function",raw:"() => Promise<EnumOption[]>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string | number | boolean,
  label?: ReactNode
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!0}},{key:"label",value:{name:"ReactNode",required:!1}}]}}],raw:"EnumOption[]"}],raw:"Promise<EnumOption[]>"}},required:!1},description:`@returns Array of options

@example
\`\`\`ts
getAvailableOptions: () => Promise.resolve([
 { label: "option1", value: "Option 1" },
 { label: <span>Option 2</span>, value: "Option 2" },
])
\`\`\``}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Text } & SharedFilterType<FilterType.Text>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Text }",signature:{properties:[{key:"type",value:{name:"FilterType.Text",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Number } & SharedFilterType<FilterType.Number>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Number }",signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Boolean } & SharedFilterType<FilterType.Boolean>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Boolean }",signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.DateRange } & SharedFilterType<FilterType.DateRange>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.DateRange }",signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.DaysBefore } & SharedFilterType<FilterType.DaysBefore>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.DaysBefore }",signature:{properties:[{key:"type",value:{name:"FilterType.DaysBefore",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.Radio } & SharedFilterType<FilterType.Radio>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.Radio }",signature:{properties:[{key:"type",value:{name:"FilterType.Radio",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]},{name:"intersection",raw:"{ type: FilterType.IP } & SharedFilterType<FilterType.IP>",elements:[{name:"signature",type:"object",raw:"{ type: FilterType.IP }",signature:{properties:[{key:"type",value:{name:"FilterType.IP",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * \`\`\`ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * \`\`\`
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}`,signature:{properties:[{key:"operations",value:{name:"unknown",required:!1},description:`Array of filter operations for chosen filter type. Overrides default filter operations.

@example
\`\`\`ts
operations: [
 { operation: FilterOperation.eq, label: "Equal" },
 { operation: FilterOperation.neq, label: "Not equal" },
]
\`\`\``},{key:"logicOperation",value:{name:"union",raw:"'AND' | 'OR'",elements:[{name:"literal",value:"'AND'"},{name:"literal",value:"'OR'"}],required:!1},description:"Logic operation for multiple filters"}]}}]}],required:!1}},{key:"showFilterIcon",value:{name:"boolean",required:!1},description:`It's used for manually setting the display of filtering icon in column title. 
By default, filter icon is displayed when at least one filter is applied to the column,
but this option overrides default behaivour`},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"isUserDefinedWidth",value:{name:"boolean",required:!1}},{key:"renderGroupTitle",value:{name:"signature",type:"function",raw:"(data: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"data"}],return:{name:"ReactNode"}},required:!1}},{key:"resizing",value:{name:"signature",type:"object",raw:`{
  disabled: boolean
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!0}}]},required:!1}},{key:"sortingAttributes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"attribute",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}[]`,required:!1}},{key:"filterAttributes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string,
  name: string,
  filter: {
    type: FilterType,
    getAvailableOptions?: (() => Promise<EnumOption[]>)
  }
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"filter",value:{name:"signature",type:"object",raw:`{
  type: FilterType,
  getAvailableOptions?: (() => Promise<EnumOption[]>)
}`,signature:{properties:[{key:"type",value:{name:"FilterType",required:!0}},{key:"getAvailableOptions",value:{name:"unknown",required:!1}}]},required:!0}}]}}],raw:`{
  label: string,
  name: string,
  filter: {
    type: FilterType,
    getAvailableOptions?: (() => Promise<EnumOption[]>)
  }
}[]`,required:!1}}]}}]}],raw:"TableColumn[]",required:!1}},{key:"parseDate",value:{name:"signature",type:"function",raw:"(date: DateInputValue | string | number | undefined) => number",signature:{arguments:[{type:{name:"union",raw:"DateInputValue | string | number | undefined",elements:[{name:"DateInputValue"},{name:"string"},{name:"number"},{name:"undefined"}]},name:"date"}],return:{name:"number"}},required:!0}},{key:"rowMatchesFilter",value:{name:"signature",type:"function",raw:"(row: T, filter: FilterConfig) => boolean",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]},name:"filter"}],return:{name:"boolean"}},required:!0}}]}},name:"params"}],return:{name:"void"}}},description:"Function for custom filtering"},onFiltersChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(val: UnitedFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Array[number]",raw:"FilterGroup['items'][number]"}],raw:"UnitedFilter[]"},name:"val"}],return:{name:"void"}}},description:"Callback for any filters change"},useFiltersSidebar:{required:!1,tsType:{name:"boolean"},description:"Activate sidebar filters"},sidebarFilters:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]}],raw:"FilterConfig[]"},description:"@deprecated Use externalFilters instead. Prop was used as setter of controlled sidebar filters"},isServerFiltering:{required:!1,tsType:{name:"boolean"},description:"Flag indicates that server filtering is used, client filtering is disabled"},onCloseFilterSidebar:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Call back when sidebar close"},showFilterSidebar:{required:!1,tsType:{name:"boolean"},description:"Whether to open filters sidebar, the prop is used in toolbar integration"},storageMergeFiltersMode:{required:!1,tsType:{name:"union",raw:"'merge' | 'predefined-overrides'",elements:[{name:"literal",value:"'merge'"},{name:"literal",value:"'predefined-overrides'"}]},description:`Defines which source of filters is the priority.
-merge: merge of localStorage and predefinedFilters
-predefined-overrides: predefinedFilters overrides localStorage filters`},defaultFiltersConfig:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]}],raw:"FilterConfig[]"},description:"@deprecated Use predefinedFilters instead. Prop was used as setter of default sidebar filters"},defaultSidebarFilters:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]}],raw:"FilterConfig[]"},description:"@deprecated Use predefinedFilters instead. Prop was used as setter of default sidebar filters"},appliedFilters:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Column name that has filters */
  [fieldName: string]: {
    /** Filter name set in columns[N].filters or initialFilters prop (for ex. 'Greater than 2') */
    [filterName: string]: (arg0: any) => boolean
  }
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  /** Filter name set in columns[N].filters or initialFilters prop (for ex. 'Greater than 2') */
  [filterName: string]: (arg0: any) => boolean
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"function",raw:"(arg0: any) => boolean",signature:{arguments:[{type:{name:"any"},name:"arg0"}],return:{name:"boolean"}},required:!0}}]},required:!0}}]}},description:"@deprecated Use externalFilters instead. Prop was used as setter of external column filters."},initialFilters:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Column name that has filters */
  [fieldName: string]: {
    /** Filter name set in columns[N].filters or initialFilters prop (for ex. 'Greater than 2') */
    [filterName: string]: (arg0: any) => boolean
  }
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  /** Filter name set in columns[N].filters or initialFilters prop (for ex. 'Greater than 2') */
  [filterName: string]: (arg0: any) => boolean
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"function",raw:"(arg0: any) => boolean",signature:{arguments:[{type:{name:"any"},name:"arg0"}],return:{name:"boolean"}},required:!0}}]},required:!0}}]}},description:"@deprecated Use predefinedFilters instead. Prop was used as setter of default column filters"},onSidebarFiltersChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(filters: FilterConfig[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]}],raw:"FilterConfig[]"},name:"filters"}],return:{name:"void"}}},description:"@deprecated Use onFiltersChange instead. Callback when sidebar filters are applied"},onDropdownFiltersChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(filters: DropdownOrSidebarFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"ColumnFilter | FilterConfig",elements:[{name:"signature",type:"object",raw:`{
  localizationKey?: string,
  name: string,
  elementBefore?: ReactNode,
  filter: FilterFunction
}`,signature:{properties:[{key:"localizationKey",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"elementBefore",value:{name:"ReactNode",required:!1}},{key:"filter",value:{name:"signature",type:"function",raw:"(record: TableRecord) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: any,
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}},{key:"_disabled",value:{name:"boolean",required:!1}},{key:"_disabledHint",value:{name:"string",required:!1}},{key:"_selectionDisabled",value:{name:"boolean",required:!1}},{key:"_blendedBackground",value:{name:"boolean",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]",required:!1}}]}},name:"record"}],return:{name:"boolean"}},required:!0}}]}},{name:"union",raw:`| TextFilter
| NumberFilter
| BooleanFilter
| EnumFilter
| DateRangeFilter
| DateTimeFilter`,elements:[{name:"intersection",raw:`BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"FilterType.Text | FilterType.Radio",elements:[{name:"FilterType.Text"},{name:"FilterType.Radio"}],required:!0}},{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Number",required:!0}},{key:"exact",value:{name:"boolean",required:!1}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Boolean,
  value: boolean | null
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Boolean",required:!0}},{key:"value",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.Enum,
  value: any
}`,signature:{properties:[{key:"type",value:{name:"FilterType.Enum",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateRange",required:!0}},{key:"value",value:{name:"signature",type:"object",raw:"{ from: DateRangeFilterValue, to: DateRangeFilterValue }",signature:{properties:[{key:"from",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}},{key:"to",value:{name:"union",raw:"OldDateInputValue | number",elements:[{name:"DateInputValue"},{name:"number"}],required:!0}}]},required:!0}}]}}]},{name:"intersection",raw:`BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"condition",value:{name:"union",raw:"Condition | FilterOperation.custom",elements:[{name:"union",raw:"EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations",elements:[{name:"union",raw:"FilterOperation.eq | FilterOperation.neq",elements:[{name:"FilterOperation.eq"},{name:"FilterOperation.neq"}]},{name:"union",raw:"FilterOperation.cont | FilterOperation.ncont",elements:[{name:"FilterOperation.cont"},{name:"FilterOperation.ncont"}]},{name:"FilterOperation.regexp"},{name:"union",raw:"FilterOperation.empty | FilterOperation.nempty",elements:[{name:"FilterOperation.empty"},{name:"FilterOperation.nempty"}]}]},{name:"FilterOperation.custom"}],required:!0}},{key:"attribute",value:{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!1}},{key:"isUserDefined",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}`,signature:{properties:[{key:"type",value:{name:"FilterType.DateTime",required:!0}},{key:"value",value:{name:"union",raw:"number | DateTimeRange | null",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ from: number | null, to: number | null }",signature:{properties:[{key:"from",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}}]}}]}]}]}],raw:"DropdownOrSidebarFilter[]"},name:"filters"}],return:{name:"void"}}},description:"@deprecated Use onFiltersChange instead. Call back when dropdown filters changed"},onFilterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(val: ActiveFilter) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /** Column name that has filters */
  [fieldName: string]: {
    /** Filter name set in columns[N].filters or initialFilters prop (for ex. 'Greater than 2') */
    [filterName: string]: (arg0: any) => boolean
  }
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  /** Filter name set in columns[N].filters or initialFilters prop (for ex. 'Greater than 2') */
  [filterName: string]: (arg0: any) => boolean
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"function",raw:"(arg0: any) => boolean",signature:{arguments:[{type:{name:"any"},name:"arg0"}],return:{name:"boolean"}},required:!0}}]},required:!0}}]}},name:"val"}],return:{name:"void"}}},description:"@deprecated Use onFiltersChange instead. Call back when filters from dropdown or from sidebar changed"},filterItems:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  items?: TableInternalFilterItemsTagProps[],
  clearLinkText?: string,
  onClear?: () => void
}`,signature:{properties:[{key:"items",value:{name:"Array",elements:[{name:"intersection",raw:`Pick<ChipProps, 'counter' | 'onClose' | 'testId'> & {
  text?: ChipProps['label'],
  key?: string
}`,elements:[{name:"Pick",elements:[{name:"ChipProps"},{name:"union",raw:"'counter' | 'onClose' | 'testId'",elements:[{name:"literal",value:"'counter'"},{name:"literal",value:"'onClose'"},{name:"literal",value:"'testId'"}]}],raw:"Pick<ChipProps, 'counter' | 'onClose' | 'testId'>"},{name:"signature",type:"object",raw:`{
  text?: ChipProps['label'],
  key?: string
}`,signature:{properties:[{key:"text",value:{name:"ChipProps['label']",raw:"ChipProps['label']",required:!1}},{key:"key",value:{name:"string",required:!1}}]}}]}],raw:"TableInternalFilterItemsTagProps[]",required:!1}},{key:"clearLinkText",value:{name:"string",required:!1}},{key:"onClear",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:"@deprecated FilterItems set by FilterApi inside table. An array of filters to show"},saveFilters:{required:!1,tsType:{name:"IFiltersSavingSettings"},description:"@deprecated Use storageKey instead. Object with key name of saved filters: saveFilters.storageKey"},__EXPERIMENTAL__VIRTUAL:{required:!1,tsType:{name:"boolean"},description:"Experimental flag to enable virtualization. Not ready to use in production"}}};const jh=Ts(Ua,Lb);Ts(Ua,[Ql]);export{x as F,K as T,I as a,If as b,Ig as g,jh as t};
