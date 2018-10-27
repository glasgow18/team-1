package com.code4good.team1.api;

import org.springframework.web.bind.annotation.*;

@RestController
public class Search {

    @GetMapping("search")
    @ResponseBody
    public String getActivities(@RequestParam(name = "searchTerm", required = false, defaultValue = "Stranger") String searchTerm) {


        return "the Search api works " + searchTerm;
    }
}
