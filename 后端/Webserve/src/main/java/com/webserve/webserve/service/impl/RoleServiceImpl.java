package com.webserve.webserve.service.impl;


import com.webserve.webserve.dao.RoleDao;
import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.Role.permission;
import com.webserve.webserve.entity.Role.role;
import com.webserve.webserve.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    public RoleDao roleDao;

    @Override
    public Response addrole(String role_name){
        Response response=new Response();
        if(this.roleDao.addrole(role_name)==1){
            response.setResult(true);
        }else{
            response.setResult(false);
            response.setMessage("添加新角色失败");
        }
        return response;
    }//---------------------------------------------------------------------------------

    @Override
    public Response deleterole(String role_id){
        Response response=new Response();
        if(role_id.equals("1")==true){
            response.setResult(false);
            response.setMessage("禁止删除管理员角色");
            return response;
        }
        if(this.roleDao.deleterole(role_id)==1){
            response.setResult(true);
        }else{
            response.setResult(false);
            response.setMessage("删除角色失败");
        }
        return response;
    }//---------------------------------------------------------------------------------

    @Override
    public Response updaterole(role role){
        Response response=new Response();
        if(role.getId().equals("1")==true){
            response.setResult(false);
            response.setMessage("禁止编辑管理员角色");
            return response;
        }
        if(this.roleDao.updaterole(role)==1){
            response.setResult(true);
        }else{
            response.setResult(false);
            response.setMessage("更新角色信息失败");
        }
        return response;
    }//----------------------------------------------------------------------------------

    @Override
    public Response getallrole(){
        Response response=new Response();
        response.setResult(true);
        response.setData(this.roleDao.getallrole());
        response.setMessage("获取数据失败");
        return response;
    }//----------------------------------------------------------------------------------

    @Override
    public Response addrolepermission(String role_name,String permission){
        Response response=new Response();
        List<permission>permissionList=this.roleDao.getrolepermissions(role_name);
        for(permission x :permissionList){
            if(x.getPermission().equals(permission)){
                response.setResult(false);
                response.setMessage("此角色权限已拥有该权限");
                return response;
            }
        }
        if(this.roleDao.addrolepermission(role_name,permission)==1){
            response.setResult(true);
        }else {
            response.setResult(false);
            response.setMessage("添加角色权限失败");
        }
        return response;
    }//----------------------------------------------------------------------------------

    @Override
    public Response deleterolepermission(String id){
        Response response=new Response();
        if(id.equals("1")==true){
            response.setResult(false);
            response.setMessage("禁止删除管理员的角色管理权限");
            return response;
        }
        if(this.roleDao.deleterolepermission(id)==1){
            response.setResult(true);
        }else{
            response.setResult(false);
            response.setMessage("删除角色权限失败");
        }
        return response;
    }//----------------------------------------------------------------------------------

    @Override
    public Response getpermissionlist(){
        Response response=new Response();
        response.setResult(true);
        response.setData(this.roleDao.getpermissionlist());
        response.setMessage("获取数据失败");
        return response;
    }//----------------------------------------------------------------------------------

    @Override
    public boolean permissioncheck(String role_name,String permission){
        List<permission>permissionList=this.roleDao.getrolepermissions(role_name);
        for(permission x:permissionList){
            if(x.getPermission().equals(permission)){
                return true;
            }
        }
        return false;
    }//-----------------------------------------------------------------------------------



}//---------------------------------------------------------------------------------
