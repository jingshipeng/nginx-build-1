(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e80cb0d8"],{"8dc4":function(t,e,a){"use strict";a.d(e,"c",function(){return r}),a.d(e,"b",function(){return u}),a.d(e,"a",function(){return c}),a.d(e,"d",function(){return i});var n=a("b775");function r(t){return Object(n["b"])({url:"/AccountRebate/BrandColunms",method:"get",params:t})}function u(t){return Object(n["b"])({url:"/AccountRebate/Brand",method:"get",params:t})}function c(t){return Object(n["b"])({url:"/AccountRebate",method:"get",params:t})}function i(t){return Object(n["b"])({url:"/AccountRebate/Colunms",method:"get",params:t})}},c621:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"components-form-demo-advanced-search"}},[a("a-form",{staticClass:"ant-advanced-search-form",attrs:{form:t.form}},[a("a-range-picker",{style:{width:"256px"},model:{value:t.defaultDate,callback:function(e){t.defaultDate=e},expression:"defaultDate"}}),a("a-input",{staticStyle:{width:"120px"},attrs:{placeholder:"账户ID"},model:{value:t.queryParam.accountId,callback:function(e){t.$set(t.queryParam,"accountId",e)},expression:"queryParam.accountId"}}),a("a-input",{staticStyle:{width:"120px"},attrs:{placeholder:"品牌ID"},model:{value:t.queryParam.brandId,callback:function(e){t.$set(t.queryParam,"brandId",e)},expression:"queryParam.brandId"}}),a("a-button",{style:{marginLeft:"8px"},attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("搜索")]),a("a-button",{style:{marginLeft:"8px"},on:{click:t.resetqueryParam}},[t._v("重置")])],1)],1),t._v("\n  开发中···\n")])},r=[],u=a("2af9"),c=a("8dc4"),i=a("ca00"),o=a("c1df"),s=a.n(o),m={name:"clue-out-txid-list",components:{STable:u["q"],Ellipsis:u["g"]},data:function(){var t=this;return{dateFormat:"YYYY-MM-DD",dateIntFormat:"YYYYMMDD",expand:!1,form:this.$form.createForm(this),queryParam:{startTime:"",endTime:""},columns:[],loadData:function(e){return t.queryParam.startTime||t.setTime(new Date,7),Object(c["b"])(Object.assign(e,t.queryParam)).then(function(t){return t})},defaultDate:[]}},watch:{defaultDate:function(t){if(0!=t.length)return this.queryParam.startTime=t[0].format(this.dateIntFormat),void(this.queryParam.endTime=t[1].format(this.dateIntFormat));delete this.queryParam.startTime,delete this.queryParam.endTime}},beforeRouteEnter:function(t,e,a){a(function(e){e.init.call(e,t)}),a()},beforeRouteUpdate:function(t,e,a){this.init.call(this,t),a()},created:function(){var t=this;Object(c["c"])().then(function(e){e.success&&(t.columns=e.data)})},computed:{count:function(){return this.expand}},methods:{moment:s.a,init:function(t){t.query.accountId&&(this.queryParam.accountId=t.query.accountId)},resetqueryParam:function(){this.queryParam={},this.setTime(new Date,7)},setTime:function(t,e){this.queryParam.endTime=parseInt(Object(i["b"])(t,"yyyyMMdd")),this.queryParam.startTime=this.queryParam.endTime-e,this.defaultDate=[this.moment(new Date(t-864e5*e),this.dateFormat),this.moment(t,this.dateFormat)]}}},d=m,l=a("2877"),f=Object(l["a"])(d,n,r,!1,null,null,null);e["default"]=f.exports}}]);