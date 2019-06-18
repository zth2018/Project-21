/*
 Navicat Premium Data Transfer

 Source Server         : Test
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 18/06/2019 22:52:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_class
-- ----------------------------
DROP TABLE IF EXISTS `t_class`;
CREATE TABLE `t_class`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `coursename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `owner_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `checkin_count` int(11) NULL DEFAULT NULL,
  `owner_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `checkingtime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_class
-- ----------------------------
INSERT INTO `t_class` VALUES (1, '计算机1班', '工程训练', '1', 22, '周腾辉', '2019/06/18 11:55:53');
INSERT INTO `t_class` VALUES (13, '某个班', '其它课', '1', 1, '周腾辉', '2019/06/17 21:31:53');

-- ----------------------------
-- Table structure for t_institution
-- ----------------------------
DROP TABLE IF EXISTS `t_institution`;
CREATE TABLE `t_institution`  (
  `institution` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `school_id` int(11) NULL DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_institution
-- ----------------------------
INSERT INTO `t_institution` VALUES ('数学与计算机科学学院', 1, 23);
INSERT INTO `t_institution` VALUES ('土木工程学院', 1, 24);
INSERT INTO `t_institution` VALUES ('数计学院', 3, 25);
INSERT INTO `t_institution` VALUES ('数计学院', 4, 26);
INSERT INTO `t_institution` VALUES ('数计学院', 6, 27);

-- ----------------------------
-- Table structure for t_permission
-- ----------------------------
DROP TABLE IF EXISTS `t_permission`;
CREATE TABLE `t_permission`  (
  `permission` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`, `permission`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_permission
-- ----------------------------
INSERT INTO `t_permission` VALUES ('院校管理', 2);
INSERT INTO `t_permission` VALUES ('角色管理', 3);
INSERT INTO `t_permission` VALUES ('用户管理', 4);

-- ----------------------------
-- Table structure for t_role
-- ----------------------------
DROP TABLE IF EXISTS `t_role`;
CREATE TABLE `t_role`  (
  `role_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `role_name`(`role_name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_role
-- ----------------------------
INSERT INTO `t_role` VALUES ('学生', 4);
INSERT INTO `t_role` VALUES ('教师', 3);
INSERT INTO `t_role` VALUES ('普通用户', 8);
INSERT INTO `t_role` VALUES ('管理员', 1);

-- ----------------------------
-- Table structure for t_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `t_role_permission`;
CREATE TABLE `t_role_permission`  (
  `rolename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permission` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_role_permission
-- ----------------------------
INSERT INTO `t_role_permission` VALUES ('管理员', 1, '角色管理');
INSERT INTO `t_role_permission` VALUES ('管理员', 16, '用户管理');
INSERT INTO `t_role_permission` VALUES ('管理员', 17, '院校管理');
INSERT INTO `t_role_permission` VALUES ('教师', 21, '院校管理');

-- ----------------------------
-- Table structure for t_school
-- ----------------------------
DROP TABLE IF EXISTS `t_school`;
CREATE TABLE `t_school`  (
  `schoolname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`, `schoolname`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_school
-- ----------------------------
INSERT INTO `t_school` VALUES ('福州大学', '福州市', '福建省', 1);
INSERT INTO `t_school` VALUES ('厦门大学', '福州市', '福建省', 3);
INSERT INTO `t_school` VALUES ('北京大学', '北京', '北京', 4);
INSERT INTO `t_school` VALUES ('福建师范大学', '福州市', '福建省', 6);

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user`  (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `registertime` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `logintime` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `phone`, `username`) USING BTREE,
  INDEX `Mykey`(`phone`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 92 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES (1, '15900000001', 'admin', '123456', NULL, NULL);
INSERT INTO `t_user` VALUES (2, '15900000002', 'teacher', '123456', NULL, NULL);
INSERT INTO `t_user` VALUES (3, '15900000003', 'student', '123456', NULL, NULL);
INSERT INTO `t_user` VALUES (60, '15900000004', '不知道', '123456', '2019/06/12 23:08:36', NULL);
INSERT INTO `t_user` VALUES (91, '15900000009', 'zth', '123qwe', '2019/06/17 22:40:54', NULL);

-- ----------------------------
-- Table structure for t_user_class
-- ----------------------------
DROP TABLE IF EXISTS `t_user_class`;
CREATE TABLE `t_user_class`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class_id` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  `checkin_count` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `last_checkin` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_user_class
-- ----------------------------
INSERT INTO `t_user_class` VALUES (6, 1, 2, '8', '2019/06/17 15:38:25');

-- ----------------------------
-- Table structure for t_userinfo
-- ----------------------------
DROP TABLE IF EXISTS `t_userinfo`;
CREATE TABLE `t_userinfo`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `school` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `institution` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id` int(11) NOT NULL,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id_n` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `role`(`role`) USING BTREE,
  CONSTRAINT `t_userinfo_ibfk_1` FOREIGN KEY (`role`) REFERENCES `t_role` (`role_name`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_userinfo
-- ----------------------------
INSERT INTO `t_userinfo` VALUES ('周腾辉', '福州大学', '数学与计算机科学学院', 1, '男', '23', '管理员', '180327095');
INSERT INTO `t_userinfo` VALUES ('池老标', '福州大学', '数学与计算机科学学院', 2, '男', '不详', '教师', NULL);
INSERT INTO `t_userinfo` VALUES ('周某某', '福州大学', '数学与计算机科学学院', 3, '男', '22', '学生', NULL);
INSERT INTO `t_userinfo` VALUES ('随便吧', '福州大学', '土木工程学院', 60, '男', '24', '普通用户', NULL);
INSERT INTO `t_userinfo` VALUES ('未知', '未知', '未知', 91, '未知', '未知', '普通用户', '未知');

SET FOREIGN_KEY_CHECKS = 1;
