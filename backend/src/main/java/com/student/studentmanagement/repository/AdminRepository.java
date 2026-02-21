package com.student.studentmanagement.repository;

import com.student.studentmanagement.model.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<AdminEntity,Long> {

    @Query("SELECT c FROM AdminEntity c WHERE c.username=:username and c.password=:password")
    AdminEntity loginByNameAndPassword(@Param("username") String username, @Param("password") String password);
}
