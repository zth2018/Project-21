package com.webserve.webserve.service;

import com.webserve.webserve.entity.Response;

import com.webserve.webserve.entity.User.User;

public interface UserService {
//    int insert(User user);
    int deleteById(Integer id);
    int update(User user);
    User getByPhone(String phone);
    User getById(Integer id);

//    String loginByEmail(String email);
//------------------------------------------------------------------------
    Response Login(String account, String password,Integer how);
    Response Register(User user);

    boolean checkphone(String phone);
//------------------------------------------------------------------------

}
