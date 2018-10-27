package com.code4good.team1.api;

import com.code4good.team1.pojo.Login;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginAPI {

    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String getActivities(@RequestBody Login login) {
        return "{" + "confirmation" + ":" + "true" + "}";
    }
}
