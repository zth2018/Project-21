package com.webserve.webserve.entity.Institution;

public class institution {
    private String institution;
    private String school_id;
    private String id;
//    public institution(String institutionname,String school_id){
//        this.institutionname=institutionname;
//        this.school_id=school_id;
//    }


    public String getInstitution() {
        return institution;
    }

    public String getSchool_id() {
        return school_id;
    }

    public String getId() {
        return id;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
    }

    public void setSchool_id(String school_id) {
        this.school_id = school_id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
