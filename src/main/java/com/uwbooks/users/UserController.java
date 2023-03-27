package com.uwbooks.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody Map<String, String> payload) {
        if (userRepository.existsByEmail(payload.get("email"))) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: User exists, please login!");
        }
        return new ResponseEntity<User>(userService.signUp(payload.get("email"), payload.get("password")), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> payload) {
        if (!userRepository.existsByEmail(payload.get("email"))) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: User does not exist, please sign up!");
        }
        if (Objects.equals(payload.get("password"), userRepository.findByEmail(payload.get("email")).getEmail())) {
            return new ResponseEntity<User>(userRepository.findByEmail(payload.get("email")), HttpStatus.OK);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: Invalid password!");
    }
}