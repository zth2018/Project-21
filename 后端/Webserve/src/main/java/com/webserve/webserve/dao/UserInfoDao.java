package com.webserve.webserve.dao;

import com.webserve.webserve.entity.User.Account;
import com.webserve.webserve.entity.User.UserInfo;

import java.util.List;

public interface UserInfoDao {

    Void adduserinfo(String uid);
    int updateuserinfo(UserInfo info);
    List<UserInfo>getalluserinfo();
    UserInfo getuserinfo(String uid);
    int deleteuser(String uid);
}
