package com.code4good.team1.services;

import com.code4good.team1.pojo.Activity;
import com.code4good.team1.pojo.Comment;
import com.code4good.team1.pojo.Tag;
import com.code4good.team1.repositories.ActivityRepository;
import com.code4good.team1.repositories.CommentRepository;
import com.code4good.team1.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private TagRepository tagRepository;

    public void createActivity(Activity activity) {
        activityRepository.save(activity);
        activity.tags.forEach(tag -> {
            tag.activityID = activity.id;
        });
    }

    public void addComment(int id, String comment) {
        Optional<Activity> activity = activityRepository.findById(id);
        if (activity.isPresent()) {
            Activity dbActivity = activity.get();
            Comment savedComment = commentRepository.save(new Comment(id, comment));
            dbActivity.comments.add(savedComment);
            activityRepository.save(dbActivity);
        }
    }

    public void addTag(int id, String tag) {
        Optional<Activity> activity = activityRepository.findById(id);
        if (activity.isPresent()) {
            Activity dbActivity = activity.get();
            Tag savedTag = tagRepository.save(new Tag(id, tag));
            dbActivity.tags.add(savedTag);
            activityRepository.save(dbActivity);
        }
    }

}
