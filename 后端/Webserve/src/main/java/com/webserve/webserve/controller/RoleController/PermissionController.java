package com.webserve.webserve.controller.RoleController;

import com.webserve.webserve.entity.Response;
import com.webserve.webserve.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/permission")
public class PermissionController {
    @Autowired
    public RoleService roleService;

    @GetMapping
    public Response getpermissionlist(@RequestParam String account){
        return this.roleService.getpermissionlist();
    }//----------------------------------------------------------------------------------------

    @PostMapping
    public Response addrolepermission(@RequestParam String account,@RequestParam String role_name,@RequestParam String permission){
        return this.roleService.addrolepermission(role_name,permission);
    }//----------------------------------------------------------------------------------------

    @DeleteMapping
    public Response deleterolepermission(@RequestParam String account,@RequestParam String id){
        return this.roleService.deleterolepermission(id);
    }//----------------------------------------------------------------------------------------

}
