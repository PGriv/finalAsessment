package com.finalAsessment.finalAsessment.repository;

import com.finalAsessment.finalAsessment.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

}
