package com.code4good.team1.api;

import com.code4good.team1.pojo.Login;
import com.code4good.team1.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterAPI {

    @Autowired
    private LoginService loginService;

    @PutMapping("/register")
    public String registerUser(@RequestBody Login login) {
        if (loginService.registerUser(login)) {
            return "{" + "confirmation" + ":" + "true" + "}";
        }
        return "{" + "confirmation" + ":" + "false" + "}";
    }

}
