package com.webserve.webserve.service.impl;

import com.webserve.webserve.dao.UserDao;
import com.webserve.webserve.entity.User;
import com.webserve.webserve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public int insert(User user) {
//    测试事物是否起作用，如果没有保存成功，则事物生效
//    int a = 1/0;
        return userDao.insert(user);
    }

    @Override
    public int deleteById(Integer id) {
        return userDao.deleteById(id);
    }

    @Override
    public int update(User user) {
        return userDao.update(user);
    }

    @Override
    public User getById(Integer id) {
        return userDao.getById(id);
    }

}
