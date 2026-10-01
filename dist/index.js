"use strict";var q=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=q(function(l,v){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),c=require('@stdlib/blas-ext-base-dcusome/dist').ndarray;function m(i){var r=i[1],e=i[0],s=o(i[2]);return c(d(e,0),s,u(e),t(e,0),a(e),u(r),t(r,0),a(r)),r}v.exports=m
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
