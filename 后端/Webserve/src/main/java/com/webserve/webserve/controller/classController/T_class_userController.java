package com.webserve.webserve.controller.classController;


import com.webserve.webserve.entity.Response;
import com.webserve.webserve.service.T_ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/classinfo")
public class T_class_userController {
    @Autowired
    private T_ClassService t_classService;

    @PostMapping
    public Response addclassmember(@RequestParam String uid, @RequestParam String cid){
        return this.t_classService.addclassmember(uid,cid);
    }

    @GetMapping
    public Response getuserlistbycid(@RequestParam String cid){
        return this.t_classService.getuserlistbycid(cid);
    }

    @DeleteMapping
    public Response quitclass(@RequestParam String mid){
        return this.t_classService.quitclass(mid);
    }


}
