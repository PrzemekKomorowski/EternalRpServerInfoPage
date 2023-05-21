package com.example.eternalrp_back.user.controller;


import com.example.eternalrp_back.user.model.User;
import com.example.eternalrp_back.user.model.UserRequest;
import com.example.eternalrp_back.user.model.UserResponse;
import com.example.eternalrp_back.user.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public UserResponse loginUser(UserRequest userRequest){
        User user = userService.getUser(userRequest);
       return UserResponse.builder()
               .email(user.getEmail())
               .username(user.getUsername())
               .build();
    }

    @PostMapping
    public void register(UserRequest userRequest){
        userService.registerUser(userRequest);
    }
}
