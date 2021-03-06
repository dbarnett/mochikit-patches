if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.__export__)=="undefined"){
MochiKit.__export__=true;
}
if(typeof (MochiKit.Base)=="undefined"){
MochiKit.Base={};
}
MochiKit.Base._module=function(_1,_2,_3){
if(!(_1 in MochiKit)){
MochiKit[_1]={};
}
var _4=MochiKit[_1];
_4.NAME="MochiKit."+_1;
_4.VERSION=_2;
_4.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
_4.toString=function(){
return this.__repr__();
};
for(var i=0;i<_3.length;i++){
if(!(_3[i] in MochiKit)){
throw "MochiKit."+_1+" depends on MochiKit."+_3[i]+"!";
}
}
};
MochiKit.Base._module("Base","1.5",[]);
MochiKit.Base.update=function(_6,_7){
if(_6===null||_6===undefined){
_6={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
_6[k]=o[k];
}
}
}
return _6;
};
MochiKit.Base.update(MochiKit.Base,{camelize:function(_b){
var _c=_b.split("-");
var cc=_c[0];
for(var i=1;i<_c.length;i++){
cc+=_c[i].charAt(0).toUpperCase()+_c[i].substring(1);
}
return cc;
},counter:function(n){
if(arguments.length===0){
n=1;
}
return function(){
return n++;
};
},clone:function(obj){
var me=arguments.callee;
if(arguments.length==1){
me.prototype=obj;
return new me();
}
},_flattenArray:function(res,lst){
for(var i=0;i<lst.length;i++){
var o=lst[i];
if(o instanceof Array){
arguments.callee(res,o);
}else{
res.push(o);
}
}
return res;
},flattenArray:function(lst){
return MochiKit.Base._flattenArray([],lst);
},flattenArguments:function(lst){
var res=[];
var m=MochiKit.Base;
var _1a=m.extend(null,arguments);
while(_1a.length){
var o=_1a.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
for(var i=o.length-1;i>=0;i--){
_1a.unshift(o[i]);
}
}else{
res.push(o);
}
}
return res;
},extend:function(_1d,obj,_1f){
if(!_1f){
_1f=0;
}
if(obj){
var l=obj.length;
if(typeof (l)!="number"){
if(typeof (MochiKit.Iter)!="undefined"){
obj=MochiKit.Iter.list(obj);
l=obj.length;
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(!_1d){
_1d=[];
}
for(var i=_1f;i<l;i++){
_1d.push(obj[i]);
}
}
return _1d;
},updatetree:function(_22,obj){
if(_22===null||_22===undefined){
_22={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
var v=o[k];
if(typeof (_22[k])=="object"&&typeof (v)=="object"){
arguments.callee(_22[k],v);
}else{
_22[k]=v;
}
}
}
}
return _22;
},setdefault:function(_28,obj){
if(_28===null||_28===undefined){
_28={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
for(var k in o){
if(!(k in _28)){
_28[k]=o[k];
}
}
}
return _28;
},keys:function(obj){
var _2e=[];
for(var _2f in obj){
_2e.push(_2f);
}
return _2e;
},values:function(obj){
var _31=[];
for(var _32 in obj){
_31.push(obj[_32]);
}
return _31;
},items:function(obj){
var _34=[];
var e;
for(var _36 in obj){
var v;
try{
v=obj[_36];
}
catch(e){
continue;
}
_34.push([_36,v]);
}
return _34;
},_newNamedError:function(_38,_39,_3a){
_3a.prototype=new MochiKit.Base.NamedError(_38.NAME+"."+_39);
_38[_39]=_3a;
},operator:{truth:function(a){
return !!a;
},lognot:function(a){
return !a;
},identity:function(a){
return a;
},not:function(a){
return ~a;
},neg:function(a){
return -a;
},add:function(a,b){
return a+b;
},sub:function(a,b){
return a-b;
},div:function(a,b){
return a/b;
},mod:function(a,b){
return a%b;
},mul:function(a,b){
return a*b;
},and:function(a,b){
return a&b;
},or:function(a,b){
return a|b;
},xor:function(a,b){
return a^b;
},lshift:function(a,b){
return a<<b;
},rshift:function(a,b){
return a>>b;
},zrshift:function(a,b){
return a>>>b;
},eq:function(a,b){
return a==b;
},ne:function(a,b){
return a!=b;
},gt:function(a,b){
return a>b;
},ge:function(a,b){
return a>=b;
},lt:function(a,b){
return a<b;
},le:function(a,b){
return a<=b;
},seq:function(a,b){
return a===b;
},sne:function(a,b){
return a!==b;
},ceq:function(a,b){
return MochiKit.Base.compare(a,b)===0;
},cne:function(a,b){
return MochiKit.Base.compare(a,b)!==0;
},cgt:function(a,b){
return MochiKit.Base.compare(a,b)==1;
},cge:function(a,b){
return MochiKit.Base.compare(a,b)!=-1;
},clt:function(a,b){
return MochiKit.Base.compare(a,b)==-1;
},cle:function(a,b){
return MochiKit.Base.compare(a,b)!=1;
},logand:function(a,b){
return a&&b;
},logor:function(a,b){
return a||b;
},contains:function(a,b){
return b in a;
}},forwardCall:function(_78){
return function(){
return this[_78].apply(this,arguments);
};
},itemgetter:function(_79){
return function(arg){
return arg[_79];
};
},typeMatcher:function(){
var _7b={};
for(var i=0;i<arguments.length;i++){
var typ=arguments[i];
_7b[typ]=typ;
}
return function(){
for(var i=0;i<arguments.length;i++){
if(!(typeof (arguments[i]) in _7b)){
return false;
}
}
return true;
};
},isNull:function(){
for(var i=0;i<arguments.length;i++){
if(arguments[i]!==null){
return false;
}
}
return true;
},isUndefinedOrNull:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(!(typeof (o)=="undefined"||o===null)){
return false;
}
}
return true;
},isEmpty:function(obj){
return !MochiKit.Base.isNotEmpty.apply(this,arguments);
},isNotEmpty:function(obj){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(!(o&&o.length)){
return false;
}
}
return true;
},isArrayLike:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
var typ=typeof (o);
if((typ!="object"&&!(typ=="function"&&typeof (o.item)=="function"))||o===null||typeof (o.length)!="number"||o.nodeType===3||o.nodeType===4){
return false;
}
}
return true;
},isDateLike:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="object"||o===null||typeof (o.getTime)!="function"){
return false;
}
}
return true;
},xmap:function(fn){
if(fn===null){
return MochiKit.Base.extend(null,arguments,1);
}
var _8c=[];
for(var i=1;i<arguments.length;i++){
_8c.push(fn(arguments[i]));
}
return _8c;
},map:function(fn,lst){
var m=MochiKit.Base;
var itr=MochiKit.Iter;
var _92=m.isArrayLike;
if(arguments.length<=2){
if(!_92(lst)){
if(itr){
lst=itr.list(lst);
if(fn===null){
return lst;
}
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(fn===null){
return m.extend(null,lst);
}
var _93=[];
for(var i=0;i<lst.length;i++){
_93.push(fn(lst[i]));
}
return _93;
}else{
if(fn===null){
fn=Array;
}
var _95=null;
for(i=1;i<arguments.length;i++){
if(!_92(arguments[i])){
if(itr){
return itr.list(itr.imap.apply(null,arguments));
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
var l=arguments[i].length;
if(_95===null||_95>l){
_95=l;
}
}
_93=[];
for(i=0;i<_95;i++){
var _97=[];
for(var j=1;j<arguments.length;j++){
_97.push(arguments[j][i]);
}
_93.push(fn.apply(this,_97));
}
return _93;
}
},xfilter:function(fn){
var _9a=[];
if(fn===null){
fn=MochiKit.Base.operator.truth;
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(fn(o)){
_9a.push(o);
}
}
return _9a;
},filter:function(fn,lst,_9f){
var _a0=[];
var m=MochiKit.Base;
if(!m.isArrayLike(lst)){
if(MochiKit.Iter){
lst=MochiKit.Iter.list(lst);
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(fn===null){
fn=m.operator.truth;
}
if(typeof (Array.prototype.filter)=="function"){
return Array.prototype.filter.call(lst,fn,_9f);
}else{
if(typeof (_9f)=="undefined"||_9f===null){
for(var i=0;i<lst.length;i++){
var o=lst[i];
if(fn(o)){
_a0.push(o);
}
}
}else{
for(i=0;i<lst.length;i++){
o=lst[i];
if(fn.call(_9f,o)){
_a0.push(o);
}
}
}
}
return _a0;
},_wrapDumbFunction:function(_a4){
return function(){
switch(arguments.length){
case 0:
return _a4();
case 1:
return _a4(arguments[0]);
case 2:
return _a4(arguments[0],arguments[1]);
case 3:
return _a4(arguments[0],arguments[1],arguments[2]);
}
var _a5=[];
for(var i=0;i<arguments.length;i++){
_a5.push("arguments["+i+"]");
}
return eval("(func("+_a5.join(",")+"))");
};
},methodcaller:function(_a7){
var _a8=MochiKit.Base.extend(null,arguments,1);
if(typeof (_a7)=="function"){
return function(obj){
return _a7.apply(obj,_a8);
};
}else{
return function(obj){
return obj[_a7].apply(obj,_a8);
};
}
},method:function(_ab,_ac){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([_ac,_ab],arguments,2));
},compose:function(f1,f2){
var _b0=[];
var m=MochiKit.Base;
if(arguments.length===0){
throw new TypeError("compose() requires at least one argument");
}
for(var i=0;i<arguments.length;i++){
var fn=arguments[i];
if(typeof (fn)!="function"){
throw new TypeError(m.repr(fn)+" is not a function");
}
_b0.push(fn);
}
return function(){
var _b4=arguments;
for(var i=_b0.length-1;i>=0;i--){
_b4=[_b0[i].apply(this,_b4)];
}
return _b4[0];
};
},bind:function(_b6,_b7){
if(typeof (_b6)=="string"){
_b6=_b7[_b6];
}
var _b8=_b6.im_func;
var _b9=_b6.im_preargs;
var _ba=_b6.im_self;
var m=MochiKit.Base;
if(typeof (_b6)=="function"&&typeof (_b6.apply)=="undefined"){
_b6=m._wrapDumbFunction(_b6);
}
if(typeof (_b8)!="function"){
_b8=_b6;
}
if(typeof (_b7)!="undefined"){
_ba=_b7;
}
if(typeof (_b9)=="undefined"){
_b9=[];
}else{
_b9=_b9.slice();
}
m.extend(_b9,arguments,2);
var _bc=function(){
var _bd=arguments;
var me=arguments.callee;
if(me.im_preargs.length>0){
_bd=m.concat(me.im_preargs,_bd);
}
var _bf=me.im_self;
if(!_bf){
_bf=this;
}
return me.im_func.apply(_bf,_bd);
};
_bc.im_self=_ba;
_bc.im_func=_b8;
_bc.im_preargs=_b9;
return _bc;
},bindLate:function(_c0,_c1){
var m=MochiKit.Base;
if(typeof (_c0)!="string"){
return m.bind.apply(this,arguments);
}
var _c3=m.extend([],arguments,2);
var _c4=function(){
var _c5=arguments;
var me=arguments.callee;
if(me.im_preargs.length>0){
_c5=m.concat(me.im_preargs,_c5);
}
var _c7=me.im_self;
if(!_c7){
_c7=this;
}
return _c7[me.im_func].apply(_c7,_c5);
};
_c4.im_self=_c1;
_c4.im_func=_c0;
_c4.im_preargs=_c3;
return _c4;
},bindMethods:function(_c8){
var _c9=MochiKit.Base.bind;
for(var k in _c8){
var _cb=_c8[k];
if(typeof (_cb)=="function"){
_c8[k]=_c9(_cb,_c8);
}
}
},registerComparator:function(_cc,_cd,_ce,_cf){
MochiKit.Base.comparatorRegistry.register(_cc,_cd,_ce,_cf);
},_primitives:{"boolean":true,"string":true,"number":true},compare:function(a,b){
if(a==b){
return 0;
}
var _d2=(typeof (a)=="undefined"||a===null);
var _d3=(typeof (b)=="undefined"||b===null);
if(_d2&&_d3){
return 0;
}else{
if(_d2){
return -1;
}else{
if(_d3){
return 1;
}
}
}
var m=MochiKit.Base;
var _d5=m._primitives;
if(!(typeof (a) in _d5&&typeof (b) in _d5)){
try{
return m.comparatorRegistry.match(a,b);
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
}
if(a<b){
return -1;
}else{
if(a>b){
return 1;
}
}
var _d6=m.repr;
throw new TypeError(_d6(a)+" and "+_d6(b)+" can not be compared");
},compareDateLike:function(a,b){
return MochiKit.Base.compare(a.getTime(),b.getTime());
},compareArrayLike:function(a,b){
var _db=MochiKit.Base.compare;
var _dc=a.length;
var _dd=0;
if(_dc>b.length){
_dd=1;
_dc=b.length;
}else{
if(_dc<b.length){
_dd=-1;
}
}
for(var i=0;i<_dc;i++){
var cmp=_db(a[i],b[i]);
if(cmp){
return cmp;
}
}
return _dd;
},registerRepr:function(_e0,_e1,_e2,_e3){
MochiKit.Base.reprRegistry.register(_e0,_e1,_e2,_e3);
},repr:function(o){
if(typeof (o)=="undefined"){
return "undefined";
}else{
if(o===null){
return "null";
}
}
try{
if(typeof (o.__repr__)=="function"){
return o.__repr__();
}else{
if(typeof (o.repr)=="function"&&o.repr!=arguments.callee){
return o.repr();
}
}
return MochiKit.Base.reprRegistry.match(o);
}
catch(e){
if(typeof (o.NAME)=="string"&&(o.toString==Function.prototype.toString||o.toString==Object.prototype.toString)){
return o.NAME;
}
}
try{
var _e5=(o+"");
}
catch(e){
return "["+typeof (o)+"]";
}
if(typeof (o)=="function"){
_e5=_e5.replace(/^\s+/,"").replace(/\s+/g," ");
_e5=_e5.replace(/,(\S)/,", $1");
var idx=_e5.indexOf("{");
if(idx!=-1){
_e5=_e5.substr(0,idx)+"{...}";
}
}
return _e5;
},reprArrayLike:function(o){
var m=MochiKit.Base;
return "["+m.map(m.repr,o).join(", ")+"]";
},reprString:function(o){
return ("\""+o.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\v]/g,"\\v").replace(/[\r]/g,"\\r");
},reprNumber:function(o){
return o+"";
},registerJSON:function(_eb,_ec,_ed,_ee){
MochiKit.Base.jsonRegistry.register(_eb,_ec,_ed,_ee);
},evalJSON:function(){
return eval("("+MochiKit.Base._filterJSON(arguments[0])+")");
},_filterJSON:function(s){
var m=s.match(/^\s*\/\*(.*)\*\/\s*$/);
if(m){
return m[1];
}
return s;
},serializeJSON:function(o){
var _f2=typeof (o);
if(_f2=="number"||_f2=="boolean"){
return o+"";
}else{
if(o===null){
return "null";
}else{
if(_f2=="string"){
var res="";
for(var i=0;i<o.length;i++){
var c=o.charAt(i);
if(c=="\""){
res+="\\\"";
}else{
if(c=="\\"){
res+="\\\\";
}else{
if(c=="\b"){
res+="\\b";
}else{
if(c=="\f"){
res+="\\f";
}else{
if(c=="\n"){
res+="\\n";
}else{
if(c=="\r"){
res+="\\r";
}else{
if(c=="\t"){
res+="\\t";
}else{
if(o.charCodeAt(i)<=31){
var hex=o.charCodeAt(i).toString(16);
if(hex.length<2){
hex="0"+hex;
}
res+="\\u00"+hex.toUpperCase();
}else{
res+=c;
}
}
}
}
}
}
}
}
}
return "\""+res+"\"";
}
}
}
var me=arguments.callee;
var _f8;
if(typeof (o.__json__)=="function"){
_f8=o.__json__();
if(o!==_f8){
return me(_f8);
}
}
if(typeof (o.json)=="function"){
_f8=o.json();
if(o!==_f8){
return me(_f8);
}
}
if(_f2!="function"&&typeof (o.length)=="number"){
var res=[];
for(var i=0;i<o.length;i++){
var val=me(o[i]);
if(typeof (val)!="string"){
continue;
}
res.push(val);
}
return "["+res.join(", ")+"]";
}
var m=MochiKit.Base;
try{
_f8=m.jsonRegistry.match(o);
if(o!==_f8){
return me(_f8);
}
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
if(_f2=="undefined"){
throw new TypeError("undefined can not be serialized as JSON");
}
if(_f2=="function"){
return null;
}
res=[];
for(var k in o){
var _fc;
if(typeof (k)=="number"){
_fc="\""+k+"\"";
}else{
if(typeof (k)=="string"){
_fc=me(k);
}else{
continue;
}
}
val=me(o[k]);
if(typeof (val)!="string"){
continue;
}
res.push(_fc+":"+val);
}
return "{"+res.join(", ")+"}";
},objEqual:function(a,b){
return (MochiKit.Base.compare(a,b)===0);
},arrayEqual:function(_ff,arr){
if(_ff.length!=arr.length){
return false;
}
return (MochiKit.Base.compare(_ff,arr)===0);
},concat:function(){
var rval=[];
var _102=MochiKit.Base.extend;
for(var i=0;i<arguments.length;i++){
_102(rval,arguments[i]);
}
return rval;
},keyComparator:function(key){
var m=MochiKit.Base;
var _106=m.compare;
if(arguments.length==1){
return function(a,b){
return _106(a[key],b[key]);
};
}
var _109=m.extend(null,arguments);
return function(a,b){
var rval=0;
for(var i=0;(rval===0)&&(i<_109.length);i++){
var key=_109[i];
rval=_106(a[key],b[key]);
}
return rval;
};
},reverseKeyComparator:function(key){
var _110=MochiKit.Base.keyComparator.apply(this,arguments);
return function(a,b){
return _110(b,a);
};
},partial:function(func){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([func,undefined],arguments,1));
},listMinMax:function(_115,lst){
if(lst.length===0){
return null;
}
var cur=lst[0];
var _118=MochiKit.Base.compare;
for(var i=1;i<lst.length;i++){
var o=lst[i];
if(_118(o,cur)==_115){
cur=o;
}
}
return cur;
},objMax:function(){
return MochiKit.Base.listMinMax(1,arguments);
},objMin:function(){
return MochiKit.Base.listMinMax(-1,arguments);
},findIdentical:function(lst,_11c,_11d,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_11d)=="undefined"||_11d===null){
_11d=0;
}
for(var i=_11d;i<end;i++){
if(lst[i]===_11c){
return i;
}
}
return -1;
},mean:function(){
var sum=0;
var m=MochiKit.Base;
var args=m.extend(null,arguments);
var _123=args.length;
while(args.length){
var o=args.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
_123+=o.length-1;
for(var i=o.length-1;i>=0;i--){
sum+=o[i];
}
}else{
sum+=o;
}
}
if(_123<=0){
throw new TypeError("mean() requires at least one argument");
}
return sum/_123;
},median:function(){
var data=MochiKit.Base.flattenArguments(arguments);
if(data.length===0){
throw new TypeError("median() requires at least one argument");
}
data.sort(compare);
if(data.length%2==0){
var _127=data.length/2;
return (data[_127]+data[_127-1])/2;
}else{
return data[(data.length-1)/2];
}
},findValue:function(lst,_129,_12a,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_12a)=="undefined"||_12a===null){
_12a=0;
}
var cmp=MochiKit.Base.compare;
for(var i=_12a;i<end;i++){
if(cmp(lst[i],_129)===0){
return i;
}
}
return -1;
},nodeWalk:function(node,_12f){
var _130=[node];
var _131=MochiKit.Base.extend;
while(_130.length){
var res=_12f(_130.shift());
if(res){
_131(_130,res);
}
}
},nameFunctions:function(_133){
var base=_133.NAME;
if(typeof (base)=="undefined"){
base="";
}else{
base=base+".";
}
for(var name in _133){
var o=_133[name];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+name;
}
catch(e){
}
}
}
},queryString:function(_137,_138){
if(typeof (MochiKit.DOM)!="undefined"&&arguments.length==1&&(typeof (_137)=="string"||(typeof (_137.nodeType)!="undefined"&&_137.nodeType>0))){
var kv=MochiKit.DOM.formContents(_137);
_137=kv[0];
_138=kv[1];
}else{
if(arguments.length==1){
if(typeof (_137.length)=="number"&&_137.length==2){
return arguments.callee(_137[0],_137[1]);
}
var o=_137;
_137=[];
_138=[];
for(var k in o){
var v=o[k];
if(typeof (v)=="function"){
continue;
}else{
if(MochiKit.Base.isArrayLike(v)){
for(var i=0;i<v.length;i++){
_137.push(k);
_138.push(v[i]);
}
}else{
_137.push(k);
_138.push(v);
}
}
}
}
}
var rval=[];
var len=Math.min(_137.length,_138.length);
var _140=MochiKit.Base.urlEncode;
for(var i=0;i<len;i++){
v=_138[i];
if(typeof (v)!="undefined"&&v!==null){
rval.push(_140(_137[i])+"="+_140(v));
}
}
return rval.join("&");
},parseQueryString:function(_141,_142){
var qstr=(_141.charAt(0)=="?")?_141.substring(1):_141;
var _144=qstr.replace(/\+/g,"%20").split(/\&amp\;|\&\#38\;|\&#x26;|\&/);
var o={};
var _146;
if(typeof (decodeURIComponent)!="undefined"){
_146=decodeURIComponent;
}else{
_146=unescape;
}
if(_142){
for(var i=0;i<_144.length;i++){
var pair=_144[i].split("=");
var name=_146(pair.shift());
if(!name){
continue;
}
var arr=o[name];
if(!(arr instanceof Array)){
arr=[];
o[name]=arr;
}
arr.push(_146(pair.join("=")));
}
}else{
for(i=0;i<_144.length;i++){
pair=_144[i].split("=");
var name=pair.shift();
if(!name){
continue;
}
o[_146(name)]=_146(pair.join("="));
}
}
return o;
}});
MochiKit.Base.AdapterRegistry=function(){
this.pairs=[];
};
MochiKit.Base.AdapterRegistry.prototype={register:function(name,_14c,wrap,_14e){
if(_14e){
this.pairs.unshift([name,_14c,wrap]);
}else{
this.pairs.push([name,_14c,wrap]);
}
},match:function(){
for(var i=0;i<this.pairs.length;i++){
var pair=this.pairs[i];
if(pair[1].apply(this,arguments)){
return pair[2].apply(this,arguments);
}
}
throw MochiKit.Base.NotFound;
},unregister:function(name){
for(var i=0;i<this.pairs.length;i++){
var pair=this.pairs[i];
if(pair[0]==name){
this.pairs.splice(i,1);
return true;
}
}
return false;
}};
MochiKit.Base._exportSymbols=function(_154,_155){
if(MochiKit.__export__===false||_155.__export__===false){
return;
}
for(var k in _155){
var v=_155[k];
if(v!=null){
var _158=(k[0]!=="_"&&k!=="toString");
if(v.__export__===true||(v.__export__!==false&&_158)){
_154[k]=_155[k];
}
}
}
};
MochiKit.Base._deprecated=function(_159,name,_15b,_15c,_15d){
if(typeof (_159)==="string"){
if(_159.indexOf("MochiKit.")===0){
_159=_159.substring(9);
}
_159=MochiKit[_159];
}
var _15e=_15b.split(".")[1];
var _15f=_15b.split(".")[2];
var func=function(){
var self=arguments.callee;
var msg=_159.NAME+"."+name+" is deprecated since version "+_15c+". Use "+_15b+" instead.";
if(self.logged!==true){
self.logged=true;
if(MochiKit.Logging){
MochiKit.Logging.logDebug(msg);
}else{
if(console&&console.log){
console.log(msg);
}
}
}
if(!MochiKit[_15e]){
throw new Error(msg);
}
return MochiKit[_15e][_15f].apply(this,arguments);
};
if(_15d===false){
func.__export__=false;
}
_159[name]=func;
};
MochiKit.Base.__new__=function(){
var m=this;
m.noop=m.operator.identity;
m._deprecated(m,"forward","MochiKit.Base.forwardCall","1.3",false);
m._deprecated(m,"find","MochiKit.Base.findValue","1.3",false);
if(typeof (encodeURIComponent)!="undefined"){
m.urlEncode=function(_164){
return encodeURIComponent(_164).replace(/\'/g,"%27");
};
}else{
m.urlEncode=function(_165){
return escape(_165).replace(/\+/g,"%2B").replace(/\"/g,"%22").rval.replace(/\'/g,"%27");
};
}
m.NamedError=function(name){
this.message=name;
this.name=name;
};
m.NamedError.prototype=new Error();
m.update(m.NamedError.prototype,{repr:function(){
if(this.message&&this.message!=this.name){
return this.name+"("+m.repr(this.message)+")";
}else{
return this.name+"()";
}
},toString:m.forwardCall("repr")});
m.NotFound=new m.NamedError("MochiKit.Base.NotFound");
m.listMax=m.partial(m.listMinMax,1);
m.listMin=m.partial(m.listMinMax,-1);
m.isCallable=m.typeMatcher("function");
m.isUndefined=m.typeMatcher("undefined");
m.merge=m.partial(m.update,null);
m.zip=m.partial(m.map,null);
m.average=m.mean;
m.comparatorRegistry=new m.AdapterRegistry();
m.registerComparator("dateLike",m.isDateLike,m.compareDateLike);
m.registerComparator("arrayLike",m.isArrayLike,m.compareArrayLike);
m.reprRegistry=new m.AdapterRegistry();
m.registerRepr("arrayLike",m.isArrayLike,m.reprArrayLike);
m.registerRepr("string",m.typeMatcher("string"),m.reprString);
m.registerRepr("numbers",m.typeMatcher("number","boolean"),m.reprNumber);
m.jsonRegistry=new m.AdapterRegistry();
m.nameFunctions(this);
};
MochiKit.Base.__new__();
if(MochiKit.__export__){
compare=MochiKit.Base.compare;
compose=MochiKit.Base.compose;
serializeJSON=MochiKit.Base.serializeJSON;
mean=MochiKit.Base.mean;
median=MochiKit.Base.median;
}
MochiKit.Base._exportSymbols(this,MochiKit.Base);
MochiKit.Base._module("Iter","1.5",["Base"]);
MochiKit.Base.update(MochiKit.Iter,{registerIteratorFactory:function(name,_168,_169,_16a){
MochiKit.Iter.iteratorRegistry.register(name,_168,_169,_16a);
},isIterable:function(o){
return o!=null&&(typeof (o.next)=="function"||typeof (o.iter)=="function");
},iter:function(_16c,_16d){
var self=MochiKit.Iter;
if(arguments.length==2){
return self.takewhile(function(a){
return a!=_16d;
},_16c);
}
if(typeof (_16c.next)=="function"){
return _16c;
}else{
if(typeof (_16c.iter)=="function"){
return _16c.iter();
}
}
try{
return self.iteratorRegistry.match(_16c);
}
catch(e){
var m=MochiKit.Base;
if(e==m.NotFound){
e=new TypeError(typeof (_16c)+": "+m.repr(_16c)+" is not iterable");
}
throw e;
}
},count:function(n){
if(!n){
n=0;
}
var m=MochiKit.Base;
return {repr:function(){
return "count("+n+")";
},toString:m.forwardCall("repr"),next:m.counter(n)};
},cycle:function(p){
var self=MochiKit.Iter;
var m=MochiKit.Base;
var lst=[];
var _177=self.iter(p);
return {repr:function(){
return "cycle(...)";
},toString:m.forwardCall("repr"),next:function(){
try{
var rval=_177.next();
lst.push(rval);
return rval;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
if(lst.length===0){
this.next=function(){
throw self.StopIteration;
};
}else{
var i=-1;
this.next=function(){
i=(i+1)%lst.length;
return lst[i];
};
}
return this.next();
}
}};
},repeat:function(elem,n){
var m=MochiKit.Base;
if(typeof (n)=="undefined"){
return {repr:function(){
return "repeat("+m.repr(elem)+")";
},toString:m.forwardCall("repr"),next:function(){
return elem;
}};
}
return {repr:function(){
return "repeat("+m.repr(elem)+", "+n+")";
},toString:m.forwardCall("repr"),next:function(){
if(n<=0){
throw MochiKit.Iter.StopIteration;
}
n-=1;
return elem;
}};
},next:function(_17d){
return _17d.next();
},izip:function(p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var next=self.next;
var _183=m.map(self.iter,arguments);
return {repr:function(){
return "izip(...)";
},toString:m.forwardCall("repr"),next:function(){
return m.map(next,_183);
}};
},ifilter:function(pred,seq){
var m=MochiKit.Base;
seq=MochiKit.Iter.iter(seq);
if(pred===null){
pred=m.operator.truth;
}
return {repr:function(){
return "ifilter(...)";
},toString:m.forwardCall("repr"),next:function(){
while(true){
var rval=seq.next();
if(pred(rval)){
return rval;
}
}
return undefined;
}};
},ifilterfalse:function(pred,seq){
var m=MochiKit.Base;
seq=MochiKit.Iter.iter(seq);
if(pred===null){
pred=m.operator.truth;
}
return {repr:function(){
return "ifilterfalse(...)";
},toString:m.forwardCall("repr"),next:function(){
while(true){
var rval=seq.next();
if(!pred(rval)){
return rval;
}
}
return undefined;
}};
},islice:function(seq){
var self=MochiKit.Iter;
var m=MochiKit.Base;
seq=self.iter(seq);
var _18f=0;
var stop=0;
var step=1;
var i=-1;
if(arguments.length==2){
stop=arguments[1];
}else{
if(arguments.length==3){
_18f=arguments[1];
stop=arguments[2];
}else{
_18f=arguments[1];
stop=arguments[2];
step=arguments[3];
}
}
return {repr:function(){
return "islice("+["...",_18f,stop,step].join(", ")+")";
},toString:m.forwardCall("repr"),next:function(){
var rval;
while(i<_18f){
rval=seq.next();
i++;
}
if(_18f>=stop){
throw self.StopIteration;
}
_18f+=step;
return rval;
}};
},imap:function(fun,p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var _199=m.map(self.iter,m.extend(null,arguments,1));
var map=m.map;
var next=self.next;
return {repr:function(){
return "imap(...)";
},toString:m.forwardCall("repr"),next:function(){
return fun.apply(this,map(next,_199));
}};
},applymap:function(fun,seq,self){
seq=MochiKit.Iter.iter(seq);
var m=MochiKit.Base;
return {repr:function(){
return "applymap(...)";
},toString:m.forwardCall("repr"),next:function(){
return fun.apply(self,seq.next());
}};
},chain:function(p,q){
var self=MochiKit.Iter;
var m=MochiKit.Base;
if(arguments.length==1){
return self.iter(arguments[0]);
}
var _1a4=m.map(self.iter,arguments);
return {repr:function(){
return "chain(...)";
},toString:m.forwardCall("repr"),next:function(){
while(_1a4.length>1){
try{
var _1a5=_1a4[0].next();
return _1a5;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
_1a4.shift();
var _1a5=_1a4[0].next();
return _1a5;
}
}
if(_1a4.length==1){
var arg=_1a4.shift();
this.next=m.bind("next",arg);
return this.next();
}
throw self.StopIteration;
}};
},takewhile:function(pred,seq){
var self=MochiKit.Iter;
seq=self.iter(seq);
return {repr:function(){
return "takewhile(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
var rval=seq.next();
if(!pred(rval)){
this.next=function(){
throw self.StopIteration;
};
this.next();
}
return rval;
}};
},dropwhile:function(pred,seq){
seq=MochiKit.Iter.iter(seq);
var m=MochiKit.Base;
var bind=m.bind;
return {"repr":function(){
return "dropwhile(...)";
},"toString":m.forwardCall("repr"),"next":function(){
while(true){
var rval=seq.next();
if(!pred(rval)){
break;
}
}
this.next=bind("next",seq);
return rval;
}};
},_tee:function(_1b0,sync,_1b2){
sync.pos[_1b0]=-1;
var m=MochiKit.Base;
var _1b4=m.listMin;
return {repr:function(){
return "tee("+_1b0+", ...)";
},toString:m.forwardCall("repr"),next:function(){
var rval;
var i=sync.pos[_1b0];
if(i==sync.max){
rval=_1b2.next();
sync.deque.push(rval);
sync.max+=1;
sync.pos[_1b0]+=1;
}else{
rval=sync.deque[i-sync.min];
sync.pos[_1b0]+=1;
if(i==sync.min&&_1b4(sync.pos)!=sync.min){
sync.min+=1;
sync.deque.shift();
}
}
return rval;
}};
},tee:function(_1b7,n){
var rval=[];
var sync={"pos":[],"deque":[],"max":-1,"min":-1};
if(arguments.length==1||typeof (n)=="undefined"||n===null){
n=2;
}
var self=MochiKit.Iter;
_1b7=self.iter(_1b7);
var _tee=self._tee;
for(var i=0;i<n;i++){
rval.push(_tee(i,sync,_1b7));
}
return rval;
},list:function(_1be){
var rval;
if(_1be instanceof Array){
return _1be.slice();
}
if(typeof (_1be)=="function"&&!(_1be instanceof Function)&&typeof (_1be.length)=="number"){
rval=[];
for(var i=0;i<_1be.length;i++){
rval.push(_1be[i]);
}
return rval;
}
var self=MochiKit.Iter;
_1be=self.iter(_1be);
var rval=[];
var _1c2;
try{
while(true){
_1c2=_1be.next();
rval.push(_1c2);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return rval;
}
return undefined;
},reduce:function(fn,_1c4,_1c5){
var i=0;
var x=_1c5;
var self=MochiKit.Iter;
_1c4=self.iter(_1c4);
if(arguments.length<3){
try{
x=_1c4.next();
}
catch(e){
if(e==self.StopIteration){
e=new TypeError("reduce() of empty sequence with no initial value");
}
throw e;
}
i++;
}
try{
while(true){
x=fn(x,_1c4.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},range:function(){
var _1c9=0;
var stop=0;
var step=1;
if(arguments.length==1){
stop=arguments[0];
}else{
if(arguments.length==2){
_1c9=arguments[0];
stop=arguments[1];
}else{
if(arguments.length==3){
_1c9=arguments[0];
stop=arguments[1];
step=arguments[2];
}else{
throw new TypeError("range() takes 1, 2, or 3 arguments!");
}
}
}
if(step===0){
throw new TypeError("range() step must not be 0");
}
return {next:function(){
if((step>0&&_1c9>=stop)||(step<0&&_1c9<=stop)){
throw MochiKit.Iter.StopIteration;
}
var rval=_1c9;
_1c9+=step;
return rval;
},repr:function(){
return "range("+[_1c9,stop,step].join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
},sum:function(_1cd,_1ce){
if(typeof (_1ce)=="undefined"||_1ce===null){
_1ce=0;
}
var x=_1ce;
var self=MochiKit.Iter;
_1cd=self.iter(_1cd);
try{
while(true){
x+=_1cd.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},exhaust:function(_1d1){
var self=MochiKit.Iter;
_1d1=self.iter(_1d1);
try{
while(true){
_1d1.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
},forEach:function(_1d3,func,obj){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length>2){
func=m.bind(func,obj);
}
if(m.isArrayLike(_1d3)&&!self.isIterable(_1d3)){
try{
for(var i=0;i<_1d3.length;i++){
func(_1d3[i]);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}else{
self.exhaust(self.imap(func,_1d3));
}
},every:function(_1d9,func){
var self=MochiKit.Iter;
try{
self.ifilterfalse(func,_1d9).next();
return false;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return true;
}
},sorted:function(_1dc,cmp){
var rval=MochiKit.Iter.list(_1dc);
if(arguments.length==1){
cmp=MochiKit.Base.compare;
}
rval.sort(cmp);
return rval;
},reversed:function(_1df){
var rval=MochiKit.Iter.list(_1df);
rval.reverse();
return rval;
},some:function(_1e1,func){
var self=MochiKit.Iter;
try{
self.ifilter(func,_1e1).next();
return true;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return false;
}
},iextend:function(lst,_1e5){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(m.isArrayLike(_1e5)&&!self.isIterable(_1e5)){
for(var i=0;i<_1e5.length;i++){
lst.push(_1e5[i]);
}
}else{
_1e5=self.iter(_1e5);
try{
while(true){
lst.push(_1e5.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}
return lst;
},groupby:function(_1e9,_1ea){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1ea=m.operator.identity;
}
_1e9=self.iter(_1e9);
var pk=undefined;
var k=undefined;
var v;
function fetch(){
v=_1e9.next();
k=_1ea(v);
}
function eat(){
var ret=v;
v=undefined;
return ret;
}
var _1f1=true;
var _1f2=m.compare;
return {repr:function(){
return "groupby(...)";
},next:function(){
while(_1f2(k,pk)===0){
fetch();
if(_1f1){
_1f1=false;
break;
}
}
pk=k;
return [k,{next:function(){
if(v==undefined){
fetch();
}
if(_1f2(k,pk)!==0){
throw self.StopIteration;
}
return eat();
}}];
}};
},groupby_as_array:function(_1f3,_1f4){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1f4=m.operator.identity;
}
_1f3=self.iter(_1f3);
var _1f7=[];
var _1f8=true;
var _1f9;
var _1fa=m.compare;
while(true){
try{
var _1fb=_1f3.next();
var key=_1f4(_1fb);
}
catch(e){
if(e==self.StopIteration){
break;
}
throw e;
}
if(_1f8||_1fa(key,_1f9)!==0){
var _1fd=[];
_1f7.push([key,_1fd]);
}
_1fd.push(_1fb);
_1f8=false;
_1f9=key;
}
return _1f7;
},arrayLikeIter:function(_1fe){
var i=0;
return {repr:function(){
return "arrayLikeIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
if(i>=_1fe.length){
throw MochiKit.Iter.StopIteration;
}
return _1fe[i++];
}};
},hasIterateNext:function(_200){
return (_200&&typeof (_200.iterateNext)=="function");
},iterateNextIter:function(_201){
return {repr:function(){
return "iterateNextIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
var rval=_201.iterateNext();
if(rval===null||rval===undefined){
throw MochiKit.Iter.StopIteration;
}
return rval;
}};
}});
MochiKit.Iter.__new__=function(){
var m=MochiKit.Base;
if(typeof (StopIteration)!="undefined"){
this.StopIteration=StopIteration;
}else{
this.StopIteration=new m.NamedError("StopIteration");
}
this.iteratorRegistry=new m.AdapterRegistry();
this.registerIteratorFactory("arrayLike",m.isArrayLike,this.arrayLikeIter);
this.registerIteratorFactory("iterateNext",this.hasIterateNext,this.iterateNextIter);
m.nameFunctions(this);
};
MochiKit.Iter.__new__();
if(MochiKit.__export__){
reduce=MochiKit.Iter.reduce;
}
MochiKit.Base._exportSymbols(this,MochiKit.Iter);
MochiKit.Base._module("Logging","1.5",["Base"]);
MochiKit.Logging.LogMessage=function(num,_205,info){
this.num=num;
this.level=_205;
this.info=info;
this.timestamp=new Date();
};
MochiKit.Logging.LogMessage.prototype={repr:function(){
var m=MochiKit.Base;
return "LogMessage("+m.map(m.repr,[this.num,this.level,this.info]).join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Logging,{logLevelAtLeast:function(_208){
var self=MochiKit.Logging;
if(typeof (_208)=="string"){
_208=self.LogLevel[_208];
}
return function(msg){
var _20b=msg.level;
if(typeof (_20b)=="string"){
_20b=self.LogLevel[_20b];
}
return _20b>=_208;
};
},isLogMessage:function(){
var _20c=MochiKit.Logging.LogMessage;
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof _20c)){
return false;
}
}
return true;
},compareLogMessage:function(a,b){
return MochiKit.Base.compare([a.level,a.info],[b.level,b.info]);
},alertListener:function(msg){
alert("num: "+msg.num+"\nlevel: "+msg.level+"\ninfo: "+msg.info.join(" "));
}});
MochiKit.Logging.Logger=function(_211){
this.counter=0;
if(typeof (_211)=="undefined"||_211===null){
_211=-1;
}
this.maxSize=_211;
this._messages=[];
this.listeners={};
this.useNativeConsole=false;
};
MochiKit.Logging.Logger.prototype={clear:function(){
this._messages.splice(0,this._messages.length);
},logToConsole:function(msg){
if(typeof (window)!="undefined"&&window.console&&window.console.log){
window.console.log(msg.replace(/%/g,"\uff05"));
}else{
if(typeof (opera)!="undefined"&&opera.postError){
opera.postError(msg);
}else{
if(typeof (printfire)=="function"){
printfire(msg);
}else{
if(typeof (Debug)!="undefined"&&Debug.writeln){
Debug.writeln(msg);
}else{
if(typeof (debug)!="undefined"&&debug.trace){
debug.trace(msg);
}
}
}
}
}
},dispatchListeners:function(msg){
for(var k in this.listeners){
var pair=this.listeners[k];
if(pair.ident!=k||(pair[0]&&!pair[0](msg))){
continue;
}
pair[1](msg);
}
},addListener:function(_216,_217,_218){
if(typeof (_217)=="string"){
_217=MochiKit.Logging.logLevelAtLeast(_217);
}
var _219=[_217,_218];
_219.ident=_216;
this.listeners[_216]=_219;
},removeListener:function(_21a){
delete this.listeners[_21a];
},baseLog:function(_21b,_21c){
if(typeof (_21b)=="number"){
if(_21b>=MochiKit.Logging.LogLevel.FATAL){
_21b="FATAL";
}else{
if(_21b>=MochiKit.Logging.LogLevel.ERROR){
_21b="ERROR";
}else{
if(_21b>=MochiKit.Logging.LogLevel.WARNING){
_21b="WARNING";
}else{
if(_21b>=MochiKit.Logging.LogLevel.INFO){
_21b="INFO";
}else{
_21b="DEBUG";
}
}
}
}
}
var msg=new MochiKit.Logging.LogMessage(this.counter,_21b,MochiKit.Base.extend(null,arguments,1));
this._messages.push(msg);
this.dispatchListeners(msg);
if(this.useNativeConsole){
this.logToConsole(msg.level+": "+msg.info.join(" "));
}
this.counter+=1;
while(this.maxSize>=0&&this._messages.length>this.maxSize){
this._messages.shift();
}
},getMessages:function(_21e){
var _21f=0;
if(!(typeof (_21e)=="undefined"||_21e===null)){
_21f=Math.max(0,this._messages.length-_21e);
}
return this._messages.slice(_21f);
},getMessageText:function(_220){
if(typeof (_220)=="undefined"||_220===null){
_220=30;
}
var _221=this.getMessages(_220);
if(_221.length){
var lst=map(function(m){
return "\n  ["+m.num+"] "+m.level+": "+m.info.join(" ");
},_221);
lst.unshift("LAST "+_221.length+" MESSAGES:");
return lst.join("");
}
return "";
},debuggingBookmarklet:function(_224){
if(typeof (MochiKit.LoggingPane)=="undefined"){
alert(this.getMessageText());
}else{
MochiKit.LoggingPane.createLoggingPane(_224||false);
}
}};
MochiKit.Logging.__new__=function(){
this.LogLevel={ERROR:40,FATAL:50,WARNING:30,INFO:20,DEBUG:10};
var m=MochiKit.Base;
m.registerComparator("LogMessage",this.isLogMessage,this.compareLogMessage);
var _226=m.partial;
var _227=this.Logger;
var _228=_227.prototype.baseLog;
m.update(this.Logger.prototype,{debug:_226(_228,"DEBUG"),log:_226(_228,"INFO"),error:_226(_228,"ERROR"),fatal:_226(_228,"FATAL"),warning:_226(_228,"WARNING")});
var self=this;
var _22a=function(name){
return function(){
self.logger[name].apply(self.logger,arguments);
};
};
this.log=_22a("log");
this.logError=_22a("error");
this.logDebug=_22a("debug");
this.logFatal=_22a("fatal");
this.logWarning=_22a("warning");
this.logger=new _227();
this.logger.useNativeConsole=true;
m.nameFunctions(this);
};
if(typeof (printfire)=="undefined"&&typeof (document)!="undefined"&&document.createEvent&&typeof (dispatchEvent)!="undefined"){
printfire=function(){
printfire.args=arguments;
var ev=document.createEvent("Events");
ev.initEvent("printfire",false,true);
dispatchEvent(ev);
};
}
MochiKit.Logging.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Logging);
MochiKit.Base._module("DateTime","1.5",["Base"]);
MochiKit.DateTime.isoDate=function(str){
str=str+"";
if(typeof (str)!="string"||str.length===0){
return null;
}
var iso=str.split("-");
if(iso.length===0){
return null;
}
var date=new Date(iso[0],iso[1]-1,iso[2]);
date.setFullYear(iso[0]);
date.setMonth(iso[1]-1);
date.setDate(iso[2]);
return date;
};
MochiKit.DateTime._isoRegexp=/(\d{4,})(?:-(\d{1,2})(?:-(\d{1,2})(?:[T ](\d{1,2}):(\d{1,2})(?::(\d{1,2})(?:\.(\d+))?)?(?:(Z)|([+-])(\d{1,2})(?::(\d{1,2}))?)?)?)?)?/;
MochiKit.DateTime.isoTimestamp=function(str){
str=str+"";
if(typeof (str)!="string"||str.length===0){
return null;
}
var res=str.match(MochiKit.DateTime._isoRegexp);
if(typeof (res)=="undefined"||res===null){
return null;
}
var year,_233,day,hour,min,sec,msec;
year=parseInt(res[1],10);
if(typeof (res[2])=="undefined"||res[2]===""){
return new Date(year);
}
_233=parseInt(res[2],10)-1;
day=parseInt(res[3],10);
if(typeof (res[4])=="undefined"||res[4]===""){
return new Date(year,_233,day);
}
hour=parseInt(res[4],10);
min=parseInt(res[5],10);
sec=(typeof (res[6])!="undefined"&&res[6]!=="")?parseInt(res[6],10):0;
if(typeof (res[7])!="undefined"&&res[7]!==""){
msec=Math.round(1000*parseFloat("0."+res[7]));
}else{
msec=0;
}
if((typeof (res[8])=="undefined"||res[8]==="")&&(typeof (res[9])=="undefined"||res[9]==="")){
return new Date(year,_233,day,hour,min,sec,msec);
}
var ofs;
if(typeof (res[9])!="undefined"&&res[9]!==""){
ofs=parseInt(res[10],10)*3600000;
if(typeof (res[11])!="undefined"&&res[11]!==""){
ofs+=parseInt(res[11],10)*60000;
}
if(res[9]=="-"){
ofs=-ofs;
}
}else{
ofs=0;
}
return new Date(Date.UTC(year,_233,day,hour,min,sec,msec)-ofs);
};
MochiKit.DateTime.toISOTime=function(date,_23b){
if(typeof (date)=="undefined"||date===null){
return null;
}
var hh=date.getHours();
var mm=date.getMinutes();
var ss=date.getSeconds();
var lst=[((_23b&&(hh<10))?"0"+hh:hh),((mm<10)?"0"+mm:mm),((ss<10)?"0"+ss:ss)];
return lst.join(":");
};
MochiKit.DateTime.toISOTimestamp=function(date,_241){
if(typeof (date)=="undefined"||date===null){
return null;
}
var sep=_241?"T":" ";
var foot=_241?"Z":"";
if(_241){
date=new Date(date.getTime()+(date.getTimezoneOffset()*60000));
}
return MochiKit.DateTime.toISODate(date)+sep+MochiKit.DateTime.toISOTime(date,_241)+foot;
};
MochiKit.DateTime.toISODate=function(date){
if(typeof (date)=="undefined"||date===null){
return null;
}
var _245=MochiKit.DateTime._padTwo;
var _246=MochiKit.DateTime._padFour;
return [_246(date.getFullYear()),_245(date.getMonth()+1),_245(date.getDate())].join("-");
};
MochiKit.DateTime.americanDate=function(d){
d=d+"";
if(typeof (d)!="string"||d.length===0){
return null;
}
var a=d.split("/");
return new Date(a[2],a[0]-1,a[1]);
};
MochiKit.DateTime._padTwo=function(n){
return (n>9)?n:"0"+n;
};
MochiKit.DateTime._padFour=function(n){
switch(n.toString().length){
case 1:
return "000"+n;
break;
case 2:
return "00"+n;
break;
case 3:
return "0"+n;
break;
case 4:
default:
return n;
}
};
MochiKit.DateTime.toPaddedAmericanDate=function(d){
if(typeof (d)=="undefined"||d===null){
return null;
}
var _24c=MochiKit.DateTime._padTwo;
return [_24c(d.getMonth()+1),_24c(d.getDate()),d.getFullYear()].join("/");
};
MochiKit.DateTime.toAmericanDate=function(d){
if(typeof (d)=="undefined"||d===null){
return null;
}
return [d.getMonth()+1,d.getDate(),d.getFullYear()].join("/");
};
MochiKit.DateTime.__new__=function(){
MochiKit.Base.nameFunctions(this);
};
MochiKit.DateTime.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.DateTime);
MochiKit.Base._module("Format","1.5",["Base"]);
MochiKit.Format._numberFormatter=function(_24e,_24f,_250,_251,_252,_253,_254,_255,_256){
return function(num){
num=parseFloat(num);
if(typeof (num)=="undefined"||num===null||isNaN(num)){
return _24e;
}
var _258=_24f;
var _259=_250;
if(num<0){
num=-num;
}else{
_258=_258.replace(/-/,"");
}
var me=arguments.callee;
var fmt=MochiKit.Format.formatLocale(_251);
if(_252){
num=num*100;
_259=fmt.percent+_259;
}
num=MochiKit.Format.roundToFixed(num,_253);
var _25c=num.split(/\./);
var _25d=_25c[0];
var frac=(_25c.length==1)?"":_25c[1];
var res="";
while(_25d.length<_254){
_25d="0"+_25d;
}
if(_255){
while(_25d.length>_255){
var i=_25d.length-_255;
res=fmt.separator+_25d.substring(i,_25d.length)+res;
_25d=_25d.substring(0,i);
}
}
res=_25d+res;
if(_253>0){
while(frac.length<_256){
frac=frac+"0";
}
res=res+fmt.decimal+frac;
}
return _258+res+_259;
};
};
MochiKit.Format.numberFormatter=function(_261,_262,_263){
if(typeof (_262)=="undefined"){
_262="";
}
var _264=_261.match(/((?:[0#]+,)?[0#]+)(?:\.([0#]+))?(%)?/);
if(!_264){
throw TypeError("Invalid pattern");
}
var _265=_261.substr(0,_264.index);
var _266=_261.substr(_264.index+_264[0].length);
if(_265.search(/-/)==-1){
_265=_265+"-";
}
var _267=_264[1];
var frac=(typeof (_264[2])=="string"&&_264[2]!="")?_264[2]:"";
var _269=(typeof (_264[3])=="string"&&_264[3]!="");
var tmp=_267.split(/,/);
var _26b;
if(typeof (_263)=="undefined"){
_263="default";
}
if(tmp.length==1){
_26b=null;
}else{
_26b=tmp[1].length;
}
var _26c=_267.length-_267.replace(/0/g,"").length;
var _26d=frac.length-frac.replace(/0/g,"").length;
var _26e=frac.length;
var rval=MochiKit.Format._numberFormatter(_262,_265,_266,_263,_269,_26e,_26c,_26b,_26d);
var m=MochiKit.Base;
if(m){
var fn=arguments.callee;
var args=m.concat(arguments);
rval.repr=function(){
return [self.NAME,"(",map(m.repr,args).join(", "),")"].join("");
};
}
return rval;
};
MochiKit.Format.formatLocale=function(_273){
if(typeof (_273)=="undefined"||_273===null){
_273="default";
}
if(typeof (_273)=="string"){
var rval=MochiKit.Format.LOCALE[_273];
if(typeof (rval)=="string"){
rval=arguments.callee(rval);
MochiKit.Format.LOCALE[_273]=rval;
}
return rval;
}else{
return _273;
}
};
MochiKit.Format.twoDigitAverage=function(_275,_276){
if(_276){
var res=_275/_276;
if(!isNaN(res)){
return MochiKit.Format.twoDigitFloat(res);
}
}
return "0";
};
MochiKit.Format.twoDigitFloat=function(_278){
var res=roundToFixed(_278,2);
if(res.indexOf(".00")>0){
return res.substring(0,res.length-3);
}else{
if(res.charAt(res.length-1)=="0"){
return res.substring(0,res.length-1);
}else{
return res;
}
}
};
MochiKit.Format.lstrip=function(str,_27b){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_27b){
return str.replace(/^\s+/,"");
}else{
return str.replace(new RegExp("^["+_27b+"]+"),"");
}
};
MochiKit.Format.rstrip=function(str,_27d){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_27d){
return str.replace(/\s+$/,"");
}else{
return str.replace(new RegExp("["+_27d+"]+$"),"");
}
};
MochiKit.Format.strip=function(str,_27f){
var self=MochiKit.Format;
return self.rstrip(self.lstrip(str,_27f),_27f);
};
MochiKit.Format.truncToFixed=function(_281,_282){
var _283=MochiKit.Format._numberToFixed(_281,_282);
var _284=_283.indexOf(".");
if(_284>0&&_284+_282+1<_283.length){
_283=_283.substring(0,_284+_282+1);
_283=MochiKit.Format._shiftNumber(_283,0);
}
return _283;
};
MochiKit.Format.roundToFixed=function(_285,_286){
var _287=MochiKit.Format._numberToFixed(_285,_286);
var _288=_287.indexOf(".");
if(_288>0&&_288+_286+1<_287.length){
var str=MochiKit.Format._shiftNumber(_287,_286);
str=MochiKit.Format._numberToFixed(Math.round(parseFloat(str)),0);
_287=MochiKit.Format._shiftNumber(str,-_286);
}
return _287;
};
MochiKit.Format._numberToFixed=function(_28a,_28b){
var str=_28a.toString();
var _28d=str.split(/[eE]/);
var exp=(_28d.length===1)?0:parseInt(_28d[1])||0;
var _28f=MochiKit.Format._shiftNumber(_28d[0],exp);
_28d=_28f.split(/\./);
var _290=_28d[0];
var frac=(_28d.length===1)?"":_28d[1];
while(frac.length<_28b){
frac+="0";
}
if(frac.length>0){
return _290+"."+frac;
}else{
return _290;
}
};
MochiKit.Format._shiftNumber=function(num,exp){
var pos=num.indexOf(".");
if(pos<0){
pos=num.length;
}else{
num=num.substring(0,pos)+num.substring(pos+1);
}
pos+=exp;
while(pos<=0||(pos<=1&&num.charAt(0)==="-")){
if(num.charAt(0)==="-"){
num="-0"+num.substring(1);
}else{
num="0"+num;
}
pos++;
}
while(pos>num.length){
num+="0";
}
if(pos<num.length){
num=num.substring(0,pos)+"."+num.substring(pos);
}
while(/^0[^.]/.test(num)){
num=num.substring(1);
}
while(/^-0[^.]/.test(num)){
num="-"+num.substring(2);
}
return num;
};
MochiKit.Format.percentFormat=function(_295){
return MochiKit.Format.twoDigitFloat(100*_295)+"%";
};
MochiKit.Format.LOCALE={en_US:{separator:",",decimal:".",percent:"%"},de_DE:{separator:".",decimal:",",percent:"%"},pt_BR:{separator:".",decimal:",",percent:"%"},fr_FR:{separator:" ",decimal:",",percent:"%"},"default":"en_US",__export__:false};
MochiKit.Format.__new__=function(){
MochiKit.Base.nameFunctions(this);
var base=this.NAME+".";
var k,v,o;
for(k in this.LOCALE){
o=this.LOCALE[k];
if(typeof (o)=="object"){
o.repr=function(){
return this.NAME;
};
o.NAME=base+"LOCALE."+k;
}
}
};
MochiKit.Format.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Format);
MochiKit.Base._module("Text","1.5",["Base","Format"]);
MochiKit.Text.startsWith=function(str,_29b){
return str!=null&&_29b!=null&&str.indexOf(_29b)==0;
};
MochiKit.Text.endsWith=function(str,_29d){
return str!=null&&_29d!=null&&str.lastIndexOf(_29d)==Math.max(str.length-_29d.length,0);
};
MochiKit.Text.contains=function(str,_29f){
return str!=null&&_29f!=null&&str.indexOf(_29f)>=0;
};
MochiKit.Text.padLeft=function(str,_2a1,_2a2){
str=str||"";
_2a2=_2a2||" ";
while(str.length<_2a1){
str=_2a2+str;
}
return str;
};
MochiKit.Text.padRight=function(str,_2a4,_2a5){
str=str||"";
_2a5=_2a5||" ";
while(str.length<_2a4){
str+=_2a5;
}
return str;
};
MochiKit.Text.truncate=function(str,_2a7,tail){
if(str==null||str.length<=_2a7||_2a7<0){
return str;
}else{
if(tail!=null){
str=str.slice(0,Math.max(0,_2a7-tail.length));
if(typeof (str)=="string"){
return str+tail;
}else{
return MochiKit.Base.extend(str,tail);
}
}else{
return str.slice(0,_2a7);
}
}
};
MochiKit.Text.splitJoin=function(func,str,_2ab){
if(str==null||str.length==0){
return str;
}
_2ab=_2ab||"\n";
return MochiKit.Base.map(func,str.split(_2ab)).join(_2ab);
};
MochiKit.Text.formatter=function(_2ac,_2ad){
if(typeof (_2ad)=="undefined"){
_2ad=MochiKit.Format.formatLocale();
}else{
if(typeof (_2ad)=="string"){
_2ad=MochiKit.Format.formatLocale(_2ad);
}
}
var _2ae=MochiKit.Text._parsePattern(_2ac);
return function(){
var _2af=MochiKit.Base.extend([],arguments);
var res=[];
for(var i=0;i<_2ae.length;i++){
if(typeof (_2ae[i])=="string"){
res.push(_2ae[i]);
}else{
res.push(MochiKit.Text.formatValue(_2ae[i],_2af,_2ad));
}
}
return res.join("");
};
};
MochiKit.Text.format=function(_2b2){
var func=MochiKit.Text.formatter(_2b2);
return func.apply(this,MochiKit.Base.extend([],arguments,1));
};
MochiKit.Text.formatValue=function(spec,_2b5,_2b6){
var self=MochiKit.Text;
if(typeof (spec)==="string"){
spec=self._parseFormatFlags(spec,0,spec.length-1);
}
for(var i=0;spec.path!=null&&i<spec.path.length;i++){
if(_2b5!=null){
_2b5=_2b5[spec.path[i]];
}
}
if(typeof (_2b6)=="undefined"){
_2b6=MochiKit.Format.formatLocale();
}else{
if(typeof (_2b6)=="string"){
_2b6=MochiKit.Format.formatLocale(_2b6);
}
}
var str="";
if(spec.numeric){
if(typeof (_2b5)!="number"||isNaN(_2b5)){
str="";
}else{
if(_2b5===Number.POSITIVE_INFINITY){
str="\u221e";
}else{
if(_2b5===Number.NEGATIVE_INFINITY){
str="-\u221e";
}else{
var sign=(spec.sign==="-")?"":spec.sign;
sign=(_2b5<0)?"-":sign;
_2b5=Math.abs(_2b5);
if(spec.format==="%"){
str=self._truncToPercent(_2b5,spec.precision);
}else{
if(spec.format==="d"){
str=MochiKit.Format.roundToFixed(_2b5,0);
}else{
if(spec.radix!=10){
str=Math.floor(_2b5).toString(spec.radix);
if(spec.format==="x"){
str=str.toLowerCase();
}else{
if(spec.format==="X"){
str=str.toUpperCase();
}
}
}else{
if(spec.precision>=0){
str=MochiKit.Format.roundToFixed(_2b5,spec.precision);
}else{
str=_2b5.toString();
}
}
}
}
if(spec.padding==="0"&&spec.format==="%"){
str=self.padLeft(str,spec.width-sign.length-1,"0");
}else{
if(spec.padding=="0"){
str=self.padLeft(str,spec.width-sign.length,"0");
}
}
str=self._localizeNumber(str,_2b6,spec.grouping);
str=sign+str;
}
}
}
if(str!==""&&spec.format==="%"){
str=str+_2b6.percent;
}
}else{
if(spec.format=="r"){
str=MochiKit.Base.repr(_2b5);
}else{
str=(_2b5==null)?"null":_2b5.toString();
}
str=self.truncate(str,spec.precision);
}
if(spec.align=="<"){
str=self.padRight(str,spec.width);
}else{
str=self.padLeft(str,spec.width);
}
return str;
};
MochiKit.Text._localizeNumber=function(num,_2bc,_2bd){
var _2be=num.split(/\./);
var _2bf=_2be[0];
var frac=(_2be.length==1)?"":_2be[1];
var res=(frac.length>0)?_2bc.decimal:"";
while(_2bd&&frac.length>3){
res=res+frac.substring(0,3)+_2bc.separator;
frac=frac.substring(3);
if(_2bf.charAt(0)=="0"){
_2bf=_2bf.substring(1);
}
}
if(frac.length>0){
res+=frac;
}
while(_2bd&&_2bf.length>3){
var pos=_2bf.length-3;
res=_2bc.separator+_2bf.substring(pos)+res;
_2bf=_2bf.substring((_2bf.charAt(0)=="0")?1:0,pos);
}
return _2bf+res;
};
MochiKit.Text._parsePattern=function(_2c3){
var self=MochiKit.Text;
var _2c5=[];
var _2c6=0;
var pos=0;
for(pos=0;pos<_2c3.length;pos++){
if(_2c3.charAt(pos)=="{"){
if(pos+1>=_2c3.length){
var msg="unescaped { char, should be escaped as {{";
throw new self.FormatPatternError(_2c3,pos,msg);
}else{
if(_2c3.charAt(pos+1)=="{"){
_2c5.push(_2c3.substring(_2c6,pos+1));
_2c6=pos+2;
pos++;
}else{
if(_2c6<pos){
_2c5.push(_2c3.substring(_2c6,pos));
}
_2c6=_2c3.indexOf("}",pos)+1;
if(_2c6<=0){
var msg="unmatched { char, not followed by a } char";
throw new self.FormatPatternError(_2c3,pos,msg);
}
_2c5.push(self._parseFormat(_2c3,pos+1,_2c6-1));
pos=_2c6-1;
}
}
}else{
if(_2c3.charAt(pos)=="}"){
if(pos+1>=_2c3.length||_2c3.charAt(pos+1)!="}"){
var msg="unescaped } char, should be escaped as }}";
throw new self.FormatPatternError(_2c3,pos,msg);
}
_2c5.push(_2c3.substring(_2c6,pos+1));
_2c6=pos+2;
pos++;
}
}
}
if(_2c6<pos){
_2c5.push(_2c3.substring(_2c6,pos));
}
return _2c5;
};
MochiKit.Text._parseFormat=function(_2c9,_2ca,_2cb){
var self=MochiKit.Text;
var text=_2c9.substring(_2ca,_2cb);
var info;
var pos=text.indexOf(":");
if(pos==0){
info=self._parseFormatFlags(_2c9,_2ca+1,_2cb);
info.path=[0];
}else{
if(pos>0){
info=self._parseFormatFlags(_2c9,_2ca+pos+1,_2cb);
info.path=text.substring(0,pos).split(".");
}else{
info=self._parseFormatFlags(_2c9,_2cb,_2cb);
info.path=text.split(".");
}
}
var _2d0=/^\d+$/;
for(var i=0;i<info.path.length;i++){
var e=info.path[i];
if(typeof (e)=="string"){
e=e.replace(/^\s+/,"").replace(/\s+$/,"");
if(e==""&&info.path.length==1){
e=0;
}else{
if(e==""){
var msg="format value path contains blanks";
throw new self.FormatPatternError(_2c9,_2ca,msg);
}else{
if(_2d0.test(e)){
e=parseInt(e);
}
}
}
}
info.path[i]=e;
}
if(info.path.length<0||typeof (info.path[0])!="number"){
info.path.unshift(0);
}
return info;
};
MochiKit.Text._parseFormatFlags=function(_2d4,_2d5,_2d6){
var self=MochiKit.Text;
var info={numeric:false,format:"s",width:0,precision:-1,align:">",sign:"-",padding:" ",grouping:false};
var _2d9=_2d4.substring(_2d5,_2d6).replace(/\s+$/,"");
while(_2d9.length>0){
switch(_2d9.charAt(0)){
case ">":
case "<":
info.align=_2d9.charAt(0);
_2d9=_2d9.substring(1);
break;
case "+":
case "-":
case " ":
info.sign=_2d9.charAt(0);
_2d9=_2d9.substring(1);
break;
case ",":
info.grouping=true;
_2d9=_2d9.substring(1);
break;
case ".":
var _2da=/^\d*/.exec(_2d9.substring(1))[0];
info.precision=parseInt(_2da);
_2d9=_2d9.substring(1+_2da.length);
break;
case "0":
info.padding=_2d9.charAt(0);
_2d9=_2d9.substring(1);
break;
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
var _2da=/^\d*/.exec(_2d9)[0];
info.width=parseInt(_2da);
_2d9=_2d9.substring(_2da.length);
break;
case "s":
case "r":
info.format=_2d9.charAt(0);
_2d9=_2d9.substring(1);
break;
case "b":
case "d":
case "o":
case "x":
case "X":
case "f":
case "%":
info.numeric=true;
info.format=_2d9.charAt(0);
info.radix=10;
if(info.format==="b"){
info.radix=2;
}else{
if(info.format==="o"){
info.radix=8;
}else{
if(info.format==="x"||info.format==="X"){
info.radix=16;
}
}
}
_2d9=_2d9.substring(1);
break;
default:
var msg="unsupported format flag: "+_2d9.charAt(0);
throw new self.FormatPatternError(_2d4,_2d5,msg);
}
}
return info;
};
MochiKit.Text._truncToPercent=function(_2dc,_2dd){
var str;
if(_2dd>=0){
str=MochiKit.Format.roundToFixed(_2dc,_2dd+2);
}else{
str=(_2dc==null)?"0":_2dc.toString();
}
var _2df=str.indexOf(".");
if(_2df<0){
str=str+"00";
}else{
if(_2df+3>=str.length){
var _2e0=str.substring(_2df+1);
while(_2e0.length<2){
_2e0=_2e0+"0";
}
str=str.substring(0,_2df)+_2e0;
}else{
var _2e0=str.substring(_2df+1);
str=str.substring(0,_2df)+_2e0.substring(0,2)+"."+_2e0.substring(2);
}
}
while(str.length>1&&str.charAt(0)=="0"&&str.charAt(1)!="."){
str=str.substring(1);
}
return str;
};
MochiKit.Text.FormatPatternError=function(_2e1,pos,_2e3){
this.pattern=_2e1;
this.pos=pos;
this.message=_2e3;
};
MochiKit.Text.FormatPatternError.prototype=new MochiKit.Base.NamedError("MochiKit.Text.FormatPatternError");
if(MochiKit.__export__){
formatter=MochiKit.Text.formatter;
format=MochiKit.Text.format;
formatValue=MochiKit.Text.formatValue;
}
MochiKit.Base.nameFunctions(MochiKit.Text);
MochiKit.Base._exportSymbols(this,MochiKit.Text);
MochiKit.Base._module("Async","1.5",["Base"]);
MochiKit.Async.Deferred=function(_2e4){
this.chain=[];
this.id=this._nextId();
this.fired=-1;
this.paused=0;
this.results=[null,null];
this.canceller=_2e4;
this.silentlyCancelled=false;
this.chained=false;
};
MochiKit.Async.Deferred.prototype={repr:function(){
var _2e5;
if(this.fired==-1){
_2e5="unfired";
}else{
if(this.fired===0){
_2e5="success";
}else{
_2e5="error";
}
}
return "Deferred("+this.id+", "+_2e5+")";
},toString:MochiKit.Base.forwardCall("repr"),_nextId:MochiKit.Base.counter(),cancel:function(){
var self=MochiKit.Async;
if(this.fired==-1){
if(this.canceller){
this.canceller(this);
}else{
this.silentlyCancelled=true;
}
if(this.fired==-1){
this.errback(new self.CancelledError(this));
}
}else{
if((this.fired===0)&&(this.results[0] instanceof self.Deferred)){
this.results[0].cancel();
}
}
},_resback:function(res){
this.fired=((res instanceof Error)?1:0);
this.results[this.fired]=res;
this._fire();
},_check:function(){
if(this.fired!=-1){
if(!this.silentlyCancelled){
throw new MochiKit.Async.AlreadyCalledError(this);
}
this.silentlyCancelled=false;
return;
}
},callback:function(res){
this._check();
if(res instanceof MochiKit.Async.Deferred){
throw new Error("Deferred instances can only be chained if they are the result of a callback");
}
this._resback(res);
},errback:function(res){
this._check();
var self=MochiKit.Async;
if(res instanceof self.Deferred){
throw new Error("Deferred instances can only be chained if they are the result of a callback");
}
if(!(res instanceof Error)){
res=new self.GenericError(res);
}
this._resback(res);
},addBoth:function(fn){
if(arguments.length>1){
fn=MochiKit.Base.partial.apply(null,arguments);
}
return this.addCallbacks(fn,fn);
},addCallback:function(fn){
if(arguments.length>1){
fn=MochiKit.Base.partial.apply(null,arguments);
}
return this.addCallbacks(fn,null);
},addErrback:function(fn){
if(arguments.length>1){
fn=MochiKit.Base.partial.apply(null,arguments);
}
return this.addCallbacks(null,fn);
},addCallbacks:function(cb,eb){
if(this.chained){
throw new Error("Chained Deferreds can not be re-used");
}
this.chain.push([cb,eb]);
if(this.fired>=0){
this._fire();
}
return this;
},_fire:function(){
var _2f0=this.chain;
var _2f1=this.fired;
var res=this.results[_2f1];
var self=this;
var cb=null;
while(_2f0.length>0&&this.paused===0){
var pair=_2f0.shift();
var f=pair[_2f1];
if(f===null){
continue;
}
try{
res=f(res);
_2f1=((res instanceof Error)?1:0);
if(res instanceof MochiKit.Async.Deferred){
cb=function(res){
self._resback(res);
self.paused--;
if((self.paused===0)&&(self.fired>=0)){
self._fire();
}
};
this.paused++;
}
}
catch(err){
_2f1=1;
if(!(err instanceof Error)){
err=new MochiKit.Async.GenericError(err);
}
res=err;
}
}
this.fired=_2f1;
this.results[_2f1]=res;
if(cb&&this.paused){
res.addBoth(cb);
res.chained=true;
}
}};
MochiKit.Base.update(MochiKit.Async,{evalJSONRequest:function(req){
return MochiKit.Base.evalJSON(req.responseText);
},succeed:function(_2f9){
var d=new MochiKit.Async.Deferred();
d.callback.apply(d,arguments);
return d;
},fail:function(_2fb){
var d=new MochiKit.Async.Deferred();
d.errback.apply(d,arguments);
return d;
},getXMLHttpRequest:function(){
var self=arguments.callee;
if(!self.XMLHttpRequest){
var _2fe=[function(){
return new XMLHttpRequest();
},function(){
return new ActiveXObject("Msxml2.XMLHTTP");
},function(){
return new ActiveXObject("Microsoft.XMLHTTP");
},function(){
return new ActiveXObject("Msxml2.XMLHTTP.4.0");
},function(){
throw new MochiKit.Async.BrowserComplianceError("Browser does not support XMLHttpRequest");
}];
for(var i=0;i<_2fe.length;i++){
var func=_2fe[i];
try{
self.XMLHttpRequest=func;
return func();
}
catch(e){
}
}
}
return self.XMLHttpRequest();
},_xhr_onreadystatechange:function(d){
var m=MochiKit.Base;
if(this.readyState==4){
try{
this.onreadystatechange=null;
}
catch(e){
try{
this.onreadystatechange=m.noop;
}
catch(e){
}
}
var _303=null;
try{
_303=this.status;
if(!_303&&m.isNotEmpty(this.responseText)){
_303=304;
}
}
catch(e){
}
if(_303==200||_303==201||_303==204||_303==304||_303==1223){
d.callback(this);
}else{
var err=new MochiKit.Async.XMLHttpRequestError(this,"Request failed");
if(err.number){
d.errback(err);
}else{
d.errback(err);
}
}
}
},_xhr_canceller:function(req){
try{
req.onreadystatechange=null;
}
catch(e){
try{
req.onreadystatechange=MochiKit.Base.noop;
}
catch(e){
}
}
req.abort();
},sendXMLHttpRequest:function(req,_307){
if(typeof (_307)=="undefined"||_307===null){
_307="";
}
var m=MochiKit.Base;
var self=MochiKit.Async;
var d=new self.Deferred(m.partial(self._xhr_canceller,req));
try{
req.onreadystatechange=m.bind(self._xhr_onreadystatechange,req,d);
req.send(_307);
}
catch(e){
try{
req.onreadystatechange=null;
}
catch(ignore){
}
d.errback(e);
}
return d;
},doXHR:function(url,opts){
var self=MochiKit.Async;
return self.callLater(0,self._doXHR,url,opts);
},_doXHR:function(url,opts){
var m=MochiKit.Base;
opts=m.update({method:"GET",sendContent:""},opts);
var self=MochiKit.Async;
var req=self.getXMLHttpRequest();
if(opts.queryString){
var qs=m.queryString(opts.queryString);
if(qs){
url+="?"+qs;
}
}
if("username" in opts){
req.open(opts.method,url,true,opts.username,opts.password);
}else{
req.open(opts.method,url,true);
}
if(req.overrideMimeType&&opts.mimeType){
req.overrideMimeType(opts.mimeType);
}
req.setRequestHeader("X-Requested-With","XMLHttpRequest");
if(opts.headers){
var _314=opts.headers;
if(!m.isArrayLike(_314)){
_314=m.items(_314);
}
for(var i=0;i<_314.length;i++){
var _316=_314[i];
var name=_316[0];
var _318=_316[1];
req.setRequestHeader(name,_318);
}
}
return self.sendXMLHttpRequest(req,opts.sendContent);
},_buildURL:function(url){
if(arguments.length>1){
var m=MochiKit.Base;
var qs=m.queryString.apply(null,m.extend(null,arguments,1));
if(qs){
return url+"?"+qs;
}
}
return url;
},doSimpleXMLHttpRequest:function(url){
var self=MochiKit.Async;
url=self._buildURL.apply(self,arguments);
return self.doXHR(url);
},loadJSONDoc:function(url){
var self=MochiKit.Async;
url=self._buildURL.apply(self,arguments);
var d=self.doXHR(url,{"mimeType":"text/plain","headers":[["Accept","application/json"]]});
d=d.addCallback(self.evalJSONRequest);
return d;
},wait:function(_321,_322){
var d=new MochiKit.Async.Deferred();
var m=MochiKit.Base;
if(typeof (_322)!="undefined"){
d.addCallback(function(){
return _322;
});
}
var _325=setTimeout(m.bind("callback",d),Math.floor(_321*1000));
d.canceller=function(){
try{
clearTimeout(_325);
}
catch(e){
}
};
return d;
},callLater:function(_326,func){
var m=MochiKit.Base;
var _329=m.partial.apply(m,m.extend(null,arguments,1));
return MochiKit.Async.wait(_326).addCallback(function(res){
return _329();
});
}});
MochiKit.Async.DeferredLock=function(){
this.waiting=[];
this.locked=false;
this.id=this._nextId();
};
MochiKit.Async.DeferredLock.prototype={__class__:MochiKit.Async.DeferredLock,acquire:function(){
var d=new MochiKit.Async.Deferred();
if(this.locked){
this.waiting.push(d);
}else{
this.locked=true;
d.callback(this);
}
return d;
},release:function(){
if(!this.locked){
throw TypeError("Tried to release an unlocked DeferredLock");
}
this.locked=false;
if(this.waiting.length>0){
this.locked=true;
this.waiting.shift().callback(this);
}
},_nextId:MochiKit.Base.counter(),repr:function(){
var _32c;
if(this.locked){
_32c="locked, "+this.waiting.length+" waiting";
}else{
_32c="unlocked";
}
return "DeferredLock("+this.id+", "+_32c+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Async.DeferredList=function(list,_32e,_32f,_330,_331){
MochiKit.Async.Deferred.apply(this,[_331]);
this.list=list;
var _332=[];
this.resultList=_332;
this.finishedCount=0;
this.fireOnOneCallback=_32e;
this.fireOnOneErrback=_32f;
this.consumeErrors=_330;
var cb=MochiKit.Base.bind(this._cbDeferred,this);
for(var i=0;i<list.length;i++){
var d=list[i];
_332.push(undefined);
d.addCallback(cb,i,true);
d.addErrback(cb,i,false);
}
if(list.length===0&&!_32e){
this.callback(this.resultList);
}
};
MochiKit.Async.DeferredList.prototype=new MochiKit.Async.Deferred();
MochiKit.Async.DeferredList.prototype._cbDeferred=function(_336,_337,_338){
this.resultList[_336]=[_337,_338];
this.finishedCount+=1;
if(this.fired==-1){
if(_337&&this.fireOnOneCallback){
this.callback([_336,_338]);
}else{
if(!_337&&this.fireOnOneErrback){
this.errback(_338);
}else{
if(this.finishedCount==this.list.length){
this.callback(this.resultList);
}
}
}
}
if(!_337&&this.consumeErrors){
_338=null;
}
return _338;
};
MochiKit.Async.gatherResults=function(_339){
var d=new MochiKit.Async.DeferredList(_339,false,true,false);
d.addCallback(function(_33b){
var ret=[];
for(var i=0;i<_33b.length;i++){
ret.push(_33b[i][1]);
}
return ret;
});
return d;
};
MochiKit.Async.maybeDeferred=function(func){
var self=MochiKit.Async;
var _340;
try{
var r=func.apply(null,MochiKit.Base.extend([],arguments,1));
if(r instanceof self.Deferred){
_340=r;
}else{
if(r instanceof Error){
_340=self.fail(r);
}else{
_340=self.succeed(r);
}
}
}
catch(e){
_340=self.fail(e);
}
return _340;
};
MochiKit.Async.__new__=function(){
var m=MochiKit.Base;
var ne=m.partial(m._newNamedError,this);
ne("AlreadyCalledError",function(_344){
this.deferred=_344;
});
ne("CancelledError",function(_345){
this.deferred=_345;
});
ne("BrowserComplianceError",function(msg){
this.message=msg;
});
ne("GenericError",function(msg){
this.message=msg;
});
ne("XMLHttpRequestError",function(req,msg){
this.req=req;
this.message=msg;
try{
this.number=req.status;
}
catch(e){
}
});
m.nameFunctions(this);
};
MochiKit.Async.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Async);
MochiKit.Base._module("DOM","1.5",["Base"]);
MochiKit.Base.update(MochiKit.DOM,{currentWindow:function(){
return MochiKit.DOM._window;
},currentDocument:function(){
return MochiKit.DOM._document;
},withWindow:function(win,func){
var self=MochiKit.DOM;
var _34d=self._document;
var _34e=self._window;
var rval;
try{
self._window=win;
self._document=win.document;
rval=func();
}
catch(e){
self._window=_34e;
self._document=_34d;
throw e;
}
self._window=_34e;
self._document=_34d;
return rval;
},formContents:function(elem){
var _351=[];
var _352=[];
var m=MochiKit.Base;
var self=MochiKit.DOM;
if(typeof (elem)=="undefined"||elem===null){
elem=self._document.body;
}else{
elem=self.getElement(elem);
}
m.nodeWalk(elem,function(elem){
var name=elem.name;
if(m.isNotEmpty(name)){
var _357=elem.tagName.toUpperCase();
if(_357==="INPUT"&&(elem.type=="radio"||elem.type=="checkbox")&&!elem.checked){
return null;
}
if(_357==="SELECT"){
if(elem.type=="select-one"){
if(elem.selectedIndex>=0){
var opt=elem.options[elem.selectedIndex];
var v=opt.value;
if(!v){
var h=opt.outerHTML;
if(h&&!h.match(/^[^>]+\svalue\s*=/i)){
v=opt.text;
}
}
_351.push(name);
_352.push(v);
return null;
}
_351.push(name);
_352.push("");
return null;
}else{
var opts=elem.options;
if(!opts.length){
_351.push(name);
_352.push("");
return null;
}
for(var i=0;i<opts.length;i++){
var opt=opts[i];
if(!opt.selected){
continue;
}
var v=opt.value;
if(!v){
var h=opt.outerHTML;
if(h&&!h.match(/^[^>]+\svalue\s*=/i)){
v=opt.text;
}
}
_351.push(name);
_352.push(v);
}
return null;
}
}
if(_357==="FORM"||_357==="P"||_357==="SPAN"||_357==="DIV"){
return elem.childNodes;
}
_351.push(name);
_352.push(elem.value||"");
return null;
}
return elem.childNodes;
});
return [_351,_352];
},withDocument:function(doc,func){
var self=MochiKit.DOM;
var _360=self._document;
var rval;
try{
self._document=doc;
rval=func();
}
catch(e){
self._document=_360;
throw e;
}
self._document=_360;
return rval;
},registerDOMConverter:function(name,_363,wrap,_365){
MochiKit.DOM.domConverters.register(name,_363,wrap,_365);
},coerceToDOM:function(node,ctx){
var m=MochiKit.Base;
var im=MochiKit.Iter;
var self=MochiKit.DOM;
if(im){
var iter=im.iter;
var _36c=im.repeat;
}
var map=m.map;
var _36e=self.domConverters;
var _36f=arguments.callee;
var _370=m.NotFound;
while(true){
if(typeof (node)=="undefined"||node===null){
return null;
}
if(typeof (node)=="function"&&typeof (node.length)=="number"&&!(node instanceof Function)){
node=im?im.list(node):m.extend(null,node);
}
if(typeof (node.nodeType)!="undefined"&&node.nodeType>0){
return node;
}
if(typeof (node)=="number"||typeof (node)=="boolean"){
node=node.toString();
}
if(typeof (node)=="string"){
return self._document.createTextNode(node);
}
if(typeof (node.__dom__)=="function"){
node=node.__dom__(ctx);
continue;
}
if(typeof (node.dom)=="function"){
node=node.dom(ctx);
continue;
}
if(typeof (node)=="function"){
node=node.apply(ctx,[ctx]);
continue;
}
if(im){
var _371=null;
try{
_371=iter(node);
}
catch(e){
}
if(_371){
return map(_36f,_371,_36c(ctx));
}
}else{
if(m.isArrayLike(node)){
var func=function(n){
return _36f(n,ctx);
};
return map(func,node);
}
}
try{
node=_36e.match(node,ctx);
continue;
}
catch(e){
if(e!=_370){
throw e;
}
}
return self._document.createTextNode(node.toString());
}
return undefined;
},isChildNode:function(node,_375){
var self=MochiKit.DOM;
if(typeof (node)=="string"){
node=self.getElement(node);
}
if(typeof (_375)=="string"){
_375=self.getElement(_375);
}
if(typeof (node)=="undefined"||node===null){
return false;
}
while(node!=null&&node!==self._document){
if(node===_375){
return true;
}
node=node.parentNode;
}
return false;
},setNodeAttribute:function(node,attr,_379){
var o={};
o[attr]=_379;
try{
return MochiKit.DOM.updateNodeAttributes(node,o);
}
catch(e){
}
return null;
},getNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _37e=self.attributeArray.renames[attr];
var _37f=self.attributeArray.ignoreAttr[attr];
node=self.getElement(node);
try{
if(_37e){
return node[_37e];
}
var _380=node.getAttribute(attr);
if(_380!=_37f){
return _380;
}
}
catch(e){
}
return null;
},removeNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _384=self.attributeArray.renames[attr];
node=self.getElement(node);
try{
if(_384){
return node[_384];
}
return node.removeAttribute(attr);
}
catch(e){
}
return null;
},updateNodeAttributes:function(node,_386){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
if(_386){
var _389=MochiKit.Base.updatetree;
if(self.attributeArray.compliant){
for(var k in _386){
var v=_386[k];
if(typeof (v)=="object"&&typeof (elem[k])=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_389(elem[k],v);
}
}else{
if(k.substring(0,2)=="on"){
if(typeof (v)=="string"){
v=new Function(v);
}
elem[k]=v;
}else{
elem.setAttribute(k,v);
}
}
if(typeof (elem[k])=="string"&&elem[k]!=v){
elem[k]=v;
}
}
}else{
var _38c=self.attributeArray.renames;
for(var k in _386){
v=_386[k];
var _38d=_38c[k];
if(k=="style"&&typeof (v)=="string"){
elem.style.cssText=v;
}else{
if(typeof (_38d)=="string"){
elem[_38d]=v;
}else{
if(typeof (elem[k])=="object"&&typeof (v)=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_389(elem[k],v);
}
}else{
if(k.substring(0,2)=="on"){
if(typeof (v)=="string"){
v=new Function(v);
}
elem[k]=v;
}else{
elem.setAttribute(k,v);
}
}
}
}
if(typeof (elem[k])=="string"&&elem[k]!=v){
elem[k]=v;
}
}
}
}
return elem;
},appendChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _391=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _392=MochiKit.Base.concat;
while(_391.length){
var n=_391.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
elem.appendChild(n);
}else{
_391=_392(n,_391);
}
}
}
return elem;
},insertSiblingNodesBefore:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _397=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _398=elem.parentNode;
var _399=MochiKit.Base.concat;
while(_397.length){
var n=_397.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
_398.insertBefore(n,elem);
}else{
_397=_399(n,_397);
}
}
}
return _398;
},insertSiblingNodesAfter:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _39e=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
if(elem.nextSibling){
return self.insertSiblingNodesBefore(elem.nextSibling,_39e);
}else{
return self.appendChildNodes(elem.parentNode,_39e);
}
},replaceChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
arguments[0]=elem;
}
var _3a2;
while((_3a2=elem.firstChild)){
elem.removeChild(_3a2);
}
if(arguments.length<2){
return elem;
}else{
return self.appendChildNodes.apply(this,arguments);
}
},createDOM:function(name,_3a4){
var elem;
var self=MochiKit.DOM;
var m=MochiKit.Base;
if(typeof (_3a4)=="string"||typeof (_3a4)=="number"){
var args=m.extend([name,null],arguments,1);
return arguments.callee.apply(this,args);
}
if(typeof (name)=="string"){
var _3a9=self._xhtml;
if(_3a4&&!self.attributeArray.compliant){
var _3aa="";
if("name" in _3a4){
_3aa+=" name=\""+self.escapeHTML(_3a4.name)+"\"";
}
if(name=="input"&&"type" in _3a4){
_3aa+=" type=\""+self.escapeHTML(_3a4.type)+"\"";
}
if(_3aa){
name="<"+name+_3aa+">";
_3a9=false;
}
}
var d=self._document;
if(_3a9&&d===document){
elem=d.createElementNS("http://www.w3.org/1999/xhtml",name);
}else{
elem=d.createElement(name);
}
}else{
elem=name;
}
if(_3a4){
self.updateNodeAttributes(elem,_3a4);
}
if(arguments.length<=2){
return elem;
}else{
var args=m.extend([elem],arguments,2);
return self.appendChildNodes.apply(this,args);
}
},createDOMFunc:function(){
var m=MochiKit.Base;
return m.partial.apply(this,m.extend([MochiKit.DOM.createDOM],arguments));
},removeElement:function(elem){
var self=MochiKit.DOM;
if(typeof (elem)=="string"){
elem=self.getElement(elem);
}
var e=self.coerceToDOM(elem);
e.parentNode.removeChild(e);
return e;
},swapDOM:function(dest,src){
var self=MochiKit.DOM;
dest=self.getElement(dest);
var _3b3=dest.parentNode;
if(src){
if(typeof (src)=="string"){
src=self.getElement(src);
}
src=self.coerceToDOM(src,_3b3);
_3b3.replaceChild(src,dest);
}else{
_3b3.removeChild(dest);
}
return src;
},getElement:function(id){
var self=MochiKit.DOM;
if(arguments.length==1){
return ((typeof (id)=="string")?self._document.getElementById(id):id);
}else{
return MochiKit.Base.map(self.getElement,arguments);
}
},getElementsByTagAndClassName:function(_3b6,_3b7,_3b8){
var self=MochiKit.DOM;
if(typeof (_3b6)=="undefined"||_3b6===null){
_3b6="*";
}
if(typeof (_3b8)=="undefined"||_3b8===null){
_3b8=self._document;
}
_3b8=self.getElement(_3b8);
if(_3b8==null){
return [];
}
var _3ba=(_3b8.getElementsByTagName(_3b6)||self._document.all);
if(typeof (_3b7)=="undefined"||_3b7===null){
return MochiKit.Base.extend(null,_3ba);
}
var _3bb=[];
for(var i=0;i<_3ba.length;i++){
var _3bd=_3ba[i];
var cls=_3bd.className;
if(typeof (cls)!="string"){
cls=_3bd.getAttribute("class");
}
if(typeof (cls)=="string"){
var _3bf=cls.split(" ");
for(var j=0;j<_3bf.length;j++){
if(_3bf[j]==_3b7){
_3bb.push(_3bd);
break;
}
}
}
}
return _3bb;
},_newCallStack:function(path,once){
var rval=function(){
var _3c4=arguments.callee.callStack;
for(var i=0;i<_3c4.length;i++){
if(_3c4[i].apply(this,arguments)===false){
break;
}
}
if(once){
try{
this[path]=null;
}
catch(e){
}
}
};
rval.callStack=[];
return rval;
},addToCallStack:function(_3c6,path,func,once){
var self=MochiKit.DOM;
var _3cb=_3c6[path];
var _3cc=_3cb;
if(!(typeof (_3cb)=="function"&&typeof (_3cb.callStack)=="object"&&_3cb.callStack!==null)){
_3cc=self._newCallStack(path,once);
if(typeof (_3cb)=="function"){
_3cc.callStack.push(_3cb);
}
_3c6[path]=_3cc;
}
_3cc.callStack.push(func);
},addLoadEvent:function(func){
var self=MochiKit.DOM;
self.addToCallStack(self._window,"onload",func,true);
},focusOnLoad:function(_3cf){
var self=MochiKit.DOM;
self.addLoadEvent(function(){
_3cf=self.getElement(_3cf);
if(_3cf){
_3cf.focus();
}
});
},setElementClass:function(_3d1,_3d2){
var self=MochiKit.DOM;
var obj=self.getElement(_3d1);
if(self.attributeArray.compliant){
obj.setAttribute("class",_3d2);
}else{
obj.setAttribute("className",_3d2);
}
},toggleElementClass:function(_3d5){
var self=MochiKit.DOM;
for(var i=1;i<arguments.length;i++){
var obj=self.getElement(arguments[i]);
if(!self.addElementClass(obj,_3d5)){
self.removeElementClass(obj,_3d5);
}
}
},addElementClass:function(_3d9,_3da){
var self=MochiKit.DOM;
var obj=self.getElement(_3d9);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
self.setElementClass(obj,_3da);
return true;
}
if(cls==_3da){
return false;
}
var _3de=cls.split(" ");
for(var i=0;i<_3de.length;i++){
if(_3de[i]==_3da){
return false;
}
}
self.setElementClass(obj,cls+" "+_3da);
return true;
},removeElementClass:function(_3e0,_3e1){
var self=MochiKit.DOM;
var obj=self.getElement(_3e0);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
return false;
}
if(cls==_3e1){
self.setElementClass(obj,"");
return true;
}
var _3e5=cls.split(" ");
for(var i=0;i<_3e5.length;i++){
if(_3e5[i]==_3e1){
_3e5.splice(i,1);
self.setElementClass(obj,_3e5.join(" "));
return true;
}
}
return false;
},swapElementClass:function(_3e7,_3e8,_3e9){
var obj=MochiKit.DOM.getElement(_3e7);
var res=MochiKit.DOM.removeElementClass(obj,_3e8);
if(res){
MochiKit.DOM.addElementClass(obj,_3e9);
}
return res;
},hasElementClass:function(_3ec,_3ed){
var obj=MochiKit.DOM.getElement(_3ec);
if(obj==null){
return false;
}
var cls=obj.className;
if(typeof (cls)!="string"&&typeof (obj.getAttribute)=="function"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"){
return false;
}
var _3f0=cls.split(" ");
for(var i=1;i<arguments.length;i++){
var good=false;
for(var j=0;j<_3f0.length;j++){
if(_3f0[j]==arguments[i]){
good=true;
break;
}
}
if(!good){
return false;
}
}
return true;
},escapeHTML:function(s){
return s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
},toHTML:function(dom){
return MochiKit.DOM.emitHTML(dom).join("");
},emitHTML:function(dom,lst){
if(typeof (lst)=="undefined"||lst===null){
lst=[];
}
var _3f8=[dom];
var self=MochiKit.DOM;
var _3fa=self.escapeHTML;
var _3fb=self.attributeArray;
while(_3f8.length){
dom=_3f8.pop();
if(typeof (dom)=="string"){
lst.push(dom);
}else{
if(dom.nodeType==1){
lst.push("<"+dom.tagName.toLowerCase());
var _3fc=[];
var _3fd=_3fb(dom);
for(var i=0;i<_3fd.length;i++){
var a=_3fd[i];
_3fc.push([" ",a.name,"=\"",_3fa(a.value),"\""]);
}
_3fc.sort();
for(i=0;i<_3fc.length;i++){
var _400=_3fc[i];
for(var j=0;j<_400.length;j++){
lst.push(_400[j]);
}
}
if(dom.hasChildNodes()){
lst.push(">");
_3f8.push("</"+dom.tagName.toLowerCase()+">");
var _402=dom.childNodes;
for(i=_402.length-1;i>=0;i--){
_3f8.push(_402[i]);
}
}else{
lst.push("/>");
}
}else{
if(dom.nodeType==3){
lst.push(_3fa(dom.nodeValue));
}
}
}
}
return lst;
},scrapeText:function(node,_404){
var rval=[];
(function(node){
var cn=node.childNodes;
if(cn){
for(var i=0;i<cn.length;i++){
arguments.callee.call(this,cn[i]);
}
}
var _409=node.nodeValue;
if(typeof (_409)=="string"){
rval.push(_409);
}
})(MochiKit.DOM.getElement(node));
if(_404){
return rval;
}else{
return rval.join("");
}
},removeEmptyTextNodes:function(_40a){
_40a=MochiKit.DOM.getElement(_40a);
for(var i=0;i<_40a.childNodes.length;i++){
var node=_40a.childNodes[i];
if(node.nodeType==3&&!/\S/.test(node.nodeValue)){
node.parentNode.removeChild(node);
}
}
},getFirstElementByTagAndClassName:function(_40d,_40e,_40f){
var self=MochiKit.DOM;
if(typeof (_40d)=="undefined"||_40d===null){
_40d="*";
}
if(typeof (_40f)=="undefined"||_40f===null){
_40f=self._document;
}
_40f=self.getElement(_40f);
if(_40f==null){
return null;
}
var _411=(_40f.getElementsByTagName(_40d)||self._document.all);
if(_411.length<=0){
return null;
}else{
if(typeof (_40e)=="undefined"||_40e===null){
return _411[0];
}
}
for(var i=0;i<_411.length;i++){
var _413=_411[i];
var cls=_413.className;
if(typeof (cls)!="string"){
cls=_413.getAttribute("class");
}
if(typeof (cls)=="string"){
var _415=cls.split(" ");
for(var j=0;j<_415.length;j++){
if(_415[j]==_40e){
return _413;
}
}
}
}
return null;
},getFirstParentByTagAndClassName:function(elem,_418,_419){
var self=MochiKit.DOM;
elem=self.getElement(elem);
if(typeof (_418)=="undefined"||_418===null){
_418="*";
}else{
_418=_418.toUpperCase();
}
if(typeof (_419)=="undefined"||_419===null){
_419=null;
}
if(elem){
elem=elem.parentNode;
}
while(elem&&elem.tagName){
var _41b=elem.tagName.toUpperCase();
if((_418==="*"||_418==_41b)&&(_419===null||self.hasElementClass(elem,_419))){
return elem;
}
elem=elem.parentNode;
}
return null;
},__new__:function(win){
var m=MochiKit.Base;
if(typeof (document)!="undefined"){
this._document=document;
var _41e="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
this._xhtml=(document.documentElement&&document.createElementNS&&document.documentElement.namespaceURI===_41e);
}else{
if(MochiKit.MockDOM){
this._document=MochiKit.MockDOM.document;
}
}
this._window=win;
this.domConverters=new m.AdapterRegistry();
var _41f=this._document.createElement("span");
var _420;
if(_41f&&_41f.attributes&&_41f.attributes.length>0){
var _421=m.filter;
_420=function(node){
return _421(_420.ignoreAttrFilter,node.attributes);
};
_420.ignoreAttr={};
var _423=_41f.attributes;
var _424=_420.ignoreAttr;
for(var i=0;i<_423.length;i++){
var a=_423[i];
_424[a.name]=a.value;
}
_420.ignoreAttrFilter=function(a){
return (_420.ignoreAttr[a.name]!=a.value);
};
_420.compliant=false;
_420.renames={"class":"className","checked":"defaultChecked","usemap":"useMap","for":"htmlFor","readonly":"readOnly","colspan":"colSpan","bgcolor":"bgColor","cellspacing":"cellSpacing","cellpadding":"cellPadding"};
}else{
_420=function(node){
return node.attributes;
};
_420.compliant=true;
_420.ignoreAttr={};
_420.renames={};
}
_420.__export__=false;
this.attributeArray=_420;
m._deprecated(this,"computedStyle","MochiKit.Style.getStyle","1.4");
m._deprecated(this,"elementDimensions","MochiKit.Style.getElementDimensions","1.4");
m._deprecated(this,"elementPosition","MochiKit.Style.getElementPosition","1.4");
m._deprecated(this,"getViewportDimensions","MochiKit.Style.getViewportDimensions","1.4");
m._deprecated(this,"hideElement","MochiKit.Style.hideElement","1.4");
m._deprecated(this,"makeClipping","MochiKit.Style.makeClipping","1.4.1");
m._deprecated(this,"makePositioned","MochiKit.Style.makePositioned","1.4.1");
m._deprecated(this,"setElementDimensions","MochiKit.Style.setElementDimensions","1.4");
m._deprecated(this,"setElementPosition","MochiKit.Style.setElementPosition","1.4");
m._deprecated(this,"setDisplayForElement","MochiKit.Style.setDisplayForElement","1.4");
m._deprecated(this,"setOpacity","MochiKit.Style.setOpacity","1.4");
m._deprecated(this,"showElement","MochiKit.Style.showElement","1.4");
m._deprecated(this,"undoClipping","MochiKit.Style.undoClipping","1.4.1");
m._deprecated(this,"undoPositioned","MochiKit.Style.undoPositioned","1.4.1");
m._deprecated(this,"Coordinates","MochiKit.Style.Coordinates","1.4");
m._deprecated(this,"Dimensions","MochiKit.Style.Dimensions","1.4");
var _429=this.createDOMFunc;
this.UL=_429("ul");
this.OL=_429("ol");
this.LI=_429("li");
this.DL=_429("dl");
this.DT=_429("dt");
this.DD=_429("dd");
this.TD=_429("td");
this.TR=_429("tr");
this.TBODY=_429("tbody");
this.THEAD=_429("thead");
this.TFOOT=_429("tfoot");
this.TABLE=_429("table");
this.TH=_429("th");
this.INPUT=_429("input");
this.SPAN=_429("span");
this.A=_429("a");
this.DIV=_429("div");
this.IMG=_429("img");
this.BUTTON=_429("button");
this.TT=_429("tt");
this.PRE=_429("pre");
this.H1=_429("h1");
this.H2=_429("h2");
this.H3=_429("h3");
this.H4=_429("h4");
this.H5=_429("h5");
this.H6=_429("h6");
this.BR=_429("br");
this.HR=_429("hr");
this.LABEL=_429("label");
this.TEXTAREA=_429("textarea");
this.FORM=_429("form");
this.P=_429("p");
this.SELECT=_429("select");
this.OPTION=_429("option");
this.OPTGROUP=_429("optgroup");
this.LEGEND=_429("legend");
this.FIELDSET=_429("fieldset");
this.STRONG=_429("strong");
this.CANVAS=_429("canvas");
this.$=this.getElement;
m.nameFunctions(this);
}});
MochiKit.DOM.__new__(((typeof (window)=="undefined")?this:window));
if(MochiKit.__export__){
withWindow=MochiKit.DOM.withWindow;
withDocument=MochiKit.DOM.withDocument;
}
MochiKit.Base._exportSymbols(this,MochiKit.DOM);
MochiKit.Base._module("Selector","1.5",["Base","DOM","Iter"]);
MochiKit.Selector.Selector=function(_42a){
this.params={classNames:[],pseudoClassNames:[]};
this.expression=_42a.toString().replace(/(^\s+|\s+$)/g,"");
this.parseExpression();
this.compileMatcher();
};
MochiKit.Selector.Selector.prototype={__class__:MochiKit.Selector.Selector,parseExpression:function(){
function abort(_42b){
throw "Parse error in selector: "+_42b;
}
if(this.expression==""){
abort("empty expression");
}
var repr=MochiKit.Base.repr;
var _42d=this.params;
var expr=this.expression;
var _42f,_430,_431,rest;
while(_42f=expr.match(/^(.*)\[([a-z0-9_:-]+?)(?:([~\|!^$*]?=)(?:"([^"]*)"|([^\]\s]*)))?\]$/i)){
_42d.attributes=_42d.attributes||[];
_42d.attributes.push({name:_42f[2],operator:_42f[3],value:_42f[4]||_42f[5]||""});
expr=_42f[1];
}
if(expr=="*"){
return this.params.wildcard=true;
}
while(_42f=expr.match(/^([^a-z0-9_-])?([a-z0-9_-]+(?:\([^)]*\))?)(.*)/i)){
_430=_42f[1];
_431=_42f[2];
rest=_42f[3];
switch(_430){
case "#":
_42d.id=_431;
break;
case ".":
_42d.classNames.push(_431);
break;
case ":":
_42d.pseudoClassNames.push(_431);
break;
case "":
case undefined:
_42d.tagName=_431.toUpperCase();
break;
default:
abort(repr(expr));
}
expr=rest;
}
if(expr.length>0){
abort(repr(expr));
}
},buildMatchExpression:function(){
var repr=MochiKit.Base.repr;
var _434=this.params;
var _435=[];
var _436,i;
function childElements(_438){
return "MochiKit.Base.filter(function (node) { return node.nodeType == 1; }, "+_438+".childNodes)";
}
if(_434.wildcard){
_435.push("true");
}
if(_436=_434.id){
_435.push("element.id == "+repr(_436));
}
if(_436=_434.tagName){
_435.push("element.tagName.toUpperCase() == "+repr(_436));
}
if((_436=_434.classNames).length>0){
for(i=0;i<_436.length;i++){
_435.push("MochiKit.DOM.hasElementClass(element, "+repr(_436[i])+")");
}
}
if((_436=_434.pseudoClassNames).length>0){
for(i=0;i<_436.length;i++){
var _439=_436[i].match(/^([^(]+)(?:\((.*)\))?$/);
var _43a=_439[1];
var _43b=_439[2];
switch(_43a){
case "root":
_435.push("element.nodeType == 9 || element === element.ownerDocument.documentElement");
break;
case "nth-child":
case "nth-last-child":
case "nth-of-type":
case "nth-last-of-type":
_439=_43b.match(/^((?:(\d+)n\+)?(\d+)|odd|even)$/);
if(!_439){
throw "Invalid argument to pseudo element nth-child: "+_43b;
}
var a,b;
if(_439[0]=="odd"){
a=2;
b=1;
}else{
if(_439[0]=="even"){
a=2;
b=0;
}else{
a=_439[2]&&parseInt(_439)||null;
b=parseInt(_439[3]);
}
}
_435.push("this.nthChild(element,"+a+","+b+","+!!_43a.match("^nth-last")+","+!!_43a.match("of-type$")+")");
break;
case "first-child":
_435.push("this.nthChild(element, null, 1)");
break;
case "last-child":
_435.push("this.nthChild(element, null, 1, true)");
break;
case "first-of-type":
_435.push("this.nthChild(element, null, 1, false, true)");
break;
case "last-of-type":
_435.push("this.nthChild(element, null, 1, true, true)");
break;
case "only-child":
_435.push(childElements("element.parentNode")+".length == 1");
break;
case "only-of-type":
_435.push("MochiKit.Base.filter(function (node) { return node.tagName == element.tagName; }, "+childElements("element.parentNode")+").length == 1");
break;
case "empty":
_435.push("element.childNodes.length == 0");
break;
case "enabled":
_435.push("(this.isUIElement(element) && element.disabled === false)");
break;
case "disabled":
_435.push("(this.isUIElement(element) && element.disabled === true)");
break;
case "checked":
_435.push("(this.isUIElement(element) && element.checked === true)");
break;
case "not":
var _43e=new MochiKit.Selector.Selector(_43b);
_435.push("!( "+_43e.buildMatchExpression()+")");
break;
}
}
}
if(_436=_434.attributes){
MochiKit.Base.map(function(_43f){
var _440="MochiKit.DOM.getNodeAttribute(element, "+repr(_43f.name)+")";
var _441=function(_442){
return _440+".split("+repr(_442)+")";
};
_435.push(_440+" != null");
switch(_43f.operator){
case "=":
_435.push(_440+" == "+repr(_43f.value));
break;
case "~=":
_435.push("MochiKit.Base.findValue("+_441(" ")+", "+repr(_43f.value)+") > -1");
break;
case "^=":
_435.push(_440+".substring(0, "+_43f.value.length+") == "+repr(_43f.value));
break;
case "$=":
_435.push(_440+".substring("+_440+".length - "+_43f.value.length+") == "+repr(_43f.value));
break;
case "*=":
_435.push(_440+".match("+repr(_43f.value)+")");
break;
case "|=":
_435.push(_441("-")+"[0].toUpperCase() == "+repr(_43f.value.toUpperCase()));
break;
case "!=":
_435.push(_440+" != "+repr(_43f.value));
break;
case "":
case undefined:
break;
default:
throw "Unknown operator "+_43f.operator+" in selector";
}
},_436);
}
return _435.join(" && ");
},compileMatcher:function(){
var code="return (!element.tagName) ? false : "+this.buildMatchExpression()+";";
this.match=new Function("element",code);
},nthChild:function(_444,a,b,_447,_448){
var _449=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_444.parentNode.childNodes);
if(_448){
_449=MochiKit.Base.filter(function(node){
return node.tagName==_444.tagName;
},_449);
}
if(_447){
_449=MochiKit.Iter.reversed(_449);
}
if(a){
var _44c=MochiKit.Base.findIdentical(_449,_444);
return ((_44c+1-b)/a)%1==0;
}else{
return b==MochiKit.Base.findIdentical(_449,_444)+1;
}
},isUIElement:function(_44d){
return MochiKit.Base.findValue(["input","button","select","option","textarea","object"],_44d.tagName.toLowerCase())>-1;
},findElements:function(_44e,axis){
var _450;
if(axis==undefined){
axis="";
}
function inScope(_451,_452){
if(axis==""){
return MochiKit.DOM.isChildNode(_451,_452);
}else{
if(axis==">"){
return _451.parentNode===_452;
}else{
if(axis=="+"){
return _451===nextSiblingElement(_452);
}else{
if(axis=="~"){
var _453=_452;
while(_453=nextSiblingElement(_453)){
if(_451===_453){
return true;
}
}
return false;
}else{
throw "Invalid axis: "+axis;
}
}
}
}
}
if(_450=MochiKit.DOM.getElement(this.params.id)){
if(this.match(_450)){
if(!_44e||inScope(_450,_44e)){
return [_450];
}
}
}
function nextSiblingElement(node){
node=node.nextSibling;
while(node&&node.nodeType!=1){
node=node.nextSibling;
}
return node;
}
if(axis==""){
_44e=(_44e||MochiKit.DOM.currentDocument()).getElementsByTagName(this.params.tagName||"*");
}else{
if(axis==">"){
if(!_44e){
throw "> combinator not allowed without preceeding expression";
}
_44e=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_44e.childNodes);
}else{
if(axis=="+"){
if(!_44e){
throw "+ combinator not allowed without preceeding expression";
}
_44e=nextSiblingElement(_44e)&&[nextSiblingElement(_44e)];
}else{
if(axis=="~"){
if(!_44e){
throw "~ combinator not allowed without preceeding expression";
}
var _456=[];
while(nextSiblingElement(_44e)){
_44e=nextSiblingElement(_44e);
_456.push(_44e);
}
_44e=_456;
}
}
}
}
if(!_44e){
return [];
}
var _457=MochiKit.Base.filter(MochiKit.Base.bind(function(_458){
return this.match(_458);
},this),_44e);
return _457;
},repr:function(){
return "Selector("+this.expression+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Selector,{findChildElements:function(_459,_45a){
_459=MochiKit.DOM.getElement(_459);
var uniq=function(arr){
var res=[];
for(var i=0;i<arr.length;i++){
if(MochiKit.Base.findIdentical(res,arr[i])<0){
res.push(arr[i]);
}
}
return res;
};
return MochiKit.Base.flattenArray(MochiKit.Base.map(function(_45f){
var _460="";
var _461=function(_462,expr){
if(match=expr.match(/^[>+~]$/)){
_460=match[0];
return _462;
}else{
var _464=new MochiKit.Selector.Selector(expr);
var _465=MochiKit.Iter.reduce(function(_466,_467){
return MochiKit.Base.extend(_466,_464.findElements(_467||_459,_460));
},_462,[]);
_460="";
return _465;
}
};
var _468=_45f.replace(/(^\s+|\s+$)/g,"").split(/\s+/);
return uniq(MochiKit.Iter.reduce(_461,_468,[null]));
},_45a));
},findDocElements:function(){
return MochiKit.Selector.findChildElements(MochiKit.DOM.currentDocument(),arguments);
},__new__:function(){
this.$$=this.findDocElements;
MochiKit.Base.nameFunctions(this);
}});
MochiKit.Selector.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Selector);
MochiKit.Base._module("Style","1.5",["Base","DOM"]);
MochiKit.Style.Dimensions=function(w,h){
if(!(this instanceof MochiKit.Style.Dimensions)){
return new MochiKit.Style.Dimensions(w,h);
}
this.w=w;
this.h=h;
};
MochiKit.Style.Dimensions.prototype.__repr__=function(){
var repr=MochiKit.Base.repr;
return "{w: "+repr(this.w)+", h: "+repr(this.h)+"}";
};
MochiKit.Style.Dimensions.prototype.toString=function(){
return this.__repr__();
};
MochiKit.Style.Coordinates=function(x,y){
if(!(this instanceof MochiKit.Style.Coordinates)){
return new MochiKit.Style.Coordinates(x,y);
}
this.x=x;
this.y=y;
};
MochiKit.Style.Coordinates.prototype.__repr__=function(){
var repr=MochiKit.Base.repr;
return "{x: "+repr(this.x)+", y: "+repr(this.y)+"}";
};
MochiKit.Style.Coordinates.prototype.toString=function(){
return this.__repr__();
};
MochiKit.Base.update(MochiKit.Style,{getStyle:function(elem,_470){
var dom=MochiKit.DOM;
var d=dom._document;
elem=dom.getElement(elem);
_470=MochiKit.Base.camelize(_470);
if(!elem||elem==d){
return undefined;
}
if(_470=="opacity"&&typeof (elem.filters)!="undefined"){
var _473=(MochiKit.Style.getStyle(elem,"filter")||"").match(/alpha\(opacity=(.*)\)/);
if(_473&&_473[1]){
return parseFloat(_473[1])/100;
}
return 1;
}
if(_470=="float"||_470=="cssFloat"||_470=="styleFloat"){
if(elem.style["float"]){
return elem.style["float"];
}else{
if(elem.style.cssFloat){
return elem.style.cssFloat;
}else{
if(elem.style.styleFloat){
return elem.style.styleFloat;
}else{
return "none";
}
}
}
}
var _474=elem.style?elem.style[_470]:null;
if(!_474){
if(d.defaultView&&d.defaultView.getComputedStyle){
var css=d.defaultView.getComputedStyle(elem,null);
_470=_470.replace(/([A-Z])/g,"-$1").toLowerCase();
_474=css?css.getPropertyValue(_470):null;
}else{
if(elem.currentStyle){
_474=elem.currentStyle[_470];
if(/^\d/.test(_474)&&!/px$/.test(_474)&&_470!="fontWeight"){
var left=elem.style.left;
var _477=elem.runtimeStyle.left;
elem.runtimeStyle.left=elem.currentStyle.left;
elem.style.left=_474||0;
_474=elem.style.pixelLeft+"px";
elem.style.left=left;
elem.runtimeStyle.left=_477;
}
}
}
}
if(_470=="opacity"){
_474=parseFloat(_474);
}
if(/Opera/.test(navigator.userAgent)&&(MochiKit.Base.findValue(["left","top","right","bottom"],_470)!=-1)){
if(MochiKit.Style.getStyle(elem,"position")=="static"){
_474="auto";
}
}
return _474=="auto"?null:_474;
},setStyle:function(elem,_479){
elem=MochiKit.DOM.getElement(elem);
for(var name in _479){
switch(name){
case "opacity":
MochiKit.Style.setOpacity(elem,_479[name]);
break;
case "float":
case "cssFloat":
case "styleFloat":
if(typeof (elem.style["float"])!="undefined"){
elem.style["float"]=_479[name];
}else{
if(typeof (elem.style.cssFloat)!="undefined"){
elem.style.cssFloat=_479[name];
}else{
elem.style.styleFloat=_479[name];
}
}
break;
default:
elem.style[MochiKit.Base.camelize(name)]=_479[name];
}
}
},setOpacity:function(elem,o){
elem=MochiKit.DOM.getElement(elem);
var self=MochiKit.Style;
if(o==1){
var _47e=/Gecko/.test(navigator.userAgent)&&!(/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent));
elem.style["opacity"]=_47e?0.999999:1;
if(/MSIE/.test(navigator.userAgent)){
elem.style["filter"]=self.getStyle(elem,"filter").replace(/alpha\([^\)]*\)/gi,"");
}
}else{
if(o<0.00001){
o=0;
}
elem.style["opacity"]=o;
if(/MSIE/.test(navigator.userAgent)){
elem.style["filter"]=self.getStyle(elem,"filter").replace(/alpha\([^\)]*\)/gi,"")+"alpha(opacity="+o*100+")";
}
}
},getElementPosition:function(elem,_480){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
var _483=function(o){
return o!=null&&o.nodeType==null&&typeof (o.x)=="number"&&typeof (o.y)=="number";
};
if(typeof (elem)=="string"){
elem=dom.getElement(elem);
}
if(elem==null||(!_483(elem)&&self.getStyle(elem,"display")=="none")){
return undefined;
}
var c=new self.Coordinates(0,0);
var box=null;
var _487=null;
var d=MochiKit.DOM._document;
var de=d.documentElement;
var b=d.body;
if(!elem.parentNode&&elem.x&&elem.y){
c.x+=elem.x||0;
c.y+=elem.y||0;
}else{
if(elem.getBoundingClientRect){
box=elem.getBoundingClientRect();
c.x+=box.left+(de.scrollLeft||b.scrollLeft)-(de.clientLeft||0);
c.y+=box.top+(de.scrollTop||b.scrollTop)-(de.clientTop||0);
}else{
if(elem.offsetParent){
c.x+=elem.offsetLeft;
c.y+=elem.offsetTop;
_487=elem.offsetParent;
if(_487!=elem){
while(_487){
c.x+=parseInt(_487.style.borderLeftWidth)||0;
c.y+=parseInt(_487.style.borderTopWidth)||0;
c.x+=_487.offsetLeft;
c.y+=_487.offsetTop;
_487=_487.offsetParent;
}
}
var ua=navigator.userAgent.toLowerCase();
if((typeof (opera)!="undefined"&&parseFloat(opera.version())<9)||(ua.indexOf("AppleWebKit")!=-1&&self.getStyle(elem,"position")=="absolute")){
c.x-=b.offsetLeft;
c.y-=b.offsetTop;
}
if(elem.parentNode){
_487=elem.parentNode;
}else{
_487=null;
}
while(_487){
var _48c=_487.tagName.toUpperCase();
if(_48c==="BODY"||_48c==="HTML"){
break;
}
var disp=self.getStyle(_487,"display");
if(disp.search(/^inline|table-row.*$/i)){
c.x-=_487.scrollLeft;
c.y-=_487.scrollTop;
}
if(_487.parentNode){
_487=_487.parentNode;
}else{
_487=null;
}
}
}
}
}
if(_480){
_480=arguments.callee(_480);
if(_480){
c.x-=(_480.x||0);
c.y-=(_480.y||0);
}
}
return c;
},setElementPosition:function(elem,_48f,_490){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_490)=="undefined"){
_490="px";
}
var _491={};
var _492=MochiKit.Base.isUndefinedOrNull;
if(!_492(_48f.x)){
_491["left"]=_48f.x+_490;
}
if(!_492(_48f.y)){
_491["top"]=_48f.y+_490;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_491});
},makePositioned:function(_493){
_493=MochiKit.DOM.getElement(_493);
var pos=MochiKit.Style.getStyle(_493,"position");
if(pos=="static"||!pos){
_493.style.position="relative";
if(/Opera/.test(navigator.userAgent)){
_493.style.top=0;
_493.style.left=0;
}
}
},undoPositioned:function(_495){
_495=MochiKit.DOM.getElement(_495);
if(_495.style.position=="relative"){
_495.style.position=_495.style.top=_495.style.left=_495.style.bottom=_495.style.right="";
}
},makeClipping:function(_496){
_496=MochiKit.DOM.getElement(_496);
var s=_496.style;
var _498={"overflow":s.overflow,"overflow-x":s.overflowX,"overflow-y":s.overflowY};
if((MochiKit.Style.getStyle(_496,"overflow")||"visible")!="hidden"){
_496.style.overflow="hidden";
_496.style.overflowX="hidden";
_496.style.overflowY="hidden";
}
return _498;
},undoClipping:function(_499,_49a){
_499=MochiKit.DOM.getElement(_499);
if(typeof (_49a)=="string"){
_499.style.overflow=_49a;
}else{
if(_49a!=null){
_499.style.overflow=_49a["overflow"];
_499.style.overflowX=_49a["overflow-x"];
_499.style.overflowY=_49a["overflow-y"];
}
}
},getElementDimensions:function(elem,_49c){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
if(typeof (elem.w)=="number"||typeof (elem.h)=="number"){
return new self.Dimensions(elem.w||0,elem.h||0);
}
elem=dom.getElement(elem);
if(!elem){
return undefined;
}
var disp=self.getStyle(elem,"display");
if(disp=="none"||disp==""||typeof (disp)=="undefined"){
var s=elem.style;
var _4a1=s.visibility;
var _4a2=s.position;
var _4a3=s.display;
s.visibility="hidden";
s.position="absolute";
s.display=self._getDefaultDisplay(elem);
var _4a4=elem.offsetWidth;
var _4a5=elem.offsetHeight;
s.display=_4a3;
s.position=_4a2;
s.visibility=_4a1;
}else{
_4a4=elem.offsetWidth||0;
_4a5=elem.offsetHeight||0;
}
if(_49c){
var _4a6="colSpan" in elem&&"rowSpan" in elem;
var _4a7=(_4a6&&elem.parentNode&&self.getStyle(elem.parentNode,"borderCollapse")=="collapse");
if(_4a7){
if(/MSIE/.test(navigator.userAgent)){
var _4a8=elem.previousSibling?0.5:1;
var _4a9=elem.nextSibling?0.5:1;
}else{
var _4a8=0.5;
var _4a9=0.5;
}
}else{
var _4a8=1;
var _4a9=1;
}
_4a4-=Math.round((parseFloat(self.getStyle(elem,"paddingLeft"))||0)+(parseFloat(self.getStyle(elem,"paddingRight"))||0)+_4a8*(parseFloat(self.getStyle(elem,"borderLeftWidth"))||0)+_4a9*(parseFloat(self.getStyle(elem,"borderRightWidth"))||0));
if(_4a6){
if(/Gecko|Opera/.test(navigator.userAgent)&&!/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent)){
var _4aa=0;
}else{
if(/MSIE/.test(navigator.userAgent)){
var _4aa=1;
}else{
var _4aa=_4a7?0.5:1;
}
}
}else{
var _4aa=1;
}
_4a5-=Math.round((parseFloat(self.getStyle(elem,"paddingTop"))||0)+(parseFloat(self.getStyle(elem,"paddingBottom"))||0)+_4aa*((parseFloat(self.getStyle(elem,"borderTopWidth"))||0)+(parseFloat(self.getStyle(elem,"borderBottomWidth"))||0)));
}
return new self.Dimensions(_4a4,_4a5);
},setElementDimensions:function(elem,_4ac,_4ad){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_4ad)=="undefined"){
_4ad="px";
}
var _4ae={};
var _4af=MochiKit.Base.isUndefinedOrNull;
if(!_4af(_4ac.w)){
_4ae["width"]=_4ac.w+_4ad;
}
if(!_4af(_4ac.h)){
_4ae["height"]=_4ac.h+_4ad;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_4ae});
},_getDefaultDisplay:function(elem){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
elem=dom.getElement(elem);
if(!elem){
return undefined;
}
var _4b3=elem.tagName.toUpperCase();
return self._defaultDisplay[_4b3]||"block";
},setDisplayForElement:function(_4b4,_4b5){
var _4b6=MochiKit.Base.extend(null,arguments,1);
var _4b7=MochiKit.DOM.getElement;
for(var i=0;i<_4b6.length;i++){
_4b5=_4b7(_4b6[i]);
if(_4b5){
_4b5.style.display=_4b4;
}
}
},getViewportDimensions:function(){
var d=new MochiKit.Style.Dimensions();
var w=MochiKit.DOM._window;
var b=MochiKit.DOM._document.body;
if(w.innerWidth){
d.w=w.innerWidth;
d.h=w.innerHeight;
}else{
if(b&&b.parentElement&&b.parentElement.clientWidth){
d.w=b.parentElement.clientWidth;
d.h=b.parentElement.clientHeight;
}else{
if(b&&b.clientWidth){
d.w=b.clientWidth;
d.h=b.clientHeight;
}
}
}
return d;
},getViewportPosition:function(){
var c=new MochiKit.Style.Coordinates(0,0);
var d=MochiKit.DOM._document;
var de=d.documentElement;
var db=d.body;
if(de&&(de.scrollTop||de.scrollLeft)){
c.x=de.scrollLeft;
c.y=de.scrollTop;
}else{
if(db){
c.x=db.scrollLeft;
c.y=db.scrollTop;
}
}
return c;
},__new__:function(){
var m=MochiKit.Base;
var _4c1=["A","ABBR","ACRONYM","B","BASEFONT","BDO","BIG","BR","CITE","CODE","DFN","EM","FONT","I","IMG","KBD","LABEL","Q","S","SAMP","SMALL","SPAN","STRIKE","STRONG","SUB","SUP","TEXTAREA","TT","U","VAR"];
this._defaultDisplay={"TABLE":"table","THEAD":"table-header-group","TBODY":"table-row-group","TFOOT":"table-footer-group","COLGROUP":"table-column-group","COL":"table-column","TR":"table-row","TD":"table-cell","TH":"table-cell","CAPTION":"table-caption","LI":"list-item","INPUT":"inline-block","SELECT":"inline-block"};
if(/MSIE/.test(navigator.userAgent)){
for(var k in this._defaultDisplay){
var v=this._defaultDisplay[k];
if(v.indexOf("table")==0){
this._defaultDisplay[k]="block";
}
}
}
for(var i=0;i<_4c1.length;i++){
this._defaultDisplay[_4c1[i]]="inline";
}
m._deprecated(this,"elementPosition","MochiKit.Style.getElementPosition","1.3");
m._deprecated(this,"elementDimensions","MochiKit.Style.getElementDimensions","1.3");
this.hideElement=m.partial(this.setDisplayForElement,"none");
this.showElement=m.partial(this.setDisplayForElement,"block");
m.nameFunctions(this);
}});
MochiKit.Style.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Style);
MochiKit.Base._module("LoggingPane","1.5",["Base","Logging"]);
MochiKit.LoggingPane.createLoggingPane=function(_4c5){
var m=MochiKit.LoggingPane;
_4c5=!(!_4c5);
if(m._loggingPane&&m._loggingPane.inline!=_4c5){
m._loggingPane.closePane();
m._loggingPane=null;
}
if(!m._loggingPane||m._loggingPane.closed){
m._loggingPane=new m.LoggingPane(_4c5,MochiKit.Logging.logger);
}
return m._loggingPane;
};
MochiKit.LoggingPane.LoggingPane=function(_4c7,_4c8){
if(typeof (_4c8)=="undefined"||_4c8===null){
_4c8=MochiKit.Logging.logger;
}
this.logger=_4c8;
var _4c9=MochiKit.Base.update;
var _4ca=MochiKit.Base.updatetree;
var bind=MochiKit.Base.bind;
var _4cc=MochiKit.Base.clone;
var win=window;
var uid="_MochiKit_LoggingPane";
if(typeof (MochiKit.DOM)!="undefined"){
win=MochiKit.DOM.currentWindow();
}
if(!_4c7){
var url=win.location.href.split("?")[0].replace(/[#:\/.><&%-]/g,"_");
var name=uid+"_"+url;
var nwin=win.open("",name,"dependent,resizable,height=200");
if(!nwin){
alert("Not able to open debugging window due to pop-up blocking.");
return undefined;
}
nwin.document.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\" "+"\"http://www.w3.org/TR/html4/loose.dtd\">"+"<html><head><title>[MochiKit.LoggingPane]</title></head>"+"<body></body></html>");
nwin.document.close();
nwin.document.title+=" "+win.document.title;
win=nwin;
}
var doc=win.document;
this.doc=doc;
var _4d3=doc.getElementById(uid);
var _4d4=!!_4d3;
if(_4d3&&typeof (_4d3.loggingPane)!="undefined"){
_4d3.loggingPane.logger=this.logger;
_4d3.loggingPane.buildAndApplyFilter();
return _4d3.loggingPane;
}
if(_4d4){
var _4d5;
while((_4d5=_4d3.firstChild)){
_4d3.removeChild(_4d5);
}
}else{
_4d3=doc.createElement("div");
_4d3.id=uid;
}
_4d3.loggingPane=this;
var _4d6=doc.createElement("input");
var _4d7=doc.createElement("input");
var _4d8=doc.createElement("button");
var _4d9=doc.createElement("button");
var _4da=doc.createElement("button");
var _4db=doc.createElement("button");
var _4dc=doc.createElement("div");
var _4dd=doc.createElement("div");
var _4de=uid+"_Listener";
this.colorTable=_4cc(this.colorTable);
var _4df=[];
var _4e0=null;
var _4e1=function(msg){
var _4e3=msg.level;
if(typeof (_4e3)=="number"){
_4e3=MochiKit.Logging.LogLevel[_4e3];
}
return _4e3;
};
var _4e4=function(msg){
return msg.info.join(" ");
};
var _4e6=bind(function(msg){
var _4e8=_4e1(msg);
var text=_4e4(msg);
var c=this.colorTable[_4e8];
var p=doc.createElement("span");
p.className="MochiKit-LogMessage MochiKit-LogLevel-"+_4e8;
p.style.cssText="margin: 0px; white-space: -moz-pre-wrap; white-space: -o-pre-wrap; white-space: pre-wrap; white-space: pre-line; word-wrap: break-word; wrap-option: emergency; color: "+c;
p.appendChild(doc.createTextNode(_4e8+": "+text));
_4dd.appendChild(p);
_4dd.appendChild(doc.createElement("br"));
if(_4dc.offsetHeight>_4dc.scrollHeight){
_4dc.scrollTop=0;
}else{
_4dc.scrollTop=_4dc.scrollHeight;
}
},this);
var _4ec=function(msg){
_4df[_4df.length]=msg;
_4e6(msg);
};
var _4ee=function(){
var _4ef,_4f0;
try{
_4ef=new RegExp(_4d6.value);
_4f0=new RegExp(_4d7.value);
}
catch(e){
logDebug("Error in filter regex: "+e.message);
return null;
}
return function(msg){
return (_4ef.test(_4e1(msg))&&_4f0.test(_4e4(msg)));
};
};
var _4f2=function(){
while(_4dd.firstChild){
_4dd.removeChild(_4dd.firstChild);
}
};
var _4f3=function(){
_4df=[];
_4f2();
};
var _4f4=bind(function(){
if(this.closed){
return;
}
this.closed=true;
if(MochiKit.LoggingPane._loggingPane==this){
MochiKit.LoggingPane._loggingPane=null;
}
this.logger.removeListener(_4de);
try{
try{
_4d3.loggingPane=null;
}
catch(e){
logFatal("Bookmarklet was closed incorrectly.");
}
if(_4c7){
_4d3.parentNode.removeChild(_4d3);
}else{
this.win.close();
}
}
catch(e){
}
},this);
var _4f5=function(){
_4f2();
for(var i=0;i<_4df.length;i++){
var msg=_4df[i];
if(_4e0===null||_4e0(msg)){
_4e6(msg);
}
}
};
this.buildAndApplyFilter=function(){
_4e0=_4ee();
_4f5();
this.logger.removeListener(_4de);
this.logger.addListener(_4de,_4e0,_4ec);
};
var _4f8=bind(function(){
_4df=this.logger.getMessages();
_4f5();
},this);
var _4f9=bind(function(_4fa){
_4fa=_4fa||window.event;
key=_4fa.which||_4fa.keyCode;
if(key==13){
this.buildAndApplyFilter();
}
},this);
var _4fb="display: block; z-index: 1000; left: 0px; bottom: 0px; position: fixed; width: 100%; background-color: white; font: "+this.logFont;
if(_4c7){
_4fb+="; height: 10em; border-top: 2px solid black";
}else{
_4fb+="; height: 100%;";
}
_4d3.style.cssText=_4fb;
if(!_4d4){
doc.body.appendChild(_4d3);
}
_4fb={"cssText":"width: 33%; display: inline; font: "+this.logFont};
_4ca(_4d6,{"value":"FATAL|ERROR|WARNING|INFO|DEBUG","onkeypress":_4f9,"style":_4fb});
_4d3.appendChild(_4d6);
_4ca(_4d7,{"value":".*","onkeypress":_4f9,"style":_4fb});
_4d3.appendChild(_4d7);
_4fb="width: 8%; display:inline; font: "+this.logFont;
_4d8.appendChild(doc.createTextNode("Filter"));
_4d8.onclick=bind("buildAndApplyFilter",this);
_4d8.style.cssText=_4fb;
_4d3.appendChild(_4d8);
_4d9.appendChild(doc.createTextNode("Load"));
_4d9.onclick=_4f8;
_4d9.style.cssText=_4fb;
_4d3.appendChild(_4d9);
_4da.appendChild(doc.createTextNode("Clear"));
_4da.onclick=_4f3;
_4da.style.cssText=_4fb;
_4d3.appendChild(_4da);
_4db.appendChild(doc.createTextNode("Close"));
_4db.onclick=_4f4;
_4db.style.cssText=_4fb;
_4d3.appendChild(_4db);
_4dc.style.cssText="overflow: auto; width: 100%";
_4dd.style.cssText="width: 100%; height: "+(_4c7?"8em":"100%");
_4dc.appendChild(_4dd);
_4d3.appendChild(_4dc);
this.buildAndApplyFilter();
_4f8();
if(_4c7){
this.win=undefined;
}else{
this.win=win;
}
this.inline=_4c7;
this.closePane=_4f4;
this.closed=false;
return this;
};
MochiKit.LoggingPane.LoggingPane.prototype={"logFont":"8pt Verdana,sans-serif","colorTable":{"ERROR":"red","FATAL":"darkred","WARNING":"blue","INFO":"black","DEBUG":"green"}};
MochiKit.LoggingPane.__new__=function(){
MochiKit.Base.nameFunctions(this);
MochiKit.LoggingPane._loggingPane=null;
};
MochiKit.LoggingPane.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.LoggingPane);
MochiKit.Base._module("Color","1.5",["Base","DOM","Style"]);
MochiKit.Color.Color=function(red,_4fd,blue,_4ff){
if(typeof (_4ff)=="undefined"||_4ff===null){
_4ff=1;
}
this.rgb={r:red,g:_4fd,b:blue,a:_4ff};
};
MochiKit.Color.Color.prototype={__class__:MochiKit.Color.Color,colorWithAlpha:function(_500){
var rgb=this.rgb;
var m=MochiKit.Color;
return m.Color.fromRGB(rgb.r,rgb.g,rgb.b,_500);
},colorWithHue:function(hue){
var hsl=this.asHSL();
hsl.h=hue;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithSaturation:function(_506){
var hsl=this.asHSL();
hsl.s=_506;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithLightness:function(_509){
var hsl=this.asHSL();
hsl.l=_509;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},darkerColorWithLevel:function(_50c){
var hsl=this.asHSL();
hsl.l=Math.max(hsl.l-_50c,0);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},lighterColorWithLevel:function(_50f){
var hsl=this.asHSL();
hsl.l=Math.min(hsl.l+_50f,1);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},blendedColor:function(_512,_513){
if(typeof (_513)=="undefined"||_513===null){
_513=0.5;
}
var sf=1-_513;
var s=this.rgb;
var d=_512.rgb;
var df=_513;
return MochiKit.Color.Color.fromRGB((s.r*sf)+(d.r*df),(s.g*sf)+(d.g*df),(s.b*sf)+(d.b*df),(s.a*sf)+(d.a*df));
},compareRGB:function(_518){
var a=this.asRGB();
var b=_518.asRGB();
return MochiKit.Base.compare([a.r,a.g,a.b,a.a],[b.r,b.g,b.b,b.a]);
},isLight:function(){
return this.asHSL().b>0.5;
},isDark:function(){
return (!this.isLight());
},toHSLString:function(){
var c=this.asHSL();
var ccc=MochiKit.Color.clampColorComponent;
var rval=this._hslString;
if(!rval){
var mid=(ccc(c.h,360).toFixed(0)+","+ccc(c.s,100).toPrecision(4)+"%"+","+ccc(c.l,100).toPrecision(4)+"%");
var a=c.a;
if(a>=1){
a=1;
rval="hsl("+mid+")";
}else{
if(a<=0){
a=0;
}
rval="hsla("+mid+","+a+")";
}
this._hslString=rval;
}
return rval;
},toRGBString:function(){
var c=this.rgb;
var ccc=MochiKit.Color.clampColorComponent;
var rval=this._rgbString;
if(!rval){
var mid=(ccc(c.r,255).toFixed(0)+","+ccc(c.g,255).toFixed(0)+","+ccc(c.b,255).toFixed(0));
if(c.a!=1){
rval="rgba("+mid+","+c.a+")";
}else{
rval="rgb("+mid+")";
}
this._rgbString=rval;
}
return rval;
},asRGB:function(){
return MochiKit.Base.clone(this.rgb);
},toHexString:function(){
var m=MochiKit.Color;
var c=this.rgb;
var ccc=MochiKit.Color.clampColorComponent;
var rval=this._hexString;
if(!rval){
rval=("#"+m.toColorPart(ccc(c.r,255))+m.toColorPart(ccc(c.g,255))+m.toColorPart(ccc(c.b,255)));
this._hexString=rval;
}
return rval;
},asHSV:function(){
var hsv=this.hsv;
var c=this.rgb;
if(typeof (hsv)=="undefined"||hsv===null){
hsv=MochiKit.Color.rgbToHSV(this.rgb);
this.hsv=hsv;
}
return MochiKit.Base.clone(hsv);
},asHSL:function(){
var hsl=this.hsl;
var c=this.rgb;
if(typeof (hsl)=="undefined"||hsl===null){
hsl=MochiKit.Color.rgbToHSL(this.rgb);
this.hsl=hsl;
}
return MochiKit.Base.clone(hsl);
},toString:function(){
return this.toRGBString();
},repr:function(){
var c=this.rgb;
var col=[c.r,c.g,c.b,c.a];
return this.__class__.NAME+"("+col.join(", ")+")";
}};
MochiKit.Base.update(MochiKit.Color.Color,{fromRGB:function(red,_52f,blue,_531){
var _532=MochiKit.Color.Color;
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_52f=rgb.g;
blue=rgb.b;
if(typeof (rgb.a)=="undefined"){
_531=undefined;
}else{
_531=rgb.a;
}
}
return new _532(red,_52f,blue,_531);
},fromHSL:function(hue,_535,_536,_537){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hslToRGB.apply(m,arguments));
},fromHSV:function(hue,_53a,_53b,_53c){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hsvToRGB.apply(m,arguments));
},fromName:function(name){
var _53f=MochiKit.Color.Color;
if(name.charAt(0)=="\""){
name=name.substr(1,name.length-2);
}
var _540=_53f._namedColors[name.toLowerCase()];
if(typeof (_540)=="string"){
return _53f.fromHexString(_540);
}else{
if(name=="transparent"){
return _53f.transparentColor();
}
}
return null;
},fromString:function(_541){
var self=MochiKit.Color.Color;
var _543=_541.substr(0,3);
if(_543=="rgb"){
return self.fromRGBString(_541);
}else{
if(_543=="hsl"){
return self.fromHSLString(_541);
}else{
if(_541.charAt(0)=="#"){
return self.fromHexString(_541);
}
}
}
return self.fromName(_541);
},fromHexString:function(_544){
if(_544.charAt(0)=="#"){
_544=_544.substring(1);
}
var _545=[];
var i,hex;
if(_544.length==3){
for(i=0;i<3;i++){
hex=_544.substr(i,1);
_545.push(parseInt(hex+hex,16)/255);
}
}else{
for(i=0;i<6;i+=2){
hex=_544.substr(i,2);
_545.push(parseInt(hex,16)/255);
}
}
var _548=MochiKit.Color.Color;
return _548.fromRGB.apply(_548,_545);
},_fromColorString:function(pre,_54a,_54b,_54c){
if(_54c.indexOf(pre)===0){
_54c=_54c.substring(_54c.indexOf("(",3)+1,_54c.length-1);
}
var _54d=_54c.split(/\s*,\s*/);
var _54e=[];
for(var i=0;i<_54d.length;i++){
var c=_54d[i];
var val;
var _552=c.substring(c.length-3);
if(c.charAt(c.length-1)=="%"){
val=0.01*parseFloat(c.substring(0,c.length-1));
}else{
if(_552=="deg"){
val=parseFloat(c)/360;
}else{
if(_552=="rad"){
val=parseFloat(c)/(Math.PI*2);
}else{
val=_54b[i]*parseFloat(c);
}
}
}
_54e.push(val);
}
return this[_54a].apply(this,_54e);
},fromComputedStyle:function(elem,_554){
var d=MochiKit.DOM;
var cls=MochiKit.Color.Color;
for(elem=d.getElement(elem);elem;elem=elem.parentNode){
var _557=MochiKit.Style.getStyle.apply(d,arguments);
if(!_557){
continue;
}
var _558=cls.fromString(_557);
if(!_558){
break;
}
if(_558.asRGB().a>0){
return _558;
}
}
return null;
},fromBackground:function(elem){
var cls=MochiKit.Color.Color;
return cls.fromComputedStyle(elem,"backgroundColor","background-color")||cls.whiteColor();
},fromText:function(elem){
var cls=MochiKit.Color.Color;
return cls.fromComputedStyle(elem,"color","color")||cls.blackColor();
},namedColors:function(){
return MochiKit.Base.clone(MochiKit.Color.Color._namedColors);
}});
MochiKit.Base.update(MochiKit.Color,{clampColorComponent:function(v,_55e){
v*=_55e;
if(v<0){
return 0;
}else{
if(v>_55e){
return _55e;
}else{
return v;
}
}
},_hslValue:function(n1,n2,hue){
if(hue>6){
hue-=6;
}else{
if(hue<0){
hue+=6;
}
}
var val;
if(hue<1){
val=n1+(n2-n1)*hue;
}else{
if(hue<3){
val=n2;
}else{
if(hue<4){
val=n1+(n2-n1)*(4-hue);
}else{
val=n1;
}
}
}
return val;
},hsvToRGB:function(hue,_564,_565,_566){
if(arguments.length==1){
var hsv=hue;
hue=hsv.h;
_564=hsv.s;
_565=hsv.v;
_566=hsv.a;
}
var red;
var _569;
var blue;
if(_564===0){
red=_565;
_569=_565;
blue=_565;
}else{
var i=Math.floor(hue*6);
var f=(hue*6)-i;
var p=_565*(1-_564);
var q=_565*(1-(_564*f));
var t=_565*(1-(_564*(1-f)));
switch(i){
case 1:
red=q;
_569=_565;
blue=p;
break;
case 2:
red=p;
_569=_565;
blue=t;
break;
case 3:
red=p;
_569=q;
blue=_565;
break;
case 4:
red=t;
_569=p;
blue=_565;
break;
case 5:
red=_565;
_569=p;
blue=q;
break;
case 6:
case 0:
red=_565;
_569=t;
blue=p;
break;
}
}
return {r:red,g:_569,b:blue,a:_566};
},hslToRGB:function(hue,_571,_572,_573){
if(arguments.length==1){
var hsl=hue;
hue=hsl.h;
_571=hsl.s;
_572=hsl.l;
_573=hsl.a;
}
var red;
var _576;
var blue;
if(_571===0){
red=_572;
_576=_572;
blue=_572;
}else{
var m2;
if(_572<=0.5){
m2=_572*(1+_571);
}else{
m2=_572+_571-(_572*_571);
}
var m1=(2*_572)-m2;
var f=MochiKit.Color._hslValue;
var h6=hue*6;
red=f(m1,m2,h6+2);
_576=f(m1,m2,h6);
blue=f(m1,m2,h6-2);
}
return {r:red,g:_576,b:blue,a:_573};
},rgbToHSV:function(red,_57d,blue,_57f){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_57d=rgb.g;
blue=rgb.b;
_57f=rgb.a;
}
var max=Math.max(Math.max(red,_57d),blue);
var min=Math.min(Math.min(red,_57d),blue);
var hue;
var _584;
var _585=max;
if(min==max){
hue=0;
_584=0;
}else{
var _586=(max-min);
_584=_586/max;
if(red==max){
hue=(_57d-blue)/_586;
}else{
if(_57d==max){
hue=2+((blue-red)/_586);
}else{
hue=4+((red-_57d)/_586);
}
}
hue/=6;
if(hue<0){
hue+=1;
}
if(hue>1){
hue-=1;
}
}
return {h:hue,s:_584,v:_585,a:_57f};
},rgbToHSL:function(red,_588,blue,_58a){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_588=rgb.g;
blue=rgb.b;
_58a=rgb.a;
}
var max=Math.max(red,Math.max(_588,blue));
var min=Math.min(red,Math.min(_588,blue));
var hue;
var _58f;
var _590=(max+min)/2;
var _591=max-min;
if(_591===0){
hue=0;
_58f=0;
}else{
if(_590<=0.5){
_58f=_591/(max+min);
}else{
_58f=_591/(2-max-min);
}
if(red==max){
hue=(_588-blue)/_591;
}else{
if(_588==max){
hue=2+((blue-red)/_591);
}else{
hue=4+((red-_588)/_591);
}
}
hue/=6;
if(hue<0){
hue+=1;
}
if(hue>1){
hue-=1;
}
}
return {h:hue,s:_58f,l:_590,a:_58a};
},toColorPart:function(num){
num=Math.round(num);
var _593=num.toString(16);
if(num<16){
return "0"+_593;
}
return _593;
},__new__:function(){
var m=MochiKit.Base;
this.Color.fromRGBString=m.bind(this.Color._fromColorString,this.Color,"rgb","fromRGB",[1/255,1/255,1/255,1]);
this.Color.fromHSLString=m.bind(this.Color._fromColorString,this.Color,"hsl","fromHSL",[1/360,0.01,0.01,1]);
var _595=1/3;
var _596={black:[0,0,0],blue:[0,0,1],brown:[0.6,0.4,0.2],cyan:[0,1,1],darkGray:[_595,_595,_595],gray:[0.5,0.5,0.5],green:[0,1,0],lightGray:[2*_595,2*_595,2*_595],magenta:[1,0,1],orange:[1,0.5,0],purple:[0.5,0,0.5],red:[1,0,0],transparent:[0,0,0,0],white:[1,1,1],yellow:[1,1,0]};
var _597=function(name,r,g,b,a){
var rval=this.fromRGB(r,g,b,a);
this[name]=function(){
return rval;
};
return rval;
};
for(var k in _596){
var name=k+"Color";
var _5a0=m.concat([_597,this.Color,name],_596[k]);
this.Color[name]=m.bind.apply(null,_5a0);
}
var _5a1=function(){
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof MochiKit.Color.Color)){
return false;
}
}
return true;
};
var _5a3=function(a,b){
return a.compareRGB(b);
};
m.nameFunctions(this);
m.registerComparator(this.Color.NAME,_5a1,_5a3);
}});
MochiKit.Color.__new__();
MochiKit.Color.Color._namedColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};
MochiKit.Base._exportSymbols(this,MochiKit.Color);
MochiKit.Base._module("Signal","1.5",["Base","DOM","Style"]);
MochiKit.Signal._observers=[];
MochiKit.Signal.Event=function(src,e){
this._event=e||window.event;
this._src=src;
};
MochiKit.Signal.Event.__export__=false;
MochiKit.Base.update(MochiKit.Signal.Event.prototype,{__repr__:function(){
var repr=MochiKit.Base.repr;
var str="{event(): "+repr(this.event())+", src(): "+repr(this.src())+", type(): "+repr(this.type())+", target(): "+repr(this.target());
if(this.type()&&this.type().indexOf("key")===0||this.type().indexOf("mouse")===0||this.type().indexOf("click")!=-1||this.type()=="contextmenu"){
str+=", modifier(): "+"{alt: "+repr(this.modifier().alt)+", ctrl: "+repr(this.modifier().ctrl)+", meta: "+repr(this.modifier().meta)+", shift: "+repr(this.modifier().shift)+", any: "+repr(this.modifier().any)+"}";
}
if(this.type()&&this.type().indexOf("key")===0){
str+=", key(): {code: "+repr(this.key().code)+", string: "+repr(this.key().string)+"}";
}
if(this.type()&&(this.type().indexOf("mouse")===0||this.type().indexOf("click")!=-1||this.type()=="contextmenu")){
str+=", mouse(): {page: "+repr(this.mouse().page)+", client: "+repr(this.mouse().client);
if(this.type()!="mousemove"&&this.type()!="mousewheel"){
str+=", button: {left: "+repr(this.mouse().button.left)+", middle: "+repr(this.mouse().button.middle)+", right: "+repr(this.mouse().button.right)+"}";
}
if(this.type()=="mousewheel"){
str+=", wheel: "+repr(this.mouse().wheel);
}
str+="}";
}
if(this.type()=="mouseover"||this.type()=="mouseout"||this.type()=="mouseenter"||this.type()=="mouseleave"){
str+=", relatedTarget(): "+repr(this.relatedTarget());
}
str+="}";
return str;
},toString:function(){
return this.__repr__();
},src:function(){
return this._src;
},event:function(){
return this._event;
},type:function(){
if(this._event.type==="DOMMouseScroll"){
return "mousewheel";
}else{
return this._event.type||undefined;
}
},target:function(){
return this._event.target||this._event.srcElement;
},_relatedTarget:null,relatedTarget:function(){
if(this._relatedTarget!==null){
return this._relatedTarget;
}
var elem=null;
if(this.type()=="mouseover"||this.type()=="mouseenter"){
elem=(this._event.relatedTarget||this._event.fromElement);
}else{
if(this.type()=="mouseout"||this.type()=="mouseleave"){
elem=(this._event.relatedTarget||this._event.toElement);
}
}
try{
if(elem!==null&&elem.nodeType!==null){
this._relatedTarget=elem;
return elem;
}
}
catch(ignore){
}
return undefined;
},_modifier:null,modifier:function(){
if(this._modifier!==null){
return this._modifier;
}
var m={};
m.alt=this._event.altKey;
m.ctrl=this._event.ctrlKey;
m.meta=this._event.metaKey||false;
m.shift=this._event.shiftKey;
m.any=m.alt||m.ctrl||m.shift||m.meta;
this._modifier=m;
return m;
},_key:null,key:function(){
if(this._key!==null){
return this._key;
}
var k={};
if(this.type()&&this.type().indexOf("key")===0){
if(this.type()=="keydown"||this.type()=="keyup"){
k.code=this._event.keyCode;
k.string=(MochiKit.Signal._specialKeys[k.code]||"KEY_UNKNOWN");
this._key=k;
return k;
}else{
if(this.type()=="keypress"){
k.code=0;
k.string="";
if(typeof (this._event.charCode)!="undefined"&&this._event.charCode!==0&&!MochiKit.Signal._specialMacKeys[this._event.charCode]){
k.code=this._event.charCode;
k.string=String.fromCharCode(k.code);
}else{
if(this._event.keyCode&&typeof (this._event.charCode)=="undefined"){
k.code=this._event.keyCode;
k.string=String.fromCharCode(k.code);
}
}
this._key=k;
return k;
}
}
}
return undefined;
},_mouse:null,mouse:function(){
if(this._mouse!==null){
return this._mouse;
}
var m={};
var e=this._event;
if(this.type()&&(this.type().indexOf("mouse")===0||this.type().indexOf("click")!=-1||this.type()=="contextmenu")){
m.client=new MochiKit.Style.Coordinates(0,0);
if(e.clientX||e.clientY){
m.client.x=(!e.clientX||e.clientX<0)?0:e.clientX;
m.client.y=(!e.clientY||e.clientY<0)?0:e.clientY;
}
m.page=new MochiKit.Style.Coordinates(0,0);
if(e.pageX||e.pageY){
m.page.x=(!e.pageX||e.pageX<0)?0:e.pageX;
m.page.y=(!e.pageY||e.pageY<0)?0:e.pageY;
}else{
var de=MochiKit.DOM._document.documentElement;
var b=MochiKit.DOM._document.body;
m.page.x=e.clientX+(de.scrollLeft||b.scrollLeft)-(de.clientLeft||0);
m.page.y=e.clientY+(de.scrollTop||b.scrollTop)-(de.clientTop||0);
}
if(this.type()!="mousemove"&&this.type()!="mousewheel"){
m.button={};
m.button.left=false;
m.button.right=false;
m.button.middle=false;
if(e.which){
m.button.left=(e.which==1);
m.button.middle=(e.which==2);
m.button.right=(e.which==3);
}else{
m.button.left=!!(e.button&1);
m.button.right=!!(e.button&2);
m.button.middle=!!(e.button&4);
}
}
if(this.type()=="mousewheel"){
m.wheel=new MochiKit.Style.Coordinates(0,0);
if(e.wheelDeltaX||e.wheelDeltaY){
m.wheel.x=e.wheelDeltaX/-40||0;
m.wheel.y=e.wheelDeltaY/-40||0;
}else{
if(e.wheelDelta){
m.wheel.y=e.wheelDelta/-40;
}else{
m.wheel.y=e.detail||0;
}
}
}
this._mouse=m;
return m;
}
return undefined;
},stop:function(){
this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){
if(this._event.stopPropagation){
this._event.stopPropagation();
}else{
this._event.cancelBubble=true;
}
},preventDefault:function(){
if(this._event.preventDefault){
this._event.preventDefault();
}else{
if(this._confirmUnload===null){
this._event.returnValue=false;
}
}
},_confirmUnload:null,confirmUnload:function(msg){
if(this.type()=="beforeunload"){
this._confirmUnload=msg;
this._event.returnValue=msg;
}
}});
MochiKit.Signal._specialMacKeys={3:"KEY_ENTER",63289:"KEY_NUM_PAD_CLEAR",63276:"KEY_PAGE_UP",63277:"KEY_PAGE_DOWN",63275:"KEY_END",63273:"KEY_HOME",63234:"KEY_ARROW_LEFT",63232:"KEY_ARROW_UP",63235:"KEY_ARROW_RIGHT",63233:"KEY_ARROW_DOWN",63302:"KEY_INSERT",63272:"KEY_DELETE"};
(function(){
var _5b2=MochiKit.Signal._specialMacKeys;
for(i=63236;i<=63242;i++){
_5b2[i]="KEY_F"+(i-63236+1);
}
})();
MochiKit.Signal._specialKeys={8:"KEY_BACKSPACE",9:"KEY_TAB",12:"KEY_NUM_PAD_CLEAR",13:"KEY_ENTER",16:"KEY_SHIFT",17:"KEY_CTRL",18:"KEY_ALT",19:"KEY_PAUSE",20:"KEY_CAPS_LOCK",27:"KEY_ESCAPE",32:"KEY_SPACEBAR",33:"KEY_PAGE_UP",34:"KEY_PAGE_DOWN",35:"KEY_END",36:"KEY_HOME",37:"KEY_ARROW_LEFT",38:"KEY_ARROW_UP",39:"KEY_ARROW_RIGHT",40:"KEY_ARROW_DOWN",44:"KEY_PRINT_SCREEN",45:"KEY_INSERT",46:"KEY_DELETE",59:"KEY_SEMICOLON",91:"KEY_WINDOWS_LEFT",92:"KEY_WINDOWS_RIGHT",93:"KEY_SELECT",106:"KEY_NUM_PAD_ASTERISK",107:"KEY_NUM_PAD_PLUS_SIGN",109:"KEY_NUM_PAD_HYPHEN-MINUS",110:"KEY_NUM_PAD_FULL_STOP",111:"KEY_NUM_PAD_SOLIDUS",144:"KEY_NUM_LOCK",145:"KEY_SCROLL_LOCK",186:"KEY_SEMICOLON",187:"KEY_EQUALS_SIGN",188:"KEY_COMMA",189:"KEY_HYPHEN-MINUS",190:"KEY_FULL_STOP",191:"KEY_SOLIDUS",192:"KEY_GRAVE_ACCENT",219:"KEY_LEFT_SQUARE_BRACKET",220:"KEY_REVERSE_SOLIDUS",221:"KEY_RIGHT_SQUARE_BRACKET",222:"KEY_APOSTROPHE"};
(function(){
var _5b3=MochiKit.Signal._specialKeys;
for(var i=48;i<=57;i++){
_5b3[i]="KEY_"+(i-48);
}
for(i=65;i<=90;i++){
_5b3[i]="KEY_"+String.fromCharCode(i);
}
for(i=96;i<=105;i++){
_5b3[i]="KEY_NUM_PAD_"+(i-96);
}
for(i=112;i<=123;i++){
_5b3[i]="KEY_F"+(i-112+1);
}
})();
MochiKit.Signal.Ident=function(_5b5){
this.source=_5b5.source;
this.signal=_5b5.signal;
this.listener=_5b5.listener;
this.isDOM=_5b5.isDOM;
this.objOrFunc=_5b5.objOrFunc;
this.funcOrStr=_5b5.funcOrStr;
this.connected=_5b5.connected;
};
MochiKit.Signal.Ident.__export__=false;
MochiKit.Signal.Ident.prototype={};
MochiKit.Base.update(MochiKit.Signal,{_unloadCache:function(){
var self=MochiKit.Signal;
var _5b7=self._observers;
for(var i=0;i<_5b7.length;i++){
if(_5b7[i].signal!=="onload"&&_5b7[i].signal!=="onunload"){
self._disconnect(_5b7[i]);
}
}
},_listener:function(src,sig,func,obj,_5bd){
var self=MochiKit.Signal;
var E=self.Event;
if(!_5bd){
if(typeof (func.im_self)=="undefined"){
return MochiKit.Base.bindLate(func,obj);
}else{
return func;
}
}
obj=obj||src;
if(typeof (func)=="string"){
if(sig==="onload"||sig==="onunload"){
return function(_5c0){
obj[func].apply(obj,[new E(src,_5c0)]);
var _5c1=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:obj,funcOrStr:func});
MochiKit.Signal._disconnect(_5c1);
};
}else{
return function(_5c2){
obj[func].apply(obj,[new E(src,_5c2)]);
};
}
}else{
if(sig==="onload"||sig==="onunload"){
return function(_5c3){
func.apply(obj,[new E(src,_5c3)]);
var _5c4=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:func});
MochiKit.Signal._disconnect(_5c4);
};
}else{
return function(_5c5){
func.apply(obj,[new E(src,_5c5)]);
};
}
}
},_browserAlreadyHasMouseEnterAndLeave:function(){
return /MSIE/.test(navigator.userAgent);
},_browserLacksMouseWheelEvent:function(){
return /Gecko\//.test(navigator.userAgent);
},_mouseEnterListener:function(src,sig,func,obj){
var E=MochiKit.Signal.Event;
return function(_5cb){
var e=new E(src,_5cb);
try{
e.relatedTarget().nodeName;
}
catch(err){
return;
}
e.stop();
if(MochiKit.DOM.isChildNode(e.relatedTarget(),src)){
return;
}
e.type=function(){
return sig;
};
if(typeof (func)=="string"){
return obj[func].apply(obj,[e]);
}else{
return func.apply(obj,[e]);
}
};
},_getDestPair:function(_5cd,_5ce){
var obj=null;
var func=null;
if(typeof (_5ce)!="undefined"){
obj=_5cd;
func=_5ce;
if(typeof (_5ce)=="string"){
if(typeof (_5cd[_5ce])!="function"){
throw new Error("'funcOrStr' must be a function on 'objOrFunc'");
}
}else{
if(typeof (_5ce)!="function"){
throw new Error("'funcOrStr' must be a function or string");
}
}
}else{
if(typeof (_5cd)!="function"){
throw new Error("'objOrFunc' must be a function if 'funcOrStr' is not given");
}else{
func=_5cd;
}
}
return [obj,func];
},connect:function(src,sig,_5d3,_5d4){
if(typeof (src)=="string"){
src=MochiKit.DOM.getElement(src);
}
var self=MochiKit.Signal;
if(typeof (sig)!="string"){
throw new Error("'sig' must be a string");
}
var _5d6=self._getDestPair(_5d3,_5d4);
var obj=_5d6[0];
var func=_5d6[1];
if(typeof (obj)=="undefined"||obj===null){
obj=src;
}
var _5d9=!!(src.addEventListener||src.attachEvent);
if(_5d9&&(sig==="onmouseenter"||sig==="onmouseleave")&&!self._browserAlreadyHasMouseEnterAndLeave()){
var _5da=self._mouseEnterListener(src,sig.substr(2),func,obj);
if(sig==="onmouseenter"){
sig="onmouseover";
}else{
sig="onmouseout";
}
}else{
if(_5d9&&sig=="onmousewheel"&&self._browserLacksMouseWheelEvent()){
var _5da=self._listener(src,sig,func,obj,_5d9);
sig="onDOMMouseScroll";
}else{
var _5da=self._listener(src,sig,func,obj,_5d9);
}
}
if(src.addEventListener){
src.addEventListener(sig.substr(2),_5da,false);
}else{
if(src.attachEvent){
src.attachEvent(sig,_5da);
}
}
var _5db=new MochiKit.Signal.Ident({source:src,signal:sig,listener:_5da,isDOM:_5d9,objOrFunc:_5d3,funcOrStr:_5d4,connected:true});
self._observers.push(_5db);
if(!_5d9&&typeof (src.__connect__)=="function"){
var args=MochiKit.Base.extend([_5db],arguments,1);
src.__connect__.apply(src,args);
}
return _5db;
},_disconnect:function(_5dd){
if(!_5dd.connected){
return;
}
_5dd.connected=false;
var src=_5dd.source;
var sig=_5dd.signal;
var _5e0=_5dd.listener;
if(!_5dd.isDOM){
if(typeof (src.__disconnect__)=="function"){
src.__disconnect__(_5dd,sig,_5dd.objOrFunc,_5dd.funcOrStr);
}
return;
}
if(src.removeEventListener){
src.removeEventListener(sig.substr(2),_5e0,false);
}else{
if(src.detachEvent){
src.detachEvent(sig,_5e0);
}else{
throw new Error("'src' must be a DOM element");
}
}
},disconnect:function(_5e1){
var self=MochiKit.Signal;
var _5e3=self._observers;
var m=MochiKit.Base;
if(arguments.length>1){
var src=arguments[0];
if(typeof (src)=="string"){
src=MochiKit.DOM.getElement(src);
}
var sig=arguments[1];
var obj=arguments[2];
var func=arguments[3];
for(var i=_5e3.length-1;i>=0;i--){
var o=_5e3[i];
if(o.source===src&&o.signal===sig&&o.objOrFunc===obj&&o.funcOrStr===func){
self._disconnect(o);
if(!self._lock){
_5e3.splice(i,1);
}else{
self._dirty=true;
}
return true;
}
}
}else{
var idx=m.findIdentical(_5e3,_5e1);
if(idx>=0){
self._disconnect(_5e1);
if(!self._lock){
_5e3.splice(idx,1);
}else{
self._dirty=true;
}
return true;
}
}
return false;
},disconnectAllTo:function(_5ec,_5ed){
var self=MochiKit.Signal;
var _5ef=self._observers;
var _5f0=self._disconnect;
var _5f1=self._lock;
var _5f2=self._dirty;
if(typeof (_5ed)==="undefined"){
_5ed=null;
}
for(var i=_5ef.length-1;i>=0;i--){
var _5f4=_5ef[i];
if(_5f4.objOrFunc===_5ec&&(_5ed===null||_5f4.funcOrStr===_5ed)){
_5f0(_5f4);
if(_5f1){
_5f2=true;
}else{
_5ef.splice(i,1);
}
}
}
self._dirty=_5f2;
},disconnectAll:function(src,sig){
if(typeof (src)=="string"){
src=MochiKit.DOM.getElement(src);
}
var m=MochiKit.Base;
var _5f8=m.flattenArguments(m.extend(null,arguments,1));
var self=MochiKit.Signal;
var _5fa=self._disconnect;
var _5fb=self._observers;
var i,_5fd;
var _5fe=self._lock;
var _5ff=self._dirty;
if(_5f8.length===0){
for(i=_5fb.length-1;i>=0;i--){
_5fd=_5fb[i];
if(_5fd.source===src){
_5fa(_5fd);
if(!_5fe){
_5fb.splice(i,1);
}else{
_5ff=true;
}
}
}
}else{
var sigs={};
for(i=0;i<_5f8.length;i++){
sigs[_5f8[i]]=true;
}
for(i=_5fb.length-1;i>=0;i--){
_5fd=_5fb[i];
if(_5fd.source===src&&_5fd.signal in sigs){
_5fa(_5fd);
if(!_5fe){
_5fb.splice(i,1);
}else{
_5ff=true;
}
}
}
}
self._dirty=_5ff;
},signal:function(src,sig){
var self=MochiKit.Signal;
var _604=self._observers;
if(typeof (src)=="string"){
src=MochiKit.DOM.getElement(src);
}
var args=MochiKit.Base.extend(null,arguments,2);
var _606=[];
self._lock=true;
for(var i=0;i<_604.length;i++){
var _608=_604[i];
if(_608.source===src&&_608.signal===sig&&_608.connected){
try{
if(_608.isDOM&&_608.funcOrStr!=null){
var obj=_608.objOrFunc;
obj[_608.funcOrStr].apply(obj,args);
}else{
if(_608.isDOM){
_608.objOrFunc.apply(src,args);
}else{
_608.listener.apply(src,args);
}
}
}
catch(e){
_606.push(e);
}
}
}
self._lock=false;
if(self._dirty){
self._dirty=false;
for(var i=_604.length-1;i>=0;i--){
if(!_604[i].connected){
_604.splice(i,1);
}
}
}
if(_606.length==1){
throw _606[0];
}else{
if(_606.length>1){
var e=new Error("Multiple errors thrown in handling 'sig', see errors property");
e.errors=_606;
throw e;
}
}
}});
MochiKit.Signal.__new__=function(win){
var m=MochiKit.Base;
this._document=document;
this._window=win;
this._lock=false;
this._dirty=false;
try{
this.connect(window,"onunload",this._unloadCache);
}
catch(e){
}
m.nameFunctions(this);
};
MochiKit.Signal.__new__(this);
if(MochiKit.__export__){
connect=MochiKit.Signal.connect;
disconnect=MochiKit.Signal.disconnect;
disconnectAll=MochiKit.Signal.disconnectAll;
signal=MochiKit.Signal.signal;
}
MochiKit.Base._exportSymbols(this,MochiKit.Signal);
MochiKit.Base._module("Position","1.5",["Base","DOM","Style"]);
MochiKit.Base.update(MochiKit.Position,{__export__:false,includeScrollOffsets:false,prepare:function(){
var _60d=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
var _60e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
this.windowOffset=new MochiKit.Style.Coordinates(_60d,_60e);
},cumulativeOffset:function(_60f){
var _610=0;
var _611=0;
do{
_610+=_60f.offsetTop||0;
_611+=_60f.offsetLeft||0;
_60f=_60f.offsetParent;
}while(_60f);
return new MochiKit.Style.Coordinates(_611,_610);
},realOffset:function(_612){
var _613=0;
var _614=0;
do{
_613+=_612.scrollTop||0;
_614+=_612.scrollLeft||0;
_612=_612.parentNode;
}while(_612);
return new MochiKit.Style.Coordinates(_614,_613);
},within:function(_615,x,y){
if(this.includeScrollOffsets){
return this.withinIncludingScrolloffsets(_615,x,y);
}
this.xcomp=x;
this.ycomp=y;
this.offset=this.cumulativeOffset(_615);
if(_615.style.position=="fixed"){
this.offset.x+=this.windowOffset.x;
this.offset.y+=this.windowOffset.y;
}
return (y>=this.offset.y&&y<this.offset.y+_615.offsetHeight&&x>=this.offset.x&&x<this.offset.x+_615.offsetWidth);
},withinIncludingScrolloffsets:function(_618,x,y){
var _61b=this.realOffset(_618);
this.xcomp=x+_61b.x-this.windowOffset.x;
this.ycomp=y+_61b.y-this.windowOffset.y;
this.offset=this.cumulativeOffset(_618);
return (this.ycomp>=this.offset.y&&this.ycomp<this.offset.y+_618.offsetHeight&&this.xcomp>=this.offset.x&&this.xcomp<this.offset.x+_618.offsetWidth);
},overlap:function(mode,_61d){
if(!mode){
return 0;
}
if(mode=="vertical"){
return ((this.offset.y+_61d.offsetHeight)-this.ycomp)/_61d.offsetHeight;
}
if(mode=="horizontal"){
return ((this.offset.x+_61d.offsetWidth)-this.xcomp)/_61d.offsetWidth;
}
},absolutize:function(_61e){
_61e=MochiKit.DOM.getElement(_61e);
if(_61e.style.position=="absolute"){
return;
}
MochiKit.Position.prepare();
var _61f=MochiKit.Position.positionedOffset(_61e);
var _620=_61e.clientWidth;
var _621=_61e.clientHeight;
var _622={"position":_61e.style.position,"left":_61f.x-parseFloat(_61e.style.left||0),"top":_61f.y-parseFloat(_61e.style.top||0),"width":_61e.style.width,"height":_61e.style.height};
_61e.style.position="absolute";
_61e.style.top=_61f.y+"px";
_61e.style.left=_61f.x+"px";
_61e.style.width=_620+"px";
_61e.style.height=_621+"px";
return _622;
},positionedOffset:function(_623){
var _624=0,_625=0;
do{
_624+=_623.offsetTop||0;
_625+=_623.offsetLeft||0;
_623=_623.offsetParent;
if(_623){
p=MochiKit.Style.getStyle(_623,"position");
if(p=="relative"||p=="absolute"){
break;
}
}
}while(_623);
return new MochiKit.Style.Coordinates(_625,_624);
},relativize:function(_626,_627){
_626=MochiKit.DOM.getElement(_626);
if(_626.style.position=="relative"){
return;
}
MochiKit.Position.prepare();
var top=parseFloat(_626.style.top||0)-(_627["top"]||0);
var left=parseFloat(_626.style.left||0)-(_627["left"]||0);
_626.style.position=_627["position"];
_626.style.top=top+"px";
_626.style.left=left+"px";
_626.style.width=_627["width"];
_626.style.height=_627["height"];
},clone:function(_62a,_62b){
_62a=MochiKit.DOM.getElement(_62a);
_62b=MochiKit.DOM.getElement(_62b);
_62b.style.position="absolute";
var _62c=this.cumulativeOffset(_62a);
_62b.style.top=_62c.y+"px";
_62b.style.left=_62c.x+"px";
_62b.style.width=_62a.offsetWidth+"px";
_62b.style.height=_62a.offsetHeight+"px";
},page:function(_62d){
var _62e=0;
var _62f=0;
var _630=_62d;
do{
_62e+=_630.offsetTop||0;
_62f+=_630.offsetLeft||0;
if(_630.offsetParent==document.body&&MochiKit.Style.getStyle(_630,"position")=="absolute"){
break;
}
}while(_630=_630.offsetParent);
_630=_62d;
do{
_62e-=_630.scrollTop||0;
_62f-=_630.scrollLeft||0;
}while(_630=_630.parentNode);
return new MochiKit.Style.Coordinates(_62f,_62e);
}});
MochiKit.Position.__new__=function(win){
MochiKit.Base.nameFunctions(this);
};
MochiKit.Position.__new__(this);
MochiKit.Base._exportSymbols(this,MochiKit.Position);
MochiKit.Base._module("Visual","1.5",["Base","DOM","Style","Color","Position"]);
MochiKit.Visual._RoundCorners=function(e,_633){
e=MochiKit.DOM.getElement(e);
this._setOptions(_633);
if(this.options.__unstable__wrapElement){
e=this._doWrap(e);
}
var _634=this.options.color;
var C=MochiKit.Color.Color;
if(this.options.color==="fromElement"){
_634=C.fromBackground(e);
}else{
if(!(_634 instanceof C)){
_634=C.fromString(_634);
}
}
this.isTransparent=(_634.asRGB().a<=0);
var _636=this.options.bgColor;
if(this.options.bgColor==="fromParent"){
_636=C.fromBackground(e.offsetParent);
}else{
if(!(_636 instanceof C)){
_636=C.fromString(_636);
}
}
this._roundCornersImpl(e,_634,_636);
};
MochiKit.Visual._RoundCorners.prototype={_doWrap:function(e){
var _638=e.parentNode;
var doc=MochiKit.DOM.currentDocument();
if(typeof (doc.defaultView)==="undefined"||doc.defaultView===null){
return e;
}
var _63a=doc.defaultView.getComputedStyle(e,null);
if(typeof (_63a)==="undefined"||_63a===null){
return e;
}
var _63b=MochiKit.DOM.DIV({"style":{display:"block",marginTop:_63a.getPropertyValue("padding-top"),marginRight:_63a.getPropertyValue("padding-right"),marginBottom:_63a.getPropertyValue("padding-bottom"),marginLeft:_63a.getPropertyValue("padding-left"),padding:"0px"}});
_63b.innerHTML=e.innerHTML;
e.innerHTML="";
e.appendChild(_63b);
return e;
},_roundCornersImpl:function(e,_63d,_63e){
if(this.options.border){
this._renderBorder(e,_63e);
}
if(this._isTopRounded()){
this._roundTopCorners(e,_63d,_63e);
}
if(this._isBottomRounded()){
this._roundBottomCorners(e,_63d,_63e);
}
},_renderBorder:function(el,_640){
var _641="1px solid "+this._borderColor(_640);
var _642="border-left: "+_641;
var _643="border-right: "+_641;
var _644="style='"+_642+";"+_643+"'";
el.innerHTML="<div "+_644+">"+el.innerHTML+"</div>";
},_roundTopCorners:function(el,_646,_647){
var _648=this._createCorner(_647);
for(var i=0;i<this.options.numSlices;i++){
_648.appendChild(this._createCornerSlice(_646,_647,i,"top"));
}
el.style.paddingTop=0;
el.insertBefore(_648,el.firstChild);
},_roundBottomCorners:function(el,_64b,_64c){
var _64d=this._createCorner(_64c);
for(var i=(this.options.numSlices-1);i>=0;i--){
_64d.appendChild(this._createCornerSlice(_64b,_64c,i,"bottom"));
}
el.style.paddingBottom=0;
el.appendChild(_64d);
},_createCorner:function(_64f){
var dom=MochiKit.DOM;
return dom.DIV({style:{backgroundColor:_64f.toString()}});
},_createCornerSlice:function(_651,_652,n,_654){
var _655=MochiKit.DOM.SPAN();
var _656=_655.style;
_656.backgroundColor=_651.toString();
_656.display="block";
_656.height="1px";
_656.overflow="hidden";
_656.fontSize="1px";
var _657=this._borderColor(_651,_652);
if(this.options.border&&n===0){
_656.borderTopStyle="solid";
_656.borderTopWidth="1px";
_656.borderLeftWidth="0px";
_656.borderRightWidth="0px";
_656.borderBottomWidth="0px";
_656.height="0px";
_656.borderColor=_657.toString();
}else{
if(_657){
_656.borderColor=_657.toString();
_656.borderStyle="solid";
_656.borderWidth="0px 1px";
}
}
if(!this.options.compact&&(n==(this.options.numSlices-1))){
_656.height="2px";
}
this._setMargin(_655,n,_654);
this._setBorder(_655,n,_654);
return _655;
},_setOptions:function(_658){
this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false,__unstable__wrapElement:false};
MochiKit.Base.update(this.options,_658);
this.options.numSlices=(this.options.compact?2:4);
},_whichSideTop:function(){
var _659=this.options.corners;
if(this._hasString(_659,"all","top")){
return "";
}
var _65a=(_659.indexOf("tl")!=-1);
var _65b=(_659.indexOf("tr")!=-1);
if(_65a&&_65b){
return "";
}
if(_65a){
return "left";
}
if(_65b){
return "right";
}
return "";
},_whichSideBottom:function(){
var _65c=this.options.corners;
if(this._hasString(_65c,"all","bottom")){
return "";
}
var _65d=(_65c.indexOf("bl")!=-1);
var _65e=(_65c.indexOf("br")!=-1);
if(_65d&&_65e){
return "";
}
if(_65d){
return "left";
}
if(_65e){
return "right";
}
return "";
},_borderColor:function(_65f,_660){
if(_65f=="transparent"){
return _660;
}else{
if(this.options.border){
return this.options.border;
}else{
if(this.options.blend){
return _660.blendedColor(_65f);
}
}
}
return "";
},_setMargin:function(el,n,_663){
var _664=this._marginSize(n)+"px";
var _665=(_663=="top"?this._whichSideTop():this._whichSideBottom());
var _666=el.style;
if(_665=="left"){
_666.marginLeft=_664;
_666.marginRight="0px";
}else{
if(_665=="right"){
_666.marginRight=_664;
_666.marginLeft="0px";
}else{
_666.marginLeft=_664;
_666.marginRight=_664;
}
}
},_setBorder:function(el,n,_669){
var _66a=this._borderSize(n)+"px";
var _66b=(_669=="top"?this._whichSideTop():this._whichSideBottom());
var _66c=el.style;
if(_66b=="left"){
_66c.borderLeftWidth=_66a;
_66c.borderRightWidth="0px";
}else{
if(_66b=="right"){
_66c.borderRightWidth=_66a;
_66c.borderLeftWidth="0px";
}else{
_66c.borderLeftWidth=_66a;
_66c.borderRightWidth=_66a;
}
}
},_marginSize:function(n){
if(this.isTransparent){
return 0;
}
var o=this.options;
if(o.compact&&o.blend){
var _66f=[1,0];
return _66f[n];
}else{
if(o.compact){
var _670=[2,1];
return _670[n];
}else{
if(o.blend){
var _671=[3,2,1,0];
return _671[n];
}else{
var _672=[5,3,2,1];
return _672[n];
}
}
}
},_borderSize:function(n){
var o=this.options;
var _675;
if(o.compact&&(o.blend||this.isTransparent)){
return 1;
}else{
if(o.compact){
_675=[1,0];
}else{
if(o.blend){
_675=[2,1,1,1];
}else{
if(o.border){
_675=[0,2,0,0];
}else{
if(this.isTransparent){
_675=[5,3,2,1];
}else{
return 0;
}
}
}
}
}
return _675[n];
},_hasString:function(str){
for(var i=1;i<arguments.length;i++){
if(str.indexOf(arguments[i])!=-1){
return true;
}
}
return false;
},_isTopRounded:function(){
return this._hasString(this.options.corners,"all","top","tl","tr");
},_isBottomRounded:function(){
return this._hasString(this.options.corners,"all","bottom","bl","br");
},_hasSingleTextChild:function(el){
return (el.childNodes.length==1&&el.childNodes[0].nodeType==3);
}};
MochiKit.Visual.roundElement=function(e,_67a){
new MochiKit.Visual._RoundCorners(e,_67a);
};
MochiKit.Visual.roundClass=function(_67b,_67c,_67d){
var _67e=MochiKit.DOM.getElementsByTagAndClassName(_67b,_67c);
for(var i=0;i<_67e.length;i++){
MochiKit.Visual.roundElement(_67e[i],_67d);
}
};
MochiKit.Visual.tagifyText=function(_680,_681){
_681=_681||"position:relative";
if(/MSIE/.test(navigator.userAgent)){
_681+=";zoom:1";
}
_680=MochiKit.DOM.getElement(_680);
var ma=MochiKit.Base.map;
ma(function(_683){
if(_683.nodeType==3){
ma(function(_684){
_680.insertBefore(MochiKit.DOM.SPAN({style:_681},_684==" "?String.fromCharCode(160):_684),_683);
},_683.nodeValue.split(""));
MochiKit.DOM.removeElement(_683);
}
},_680.childNodes);
};
MochiKit.Visual._forceRerendering=function(_685){
try{
_685=MochiKit.DOM.getElement(_685);
var n=document.createTextNode(" ");
_685.appendChild(n);
_685.removeChild(n);
}
catch(e){
}
};
MochiKit.Visual.multiple=function(_687,_688,_689){
_689=MochiKit.Base.update({speed:0.1,delay:0},_689);
var _68a=_689.delay;
var _68b=0;
MochiKit.Base.map(function(_68c){
_689.delay=_68b*_689.speed+_68a;
new _688(_68c,_689);
_68b+=1;
},_687);
};
MochiKit.Visual.PAIRS={"slide":["slideDown","slideUp"],"blind":["blindDown","blindUp"],"appear":["appear","fade"],"size":["grow","shrink"]};
MochiKit.Visual.toggle=function(_68d,_68e,_68f){
_68d=MochiKit.DOM.getElement(_68d);
_68e=(_68e||"appear").toLowerCase();
_68f=MochiKit.Base.update({queue:{position:"end",scope:(_68d.id||"global"),limit:1}},_68f);
var v=MochiKit.Visual;
v[MochiKit.Style.getStyle(_68d,"display")!="none"?v.PAIRS[_68e][1]:v.PAIRS[_68e][0]](_68d,_68f);
};
MochiKit.Visual.Transitions={__export__:false};
MochiKit.Visual.Transitions.linear=function(pos){
return pos;
};
MochiKit.Visual.Transitions.sinoidal=function(pos){
return 0.5-Math.cos(pos*Math.PI)/2;
};
MochiKit.Visual.Transitions.reverse=function(pos){
return 1-pos;
};
MochiKit.Visual.Transitions.flicker=function(pos){
return 0.25-Math.cos(pos*Math.PI)/4+Math.random()/2;
};
MochiKit.Visual.Transitions.wobble=function(pos){
return 0.5-Math.cos(9*pos*Math.PI)/2;
};
MochiKit.Visual.Transitions.pulse=function(pos,_697){
if(_697){
pos*=2*_697;
}else{
pos*=10;
}
var _698=pos-Math.floor(pos);
return (Math.floor(pos)%2==0)?_698:1-_698;
};
MochiKit.Visual.Transitions.parabolic=function(pos){
return pos*pos;
};
MochiKit.Visual.Transitions.none=function(pos){
return 0;
};
MochiKit.Visual.Transitions.full=function(pos){
return 1;
};
MochiKit.Visual.ScopedQueue=function(){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls();
}
this.__init__();
};
MochiKit.Visual.ScopedQueue.__export__=false;
MochiKit.Base.update(MochiKit.Visual.ScopedQueue.prototype,{__init__:function(){
this.effects=[];
this.interval=null;
},add:function(_69d){
var _69e=new Date().getTime();
var _69f=(typeof (_69d.options.queue)=="string")?_69d.options.queue:_69d.options.queue.position;
var ma=MochiKit.Base.map;
switch(_69f){
case "front":
ma(function(e){
if(e.state=="idle"){
e.startOn+=_69d.finishOn;
e.finishOn+=_69d.finishOn;
}
},this.effects);
break;
case "end":
var _6a2;
ma(function(e){
var i=e.finishOn;
if(i>=(_6a2||i)){
_6a2=i;
}
},this.effects);
_69e=_6a2||_69e;
break;
case "break":
ma(function(e){
e.finalize();
},this.effects);
break;
}
_69d.startOn+=_69e;
_69d.finishOn+=_69e;
if(!_69d.options.queue.limit||this.effects.length<_69d.options.queue.limit){
this.effects.push(_69d);
}
if(!this.interval){
this.interval=this.startLoop(MochiKit.Base.bind(this.loop,this),40);
}
},startLoop:function(func,_6a7){
return setInterval(func,_6a7);
},remove:function(_6a8){
this.effects=MochiKit.Base.filter(function(e){
return e!=_6a8;
},this.effects);
if(!this.effects.length){
this.stopLoop(this.interval);
this.interval=null;
}
},stopLoop:function(_6aa){
clearInterval(_6aa);
},loop:function(){
var _6ab=new Date().getTime();
MochiKit.Base.map(function(_6ac){
_6ac.loop(_6ab);
},this.effects);
}});
MochiKit.Visual.Queues={__export__:false,instances:{},get:function(_6ad){
if(typeof (_6ad)!="string"){
return _6ad;
}
if(!this.instances[_6ad]){
this.instances[_6ad]=new MochiKit.Visual.ScopedQueue();
}
return this.instances[_6ad];
}};
MochiKit.Visual.Queue=MochiKit.Visual.Queues.get("global");
MochiKit.Visual.Queue.__export__=false;
MochiKit.Visual.DefaultOptions={__export__:false,transition:MochiKit.Visual.Transitions.sinoidal,duration:1,fps:25,sync:false,from:0,to:1,delay:0,queue:"parallel"};
MochiKit.Visual.Base=function(){
};
MochiKit.Visual.Base.prototype={__class__:MochiKit.Visual.Base,start:function(_6ae){
var v=MochiKit.Visual;
this.options=MochiKit.Base.setdefault(_6ae,v.DefaultOptions);
this.currentFrame=0;
this.state="idle";
this.startOn=this.options.delay*1000;
this.finishOn=this.startOn+(this.options.duration*1000);
this.event("beforeStart");
if(!this.options.sync){
v.Queues.get(typeof (this.options.queue)=="string"?"global":this.options.queue.scope).add(this);
}
},loop:function(_6b0){
if(_6b0>=this.startOn){
if(_6b0>=this.finishOn){
return this.finalize();
}
var pos=(_6b0-this.startOn)/(this.finishOn-this.startOn);
var _6b2=Math.round(pos*this.options.fps*this.options.duration);
if(_6b2>this.currentFrame){
this.render(pos);
this.currentFrame=_6b2;
}
}
},render:function(pos){
if(this.state=="idle"){
this.state="running";
this.event("beforeSetup");
this.setup();
this.event("afterSetup");
}
if(this.state=="running"){
if(this.options.transition){
pos=this.options.transition(pos);
}
pos*=(this.options.to-this.options.from);
pos+=this.options.from;
this.event("beforeUpdate");
this.update(pos);
this.event("afterUpdate");
}
},cancel:function(){
if(!this.options.sync){
MochiKit.Visual.Queues.get(typeof (this.options.queue)=="string"?"global":this.options.queue.scope).remove(this);
}
this.state="finished";
},finalize:function(){
this.render(1);
this.cancel();
this.event("beforeFinish");
this.finish();
this.event("afterFinish");
},setup:function(){
},finish:function(){
},update:function(_6b4){
},event:function(_6b5){
if(this.options[_6b5+"Internal"]){
this.options[_6b5+"Internal"](this);
}
if(this.options[_6b5]){
this.options[_6b5](this);
}
},repr:function(){
return "["+this.__class__.NAME+", options:"+MochiKit.Base.repr(this.options)+"]";
}};
MochiKit.Visual.Parallel=function(_6b6,_6b7){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6b6,_6b7);
}
this.__init__(_6b6,_6b7);
};
MochiKit.Visual.Parallel.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Parallel.prototype,{__class__:MochiKit.Visual.Parallel,__init__:function(_6b9,_6ba){
this.effects=_6b9||[];
this.start(_6ba);
},update:function(_6bb){
MochiKit.Base.map(function(_6bc){
_6bc.render(_6bb);
},this.effects);
},finish:function(){
MochiKit.Base.map(function(_6bd){
_6bd.finalize();
},this.effects);
}});
MochiKit.Visual.Sequence=function(_6be,_6bf){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6be,_6bf);
}
this.__init__(_6be,_6bf);
};
MochiKit.Visual.Sequence.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Sequence.prototype,{__class__:MochiKit.Visual.Sequence,__init__:function(_6c1,_6c2){
var defs={transition:MochiKit.Visual.Transitions.linear,duration:0};
this.effects=_6c1||[];
MochiKit.Base.map(function(_6c4){
defs.duration+=_6c4.options.duration;
},this.effects);
MochiKit.Base.setdefault(_6c2,defs);
this.start(_6c2);
},update:function(_6c5){
var time=_6c5*this.options.duration;
for(var i=0;i<this.effects.length;i++){
var _6c8=this.effects[i];
if(time<=_6c8.options.duration){
_6c8.render(time/_6c8.options.duration);
break;
}else{
time-=_6c8.options.duration;
}
}
},finish:function(){
MochiKit.Base.map(function(_6c9){
_6c9.finalize();
},this.effects);
}});
MochiKit.Visual.Opacity=function(_6ca,_6cb){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6ca,_6cb);
}
this.__init__(_6ca,_6cb);
};
MochiKit.Visual.Opacity.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Opacity.prototype,{__class__:MochiKit.Visual.Opacity,__init__:function(_6cd,_6ce){
var b=MochiKit.Base;
var s=MochiKit.Style;
this.element=MochiKit.DOM.getElement(_6cd);
if(this.element.currentStyle&&(!this.element.currentStyle.hasLayout)){
s.setStyle(this.element,{zoom:1});
}
_6ce=b.update({from:s.getStyle(this.element,"opacity")||0,to:1},_6ce);
this.start(_6ce);
},update:function(_6d1){
MochiKit.Style.setStyle(this.element,{"opacity":_6d1});
}});
MochiKit.Visual.Move=function(_6d2,_6d3){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6d2,_6d3);
}
this.__init__(_6d2,_6d3);
};
MochiKit.Visual.Move.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Move.prototype,{__class__:MochiKit.Visual.Move,__init__:function(_6d5,_6d6){
this.element=MochiKit.DOM.getElement(_6d5);
_6d6=MochiKit.Base.update({x:0,y:0,mode:"relative"},_6d6);
this.start(_6d6);
},setup:function(){
MochiKit.Style.makePositioned(this.element);
var s=this.element.style;
var _6d8=s.visibility;
var _6d9=s.display;
if(_6d9=="none"){
s.visibility="hidden";
s.display="";
}
this.originalLeft=parseFloat(MochiKit.Style.getStyle(this.element,"left")||"0");
this.originalTop=parseFloat(MochiKit.Style.getStyle(this.element,"top")||"0");
if(this.options.mode=="absolute"){
this.options.x-=this.originalLeft;
this.options.y-=this.originalTop;
}
if(_6d9=="none"){
s.visibility=_6d8;
s.display=_6d9;
}
},update:function(_6da){
MochiKit.Style.setStyle(this.element,{left:Math.round(this.options.x*_6da+this.originalLeft)+"px",top:Math.round(this.options.y*_6da+this.originalTop)+"px"});
}});
MochiKit.Visual.Scale=function(_6db,_6dc,_6dd){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6db,_6dc,_6dd);
}
this.__init__(_6db,_6dc,_6dd);
};
MochiKit.Visual.Scale.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Scale.prototype,{__class__:MochiKit.Visual.Scale,__init__:function(_6df,_6e0,_6e1){
this.element=MochiKit.DOM.getElement(_6df);
_6e1=MochiKit.Base.update({scaleX:true,scaleY:true,scaleContent:true,scaleFromCenter:false,scaleMode:"box",scaleFrom:100,scaleTo:_6e0},_6e1);
this.start(_6e1);
},setup:function(){
this.restoreAfterFinish=this.options.restoreAfterFinish||false;
this.elementPositioning=MochiKit.Style.getStyle(this.element,"position");
var ma=MochiKit.Base.map;
var b=MochiKit.Base.bind;
this.originalStyle={};
ma(b(function(k){
this.originalStyle[k]=this.element.style[k];
},this),["top","left","width","height","fontSize"]);
this.originalTop=this.element.offsetTop;
this.originalLeft=this.element.offsetLeft;
var _6e5=MochiKit.Style.getStyle(this.element,"font-size")||"100%";
ma(b(function(_6e6){
if(_6e5.indexOf(_6e6)>0){
this.fontSize=parseFloat(_6e5);
this.fontSizeType=_6e6;
}
},this),["em","px","%"]);
this.factor=(this.options.scaleTo-this.options.scaleFrom)/100;
if(/^content/.test(this.options.scaleMode)){
this.dims=[this.element.scrollHeight,this.element.scrollWidth];
}else{
if(this.options.scaleMode=="box"){
this.dims=[this.element.offsetHeight,this.element.offsetWidth];
}else{
this.dims=[this.options.scaleMode.originalHeight,this.options.scaleMode.originalWidth];
}
}
},update:function(_6e7){
var _6e8=(this.options.scaleFrom/100)+(this.factor*_6e7);
if(this.options.scaleContent&&this.fontSize){
MochiKit.Style.setStyle(this.element,{fontSize:this.fontSize*_6e8+this.fontSizeType});
}
this.setDimensions(this.dims[0]*_6e8,this.dims[1]*_6e8);
},finish:function(){
if(this.restoreAfterFinish){
MochiKit.Style.setStyle(this.element,this.originalStyle);
}
},setDimensions:function(_6e9,_6ea){
var d={};
var r=Math.round;
if(/MSIE/.test(navigator.userAgent)){
r=Math.ceil;
}
if(this.options.scaleX){
d.width=r(_6ea)+"px";
}
if(this.options.scaleY){
d.height=r(_6e9)+"px";
}
if(this.options.scaleFromCenter){
var topd=(_6e9-this.dims[0])/2;
var _6ee=(_6ea-this.dims[1])/2;
if(this.elementPositioning=="absolute"){
if(this.options.scaleY){
d.top=this.originalTop-topd+"px";
}
if(this.options.scaleX){
d.left=this.originalLeft-_6ee+"px";
}
}else{
if(this.options.scaleY){
d.top=-topd+"px";
}
if(this.options.scaleX){
d.left=-_6ee+"px";
}
}
}
MochiKit.Style.setStyle(this.element,d);
}});
MochiKit.Visual.Highlight=function(_6ef,_6f0){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6ef,_6f0);
}
this.__init__(_6ef,_6f0);
};
MochiKit.Visual.Highlight.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Highlight.prototype,{__class__:MochiKit.Visual.Highlight,__init__:function(_6f2,_6f3){
this.element=MochiKit.DOM.getElement(_6f2);
_6f3=MochiKit.Base.update({startcolor:"#ffff99"},_6f3);
this.start(_6f3);
},setup:function(){
var b=MochiKit.Base;
var s=MochiKit.Style;
if(s.getStyle(this.element,"display")=="none"){
this.cancel();
return;
}
this.oldStyle={backgroundImage:s.getStyle(this.element,"background-image")};
s.setStyle(this.element,{backgroundImage:"none"});
if(!this.options.endcolor){
this.options.endcolor=MochiKit.Color.Color.fromBackground(this.element).toHexString();
}
if(b.isUndefinedOrNull(this.options.restorecolor)){
this.options.restorecolor=s.getStyle(this.element,"background-color");
}
this._base=b.map(b.bind(function(i){
return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
this._delta=b.map(b.bind(function(i){
return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i];
},this),[0,1,2]);
},update:function(_6f8){
var m="#";
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(this._base[i]+this._delta[i]*_6f8));
},this),[0,1,2]);
MochiKit.Style.setStyle(this.element,{backgroundColor:m});
},finish:function(){
MochiKit.Style.setStyle(this.element,MochiKit.Base.update(this.oldStyle,{backgroundColor:this.options.restorecolor}));
}});
MochiKit.Visual.ScrollTo=function(_6fb,_6fc){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6fb,_6fc);
}
this.__init__(_6fb,_6fc);
};
MochiKit.Visual.ScrollTo.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.ScrollTo.prototype,{__class__:MochiKit.Visual.ScrollTo,__init__:function(_6fe,_6ff){
this.element=MochiKit.DOM.getElement(_6fe);
this.start(_6ff);
},setup:function(){
var p=MochiKit.Position;
p.prepare();
var _701=p.cumulativeOffset(this.element);
if(this.options.offset){
_701.y+=this.options.offset;
}
var max;
if(window.innerHeight){
max=window.innerHeight-window.height;
}else{
if(document.documentElement&&document.documentElement.clientHeight){
max=document.documentElement.clientHeight-document.body.scrollHeight;
}else{
if(document.body){
max=document.body.clientHeight-document.body.scrollHeight;
}
}
}
this.scrollStart=p.windowOffset.y;
this.delta=(_701.y>max?max:_701.y)-this.scrollStart;
},update:function(_703){
var p=MochiKit.Position;
p.prepare();
window.scrollTo(p.windowOffset.x,this.scrollStart+(_703*this.delta));
}});
MochiKit.Visual._CSS_LENGTH=/^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;
MochiKit.Visual.Morph=function(_705,_706){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_705,_706);
}
this.__init__(_705,_706);
};
MochiKit.Visual.Morph.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Morph.prototype,{__class__:MochiKit.Visual.Morph,__init__:function(_708,_709){
this.element=MochiKit.DOM.getElement(_708);
this.start(_709);
},setup:function(){
var b=MochiKit.Base;
var _70b=this.options.style;
this.styleStart={};
this.styleEnd={};
this.units={};
var _70c,unit;
for(var s in _70b){
_70c=_70b[s];
s=b.camelize(s);
if(MochiKit.Visual._CSS_LENGTH.test(_70c)){
var _70f=_70c.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_70c=parseFloat(_70f[1]);
unit=(_70f.length==3)?_70f[2]:null;
this.styleEnd[s]=_70c;
this.units[s]=unit;
_70c=MochiKit.Style.getStyle(this.element,s);
_70f=_70c.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_70c=parseFloat(_70f[1]);
this.styleStart[s]=_70c;
}else{
if(/[Cc]olor$/.test(s)){
var c=MochiKit.Color.Color;
_70c=c.fromString(_70c);
if(_70c){
this.units[s]="color";
this.styleEnd[s]=_70c.toHexString();
_70c=MochiKit.Style.getStyle(this.element,s);
this.styleStart[s]=c.fromString(_70c).toHexString();
this.styleStart[s]=b.map(b.bind(function(i){
return parseInt(this.styleStart[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
this.styleEnd[s]=b.map(b.bind(function(i){
return parseInt(this.styleEnd[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
}
}else{
this.element.style[s]=_70c;
}
}
}
},update:function(_713){
var _714;
for(var s in this.styleStart){
if(this.units[s]=="color"){
var m="#";
var _717=this.styleStart[s];
var end=this.styleEnd[s];
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(_717[i]+(end[i]-_717[i])*_713));
},this),[0,1,2]);
this.element.style[s]=m;
}else{
_714=this.styleStart[s]+Math.round((this.styleEnd[s]-this.styleStart[s])*_713*1000)/1000+this.units[s];
this.element.style[s]=_714;
}
}
}});
MochiKit.Visual.fade=function(_71a,_71b){
var s=MochiKit.Style;
var _71d=s.getStyle(_71a,"opacity");
_71b=MochiKit.Base.update({from:s.getStyle(_71a,"opacity")||1,to:0,afterFinishInternal:function(_71e){
if(_71e.options.to!==0){
return;
}
s.hideElement(_71e.element);
s.setStyle(_71e.element,{"opacity":_71d});
}},_71b);
return new MochiKit.Visual.Opacity(_71a,_71b);
};
MochiKit.Visual.appear=function(_71f,_720){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_720=MochiKit.Base.update({from:(s.getStyle(_71f,"display")=="none"?0:s.getStyle(_71f,"opacity")||0),to:1,afterFinishInternal:function(_723){
v._forceRerendering(_723.element);
},beforeSetupInternal:function(_724){
s.setStyle(_724.element,{"opacity":_724.options.from});
s.showElement(_724.element);
}},_720);
return new v.Opacity(_71f,_720);
};
MochiKit.Visual.puff=function(_725,_726){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_725=MochiKit.DOM.getElement(_725);
var _729=MochiKit.Style.getElementDimensions(_725,true);
var _72a={position:s.getStyle(_725,"position"),top:_725.style.top,left:_725.style.left,width:_725.style.width,height:_725.style.height,opacity:s.getStyle(_725,"opacity")};
_726=MochiKit.Base.update({beforeSetupInternal:function(_72b){
MochiKit.Position.absolutize(_72b.effects[0].element);
},afterFinishInternal:function(_72c){
s.hideElement(_72c.effects[0].element);
s.setStyle(_72c.effects[0].element,_72a);
},scaleContent:true,scaleFromCenter:true},_726);
return new v.Parallel([new v.Scale(_725,200,{sync:true,scaleFromCenter:_726.scaleFromCenter,scaleMode:{originalHeight:_729.h,originalWidth:_729.w},scaleContent:_726.scaleContent,restoreAfterFinish:true}),new v.Opacity(_725,{sync:true,to:0})],_726);
};
MochiKit.Visual.blindUp=function(_72d,_72e){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_72d=d.getElement(_72d);
var _731=s.getElementDimensions(_72d,true);
var _732=s.makeClipping(_72d);
_72e=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_731.h,originalWidth:_731.w},restoreAfterFinish:true,afterFinishInternal:function(_733){
s.hideElement(_733.element);
s.undoClipping(_733.element,_732);
}},_72e);
return new MochiKit.Visual.Scale(_72d,0,_72e);
};
MochiKit.Visual.blindDown=function(_734,_735){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_734=d.getElement(_734);
var _738=s.getElementDimensions(_734,true);
var _739;
_735=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_738.h,originalWidth:_738.w},restoreAfterFinish:true,afterSetupInternal:function(_73a){
_739=s.makeClipping(_73a.element);
s.setStyle(_73a.element,{height:"0px"});
s.showElement(_73a.element);
},afterFinishInternal:function(_73b){
s.undoClipping(_73b.element,_739);
}},_735);
return new MochiKit.Visual.Scale(_734,100,_735);
};
MochiKit.Visual.switchOff=function(_73c,_73d){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_73c=d.getElement(_73c);
var _740=s.getElementDimensions(_73c,true);
var _741=s.getStyle(_73c,"opacity");
var _742;
_73d=MochiKit.Base.update({duration:0.7,restoreAfterFinish:true,beforeSetupInternal:function(_743){
s.makePositioned(_73c);
_742=s.makeClipping(_73c);
},afterFinishInternal:function(_744){
s.hideElement(_73c);
s.undoClipping(_73c,_742);
s.undoPositioned(_73c);
s.setStyle(_73c,{"opacity":_741});
}},_73d);
var v=MochiKit.Visual;
return new v.Sequence([new v.appear(_73c,{sync:true,duration:0.57*_73d.duration,from:0,transition:v.Transitions.flicker}),new v.Scale(_73c,1,{sync:true,duration:0.43*_73d.duration,scaleFromCenter:true,scaleX:false,scaleMode:{originalHeight:_740.h,originalWidth:_740.w},scaleContent:false,restoreAfterFinish:true})],_73d);
};
MochiKit.Visual.dropOut=function(_746,_747){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_746=d.getElement(_746);
var _74a={top:s.getStyle(_746,"top"),left:s.getStyle(_746,"left"),opacity:s.getStyle(_746,"opacity")};
_747=MochiKit.Base.update({duration:0.5,distance:100,beforeSetupInternal:function(_74b){
s.makePositioned(_74b.effects[0].element);
},afterFinishInternal:function(_74c){
s.hideElement(_74c.effects[0].element);
s.undoPositioned(_74c.effects[0].element);
s.setStyle(_74c.effects[0].element,_74a);
}},_747);
var v=MochiKit.Visual;
return new v.Parallel([new v.Move(_746,{x:0,y:_747.distance,sync:true}),new v.Opacity(_746,{sync:true,to:0})],_747);
};
MochiKit.Visual.shake=function(_74e,_74f){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_74e=d.getElement(_74e);
var _753={top:s.getStyle(_74e,"top"),left:s.getStyle(_74e,"left")};
_74f=MochiKit.Base.update({duration:0.5,afterFinishInternal:function(_754){
s.undoPositioned(_74e);
s.setStyle(_74e,_753);
}},_74f);
return new v.Sequence([new v.Move(_74e,{sync:true,duration:0.1*_74f.duration,x:20,y:0}),new v.Move(_74e,{sync:true,duration:0.2*_74f.duration,x:-40,y:0}),new v.Move(_74e,{sync:true,duration:0.2*_74f.duration,x:40,y:0}),new v.Move(_74e,{sync:true,duration:0.2*_74f.duration,x:-40,y:0}),new v.Move(_74e,{sync:true,duration:0.2*_74f.duration,x:40,y:0}),new v.Move(_74e,{sync:true,duration:0.1*_74f.duration,x:-20,y:0})],_74f);
};
MochiKit.Visual.slideDown=function(_755,_756){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_755=d.getElement(_755);
if(!_755.firstChild){
throw new Error("MochiKit.Visual.slideDown must be used on a element with a child");
}
d.removeEmptyTextNodes(_755);
var _75a=s.getStyle(_755.firstChild,"bottom")||0;
var _75b=s.getElementDimensions(_755,true);
var _75c;
_756=b.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_75b.h,originalWidth:_75b.w},restoreAfterFinish:true,afterSetupInternal:function(_75d){
s.makePositioned(_75d.element);
s.makePositioned(_75d.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_75d.element,{top:""});
}
_75c=s.makeClipping(_75d.element);
s.setStyle(_75d.element,{height:"0px"});
s.showElement(_75d.element);
},afterUpdateInternal:function(_75e){
var _75f=s.getElementDimensions(_75e.element,true);
s.setStyle(_75e.element.firstChild,{bottom:(_75e.dims[0]-_75f.h)+"px"});
},afterFinishInternal:function(_760){
s.undoClipping(_760.element,_75c);
if(/MSIE/.test(navigator.userAgent)){
s.undoPositioned(_760.element);
s.undoPositioned(_760.element.firstChild);
}else{
s.undoPositioned(_760.element.firstChild);
s.undoPositioned(_760.element);
}
s.setStyle(_760.element.firstChild,{bottom:_75a});
}},_756);
return new MochiKit.Visual.Scale(_755,100,_756);
};
MochiKit.Visual.slideUp=function(_761,_762){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_761=d.getElement(_761);
if(!_761.firstChild){
throw new Error("MochiKit.Visual.slideUp must be used on a element with a child");
}
d.removeEmptyTextNodes(_761);
var _766=s.getStyle(_761.firstChild,"bottom");
var _767=s.getElementDimensions(_761,true);
var _768;
_762=b.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_767.h,originalWidth:_767.w},scaleFrom:100,restoreAfterFinish:true,beforeStartInternal:function(_769){
s.makePositioned(_769.element);
s.makePositioned(_769.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_769.element,{top:""});
}
_768=s.makeClipping(_769.element);
s.showElement(_769.element);
},afterUpdateInternal:function(_76a){
var _76b=s.getElementDimensions(_76a.element,true);
s.setStyle(_76a.element.firstChild,{bottom:(_76a.dims[0]-_76b.h)+"px"});
},afterFinishInternal:function(_76c){
s.hideElement(_76c.element);
s.undoClipping(_76c.element,_768);
s.undoPositioned(_76c.element.firstChild);
s.undoPositioned(_76c.element);
s.setStyle(_76c.element.firstChild,{bottom:_766});
}},_762);
return new MochiKit.Visual.Scale(_761,0,_762);
};
MochiKit.Visual.squish=function(_76d,_76e){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
var _772=s.getElementDimensions(_76d,true);
var _773;
_76e=b.update({restoreAfterFinish:true,scaleMode:{originalHeight:_772.w,originalWidth:_772.h},beforeSetupInternal:function(_774){
_773=s.makeClipping(_774.element);
},afterFinishInternal:function(_775){
s.hideElement(_775.element);
s.undoClipping(_775.element,_773);
}},_76e);
return new MochiKit.Visual.Scale(_76d,/Opera/.test(navigator.userAgent)?1:0,_76e);
};
MochiKit.Visual.grow=function(_776,_777){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_776=d.getElement(_776);
_777=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.full,scaleContent:true,scaleFromCenter:false},_777);
var _77b={top:_776.style.top,left:_776.style.left,height:_776.style.height,width:_776.style.width,opacity:s.getStyle(_776,"opacity")};
var dims=s.getElementDimensions(_776,true);
var _77d,_77e;
var _77f,_780;
switch(_777.direction){
case "top-left":
_77d=_77e=_77f=_780=0;
break;
case "top-right":
_77d=dims.w;
_77e=_780=0;
_77f=-dims.w;
break;
case "bottom-left":
_77d=_77f=0;
_77e=dims.h;
_780=-dims.h;
break;
case "bottom-right":
_77d=dims.w;
_77e=dims.h;
_77f=-dims.w;
_780=-dims.h;
break;
case "center":
_77d=dims.w/2;
_77e=dims.h/2;
_77f=-dims.w/2;
_780=-dims.h/2;
break;
}
var _781=MochiKit.Base.update({beforeSetupInternal:function(_782){
s.setStyle(_782.effects[0].element,{height:"0px"});
s.showElement(_782.effects[0].element);
},afterFinishInternal:function(_783){
s.undoClipping(_783.effects[0].element);
s.undoPositioned(_783.effects[0].element);
s.setStyle(_783.effects[0].element,_77b);
}},_777);
return new v.Move(_776,{x:_77d,y:_77e,duration:0.01,beforeSetupInternal:function(_784){
s.hideElement(_784.element);
s.makeClipping(_784.element);
s.makePositioned(_784.element);
},afterFinishInternal:function(_785){
new v.Parallel([new v.Opacity(_785.element,{sync:true,to:1,from:0,transition:_777.opacityTransition}),new v.Move(_785.element,{x:_77f,y:_780,sync:true,transition:_777.moveTransition}),new v.Scale(_785.element,100,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,scaleFrom:/Opera/.test(navigator.userAgent)?1:0,transition:_777.scaleTransition,scaleContent:_777.scaleContent,scaleFromCenter:_777.scaleFromCenter,restoreAfterFinish:true})],_781);
}});
};
MochiKit.Visual.shrink=function(_786,_787){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_786=d.getElement(_786);
_787=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.none,scaleContent:true,scaleFromCenter:false},_787);
var _78b={top:_786.style.top,left:_786.style.left,height:_786.style.height,width:_786.style.width,opacity:s.getStyle(_786,"opacity")};
var dims=s.getElementDimensions(_786,true);
var _78d,_78e;
switch(_787.direction){
case "top-left":
_78d=_78e=0;
break;
case "top-right":
_78d=dims.w;
_78e=0;
break;
case "bottom-left":
_78d=0;
_78e=dims.h;
break;
case "bottom-right":
_78d=dims.w;
_78e=dims.h;
break;
case "center":
_78d=dims.w/2;
_78e=dims.h/2;
break;
}
var _78f;
var _790=MochiKit.Base.update({beforeStartInternal:function(_791){
s.makePositioned(_791.effects[0].element);
_78f=s.makeClipping(_791.effects[0].element);
},afterFinishInternal:function(_792){
s.hideElement(_792.effects[0].element);
s.undoClipping(_792.effects[0].element,_78f);
s.undoPositioned(_792.effects[0].element);
s.setStyle(_792.effects[0].element,_78b);
}},_787);
return new v.Parallel([new v.Opacity(_786,{sync:true,to:0,from:1,transition:_787.opacityTransition}),new v.Scale(_786,/Opera/.test(navigator.userAgent)?1:0,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,transition:_787.scaleTransition,scaleContent:_787.scaleContent,scaleFromCenter:_787.scaleFromCenter,restoreAfterFinish:true}),new v.Move(_786,{x:_78d,y:_78e,sync:true,transition:_787.moveTransition})],_790);
};
MochiKit.Visual.pulsate=function(_793,_794){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var b=MochiKit.Base;
var _798=MochiKit.Style.getStyle(_793,"opacity");
_794=b.update({duration:3,from:0,afterFinishInternal:function(_799){
MochiKit.Style.setStyle(_799.element,{"opacity":_798});
}},_794);
var _79a=_794.transition||v.Transitions.sinoidal;
_794.transition=function(pos){
return _79a(1-v.Transitions.pulse(pos,_794.pulses));
};
return new v.Opacity(_793,_794);
};
MochiKit.Visual.fold=function(_79c,_79d){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_79c=d.getElement(_79c);
var _7a1=s.getElementDimensions(_79c,true);
var _7a2={top:_79c.style.top,left:_79c.style.left,width:_79c.style.width,height:_79c.style.height};
var _7a3=s.makeClipping(_79c);
_79d=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_7a1.h,originalWidth:_7a1.w},afterFinishInternal:function(_7a4){
new v.Scale(_79c,1,{scaleContent:false,scaleY:false,scaleMode:{originalHeight:_7a1.h,originalWidth:_7a1.w},afterFinishInternal:function(_7a5){
s.hideElement(_7a5.element);
s.undoClipping(_7a5.element,_7a3);
s.setStyle(_7a5.element,_7a2);
}});
}},_79d);
return new v.Scale(_79c,5,_79d);
};
MochiKit.Visual.__new__=function(){
var m=MochiKit.Base;
m._deprecated(this,"Color","MochiKit.Color.Color","1.1");
m._deprecated(this,"getElementsComputedStyle","MochiKit.Style.getStyle","1.1");
m.nameFunctions(this);
};
MochiKit.Visual.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Visual);
MochiKit.Base._module("DragAndDrop","1.5",["Base","Iter","DOM","Signal","Visual","Position"]);
MochiKit.DragAndDrop.Droppables={drops:[],remove:function(_7a7){
this.drops=MochiKit.Base.filter(function(d){
return d.element!=MochiKit.DOM.getElement(_7a7);
},this.drops);
},register:function(drop){
this.drops.push(drop);
},unregister:function(drop){
this.drops=MochiKit.Base.filter(function(d){
return d!=drop;
},this.drops);
},prepare:function(_7ac){
MochiKit.Base.map(function(drop){
if(drop.isAccepted(_7ac)){
if(drop.options.activeclass){
MochiKit.DOM.addElementClass(drop.element,drop.options.activeclass);
}
drop.options.onactive(drop.element,_7ac);
}
},this.drops);
},findDeepestChild:function(_7ae){
deepest=_7ae[0];
for(i=1;i<_7ae.length;++i){
if(MochiKit.DOM.isChildNode(_7ae[i].element,deepest.element)){
deepest=_7ae[i];
}
}
return deepest;
},show:function(_7af,_7b0){
if(!this.drops.length){
return;
}
var _7b1=[];
if(this.last_active){
this.last_active.deactivate();
}
MochiKit.Iter.forEach(this.drops,function(drop){
if(drop.isAffected(_7af,_7b0)){
_7b1.push(drop);
}
});
if(_7b1.length>0){
drop=this.findDeepestChild(_7b1);
MochiKit.Position.within(drop.element,_7af.page.x,_7af.page.y);
drop.options.onhover(_7b0,drop.element,MochiKit.Position.overlap(drop.options.overlap,drop.element));
drop.activate();
}
},fire:function(_7b3,_7b4){
if(!this.last_active){
return;
}
MochiKit.Position.prepare();
if(this.last_active.isAffected(_7b3.mouse(),_7b4)){
this.last_active.options.ondrop(_7b4,this.last_active.element,_7b3);
}
},reset:function(_7b5){
MochiKit.Base.map(function(drop){
if(drop.options.activeclass){
MochiKit.DOM.removeElementClass(drop.element,drop.options.activeclass);
}
drop.options.ondesactive(drop.element,_7b5);
},this.drops);
if(this.last_active){
this.last_active.deactivate();
}
}};
MochiKit.DragAndDrop.Droppable=function(_7b7,_7b8){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_7b7,_7b8);
}
this.__init__(_7b7,_7b8);
};
MochiKit.DragAndDrop.Droppable.prototype={__class__:MochiKit.DragAndDrop.Droppable,__init__:function(_7ba,_7bb){
var d=MochiKit.DOM;
var b=MochiKit.Base;
this.element=d.getElement(_7ba);
this.options=b.update({greedy:true,hoverclass:null,activeclass:null,hoverfunc:b.noop,accept:null,onactive:b.noop,ondesactive:b.noop,onhover:b.noop,ondrop:b.noop,containment:[],tree:false},_7bb);
this.options._containers=[];
b.map(MochiKit.Base.bind(function(c){
this.options._containers.push(d.getElement(c));
},this),this.options.containment);
MochiKit.Style.makePositioned(this.element);
MochiKit.DragAndDrop.Droppables.register(this);
},isContained:function(_7bf){
if(this.options._containers.length){
var _7c0;
if(this.options.tree){
_7c0=_7bf.treeNode;
}else{
_7c0=_7bf.parentNode;
}
return MochiKit.Iter.some(this.options._containers,function(c){
return _7c0==c;
});
}else{
return true;
}
},isAccepted:function(_7c2){
return ((!this.options.accept)||MochiKit.Iter.some(this.options.accept,function(c){
return MochiKit.DOM.hasElementClass(_7c2,c);
}));
},isAffected:function(_7c4,_7c5){
return ((this.element!=_7c5)&&this.isContained(_7c5)&&this.isAccepted(_7c5)&&MochiKit.Position.within(this.element,_7c4.page.x,_7c4.page.y));
},deactivate:function(){
if(this.options.hoverclass){
MochiKit.DOM.removeElementClass(this.element,this.options.hoverclass);
}
this.options.hoverfunc(this.element,false);
MochiKit.DragAndDrop.Droppables.last_active=null;
},activate:function(){
if(this.options.hoverclass){
MochiKit.DOM.addElementClass(this.element,this.options.hoverclass);
}
this.options.hoverfunc(this.element,true);
MochiKit.DragAndDrop.Droppables.last_active=this;
},destroy:function(){
MochiKit.DragAndDrop.Droppables.unregister(this);
},repr:function(){
return "["+this.__class__.NAME+", options:"+MochiKit.Base.repr(this.options)+"]";
}};
MochiKit.DragAndDrop.Draggables={drags:[],register:function(_7c6){
if(this.drags.length===0){
var conn=MochiKit.Signal.connect;
this.eventMouseUp=conn(document,"onmouseup",this,this.endDrag);
this.eventMouseMove=conn(document,"onmousemove",this,this.updateDrag);
this.eventKeypress=conn(document,"onkeypress",this,this.keyPress);
}
this.drags.push(_7c6);
},unregister:function(_7c8){
this.drags=MochiKit.Base.filter(function(d){
return d!=_7c8;
},this.drags);
if(this.drags.length===0){
var disc=MochiKit.Signal.disconnect;
disc(this.eventMouseUp);
disc(this.eventMouseMove);
disc(this.eventKeypress);
}
},activate:function(_7cb){
window.focus();
this.activeDraggable=_7cb;
},deactivate:function(){
this.activeDraggable=null;
},updateDrag:function(_7cc){
if(!this.activeDraggable){
return;
}
var _7cd=_7cc.mouse();
if(this._lastPointer&&(MochiKit.Base.repr(this._lastPointer.page)==MochiKit.Base.repr(_7cd.page))){
return;
}
this._lastPointer=_7cd;
this.activeDraggable.updateDrag(_7cc,_7cd);
},endDrag:function(_7ce){
if(!this.activeDraggable){
return;
}
this._lastPointer=null;
this.activeDraggable.endDrag(_7ce);
this.activeDraggable=null;
},keyPress:function(_7cf){
if(this.activeDraggable){
this.activeDraggable.keyPress(_7cf);
}
},notify:function(_7d0,_7d1,_7d2){
MochiKit.Signal.signal(this,_7d0,_7d1,_7d2);
}};
MochiKit.DragAndDrop.Draggable=function(_7d3,_7d4){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_7d3,_7d4);
}
this.__init__(_7d3,_7d4);
};
MochiKit.DragAndDrop.Draggable.prototype={__class__:MochiKit.DragAndDrop.Draggable,__init__:function(_7d6,_7d7){
var v=MochiKit.Visual;
var b=MochiKit.Base;
_7d7=b.update({handle:false,starteffect:function(_7da){
this._savedOpacity=MochiKit.Style.getStyle(_7da,"opacity")||1;
new v.Opacity(_7da,{duration:0.2,from:this._savedOpacity,to:0.7});
},reverteffect:function(_7db,_7dc,_7dd){
var dur=Math.sqrt(Math.abs(_7dc^2)+Math.abs(_7dd^2))*0.02;
return new v.Move(_7db,{x:-_7dd,y:-_7dc,duration:dur});
},endeffect:function(_7df){
new v.Opacity(_7df,{duration:0.2,from:0.7,to:this._savedOpacity});
},onchange:b.noop,zindex:1000,revert:false,scroll:false,scrollSensitivity:20,scrollSpeed:15,snap:false},_7d7);
var d=MochiKit.DOM;
this.element=d.getElement(_7d6);
if(_7d7.handle&&(typeof (_7d7.handle)=="string")){
this.handle=d.getFirstElementByTagAndClassName(null,_7d7.handle,this.element);
}
if(!this.handle){
this.handle=d.getElement(_7d7.handle);
}
if(!this.handle){
this.handle=this.element;
}
if(_7d7.scroll&&!_7d7.scroll.scrollTo&&!_7d7.scroll.outerHTML){
_7d7.scroll=d.getElement(_7d7.scroll);
this._isScrollChild=MochiKit.DOM.isChildNode(this.element,_7d7.scroll);
}
MochiKit.Style.makePositioned(this.element);
this.delta=this.currentDelta();
this.options=_7d7;
this.dragging=false;
this.eventMouseDown=MochiKit.Signal.connect(this.handle,"onmousedown",this,this.initDrag);
MochiKit.DragAndDrop.Draggables.register(this);
},destroy:function(){
MochiKit.Signal.disconnect(this.eventMouseDown);
MochiKit.DragAndDrop.Draggables.unregister(this);
},currentDelta:function(){
var s=MochiKit.Style.getStyle;
return [parseInt(s(this.element,"left")||"0"),parseInt(s(this.element,"top")||"0")];
},initDrag:function(_7e2){
if(!_7e2.mouse().button.left){
return;
}
var src=_7e2.target();
var _7e4=(src.tagName||"").toUpperCase();
if(_7e4==="INPUT"||_7e4==="SELECT"||_7e4==="OPTION"||_7e4==="BUTTON"||_7e4==="TEXTAREA"){
return;
}
if(this._revert){
this._revert.cancel();
this._revert=null;
}
var _7e5=_7e2.mouse();
var pos=MochiKit.Position.cumulativeOffset(this.element);
this.offset=[_7e5.page.x-pos.x,_7e5.page.y-pos.y];
MochiKit.DragAndDrop.Draggables.activate(this);
_7e2.stop();
},startDrag:function(_7e7){
this.dragging=true;
if(this.options.selectclass){
MochiKit.DOM.addElementClass(this.element,this.options.selectclass);
}
if(this.options.zindex){
this.originalZ=parseInt(MochiKit.Style.getStyle(this.element,"z-index")||"0");
this.element.style.zIndex=this.options.zindex;
}
if(this.options.ghosting){
this._clone=this.element.cloneNode(true);
this.ghostPosition=MochiKit.Position.absolutize(this.element);
this.element.parentNode.insertBefore(this._clone,this.element);
}
if(this.options.scroll){
if(this.options.scroll==window){
var _7e8=this._getWindowScroll(this.options.scroll);
this.originalScrollLeft=_7e8.left;
this.originalScrollTop=_7e8.top;
}else{
this.originalScrollLeft=this.options.scroll.scrollLeft;
this.originalScrollTop=this.options.scroll.scrollTop;
}
}
MochiKit.DragAndDrop.Droppables.prepare(this.element);
MochiKit.DragAndDrop.Draggables.notify("start",this,_7e7);
if(this.options.starteffect){
this.options.starteffect(this.element);
}
},updateDrag:function(_7e9,_7ea){
if(!this.dragging){
this.startDrag(_7e9);
}
MochiKit.Position.prepare();
MochiKit.DragAndDrop.Droppables.show(_7ea,this.element);
MochiKit.DragAndDrop.Draggables.notify("drag",this,_7e9);
this.draw(_7ea);
this.options.onchange(this);
if(this.options.scroll){
this.stopScrolling();
var p,q;
if(this.options.scroll==window){
var s=this._getWindowScroll(this.options.scroll);
p=new MochiKit.Style.Coordinates(s.left,s.top);
q=new MochiKit.Style.Coordinates(s.left+s.width,s.top+s.height);
}else{
p=MochiKit.Position.page(this.options.scroll);
p.x+=this.options.scroll.scrollLeft;
p.y+=this.options.scroll.scrollTop;
p.x+=(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0);
p.y+=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0);
q=new MochiKit.Style.Coordinates(p.x+this.options.scroll.offsetWidth,p.y+this.options.scroll.offsetHeight);
}
var _7ee=[0,0];
if(_7ea.page.x>(q.x-this.options.scrollSensitivity)){
_7ee[0]=_7ea.page.x-(q.x-this.options.scrollSensitivity);
}else{
if(_7ea.page.x<(p.x+this.options.scrollSensitivity)){
_7ee[0]=_7ea.page.x-(p.x+this.options.scrollSensitivity);
}
}
if(_7ea.page.y>(q.y-this.options.scrollSensitivity)){
_7ee[1]=_7ea.page.y-(q.y-this.options.scrollSensitivity);
}else{
if(_7ea.page.y<(p.y+this.options.scrollSensitivity)){
_7ee[1]=_7ea.page.y-(p.y+this.options.scrollSensitivity);
}
}
this.startScrolling(_7ee);
}
if(/AppleWebKit/.test(navigator.appVersion)){
window.scrollBy(0,0);
}
_7e9.stop();
},finishDrag:function(_7ef,_7f0){
var dr=MochiKit.DragAndDrop;
this.dragging=false;
if(this.options.selectclass){
MochiKit.DOM.removeElementClass(this.element,this.options.selectclass);
}
if(this.options.ghosting){
MochiKit.Position.relativize(this.element,this.ghostPosition);
MochiKit.DOM.removeElement(this._clone);
this._clone=null;
}
if(_7f0){
dr.Droppables.fire(_7ef,this.element);
}
dr.Draggables.notify("end",this,_7ef);
var _7f2=this.options.revert;
if(_7f2&&typeof (_7f2)=="function"){
_7f2=_7f2(this.element);
}
var d=this.currentDelta();
if(_7f2&&this.options.reverteffect){
this._revert=this.options.reverteffect(this.element,d[1]-this.delta[1],d[0]-this.delta[0]);
}else{
this.delta=d;
}
if(this.options.zindex){
this.element.style.zIndex=this.originalZ;
}
if(this.options.endeffect){
this.options.endeffect(this.element);
}
dr.Draggables.deactivate();
dr.Droppables.reset(this.element);
},keyPress:function(_7f4){
if(_7f4.key().string!="KEY_ESCAPE"){
return;
}
this.finishDrag(_7f4,false);
_7f4.stop();
},endDrag:function(_7f5){
if(!this.dragging){
return;
}
this.stopScrolling();
this.finishDrag(_7f5,true);
_7f5.stop();
},draw:function(_7f6){
var pos=MochiKit.Position.cumulativeOffset(this.element);
var d=this.currentDelta();
pos.x-=d[0];
pos.y-=d[1];
if(this.options.scroll&&(this.options.scroll!=window&&this._isScrollChild)){
pos.x-=this.options.scroll.scrollLeft-this.originalScrollLeft;
pos.y-=this.options.scroll.scrollTop-this.originalScrollTop;
}
var p=[_7f6.page.x-pos.x-this.offset[0],_7f6.page.y-pos.y-this.offset[1]];
if(this.options.snap){
if(typeof (this.options.snap)=="function"){
p=this.options.snap(p[0],p[1]);
}else{
if(this.options.snap instanceof Array){
var i=-1;
p=MochiKit.Base.map(MochiKit.Base.bind(function(v){
i+=1;
return Math.round(v/this.options.snap[i])*this.options.snap[i];
},this),p);
}else{
p=MochiKit.Base.map(MochiKit.Base.bind(function(v){
return Math.round(v/this.options.snap)*this.options.snap;
},this),p);
}
}
}
var _7fd=this.element.style;
if((!this.options.constraint)||(this.options.constraint=="horizontal")){
_7fd.left=p[0]+"px";
}
if((!this.options.constraint)||(this.options.constraint=="vertical")){
_7fd.top=p[1]+"px";
}
if(_7fd.visibility=="hidden"){
_7fd.visibility="";
}
},stopScrolling:function(){
if(this.scrollInterval){
clearInterval(this.scrollInterval);
this.scrollInterval=null;
MochiKit.DragAndDrop.Draggables._lastScrollPointer=null;
}
},startScrolling:function(_7fe){
if(!_7fe[0]&&!_7fe[1]){
return;
}
this.scrollSpeed=[_7fe[0]*this.options.scrollSpeed,_7fe[1]*this.options.scrollSpeed];
this.lastScrolled=new Date();
this.scrollInterval=setInterval(MochiKit.Base.bind(this.scroll,this),10);
},scroll:function(){
var _7ff=new Date();
var _800=_7ff-this.lastScrolled;
this.lastScrolled=_7ff;
if(this.options.scroll==window){
var s=this._getWindowScroll(this.options.scroll);
if(this.scrollSpeed[0]||this.scrollSpeed[1]){
var dm=_800/1000;
this.options.scroll.scrollTo(s.left+dm*this.scrollSpeed[0],s.top+dm*this.scrollSpeed[1]);
}
}else{
this.options.scroll.scrollLeft+=this.scrollSpeed[0]*_800/1000;
this.options.scroll.scrollTop+=this.scrollSpeed[1]*_800/1000;
}
var d=MochiKit.DragAndDrop;
MochiKit.Position.prepare();
d.Droppables.show(d.Draggables._lastPointer,this.element);
d.Draggables.notify("drag",this);
if(this._isScrollChild){
d.Draggables._lastScrollPointer=d.Draggables._lastScrollPointer||d.Draggables._lastPointer;
d.Draggables._lastScrollPointer.x+=this.scrollSpeed[0]*_800/1000;
d.Draggables._lastScrollPointer.y+=this.scrollSpeed[1]*_800/1000;
if(d.Draggables._lastScrollPointer.x<0){
d.Draggables._lastScrollPointer.x=0;
}
if(d.Draggables._lastScrollPointer.y<0){
d.Draggables._lastScrollPointer.y=0;
}
this.draw(d.Draggables._lastScrollPointer);
}
this.options.onchange(this);
},_getWindowScroll:function(win){
var vp,w,h;
MochiKit.DOM.withWindow(win,function(){
vp=MochiKit.Style.getViewportPosition(win.document);
});
if(win.innerWidth){
w=win.innerWidth;
h=win.innerHeight;
}else{
if(win.document.documentElement&&win.document.documentElement.clientWidth){
w=win.document.documentElement.clientWidth;
h=win.document.documentElement.clientHeight;
}else{
w=win.document.body.offsetWidth;
h=win.document.body.offsetHeight;
}
}
return {top:vp.y,left:vp.x,width:w,height:h};
},repr:function(){
return "["+this.__class__.NAME+", options:"+MochiKit.Base.repr(this.options)+"]";
}};
MochiKit.DragAndDrop.__new__=function(){
MochiKit.Base.nameFunctions(this);
};
MochiKit.DragAndDrop.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.DragAndDrop);
MochiKit.Base._module("Sortable","1.5",["Base","Iter","DOM","Position","DragAndDrop"]);
MochiKit.Base.update(MochiKit.Sortable,{__export__:false,sortables:{},_findRootElement:function(_808){
while(_808.tagName.toUpperCase()!="BODY"){
if(_808.id&&MochiKit.Sortable.sortables[_808.id]){
return _808;
}
_808=_808.parentNode;
}
},_createElementId:function(_809){
if(_809.id==null||_809.id==""){
var d=MochiKit.DOM;
var id;
var _80c=1;
while(d.getElement(id="sortable"+_80c)!=null){
_80c+=1;
}
d.setNodeAttribute(_809,"id",id);
}
},options:function(_80d){
_80d=MochiKit.Sortable._findRootElement(MochiKit.DOM.getElement(_80d));
if(!_80d){
return;
}
return MochiKit.Sortable.sortables[_80d.id];
},destroy:function(_80e){
var s=MochiKit.Sortable.options(_80e);
var b=MochiKit.Base;
var d=MochiKit.DragAndDrop;
if(s){
MochiKit.Signal.disconnect(s.startHandle);
MochiKit.Signal.disconnect(s.endHandle);
b.map(function(dr){
d.Droppables.remove(dr);
},s.droppables);
b.map(function(dr){
dr.destroy();
},s.draggables);
delete MochiKit.Sortable.sortables[s.element.id];
}
},create:function(_814,_815){
_814=MochiKit.DOM.getElement(_814);
var self=MochiKit.Sortable;
self._createElementId(_814);
_815=MochiKit.Base.update({element:_814,tag:"li",dropOnEmpty:false,tree:false,treeTag:"ul",overlap:"vertical",constraint:"vertical",containment:[_814],handle:false,only:false,hoverclass:null,ghosting:false,scroll:false,scrollSensitivity:20,scrollSpeed:15,format:/^[^_]*_(.*)$/,onChange:MochiKit.Base.noop,onUpdate:MochiKit.Base.noop,accept:null},_815);
self.destroy(_814);
var _817={revert:true,ghosting:_815.ghosting,scroll:_815.scroll,scrollSensitivity:_815.scrollSensitivity,scrollSpeed:_815.scrollSpeed,constraint:_815.constraint,handle:_815.handle};
if(_815.starteffect){
_817.starteffect=_815.starteffect;
}
if(_815.reverteffect){
_817.reverteffect=_815.reverteffect;
}else{
if(_815.ghosting){
_817.reverteffect=function(_818){
_818.style.top=0;
_818.style.left=0;
};
}
}
if(_815.endeffect){
_817.endeffect=_815.endeffect;
}
if(_815.zindex){
_817.zindex=_815.zindex;
}
var _819={overlap:_815.overlap,containment:_815.containment,hoverclass:_815.hoverclass,onhover:self.onHover,tree:_815.tree,accept:_815.accept};
var _81a={onhover:self.onEmptyHover,overlap:_815.overlap,containment:_815.containment,hoverclass:_815.hoverclass,accept:_815.accept};
MochiKit.DOM.removeEmptyTextNodes(_814);
_815.draggables=[];
_815.droppables=[];
if(_815.dropOnEmpty||_815.tree){
new MochiKit.DragAndDrop.Droppable(_814,_81a);
_815.droppables.push(_814);
}
MochiKit.Base.map(function(e){
var _81c=_815.handle?MochiKit.DOM.getFirstElementByTagAndClassName(null,_815.handle,e):e;
_815.draggables.push(new MochiKit.DragAndDrop.Draggable(e,MochiKit.Base.update(_817,{handle:_81c})));
new MochiKit.DragAndDrop.Droppable(e,_819);
if(_815.tree){
e.treeNode=_814;
}
_815.droppables.push(e);
},(self.findElements(_814,_815)||[]));
if(_815.tree){
MochiKit.Base.map(function(e){
new MochiKit.DragAndDrop.Droppable(e,_81a);
e.treeNode=_814;
_815.droppables.push(e);
},(self.findTreeElements(_814,_815)||[]));
}
self.sortables[_814.id]=_815;
_815.lastValue=self.serialize(_814);
_815.startHandle=MochiKit.Signal.connect(MochiKit.DragAndDrop.Draggables,"start",MochiKit.Base.partial(self.onStart,_814));
_815.endHandle=MochiKit.Signal.connect(MochiKit.DragAndDrop.Draggables,"end",MochiKit.Base.partial(self.onEnd,_814));
},onStart:function(_81e,_81f){
var self=MochiKit.Sortable;
var _821=self.options(_81e);
_821.lastValue=self.serialize(_821.element);
},onEnd:function(_822,_823){
var self=MochiKit.Sortable;
self.unmark();
var _825=self.options(_822);
if(_825.lastValue!=self.serialize(_825.element)){
_825.onUpdate(_825.element);
}
},findElements:function(_826,_827){
return MochiKit.Sortable.findChildren(_826,_827.only,_827.tree,_827.tag);
},findTreeElements:function(_828,_829){
return MochiKit.Sortable.findChildren(_828,_829.only,_829.tree?true:false,_829.treeTag);
},findChildren:function(_82a,only,_82c,_82d){
if(!_82a.hasChildNodes()){
return null;
}
_82d=_82d.toUpperCase();
if(only){
only=MochiKit.Base.flattenArray([only]);
}
var _82e=[];
MochiKit.Base.map(function(e){
if(e.tagName&&e.tagName.toUpperCase()==_82d&&(!only||MochiKit.Iter.some(only,function(c){
return MochiKit.DOM.hasElementClass(e,c);
}))){
_82e.push(e);
}
if(_82c){
var _831=MochiKit.Sortable.findChildren(e,only,_82c,_82d);
if(_831&&_831.length>0){
_82e=_82e.concat(_831);
}
}
},_82a.childNodes);
return _82e;
},onHover:function(_832,_833,_834){
if(MochiKit.DOM.isChildNode(_833,_832)){
return;
}
var self=MochiKit.Sortable;
if(_834>0.33&&_834<0.66&&self.options(_833).tree){
return;
}else{
if(_834>0.5){
self.mark(_833,"before");
if(_833.previousSibling!=_832){
var _836=_832.parentNode;
_832.style.visibility="hidden";
_833.parentNode.insertBefore(_832,_833);
if(_833.parentNode!=_836){
self.options(_836).onChange(_832);
}
self.options(_833.parentNode).onChange(_832);
}
}else{
self.mark(_833,"after");
var _837=_833.nextSibling||null;
if(_837!=_832){
var _836=_832.parentNode;
_832.style.visibility="hidden";
_833.parentNode.insertBefore(_832,_837);
if(_833.parentNode!=_836){
self.options(_836).onChange(_832);
}
self.options(_833.parentNode).onChange(_832);
}
}
}
},_offsetSize:function(_838,type){
if(type=="vertical"||type=="height"){
return _838.offsetHeight;
}else{
return _838.offsetWidth;
}
},onEmptyHover:function(_83a,_83b,_83c){
var _83d=_83a.parentNode;
var self=MochiKit.Sortable;
var _83f=self.options(_83b);
if(!MochiKit.DOM.isChildNode(_83b,_83a)){
var _840;
var _841=self.findElements(_83b,{tag:_83f.tag,only:_83f.only});
var _842=null;
if(_841){
var _843=self._offsetSize(_83b,_83f.overlap)*(1-_83c);
for(_840=0;_840<_841.length;_840+=1){
if(_843-self._offsetSize(_841[_840],_83f.overlap)>=0){
_843-=self._offsetSize(_841[_840],_83f.overlap);
}else{
if(_843-(self._offsetSize(_841[_840],_83f.overlap)/2)>=0){
_842=_840+1<_841.length?_841[_840+1]:null;
break;
}else{
_842=_841[_840];
break;
}
}
}
}
_83b.insertBefore(_83a,_842);
self.options(_83d).onChange(_83a);
_83f.onChange(_83a);
}
},unmark:function(){
var m=MochiKit.Sortable._marker;
if(m){
MochiKit.Style.hideElement(m);
}
},mark:function(_845,_846){
var d=MochiKit.DOM;
var self=MochiKit.Sortable;
var _849=self.options(_845.parentNode);
if(_849&&!_849.ghosting){
return;
}
if(!self._marker){
self._marker=d.getElement("dropmarker")||document.createElement("DIV");
MochiKit.Style.hideElement(self._marker);
d.addElementClass(self._marker,"dropmarker");
self._marker.style.position="absolute";
document.getElementsByTagName("body").item(0).appendChild(self._marker);
}
var _84a=MochiKit.Position.cumulativeOffset(_845);
self._marker.style.left=_84a.x+"px";
self._marker.style.top=_84a.y+"px";
if(_846=="after"){
if(_849.overlap=="horizontal"){
self._marker.style.left=(_84a.x+_845.clientWidth)+"px";
}else{
self._marker.style.top=(_84a.y+_845.clientHeight)+"px";
}
}
MochiKit.Style.showElement(self._marker);
},_tree:function(_84b,_84c,_84d){
var self=MochiKit.Sortable;
var _84f=self.findElements(_84b,_84c)||[];
for(var i=0;i<_84f.length;++i){
var _851=_84f[i].id.match(_84c.format);
if(!_851){
continue;
}
var _852={id:encodeURIComponent(_851?_851[1]:null),element:_84b,parent:_84d,children:[],position:_84d.children.length,container:self._findChildrenElement(_84f[i],_84c.treeTag.toUpperCase())};
if(_852.container){
self._tree(_852.container,_84c,_852);
}
_84d.children.push(_852);
}
return _84d;
},_findChildrenElement:function(_853,_854){
if(_853&&_853.hasChildNodes){
_854=_854.toUpperCase();
for(var i=0;i<_853.childNodes.length;++i){
if(_853.childNodes[i].tagName.toUpperCase()==_854){
return _853.childNodes[i];
}
}
}
return null;
},tree:function(_856,_857){
_856=MochiKit.DOM.getElement(_856);
var _858=MochiKit.Sortable.options(_856);
_857=MochiKit.Base.update({tag:_858.tag,treeTag:_858.treeTag,only:_858.only,name:_856.id,format:_858.format},_857||{});
var root={id:null,parent:null,children:new Array,container:_856,position:0};
return MochiKit.Sortable._tree(_856,_857,root);
},setSequence:function(_85a,_85b,_85c){
var self=MochiKit.Sortable;
var b=MochiKit.Base;
_85a=MochiKit.DOM.getElement(_85a);
_85c=b.update(self.options(_85a),_85c||{});
var _85f={};
b.map(function(n){
var m=n.id.match(_85c.format);
if(m){
_85f[m[1]]=[n,n.parentNode];
}
n.parentNode.removeChild(n);
},self.findElements(_85a,_85c));
b.map(function(_862){
var n=_85f[_862];
if(n){
n[1].appendChild(n[0]);
delete _85f[_862];
}
},_85b);
},_constructIndex:function(node){
var _865="";
do{
if(node.id){
_865="["+node.position+"]"+_865;
}
}while((node=node.parent)!=null);
return _865;
},sequence:function(_866,_867){
_866=MochiKit.DOM.getElement(_866);
var self=MochiKit.Sortable;
var _867=MochiKit.Base.update(self.options(_866),_867||{});
return MochiKit.Base.map(function(item){
return item.id.match(_867.format)?item.id.match(_867.format)[1]:"";
},MochiKit.DOM.getElement(self.findElements(_866,_867)||[]));
},serialize:function(_86a,_86b){
_86a=MochiKit.DOM.getElement(_86a);
var self=MochiKit.Sortable;
_86b=MochiKit.Base.update(self.options(_86a),_86b||{});
var name=encodeURIComponent(_86b.name||_86a.id);
if(_86b.tree){
return MochiKit.Base.flattenArray(MochiKit.Base.map(function(item){
return [name+self._constructIndex(item)+"[id]="+encodeURIComponent(item.id)].concat(item.children.map(arguments.callee));
},self.tree(_86a,_86b).children)).join("&");
}else{
return MochiKit.Base.map(function(item){
return name+"[]="+encodeURIComponent(item);
},self.sequence(_86a,_86b)).join("&");
}
}});
MochiKit.Sortable.Sortable=MochiKit.Sortable;
MochiKit.Sortable.__new__=function(){
MochiKit.Base.nameFunctions(this);
};
MochiKit.Sortable.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Sortable);
if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.MochiKit)=="undefined"){
MochiKit.MochiKit={};
}
MochiKit.MochiKit.NAME="MochiKit.MochiKit";
MochiKit.MochiKit.VERSION="1.5";
MochiKit.MochiKit.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.MochiKit.toString=function(){
return this.__repr__();
};
MochiKit.MochiKit.SUBMODULES=["Base","Iter","Logging","DateTime","Format","Text","Async","DOM","Selector","Style","LoggingPane","Color","Signal","Position","Visual","DragAndDrop","Sortable"];
(function(){
if(typeof (document)=="undefined"){
return;
}
var _870=document.getElementsByTagName("script");
var _871="http://www.w3.org/1999/xhtml";
var _872="http://www.w3.org/2000/svg";
var _873="http://www.w3.org/1999/xlink";
var _874="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var base=null;
var _876=null;
var _877={};
var i;
var src;
for(i=0;i<_870.length;i++){
src=null;
switch(_870[i].namespaceURI){
case _872:
src=_870[i].getAttributeNS(_873,"href");
break;
default:
src=_870[i].getAttribute("src");
break;
}
if(!src){
continue;
}
_877[src]=true;
if(src.match(/MochiKit.js(\?.*)?$/)){
base=src.substring(0,src.lastIndexOf("MochiKit.js"));
_876=_870[i];
}
}
if(base===null){
return;
}
var _87a=MochiKit.MochiKit.SUBMODULES;
for(var i=0;i<_87a.length;i++){
if(MochiKit[_87a[i]]){
continue;
}
var uri=base+_87a[i]+".js";
if(uri in _877){
continue;
}
if(_876.namespaceURI==_872||_876.namespaceURI==_874){
var s=document.createElementNS(_876.namespaceURI,"script");
s.setAttribute("id","MochiKit_"+base+_87a[i]);
if(_876.namespaceURI==_872){
s.setAttributeNS(_873,"href",uri);
}else{
s.setAttribute("src",uri);
}
s.setAttribute("type","application/x-javascript");
_876.parentNode.appendChild(s);
}else{
document.write("<"+_876.nodeName+" src=\""+uri+"\" type=\"text/javascript\"></script>");
}
}
})();
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Base)=="undefined"){
throw new ReferenceError("MochiKit.Base must be loaded before loading this script");
}
MochiKit.Base.isFalse=function(_87d){
return _87d==false||_87d==null||_87d==0||_87d.length===0||_87d=="false"||_87d=="null";
};
MochiKit.Base.defaultValue=function(){
for(var i=0;i<arguments.length;i++){
if(typeof (arguments[i])!="undefined"){
return arguments[i];
}
}
return undefined;
};
MochiKit.Base.dict=function(_87f,_880){
var o={};
if(!MochiKit.Base.isArrayLike(_87f)){
throw new TypeError("First argument must be array-like");
}
if(MochiKit.Base.isArrayLike(_880)&&_87f.length!==_880.length){
throw new TypeError("Both arrays must be of same length");
}
for(var i=0;i<_87f.length;i++){
var k=_87f[i];
if(k===null||k===undefined){
throw new TypeError("Key at index "+i+" is null or undefined");
}else{
if(MochiKit.Base.isArrayLike(k)){
o[k[0]]=k[1];
}else{
if(MochiKit.Base.isArrayLike(_880)){
o[k]=_880[i];
}else{
o[k]=_880;
}
}
}
}
return o;
};
MochiKit.Base.select=function(src,keys){
var res={};
if(!MochiKit.Base.isArrayLike(keys)){
keys=MochiKit.Base.keys(keys);
}
for(var i=0;i<keys.length;i++){
var k=keys[i];
if(k in src){
res[k]=src[k];
}
}
return res;
};
MochiKit.Base.mask=function(src,keys){
var res={};
if(!MochiKit.Base.isArrayLike(keys)){
keys=MochiKit.Base.keys(keys);
}
for(var i=0;i<keys.length;i++){
var k=keys[i];
if(k in src){
res[k]=src[k];
delete src[k];
}
}
return res;
};
MochiKit.Base.functionName=function(func){
if(func==null){
return null;
}else{
if(func.name!=null&&func.name!=""){
return func.name;
}else{
return func.NAME;
}
}
};
MochiKit.Base.registerFunctionNames=function(obj,name,_891){
if(typeof (obj)==="function"&&(obj.name==null||obj.name=="")&&typeof (obj.NAME)==="undefined"){
obj.NAME=name;
}
_891=_891||[];
if(obj!=null&&name!=null&&(typeof (obj)==="object"||typeof (obj)==="function")&&obj!==Object.prototype&&obj!==Function.prototype&&typeof (obj.nodeType)!=="number"&&MochiKit.Base.findIdentical(_891,obj)<0){
_891.push(obj);
for(var prop in obj){
var str=name+"."+prop;
MochiKit.Base.registerFunctionNames(obj[prop],str,_891);
}
var str=name+".prototype";
MochiKit.Base.registerFunctionNames(obj.prototype,str,_891);
_891.pop();
}
};
MochiKit.Base.stackTrace=function(_894){
var func=arguments.callee.caller;
var _896=[];
var res=[];
_894=_894||20;
while(func!=null){
if(MochiKit.Base.findIdentical(_896,func)>=0){
res.push("...recursion...");
break;
}
if(func.$stackTrace!=null){
res=res.concat(func.$stackTrace);
break;
}
var name=MochiKit.Base.functionName(func);
if(name===null){
}else{
res.push(name||"<anonymous>");
}
_896.push(func);
if(_896.length>=_894){
res.push("...");
break;
}
func=func.caller;
}
return res;
};
MochiKit.Base.injectStackTrace=function(_899,func){
func=func||arguments.callee.caller;
if(func!=null){
if(_899){
func.$stackTrace=_899;
}else{
delete func.$stackTrace;
}
}
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.DOM)=="undefined"){
throw new ReferenceError("MochiKit.DOM must be loaded before loading this script");
}
MochiKit.DOM.NS={XHTML:"http://www.w3.org/1999/xhtml",XLINK:"http://www.w3.org/1999/xlink",SVG:"http://www.w3.org/2000/svg",XUL:"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"};
MochiKit.DOM.NS.HTML=[undefined,null,"",MochiKit.DOM.NS.XHTML];
MochiKit.DOM.isDOM=function(obj){
return typeof (obj)!=="undefined"&&typeof (obj.nodeType)==="number"&&obj.nodeType>0;
};
MochiKit.DOM.isHTML=function(obj){
var ns=MochiKit.DOM.NS.HTML;
return MochiKit.DOM.isDOM(obj)&&MochiKit.Base.findIdentical(ns,obj.namespaceURI)>=0;
};
MochiKit.DOM.reprDOM=function(node){
if(node==null){
return "null";
}else{
if(typeof (node)==="string"){
return node;
}else{
if(node.nodeType===1){
var res="<"+node.tagName.toLowerCase();
var _8a0=MochiKit.Base.map(MochiKit.DOM.reprDOM,node.attributes);
res+=_8a0.join("");
if(node.hasChildNodes()){
res+=" ["+node.childNodes.length+" child nodes]";
}
res+="/>";
return res;
}else{
if(node.nodeType===2){
if(node.specified){
return " "+node.name+"=\""+MochiKit.DOM.escapeHTML(node.value)+"\"";
}else{
return "";
}
}else{
if(node.nodeType===3){
return MochiKit.DOM.escapeHTML(node.nodeValue);
}else{
return node.toString();
}
}
}
}
}
};
MochiKit.DOM.attributeArrayNewImpl=function(node){
var res=[];
node=MochiKit.DOM.getElement(node);
for(var i=0;node!=null&&i<node.attributes.length;i++){
var a=node.attributes[i];
if(a.specified){
res.push([a.name,a.value]);
}
}
return res;
};
MochiKit.DOM.childNode=function(_8a5,_8a6){
_8a5=MochiKit.DOM.getElement(_8a5);
if(typeof (_8a6)=="number"){
if(_8a6<0||_8a6>=_8a5.childNodes.length){
return null;
}else{
return _8a5.childNodes[_8a6];
}
}else{
var node=MochiKit.DOM.getElement(_8a6);
while(node!=null&&node!==_8a5&&node.parentNode!==_8a5){
node=node.parentNode;
}
return (node==null||node===_8a5)?null:node;
}
};
MochiKit.DOM.createDOMExt=function(ns,tag,_8aa){
var doc=MochiKit.DOM.currentDocument();
var node=(ns)?doc.createElementNS(ns,tag):doc.createElement(tag);
MochiKit.DOM.updateNodeAttributes(node,_8aa);
var _8ad=MochiKit.Base.extend([],arguments,3);
MochiKit.DOM.appendChildNodes(node,_8ad);
return node;
};
MochiKit.DOM.createTextNode=function(text){
return MochiKit.DOM.currentDocument().createTextNode(text);
};
MochiKit.DOM.createDOMFuncExt=function(ns,tag,args,_8b2){
args=args||[];
_8b2=_8b2||{};
var _8b3=MochiKit.Base.extend([],arguments,4);
return function(){
var _8b4=MochiKit.Base.update({},_8b2);
for(var pos=0;pos<args.length;pos++){
if(arguments[pos]==null){
throw new Error("Argument '"+args[pos]+"' cannot be null");
}
_8b4[args[pos]]=arguments[pos];
}
MochiKit.Base.update(_8b4,arguments[args.length]);
var _8b6=MochiKit.Base.extend([],_8b3);
MochiKit.Base.extend(_8b6,arguments,args.length+1);
return MochiKit.DOM.createDOMExt(ns,tag,_8b4,_8b6);
};
};
MochiKit.DOM.blurAll=function(node){
if(arguments.length<=1){
MochiKit.DOM.blurAll(node,"A","BUTTON","INPUT","TEXTAREA","SELECT");
}else{
node.blur();
for(var i=1;i<arguments.length;i++){
var _8b9=node.getElementsByTagName(arguments[i]);
for(var j=0;j<_8b9.length;j++){
_8b9[j].blur();
}
}
}
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.DateTime)=="undefined"){
throw new ReferenceError("MochiKit.DateTime must be loaded before loading this script");
}
MochiKit.DateTime.MILLIS_PER_SECOND=1000;
MochiKit.DateTime.MILLIS_PER_MINUTE=60*1000;
MochiKit.DateTime.MILLIS_PER_HOUR=60*60*1000;
MochiKit.DateTime.MILLIS_PER_DAY=24*60*60*1000;
MochiKit.DateTime.MILLIS_PER_WEEK=7*24*60*60*1000;
MochiKit.DateTime._twoDigitNumber=MochiKit.Format.numberFormatter("00");
MochiKit.DateTime.TimePeriod=function(_8bb){
return {days:Math.floor(_8bb/MochiKit.DateTime.MILLIS_PER_DAY),hours:Math.floor(_8bb/MochiKit.DateTime.MILLIS_PER_HOUR)%24,minutes:Math.floor(_8bb/MochiKit.DateTime.MILLIS_PER_MINUTE)%60,seconds:Math.floor(_8bb/MochiKit.DateTime.MILLIS_PER_SECOND)%60,millis:_8bb%1000};
};
MochiKit.DateTime.toApproxPeriod=function(_8bc){
var p=MochiKit.DateTime.TimePeriod(_8bc);
if(p.days>=10){
return p.days+" days";
}else{
if(p.days>=1){
return p.days+" days "+MochiKit.DateTime._twoDigitNumber(p.hours)+" hours";
}else{
if(p.hours>=1){
return p.hours+":"+MochiKit.DateTime._twoDigitNumber(p.minutes)+" hours";
}else{
if(p.minutes>=1){
return p.minutes+":"+MochiKit.DateTime._twoDigitNumber(p.seconds)+" minutes";
}else{
if(p.seconds>=1){
return p.seconds+" seconds";
}else{
return p.millis+" milliseconds";
}
}
}
}
}
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.SVG)=="undefined"){
MochiKit.SVG={};
}
MochiKit.SVG.SVG=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"svg",[],{version:"1.1",baseProfile:"full"});
MochiKit.SVG.DEFS=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"defs");
MochiKit.SVG.G=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"g");
MochiKit.SVG.LINE=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"line",["x1","y1","x2","y2"]);
MochiKit.SVG.RECT=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"rect",["x","y","width","height"]);
MochiKit.SVG.CIRCLE=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"circle",["cx","cy","r"]);
MochiKit.SVG.PATH=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"path",["d"]);
MochiKit.SVG.TEXT=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"text",["x","y"]);
MochiKit.SVG.RADIALGRADIENT=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"radialGradient",["id"],{gradientUnits:"objectBoundingBox",cx:"0.5",cy:"0.5",r:"0.5"});
MochiKit.SVG.STOP=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"stop",["offset","stop-color"]);
MochiKit.SVG.moveToTop=function(node){
node=MochiKit.DOM.getElement(node);
if(node!=null){
var _8bf=node.parentNode;
if(_8bf&&_8bf.lastChild!==node){
_8bf.appendChild(node);
}
}
};
MochiKit.SVG.moveToBottom=function(node){
node=MochiKit.DOM.getElement(node);
if(node!=null){
var _8c1=node.parentNode;
if(_8c1&&_8c1.firstChild!==node){
_8c1.insertBefore(node,_8c1.firstChild);
}
}
};
MochiKit.SVG.rotate=function(node,_8c3,x,y){
var str=MochiKit.DOM.getNodeAttribute(node,"transform");
x=x||0;
y=y||0;
if(str==null||str==""){
str="";
}else{
str+=" ";
}
str+="rotate("+_8c3+","+x+","+y+")";
MochiKit.DOM.setNodeAttribute(node,"transform",str);
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Style)=="undefined"){
throw new ReferenceError("MochiKit.Style must be loaded before loading this script");
}
MochiKit.Style.getBorderBox=function(node){
var _8c8=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_8c8(node,"border-width-top")),b:px(_8c8(node,"border-width-bottom")),l:px(_8c8(node,"border-width-left")),r:px(_8c8(node,"border-width-right"))};
};
MochiKit.Style.getPaddingBox=function(node){
var _8cb=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_8cb(node,"padding-top")),b:px(_8cb(node,"padding-bottom")),l:px(_8cb(node,"padding-left")),r:px(_8cb(node,"padding-right"))};
};
MochiKit.Style._toPixels=function(_8cd){
if(_8cd!=null){
try{
_8cd=MochiKit.Format.rstrip(_8cd,"px");
_8cd=Math.round(parseFloat(_8cd));
}
catch(ignore){
_8cd=null;
}
}
return (_8cd==null||isNaN(_8cd))?null:_8cd;
};
MochiKit.Style.getScrollOffset=function(node){
node=MochiKit.DOM.getElement(node);
var x=node.scrollLeft||0;
var y=node.scrollTop||0;
return new MochiKit.Style.Coordinates(x,y);
};
MochiKit.Style.setScrollOffset=function(node,_8d2){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=_8d2.x;
node.scrollTop=_8d2.y;
};
MochiKit.Style.resetScrollOffset=function(node,_8d4){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=0;
node.scrollTop=0;
if(_8d4){
node=node.firstChild;
while(node!=null){
if(node.nodeType===1){
MochiKit.Style.resetScrollOffset(node,true);
}
node=node.nextSibling;
}
}
};
MochiKit.Style.adjustScrollOffset=function(node,box){
node=MochiKit.DOM.getElement(node);
var dim=MochiKit.Style.getElementDimensions(node);
var xMin=MochiKit.Base.defaultValue(box.l,box.x,NaN);
var xMax=MochiKit.Base.defaultValue(box.r,xMin+box.w,NaN);
var yMin=MochiKit.Base.defaultValue(box.t,box.y,NaN);
var yMax=MochiKit.Base.defaultValue(box.b,yMin+box.h,NaN);
if(!isNaN(xMax)&&node.scrollLeft+dim.w<xMax){
node.scrollLeft=xMax-dim.h;
}
if(!isNaN(xMin)&&node.scrollLeft>xMin){
node.scrollLeft=xMin;
}
if(!isNaN(yMax)&&node.scrollTop+dim.h<yMax){
node.scrollTop=yMax-dim.h;
}
if(!isNaN(yMin)&&node.scrollTop>yMin){
node.scrollTop=yMin;
}
};
MochiKit.Style.registerSizeConstraints=function(node,_8dd,_8de,_8df){
node=MochiKit.DOM.getElement(node);
var sc=node.sizeConstraints={w:null,h:null,a:null};
if(typeof (_8dd)=="number"){
sc.w=function(w,h){
return _8dd;
};
}else{
if(typeof (_8dd)=="function"){
sc.w=_8dd;
}else{
if(typeof (_8dd)=="string"){
var code="return "+_8dd.replace(/%/g,"*0.01*w")+";";
sc.w=new Function("w","h",code);
}
}
}
if(typeof (_8de)=="number"){
sc.h=function(w,h){
return _8de;
};
}else{
if(typeof (_8de)=="function"){
sc.h=_8de;
}else{
if(typeof (_8de)=="string"){
var code="return "+_8de.replace(/%/g,"*0.01*h")+";";
sc.h=new Function("w","h",code);
}
}
}
if(typeof (_8df)=="number"){
sc.a=function(w,h){
return _8df;
};
}else{
if(typeof (_8df)=="function"){
sc.a=_8df;
}else{
if(typeof (_8df)=="string"){
var code="return "+_8df.replace(/%/g,"*0.01*w/h")+";";
sc.a=new Function("w","h",code);
}
}
}
};
MochiKit.Style.resizeElements=function(){
var args=MochiKit.Base.flattenArray(arguments);
for(var i=0;i<args.length;i++){
var node=MochiKit.DOM.getElement(args[i]);
if(node!=null&&node.nodeType===1&&node.parentNode!=null&&node.sizeConstraints!=null){
var ref={w:node.parentNode.w,h:node.parentNode.h};
if(ref.w==null&&ref.h==null){
ref=MochiKit.Style.getElementDimensions(node.parentNode,true);
}
var dim=MochiKit.Style._evalConstraints(node.sizeConstraints,ref);
MochiKit.Style.setElementDimensions(node,dim);
node.w=dim.w;
node.h=dim.h;
}
if(node!=null&&typeof (node.resizeContent)=="function"){
node.resizeContent();
}else{
node=node.firstChild;
while(node!=null){
if(node.nodeType===1){
MochiKit.Style.resizeElements(node);
}
node=node.nextSibling;
}
}
}
};
MochiKit.Style._evalConstraints=function(sc,ref){
var log=MochiKit.Logging.logError;
if(typeof (sc.w)=="function"){
try{
var w=Math.max(0,Math.min(ref.w,sc.w(ref.w,ref.h)));
}
catch(e){
log("Error evaluating width size constraint; "+"w: "+ref.w+", h: "+ref.h,e);
}
}
if(typeof (sc.h)=="function"){
try{
var h=Math.max(0,Math.min(ref.h,sc.h(ref.w,ref.h)));
}
catch(e){
log("Error evaluating height size constraint; "+"w: "+ref.w+", h: "+ref.h,e);
}
}
if(typeof (sc.a)=="function"){
try{
var a=sc.a(ref.w,ref.h);
w=w||ref.w;
h=h||ref.h;
if(h*a>ref.w){
h=ref.w/a;
}
if(w/a>ref.h){
w=ref.h*a;
}
if(w>h*a){
w=h*a;
}else{
h=w/a;
}
}
catch(e){
log("Error evaluating aspect size constraint; "+"w: "+ref.w+", h: "+ref.h,e);
}
}
if(w!=null){
w=Math.floor(w);
}
if(h!=null){
h=Math.floor(h);
}
return new MochiKit.Style.Dimensions(w,h);
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
MochiKit.Widget=function(){
throw new ReferenceError("cannot call Widget constructor");
};
MochiKit.Widget.isWidget=function(obj,_8f4){
if(_8f4!=null){
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget")&&MochiKit.DOM.hasElementClass(obj,"widget"+_8f4);
}else{
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget");
}
};
MochiKit.Widget.isFormField=function(obj){
if(!MochiKit.DOM.isHTML(obj)||typeof (obj.tagName)!=="string"){
return false;
}
var _8f6=obj.tagName.toUpperCase();
return _8f6=="INPUT"||_8f6=="TEXTAREA"||_8f6=="SELECT"||typeof (obj.value)!=="undefined";
};
MochiKit.Widget.createWidget=function(name,_8f8){
var cls=MochiKit.Widget.Classes[name];
if(cls==null){
throw new ReferenceError("failed to find widget '"+name+"' in MochiKit.Widget.Classes");
}
var w=new cls(_8f8);
for(var i=2;i<arguments.length;i++){
w.addAll(arguments[i]);
}
return w;
};
MochiKit.Widget.createWidgetTree=function(node,ids){
if(node.documentElement){
return MochiKit.Widget.createWidgetTree(node.documentElement.childNodes,ids);
}else{
if(typeof (node.item)!="undefined"&&typeof (node.length)=="number"){
var res=[];
for(var i=0;i<node.length;i++){
var list=MochiKit.Widget.createWidgetTree(node[i],ids);
if(!MochiKit.Base.isUndefinedOrNull(list)){
res=res.concat(list);
}
}
return res;
}else{
if(node.nodeType===1){
try{
return [MochiKit.Widget._createWidgetTreeElem(node,ids)];
}
catch(e){
MochiKit.Logging.logError("Failed to create DOM node or widget",e);
}
}else{
if(node.nodeType===3){
var str=node.nodeValue;
if(str!=null&&MochiKit.Format.strip(str)!=""){
return MochiKit.DOM.createTextNode(str.replace(/\s+/g," "));
}
}
}
}
}
return null;
};
MochiKit.Widget._createWidgetTreeElem=function(node,ids){
var name=node.nodeName;
var _905=MochiKit.Base.dict(MochiKit.DOM.attributeArrayNewImpl(node));
var _906=MochiKit.Base.mask(_905,["id","w","h","a","class","style"]);
var _907=MochiKit.Widget.createWidgetTree(node.childNodes,ids);
if(MochiKit.Widget.Classes[name]){
var _908=MochiKit.Widget.createWidget(name,_905,_907);
}else{
var _908=MochiKit.DOM.createDOM(name,_905,_907);
}
if(_906.id){
if(ids){
ids[_906.id]=_908;
}else{
_908.id=_906.id;
}
}
if(_906.w||_906.h||_906.a){
MochiKit.Style.registerSizeConstraints(_908,_906.w,_906.h,_906.a);
}
if(_906["class"]){
var _909=_906["class"].split(" ");
if(typeof (_908.addClass)=="function"){
_908.addClass.apply(_908,_909);
}else{
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.addElementClass(_908,_909[i]);
}
}
}
if(_906.style){
var _90b={};
var _90c=_906.style.split(";");
for(var i=0;i<_90c.length;i++){
var a=_90c[i].split(":");
_90b[MochiKit.Format.strip(a[0])]=MochiKit.Format.strip(a[1]);
}
MochiKit.Style.setStyle(_908,_90b);
}
return _908;
};
MochiKit.Widget.destroyWidget=function(node){
if(typeof (node.destroy)=="function"){
node.destroy();
}
if(node.parentNode!=null){
MochiKit.DOM.removeElement(node);
}
MochiKit.Signal.disconnectAll(node);
while(node.firstChild!=null){
MochiKit.Widget.destroyWidget(node.firstChild);
}
};
MochiKit.Widget.emitSignal=function(node,sig){
try{
MochiKit.Signal.signal.apply(MochiKit.Signal,arguments);
return true;
}
catch(e){
var msg="Exception in signal '"+sig+"' handler";
MochiKit.Logging.logError(msg,e);
return false;
}
};
MochiKit.Widget.prototype.destroy=function(){
};
MochiKit.Widget.prototype.setAttrs=function(_912){
MochiKit.DOM.updateNodeAttributes(this,_912);
};
MochiKit.Widget.prototype.setStyle=function(_913){
MochiKit.Style.setStyle(this,_913);
};
MochiKit.Widget.prototype.hasClass=function(){
for(var i=0;i<arguments.length;i++){
if(!MochiKit.DOM.hasElementClass(this,arguments[i])){
return false;
}
}
return true;
};
MochiKit.Widget.prototype.addClass=function(){
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.addElementClass(this,arguments[i]);
}
};
MochiKit.Widget.prototype.removeClass=function(){
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.removeElementClass(this,arguments[i]);
}
};
MochiKit.Widget.prototype.toggleClass=function(){
if(this.hasClass.apply(this,arguments)){
this.removeClass.apply(this,arguments);
return false;
}else{
this.addClass.apply(this,arguments);
return true;
}
};
MochiKit.Widget.prototype.isHidden=function(){
return this.hasClass("widgetHidden");
};
MochiKit.Widget.prototype.show=function(){
this.removeClass("widgetHidden");
};
MochiKit.Widget.prototype.hide=function(){
this.addClass("widgetHidden");
};
MochiKit.Widget.prototype.animate=function(opts){
if(this._anim!=null){
this._anim.cancel();
}
var func=MochiKit.Visual[opts.effect];
if(typeof (func)=="function"){
this._anim=func.call(null,this,opts);
}
};
MochiKit.Widget.prototype.blurAll=function(){
MochiKit.DOM.blurAll(this);
};
MochiKit.Widget.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.childNodes);
};
MochiKit.Widget.prototype.addChildNode=function(_919){
this.appendChild(_919);
};
MochiKit.Widget.prototype.removeChildNode=function(_91a){
this.removeChild(_91a);
};
MochiKit.Widget.prototype.addAll=function(){
var args=MochiKit.Base.flattenArray(arguments);
for(var i=0;i<args.length;i++){
if(args[i]==null){
}else{
if(MochiKit.DOM.isDOM(args[i])){
this.addChildNode(args[i]);
MochiKit.Style.resizeElements(args[i]);
}else{
this.addChildNode(MochiKit.DOM.createTextNode(args[i]));
}
}
}
};
MochiKit.Widget.prototype.removeAll=function(){
var _91d=this.getChildNodes();
for(var i=_91d.length-1;i>=0;i--){
this.removeChildNode(_91d[i]);
MochiKit.Widget.destroyWidget(_91d[i]);
}
};
MochiKit.Widget.Button=function(_91f){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_91f,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.BUTTON();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetButton");
o.setAttrs(_91f);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Button.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Button.prototype.setAttrs=function(_922){
_922=MochiKit.Base.update({},_922);
var _923=MochiKit.Base.mask(_922,["highlight"]);
if(typeof (_923.highlight)!="undefined"){
if(MochiKit.Base.isFalse(_923.highlight)){
this.removeClass("widgetButtonHighlight");
}else{
this.addClass("widgetButtonHighlight");
}
}
MochiKit.DOM.updateNodeAttributes(this,_922);
};
MochiKit.Widget.Dialog=function(_924){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_924,MochiKit.Base.extend(null,arguments,1));
}
var _926=MochiKit.DOM.DIV({"class":"widgetDialogTitle"},"Dialog");
var _927=new MochiKit.Widget.Icon({ref:"CLOSE","class":"widgetDialogClose"});
var _928=new MochiKit.Widget.Icon({ref:"RESIZE","class":"widgetDialogResize"});
var _929=MochiKit.DOM.DIV({"class":"widgetDialogContent"});
MochiKit.Style.registerSizeConstraints(_929,"100% - 22","100% - 44");
var o=MochiKit.DOM.DIV({},_926,_927,_928,_929);
MochiKit.Base.updatetree(o,this);
o.setAttrs(MochiKit.Base.update({modal:false,center:true},_924));
o.addClass("widget","widgetDialog","widgetHidden");
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(_926,"onmousedown",o,"_handleMoveStart");
MochiKit.Signal.connect(_927,"onclick",o,"hide");
MochiKit.Signal.connect(_928,"onmousedown",o,"_handleResizeStart");
return o;
};
MochiKit.Widget.Dialog.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Dialog.prototype.setAttrs=function(_92b){
_92b=MochiKit.Base.update({},_92b);
var _92c=MochiKit.Base.mask(_92b,["title","modal","center"]);
if(typeof (_92c.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this.firstChild,_92c.title);
}
if(typeof (_92c.modal)!="undefined"){
this.modal=!MochiKit.Base.isFalse(_92c.modal);
}
if(typeof (_92c.center)!="undefined"){
this.center=!MochiKit.Base.isFalse(_92c.center);
}
MochiKit.DOM.updateNodeAttributes(this,_92b);
};
MochiKit.Widget.Dialog.prototype.show=function(){
if(this.parentNode==null){
throw new Error("Cannot show Dialog widget without setting a parent DOM node");
}
if(this.modal){
var _92d={loading:false,message:"",style:{"z-index":"99"}};
this._modalNode=new MochiKit.Widget.Overlay(_92d);
this.parentNode.appendChild(this._modalNode);
}
this.removeClass("widgetHidden");
var dim=MochiKit.Style.getElementDimensions(this);
this.resizeTo(dim.w,dim.h);
if(this.center){
this.moveToCenter();
}
MochiKit.Style.resetScrollOffset(this,true);
MochiKit.Widget.emitSignal(this,"onshow");
};
MochiKit.Widget.Dialog.prototype.hide=function(){
if(this._modalNode!=null){
MochiKit.Widget.destroyWidget(this._modalNode);
this._modalNode=null;
}
this.blurAll();
this.addClass("widgetHidden");
MochiKit.Widget.emitSignal(this,"onhide");
};
MochiKit.Widget.Dialog.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.lastChild.childNodes);
};
MochiKit.Widget.Dialog.prototype.addChildNode=function(_92f){
this.lastChild.appendChild(_92f);
};
MochiKit.Widget.Dialog.prototype.removeChildNode=function(_930){
this.lastChild.removeChild(_930);
};
MochiKit.Widget.Dialog.prototype.moveTo=function(x,y){
var _933=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.max(0,Math.min(x,_933.w-dim.w-2)),y:Math.max(0,Math.min(y,_933.h-dim.h-2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.moveToCenter=function(){
var _936=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.round(Math.max(0,(_936.w-dim.w)/2)),y:Math.round(Math.max(0,(_936.h-dim.h)/2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.resizeTo=function(_939,_93a){
var _93b=MochiKit.Style.getElementDimensions(this.parentNode);
var pos=MochiKit.Style.getElementPosition(this.parentNode);
pos=MochiKit.Style.getElementPosition(this,pos);
var dim={w:Math.max(150,Math.min(_939,_93b.w-pos.x-2)),h:Math.max(100,Math.min(_93a,_93b.h-pos.y-2))};
MochiKit.Style.setElementDimensions(this,dim);
MochiKit.Style.registerSizeConstraints(this,null,null);
MochiKit.Base.update(this,dim);
MochiKit.Style.resizeElements(this.lastChild);
MochiKit.Widget.emitSignal(this,"onresize",dim);
};
MochiKit.Widget.Dialog.prototype._handleMoveStart=function(evt){
var pos=MochiKit.Style.getElementPosition(this.parentNode);
this._offsetPos=MochiKit.Style.getElementPosition(this,pos);
this._startPos=evt.mouse().page;
evt.stop();
MochiKit.Signal.connect(document,"onmousemove",this,"_handleMove");
MochiKit.Signal.connect(document,"onmouseup",this,"_stopDrag");
};
MochiKit.Widget.Dialog.prototype._handleMove=function(evt){
var pos=evt.mouse().page;
this.moveTo(this._offsetPos.x+pos.x-this._startPos.x,this._offsetPos.y+pos.y-this._startPos.y);
};
MochiKit.Widget.Dialog.prototype._handleResizeStart=function(evt){
this._offsetDim=MochiKit.Style.getElementDimensions(this);
this._startPos=evt.mouse().page;
evt.stop();
MochiKit.Signal.connect(document,"onmousemove",this,"_handleResize");
MochiKit.Signal.connect(document,"onmousedown",function(evt){
evt.stop();
});
MochiKit.Signal.connect(document,"onmouseup",this,"_stopDrag");
};
MochiKit.Widget.Dialog.prototype._handleResize=function(evt){
var pos=evt.mouse().page;
this.resizeTo(this._offsetDim.w+pos.x-this._startPos.x,this._offsetDim.h+pos.y-this._startPos.y);
};
MochiKit.Widget.Dialog.prototype._stopDrag=function(evt){
MochiKit.Signal.disconnectAll(document,"onmousemove");
MochiKit.Signal.disconnectAll(document,"onmousedown");
MochiKit.Signal.disconnectAll(document,"onmouseup");
};
MochiKit.Widget.Field=function(_947){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_947);
}
var o=MochiKit.DOM.SPAN();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetField");
o.setAttrs(MochiKit.Base.update({name:"",value:"",maxLength:-1},_947));
o.defaultValue=o.value;
return o;
};
MochiKit.Widget.Field.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Field.prototype.setAttrs=function(_94a){
_94a=MochiKit.Base.update({},_94a);
var _94b=MochiKit.Base.mask(_94a,["name","value","maxLength"]);
if(typeof (_94b.name)!="undefined"){
this.name=_94b.name;
}
if(typeof (_94b.format)!="undefined"){
this.format=_94b.format;
}
if(typeof (_94b.maxLength)!="undefined"){
this.maxLength=parseInt(_94b.maxLength);
}
if(typeof (_94b.value)!="undefined"){
var str=this.value=_94b.value;
if(this.format){
str=MochiKit.Format.format(this.format,str);
}else{
if(str==null){
str="null";
}else{
if(typeof (str)!="string"){
str=str.toString();
}
}
}
var _94d=str;
if(this.maxLength>0){
str=MochiKit.Text.truncate(str,this.maxLength,"...");
}
MochiKit.DOM.replaceChildNodes(this,str);
this.title=(str==_94d)?null:_94d;
}
MochiKit.DOM.updateNodeAttributes(this,_94a);
};
MochiKit.Widget.Form=function(_94e){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_94e);
}
var o=MochiKit.DOM.FORM(_94e);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetForm");
MochiKit.Signal.connect(o,"onsubmit",o,"_handleSubmit");
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Form.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Form.prototype.fields=function(){
var _951=[];
MochiKit.Base.nodeWalk(this,function(elem){
if(elem.nodeType!==1){
return null;
}
if(MochiKit.Widget.isFormField(elem)){
_951.push(elem);
return null;
}else{
return elem.childNodes;
}
});
return _951;
};
MochiKit.Widget.Form.prototype.fieldMap=function(){
var _953=this.fields();
var map={};
for(var i=0;i<_953.length;i++){
var name=_953[i].name;
if(typeof (name)=="string"){
if(map[name] instanceof Array){
map[name].push(_953[i]);
}else{
if(map[name]!=null){
map[name]=[map[name],_953[i]];
}else{
map[name]=_953[i];
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.reset=function(){
this.validateReset();
var _957=this.fields();
for(var i=0;i<_957.length;i++){
var elem=_957[i];
if(typeof (elem.reset)=="function"){
elem.reset();
}else{
if(elem.type=="radio"&&typeof (elem.defaultChecked)=="boolean"){
elem.checked=elem.defaultChecked;
}else{
if(elem.type=="checkbox"&&typeof (elem.defaultChecked)=="boolean"){
elem.checked=elem.defaultChecked;
}else{
if(typeof (elem.defaultValue)=="string"){
if(typeof (elem.setAttrs)=="function"){
elem.setAttrs({value:elem.defaultValue});
}else{
elem.value=elem.defaultValue;
}
}else{
if(elem.options!=null){
for(var j=0;j<elem.options.length;j++){
var opt=elem.options[j];
opt.selected=opt.defaultSelected;
}
}
}
}
}
}
}
};
MochiKit.Widget.Form.prototype.valueMap=function(){
var _95c=this.fields();
var map={};
for(var i=0;i<_95c.length;i++){
var name=_95c[i].name;
var _960="";
if(typeof (_95c[i].getValue)=="function"){
_960=_95c[i].getValue();
}else{
_960=_95c[i].value;
}
if(_95c[i].type==="radio"||_95c[i].type==="checkbox"){
if(_95c[i].checked){
_960=_960||true;
}else{
_960=null;
}
}
if(typeof (name)=="string"&&_960!=null){
if(map[name] instanceof Array){
map[name].push(_960);
}else{
if(map[name]!=null){
map[name]=[map[name],_960];
}else{
map[name]=_960;
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.update=function(_961){
var _962=this.fields();
for(var i=0;i<_962.length;i++){
var elem=_962[i];
if(elem.name in _961){
var _965=_961[elem.name];
if(elem.type==="radio"||elem.type==="checkbox"){
if(_965==null){
elem.checked=false;
}else{
if(MochiKit.Base.isArrayLike(_965)){
elem.checked=(MochiKit.Base.findValue(_965,elem.value)>=0);
}else{
elem.checked=(elem.value===_965||_965===true);
}
}
}else{
if(MochiKit.Base.isArrayLike(_965)){
_965=_965.join(", ");
}
if(typeof (elem.setAttrs)=="function"){
elem.setAttrs({value:_965});
}else{
elem.value=_965;
}
}
}
}
};
MochiKit.Widget.Form.prototype.validators=function(){
var res=[];
var _967=this.getElementsByTagName("SPAN");
for(var i=0;i<_967.length;i++){
if(MochiKit.Widget.isWidget(_967[i],"FormValidator")){
res.push(_967[i]);
}
}
return res;
};
MochiKit.Widget.Form.prototype.validate=function(){
var _969=this.validators();
var _96a=this.fields();
var _96b=true;
var _96c=[];
for(var i=0;i<_969.length;i++){
_969[i].reset();
}
for(var i=0;i<_969.length;i++){
for(var j=0;j<_96a.length;j++){
if(_969[i].name==_96a[j].name){
var res=_969[i].verify(_96a[j]);
if(res instanceof MochiKit.Async.Deferred){
_96c.push(res);
}else{
if(res===false){
_96b=false;
}
}
}
}
}
if(!_96b){
return false;
}else{
if(_96c.length>0){
return MochiKit.Async.gatherResults(_96c);
}else{
return true;
}
}
};
MochiKit.Widget.Form.prototype.validateReset=function(){
var _970=this.validators();
for(var i=0;i<_970.length;i++){
_970[i].reset();
}
};
MochiKit.Widget.Form.prototype._handleSubmit=function(evt){
evt.stop();
};
MochiKit.Widget.FormValidator=function(_973){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_973);
}
var o=MochiKit.DOM.SPAN();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetFormValidator");
o.setAttrs(MochiKit.Base.update({name:"",mandatory:true,display:"error",message:null,validator:null},_973));
o.fields=[];
o.hide();
return o;
};
MochiKit.Widget.FormValidator.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.FormValidator.prototype.setAttrs=function(_976){
_976=MochiKit.Base.update({},_976);
var _977=MochiKit.Base.mask(_976,["name","mandatory","regex","display","message","validator"]);
if(typeof (_977.name)!="undefined"){
this.name=_977.name;
}
if(typeof (_977.mandatory)!="undefined"){
this.mandatory=!MochiKit.Base.isFalse(_977.mandatory);
}
if(typeof (_977.regex)!="undefined"){
if(_977.regex instanceof RegExp){
this.regex=_977.regex;
}else{
if(_977.regex.indexOf("^")!=0){
_977.regex="^"+_977.regex;
}
if(_977.regex.indexOf("$")!=_977.regex.length-1){
_977.regex+="$";
}
this.regex=new RegExp(_977.regex);
}
}
if(typeof (_977.display)!="undefined"){
this.display=_977.display;
}
if(typeof (_977.message)!="undefined"){
this.message=_977.message;
}
if(typeof (_977.validator)!="undefined"){
this.validator=_977.validator;
}
MochiKit.DOM.updateNodeAttributes(this,_976);
};
MochiKit.Widget.FormValidator.prototype.reset=function(){
for(var i=0;i<this.fields.length;i++){
MochiKit.DOM.removeElementClass(this.fields[i],"widgetInvalid");
}
this.fields=[];
if(this.display==="error"){
this.hide();
this.removeAll();
}
};
MochiKit.Widget.FormValidator.prototype.verify=function(_979){
if(!_979.disabled){
var _97a="";
if(typeof (_979.getValue)=="function"){
_97a=_979.getValue();
}else{
_97a=_979.value;
}
var _97b=MochiKit.Format.strip(_97a);
if(MochiKit.Format.strip(_97a)==""){
if(this.mandatory){
var msg="This field is mandatory and cannot be left blank";
this.addError(_979,msg);
return false;
}
}else{
if(this.regex!=null&&!this.regex.test(_97b)){
var msg="The field format is incorrect";
this.addError(_979,msg);
return false;
}else{
if(typeof (this.validator)=="function"){
var res=this.validator(_97a);
if(res instanceof MochiKit.Async.Deferred){
var self=this;
res.addErrback(function(e){
self.addError(_979,e.message);
return e;
});
return res;
}else{
if(typeof (res)=="string"){
this.addError(_979,res);
return false;
}else{
if(res===false){
this.addError(_979,"Field validation failed");
return false;
}
}
}
}
}
}
}
return true;
};
MochiKit.Widget.FormValidator.prototype.addError=function(_980,_981){
if(!MochiKit.DOM.hasElementClass(_980,"widgetInvalid")){
this.fields.push(_980);
MochiKit.DOM.addElementClass(_980,"widgetInvalid");
if(this.display==="error"){
var _982={ref:"ERROR",tooltip:this.message||_981};
this.addAll(new MochiKit.Widget.Icon(_982));
this.show();
}
}
};
MochiKit.Widget.Icon=function(_983){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_983);
}
var o=MochiKit.DOM.IMG();
MochiKit.Base.updatetree(o,this);
o.setAttrs(_983);
o.addClass("widget","widgetIcon");
return o;
};
MochiKit.Widget.Icon.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Icon.prototype.setAttrs=function(_986){
_986=MochiKit.Base.update({},_986);
if(_986.ref){
MochiKit.Base.setdefault(_986,MochiKit.Widget.Icon[_986.ref],MochiKit.Widget.Icon.DEFAULT);
}
var _987=MochiKit.Base.mask(_986,["ref","url","baseUrl","tooltip","width","height"]);
if(typeof (_987.url)!="undefined"){
MochiKit.Base.setdefault(_987,MochiKit.Widget.Icon.DEFAULT);
_986.src=_987.baseUrl+_987.url;
}
if(typeof (_987.tooltip)!="undefined"){
_986.alt=_987.tooltip;
_986.title=_987.tooltip;
}
if(typeof (_987.width)!="undefined"){
this.width=_987.width;
this.setStyle({width:_987.width});
}
if(typeof (_987.height)!="undefined"){
this.height=_987.height;
this.setStyle({height:_987.height});
}
MochiKit.DOM.updateNodeAttributes(this,_986);
};
MochiKit.Base.update(MochiKit.Widget.Icon,{DEFAULT:{baseUrl:"images/icons/",width:"16",height:"16"},BLANK:{url:"blank.gif",style:{cursor:"default"}},CLOSE:{url:"close.gif"},RESIZE:{url:"resize-handle.gif"},OK:{url:"ok.gif",tooltip:"OK"},CANCEL:{url:"cancel.gif",tooltip:"Cancel"},HELP:{url:"help.gif",tooltip:"Help"},ERROR:{url:"error.gif",tooltip:"Error"},PLUS:{url:"plus.gif",tooltip:"Show"},MINUS:{url:"minus.gif",tooltip:"Hide"},NEXT:{url:"next.gif",tooltip:"Next"},PREVIOUS:{url:"previous.gif",tooltip:"Previous"},CONFIG:{url:"config.gif",tooltip:"Configure"},DELAY:{url:"delay.gif",tooltip:"Configure Delay"},RELOAD:{url:"reload.gif",tooltip:"Reload"},LOADING:{url:"loading.gif",tooltip:"Loading..."},LOADING_LARGE:{url:"loading-large.gif",tooltip:"Loading...",width:"32",height:"32"},SEARCH:{url:"magnifier.gif",tooltip:"Search"},ADD:{url:"add.gif",tooltip:"Add"},REMOVE:{url:"remove.gif",tooltip:"Remove"},EDIT:{url:"edit.gif",tooltip:"Edit"},DELETE:{url:"trash.gif",tooltip:"Clear / Delete"},SELECT:{url:"select.gif",tooltip:"Select / Unselect"},CUT:{url:"cut.gif",tooltip:"Cut"},EXPORT:{url:"export.gif",tooltip:"Export"},EXPAND:{url:"expand.gif",tooltip:"Expand"},UP:{url:"up.gif",tooltip:"Move Up"},DOWN:{url:"down.gif",tooltip:"Move Down"},LEFT:{url:"left.gif",tooltip:"Move Left"},RIGHT:{url:"right.gif",tooltip:"Move Right"},COMMENT:{url:"comment.gif",tooltip:"Comment"},CALENDAR:{url:"calendar.gif",tooltip:"Calendar"},AUTOMATIC:{url:"automatic.gif",tooltip:"Automatic Processing"},PLUGIN:{url:"plugin.gif",tooltip:"Plug-in"},FOLDER:{url:"folder.gif"},DOCUMENT:{url:"document.gif"}});
MochiKit.Widget.Overlay=function(_988){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_988,MochiKit.Base.extend(null,arguments,1));
}
var msg=MochiKit.DOM.DIV({"class":"widgetOverlayMessage"});
var o=MochiKit.DOM.DIV({},msg);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetOverlay");
_988=MochiKit.Base.update({loading:true,message:"Working..."},_988);
o.setAttrs(_988);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Overlay.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Overlay.prototype.setAttrs=function(_98c){
_98c=MochiKit.Base.update({},_98c);
var _98d=MochiKit.Base.mask(_98c,["loading","message"]);
if(typeof (_98d.loading)!="undefined"){
this.showLoading=!MochiKit.Base.isFalse(_98d.loading);
}
if(typeof (_98d.message)!="undefined"){
this.message=_98d.message;
}
if(typeof (this.showLoading)!="undefined"){
var icon=new MochiKit.Widget.Icon({ref:"LOADING_LARGE"});
icon.setStyle({"padding-right":"20px"});
}
MochiKit.DOM.replaceChildNodes(this.firstChild,icon,this.message);
MochiKit.DOM.updateNodeAttributes(this,_98c);
};
MochiKit.Widget.Pane=function(_98f){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_98f,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetPane");
o.setAttrs(MochiKit.Base.update({pageTitle:"Page",pageStatus:"ANY",pageCloseable:false},_98f));
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Pane.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Pane.ANY={previous:true,next:true};
MochiKit.Widget.Pane.FORWARD={previous:false,next:true};
MochiKit.Widget.Pane.BACKWARD={previous:true,next:false};
MochiKit.Widget.Pane.WORKING={previous:false,next:false};
MochiKit.Widget.Pane.prototype.setAttrs=function(_992){
_992=MochiKit.Base.update({},_992);
var _993=MochiKit.Base.mask(_992,["pageTitle","pageStatus","pageCloseable"]);
var _994=false;
if(typeof (_993.pageTitle)!="undefined"){
this.pageTitle=_993.pageTitle;
_994=true;
}
if(typeof (_993.pageStatus)!="undefined"){
if(typeof (_993.pageStatus)=="string"){
_993.pageStatus=MochiKit.Widget.Pane[_993.pageStatus];
}
this.pageStatus=_993.pageStatus;
_994=true;
}
if(typeof (_993.pageCloseable)!="undefined"){
this.pageCloseable=!MochiKit.Base.isFalse(_993.pageCloseable);
_994=true;
}
if(_994&&this.parentNode&&typeof (this.parentNode._updateStatus)=="function"){
this.parentNode._updateStatus();
}
MochiKit.DOM.updateNodeAttributes(this,_992);
};
MochiKit.Widget.Pane.prototype._handleEnter=function(opts){
opts=opts||{};
if(opts.validateReset){
var _996=this.getElementsByTagName("FORM");
for(var i=0;i<_996.length;i++){
if(typeof (_996[i].validateReset)=="function"){
_996[i].validateReset();
}
}
}
this.show();
MochiKit.Style.resizeElements(this);
MochiKit.Widget.emitSignal(this,"onenter");
};
MochiKit.Widget.Pane.prototype._handleExit=function(opts){
opts=opts||{};
if(opts.validateForm){
var _999=this.getElementsByTagName("FORM");
for(var i=0;i<_999.length;i++){
if(typeof (_999[i].validate)=="function"){
var res=_999[i].validate();
if(!res){
return false;
}
}
}
}
this.blurAll();
this.hide();
MochiKit.Widget.emitSignal(this,"onexit");
return true;
};
MochiKit.Widget.Popup=function(_99c){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_99c,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetPopup","widgetHidden");
o.selectedIndex=-1;
o._delayTimer=null;
o.setAttrs(MochiKit.Base.update({delay:5000},_99c));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onmousemove",o,"_handleMouseMove");
MochiKit.Signal.connect(o,"onclick",o,"_handleMouseClick");
return o;
};
MochiKit.Widget.Popup.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Popup.prototype.setAttrs=function(_99f){
_99f=MochiKit.Base.update({},_99f);
var _9a0=MochiKit.Base.mask(_99f,["delay","showAnim","hideAnim"]);
if(typeof (_9a0.delay)!="undefined"){
this.delay=parseInt(_9a0.delay);
this.resetDelay();
}
if(typeof (_9a0.showAnim)!="undefined"){
this.showAnim=_9a0.showAnim;
}
if(typeof (_9a0.hideAnim)!="undefined"){
this.hideAnim=_9a0.hideAnim;
}
MochiKit.DOM.updateNodeAttributes(this,_99f);
};
MochiKit.Widget.Popup.prototype.show=function(){
if(this.isHidden()){
this.resetDelay();
this.selectChild(-1);
this.removeClass("widgetHidden");
if(this.showAnim){
this.animate(this.showAnim);
}
MochiKit.Style.resetScrollOffset(this,true);
MochiKit.Widget.emitSignal(this,"onshow");
}else{
this.resetDelay();
}
};
MochiKit.Widget.Popup.prototype.hide=function(){
if(this.isHidden()){
this.resetDelay();
}else{
this.addClass("widgetHidden");
this.resetDelay();
if(this.hideAnim){
this.animate(this.hideAnim);
}
MochiKit.Widget.emitSignal(this,"onhide");
}
};
MochiKit.Widget.Popup.prototype.resetDelay=function(){
if(this._delayTimer){
clearTimeout(this._delayTimer);
this._delayTimer=null;
}
if(!this.isHidden()&&this.delay>0){
this._delayTimer=setTimeout(MochiKit.Base.bind("hide",this),this.delay);
}
};
MochiKit.Widget.Popup.prototype.selectedChild=function(){
return MochiKit.DOM.childNode(this,this.selectedIndex);
};
MochiKit.Widget.Popup.prototype.selectChild=function(_9a1){
var node=this.selectedChild();
if(node!=null){
MochiKit.DOM.removeElementClass(node,"selected");
}
var node=MochiKit.DOM.childNode(this,_9a1);
if(typeof (_9a1)=="number"){
var _9a3=_9a1;
}else{
var _9a3=MochiKit.Base.findIdentical(this.childNodes,node);
}
if(_9a3>=0&&node!=null){
this.selectedIndex=_9a3;
MochiKit.DOM.addElementClass(node,"selected");
var box={y:node.offsetTop,h:node.offsetHeight+5};
MochiKit.Style.adjustScrollOffset(this,box);
}else{
this.selectedIndex=-1;
}
return this.selectedIndex;
};
MochiKit.Widget.Popup.prototype.selectMove=function(_9a5){
var _9a6=this.selectedIndex+_9a5;
if(_9a6>=this.childNodes.length){
_9a6=0;
}
if(_9a6<0){
_9a6=this.childNodes.length-1;
}
return this.selectChild(_9a6);
};
MochiKit.Widget.Popup.prototype._handleMouseMove=function(evt){
this.show();
var node=MochiKit.DOM.childNode(this,evt.target());
if(node!=null&&MochiKit.DOM.hasElementClass(node,"widgetPopupItem")){
this.selectChild(node);
}else{
this.selectChild(-1);
}
};
MochiKit.Widget.Popup.prototype._handleMouseClick=function(evt){
var node=MochiKit.DOM.childNode(this,evt.target());
if(node!=null&&MochiKit.DOM.hasElementClass(node,"widgetPopupItem")){
this.selectChild(node);
}else{
this.selectChild(-1);
}
};
MochiKit.Widget.ProgressBar=function(_9ab){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_9ab,MochiKit.Base.extend(null,arguments,1));
}
var _9ad=MochiKit.DOM.DIV({"class":"widgetProgressBarMeter"});
var text=MochiKit.DOM.DIV({"class":"widgetProgressBarText"});
var o=MochiKit.DOM.DIV({},_9ad,text);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetProgressBar");
o.setAttrs(MochiKit.Base.update({min:0,max:100},_9ab));
o.setValue(0);
return o;
};
MochiKit.Widget.ProgressBar.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.ProgressBar.prototype.setAttrs=function(_9b0){
_9b0=MochiKit.Base.update({},_9b0);
var _9b1=MochiKit.Base.mask(_9b0,["min","max"]);
if(typeof (_9b1.min)!="undefined"||typeof (_9b1.max)!="undefined"){
this.minValue=parseInt(_9b1.min)||0;
this.maxValue=parseInt(_9b1.max)||100;
this.startTime=new Date().getTime();
this.lastTime=this.startTime;
this.timeLeft=null;
}
MochiKit.DOM.updateNodeAttributes(this,_9b0);
};
MochiKit.Widget.ProgressBar.prototype.setValue=function(_9b2,text){
_9b2=Math.min(Math.max(_9b2,this.minValue),this.maxValue);
var pos=_9b2-this.minValue;
var _9b5=this.maxValue-this.minValue;
var str=pos+" of "+_9b5;
if(typeof (text)=="string"&&text!=""){
str+=" \u2014 "+text;
}
this.setRatio(pos/_9b5,str);
};
MochiKit.Widget.ProgressBar.prototype.setRatio=function(_9b7,text){
var _9b9=Math.round(_9b7*1000)/10;
MochiKit.Style.setElementDimensions(this.firstChild,{w:_9b9},"%");
if(_9b9<66){
this.lastChild.className="widgetProgressBarText";
}else{
this.lastChild.className="widgetProgressBarTextInverse";
}
if(typeof (text)=="string"&&text!=""){
text=Math.round(_9b9)+"% \u2014 "+text;
}else{
text=Math.round(_9b9)+"%";
}
var _9ba=new Date().getTime();
if(_9ba-this.lastTime>1000){
this.lastTime=_9ba;
var _9bb=_9ba-this.startTime;
_9bb=Math.max(Math.round(_9bb/_9b7-_9bb),0);
this.timeLeft=MochiKit.DateTime.toApproxPeriod(_9bb);
}
if(this.timeLeft!=null&&_9b9>0&&_9b9<100){
text+=" \u2014 "+this.timeLeft+" left";
}
this.setText(text);
};
MochiKit.Widget.ProgressBar.prototype.setText=function(text){
MochiKit.DOM.replaceChildNodes(this.lastChild,text);
};
MochiKit.Widget.TabContainer=function(_9bd){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_9bd,MochiKit.Base.extend(null,arguments,1));
}
var _9bf=MochiKit.DOM.DIV({"class":"widgetTabContainerLabels"});
var _9c0=MochiKit.DOM.DIV({"class":"widgetTabContainerContent"});
var o=MochiKit.DOM.DIV(_9bd,_9bf,_9c0);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTabContainer");
MochiKit.Style.registerSizeConstraints(_9c0,"100% - 22","100% - 47");
_9c0.resizeContent=MochiKit.Base.noop;
o._selectedIndex=-1;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.TabContainer.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TabContainer.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.lastChild.childNodes);
};
MochiKit.Widget.TabContainer.prototype.addChildNode=function(_9c2){
if(!MochiKit.Widget.isWidget(_9c2,"Pane")){
_9c2=new MochiKit.Widget.Pane(null,_9c2);
}
MochiKit.Style.registerSizeConstraints(_9c2,"100%","100%");
_9c2.hide();
var text=MochiKit.DOM.SPAN(null,_9c2.pageTitle);
if(_9c2.pageCloseable){
var icon=new MochiKit.Widget.Icon({ref:"CLOSE"});
MochiKit.Signal.connect(icon,"onclick",MochiKit.Base.bind("_handleClose",this,_9c2));
}
var _9c5=MochiKit.DOM.DIV({"class":"widgetTabContainerLabel"},MochiKit.DOM.DIV({},text,icon));
MochiKit.Signal.connect(_9c5,"onclick",MochiKit.Base.bind("selectChild",this,_9c2));
this.firstChild.appendChild(_9c5);
this.lastChild.appendChild(_9c2);
if(this._selectedIndex<0){
this.selectChild(0);
}
};
MochiKit.Widget.TabContainer.prototype.removeChildNode=function(_9c6){
var _9c7=this.getChildNodes();
var _9c8=MochiKit.Base.findIdentical(_9c7,_9c6);
if(_9c8<0){
throw new Error("Cannot remove DOM node that is not a TabContainer child");
}
if(this._selectedIndex==_9c8){
_9c6._handleExit();
this._selectedIndex=-1;
}
MochiKit.Widget.destroyWidget(this.firstChild.childNodes[_9c8]);
MochiKit.DOM.removeElement(_9c6);
MochiKit.Widget.emitSignal(_9c6,"onclose");
if(this._selectedIndex<0&&this.getChildNodes().length>0){
this.selectChild((_9c8==0)?0:_9c8-1);
}
};
MochiKit.Widget.TabContainer.prototype.selectedIndex=function(){
return this._selectedIndex;
};
MochiKit.Widget.TabContainer.prototype.selectedChild=function(){
var _9c9=this.getChildNodes();
return (this._selectedIndex<0)?null:_9c9[this._selectedIndex];
};
MochiKit.Widget.TabContainer.prototype.selectChild=function(_9ca){
var _9cb=this.getChildNodes();
if(this._selectedIndex>=0){
var _9cc=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.removeElementClass(_9cc,"selected");
_9cb[this._selectedIndex]._handleExit();
}
var _9cd=-1;
if(_9ca==null){
_9cd=this._selectedIndex;
}else{
if(typeof (_9ca)=="number"){
_9cd=_9ca;
}else{
_9cd=MochiKit.Base.findIdentical(_9cb,_9ca);
}
}
this._selectedIndex=(_9cd<0||_9cd>=_9cb.length)?-1:_9cd;
if(this._selectedIndex>=0){
var _9cc=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.addElementClass(_9cc,"selected");
_9cb[this._selectedIndex]._handleEnter();
}
};
MochiKit.Widget.TabContainer.prototype.resizeContent=function(){
MochiKit.Style.resizeElements(this.lastChild);
var _9ce=this.selectedChild();
if(_9ce!=null){
MochiKit.Style.resizeElements(_9ce);
}
};
MochiKit.Widget.TabContainer.prototype._handleClose=function(_9cf,evt){
evt.stop();
this.removeChildNode(_9cf);
};
MochiKit.Widget.Table=function(_9d1){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_9d1,MochiKit.Base.extend(null,arguments,1));
}
var _9d3=MochiKit.DOM.THEAD({},MochiKit.DOM.TR());
var _9d4=MochiKit.DOM.TBODY();
_9d4.resizeContent=MochiKit.Base.noop;
var _9d5=MochiKit.DOM.TABLE({"class":"widgetTable"},_9d3,_9d4);
var o=MochiKit.DOM.DIV({},_9d5);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTable");
o.setAttrs(MochiKit.Base.update({multiple:false},_9d1));
o._rows=[];
o._data=null;
o._keyField=null;
o._selected=[];
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(_9d4,"onmousedown",o,"_handleSelect");
return o;
};
MochiKit.Widget.Table.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Table.prototype.setAttrs=function(_9d7){
_9d7=MochiKit.Base.update({},_9d7);
var _9d8=MochiKit.Base.mask(_9d7,["multiple"]);
if(typeof (_9d8.multiple)!="undefined"){
this.multiple=!MochiKit.Base.isFalse(_9d8.multiple);
}
MochiKit.DOM.updateNodeAttributes(this,_9d7);
};
MochiKit.Widget.Table.prototype.getChildNodes=function(){
var _9d9=this.firstChild;
var _9da=_9d9.firstChild;
var tr=_9da.firstChild;
return MochiKit.Base.extend([],tr.childNodes);
};
MochiKit.Widget.Table.prototype.addChildNode=function(_9dc){
if(!MochiKit.Widget.isWidget(_9dc,"TableColumn")){
throw new Error("Table widget can only have TableColumn children");
}
this.clear();
var _9dd=this.firstChild;
var _9de=_9dd.firstChild;
var tr=_9de.firstChild;
tr.appendChild(_9dc);
};
MochiKit.Widget.Table.prototype.removeChildNode=function(_9e0){
this.clear();
var _9e1=this.firstChild;
var _9e2=_9e1.firstChild;
var tr=_9e2.firstChild;
tr.removeChild(_9e0);
};
MochiKit.Widget.Table.prototype.getColumnIndex=function(_9e4){
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].field===_9e4){
return i;
}
}
return -1;
};
MochiKit.Widget.Table.prototype.getIdKey=function(){
if(this._keyField){
return this._keyField;
}
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].key){
return cols[i].field;
}
}
return null;
};
MochiKit.Widget.Table.prototype.setIdKey=function(key){
this._keyField=key;
for(var i=0;i<this._rows.length;i++){
var row=this._rows[i];
if(this._keyField!=null&&row.$data[this._keyField]!=null){
row.$id=row.$data[this._keyField];
}
}
};
MochiKit.Widget.Table.prototype.getSortKey=function(){
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].sort!=null&&cols[i].sort!="none"){
return cols[i].field;
}
}
return null;
};
MochiKit.Widget.Table.prototype.getCellElem=function(row,col){
try{
var _9f0=this.firstChild;
var _9f1=_9f0.lastChild;
return _9f1.childNodes[row].childNodes[col];
}
catch(e){
return null;
}
};
MochiKit.Widget.Table.prototype.clear=function(){
this.setData([]);
};
MochiKit.Widget.Table.prototype.getData=function(){
return this._data;
};
MochiKit.Widget.Table.prototype.setData=function(data){
var cols=this.getChildNodes();
var _9f4=this.getSelectedIds();
MochiKit.Widget.emitSignal(this,"onclear");
this._data=data;
this._rows=[];
this._selected=[];
for(var i=0;data!=null&&i<data.length;i++){
var row={$id:"id"+i,$data:data[i]};
for(var j=0;j<cols.length;j++){
cols[j]._map(data[i],row);
}
if(this._keyField!=null&&data[i][this._keyField]!=null){
row.$id=data[i][this._keyField];
}
this._rows.push(row);
}
var key=this.getSortKey();
if(key){
this.sortData(key);
}else{
this._renderRows();
}
if(this.getIdKey()!=null){
this._addSelectedIds(_9f4);
}
};
MochiKit.Widget.Table.prototype.sortData=function(_9f9,_9fa){
var cols=this.getChildNodes();
var _9fc=this.getSelectedIds();
this._selected=[];
for(var i=0;i<cols.length;i++){
if(cols[i].field===_9f9){
if(cols[i].sort=="none"){
return;
}else{
if(_9fa==null){
_9fa=cols[i].sort||"asc";
}
}
cols[i].setAttrs({sort:_9fa});
}else{
if(cols[i].sort!="none"){
cols[i].setAttrs({sort:null});
}
}
}
this._rows.sort(MochiKit.Base.keyComparator(_9f9));
if(_9fa=="desc"){
this._rows.reverse();
}
this._renderRows();
this._addSelectedIds(_9fc);
};
MochiKit.Widget.Table.prototype.redraw=function(){
var cols=this.getChildNodes();
for(var i=0;i<this._rows.length;i++){
var row=this._rows[i];
for(var j=0;j<cols.length;j++){
cols[j]._map(row.$data,row);
}
}
this._renderRows();
for(var i=0;i<this._selected.length;i++){
this._markSelection(this._selected[i]);
}
};
MochiKit.Widget.Table.prototype._renderRows=function(){
var cols=this.getChildNodes();
var _a03=this.firstChild.lastChild;
MochiKit.DOM.replaceChildNodes(_a03);
for(var i=0;i<this._rows.length;i++){
var tr=MochiKit.DOM.TR();
if(i%2==1){
MochiKit.DOM.addElementClass(tr,"widgetTableAlt");
}
for(var j=0;j<cols.length;j++){
tr.appendChild(cols[j]._render(this._rows[i]));
}
tr.rowNo=i;
_a03.appendChild(tr);
}
if(this._rows.length==0){
_a03.appendChild(MochiKit.DOM.TR());
}
};
MochiKit.Widget.Table.prototype.getSelectedIds=function(){
var res=[];
for(var i=0;i<this._selected.length;i++){
res.push(this._rows[this._selected[i]].$id);
}
return res;
};
MochiKit.Widget.Table.prototype.getSelectedData=function(){
if(this.multiple){
var res=[];
for(var i=0;i<this._selected.length;i++){
res.push(this._rows[this._selected[i]].$data);
}
return res;
}else{
if(this._selected.length>0){
return this._rows[this._selected[0]].$data;
}else{
return null;
}
}
};
MochiKit.Widget.Table.prototype.addSelectedIds=function(){
var res=this._addSelectedIds(arguments);
if(res.length>0){
MochiKit.Widget.emitSignal(this,"onselect");
}
return res;
};
MochiKit.Widget.Table.prototype._addSelectedIds=function(){
var args=MochiKit.Base.flattenArguments(arguments);
var ids=MochiKit.Base.dict(args,true);
var res=[];
MochiKit.Base.update(ids,MochiKit.Base.dict(this.getSelectedIds(),false));
for(var i=0;i<this._rows.length;i++){
if(ids[this._rows[i].$id]){
this._selected.push(i);
this._markSelection(i);
res.push(this._rows[i].$id);
}
}
return res;
};
MochiKit.Widget.Table.prototype.removeSelectedIds=function(){
var args=MochiKit.Base.flattenArguments(arguments);
var ids=MochiKit.Base.dict(args,true);
var res=[];
for(var i=0;i<this._rows.length;i++){
if(ids[this._rows[i].$id]){
var pos=MochiKit.Base.findIdentical(this._selected,i);
if(pos>=0){
this._selected.splice(i,1);
this._unmarkSelection(i);
res.push(this._rows[i].$id);
}
}
}
if(res.length>0){
MochiKit.Widget.emitSignal(this,"onselect");
}
return res;
};
MochiKit.Widget.Table.prototype._handleSelect=function(evt){
var tr=MochiKit.DOM.getFirstParentByTagAndClassName(evt.target(),"TR");
if(tr==null||tr.rowNo==null||!MochiKit.DOM.isChildNode(tr,this)){
evt.stop();
return false;
}
var row=tr.rowNo;
if(this.multiple){
if(evt.modifier().ctrl||evt.modifier().meta){
if(MochiKit.Base.findIdentical(this._selected,row)>=0){
this._unmarkSelection(row);
ArrayUtil.removeElem(this._selected,row);
}else{
this._selected.push(row);
this._markSelection(row);
}
}else{
if(evt.modifier().shift){
var _a18=row;
if(this._selected.length>0){
_a18=this._selected[0];
}
this._unmarkSelection();
this._selected=[];
if(row>=_a18){
for(var i=_a18;i<=row;i++){
this._selected.push(i);
}
}else{
for(var i=_a18;i>=row;i--){
this._selected.push(i);
}
}
this._markSelection();
}else{
this._unmarkSelection();
this._selected=[row];
this._markSelection(row);
}
}
}else{
this._unmarkSelection();
this._selected=[row];
this._markSelection(row);
}
evt.stop();
MochiKit.Widget.emitSignal(this,"onselect");
return false;
};
MochiKit.Widget.Table.prototype._markSelection=function(_a1a){
if(_a1a==null){
for(var i=0;i<this._selected.length;i++){
this._markSelection(this._selected[i]);
}
}else{
var _a1c=this.firstChild.lastChild;
var tr=_a1c.childNodes[_a1a];
MochiKit.DOM.addElementClass(tr,"selected");
}
};
MochiKit.Widget.Table.prototype._unmarkSelection=function(_a1e){
if(_a1e==null){
for(var i=0;i<this._selected.length;i++){
this._unmarkSelection(this._selected[i]);
}
}else{
var _a20=this.firstChild.lastChild;
var tr=_a20.childNodes[_a1e];
MochiKit.DOM.removeElementClass(tr,"selected");
}
};
MochiKit.Widget.TableColumn=function(_a22){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_a22,MochiKit.Base.extend(null,arguments,1));
}
if(_a22.field==null){
throw new Error("The 'field' attribute cannot be null for a TableColumn");
}
var o=MochiKit.DOM.TH();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTableColumn");
o.setAttrs(MochiKit.Base.update({title:_a22.field,type:"string",key:false},_a22));
MochiKit.Signal.connect(o,"onclick",o,"_handleClick");
return o;
};
MochiKit.Widget.TableColumn.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TableColumn.prototype.setAttrs=function(_a25){
_a25=MochiKit.Base.update({},_a25);
var _a26=MochiKit.Base.mask(_a25,["title","field","type","sort","maxLength","key","tooltip"]);
if(typeof (_a26.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this,_a26.title);
}
if(typeof (_a26.field)!="undefined"){
this.field=_a26.field;
}
if(typeof (_a26.type)!="undefined"){
this.type=_a26.type;
}
if(typeof (_a26.sort)!="undefined"){
this.sort=_a26.sort;
if(_a26.sort==null||_a26.sort=="none"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.removeElementClass(this,"sortDesc");
}else{
if(_a26.sort=="desc"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.addElementClass(this,"sortDesc");
}else{
MochiKit.DOM.removeElementClass(this,"sortDesc");
MochiKit.DOM.addElementClass(this,"sortAsc");
}
}
}
if(typeof (_a26.maxLength)!="undefined"){
this.maxLength=parseInt(_a26.maxLength);
}
if(typeof (_a26.key)!="undefined"){
this.key=!MochiKit.Base.isFalse(_a26.key);
}
if(typeof (_a26.tooltip)!="undefined"){
this.title=_a26.tooltip;
}
MochiKit.DOM.updateNodeAttributes(this,_a25);
};
MochiKit.Widget.TableColumn.prototype._map=function(src,dst){
var _a29=src[this.field];
if(_a29!=null){
if(this._key){
dst.$id=_a29;
}
switch(this.type){
case "number":
if(_a29 instanceof Number){
_a29=_a29.valueOf();
}else{
if(typeof (_a29)!="number"){
_a29=parseFloat(_a29);
}
}
break;
case "date":
if(_a29 instanceof Date){
_a29=MochiKit.DateTime.toISODate(_a29);
}else{
_a29=MochiKit.Text.truncate(_a29,10);
}
break;
case "datetime":
if(_a29 instanceof Date){
_a29=MochiKit.DateTime.toISOTimestamp(_a29);
}else{
_a29=MochiKit.Text.truncate(_a29,19);
}
break;
case "time":
if(_a29 instanceof Date){
_a29=MochiKit.DateTime.toISOTime(_a29);
}else{
if(typeof (_a29)!="string"){
_a29=_a29.toString();
}
if(_a29.length>8){
_a29=_a29.substring(_a29.length-8);
}
}
break;
default:
if(typeof (_a29)!="string"){
_a29=_a29.toString();
}
}
}
dst[this.field]=_a29;
};
MochiKit.Widget.TableColumn.prototype._render=function(obj){
var td=MochiKit.DOM.TD();
var _a2c=obj[this.field];
if(_a2c==null){
_a2c="";
}else{
if(typeof (_a2c)!="string"){
_a2c=_a2c.toString();
}
}
if(this.maxLength&&this.maxLength<_a2c.length){
td.title=_a2c;
_a2c=MochiKit.Text.truncate(_a2c,this.maxLength,"...");
}
if(this.type=="html"){
td.innerHTML=_a2c;
}else{
td.appendChild(MochiKit.DOM.createTextNode(_a2c));
}
return td;
};
MochiKit.Widget.TableColumn.prototype._handleClick=function(){
if(this.parentNode!=null){
var dir=(this.sort=="asc")?"desc":"asc";
var tr=this.parentNode;
var _a2f=tr.parentNode;
var _a30=_a2f.parentNode;
_a30.parentNode.sortData(this.field,dir);
}
};
MochiKit.Widget.TextArea=function(_a31){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_a31,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.TEXTAREA();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTextArea");
o.focused=false;
o.setAttrs(MochiKit.Base.update({helpText:""},_a31));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onfocus",o,"_handleFocus");
MochiKit.Signal.connect(o,"onblur",o,"_handleFocus");
return o;
};
MochiKit.Widget.TextArea.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TextArea.prototype.setAttrs=function(_a34){
_a34=MochiKit.Base.update({},_a34);
var _a35=MochiKit.Base.mask(_a34,["helpText","value"]);
if(typeof (_a35.helpText)!="undefined"){
this.helpText=_a35.helpText;
}
if(typeof (_a35.value)!="undefined"){
this.value=this.storedValue=_a35.value;
}
if(!this.focused&&MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextAreaHelp");
}
MochiKit.DOM.updateNodeAttributes(this,_a34);
};
MochiKit.Widget.TextArea.prototype.reset=function(){
this.setAttrs({value:this.defaultValue});
};
MochiKit.Widget.TextArea.prototype.getValue=function(){
return (this.focused)?this.value:this.storedValue;
};
MochiKit.Widget.TextArea.prototype._handleFocus=function(evt){
if(evt.type()=="focus"){
this.focused=true;
this.value=this.storedValue;
this.removeClass("widgetTextAreaHelp");
}else{
if(evt.type()=="blur"){
this.focused=false;
this.storedValue=this.value;
if(MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextAreaHelp");
}
}
}
};
MochiKit.Widget.TextField=function(_a37){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_a37,MochiKit.Base.extend(null,arguments,1));
}
var text="";
if(_a37!=null&&_a37.value!=null){
text=_a37.value;
}
for(var i=1;i<arguments.length;i++){
text+=arguments[i].toString();
}
var o=MochiKit.DOM.INPUT({value:text});
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTextField");
o.focused=false;
o._popupCreated=false;
o.setAttrs(MochiKit.Base.update({helpText:"",value:text},_a37));
MochiKit.Signal.connect(o,"onfocus",o,"_handleFocus");
MochiKit.Signal.connect(o,"onblur",o,"_handleFocus");
return o;
};
MochiKit.Widget.TextField.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TextField.prototype.setAttrs=function(_a3c){
_a3c=MochiKit.Base.update({},_a3c);
var _a3d=MochiKit.Base.mask(_a3c,["helpText","value"]);
if(typeof (_a3d.helpText)!="undefined"){
this.helpText=_a3d.helpText;
}
if(typeof (_a3d.value)!="undefined"){
this.value=this.storedValue=_a3d.value;
}
if(!this.focused&&MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextFieldHelp");
}
MochiKit.DOM.updateNodeAttributes(this,_a3c);
};
MochiKit.Widget.TextField.prototype.reset=function(){
this.setAttrs({value:this.defaultValue});
};
MochiKit.Widget.TextField.prototype.getValue=function(){
return (this.focused)?this.value:this.storedValue;
};
MochiKit.Widget.TextField.prototype.popup=function(_a3e){
if(!this._popupCreated&&_a3e){
this.autocomplete="off";
this._popupCreated=true;
var _a3f={"max-height":"300px","width":"300px"};
var _a40=new MochiKit.Widget.Popup({style:_a3f});
MochiKit.DOM.insertSiblingNodesAfter(this,_a40);
MochiKit.Style.makePositioned(this.parentNode);
var pos={x:this.offsetLeft+1,y:this.offsetTop+this.offsetHeight+1};
MochiKit.Style.setElementPosition(_a40,pos);
MochiKit.Signal.connect(this,"onkeydown",this,"_handleKeyDown");
MochiKit.Signal.connect(_a40,"onclick",this,"_handleClick");
}
return (this._popupCreated)?this.nextSibling:null;
};
MochiKit.Widget.TextField.prototype.showPopup=function(_a42,_a43){
var _a44=this.popup(true);
if(_a43){
_a44.hide();
MochiKit.DOM.replaceChildNodes(_a44);
for(var i=0;i<_a43.length;i++){
if(typeof (_a43[i])=="string"){
var node=MochiKit.DOM.DIV({"class":"widgetPopupItem"},"\xbb "+_a43[i]);
_a44.appendChild(node);
}else{
MochiKit.DOM.appendChildNodes(_a44,_a43[i]);
}
}
}
if(_a44.childNodes.length>0){
_a44.setAttrs(MochiKit.Base.update({delay:30000},_a42));
_a44.show();
}
};
MochiKit.Widget.TextField.prototype._handleFocus=function(evt){
if(evt.type()=="focus"){
this.focused=true;
this.value=this.storedValue;
this.removeClass("widgetTextFieldHelp");
}else{
if(evt.type()=="blur"){
this.focused=false;
this.storedValue=this.value;
if(MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextFieldHelp");
}
var _a48=this.popup();
if(_a48!=null&&!_a48.isHidden()){
_a48.setAttrs({delay:250});
}
}
}
};
MochiKit.Widget.TextField.prototype._handleKeyDown=function(evt){
var _a4a=this.popup(false);
if(_a4a!=null){
_a4a.resetDelay();
if(_a4a.isHidden()){
switch(evt.key().string){
case "KEY_ESCAPE":
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
this.showPopup();
_a4a.selectChild(0);
evt.stop();
break;
}
}else{
switch(evt.key().string){
case "KEY_TAB":
case "KEY_ENTER":
_a4a.hide();
evt.stop();
if(_a4a.selectedChild()!=null){
MochiKit.Widget.emitSignal(this,"onpopupselect");
}
break;
case "KEY_ESCAPE":
_a4a.hide();
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
_a4a.selectMove(evt.key().string=="KEY_ARROW_UP"?-1:1);
evt.stop();
break;
}
}
}
};
MochiKit.Widget.TextField.prototype._handleClick=function(evt){
this.blur();
this.focus();
MochiKit.Widget.emitSignal(this,"onpopupselect");
};
MochiKit.Widget.Tree=function(_a4c){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_a4c,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV(_a4c);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTree");
o.resizeContent=MochiKit.Base.noop;
o.selectedPath=null;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Tree.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Tree.prototype.addChildNode=function(_a4f){
if(!MochiKit.Widget.isWidget(_a4f,"TreeNode")){
throw new Error("Tree widget can only have TreeNode children");
}
this.appendChild(_a4f);
};
MochiKit.Widget.Tree.prototype.findRoot=function(name){
var _a51=this.getChildNodes();
for(var i=0;i<_a51.length;i++){
if(_a51[i].name==name){
return _a51[i];
}
}
return null;
};
MochiKit.Widget.Tree.prototype.findByPath=function(path){
if(path==null||path.length<1){
return null;
}
var root=this.findRoot(path[0]);
if(root!=null){
return root.findByPath(path.slice(1));
}else{
return null;
}
};
MochiKit.Widget.Tree.prototype.selectedChild=function(){
if(this.selectedPath==null){
return null;
}else{
return this.findByPath(this.selectedPath);
}
};
MochiKit.Widget.Tree.prototype._handleSelect=function(node){
var prev=this.selectedChild();
if(node==null){
this.selectedPath=null;
MochiKit.Widget.emitSignal(this,"onselect",null);
}else{
if(prev!=null&&prev!==node){
prev.unselect();
}
this.selectedPath=node.path();
MochiKit.Widget.emitSignal(this,"onselect",node);
}
};
MochiKit.Widget.Tree.prototype._emitExpand=function(node){
MochiKit.Widget.emitSignal(this,"onexpand",node);
};
MochiKit.Widget.Tree.prototype.expandAll=function(_a58){
if(typeof (_a58)!=="number"){
_a58=10;
}
var _a59=this.getChildNodes();
for(var i=0;_a58>0&&i<_a59.length;i++){
_a59[i].expandAll(_a58-1);
}
};
MochiKit.Widget.Tree.prototype.collapseAll=function(_a5b){
if(typeof (_a5b)!=="number"){
_a5b=0;
}
var _a5c=this.getChildNodes();
for(var i=0;i<_a5c.length;i++){
_a5c[i].collapseAll(_a5b-1);
}
};
MochiKit.Widget.Tree.prototype.addPath=function(path){
if(path==null||path.length<1){
return null;
}
var node=this.findRoot(path[0]);
if(node==null){
node=new MochiKit.Widget.TreeNode({name:path[0]});
this.addChildNode(node);
}
for(var i=1;i<path.length;i++){
var _a61=node.findChild(path[i]);
if(_a61==null){
_a61=new MochiKit.Widget.TreeNode({name:path[i]});
node.addChildNode(_a61);
}
node=_a61;
}
return node;
};
MochiKit.Widget.TreeNode=function(_a62){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_a62,MochiKit.Base.extend(null,arguments,1));
}
var icon=MochiKit.Widget.Icon({ref:"BLANK"});
var _a65=MochiKit.DOM.SPAN({"class":"widgetTreeNodeText"});
var div=MochiKit.DOM.DIV({"class":"widgetTreeNodeLabel"},icon,_a65);
var o=MochiKit.DOM.DIV({},div);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTreeNode");
_a62=MochiKit.Base.update({name:"Tree Node",folder:false},_a62);
if(typeof (_a62.icon)=="undefined"){
_a62.icon=_a62.folder?"FOLDER":"DOCUMENT";
}
o.setAttrs(_a62);
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(icon,"onclick",o,"toggle");
MochiKit.Signal.connect(div,"onclick",o,"select");
return o;
};
MochiKit.Widget.TreeNode.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TreeNode.prototype._container=function(_a68){
var _a69=this.lastChild;
if(MochiKit.DOM.hasElementClass(_a69,"widgetTreeNodeContainer")){
return _a69;
}else{
if(_a68){
_a69=MochiKit.DOM.DIV({"class":"widgetTreeNodeContainer widgetHidden"});
this.appendChild(_a69);
var _a6a=this.firstChild.firstChild;
_a6a.setAttrs({ref:"PLUS"});
this.setAttrs({icon:"FOLDER"});
return _a69;
}else{
return null;
}
}
};
MochiKit.Widget.TreeNode.prototype.setAttrs=function(_a6b){
_a6b=MochiKit.Base.update({},_a6b);
var _a6c=MochiKit.Base.mask(_a6b,["name","folder","icon"]);
if(typeof (_a6c.name)!="undefined"){
this.name=_a6c.name;
var node=this.firstChild.firstChild;
while(!MochiKit.DOM.hasElementClass(node,"widgetTreeNodeText")){
node=node.nextSibling;
}
MochiKit.DOM.replaceChildNodes(node,_a6c.name);
}
if(!MochiKit.Base.isFalse(_a6c.folder)){
this._container(true);
}
if(typeof (_a6c.icon)!="undefined"){
var _a6e=this.firstChild.firstChild;
var _a6f=_a6e.nextSibling;
if(!MochiKit.Widget.isWidget(_a6f,"Icon")){
_a6f=null;
}
if(_a6f==null&&_a6c.icon!=null){
if(typeof (_a6c.icon)==="string"){
_a6c.icon=new MochiKit.Widget.Icon({ref:_a6c.icon});
}else{
if(!MochiKit.Widget.isWidget(_a6c.icon,"Icon")){
_a6c.icon=new MochiKit.Widget.Icon(_a6c.icon);
}
}
MochiKit.DOM.insertSiblingNodesAfter(_a6e,_a6c.icon);
}else{
if(_a6f!=null&&_a6c.icon!=null){
if(MochiKit.Widget.isWidget(_a6c.icon,"Icon")){
MochiKit.DOM.swapDOM(_a6f,_a6c.icon);
}else{
if(typeof (_a6c.icon)==="string"){
_a6f.setAttrs({ref:_a6c.icon});
}else{
_a6f.setAttrs(_a6c.icon);
}
}
}else{
if(_a6f!=null&&_a6c.icon==null){
MochiKit.Widget.destroyWidget(_a6f);
}
}
}
}
MochiKit.DOM.updateNodeAttributes(this,_a6b);
};
MochiKit.Widget.TreeNode.prototype.getChildNodes=function(){
var _a70=this._container();
if(_a70==null){
return [];
}else{
return MochiKit.Base.extend([],_a70.childNodes);
}
};
MochiKit.Widget.TreeNode.prototype.addChildNode=function(_a71){
if(!MochiKit.Widget.isWidget(_a71,"TreeNode")){
throw new Error("TreeNode widget can only have TreeNode children");
}
this._container(true).appendChild(_a71);
};
MochiKit.Widget.TreeNode.prototype.removeChildNode=function(_a72){
var _a73=this._container();
if(_a73!=null){
_a73.removeChild(_a72);
}
};
MochiKit.Widget.TreeNode.prototype.isFolder=function(){
return this._container()!=null;
};
MochiKit.Widget.TreeNode.prototype.isExpanded=function(){
var _a74=this._container();
return _a74!=null&&!MochiKit.DOM.hasElementClass(_a74,"widgetHidden");
};
MochiKit.Widget.TreeNode.prototype.isSelected=function(){
return MochiKit.DOM.hasElementClass(this.firstChild,"selected");
};
MochiKit.Widget.TreeNode.prototype.tree=function(){
var _a75=this.parent();
if(_a75!=null){
return _a75.tree();
}
if(MochiKit.Widget.isWidget(this.parentNode,"Tree")){
return this.parentNode;
}else{
return null;
}
};
MochiKit.Widget.TreeNode.prototype.parent=function(){
var node=this.parentNode;
if(MochiKit.DOM.hasElementClass(node,"widgetTreeNodeContainer")){
return node.parentNode;
}else{
return null;
}
};
MochiKit.Widget.TreeNode.prototype.path=function(){
var _a77=this.parent();
if(_a77==null){
return [this.name];
}else{
var path=_a77.path();
path.push(this.name);
return path;
}
};
MochiKit.Widget.TreeNode.prototype.findChild=function(name){
var _a7a=this.getChildNodes();
for(var i=0;i<_a7a.length;i++){
if(_a7a[i].name==name){
return _a7a[i];
}
}
return null;
};
MochiKit.Widget.TreeNode.prototype.findByPath=function(path){
var node=this;
for(var i=0;node!=null&&path!=null&&i<path.length;i++){
node=node.findChild(path[i]);
}
return node;
};
MochiKit.Widget.TreeNode.prototype.select=function(){
MochiKit.DOM.addElementClass(this.firstChild,"selected");
var tree=this.tree();
if(tree!=null){
tree._handleSelect(this);
}
this.expand();
};
MochiKit.Widget.TreeNode.prototype.unselect=function(){
if(this.isSelected()){
MochiKit.DOM.removeElementClass(this.firstChild,"selected");
var tree=this.tree();
if(tree!=null){
tree._handleSelect(null);
}
}
};
MochiKit.Widget.TreeNode.prototype.expand=function(){
var _a81=this.parent();
if(_a81!=null&&!_a81.isExpanded()){
_a81.expand();
}
var _a82=this._container();
if(_a82!=null&&!this.isExpanded()){
var _a83=this.firstChild.firstChild;
_a83.setAttrs({ref:"MINUS"});
MochiKit.DOM.removeElementClass(_a82,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.expandAll=function(_a85){
if(typeof (_a85)!=="number"){
_a85=10;
}
this.expand();
var _a86=this.getChildNodes();
for(var i=0;_a85>0&&i<_a86.length;i++){
_a86[i].expandAll(_a85-1);
}
};
MochiKit.Widget.TreeNode.prototype.collapse=function(){
var _a88=this._container();
if(_a88!=null&&this.isExpanded()){
var _a89=this.firstChild.firstChild;
_a89.setAttrs({ref:"PLUS"});
MochiKit.DOM.addElementClass(_a88,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.collapseAll=function(_a8b){
if(typeof (_a8b)!=="number"){
_a8b=0;
}
if(_a8b<=0){
this.collapse();
}
var _a8c=this.getChildNodes();
for(var i=0;i<_a8c.length;i++){
_a8c[i].collapseAll(_a8b-1);
}
};
MochiKit.Widget.TreeNode.prototype.toggle=function(evt){
if(evt){
evt.stop();
}
if(this.isExpanded()){
this.collapse();
}else{
this.expand();
}
};
MochiKit.Widget.Wizard=function(_a8f){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_a8f,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV(_a8f);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetWizard");
o._selectedIndex=-1;
o.appendChild(MochiKit.DOM.H3({"class":"widgetWizardTitle"}));
var _a92=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"CANCEL"})," Cancel");
var _a93=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"PREVIOUS"})," Previous");
var _a94=MochiKit.Widget.Button({},"Next ",MochiKit.Widget.Icon({ref:"NEXT"}));
var _a95=MochiKit.Widget.Button({highlight:true},MochiKit.Widget.Icon({ref:"OK"})," Finish");
_a92.hide();
o.appendChild(MochiKit.DOM.DIV({"class":"widgetWizardButtons"},_a92,_a93,_a94,_a95));
MochiKit.Signal.connect(_a92,"onclick",o,"cancel");
MochiKit.Signal.connect(_a93,"onclick",o,"previous");
MochiKit.Signal.connect(_a94,"onclick",o,"next");
MochiKit.Signal.connect(_a95,"onclick",o,"done");
o._updateStatus();
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Wizard.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Wizard.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.childNodes,2);
};
MochiKit.Widget.Wizard.prototype.addChildNode=function(_a96){
if(!MochiKit.Widget.isWidget(_a96,"Pane")){
_a96=new MochiKit.Widget.Pane(null,_a96);
}
MochiKit.Style.registerSizeConstraints(_a96,"100%","100%-65");
_a96.hide();
this.appendChild(_a96);
if(this.getChildNodes().length==1){
this.activatePage(0);
}else{
this._updateStatus();
}
};
MochiKit.Widget.Wizard.prototype._updateStatus=function(){
var h3=this.childNodes[0];
var _a98=this.childNodes[1].childNodes[0];
var _a99=this.childNodes[1].childNodes[1];
var _a9a=this.childNodes[1].childNodes[2];
var _a9b=this.childNodes[1].childNodes[3];
var page=this.activePage();
var _a9d=MochiKit.Widget.Pane.FORWARD;
var _a9e=null;
var info="(No pages available)";
var icon=null;
if(page!=null){
_a9d=page.pageStatus||MochiKit.Widget.Pane.ANY;
_a9e=page.pageTitle;
info=" (Step "+(this._selectedIndex+1)+" of "+this.getChildNodes().length+")";
}
if(_a9d===MochiKit.Widget.Pane.WORKING){
_a98.show();
_a99.hide();
icon={ref:"LOADING","class":"widgetWizardWait"};
icon=MochiKit.Widget.Icon(icon);
}else{
_a98.hide();
_a99.show();
}
if(this._selectedIndex>=this.getChildNodes().length-1){
_a9a.hide();
_a9b.show();
}else{
_a9a.show();
_a9b.hide();
}
_a99.disabled=(this._selectedIndex<=0)||!_a9d.previous;
_a9a.disabled=!_a9d.next;
_a9b.disabled=!_a9d.next;
info=MochiKit.DOM.SPAN({"class":"widgetWizardInfo"},info);
MochiKit.DOM.replaceChildNodes(h3,icon,_a9e,info);
};
MochiKit.Widget.Wizard.prototype.activePage=function(){
if(this._selectedIndex>=0){
return this.childNodes[this._selectedIndex+2];
}else{
return null;
}
};
MochiKit.Widget.Wizard.prototype.activePageIndex=function(){
return this._selectedIndex;
};
MochiKit.Widget.Wizard.prototype.activatePage=function(_aa1){
if(typeof (_aa1)=="number"){
var _aa2=_aa1;
var page=this.childNodes[_aa2+2];
}else{
var page=_aa1;
var _aa2=MochiKit.Base.findIdentical(this.childNodes,page,2)-2;
}
if(_aa2<0||_aa2>=this.getChildNodes().length){
throw new RangeError("Page index out of bounds: "+_aa2);
}
var _aa4=this.activePage();
if(_aa4!=null){
if(!_aa4._handleExit({validateForm:this._selectedIndex<_aa2})){
return;
}
}
this._selectedIndex=_aa2;
this._updateStatus();
page._handleEnter({validateReset:true});
MochiKit.Widget.emitSignal(this,"onchange");
};
MochiKit.Widget.Wizard.prototype.cancel=function(){
var page=this.activePage();
page.setAttrs({pageStatus:MochiKit.Widget.Pane.ANY});
MochiKit.Widget.emitSignal(this,"oncancel");
};
MochiKit.Widget.Wizard.prototype.previous=function(){
if(this._selectedIndex>0){
this.activatePage(this._selectedIndex-1);
}
};
MochiKit.Widget.Wizard.prototype.next=function(){
if(this._selectedIndex<this.getChildNodes().length-1){
this.activatePage(this._selectedIndex+1);
}
};
MochiKit.Widget.Wizard.prototype.done=function(){
var page=this.activePage();
if(page!=null){
if(!page._handleExit({validateForm:true})){
return;
}
}
MochiKit.Widget.emitSignal(this,"onclose");
};
MochiKit.Widget.Wizard.prototype.resizeContent=function(){
var page=this.activePage();
if(page!=null){
MochiKit.Style.resizeElements(page);
}
};
MochiKit.Widget.Classes={Button:MochiKit.Widget.Button,Dialog:MochiKit.Widget.Dialog,Field:MochiKit.Widget.Field,Form:MochiKit.Widget.Form,FormValidator:MochiKit.Widget.FormValidator,Icon:MochiKit.Widget.Icon,Overlay:MochiKit.Widget.Overlay,Popup:MochiKit.Widget.Popup,Pane:MochiKit.Widget.Pane,ProgressBar:MochiKit.Widget.ProgressBar,TabContainer:MochiKit.Widget.TabContainer,Table:MochiKit.Widget.Table,TableColumn:MochiKit.Widget.TableColumn,TextArea:MochiKit.Widget.TextArea,TextField:MochiKit.Widget.TextField,Tree:MochiKit.Widget.Tree,TreeNode:MochiKit.Widget.TreeNode,Wizard:MochiKit.Widget.Wizard};

