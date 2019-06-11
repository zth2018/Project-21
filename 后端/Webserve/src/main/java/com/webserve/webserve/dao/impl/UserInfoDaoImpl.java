package com.webserve.webserve.dao.impl;

import com.webserve.webserve.dao.UserInfoDao;
import com.webserve.webserve.entity.User.Account;
import com.webserve.webserve.entity.User.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class UserInfoDaoImpl implements UserInfoDao {

    @Autowired
    public JdbcTemplate jdbcTemplate;


    @Override
    public List<UserInfo>getalluserinfo(){
        String sql="select * from t_userinfo";
        RowMapper rowMapper=new BeanPropertyRowMapper(UserInfo.class);
        return this.jdbcTemplate.query(sql,rowMapper);
    }//---------------------------------------------------------------------------------

    @Override
    public UserInfo getuserinfo(String uid){
        String sql="select * from t_userinfo where id=?";
        RowMapper rowMapper=new BeanPropertyRowMapper(UserInfo.class);
        List<UserInfo>userInfoList=this.jdbcTemplate.query(sql,rowMapper,uid);
        return userInfoList.get(0);
    }//----------------------------------------------------------------------------------

    @Override
    public Void adduserinfo(String uid){
        String sql="insert into t_userinfo (id,role) values(?,?)";
        this.jdbcTemplate.update(sql, uid, "普通用户");
        return null;
    }//----------------------------------------------------------------------------------

    @Override
    public int updateuserinfo (UserInfo userInfo){
        String sql="update t_userinfo set name=?,school=?,institution=?,gender=?,age=?,role=? where id=?";
        return this.jdbcTemplate.update(sql,
                userInfo.getName(),
                userInfo.getSchool(),
                userInfo.getInstitution(),
                userInfo.getGender(),
                userInfo.getAge(),
                userInfo.getRole(),
                userInfo.getId()
                );
    }//----------------------------------------------------------------------------------


}//---------------------------------------------------------------------------
