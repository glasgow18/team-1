package com.code4good.team1.repositories;

import com.code4good.team1.pojo.Login;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LoginRepository extends CrudRepository<Login, Integer> {
    Optional<Login> findByEmail(String Email);
}
