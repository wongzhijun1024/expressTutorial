Vue.component('runoob', {
    props:['title'],
    template: '\t<div class="navbar-container" id="navbar-container">\n' +
    '\t\t\t\t<div class="navbar-header pull-left">\n' +
    '\t\t\t\t\t<a href="#" class="navbar-brand">\n' +
    '\t\t\t\t\t\t<small>\n' +
    '\t\t\t\t\t\t\t<i class="icon-leaf"></i>\n' +
    '\t\t\t\t\t\t\t{{title}}\n' +
    '\t\t\t\t\t\t</small>\n' +
    '\t\t\t\t\t</a><!-- /.brand -->\n' +
    '\t\t\t\t</div><!-- /.navbar-header -->\n' +
    '\n' +
    '\t\t\t\t<div class="navbar-header pull-right" role="navigation">\n' +
    '\t\t\t\t\t<ul class="nav ace-nav">\n' +
    '\t\t\t\t\t\t<li class="grey">\n' +
    '\t\t\t\t\t\t\t<a data-toggle="dropdown" class="dropdown-toggle" href="#">\n' +
    '\t\t\t\t\t\t\t\t<i class="icon-tasks"></i>\n' +
    '\t\t\t\t\t\t\t\t<span class="badge badge-grey">4</span>\n' +
    '\t\t\t\t\t\t\t</a>\n' +
    '\n' +
    '\t\t\t\t\t\t\t<ul class="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">\n' +
    '\t\t\t\t\t\t\t\t<li class="dropdown-header">\n' +
    '\t\t\t\t\t\t\t\t\t<i class="icon-ok"></i>\n' +
    '\t\t\t\t\t\t\t\t\t还有4个任务完成\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<div class="clearfix">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-left">软件更新</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-right">65%</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t</div>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t\t\t<div class="progress progress-mini ">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<div style="width:65%" class="progress-bar "></div>\n' +
    '\t\t\t\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<div class="clearfix">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-left">硬件更新</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-right">35%</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t</div>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t\t\t<div class="progress progress-mini ">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<div style="width:35%" class="progress-bar progress-bar-danger"></div>\n' +
    '\t\t\t\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<div class="clearfix">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-left">单元测试</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-right">15%</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t</div>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t\t\t<div class="progress progress-mini ">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<div style="width:15%" class="progress-bar progress-bar-warning"></div>\n' +
    '\t\t\t\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<div class="clearfix">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-left">错误修复</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-right">90%</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t</div>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t\t\t<div class="progress progress-mini progress-striped active">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<div style="width:90%" class="progress-bar progress-bar-success"></div>\n' +
    '\t\t\t\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t查看任务详情\n' +
    '\t\t\t\t\t\t\t\t\t\t<i class="icon-arrow-right"></i>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\t\t\t\t\t\t\t</ul>\n' +
    '\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t<li class="purple">\n' +
    '\t\t\t\t\t\t\t<a data-toggle="dropdown" class="dropdown-toggle" href="#">\n' +
    '\t\t\t\t\t\t\t\t<i class="icon-bell-alt icon-animated-bell"></i>\n' +
    '\t\t\t\t\t\t\t\t<span class="badge badge-important">8</span>\n' +
    '\t\t\t\t\t\t\t</a>\n' +
    '\n' +
    '\t\t\t\t\t\t\t<ul class="pull-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">\n' +
    '\t\t\t\t\t\t\t\t<li class="dropdown-header">\n' +
    '\t\t\t\t\t\t\t\t\t<i class="icon-warning-sign"></i>\n' +
    '\t\t\t\t\t\t\t\t\t8条通知\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<div class="clearfix">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-left">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<i class="btn btn-xs no-hover btn-pink icon-comment"></i>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t新闻评论\n' +
    '\t\t\t\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-right badge badge-info">+12</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<i class="btn btn-xs btn-primary icon-user"></i>\n' +
    '\t\t\t\t\t\t\t\t\t\t切换为编辑登录..\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<div class="clearfix">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-left">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<i class="btn btn-xs no-hover btn-success icon-shopping-cart"></i>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t新订单\n' +
    '\t\t\t\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-right badge badge-success">+8</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<div class="clearfix">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-left">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<i class="btn btn-xs no-hover btn-info icon-twitter"></i>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t粉丝\n' +
    '\t\t\t\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="pull-right badge badge-info">+11</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t查看所有通知\n' +
    '\t\t\t\t\t\t\t\t\t\t<i class="icon-arrow-right"></i>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\t\t\t\t\t\t\t</ul>\n' +
    '\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t<li class="green">\n' +
    '\t\t\t\t\t\t\t<a data-toggle="dropdown" class="dropdown-toggle" href="#">\n' +
    '\t\t\t\t\t\t\t\t<i class="icon-envelope icon-animated-vertical"></i>\n' +
    '\t\t\t\t\t\t\t\t<span class="badge badge-success">5</span>\n' +
    '\t\t\t\t\t\t\t</a>\n' +
    '\n' +
    '\t\t\t\t\t\t\t<ul class="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">\n' +
    '\t\t\t\t\t\t\t\t<li class="dropdown-header">\n' +
    '\t\t\t\t\t\t\t\t\t<i class="icon-envelope-alt"></i>\n' +
    '\t\t\t\t\t\t\t\t\t5条消息\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<img src="avatars/avatar.png" class="msg-photo" alt="Alex\'s Avatar" />\n' +
    '\t\t\t\t\t\t\t\t\t\t<span class="msg-body">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="msg-title">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<span class="blue">Alex:</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t不知道写啥 ...\n' +
    '\t\t\t\t\t\t\t\t\t\t\t</span>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="msg-time">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-time"></i>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<span>1分钟以前</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<img src="avatars/avatar3.png" class="msg-photo" alt="Susan\'s Avatar" />\n' +
    '\t\t\t\t\t\t\t\t\t\t<span class="msg-body">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="msg-title">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<span class="blue">Susan:</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t不知道翻译...\n' +
    '\t\t\t\t\t\t\t\t\t\t\t</span>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="msg-time">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-time"></i>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<span>20分钟以前</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<img src="avatars/avatar4.png" class="msg-photo" alt="Bob\'s Avatar" />\n' +
    '\t\t\t\t\t\t\t\t\t\t<span class="msg-body">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="msg-title">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<span class="blue">Bob:</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t到底是不是英文 ...\n' +
    '\t\t\t\t\t\t\t\t\t\t\t</span>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<span class="msg-time">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-time"></i>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<span>下午3:15</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="inbox.html">\n' +
    '\t\t\t\t\t\t\t\t\t\t查看所有消息\n' +
    '\t\t\t\t\t\t\t\t\t\t<i class="icon-arrow-right"></i>\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\t\t\t\t\t\t\t</ul>\n' +
    '\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t<li class="light-blue">\n' +
    '\t\t\t\t\t\t\t<a data-toggle="dropdown" href="#" class="dropdown-toggle">\n' +
    '\t\t\t\t\t\t\t\t<img class="nav-user-photo" src="avatars/user.jpg" alt="Jason\'s Photo" />\n' +
    '\t\t\t\t\t\t\t\t<span class="user-info">\n' +
    '\t\t\t\t\t\t\t\t\t<small>欢迎光临,</small>\n' +
    '\t\t\t\t\t\t\t\t\tJason\n' +
    '\t\t\t\t\t\t\t\t</span>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<i class="icon-caret-down"></i>\n' +
    '\t\t\t\t\t\t\t</a>\n' +
    '\n' +
    '\t\t\t\t\t\t\t<ul class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<i class="icon-cog"></i>\n' +
    '\t\t\t\t\t\t\t\t\t\t设置\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="#">\n' +
    '\t\t\t\t\t\t\t\t\t\t<i class="icon-user"></i>\n' +
    '\t\t\t\t\t\t\t\t\t\t个人资料\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li class="divider"></li>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t<li>\n' +
    '\t\t\t\t\t\t\t\t\t<a href="login">\n' +
    '\t\t\t\t\t\t\t\t\t\t<i class="icon-off"></i>\n' +
    '\t\t\t\t\t\t\t\t\t\t退出\n' +
    '\t\t\t\t\t\t\t\t\t</a>\n' +
    '\t\t\t\t\t\t\t\t</li>\n' +
    '\t\t\t\t\t\t\t</ul>\n' +
    '\t\t\t\t\t\t</li>\n' +
    '\t\t\t\t\t</ul><!-- /.ace-nav -->\n' +
    '\t\t\t\t</div><!-- /.navbar-header -->\n' +
    '\t\t\t</div><!-- /.container -->\n'
})
