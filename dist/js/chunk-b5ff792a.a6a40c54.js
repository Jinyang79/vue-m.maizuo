(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5ff792a"],{"0d5f":function(t,e,i){"use strict";i.r(e);var c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-city"},[i("div",{staticClass:"header"},[i("div",{staticClass:"header_left",on:{click:t.isCity}},[i("i",{staticClass:"iconfont iconchazi"})]),i("div",{staticClass:"header_title"},[t._v("当前城市 - "+t._s(t.cityName&&t.cityName.name))])]),i("div",{staticClass:"hot-city"},[i("div",{staticClass:"city-index-title"},[t._v("热门城市")]),i("ul",{staticClass:"city-index-detail"},t._l(t.hotCity,(function(e){return i("li",{key:e.cityId,staticClass:"city-item-detail",on:{click:function(i){return t.handleClick(e.cityId)}}},[i("div",{staticClass:"city-item-text"},[t._v(t._s(e.name))])])})),0)]),i("mt-index-list",t._l(t.cityList,(function(e){return i("mt-index-section",{key:e.index,attrs:{index:e.index}},t._l(e.list,(function(e){return i("div",{key:e.index,on:{click:function(i){return t.handleClick(e.cityId)}}},[i("mt-cell",{attrs:{title:e.name}})],1)})),0)})),1)],1)},n=[],a=(i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("ade3")),s=i("2f62"),r=i("76a0");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,c)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var y={data:function(){return{}},computed:l({},Object(s["c"])({cityList:"city/cityListGetter",hotCity:"city/hotCity",cityName:"city/cityName"})),activated:function(){this.$store.commit("city/hideTabbar",!1)},mounted:function(){this.getCityList()},deactivated:function(){this.$store.commit("city/showTabbar",!0)},methods:l({isCity:function(){Object(r["MessageBox"])({message:"请选择您所在城市哦",showCancelButton:!0})}},Object(s["b"])({getCityList:"city/getCityList"}),{},Object(s["d"])({changeCity:"city/changeCity"}),{handleClick:function(t){this.changeCity(t),localStorage.setItem("cityId",t),this.$router.go(-1)}})},d=y,u=(i("944a"),i("2877")),f=Object(u["a"])(d,c,n,!1,null,"71b10a22",null);e["default"]=f.exports},"74a3":function(t,e,i){},"944a":function(t,e,i){"use strict";var c=i("74a3"),n=i.n(c);n.a}}]);
//# sourceMappingURL=chunk-b5ff792a.a6a40c54.js.map