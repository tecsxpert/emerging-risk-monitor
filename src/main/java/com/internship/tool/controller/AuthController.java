package com.internship.tool.controller;

import com.internship.tool.dto.LoginRequest;
import com.internship.tool.dto.LoginResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        if ("admin".equals(request.getUsername()) &&
                "admin".equals(request.getPassword())) {

            return new LoginResponse("Login successful");
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}