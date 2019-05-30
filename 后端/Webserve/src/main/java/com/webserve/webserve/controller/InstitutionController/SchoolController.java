package com.webserve.webserve.controller.InstitutionController;

import com.webserve.webserve.entity.Response;
import com.webserve.webserve.service.InstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/school")
public class SchoolController {
    @Autowired
    private InstitutionService institutionService;

    @GetMapping()
    public Response getallschool(@RequestParam String username){
        Response response=new Response();
        response=this.institutionService.getallschool();
        return response;
    }//----------------------------------

}//----------------------------------
