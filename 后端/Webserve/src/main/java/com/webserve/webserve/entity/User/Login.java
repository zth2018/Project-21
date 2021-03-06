package com.webserve.webserve.entity.User;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Login {
    private String account;

    private String validtime;
    public  String valid="20195261915";
//    public TOString(){
//        String result;
//        ObjectMapper mapper = new ObjectMapper();
//        try {
//            result = mapper.writeValueAsString();
//
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//
//    }
    public Login(String account){
        this.account =account;
        Date now=new Date();
        Calendar validtime=Calendar.getInstance();
        validtime.setTime(now);
        validtime.add(Calendar.HOUR,2);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        this.validtime= dateFormat.format( validtime.getTime() );
    }
    public Login (){
        this.account ="";
        this.validtime="";
    }
    public boolean checkvalid(){
        Date now=new Date();
        Date validtime=new Date();
//        Calendar timenow=Calendar.getInstance();
//        timenow.setTime(now);

        SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        try {
            validtime = dateFormat.parse(this.validtime);
        }catch (ParseException e){

        }
//        if(validtime.after(now)){
//            Calendar newvalidtime=Calendar.getInstance();
//            newvalidtime.setTime(now);
//            newvalidtime.add(Calendar.HOUR,2);
//            this.validtime= dateFormat.format( newvalidtime.getTime() );
//        }
        return validtime.after(now);
    }

    public String getAccount() {
        return account;
    }

    public String getValidtime() {
        return validtime;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public void setValidtime(String validtime) {
        this.validtime = validtime;
    }
}
