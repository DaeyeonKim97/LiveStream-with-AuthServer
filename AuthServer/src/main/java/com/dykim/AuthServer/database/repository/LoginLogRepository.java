package com.dykim.AuthServer.database.repository;

import com.dykim.AuthServer.model.LoginLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginLogRepository extends JpaRepository<LoginLog,Integer> {
}
