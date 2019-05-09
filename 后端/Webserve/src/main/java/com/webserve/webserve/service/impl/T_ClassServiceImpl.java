package com.webserve.webserve.service.impl;

import com.webserve.webserve.dao.T_classDao;
import com.webserve.webserve.entity.T_class;
import com.webserve.webserve.service.T_ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
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


}
