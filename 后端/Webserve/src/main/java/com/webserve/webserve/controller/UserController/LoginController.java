package com.webserve.webserve.controller.UserController;

import com.webserve.webserve.entity.Response;
import com.webserve.webserve.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {
    @Autowired
    private AccountService accountService;

    @GetMapping()
    public Response login(@RequestParam String account, @RequestParam String password,@RequestParam Integer how){
        return this.accountService.Login(account,password,how);
    }
}
