package com.webserve.webserve.service;

import com.webserve.webserve.entity.User;

public interface UserService {
    int insert(User user);

    int deleteById(Integer id);

    int update(User user);

    int notelogintime(String phone);

    User getByPhone(String phone);

    User getById(Integer id);

    String checkphone(String phone);

    String loginByPhone(String phone);

    String loginByEmail(String email);
}
