/*TMODJS:{"version":33,"md5":"07b09449f35c0a2dd4b14929f33b465a"}*/
template('examination-list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./header');
$out+=' <div class="layout layout-examination-list"> <div class="header"><h3 class="title">考试列表</h3></div> <div class="ui cards"> <div class="card"> <a href="#" class="image"> <img src="https://avatars0.githubusercontent.com/u/4918461?v=3&s=200"> </a> <div class="content"> <div class="header">计算机网络安全</div> <div class="description"> 考试时间2小时，8-10点，完成30道题目 </div> </div> <span class="ui bottom button examination-start">开始答题</span> </div> </div> </div>';
return new String($out);
});