package com.webserve.webserve.service.impl;

import com.webserve.webserve.dao.UserDao;
import com.webserve.webserve.entity.LoginInfo;
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

    @Override
    public LoginInfo loginByPhone(String phone, String password){
        LoginInfo result=new LoginInfo();
        String pw=userDao.loginByPhone(phone);
        if(pw.equals("0")==true){
            result.setResult(false);
            result.setTaken("NOT-OK");
            result.setMsg("用户不存在!");
        }else if(password.equals(pw)==true){
            result.setResult(true);
            result.setTaken("OK");
            result.setMsg("登陆成功");
            result.setUsername(userDao.getByPhone(phone).getUsername());
            result.setPhone(phone);
            this.userDao.notelogintime(phone);
        }else{
            result.setResult(false);
            result.setTaken("NOT-OK");
            result.setMsg("密码错误!");
        }
        return result;

    }

    @Override
    public  String loginByEmail(String email){
        return userDao.loginByEmail(email);
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
    public int notelogintime(String phone){
        return userDao.notelogintime(phone);
    }

    @Override
    public User getByPhone(String phone){ return userDao.getByPhone(phone);}
}
