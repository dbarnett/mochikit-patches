if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Base");
}
if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.Base)=="undefined"){
MochiKit.Base={};
}
if(typeof (MochiKit.__export__)=="undefined"){
MochiKit.__export__=(MochiKit.__compat__||(typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined"));
}
MochiKit.Base.VERSION="1.5";
MochiKit.Base.NAME="MochiKit.Base";
MochiKit.Base.update=function(_1,_2){
if(_1===null||_1===undefined){
_1={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
_1[k]=o[k];
}
}
}
return _1;
};
MochiKit.Base.update(MochiKit.Base,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},camelize:function(_6){
var _7=_6.split("-");
var cc=_7[0];
for(var i=1;i<_7.length;i++){
cc+=_7[i].charAt(0).toUpperCase()+_7[i].substring(1);
}
return cc;
},counter:function(n){
if(arguments.length===0){
n=1;
}
return function(){
return n++;
};
},clone:function(_b){
var me=arguments.callee;
if(arguments.length==1){
me.prototype=_b;
return new me();
}
},_deps:function(_d,_e){
if(!(_d in MochiKit)){
MochiKit[_d]={};
}
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit."+_d);
}
for(var i=0;i<_e.length;i++){
if(typeof (dojo)!="undefined"){
dojo.require("MochiKit."+_e[i]);
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit."+_e[i],[]);
}
if(!(_e[i] in MochiKit)){
throw "MochiKit."+_d+" depends on MochiKit."+_e[i]+"!";
}
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
var _18=m.extend(null,arguments);
while(_18.length){
var o=_18.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
for(var i=o.length-1;i>=0;i--){
_18.unshift(o[i]);
}
}else{
res.push(o);
}
}
return res;
},extend:function(_1b,obj,_1d){
if(!_1d){
_1d=0;
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
if(!_1b){
_1b=[];
}
for(var i=_1d;i<l;i++){
_1b.push(obj[i]);
}
}
return _1b;
},updatetree:function(_20,obj){
if(_20===null||_20===undefined){
_20={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
var v=o[k];
if(typeof (_20[k])=="object"&&typeof (v)=="object"){
arguments.callee(_20[k],v);
}else{
_20[k]=v;
}
}
}
}
return _20;
},setdefault:function(_26,obj){
if(_26===null||_26===undefined){
_26={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
for(var k in o){
if(!(k in _26)){
_26[k]=o[k];
}
}
}
return _26;
},keys:function(obj){
var _2c=[];
for(var _2d in obj){
_2c.push(_2d);
}
return _2c;
},values:function(obj){
var _2f=[];
for(var _30 in obj){
_2f.push(obj[_30]);
}
return _2f;
},items:function(obj){
var _32=[];
var e;
for(var _34 in obj){
var v;
try{
v=obj[_34];
}
catch(e){
continue;
}
_32.push([_34,v]);
}
return _32;
},_newNamedError:function(_36,_37,_38){
_38.prototype=new MochiKit.Base.NamedError(_36.NAME+"."+_37);
_36[_37]=_38;
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
}},forwardCall:function(_76){
return function(){
return this[_76].apply(this,arguments);
};
},itemgetter:function(_77){
return function(arg){
return arg[_77];
};
},typeMatcher:function(){
var _79={};
for(var i=0;i<arguments.length;i++){
var typ=arguments[i];
_79[typ]=typ;
}
return function(){
for(var i=0;i<arguments.length;i++){
if(!(typeof (arguments[i]) in _79)){
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
var _8a=[];
for(var i=1;i<arguments.length;i++){
_8a.push(fn(arguments[i]));
}
return _8a;
},map:function(fn,lst){
var m=MochiKit.Base;
var itr=MochiKit.Iter;
var _90=m.isArrayLike;
if(arguments.length<=2){
if(!_90(lst)){
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
var _91=[];
for(var i=0;i<lst.length;i++){
_91.push(fn(lst[i]));
}
return _91;
}else{
if(fn===null){
fn=Array;
}
var _93=null;
for(i=1;i<arguments.length;i++){
if(!_90(arguments[i])){
if(itr){
return itr.list(itr.imap.apply(null,arguments));
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
var l=arguments[i].length;
if(_93===null||_93>l){
_93=l;
}
}
_91=[];
for(i=0;i<_93;i++){
var _95=[];
for(var j=1;j<arguments.length;j++){
_95.push(arguments[j][i]);
}
_91.push(fn.apply(this,_95));
}
return _91;
}
},xfilter:function(fn){
var _98=[];
if(fn===null){
fn=MochiKit.Base.operator.truth;
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(fn(o)){
_98.push(o);
}
}
return _98;
},filter:function(fn,lst,_9d){
var _9e=[];
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
return Array.prototype.filter.call(lst,fn,_9d);
}else{
if(typeof (_9d)=="undefined"||_9d===null){
for(var i=0;i<lst.length;i++){
var o=lst[i];
if(fn(o)){
_9e.push(o);
}
}
}else{
for(i=0;i<lst.length;i++){
o=lst[i];
if(fn.call(_9d,o)){
_9e.push(o);
}
}
}
}
return _9e;
},_wrapDumbFunction:function(_a2){
return function(){
switch(arguments.length){
case 0:
return _a2();
case 1:
return _a2(arguments[0]);
case 2:
return _a2(arguments[0],arguments[1]);
case 3:
return _a2(arguments[0],arguments[1],arguments[2]);
}
var _a3=[];
for(var i=0;i<arguments.length;i++){
_a3.push("arguments["+i+"]");
}
return eval("(func("+_a3.join(",")+"))");
};
},methodcaller:function(_a5){
var _a6=MochiKit.Base.extend(null,arguments,1);
if(typeof (_a5)=="function"){
return function(obj){
return _a5.apply(obj,_a6);
};
}else{
return function(obj){
return obj[_a5].apply(obj,_a6);
};
}
},method:function(_a9,_aa){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([_aa,_a9],arguments,2));
},compose:function(f1,f2){
var _ae=[];
var m=MochiKit.Base;
if(arguments.length===0){
throw new TypeError("compose() requires at least one argument");
}
for(var i=0;i<arguments.length;i++){
var fn=arguments[i];
if(typeof (fn)!="function"){
throw new TypeError(m.repr(fn)+" is not a function");
}
_ae.push(fn);
}
return function(){
var _b2=arguments;
for(var i=_ae.length-1;i>=0;i--){
_b2=[_ae[i].apply(this,_b2)];
}
return _b2[0];
};
},bind:function(_b4,_b5){
if(typeof (_b4)=="string"){
_b4=_b5[_b4];
}
var _b6=_b4.im_func;
var _b7=_b4.im_preargs;
var _b8=_b4.im_self;
var m=MochiKit.Base;
if(typeof (_b4)=="function"&&typeof (_b4.apply)=="undefined"){
_b4=m._wrapDumbFunction(_b4);
}
if(typeof (_b6)!="function"){
_b6=_b4;
}
if(typeof (_b5)!="undefined"){
_b8=_b5;
}
if(typeof (_b7)=="undefined"){
_b7=[];
}else{
_b7=_b7.slice();
}
m.extend(_b7,arguments,2);
var _ba=function(){
var _bb=arguments;
var me=arguments.callee;
if(me.im_preargs.length>0){
_bb=m.concat(me.im_preargs,_bb);
}
var _bd=me.im_self;
if(!_bd){
_bd=this;
}
return me.im_func.apply(_bd,_bb);
};
_ba.im_self=_b8;
_ba.im_func=_b6;
_ba.im_preargs=_b7;
return _ba;
},bindLate:function(_be,_bf){
var m=MochiKit.Base;
if(typeof (_be)!="string"){
return m.bind.apply(this,arguments);
}
var _c1=m.extend([],arguments,2);
var _c2=function(){
var _c3=arguments;
var me=arguments.callee;
if(me.im_preargs.length>0){
_c3=m.concat(me.im_preargs,_c3);
}
var _c5=me.im_self;
if(!_c5){
_c5=this;
}
return _c5[me.im_func].apply(_c5,_c3);
};
_c2.im_self=_bf;
_c2.im_func=_be;
_c2.im_preargs=_c1;
return _c2;
},bindMethods:function(_c6){
var _c7=MochiKit.Base.bind;
for(var k in _c6){
var _c9=_c6[k];
if(typeof (_c9)=="function"){
_c6[k]=_c7(_c9,_c6);
}
}
},registerComparator:function(_ca,_cb,_cc,_cd){
MochiKit.Base.comparatorRegistry.register(_ca,_cb,_cc,_cd);
},_primitives:{"boolean":true,"string":true,"number":true},compare:function(a,b){
if(a==b){
return 0;
}
var _d0=(typeof (a)=="undefined"||a===null);
var _d1=(typeof (b)=="undefined"||b===null);
if(_d0&&_d1){
return 0;
}else{
if(_d0){
return -1;
}else{
if(_d1){
return 1;
}
}
}
var m=MochiKit.Base;
var _d3=m._primitives;
if(!(typeof (a) in _d3&&typeof (b) in _d3)){
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
var _d4=m.repr;
throw new TypeError(_d4(a)+" and "+_d4(b)+" can not be compared");
},compareDateLike:function(a,b){
return MochiKit.Base.compare(a.getTime(),b.getTime());
},compareArrayLike:function(a,b){
var _d9=MochiKit.Base.compare;
var _da=a.length;
var _db=0;
if(_da>b.length){
_db=1;
_da=b.length;
}else{
if(_da<b.length){
_db=-1;
}
}
for(var i=0;i<_da;i++){
var cmp=_d9(a[i],b[i]);
if(cmp){
return cmp;
}
}
return _db;
},registerRepr:function(_de,_df,_e0,_e1){
MochiKit.Base.reprRegistry.register(_de,_df,_e0,_e1);
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
var _e3=(o+"");
}
catch(e){
return "["+typeof (o)+"]";
}
if(typeof (o)=="function"){
_e3=_e3.replace(/^\s+/,"").replace(/\s+/g," ");
_e3=_e3.replace(/,(\S)/,", $1");
var idx=_e3.indexOf("{");
if(idx!=-1){
_e3=_e3.substr(0,idx)+"{...}";
}
}
return _e3;
},reprArrayLike:function(o){
var m=MochiKit.Base;
return "["+m.map(m.repr,o).join(", ")+"]";
},reprString:function(o){
return ("\""+o.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\v]/g,"\\v").replace(/[\r]/g,"\\r");
},reprNumber:function(o){
return o+"";
},registerJSON:function(_e9,_ea,_eb,_ec){
MochiKit.Base.jsonRegistry.register(_e9,_ea,_eb,_ec);
},evalJSON:function(){
return eval("("+MochiKit.Base._filterJSON(arguments[0])+")");
},_filterJSON:function(s){
var m=s.match(/^\s*\/\*(.*)\*\/\s*$/);
if(m){
return m[1];
}
return s;
},serializeJSON:function(o){
var _f0=typeof (o);
if(_f0=="number"||_f0=="boolean"){
return o+"";
}else{
if(o===null){
return "null";
}else{
if(_f0=="string"){
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
var _f6;
if(typeof (o.__json__)=="function"){
_f6=o.__json__();
if(o!==_f6){
return me(_f6);
}
}
if(typeof (o.json)=="function"){
_f6=o.json();
if(o!==_f6){
return me(_f6);
}
}
if(_f0!="function"&&typeof (o.length)=="number"){
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
_f6=m.jsonRegistry.match(o);
if(o!==_f6){
return me(_f6);
}
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
if(_f0=="undefined"){
throw new TypeError("undefined can not be serialized as JSON");
}
if(_f0=="function"){
return null;
}
res=[];
for(var k in o){
var _fa;
if(typeof (k)=="number"){
_fa="\""+k+"\"";
}else{
if(typeof (k)=="string"){
_fa=me(k);
}else{
continue;
}
}
val=me(o[k]);
if(typeof (val)!="string"){
continue;
}
res.push(_fa+":"+val);
}
return "{"+res.join(", ")+"}";
},objEqual:function(a,b){
return (MochiKit.Base.compare(a,b)===0);
},arrayEqual:function(_fd,arr){
if(_fd.length!=arr.length){
return false;
}
return (MochiKit.Base.compare(_fd,arr)===0);
},concat:function(){
var _ff=[];
var _100=MochiKit.Base.extend;
for(var i=0;i<arguments.length;i++){
_100(_ff,arguments[i]);
}
return _ff;
},keyComparator:function(key){
var m=MochiKit.Base;
var _104=m.compare;
if(arguments.length==1){
return function(a,b){
return _104(a[key],b[key]);
};
}
var _107=m.extend(null,arguments);
return function(a,b){
var rval=0;
for(var i=0;(rval===0)&&(i<_107.length);i++){
var key=_107[i];
rval=_104(a[key],b[key]);
}
return rval;
};
},reverseKeyComparator:function(key){
var _10e=MochiKit.Base.keyComparator.apply(this,arguments);
return function(a,b){
return _10e(b,a);
};
},partial:function(func){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([func,undefined],arguments,1));
},listMinMax:function(_113,lst){
if(lst.length===0){
return null;
}
var cur=lst[0];
var _116=MochiKit.Base.compare;
for(var i=1;i<lst.length;i++){
var o=lst[i];
if(_116(o,cur)==_113){
cur=o;
}
}
return cur;
},objMax:function(){
return MochiKit.Base.listMinMax(1,arguments);
},objMin:function(){
return MochiKit.Base.listMinMax(-1,arguments);
},findIdentical:function(lst,_11a,_11b,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_11b)=="undefined"||_11b===null){
_11b=0;
}
for(var i=_11b;i<end;i++){
if(lst[i]===_11a){
return i;
}
}
return -1;
},mean:function(){
var sum=0;
var m=MochiKit.Base;
var args=m.extend(null,arguments);
var _121=args.length;
while(args.length){
var o=args.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
_121+=o.length-1;
for(var i=o.length-1;i>=0;i--){
sum+=o[i];
}
}else{
sum+=o;
}
}
if(_121<=0){
throw new TypeError("mean() requires at least one argument");
}
return sum/_121;
},median:function(){
var data=MochiKit.Base.flattenArguments(arguments);
if(data.length===0){
throw new TypeError("median() requires at least one argument");
}
data.sort(compare);
if(data.length%2==0){
var _125=data.length/2;
return (data[_125]+data[_125-1])/2;
}else{
return data[(data.length-1)/2];
}
},findValue:function(lst,_127,_128,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_128)=="undefined"||_128===null){
_128=0;
}
var cmp=MochiKit.Base.compare;
for(var i=_128;i<end;i++){
if(cmp(lst[i],_127)===0){
return i;
}
}
return -1;
},nodeWalk:function(node,_12d){
var _12e=[node];
var _12f=MochiKit.Base.extend;
while(_12e.length){
var res=_12d(_12e.shift());
if(res){
_12f(_12e,res);
}
}
},nameFunctions:function(_131){
var base=_131.NAME;
if(typeof (base)=="undefined"){
base="";
}else{
base=base+".";
}
for(var name in _131){
var o=_131[name];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+name;
}
catch(e){
}
}
}
},queryString:function(_135,_136){
if(typeof (MochiKit.DOM)!="undefined"&&arguments.length==1&&(typeof (_135)=="string"||(typeof (_135.nodeType)!="undefined"&&_135.nodeType>0))){
var kv=MochiKit.DOM.formContents(_135);
_135=kv[0];
_136=kv[1];
}else{
if(arguments.length==1){
if(typeof (_135.length)=="number"&&_135.length==2){
return arguments.callee(_135[0],_135[1]);
}
var o=_135;
_135=[];
_136=[];
for(var k in o){
var v=o[k];
if(typeof (v)=="function"){
continue;
}else{
if(MochiKit.Base.isArrayLike(v)){
for(var i=0;i<v.length;i++){
_135.push(k);
_136.push(v[i]);
}
}else{
_135.push(k);
_136.push(v);
}
}
}
}
}
var rval=[];
var len=Math.min(_135.length,_136.length);
var _13e=MochiKit.Base.urlEncode;
for(var i=0;i<len;i++){
v=_136[i];
if(typeof (v)!="undefined"&&v!==null){
rval.push(_13e(_135[i])+"="+_13e(v));
}
}
return rval.join("&");
},parseQueryString:function(_13f,_140){
var qstr=(_13f.charAt(0)=="?")?_13f.substring(1):_13f;
var _142=qstr.replace(/\+/g,"%20").split(/\&amp\;|\&\#38\;|\&#x26;|\&/);
var o={};
var _144;
if(typeof (decodeURIComponent)!="undefined"){
_144=decodeURIComponent;
}else{
_144=unescape;
}
if(_140){
for(var i=0;i<_142.length;i++){
var pair=_142[i].split("=");
var name=_144(pair.shift());
if(!name){
continue;
}
var arr=o[name];
if(!(arr instanceof Array)){
arr=[];
o[name]=arr;
}
arr.push(_144(pair.join("=")));
}
}else{
for(i=0;i<_142.length;i++){
pair=_142[i].split("=");
var name=pair.shift();
if(!name){
continue;
}
o[_144(name)]=_144(pair.join("="));
}
}
return o;
}});
MochiKit.Base.AdapterRegistry=function(){
this.pairs=[];
};
MochiKit.Base.AdapterRegistry.prototype={register:function(name,_14a,wrap,_14c){
if(_14c){
this.pairs.unshift([name,_14a,wrap]);
}else{
this.pairs.push([name,_14a,wrap]);
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
MochiKit.Base.EXPORT=["flattenArray","noop","camelize","counter","clone","extend","update","updatetree","setdefault","keys","values","items","NamedError","operator","forwardCall","itemgetter","typeMatcher","isCallable","isUndefined","isUndefinedOrNull","isNull","isEmpty","isNotEmpty","isArrayLike","isDateLike","xmap","map","xfilter","filter","methodcaller","compose","bind","bindLate","bindMethods","NotFound","AdapterRegistry","registerComparator","compare","registerRepr","repr","objEqual","arrayEqual","concat","keyComparator","reverseKeyComparator","partial","merge","listMinMax","listMax","listMin","objMax","objMin","nodeWalk","zip","urlEncode","queryString","serializeJSON","registerJSON","evalJSON","parseQueryString","findValue","findIdentical","flattenArguments","method","average","mean","median"];
MochiKit.Base.EXPORT_OK=["nameFunctions","comparatorRegistry","reprRegistry","jsonRegistry","compareDateLike","compareArrayLike","reprArrayLike","reprString","reprNumber"];
MochiKit.Base._exportSymbols=function(_152,_153){
if(!MochiKit.__export__){
return;
}
var all=_153.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_152[all[i]]=_153[all[i]];
}
};
MochiKit.Base.__new__=function(){
var m=this;
m.noop=m.operator.identity;
m.forward=m.forwardCall;
m.find=m.findValue;
if(typeof (encodeURIComponent)!="undefined"){
m.urlEncode=function(_157){
return encodeURIComponent(_157).replace(/\'/g,"%27");
};
}else{
m.urlEncode=function(_158){
return escape(_158).replace(/\+/g,"%2B").replace(/\"/g,"%22").rval.replace(/\'/g,"%27");
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
var all=m.concat(m.EXPORT,m.EXPORT_OK);
m.EXPORT_TAGS={":common":m.concat(m.EXPORT_OK),":all":all};
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
MochiKit.Base._deps("Iter",["Base"]);
MochiKit.Iter.NAME="MochiKit.Iter";
MochiKit.Iter.VERSION="1.5";
MochiKit.Base.update(MochiKit.Iter,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},registerIteratorFactory:function(name,_15c,_15d,_15e){
MochiKit.Iter.iteratorRegistry.register(name,_15c,_15d,_15e);
},isIterable:function(o){
return o!=null&&(typeof (o.next)=="function"||typeof (o.iter)=="function");
},iter:function(_160,_161){
var self=MochiKit.Iter;
if(arguments.length==2){
return self.takewhile(function(a){
return a!=_161;
},_160);
}
if(typeof (_160.next)=="function"){
return _160;
}else{
if(typeof (_160.iter)=="function"){
return _160.iter();
}
}
try{
return self.iteratorRegistry.match(_160);
}
catch(e){
var m=MochiKit.Base;
if(e==m.NotFound){
e=new TypeError(typeof (_160)+": "+m.repr(_160)+" is not iterable");
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
var _16b=self.iter(p);
return {repr:function(){
return "cycle(...)";
},toString:m.forwardCall("repr"),next:function(){
try{
var rval=_16b.next();
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
},next:function(_171){
return _171.next();
},izip:function(p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var next=self.next;
var _177=m.map(self.iter,arguments);
return {repr:function(){
return "izip(...)";
},toString:m.forwardCall("repr"),next:function(){
return m.map(next,_177);
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
var _183=0;
var stop=0;
var step=1;
var i=-1;
if(arguments.length==2){
stop=arguments[1];
}else{
if(arguments.length==3){
_183=arguments[1];
stop=arguments[2];
}else{
_183=arguments[1];
stop=arguments[2];
step=arguments[3];
}
}
return {repr:function(){
return "islice("+["...",_183,stop,step].join(", ")+")";
},toString:m.forwardCall("repr"),next:function(){
var rval;
while(i<_183){
rval=seq.next();
i++;
}
if(_183>=stop){
throw self.StopIteration;
}
_183+=step;
return rval;
}};
},imap:function(fun,p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var _18d=m.map(self.iter,m.extend(null,arguments,1));
var map=m.map;
var next=self.next;
return {repr:function(){
return "imap(...)";
},toString:m.forwardCall("repr"),next:function(){
return fun.apply(this,map(next,_18d));
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
var _198=m.map(self.iter,arguments);
return {repr:function(){
return "chain(...)";
},toString:m.forwardCall("repr"),next:function(){
while(_198.length>1){
try{
var _199=_198[0].next();
return _199;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
_198.shift();
var _199=_198[0].next();
return _199;
}
}
if(_198.length==1){
var arg=_198.shift();
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
},_tee:function(_1a4,sync,_1a6){
sync.pos[_1a4]=-1;
var m=MochiKit.Base;
var _1a8=m.listMin;
return {repr:function(){
return "tee("+_1a4+", ...)";
},toString:m.forwardCall("repr"),next:function(){
var rval;
var i=sync.pos[_1a4];
if(i==sync.max){
rval=_1a6.next();
sync.deque.push(rval);
sync.max+=1;
sync.pos[_1a4]+=1;
}else{
rval=sync.deque[i-sync.min];
sync.pos[_1a4]+=1;
if(i==sync.min&&_1a8(sync.pos)!=sync.min){
sync.min+=1;
sync.deque.shift();
}
}
return rval;
}};
},tee:function(_1ab,n){
var rval=[];
var sync={"pos":[],"deque":[],"max":-1,"min":-1};
if(arguments.length==1||typeof (n)=="undefined"||n===null){
n=2;
}
var self=MochiKit.Iter;
_1ab=self.iter(_1ab);
var _tee=self._tee;
for(var i=0;i<n;i++){
rval.push(_tee(i,sync,_1ab));
}
return rval;
},list:function(_1b2){
var rval;
if(_1b2 instanceof Array){
return _1b2.slice();
}
if(typeof (_1b2)=="function"&&!(_1b2 instanceof Function)&&typeof (_1b2.length)=="number"){
rval=[];
for(var i=0;i<_1b2.length;i++){
rval.push(_1b2[i]);
}
return rval;
}
var self=MochiKit.Iter;
_1b2=self.iter(_1b2);
var rval=[];
var _1b6;
try{
while(true){
_1b6=_1b2.next();
rval.push(_1b6);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return rval;
}
return undefined;
},reduce:function(fn,_1b8,_1b9){
var i=0;
var x=_1b9;
var self=MochiKit.Iter;
_1b8=self.iter(_1b8);
if(arguments.length<3){
try{
x=_1b8.next();
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
x=fn(x,_1b8.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},range:function(){
var _1bd=0;
var stop=0;
var step=1;
if(arguments.length==1){
stop=arguments[0];
}else{
if(arguments.length==2){
_1bd=arguments[0];
stop=arguments[1];
}else{
if(arguments.length==3){
_1bd=arguments[0];
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
if((step>0&&_1bd>=stop)||(step<0&&_1bd<=stop)){
throw MochiKit.Iter.StopIteration;
}
var rval=_1bd;
_1bd+=step;
return rval;
},repr:function(){
return "range("+[_1bd,stop,step].join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
},sum:function(_1c1,_1c2){
if(typeof (_1c2)=="undefined"||_1c2===null){
_1c2=0;
}
var x=_1c2;
var self=MochiKit.Iter;
_1c1=self.iter(_1c1);
try{
while(true){
x+=_1c1.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},exhaust:function(_1c5){
var self=MochiKit.Iter;
_1c5=self.iter(_1c5);
try{
while(true){
_1c5.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
},forEach:function(_1c7,func,obj){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length>2){
func=m.bind(func,obj);
}
if(m.isArrayLike(_1c7)&&!self.isIterable(_1c7)){
try{
for(var i=0;i<_1c7.length;i++){
func(_1c7[i]);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}else{
self.exhaust(self.imap(func,_1c7));
}
},every:function(_1cd,func){
var self=MochiKit.Iter;
try{
self.ifilterfalse(func,_1cd).next();
return false;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return true;
}
},sorted:function(_1d0,cmp){
var rval=MochiKit.Iter.list(_1d0);
if(arguments.length==1){
cmp=MochiKit.Base.compare;
}
rval.sort(cmp);
return rval;
},reversed:function(_1d3){
var rval=MochiKit.Iter.list(_1d3);
rval.reverse();
return rval;
},some:function(_1d5,func){
var self=MochiKit.Iter;
try{
self.ifilter(func,_1d5).next();
return true;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return false;
}
},iextend:function(lst,_1d9){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(m.isArrayLike(_1d9)&&!self.isIterable(_1d9)){
for(var i=0;i<_1d9.length;i++){
lst.push(_1d9[i]);
}
}else{
_1d9=self.iter(_1d9);
try{
while(true){
lst.push(_1d9.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}
return lst;
},groupby:function(_1dd,_1de){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1de=m.operator.identity;
}
_1dd=self.iter(_1dd);
var pk=undefined;
var k=undefined;
var v;
function fetch(){
v=_1dd.next();
k=_1de(v);
}
function eat(){
var ret=v;
v=undefined;
return ret;
}
var _1e5=true;
var _1e6=m.compare;
return {repr:function(){
return "groupby(...)";
},next:function(){
while(_1e6(k,pk)===0){
fetch();
if(_1e5){
_1e5=false;
break;
}
}
pk=k;
return [k,{next:function(){
if(v==undefined){
fetch();
}
if(_1e6(k,pk)!==0){
throw self.StopIteration;
}
return eat();
}}];
}};
},groupby_as_array:function(_1e7,_1e8){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1e8=m.operator.identity;
}
_1e7=self.iter(_1e7);
var _1eb=[];
var _1ec=true;
var _1ed;
var _1ee=m.compare;
while(true){
try{
var _1ef=_1e7.next();
var key=_1e8(_1ef);
}
catch(e){
if(e==self.StopIteration){
break;
}
throw e;
}
if(_1ec||_1ee(key,_1ed)!==0){
var _1f1=[];
_1eb.push([key,_1f1]);
}
_1f1.push(_1ef);
_1ec=false;
_1ed=key;
}
return _1eb;
},arrayLikeIter:function(_1f2){
var i=0;
return {repr:function(){
return "arrayLikeIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
if(i>=_1f2.length){
throw MochiKit.Iter.StopIteration;
}
return _1f2[i++];
}};
},hasIterateNext:function(_1f4){
return (_1f4&&typeof (_1f4.iterateNext)=="function");
},iterateNextIter:function(_1f5){
return {repr:function(){
return "iterateNextIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
var rval=_1f5.iterateNext();
if(rval===null||rval===undefined){
throw MochiKit.Iter.StopIteration;
}
return rval;
}};
}});
MochiKit.Iter.EXPORT_OK=["iteratorRegistry","arrayLikeIter","hasIterateNext","iterateNextIter"];
MochiKit.Iter.EXPORT=["StopIteration","registerIteratorFactory","iter","count","cycle","repeat","next","izip","ifilter","ifilterfalse","islice","imap","applymap","chain","takewhile","dropwhile","tee","list","reduce","range","sum","exhaust","forEach","every","sorted","reversed","some","iextend","groupby","groupby_as_array"];
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
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Iter.__new__();
if(MochiKit.__export__){
reduce=MochiKit.Iter.reduce;
}
MochiKit.Base._exportSymbols(this,MochiKit.Iter);
MochiKit.Base._deps("Logging",["Base"]);
MochiKit.Logging.NAME="MochiKit.Logging";
MochiKit.Logging.VERSION="1.5";
MochiKit.Logging.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Logging.toString=function(){
return this.__repr__();
};
MochiKit.Logging.EXPORT=["LogLevel","LogMessage","Logger","alertListener","logger","log","logError","logDebug","logFatal","logWarning"];
MochiKit.Logging.EXPORT_OK=["logLevelAtLeast","isLogMessage","compareLogMessage"];
MochiKit.Logging.LogMessage=function(num,_1f9,info){
this.num=num;
this.level=_1f9;
this.info=info;
this.timestamp=new Date();
};
MochiKit.Logging.LogMessage.prototype={repr:function(){
var m=MochiKit.Base;
return "LogMessage("+m.map(m.repr,[this.num,this.level,this.info]).join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Logging,{logLevelAtLeast:function(_1fc){
var self=MochiKit.Logging;
if(typeof (_1fc)=="string"){
_1fc=self.LogLevel[_1fc];
}
return function(msg){
var _1ff=msg.level;
if(typeof (_1ff)=="string"){
_1ff=self.LogLevel[_1ff];
}
return _1ff>=_1fc;
};
},isLogMessage:function(){
var _200=MochiKit.Logging.LogMessage;
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof _200)){
return false;
}
}
return true;
},compareLogMessage:function(a,b){
return MochiKit.Base.compare([a.level,a.info],[b.level,b.info]);
},alertListener:function(msg){
alert("num: "+msg.num+"\nlevel: "+msg.level+"\ninfo: "+msg.info.join(" "));
}});
MochiKit.Logging.Logger=function(_205){
this.counter=0;
if(typeof (_205)=="undefined"||_205===null){
_205=-1;
}
this.maxSize=_205;
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
},addListener:function(_20a,_20b,_20c){
if(typeof (_20b)=="string"){
_20b=MochiKit.Logging.logLevelAtLeast(_20b);
}
var _20d=[_20b,_20c];
_20d.ident=_20a;
this.listeners[_20a]=_20d;
},removeListener:function(_20e){
delete this.listeners[_20e];
},baseLog:function(_20f,_210){
if(typeof (_20f)=="number"){
if(_20f>=MochiKit.Logging.LogLevel.FATAL){
_20f="FATAL";
}else{
if(_20f>=MochiKit.Logging.LogLevel.ERROR){
_20f="ERROR";
}else{
if(_20f>=MochiKit.Logging.LogLevel.WARNING){
_20f="WARNING";
}else{
if(_20f>=MochiKit.Logging.LogLevel.INFO){
_20f="INFO";
}else{
_20f="DEBUG";
}
}
}
}
}
var msg=new MochiKit.Logging.LogMessage(this.counter,_20f,MochiKit.Base.extend(null,arguments,1));
this._messages.push(msg);
this.dispatchListeners(msg);
if(this.useNativeConsole){
this.logToConsole(msg.level+": "+msg.info.join(" "));
}
this.counter+=1;
while(this.maxSize>=0&&this._messages.length>this.maxSize){
this._messages.shift();
}
},getMessages:function(_212){
var _213=0;
if(!(typeof (_212)=="undefined"||_212===null)){
_213=Math.max(0,this._messages.length-_212);
}
return this._messages.slice(_213);
},getMessageText:function(_214){
if(typeof (_214)=="undefined"||_214===null){
_214=30;
}
var _215=this.getMessages(_214);
if(_215.length){
var lst=map(function(m){
return "\n  ["+m.num+"] "+m.level+": "+m.info.join(" ");
},_215);
lst.unshift("LAST "+_215.length+" MESSAGES:");
return lst.join("");
}
return "";
},debuggingBookmarklet:function(_218){
if(typeof (MochiKit.LoggingPane)=="undefined"){
alert(this.getMessageText());
}else{
MochiKit.LoggingPane.createLoggingPane(_218||false);
}
}};
MochiKit.Logging.__new__=function(){
this.LogLevel={ERROR:40,FATAL:50,WARNING:30,INFO:20,DEBUG:10};
var m=MochiKit.Base;
m.registerComparator("LogMessage",this.isLogMessage,this.compareLogMessage);
var _21a=m.partial;
var _21b=this.Logger;
var _21c=_21b.prototype.baseLog;
m.update(this.Logger.prototype,{debug:_21a(_21c,"DEBUG"),log:_21a(_21c,"INFO"),error:_21a(_21c,"ERROR"),fatal:_21a(_21c,"FATAL"),warning:_21a(_21c,"WARNING")});
var self=this;
var _21e=function(name){
return function(){
self.logger[name].apply(self.logger,arguments);
};
};
this.log=_21e("log");
this.logError=_21e("error");
this.logDebug=_21e("debug");
this.logFatal=_21e("fatal");
this.logWarning=_21e("warning");
this.logger=new _21b();
this.logger.useNativeConsole=true;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
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
MochiKit.Base._deps("DateTime",["Base"]);
MochiKit.DateTime.NAME="MochiKit.DateTime";
MochiKit.DateTime.VERSION="1.5";
MochiKit.DateTime.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.DateTime.toString=function(){
return this.__repr__();
};
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
var year,_227,day,hour,min,sec,msec;
year=parseInt(res[1],10);
if(typeof (res[2])=="undefined"||res[2]===""){
return new Date(year);
}
_227=parseInt(res[2],10)-1;
day=parseInt(res[3],10);
if(typeof (res[4])=="undefined"||res[4]===""){
return new Date(year,_227,day);
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
return new Date(year,_227,day,hour,min,sec,msec);
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
return new Date(Date.UTC(year,_227,day,hour,min,sec,msec)-ofs);
};
MochiKit.DateTime.toISOTime=function(date,_22f){
if(typeof (date)=="undefined"||date===null){
return null;
}
var hh=date.getHours();
var mm=date.getMinutes();
var ss=date.getSeconds();
var lst=[((_22f&&(hh<10))?"0"+hh:hh),((mm<10)?"0"+mm:mm),((ss<10)?"0"+ss:ss)];
return lst.join(":");
};
MochiKit.DateTime.toISOTimestamp=function(date,_235){
if(typeof (date)=="undefined"||date===null){
return null;
}
var sep=_235?"T":" ";
var foot=_235?"Z":"";
if(_235){
date=new Date(date.getTime()+(date.getTimezoneOffset()*60000));
}
return MochiKit.DateTime.toISODate(date)+sep+MochiKit.DateTime.toISOTime(date,_235)+foot;
};
MochiKit.DateTime.toISODate=function(date){
if(typeof (date)=="undefined"||date===null){
return null;
}
var _239=MochiKit.DateTime._padTwo;
var _23a=MochiKit.DateTime._padFour;
return [_23a(date.getFullYear()),_239(date.getMonth()+1),_239(date.getDate())].join("-");
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
var _240=MochiKit.DateTime._padTwo;
return [_240(d.getMonth()+1),_240(d.getDate()),d.getFullYear()].join("/");
};
MochiKit.DateTime.toAmericanDate=function(d){
if(typeof (d)=="undefined"||d===null){
return null;
}
return [d.getMonth()+1,d.getDate(),d.getFullYear()].join("/");
};
MochiKit.DateTime.EXPORT=["isoDate","isoTimestamp","toISOTime","toISOTimestamp","toISODate","americanDate","toPaddedAmericanDate","toAmericanDate"];
MochiKit.DateTime.EXPORT_OK=[];
MochiKit.DateTime.EXPORT_TAGS={":common":MochiKit.DateTime.EXPORT,":all":MochiKit.DateTime.EXPORT};
MochiKit.DateTime.__new__=function(){
var base=this.NAME+".";
for(var k in this){
var o=this[k];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+k;
}
catch(e){
}
}
}
};
MochiKit.DateTime.__new__();
if(typeof (MochiKit.Base)!="undefined"){
MochiKit.Base._exportSymbols(this,MochiKit.DateTime);
}else{
(function(_245,_246){
if((typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined")||(MochiKit.__export__===false)){
var all=_246.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_245[all[i]]=_246[all[i]];
}
}
})(this,MochiKit.DateTime);
}
MochiKit.Base._deps("Format",["Base"]);
MochiKit.Format.NAME="MochiKit.Format";
MochiKit.Format.VERSION="1.5";
MochiKit.Format.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Format.toString=function(){
return this.__repr__();
};
MochiKit.Format._numberFormatter=function(_249,_24a,_24b,_24c,_24d,_24e,_24f,_250,_251){
return function(num){
num=parseFloat(num);
if(typeof (num)=="undefined"||num===null||isNaN(num)){
return _249;
}
var _253=_24a;
var _254=_24b;
if(num<0){
num=-num;
}else{
_253=_253.replace(/-/,"");
}
var me=arguments.callee;
var fmt=MochiKit.Format.formatLocale(_24c);
if(_24d){
num=num*100;
_254=fmt.percent+_254;
}
num=MochiKit.Format.roundToFixed(num,_24e);
var _257=num.split(/\./);
var _258=_257[0];
var frac=(_257.length==1)?"":_257[1];
var res="";
while(_258.length<_24f){
_258="0"+_258;
}
if(_250){
while(_258.length>_250){
var i=_258.length-_250;
res=fmt.separator+_258.substring(i,_258.length)+res;
_258=_258.substring(0,i);
}
}
res=_258+res;
if(_24e>0){
while(frac.length<_251){
frac=frac+"0";
}
res=res+fmt.decimal+frac;
}
return _253+res+_254;
};
};
MochiKit.Format.numberFormatter=function(_25c,_25d,_25e){
if(typeof (_25d)=="undefined"){
_25d="";
}
var _25f=_25c.match(/((?:[0#]+,)?[0#]+)(?:\.([0#]+))?(%)?/);
if(!_25f){
throw TypeError("Invalid pattern");
}
var _260=_25c.substr(0,_25f.index);
var _261=_25c.substr(_25f.index+_25f[0].length);
if(_260.search(/-/)==-1){
_260=_260+"-";
}
var _262=_25f[1];
var frac=(typeof (_25f[2])=="string"&&_25f[2]!="")?_25f[2]:"";
var _264=(typeof (_25f[3])=="string"&&_25f[3]!="");
var tmp=_262.split(/,/);
var _266;
if(typeof (_25e)=="undefined"){
_25e="default";
}
if(tmp.length==1){
_266=null;
}else{
_266=tmp[1].length;
}
var _267=_262.length-_262.replace(/0/g,"").length;
var _268=frac.length-frac.replace(/0/g,"").length;
var _269=frac.length;
var rval=MochiKit.Format._numberFormatter(_25d,_260,_261,_25e,_264,_269,_267,_266,_268);
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
MochiKit.Format.formatLocale=function(_26e){
if(typeof (_26e)=="undefined"||_26e===null){
_26e="default";
}
if(typeof (_26e)=="string"){
var rval=MochiKit.Format.LOCALE[_26e];
if(typeof (rval)=="string"){
rval=arguments.callee(rval);
MochiKit.Format.LOCALE[_26e]=rval;
}
return rval;
}else{
return _26e;
}
};
MochiKit.Format.twoDigitAverage=function(_270,_271){
if(_271){
var res=_270/_271;
if(!isNaN(res)){
return MochiKit.Format.twoDigitFloat(res);
}
}
return "0";
};
MochiKit.Format.twoDigitFloat=function(_273){
var res=roundToFixed(_273,2);
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
MochiKit.Format.lstrip=function(str,_276){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_276){
return str.replace(/^\s+/,"");
}else{
return str.replace(new RegExp("^["+_276+"]+"),"");
}
};
MochiKit.Format.rstrip=function(str,_278){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_278){
return str.replace(/\s+$/,"");
}else{
return str.replace(new RegExp("["+_278+"]+$"),"");
}
};
MochiKit.Format.strip=function(str,_27a){
var self=MochiKit.Format;
return self.rstrip(self.lstrip(str,_27a),_27a);
};
MochiKit.Format.truncToFixed=function(_27c,_27d){
var res=Math.floor(_27c).toFixed(0);
if(_27c<0){
res=Math.ceil(_27c).toFixed(0);
if(res.charAt(0)!="-"&&_27d>0){
res="-"+res;
}
}
if(res.indexOf("e")<0&&_27d>0){
var tail=_27c.toString();
if(tail.indexOf("e")>0){
tail=".";
}else{
if(tail.indexOf(".")<0){
tail=".";
}else{
tail=tail.substring(tail.indexOf("."));
}
}
if(tail.length-1>_27d){
tail=tail.substring(0,_27d+1);
}
while(tail.length-1<_27d){
tail+="0";
}
res+=tail;
}
return res;
};
MochiKit.Format.roundToFixed=function(_280,_281){
var _282=Math.abs(_280)+0.5*Math.pow(10,-_281);
var res=MochiKit.Format.truncToFixed(_282,_281);
if(_280<0){
res="-"+res;
}
return res;
};
MochiKit.Format.percentFormat=function(_284){
return MochiKit.Format.twoDigitFloat(100*_284)+"%";
};
MochiKit.Format.EXPORT=["truncToFixed","roundToFixed","numberFormatter","formatLocale","twoDigitAverage","twoDigitFloat","percentFormat","lstrip","rstrip","strip"];
MochiKit.Format.LOCALE={en_US:{separator:",",decimal:".",percent:"%"},de_DE:{separator:".",decimal:",",percent:"%"},pt_BR:{separator:".",decimal:",",percent:"%"},fr_FR:{separator:" ",decimal:",",percent:"%"},"default":"en_US"};
MochiKit.Format.EXPORT_OK=[];
MochiKit.Format.EXPORT_TAGS={":all":MochiKit.Format.EXPORT,":common":MochiKit.Format.EXPORT};
MochiKit.Format.__new__=function(){
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
for(k in this){
o=this[k];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+k;
}
catch(e){
}
}
}
};
MochiKit.Format.__new__();
if(typeof (MochiKit.Base)!="undefined"){
MochiKit.Base._exportSymbols(this,MochiKit.Format);
}else{
(function(_289,_28a){
if((typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined")||(MochiKit.__export__===false)){
var all=_28a.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_289[all[i]]=_28a[all[i]];
}
}
})(this,MochiKit.Format);
}
MochiKit.Base._deps("Async",["Base"]);
MochiKit.Async.NAME="MochiKit.Async";
MochiKit.Async.VERSION="1.5";
MochiKit.Async.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Async.toString=function(){
return this.__repr__();
};
MochiKit.Async.Deferred=function(_28d){
this.chain=[];
this.id=this._nextId();
this.fired=-1;
this.paused=0;
this.results=[null,null];
this.canceller=_28d;
this.silentlyCancelled=false;
this.chained=false;
};
MochiKit.Async.Deferred.prototype={repr:function(){
var _28e;
if(this.fired==-1){
_28e="unfired";
}else{
if(this.fired===0){
_28e="success";
}else{
_28e="error";
}
}
return "Deferred("+this.id+", "+_28e+")";
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
var _299=this.chain;
var _29a=this.fired;
var res=this.results[_29a];
var self=this;
var cb=null;
while(_299.length>0&&this.paused===0){
var pair=_299.shift();
var f=pair[_29a];
if(f===null){
continue;
}
try{
res=f(res);
_29a=((res instanceof Error)?1:0);
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
_29a=1;
if(!(err instanceof Error)){
err=new MochiKit.Async.GenericError(err);
}
res=err;
}
}
this.fired=_29a;
this.results[_29a]=res;
if(cb&&this.paused){
res.addBoth(cb);
res.chained=true;
}
}};
MochiKit.Base.update(MochiKit.Async,{evalJSONRequest:function(req){
return MochiKit.Base.evalJSON(req.responseText);
},succeed:function(_2a2){
var d=new MochiKit.Async.Deferred();
d.callback.apply(d,arguments);
return d;
},fail:function(_2a4){
var d=new MochiKit.Async.Deferred();
d.errback.apply(d,arguments);
return d;
},getXMLHttpRequest:function(){
var self=arguments.callee;
if(!self.XMLHttpRequest){
var _2a7=[function(){
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
for(var i=0;i<_2a7.length;i++){
var func=_2a7[i];
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
var _2ac=null;
try{
_2ac=this.status;
if(!_2ac&&m.isNotEmpty(this.responseText)){
_2ac=304;
}
}
catch(e){
}
if(_2ac==200||_2ac==201||_2ac==204||_2ac==304||_2ac==1223){
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
},sendXMLHttpRequest:function(req,_2b0){
if(typeof (_2b0)=="undefined"||_2b0===null){
_2b0="";
}
var m=MochiKit.Base;
var self=MochiKit.Async;
var d=new self.Deferred(m.partial(self._xhr_canceller,req));
try{
req.onreadystatechange=m.bind(self._xhr_onreadystatechange,req,d);
req.send(_2b0);
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
var _2bd=opts.headers;
if(!m.isArrayLike(_2bd)){
_2bd=m.items(_2bd);
}
for(var i=0;i<_2bd.length;i++){
var _2bf=_2bd[i];
var name=_2bf[0];
var _2c1=_2bf[1];
req.setRequestHeader(name,_2c1);
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
},wait:function(_2ca,_2cb){
var d=new MochiKit.Async.Deferred();
var m=MochiKit.Base;
if(typeof (_2cb)!="undefined"){
d.addCallback(function(){
return _2cb;
});
}
var _2ce=setTimeout(m.bind("callback",d),Math.floor(_2ca*1000));
d.canceller=function(){
try{
clearTimeout(_2ce);
}
catch(e){
}
};
return d;
},callLater:function(_2cf,func){
var m=MochiKit.Base;
var _2d2=m.partial.apply(m,m.extend(null,arguments,1));
return MochiKit.Async.wait(_2cf).addCallback(function(res){
return _2d2();
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
var _2d5;
if(this.locked){
_2d5="locked, "+this.waiting.length+" waiting";
}else{
_2d5="unlocked";
}
return "DeferredLock("+this.id+", "+_2d5+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Async.DeferredList=function(list,_2d7,_2d8,_2d9,_2da){
MochiKit.Async.Deferred.apply(this,[_2da]);
this.list=list;
var _2db=[];
this.resultList=_2db;
this.finishedCount=0;
this.fireOnOneCallback=_2d7;
this.fireOnOneErrback=_2d8;
this.consumeErrors=_2d9;
var cb=MochiKit.Base.bind(this._cbDeferred,this);
for(var i=0;i<list.length;i++){
var d=list[i];
_2db.push(undefined);
d.addCallback(cb,i,true);
d.addErrback(cb,i,false);
}
if(list.length===0&&!_2d7){
this.callback(this.resultList);
}
};
MochiKit.Async.DeferredList.prototype=new MochiKit.Async.Deferred();
MochiKit.Async.DeferredList.prototype._cbDeferred=function(_2df,_2e0,_2e1){
this.resultList[_2df]=[_2e0,_2e1];
this.finishedCount+=1;
if(this.fired==-1){
if(_2e0&&this.fireOnOneCallback){
this.callback([_2df,_2e1]);
}else{
if(!_2e0&&this.fireOnOneErrback){
this.errback(_2e1);
}else{
if(this.finishedCount==this.list.length){
this.callback(this.resultList);
}
}
}
}
if(!_2e0&&this.consumeErrors){
_2e1=null;
}
return _2e1;
};
MochiKit.Async.gatherResults=function(_2e2){
var d=new MochiKit.Async.DeferredList(_2e2,false,true,false);
d.addCallback(function(_2e4){
var ret=[];
for(var i=0;i<_2e4.length;i++){
ret.push(_2e4[i][1]);
}
return ret;
});
return d;
};
MochiKit.Async.maybeDeferred=function(func){
var self=MochiKit.Async;
var _2e9;
try{
var r=func.apply(null,MochiKit.Base.extend([],arguments,1));
if(r instanceof self.Deferred){
_2e9=r;
}else{
if(r instanceof Error){
_2e9=self.fail(r);
}else{
_2e9=self.succeed(r);
}
}
}
catch(e){
_2e9=self.fail(e);
}
return _2e9;
};
MochiKit.Async.EXPORT=["AlreadyCalledError","CancelledError","BrowserComplianceError","GenericError","XMLHttpRequestError","Deferred","succeed","fail","getXMLHttpRequest","doSimpleXMLHttpRequest","loadJSONDoc","wait","callLater","sendXMLHttpRequest","DeferredLock","DeferredList","gatherResults","maybeDeferred","doXHR"];
MochiKit.Async.EXPORT_OK=["evalJSONRequest"];
MochiKit.Async.__new__=function(){
var m=MochiKit.Base;
var ne=m.partial(m._newNamedError,this);
ne("AlreadyCalledError",function(_2ed){
this.deferred=_2ed;
});
ne("CancelledError",function(_2ee){
this.deferred=_2ee;
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
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Async.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Async);
MochiKit.Base._deps("DOM",["Base"]);
MochiKit.DOM.NAME="MochiKit.DOM";
MochiKit.DOM.VERSION="1.5";
MochiKit.DOM.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.DOM.toString=function(){
return this.__repr__();
};
MochiKit.DOM.EXPORT=["removeEmptyTextNodes","formContents","currentWindow","currentDocument","withWindow","withDocument","registerDOMConverter","coerceToDOM","createDOM","createDOMFunc","isChildNode","getNodeAttribute","removeNodeAttribute","setNodeAttribute","updateNodeAttributes","appendChildNodes","insertSiblingNodesAfter","insertSiblingNodesBefore","replaceChildNodes","removeElement","swapDOM","BUTTON","TT","PRE","H1","H2","H3","H4","H5","H6","BR","CANVAS","HR","LABEL","TEXTAREA","FORM","STRONG","SELECT","OPTION","OPTGROUP","LEGEND","FIELDSET","P","UL","OL","LI","DL","DT","DD","TD","TR","THEAD","TBODY","TFOOT","TABLE","TH","INPUT","SPAN","A","DIV","IMG","getElement","$","getElementsByTagAndClassName","addToCallStack","addLoadEvent","focusOnLoad","setElementClass","toggleElementClass","addElementClass","removeElementClass","swapElementClass","hasElementClass","computedStyle","escapeHTML","toHTML","emitHTML","scrapeText","getFirstParentByTagAndClassName","getFirstElementByTagAndClassName"];
MochiKit.DOM.EXPORT_OK=["domConverters"];
MochiKit.DOM.DEPRECATED=[["computedStyle","MochiKit.Style.getStyle","1.4"],["elementDimensions","MochiKit.Style.getElementDimensions","1.4"],["elementPosition","MochiKit.Style.getElementPosition","1.4"],["getViewportDimensions","MochiKit.Style.getViewportDimensions","1.4"],["hideElement","MochiKit.Style.hideElement","1.4"],["makeClipping","MochiKit.Style.makeClipping","1.4.1"],["makePositioned","MochiKit.Style.makePositioned","1.4.1"],["setElementDimensions","MochiKit.Style.setElementDimensions","1.4"],["setElementPosition","MochiKit.Style.setElementPosition","1.4"],["setDisplayForElement","MochiKit.Style.setDisplayForElement","1.4"],["setOpacity","MochiKit.Style.setOpacity","1.4"],["showElement","MochiKit.Style.showElement","1.4"],["undoClipping","MochiKit.Style.undoClipping","1.4.1"],["undoPositioned","MochiKit.Style.undoPositioned","1.4.1"],["Coordinates","MochiKit.Style.Coordinates","1.4"],["Dimensions","MochiKit.Style.Dimensions","1.4"]];
MochiKit.Base.update(MochiKit.DOM,{currentWindow:function(){
return MochiKit.DOM._window;
},currentDocument:function(){
return MochiKit.DOM._document;
},withWindow:function(win,func){
var self=MochiKit.DOM;
var _2f6=self._document;
var _2f7=self._window;
var rval;
try{
self._window=win;
self._document=win.document;
rval=func();
}
catch(e){
self._window=_2f7;
self._document=_2f6;
throw e;
}
self._window=_2f7;
self._document=_2f6;
return rval;
},formContents:function(elem){
var _2fa=[];
var _2fb=[];
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
var _300=elem.tagName.toUpperCase();
if(_300==="INPUT"&&(elem.type=="radio"||elem.type=="checkbox")&&!elem.checked){
return null;
}
if(_300==="SELECT"){
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
_2fa.push(name);
_2fb.push(v);
return null;
}
_2fa.push(name);
_2fb.push("");
return null;
}else{
var opts=elem.options;
if(!opts.length){
_2fa.push(name);
_2fb.push("");
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
_2fa.push(name);
_2fb.push(v);
}
return null;
}
}
if(_300==="FORM"||_300==="P"||_300==="SPAN"||_300==="DIV"){
return elem.childNodes;
}
_2fa.push(name);
_2fb.push(elem.value||"");
return null;
}
return elem.childNodes;
});
return [_2fa,_2fb];
},withDocument:function(doc,func){
var self=MochiKit.DOM;
var _309=self._document;
var rval;
try{
self._document=doc;
rval=func();
}
catch(e){
self._document=_309;
throw e;
}
self._document=_309;
return rval;
},registerDOMConverter:function(name,_30c,wrap,_30e){
MochiKit.DOM.domConverters.register(name,_30c,wrap,_30e);
},coerceToDOM:function(node,ctx){
var m=MochiKit.Base;
var im=MochiKit.Iter;
var self=MochiKit.DOM;
if(im){
var iter=im.iter;
var _315=im.repeat;
var map=m.map;
}
var _317=self.domConverters;
var _318=arguments.callee;
var _319=m.NotFound;
while(true){
if(typeof (node)=="undefined"||node===null){
return null;
}
if(typeof (node)=="function"&&typeof (node.length)=="number"&&!(node instanceof Function)){
node=im.list(node);
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
var _31a=null;
try{
_31a=iter(node);
}
catch(e){
}
if(_31a){
return map(_318,_31a,_315(ctx));
}
}
try{
node=_317.match(node,ctx);
continue;
}
catch(e){
if(e!=_319){
throw e;
}
}
return self._document.createTextNode(node.toString());
}
return undefined;
},isChildNode:function(node,_31c){
var self=MochiKit.DOM;
if(typeof (node)=="string"){
node=self.getElement(node);
}
if(typeof (_31c)=="string"){
_31c=self.getElement(_31c);
}
if(typeof (node)=="undefined"||node===null){
return false;
}
while(node!=null&&node!==self._document){
if(node===_31c){
return true;
}
node=node.parentNode;
}
return false;
},setNodeAttribute:function(node,attr,_320){
var o={};
o[attr]=_320;
try{
return MochiKit.DOM.updateNodeAttributes(node,o);
}
catch(e){
}
return null;
},getNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _325=self.attributeArray.renames[attr];
var _326=self.attributeArray.ignoreAttr[attr];
node=self.getElement(node);
try{
if(_325){
return node[_325];
}
var _327=node.getAttribute(attr);
if(_327!=_326){
return _327;
}
}
catch(e){
}
return null;
},removeNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _32b=self.attributeArray.renames[attr];
node=self.getElement(node);
try{
if(_32b){
return node[_32b];
}
return node.removeAttribute(attr);
}
catch(e){
}
return null;
},updateNodeAttributes:function(node,_32d){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
if(_32d){
var _330=MochiKit.Base.updatetree;
if(self.attributeArray.compliant){
for(var k in _32d){
var v=_32d[k];
if(typeof (v)=="object"&&typeof (elem[k])=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_330(elem[k],v);
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
var _333=self.attributeArray.renames;
for(var k in _32d){
v=_32d[k];
var _334=_333[k];
if(k=="style"&&typeof (v)=="string"){
elem.style.cssText=v;
}else{
if(typeof (_334)=="string"){
elem[_334]=v;
}else{
if(typeof (elem[k])=="object"&&typeof (v)=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_330(elem[k],v);
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
var _338=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _339=MochiKit.Base.concat;
while(_338.length){
var n=_338.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
elem.appendChild(n);
}else{
_338=_339(n,_338);
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
var _33e=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _33f=elem.parentNode;
var _340=MochiKit.Base.concat;
while(_33e.length){
var n=_33e.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
_33f.insertBefore(n,elem);
}else{
_33e=_340(n,_33e);
}
}
}
return _33f;
},insertSiblingNodesAfter:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _345=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
if(elem.nextSibling){
return self.insertSiblingNodesBefore(elem.nextSibling,_345);
}else{
return self.appendChildNodes(elem.parentNode,_345);
}
},replaceChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
arguments[0]=elem;
}
var _349;
while((_349=elem.firstChild)){
elem.removeChild(_349);
}
if(arguments.length<2){
return elem;
}else{
return self.appendChildNodes.apply(this,arguments);
}
},createDOM:function(name,_34b){
var elem;
var self=MochiKit.DOM;
var m=MochiKit.Base;
if(typeof (_34b)=="string"||typeof (_34b)=="number"){
var args=m.extend([name,null],arguments,1);
return arguments.callee.apply(this,args);
}
if(typeof (name)=="string"){
var _350=self._xhtml;
if(_34b&&!self.attributeArray.compliant){
var _351="";
if("name" in _34b){
_351+=" name=\""+self.escapeHTML(_34b.name)+"\"";
}
if(name=="input"&&"type" in _34b){
_351+=" type=\""+self.escapeHTML(_34b.type)+"\"";
}
if(_351){
name="<"+name+_351+">";
_350=false;
}
}
var d=self._document;
if(_350&&d===document){
elem=d.createElementNS("http://www.w3.org/1999/xhtml",name);
}else{
elem=d.createElement(name);
}
}else{
elem=name;
}
if(_34b){
self.updateNodeAttributes(elem,_34b);
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
var e=self.coerceToDOM(self.getElement(elem));
e.parentNode.removeChild(e);
return e;
},swapDOM:function(dest,src){
var self=MochiKit.DOM;
dest=self.getElement(dest);
var _35a=dest.parentNode;
if(src){
src=self.coerceToDOM(self.getElement(src),_35a);
_35a.replaceChild(src,dest);
}else{
_35a.removeChild(dest);
}
return src;
},getElement:function(id){
var self=MochiKit.DOM;
if(arguments.length==1){
return ((typeof (id)=="string")?self._document.getElementById(id):id);
}else{
return MochiKit.Base.map(self.getElement,arguments);
}
},getElementsByTagAndClassName:function(_35d,_35e,_35f){
var self=MochiKit.DOM;
if(typeof (_35d)=="undefined"||_35d===null){
_35d="*";
}
if(typeof (_35f)=="undefined"||_35f===null){
_35f=self._document;
}
_35f=self.getElement(_35f);
if(_35f==null){
return [];
}
var _361=(_35f.getElementsByTagName(_35d)||self._document.all);
if(typeof (_35e)=="undefined"||_35e===null){
return MochiKit.Base.extend(null,_361);
}
var _362=[];
for(var i=0;i<_361.length;i++){
var _364=_361[i];
var cls=_364.className;
if(typeof (cls)!="string"){
cls=_364.getAttribute("class");
}
if(typeof (cls)=="string"){
var _366=cls.split(" ");
for(var j=0;j<_366.length;j++){
if(_366[j]==_35e){
_362.push(_364);
break;
}
}
}
}
return _362;
},_newCallStack:function(path,once){
var rval=function(){
var _36b=arguments.callee.callStack;
for(var i=0;i<_36b.length;i++){
if(_36b[i].apply(this,arguments)===false){
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
},addToCallStack:function(_36d,path,func,once){
var self=MochiKit.DOM;
var _372=_36d[path];
var _373=_372;
if(!(typeof (_372)=="function"&&typeof (_372.callStack)=="object"&&_372.callStack!==null)){
_373=self._newCallStack(path,once);
if(typeof (_372)=="function"){
_373.callStack.push(_372);
}
_36d[path]=_373;
}
_373.callStack.push(func);
},addLoadEvent:function(func){
var self=MochiKit.DOM;
self.addToCallStack(self._window,"onload",func,true);
},focusOnLoad:function(_376){
var self=MochiKit.DOM;
self.addLoadEvent(function(){
_376=self.getElement(_376);
if(_376){
_376.focus();
}
});
},setElementClass:function(_378,_379){
var self=MochiKit.DOM;
var obj=self.getElement(_378);
if(self.attributeArray.compliant){
obj.setAttribute("class",_379);
}else{
obj.setAttribute("className",_379);
}
},toggleElementClass:function(_37c){
var self=MochiKit.DOM;
for(var i=1;i<arguments.length;i++){
var obj=self.getElement(arguments[i]);
if(!self.addElementClass(obj,_37c)){
self.removeElementClass(obj,_37c);
}
}
},addElementClass:function(_380,_381){
var self=MochiKit.DOM;
var obj=self.getElement(_380);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
self.setElementClass(obj,_381);
return true;
}
if(cls==_381){
return false;
}
var _385=cls.split(" ");
for(var i=0;i<_385.length;i++){
if(_385[i]==_381){
return false;
}
}
self.setElementClass(obj,cls+" "+_381);
return true;
},removeElementClass:function(_387,_388){
var self=MochiKit.DOM;
var obj=self.getElement(_387);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
return false;
}
if(cls==_388){
self.setElementClass(obj,"");
return true;
}
var _38c=cls.split(" ");
for(var i=0;i<_38c.length;i++){
if(_38c[i]==_388){
_38c.splice(i,1);
self.setElementClass(obj,_38c.join(" "));
return true;
}
}
return false;
},swapElementClass:function(_38e,_38f,_390){
var obj=MochiKit.DOM.getElement(_38e);
var res=MochiKit.DOM.removeElementClass(obj,_38f);
if(res){
MochiKit.DOM.addElementClass(obj,_390);
}
return res;
},hasElementClass:function(_393,_394){
var obj=MochiKit.DOM.getElement(_393);
if(obj==null){
return false;
}
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"){
return false;
}
var _397=cls.split(" ");
for(var i=1;i<arguments.length;i++){
var good=false;
for(var j=0;j<_397.length;j++){
if(_397[j]==arguments[i]){
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
var _39f=[dom];
var self=MochiKit.DOM;
var _3a1=self.escapeHTML;
var _3a2=self.attributeArray;
while(_39f.length){
dom=_39f.pop();
if(typeof (dom)=="string"){
lst.push(dom);
}else{
if(dom.nodeType==1){
lst.push("<"+dom.tagName.toLowerCase());
var _3a3=[];
var _3a4=_3a2(dom);
for(var i=0;i<_3a4.length;i++){
var a=_3a4[i];
_3a3.push([" ",a.name,"=\"",_3a1(a.value),"\""]);
}
_3a3.sort();
for(i=0;i<_3a3.length;i++){
var _3a7=_3a3[i];
for(var j=0;j<_3a7.length;j++){
lst.push(_3a7[j]);
}
}
if(dom.hasChildNodes()){
lst.push(">");
_39f.push("</"+dom.tagName.toLowerCase()+">");
var _3a9=dom.childNodes;
for(i=_3a9.length-1;i>=0;i--){
_39f.push(_3a9[i]);
}
}else{
lst.push("/>");
}
}else{
if(dom.nodeType==3){
lst.push(_3a1(dom.nodeValue));
}
}
}
}
return lst;
},scrapeText:function(node,_3ab){
var rval=[];
(function(node){
var cn=node.childNodes;
if(cn){
for(var i=0;i<cn.length;i++){
arguments.callee.call(this,cn[i]);
}
}
var _3b0=node.nodeValue;
if(typeof (_3b0)=="string"){
rval.push(_3b0);
}
})(MochiKit.DOM.getElement(node));
if(_3ab){
return rval;
}else{
return rval.join("");
}
},removeEmptyTextNodes:function(_3b1){
_3b1=MochiKit.DOM.getElement(_3b1);
for(var i=0;i<_3b1.childNodes.length;i++){
var node=_3b1.childNodes[i];
if(node.nodeType==3&&!/\S/.test(node.nodeValue)){
node.parentNode.removeChild(node);
}
}
},getFirstElementByTagAndClassName:function(_3b4,_3b5,_3b6){
var self=MochiKit.DOM;
if(typeof (_3b4)=="undefined"||_3b4===null){
_3b4="*";
}
if(typeof (_3b6)=="undefined"||_3b6===null){
_3b6=self._document;
}
_3b6=self.getElement(_3b6);
if(_3b6==null){
return null;
}
var _3b8=(_3b6.getElementsByTagName(_3b4)||self._document.all);
if(_3b8.length<=0){
return null;
}else{
if(typeof (_3b5)=="undefined"||_3b5===null){
return _3b8[0];
}
}
for(var i=0;i<_3b8.length;i++){
var _3ba=_3b8[i];
var cls=_3ba.className;
if(typeof (cls)!="string"){
cls=_3ba.getAttribute("class");
}
if(typeof (cls)=="string"){
var _3bc=cls.split(" ");
for(var j=0;j<_3bc.length;j++){
if(_3bc[j]==_3b5){
return _3ba;
}
}
}
}
return null;
},getFirstParentByTagAndClassName:function(elem,_3bf,_3c0){
var self=MochiKit.DOM;
elem=self.getElement(elem);
if(typeof (_3bf)=="undefined"||_3bf===null){
_3bf="*";
}else{
_3bf=_3bf.toUpperCase();
}
if(typeof (_3c0)=="undefined"||_3c0===null){
_3c0=null;
}
if(elem){
elem=elem.parentNode;
}
while(elem&&elem.tagName){
var _3c2=elem.tagName.toUpperCase();
if((_3bf==="*"||_3bf==_3c2)&&(_3c0===null||self.hasElementClass(elem,_3c0))){
return elem;
}
elem=elem.parentNode;
}
return null;
},__new__:function(win){
var m=MochiKit.Base;
if(typeof (document)!="undefined"){
this._document=document;
var _3c5="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
this._xhtml=(document.documentElement&&document.createElementNS&&document.documentElement.namespaceURI===_3c5);
}else{
if(MochiKit.MockDOM){
this._document=MochiKit.MockDOM.document;
}
}
this._window=win;
this.domConverters=new m.AdapterRegistry();
var _3c6=this._document.createElement("span");
var _3c7;
if(_3c6&&_3c6.attributes&&_3c6.attributes.length>0){
var _3c8=m.filter;
_3c7=function(node){
return _3c8(_3c7.ignoreAttrFilter,node.attributes);
};
_3c7.ignoreAttr={};
var _3ca=_3c6.attributes;
var _3cb=_3c7.ignoreAttr;
for(var i=0;i<_3ca.length;i++){
var a=_3ca[i];
_3cb[a.name]=a.value;
}
_3c7.ignoreAttrFilter=function(a){
return (_3c7.ignoreAttr[a.name]!=a.value);
};
_3c7.compliant=false;
_3c7.renames={"class":"className","checked":"defaultChecked","usemap":"useMap","for":"htmlFor","readonly":"readOnly","colspan":"colSpan","bgcolor":"bgColor","cellspacing":"cellSpacing","cellpadding":"cellPadding"};
}else{
_3c7=function(node){
return node.attributes;
};
_3c7.compliant=true;
_3c7.ignoreAttr={};
_3c7.renames={};
}
this.attributeArray=_3c7;
var _3d0=function(_3d1,arr){
var _3d3=arr[0];
var _3d4=arr[1];
var _3d5=_3d4.split(".")[1];
var str="";
str+="if (!MochiKit."+_3d5+") { throw new Error(\"";
str+="This function has been deprecated and depends on MochiKit.";
str+=_3d5+".\");}";
str+="return "+_3d4+".apply(this, arguments);";
MochiKit[_3d1][_3d3]=new Function(str);
};
for(var i=0;i<MochiKit.DOM.DEPRECATED.length;i++){
_3d0("DOM",MochiKit.DOM.DEPRECATED[i]);
}
var _3d7=this.createDOMFunc;
this.UL=_3d7("ul");
this.OL=_3d7("ol");
this.LI=_3d7("li");
this.DL=_3d7("dl");
this.DT=_3d7("dt");
this.DD=_3d7("dd");
this.TD=_3d7("td");
this.TR=_3d7("tr");
this.TBODY=_3d7("tbody");
this.THEAD=_3d7("thead");
this.TFOOT=_3d7("tfoot");
this.TABLE=_3d7("table");
this.TH=_3d7("th");
this.INPUT=_3d7("input");
this.SPAN=_3d7("span");
this.A=_3d7("a");
this.DIV=_3d7("div");
this.IMG=_3d7("img");
this.BUTTON=_3d7("button");
this.TT=_3d7("tt");
this.PRE=_3d7("pre");
this.H1=_3d7("h1");
this.H2=_3d7("h2");
this.H3=_3d7("h3");
this.H4=_3d7("h4");
this.H5=_3d7("h5");
this.H6=_3d7("h6");
this.BR=_3d7("br");
this.HR=_3d7("hr");
this.LABEL=_3d7("label");
this.TEXTAREA=_3d7("textarea");
this.FORM=_3d7("form");
this.P=_3d7("p");
this.SELECT=_3d7("select");
this.OPTION=_3d7("option");
this.OPTGROUP=_3d7("optgroup");
this.LEGEND=_3d7("legend");
this.FIELDSET=_3d7("fieldset");
this.STRONG=_3d7("strong");
this.CANVAS=_3d7("canvas");
this.$=this.getElement;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
}});
MochiKit.DOM.__new__(((typeof (window)=="undefined")?this:window));
if(MochiKit.__export__){
withWindow=MochiKit.DOM.withWindow;
withDocument=MochiKit.DOM.withDocument;
}
MochiKit.Base._exportSymbols(this,MochiKit.DOM);
MochiKit.Base._deps("Selector",["Base","DOM","Iter"]);
MochiKit.Selector.NAME="MochiKit.Selector";
MochiKit.Selector.VERSION="1.5";
MochiKit.Selector.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Selector.toString=function(){
return this.__repr__();
};
MochiKit.Selector.EXPORT=["Selector","findChildElements","findDocElements","$$"];
MochiKit.Selector.EXPORT_OK=[];
MochiKit.Selector.Selector=function(_3d8){
this.params={classNames:[],pseudoClassNames:[]};
this.expression=_3d8.toString().replace(/(^\s+|\s+$)/g,"");
this.parseExpression();
this.compileMatcher();
};
MochiKit.Selector.Selector.prototype={__class__:MochiKit.Selector.Selector,parseExpression:function(){
function abort(_3d9){
throw "Parse error in selector: "+_3d9;
}
if(this.expression==""){
abort("empty expression");
}
var repr=MochiKit.Base.repr;
var _3db=this.params;
var expr=this.expression;
var _3dd,_3de,_3df,rest;
while(_3dd=expr.match(/^(.*)\[([a-z0-9_:-]+?)(?:([~\|!^$*]?=)(?:"([^"]*)"|([^\]\s]*)))?\]$/i)){
_3db.attributes=_3db.attributes||[];
_3db.attributes.push({name:_3dd[2],operator:_3dd[3],value:_3dd[4]||_3dd[5]||""});
expr=_3dd[1];
}
if(expr=="*"){
return this.params.wildcard=true;
}
while(_3dd=expr.match(/^([^a-z0-9_-])?([a-z0-9_-]+(?:\([^)]*\))?)(.*)/i)){
_3de=_3dd[1];
_3df=_3dd[2];
rest=_3dd[3];
switch(_3de){
case "#":
_3db.id=_3df;
break;
case ".":
_3db.classNames.push(_3df);
break;
case ":":
_3db.pseudoClassNames.push(_3df);
break;
case "":
case undefined:
_3db.tagName=_3df.toUpperCase();
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
var _3e2=this.params;
var _3e3=[];
var _3e4,i;
function childElements(_3e6){
return "MochiKit.Base.filter(function (node) { return node.nodeType == 1; }, "+_3e6+".childNodes)";
}
if(_3e2.wildcard){
_3e3.push("true");
}
if(_3e4=_3e2.id){
_3e3.push("element.id == "+repr(_3e4));
}
if(_3e4=_3e2.tagName){
_3e3.push("element.tagName.toUpperCase() == "+repr(_3e4));
}
if((_3e4=_3e2.classNames).length>0){
for(i=0;i<_3e4.length;i++){
_3e3.push("MochiKit.DOM.hasElementClass(element, "+repr(_3e4[i])+")");
}
}
if((_3e4=_3e2.pseudoClassNames).length>0){
for(i=0;i<_3e4.length;i++){
var _3e7=_3e4[i].match(/^([^(]+)(?:\((.*)\))?$/);
var _3e8=_3e7[1];
var _3e9=_3e7[2];
switch(_3e8){
case "root":
_3e3.push("element.nodeType == 9 || element === element.ownerDocument.documentElement");
break;
case "nth-child":
case "nth-last-child":
case "nth-of-type":
case "nth-last-of-type":
_3e7=_3e9.match(/^((?:(\d+)n\+)?(\d+)|odd|even)$/);
if(!_3e7){
throw "Invalid argument to pseudo element nth-child: "+_3e9;
}
var a,b;
if(_3e7[0]=="odd"){
a=2;
b=1;
}else{
if(_3e7[0]=="even"){
a=2;
b=0;
}else{
a=_3e7[2]&&parseInt(_3e7)||null;
b=parseInt(_3e7[3]);
}
}
_3e3.push("this.nthChild(element,"+a+","+b+","+!!_3e8.match("^nth-last")+","+!!_3e8.match("of-type$")+")");
break;
case "first-child":
_3e3.push("this.nthChild(element, null, 1)");
break;
case "last-child":
_3e3.push("this.nthChild(element, null, 1, true)");
break;
case "first-of-type":
_3e3.push("this.nthChild(element, null, 1, false, true)");
break;
case "last-of-type":
_3e3.push("this.nthChild(element, null, 1, true, true)");
break;
case "only-child":
_3e3.push(childElements("element.parentNode")+".length == 1");
break;
case "only-of-type":
_3e3.push("MochiKit.Base.filter(function (node) { return node.tagName == element.tagName; }, "+childElements("element.parentNode")+").length == 1");
break;
case "empty":
_3e3.push("element.childNodes.length == 0");
break;
case "enabled":
_3e3.push("(this.isUIElement(element) && element.disabled === false)");
break;
case "disabled":
_3e3.push("(this.isUIElement(element) && element.disabled === true)");
break;
case "checked":
_3e3.push("(this.isUIElement(element) && element.checked === true)");
break;
case "not":
var _3ec=new MochiKit.Selector.Selector(_3e9);
_3e3.push("!( "+_3ec.buildMatchExpression()+")");
break;
}
}
}
if(_3e4=_3e2.attributes){
MochiKit.Base.map(function(_3ed){
var _3ee="MochiKit.DOM.getNodeAttribute(element, "+repr(_3ed.name)+")";
var _3ef=function(_3f0){
return _3ee+".split("+repr(_3f0)+")";
};
_3e3.push(_3ee+" != null");
switch(_3ed.operator){
case "=":
_3e3.push(_3ee+" == "+repr(_3ed.value));
break;
case "~=":
_3e3.push("MochiKit.Base.findValue("+_3ef(" ")+", "+repr(_3ed.value)+") > -1");
break;
case "^=":
_3e3.push(_3ee+".substring(0, "+_3ed.value.length+") == "+repr(_3ed.value));
break;
case "$=":
_3e3.push(_3ee+".substring("+_3ee+".length - "+_3ed.value.length+") == "+repr(_3ed.value));
break;
case "*=":
_3e3.push(_3ee+".match("+repr(_3ed.value)+")");
break;
case "|=":
_3e3.push(_3ef("-")+"[0].toUpperCase() == "+repr(_3ed.value.toUpperCase()));
break;
case "!=":
_3e3.push(_3ee+" != "+repr(_3ed.value));
break;
case "":
case undefined:
break;
default:
throw "Unknown operator "+_3ed.operator+" in selector";
}
},_3e4);
}
return _3e3.join(" && ");
},compileMatcher:function(){
var code="return (!element.tagName) ? false : "+this.buildMatchExpression()+";";
this.match=new Function("element",code);
},nthChild:function(_3f2,a,b,_3f5,_3f6){
var _3f7=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_3f2.parentNode.childNodes);
if(_3f6){
_3f7=MochiKit.Base.filter(function(node){
return node.tagName==_3f2.tagName;
},_3f7);
}
if(_3f5){
_3f7=MochiKit.Iter.reversed(_3f7);
}
if(a){
var _3fa=MochiKit.Base.findIdentical(_3f7,_3f2);
return ((_3fa+1-b)/a)%1==0;
}else{
return b==MochiKit.Base.findIdentical(_3f7,_3f2)+1;
}
},isUIElement:function(_3fb){
return MochiKit.Base.findValue(["input","button","select","option","textarea","object"],_3fb.tagName.toLowerCase())>-1;
},findElements:function(_3fc,axis){
var _3fe;
if(axis==undefined){
axis="";
}
function inScope(_3ff,_400){
if(axis==""){
return MochiKit.DOM.isChildNode(_3ff,_400);
}else{
if(axis==">"){
return _3ff.parentNode===_400;
}else{
if(axis=="+"){
return _3ff===nextSiblingElement(_400);
}else{
if(axis=="~"){
var _401=_400;
while(_401=nextSiblingElement(_401)){
if(_3ff===_401){
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
if(_3fe=MochiKit.DOM.getElement(this.params.id)){
if(this.match(_3fe)){
if(!_3fc||inScope(_3fe,_3fc)){
return [_3fe];
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
_3fc=(_3fc||MochiKit.DOM.currentDocument()).getElementsByTagName(this.params.tagName||"*");
}else{
if(axis==">"){
if(!_3fc){
throw "> combinator not allowed without preceeding expression";
}
_3fc=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_3fc.childNodes);
}else{
if(axis=="+"){
if(!_3fc){
throw "+ combinator not allowed without preceeding expression";
}
_3fc=nextSiblingElement(_3fc)&&[nextSiblingElement(_3fc)];
}else{
if(axis=="~"){
if(!_3fc){
throw "~ combinator not allowed without preceeding expression";
}
var _404=[];
while(nextSiblingElement(_3fc)){
_3fc=nextSiblingElement(_3fc);
_404.push(_3fc);
}
_3fc=_404;
}
}
}
}
if(!_3fc){
return [];
}
var _405=MochiKit.Base.filter(MochiKit.Base.bind(function(_406){
return this.match(_406);
},this),_3fc);
return _405;
},repr:function(){
return "Selector("+this.expression+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Selector,{findChildElements:function(_407,_408){
var uniq=function(arr){
var res=[];
for(var i=0;i<arr.length;i++){
if(MochiKit.Base.findIdentical(res,arr[i])<0){
res.push(arr[i]);
}
}
return res;
};
return MochiKit.Base.flattenArray(MochiKit.Base.map(function(_40d){
var _40e="";
var _40f=function(_410,expr){
if(match=expr.match(/^[>+~]$/)){
_40e=match[0];
return _410;
}else{
var _412=new MochiKit.Selector.Selector(expr);
var _413=MochiKit.Iter.reduce(function(_414,_415){
return MochiKit.Base.extend(_414,_412.findElements(_415||_407,_40e));
},_410,[]);
_40e="";
return _413;
}
};
var _416=_40d.replace(/(^\s+|\s+$)/g,"").split(/\s+/);
return uniq(MochiKit.Iter.reduce(_40f,_416,[null]));
},_408));
},findDocElements:function(){
return MochiKit.Selector.findChildElements(MochiKit.DOM.currentDocument(),arguments);
},__new__:function(){
var m=MochiKit.Base;
this.$$=this.findDocElements;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
}});
MochiKit.Selector.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Selector);
MochiKit.Base._deps("Style",["Base","DOM"]);
MochiKit.Style.NAME="MochiKit.Style";
MochiKit.Style.VERSION="1.5";
MochiKit.Style.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Style.toString=function(){
return this.__repr__();
};
MochiKit.Style.EXPORT_OK=[];
MochiKit.Style.EXPORT=["setStyle","setOpacity","getStyle","getElementDimensions","elementDimensions","setElementDimensions","getElementPosition","elementPosition","setElementPosition","makePositioned","undoPositioned","makeClipping","undoClipping","setDisplayForElement","hideElement","showElement","getViewportDimensions","getViewportPosition","Dimensions","Coordinates"];
MochiKit.Style.Dimensions=function(w,h){
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
MochiKit.Base.update(MochiKit.Style,{getStyle:function(elem,_41f){
var dom=MochiKit.DOM;
var d=dom._document;
elem=dom.getElement(elem);
_41f=MochiKit.Base.camelize(_41f);
if(!elem||elem==d){
return undefined;
}
if(_41f=="opacity"&&typeof (elem.filters)!="undefined"){
var _422=(MochiKit.Style.getStyle(elem,"filter")||"").match(/alpha\(opacity=(.*)\)/);
if(_422&&_422[1]){
return parseFloat(_422[1])/100;
}
return 1;
}
if(_41f=="float"||_41f=="cssFloat"||_41f=="styleFloat"){
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
var _423=elem.style?elem.style[_41f]:null;
if(!_423){
if(d.defaultView&&d.defaultView.getComputedStyle){
var css=d.defaultView.getComputedStyle(elem,null);
_41f=_41f.replace(/([A-Z])/g,"-$1").toLowerCase();
_423=css?css.getPropertyValue(_41f):null;
}else{
if(elem.currentStyle){
_423=elem.currentStyle[_41f];
if(/^\d/.test(_423)&&!/px$/.test(_423)&&_41f!="fontWeight"){
var left=elem.style.left;
var _426=elem.runtimeStyle.left;
elem.runtimeStyle.left=elem.currentStyle.left;
elem.style.left=_423||0;
_423=elem.style.pixelLeft+"px";
elem.style.left=left;
elem.runtimeStyle.left=_426;
}
}
}
}
if(_41f=="opacity"){
_423=parseFloat(_423);
}
if(/Opera/.test(navigator.userAgent)&&(MochiKit.Base.findValue(["left","top","right","bottom"],_41f)!=-1)){
if(MochiKit.Style.getStyle(elem,"position")=="static"){
_423="auto";
}
}
return _423=="auto"?null:_423;
},setStyle:function(elem,_428){
elem=MochiKit.DOM.getElement(elem);
for(var name in _428){
switch(name){
case "opacity":
MochiKit.Style.setOpacity(elem,_428[name]);
break;
case "float":
case "cssFloat":
case "styleFloat":
if(typeof (elem.style["float"])!="undefined"){
elem.style["float"]=_428[name];
}else{
if(typeof (elem.style.cssFloat)!="undefined"){
elem.style.cssFloat=_428[name];
}else{
elem.style.styleFloat=_428[name];
}
}
break;
default:
elem.style[MochiKit.Base.camelize(name)]=_428[name];
}
}
},setOpacity:function(elem,o){
elem=MochiKit.DOM.getElement(elem);
var self=MochiKit.Style;
if(o==1){
var _42d=/Gecko/.test(navigator.userAgent)&&!(/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent));
elem.style["opacity"]=_42d?0.999999:1;
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
},getElementPosition:function(elem,_42f){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
elem=dom.getElement(elem);
if(!elem||(!(elem.x&&elem.y)&&(!elem.parentNode===null||self.getStyle(elem,"display")=="none"))){
return undefined;
}
var c=new self.Coordinates(0,0);
var box=null;
var _434=null;
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
_434=elem.offsetParent;
if(_434!=elem){
while(_434){
c.x+=parseInt(_434.style.borderLeftWidth)||0;
c.y+=parseInt(_434.style.borderTopWidth)||0;
c.x+=_434.offsetLeft;
c.y+=_434.offsetTop;
_434=_434.offsetParent;
}
}
var ua=navigator.userAgent.toLowerCase();
if((typeof (opera)!="undefined"&&parseFloat(opera.version())<9)||(ua.indexOf("AppleWebKit")!=-1&&self.getStyle(elem,"position")=="absolute")){
c.x-=b.offsetLeft;
c.y-=b.offsetTop;
}
if(elem.parentNode){
_434=elem.parentNode;
}else{
_434=null;
}
while(_434){
var _439=_434.tagName.toUpperCase();
if(_439==="BODY"||_439==="HTML"){
break;
}
var disp=self.getStyle(_434,"display");
if(disp.search(/^inline|table-row.*$/i)){
c.x-=_434.scrollLeft;
c.y-=_434.scrollTop;
}
if(_434.parentNode){
_434=_434.parentNode;
}else{
_434=null;
}
}
}
}
}
if(typeof (_42f)!="undefined"){
_42f=arguments.callee(_42f);
if(_42f){
c.x-=(_42f.x||0);
c.y-=(_42f.y||0);
}
}
return c;
},setElementPosition:function(elem,_43c,_43d){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_43d)=="undefined"){
_43d="px";
}
var _43e={};
var _43f=MochiKit.Base.isUndefinedOrNull;
if(!_43f(_43c.x)){
_43e["left"]=_43c.x+_43d;
}
if(!_43f(_43c.y)){
_43e["top"]=_43c.y+_43d;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_43e});
},makePositioned:function(_440){
_440=MochiKit.DOM.getElement(_440);
var pos=MochiKit.Style.getStyle(_440,"position");
if(pos=="static"||!pos){
_440.style.position="relative";
if(/Opera/.test(navigator.userAgent)){
_440.style.top=0;
_440.style.left=0;
}
}
},undoPositioned:function(_442){
_442=MochiKit.DOM.getElement(_442);
if(_442.style.position=="relative"){
_442.style.position=_442.style.top=_442.style.left=_442.style.bottom=_442.style.right="";
}
},makeClipping:function(_443){
_443=MochiKit.DOM.getElement(_443);
var s=_443.style;
var _445={"overflow":s.overflow,"overflow-x":s.overflowX,"overflow-y":s.overflowY};
if((MochiKit.Style.getStyle(_443,"overflow")||"visible")!="hidden"){
_443.style.overflow="hidden";
_443.style.overflowX="hidden";
_443.style.overflowY="hidden";
}
return _445;
},undoClipping:function(_446,_447){
_446=MochiKit.DOM.getElement(_446);
if(typeof (_447)=="string"){
_446.style.overflow=_447;
}else{
if(_447!=null){
_446.style.overflow=_447["overflow"];
_446.style.overflowX=_447["overflow-x"];
_446.style.overflowY=_447["overflow-y"];
}
}
},getElementDimensions:function(elem,_449){
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
var _44e=s.visibility;
var _44f=s.position;
var _450=s.display;
s.visibility="hidden";
s.position="absolute";
s.display=self._getDefaultDisplay(elem);
var _451=elem.offsetWidth;
var _452=elem.offsetHeight;
s.display=_450;
s.position=_44f;
s.visibility=_44e;
}else{
_451=elem.offsetWidth||0;
_452=elem.offsetHeight||0;
}
if(_449){
var _453="colSpan" in elem&&"rowSpan" in elem;
var _454=(_453&&elem.parentNode&&self.getStyle(elem.parentNode,"borderCollapse")=="collapse");
if(_454){
if(/MSIE/.test(navigator.userAgent)){
var _455=elem.previousSibling?0.5:1;
var _456=elem.nextSibling?0.5:1;
}else{
var _455=0.5;
var _456=0.5;
}
}else{
var _455=1;
var _456=1;
}
_451-=Math.round((parseFloat(self.getStyle(elem,"paddingLeft"))||0)+(parseFloat(self.getStyle(elem,"paddingRight"))||0)+_455*(parseFloat(self.getStyle(elem,"borderLeftWidth"))||0)+_456*(parseFloat(self.getStyle(elem,"borderRightWidth"))||0));
if(_453){
if(/Gecko|Opera/.test(navigator.userAgent)&&!/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent)){
var _457=0;
}else{
if(/MSIE/.test(navigator.userAgent)){
var _457=1;
}else{
var _457=_454?0.5:1;
}
}
}else{
var _457=1;
}
_452-=Math.round((parseFloat(self.getStyle(elem,"paddingTop"))||0)+(parseFloat(self.getStyle(elem,"paddingBottom"))||0)+_457*((parseFloat(self.getStyle(elem,"borderTopWidth"))||0)+(parseFloat(self.getStyle(elem,"borderBottomWidth"))||0)));
}
return new self.Dimensions(_451,_452);
},setElementDimensions:function(elem,_459,_45a){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_45a)=="undefined"){
_45a="px";
}
var _45b={};
var _45c=MochiKit.Base.isUndefinedOrNull;
if(!_45c(_459.w)){
_45b["width"]=_459.w+_45a;
}
if(!_45c(_459.h)){
_45b["height"]=_459.h+_45a;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_45b});
},_getDefaultDisplay:function(elem){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
elem=dom.getElement(elem);
if(!elem){
return undefined;
}
var _460=elem.tagName.toUpperCase();
return self._defaultDisplay[_460]||"block";
},setDisplayForElement:function(_461,_462){
var _463=MochiKit.Base.extend(null,arguments,1);
var _464=MochiKit.DOM.getElement;
for(var i=0;i<_463.length;i++){
_462=_464(_463[i]);
if(_462){
_462.style.display=_461;
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
var _46e=["A","ABBR","ACRONYM","B","BASEFONT","BDO","BIG","BR","CITE","CODE","DFN","EM","FONT","I","IMG","KBD","LABEL","Q","S","SAMP","SMALL","SPAN","STRIKE","STRONG","SUB","SUP","TEXTAREA","TT","U","VAR"];
this._defaultDisplay={"TABLE":"table","THEAD":"table-header-group","TBODY":"table-row-group","TFOOT":"table-footer-group","COLGROUP":"table-column-group","COL":"table-column","TR":"table-row","TD":"table-cell","TH":"table-cell","CAPTION":"table-caption","LI":"list-item","INPUT":"inline-block","SELECT":"inline-block"};
if(/MSIE/.test(navigator.userAgent)){
for(var k in this._defaultDisplay){
var v=this._defaultDisplay[k];
if(v.indexOf("table")==0){
this._defaultDisplay[k]="block";
}
}
}
for(var i=0;i<_46e.length;i++){
this._defaultDisplay[_46e[i]]="inline";
}
this.elementPosition=this.getElementPosition;
this.elementDimensions=this.getElementDimensions;
this.hideElement=m.partial(this.setDisplayForElement,"none");
this.showElement=m.partial(this.setDisplayForElement,"block");
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
}});
MochiKit.Style.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Style);
MochiKit.Base._deps("LoggingPane",["Base","Logging"]);
MochiKit.LoggingPane.NAME="MochiKit.LoggingPane";
MochiKit.LoggingPane.VERSION="1.5";
MochiKit.LoggingPane.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.LoggingPane.toString=function(){
return this.__repr__();
};
MochiKit.LoggingPane.createLoggingPane=function(_472){
var m=MochiKit.LoggingPane;
_472=!(!_472);
if(m._loggingPane&&m._loggingPane.inline!=_472){
m._loggingPane.closePane();
m._loggingPane=null;
}
if(!m._loggingPane||m._loggingPane.closed){
m._loggingPane=new m.LoggingPane(_472,MochiKit.Logging.logger);
}
return m._loggingPane;
};
MochiKit.LoggingPane.LoggingPane=function(_474,_475){
if(typeof (_475)=="undefined"||_475===null){
_475=MochiKit.Logging.logger;
}
this.logger=_475;
var _476=MochiKit.Base.update;
var _477=MochiKit.Base.updatetree;
var bind=MochiKit.Base.bind;
var _479=MochiKit.Base.clone;
var win=window;
var uid="_MochiKit_LoggingPane";
if(typeof (MochiKit.DOM)!="undefined"){
win=MochiKit.DOM.currentWindow();
}
if(!_474){
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
var _480=doc.getElementById(uid);
var _481=!!_480;
if(_480&&typeof (_480.loggingPane)!="undefined"){
_480.loggingPane.logger=this.logger;
_480.loggingPane.buildAndApplyFilter();
return _480.loggingPane;
}
if(_481){
var _482;
while((_482=_480.firstChild)){
_480.removeChild(_482);
}
}else{
_480=doc.createElement("div");
_480.id=uid;
}
_480.loggingPane=this;
var _483=doc.createElement("input");
var _484=doc.createElement("input");
var _485=doc.createElement("button");
var _486=doc.createElement("button");
var _487=doc.createElement("button");
var _488=doc.createElement("button");
var _489=doc.createElement("div");
var _48a=doc.createElement("div");
var _48b=uid+"_Listener";
this.colorTable=_479(this.colorTable);
var _48c=[];
var _48d=null;
var _48e=function(msg){
var _490=msg.level;
if(typeof (_490)=="number"){
_490=MochiKit.Logging.LogLevel[_490];
}
return _490;
};
var _491=function(msg){
return msg.info.join(" ");
};
var _493=bind(function(msg){
var _495=_48e(msg);
var text=_491(msg);
var c=this.colorTable[_495];
var p=doc.createElement("span");
p.className="MochiKit-LogMessage MochiKit-LogLevel-"+_495;
p.style.cssText="margin: 0px; white-space: -moz-pre-wrap; white-space: -o-pre-wrap; white-space: pre-wrap; white-space: pre-line; word-wrap: break-word; wrap-option: emergency; color: "+c;
p.appendChild(doc.createTextNode(_495+": "+text));
_48a.appendChild(p);
_48a.appendChild(doc.createElement("br"));
if(_489.offsetHeight>_489.scrollHeight){
_489.scrollTop=0;
}else{
_489.scrollTop=_489.scrollHeight;
}
},this);
var _499=function(msg){
_48c[_48c.length]=msg;
_493(msg);
};
var _49b=function(){
var _49c,_49d;
try{
_49c=new RegExp(_483.value);
_49d=new RegExp(_484.value);
}
catch(e){
logDebug("Error in filter regex: "+e.message);
return null;
}
return function(msg){
return (_49c.test(_48e(msg))&&_49d.test(_491(msg)));
};
};
var _49f=function(){
while(_48a.firstChild){
_48a.removeChild(_48a.firstChild);
}
};
var _4a0=function(){
_48c=[];
_49f();
};
var _4a1=bind(function(){
if(this.closed){
return;
}
this.closed=true;
if(MochiKit.LoggingPane._loggingPane==this){
MochiKit.LoggingPane._loggingPane=null;
}
this.logger.removeListener(_48b);
try{
try{
_480.loggingPane=null;
}
catch(e){
logFatal("Bookmarklet was closed incorrectly.");
}
if(_474){
_480.parentNode.removeChild(_480);
}else{
this.win.close();
}
}
catch(e){
}
},this);
var _4a2=function(){
_49f();
for(var i=0;i<_48c.length;i++){
var msg=_48c[i];
if(_48d===null||_48d(msg)){
_493(msg);
}
}
};
this.buildAndApplyFilter=function(){
_48d=_49b();
_4a2();
this.logger.removeListener(_48b);
this.logger.addListener(_48b,_48d,_499);
};
var _4a5=bind(function(){
_48c=this.logger.getMessages();
_4a2();
},this);
var _4a6=bind(function(_4a7){
_4a7=_4a7||window.event;
key=_4a7.which||_4a7.keyCode;
if(key==13){
this.buildAndApplyFilter();
}
},this);
var _4a8="display: block; z-index: 1000; left: 0px; bottom: 0px; position: fixed; width: 100%; background-color: white; font: "+this.logFont;
if(_474){
_4a8+="; height: 10em; border-top: 2px solid black";
}else{
_4a8+="; height: 100%;";
}
_480.style.cssText=_4a8;
if(!_481){
doc.body.appendChild(_480);
}
_4a8={"cssText":"width: 33%; display: inline; font: "+this.logFont};
_477(_483,{"value":"FATAL|ERROR|WARNING|INFO|DEBUG","onkeypress":_4a6,"style":_4a8});
_480.appendChild(_483);
_477(_484,{"value":".*","onkeypress":_4a6,"style":_4a8});
_480.appendChild(_484);
_4a8="width: 8%; display:inline; font: "+this.logFont;
_485.appendChild(doc.createTextNode("Filter"));
_485.onclick=bind("buildAndApplyFilter",this);
_485.style.cssText=_4a8;
_480.appendChild(_485);
_486.appendChild(doc.createTextNode("Load"));
_486.onclick=_4a5;
_486.style.cssText=_4a8;
_480.appendChild(_486);
_487.appendChild(doc.createTextNode("Clear"));
_487.onclick=_4a0;
_487.style.cssText=_4a8;
_480.appendChild(_487);
_488.appendChild(doc.createTextNode("Close"));
_488.onclick=_4a1;
_488.style.cssText=_4a8;
_480.appendChild(_488);
_489.style.cssText="overflow: auto; width: 100%";
_48a.style.cssText="width: 100%; height: "+(_474?"8em":"100%");
_489.appendChild(_48a);
_480.appendChild(_489);
this.buildAndApplyFilter();
_4a5();
if(_474){
this.win=undefined;
}else{
this.win=win;
}
this.inline=_474;
this.closePane=_4a1;
this.closed=false;
return this;
};
MochiKit.LoggingPane.LoggingPane.prototype={"logFont":"8pt Verdana,sans-serif","colorTable":{"ERROR":"red","FATAL":"darkred","WARNING":"blue","INFO":"black","DEBUG":"green"}};
MochiKit.LoggingPane.EXPORT_OK=["LoggingPane"];
MochiKit.LoggingPane.EXPORT=["createLoggingPane"];
MochiKit.LoggingPane.__new__=function(){
this.EXPORT_TAGS={":common":this.EXPORT,":all":MochiKit.Base.concat(this.EXPORT,this.EXPORT_OK)};
MochiKit.Base.nameFunctions(this);
MochiKit.LoggingPane._loggingPane=null;
};
MochiKit.LoggingPane.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.LoggingPane);
MochiKit.Base._deps("Color",["Base","DOM","Style"]);
MochiKit.Color.NAME="MochiKit.Color";
MochiKit.Color.VERSION="1.5";
MochiKit.Color.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Color.toString=function(){
return this.__repr__();
};
MochiKit.Color.Color=function(red,_4aa,blue,_4ac){
if(typeof (_4ac)=="undefined"||_4ac===null){
_4ac=1;
}
this.rgb={r:red,g:_4aa,b:blue,a:_4ac};
};
MochiKit.Color.Color.prototype={__class__:MochiKit.Color.Color,colorWithAlpha:function(_4ad){
var rgb=this.rgb;
var m=MochiKit.Color;
return m.Color.fromRGB(rgb.r,rgb.g,rgb.b,_4ad);
},colorWithHue:function(hue){
var hsl=this.asHSL();
hsl.h=hue;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithSaturation:function(_4b3){
var hsl=this.asHSL();
hsl.s=_4b3;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithLightness:function(_4b6){
var hsl=this.asHSL();
hsl.l=_4b6;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},darkerColorWithLevel:function(_4b9){
var hsl=this.asHSL();
hsl.l=Math.max(hsl.l-_4b9,0);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},lighterColorWithLevel:function(_4bc){
var hsl=this.asHSL();
hsl.l=Math.min(hsl.l+_4bc,1);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},blendedColor:function(_4bf,_4c0){
if(typeof (_4c0)=="undefined"||_4c0===null){
_4c0=0.5;
}
var sf=1-_4c0;
var s=this.rgb;
var d=_4bf.rgb;
var df=_4c0;
return MochiKit.Color.Color.fromRGB((s.r*sf)+(d.r*df),(s.g*sf)+(d.g*df),(s.b*sf)+(d.b*df),(s.a*sf)+(d.a*df));
},compareRGB:function(_4c5){
var a=this.asRGB();
var b=_4c5.asRGB();
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
MochiKit.Base.update(MochiKit.Color.Color,{fromRGB:function(red,_4dc,blue,_4de){
var _4df=MochiKit.Color.Color;
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_4dc=rgb.g;
blue=rgb.b;
if(typeof (rgb.a)=="undefined"){
_4de=undefined;
}else{
_4de=rgb.a;
}
}
return new _4df(red,_4dc,blue,_4de);
},fromHSL:function(hue,_4e2,_4e3,_4e4){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hslToRGB.apply(m,arguments));
},fromHSV:function(hue,_4e7,_4e8,_4e9){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hsvToRGB.apply(m,arguments));
},fromName:function(name){
var _4ec=MochiKit.Color.Color;
if(name.charAt(0)=="\""){
name=name.substr(1,name.length-2);
}
var _4ed=_4ec._namedColors[name.toLowerCase()];
if(typeof (_4ed)=="string"){
return _4ec.fromHexString(_4ed);
}else{
if(name=="transparent"){
return _4ec.transparentColor();
}
}
return null;
},fromString:function(_4ee){
var self=MochiKit.Color.Color;
var _4f0=_4ee.substr(0,3);
if(_4f0=="rgb"){
return self.fromRGBString(_4ee);
}else{
if(_4f0=="hsl"){
return self.fromHSLString(_4ee);
}else{
if(_4ee.charAt(0)=="#"){
return self.fromHexString(_4ee);
}
}
}
return self.fromName(_4ee);
},fromHexString:function(_4f1){
if(_4f1.charAt(0)=="#"){
_4f1=_4f1.substring(1);
}
var _4f2=[];
var i,hex;
if(_4f1.length==3){
for(i=0;i<3;i++){
hex=_4f1.substr(i,1);
_4f2.push(parseInt(hex+hex,16)/255);
}
}else{
for(i=0;i<6;i+=2){
hex=_4f1.substr(i,2);
_4f2.push(parseInt(hex,16)/255);
}
}
var _4f5=MochiKit.Color.Color;
return _4f5.fromRGB.apply(_4f5,_4f2);
},_fromColorString:function(pre,_4f7,_4f8,_4f9){
if(_4f9.indexOf(pre)===0){
_4f9=_4f9.substring(_4f9.indexOf("(",3)+1,_4f9.length-1);
}
var _4fa=_4f9.split(/\s*,\s*/);
var _4fb=[];
for(var i=0;i<_4fa.length;i++){
var c=_4fa[i];
var val;
var _4ff=c.substring(c.length-3);
if(c.charAt(c.length-1)=="%"){
val=0.01*parseFloat(c.substring(0,c.length-1));
}else{
if(_4ff=="deg"){
val=parseFloat(c)/360;
}else{
if(_4ff=="rad"){
val=parseFloat(c)/(Math.PI*2);
}else{
val=_4f8[i]*parseFloat(c);
}
}
}
_4fb.push(val);
}
return this[_4f7].apply(this,_4fb);
},fromComputedStyle:function(elem,_501){
var d=MochiKit.DOM;
var cls=MochiKit.Color.Color;
for(elem=d.getElement(elem);elem;elem=elem.parentNode){
var _504=MochiKit.Style.getStyle.apply(d,arguments);
if(!_504){
continue;
}
var _505=cls.fromString(_504);
if(!_505){
break;
}
if(_505.asRGB().a>0){
return _505;
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
MochiKit.Base.update(MochiKit.Color,{clampColorComponent:function(v,_50b){
v*=_50b;
if(v<0){
return 0;
}else{
if(v>_50b){
return _50b;
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
},hsvToRGB:function(hue,_511,_512,_513){
if(arguments.length==1){
var hsv=hue;
hue=hsv.h;
_511=hsv.s;
_512=hsv.v;
_513=hsv.a;
}
var red;
var _516;
var blue;
if(_511===0){
red=_512;
_516=_512;
blue=_512;
}else{
var i=Math.floor(hue*6);
var f=(hue*6)-i;
var p=_512*(1-_511);
var q=_512*(1-(_511*f));
var t=_512*(1-(_511*(1-f)));
switch(i){
case 1:
red=q;
_516=_512;
blue=p;
break;
case 2:
red=p;
_516=_512;
blue=t;
break;
case 3:
red=p;
_516=q;
blue=_512;
break;
case 4:
red=t;
_516=p;
blue=_512;
break;
case 5:
red=_512;
_516=p;
blue=q;
break;
case 6:
case 0:
red=_512;
_516=t;
blue=p;
break;
}
}
return {r:red,g:_516,b:blue,a:_513};
},hslToRGB:function(hue,_51e,_51f,_520){
if(arguments.length==1){
var hsl=hue;
hue=hsl.h;
_51e=hsl.s;
_51f=hsl.l;
_520=hsl.a;
}
var red;
var _523;
var blue;
if(_51e===0){
red=_51f;
_523=_51f;
blue=_51f;
}else{
var m2;
if(_51f<=0.5){
m2=_51f*(1+_51e);
}else{
m2=_51f+_51e-(_51f*_51e);
}
var m1=(2*_51f)-m2;
var f=MochiKit.Color._hslValue;
var h6=hue*6;
red=f(m1,m2,h6+2);
_523=f(m1,m2,h6);
blue=f(m1,m2,h6-2);
}
return {r:red,g:_523,b:blue,a:_520};
},rgbToHSV:function(red,_52a,blue,_52c){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_52a=rgb.g;
blue=rgb.b;
_52c=rgb.a;
}
var max=Math.max(Math.max(red,_52a),blue);
var min=Math.min(Math.min(red,_52a),blue);
var hue;
var _531;
var _532=max;
if(min==max){
hue=0;
_531=0;
}else{
var _533=(max-min);
_531=_533/max;
if(red==max){
hue=(_52a-blue)/_533;
}else{
if(_52a==max){
hue=2+((blue-red)/_533);
}else{
hue=4+((red-_52a)/_533);
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
return {h:hue,s:_531,v:_532,a:_52c};
},rgbToHSL:function(red,_535,blue,_537){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_535=rgb.g;
blue=rgb.b;
_537=rgb.a;
}
var max=Math.max(red,Math.max(_535,blue));
var min=Math.min(red,Math.min(_535,blue));
var hue;
var _53c;
var _53d=(max+min)/2;
var _53e=max-min;
if(_53e===0){
hue=0;
_53c=0;
}else{
if(_53d<=0.5){
_53c=_53e/(max+min);
}else{
_53c=_53e/(2-max-min);
}
if(red==max){
hue=(_535-blue)/_53e;
}else{
if(_535==max){
hue=2+((blue-red)/_53e);
}else{
hue=4+((red-_535)/_53e);
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
return {h:hue,s:_53c,l:_53d,a:_537};
},toColorPart:function(num){
num=Math.round(num);
var _540=num.toString(16);
if(num<16){
return "0"+_540;
}
return _540;
},__new__:function(){
var m=MochiKit.Base;
this.Color.fromRGBString=m.bind(this.Color._fromColorString,this.Color,"rgb","fromRGB",[1/255,1/255,1/255,1]);
this.Color.fromHSLString=m.bind(this.Color._fromColorString,this.Color,"hsl","fromHSL",[1/360,0.01,0.01,1]);
var _542=1/3;
var _543={black:[0,0,0],blue:[0,0,1],brown:[0.6,0.4,0.2],cyan:[0,1,1],darkGray:[_542,_542,_542],gray:[0.5,0.5,0.5],green:[0,1,0],lightGray:[2*_542,2*_542,2*_542],magenta:[1,0,1],orange:[1,0.5,0],purple:[0.5,0,0.5],red:[1,0,0],transparent:[0,0,0,0],white:[1,1,1],yellow:[1,1,0]};
var _544=function(name,r,g,b,a){
var rval=this.fromRGB(r,g,b,a);
this[name]=function(){
return rval;
};
return rval;
};
for(var k in _543){
var name=k+"Color";
var _54d=m.concat([_544,this.Color,name],_543[k]);
this.Color[name]=m.bind.apply(null,_54d);
}
var _54e=function(){
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof MochiKit.Color.Color)){
return false;
}
}
return true;
};
var _550=function(a,b){
return a.compareRGB(b);
};
m.nameFunctions(this);
m.registerComparator(this.Color.NAME,_54e,_550);
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
}});
MochiKit.Color.EXPORT=["Color"];
MochiKit.Color.EXPORT_OK=["clampColorComponent","rgbToHSL","hslToRGB","rgbToHSV","hsvToRGB","toColorPart"];
MochiKit.Color.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Color);
MochiKit.Color.Color._namedColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};
MochiKit.Base._deps("Signal",["Base","DOM","Style"]);
MochiKit.Signal.NAME="MochiKit.Signal";
MochiKit.Signal.VERSION="1.5";
MochiKit.Signal._observers=[];
MochiKit.Signal.Event=function(src,e){
this._event=e||window.event;
this._src=src;
};
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
var _55f=MochiKit.Signal._specialMacKeys;
for(i=63236;i<=63242;i++){
_55f[i]="KEY_F"+(i-63236+1);
}
})();
MochiKit.Signal._specialKeys={8:"KEY_BACKSPACE",9:"KEY_TAB",12:"KEY_NUM_PAD_CLEAR",13:"KEY_ENTER",16:"KEY_SHIFT",17:"KEY_CTRL",18:"KEY_ALT",19:"KEY_PAUSE",20:"KEY_CAPS_LOCK",27:"KEY_ESCAPE",32:"KEY_SPACEBAR",33:"KEY_PAGE_UP",34:"KEY_PAGE_DOWN",35:"KEY_END",36:"KEY_HOME",37:"KEY_ARROW_LEFT",38:"KEY_ARROW_UP",39:"KEY_ARROW_RIGHT",40:"KEY_ARROW_DOWN",44:"KEY_PRINT_SCREEN",45:"KEY_INSERT",46:"KEY_DELETE",59:"KEY_SEMICOLON",91:"KEY_WINDOWS_LEFT",92:"KEY_WINDOWS_RIGHT",93:"KEY_SELECT",106:"KEY_NUM_PAD_ASTERISK",107:"KEY_NUM_PAD_PLUS_SIGN",109:"KEY_NUM_PAD_HYPHEN-MINUS",110:"KEY_NUM_PAD_FULL_STOP",111:"KEY_NUM_PAD_SOLIDUS",144:"KEY_NUM_LOCK",145:"KEY_SCROLL_LOCK",186:"KEY_SEMICOLON",187:"KEY_EQUALS_SIGN",188:"KEY_COMMA",189:"KEY_HYPHEN-MINUS",190:"KEY_FULL_STOP",191:"KEY_SOLIDUS",192:"KEY_GRAVE_ACCENT",219:"KEY_LEFT_SQUARE_BRACKET",220:"KEY_REVERSE_SOLIDUS",221:"KEY_RIGHT_SQUARE_BRACKET",222:"KEY_APOSTROPHE"};
(function(){
var _560=MochiKit.Signal._specialKeys;
for(var i=48;i<=57;i++){
_560[i]="KEY_"+(i-48);
}
for(i=65;i<=90;i++){
_560[i]="KEY_"+String.fromCharCode(i);
}
for(i=96;i<=105;i++){
_560[i]="KEY_NUM_PAD_"+(i-96);
}
for(i=112;i<=123;i++){
_560[i]="KEY_F"+(i-112+1);
}
})();
MochiKit.Signal.Ident=function(_562){
this.source=_562.source;
this.signal=_562.signal;
this.listener=_562.listener;
this.isDOM=_562.isDOM;
this.objOrFunc=_562.objOrFunc;
this.funcOrStr=_562.funcOrStr;
this.connected=_562.connected;
};
MochiKit.Signal.Ident.prototype={};
MochiKit.Base.update(MochiKit.Signal,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},_unloadCache:function(){
var self=MochiKit.Signal;
var _564=self._observers;
for(var i=0;i<_564.length;i++){
if(_564[i].signal!=="onload"&&_564[i].signal!=="onunload"){
self._disconnect(_564[i]);
}
}
},_listener:function(src,sig,func,obj,_56a){
var self=MochiKit.Signal;
var E=self.Event;
if(!_56a){
if(typeof (func.im_self)=="undefined"){
return MochiKit.Base.bindLate(func,obj);
}else{
return func;
}
}
obj=obj||src;
if(typeof (func)=="string"){
if(sig==="onload"||sig==="onunload"){
return function(_56d){
obj[func].apply(obj,[new E(src,_56d)]);
var _56e=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:obj,funcOrStr:func});
MochiKit.Signal._disconnect(_56e);
};
}else{
return function(_56f){
obj[func].apply(obj,[new E(src,_56f)]);
};
}
}else{
if(sig==="onload"||sig==="onunload"){
return function(_570){
func.apply(obj,[new E(src,_570)]);
var _571=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:func});
MochiKit.Signal._disconnect(_571);
};
}else{
return function(_572){
func.apply(obj,[new E(src,_572)]);
};
}
}
},_browserAlreadyHasMouseEnterAndLeave:function(){
return /MSIE/.test(navigator.userAgent);
},_browserLacksMouseWheelEvent:function(){
return /Gecko\//.test(navigator.userAgent);
},_mouseEnterListener:function(src,sig,func,obj){
var E=MochiKit.Signal.Event;
return function(_578){
var e=new E(src,_578);
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
},_getDestPair:function(_57a,_57b){
var obj=null;
var func=null;
if(typeof (_57b)!="undefined"){
obj=_57a;
func=_57b;
if(typeof (_57b)=="string"){
if(typeof (_57a[_57b])!="function"){
throw new Error("'funcOrStr' must be a function on 'objOrFunc'");
}
}else{
if(typeof (_57b)!="function"){
throw new Error("'funcOrStr' must be a function or string");
}
}
}else{
if(typeof (_57a)!="function"){
throw new Error("'objOrFunc' must be a function if 'funcOrStr' is not given");
}else{
func=_57a;
}
}
return [obj,func];
},connect:function(src,sig,_580,_581){
src=MochiKit.DOM.getElement(src);
var self=MochiKit.Signal;
if(typeof (sig)!="string"){
throw new Error("'sig' must be a string");
}
var _583=self._getDestPair(_580,_581);
var obj=_583[0];
var func=_583[1];
if(typeof (obj)=="undefined"||obj===null){
obj=src;
}
var _586=!!(src.addEventListener||src.attachEvent);
if(_586&&(sig==="onmouseenter"||sig==="onmouseleave")&&!self._browserAlreadyHasMouseEnterAndLeave()){
var _587=self._mouseEnterListener(src,sig.substr(2),func,obj);
if(sig==="onmouseenter"){
sig="onmouseover";
}else{
sig="onmouseout";
}
}else{
if(_586&&sig=="onmousewheel"&&self._browserLacksMouseWheelEvent()){
var _587=self._listener(src,sig,func,obj,_586);
sig="onDOMMouseScroll";
}else{
var _587=self._listener(src,sig,func,obj,_586);
}
}
if(src.addEventListener){
src.addEventListener(sig.substr(2),_587,false);
}else{
if(src.attachEvent){
src.attachEvent(sig,_587);
}
}
var _588=new MochiKit.Signal.Ident({source:src,signal:sig,listener:_587,isDOM:_586,objOrFunc:_580,funcOrStr:_581,connected:true});
self._observers.push(_588);
if(!_586&&typeof (src.__connect__)=="function"){
var args=MochiKit.Base.extend([_588],arguments,1);
src.__connect__.apply(src,args);
}
return _588;
},_disconnect:function(_58a){
if(!_58a.connected){
return;
}
_58a.connected=false;
var src=_58a.source;
var sig=_58a.signal;
var _58d=_58a.listener;
if(!_58a.isDOM){
if(typeof (src.__disconnect__)=="function"){
src.__disconnect__(_58a,sig,_58a.objOrFunc,_58a.funcOrStr);
}
return;
}
if(src.removeEventListener){
src.removeEventListener(sig.substr(2),_58d,false);
}else{
if(src.detachEvent){
src.detachEvent(sig,_58d);
}else{
throw new Error("'src' must be a DOM element");
}
}
},disconnect:function(_58e){
var self=MochiKit.Signal;
var _590=self._observers;
var m=MochiKit.Base;
if(arguments.length>1){
var src=MochiKit.DOM.getElement(arguments[0]);
var sig=arguments[1];
var obj=arguments[2];
var func=arguments[3];
for(var i=_590.length-1;i>=0;i--){
var o=_590[i];
if(o.source===src&&o.signal===sig&&o.objOrFunc===obj&&o.funcOrStr===func){
self._disconnect(o);
if(!self._lock){
_590.splice(i,1);
}else{
self._dirty=true;
}
return true;
}
}
}else{
var idx=m.findIdentical(_590,_58e);
if(idx>=0){
self._disconnect(_58e);
if(!self._lock){
_590.splice(idx,1);
}else{
self._dirty=true;
}
return true;
}
}
return false;
},disconnectAllTo:function(_599,_59a){
var self=MochiKit.Signal;
var _59c=self._observers;
var _59d=self._disconnect;
var _59e=self._lock;
var _59f=self._dirty;
if(typeof (_59a)==="undefined"){
_59a=null;
}
for(var i=_59c.length-1;i>=0;i--){
var _5a1=_59c[i];
if(_5a1.objOrFunc===_599&&(_59a===null||_5a1.funcOrStr===_59a)){
_59d(_5a1);
if(_59e){
_59f=true;
}else{
_59c.splice(i,1);
}
}
}
self._dirty=_59f;
},disconnectAll:function(src,sig){
src=MochiKit.DOM.getElement(src);
var m=MochiKit.Base;
var _5a5=m.flattenArguments(m.extend(null,arguments,1));
var self=MochiKit.Signal;
var _5a7=self._disconnect;
var _5a8=self._observers;
var i,_5aa;
var _5ab=self._lock;
var _5ac=self._dirty;
if(_5a5.length===0){
for(i=_5a8.length-1;i>=0;i--){
_5aa=_5a8[i];
if(_5aa.source===src){
_5a7(_5aa);
if(!_5ab){
_5a8.splice(i,1);
}else{
_5ac=true;
}
}
}
}else{
var sigs={};
for(i=0;i<_5a5.length;i++){
sigs[_5a5[i]]=true;
}
for(i=_5a8.length-1;i>=0;i--){
_5aa=_5a8[i];
if(_5aa.source===src&&_5aa.signal in sigs){
_5a7(_5aa);
if(!_5ab){
_5a8.splice(i,1);
}else{
_5ac=true;
}
}
}
}
self._dirty=_5ac;
},signal:function(src,sig){
var self=MochiKit.Signal;
var _5b1=self._observers;
src=MochiKit.DOM.getElement(src);
var args=MochiKit.Base.extend(null,arguments,2);
var _5b3=[];
self._lock=true;
for(var i=0;i<_5b1.length;i++){
var _5b5=_5b1[i];
if(_5b5.source===src&&_5b5.signal===sig&&_5b5.connected){
try{
if(_5b5.isDOM&&_5b5.funcOrStr!=null){
var obj=_5b5.objOrFunc;
obj[_5b5.funcOrStr].apply(obj,args);
}else{
if(_5b5.isDOM){
_5b5.objOrFunc.apply(src,args);
}else{
_5b5.listener.apply(src,args);
}
}
}
catch(e){
_5b3.push(e);
}
}
}
self._lock=false;
if(self._dirty){
self._dirty=false;
for(var i=_5b1.length-1;i>=0;i--){
if(!_5b1[i].connected){
_5b1.splice(i,1);
}
}
}
if(_5b3.length==1){
throw _5b3[0];
}else{
if(_5b3.length>1){
var e=new Error("Multiple errors thrown in handling 'sig', see errors property");
e.errors=_5b3;
throw e;
}
}
}});
MochiKit.Signal.EXPORT_OK=[];
MochiKit.Signal.EXPORT=["connect","disconnect","signal","disconnectAll","disconnectAllTo"];
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
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
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
MochiKit.Base._deps("Position",["Base","DOM","Style"]);
MochiKit.Position.NAME="MochiKit.Position";
MochiKit.Position.VERSION="1.5";
MochiKit.Position.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Position.toString=function(){
return this.__repr__();
};
MochiKit.Position.EXPORT_OK=[];
MochiKit.Position.EXPORT=[];
MochiKit.Base.update(MochiKit.Position,{includeScrollOffsets:false,prepare:function(){
var _5ba=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
var _5bb=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
this.windowOffset=new MochiKit.Style.Coordinates(_5ba,_5bb);
},cumulativeOffset:function(_5bc){
var _5bd=0;
var _5be=0;
do{
_5bd+=_5bc.offsetTop||0;
_5be+=_5bc.offsetLeft||0;
_5bc=_5bc.offsetParent;
}while(_5bc);
return new MochiKit.Style.Coordinates(_5be,_5bd);
},realOffset:function(_5bf){
var _5c0=0;
var _5c1=0;
do{
_5c0+=_5bf.scrollTop||0;
_5c1+=_5bf.scrollLeft||0;
_5bf=_5bf.parentNode;
}while(_5bf);
return new MochiKit.Style.Coordinates(_5c1,_5c0);
},within:function(_5c2,x,y){
if(this.includeScrollOffsets){
return this.withinIncludingScrolloffsets(_5c2,x,y);
}
this.xcomp=x;
this.ycomp=y;
this.offset=this.cumulativeOffset(_5c2);
if(_5c2.style.position=="fixed"){
this.offset.x+=this.windowOffset.x;
this.offset.y+=this.windowOffset.y;
}
return (y>=this.offset.y&&y<this.offset.y+_5c2.offsetHeight&&x>=this.offset.x&&x<this.offset.x+_5c2.offsetWidth);
},withinIncludingScrolloffsets:function(_5c5,x,y){
var _5c8=this.realOffset(_5c5);
this.xcomp=x+_5c8.x-this.windowOffset.x;
this.ycomp=y+_5c8.y-this.windowOffset.y;
this.offset=this.cumulativeOffset(_5c5);
return (this.ycomp>=this.offset.y&&this.ycomp<this.offset.y+_5c5.offsetHeight&&this.xcomp>=this.offset.x&&this.xcomp<this.offset.x+_5c5.offsetWidth);
},overlap:function(mode,_5ca){
if(!mode){
return 0;
}
if(mode=="vertical"){
return ((this.offset.y+_5ca.offsetHeight)-this.ycomp)/_5ca.offsetHeight;
}
if(mode=="horizontal"){
return ((this.offset.x+_5ca.offsetWidth)-this.xcomp)/_5ca.offsetWidth;
}
},absolutize:function(_5cb){
_5cb=MochiKit.DOM.getElement(_5cb);
if(_5cb.style.position=="absolute"){
return;
}
MochiKit.Position.prepare();
var _5cc=MochiKit.Position.positionedOffset(_5cb);
var _5cd=_5cb.clientWidth;
var _5ce=_5cb.clientHeight;
var _5cf={"position":_5cb.style.position,"left":_5cc.x-parseFloat(_5cb.style.left||0),"top":_5cc.y-parseFloat(_5cb.style.top||0),"width":_5cb.style.width,"height":_5cb.style.height};
_5cb.style.position="absolute";
_5cb.style.top=_5cc.y+"px";
_5cb.style.left=_5cc.x+"px";
_5cb.style.width=_5cd+"px";
_5cb.style.height=_5ce+"px";
return _5cf;
},positionedOffset:function(_5d0){
var _5d1=0,_5d2=0;
do{
_5d1+=_5d0.offsetTop||0;
_5d2+=_5d0.offsetLeft||0;
_5d0=_5d0.offsetParent;
if(_5d0){
p=MochiKit.Style.getStyle(_5d0,"position");
if(p=="relative"||p=="absolute"){
break;
}
}
}while(_5d0);
return new MochiKit.Style.Coordinates(_5d2,_5d1);
},relativize:function(_5d3,_5d4){
_5d3=MochiKit.DOM.getElement(_5d3);
if(_5d3.style.position=="relative"){
return;
}
MochiKit.Position.prepare();
var top=parseFloat(_5d3.style.top||0)-(_5d4["top"]||0);
var left=parseFloat(_5d3.style.left||0)-(_5d4["left"]||0);
_5d3.style.position=_5d4["position"];
_5d3.style.top=top+"px";
_5d3.style.left=left+"px";
_5d3.style.width=_5d4["width"];
_5d3.style.height=_5d4["height"];
},clone:function(_5d7,_5d8){
_5d7=MochiKit.DOM.getElement(_5d7);
_5d8=MochiKit.DOM.getElement(_5d8);
_5d8.style.position="absolute";
var _5d9=this.cumulativeOffset(_5d7);
_5d8.style.top=_5d9.y+"px";
_5d8.style.left=_5d9.x+"px";
_5d8.style.width=_5d7.offsetWidth+"px";
_5d8.style.height=_5d7.offsetHeight+"px";
},page:function(_5da){
var _5db=0;
var _5dc=0;
var _5dd=_5da;
do{
_5db+=_5dd.offsetTop||0;
_5dc+=_5dd.offsetLeft||0;
if(_5dd.offsetParent==document.body&&MochiKit.Style.getStyle(_5dd,"position")=="absolute"){
break;
}
}while(_5dd=_5dd.offsetParent);
_5dd=_5da;
do{
_5db-=_5dd.scrollTop||0;
_5dc-=_5dd.scrollLeft||0;
}while(_5dd=_5dd.parentNode);
return new MochiKit.Style.Coordinates(_5dc,_5db);
}});
MochiKit.Position.__new__=function(win){
var m=MochiKit.Base;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Position.__new__(this);
MochiKit.Base._exportSymbols(this,MochiKit.Position);
MochiKit.Base._deps("Visual",["Base","DOM","Style","Color","Position"]);
MochiKit.Visual.NAME="MochiKit.Visual";
MochiKit.Visual.VERSION="1.5";
MochiKit.Visual.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Visual.toString=function(){
return this.__repr__();
};
MochiKit.Visual._RoundCorners=function(e,_5e1){
e=MochiKit.DOM.getElement(e);
this._setOptions(_5e1);
if(this.options.__unstable__wrapElement){
e=this._doWrap(e);
}
var _5e2=this.options.color;
var C=MochiKit.Color.Color;
if(this.options.color==="fromElement"){
_5e2=C.fromBackground(e);
}else{
if(!(_5e2 instanceof C)){
_5e2=C.fromString(_5e2);
}
}
this.isTransparent=(_5e2.asRGB().a<=0);
var _5e4=this.options.bgColor;
if(this.options.bgColor==="fromParent"){
_5e4=C.fromBackground(e.offsetParent);
}else{
if(!(_5e4 instanceof C)){
_5e4=C.fromString(_5e4);
}
}
this._roundCornersImpl(e,_5e2,_5e4);
};
MochiKit.Visual._RoundCorners.prototype={_doWrap:function(e){
var _5e6=e.parentNode;
var doc=MochiKit.DOM.currentDocument();
if(typeof (doc.defaultView)==="undefined"||doc.defaultView===null){
return e;
}
var _5e8=doc.defaultView.getComputedStyle(e,null);
if(typeof (_5e8)==="undefined"||_5e8===null){
return e;
}
var _5e9=MochiKit.DOM.DIV({"style":{display:"block",marginTop:_5e8.getPropertyValue("padding-top"),marginRight:_5e8.getPropertyValue("padding-right"),marginBottom:_5e8.getPropertyValue("padding-bottom"),marginLeft:_5e8.getPropertyValue("padding-left"),padding:"0px"}});
_5e9.innerHTML=e.innerHTML;
e.innerHTML="";
e.appendChild(_5e9);
return e;
},_roundCornersImpl:function(e,_5eb,_5ec){
if(this.options.border){
this._renderBorder(e,_5ec);
}
if(this._isTopRounded()){
this._roundTopCorners(e,_5eb,_5ec);
}
if(this._isBottomRounded()){
this._roundBottomCorners(e,_5eb,_5ec);
}
},_renderBorder:function(el,_5ee){
var _5ef="1px solid "+this._borderColor(_5ee);
var _5f0="border-left: "+_5ef;
var _5f1="border-right: "+_5ef;
var _5f2="style='"+_5f0+";"+_5f1+"'";
el.innerHTML="<div "+_5f2+">"+el.innerHTML+"</div>";
},_roundTopCorners:function(el,_5f4,_5f5){
var _5f6=this._createCorner(_5f5);
for(var i=0;i<this.options.numSlices;i++){
_5f6.appendChild(this._createCornerSlice(_5f4,_5f5,i,"top"));
}
el.style.paddingTop=0;
el.insertBefore(_5f6,el.firstChild);
},_roundBottomCorners:function(el,_5f9,_5fa){
var _5fb=this._createCorner(_5fa);
for(var i=(this.options.numSlices-1);i>=0;i--){
_5fb.appendChild(this._createCornerSlice(_5f9,_5fa,i,"bottom"));
}
el.style.paddingBottom=0;
el.appendChild(_5fb);
},_createCorner:function(_5fd){
var dom=MochiKit.DOM;
return dom.DIV({style:{backgroundColor:_5fd.toString()}});
},_createCornerSlice:function(_5ff,_600,n,_602){
var _603=MochiKit.DOM.SPAN();
var _604=_603.style;
_604.backgroundColor=_5ff.toString();
_604.display="block";
_604.height="1px";
_604.overflow="hidden";
_604.fontSize="1px";
var _605=this._borderColor(_5ff,_600);
if(this.options.border&&n===0){
_604.borderTopStyle="solid";
_604.borderTopWidth="1px";
_604.borderLeftWidth="0px";
_604.borderRightWidth="0px";
_604.borderBottomWidth="0px";
_604.height="0px";
_604.borderColor=_605.toString();
}else{
if(_605){
_604.borderColor=_605.toString();
_604.borderStyle="solid";
_604.borderWidth="0px 1px";
}
}
if(!this.options.compact&&(n==(this.options.numSlices-1))){
_604.height="2px";
}
this._setMargin(_603,n,_602);
this._setBorder(_603,n,_602);
return _603;
},_setOptions:function(_606){
this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false,__unstable__wrapElement:false};
MochiKit.Base.update(this.options,_606);
this.options.numSlices=(this.options.compact?2:4);
},_whichSideTop:function(){
var _607=this.options.corners;
if(this._hasString(_607,"all","top")){
return "";
}
var _608=(_607.indexOf("tl")!=-1);
var _609=(_607.indexOf("tr")!=-1);
if(_608&&_609){
return "";
}
if(_608){
return "left";
}
if(_609){
return "right";
}
return "";
},_whichSideBottom:function(){
var _60a=this.options.corners;
if(this._hasString(_60a,"all","bottom")){
return "";
}
var _60b=(_60a.indexOf("bl")!=-1);
var _60c=(_60a.indexOf("br")!=-1);
if(_60b&&_60c){
return "";
}
if(_60b){
return "left";
}
if(_60c){
return "right";
}
return "";
},_borderColor:function(_60d,_60e){
if(_60d=="transparent"){
return _60e;
}else{
if(this.options.border){
return this.options.border;
}else{
if(this.options.blend){
return _60e.blendedColor(_60d);
}
}
}
return "";
},_setMargin:function(el,n,_611){
var _612=this._marginSize(n)+"px";
var _613=(_611=="top"?this._whichSideTop():this._whichSideBottom());
var _614=el.style;
if(_613=="left"){
_614.marginLeft=_612;
_614.marginRight="0px";
}else{
if(_613=="right"){
_614.marginRight=_612;
_614.marginLeft="0px";
}else{
_614.marginLeft=_612;
_614.marginRight=_612;
}
}
},_setBorder:function(el,n,_617){
var _618=this._borderSize(n)+"px";
var _619=(_617=="top"?this._whichSideTop():this._whichSideBottom());
var _61a=el.style;
if(_619=="left"){
_61a.borderLeftWidth=_618;
_61a.borderRightWidth="0px";
}else{
if(_619=="right"){
_61a.borderRightWidth=_618;
_61a.borderLeftWidth="0px";
}else{
_61a.borderLeftWidth=_618;
_61a.borderRightWidth=_618;
}
}
},_marginSize:function(n){
if(this.isTransparent){
return 0;
}
var o=this.options;
if(o.compact&&o.blend){
var _61d=[1,0];
return _61d[n];
}else{
if(o.compact){
var _61e=[2,1];
return _61e[n];
}else{
if(o.blend){
var _61f=[3,2,1,0];
return _61f[n];
}else{
var _620=[5,3,2,1];
return _620[n];
}
}
}
},_borderSize:function(n){
var o=this.options;
var _623;
if(o.compact&&(o.blend||this.isTransparent)){
return 1;
}else{
if(o.compact){
_623=[1,0];
}else{
if(o.blend){
_623=[2,1,1,1];
}else{
if(o.border){
_623=[0,2,0,0];
}else{
if(this.isTransparent){
_623=[5,3,2,1];
}else{
return 0;
}
}
}
}
}
return _623[n];
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
MochiKit.Visual.roundElement=function(e,_628){
new MochiKit.Visual._RoundCorners(e,_628);
};
MochiKit.Visual.roundClass=function(_629,_62a,_62b){
var _62c=MochiKit.DOM.getElementsByTagAndClassName(_629,_62a);
for(var i=0;i<_62c.length;i++){
MochiKit.Visual.roundElement(_62c[i],_62b);
}
};
MochiKit.Visual.tagifyText=function(_62e,_62f){
_62f=_62f||"position:relative";
if(/MSIE/.test(navigator.userAgent)){
_62f+=";zoom:1";
}
_62e=MochiKit.DOM.getElement(_62e);
var ma=MochiKit.Base.map;
ma(function(_631){
if(_631.nodeType==3){
ma(function(_632){
_62e.insertBefore(MochiKit.DOM.SPAN({style:_62f},_632==" "?String.fromCharCode(160):_632),_631);
},_631.nodeValue.split(""));
MochiKit.DOM.removeElement(_631);
}
},_62e.childNodes);
};
MochiKit.Visual.forceRerendering=function(_633){
try{
_633=MochiKit.DOM.getElement(_633);
var n=document.createTextNode(" ");
_633.appendChild(n);
_633.removeChild(n);
}
catch(e){
}
};
MochiKit.Visual.multiple=function(_635,_636,_637){
_637=MochiKit.Base.update({speed:0.1,delay:0},_637);
var _638=_637.delay;
var _639=0;
MochiKit.Base.map(function(_63a){
_637.delay=_639*_637.speed+_638;
new _636(_63a,_637);
_639+=1;
},_635);
};
MochiKit.Visual.PAIRS={"slide":["slideDown","slideUp"],"blind":["blindDown","blindUp"],"appear":["appear","fade"],"size":["grow","shrink"]};
MochiKit.Visual.toggle=function(_63b,_63c,_63d){
_63b=MochiKit.DOM.getElement(_63b);
_63c=(_63c||"appear").toLowerCase();
_63d=MochiKit.Base.update({queue:{position:"end",scope:(_63b.id||"global"),limit:1}},_63d);
var v=MochiKit.Visual;
v[MochiKit.Style.getStyle(_63b,"display")!="none"?v.PAIRS[_63c][1]:v.PAIRS[_63c][0]](_63b,_63d);
};
MochiKit.Visual.Transitions={};
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
MochiKit.Visual.Transitions.pulse=function(pos,_645){
if(_645){
pos*=2*_645;
}else{
pos*=10;
}
var _646=pos-Math.floor(pos);
return (Math.floor(pos)%2==0)?_646:1-_646;
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
MochiKit.Base.update(MochiKit.Visual.ScopedQueue.prototype,{__init__:function(){
this.effects=[];
this.interval=null;
},add:function(_64b){
var _64c=new Date().getTime();
var _64d=(typeof (_64b.options.queue)=="string")?_64b.options.queue:_64b.options.queue.position;
var ma=MochiKit.Base.map;
switch(_64d){
case "front":
ma(function(e){
if(e.state=="idle"){
e.startOn+=_64b.finishOn;
e.finishOn+=_64b.finishOn;
}
},this.effects);
break;
case "end":
var _650;
ma(function(e){
var i=e.finishOn;
if(i>=(_650||i)){
_650=i;
}
},this.effects);
_64c=_650||_64c;
break;
case "break":
ma(function(e){
e.finalize();
},this.effects);
break;
}
_64b.startOn+=_64c;
_64b.finishOn+=_64c;
if(!_64b.options.queue.limit||this.effects.length<_64b.options.queue.limit){
this.effects.push(_64b);
}
if(!this.interval){
this.interval=this.startLoop(MochiKit.Base.bind(this.loop,this),40);
}
},startLoop:function(func,_655){
return setInterval(func,_655);
},remove:function(_656){
this.effects=MochiKit.Base.filter(function(e){
return e!=_656;
},this.effects);
if(!this.effects.length){
this.stopLoop(this.interval);
this.interval=null;
}
},stopLoop:function(_658){
clearInterval(_658);
},loop:function(){
var _659=new Date().getTime();
MochiKit.Base.map(function(_65a){
_65a.loop(_659);
},this.effects);
}});
MochiKit.Visual.Queues={instances:{},get:function(_65b){
if(typeof (_65b)!="string"){
return _65b;
}
if(!this.instances[_65b]){
this.instances[_65b]=new MochiKit.Visual.ScopedQueue();
}
return this.instances[_65b];
}};
MochiKit.Visual.Queue=MochiKit.Visual.Queues.get("global");
MochiKit.Visual.DefaultOptions={transition:MochiKit.Visual.Transitions.sinoidal,duration:1,fps:25,sync:false,from:0,to:1,delay:0,queue:"parallel"};
MochiKit.Visual.Base=function(){
};
MochiKit.Visual.Base.prototype={__class__:MochiKit.Visual.Base,start:function(_65c){
var v=MochiKit.Visual;
this.options=MochiKit.Base.setdefault(_65c,v.DefaultOptions);
this.currentFrame=0;
this.state="idle";
this.startOn=this.options.delay*1000;
this.finishOn=this.startOn+(this.options.duration*1000);
this.event("beforeStart");
if(!this.options.sync){
v.Queues.get(typeof (this.options.queue)=="string"?"global":this.options.queue.scope).add(this);
}
},loop:function(_65e){
if(_65e>=this.startOn){
if(_65e>=this.finishOn){
return this.finalize();
}
var pos=(_65e-this.startOn)/(this.finishOn-this.startOn);
var _660=Math.round(pos*this.options.fps*this.options.duration);
if(_660>this.currentFrame){
this.render(pos);
this.currentFrame=_660;
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
},update:function(_662){
},event:function(_663){
if(this.options[_663+"Internal"]){
this.options[_663+"Internal"](this);
}
if(this.options[_663]){
this.options[_663](this);
}
},repr:function(){
return "["+this.__class__.NAME+", options:"+MochiKit.Base.repr(this.options)+"]";
}};
MochiKit.Visual.Parallel=function(_664,_665){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_664,_665);
}
this.__init__(_664,_665);
};
MochiKit.Visual.Parallel.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Parallel.prototype,{__class__:MochiKit.Visual.Parallel,__init__:function(_667,_668){
this.effects=_667||[];
this.start(_668);
},update:function(_669){
MochiKit.Base.map(function(_66a){
_66a.render(_669);
},this.effects);
},finish:function(){
MochiKit.Base.map(function(_66b){
_66b.finalize();
},this.effects);
}});
MochiKit.Visual.Sequence=function(_66c,_66d){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_66c,_66d);
}
this.__init__(_66c,_66d);
};
MochiKit.Visual.Sequence.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Sequence.prototype,{__class__:MochiKit.Visual.Sequence,__init__:function(_66f,_670){
var defs={transition:MochiKit.Visual.Transitions.linear,duration:0};
this.effects=_66f||[];
MochiKit.Base.map(function(_672){
defs.duration+=_672.options.duration;
},this.effects);
MochiKit.Base.setdefault(_670,defs);
this.start(_670);
},update:function(_673){
var time=_673*this.options.duration;
for(var i=0;i<this.effects.length;i++){
var _676=this.effects[i];
if(time<=_676.options.duration){
_676.render(time/_676.options.duration);
break;
}else{
time-=_676.options.duration;
}
}
},finish:function(){
MochiKit.Base.map(function(_677){
_677.finalize();
},this.effects);
}});
MochiKit.Visual.Opacity=function(_678,_679){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_678,_679);
}
this.__init__(_678,_679);
};
MochiKit.Visual.Opacity.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Opacity.prototype,{__class__:MochiKit.Visual.Opacity,__init__:function(_67b,_67c){
var b=MochiKit.Base;
var s=MochiKit.Style;
this.element=MochiKit.DOM.getElement(_67b);
if(this.element.currentStyle&&(!this.element.currentStyle.hasLayout)){
s.setStyle(this.element,{zoom:1});
}
_67c=b.update({from:s.getStyle(this.element,"opacity")||0,to:1},_67c);
this.start(_67c);
},update:function(_67f){
MochiKit.Style.setStyle(this.element,{"opacity":_67f});
}});
MochiKit.Visual.Move=function(_680,_681){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_680,_681);
}
this.__init__(_680,_681);
};
MochiKit.Visual.Move.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Move.prototype,{__class__:MochiKit.Visual.Move,__init__:function(_683,_684){
this.element=MochiKit.DOM.getElement(_683);
_684=MochiKit.Base.update({x:0,y:0,mode:"relative"},_684);
this.start(_684);
},setup:function(){
MochiKit.Style.makePositioned(this.element);
var s=this.element.style;
var _686=s.visibility;
var _687=s.display;
if(_687=="none"){
s.visibility="hidden";
s.display="";
}
this.originalLeft=parseFloat(MochiKit.Style.getStyle(this.element,"left")||"0");
this.originalTop=parseFloat(MochiKit.Style.getStyle(this.element,"top")||"0");
if(this.options.mode=="absolute"){
this.options.x-=this.originalLeft;
this.options.y-=this.originalTop;
}
if(_687=="none"){
s.visibility=_686;
s.display=_687;
}
},update:function(_688){
MochiKit.Style.setStyle(this.element,{left:Math.round(this.options.x*_688+this.originalLeft)+"px",top:Math.round(this.options.y*_688+this.originalTop)+"px"});
}});
MochiKit.Visual.Scale=function(_689,_68a,_68b){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_689,_68a,_68b);
}
this.__init__(_689,_68a,_68b);
};
MochiKit.Visual.Scale.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Scale.prototype,{__class__:MochiKit.Visual.Scale,__init__:function(_68d,_68e,_68f){
this.element=MochiKit.DOM.getElement(_68d);
_68f=MochiKit.Base.update({scaleX:true,scaleY:true,scaleContent:true,scaleFromCenter:false,scaleMode:"box",scaleFrom:100,scaleTo:_68e},_68f);
this.start(_68f);
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
var _693=MochiKit.Style.getStyle(this.element,"font-size")||"100%";
ma(b(function(_694){
if(_693.indexOf(_694)>0){
this.fontSize=parseFloat(_693);
this.fontSizeType=_694;
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
},update:function(_695){
var _696=(this.options.scaleFrom/100)+(this.factor*_695);
if(this.options.scaleContent&&this.fontSize){
MochiKit.Style.setStyle(this.element,{fontSize:this.fontSize*_696+this.fontSizeType});
}
this.setDimensions(this.dims[0]*_696,this.dims[1]*_696);
},finish:function(){
if(this.restoreAfterFinish){
MochiKit.Style.setStyle(this.element,this.originalStyle);
}
},setDimensions:function(_697,_698){
var d={};
var r=Math.round;
if(/MSIE/.test(navigator.userAgent)){
r=Math.ceil;
}
if(this.options.scaleX){
d.width=r(_698)+"px";
}
if(this.options.scaleY){
d.height=r(_697)+"px";
}
if(this.options.scaleFromCenter){
var topd=(_697-this.dims[0])/2;
var _69c=(_698-this.dims[1])/2;
if(this.elementPositioning=="absolute"){
if(this.options.scaleY){
d.top=this.originalTop-topd+"px";
}
if(this.options.scaleX){
d.left=this.originalLeft-_69c+"px";
}
}else{
if(this.options.scaleY){
d.top=-topd+"px";
}
if(this.options.scaleX){
d.left=-_69c+"px";
}
}
}
MochiKit.Style.setStyle(this.element,d);
}});
MochiKit.Visual.Highlight=function(_69d,_69e){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_69d,_69e);
}
this.__init__(_69d,_69e);
};
MochiKit.Visual.Highlight.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Highlight.prototype,{__class__:MochiKit.Visual.Highlight,__init__:function(_6a0,_6a1){
this.element=MochiKit.DOM.getElement(_6a0);
_6a1=MochiKit.Base.update({startcolor:"#ffff99"},_6a1);
this.start(_6a1);
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
},update:function(_6a6){
var m="#";
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(this._base[i]+this._delta[i]*_6a6));
},this),[0,1,2]);
MochiKit.Style.setStyle(this.element,{backgroundColor:m});
},finish:function(){
MochiKit.Style.setStyle(this.element,MochiKit.Base.update(this.oldStyle,{backgroundColor:this.options.restorecolor}));
}});
MochiKit.Visual.ScrollTo=function(_6a9,_6aa){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6a9,_6aa);
}
this.__init__(_6a9,_6aa);
};
MochiKit.Visual.ScrollTo.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.ScrollTo.prototype,{__class__:MochiKit.Visual.ScrollTo,__init__:function(_6ac,_6ad){
this.element=MochiKit.DOM.getElement(_6ac);
this.start(_6ad);
},setup:function(){
var p=MochiKit.Position;
p.prepare();
var _6af=p.cumulativeOffset(this.element);
if(this.options.offset){
_6af.y+=this.options.offset;
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
this.delta=(_6af.y>max?max:_6af.y)-this.scrollStart;
},update:function(_6b1){
var p=MochiKit.Position;
p.prepare();
window.scrollTo(p.windowOffset.x,this.scrollStart+(_6b1*this.delta));
}});
MochiKit.Visual.CSS_LENGTH=/^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;
MochiKit.Visual.Morph=function(_6b3,_6b4){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6b3,_6b4);
}
this.__init__(_6b3,_6b4);
};
MochiKit.Visual.Morph.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Morph.prototype,{__class__:MochiKit.Visual.Morph,__init__:function(_6b6,_6b7){
this.element=MochiKit.DOM.getElement(_6b6);
this.start(_6b7);
},setup:function(){
var b=MochiKit.Base;
var _6b9=this.options.style;
this.styleStart={};
this.styleEnd={};
this.units={};
var _6ba,unit;
for(var s in _6b9){
_6ba=_6b9[s];
s=b.camelize(s);
if(MochiKit.Visual.CSS_LENGTH.test(_6ba)){
var _6bd=_6ba.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_6ba=parseFloat(_6bd[1]);
unit=(_6bd.length==3)?_6bd[2]:null;
this.styleEnd[s]=_6ba;
this.units[s]=unit;
_6ba=MochiKit.Style.getStyle(this.element,s);
_6bd=_6ba.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_6ba=parseFloat(_6bd[1]);
this.styleStart[s]=_6ba;
}else{
if(/[Cc]olor$/.test(s)){
var c=MochiKit.Color.Color;
_6ba=c.fromString(_6ba);
if(_6ba){
this.units[s]="color";
this.styleEnd[s]=_6ba.toHexString();
_6ba=MochiKit.Style.getStyle(this.element,s);
this.styleStart[s]=c.fromString(_6ba).toHexString();
this.styleStart[s]=b.map(b.bind(function(i){
return parseInt(this.styleStart[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
this.styleEnd[s]=b.map(b.bind(function(i){
return parseInt(this.styleEnd[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
}
}else{
this.element.style[s]=_6ba;
}
}
}
},update:function(_6c1){
var _6c2;
for(var s in this.styleStart){
if(this.units[s]=="color"){
var m="#";
var _6c5=this.styleStart[s];
var end=this.styleEnd[s];
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(_6c5[i]+(end[i]-_6c5[i])*_6c1));
},this),[0,1,2]);
this.element.style[s]=m;
}else{
_6c2=this.styleStart[s]+Math.round((this.styleEnd[s]-this.styleStart[s])*_6c1*1000)/1000+this.units[s];
this.element.style[s]=_6c2;
}
}
}});
MochiKit.Visual.fade=function(_6c8,_6c9){
var s=MochiKit.Style;
var _6cb=s.getStyle(_6c8,"opacity");
_6c9=MochiKit.Base.update({from:s.getStyle(_6c8,"opacity")||1,to:0,afterFinishInternal:function(_6cc){
if(_6cc.options.to!==0){
return;
}
s.hideElement(_6cc.element);
s.setStyle(_6cc.element,{"opacity":_6cb});
}},_6c9);
return new MochiKit.Visual.Opacity(_6c8,_6c9);
};
MochiKit.Visual.appear=function(_6cd,_6ce){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_6ce=MochiKit.Base.update({from:(s.getStyle(_6cd,"display")=="none"?0:s.getStyle(_6cd,"opacity")||0),to:1,afterFinishInternal:function(_6d1){
v.forceRerendering(_6d1.element);
},beforeSetupInternal:function(_6d2){
s.setStyle(_6d2.element,{"opacity":_6d2.options.from});
s.showElement(_6d2.element);
}},_6ce);
return new v.Opacity(_6cd,_6ce);
};
MochiKit.Visual.puff=function(_6d3,_6d4){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_6d3=MochiKit.DOM.getElement(_6d3);
var _6d7=MochiKit.Style.getElementDimensions(_6d3,true);
var _6d8={position:s.getStyle(_6d3,"position"),top:_6d3.style.top,left:_6d3.style.left,width:_6d3.style.width,height:_6d3.style.height,opacity:s.getStyle(_6d3,"opacity")};
_6d4=MochiKit.Base.update({beforeSetupInternal:function(_6d9){
MochiKit.Position.absolutize(_6d9.effects[0].element);
},afterFinishInternal:function(_6da){
s.hideElement(_6da.effects[0].element);
s.setStyle(_6da.effects[0].element,_6d8);
},scaleContent:true,scaleFromCenter:true},_6d4);
return new v.Parallel([new v.Scale(_6d3,200,{sync:true,scaleFromCenter:_6d4.scaleFromCenter,scaleMode:{originalHeight:_6d7.h,originalWidth:_6d7.w},scaleContent:_6d4.scaleContent,restoreAfterFinish:true}),new v.Opacity(_6d3,{sync:true,to:0})],_6d4);
};
MochiKit.Visual.blindUp=function(_6db,_6dc){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6db=d.getElement(_6db);
var _6df=s.getElementDimensions(_6db,true);
var _6e0=s.makeClipping(_6db);
_6dc=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_6df.h,originalWidth:_6df.w},restoreAfterFinish:true,afterFinishInternal:function(_6e1){
s.hideElement(_6e1.element);
s.undoClipping(_6e1.element,_6e0);
}},_6dc);
return new MochiKit.Visual.Scale(_6db,0,_6dc);
};
MochiKit.Visual.blindDown=function(_6e2,_6e3){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6e2=d.getElement(_6e2);
var _6e6=s.getElementDimensions(_6e2,true);
var _6e7;
_6e3=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_6e6.h,originalWidth:_6e6.w},restoreAfterFinish:true,afterSetupInternal:function(_6e8){
_6e7=s.makeClipping(_6e8.element);
s.setStyle(_6e8.element,{height:"0px"});
s.showElement(_6e8.element);
},afterFinishInternal:function(_6e9){
s.undoClipping(_6e9.element,_6e7);
}},_6e3);
return new MochiKit.Visual.Scale(_6e2,100,_6e3);
};
MochiKit.Visual.switchOff=function(_6ea,_6eb){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6ea=d.getElement(_6ea);
var _6ee=s.getElementDimensions(_6ea,true);
var _6ef=s.getStyle(_6ea,"opacity");
var _6f0;
_6eb=MochiKit.Base.update({duration:0.7,restoreAfterFinish:true,beforeSetupInternal:function(_6f1){
s.makePositioned(_6ea);
_6f0=s.makeClipping(_6ea);
},afterFinishInternal:function(_6f2){
s.hideElement(_6ea);
s.undoClipping(_6ea,_6f0);
s.undoPositioned(_6ea);
s.setStyle(_6ea,{"opacity":_6ef});
}},_6eb);
var v=MochiKit.Visual;
return new v.Sequence([new v.appear(_6ea,{sync:true,duration:0.57*_6eb.duration,from:0,transition:v.Transitions.flicker}),new v.Scale(_6ea,1,{sync:true,duration:0.43*_6eb.duration,scaleFromCenter:true,scaleX:false,scaleMode:{originalHeight:_6ee.h,originalWidth:_6ee.w},scaleContent:false,restoreAfterFinish:true})],_6eb);
};
MochiKit.Visual.dropOut=function(_6f4,_6f5){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6f4=d.getElement(_6f4);
var _6f8={top:s.getStyle(_6f4,"top"),left:s.getStyle(_6f4,"left"),opacity:s.getStyle(_6f4,"opacity")};
_6f5=MochiKit.Base.update({duration:0.5,distance:100,beforeSetupInternal:function(_6f9){
s.makePositioned(_6f9.effects[0].element);
},afterFinishInternal:function(_6fa){
s.hideElement(_6fa.effects[0].element);
s.undoPositioned(_6fa.effects[0].element);
s.setStyle(_6fa.effects[0].element,_6f8);
}},_6f5);
var v=MochiKit.Visual;
return new v.Parallel([new v.Move(_6f4,{x:0,y:_6f5.distance,sync:true}),new v.Opacity(_6f4,{sync:true,to:0})],_6f5);
};
MochiKit.Visual.shake=function(_6fc,_6fd){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_6fc=d.getElement(_6fc);
var _701={top:s.getStyle(_6fc,"top"),left:s.getStyle(_6fc,"left")};
_6fd=MochiKit.Base.update({duration:0.5,afterFinishInternal:function(_702){
s.undoPositioned(_6fc);
s.setStyle(_6fc,_701);
}},_6fd);
return new v.Sequence([new v.Move(_6fc,{sync:true,duration:0.1*_6fd.duration,x:20,y:0}),new v.Move(_6fc,{sync:true,duration:0.2*_6fd.duration,x:-40,y:0}),new v.Move(_6fc,{sync:true,duration:0.2*_6fd.duration,x:40,y:0}),new v.Move(_6fc,{sync:true,duration:0.2*_6fd.duration,x:-40,y:0}),new v.Move(_6fc,{sync:true,duration:0.2*_6fd.duration,x:40,y:0}),new v.Move(_6fc,{sync:true,duration:0.1*_6fd.duration,x:-20,y:0})],_6fd);
};
MochiKit.Visual.slideDown=function(_703,_704){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_703=d.getElement(_703);
if(!_703.firstChild){
throw new Error("MochiKit.Visual.slideDown must be used on a element with a child");
}
d.removeEmptyTextNodes(_703);
var _708=s.getStyle(_703.firstChild,"bottom")||0;
var _709=s.getElementDimensions(_703,true);
var _70a;
_704=b.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_709.h,originalWidth:_709.w},restoreAfterFinish:true,afterSetupInternal:function(_70b){
s.makePositioned(_70b.element);
s.makePositioned(_70b.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_70b.element,{top:""});
}
_70a=s.makeClipping(_70b.element);
s.setStyle(_70b.element,{height:"0px"});
s.showElement(_70b.element);
},afterUpdateInternal:function(_70c){
var _70d=s.getElementDimensions(_70c.element,true);
s.setStyle(_70c.element.firstChild,{bottom:(_70c.dims[0]-_70d.h)+"px"});
},afterFinishInternal:function(_70e){
s.undoClipping(_70e.element,_70a);
if(/MSIE/.test(navigator.userAgent)){
s.undoPositioned(_70e.element);
s.undoPositioned(_70e.element.firstChild);
}else{
s.undoPositioned(_70e.element.firstChild);
s.undoPositioned(_70e.element);
}
s.setStyle(_70e.element.firstChild,{bottom:_708});
}},_704);
return new MochiKit.Visual.Scale(_703,100,_704);
};
MochiKit.Visual.slideUp=function(_70f,_710){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_70f=d.getElement(_70f);
if(!_70f.firstChild){
throw new Error("MochiKit.Visual.slideUp must be used on a element with a child");
}
d.removeEmptyTextNodes(_70f);
var _714=s.getStyle(_70f.firstChild,"bottom");
var _715=s.getElementDimensions(_70f,true);
var _716;
_710=b.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_715.h,originalWidth:_715.w},scaleFrom:100,restoreAfterFinish:true,beforeStartInternal:function(_717){
s.makePositioned(_717.element);
s.makePositioned(_717.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_717.element,{top:""});
}
_716=s.makeClipping(_717.element);
s.showElement(_717.element);
},afterUpdateInternal:function(_718){
var _719=s.getElementDimensions(_718.element,true);
s.setStyle(_718.element.firstChild,{bottom:(_718.dims[0]-_719.h)+"px"});
},afterFinishInternal:function(_71a){
s.hideElement(_71a.element);
s.undoClipping(_71a.element,_716);
s.undoPositioned(_71a.element.firstChild);
s.undoPositioned(_71a.element);
s.setStyle(_71a.element.firstChild,{bottom:_714});
}},_710);
return new MochiKit.Visual.Scale(_70f,0,_710);
};
MochiKit.Visual.squish=function(_71b,_71c){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
var _720=s.getElementDimensions(_71b,true);
var _721;
_71c=b.update({restoreAfterFinish:true,scaleMode:{originalHeight:_720.w,originalWidth:_720.h},beforeSetupInternal:function(_722){
_721=s.makeClipping(_722.element);
},afterFinishInternal:function(_723){
s.hideElement(_723.element);
s.undoClipping(_723.element,_721);
}},_71c);
return new MochiKit.Visual.Scale(_71b,/Opera/.test(navigator.userAgent)?1:0,_71c);
};
MochiKit.Visual.grow=function(_724,_725){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_724=d.getElement(_724);
_725=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.full,scaleContent:true,scaleFromCenter:false},_725);
var _729={top:_724.style.top,left:_724.style.left,height:_724.style.height,width:_724.style.width,opacity:s.getStyle(_724,"opacity")};
var dims=s.getElementDimensions(_724,true);
var _72b,_72c;
var _72d,_72e;
switch(_725.direction){
case "top-left":
_72b=_72c=_72d=_72e=0;
break;
case "top-right":
_72b=dims.w;
_72c=_72e=0;
_72d=-dims.w;
break;
case "bottom-left":
_72b=_72d=0;
_72c=dims.h;
_72e=-dims.h;
break;
case "bottom-right":
_72b=dims.w;
_72c=dims.h;
_72d=-dims.w;
_72e=-dims.h;
break;
case "center":
_72b=dims.w/2;
_72c=dims.h/2;
_72d=-dims.w/2;
_72e=-dims.h/2;
break;
}
var _72f=MochiKit.Base.update({beforeSetupInternal:function(_730){
s.setStyle(_730.effects[0].element,{height:"0px"});
s.showElement(_730.effects[0].element);
},afterFinishInternal:function(_731){
s.undoClipping(_731.effects[0].element);
s.undoPositioned(_731.effects[0].element);
s.setStyle(_731.effects[0].element,_729);
}},_725);
return new v.Move(_724,{x:_72b,y:_72c,duration:0.01,beforeSetupInternal:function(_732){
s.hideElement(_732.element);
s.makeClipping(_732.element);
s.makePositioned(_732.element);
},afterFinishInternal:function(_733){
new v.Parallel([new v.Opacity(_733.element,{sync:true,to:1,from:0,transition:_725.opacityTransition}),new v.Move(_733.element,{x:_72d,y:_72e,sync:true,transition:_725.moveTransition}),new v.Scale(_733.element,100,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,scaleFrom:/Opera/.test(navigator.userAgent)?1:0,transition:_725.scaleTransition,scaleContent:_725.scaleContent,scaleFromCenter:_725.scaleFromCenter,restoreAfterFinish:true})],_72f);
}});
};
MochiKit.Visual.shrink=function(_734,_735){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_734=d.getElement(_734);
_735=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.none,scaleContent:true,scaleFromCenter:false},_735);
var _739={top:_734.style.top,left:_734.style.left,height:_734.style.height,width:_734.style.width,opacity:s.getStyle(_734,"opacity")};
var dims=s.getElementDimensions(_734,true);
var _73b,_73c;
switch(_735.direction){
case "top-left":
_73b=_73c=0;
break;
case "top-right":
_73b=dims.w;
_73c=0;
break;
case "bottom-left":
_73b=0;
_73c=dims.h;
break;
case "bottom-right":
_73b=dims.w;
_73c=dims.h;
break;
case "center":
_73b=dims.w/2;
_73c=dims.h/2;
break;
}
var _73d;
var _73e=MochiKit.Base.update({beforeStartInternal:function(_73f){
s.makePositioned(_73f.effects[0].element);
_73d=s.makeClipping(_73f.effects[0].element);
},afterFinishInternal:function(_740){
s.hideElement(_740.effects[0].element);
s.undoClipping(_740.effects[0].element,_73d);
s.undoPositioned(_740.effects[0].element);
s.setStyle(_740.effects[0].element,_739);
}},_735);
return new v.Parallel([new v.Opacity(_734,{sync:true,to:0,from:1,transition:_735.opacityTransition}),new v.Scale(_734,/Opera/.test(navigator.userAgent)?1:0,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,transition:_735.scaleTransition,scaleContent:_735.scaleContent,scaleFromCenter:_735.scaleFromCenter,restoreAfterFinish:true}),new v.Move(_734,{x:_73b,y:_73c,sync:true,transition:_735.moveTransition})],_73e);
};
MochiKit.Visual.pulsate=function(_741,_742){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var b=MochiKit.Base;
var _746=MochiKit.Style.getStyle(_741,"opacity");
_742=b.update({duration:3,from:0,afterFinishInternal:function(_747){
MochiKit.Style.setStyle(_747.element,{"opacity":_746});
}},_742);
var _748=_742.transition||v.Transitions.sinoidal;
_742.transition=function(pos){
return _748(1-v.Transitions.pulse(pos,_742.pulses));
};
return new v.Opacity(_741,_742);
};
MochiKit.Visual.fold=function(_74a,_74b){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_74a=d.getElement(_74a);
var _74f=s.getElementDimensions(_74a,true);
var _750={top:_74a.style.top,left:_74a.style.left,width:_74a.style.width,height:_74a.style.height};
var _751=s.makeClipping(_74a);
_74b=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_74f.h,originalWidth:_74f.w},afterFinishInternal:function(_752){
new v.Scale(_74a,1,{scaleContent:false,scaleY:false,scaleMode:{originalHeight:_74f.h,originalWidth:_74f.w},afterFinishInternal:function(_753){
s.hideElement(_753.element);
s.undoClipping(_753.element,_751);
s.setStyle(_753.element,_750);
}});
}},_74b);
return new v.Scale(_74a,5,_74b);
};
MochiKit.Visual.Color=MochiKit.Color.Color;
MochiKit.Visual.getElementsComputedStyle=MochiKit.DOM.computedStyle;
MochiKit.Visual.__new__=function(){
var m=MochiKit.Base;
m.nameFunctions(this);
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
};
MochiKit.Visual.EXPORT=["roundElement","roundClass","tagifyText","multiple","toggle","Parallel","Sequence","Opacity","Move","Scale","Highlight","ScrollTo","Morph","fade","appear","puff","blindUp","blindDown","switchOff","dropOut","shake","slideDown","slideUp","squish","grow","shrink","pulsate","fold"];
MochiKit.Visual.EXPORT_OK=["Base","PAIRS"];
MochiKit.Visual.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Visual);
MochiKit.Base._deps("DragAndDrop",["Base","Iter","DOM","Signal","Visual","Position"]);
MochiKit.DragAndDrop.NAME="MochiKit.DragAndDrop";
MochiKit.DragAndDrop.VERSION="1.5";
MochiKit.DragAndDrop.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.DragAndDrop.toString=function(){
return this.__repr__();
};
MochiKit.DragAndDrop.EXPORT=["Droppable","Draggable"];
MochiKit.DragAndDrop.EXPORT_OK=["Droppables","Draggables"];
MochiKit.DragAndDrop.Droppables={drops:[],remove:function(_755){
this.drops=MochiKit.Base.filter(function(d){
return d.element!=MochiKit.DOM.getElement(_755);
},this.drops);
},register:function(drop){
this.drops.push(drop);
},unregister:function(drop){
this.drops=MochiKit.Base.filter(function(d){
return d!=drop;
},this.drops);
},prepare:function(_75a){
MochiKit.Base.map(function(drop){
if(drop.isAccepted(_75a)){
if(drop.options.activeclass){
MochiKit.DOM.addElementClass(drop.element,drop.options.activeclass);
}
drop.options.onactive(drop.element,_75a);
}
},this.drops);
},findDeepestChild:function(_75c){
deepest=_75c[0];
for(i=1;i<_75c.length;++i){
if(MochiKit.DOM.isChildNode(_75c[i].element,deepest.element)){
deepest=_75c[i];
}
}
return deepest;
},show:function(_75d,_75e){
if(!this.drops.length){
return;
}
var _75f=[];
if(this.last_active){
this.last_active.deactivate();
}
MochiKit.Iter.forEach(this.drops,function(drop){
if(drop.isAffected(_75d,_75e)){
_75f.push(drop);
}
});
if(_75f.length>0){
drop=this.findDeepestChild(_75f);
MochiKit.Position.within(drop.element,_75d.page.x,_75d.page.y);
drop.options.onhover(_75e,drop.element,MochiKit.Position.overlap(drop.options.overlap,drop.element));
drop.activate();
}
},fire:function(_761,_762){
if(!this.last_active){
return;
}
MochiKit.Position.prepare();
if(this.last_active.isAffected(_761.mouse(),_762)){
this.last_active.options.ondrop(_762,this.last_active.element,_761);
}
},reset:function(_763){
MochiKit.Base.map(function(drop){
if(drop.options.activeclass){
MochiKit.DOM.removeElementClass(drop.element,drop.options.activeclass);
}
drop.options.ondesactive(drop.element,_763);
},this.drops);
if(this.last_active){
this.last_active.deactivate();
}
}};
MochiKit.DragAndDrop.Droppable=function(_765,_766){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_765,_766);
}
this.__init__(_765,_766);
};
MochiKit.DragAndDrop.Droppable.prototype={__class__:MochiKit.DragAndDrop.Droppable,__init__:function(_768,_769){
var d=MochiKit.DOM;
var b=MochiKit.Base;
this.element=d.getElement(_768);
this.options=b.update({greedy:true,hoverclass:null,activeclass:null,hoverfunc:b.noop,accept:null,onactive:b.noop,ondesactive:b.noop,onhover:b.noop,ondrop:b.noop,containment:[],tree:false},_769);
this.options._containers=[];
b.map(MochiKit.Base.bind(function(c){
this.options._containers.push(d.getElement(c));
},this),this.options.containment);
MochiKit.Style.makePositioned(this.element);
MochiKit.DragAndDrop.Droppables.register(this);
},isContained:function(_76d){
if(this.options._containers.length){
var _76e;
if(this.options.tree){
_76e=_76d.treeNode;
}else{
_76e=_76d.parentNode;
}
return MochiKit.Iter.some(this.options._containers,function(c){
return _76e==c;
});
}else{
return true;
}
},isAccepted:function(_770){
return ((!this.options.accept)||MochiKit.Iter.some(this.options.accept,function(c){
return MochiKit.DOM.hasElementClass(_770,c);
}));
},isAffected:function(_772,_773){
return ((this.element!=_773)&&this.isContained(_773)&&this.isAccepted(_773)&&MochiKit.Position.within(this.element,_772.page.x,_772.page.y));
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
MochiKit.DragAndDrop.Draggables={drags:[],register:function(_774){
if(this.drags.length===0){
var conn=MochiKit.Signal.connect;
this.eventMouseUp=conn(document,"onmouseup",this,this.endDrag);
this.eventMouseMove=conn(document,"onmousemove",this,this.updateDrag);
this.eventKeypress=conn(document,"onkeypress",this,this.keyPress);
}
this.drags.push(_774);
},unregister:function(_776){
this.drags=MochiKit.Base.filter(function(d){
return d!=_776;
},this.drags);
if(this.drags.length===0){
var disc=MochiKit.Signal.disconnect;
disc(this.eventMouseUp);
disc(this.eventMouseMove);
disc(this.eventKeypress);
}
},activate:function(_779){
window.focus();
this.activeDraggable=_779;
},deactivate:function(){
this.activeDraggable=null;
},updateDrag:function(_77a){
if(!this.activeDraggable){
return;
}
var _77b=_77a.mouse();
if(this._lastPointer&&(MochiKit.Base.repr(this._lastPointer.page)==MochiKit.Base.repr(_77b.page))){
return;
}
this._lastPointer=_77b;
this.activeDraggable.updateDrag(_77a,_77b);
},endDrag:function(_77c){
if(!this.activeDraggable){
return;
}
this._lastPointer=null;
this.activeDraggable.endDrag(_77c);
this.activeDraggable=null;
},keyPress:function(_77d){
if(this.activeDraggable){
this.activeDraggable.keyPress(_77d);
}
},notify:function(_77e,_77f,_780){
MochiKit.Signal.signal(this,_77e,_77f,_780);
}};
MochiKit.DragAndDrop.Draggable=function(_781,_782){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_781,_782);
}
this.__init__(_781,_782);
};
MochiKit.DragAndDrop.Draggable.prototype={__class__:MochiKit.DragAndDrop.Draggable,__init__:function(_784,_785){
var v=MochiKit.Visual;
var b=MochiKit.Base;
_785=b.update({handle:false,starteffect:function(_788){
this._savedOpacity=MochiKit.Style.getStyle(_788,"opacity")||1;
new v.Opacity(_788,{duration:0.2,from:this._savedOpacity,to:0.7});
},reverteffect:function(_789,_78a,_78b){
var dur=Math.sqrt(Math.abs(_78a^2)+Math.abs(_78b^2))*0.02;
return new v.Move(_789,{x:-_78b,y:-_78a,duration:dur});
},endeffect:function(_78d){
new v.Opacity(_78d,{duration:0.2,from:0.7,to:this._savedOpacity});
},onchange:b.noop,zindex:1000,revert:false,scroll:false,scrollSensitivity:20,scrollSpeed:15,snap:false},_785);
var d=MochiKit.DOM;
this.element=d.getElement(_784);
if(_785.handle&&(typeof (_785.handle)=="string")){
this.handle=d.getFirstElementByTagAndClassName(null,_785.handle,this.element);
}
if(!this.handle){
this.handle=d.getElement(_785.handle);
}
if(!this.handle){
this.handle=this.element;
}
if(_785.scroll&&!_785.scroll.scrollTo&&!_785.scroll.outerHTML){
_785.scroll=d.getElement(_785.scroll);
this._isScrollChild=MochiKit.DOM.isChildNode(this.element,_785.scroll);
}
MochiKit.Style.makePositioned(this.element);
this.delta=this.currentDelta();
this.options=_785;
this.dragging=false;
this.eventMouseDown=MochiKit.Signal.connect(this.handle,"onmousedown",this,this.initDrag);
MochiKit.DragAndDrop.Draggables.register(this);
},destroy:function(){
MochiKit.Signal.disconnect(this.eventMouseDown);
MochiKit.DragAndDrop.Draggables.unregister(this);
},currentDelta:function(){
var s=MochiKit.Style.getStyle;
return [parseInt(s(this.element,"left")||"0"),parseInt(s(this.element,"top")||"0")];
},initDrag:function(_790){
if(!_790.mouse().button.left){
return;
}
var src=_790.target();
var _792=(src.tagName||"").toUpperCase();
if(_792==="INPUT"||_792==="SELECT"||_792==="OPTION"||_792==="BUTTON"||_792==="TEXTAREA"){
return;
}
if(this._revert){
this._revert.cancel();
this._revert=null;
}
var _793=_790.mouse();
var pos=MochiKit.Position.cumulativeOffset(this.element);
this.offset=[_793.page.x-pos.x,_793.page.y-pos.y];
MochiKit.DragAndDrop.Draggables.activate(this);
_790.stop();
},startDrag:function(_795){
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
var _796=this._getWindowScroll(this.options.scroll);
this.originalScrollLeft=_796.left;
this.originalScrollTop=_796.top;
}else{
this.originalScrollLeft=this.options.scroll.scrollLeft;
this.originalScrollTop=this.options.scroll.scrollTop;
}
}
MochiKit.DragAndDrop.Droppables.prepare(this.element);
MochiKit.DragAndDrop.Draggables.notify("start",this,_795);
if(this.options.starteffect){
this.options.starteffect(this.element);
}
},updateDrag:function(_797,_798){
if(!this.dragging){
this.startDrag(_797);
}
MochiKit.Position.prepare();
MochiKit.DragAndDrop.Droppables.show(_798,this.element);
MochiKit.DragAndDrop.Draggables.notify("drag",this,_797);
this.draw(_798);
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
var _79c=[0,0];
if(_798.page.x>(q.x-this.options.scrollSensitivity)){
_79c[0]=_798.page.x-(q.x-this.options.scrollSensitivity);
}else{
if(_798.page.x<(p.x+this.options.scrollSensitivity)){
_79c[0]=_798.page.x-(p.x+this.options.scrollSensitivity);
}
}
if(_798.page.y>(q.y-this.options.scrollSensitivity)){
_79c[1]=_798.page.y-(q.y-this.options.scrollSensitivity);
}else{
if(_798.page.y<(p.y+this.options.scrollSensitivity)){
_79c[1]=_798.page.y-(p.y+this.options.scrollSensitivity);
}
}
this.startScrolling(_79c);
}
if(/AppleWebKit/.test(navigator.appVersion)){
window.scrollBy(0,0);
}
_797.stop();
},finishDrag:function(_79d,_79e){
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
if(_79e){
dr.Droppables.fire(_79d,this.element);
}
dr.Draggables.notify("end",this,_79d);
var _7a0=this.options.revert;
if(_7a0&&typeof (_7a0)=="function"){
_7a0=_7a0(this.element);
}
var d=this.currentDelta();
if(_7a0&&this.options.reverteffect){
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
},keyPress:function(_7a2){
if(_7a2.key().string!="KEY_ESCAPE"){
return;
}
this.finishDrag(_7a2,false);
_7a2.stop();
},endDrag:function(_7a3){
if(!this.dragging){
return;
}
this.stopScrolling();
this.finishDrag(_7a3,true);
_7a3.stop();
},draw:function(_7a4){
var pos=MochiKit.Position.cumulativeOffset(this.element);
var d=this.currentDelta();
pos.x-=d[0];
pos.y-=d[1];
if(this.options.scroll&&(this.options.scroll!=window&&this._isScrollChild)){
pos.x-=this.options.scroll.scrollLeft-this.originalScrollLeft;
pos.y-=this.options.scroll.scrollTop-this.originalScrollTop;
}
var p=[_7a4.page.x-pos.x-this.offset[0],_7a4.page.y-pos.y-this.offset[1]];
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
var _7ab=this.element.style;
if((!this.options.constraint)||(this.options.constraint=="horizontal")){
_7ab.left=p[0]+"px";
}
if((!this.options.constraint)||(this.options.constraint=="vertical")){
_7ab.top=p[1]+"px";
}
if(_7ab.visibility=="hidden"){
_7ab.visibility="";
}
},stopScrolling:function(){
if(this.scrollInterval){
clearInterval(this.scrollInterval);
this.scrollInterval=null;
MochiKit.DragAndDrop.Draggables._lastScrollPointer=null;
}
},startScrolling:function(_7ac){
if(!_7ac[0]&&!_7ac[1]){
return;
}
this.scrollSpeed=[_7ac[0]*this.options.scrollSpeed,_7ac[1]*this.options.scrollSpeed];
this.lastScrolled=new Date();
this.scrollInterval=setInterval(MochiKit.Base.bind(this.scroll,this),10);
},scroll:function(){
var _7ad=new Date();
var _7ae=_7ad-this.lastScrolled;
this.lastScrolled=_7ad;
if(this.options.scroll==window){
var s=this._getWindowScroll(this.options.scroll);
if(this.scrollSpeed[0]||this.scrollSpeed[1]){
var dm=_7ae/1000;
this.options.scroll.scrollTo(s.left+dm*this.scrollSpeed[0],s.top+dm*this.scrollSpeed[1]);
}
}else{
this.options.scroll.scrollLeft+=this.scrollSpeed[0]*_7ae/1000;
this.options.scroll.scrollTop+=this.scrollSpeed[1]*_7ae/1000;
}
var d=MochiKit.DragAndDrop;
MochiKit.Position.prepare();
d.Droppables.show(d.Draggables._lastPointer,this.element);
d.Draggables.notify("drag",this);
if(this._isScrollChild){
d.Draggables._lastScrollPointer=d.Draggables._lastScrollPointer||d.Draggables._lastPointer;
d.Draggables._lastScrollPointer.x+=this.scrollSpeed[0]*_7ae/1000;
d.Draggables._lastScrollPointer.y+=this.scrollSpeed[1]*_7ae/1000;
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
this.EXPORT_TAGS={":common":this.EXPORT,":all":MochiKit.Base.concat(this.EXPORT,this.EXPORT_OK)};
};
MochiKit.DragAndDrop.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.DragAndDrop);
MochiKit.Base._deps("Sortable",["Base","Iter","DOM","Position","DragAndDrop"]);
MochiKit.Sortable.NAME="MochiKit.Sortable";
MochiKit.Sortable.VERSION="1.5";
MochiKit.Sortable.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Sortable.toString=function(){
return this.__repr__();
};
MochiKit.Sortable.EXPORT=[];
MochiKit.Sortable.EXPORT_OK=[];
MochiKit.Base.update(MochiKit.Sortable,{sortables:{},_findRootElement:function(_7b6){
while(_7b6.tagName.toUpperCase()!="BODY"){
if(_7b6.id&&MochiKit.Sortable.sortables[_7b6.id]){
return _7b6;
}
_7b6=_7b6.parentNode;
}
},_createElementId:function(_7b7){
if(_7b7.id==null||_7b7.id==""){
var d=MochiKit.DOM;
var id;
var _7ba=1;
while(d.getElement(id="sortable"+_7ba)!=null){
_7ba+=1;
}
d.setNodeAttribute(_7b7,"id",id);
}
},options:function(_7bb){
_7bb=MochiKit.Sortable._findRootElement(MochiKit.DOM.getElement(_7bb));
if(!_7bb){
return;
}
return MochiKit.Sortable.sortables[_7bb.id];
},destroy:function(_7bc){
var s=MochiKit.Sortable.options(_7bc);
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
},create:function(_7c2,_7c3){
_7c2=MochiKit.DOM.getElement(_7c2);
var self=MochiKit.Sortable;
self._createElementId(_7c2);
_7c3=MochiKit.Base.update({element:_7c2,tag:"li",dropOnEmpty:false,tree:false,treeTag:"ul",overlap:"vertical",constraint:"vertical",containment:[_7c2],handle:false,only:false,hoverclass:null,ghosting:false,scroll:false,scrollSensitivity:20,scrollSpeed:15,format:/^[^_]*_(.*)$/,onChange:MochiKit.Base.noop,onUpdate:MochiKit.Base.noop,accept:null},_7c3);
self.destroy(_7c2);
var _7c5={revert:true,ghosting:_7c3.ghosting,scroll:_7c3.scroll,scrollSensitivity:_7c3.scrollSensitivity,scrollSpeed:_7c3.scrollSpeed,constraint:_7c3.constraint,handle:_7c3.handle};
if(_7c3.starteffect){
_7c5.starteffect=_7c3.starteffect;
}
if(_7c3.reverteffect){
_7c5.reverteffect=_7c3.reverteffect;
}else{
if(_7c3.ghosting){
_7c5.reverteffect=function(_7c6){
_7c6.style.top=0;
_7c6.style.left=0;
};
}
}
if(_7c3.endeffect){
_7c5.endeffect=_7c3.endeffect;
}
if(_7c3.zindex){
_7c5.zindex=_7c3.zindex;
}
var _7c7={overlap:_7c3.overlap,containment:_7c3.containment,hoverclass:_7c3.hoverclass,onhover:self.onHover,tree:_7c3.tree,accept:_7c3.accept};
var _7c8={onhover:self.onEmptyHover,overlap:_7c3.overlap,containment:_7c3.containment,hoverclass:_7c3.hoverclass,accept:_7c3.accept};
MochiKit.DOM.removeEmptyTextNodes(_7c2);
_7c3.draggables=[];
_7c3.droppables=[];
if(_7c3.dropOnEmpty||_7c3.tree){
new MochiKit.DragAndDrop.Droppable(_7c2,_7c8);
_7c3.droppables.push(_7c2);
}
MochiKit.Base.map(function(e){
var _7ca=_7c3.handle?MochiKit.DOM.getFirstElementByTagAndClassName(null,_7c3.handle,e):e;
_7c3.draggables.push(new MochiKit.DragAndDrop.Draggable(e,MochiKit.Base.update(_7c5,{handle:_7ca})));
new MochiKit.DragAndDrop.Droppable(e,_7c7);
if(_7c3.tree){
e.treeNode=_7c2;
}
_7c3.droppables.push(e);
},(self.findElements(_7c2,_7c3)||[]));
if(_7c3.tree){
MochiKit.Base.map(function(e){
new MochiKit.DragAndDrop.Droppable(e,_7c8);
e.treeNode=_7c2;
_7c3.droppables.push(e);
},(self.findTreeElements(_7c2,_7c3)||[]));
}
self.sortables[_7c2.id]=_7c3;
_7c3.lastValue=self.serialize(_7c2);
_7c3.startHandle=MochiKit.Signal.connect(MochiKit.DragAndDrop.Draggables,"start",MochiKit.Base.partial(self.onStart,_7c2));
_7c3.endHandle=MochiKit.Signal.connect(MochiKit.DragAndDrop.Draggables,"end",MochiKit.Base.partial(self.onEnd,_7c2));
},onStart:function(_7cc,_7cd){
var self=MochiKit.Sortable;
var _7cf=self.options(_7cc);
_7cf.lastValue=self.serialize(_7cf.element);
},onEnd:function(_7d0,_7d1){
var self=MochiKit.Sortable;
self.unmark();
var _7d3=self.options(_7d0);
if(_7d3.lastValue!=self.serialize(_7d3.element)){
_7d3.onUpdate(_7d3.element);
}
},findElements:function(_7d4,_7d5){
return MochiKit.Sortable.findChildren(_7d4,_7d5.only,_7d5.tree,_7d5.tag);
},findTreeElements:function(_7d6,_7d7){
return MochiKit.Sortable.findChildren(_7d6,_7d7.only,_7d7.tree?true:false,_7d7.treeTag);
},findChildren:function(_7d8,only,_7da,_7db){
if(!_7d8.hasChildNodes()){
return null;
}
_7db=_7db.toUpperCase();
if(only){
only=MochiKit.Base.flattenArray([only]);
}
var _7dc=[];
MochiKit.Base.map(function(e){
if(e.tagName&&e.tagName.toUpperCase()==_7db&&(!only||MochiKit.Iter.some(only,function(c){
return MochiKit.DOM.hasElementClass(e,c);
}))){
_7dc.push(e);
}
if(_7da){
var _7df=MochiKit.Sortable.findChildren(e,only,_7da,_7db);
if(_7df&&_7df.length>0){
_7dc=_7dc.concat(_7df);
}
}
},_7d8.childNodes);
return _7dc;
},onHover:function(_7e0,_7e1,_7e2){
if(MochiKit.DOM.isChildNode(_7e1,_7e0)){
return;
}
var self=MochiKit.Sortable;
if(_7e2>0.33&&_7e2<0.66&&self.options(_7e1).tree){
return;
}else{
if(_7e2>0.5){
self.mark(_7e1,"before");
if(_7e1.previousSibling!=_7e0){
var _7e4=_7e0.parentNode;
_7e0.style.visibility="hidden";
_7e1.parentNode.insertBefore(_7e0,_7e1);
if(_7e1.parentNode!=_7e4){
self.options(_7e4).onChange(_7e0);
}
self.options(_7e1.parentNode).onChange(_7e0);
}
}else{
self.mark(_7e1,"after");
var _7e5=_7e1.nextSibling||null;
if(_7e5!=_7e0){
var _7e4=_7e0.parentNode;
_7e0.style.visibility="hidden";
_7e1.parentNode.insertBefore(_7e0,_7e5);
if(_7e1.parentNode!=_7e4){
self.options(_7e4).onChange(_7e0);
}
self.options(_7e1.parentNode).onChange(_7e0);
}
}
}
},_offsetSize:function(_7e6,type){
if(type=="vertical"||type=="height"){
return _7e6.offsetHeight;
}else{
return _7e6.offsetWidth;
}
},onEmptyHover:function(_7e8,_7e9,_7ea){
var _7eb=_7e8.parentNode;
var self=MochiKit.Sortable;
var _7ed=self.options(_7e9);
if(!MochiKit.DOM.isChildNode(_7e9,_7e8)){
var _7ee;
var _7ef=self.findElements(_7e9,{tag:_7ed.tag,only:_7ed.only});
var _7f0=null;
if(_7ef){
var _7f1=self._offsetSize(_7e9,_7ed.overlap)*(1-_7ea);
for(_7ee=0;_7ee<_7ef.length;_7ee+=1){
if(_7f1-self._offsetSize(_7ef[_7ee],_7ed.overlap)>=0){
_7f1-=self._offsetSize(_7ef[_7ee],_7ed.overlap);
}else{
if(_7f1-(self._offsetSize(_7ef[_7ee],_7ed.overlap)/2)>=0){
_7f0=_7ee+1<_7ef.length?_7ef[_7ee+1]:null;
break;
}else{
_7f0=_7ef[_7ee];
break;
}
}
}
}
_7e9.insertBefore(_7e8,_7f0);
self.options(_7eb).onChange(_7e8);
_7ed.onChange(_7e8);
}
},unmark:function(){
var m=MochiKit.Sortable._marker;
if(m){
MochiKit.Style.hideElement(m);
}
},mark:function(_7f3,_7f4){
var d=MochiKit.DOM;
var self=MochiKit.Sortable;
var _7f7=self.options(_7f3.parentNode);
if(_7f7&&!_7f7.ghosting){
return;
}
if(!self._marker){
self._marker=d.getElement("dropmarker")||document.createElement("DIV");
MochiKit.Style.hideElement(self._marker);
d.addElementClass(self._marker,"dropmarker");
self._marker.style.position="absolute";
document.getElementsByTagName("body").item(0).appendChild(self._marker);
}
var _7f8=MochiKit.Position.cumulativeOffset(_7f3);
self._marker.style.left=_7f8.x+"px";
self._marker.style.top=_7f8.y+"px";
if(_7f4=="after"){
if(_7f7.overlap=="horizontal"){
self._marker.style.left=(_7f8.x+_7f3.clientWidth)+"px";
}else{
self._marker.style.top=(_7f8.y+_7f3.clientHeight)+"px";
}
}
MochiKit.Style.showElement(self._marker);
},_tree:function(_7f9,_7fa,_7fb){
var self=MochiKit.Sortable;
var _7fd=self.findElements(_7f9,_7fa)||[];
for(var i=0;i<_7fd.length;++i){
var _7ff=_7fd[i].id.match(_7fa.format);
if(!_7ff){
continue;
}
var _800={id:encodeURIComponent(_7ff?_7ff[1]:null),element:_7f9,parent:_7fb,children:[],position:_7fb.children.length,container:self._findChildrenElement(_7fd[i],_7fa.treeTag.toUpperCase())};
if(_800.container){
self._tree(_800.container,_7fa,_800);
}
_7fb.children.push(_800);
}
return _7fb;
},_findChildrenElement:function(_801,_802){
if(_801&&_801.hasChildNodes){
_802=_802.toUpperCase();
for(var i=0;i<_801.childNodes.length;++i){
if(_801.childNodes[i].tagName.toUpperCase()==_802){
return _801.childNodes[i];
}
}
}
return null;
},tree:function(_804,_805){
_804=MochiKit.DOM.getElement(_804);
var _806=MochiKit.Sortable.options(_804);
_805=MochiKit.Base.update({tag:_806.tag,treeTag:_806.treeTag,only:_806.only,name:_804.id,format:_806.format},_805||{});
var root={id:null,parent:null,children:new Array,container:_804,position:0};
return MochiKit.Sortable._tree(_804,_805,root);
},setSequence:function(_808,_809,_80a){
var self=MochiKit.Sortable;
var b=MochiKit.Base;
_808=MochiKit.DOM.getElement(_808);
_80a=b.update(self.options(_808),_80a||{});
var _80d={};
b.map(function(n){
var m=n.id.match(_80a.format);
if(m){
_80d[m[1]]=[n,n.parentNode];
}
n.parentNode.removeChild(n);
},self.findElements(_808,_80a));
b.map(function(_810){
var n=_80d[_810];
if(n){
n[1].appendChild(n[0]);
delete _80d[_810];
}
},_809);
},_constructIndex:function(node){
var _813="";
do{
if(node.id){
_813="["+node.position+"]"+_813;
}
}while((node=node.parent)!=null);
return _813;
},sequence:function(_814,_815){
_814=MochiKit.DOM.getElement(_814);
var self=MochiKit.Sortable;
var _815=MochiKit.Base.update(self.options(_814),_815||{});
return MochiKit.Base.map(function(item){
return item.id.match(_815.format)?item.id.match(_815.format)[1]:"";
},MochiKit.DOM.getElement(self.findElements(_814,_815)||[]));
},serialize:function(_818,_819){
_818=MochiKit.DOM.getElement(_818);
var self=MochiKit.Sortable;
_819=MochiKit.Base.update(self.options(_818),_819||{});
var name=encodeURIComponent(_819.name||_818.id);
if(_819.tree){
return MochiKit.Base.flattenArray(MochiKit.Base.map(function(item){
return [name+self._constructIndex(item)+"[id]="+encodeURIComponent(item.id)].concat(item.children.map(arguments.callee));
},self.tree(_818,_819).children)).join("&");
}else{
return MochiKit.Base.map(function(item){
return name+"[]="+encodeURIComponent(item);
},self.sequence(_818,_819)).join("&");
}
}});
MochiKit.Sortable.Sortable=MochiKit.Sortable;
MochiKit.Sortable.__new__=function(){
MochiKit.Base.nameFunctions(this);
this.EXPORT_TAGS={":common":this.EXPORT,":all":MochiKit.Base.concat(this.EXPORT,this.EXPORT_OK)};
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
MochiKit.MochiKit.SUBMODULES=["Base","Iter","Logging","DateTime","Format","Async","DOM","Selector","Style","LoggingPane","Color","Signal","Position","Visual","DragAndDrop","Sortable"];
if(typeof (JSAN)!="undefined"||typeof (dojo)!="undefined"){
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.MochiKit");
(function(lst){
for(var i=0;i<lst.length;i++){
dojo.require("MochiKit."+lst[i]);
}
})(MochiKit.MochiKit.SUBMODULES);
}
if(typeof (JSAN)!="undefined"){
(function(lst){
for(var i=0;i<lst.length;i++){
JSAN.use("MochiKit."+lst[i],[]);
}
})(MochiKit.MochiKit.SUBMODULES);
}
(function(){
var _822=MochiKit.Base.extend;
var self=MochiKit.MochiKit;
var _824=self.SUBMODULES;
var _825=[];
var _826=[];
var _827={};
var i,k,m,all;
for(i=0;i<_824.length;i++){
m=MochiKit[_824[i]];
_822(_825,m.EXPORT);
_822(_826,m.EXPORT_OK);
for(k in m.EXPORT_TAGS){
_827[k]=_822(_827[k],m.EXPORT_TAGS[k]);
}
all=m.EXPORT_TAGS[":all"];
if(!all){
all=_822(null,m.EXPORT,m.EXPORT_OK);
}
var j;
for(j=0;j<all.length;j++){
k=all[j];
self[k]=m[k];
}
}
self.EXPORT=_825;
self.EXPORT_OK=_826;
self.EXPORT_TAGS=_827;
}());
}else{
if(typeof (MochiKit.__compat__)=="undefined"){
MochiKit.__compat__=true;
}
(function(){
if(typeof (document)=="undefined"){
return;
}
var _82d=document.getElementsByTagName("script");
var _82e="http://www.w3.org/1999/xhtml";
var _82f="http://www.w3.org/2000/svg";
var _830="http://www.w3.org/1999/xlink";
var _831="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var base=null;
var _833=null;
var _834={};
var i;
var src;
for(i=0;i<_82d.length;i++){
src=null;
switch(_82d[i].namespaceURI){
case _82f:
src=_82d[i].getAttributeNS(_830,"href");
break;
default:
src=_82d[i].getAttribute("src");
break;
}
if(!src){
continue;
}
_834[src]=true;
if(src.match(/MochiKit.js(\?.*)?$/)){
base=src.substring(0,src.lastIndexOf("MochiKit.js"));
_833=_82d[i];
}
}
if(base===null){
return;
}
var _837=MochiKit.MochiKit.SUBMODULES;
for(var i=0;i<_837.length;i++){
if(MochiKit[_837[i]]){
continue;
}
var uri=base+_837[i]+".js";
if(uri in _834){
continue;
}
if(_833.namespaceURI==_82f||_833.namespaceURI==_831){
var s=document.createElementNS(_833.namespaceURI,"script");
s.setAttribute("id","MochiKit_"+base+_837[i]);
if(_833.namespaceURI==_82f){
s.setAttributeNS(_830,"href",uri);
}else{
s.setAttribute("src",uri);
}
s.setAttribute("type","application/x-javascript");
_833.parentNode.appendChild(s);
}else{
document.write("<"+_833.nodeName+" src=\""+uri+"\" type=\"text/javascript\"></script>");
}
}
})();
}
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Base)=="undefined"){
throw new ReferenceError("MochiKit.Base must be loaded before loading this script");
}
MochiKit.Base.isFalse=function(_83a){
return _83a==false||_83a==null||_83a==0||_83a.length===0||_83a=="false"||_83a=="null";
};
MochiKit.Base.defaultValue=function(){
for(var i=0;i<arguments.length;i++){
if(typeof (arguments[i])!="undefined"){
return arguments[i];
}
}
return undefined;
};
MochiKit.Base.dict=function(_83c,_83d){
var o={};
if(!MochiKit.Base.isArrayLike(_83c)){
throw new TypeError("First argument must be array-like");
}
if(MochiKit.Base.isArrayLike(_83d)&&_83c.length!==_83d.length){
throw new TypeError("Both arrays must be of same length");
}
for(var i=0;i<_83c.length;i++){
var k=_83c[i];
if(k===null||k===undefined){
throw new TypeError("Key at index "+i+" is null or undefined");
}else{
if(MochiKit.Base.isArrayLike(k)){
o[k[0]]=k[1];
}else{
if(MochiKit.Base.isArrayLike(_83d)){
o[k]=_83d[i];
}else{
o[k]=_83d;
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
MochiKit.Base.registerFunctionNames=function(obj,name,_84e){
if(typeof (obj)==="function"&&(obj.name==null||obj.name=="")&&typeof (obj.NAME)==="undefined"){
obj.NAME=name;
}
_84e=_84e||[];
if(obj!=null&&name!=null&&(typeof (obj)==="object"||typeof (obj)==="function")&&obj!==Object.prototype&&obj!==Function.prototype&&typeof (obj.nodeType)!=="number"&&MochiKit.Base.findIdentical(_84e,obj)<0){
_84e.push(obj);
for(var prop in obj){
var str=name+"."+prop;
MochiKit.Base.registerFunctionNames(obj[prop],str,_84e);
}
var str=name+".prototype";
MochiKit.Base.registerFunctionNames(obj.prototype,str,_84e);
_84e.pop();
}
};
MochiKit.Base.stackTrace=function(_851){
var func=arguments.callee.caller;
var _853=[];
var res=[];
_851=_851||20;
while(func!=null){
if(MochiKit.Base.findIdentical(_853,func)>=0){
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
_853.push(func);
if(_853.length>=_851){
res.push("...");
break;
}
func=func.caller;
}
return res;
};
MochiKit.Base.injectStackTrace=function(_856,func){
func=func||arguments.callee.caller;
if(func!=null){
if(_856){
func.$stackTrace=_856;
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
var _85d=MochiKit.Base.map(MochiKit.DOM.reprDOM,node.attributes);
res+=_85d.join("");
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
MochiKit.DOM.childNode=function(_862,_863){
_862=MochiKit.DOM.getElement(_862);
if(typeof (_863)=="number"){
if(_863<0||_863>=_862.childNodes.length){
return null;
}else{
return _862.childNodes[_863];
}
}else{
var node=MochiKit.DOM.getElement(_863);
while(node!=null&&node!==_862&&node.parentNode!==_862){
node=node.parentNode;
}
return (node==null||node===_862)?null:node;
}
};
MochiKit.DOM.createDOMExt=function(ns,tag,_867){
var doc=MochiKit.DOM.currentDocument();
var node=(ns)?doc.createElementNS(ns,tag):doc.createElement(tag);
MochiKit.DOM.updateNodeAttributes(node,_867);
var _86a=MochiKit.Base.extend([],arguments,3);
MochiKit.DOM.appendChildNodes(node,_86a);
return node;
};
MochiKit.DOM.createTextNode=function(text){
return MochiKit.DOM.currentDocument().createTextNode(text);
};
MochiKit.DOM.createDOMFuncExt=function(ns,tag,args,_86f){
args=args||[];
_86f=_86f||{};
var _870=MochiKit.Base.extend([],arguments,4);
return function(){
var _871=MochiKit.Base.update({},_86f);
for(var pos=0;pos<args.length;pos++){
if(arguments[pos]==null){
throw new Error("Argument '"+args[pos]+"' cannot be null");
}
_871[args[pos]]=arguments[pos];
}
MochiKit.Base.update(_871,arguments[args.length]);
var _873=MochiKit.Base.extend([],_870);
MochiKit.Base.extend(_873,arguments,args.length+1);
return MochiKit.DOM.createDOMExt(ns,tag,_871,_873);
};
};
MochiKit.DOM.blurAll=function(node){
if(arguments.length<=1){
MochiKit.DOM.blurAll(node,"A","BUTTON","INPUT","TEXTAREA","SELECT");
}else{
node.blur();
for(var i=1;i<arguments.length;i++){
var _876=node.getElementsByTagName(arguments[i]);
for(var j=0;j<_876.length;j++){
_876[j].blur();
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
MochiKit.DateTime.TimePeriod=function(_878){
return {days:Math.floor(_878/MochiKit.DateTime.MILLIS_PER_DAY),hours:Math.floor(_878/MochiKit.DateTime.MILLIS_PER_HOUR)%24,minutes:Math.floor(_878/MochiKit.DateTime.MILLIS_PER_MINUTE)%60,seconds:Math.floor(_878/MochiKit.DateTime.MILLIS_PER_SECOND)%60,millis:_878%1000};
};
MochiKit.DateTime.toApproxPeriod=function(_879){
var p=MochiKit.DateTime.TimePeriod(_879);
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
if(typeof (MochiKit.Format)=="undefined"){
throw new ReferenceError("MochiKit.Format must be loaded before loading this script");
}
MochiKit.Format.truncate=function(obj,_87c,tail){
var base=MochiKit.Base;
if(obj!=null&&typeof (obj)!="string"&&!base.isArrayLike(obj)){
obj=obj.toString();
}
if(obj==null||obj.length<=_87c||_87c<0){
return obj;
}
if(typeof (tail)=="string"||base.isArrayLike(tail)){
obj=obj.slice(0,_87c-tail.length);
if(typeof (obj)=="string"){
return obj+tail;
}else{
return base.extend(obj,tail);
}
}else{
return obj.slice(0,_87c);
}
};
MochiKit.Format.formatter=function(_87f,_880){
if(typeof (_880)=="undefined"){
_880=MochiKit.Format.formatLocale();
}else{
if(typeof (_880)=="string"){
_880=MochiKit.Format.formatLocale(_880);
}
}
var _881=MochiKit.Format._parsePattern(_87f);
return function(){
var _882=MochiKit.Base.extend([],arguments);
return MochiKit.Format._formatParts(_881,_882,_880);
};
};
MochiKit.Format.format=function(_883){
var _884=MochiKit.Format._parsePattern(_883);
var _885=MochiKit.Base.extend([],arguments,1);
var _886=MochiKit.Format.formatLocale();
return MochiKit.Format._formatParts(_884,_885,_886);
};
MochiKit.Format._parsePattern=function(_887){
var self=MochiKit.Format;
var _889=[];
var _88a=0;
var pos=0;
for(pos=0;pos<_887.length;pos++){
if(_887[pos]=="{"){
if(pos+1>=_887.length){
var msg="unescaped { char, should be escaped as {{";
throw new self.FormatPatternError(_887,pos,msg);
}else{
if(_887[pos+1]=="{"){
_889.push(_887.substring(_88a,pos+1));
_88a=pos+2;
pos++;
}else{
if(_88a<pos){
_889.push(_887.substring(_88a,pos));
}
_88a=_887.indexOf("}",pos)+1;
if(_88a<=0){
var msg="unmatched { char, not followed by a } char";
throw new self.FormatPatternError(_887,pos,msg);
}
_889.push(self._parseFormat(_887,pos+1,_88a-1));
pos=_88a-1;
}
}
}else{
if(_887[pos]=="}"){
if(pos+1>=_887.length||_887[pos+1]!="}"){
var msg="unescaped } char, should be escaped as }}";
throw new self.FormatPatternError(_887,pos,msg);
}
_889.push(_887.substring(_88a,pos+1));
_88a=pos+2;
pos++;
}
}
}
if(_88a<pos){
_889.push(_887.substring(_88a,pos));
}
return _889;
};
MochiKit.Format._parseFormat=function(_88d,_88e,_88f){
var self=MochiKit.Format;
var text=_88d.substring(_88e,_88f);
var info;
var pos=text.indexOf(":");
if(pos==0){
info=self._parseFormatFlags(_88d,_88e+1,_88f);
info.path=[0];
}else{
if(pos>0){
info=self._parseFormatFlags(_88d,_88e+pos+1,_88f);
info.path=text.substring(0,pos).split(".");
}else{
info=self._parseFormatFlags(_88d,_88f,_88f);
info.path=text.split(".");
}
}
var _894=/^\d+$/;
for(var i=0;i<info.path.length;i++){
var e=info.path[i];
if(typeof (e)=="string"){
e=self.strip(e);
if(e==""&&info.path.length==1){
e=0;
}else{
if(e==""){
var msg="format value path contains blanks";
throw new self.FormatPatternError(_88d,_88e,msg);
}else{
if(_894.test(e)){
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
MochiKit.Format._parseFormatFlags=function(_898,_899,_89a){
var self=MochiKit.Format;
var info={format:"s",width:0,precision:-1,align:">",sign:"-",padding:" ",grouping:false};
var _89d=self.rstrip(_898.substring(_899,_89a));
while(_89d.length>0){
switch(_89d[0]){
case ">":
case "<":
info.align=_89d[0];
_89d=_89d.substring(1);
break;
case "+":
case "-":
case " ":
info.sign=_89d[0];
_89d=_89d.substring(1);
break;
case ",":
info.grouping=true;
_89d=_89d.substring(1);
break;
case ".":
var _89e="0123456789";
var pos=1;
while(pos<_89d.length&&_89e.indexOf(_89d[pos])>=0){
pos++;
}
info.precision=parseInt(_89d.substring(1,pos));
_89d=_89d.substring(pos);
break;
case "0":
info.padding=_89d[0];
_89d=_89d.substring(1);
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
var _89e="0123456789";
var pos=1;
while(pos<_89d.length&&_89e.indexOf(_89d[pos])>=0){
pos++;
}
info.width=parseInt(_89d.substring(0,pos));
_89d=_89d.substring(pos);
break;
case "s":
case "r":
case "b":
case "c":
case "d":
case "o":
case "x":
case "X":
case "f":
case "%":
info.format=_89d[0];
_89d=_89d.substring(1);
break;
default:
var msg="unsupported format flag: "+_89d[0];
throw new self.FormatPatternError(_898,_899,msg);
}
}
return info;
};
MochiKit.Format._formatParts=function(_8a1,_8a2,_8a3){
var self=MochiKit.Format;
var _8a5="";
for(var i=0;i<_8a1.length;i++){
if(typeof (_8a1[i])=="string"){
_8a5+=_8a1[i];
}else{
var info=_8a1[i];
var v=_8a2;
for(var j=0;j<info.path.length;j++){
if(v!=null){
v=v[info.path[j]];
}
}
var str="";
switch(info.format){
case "d":
case "f":
if(typeof (v)!="number"||isNaN(v)){
str="";
}else{
if(v==Number.POSITIVE_INFINITY){
str="\u221e";
}else{
if(v==Number.NEGATIVE_INFINITY){
str="-\u221e";
}else{
var sign=(info.sign=="-")?"":info.sign;
sign=(v<0)?"-":sign;
v=Math.abs(v);
if(info.format=="d"){
str=self.truncToFixed(v,0);
}else{
if(info.precision>=0){
str=self.truncToFixed(v,info.precision);
}else{
str=(v==null)?"0":v.toString();
}
}
if(info.padding=="0"){
str=self._addZeroPadding(str,info.width-sign.length);
}
if(info.grouping){
str=self._addNumberGrouping(str,_8a3);
}
str=sign+str;
}
}
}
break;
case "%":
if(typeof (v)!="number"||isNaN(v)){
str="";
}else{
if(v==Number.POSITIVE_INFINITY){
str="\u221e%";
}else{
if(v==Number.NEGATIVE_INFINITY){
str="-\u221e%";
}else{
var sign=(info.sign=="-")?"":info.sign;
sign=(v<0)?"-":sign;
v=(v==null||!isFinite(v))?0:Math.abs(v);
if(info.precision>=0){
str=self.truncToFixed(v,info.precision+2);
}else{
str=(v==null)?"0":v.toString();
}
var _8ac=str.indexOf(".");
if(_8ac<0){
str=str+"00";
}else{
if(_8ac+3>=str.length){
var _8ad=str.substring(_8ac+1);
while(_8ad.length<2){
_8ad=_8ad+"0";
}
str=str.substring(0,_8ac)+_8ad;
}else{
var _8ad=str.substring(_8ac+1);
str=str.substring(0,_8ac)+_8ad.substring(0,2)+"."+_8ad.substring(2);
}
}
while(str.length>1&&str[0]=="0"&&str[1]!="."){
str=str.substring(1);
}
if(info.padding=="0"){
str=self._addZeroPadding(str,info.width-sign.length-1);
}
if(info.grouping){
str=self._addNumberGrouping(str,_8a3);
}
str=sign+str+_8a3.percent;
}
}
}
break;
case "r":
case "s":
default:
if(info.format=="r"){
str=MochiKit.Base.repr(v);
}else{
str=(v==null)?"null":v.toString();
}
str=self.truncate(str,info.precision);
break;
}
while(info.width>str.length){
if(info.align=="<"){
str+=" ";
}else{
str=" "+str;
}
}
_8a5+=str;
}
}
return _8a5;
};
MochiKit.Format._addZeroPadding=function(str,_8af){
while(str.length<_8af){
str="0"+str;
}
return str;
};
MochiKit.Format._addNumberGrouping=function(str,_8b1){
var _8b2=str.indexOf(".");
var _8b3=(_8b2<0)?str:str.substring(0,_8b2);
var _8b4=(_8b2<0)?"":str.substring(_8b2+1);
str=(_8b4.length>0)?_8b1.decimal:"";
while(_8b4.length>3){
str=str+_8b4.substring(0,3)+_8b1.separator;
_8b4=_8b4.substring(3);
if(_8b3.length>1&&_8b3[0]=="0"){
_8b3=_8b3.substring(1);
}
}
if(_8b4.length>0){
str+=_8b4;
}
while(_8b3.length>3){
var pos=_8b3.length-3;
str=_8b1.separator+_8b3.substring(pos)+str;
if(_8b3[0]=="0"){
_8b3=_8b3.substring(1,pos);
}else{
_8b3=_8b3.substring(0,pos);
}
}
return _8b3+str;
};
MochiKit.Format.FormatPatternError=function(_8b6,pos,_8b8){
this.pattern=_8b6;
this.pos=pos;
this.message=_8b8;
};
MochiKit.Format.FormatPatternError.prototype=new MochiKit.Base.NamedError("MochiKit.Format.FormatPatternError");
MochiKit.Format.EXPORT.push("format");
MochiKit.Format.EXPORT.push("formatter");
MochiKit.Format.EXPORT.push("FormatPatternError");
MochiKit.Base._exportSymbols(this,MochiKit.Format);
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
var _8ba=node.parentNode;
if(_8ba&&_8ba.lastChild!==node){
_8ba.appendChild(node);
}
}
};
MochiKit.SVG.moveToBottom=function(node){
node=MochiKit.DOM.getElement(node);
if(node!=null){
var _8bc=node.parentNode;
if(_8bc&&_8bc.firstChild!==node){
_8bc.insertBefore(node,_8bc.firstChild);
}
}
};
MochiKit.SVG.rotate=function(node,_8be,x,y){
var str=MochiKit.DOM.getNodeAttribute(node,"transform");
x=x||0;
y=y||0;
if(str==null||str==""){
str="";
}else{
str+=" ";
}
str+="rotate("+_8be+","+x+","+y+")";
MochiKit.DOM.setNodeAttribute(node,"transform",str);
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Style)=="undefined"){
throw new ReferenceError("MochiKit.Style must be loaded before loading this script");
}
MochiKit.Style.getBorderBox=function(node){
var _8c3=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_8c3(node,"border-width-top")),b:px(_8c3(node,"border-width-bottom")),l:px(_8c3(node,"border-width-left")),r:px(_8c3(node,"border-width-right"))};
};
MochiKit.Style.getPaddingBox=function(node){
var _8c6=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_8c6(node,"padding-top")),b:px(_8c6(node,"padding-bottom")),l:px(_8c6(node,"padding-left")),r:px(_8c6(node,"padding-right"))};
};
MochiKit.Style._toPixels=function(_8c8){
if(_8c8!=null){
try{
_8c8=MochiKit.Format.rstrip(_8c8,"px");
_8c8=Math.round(parseFloat(_8c8));
}
catch(ignore){
_8c8=null;
}
}
return (_8c8==null||isNaN(_8c8))?null:_8c8;
};
MochiKit.Style.getScrollOffset=function(node){
node=MochiKit.DOM.getElement(node);
var x=node.scrollLeft||0;
var y=node.scrollTop||0;
return new MochiKit.Style.Coordinates(x,y);
};
MochiKit.Style.setScrollOffset=function(node,_8cd){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=_8cd.x;
node.scrollTop=_8cd.y;
};
MochiKit.Style.resetScrollOffset=function(node,_8cf){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=0;
node.scrollTop=0;
if(_8cf){
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
MochiKit.Style.registerSizeConstraints=function(node,_8d8,_8d9,_8da){
node=MochiKit.DOM.getElement(node);
var sc=node.sizeConstraints={w:null,h:null,a:null};
if(typeof (_8d8)=="number"){
sc.w=function(w,h){
return _8d8;
};
}else{
if(typeof (_8d8)=="function"){
sc.w=_8d8;
}else{
if(typeof (_8d8)=="string"){
var code="return "+_8d8.replace(/%/g,"*0.01*w")+";";
sc.w=new Function("w","h",code);
}
}
}
if(typeof (_8d9)=="number"){
sc.h=function(w,h){
return _8d9;
};
}else{
if(typeof (_8d9)=="function"){
sc.h=_8d9;
}else{
if(typeof (_8d9)=="string"){
var code="return "+_8d9.replace(/%/g,"*0.01*h")+";";
sc.h=new Function("w","h",code);
}
}
}
if(typeof (_8da)=="number"){
sc.a=function(w,h){
return _8da;
};
}else{
if(typeof (_8da)=="function"){
sc.a=_8da;
}else{
if(typeof (_8da)=="string"){
var code="return "+_8da.replace(/%/g,"*0.01*w/h")+";";
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
MochiKit.Widget.isWidget=function(obj,_8ef){
if(_8ef!=null){
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget")&&MochiKit.DOM.hasElementClass(obj,"widget"+_8ef);
}else{
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget");
}
};
MochiKit.Widget.isFormField=function(obj){
if(!MochiKit.DOM.isHTML(obj)||typeof (obj.tagName)!=="string"){
return false;
}
var _8f1=obj.tagName.toUpperCase();
return _8f1=="INPUT"||_8f1=="TEXTAREA"||_8f1=="SELECT"||typeof (obj.value)!=="undefined";
};
MochiKit.Widget.createWidget=function(name,_8f3){
var cls=MochiKit.Widget.Classes[name];
if(cls==null){
throw new ReferenceError("failed to find widget '"+name+"' in MochiKit.Widget.Classes");
}
var w=new cls(_8f3);
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
var _900=MochiKit.Base.dict(MochiKit.DOM.attributeArrayNewImpl(node));
var _901=MochiKit.Base.mask(_900,["id","w","h","a","class","style"]);
var _902=MochiKit.Widget.createWidgetTree(node.childNodes,ids);
if(MochiKit.Widget.Classes[name]){
var _903=MochiKit.Widget.createWidget(name,_900,_902);
}else{
var _903=MochiKit.DOM.createDOM(name,_900,_902);
}
if(_901.id){
if(ids){
ids[_901.id]=_903;
}else{
_903.id=_901.id;
}
}
if(_901.w||_901.h||_901.a){
MochiKit.Style.registerSizeConstraints(_903,_901.w,_901.h,_901.a);
}
if(_901["class"]){
var _904=_901["class"].split(" ");
if(typeof (_903.addClass)=="function"){
_903.addClass.apply(_903,_904);
}else{
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.addElementClass(_903,_904[i]);
}
}
}
if(_901.style){
var _906={};
var _907=_901.style.split(";");
for(var i=0;i<_907.length;i++){
var a=_907[i].split(":");
_906[MochiKit.Format.strip(a[0])]=MochiKit.Format.strip(a[1]);
}
MochiKit.Style.setStyle(_903,_906);
}
return _903;
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
MochiKit.Widget.prototype.setAttrs=function(_90d){
MochiKit.DOM.updateNodeAttributes(this,_90d);
};
MochiKit.Widget.prototype.setStyle=function(_90e){
MochiKit.Style.setStyle(this,_90e);
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
MochiKit.Widget.prototype.addChildNode=function(_914){
this.appendChild(_914);
};
MochiKit.Widget.prototype.removeChildNode=function(_915){
this.removeChild(_915);
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
var _918=this.getChildNodes();
for(var i=_918.length-1;i>=0;i--){
this.removeChildNode(_918[i]);
MochiKit.Widget.destroyWidget(_918[i]);
}
};
MochiKit.Widget.Button=function(_91a){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_91a,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.BUTTON();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetButton");
o.setAttrs(_91a);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Button.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Button.prototype.setAttrs=function(_91d){
_91d=MochiKit.Base.update({},_91d);
var _91e=MochiKit.Base.mask(_91d,["highlight"]);
if(typeof (_91e.highlight)!="undefined"){
if(MochiKit.Base.isFalse(_91e.highlight)){
this.removeClass("widgetButtonHighlight");
}else{
this.addClass("widgetButtonHighlight");
}
}
MochiKit.DOM.updateNodeAttributes(this,_91d);
};
MochiKit.Widget.Dialog=function(_91f){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_91f,MochiKit.Base.extend(null,arguments,1));
}
var _921=MochiKit.DOM.DIV({"class":"widgetDialogTitle"},"Dialog");
var _922=new MochiKit.Widget.Icon({ref:"CLOSE","class":"widgetDialogClose"});
var _923=new MochiKit.Widget.Icon({ref:"RESIZE","class":"widgetDialogResize"});
var _924=MochiKit.DOM.DIV({"class":"widgetDialogContent"});
MochiKit.Style.registerSizeConstraints(_924,"100% - 22","100% - 44");
var o=MochiKit.DOM.DIV({},_921,_922,_923,_924);
MochiKit.Base.updatetree(o,this);
o.setAttrs(MochiKit.Base.update({modal:false,center:true},_91f));
o.addClass("widget","widgetDialog","widgetHidden");
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(_921,"onmousedown",o,"_handleMoveStart");
MochiKit.Signal.connect(_922,"onclick",o,"hide");
MochiKit.Signal.connect(_923,"onmousedown",o,"_handleResizeStart");
return o;
};
MochiKit.Widget.Dialog.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Dialog.prototype.setAttrs=function(_926){
_926=MochiKit.Base.update({},_926);
var _927=MochiKit.Base.mask(_926,["title","modal","center"]);
if(typeof (_927.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this.firstChild,_927.title);
}
if(typeof (_927.modal)!="undefined"){
this.modal=!MochiKit.Base.isFalse(_927.modal);
}
if(typeof (_927.center)!="undefined"){
this.center=!MochiKit.Base.isFalse(_927.center);
}
MochiKit.DOM.updateNodeAttributes(this,_926);
};
MochiKit.Widget.Dialog.prototype.show=function(){
if(this.parentNode==null){
throw new Error("Cannot show Dialog widget without setting a parent DOM node");
}
if(this.modal){
var _928={loading:false,message:"",style:{"z-index":"99"}};
this._modalNode=new MochiKit.Widget.Overlay(_928);
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
MochiKit.Widget.Dialog.prototype.addChildNode=function(_92a){
this.lastChild.appendChild(_92a);
};
MochiKit.Widget.Dialog.prototype.removeChildNode=function(_92b){
this.lastChild.removeChild(_92b);
};
MochiKit.Widget.Dialog.prototype.moveTo=function(x,y){
var _92e=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.max(0,Math.min(x,_92e.w-dim.w-2)),y:Math.max(0,Math.min(y,_92e.h-dim.h-2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.moveToCenter=function(){
var _931=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.round(Math.max(0,(_931.w-dim.w)/2)),y:Math.round(Math.max(0,(_931.h-dim.h)/2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.resizeTo=function(_934,_935){
var _936=MochiKit.Style.getElementDimensions(this.parentNode);
var pos=MochiKit.Style.getElementPosition(this.parentNode);
pos=MochiKit.Style.getElementPosition(this,pos);
var dim={w:Math.max(150,Math.min(_934,_936.w-pos.x-2)),h:Math.max(100,Math.min(_935,_936.h-pos.y-2))};
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
MochiKit.Widget.Field=function(_942){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_942);
}
var o=MochiKit.DOM.SPAN();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetField");
o.setAttrs(MochiKit.Base.update({name:"",value:"",maxLength:-1},_942));
o.defaultValue=o.value;
return o;
};
MochiKit.Widget.Field.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Field.prototype.setAttrs=function(_945){
_945=MochiKit.Base.update({},_945);
var _946=MochiKit.Base.mask(_945,["name","value","maxLength"]);
if(typeof (_946.name)!="undefined"){
this.name=_946.name;
}
if(typeof (_946.format)!="undefined"){
this.format=_946.format;
}
if(typeof (_946.maxLength)!="undefined"){
this.maxLength=parseInt(_946.maxLength);
}
if(typeof (_946.value)!="undefined"){
var str=this.value=_946.value;
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
var _948=str;
if(this.maxLength>0){
str=MochiKit.Format.truncate(str,this.maxLength,"...");
}
MochiKit.DOM.replaceChildNodes(this,str);
this.title=(str==_948)?null:_948;
}
MochiKit.DOM.updateNodeAttributes(this,_945);
};
MochiKit.Widget.Form=function(_949){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_949);
}
var o=MochiKit.DOM.FORM(_949);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetForm");
MochiKit.Signal.connect(o,"onsubmit",o,"_handleSubmit");
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Form.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Form.prototype.fields=function(){
var _94c=[];
MochiKit.Base.nodeWalk(this,function(elem){
if(elem.nodeType!==1){
return null;
}
if(MochiKit.Widget.isFormField(elem)){
_94c.push(elem);
return null;
}else{
return elem.childNodes;
}
});
return _94c;
};
MochiKit.Widget.Form.prototype.fieldMap=function(){
var _94e=this.fields();
var map={};
for(var i=0;i<_94e.length;i++){
var name=_94e[i].name;
if(typeof (name)=="string"){
if(map[name] instanceof Array){
map[name].push(_94e[i]);
}else{
if(map[name]!=null){
map[name]=[map[name],_94e[i]];
}else{
map[name]=_94e[i];
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.reset=function(){
this.validateReset();
var _952=this.fields();
for(var i=0;i<_952.length;i++){
var elem=_952[i];
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
var _957=this.fields();
var map={};
for(var i=0;i<_957.length;i++){
var name=_957[i].name;
var _95b="";
if(typeof (_957[i].getValue)=="function"){
_95b=_957[i].getValue();
}else{
_95b=_957[i].value;
}
if(_957[i].type==="radio"||_957[i].type==="checkbox"){
if(_957[i].checked){
_95b=_95b||true;
}else{
_95b=null;
}
}
if(typeof (name)=="string"&&_95b!=null){
if(map[name] instanceof Array){
map[name].push(_95b);
}else{
if(map[name]!=null){
map[name]=[map[name],_95b];
}else{
map[name]=_95b;
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.update=function(_95c){
var _95d=this.fields();
for(var i=0;i<_95d.length;i++){
var elem=_95d[i];
if(elem.name in _95c){
var _960=_95c[elem.name];
if(elem.type==="radio"||elem.type==="checkbox"){
if(_960==null){
elem.checked=false;
}else{
if(MochiKit.Base.isArrayLike(_960)){
elem.checked=(MochiKit.Base.findValue(_960,elem.value)>=0);
}else{
elem.checked=(elem.value===_960||_960===true);
}
}
}else{
if(MochiKit.Base.isArrayLike(_960)){
_960=_960.join(", ");
}
if(typeof (elem.setAttrs)=="function"){
elem.setAttrs({value:_960});
}else{
elem.value=_960;
}
}
}
}
};
MochiKit.Widget.Form.prototype.validators=function(){
var res=[];
var _962=this.getElementsByTagName("SPAN");
for(var i=0;i<_962.length;i++){
if(MochiKit.Widget.isWidget(_962[i],"FormValidator")){
res.push(_962[i]);
}
}
return res;
};
MochiKit.Widget.Form.prototype.validate=function(){
var _964=this.validators();
var _965=this.fields();
var _966=true;
var _967=[];
for(var i=0;i<_964.length;i++){
_964[i].reset();
}
for(var i=0;i<_964.length;i++){
for(var j=0;j<_965.length;j++){
if(_964[i].name==_965[j].name){
var res=_964[i].verify(_965[j]);
if(res instanceof MochiKit.Async.Deferred){
_967.push(res);
}else{
if(res===false){
_966=false;
}
}
}
}
}
if(!_966){
return false;
}else{
if(_967.length>0){
return MochiKit.Async.gatherResults(_967);
}else{
return true;
}
}
};
MochiKit.Widget.Form.prototype.validateReset=function(){
var _96b=this.validators();
for(var i=0;i<_96b.length;i++){
_96b[i].reset();
}
};
MochiKit.Widget.Form.prototype._handleSubmit=function(evt){
evt.stop();
};
MochiKit.Widget.FormValidator=function(_96e){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_96e);
}
var o=MochiKit.DOM.SPAN();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetFormValidator");
o.setAttrs(MochiKit.Base.update({name:"",mandatory:true,display:"error",message:null,validator:null},_96e));
o.fields=[];
o.hide();
return o;
};
MochiKit.Widget.FormValidator.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.FormValidator.prototype.setAttrs=function(_971){
_971=MochiKit.Base.update({},_971);
var _972=MochiKit.Base.mask(_971,["name","mandatory","regex","display","message","validator"]);
if(typeof (_972.name)!="undefined"){
this.name=_972.name;
}
if(typeof (_972.mandatory)!="undefined"){
this.mandatory=!MochiKit.Base.isFalse(_972.mandatory);
}
if(typeof (_972.regex)!="undefined"){
if(_972.regex instanceof RegExp){
this.regex=_972.regex;
}else{
if(_972.regex.indexOf("^")!=0){
_972.regex="^"+_972.regex;
}
if(_972.regex.indexOf("$")!=_972.regex.length-1){
_972.regex+="$";
}
this.regex=new RegExp(_972.regex);
}
}
if(typeof (_972.display)!="undefined"){
this.display=_972.display;
}
if(typeof (_972.message)!="undefined"){
this.message=_972.message;
}
if(typeof (_972.validator)!="undefined"){
this.validator=_972.validator;
}
MochiKit.DOM.updateNodeAttributes(this,_971);
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
MochiKit.Widget.FormValidator.prototype.verify=function(_974){
if(!_974.disabled){
var _975="";
if(typeof (_974.getValue)=="function"){
_975=_974.getValue();
}else{
_975=_974.value;
}
var _976=MochiKit.Format.strip(_975);
if(MochiKit.Format.strip(_975)==""){
if(this.mandatory){
var msg="This field is mandatory and cannot be left blank";
this.addError(_974,msg);
return false;
}
}else{
if(this.regex!=null&&!this.regex.test(_976)){
var msg="The field format is incorrect";
this.addError(_974,msg);
return false;
}else{
if(typeof (this.validator)=="function"){
var res=this.validator(_975);
if(res instanceof MochiKit.Async.Deferred){
var self=this;
res.addErrback(function(e){
self.addError(_974,e.message);
return e;
});
return res;
}else{
if(typeof (res)=="string"){
this.addError(_974,res);
return false;
}else{
if(res===false){
this.addError(_974,"Field validation failed");
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
MochiKit.Widget.FormValidator.prototype.addError=function(_97b,_97c){
if(!MochiKit.DOM.hasElementClass(_97b,"widgetInvalid")){
this.fields.push(_97b);
MochiKit.DOM.addElementClass(_97b,"widgetInvalid");
if(this.display==="error"){
var _97d={ref:"ERROR",tooltip:this.message||_97c};
this.addAll(new MochiKit.Widget.Icon(_97d));
this.show();
}
}
};
MochiKit.Widget.Icon=function(_97e){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_97e);
}
var o=MochiKit.DOM.IMG();
MochiKit.Base.updatetree(o,this);
o.setAttrs(_97e);
o.addClass("widget","widgetIcon");
return o;
};
MochiKit.Widget.Icon.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Icon.prototype.setAttrs=function(_981){
_981=MochiKit.Base.update({},_981);
if(_981.ref){
MochiKit.Base.setdefault(_981,MochiKit.Widget.Icon[_981.ref],MochiKit.Widget.Icon.DEFAULT);
}
var _982=MochiKit.Base.mask(_981,["ref","url","baseUrl","tooltip","width","height"]);
if(typeof (_982.url)!="undefined"){
MochiKit.Base.setdefault(_982,MochiKit.Widget.Icon.DEFAULT);
_981.src=_982.baseUrl+_982.url;
}
if(typeof (_982.tooltip)!="undefined"){
_981.alt=_982.tooltip;
_981.title=_982.tooltip;
}
if(typeof (_982.width)!="undefined"){
this.width=_982.width;
this.setStyle({width:_982.width});
}
if(typeof (_982.height)!="undefined"){
this.height=_982.height;
this.setStyle({height:_982.height});
}
MochiKit.DOM.updateNodeAttributes(this,_981);
};
MochiKit.Base.update(MochiKit.Widget.Icon,{DEFAULT:{baseUrl:"images/icons/",width:"16",height:"16"},BLANK:{url:"blank.gif",style:{cursor:"default"}},CLOSE:{url:"close.gif"},RESIZE:{url:"resize-handle.gif"},OK:{url:"ok.gif",tooltip:"OK"},CANCEL:{url:"cancel.gif",tooltip:"Cancel"},HELP:{url:"help.gif",tooltip:"Help"},ERROR:{url:"error.gif",tooltip:"Error"},PLUS:{url:"plus.gif",tooltip:"Show"},MINUS:{url:"minus.gif",tooltip:"Hide"},NEXT:{url:"next.gif",tooltip:"Next"},PREVIOUS:{url:"previous.gif",tooltip:"Previous"},CONFIG:{url:"config.gif",tooltip:"Configure"},DELAY:{url:"delay.gif",tooltip:"Configure Delay"},RELOAD:{url:"reload.gif",tooltip:"Reload"},LOADING:{url:"loading.gif",tooltip:"Loading..."},LOADING_LARGE:{url:"loading-large.gif",tooltip:"Loading...",width:"32",height:"32"},SEARCH:{url:"magnifier.gif",tooltip:"Search"},ADD:{url:"add.gif",tooltip:"Add"},REMOVE:{url:"remove.gif",tooltip:"Remove"},EDIT:{url:"edit.gif",tooltip:"Edit"},DELETE:{url:"trash.gif",tooltip:"Clear / Delete"},SELECT:{url:"select.gif",tooltip:"Select / Unselect"},CUT:{url:"cut.gif",tooltip:"Cut"},EXPORT:{url:"export.gif",tooltip:"Export"},EXPAND:{url:"expand.gif",tooltip:"Expand"},UP:{url:"up.gif",tooltip:"Move Up"},DOWN:{url:"down.gif",tooltip:"Move Down"},LEFT:{url:"left.gif",tooltip:"Move Left"},RIGHT:{url:"right.gif",tooltip:"Move Right"},COMMENT:{url:"comment.gif",tooltip:"Comment"},CALENDAR:{url:"calendar.gif",tooltip:"Calendar"},AUTOMATIC:{url:"automatic.gif",tooltip:"Automatic Processing"},PLUGIN:{url:"plugin.gif",tooltip:"Plug-in"},FOLDER:{url:"folder.gif"},DOCUMENT:{url:"document.gif"}});
MochiKit.Widget.Overlay=function(_983){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_983,MochiKit.Base.extend(null,arguments,1));
}
var msg=MochiKit.DOM.DIV({"class":"widgetOverlayMessage"});
var o=MochiKit.DOM.DIV({},msg);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetOverlay");
_983=MochiKit.Base.update({loading:true,message:"Working..."},_983);
o.setAttrs(_983);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Overlay.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Overlay.prototype.setAttrs=function(_987){
_987=MochiKit.Base.update({},_987);
var _988=MochiKit.Base.mask(_987,["loading","message"]);
if(typeof (_988.loading)!="undefined"){
this.showLoading=!MochiKit.Base.isFalse(_988.loading);
}
if(typeof (_988.message)!="undefined"){
this.message=_988.message;
}
if(typeof (this.showLoading)!="undefined"){
var icon=new MochiKit.Widget.Icon({ref:"LOADING_LARGE"});
icon.setStyle({"padding-right":"20px"});
}
MochiKit.DOM.replaceChildNodes(this.firstChild,icon,this.message);
MochiKit.DOM.updateNodeAttributes(this,_987);
};
MochiKit.Widget.Pane=function(_98a){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_98a,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetPane");
o.setAttrs(MochiKit.Base.update({pageTitle:"Page",pageStatus:"ANY",pageCloseable:false},_98a));
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Pane.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Pane.ANY={previous:true,next:true};
MochiKit.Widget.Pane.FORWARD={previous:false,next:true};
MochiKit.Widget.Pane.BACKWARD={previous:true,next:false};
MochiKit.Widget.Pane.WORKING={previous:false,next:false};
MochiKit.Widget.Pane.prototype.setAttrs=function(_98d){
_98d=MochiKit.Base.update({},_98d);
var _98e=MochiKit.Base.mask(_98d,["pageTitle","pageStatus","pageCloseable"]);
var _98f=false;
if(typeof (_98e.pageTitle)!="undefined"){
this.pageTitle=_98e.pageTitle;
_98f=true;
}
if(typeof (_98e.pageStatus)!="undefined"){
if(typeof (_98e.pageStatus)=="string"){
_98e.pageStatus=MochiKit.Widget.Pane[_98e.pageStatus];
}
this.pageStatus=_98e.pageStatus;
_98f=true;
}
if(typeof (_98e.pageCloseable)!="undefined"){
this.pageCloseable=!MochiKit.Base.isFalse(_98e.pageCloseable);
_98f=true;
}
if(_98f&&this.parentNode&&typeof (this.parentNode._updateStatus)=="function"){
this.parentNode._updateStatus();
}
MochiKit.DOM.updateNodeAttributes(this,_98d);
};
MochiKit.Widget.Pane.prototype._handleEnter=function(opts){
opts=opts||{};
if(opts.validateReset){
var _991=this.getElementsByTagName("FORM");
for(var i=0;i<_991.length;i++){
if(typeof (_991[i].validateReset)=="function"){
_991[i].validateReset();
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
var _994=this.getElementsByTagName("FORM");
for(var i=0;i<_994.length;i++){
if(typeof (_994[i].validate)=="function"){
var res=_994[i].validate();
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
MochiKit.Widget.Popup=function(_997){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_997,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetPopup","widgetHidden");
o.selectedIndex=-1;
o._delayTimer=null;
o.setAttrs(MochiKit.Base.update({delay:5000},_997));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onmousemove",o,"_handleMouseMove");
MochiKit.Signal.connect(o,"onclick",o,"_handleMouseClick");
return o;
};
MochiKit.Widget.Popup.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Popup.prototype.setAttrs=function(_99a){
_99a=MochiKit.Base.update({},_99a);
var _99b=MochiKit.Base.mask(_99a,["delay","showAnim","hideAnim"]);
if(typeof (_99b.delay)!="undefined"){
this.delay=parseInt(_99b.delay);
this.resetDelay();
}
if(typeof (_99b.showAnim)!="undefined"){
this.showAnim=_99b.showAnim;
}
if(typeof (_99b.hideAnim)!="undefined"){
this.hideAnim=_99b.hideAnim;
}
MochiKit.DOM.updateNodeAttributes(this,_99a);
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
MochiKit.Widget.Popup.prototype.selectChild=function(_99c){
var node=this.selectedChild();
if(node!=null){
MochiKit.DOM.removeElementClass(node,"selected");
}
var node=MochiKit.DOM.childNode(this,_99c);
if(typeof (_99c)=="number"){
var _99e=_99c;
}else{
var _99e=MochiKit.Base.findIdentical(this.childNodes,node);
}
if(_99e>=0&&node!=null){
this.selectedIndex=_99e;
MochiKit.DOM.addElementClass(node,"selected");
var box={y:node.offsetTop,h:node.offsetHeight+5};
MochiKit.Style.adjustScrollOffset(this,box);
}else{
this.selectedIndex=-1;
}
return this.selectedIndex;
};
MochiKit.Widget.Popup.prototype.selectMove=function(_9a0){
var _9a1=this.selectedIndex+_9a0;
if(_9a1>=this.childNodes.length){
_9a1=0;
}
if(_9a1<0){
_9a1=this.childNodes.length-1;
}
return this.selectChild(_9a1);
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
MochiKit.Widget.ProgressBar=function(_9a6){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_9a6,MochiKit.Base.extend(null,arguments,1));
}
var _9a8=MochiKit.DOM.DIV({"class":"widgetProgressBarMeter"});
var text=MochiKit.DOM.DIV({"class":"widgetProgressBarText"});
var o=MochiKit.DOM.DIV({},_9a8,text);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetProgressBar");
o.setAttrs(MochiKit.Base.update({min:0,max:100},_9a6));
o.setValue(0);
return o;
};
MochiKit.Widget.ProgressBar.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.ProgressBar.prototype.setAttrs=function(_9ab){
_9ab=MochiKit.Base.update({},_9ab);
var _9ac=MochiKit.Base.mask(_9ab,["min","max"]);
if(typeof (_9ac.min)!="undefined"||typeof (_9ac.max)!="undefined"){
this.minValue=parseInt(_9ac.min)||0;
this.maxValue=parseInt(_9ac.max)||100;
this.startTime=new Date().getTime();
this.lastTime=this.startTime;
this.timeLeft=null;
}
MochiKit.DOM.updateNodeAttributes(this,_9ab);
};
MochiKit.Widget.ProgressBar.prototype.setValue=function(_9ad,text){
_9ad=Math.min(Math.max(_9ad,this.minValue),this.maxValue);
var pos=_9ad-this.minValue;
var _9b0=this.maxValue-this.minValue;
var str=pos+" of "+_9b0;
if(typeof (text)=="string"&&text!=""){
str+=" \u2014 "+text;
}
this.setRatio(pos/_9b0,str);
};
MochiKit.Widget.ProgressBar.prototype.setRatio=function(_9b2,text){
var _9b4=Math.round(_9b2*1000)/10;
MochiKit.Style.setElementDimensions(this.firstChild,{w:_9b4},"%");
if(_9b4<66){
this.lastChild.className="widgetProgressBarText";
}else{
this.lastChild.className="widgetProgressBarTextInverse";
}
if(typeof (text)=="string"&&text!=""){
text=Math.round(_9b4)+"% \u2014 "+text;
}else{
text=Math.round(_9b4)+"%";
}
var _9b5=new Date().getTime();
if(_9b5-this.lastTime>1000){
this.lastTime=_9b5;
var _9b6=_9b5-this.startTime;
_9b6=Math.max(Math.round(_9b6/_9b2-_9b6),0);
this.timeLeft=MochiKit.DateTime.toApproxPeriod(_9b6);
}
if(this.timeLeft!=null&&_9b4>0&&_9b4<100){
text+=" \u2014 "+this.timeLeft+" left";
}
this.setText(text);
};
MochiKit.Widget.ProgressBar.prototype.setText=function(text){
MochiKit.DOM.replaceChildNodes(this.lastChild,text);
};
MochiKit.Widget.TabContainer=function(_9b8){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_9b8,MochiKit.Base.extend(null,arguments,1));
}
var _9ba=MochiKit.DOM.DIV({"class":"widgetTabContainerLabels"});
var _9bb=MochiKit.DOM.DIV({"class":"widgetTabContainerContent"});
var o=MochiKit.DOM.DIV(_9b8,_9ba,_9bb);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTabContainer");
MochiKit.Style.registerSizeConstraints(_9bb,"100% - 22","100% - 47");
_9bb.resizeContent=MochiKit.Base.noop;
o._selectedIndex=-1;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.TabContainer.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TabContainer.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.lastChild.childNodes);
};
MochiKit.Widget.TabContainer.prototype.addChildNode=function(_9bd){
if(!MochiKit.Widget.isWidget(_9bd,"Pane")){
_9bd=new MochiKit.Widget.Pane(null,_9bd);
}
MochiKit.Style.registerSizeConstraints(_9bd,"100%","100%");
_9bd.hide();
var text=MochiKit.DOM.SPAN(null,_9bd.pageTitle);
if(_9bd.pageCloseable){
var icon=new MochiKit.Widget.Icon({ref:"CLOSE"});
MochiKit.Signal.connect(icon,"onclick",MochiKit.Base.bind("_handleClose",this,_9bd));
}
var _9c0=MochiKit.DOM.DIV({"class":"widgetTabContainerLabel"},MochiKit.DOM.DIV({},text,icon));
MochiKit.Signal.connect(_9c0,"onclick",MochiKit.Base.bind("selectChild",this,_9bd));
this.firstChild.appendChild(_9c0);
this.lastChild.appendChild(_9bd);
if(this._selectedIndex<0){
this.selectChild(0);
}
};
MochiKit.Widget.TabContainer.prototype.removeChildNode=function(_9c1){
var _9c2=this.getChildNodes();
var _9c3=MochiKit.Base.findIdentical(_9c2,_9c1);
if(_9c3<0){
throw new Error("Cannot remove DOM node that is not a TabContainer child");
}
if(this._selectedIndex==_9c3){
_9c1._handleExit();
this._selectedIndex=-1;
}
MochiKit.Widget.destroyWidget(this.firstChild.childNodes[_9c3]);
MochiKit.DOM.removeElement(_9c1);
MochiKit.Widget.emitSignal(_9c1,"onclose");
if(this._selectedIndex<0&&this.getChildNodes().length>0){
this.selectChild((_9c3==0)?0:_9c3-1);
}
};
MochiKit.Widget.TabContainer.prototype.selectedIndex=function(){
return this._selectedIndex;
};
MochiKit.Widget.TabContainer.prototype.selectedChild=function(){
var _9c4=this.getChildNodes();
return (this._selectedIndex<0)?null:_9c4[this._selectedIndex];
};
MochiKit.Widget.TabContainer.prototype.selectChild=function(_9c5){
var _9c6=this.getChildNodes();
if(this._selectedIndex>=0){
var _9c7=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.removeElementClass(_9c7,"selected");
_9c6[this._selectedIndex]._handleExit();
}
var _9c8=-1;
if(_9c5==null){
_9c8=this._selectedIndex;
}else{
if(typeof (_9c5)=="number"){
_9c8=_9c5;
}else{
_9c8=MochiKit.Base.findIdentical(_9c6,_9c5);
}
}
this._selectedIndex=(_9c8<0||_9c8>=_9c6.length)?-1:_9c8;
if(this._selectedIndex>=0){
var _9c7=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.addElementClass(_9c7,"selected");
_9c6[this._selectedIndex]._handleEnter();
}
};
MochiKit.Widget.TabContainer.prototype.resizeContent=function(){
MochiKit.Style.resizeElements(this.lastChild);
var _9c9=this.selectedChild();
if(_9c9!=null){
MochiKit.Style.resizeElements(_9c9);
}
};
MochiKit.Widget.TabContainer.prototype._handleClose=function(_9ca,evt){
evt.stop();
this.removeChildNode(_9ca);
};
MochiKit.Widget.Table=function(_9cc){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_9cc,MochiKit.Base.extend(null,arguments,1));
}
var _9ce=MochiKit.DOM.THEAD({},MochiKit.DOM.TR());
var _9cf=MochiKit.DOM.TBODY();
_9cf.resizeContent=MochiKit.Base.noop;
var _9d0=MochiKit.DOM.TABLE({"class":"widgetTable"},_9ce,_9cf);
var o=MochiKit.DOM.DIV({},_9d0);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTable");
o.setAttrs(MochiKit.Base.update({multiple:false},_9cc));
o._rows=[];
o._data=null;
o._keyField=null;
o._selected=[];
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(_9cf,"onmousedown",o,"_handleSelect");
return o;
};
MochiKit.Widget.Table.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Table.prototype.setAttrs=function(_9d2){
_9d2=MochiKit.Base.update({},_9d2);
var _9d3=MochiKit.Base.mask(_9d2,["multiple"]);
if(typeof (_9d3.multiple)!="undefined"){
this.multiple=!MochiKit.Base.isFalse(_9d3.multiple);
}
MochiKit.DOM.updateNodeAttributes(this,_9d2);
};
MochiKit.Widget.Table.prototype.getChildNodes=function(){
var _9d4=this.firstChild;
var _9d5=_9d4.firstChild;
var tr=_9d5.firstChild;
return MochiKit.Base.extend([],tr.childNodes);
};
MochiKit.Widget.Table.prototype.addChildNode=function(_9d7){
if(!MochiKit.Widget.isWidget(_9d7,"TableColumn")){
throw new Error("Table widget can only have TableColumn children");
}
this.clear();
var _9d8=this.firstChild;
var _9d9=_9d8.firstChild;
var tr=_9d9.firstChild;
tr.appendChild(_9d7);
};
MochiKit.Widget.Table.prototype.removeChildNode=function(_9db){
this.clear();
var _9dc=this.firstChild;
var _9dd=_9dc.firstChild;
var tr=_9dd.firstChild;
tr.removeChild(_9db);
};
MochiKit.Widget.Table.prototype.getColumnIndex=function(_9df){
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].field===_9df){
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
var _9eb=this.firstChild;
var _9ec=_9eb.lastChild;
return _9ec.childNodes[row].childNodes[col];
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
var _9ef=this.getSelectedIds();
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
this._addSelectedIds(_9ef);
}
};
MochiKit.Widget.Table.prototype.sortData=function(_9f4,_9f5){
var cols=this.getChildNodes();
var _9f7=this.getSelectedIds();
this._selected=[];
for(var i=0;i<cols.length;i++){
if(cols[i].field===_9f4){
if(cols[i].sort=="none"){
return;
}else{
if(_9f5==null){
_9f5=cols[i].sort||"asc";
}
}
cols[i].setAttrs({sort:_9f5});
}else{
if(cols[i].sort!="none"){
cols[i].setAttrs({sort:null});
}
}
}
this._rows.sort(MochiKit.Base.keyComparator(_9f4));
if(_9f5=="desc"){
this._rows.reverse();
}
this._renderRows();
this._addSelectedIds(_9f7);
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
var _9fe=this.firstChild.lastChild;
MochiKit.DOM.replaceChildNodes(_9fe);
for(var i=0;i<this._rows.length;i++){
var tr=MochiKit.DOM.TR();
if(i%2==1){
MochiKit.DOM.addElementClass(tr,"widgetTableAlt");
}
for(var j=0;j<cols.length;j++){
tr.appendChild(cols[j]._render(this._rows[i]));
}
tr.rowNo=i;
_9fe.appendChild(tr);
}
if(this._rows.length==0){
_9fe.appendChild(MochiKit.DOM.TR());
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
var _a13=row;
if(this._selected.length>0){
_a13=this._selected[0];
}
this._unmarkSelection();
this._selected=[];
if(row>=_a13){
for(var i=_a13;i<=row;i++){
this._selected.push(i);
}
}else{
for(var i=_a13;i>=row;i--){
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
MochiKit.Widget.Table.prototype._markSelection=function(_a15){
if(_a15==null){
for(var i=0;i<this._selected.length;i++){
this._markSelection(this._selected[i]);
}
}else{
var _a17=this.firstChild.lastChild;
var tr=_a17.childNodes[_a15];
MochiKit.DOM.addElementClass(tr,"selected");
}
};
MochiKit.Widget.Table.prototype._unmarkSelection=function(_a19){
if(_a19==null){
for(var i=0;i<this._selected.length;i++){
this._unmarkSelection(this._selected[i]);
}
}else{
var _a1b=this.firstChild.lastChild;
var tr=_a1b.childNodes[_a19];
MochiKit.DOM.removeElementClass(tr,"selected");
}
};
MochiKit.Widget.TableColumn=function(_a1d){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_a1d,MochiKit.Base.extend(null,arguments,1));
}
if(_a1d.field==null){
throw new Error("The 'field' attribute cannot be null for a TableColumn");
}
var o=MochiKit.DOM.TH();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTableColumn");
o.setAttrs(MochiKit.Base.update({title:_a1d.field,type:"string",key:false},_a1d));
MochiKit.Signal.connect(o,"onclick",o,"_handleClick");
return o;
};
MochiKit.Widget.TableColumn.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TableColumn.prototype.setAttrs=function(_a20){
_a20=MochiKit.Base.update({},_a20);
var _a21=MochiKit.Base.mask(_a20,["title","field","type","sort","maxLength","key","tooltip"]);
if(typeof (_a21.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this,_a21.title);
}
if(typeof (_a21.field)!="undefined"){
this.field=_a21.field;
}
if(typeof (_a21.type)!="undefined"){
this.type=_a21.type;
}
if(typeof (_a21.sort)!="undefined"){
this.sort=_a21.sort;
if(_a21.sort==null||_a21.sort=="none"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.removeElementClass(this,"sortDesc");
}else{
if(_a21.sort=="desc"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.addElementClass(this,"sortDesc");
}else{
MochiKit.DOM.removeElementClass(this,"sortDesc");
MochiKit.DOM.addElementClass(this,"sortAsc");
}
}
}
if(typeof (_a21.maxLength)!="undefined"){
this.maxLength=parseInt(_a21.maxLength);
}
if(typeof (_a21.key)!="undefined"){
this.key=!MochiKit.Base.isFalse(_a21.key);
}
if(typeof (_a21.tooltip)!="undefined"){
this.title=_a21.tooltip;
}
MochiKit.DOM.updateNodeAttributes(this,_a20);
};
MochiKit.Widget.TableColumn.prototype._map=function(src,dst){
var _a24=src[this.field];
if(_a24!=null){
if(this._key){
dst.$id=_a24;
}
switch(this.type){
case "number":
if(_a24 instanceof Number){
_a24=_a24.valueOf();
}else{
if(typeof (_a24)!="number"){
_a24=parseFloat(_a24);
}
}
break;
case "date":
if(_a24 instanceof Date){
_a24=MochiKit.DateTime.toISODate(_a24);
}else{
_a24=MochiKit.Format.truncate(_a24,10);
}
break;
case "datetime":
if(_a24 instanceof Date){
_a24=MochiKit.DateTime.toISOTimestamp(_a24);
}else{
_a24=MochiKit.Format.truncate(_a24,19);
}
break;
case "time":
if(_a24 instanceof Date){
_a24=MochiKit.DateTime.toISOTime(_a24);
}else{
if(typeof (_a24)!="string"){
_a24=_a24.toString();
}
if(_a24.length>8){
_a24=_a24.substring(_a24.length-8);
}
}
break;
default:
if(typeof (_a24)!="string"){
_a24=_a24.toString();
}
}
}
dst[this.field]=_a24;
};
MochiKit.Widget.TableColumn.prototype._render=function(obj){
var td=MochiKit.DOM.TD();
var _a27=obj[this.field];
if(_a27==null){
_a27="";
}else{
if(typeof (_a27)!="string"){
_a27=_a27.toString();
}
}
if(this.maxLength&&this.maxLength<_a27.length){
td.title=_a27;
_a27=MochiKit.Format.truncate(_a27,this.maxLength,"...");
}
if(this.type=="html"){
td.innerHTML=_a27;
}else{
td.appendChild(MochiKit.DOM.createTextNode(_a27));
}
return td;
};
MochiKit.Widget.TableColumn.prototype._handleClick=function(){
if(this.parentNode!=null){
var dir=(this.sort=="asc")?"desc":"asc";
var tr=this.parentNode;
var _a2a=tr.parentNode;
var _a2b=_a2a.parentNode;
_a2b.parentNode.sortData(this.field,dir);
}
};
MochiKit.Widget.TextArea=function(_a2c){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_a2c,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.TEXTAREA();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTextArea");
o.focused=false;
o.setAttrs(MochiKit.Base.update({helpText:""},_a2c));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onfocus",o,"_handleFocus");
MochiKit.Signal.connect(o,"onblur",o,"_handleFocus");
return o;
};
MochiKit.Widget.TextArea.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TextArea.prototype.setAttrs=function(_a2f){
_a2f=MochiKit.Base.update({},_a2f);
var _a30=MochiKit.Base.mask(_a2f,["helpText","value"]);
if(typeof (_a30.helpText)!="undefined"){
this.helpText=_a30.helpText;
}
if(typeof (_a30.value)!="undefined"){
this.value=this.storedValue=_a30.value;
}
if(!this.focused&&MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextAreaHelp");
}
MochiKit.DOM.updateNodeAttributes(this,_a2f);
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
MochiKit.Widget.TextField=function(_a32){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_a32,MochiKit.Base.extend(null,arguments,1));
}
var text="";
if(_a32!=null&&_a32.value!=null){
text=_a32.value;
}
for(var i=1;i<arguments.length;i++){
text+=arguments[i].toString();
}
var o=MochiKit.DOM.INPUT({value:text});
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTextField");
o.focused=false;
o._popupCreated=false;
o.setAttrs(MochiKit.Base.update({helpText:"",value:text},_a32));
MochiKit.Signal.connect(o,"onfocus",o,"_handleFocus");
MochiKit.Signal.connect(o,"onblur",o,"_handleFocus");
return o;
};
MochiKit.Widget.TextField.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TextField.prototype.setAttrs=function(_a37){
_a37=MochiKit.Base.update({},_a37);
var _a38=MochiKit.Base.mask(_a37,["helpText","value"]);
if(typeof (_a38.helpText)!="undefined"){
this.helpText=_a38.helpText;
}
if(typeof (_a38.value)!="undefined"){
this.value=this.storedValue=_a38.value;
}
if(!this.focused&&MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextFieldHelp");
}
MochiKit.DOM.updateNodeAttributes(this,_a37);
};
MochiKit.Widget.TextField.prototype.reset=function(){
this.setAttrs({value:this.defaultValue});
};
MochiKit.Widget.TextField.prototype.getValue=function(){
return (this.focused)?this.value:this.storedValue;
};
MochiKit.Widget.TextField.prototype.popup=function(_a39){
if(!this._popupCreated&&_a39){
this.autocomplete="off";
this._popupCreated=true;
var _a3a={"max-height":"300px","width":"300px"};
var _a3b=new MochiKit.Widget.Popup({style:_a3a});
MochiKit.DOM.insertSiblingNodesAfter(this,_a3b);
MochiKit.DOM.makePositioned(this.parentNode);
var pos={x:this.offsetLeft+1,y:this.offsetTop+this.offsetHeight+1};
MochiKit.Style.setElementPosition(_a3b,pos);
MochiKit.Signal.connect(this,"onkeydown",this,"_handleKeyDown");
MochiKit.Signal.connect(_a3b,"onclick",this,"_handleClick");
}
return (this._popupCreated)?this.nextSibling:null;
};
MochiKit.Widget.TextField.prototype.showPopup=function(_a3d,_a3e){
var _a3f=this.popup(true);
if(_a3e){
_a3f.hide();
MochiKit.DOM.replaceChildNodes(_a3f);
for(var i=0;i<_a3e.length;i++){
if(typeof (_a3e[i])=="string"){
var node=MochiKit.DOM.DIV({"class":"widgetPopupItem"},"\xbb "+_a3e[i]);
_a3f.appendChild(node);
}else{
MochiKit.DOM.appendChildNodes(_a3f,_a3e[i]);
}
}
}
if(_a3f.childNodes.length>0){
_a3f.setAttrs(MochiKit.Base.update({delay:30000},_a3d));
_a3f.show();
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
var _a43=this.popup();
if(_a43!=null&&!_a43.isHidden()){
_a43.setAttrs({delay:250});
}
}
}
};
MochiKit.Widget.TextField.prototype._handleKeyDown=function(evt){
var _a45=this.popup(false);
if(_a45!=null){
_a45.resetDelay();
if(_a45.isHidden()){
switch(evt.key().string){
case "KEY_ESCAPE":
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
this.showPopup();
_a45.selectChild(0);
evt.stop();
break;
}
}else{
switch(evt.key().string){
case "KEY_TAB":
case "KEY_ENTER":
_a45.hide();
evt.stop();
if(_a45.selectedChild()!=null){
MochiKit.Widget.emitSignal(this,"onpopupselect");
}
break;
case "KEY_ESCAPE":
_a45.hide();
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
_a45.selectMove(evt.key().string=="KEY_ARROW_UP"?-1:1);
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
MochiKit.Widget.Tree=function(_a47){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_a47,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV(_a47);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTree");
o.resizeContent=MochiKit.Base.noop;
o.selectedPath=null;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Tree.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Tree.prototype.addChildNode=function(_a4a){
if(!MochiKit.Widget.isWidget(_a4a,"TreeNode")){
throw new Error("Tree widget can only have TreeNode children");
}
this.appendChild(_a4a);
};
MochiKit.Widget.Tree.prototype.findRoot=function(name){
var _a4c=this.getChildNodes();
for(var i=0;i<_a4c.length;i++){
if(_a4c[i].name==name){
return _a4c[i];
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
MochiKit.Widget.Tree.prototype.expandAll=function(_a53){
if(typeof (_a53)!=="number"){
_a53=10;
}
var _a54=this.getChildNodes();
for(var i=0;_a53>0&&i<_a54.length;i++){
_a54[i].expandAll(_a53-1);
}
};
MochiKit.Widget.Tree.prototype.collapseAll=function(_a56){
if(typeof (_a56)!=="number"){
_a56=0;
}
var _a57=this.getChildNodes();
for(var i=0;i<_a57.length;i++){
_a57[i].collapseAll(_a56-1);
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
var _a5c=node.findChild(path[i]);
if(_a5c==null){
_a5c=new MochiKit.Widget.TreeNode({name:path[i]});
node.addChildNode(_a5c);
}
node=_a5c;
}
return node;
};
MochiKit.Widget.TreeNode=function(_a5d){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_a5d,MochiKit.Base.extend(null,arguments,1));
}
var icon=MochiKit.Widget.Icon({ref:"BLANK"});
var _a60=MochiKit.DOM.SPAN({"class":"widgetTreeNodeText"});
var div=MochiKit.DOM.DIV({"class":"widgetTreeNodeLabel"},icon,_a60);
var o=MochiKit.DOM.DIV({},div);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTreeNode");
_a5d=MochiKit.Base.update({name:"Tree Node",folder:false},_a5d);
if(typeof (_a5d.icon)=="undefined"){
_a5d.icon=_a5d.folder?"FOLDER":"DOCUMENT";
}
o.setAttrs(_a5d);
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(icon,"onclick",o,"toggle");
MochiKit.Signal.connect(div,"onclick",o,"select");
return o;
};
MochiKit.Widget.TreeNode.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TreeNode.prototype._container=function(_a63){
var _a64=this.lastChild;
if(MochiKit.DOM.hasElementClass(_a64,"widgetTreeNodeContainer")){
return _a64;
}else{
if(_a63){
_a64=MochiKit.DOM.DIV({"class":"widgetTreeNodeContainer widgetHidden"});
this.appendChild(_a64);
var _a65=this.firstChild.firstChild;
_a65.setAttrs({ref:"PLUS"});
this.setAttrs({icon:"FOLDER"});
return _a64;
}else{
return null;
}
}
};
MochiKit.Widget.TreeNode.prototype.setAttrs=function(_a66){
_a66=MochiKit.Base.update({},_a66);
var _a67=MochiKit.Base.mask(_a66,["name","folder","icon"]);
if(typeof (_a67.name)!="undefined"){
this.name=_a67.name;
var node=this.firstChild.firstChild;
while(!MochiKit.DOM.hasElementClass(node,"widgetTreeNodeText")){
node=node.nextSibling;
}
MochiKit.DOM.replaceChildNodes(node,_a67.name);
}
if(!MochiKit.Base.isFalse(_a67.folder)){
this._container(true);
}
if(typeof (_a67.icon)!="undefined"){
var _a69=this.firstChild.firstChild;
var _a6a=_a69.nextSibling;
if(!MochiKit.Widget.isWidget(_a6a,"Icon")){
_a6a=null;
}
if(_a6a==null&&_a67.icon!=null){
if(typeof (_a67.icon)==="string"){
_a67.icon=new MochiKit.Widget.Icon({ref:_a67.icon});
}else{
if(!MochiKit.Widget.isWidget(_a67.icon,"Icon")){
_a67.icon=new MochiKit.Widget.Icon(_a67.icon);
}
}
MochiKit.DOM.insertSiblingNodesAfter(_a69,_a67.icon);
}else{
if(_a6a!=null&&_a67.icon!=null){
if(MochiKit.Widget.isWidget(_a67.icon,"Icon")){
MochiKit.DOM.swapDOM(_a6a,_a67.icon);
}else{
if(typeof (_a67.icon)==="string"){
_a6a.setAttrs({ref:_a67.icon});
}else{
_a6a.setAttrs(_a67.icon);
}
}
}else{
if(_a6a!=null&&_a67.icon==null){
MochiKit.Widget.destroyWidget(_a6a);
}
}
}
}
MochiKit.DOM.updateNodeAttributes(this,_a66);
};
MochiKit.Widget.TreeNode.prototype.getChildNodes=function(){
var _a6b=this._container();
if(_a6b==null){
return [];
}else{
return MochiKit.Base.extend([],_a6b.childNodes);
}
};
MochiKit.Widget.TreeNode.prototype.addChildNode=function(_a6c){
if(!MochiKit.Widget.isWidget(_a6c,"TreeNode")){
throw new Error("TreeNode widget can only have TreeNode children");
}
this._container(true).appendChild(_a6c);
};
MochiKit.Widget.TreeNode.prototype.removeChildNode=function(_a6d){
var _a6e=this._container();
if(_a6e!=null){
_a6e.removeChild(_a6d);
}
};
MochiKit.Widget.TreeNode.prototype.isFolder=function(){
return this._container()!=null;
};
MochiKit.Widget.TreeNode.prototype.isExpanded=function(){
var _a6f=this._container();
return _a6f!=null&&!MochiKit.DOM.hasElementClass(_a6f,"widgetHidden");
};
MochiKit.Widget.TreeNode.prototype.isSelected=function(){
return MochiKit.DOM.hasElementClass(this.firstChild,"selected");
};
MochiKit.Widget.TreeNode.prototype.tree=function(){
var _a70=this.parent();
if(_a70!=null){
return _a70.tree();
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
var _a72=this.parent();
if(_a72==null){
return [this.name];
}else{
var path=_a72.path();
path.push(this.name);
return path;
}
};
MochiKit.Widget.TreeNode.prototype.findChild=function(name){
var _a75=this.getChildNodes();
for(var i=0;i<_a75.length;i++){
if(_a75[i].name==name){
return _a75[i];
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
var _a7c=this.parent();
if(_a7c!=null&&!_a7c.isExpanded()){
_a7c.expand();
}
var _a7d=this._container();
if(_a7d!=null&&!this.isExpanded()){
var _a7e=this.firstChild.firstChild;
_a7e.setAttrs({ref:"MINUS"});
MochiKit.DOM.removeElementClass(_a7d,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.expandAll=function(_a80){
if(typeof (_a80)!=="number"){
_a80=10;
}
this.expand();
var _a81=this.getChildNodes();
for(var i=0;_a80>0&&i<_a81.length;i++){
_a81[i].expandAll(_a80-1);
}
};
MochiKit.Widget.TreeNode.prototype.collapse=function(){
var _a83=this._container();
if(_a83!=null&&this.isExpanded()){
var _a84=this.firstChild.firstChild;
_a84.setAttrs({ref:"PLUS"});
MochiKit.DOM.addElementClass(_a83,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.collapseAll=function(_a86){
if(typeof (_a86)!=="number"){
_a86=0;
}
if(_a86<=0){
this.collapse();
}
var _a87=this.getChildNodes();
for(var i=0;i<_a87.length;i++){
_a87[i].collapseAll(_a86-1);
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
MochiKit.Widget.Wizard=function(_a8a){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_a8a,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV(_a8a);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetWizard");
o._selectedIndex=-1;
o.appendChild(MochiKit.DOM.H3({"class":"widgetWizardTitle"}));
var _a8d=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"CANCEL"})," Cancel");
var _a8e=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"PREVIOUS"})," Previous");
var _a8f=MochiKit.Widget.Button({},"Next ",MochiKit.Widget.Icon({ref:"NEXT"}));
var _a90=MochiKit.Widget.Button({highlight:true},MochiKit.Widget.Icon({ref:"OK"})," Finish");
_a8d.hide();
o.appendChild(MochiKit.DOM.DIV({"class":"widgetWizardButtons"},_a8d,_a8e,_a8f,_a90));
MochiKit.Signal.connect(_a8d,"onclick",o,"cancel");
MochiKit.Signal.connect(_a8e,"onclick",o,"previous");
MochiKit.Signal.connect(_a8f,"onclick",o,"next");
MochiKit.Signal.connect(_a90,"onclick",o,"done");
o._updateStatus();
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Wizard.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Wizard.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.childNodes,2);
};
MochiKit.Widget.Wizard.prototype.addChildNode=function(_a91){
if(!MochiKit.Widget.isWidget(_a91,"Pane")){
_a91=new MochiKit.Widget.Pane(null,_a91);
}
MochiKit.Style.registerSizeConstraints(_a91,"100%","100%-65");
_a91.hide();
this.appendChild(_a91);
if(this.getChildNodes().length==1){
this.activatePage(0);
}else{
this._updateStatus();
}
};
MochiKit.Widget.Wizard.prototype._updateStatus=function(){
var h3=this.childNodes[0];
var _a93=this.childNodes[1].childNodes[0];
var _a94=this.childNodes[1].childNodes[1];
var _a95=this.childNodes[1].childNodes[2];
var _a96=this.childNodes[1].childNodes[3];
var page=this.activePage();
var _a98=MochiKit.Widget.Pane.FORWARD;
var _a99=null;
var info="(No pages available)";
var icon=null;
if(page!=null){
_a98=page.pageStatus||MochiKit.Widget.Pane.ANY;
_a99=page.pageTitle;
info=" (Step "+(this._selectedIndex+1)+" of "+this.getChildNodes().length+")";
}
if(_a98===MochiKit.Widget.Pane.WORKING){
_a93.show();
_a94.hide();
icon={ref:"LOADING","class":"widgetWizardWait"};
icon=MochiKit.Widget.Icon(icon);
}else{
_a93.hide();
_a94.show();
}
if(this._selectedIndex>=this.getChildNodes().length-1){
_a95.hide();
_a96.show();
}else{
_a95.show();
_a96.hide();
}
_a94.disabled=(this._selectedIndex<=0)||!_a98.previous;
_a95.disabled=!_a98.next;
_a96.disabled=!_a98.next;
info=MochiKit.DOM.SPAN({"class":"widgetWizardInfo"},info);
MochiKit.DOM.replaceChildNodes(h3,icon,_a99,info);
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
MochiKit.Widget.Wizard.prototype.activatePage=function(_a9c){
if(typeof (_a9c)=="number"){
var _a9d=_a9c;
var page=this.childNodes[_a9d+2];
}else{
var page=_a9c;
var _a9d=MochiKit.Base.findIdentical(this.childNodes,page,2)-2;
}
if(_a9d<0||_a9d>=this.getChildNodes().length){
throw new RangeError("Page index out of bounds: "+_a9d);
}
var _a9f=this.activePage();
if(_a9f!=null){
if(!_a9f._handleExit({validateForm:this._selectedIndex<_a9d})){
return;
}
}
this._selectedIndex=_a9d;
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

