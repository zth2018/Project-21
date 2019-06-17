package com.webserve.webserve.entity.Class;

public class T_class_user {
    private String id;
    private String user_id;
    private String class_id;
    private Integer checkin_count;

    public void setCheckin_count(Integer checkin_count) {
        this.checkin_count = checkin_count;
    }

    public Integer getCheckin_count() {
        return checkin_count;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getClass_id() {
        return class_id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setClass_id(String class_id) {
        this.class_id = class_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

}
