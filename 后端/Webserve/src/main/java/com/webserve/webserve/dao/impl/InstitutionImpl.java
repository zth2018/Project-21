package com.webserve.webserve.dao.impl;

import com.webserve.webserve.dao.InstitutionDao;
import com.webserve.webserve.entity.Institution.institution;
import com.webserve.webserve.entity.Institution.school;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public class InstitutionImpl implements InstitutionDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int deleteinstitution(String institution_id){
        String sql="delete from t_institution where id=?";
        return this.jdbcTemplate.update(sql,institution_id);
    }//----------------------------------------------------------------------------------

    @Override
    public int addschool(school data){
        String sql="insert into t_school(schoolname,province,city) values(?,?,?) ";
        return this.jdbcTemplate.update(
                sql,
                data.getSchoolname(),
                data.getProvince(),
                data.getCity()
                );
    }//----------------------------------------------------------------------

    @Override
    public int deleteschool(String school_id){
        String sql="delete from t_school where id=?";
        return this.jdbcTemplate.update(sql,school_id);
    }//------------------------------------------------

    @Override
    public int updateschool(school data){
        String sql="update t_school set schoolname=?,province=?,city=? where id=?";
        return this.jdbcTemplate.update(
                sql,
                data.getSchoolname(),
                data.getProvince(),
                data.getCity(),
                data.getId()
        );
    }//-----------------------------------------------------
//            data.getSchoolname(),
//            data.getProvince(),
//            data.getCity(),
//            data.getId()


    @Override
    public List<school>getallschool(){
        String sql="select * from t_school";
        RowMapper<school> rowMapper=new BeanPropertyRowMapper<school>(school.class);
        List<school>schools=this.jdbcTemplate.query(sql,rowMapper);
        for(school school :schools){
//            System.out.println(school.getId());
//            System.out.println(this.getinstitution(school.getId()));
            school.setInstitutions(this.getinstitution(school.getId()));
//            for(institution ins:school.getInstitutions()){
//                System.out.println(ins.getInstitution());
//            }
        }
        return schools;
    }//-------------------------------------------------------------------------

    @Override
    public List<institution> getinstitution(String school_id){
        String sql="select * from t_institution where school_id=?";
        RowMapper<institution> rowMapper=new BeanPropertyRowMapper<institution>(institution.class);
        List<institution>institutions=this.jdbcTemplate.query(sql,rowMapper,school_id);
        return institutions;
    }//----------------------------------------------------------------------------------------

    @Override
    public int addinstitution(String school_id,String institution){
        String sql="insert into t_institution (institution,school_id) values(?,?)";
        return this.jdbcTemplate.update(sql,institution,school_id);
    }//------------------------------------------------------------------------------------------

    @Override
    public int updateinstitution(String id,String institution){
        String sql="update t_institution set institution=? where id=?";
        return this.jdbcTemplate.update(
                sql,
                institution,
                id
                );
    }






}
