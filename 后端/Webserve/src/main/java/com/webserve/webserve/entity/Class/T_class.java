package com.webserve.webserve.entity.Class;

import java.io.Serializable;

public class T_class implements Serializable {
   private String id;
   private String classname;
   private String coursename;
   private String owner_id;
   private Integer checkin_count;
   private String owner_name;
    public void setId(String id) {
        this.id = id;
    }

    public String getOwner_name() {
        return owner_name;
    }

    public void setOwner_name(String owner_name) {
        this.owner_name = owner_name;
    }

    public String getId() {
        return id;
    }

    public void setClassname(String classname) {
        this.classname = classname;
    }

    public String getClassname() {
        return classname;
    }

    public String getCoursename() {
        return coursename;
    }

    public void setCoursename(String coursename) {
        this.coursename = coursename;
    }

    public Integer getCheckin_count() {
        return checkin_count;
    }

    public String getOwner_id() {
        return owner_id;
    }

    public void setCheckin_count(Integer checkin_count) {
        this.checkin_count = checkin_count;
    }

    public void setOwner_id(String owner_id) {
        this.owner_id = owner_id;
    }
}
