package com.code4good.team1.api;

import com.code4good.team1.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AddCommentAPI {

    @Autowired
    private ActivityService activityService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/addcomment")
    public void addComment(@RequestBody Map<String, String> commentInfo) {
        String id = commentInfo.get("id");
        String comment = commentInfo.get("comment");

        int parsedID = Integer.parseInt(id);

        activityService.addComment(parsedID, comment);
    }

}
