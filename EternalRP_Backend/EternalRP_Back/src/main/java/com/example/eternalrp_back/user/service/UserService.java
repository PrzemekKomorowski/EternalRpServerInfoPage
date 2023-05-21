package com.example.eternalrp_back.user.service;

import com.example.eternalrp_back.user.model.User;
import com.example.eternalrp_back.user.model.UserRepository;
import com.example.eternalrp_back.user.model.UserRequest;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUser(UserRequest request){
        User user = userRepository.findByUsername(request.getUsername()).orElseThrow(()-> new NotFoundException("User not found"));
        System.out.println(user.getPassword().equals(request.getPassword()));
        if (user.getPassword().equals(request.getPassword())){
            return user;
        }
        System.out.println("System nie potwierdził wiarygodności hasła");
        return null;
    }

    public void registerUser(UserRequest userRequest){
        User user = UserRequest.toEntity(userRequest);
        userRepository.save(user);
    }

}
