//package com.dykim.AuthServer.model;
//
//import lombok.Data;
//
//import javax.persistence.*;
//import java.sql.Date;
//
//@Entity
//public class PasswordChangeLog {
//    @Id
//    @GeneratedValue
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name="user_id")
//    private User user;
//
//    private Date changedDate;
//
//    public PasswordChangeLog() {}
//    public PasswordChangeLog(Long id, User user, Date changedDate) {
//        this.id = id;
//        this.user = user;
//        this.changedDate = changedDate;
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
//    public Date getChangedDate() {
//        return changedDate;
//    }
//
//    public void setChangedDate(Date changedDate) {
//        this.changedDate = changedDate;
//    }
//
//    @Override
//    public String toString() {
//        return "PasswordChangeLog{" +
//                "id=" + id +
//                ", user=" + user +
//                ", changedDate=" + changedDate +
//                '}';
//    }
//}
