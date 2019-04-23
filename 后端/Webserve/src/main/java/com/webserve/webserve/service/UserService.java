package com.webserve.webserve.service;

import com.webserve.webserve.entity.User;

public interface UserService {
    int insert(User user);

    int deleteById(Integer id);

    int update(User user);

    User getById(Integer id);
}
