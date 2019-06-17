package com.webserve.webserve.entity.User;

public class UserInfo {
    private String name;
    private String school;
    private String institution;
    private String id;
    private String age;
    private String gender;
    private String role;
    private String username;
    private String phone;
    private String id_n;
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getInstitution() {
        return institution;
    }

    public String getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public String getName() {
        return name;
    }

    public String getSchool() {
        return school;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPhone() {
        return phone;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public String getId_n() {
        return id_n;
    }

    public void setId_n(String id_n) {
        this.id_n = id_n;
    }
}
