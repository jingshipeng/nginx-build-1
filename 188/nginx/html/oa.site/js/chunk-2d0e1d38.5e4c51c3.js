(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1d38"],{"7ba8":function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("a-modal",{attrs:{width:640,visible:e.visible,title:"任务添加"},on:{ok:e.handleSubmit,cancel:function(a){e.visible=!1}}},[r("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[r("a-form-item",{attrs:{label:"任务名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["taskName",{rules:[{required:!0,message:"请输入任务名称"}]}],expression:"['taskName', {rules:[{required: true, message: '请输入任务名称'}]}]"}]})],1),r("a-form-item",{attrs:{label:"开始时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["startTime",{rules:[{required:!0,message:"请选择开始时间"}]}],expression:"['startTime', {rules:[{required: true, message: '请选择开始时间'}]}]"}],staticStyle:{width:"100%"}})],1),r("a-form-item",{attrs:{label:"任务负责人",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner",{rules:[{required:!0,message:"请选择开始时间"}]}],expression:"['owner', {rules:[{required: true, message: '请选择开始时间'}]}]"}]},[r("a-select-option",{attrs:{value:0}},[e._v("付晓晓")]),r("a-select-option",{attrs:{value:1}},[e._v("周毛毛")])],1)],1),r("a-form-item",{attrs:{label:"产品描述",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["desc"],expression:"['desc']"}]})],1)],1)],1)},l=[],s={name:"TaskForm",data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,form:this.$form.createForm(this)}},methods:{add:function(){this.visible=!0},edit:function(e){var a=this.form.setFieldsValue;this.visible=!0,this.$nextTick(function(){a({taskName:"test"})})},handleSubmit:function(){var e=this.form.validateFields;this.visible=!0,e(function(e,a){e||console.log("values",a)})}}},o=s,i=r("2877"),n=Object(i["a"])(o,t,l,!1,null,null,null);a["default"]=n.exports}}]);