package com.webserve.webserve.service;

import com.webserve.webserve.entity.Response;

import com.webserve.webserve.entity.User.Account;

public interface AccountService {
//    int register(Account user);
    int deleteById(String id);
    Response update(String username,String phone,String id);
    Account getByPhone(String phone);
    Account getById(String id);

//    String loginByEmail(String email);
//------------------------------------------------------------------------
    Response Login(String account, String password,Integer how);
    Response Register(Account account);
    String getuserrole(String id);
    boolean checkphone(String phone);
    boolean checkusername(String username);
//------------------------------------------------------------------------
    Response changepassword(String uid,String old,String _new);
    Response getpersoninfo(String uid);
}
