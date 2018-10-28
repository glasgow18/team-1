package com.code4good.team1.services;

import com.code4good.team1.pojo.Activity;
import com.code4good.team1.pojo.ActivityTags;
import com.code4good.team1.pojo.Comment;
import com.code4good.team1.pojo.Tag;
import com.code4good.team1.repositories.ActivityRepository;
import com.code4good.team1.repositories.ActivityTagsRepository;
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

    @Autowired
    private ActivityTagsRepository activityTagsRepository;

    public void createActivity(Activity activity) {
        int nextId = Math.toIntExact(activityRepository.count()) + 1;

        activity.tags.forEach(e -> {
            Optional<Tag> tempTag = tagRepository.findByTag(e.tag);
            if (tempTag.isPresent()) {
                activityTagsRepository.save(new ActivityTags(nextId, tempTag.get().id));
            } else {
                Tag savedTag = tagRepository.save(new Tag(e.tag));
                activityTagsRepository.save(new ActivityTags(nextId, savedTag.id));
            }
        });
        activity.tags.clear();
        activityRepository.save(activity);
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
        Optional<Tag> tempTag = tagRepository.findByTag(tag);
        if (tempTag.isPresent()) {
            activityTagsRepository.save(new ActivityTags(id, tempTag.get().id));
        } else {
            Tag savedTag = tagRepository.save(new Tag(tag));
            activityTagsRepository.save(new ActivityTags(id, savedTag.id));
        }
    }
}
