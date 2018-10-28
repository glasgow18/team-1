package com.code4good.team1.api;

import com.code4good.team1.pojo.Login;
import com.code4good.team1.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginAPI {

    @Autowired
    private LoginService loginService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String getActivities(@RequestBody Login login) {
        if (loginService.loginUser(login)) {
            return "{\"confirmation\":\"true\"}";
        }
        return "{\"confirmation\":\"false\"}";
    }
}
