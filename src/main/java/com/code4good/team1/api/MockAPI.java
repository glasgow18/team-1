package com.code4good.team1.api;

import com.code4good.team1.CreateMockData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MockAPI {

    @Autowired
    private CreateMockData createMockData;

    @GetMapping("/generate")
    public String generate() {
        createMockData.generate();
        return "{\"confirmation\":\"true\"}";
    }


}
