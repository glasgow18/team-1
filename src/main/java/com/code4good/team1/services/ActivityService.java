package com.code4good.team1.services;

import com.code4good.team1.pojo.Activity;
import com.code4good.team1.repositories.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    public void createActivity(Activity activity) {
        //Map Here
        activityRepository.save(activity);
    }

}
