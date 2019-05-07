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

    //注册
    @PostMapping("/register")
    @ResponseBody
    public int register(@RequestBody User u) {
        User user = new User();

        user.setUsername(u.getUsername());
        user.setPassword(u.getPassword());
        user.setPhone(u.getPhone());
        int result = this.userService.insert(user);
        System.out.println(result);
        return result;
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
        String pw=this.userService.loginByPhone(phone);
        if(pw.equals("0")==true){
            result.setResult(false);
            result.setTaken("NOT-OK");
            result.setMsg("用户不存在!");
        }else if(password.equals(pw)==true){
            result.setResult(true);
            result.setTaken("OK");
            result.setMsg("登陆成功");
            this.userService.notelogintime(phone);
        }else{
            result.setResult(false);
            result.setTaken("NOT-OK");
            result.setMsg("密码错误!");
        }

        return result;
    }

    @GetMapping("/checkphone")
    public boolean checkphone(@RequestParam String phone){
        String id=this.userService.checkphone(phone);
        if(id.equals("0")){
            return true;
        }else {
            return false;
        }
    }


}
