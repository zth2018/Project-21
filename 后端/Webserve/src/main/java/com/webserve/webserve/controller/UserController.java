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
    //    @ResponseBody
    public int register(@RequestBody User u) {

        int result = this.userService.insert(u);

        return result;
    }


    //登陆
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
            result.setUsername(this.userService.getByPhone(phone).getUsername());
            result.setPhone(phone);
            this.userService.notelogintime(phone);
        }else{
            result.setResult(false);
            result.setTaken("NOT-OK");
            result.setMsg("密码错误!");
        }
        return result;
    }


    //检查手机号是否已经注册
    @GetMapping("/checkphone")
    public boolean checkphone(@RequestParam String phone){
        String id=this.userService.checkphone(phone);
        if(id.equals("0")){
            return true;
        }else {
            return false;
        }
    }



    @RequestMapping("/getById")
    public User getById(Integer id) {
        User user = this.userService.getById(id);
//        System.out.println(user.getUsername());
        return user;
    }

//    @RequestMapping("/update")
//    public void update() {
//        User user = new User();
//        user.setId(1);
//        user.setPassword("test123");
//        this.userService.update(user);
//    }

//    @RequestMapping("/deleteById")
//    public void deleteById(Integer id) {
//        int result = this.userService.deleteById(id);
//        System.out.println(result);
//    }



}
