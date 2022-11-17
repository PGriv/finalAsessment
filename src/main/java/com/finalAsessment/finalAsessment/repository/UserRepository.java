package com.finalAsessment.finalAsessment.repository;

import com.finalAsessment.finalAsessment.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
        @Query(value = "SELECT * FROM USER u WHERE u.email=:email",nativeQuery = true)
        User findUserToDelete(@Param("email") String email);


        @Query(value = "SELECT * FROM USER u WHERE u.email=:email",nativeQuery = true)
        User findUserToUpdate(@Param("email") String email);


}
