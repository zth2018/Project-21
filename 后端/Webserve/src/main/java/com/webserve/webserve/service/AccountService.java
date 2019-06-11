package com.webserve.webserve.service;

import com.webserve.webserve.entity.Response;

import com.webserve.webserve.entity.User.Account;

public interface AccountService {
//    int insert(Account user);
    int deleteById(Integer id);
    int update(Account account);
    Account getByPhone(String phone);
    Account getById(Integer id);

//    String loginByEmail(String email);
//------------------------------------------------------------------------
    Response Login(String account, String password,Integer how);
    Response Register(Account account);
    String getuserrole(String id);
    boolean checkphone(String phone);
//------------------------------------------------------------------------

}
