package com.webserve.webserve.service;

import com.webserve.webserve.entity.T_class;

import java.util.List;
import java.util.Map;

public interface T_ClassService {

    List<T_class> getclass(String phone);
    List<T_class>getjclass(String phone);
    List<T_class>getcclass(String phone);

}
