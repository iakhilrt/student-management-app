package com.student.studentmanagement.exception;

import java.util.List;

public class Validation extends RuntimeException{
    List<String>error;
    String message;

    public Validation(List<String>error,String message){
        this.error=error;
        this.message=message;
    }
    public List<String>getError(){
        return error;
    }
}
