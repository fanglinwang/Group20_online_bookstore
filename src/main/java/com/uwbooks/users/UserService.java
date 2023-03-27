package com.uwbooks.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public User signUp(String email, String password){
        return userRepository.insert(new User(email, password));
    }
//    public boolean login(String email, String password);
}
