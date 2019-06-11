package com.webserve.webserve.entity.Role;

import java.util.List;

public class role {
    String role_name;
    String id;
    List<permission>permissionList;

    public String getId() {
        return id;
    }

    public String getRole_name() {
        return role_name;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setRole_name(String role_name) {
        this.role_name = role_name;
    }

    public List<permission> getPermissionList() {
        return permissionList;
    }

    public void setPermissionList(List<permission> permissionList) {
        this.permissionList = permissionList;
    }
}
