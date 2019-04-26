package com.webserve.webserve.controller;


import com.webserve.webserve.entity.User;
import com.webserve.webserve.entity.Login;
import com.webserve.webserve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Random;
@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/save")
    @ResponseBody
    public User save() {
        User user = new User();
        int id = new Random().nextInt(10000);
        user.setId(id);
        user.setUsername("张三" + id);
        user.setPassword("zhangsan" + id);

        int result = this.userService.insert(user);
        System.out.println(result);
        return user;
    }

    @RequestMapping("/getById")
    @ResponseBody
    public User getById(Integer id) {
        User user = this.userService.getById(id);
        System.out.println(user.getUsername());
        return user;
    }

    @RequestMapping("/update")
    public void update() {
        User user = new User();
        user.setId(1);
        user.setPassword("test123");
        this.userService.update(user);
    }

    @RequestMapping("/deleteById")
    public void deleteById(Integer id) {
        int result = this.userService.deleteById(id);
        System.out.println(result);
    }

    @GetMapping("/login")
    public Login login(@RequestParam String phone,@RequestParam String password){
        Login result=new Login();
        if(password.equals(this.userService.loginByPhone(phone))==true){
            result.setResult(true);
            result.setTaken("OK");
            result.setMsg("OK-Again");
        }else {
            result.setResult(false);
            result.setTaken("NOT-OK");
            result.setMsg("NOT-OK-Again");
        }


        return result;
    }

}
