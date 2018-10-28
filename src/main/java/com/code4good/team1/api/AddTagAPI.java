package com.code4good.team1.api;

import com.code4good.team1.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AddTagAPI {

    @Autowired
    private ActivityService activityService;

    @PutMapping("/addtag")
    public void addTag(@RequestBody Map<String, String> tagInfo) {
        String id = tagInfo.get("id");
        String tag = tagInfo.get("comment");

        int parsedID = Integer.parseInt(id);

        activityService.addTag(parsedID, tag);
    }
}
