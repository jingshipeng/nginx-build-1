(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e1e3522"],{"6ad9":function(e,t,a){},"98bc":function(e,t,a){"use strict";var r=a("6ad9"),n=a.n(r);n.a},b35f:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a("b775");function n(e){return Object(r["b"])({url:"/crmClass",method:"get",params:e})}},b71d:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a("b775");function n(e){return Object(r["b"])({url:"/OldEmployee/GetEmployeeList",method:"get",params:e})}},f989:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"components-form-demo-advanced-search"}},[a("a-form",{staticClass:"ant-advanced-search-form",attrs:{form:e.form}},[a("a-select",{staticStyle:{width:"120px",marginTop:"'8px'"},attrs:{placeholder:"是否启用"},model:{value:e.queryParam.status,callback:function(t){e.$set(e.queryParam,"status",t)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("暂停")]),a("a-select-option",{attrs:{value:"0"}},[e._v("启用")])],1),a("a-select",{staticStyle:{width:"120px",marginTop:"'8px'"},attrs:{placeholder:"账户类型"},on:{dropdownVisibleChange:function(t){return e.loadSelectDataCrmClass(21446)}},model:{value:e.queryParam.UsageId,callback:function(t){e.$set(e.queryParam,"UsageId",t)},expression:"queryParam.UsageId"}},e._l(e.pageData.crm21446,function(t){return a("a-select-option",{key:t.key,attrs:{value:t.value}},[e._v(e._s(t.name))])}),1),a("a-select",{staticStyle:{width:"120px",marginTop:"'8px'"},attrs:{placeholder:"账户用途"},on:{dropdownVisibleChange:function(t){return e.loadSelectDataCrmClass(20337)}},model:{value:e.queryParam.UsageId,callback:function(t){e.$set(e.queryParam,"UsageId",t)},expression:"queryParam.UsageId"}},e._l(e.pageData.crm20337,function(t){return a("a-select-option",{key:t.key,attrs:{value:t.value}},[e._v(e._s(t.name))])}),1),a("a-select",{staticStyle:{width:"120px",marginTop:"'8px'"},attrs:{placeholder:"业务团队"},on:{dropdownVisibleChange:function(t){return e.loadSelectDataCrmClass(22547)}},model:{value:e.queryParam.ServiceId,callback:function(t){e.$set(e.queryParam,"ServiceId",t)},expression:"queryParam.ServiceId"}},e._l(e.pageData.crm22547,function(t){return a("a-select-option",{key:t.key,attrs:{value:t.value}},[e._v(e._s(t.name))])}),1),a("a-select",{staticStyle:{width:"120px",marginTop:"'8px'"},attrs:{placeholder:"媒介人员"},on:{dropdownVisibleChange:function(t){return e.getMeijie()}},model:{value:e.queryParam.AccountMasterIn,callback:function(t){e.$set(e.queryParam,"AccountMasterIn",t)},expression:"queryParam.AccountMasterIn"}},e._l(e.pageData.employeeData,function(t){return a("a-select-option",{key:t.key,attrs:{value:t.key}},[e._v(e._s(t.title))])}),1),a("a-select",{staticStyle:{width:"120px",marginTop:"'8px'"},attrs:{placeholder:"选择查询项"},model:{value:e.selectType,callback:function(t){e.selectType=t},expression:"selectType"}},[a("a-select-option",{attrs:{value:"accountName"}},[e._v("按账户名称")]),a("a-select-option",{attrs:{value:"planName"}},[e._v("按计划名称")]),a("a-select-option",{attrs:{value:"CampaignName"}},[e._v("按推广计划名称")]),a("a-select-option",{attrs:{value:"planId"}},[e._v("按计划ID")]),a("a-select-option",{attrs:{value:"apiCampaignId"}},[e._v("按计划API_ID")]),a("a-select-option",{attrs:{value:"brandId"}},[e._v("按品牌ID")]),a("a-select-option",{attrs:{value:"nexId"}},[e._v("按平台ID")]),a("a-select-option",{attrs:{value:"accountId"}},[e._v("按账户ID")]),a("a-select-option",{attrs:{value:"apiUserId"}},[e._v("按账户API_ID")])],1),a("a-input-search",{staticStyle:{width:"120px",marginTop:"'8px'"},attrs:{placeholder:"输入查询值"},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}}),a("a-button",{style:{marginLeft:"8px",marginTop:"8px"},attrs:{type:"primary"},on:{click:function(t){return e.handleSearch()}}},[e._v("搜索")]),a("a-button",{style:{marginLeft:"8px",marginTop:"8px"},on:{click:function(t){return e.handleChongzhi()}}},[e._v("重置")])],1)],1),a("s-table",{ref:"table",attrs:{orignColumns:e.columns,data:e.loadData,scroll:{x:110},pageSize:20,bordered:"",size:"middle"},scopedSlots:e._u([{key:"notConnectCountRatio",fn:function(t){return a("span",{},[a("ellipsis",{attrs:{length:5,tooltip:""}},[e._v(e._s(t))])],1)}},{key:"statusName",fn:function(t,r){return a("span",{staticClass:"table-operation"},[e._v("\n      "+e._s(t)+"\n      "),1==r.status?a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.setApiStatus(r,0)}}},[e._v("暂停")]):e._e(),a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("router-link",{attrs:{to:{path:"/SEM/Plan/"+r.apiCampaignId+"/PlanDay",query:{apiCampaignId:r.apiCampaignId,title:"["+r.apiCampaignName+"]计划日报表详情"}}}},[e._v("查看计划日报表")])],1),a("a-menu-item",{on:{click:function(t){return e.setApiBudgetType(r)}}},[e._v("修改本地预算")]),a("a-menu-item",{on:{click:function(t){return e.setApplyStatus(r)}}},[e._v("编辑计划(待)")]),a("a-menu-item",{on:{click:function(t){return e.setRemark(r)}}},[e._v("编辑备注")]),a("a-menu-item",{on:{click:function(t){return e.setApplyStatus(r)}}},[e._v("编辑Api计划(待)")]),a("a-menu-item",{on:{click:function(t){return e.setApplyStatus(r)}}},[e._v("编辑品牌编号(待)")]),a("a-menu-item",{on:{click:function(t){return e.setApplyStatus(r)}}},[e._v("编辑计费类型(待)")]),a("a-menu-item",{on:{click:function(t){return e.setApplyStatus(r)}}},[e._v("设置推广暂停(待)")]),a("a-menu-item",{on:{click:function(t){return e.setApplyStatus(r)}}},[e._v("设置否定词(待)")]),a("a-menu-item",[a("a",{attrs:{type:"primary"},on:{click:function(t){return e.dropdownOpen(r,"employee")}}},[e._v("分配媒介人员(待)")])]),a("a-menu-item",{on:{click:function(t){return e.setApplyStatus(r)}}},[e._v("查看历史(待)")]),a("a-menu-item",{on:{click:function(t){return e.setApplyStatus(r)}}},[e._v("查看单元(待)")]),a("a-menu-item",{on:{click:function(t){return e.setApplyStatus(r)}}},[e._v("查看搜索词(待)")]),a("a-menu-item",{on:{click:function(t){return e.setApplyStatus(r)}}},[e._v("批量编辑(分类,分组,需求类型)(待)")])],1),a("a",{attrs:{href:"javascript:;"}},[e._v("\n          更多\n          "),a("a-icon",{attrs:{type:"down"}})],1)],1)],1)}}])}),a("a-drawer",{attrs:{title:"修改本地预算",width:720,visible:e.pageVariable.apiBudgetType,wrapStyle:{height:"calc(100% - 108px)",overflow:"auto",paddingBottom:"108px"}},on:{close:function(){return e.pageVariable.apiBudgetType=!1}}},[a("a-form",{attrs:{form:e.form,layout:"vertical",hideRequiredMark:""}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"预算类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner",{rules:[{required:!0,message:"选择预算类型"}]}],expression:"['owner', {\n                rules: [{ required: true, message: '选择预算类型' }]\n              }]"}],attrs:{placeholder:"选择预算类型"},model:{value:e.editParam.apiBudgetType,callback:function(t){e.$set(e.editParam,"apiBudgetType",t)},expression:"editParam.apiBudgetType"}},[a("a-select-option",{attrs:{value:"0"}},[e._v("不限定预算")]),a("a-select-option",{attrs:{value:"1"}},[e._v("每日预算")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"预算"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"预算金额"}]}],expression:"['name', {\n                rules: [{ required: true, message: '预算金额' }]\n              }]"}],attrs:{placeholder:"预算金额"},model:{value:e.editParam.apiBudget,callback:function(t){e.$set(e.editParam,"apiBudget",t)},expression:"editParam.apiBudget"}})],1)],1)],1)],1),a("div",{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},[a("a-button",{style:{marginRight:"8px"},on:{click:function(){return e.pageVariable.apiBudgetType=!1}}},[e._v("取消")]),a("a-button",{attrs:{type:"primary"},on:{click:e.setApiBudget}},[e._v("提交")])],1)],1),a("a-drawer",{attrs:{title:"修改备注",width:360,visible:e.pageVariable.remark,wrapStyle:{height:"calc(100% - 108px)",overflow:"auto",paddingBottom:"108px"}},on:{close:function(){return e.pageVariable.remark=!1}}},[a("a-form",{attrs:{form:e.form,layout:"vertical",hideRequiredMark:""}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"备注"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"备注"}]}],expression:"['name', {\n                rules: [{ required: true, message: '备注' }]\n              }]"}],attrs:{placeholder:"备注"},model:{value:e.editParam.remark,callback:function(t){e.$set(e.editParam,"remark",t)},expression:"editParam.remark"}})],1)],1)],1)],1),a("div",{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},[a("a-button",{style:{marginRight:"8px"},on:{click:function(){return e.pageVariable.remark=!1}}},[e._v("取消")]),a("a-button",{attrs:{type:"primary"},on:{click:e.setRemarkForm}},[e._v("提交")])],1)],1),a("a-drawer",{attrs:{title:"选择媒介人员",placement:"right",closable:!1,visible:e.pageVariable.employee},on:{close:function(){return e.pageVariable.employee=!1}}},[a("a-directory-tree",{attrs:{multiple:"",defaultExpandAll:"",autoExpandParent:!0,treeData:e.pageData.employeeData},on:{select:e.onSelectEmployee}})],1)],1)},n=[],i=(a("a481"),a("28a5"),a("bd86")),o=a("2af9"),s=a("b71d"),l=a("b775");function c(e){return Object(l["b"])({url:"/SEMPlanNew/SetEmployee",method:"get",params:e})}function u(e){return Object(l["b"])({url:"/SEMPlanNew/EditApiBudget",method:"get",params:e})}function p(e){return Object(l["b"])({url:"/SEMPlanNew",method:"get",params:e})}function m(e){return Object(l["b"])({url:"/SEMPlanNew/Colunms",method:"get",params:e})}var d=a("b35f"),f=a("ca00"),h=a("c1df"),g=a.n(h),y={name:"PlanList",components:{STable:o["q"],Ellipsis:o["g"]},data:function(){var e,t=this;return e={dateFormat:"YYYY-MM-DD",dateIntFormat:"YYYYMMDD",expand:!1,form:this.$form.createForm(this),brandSource:[],selectType:[],selectValue:[],queryParam:{startTime:"",endTime:""},otherParam:{sectionDay:-1,isRefreshData:!1,isMonitorTime:!1,isOneDayTime:!1,keywordSource:[],keyupValue:[],querySource:[]},pageVariable:{employee:!1,accountAuth:!1,apiBudgetType:!1,remark:!1},pageData:{thisPlan:{},employeeData:[],mccData:[],crm21446:[],crm22643:[],crm20337:[],crm22625:[],crm22547:[],crm20025:[]}},Object(i["a"])(e,"queryParam",{}),Object(i["a"])(e,"editParam",{}),Object(i["a"])(e,"columns",[]),Object(i["a"])(e,"loadData",function(e){return p(Object.assign(e,t.queryParam)).then(function(e){return e})}),Object(i["a"])(e,"defaultDate",[]),e},watch:{defaultDate:function(e){0!==e.length&&(this.otherParam.originTime=e[0].format(this.dateFormat),this.queryParam.startTime=e[0].format(this.dateIntFormat),this.queryParam.endTime=e[1].format(this.dateIntFormat)),delete this.queryParam.startTime,delete this.queryParam.endTime},"pageVariable.employee":function(e){!0===e&&this.getMeijie()}},beforeRouteEnter:function(e,t,a){a(function(t){t.init.call(t,e)}),a()},beforeRouteUpdate:function(e,t,a){this.init.call(this,e),a()},created:function(){var e=this;m().then(function(t){t.success&&(e.columns=t.data)})},computed:{},methods:{moment:g.a,timeSearch:function(e){this.defaultDate=this.generatorDate(e,new Date(this.otherParam.originTime)),this.$refs.table.refresh(!0)},init:function(e){this.queryParam.accountId=e.query.accountId,this.$refs.table.refresh(!0)},generatorDate:function(e,t){t||(t=new Date),this.otherParam.sectionDay=e;var a=Object(f["c"])(e,t).split(",");return this.queryParam.startTime=a[0].replace(/-/g,""),this.queryParam.endTime=a[1].replace(/-/g,""),[this.moment(a[0],this.dateFormat),this.moment(a[1],this.dateFormat)]},handleSearch:function(){this.queryParam[this.selectType]=this.selectValue,this.$refs.table.refresh(!0)},handleChongzhi:function(){this.queryParam={},this.selectType=[],this.selectValue=[],this.$refs.table.refresh(!0)},setApplyStatus:function(e,t){console.log(e,t)},loadSelectDataCrmClass:function(e){var t=this;0===this.pageData["crm"+e].length&&Object(d["a"])({ParentId:e}).then(function(a){a.data&&a.data.length>0&&(t.pageData["crm"+e]=a.data)})},dropdownOpen:function(e,t){this.pageData.thisPlan=e,this.pageVariable[t]=!0},getMeijie:function(){var e=this;0===this.pageData.employeeData.length&&Object(s["a"])({DepartMent:"42|29",EIds:"1638|1650|1655"}).then(function(t){e.pageData.employeeData=t.data})},onSelectEmployee:function(e){var t=this,a=t.pageData.thisPlan;this.$confirm({title:"确认选择【"+t.pageData.employeeData.filter(function(t){return t.key===e[0]})[0].title+"】么？",content:"来自账户："+a.planName,okText:"确认",cancelText:"取消",maskClosable:!0,onOk:function(r){c({EmployeeId:e[0],planId:a.planId}).then(function(e){e.success?(t.openNotificationWithIcon("success",e.msg),t.pageVariable.employee=!1,t.$refs.table.refresh(!0)):t.openNotificationWithIcon("error",e.msg),r()})}})},setApiBudgetType:function(e){this.pageData.thisPlan=e,this.pageVariable.apiBudgetType=!0},setApiBudget:function(e){var t=this,a=t.pageData.thisPlan,r=this.editParam.apiBudgetType,n=this.editParam.apiBudget;this.$confirm({title:"是否确认修改？",content:"来自计划："+a.planName,okText:"确认",cancelText:"取消",maskClosable:!0,onOk:function(e){u({ApiBudgetType:r,ApiBudget:n,planId:a.planId}).then(function(a){a.success?(t.openNotificationWithIcon("success",a.msg),t.pageVariable.apiBudgetType=!1,t.$refs.table.refresh(!0)):t.openNotificationWithIcon("error",a.msg),e()})}})},setRemark:function(e){this.pageData.thisPlan=e,this.pageVariable.remark=!0},setRemarkForm:function(e){var t=this,a=t.pageData.thisPlan,r=this.editParam.remark;this.$confirm({title:"是否确认修改？",content:"来自计划："+a.planName,okText:"确认",cancelText:"取消",maskClosable:!0,onOk:function(e){u({remark:r,planId:a.planId}).then(function(a){a.success?(t.openNotificationWithIcon("success",a.msg),t.$refs.table.refresh(!0)):t.openNotificationWithIcon("error",a.msg),e()})}})},openNotificationWithIcon:function(e,t){this.$notification[e]({message:"操作提醒",description:t})}}},v=y,b=(a("98bc"),a("2877")),k=Object(b["a"])(v,r,n,!1,null,null,null);t["default"]=k.exports}}]);