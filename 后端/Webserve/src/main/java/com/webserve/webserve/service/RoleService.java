package com.webserve.webserve.service;


import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.Role.role;

public interface RoleService {

    Response addrole(String role_name);
    Response deleterole(String role_id);
    Response updaterole(role role);
    Response getallrole();

    Response addrolepermission(String role_name,String permission);
    Response deleterolepermission(String id);
    Response getpermissionlist();

    boolean permissioncheck(String role_name,String permission);
}
