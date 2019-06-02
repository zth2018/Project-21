package com.webserve.webserve.dao;

import com.webserve.webserve.entity.User.User;

public interface UserDao {
    int insert(User user);//插入一个新的用户

    int deleteById(Integer id);

    int update(User user);

//    int logintime(String phone);//登记登陆时间

    User getByPhone(String phone);//通过手机号码获取用户

    User getById(Integer id);

    String checkphone(String phone);//检查手机号码是否已被注册

    User login(String username,Integer how);//登陆

//    String loginByEmail(String email);//通过邮箱号码登陆


}
