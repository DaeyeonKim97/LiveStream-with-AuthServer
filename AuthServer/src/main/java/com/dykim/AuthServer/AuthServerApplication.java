package com.dykim.AuthServer;

import com.dykim.AuthServer.database.repository.UserRepository;
import com.dykim.AuthServer.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.sql.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class AuthServerApplication {
	@Autowired
	UserRepository repository;
	@PostConstruct
	public void initUsers() {
		System.out.println("Auth Application Started...");
	}

	public static void main(String[] args) {
		SpringApplication.run(AuthServerApplication.class, args);
	}

}
