package com.dykim.AuthServer.controller;

import com.dykim.AuthServer.model.dto.OtherUser;
import com.dykim.AuthServer.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class UserInfoController {

    private final UserInfoService userInfoService;

    @Autowired
    public UserInfoController(UserInfoService userInfoService) {
        this.userInfoService = userInfoService;
    }

    @ResponseBody
    @GetMapping("user/{id}")
    public Object getUserInfo(@RequestParam("id") int userId, HttpServletResponse response){
        OtherUser otherUserInfo = userInfoService.getUserInfo(userId);

        return otherUserInfo;
    }
}
