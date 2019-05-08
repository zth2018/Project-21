package com.webserve.webserve.entity;

import java.io.Serializable;

public class Login implements Serializable {
    private boolean result;
    private String taken;
    private String msg;
    private String username;
    private String phone;
    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public void setTaken(String taken) {
        this.taken = taken;
    }

    public String getMsg() {
        return msg;
    }

    public String getTaken() {
        return taken;
    }

    public boolean isResult() {
        return result;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
