(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{146:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"小程序项目遇到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序项目遇到的问题"}},[t._v("#")]),t._v(" 小程序项目遇到的问题")]),t._v(" "),a("h3",{attrs:{id:"微信小程序左上角返回按钮去除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序左上角返回按钮去除"}},[t._v("#")]),t._v(" 微信小程序左上角返回按钮去除")]),t._v(" "),a("ol",[a("li",[t._v('如果不是点击之后跳转页面，json文件里加上：\n"navigationStyle":"custom"\n这样做的弊端在于去除按钮的同时，也修改了小程序默认的导航栏样式')]),t._v(" "),a("li",[t._v("如果是你点击之后跳转的页面，把wx.navigateTo改成 wx.redirectTo.\nwx.navigateTo和wx.redirectTo的区别在于，前者跳转之后会保留之前的页面，后者跳转之后会关闭所有的页面。")])]),t._v(" "),a("h3",{attrs:{id:"小程序切换下单方式动态setdata数据，input值不显示情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序切换下单方式动态setdata数据，input值不显示情况"}},[t._v("#")]),t._v(" 小程序切换下单方式动态setData数据，input值不显示情况")]),t._v(" "),a("p",[t._v("切换tab对input重新赋值，切换后input的值不显示。打开调试模式，可以看到input的value值存在。\n解决方法：本次bug是因为input刷新切换后view块是隐藏状态")]),t._v(" "),a("ol",[a("li",[t._v("减少setData的渲染。")]),t._v(" "),a("li",[t._v("使用wx:if重新渲染view块,重新生成代码。")])]),t._v(" "),a("h3",{attrs:{id:"公众号关联小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号关联小程序"}},[t._v("#")]),t._v(" 公众号关联小程序")]),t._v(" "),a("p",[t._v("公众号关联小程序后，将可在自定义菜单、模板消息、客服消息等功能中使用小程序。图文消息中可直接使用小程序卡片、链接、图片素材，无需关联小程序。")]),t._v(" "),a("h4",{attrs:{id:"关联规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联规则"}},[t._v("#")]),t._v(" 关联规则")]),t._v(" "),a("ol",[a("li",[t._v("所有公众号都可以关联小程序。")]),t._v(" "),a("li",[t._v("公众号可关联10个同主体，3个非同主体小程序。公众号一个月可新增关联小程序13次。")]),t._v(" "),a("li",[t._v("小程序可设置无需关联确认。设置后，公众号关联小程序不需要小程序确认，单方操作即可关联成功。")]),t._v(" "),a("li",[t._v("小程序可设置需关联确认。设置后，公众号关联小程序需小程序管理员确认后才能关联成功。")]),t._v(" "),a("li",[t._v("小程序可设置不允许被关联。设置后，公众号无法关联此小程序。")])]),t._v(" "),a("h4",{attrs:{id:"关联流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联流程"}},[t._v("#")]),t._v(" 关联流程")]),t._v(" "),a("p",[t._v("登录公众号后台-小程序-小程序管理-添加-关联小程序")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/introduction/#%E5%85%AC%E4%BC%97%E5%8F%B7%E5%85%B3%E8%81%94%E5%B0%8F%E7%A8%8B%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序参考地址"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"小程序验证码倒计时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序验证码倒计时"}},[t._v("#")]),t._v(" 小程序验证码倒计时")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wait "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" settime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("that")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wait "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      statebtn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      recodetext"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"获取验证码"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    wait "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      statebtn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      recodetext"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"重新获取（"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("wait"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('")"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    wait"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    settime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 生命周期函数--监听页面卸载\n*清除倒计时\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onUnload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("settime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    wait "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("倒计时：2018-04-09 14:08:51.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXPIRETIME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXPIRETIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//格式转换 2018/04/09 14:08:51")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXPIRETIME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXPIRETIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/-/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURRENTTIME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURRENTTIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURRENTTIME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURRENTTIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/-/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timeslot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXPIRETIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURRENTTIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timeslot'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeslot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" interval "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//周期函数，一秒循环一次")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeslot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" timeslot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//停止循环")]),t._v("\n    that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      timestart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        hour"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        minute"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        second"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      timestart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeslot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeslot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeslot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      hour"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      minute"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      second"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    timeslot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" timeslot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"sitemap-的索引提示关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-的索引提示关闭"}},[t._v("#")]),t._v(" sitemap 的索引提示关闭")]),t._v(" "),a("p",[a("code",[t._v("sitemap")]),t._v(" 的索引提示是默认开启的，如需要关闭 "),a("code",[t._v("sitemap")]),t._v(" 的索引提示，可在小程序项目配置文件 "),a("code",[t._v("project.config.json")]),t._v(" 的 "),a("code",[t._v("setting")]),t._v(" 中配置字段 "),a("code",[t._v("checkSiteMap")]),t._v(" 为 "),a("code",[t._v("false")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"checkSiteMap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),a("h3",{attrs:{id:"微信小程序目前有蓝牙-api-共-18-个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序目前有蓝牙-api-共-18-个"}},[t._v("#")]),t._v(" 微信小程序目前有蓝牙 API 共 18 个")]),t._v(" "),a("h4",{attrs:{id:"操作蓝牙适配器的共有-4-个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作蓝牙适配器的共有-4-个"}},[t._v("#")]),t._v(" 操作蓝牙适配器的共有 4 个")]),t._v(" "),a("p",[a("code",[t._v("wx.openBluetoothAdapter")]),t._v(" 初始化蓝牙适配器"),a("br"),t._v(" "),a("code",[t._v("wx.closeBluetoothAdapter")]),t._v(" 关闭蓝牙模块"),a("br"),t._v(" "),a("code",[t._v("wx.getBluetoothAdapterState")]),t._v(" 获取本机蓝牙适配器状态"),a("br"),t._v(" "),a("code",[t._v("wx.onBluetoothAdapterStateChange")]),t._v(" 监听蓝牙适配器状态变化事件")]),t._v(" "),a("h4",{attrs:{id:"连接前使用的共有-4-个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接前使用的共有-4-个"}},[t._v("#")]),t._v(" 连接前使用的共有 4 个")]),t._v(" "),a("p",[a("code",[t._v("wx.startBluetoothDevicesDiscovery")]),t._v(" 开始搜寻附近的蓝牙外围设备"),a("br"),t._v(" "),a("code",[t._v("wx.stopBluetoothDevicesDiscovery")]),t._v(" 停止搜寻附近的蓝牙外围设备"),a("br"),t._v(" "),a("code",[t._v("wx.getBluetoothDevices")]),t._v(" 获取所有已发现的蓝牙设备"),a("br"),t._v(" "),a("code",[t._v("wx.onBluetoothDeviceFound")]),t._v(" 监听寻找到新设备的事件")]),t._v(" "),a("h4",{attrs:{id:"连接和断开时使用的共有-2-个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接和断开时使用的共有-2-个"}},[t._v("#")]),t._v(" 连接和断开时使用的共有 2 个")]),t._v(" "),a("p",[a("code",[t._v("wx.createBLEConnection")]),t._v(" 连接低功耗蓝牙设备"),a("br"),t._v(" "),a("code",[t._v("wx.closeBLEConnection")]),t._v(" 断开与低功耗蓝牙设备的连接")]),t._v(" "),a("h4",{attrs:{id:"连接成功后使用的共有-8-个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接成功后使用的共有-8-个"}},[t._v("#")]),t._v(" 连接成功后使用的共有 8 个")]),t._v(" "),a("p",[a("code",[t._v("wx.getConnectedBluetoothDevices")]),t._v(" 根据 uuid 获取处于已连接状态的设备"),a("br"),t._v(" "),a("code",[t._v("wx.getBLEDeviceServices")]),t._v(" 获取蓝牙设备所有 service（服务）"),a("br"),t._v(" "),a("code",[t._v("wx.getBLEDeviceCharacteristics")]),t._v(" 获取蓝牙设备所有 characteristic（特征值）"),a("br"),t._v(" "),a("code",[t._v("wx.readBLECharacteristicValue")]),t._v(" 读取低功耗蓝牙设备的特征值的二进制数据值"),a("br"),t._v(" "),a("code",[t._v("wx.writeBLECharacteristicValue")]),t._v(" 向低功耗蓝牙设备特征值中写入二进制数据"),a("br"),t._v(" "),a("code",[t._v("wx.notifyBLECharacteristicValueChange")]),t._v(" 启用低功耗蓝牙设备特征值变化时的notify 功能"),a("br"),t._v(" "),a("code",[t._v("wx.onBLECharacteristicValueChange")]),t._v(" 监听低功耗蓝牙设备的特征值变化"),a("br"),t._v(" "),a("code",[t._v("wx.onBLEConnectionStateChange")]),t._v(" 监听低功耗蓝牙连接的错误事件")])])}),[],!1,null,null,null);s.default=e.exports}}]);