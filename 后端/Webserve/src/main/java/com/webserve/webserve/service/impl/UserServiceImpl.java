package com.webserve.webserve.service.impl;

import com.webserve.webserve.dao.AccountDao;
import com.webserve.webserve.dao.UserInfoDao;
import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.Account;
import com.webserve.webserve.entity.User.UserInfo;
import com.webserve.webserve.service.AccountService;
import com.webserve.webserve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserInfoDao userInfoDao;
    @Autowired
    private AccountService accountService;
    @Autowired
    private AccountDao accountDao;
    @Override
    public Void adduserinfo(String uid){
        this.userInfoDao.adduserinfo(uid);
        return null;
    }//------------------------------------------------------------------------------------------

    @Override
    public Response getalluserinfo(){
        Response response=new Response();
        response.setResult(true);
        response.setData(this.userInfoDao.getalluserinfo());
        response.setMessage("获取用户信息失败");
        return response;
    }//-----------------------------------------------------------------------------------------

    @Override
    public Response updateuserinfo(UserInfo userInfo){
        Response response=new Response();
        if(this.userInfoDao.updateuserinfo(userInfo)==1){
            response.setResult(true);
        }else{
            response.setResult(false);
            response.setMessage("更新用户信息失败");
        }
        return response;
    }//-----------------------------------------------------------------------------------------

    @Override
    public Response adduser(UserInfo userInfo,String password){
        Response response=new Response();
        Account account=new Account();
        account.setUsername(userInfo.getUsername());
        account.setPhone(userInfo.getPhone());
        account.setPassword(password);
        response=this.accountService.Register(account);
        userInfo.setId(response.getData().toString());
        if(response.isResult())
        this.updateuserinfo(userInfo);
        return  response;
    }//------------------------------------------------------------------------------------------

    @Override
    public Response deleteuser(String uid){
        Response response=new Response();
        if(uid.equals("1")){
            response.setResult(false);
            response.setMessage("禁止删除该管理员");
            return response;
        }
        response.setResult((this.accountDao.deleteById(uid)==1)&&(this.userInfoDao.deleteuser(uid)==1));
        if(!response.isResult()){
            response.setMessage("删除用户失败");
        }
        return response;
    }//------------------------------------------------------------------------------------------

}//----------------------------------------------------------------
