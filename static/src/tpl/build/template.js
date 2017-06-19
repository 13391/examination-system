/*TMODJS:{"version":"1.0.0"}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},"function"==typeof define?define(function(){return a}):"undefined"!=typeof exports?module.exports=a:this.template=a,/*v:33*/
a("examination-list",function(a,b){"use strict";var c=this,d=(c.$helpers,function(d,f){f=f||a;var g=c.$include(d,f,b);return e+=g}),e="";return d("./header"),e+=' <div class="layout layout-examination-list"> <div class="header"><h3 class="title">\u8003\u8bd5\u5217\u8868</h3></div> <div class="ui cards"> <div class="card"> <a href="#" class="image"> <img src="https://avatars0.githubusercontent.com/u/4918461?v=3&s=200"> </a> <div class="content"> <div class="header">\u8ba1\u7b97\u673a\u7f51\u7edc\u5b89\u5168</div> <div class="description"> \u8003\u8bd5\u65f6\u95f42\u5c0f\u65f6\uff0c8-10\u70b9\uff0c\u5b8c\u621030\u9053\u9898\u76ee </div> </div> <span class="ui bottom button examination-start">\u5f00\u59cb\u7b54\u9898</span> </div> </div> </div>',new k(e)}),/*v:37*/
a("examination",function(a,b){"use strict";var c=this,d=(c.$helpers,function(d,f){f=f||a;var g=c.$include(d,f,b);return e+=g}),e="";return d("./header"),e+=' <div class="layout layout-examination"> <div class="panel"> <span class="label">\u8003\u8bd5\u7ed3\u675f\u5012\u8ba1\u65f6</span> <div class="timer"> <span class="hour">01</span><span>:</span> <span class="minute">43</span><span>:</span> <span class="second">23</span> </div> <span class="ui button positive submit-answer">\u63d0\u4ea4\u8bd5\u5377</span> </div> <div class="question"> ',d("./question"),e+=' </div> <div class="paging"> <span class="ui button primary question-previous">\u4e0a\u4e00\u9898</span> <span class="ui button primary question-next">\u4e0b\u4e00\u9898</span> </div> <div class="ui basic modal"> <i class="close icon"></i> <div class="header"> \u5b58\u6863\u7684\u65e7\u4fe1\u606f </div> <div class="content"> <div class="image"> <i class="archive icon"></i> </div> <div class="description"> <p>\u4f60\u7684\u6536\u4ef6\u7bb1\u5df2\u7ecf\u6ee1\u4e86\uff0c\u4f60\u8981\u6211\u4eec\u5c06\u65e7\u4fe1\u606f\u81ea\u52a8\u5f52\u6863\uff1f</p> </div> </div> <div class="actions"> <div class="two fluid ui inverted buttons"> <div class="ui red basic inverted button"> <i class="remove icon"></i> \u4e0d </div> <div class="ui green basic inverted button"> <i class="checkmark icon"></i> \u662f\u7684 </div> </div> </div> </div> <div class="ui basic modal submit-answer-confirm"> <i class="close">X</i> <div class="header"> \u786e\u8ba4\u7ed3\u675f\u8003\u8bd5\u63d0\u4ea4\u8bd5\u5377\uff1f </div> <div class="content"> </div> <div class="actions"> <div class="two fluid ui inverted buttons"> <div class="ui red basic inverted button close"> \u4e0d\uff0c\u8fd4\u56de\u7ee7\u7eed\u7b54\u9898 </div> <div class="ui green basic inverted button"> \u662f\u7684\uff0c\u5e2e\u6211\u63d0\u4ea4\u8bd5\u5377 </div> </div> </div> </div> </div>',new k(e)}),/*v:4*/
a("header",'<div class="header"> <div class="content"> <h3 class="title">Chongqing University of Technology Examination System</h3> <span class="username">student 11303090106</span> </div> </div>'),/*v:14*/
a("question",'<div class="ui form"> <div class="grouped fields"> <h3 class="topic">1. \u8bf7\u95ee\u4ee5\u4e0b\u540c\u5b66\u4e2d\u662f\u50bb\u903c\u7684\u6709\uff1f</h3> <div class="field"> <div class="ui radio checkbox"> <input type="radio" name="answer"> <label>\u674e\u5b50\u626c</label> </div> </div> <div class="field"> <div class="ui radio checkbox"> <input type="radio" name="answer"> <label>\u67ef\u8d24\u6797</label> </div> </div> <div class="field"> <div class="ui radio checkbox"> <input type="radio" name="answer"> <label>\u5218\u6c5f</label> </div> </div> <div class="field"> <div class="ui radio checkbox"> <input type="radio" name="answer"> <label>\u674e\u5b81</label> </div> </div> </div> <div class="grouped fields"> <h3 class="topic">1. \u8bf7\u95ee\u4ee5\u4e0b\u540c\u5b66\u4e2d\u662f\u50bb\u903c\u7684\u6709\uff1f</h3> <div class="field"> <div class="ui checkbox"> <input type="checkbox" name="answer"> <label>\u674e\u5b50\u626c</label> </div> </div> <div class="field"> <div class="ui checkbox"> <input type="checkbox" name="answer"> <label>\u67ef\u8d24\u6797</label> </div> </div> <div class="field"> <div class="ui checkbox"> <input type="checkbox" name="answer"> <label>\u5218\u6c5f</label> </div> </div> <div class="field"> <div class="ui checkbox"> <input type="checkbox" name="answer"> <label>\u674e\u5b81</label> </div> </div> </div> </div>'),/*v:53*/
a("signInOrUp",function(a,b){"use strict";var c=this,d=(c.$helpers,function(d,f){f=f||a;var g=c.$include(d,f,b);return e+=g}),e="";return d("./header"),e+=' <div class="layout layout-sign"> <div class="description" hidden> </div> <div class="sign sign-in"> <form class="ui form segment"> <div class="field"> <input type="text" name="uid" placeholder="\u5b66\u53f7"> </div> <div class="field"> <input type="password" name="upwd" placeholder="\u5bc6\u7801"> </div> <div class="ui buttons"> <div class="ui button primary button-sign-in">\u767b\u5f55</div> <div class="or"></div> <div class="ui button green sign-up">\u6ce8\u518c</div> </div> </form> </div> <div class="sign sign-up" hidden> <form class="ui form segment"> <div class="field"> <input type="text" name="uname" placeholder="\u59d3\u540d"> </div> <div class="field"> <input type="text" name="uid" placeholder="\u5b66\u53f7"> </div> <div class="field"> <input type="password" name="upwd" placeholder="\u5bc6\u7801"> </div>   <div class="field"> <div class="ui checkbox"> <input type="checkbox" name="hot-deals"> <label>\u540c\u610f <a href="#">\u4f5c\u5f0a\u5904\u7406\u6761\u6b3e</a>\u3002</label> </div> </div> <div class="ui buttons"> <div class="ui button green button-sign-up">\u6ce8\u518c</div> <div class="or"></div> <div class="ui button primary sign-in">\u767b\u5f55</div> </div> </form> </div> </div>',new k(e)}),/*v:1*/
a("__admin__",""),/*v:1*/
a("admin","")}();