package com.webserve.webserve.dao.impl;

import com.webserve.webserve.dao.T_classDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import com.webserve.webserve.entity.T_class;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class T_classDaoImpl implements T_classDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;




    @Override
    public List<T_class>getclass(String phone){
        String sql="select class_id from t_user_class where phone=?";
        List<Map<String,Object>>id=this.jdbcTemplate.queryForList(sql,phone);
        List<T_class>result=new ArrayList<>();
        String sql2="select * from t_class where id=?";
        for(int i=0;i<id.size();i++){
            T_class tmp=new T_class();
            this.jdbcTemplate.queryForObject(sql2, new RowMapper<T_class>() {
                @Override
                public T_class mapRow(ResultSet resultSet, int x) throws SQLException {
                    tmp.setClassname(resultSet.getString("classname"));
                    tmp.setDescription(resultSet.getString("description"));
                    tmp.setAddtime(resultSet.getString("addtime"));
                    tmp.setEdittime(resultSet.getString("edittime"));
                    tmp.setOwnerphone(resultSet.getString("ownerphone"));
                    tmp.setOwnername(resultSet.getString("ownername"));
                    tmp.setStarttime(resultSet.getString("starttime"));
                    tmp.setEndtime(resultSet.getString("endtime"));
                    tmp.setId(resultSet.getString("id"));
                    System.out.println(x);
                    return null;
                }
            }, id.get(i).get("class_id").toString());
           result.add(tmp);
        }
        return result;
    }


    @Override
    public List<T_class>getcclass(String phone){
        String sql="select * from t_user_class where phone=?";
        List<Map<String,Object>>a=this.jdbcTemplate.queryForList(sql,phone);
        List<T_class>result=new ArrayList<>();
        String sql2="select * from t_class where id=?";

        for(int i=0;i<a.size();i++){
            T_class tmp=new T_class();
            if(a.get(i).get("own").toString().equals("1")==true){
                this.jdbcTemplate.queryForObject(sql2, new RowMapper<T_class>() {
                    @Override
                    public T_class mapRow(ResultSet resultSet, int x) throws SQLException {
                        tmp.setClassname(resultSet.getString("classname"));
                        tmp.setDescription(resultSet.getString("description"));
                        tmp.setAddtime(resultSet.getString("addtime"));
                        tmp.setEdittime(resultSet.getString("edittime"));
                        tmp.setOwnerphone(resultSet.getString("ownerphone"));
                        tmp.setOwnername(resultSet.getString("ownername"));
                        tmp.setStarttime(resultSet.getString("starttime"));
                        tmp.setEndtime(resultSet.getString("endtime"));
                        tmp.setId(resultSet.getString("id"));

                        return null;
                    }
                },a.get(i).get("class_id").toString());
                result.add(tmp);
            }
        }
        return result;
    }


    @Override
    public List<T_class>getjclass(String phone){
        String sql="select * from t_user_class where phone=?";
        List<Map<String,Object>>a=this.jdbcTemplate.queryForList(sql,phone);
        List<T_class>result=new ArrayList<>();
        String sql2="select * from t_class where id=?";

        for(int i=0;i<a.size();i++){
            T_class tmp=new T_class();
            if(a.get(i).get("own").toString().equals("0")==true){
                this.jdbcTemplate.queryForObject(sql2, new RowMapper<T_class>() {
                    @Override
                    public T_class mapRow(ResultSet resultSet, int i) throws SQLException {
                        tmp.setClassname(resultSet.getString("classname"));
                        tmp.setDescription(resultSet.getString("description"));
                        tmp.setAddtime(resultSet.getString("addtime"));
                        tmp.setEdittime(resultSet.getString("edittime"));
                        tmp.setOwnerphone(resultSet.getString("ownerphone"));
                        tmp.setOwnername(resultSet.getString("ownername"));
                        tmp.setStarttime(resultSet.getString("starttime"));
                        tmp.setEndtime(resultSet.getString("endtime"));
                        tmp.setId(resultSet.getString("id"));

                        return null;
                    }
                },a.get(i).get("class_id").toString());
                result.add(tmp);
            }
        }
        return result;
    }


    @Override
    public  int insertclass(T_class t_class){
        String sql="insert into t_class (classname,description,ownerphone,ownername) values(?,?,?,?)";
        return this.jdbcTemplate.update(
                sql,
                t_class.getClassname(),
                t_class.getDescription(),
                t_class.getOwnerphone(),
                t_class.getOwnername()
                );
    }

    @Override
    public int updateclass(T_class t_class){
        String sql="update t_class set classname=? where id=? ";
        return this.jdbcTemplate.update(sql,t_class.getClassname(),t_class.getId());
    }

}
