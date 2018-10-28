package com.code4good.team1.services;

import com.code4good.team1.pojo.Activity;
import com.code4good.team1.pojo.ActivityTags;
import com.code4good.team1.pojo.Comment;
import com.code4good.team1.pojo.Tag;
import com.code4good.team1.repositories.ActivityRepository;
import com.code4good.team1.repositories.ActivityTagsRepository;
import com.code4good.team1.repositories.CommentRepository;
import com.code4good.team1.repositories.TagRepository;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class SearchService {

    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private ActivityTagsRepository activityTagsRepository;

    public String searchActivities(String term) {
        String[] splitTerm = term.split(" ");
        Gson gson = new GsonBuilder().create();
        List<Activity> searchList = new ArrayList<>();


        for (String s : splitTerm) {
            getNamedActivies(s, searchList);
            getNamedTags(s, searchList);
        }
        populateComments(searchList);
        populateTags(searchList);
        return gson.toJson(searchList);
    }

    private void getNamedActivies(String term, List<Activity> searchList) {
        Optional<Iterable<Activity>> searchActivity = activityRepository.findAllByName(term);
        if (searchActivity.isPresent()) {
            searchActivity.get().forEach(elem -> {
                searchList.add(elem);
            });
        }
    }

    private void getNamedTags(String term, List<Activity> searchList) {
        Optional<Iterable<Tag>> searchTag = tagRepository.findAllByTag(term);
        if (searchTag.isPresent()) {
            searchTag.get().forEach(tag -> {
                Optional<Iterable<ActivityTags>> activityTags = activityTagsRepository.findAllByTagID(tag.id);
                if (activityTags.isPresent()) {
                    for (ActivityTags at : activityTags.get()) {
                        Optional<Activity> result = activityRepository.findById(at.activityID);
                        if (result.isPresent()) {
                            searchList.add(result.get());
                        }
                    }
                }
            });
        }
    }

    private void populateComments(List<Activity> searchList) {
        searchList.forEach(e -> {
            Iterable<Comment> result = commentRepository.findAll();
            for (Comment c : result) {
                if (e.id == c.activityID) {
                    e.comments.add(c);
                }
            }
        });
    }

    private void populateTags(List<Activity> searchList) {
        searchList.forEach(e -> {
            Optional<Iterable<ActivityTags>> actagResults = activityTagsRepository.findByActivityID(e.id);
            if (actagResults.isPresent()) {
                actagResults.get().forEach(actag -> {
                    Optional<Tag> tagResult = tagRepository.findById(actag.tagID);
                    if (tagResult.isPresent()) {
                        e.tags.add(tagResult.get());
                    }
                });
            }
        });
    }

}
