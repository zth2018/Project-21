package com.webserve.webserve.service;

import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.LoginInfo;
import com.webserve.webserve.entity.User.User;

public interface UserService {
//    int insert(User user);
    int deleteById(Integer id);
    int update(User user);
    User getByPhone(String phone);
    User getById(Integer id);
//    LoginInfo loginByPhone(String phone, String password);
//    String loginByEmail(String email);
//------------------------------------------------------------------------
    Response Login(String phone, String password);
    Response Register(User user);
    int logintime(String phone);
    boolean checkphone(String phone);
//------------------------------------------------------------------------

}
