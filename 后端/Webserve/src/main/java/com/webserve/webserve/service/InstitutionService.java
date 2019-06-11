package com.webserve.webserve.service;

import com.webserve.webserve.entity.Institution.school;
import com.webserve.webserve.entity.Response;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface InstitutionService {
    Response addschool(school data);
    Response deleteschool(String school_id);
    Response updateschool(school data);
    Response getallschool();

    Response addinstitution(String school_id,String institution);
    Response deleteinstitution(String institution_id);
    Response updateinstitution(String id,String institution);
}
