package com.webserve.webserve.controller.UserController;


import com.webserve.webserve.entity.User.Account;

import com.webserve.webserve.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;


    //注册
//    @PostMapping("/register")
//    //    @ResponseBody
//    public int register(@RequestBody Account u) {
//        return this.accountService.insert(u);
//    }


    //登陆
//    @GetMapping("/login")
//    public Response login(@RequestParam String phone, @RequestParam String password){
//        return this.accountService.Login(phone,password);
//    }



    //检查手机号是否已经注册
//    @GetMapping("/checkphone")
//    public boolean checkphone(@RequestParam String phone){
//        return this.accountService.checkphone(phone);
//    }



    @RequestMapping("/getById")
    public Account getById(Integer id) {
        return this.accountService.getById(id);
    }

//    @RequestMapping("/update")
//    public void update() {
//        Account user = new Account();
//        user.setId(1);
//        user.setPassword("test123");
//        this.accountService.update(user);
//    }

//    @RequestMapping("/deleteById")
//    public void deleteById(Integer id) {
//        int result = this.accountService.deleteById(id);
//        System.out.println(result);
//    }



}
