package com.webserve.webserve.controller;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/test")
public class test {
    @GetMapping()
    public String test(){
        return "1";
    }

    @PostMapping("/123")
    public String test1(@RequestParam String id){
        return id;
    }
    @GetMapping("/123")
    public String test2(@RequestParam String id){
        return id;
    }

}
