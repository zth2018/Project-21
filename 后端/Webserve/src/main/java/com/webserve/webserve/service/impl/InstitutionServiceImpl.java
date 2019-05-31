package com.webserve.webserve.service.impl;


import com.webserve.webserve.dao.InstitutionDao;
import com.webserve.webserve.entity.Institution.school;
import com.webserve.webserve.entity.Response;
import com.webserve.webserve.service.InstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InstitutionServiceImpl implements InstitutionService {
    @Autowired
    private InstitutionDao institutionDao;

    @Override
    public Response deleteinstitution(String institution_id){
        Response response=new Response();
        if(this.institutionDao.deleteinstitution(institution_id)==1){
            response.setResult(true);
        }else{
            response.setResult(false);
            response.setMessage("删除学院失败");
        }
        return response;
    }//--------------------------------------------------------------------------

    @Override
    public Response addschool(school data){
        Response result=new Response();
        if (this.institutionDao.addschool(data)==1){
            result.setResult(true);
        }else{
            result.setMessage("添加学校失败");
            result.setResult(false);
        }
        return  result;
    }//-----------------------------------------------------------------------------

    public Response deleteschool(String school_id){
        Response result=new Response();
        if(this.institutionDao.deleteschool(school_id)==1){
            result.setResult(true);
        }else {
            result.setResult(false);
            result.setMessage("删除学校失败");
        }
        return result;
    }//------------------------------------------------------------------------------

    public Response updateschool(school data){
        Response result=new Response();
        if(this.institutionDao.updateschool(data)==1){
            result.setResult(true);
        }else {
            result.setResult(false);
            result.setMessage("更新学校信息失败");
        }
        return result;
    }//------------------------------------------------------------------------------

    public Response getallschool(){
        Response response=new Response();
        response.setResult(true);
        response.setData(this.institutionDao.getallschool());
        response.setMessage("获取数据失败");
        return response;
    }//---------------------------------------------------------------------------

    public Response addinstitution(String schoo_id,String institution){
        Response response=new Response();
        if(this.institutionDao.addinstitution(schoo_id,institution)==1){
            response.setResult(true);
        }else {
            response.setResult(false);
            response.setMessage("添加学院失败");
        }
        return response;
    }//-------------------------------------------------------------------------------

    public Response updateinstitution(String id,String institution){
        Response response=new Response();
        if(this.institutionDao.updateinstitution(id,institution)==1){
            response.setResult(true);
        }else{
            response.setResult(false);
            response.setMessage("修改学院信息失败");
        }
        return response;
    }//---------------------------------------------------------------------------------

}
