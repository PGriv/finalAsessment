package com.finalAsessment.finalAsessment.controller;

import com.finalAsessment.finalAsessment.model.User;
import com.finalAsessment.finalAsessment.repository.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    public User addUser(@RequestBody User user){
        return userRepository.save(user);
    }

    @GetMapping("/allUsers")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }





}
