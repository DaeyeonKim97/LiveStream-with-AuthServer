//package com.dykim.AuthServer.model;
//
//import lombok.Data;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.Id;
//import java.io.Serializable;
//import java.sql.Date;
//
//@Entity
//public class User implements Serializable {
//    @Id
//    @GeneratedValue
//    @Column(name = "USER_ID")
//    private Long id;
//    private String name;
//    @Column(name = "USER_USERID")
//    private String userId;
//    private String password;
//    private String email;
//    private String phone;
//    private String profileImgSrc;
//    private String certification;
//    private Date joinDate;
//    private String deleted;
//    private Date deletedDate;
//
//    public User() {}
//    public User(long id, String name, String userId, String password, String email, String phone, String profileImgSrc, String certification, Date joinDate, String deleted, Date deletedDate) {
//        this.id = id;
//        this.name = name;
//        this.userId = userId;
//        this.password = password;
//        this.email = email;
//        this.phone = phone;
//        this.profileImgSrc = profileImgSrc;
//        this.certification = certification;
//        this.joinDate = joinDate;
//        this.deleted = deleted;
//        this.deletedDate = deletedDate;
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
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getUserId() {
//        return userId;
//    }
//
//    public void setUserId(String userId) {
//        this.userId = userId;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPhone() {
//        return phone;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//
//    public String getProfileImgSrc() {
//        return profileImgSrc;
//    }
//
//    public void setProfileImgSrc(String profileImgSrc) {
//        this.profileImgSrc = profileImgSrc;
//    }
//
//    public String getCertification() {
//        return certification;
//    }
//
//    public void setCertification(String certification) {
//        this.certification = certification;
//    }
//
//    public Date getJoinDate() {
//        return joinDate;
//    }
//
//    public void setJoinDate(Date joinDate) {
//        this.joinDate = joinDate;
//    }
//
//    public String getDeleted() {
//        return deleted;
//    }
//
//    public void setDeleted(String deleted) {
//        this.deleted = deleted;
//    }
//
//    public Date getDeletedDate() {
//        return deletedDate;
//    }
//
//    public void setDeletedDate(Date deletedDate) {
//        this.deletedDate = deletedDate;
//    }
//
//    @Override
//    public String toString() {
//        return "User{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", userId='" + userId + '\'' +
//                ", password='" + password + '\'' +
//                ", email='" + email + '\'' +
//                ", phone='" + phone + '\'' +
//                ", profileImgSrc='" + profileImgSrc + '\'' +
//                ", certification='" + certification + '\'' +
//                ", joinDate=" + joinDate +
//                ", deleted='" + deleted + '\'' +
//                ", deletedDate=" + deletedDate +
//                '}';
//    }
//}
