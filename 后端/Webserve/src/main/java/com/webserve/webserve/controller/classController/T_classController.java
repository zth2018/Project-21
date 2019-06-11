package com.webserve.webserve.controller.classController;

import com.webserve.webserve.entity.Class.T_class;
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


    @GetMapping("/getclass")
    public List<T_class> getclassid(@RequestParam String phone) {

        return this.t_classService.getclass(phone);
    }

    @GetMapping("/getcclass")
    public List<T_class> getcclassid(@RequestParam String phone) {

        return this.t_classService.getcclass(phone);
    }

    @GetMapping("/getjclass")
    public List<T_class> getjclassid(@RequestParam String phone) {

        return this.t_classService.getjclass(phone);
    }

   @PostMapping("/createclass")
    public int insertclass(@RequestBody T_class t_class){

        return this.t_classService.insertclass(t_class);
   }
    @PostMapping("updateclass")
    public int updateclass(@RequestBody T_class t_class){
        return this.t_classService.updateclass(t_class);
    }

    @GetMapping("getuser")
    public List<Account> getuser(@RequestParam String class_id){
        return this.t_classService.getuser(class_id);
    }
}

