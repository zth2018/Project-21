package com.webserve.webserve.service.impl;

import com.webserve.webserve.dao.AccountDao;
import com.webserve.webserve.dao.UserInfoDao;
import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.Account;

import com.webserve.webserve.entity.User.Token;
import com.webserve.webserve.entity.User.UserInfo;
import com.webserve.webserve.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountDao accountDao;

    @Autowired
    private UserInfoDao userInfoDao;
    @Override
    public Response Register(Account account){
        int a=this.accountDao.insert(account);
        Token token=new Token(account.getPhone());
        Response result=new Response();
        if(a>0){
            result.setResult(true);
            result.setToken(token.getToken());
            String uid=this.accountDao.getByPhone(account.getPhone()).getId();
            this.userInfoDao.adduserinfo(uid);
        }else {
            result.setResult(false);
            result.setMessage("注册失败");
        }
        return result;
    }//-------------------------------------------------------------------------------

    @Override
    public Response Login(String account, String password,Integer how){
        Response response=new Response();
        Account _account= accountDao.login(account,how);
        Token token=new Token(account);
        if(_account.getId()==null){
            response.setResult(false);
            response.setToken(null);
            response.setMessage("用户不存在!");
        }else if(_account.getPassword().equals(password)){
            response.setResult(true);
            response.setToken(token.getToken());
            response.setMessage("登陆成功");
            response.setData(_account);
//            this.accountDao.logintime(account);
        }else {
            response.setResult(false);
            response.setToken(null);
            response.setMessage("密码错误!");
        }
        return response;
    }//---------------------------------------------------------------------------------------

    @Override
    public boolean checkphone(String phone){
        String id=this.accountDao.checkphone(phone);
        if(id.equals("0")){
            return true;
        }else {
            return false;
        }
    }//----------------------------------------------------------------------------------------

    @Override
    public String getuserrole(String id){
        return this.accountDao.getuserrole(id);
    }//----------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------------------------------
//    @Override
//    public int insert(Account user) {
//        return accountDao.insert(user);
//    }

    @Override
    public int deleteById(Integer id) {
        return accountDao.deleteById(id);
    }

    @Override
    public int update(Account account) {
        return accountDao.update(account);
    }

    @Override
    public Account getById(Integer id) {
        return accountDao.getById(id);
    }



//    @Override
//    public  String loginByEmail(String email){
//        return accountDao.loginByEmail(email);
//    }


    @Override
    public Account getByPhone(String phone){ return accountDao.getByPhone(phone);}


}
