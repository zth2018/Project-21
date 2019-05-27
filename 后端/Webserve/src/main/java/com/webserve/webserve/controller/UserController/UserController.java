package com.webserve.webserve.controller.UserController;


import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.User;
import com.webserve.webserve.entity.User.LoginInfo;
import com.webserve.webserve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;


    //注册
//    @PostMapping("/register")
//    //    @ResponseBody
//    public int register(@RequestBody User u) {
//        return this.userService.insert(u);
//    }


    //登陆
//    @GetMapping("/login")
//    public Response login(@RequestParam String phone, @RequestParam String password){
//        return this.userService.Login(phone,password);
//    }

//    @GetMapping("/login")
//    public LoginInfo login(@RequestParam String phone, @RequestParam String password){
//        return this.userService.loginByPhone(phone,password);
//    }

    //检查手机号是否已经注册
//    @GetMapping("/checkphone")
//    public boolean checkphone(@RequestParam String phone){
//        return this.userService.checkphone(phone);
//    }



    @RequestMapping("/getById")
    public User getById(Integer id) {
        return this.userService.getById(id);
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
