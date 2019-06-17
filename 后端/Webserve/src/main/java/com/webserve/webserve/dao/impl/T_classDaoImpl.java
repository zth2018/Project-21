package com.webserve.webserve.dao.impl;

import com.webserve.webserve.dao.T_classDao;
import com.webserve.webserve.dao.UserInfoDao;
import com.webserve.webserve.entity.Class.T_class_user;
import com.webserve.webserve.entity.Class.T_classmember;
import com.webserve.webserve.entity.User.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import com.webserve.webserve.entity.Class.T_class;


import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.*;


@Repository
public class T_classDaoImpl implements T_classDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    private UserInfoDao userInfoDao;
    @Override
    public List<T_class>getclasslist(String uid){
        String sql="select * from t_user_class where user_id=?";
        String sql2="select * from t_class where id=?";
        String sql3="select * from t_class where owner_id=?";
        List<T_class>result=new ArrayList<T_class>();
        RowMapper rowMapper=new BeanPropertyRowMapper<>(T_class_user.class);
        RowMapper rowMapper1=new BeanPropertyRowMapper(T_class.class);
        List<T_class_user> list=this.jdbcTemplate.query(sql,rowMapper,uid);

        List<T_class>y=this.jdbcTemplate.query(sql3,rowMapper1,uid);
        for(T_class item:y){
            result.add(item);
        }
        for(T_class_user item :list){
            List<T_class>x=this.jdbcTemplate.query(sql2,rowMapper1,item.getClass_id());
            result.add(x.get(0));
        }
        return result;
    }//----------------------------------------------------------------------------------------

    @Override
    public int addclass(T_class t_class){
        String sql="insert into t_class (classname,coursename,owner_id,owner_name,checkin_count) values(?,?,?,?,?)";
        return this.jdbcTemplate.update(sql,
                t_class.getClassname(),
                t_class.getCoursename(),
                t_class.getOwner_id(),
                t_class.getOwner_name(),
                0
                );
    }//--------------------------------------------------------------------------------------------
    @Override
    public int addclassmember(String uid,String cid){
        String sql="insert into t_user_class (user_id,class_id,checkin_count) values(?,?,?)";
        return this.jdbcTemplate.update(sql,uid,cid,0);
    }//--------------------------------------------------------------------------------------------


    @Override
    public T_class getclassbycid(String cid){
        String sql="select * from t_class where id=?";
        RowMapper rowMapper=new BeanPropertyRowMapper(T_class.class);
        List<T_class>t_classes=this.jdbcTemplate.query(sql,rowMapper,cid);
        return  t_classes.get(0);
    }//--------------------------------------------------------------------------------------------

    @Override
    public List<T_classmember>getuserlistbycid(String cid){
        String sql="select * from t_user_class where class_id=?";
        RowMapper rowMapper=new BeanPropertyRowMapper(T_class_user.class);
        List<T_class_user>t_class_users=this.jdbcTemplate.query(sql,rowMapper,cid);

        List<T_classmember>t_classmembers=new ArrayList<T_classmember>();
        for(T_class_user t_class_user :t_class_users){
            T_classmember t_classmember=new T_classmember();
            UserInfo userInfo=new UserInfo();
            userInfo=this.userInfoDao.getuserinfo(t_class_user.getUser_id());
            t_classmember.setCheckin_count(t_class_user.getCheckin_count());
            t_classmember.setName(userInfo.getName());
            t_classmember.setId_n(userInfo.getId_n());
            t_classmember.setUid(userInfo.getId());
            t_classmember.setId(t_class_user.getId());
            t_classmembers.add(t_classmember);
        }
        return t_classmembers;
    }

    @Override
    public int checkin_th(String cid,String validtime){
        String sql="select checkin_count from t_class where id=?";
        Integer checkin_count=this.jdbcTemplate.queryForObject(sql, new RowMapper<Integer>() {
            @Override
            public Integer mapRow(ResultSet resultSet, int i) throws SQLException {
                return resultSet.getInt("checkin_count");
            }
        },cid);

        checkin_count+=1;
        sql="update t_class set checkingtime=?,checkin_count=? where id=?";
        return this.jdbcTemplate.update(sql,validtime,checkin_count,cid);
    }

    @Override
    public int checkin(String id,String count,String checkintime){
        String sql="update t_user_class set checkin_count=?,last_checkin=? where id=? ";
        return this.jdbcTemplate.update(sql,count,checkintime,id);
    }

    @Override
    public String getlastcheckintime(String id){
        String sql="select last_checkin from t_user_class where id=?";
        try{
            return this.jdbcTemplate.queryForObject(sql, new RowMapper<String>() {
            @Override
            public String mapRow(ResultSet resultSet, int i) throws SQLException {
                return resultSet.getString("last_checkin");
            }
        },id);
        }catch (Exception e){
            return "0";
        }
    }


    @Override
    public String getcheckvalidtime(String cid){
        String sql="select checkingtime from t_class where id=?";
        try {
            return this.jdbcTemplate.queryForObject(sql, new RowMapper<String>() {
                @Override
                public String mapRow(ResultSet resultSet, int i) throws SQLException {
                    return resultSet.getString("checkingtime");
                }
            },cid);
        }catch (Exception e){
            return "0";
        }
    }

    @Override
    public int quitclass(String mid){
        String sql="delete from t_user_class where id=?";
        return this.jdbcTemplate.update(sql,mid);
    }

    @Override
    public int closeclass(String cid){
        List<T_classmember>t_classmembers=new ArrayList<T_classmember>();
        t_classmembers=this.getuserlistbycid(cid);
        String sql="delete from t_user_class where id=?";
        for(T_classmember t_classmember:t_classmembers){
           if(this.jdbcTemplate.update(sql,t_classmember.getId())!=1)return 0;
        }
        sql="delete from t_class where id=?";
        return this.jdbcTemplate.update(sql,cid);

    }

    @Override
    public int checkin_sup(String id,String checkin_count){
        String sql="update t_user_class set checkin_count=? where id=?";
        return this.jdbcTemplate.update(sql,checkin_count,id);
    }


}//--------------------------------------------------------------------------------------------
