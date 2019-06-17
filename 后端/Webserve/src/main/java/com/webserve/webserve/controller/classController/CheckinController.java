package com.webserve.webserve.controller.classController;

import com.webserve.webserve.entity.Response;
import com.webserve.webserve.service.T_ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/checkin")
public class CheckinController {
    @Autowired
    private T_ClassService t_classService;

    @PostMapping
    public Response checkin_th(@RequestParam String cid){
        return this.t_classService.checkin_th(cid);
    }
    @GetMapping
    public Response checkin(@RequestParam String id,@RequestParam String cid,@RequestParam String count){
        return this.t_classService.checkin(id,cid,count);
    }

    @PatchMapping
    public Response checkin_supplement(@RequestParam String id,@RequestParam String count){
        return this.t_classService.checkin_sup(id,count);
    }

}
