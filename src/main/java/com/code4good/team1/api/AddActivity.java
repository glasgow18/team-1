package com.code4good.team1.api;

import com.code4good.team1.pojo.Activity;
import com.code4good.team1.pojo.Comment;
import com.code4good.team1.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
public class AddActivity {

    @Autowired
    private ActivityService activityService;

    @GetMapping("addactivity")
    @ResponseBody
    public String getActivities(@RequestParam(name = "activity", required = false, defaultValue = "Stranger") String activity) {

        List<Comment> comments = new ArrayList<>();
        List<String> tags = new ArrayList<>();

        activityService.createActivity();

        return "the addactivity api works " + activity;
    }
}