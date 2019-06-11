package com.webserve.webserve.controller.RoleController;


import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.Role.role;
import com.webserve.webserve.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/role")
public class RoleController {

    @Autowired
    public RoleService roleService;

    @GetMapping()
    public Response getallrole(@RequestParam String account){
        return this.roleService.getallrole();
    }//-----------------------------------------------------------------------------

    @DeleteMapping()
    public Response deleterole(@RequestParam String account,@RequestParam String role_id){
        return this.roleService.deleterole(role_id);
    }//----------------------------------------------------------------------------

    @PostMapping()
    public Response addrole(@RequestParam String account,@RequestParam String role_name){
        return this.roleService.addrole(role_name);
    }//----------------------------------------------------------------------------

    @PatchMapping()
    public Response updaterole(@RequestParam String account,@RequestBody role role){
        return this.roleService.updaterole(role);
    }//----------------------------------------------------------------------------

}
