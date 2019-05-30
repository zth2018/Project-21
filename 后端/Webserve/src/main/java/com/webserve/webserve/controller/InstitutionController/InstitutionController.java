package com.webserve.webserve.controller.InstitutionController;

import com.webserve.webserve.entity.Response;
import com.webserve.webserve.service.InstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/institution")
public class InstitutionController {
    @Autowired
    private InstitutionService institutionService;

    @PostMapping()
    public Response addinstitution(@RequestParam String username,@RequestParam String school_id,@RequestParam String institution){
        return this.institutionService.addinstitution(school_id,institution);
    }//-----------------------------------------
    @DeleteMapping()
    public Response deleteinstitution(@RequestParam String username,@RequestParam String id){
        return this.institutionService.deleteinstitution(id);
    }
}
