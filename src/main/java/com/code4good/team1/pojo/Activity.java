package com.code4good.team1.pojo;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Activity implements Serializable {

    public Activity(String name, boolean mapFlag, double lat, double lng) {
        this.name = name;
        this.mapFlag = mapFlag;
        this.lat = lat;
        this.lng = lng;
//        this.comments = comments;
//        this.tags = tags;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    @Column(name = "name", nullable = false)
    public String name;

    @Column(name = "mapFlag", nullable = false)
    public boolean mapFlag;

    @Column(name = "lat", nullable = false)
    public double lat;

    @Column(name = "lng", nullable = false)
    public double lng;

//    public List<Comment> comments;

//    @Column(name = "tags", nullable = false)
//    public List<String> tags;

}
