package com.webserve.webserve.service.impl;

import com.webserve.webserve.dao.T_classDao;
import com.webserve.webserve.entity.Class.T_class;
import com.webserve.webserve.entity.Class.T_classmember;
import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.Account;
import com.webserve.webserve.service.T_ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class T_ClassServiceImpl implements T_ClassService {
    @Autowired
    private T_classDao t_classDao;

    @Override
    public Response getclasslist(String uid){
        Response response=new Response();
        response.setData(this.t_classDao.getclasslist(uid));
        return response;
    }//----------------------------------------------------------------------

    @Override
    public Response addclass(T_class t_class){
        Response response=new Response();
        if(this.t_classDao.addclass(t_class)==1){
            response.setResult(true);
            response.setMessage("创建班课成功");
        }else{
            response.setResult(false);
            response.setMessage("创建班课失败");
        }
        return response;
    }//----------------------------------------------------------------------

    @Override
    public Response addclassmember(String uid,String cid){
        Response response=new Response();

        if(!this.t_classDao.getclassbycid(cid).getOwner_id().equals(uid)){
            Boolean mark=true;
            List<T_classmember>t_classmembers=new ArrayList<T_classmember>();
            t_classmembers=this.t_classDao.getuserlistbycid(cid);
            for(T_classmember t_classmember:t_classmembers){
                if(t_classmember.getUid().equals(uid))mark=false;
            }
            if(mark){
                if(this.t_classDao.addclassmember(uid,cid)==1){
                response.setResult(true);
                }
                else {
                    response.setResult(false);
                    response.setMessage("该班课不存在，加入失败");}
            }else{
                response.setResult(false);
                response.setMessage("不可重复加入同一班课");
            }
        }else{
            response.setResult(false);
            response.setMessage("你是创建者，不需要加入");
        }
        return response;
    }//----------------------------------------------------------------------

    @Override
    public Response getuserlistbycid(String cid){
        Response response=new Response();
        response.setData(this.t_classDao.getuserlistbycid(cid));
        return response;
    }

    @Override
    public Response checkin_th(String cid){
        Response response=new Response();
        Date now=new Date();
        Calendar validtime=Calendar.getInstance();
        validtime.setTime(now);
        validtime.add(Calendar.MINUTE,2);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        String checkinvalidtime=this.t_classDao.getcheckvalidtime(cid);
        Date lasttime=new Date();
        if(checkinvalidtime!=null&&!checkinvalidtime.equals("0")){
        try{
            lasttime=dateFormat.parse(checkinvalidtime);
        }catch (Exception e){
            response.setResult(false);
            response.setMessage("发起签到失败,服务器异常");
        }
        if(lasttime.after(now)){
            response.setResult(false);
            response.setMessage("不要重复发起签到");
        }else {
            if(this.t_classDao.checkin_th(cid,dateFormat.format( validtime.getTime()))==1){
                response.setResult(true);
                response.setMessage("发起签到成功");
            }else{
                response.setResult(false);
                response.setMessage("发起签到失败");
            }
        }
        }else{
            if(checkinvalidtime==null){
                if(this.t_classDao.checkin_th(cid,dateFormat.format( validtime.getTime()))==1){
                    response.setResult(true);
                    response.setMessage("发起签到成功");
                }else{
                    response.setResult(false);
                    response.setMessage("发起签到失败");
                }
            }else{
                response.setResult(false);
                response.setMessage("发起签到失败");
            }
        }
        return response;
    }


    @Override
    public Response checkin(String id,String cid,String count){
        Response response=new Response();
        String checkinvalidtime=this.t_classDao.getcheckvalidtime(cid);

        if(checkinvalidtime==null||checkinvalidtime.equals("0")){
            response.setResult(false);
            response.setMessage("还未发起签到");
        }else{
            Date now=new Date();
            Date validtime=new Date();
            SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
            try{
                validtime=dateFormat.parse(checkinvalidtime);
            }catch (Exception e){
                response.setResult(false);
                response.setMessage("签到失败，服务器异常");
            }
            if(validtime.after(now)){
                String lastchecktime=this.t_classDao.getlastcheckintime(id);

                if(lastchecktime==null||lastchecktime.equals("0")){

                    String checktime=dateFormat.format(now);
                    if(this.t_classDao.checkin(id,count,checktime)==1){
                        response.setResult(true);
                        response.setMessage("签到成功");
                    }else {
                        response.setResult(false);
                        response.setMessage("签到失败，服务器异常");
                    }
                }else{
                    Date lasttime=new Date();
                    try {
                        lasttime=dateFormat.parse(lastchecktime);
                    }catch (Exception e){
                        response.setResult(false);
                        response.setMessage("签到失败，服务器异常");
                    }
                    Calendar x=Calendar.getInstance();
                    x.setTime(lasttime);
                    x.add(Calendar.MINUTE,2);
                    if(x.getTime().after(now)){

                        response.setResult(false);
                        response.setMessage("已经签到过");
                    }else {
                        String checktime=dateFormat.format(now);
                        if(this.t_classDao.checkin(id,count,checktime)==1){
                            response.setResult(true);
                            response.setMessage("签到成功");
                        }else {
                            response.setResult(false);
                            response.setMessage("签到失败，服务器异常");
                        }
                    }
                }
            }else {
                response.setResult(false);
                response.setMessage("有效期已过，签到失败");
            }
        }
        return response;
    }

    @Override
    public Response quitclass(String mid){
        Response response=new Response();
        if(this.t_classDao.quitclass(mid)==1){
            response.setResult(true);
            response.setMessage("退出班课成功");
        }else{
            response.setResult(false);
            response.setMessage("退出班课失败");
        }
        return response;
    }

    @Override
    public Response closeclass(String cid){
        Response response=new Response();
        if(this.t_classDao.closeclass(cid)==1){
            response.setResult(true);
            response.setMessage("结束班课成功");
        }else {
            response.setResult(false);
            response.setMessage("结束班课失败");
        }
        return response;
    }

    @Override
    public Response checkin_sup(String id,String checkin_count){
        Response response=new Response();
        if(this.t_classDao.checkin_sup(id,checkin_count)==1){
            response.setResult(true);
            response.setMessage("补签成功");
        }else {
            response.setResult(false);
            response.setMessage("补签失败");
        }
        return response;
    }



}
