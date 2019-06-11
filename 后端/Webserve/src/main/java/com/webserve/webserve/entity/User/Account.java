package com.webserve.webserve.entity.User;
import java.io.Serializable;


public class Account implements Serializable{
    private static final long serialVersionUID = -6249397911566315813L;

    private String id;

    private String username;

    private String password;

    private String phone;




    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setId(String id){
        this.id=id;
    }

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    public String getId(){
        return id;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPhone() {
        return phone;
    }


}
