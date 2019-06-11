package com.webserve.webserve.dao;
import com.webserve.webserve.entity.Class.T_class;
import com.webserve.webserve.entity.User.Account;

import java.util.List;


public interface T_classDao {
    List<T_class>getclass(String phone);//通过用户号码获取其所有班课
    List<T_class>getjclass(String phone);//通过用户号码获取其所加入的班课
    List<T_class>getcclass(String phone);//通过用户号码获取其所创建的班课
    List<Account>getuser(String class_id);//通过班课id获取该班课成员phone列表
    int insertclass(T_class t_class);//插入一个新的班课
    int updateclass(T_class t_class);//更新班课信息
//    int updateclassname(String id,String classname);
//    int updatedescription(String id,String description);
//    int updatestarttime(String id,String starttime);
//    int updateendttime(String id,String endtime);
}
