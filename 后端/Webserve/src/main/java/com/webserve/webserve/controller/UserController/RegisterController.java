package com.webserve.webserve.controller.UserController;

import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.Account;
import com.webserve.webserve.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/register")
public class RegisterController {

    @Autowired
    private AccountService accountService;

    @PostMapping()
    public Response register(@RequestBody Account u) {
            return this.accountService.Register(u);
    }

    @GetMapping()
    public boolean checkphone(@RequestParam String phone){
        return this.accountService.checkphone(phone);
    }
}
