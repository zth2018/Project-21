package com.webserve.webserve.service.impl;

import com.webserve.webserve.dao.UserInfoDao;
import com.webserve.webserve.entity.User.Account;
import com.webserve.webserve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserInfoDao userInfoDao;

    @Override
    public Void adduserinfo(String uid){
        this.userInfoDao.adduserinfo(uid);
        return null;
    }
}
