package com.code4good.team1.services;

import com.code4good.team1.pojo.Login;
import com.code4good.team1.repositories.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public boolean loginUser(Login login) {
        Optional<Login> temp = loginRepository.findByEmail(login.email);
        if (temp.isPresent()) {
            return temp.get().password.equals(login.password);
        }
        return false;
    }

    public boolean registerUser(Login login) {
        Optional<Login> temp = loginRepository.findByEmail(login.email);
        if (temp.isPresent()) {
            return false;
        }
        loginRepository.save(login);
        return true;
    }

}
