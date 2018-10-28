package com.code4good.team1.api;

import com.code4good.team1.services.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class Search {

    @Autowired
    private SearchService searchService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("search")
    @ResponseBody
    public String getActivities(@RequestParam(name = "searchTerm", required = false, defaultValue = "") String searchTerm) {
        return searchService.searchActivities(searchTerm);
    }
}
