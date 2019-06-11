package com.webserve.webserve.service.impl;

import com.webserve.webserve.dao.T_classDao;
import com.webserve.webserve.entity.Class.T_class;
import com.webserve.webserve.entity.User.Account;
import com.webserve.webserve.service.T_ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class T_ClassServiceImpl implements T_ClassService {
    @Autowired
    private T_classDao t_classDao;

    @Override
    public List<T_class> getclass(String phone){
        return this.t_classDao.getclass(phone);
    }
    @Override
    public List<T_class> getcclass(String phone){
        return this.t_classDao.getcclass(phone);
    }
    @Override
    public List<T_class> getjclass(String phone){
        return this.t_classDao.getjclass(phone);
    }
    @Override
    public int insertclass(T_class t_class){return this.t_classDao.insertclass(t_class);}
    @Override
    public int updateclass(T_class t_class){return this.t_classDao.updateclass(t_class);}
    @Override
    public List<Account> getuser(String class_id){return this.t_classDao.getuser(class_id);}
}
