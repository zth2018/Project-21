package com.webserve.webserve.dao;

import com.webserve.webserve.entity.User.Account;

public interface AccountDao {
    int register(Account account);//插入一个新的用户

    int deleteById(String id);//删除账户

    int update(Account account);

//    int logintime(String phone);//登记登陆时间

    Account getByPhone(String phone);//通过手机号码获取用户

    Account getById(String id);

    String checkphone(String phone);//检查手机号码是否已被注册

    Account login(String username, Integer how);//登陆

    String getuserrole(String id);

    int changepassword(String uid,String password);

    String getpassword(String uid);
}
