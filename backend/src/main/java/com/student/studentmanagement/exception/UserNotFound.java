package com.student.studentmanagement.exception;

public class UserNotFound extends RuntimeException{
    public UserNotFound (String message){
        super(message);
    }

}