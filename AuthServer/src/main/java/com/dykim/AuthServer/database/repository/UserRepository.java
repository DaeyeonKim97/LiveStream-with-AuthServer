package com.dykim.AuthServer.database.repository;

import com.dykim.AuthServer.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByUserName(String username);

}
