package com.webserve.webserve.dao.impl;
import com.webserve.webserve.dao.AccountDao;
import com.webserve.webserve.entity.User.Account;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.text.SimpleDateFormat;

@Repository
public class AccountDaoImpl implements AccountDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int register(Account account) {
        Date now=new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        String addtime = dateFormat.format( now );
        String sql = "insert into t_user(phone,username,password,registertime) values(?,?,?,?)";
        return this.jdbcTemplate.update(
                sql,
                account.getPhone(),
                account.getUsername(),
                account.getPassword(),
                addtime
        );
    }//-----------------------------------------------------------------------------

    @Override
    public int deleteById(String id) {
        String sql = "delete from t_user where id = ?";
        return this.jdbcTemplate.update(sql, id);
    }//--------------------------------------------------------------------------------

    @Override
    public int update(Account account) {
        String sql = "update t_user set username = ?,phone=? where id = ?";
        return this.jdbcTemplate.update(
                sql,
                account.getUsername(),
                account.getPhone(),
                account.getId()
        );
    }//--------------------------------------------------------------------------------------

    @Override
    public Account getById(String id) {
        String sql = "select * from t_user where id = ?";
        return this.jdbcTemplate.queryForObject(sql, new RowMapper<Account>() {

            @Override
            public Account mapRow(ResultSet rs, int rowNum) throws SQLException {
                Account account = new Account();
                account.setUsername(rs.getString("username"));
                account.setPhone(rs.getString("phone"));
                return account;
            }

        }, id);
    }//------------------------------------------------------------------------------------

    @Override
    public Account login(String account, Integer how){
        String sql="";
        if(how==0){
            sql = "select password,id from t_user where username = ?";
        }else if(how==1){
            sql = "select password,id from t_user where phone = ?";
        }
        RowMapper<Account>rowMapper=new BeanPropertyRowMapper<>(Account.class);
        try {
//            Account user=this.jdbcTemplate.queryForObject(sql,rowMapper,account);
            return this.jdbcTemplate.queryForObject(sql,rowMapper,account);
        }catch (Exception e){
            return new Account();
        }
    }//--------------------------------------------------------------------------------------------

    @Override
    public String getuserrole(String id){
        String sql="select  role  from  t_userinfo  where id=? ";
        return this.jdbcTemplate.queryForObject(sql, new RowMapper<String>() {
            @Override
            public String mapRow(ResultSet resultSet, int i) throws SQLException {
                return resultSet.getString("role");
            }
        },id);
    }//---------------------------------------------------------------------------------------------



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
    public String checkusername(String username) {
        String sql = "select id from t_user where username = ?";
        try {
            return this.jdbcTemplate.queryForObject(sql, new RowMapper<String>() {
                @Override
                public String mapRow(ResultSet resultSet, int i) throws SQLException {
                    return resultSet.getString("id");
                }
            }, username);
        }catch (Exception e){
            return "0";
        }
    }//-----------------------------------------------------------------------------


    @Override
    public Account getByPhone(String phone){
        String sql="select * from t_user where phone=?";
        return this.jdbcTemplate.queryForObject(sql, new RowMapper<Account>() {
            @Override
            public Account mapRow(ResultSet resultSet, int i) throws SQLException {
                Account account =new Account();
                //account.setUsername(resultSet.getString("username"));
                account.setId(resultSet.getString("id"));
                return account;
            }
        },phone);
    }//---------------------------------------------------------------------------------

    @Override
    public String getpassword(String uid){
        String sql="select password from t_user where id=?";
        return this.jdbcTemplate.queryForObject(sql, new RowMapper<String>() {
            @Override
            public String mapRow(ResultSet resultSet, int i) throws SQLException {
                return resultSet.getString("password");
            }
        },uid);
    }//---------------------------------------------------------------------------------

    @Override
    public int changepassword(String uid,String password){
        String sql="update t_user set password=? where id=?";
        return this.jdbcTemplate.update(sql,password,uid);
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