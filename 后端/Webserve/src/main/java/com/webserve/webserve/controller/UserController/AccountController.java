package com.webserve.webserve.controller.UserController;


import com.webserve.webserve.entity.Response;
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

    @PatchMapping()
    public Response changepassword(@RequestParam String uid,@RequestParam String old,@RequestParam String _new){
        return this.accountService.changepassword(uid,old,_new);
    } //----------------------------------------------------------------------------------------------------------



//    @RequestMapping("/getById")
//    public Account getById(String id) {
//        return this.accountService.getById(id);
//    }





}
