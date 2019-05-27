package com.webserve.webserve.controller.UserController;

import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.User;
import com.webserve.webserve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/register")
public class RegisterController {

    @Autowired
    private UserService userService;

    @PostMapping()
    public Response register(@RequestBody User u) {
        return this.userService.Register(u);
    }

    @GetMapping()
    public boolean checkphone(@RequestParam String phone){
        return this.userService.checkphone(phone);
    }
}
