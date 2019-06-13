package com.webserve.webserve.controller.UserController;


import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.Account;

import com.webserve.webserve.entity.User.UserInfo;
import com.webserve.webserve.service.AccountService;
import com.webserve.webserve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;
    @Autowired
    private UserService userService;
    @PatchMapping()
    public Response changepassword(@RequestParam String uid,@RequestParam String old,@RequestParam String _new){
        return this.accountService.changepassword(uid,old,_new);
    } //----------------------------------------------------------------------------------------------------------

    @GetMapping()
    public Response getpersoninfo(@RequestParam String uid){
        return this.accountService.getpersoninfo(uid);
    }//-----------------------------------------------------------------------------------------------------------

    @PostMapping()
    public Response updatepersoninfo(@RequestBody UserInfo userInfo){
        return this.userService.updateuserinfo(userInfo);
    }

//    @RequestMapping("/getById")
//    public Account getById(String id) {
//        return this.accountService.getById(id);
//    }





}
