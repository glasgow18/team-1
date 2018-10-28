package com.code4good.team1.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;

@Entity
@Table(name = "tags")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    @JsonFormat
    @Column
    public String tag;

    public Tag(String tag) {
        this.tag = tag;
    }

    public Tag() {
    }

}
