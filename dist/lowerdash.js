!function(n){function t(n){return O.isArray(n)||O.isArguments(n)||(n=[n]),O.toArray(n)}function r(n){return n.length>1?n[n.length-2]:null}function e(n,t,r){if(1==O.size(n))return n[0];var e=n.pop();return n.join(t)+r+e}function i(n,t){t=t.split(".");for(var r=0,e=t.length;e>r;r++){if(!hasOwnProperty.call(n,t[r]))return void 0;n=n[t[r]]}return n}function u(n,t,r){for(var e=t.split("."),i=0,u=e.length;u>i;i++)u-1>i&&!n.hasOwnProperty(e[i])&&(n[e[i]]={}),i==u-1?n[e[i]]=r:n=n[e[i]];return n}function a(n,t){for(var r=t.split("."),e=n,i=0,u=r.length;u>i&&n.hasOwnProperty(r[i]);i++)if(u-1>i)n=n[r[i]];else if(i==u-1){delete n[r[i]];break}return e}function o(n,t){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)&&n[r]===t)return r;return null}function c(n,t){return O.isArray(n)&&(n=O.uniq(n.sort())),O.isArray(t)&&(t=O.uniq(t.sort())),O.isEqual(n,t)}function s(n){return O.isObject(n)&&!O.isFunction(n)&&!O.isArray(n)}function f(n){try{return O.isString(n)&&O.isObject(JSON.parse(n))}catch(t){return!1}}function h(n){return O.isArray(n)&&0==_compact(n).length?!0:O.contains([null,"null",void 0,"",!1,"false",0,"0"],n)}function p(n,t,r,e){function i(){var s;u>=c?s=function(){}:u==c-1&&O.isFunction(r)?s=function(){r.call(e),i()}:c>u&&(s=function(){i()}),c>u&&(a?t.call(e,o[u][1],o[u][0],s,n):t.call(e,o[u],u,s,n)),u++}if(0==O.size(n))return r.call(e);var u=0,a=O.isIterable(n),o=a?O.pairs(n):n,c=O.size(o);return i(),n}function y(n,t,r,e,i){O.isFinite(e)||(e=O.size(n));var u=O.size(n),a=O.isIterable(n)?O.norris(n,e):O.chunk(n,e);return O.eachAsync(a,function(r,a,o){var c=0;O.each(r,function(r,a){function s(){u--,(c+1==e||0==u)&&o(),c++}t.call(i,r,a,s,n)})},r,i),n}function v(n,t,r,e,i){return O.eachAsync(n,function(){setTimeout(function(){t.apply(this,arguments)}.bind(i||this),e)},r,i)}function m(n,t){return O.chain(n).pairs().chunk(t).map(function(n){var t={};return O.each(n,function(n){t[n[0]]=n[1]}),t}).value()}function d(n,t){if((r=n.length)<2)return l-1;for(var r,e=Math.abs(n[--r]-t);r--&&!(e<(e=Math.abs(n[r]-t))););return n[r+1]}function g(n,t,r){return n.splice(r,1,t),n}function A(n,t,r){return n.splice(r,0,t),n}function b(n){try{var t=O.from(arguments);return t.shift(),n.apply(this,t)}catch(r){return!1}}if("function"==typeof require){var O=require("lodash").runInContext();"undefined"!=typeof exports&&"undefined"!=typeof module&&module.exports&&(module.exports=O)}else var O=n._;O.mixin({isLaxEqual:c,isIterable:s,isJson:f,isShit:h,eachAsync:p,eachParallel:y,eachDelayed:v,eachInterval:v,getFromPath:i,setFromPath:u,eraseFromPath:a,keyOf:o,norris:m,from:t,penultimate:r,joinLast:e,gluten:e,closest:d,replaceAt:g,insertAt:A,attempt:b})}(Function("return this")());