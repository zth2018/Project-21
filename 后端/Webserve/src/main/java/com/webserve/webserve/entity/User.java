package com.webserve.webserve.entity;
import java.io.Serializable;


public class User implements Serializable{
    private static final long serialVersionUID = -6249397911566315813L;

    private Integer id;

    private String username;

    private String password;

    private String phone;

    private String taken;


    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setId(Integer id){
        this.id=id;
    }

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    public Integer getId(){
        return id;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPhone() {
        return phone;
    }

    public void setTaken(String taken) {
        this.taken = taken;
    }

    public String getTaken() {
        return taken;
    }
}
