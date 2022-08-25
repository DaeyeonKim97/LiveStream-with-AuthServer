package com.dykim.AuthServer.database.repository;

import com.dykim.AuthServer.model.PasswordChangeLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PasswordChangeLogRepository extends JpaRepository<PasswordChangeLog, Integer> {
}
