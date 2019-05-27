package com.webserve.webserve.entity.User;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;
import java.security.SecureRandom;

public class Token {
    private String token;

//    public Token(String token){
//        byte[] DES_KEY = { 21, 1, -110, 82, -32, -85, -128, -65 };
//        try {
//            // DES算法要求有一个可信任的随机数源
//            SecureRandom sr = new SecureRandom();
//            DESKeySpec deskey = new DESKeySpec(DES_KEY);
//            // 创建一个密匙工厂，然后用它把DESKeySpec转换成一个SecretKey对象
//            SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
//            SecretKey key = keyFactory.generateSecret(deskey);
//            // 加密对象
//            Cipher cipher = Cipher.getInstance("DES");
//            cipher.init(Cipher.ENCRYPT_MODE, key, sr);
//            // 加密，并把字节数组编码成字符串
//            this.token = new sun.misc.BASE64Encoder().encode(cipher.doFinal(token.getBytes()));
//        } catch (Exception e) {
//            // log.error("加密错误，错误信息：", e);
//            throw new RuntimeException("加密错误，错误信息：", e);
//        }
//    }

    public void EncropyToken(){
        byte[] DES_KEY = { 21, 1, -110, 82, -32, -85, -128, -65 };
        try {
            // DES算法要求有一个可信任的随机数源
            SecureRandom sr = new SecureRandom();
            DESKeySpec deskey = new DESKeySpec(DES_KEY);
            // 创建一个密匙工厂，然后用它把DESKeySpec转换成一个SecretKey对象
            SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
            SecretKey key = keyFactory.generateSecret(deskey);
            // 加密对象
            Cipher cipher = Cipher.getInstance("DES");
            cipher.init(Cipher.ENCRYPT_MODE, key, sr);
            // 加密，并把字节数组编码成字符串
            this.token=new sun.misc.BASE64Encoder().encode(cipher.doFinal(this.token.getBytes()));
        } catch (Exception e) {
            // log.error("加密错误，错误信息：", e);
            throw new RuntimeException("加密错误，错误信息：", e);
        }
    }

    public void DecropyToken(){
        byte[] DES_KEY = { 21, 1, -110, 82, -32, -85, -128, -65 };
        String decryptedToken = null;
        try {
            // DES算法要求有一个可信任的随机数源
            SecureRandom sr = new SecureRandom();
            DESKeySpec deskey = new DESKeySpec(DES_KEY);
            // 创建一个密匙工厂，然后用它把DESKeySpec转换成一个SecretKey对象
            SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
            SecretKey key = keyFactory.generateSecret(deskey);
            // 解密对象
            Cipher cipher = Cipher.getInstance("DES");
            cipher.init(Cipher.DECRYPT_MODE, key, sr);
            // 把字符串进行解码，解码为字节数组，并解密

            decryptedToken = new String(cipher.doFinal(new sun.misc.BASE64Decoder().decodeBuffer(this.token)));

        } catch (Exception e) {
//            throw new RuntimeException("解密错误，错误信息：", e);
        }
        this.token=decryptedToken;
    }

    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }

//    public void TOString(Login logininfo){
//
//        ObjectMapper mapper = new ObjectMapper();
//        try {
//            this.token = mapper.writeValueAsString(logininfo);
//
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//
//    }
    public Token(String phone){
        Login login=new Login(phone);
        ObjectMapper mapper = new ObjectMapper();
        try {
            this.token = mapper.writeValueAsString(login);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        this.EncropyToken();
    }
    public Token(){
        this.token="";
    }
public void formatchange(String a){
    a=a.replace("\\r\\n","\r\n");
    a=a.replace("\"","");
    this.token=a;
}

}
