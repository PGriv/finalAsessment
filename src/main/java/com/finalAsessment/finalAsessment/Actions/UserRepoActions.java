package com.finalAsessment.finalAsessment.Actions;

import com.finalAsessment.finalAsessment.model.User;
import com.finalAsessment.finalAsessment.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRepoActions {
    @Autowired
    UserRepository userRepository;

    public void findUserToDelete(String email){
       userRepository.delete(userRepository.findUserToDelete(email));
    }

    public User saveUser(User user){
        return userRepository.save(user);
    }
    public List<User> showAllUsers(){
        return userRepository.findAll();
    }

    public User updateAndSaveUser(User user,String email){
        User oldUser = userRepository.findUserToUpdate(email);
        oldUser.setName(user.getName());
        oldUser.setSurname(user.getSurname());
        oldUser.setEmail(user.getEmail());
        oldUser.setPhoneNumber(user.getPhoneNumber());
       return userRepository.save(oldUser);

    }

}
