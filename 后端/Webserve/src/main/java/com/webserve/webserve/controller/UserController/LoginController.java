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
    public Response login(@RequestParam String username, @RequestParam String password){
        return this.userService.Login(username,password);
    }
}
