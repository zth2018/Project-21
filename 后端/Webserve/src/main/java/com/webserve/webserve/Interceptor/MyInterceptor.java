package com.webserve.webserve.Interceptor;


import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.HandlerMapping;
import org.springframework.web.servlet.ModelAndView;
public class MyInterceptor implements HandlerInterceptor{
    //在请求处理之前进行调用（Controller方法调用之前
    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
//        System.out.println("preHandle被调用");
        if(!httpServletRequest.getRequestURI().equals("/user/login")){
        String token=httpServletRequest.getHeader("Authorization");
//        System.out.println(httpServletRequest.getHeader("Authorization"));

        return false;
        }else{
            return true;
        }
//        Map map =(Map)httpServletRequest.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);
//        System.out.println(map.get("name"));
//        System.out.println(httpServletRequest.getParameter("username"));
//        if(map.get("name").equals("zhangsan")) {
//            return true;    //如果false，停止流程，api被拦截
//        }else {
//            PrintWriter printWriter = httpServletResponse.getWriter();
//            printWriter.write("please login again!");
//            return false;
//        }
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
