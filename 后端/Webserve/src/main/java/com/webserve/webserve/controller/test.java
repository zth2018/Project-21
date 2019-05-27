package com.webserve.webserve.controller;
import com.fasterxml.jackson.core.JsonProcessingException;

import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.Login;
import com.webserve.webserve.entity.User.Token;
import com.webserve.webserve.entity.User.User;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;

@CrossOrigin
@RestController
@RequestMapping("/test")
public class test {
    @GetMapping()
    public User test(){
        User user=new User();
        user.setId(1);
        user.setPhone("11431");
        user.setUsername("xxx");
        ObjectMapper mapper = new ObjectMapper();
        String data="";
        try {
            data = mapper.writeValueAsString(user);

        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        User response=new User();
        try {
            response=mapper.readValue(data, User.class);
        }catch (IOException e){

        }
        return response;
    }
    @GetMapping("/3")
    public int test3(){
        return 1;
    }

//    @GetMapping("/1")
//    public Login test1(){
//        Login login=new Login();
//        return login;
//    }
//    @GetMapping("/2")
//    public Boolean test2(){
//        Login login=new Login();
//        return login.checkvalid();
//    }

}
