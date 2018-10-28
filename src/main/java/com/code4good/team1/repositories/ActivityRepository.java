package com.code4good.team1.repositories;

import com.code4good.team1.pojo.Activity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ActivityRepository extends CrudRepository<Activity, Integer> {

    Optional<Activity> findByName(String name);

    Optional<Iterable<Activity>> findAllByName(String name);
    Optional<Activity> findById(int id);
}
