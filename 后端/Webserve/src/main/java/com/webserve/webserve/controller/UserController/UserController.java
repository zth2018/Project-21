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
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private AccountService accountService;
    @GetMapping()
    public Response getalluserinfo(){
        return this.userService.getalluserinfo();
    }//----------------------------------------------------------------------------------------

    @PostMapping()
    public Response adduser(@RequestBody UserInfo userInfo,@RequestParam String password){
        return this.userService.adduser(userInfo,password);
    }//-----------------------------------------------------------------------------------------

    @DeleteMapping()
    public Response deleteuser(@RequestParam String uid){
        return this.userService.deleteuser(uid);
    }//-----------------------------------------------------------------------------------------

    @PatchMapping()
    public Response updateuserinfo(@RequestBody UserInfo userInfo){
        Response response1=this.userService.updateuserinfo(userInfo);
        Response response2=this.accountService.update(userInfo.getUsername(),userInfo.getPhone(),userInfo.getId());
        Response response3=new Response();
        response3.setResult(response1.isResult()&&response2.isResult());
        if(!response3.isResult())
            response3.setMessage("更新用户信息失败");
        return response3;
    }//-----------------------------------------------------------------------------------------


}
