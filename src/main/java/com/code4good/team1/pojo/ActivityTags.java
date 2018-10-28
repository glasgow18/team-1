package com.code4good.team1.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;

@Entity
@Table(name = "activitytags")
public class ActivityTags {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    @Column
    public int activityID;

    @Column
    public int tagID;

    public ActivityTags(int activityID, int tagID) {
        this.activityID = activityID;
        this.tagID = tagID;
    }

    public ActivityTags() {
    }

}
