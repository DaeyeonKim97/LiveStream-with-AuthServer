package com.dykim.AuthServer.service;

import com.dykim.AuthServer.model.dto.OtherUser;

public interface UserInfoService {
    OtherUser getUserInfo(int id);
}
