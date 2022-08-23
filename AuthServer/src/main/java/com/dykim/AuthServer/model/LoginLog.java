//package com.dykim.AuthServer.model;
//
//import lombok.Data;
//
//import javax.persistence.*;
//import java.sql.Date;
//
//@Entity
//public class LoginLog {
//    @Id
//    @GeneratedValue
//    private Long id;
//    @ManyToOne
//    @JoinColumn(name="user_id")
//    private User user;
//    private Date loginDate;
//
//    public LoginLog() {}
//    public LoginLog(Long id, User user, Date loginDate) {
//        this.id = id;
//        this.user = user;
//        this.loginDate = loginDate;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public Date getLoginDate() {
//        return loginDate;
//    }
//
//    public void setLoginDate(Date loginDate) {
//        this.loginDate = loginDate;
//    }
//
//    @Override
//    public String toString() {
//        return "LoginLog{" +
//                "id=" + id +
//                ", user=" + user +
//                ", loginDate=" + loginDate +
//                '}';
//    }
//}
