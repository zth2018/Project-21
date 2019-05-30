package com.webserve.webserve.entity.Institution;

import java.util.List;

public class school {
    private String schoolname;
    private String province;
    private String city;
    private String id;
//    private Object institutions;
    private List<institution> institutions;
    private boolean expand=false;
//    public school(String schoolname,String province,String city){
//        this.schoolname=schoolname;
//        this.province=province;
//        this.city=city;
//    }

    public String getSchoolname() {
        return schoolname;
    }

    public String getProvince() {
        return province;
    }

    public String getCity() {
        return city;
    }

    public String getId() {
        return id;
    }

    public void setSchoolname(String schoolname) {
        this.schoolname = schoolname;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setInstitutions(List<institution> institutions) {
        this.institutions = institutions;
    }

    public List<institution> getInstitutions() {
        return institutions;
    }


//    public void setInstitutions(Object institutions) {
//        this.institutions = institutions;
//    }
//
//    public Object getInstitutions() {
//        return institutions;
//    }

    public void setId(String id) {
        this.id = id;
    }
}
