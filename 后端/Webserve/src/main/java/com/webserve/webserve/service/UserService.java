package com.webserve.webserve.service;

import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.Account;
import com.webserve.webserve.entity.User.UserInfo;

public interface UserService {

    Void adduserinfo(String uid);
    Response getalluserinfo();
    Response updateuserinfo(UserInfo userInfo);
    Response adduser(UserInfo userInfo,String password);
    Response deleteuser(String uid);
}
