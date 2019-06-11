package com.webserve.webserve.dao.impl;

import com.webserve.webserve.dao.RoleDao;
import com.webserve.webserve.entity.Role.permission;
import com.webserve.webserve.entity.Role.permissions;
import com.webserve.webserve.entity.Role.role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class RoleDaoImpl implements RoleDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int addrole(String role_name){
        String sql="insert into t_role(role_name) values(?)";
        return this.jdbcTemplate.update(sql,role_name);
    }//---------------------------------------------------------------------------

    @Override
    public int deleterole(String role_id){
        String sql="delete from t_role where id=?";
        return this.jdbcTemplate.update(sql,role_id);
    }//---------------------------------------------------------------------------

    @Override
    public int updaterole(role role){
        String sql="update t_role set role_name=? where id=? ";
        return this.jdbcTemplate.update(sql,role.getRole_name(),role.getId());
    }//---------------------------------------------------------------------------

    @Override
    public List<role> getallrole(){
        String sql="select * from t_role ";
        RowMapper rowMapper=new BeanPropertyRowMapper(role.class);
        List<role>roleList=this.jdbcTemplate.query(sql,rowMapper);
        for(role role :roleList){
            role.setPermissionList(this.getrolepermissions(role.getRole_name()));
        }
        return roleList;
    }//---------------------------------------------------------------------------

    @Override
    public List<permission> getrolepermissions(String role_name){
        String sql="select * from t_role_permission where rolename=?";
        RowMapper rowMapper=new BeanPropertyRowMapper(permission.class);
        List<permission> permissionList=this.jdbcTemplate.query(sql,rowMapper,role_name);
        return permissionList;
    }//----------------------------------------------------------------------------

    @Override
    public int addrolepermission(String role_name,String permission){
        String sql="insert into t_role_permission(rolename,permission) values(?,?)";
        return this.jdbcTemplate.update(sql,role_name,permission);
    }//--------------------------------------------------------------------------------

    @Override
    public int deleterolepermission(String id){
        String sql="delete from t_role_permission where id=?";
        return this.jdbcTemplate.update(sql,id);
    }//--------------------------------------------------------------------------------

    @Override
    public List<permissions>getpermissionlist(){
        String sql="select permission from t_permission";
        RowMapper rowMapper=new BeanPropertyRowMapper(permissions.class);
        return this.jdbcTemplate.query(sql,rowMapper);
    }//----------------------------------------------------------------------------------



}
