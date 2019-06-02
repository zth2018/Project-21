package com.webserve.webserve.controller.UserController;

import com.webserve.webserve.entity.Response;
import com.webserve.webserve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {
    @Autowired
    private UserService userService;

    @GetMapping()
    public Response login(@RequestParam String account, @RequestParam String password,@RequestParam Integer how){
        return this.userService.Login(account,password,how);
    }
}
