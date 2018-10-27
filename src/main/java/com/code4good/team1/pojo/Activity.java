package com.code4good.team1.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonAppend;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import static org.springframework.data.repository.init.ResourceReader.Type.JSON;

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

    @JsonFormat
    @Column(name = "name", nullable = false)
    public String name;

    @JsonFormat
    @Column(name = "mapFlag", nullable = false)
    public boolean mapFlag;

    @JsonFormat
    @Column(name = "lat", nullable = false)
    public double lat;

    @JsonFormat
    @Column(name = "lng", nullable = false)
    public double lng;

//    public List<Comment> comments;

//    @Column(name = "tags", nullable = false)
//    public List<String> tags;

}
