package com.student.studentmanagement.response;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


public class ResponseHandler {
    public static <T>ResponseEntity<?>generate(T data, String message, HttpStatus status){
        Map<String,Object>response = new HashMap<>();
        response.put("data",data);
        response.put("message",message);
        response.put("status",status.value());
        return new ResponseEntity<>(response,status);

    }

}