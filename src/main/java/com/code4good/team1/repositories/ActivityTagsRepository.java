package com.code4good.team1.repositories;

import com.code4good.team1.pojo.ActivityTags;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ActivityTagsRepository extends CrudRepository<ActivityTags, Integer> {
    Optional<Iterable<ActivityTags>> findByActivityID(int activityID);

    Optional<Iterable<ActivityTags>> findAllByTagID(int tagID);
}
