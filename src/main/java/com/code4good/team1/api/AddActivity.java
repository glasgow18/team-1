package com.code4good.team1.api;

import com.code4good.team1.pojo.Activity;
import com.code4good.team1.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class AddActivity {

    @Autowired
    private ActivityService activityService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/addactivity")
    public void getActivities(@RequestBody Activity activity) {
        activityService.createActivity(activity);
    }
}