package com.webserve.webserve.dao.impl;
import com.webserve.webserve.dao.UserDao;
import com.webserve.webserve.entity.User.User;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.Calendar;
import java.text.SimpleDateFormat;

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int insert(User user) {
        Date now=new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        String addtime = dateFormat.format( now );

        String sql = "insert into t_user(phone,username,password,registertime) values(?,?,?,?)";
        return this.jdbcTemplate.update(
                sql,
                user.getPhone(),
                user.getUsername(),
                user.getPassword(),
                addtime
        );
    }//-----------------------------------------------------------------------------

    @Override
    public int deleteById(Integer id) {
        String sql = "delete from t_user where id = ?";
        return this.jdbcTemplate.update(sql, id);
    }//--------------------------------------------------------------------------------

    @Override
    public int update(User user) {
        String sql = "update t_user set password = ? where id = ?";
        return this.jdbcTemplate.update(
                sql,
                user.getPassword(),
                user.getId()
        );
    }//--------------------------------------------------------------------------------------

    @Override
    public User getById(Integer id) {
        String sql = "select * from t_user where id = ?";
        return this.jdbcTemplate.queryForObject(sql, new RowMapper<User>() {

            @Override
            public User mapRow(ResultSet rs, int rowNum) throws SQLException {
                User user = new User();
                user.setId(rs.getInt("id"));
                user.setUsername(rs.getString("username"));
                user.setPassword(rs.getString("password"));
                return user;
            }

        }, id);
    }//------------------------------------------------------------------------------------

    @Override
    public User login(String account,Integer how){
        String sql="";
        if(how==0){
            sql = "select password,id from t_user where username = ?";
        }else if(how==1){
            sql = "select password,id from t_user where phone = ?";
        }
        RowMapper<User>rowMapper=new BeanPropertyRowMapper<>(User.class);
        try {
//            User user=this.jdbcTemplate.queryForObject(sql,rowMapper,account);
            return this.jdbcTemplate.queryForObject(sql,rowMapper,account);
        }catch (Exception e){
            return new User();
        }




    }//--------------------------------------------------------------------------------------------





    @Override
    public String checkphone(String phone) {
        String sql = "select id from t_user where phone = ?";
        try {
            return this.jdbcTemplate.queryForObject(sql, new RowMapper<String>() {
                @Override
                public String mapRow(ResultSet resultSet, int i) throws SQLException {
                    return resultSet.getString("id");
                }
            }, phone);
        }catch (Exception e){
            return "0";
        }
    }//-----------------------------------------------------------------------------



    @Override
    public User getByPhone(String phone){
        String sql="select * from t_user where phone=?";
        return this.jdbcTemplate.queryForObject(sql, new RowMapper<User>() {
            @Override
            public User mapRow(ResultSet resultSet, int i) throws SQLException {
                User user=new User();
                user.setUsername(resultSet.getString("username"));
                return user;
            }
        },phone);
    }//---------------------------------------------------------------------------------

}//----------------------------------






//    @Override
//    public int logintime(String phone){
//        Date now=new Date();
//        Calendar logintime=Calendar.getInstance();
//        logintime.setTime(now);
////        logintime.add(Calendar.HOUR,2);
////        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
////        String logintime = dateFormat.format( time );
//
//        String sql = "update t_user set logintime = ? where phone = ?";
//        return this.jdbcTemplate.update(
//                sql,
//                logintime,
//                phone
//        );
//    }






//        return this.jdbcTemplate.queryForObject(sql, new RowMapper<String>() {
//            @Override
//            public String mapRow(ResultSet resultSet, int i) throws SQLException {
//                return resultSet.getString("password");
//            }
//        },phone);


//        try {
//            return this.jdbcTemplate.queryForObject(sql, new RowMapper<String>() {
//                @Override
//                public String mapRow(ResultSet resultSet, int i) throws SQLException {
//                    return resultSet.getString("password");
//                }
//            }, account);
//        }catch (Exception e){
//            return "0";
//        }


//    @Override
//    public String loginByEmail(String email){
//        String sql = "select password from t_user where email = ?";
//        return this.jdbcTemplate.queryForObject(sql, new RowMapper<String>() {
//            @Override
//            public String mapRow(ResultSet resultSet, int i) throws SQLException {
//                return resultSet.getString("password");
//            }
//        },email);
//    }