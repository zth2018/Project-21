package com.webserve.webserve.dao.impl;

import com.webserve.webserve.dao.AccountDao;
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
    @Autowired
    private AccountDao accountDao;

    @Override
    public List<UserInfo>getalluserinfo(){
        String sql="select * from t_userinfo";
        RowMapper rowMapper=new BeanPropertyRowMapper(UserInfo.class);
        List<UserInfo>userInfoList=this.jdbcTemplate.query(sql,rowMapper);
        for(UserInfo userInfo:userInfoList){
            Account account=this.accountDao.getById(userInfo.getId());
            userInfo.setUsername(account.getUsername());
            userInfo.setPhone(account.getPhone());
        }
        return userInfoList;
        //return this.jdbcTemplate.query(sql,rowMapper);
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
        String sql="insert into t_userinfo (name,school,institution,age,gender,id,role) values(?,?,?,?,?,?,?)";
        this.jdbcTemplate.update(sql,"未填写","未填写","未填写","未填写","未填写", uid, "普通用户");
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

    @Override
    public int deleteuser(String uid){
        String sql="delete from t_userinfo where id=?";
        return this.jdbcTemplate.update(sql,uid);
    }//----------------------------------------------------------------------------------


}//---------------------------------------------------------------------------
