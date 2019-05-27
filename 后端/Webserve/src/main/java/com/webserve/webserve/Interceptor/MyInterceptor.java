package com.webserve.webserve.Interceptor;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.SecureRandom;
import java.util.Map;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.io.JsonStringEncoder;
import com.fasterxml.jackson.databind.JsonSerializable;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.webserve.webserve.entity.User.Login;
import com.webserve.webserve.entity.User.Token;
import com.webserve.webserve.entity.User.User;
import jdk.nashorn.internal.parser.JSONParser;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.HandlerMapping;
import org.springframework.web.servlet.ModelAndView;
import sun.rmi.runtime.Log;
@CrossOrigin
public class MyInterceptor implements HandlerInterceptor{
    //在请求处理之前进行调用（Controller方法调用之前

    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
//        System.out.println("preHandle被调用");
//        httpServletResponse.setHeader("Access-Control-Allow-Origin", "*");
////        httpServletResponse.setHeader("Access-Control-Allow-Credentials", "true");
////        httpServletResponse.setStatus(200);
//        httpServletResponse.setHeader("Authorization","*");
//        System.out.println(httpServletRequest.getMethod());
        if(httpServletRequest.getMethod().equals("OPTIONS")){return true;}
        if(!httpServletRequest.getServletPath().contains("/login")&&!httpServletRequest.getServletPath().contains("/register")){
        ObjectMapper mapper = new ObjectMapper();
//        System.out.println(httpServletRequest.getHeader("Authorization"));
          String a=httpServletRequest.getHeader("Authorization");
          if(a==null)return false;
//          System.out.println("mark："+a);
//
//        String a="Jr2Aj4RYSlv4fo2KAs9uHP164woa6aL/ig52ZvWWEfbqdSuoLT0+rl7uA5kDheBwIZi6qA/MAPEO\r\n96JPV84K0f5L122URz5itEtDFdI/knU=";
//        System.out.println(a);
////        a=a.replace("\\r\\n","\r\n");
////        a=a.replace("\"","");
////        System.out.println(a);
        Token token=new Token();
        token.formatchange(a);
//        token.setToken(a);
        token.DecropyToken();
        System.out.println(token.getToken());
        Login login=new Login();
        try{
            login=mapper.readValue(token.getToken(),Login.class);
        }catch (IOException e){
            throw e;
        }
//        System.out.println(login.checkvalid());
        return login.checkvalid();
        }else return true;

    }
//    @Override
//    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {
//        System.out.println("postHandle被调用");
//    }
//
//    @Override
//    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {
//        System.out.println("afterCompletion被调用");
//    }

}
