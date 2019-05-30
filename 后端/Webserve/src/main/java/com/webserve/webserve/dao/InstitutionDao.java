package com.webserve.webserve.dao;

import com.webserve.webserve.entity.Institution.institution;
import com.webserve.webserve.entity.Institution.school;

import java.util.List;

public interface InstitutionDao {
    int addschool(school data);
    int deleteschool(String school_id);
    int updataschool(school data);
    List<school> getallschool();
    List<institution> getinstitution(String school_id);

    int addinstitution(String school_id,String institution);
    int deleteinstitution(String institution_id);
}
