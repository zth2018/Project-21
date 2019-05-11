package com.webserve.webserve.service;

import com.webserve.webserve.entity.T_class;
import com.webserve.webserve.entity.User;

import java.util.List;
import java.util.Map;

public interface T_ClassService {

    List<T_class> getclass(String phone);
    List<T_class>getjclass(String phone);
    List<T_class>getcclass(String phone);
    List<User>getuser(String class_id);//通过班课id获取该班课成员phone列表
    int insertclass(T_class t_class);
    int updateclass(T_class t_class);
}
