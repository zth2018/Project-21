package com.webserve.webserve.service;

import com.webserve.webserve.entity.Class.T_class;
import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.Account;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface T_ClassService {
    Response getclasslist(String uid);
    Response addclass(T_class t_class);
    Response addclassmember(String uid,String cid);
    Response getuserlistbycid(String cid);
    Response checkin_th(String cid);
    Response checkin(String id,String cid,String count);
    Response quitclass(String mid);
    Response closeclass(String cid);
    Response checkin_sup(String id,String checkin_count);
}
