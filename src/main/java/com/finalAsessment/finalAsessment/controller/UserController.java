package com.finalAsessment.finalAsessment.controller;

import com.finalAsessment.finalAsessment.model.User;
import com.finalAsessment.finalAsessment.Actions.UserRepoActions;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepoActions userRepoActions;

    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        return userRepoActions.saveUser(user);
    }

    @GetMapping("/allUsers")
    public List<User> getAllUsers() {
        return userRepoActions.showAllUsers();
    }

    @DeleteMapping("/delete/{email}")
    public String deleteUser(@PathVariable String email) {
        userRepoActions.findUserToDelete(email);
        return "The user has been deleted successfully";

    }

    @PutMapping("/update/{email}")
    public User updateUser(@RequestBody User user, @PathVariable String email) {
        return userRepoActions.updateAndSaveUser(user, email);
    }
}





