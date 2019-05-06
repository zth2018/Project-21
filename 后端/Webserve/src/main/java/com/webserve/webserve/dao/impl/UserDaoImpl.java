package com.webserve.webserve.dao.impl;

import com.webserve.webserve.dao.UserDao;
import com.webserve.webserve.entity.User;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.sql.ResultSet;
import java.sql.SQLException;


@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int insert(User user) {
        String sql = "insert into t_user(id,username,password) values(?,?,?)";
        return this.jdbcTemplate.update(
                sql,
                user.getId(),
                user.getUsername(),
                user.getPassword()
        );
    }

    @Override
    public int deleteById(Integer id) {
        String sql = "delete from t_user where id = ?";
        return this.jdbcTemplate.update(sql, id);
    }

    @Override
    public int update(User user) {
        String sql = "update t_user set password = ? where id = ?";
        return this.jdbcTemplate.update(
                sql,
                user.getPassword(),
                user.getId()
        );
    }

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
    }

    @Override
    public String loginByPhone(String phone){
        String sql = "select password from t_user where phone = ?";
//        return this.jdbcTemplate.queryForObject(sql, new RowMapper<String>() {
//            @Override
//            public String mapRow(ResultSet resultSet, int i) throws SQLException {
//                return resultSet.getString("password");
//            }
//        },phone);
        try {
            return this.jdbcTemplate.queryForObject(sql, new RowMapper<String>() {
                @Override
                public String mapRow(ResultSet resultSet, int i) throws SQLException {
                    return resultSet.getString("password");
                }
            }, phone);
        }catch (Exception e){
            return "0";
        }


    }


    @Override
    public String loginByEmail(String email){
        String sql = "select password from t_user where email = ?";
        return this.jdbcTemplate.queryForObject(sql, new RowMapper<String>() {
            @Override
            public String mapRow(ResultSet resultSet, int i) throws SQLException {
                return resultSet.getString("password");
            }
        },email);
    }

}
