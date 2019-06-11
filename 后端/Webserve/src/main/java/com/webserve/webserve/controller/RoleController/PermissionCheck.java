package com.webserve.webserve.controller.RoleController;


import com.webserve.webserve.service.AccountService;
import com.webserve.webserve.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/permissioncheck")
public class PermissionCheck {
    @Autowired
    public AccountService accountService;
    @Autowired
    public RoleService roleService;

    @GetMapping()
    public Boolean checkuserpermission(@RequestParam String account,@RequestParam String uid,@RequestParam String permission){
        String role=this.accountService.getuserrole(uid);
        return this.roleService.permissioncheck(role,permission);
    }//-----------------------------------------------------------------------------------
}
