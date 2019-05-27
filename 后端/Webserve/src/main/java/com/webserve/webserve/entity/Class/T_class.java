package com.webserve.webserve.entity.Class;

import java.io.Serializable;

public class T_class implements Serializable {
    private String id;
    private String classname;
    private String description;
    private String ownerphone;

    private String addtime;
    private String edittime;
    private String starttime;
    private String endtime;

    public String getAddtime() {
        return addtime;
    }

    public String getClassname() {
        return classname;
    }

    public String getDescription() {
        return description;
    }

    public String getEdittime() {
        return edittime;
    }

    public String getEndtime() {
        return endtime;
    }

    public String getId() {
        return id;
    }



    public String getOwnerphone() {
        return ownerphone;
    }

    public String getStarttime() {
        return starttime;
    }

    public void setAddtime(String addtime) {
        this.addtime = addtime;
    }

    public void setClassname(String classname) {
        this.classname = classname;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setEdittime(String edittime) {
        this.edittime = edittime;
    }

    public void setEndtime(String endtime) {
        this.endtime = endtime;
    }



    public void setOwnerphone(String ownerphone) {
        this.ownerphone = ownerphone;
    }

    public void setStarttime(String starttime) {
        this.starttime = starttime;
    }

    public void setId(String id) {  this.id = id; }

}
