package com.webserve.webserve.controller.classController;

import com.webserve.webserve.entity.Class.T_class;
import com.webserve.webserve.entity.Response;
import com.webserve.webserve.entity.User.Account;
import com.webserve.webserve.service.T_ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/class")
public class T_classController {
    @Autowired
    private T_ClassService t_classService;

    @GetMapping
    public Response getclasslist(@RequestParam String uid){
        return this.t_classService.getclasslist(uid);
    }

    @PostMapping
    public Response addclass(@RequestBody T_class t_class){
        return this.t_classService.addclass(t_class);
    }

    @DeleteMapping
    public Response closeclass(@RequestParam String cid){
        return this.t_classService.closeclass(cid);
    }

}

