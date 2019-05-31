package com.webserve.webserve.service.impl;

import com.webserve.webserve.dao.UserDao;
import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.Login;

import com.webserve.webserve.entity.User.Token;
import com.webserve.webserve.entity.User.User;
import com.webserve.webserve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public Response Register(User user){
        int a=this.userDao.insert(user);
        Token token=new Token(user.getPhone());
        Response result=new Response();
        if(a>0){
            result.setResult(true);
            result.setToken(token.getToken());
        }else {
            result.setResult(false);
            result.setMessage("注册失败");
        }
        return result;
    }

    @Override
    public Response Login(String username, String password){
        Response response=new Response();
        String pw=userDao.login(username);
        Token token=new Token(username);
        if(pw.equals("0")==true){
            response.setResult(false);
            response.setToken(null);
            response.setMessage("用户不存在!");
        }else if(password.equals(pw)==true){
            response.setResult(true);
            response.setToken(token.getToken());
            response.setMessage("登陆成功");
            this.userDao.logintime(username);
        }else{
            response.setResult(false);
            response.setToken(null);
            response.setMessage("密码错误!");
        }
        return response;
    }

    @Override
    public boolean checkphone(String phone){
        String id=this.userDao.checkphone(phone);
        if(id.equals("0")){
            return true;
        }else {
            return false;
        }
    }

    @Override
    public int logintime(String phone){
        return userDao.logintime(phone);
    }
//--------------------------------------------------------------------------------------------------------------------
//    @Override
//    public int insert(User user) {
//        return userDao.insert(user);
//    }

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



//    @Override
//    public  String loginByEmail(String email){
//        return userDao.loginByEmail(email);
//    }


    @Override
    public User getByPhone(String phone){ return userDao.getByPhone(phone);}


}
