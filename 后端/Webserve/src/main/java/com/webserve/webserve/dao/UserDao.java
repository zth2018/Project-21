package com.webserve.webserve.dao;

import com.webserve.webserve.entity.User;

public interface UserDao {
    int insert(User user);

    int deleteById(Integer id);

    int update(User user);

    User getById(Integer id);

    String loginByPhone(String phone);

    String loginByEmail(String email);

}
