package com.webserve.webserve.entity.Class;

public class T_classmember {
    private String name;//姓名
    private String id_n;//学号
    private String uid;//用户id
    private Integer checkin_count;//用户签到次数
    private String id;//表单id

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public Integer getCheckin_count() {
        return checkin_count;
    }

    public void setCheckin_count(Integer checkin_count) {
        this.checkin_count = checkin_count;
    }

    public void setId_n(String id_n) {
        this.id_n = id_n;
    }

    public String getId_n() {
        return id_n;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
