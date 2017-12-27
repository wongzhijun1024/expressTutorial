-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 12 月 26 日 15:37
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `fs_music`
--

-- --------------------------------------------------------

--
-- 表的结构 `class`
--

CREATE TABLE IF NOT EXISTS `class` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `infor` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `class`
--

INSERT INTO `class` (`id`, `infor`) VALUES
(1, '伤感'),
(2, '激情'),
(3, '轻松'),
(4, '安静'),
(5, '伤感'),
(6, '开心'),
(7, '寂寞'),
(8, '想哭'),
(9, '挑逗'),
(10, '励志');

-- --------------------------------------------------------

--
-- 表的结构 `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `size` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `order`
--

INSERT INTO `order` (`id`, `name`, `size`, `address`) VALUES
(1, '小刚', '55', '哪儿');

-- --------------------------------------------------------

--
-- 表的结构 `ranking`
--

CREATE TABLE IF NOT EXISTS `ranking` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `icon_url` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `ranking`
--

INSERT INTO `ranking` (`id`, `name`, `icon_url`) VALUES
(1, '酷狗排行榜', 'ranking/ranking_page_icon_1.png'),
(2, '飙升榜', 'ranking/ranking_page_icon_2.png'),
(3, 'TOP 500', 'ranking/ranking_page_icon_3.png'),
(4, '网络红歌榜', 'ranking/ranking_page_icon_4.png');

-- --------------------------------------------------------

--
-- 表的结构 `recommend_music`
--

CREATE TABLE IF NOT EXISTS `recommend_music` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '推荐音乐名字',
  `music_icon` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `recommend_music`
--

INSERT INTO `recommend_music` (`id`, `name`, `music_icon`) VALUES
(1, '我是歌手', 'recommend/recommend_1.png'),
(2, '音乐大师课', 'recommend/recommend_2.png'),
(3, '荒野猎人', 'recommend/recommend_3.png'),
(4, 'FLIGHT LOG', 'recommend/recommend_4.png'),
(5, 'Sketch', 'recommend/recommend_5.png'),
(6, 'S.I.N.G女团', 'recommend/recommend_6.png');

-- --------------------------------------------------------

--
-- 表的结构 `singer`
--

CREATE TABLE IF NOT EXISTS `singer` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `introduce` varchar(1000) NOT NULL,
  `singer_icon_url` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

--
-- 转存表中的数据 `singer`
--

INSERT INTO `singer` (`id`, `name`, `introduce`, `singer_icon_url`) VALUES
(1, '容祖儿', '容祖儿（Joey Yung），1980年6月16日生于中国香港，中国香港女歌手。香港英皇集团旗下艺人。', 'singer/singer_1.png'),
(2, '徐佳莹', '徐佳莹，台湾创作女歌手。2008年参加第三届《超级星光大道》夺得冠军，踏入歌坛。发表《LaLa首张创作专辑》、《理想人生》等作品，创作实力备受肯定。', 'singer/singer_2.png'),
(3, '李克勤', '李克勤，香港著名粤语流行曲歌手、演员、主持人，擅长演绎多种曲风，以浪漫情歌和励志快歌为主，声线以高、清、亮见称，有“零瑕疵歌手”的美誉；曾荣获十大劲歌金曲榜“最受欢迎男歌手”、香港杰出歌手奖、港台最佳流行男歌手等音乐奖项。', 'singer/singer_3.png'),
(4, '黄致列', '黄致列，1982年12月3日出生，韩国男歌手。2007年2月13日发行首张单曲专辑《致列》正式出道。2015年2月以选手身份出演Mnet《看见你的声音》被再次关注。2016年，黄致列参与中国《我是歌手》节目。', 'singer/singer_4.png'),
(5, '2222', '金志文，内地男歌手、唱作型艺人、专职音乐编曲。2007年发行首张个人专辑《兄弟小文》，主打歌《左眼皮跳跳》风靡网络；2012年参加《中国好声音》，重新演绎刘若英经典单曲《为爱痴狂》而受到关注。个人专辑作品，《爱比不爱更寂寞》、《图门江一号》、《梦想·家》等。', 'singer/singer_5.png'),
(6, '张信哲', '张信哲，台湾知名男歌手。其嗓音清澈而明亮，尤其擅长抒情慢歌，是华语乐坛公认的“情歌王子”。凭第一张专辑《说谎》一炮而红，在20世纪90年代与叱咤华语乐坛的“四大天王”齐名。服役退伍后重返歌坛，演唱《难以抗拒你容颜》依旧畅销。', 'singer/singer_6.png'),
(7, '李玟', '李玟（CoCo Lee），国际流行歌手。1993年获香港TVB新人歌唱大赛亚军，崭露头角；1994年转战台湾发片并成名；1999年转签美国Sony Music，进军国际乐坛，发行《Just No Other Way》、《Exposed》等英文专辑；', 'singer/singer_7.png'),
(8, '老狼', '狼，原名王阳，内地男歌手，发表《同桌的你》、《恋恋风尘》等音乐作品。', 'singer/singer_8.png'),
(9, '坂本龍一', '1952年出生于日本东京。东京艺术大学硕士毕业。1978年以专辑《Thousand Knives》出道。同年与细野晴臣、高桥幸宏一起组成YMO。组合解散之后，坂本龙一活跃在音乐、电影、出版、广告等媒体方面。1982年，与矢野显子结婚。', 'singer/singer_9.png'),
(10, '孝敏', '朴孝敏（Park Hyo Min ，박효민），1989年5月30日出生于韩国釜山，毕业于成均馆大学，韩国女歌手、演员，女子演唱团体T-ara成员之一。2009年7月29日以演唱团体T-ara正式出道；同年10月在韩国KBS电视台综艺节目《青春不败》担任固定嘉宾。2012年6月，参演韩国SBS连续剧《我的女友是九尾狐》。', 'singer/singer_10.png'),
(11, '张学友', '张学友，香港实力派歌手、演员。香港乐坛“四大天王”之一，享有“歌神”的称誉。 90年代中期为其事业巅峰期，根据IFPI国际唱片协会统计，张学友的唱片销量仅次于美国歌手迈克尔.杰克逊，当时排名世界第二。截止2006年，其全球正版唱片销量已达1.2亿张之多，为华人之首。', 'singer/singer_11.png'),
(12, '庄心妍', '庄心妍，大陆女歌手。2012年10月29日发行首支单曲《一万个舍不得》，广受好评。同年11月在繁星网直播演唱酷狗主题曲《繁星点点》，以甜美清纯的外形、干净动人的歌喉收获不少人气。2013年01月15日荣获酷狗繁星网新声代歌唱比赛第二名，3月13日酷狗音乐独家发行其个人原创大碟《一万个舍不得》。', 'singer/singer_12.png'),
(13, '邓紫棋', '邓紫棋，香港新生代唱作歌手。在家人的熏陶下，自小便热爱音乐。5岁时开始尝试作曲及填词，13岁完成了8级钢琴。2009年初，邓紫棋夺得2008年度“叱咤乐坛生力军女歌手金奖”，是该奖的首位未成年获得者。2011年，年仅19岁的邓紫棋登上红馆舞台，在香港红馆举办一连5场的个人演唱会。', 'singer/singer_13.png'),
(14, 'TFBOYS', 'TFBOYS是北京时代峰峻文化艺术发展有限公司通过其旗下TF家族练习生中筛选由2013年暑期推出的全新的少年偶像组合。组合成员由TF家族王俊凯、王源、易烊千玺三名成员组成。', 'singer/singer_14.png'),
(15, '枪炮玫瑰', '枪炮与玫瑰乐队是一支1985年成立于好莱坞的美国硬摇滚乐队，乐队共发行了五张录音室大碟、两张EP以及一张Live专辑，经历了大量乐队人事变动后，Axl是乐队仅存的创始成员。他们至今仍保持全美音乐史上处子专辑最高的销售记录（3300万张以上）', 'singer/singer_15.png'),
(16, '潘玮柏', '潘玮柏，台湾流行男歌手、主持人、演员。2001年进入演艺圈，担任音乐台主持人；2002年底发行首张专辑《壁虎漫步》，步入歌坛，后推出《我的麦克风》、《反转地球》等音乐作品，荣获全球华语榜中榜“港台最受欢迎男歌手”、“最佳舞台演艺男歌手奖”等奖项；', 'singer/singer_16.png'),
(17, '谢霆锋', '谢霆锋，香港著名男歌手、制作人、演员。1996年正式出道，发行《Horizons》、《谢谢你的爱1999》、《释放》、《最后》等个人专辑作品，2001年以《玉蝴蝶》和《世纪预言》在世界音乐大奖中荣获“全球亚洲最畅销男歌手”；', 'singer/singer_17.png'),
(18, '枪炮玫瑰', '枪炮与玫瑰乐队是一支1985年成立于好莱坞的美国硬摇滚乐队，乐队共发行了五张录音室大碟、两张EP以及一张Live专辑，经历了大量乐队人事变动后，Axl是乐队仅存的创始成员。他们至今仍保持全美音乐史上处子专辑最高的销售记录（3300万张以上）', 'singer/singer_18.png');

-- --------------------------------------------------------

--
-- 表的结构 `song`
--

CREATE TABLE IF NOT EXISTS `song` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `song_name` varchar(50) NOT NULL,
  `song_icon_url` varchar(50) NOT NULL,
  `song_url` varchar(50) NOT NULL,
  `recommend_id` int(10) NOT NULL,
  `song_menu_id` int(10) NOT NULL,
  `singer_id` int(10) NOT NULL,
  `class_id` int(10) NOT NULL,
  `ranking_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=50 ;

--
-- 转存表中的数据 `song`
--

INSERT INTO `song` (`id`, `song_name`, `song_icon_url`, `song_url`, `recommend_id`, `song_menu_id`, `singer_id`, `class_id`, `ranking_id`) VALUES
(1, '突然很想你', 'song/song_01.png', 'song_1.mp3', 1, 0, 1, 0, 3),
(2, '浪费（live）', 'song/song_02.png', 'song_2.mp3', 1, 0, 2, 0, 2),
(3, '天梯（live）', 'song/song_03.png', 'song_3.mp3', 1, 0, 3, 0, 1),
(4, '改变自己（live）', 'song/song_04.png', 'song_4.mp3', 1, 0, 4, 0, 0),
(5, '中国姑娘（live）', 'song/song_05.png', 'song_5.mp3', 1, 0, 5, 0, 3),
(6, '记得（live）', 'song/song_06.png', 'song_6.mp3', 1, 0, 6, 0, 2),
(7, '浪费（live）', 'song/song_07.png', 'song_7.mp3', 0, 0, 7, 0, 1),
(8, '旅途（live）', 'song/song_08.png', 'song_8.mp3', 0, 0, 8, 0, 0),
(9, 'The Revenant Main Theme', 'song/song_09.png', 'song_9.mp3', 0, 0, 9, 0, 0),
(10, 'Alva Noto、Bryce Dessner - Powaqa Rescue', 'song/song_10.png', 'song_10.mp3', 0, 0, 9, 0, 1),
(11, 'Out of Horse', 'song/song_11.png', 'song_11.mp3', 0, 1, 9, 0, 2),
(12, 'Goodbye to Hawk', 'song/song_12.png', 'song_12.mp3', 0, 1, 9, 0, 3),
(13, 'Bryce Dessner - Final Fight', 'song/song_13.png', 'song_13.mp3', 0, 1, 9, 0, 0),
(14, 'The Revenant Theme', 'song/song_14.png', 'song_14.mp3', 0, 1, 9, 0, 1),
(15, 'Second Dream', 'song/song_15.png', 'song_15.mp3', 0, 1, 9, 1, 2),
(16, 'First Dream', 'song/song_16.png', 'song_16.mp3', 0, 1, 9, 1, 3),
(17, 'Carrying Glass', 'song/song_17.png', 'song_17.mp3', 0, 1, 9, 1, 0),
(18, 'The Revenant Main Theme Atmospheric', 'song/song_18.png', 'song_18.mp3', 2, 1, 9, 1, 1),
(19, 'The End', 'song/song_19.png', 'song_19.mp3', 2, 1, 9, 1, 1),
(20, 'LOCO - Nice Body', 'song/song_20.png', 'song_20.mp3', 2, 2, 10, 1, 2),
(21, '谈,胆', 'song/song_21.png', 'song_21.mp3', 2, 2, 10, 1, 2),
(22, '仍然', 'song/song_22.png', 'song_22.mp3', 2, 2, 10, 1, 3),
(23, '好像只有我们不知道我们的故事', 'song/song_23.png', 'song_23.mp3', 2, 2, 10, 1, 3),
(24, 'SKETCH', 'song/song_24.png', 'song_24.mp3', 2, 2, 10, 1, 0),
(25, 'Road trip', 'song/song_25.png', 'song_25.mp3', 2, 2, 10, 1, 0),
(26, 'Gold', 'song/song_26.png', 'song_26.mp3', 3, 2, 10, 1, 1),
(27, '一千个伤心的理由', 'song/song_27.png', 'song_27.mp3', 3, 2, 11, 2, 2),
(28, '忘记你我做不到', 'song/song_28.png', 'song_28.mp3', 3, 2, 11, 2, 3),
(29, '走着走着就散了', 'song/song_29.png', 'song_29.mp3', 3, 2, 12, 2, 0),
(30, '以后的以后', 'song/song_30.png', 'song_30.mp3', 3, 3, 12, 2, 1),
(31, '泡沫', 'song/song_31.png', 'song_31.mp3', 3, 3, 13, 2, 2),
(32, '喜欢你', 'song/song_32.png', 'song_32.mp3', 3, 3, 13, 2, 3),
(33, '青春修炼手册', 'song/song_33.png', 'song_33.mp3', 4, 3, 14, 2, 0),
(34, 'don''t cry', 'song/song_34.png', 'song_34.mp3', 4, 3, 18, 2, 1),
(35, '双人舞', 'song/song_35.png', 'song_35.mp3', 4, 3, 16, 2, 2),
(36, '要我怎么忘了他', 'song/song_36.png', 'song_41.mp3', 4, 3, 17, 2, 3),
(37, '只要为你活一天', 'song/song_37.png', 'song_36.mp3', 4, 3, 17, 2, 0),
(38, '前前后后左左右右', 'song/song_38.png', 'song_37.mp3', 4, 3, 17, 2, 1),
(39, '你不会了解', 'song/song_39.png', 'song_38.mp3', 4, 3, 17, 2, 2),
(40, 'Tell Me', 'song/song_40.png', 'song_39.mp3', 4, 3, 16, 2, 3),
(41, '爱上未来的你', 'song/song_41.png', 'song_40.mp3', 4, 3, 16, 2, 0);

-- --------------------------------------------------------

--
-- 表的结构 `song_menu`
--

CREATE TABLE IF NOT EXISTS `song_menu` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `menu_icon_url` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `song_menu`
--

INSERT INTO `song_menu` (`id`, `name`, `menu_icon_url`) VALUES
(1, '90后必听网络好歌大集合', 'menu/music_menu_1.png'),
(2, '一首歌唤起你对爱情的全部回忆', 'menu/music_menu_2.png'),
(3, '优质原创古风精选', 'menu/music_menu_3.png'),
(4, '单曲循环都不腻的冷门歌曲', 'menu/music_menu_4.png'),
(5, '甜蜜韩语二重唱', 'menu/music_menu_5.png'),
(6, '东方电音集', 'menu/music_menu_6.png'),
(7, '我是歌手', 'menu/music_menu_7.png'),
(8, '华语歌曲里的童话故事', 'menu/music_menu_8.png'),
(9, '百停不腻的英文歌', 'menu/music_menu_9.png'),
(10, '经典网络歌曲回顾', 'menu/music_menu_10.png'),
(11, '此生必听的中文慢歌', 'menu/music_menu_11.png'),
(12, '90后都爱听的歌', 'menu/music_menu_12.png');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `nickname` varchar(20) NOT NULL DEFAULT '小花',
  `birthday` varchar(20) NOT NULL,
  `sex` int(5) NOT NULL,
  `phone` varchar(20) NOT NULL DEFAULT '110',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=135 ;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `nickname`, `birthday`, `sex`, `phone`) VALUES
(134, '小刚', '123456', '小花', '', 0, '110'),
(133, 'seraph', '123456', '小花', '', 0, '110'),
(132, 'seraph', '333', '小花', '', 0, '110');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
