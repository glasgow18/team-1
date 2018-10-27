package com.code4good.team1.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "activities")
public class Activity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    @JsonFormat
    @Column(name = "name", nullable = false)
    public String name;

    @JsonFormat
    @Column(name = "description", nullable = false)
    public String description;

    @JsonFormat
    @Column(name = "mapFlag", nullable = false)
    public boolean mapFlag;

    @JsonFormat
    @Column(name = "lat", nullable = false)
    public double lat;

    @JsonFormat
    @Column(name = "lng", nullable = false)
    public double lng;

    @JsonFormat
    @OneToMany(cascade = CascadeType.ALL)
    public List<Comment> comments;

    @JsonFormat
    @OneToMany(cascade = CascadeType.ALL)
    public List<Tag> tags;


    public Activity() {

    }

    public Activity(String name, String description, boolean mapFlag, double lat, double lng, List<Comment> comments, List<Tag> tags) {
        this.name = name;
        this.description = description;
        this.mapFlag = mapFlag;
        this.lat = lat;
        this.lng = lng;
        this.comments = comments;
        this.tags = tags;
    }

}
