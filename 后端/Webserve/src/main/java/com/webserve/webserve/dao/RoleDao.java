package com.webserve.webserve.dao;


import com.webserve.webserve.entity.Role.permission;
import com.webserve.webserve.entity.Role.permissions;
import com.webserve.webserve.entity.Role.role;

import java.util.List;

public interface RoleDao {
    int addrole(String role_name);
    int deleterole(String role_id);
    int updaterole(role role);
    List<role> getallrole();

    List<permission> getrolepermissions(String role_name);
    int addrolepermission(String role_name,String permission);
    int deleterolepermission(String id);

    List<permissions> getpermissionlist();



}
