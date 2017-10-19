/*
Navicat MySQL Data Transfer

Source Server         : localhost_3308
Source Server Version : 50703
Source Host           : localhost:3308
Source Database       : learner

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2017-10-19 16:58:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `about_table`
-- ----------------------------
DROP TABLE IF EXISTS `about_table`;
CREATE TABLE `about_table` (
  `ID` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of about_table
-- ----------------------------

-- ----------------------------
-- Table structure for `admin_table`
-- ----------------------------
DROP TABLE IF EXISTS `admin_table`;
CREATE TABLE `admin_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(32) NOT NULL,
  `pass` varchar(64) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_table
-- ----------------------------
INSERT INTO `admin_table` VALUES ('1', 'admin', '341be97d9aff90c9978347f66f945b77');

-- ----------------------------
-- Table structure for `banner_table`
-- ----------------------------
DROP TABLE IF EXISTS `banner_table`;
CREATE TABLE `banner_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `smalltext` varchar(300) NOT NULL,
  `href` varchar(300) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner_table
-- ----------------------------
INSERT INTO `banner_table` VALUES ('4', 'sadsad新政出台，摩拜、ofo们真得去三四线城市了？', '日前，市交通委、发展改革委、公安局等11部门联合出台了《北京市鼓励规范发展共享自行车的指导意见(试行)》(以下简称《指导意见》)，对共享自行车发展过程中出现的企业无序投放、承租人无序停放、押金缺少监管、集中停放区车位不足、承租人侵占藏匿、破坏车辆等问题开出富有针对性的解决方案。', 'https://www.huxiu.com/article/214828.html');

-- ----------------------------
-- Table structure for `blog_table`
-- ----------------------------
DROP TABLE IF EXISTS `blog_table`;
CREATE TABLE `blog_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `smallpicsrc` varchar(300) NOT NULL,
  `bigpicsrc` varchar(300) NOT NULL,
  `smalltext` varchar(500) NOT NULL,
  `content` text NOT NULL,
  `posttime` int(11) NOT NULL,
  `author` varchar(32) NOT NULL,
  `count` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_table
-- ----------------------------

-- ----------------------------
-- Table structure for `contact_table`
-- ----------------------------
DROP TABLE IF EXISTS `contact_table`;
CREATE TABLE `contact_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(50) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `fax` varchar(20) NOT NULL,
  `email` varchar(64) NOT NULL,
  `weibo` varchar(40) NOT NULL,
  `wechat` varchar(40) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of contact_table
-- ----------------------------

-- ----------------------------
-- Table structure for `eval_table`
-- ----------------------------
DROP TABLE IF EXISTS `eval_table`;
CREATE TABLE `eval_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `eval` varchar(300) NOT NULL,
  `href` varchar(300) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of eval_table
-- ----------------------------
INSERT INTO `eval_table` VALUES ('18', '123', '123', '72e0d058558de4b11f45c7f3ff7d2dc6.jpg');
INSERT INTO `eval_table` VALUES ('19', 'ewqewqe', 'ewqewqeq', '45f07619c99f21d76690b02f2c63e14b.jpg');

-- ----------------------------
-- Table structure for `msg_table`
-- ----------------------------
DROP TABLE IF EXISTS `msg_table`;
CREATE TABLE `msg_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `email` varchar(64) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `suggestion` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of msg_table
-- ----------------------------

-- ----------------------------
-- Table structure for `news_table`
-- ----------------------------
DROP TABLE IF EXISTS `news_table`;
CREATE TABLE `news_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `smalltext` varchar(300) NOT NULL,
  `href` varchar(300) NOT NULL,
  `icosrc` varchar(300) NOT NULL,
  `bigsrc` varchar(300) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news_table
-- ----------------------------

-- ----------------------------
-- Table structure for `pro_table`
-- ----------------------------
DROP TABLE IF EXISTS `pro_table`;
CREATE TABLE `pro_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `intro` varchar(300) NOT NULL,
  `href` varchar(300) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pro_table
-- ----------------------------
