package com.code4good.team1.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;

@Entity
@Table(name = "comments")
public class Comment {

    @Column
    public int activityID;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    @JsonFormat
    @Column
    public String comment;

    public Comment(String comment) {
        this.comment = comment;
    }

    public Comment(int activityID, String comment) {
        this.activityID = activityID;
        this.comment = comment;
    }

    public Comment() {
    }
}
