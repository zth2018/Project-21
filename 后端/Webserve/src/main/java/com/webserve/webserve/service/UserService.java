package com.webserve.webserve.service;

import com.webserve.webserve.entity.LoginInfo;
import com.webserve.webserve.entity.User;

public interface UserService {
    int insert(User user);

    int deleteById(Integer id);

    int update(User user);

    int notelogintime(String phone);

    User getByPhone(String phone);

    User getById(Integer id);

    boolean checkphone(String phone);

    LoginInfo loginByPhone(String phone, String password);

    String loginByEmail(String email);
}
