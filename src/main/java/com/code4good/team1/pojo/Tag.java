package com.code4good.team1.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;

@Entity
@Table(name = "tags")
public class Tag {

    @Column
    private int activityID;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    @JsonFormat
    @Column
    public String tag;

    public Tag(int activityID, String tag) {
        this.activityID = activityID;
        this.tag = tag;
    }

    public Tag() {
    }

}
