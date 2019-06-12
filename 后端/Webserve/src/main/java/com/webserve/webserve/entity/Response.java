package com.webserve.webserve.entity;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


public class Response {
    private String message;
    private boolean result;
    private String token;
    private Object data;
//    ObjectMapper mapper = new ObjectMapper();
    public Object getData() {
        return data;

    }
//    public Response(String message,boolean result){
//        this.message=message;
//        this.result=result;
//    }
//
//    public Response(){}

    public String getMessage() {
        return message;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

}
