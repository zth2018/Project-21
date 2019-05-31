package com.webserve.webserve.controller.InstitutionController;

import com.webserve.webserve.entity.Institution.school;
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
    public Response getall(@RequestParam String username){
        return this.institutionService.getallschool();
    }//-----------------------------------------------------------------------------

    @PostMapping()
    public Response add(@RequestParam String username,@RequestBody school data)
    {
        return  this.institutionService.addschool(data);
    }//-----------------------------------------------------------------------------

    @DeleteMapping()
    public Response delete(@RequestParam String username,@RequestParam String id){
        return this.institutionService.deleteschool(id);
    }//-----------------------------------------------------------------------------

    @PatchMapping()
    public Response update(@RequestParam String username,@RequestBody school data){
        return this.institutionService.updateschool(data);
    }//-----------------------------------------------------------------------------



}//------------------------------------
