package com.webserve.webserve.dao;
import com.webserve.webserve.entity.Class.T_class;
import com.webserve.webserve.entity.Class.T_classmember;
import com.webserve.webserve.entity.User.Account;
import com.webserve.webserve.entity.User.UserInfo;

import java.util.List;


public interface T_classDao {
    List<T_class> getclasslist(String uid);
    T_class getclassbycid(String cid);
    int addclass(T_class t_class);
    int addclassmember(String uid,String cid);
    List<T_classmember>getuserlistbycid(String cid);
    int checkin_th(String cid,String validtime);
    int checkin (String id,String count,String checkintime);
    String getcheckvalidtime(String cid);
    String getlastcheckintime(String id);
    int quitclass(String mid);
    int closeclass(String cid);
    int checkin_sup(String id,String checkin_count);
}
