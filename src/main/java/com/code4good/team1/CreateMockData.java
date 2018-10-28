package com.code4good.team1;

import com.code4good.team1.pojo.Activity;
import com.code4good.team1.pojo.Tag;
import com.code4good.team1.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CreateMockData {

    @Autowired
    private ActivityService actServ;

    public CreateMockData() {
    }

    //String name, String description, boolean mapFlag, double lat, double lng, List<Comment> comments, List<Tag> tags
    public void generate() {

        List<Tag> tagsA = new ArrayList<>();
        List<Tag> tagsB = new ArrayList<>();
        List<Tag> tagsC = new ArrayList<>();
        List<Tag> tagsD = new ArrayList<>();
        List<Tag> tagsE = new ArrayList<>();

        tagsA.add(new Tag("Grass"));
        tagsA.add(new Tag("Green"));
        tagsA.add(new Tag("Sound"));

        tagsB.add(new Tag("Sky"));
        tagsB.add(new Tag("Blue"));
        tagsB.add(new Tag("Water"));

        tagsC.add(new Tag("Table"));
        tagsC.add(new Tag("Laptop"));
        tagsC.add(new Tag("Juice"));

        tagsD.add(new Tag("Phone"));
        tagsD.add(new Tag("People"));
        tagsD.add(new Tag("Picture"));

        tagsE.add(new Tag("Pen"));
        tagsE.add(new Tag("Leaves"));
        tagsE.add(new Tag("Puddle"));

        actServ.createActivity(new Activity("Alpha", "cool description of alpha", false, 1.0, 0.3, new ArrayList<>(), new ArrayList<>(tagsA)));
        actServ.createActivity(new Activity("Bravo", "cool description of bravo", true, 0.0, 0.0, new ArrayList<>(), new ArrayList<>(tagsA)));
        actServ.createActivity(new Activity("Charlie", "cool description of charlie", false, 9.0, 2.0, new ArrayList<>(), new ArrayList<>(tagsA)));
        actServ.createActivity(new Activity("Delta", "cool description of delta", true, 10.0, 0.0, new ArrayList<>(), new ArrayList<>(tagsB)));
        actServ.createActivity(new Activity("Echo", "cool description of echo", false, 0.1, 0.05, new ArrayList<>(), new ArrayList<>(tagsB)));
        actServ.createActivity(new Activity("Foxtrot", "cool description of foxtrot", true, 0.0, 06.06, new ArrayList<>(), new ArrayList<>(tagsC)));
        actServ.createActivity(new Activity("Golf", "cool description of golf", false, 0.60, 07.0, new ArrayList<>(), new ArrayList<>(tagsC)));
        actServ.createActivity(new Activity("Hotel", "cool description of hotel", true, 9.0, 0.0, new ArrayList<>(), new ArrayList<>(tagsC)));
        actServ.createActivity(new Activity("Indigo", "cool description of indigo", false, 0.0, 0.0, new ArrayList<>(), new ArrayList<>(tagsC)));
        actServ.createActivity(new Activity("Juliet", "cool description of juliet", true, 3.0, 0.0, new ArrayList<>(), new ArrayList<>(tagsD)));
        actServ.createActivity(new Activity("Kilo", "cool description of kilo", false, 0.4, 7.0, new ArrayList<>(), new ArrayList<>(tagsD)));
        actServ.createActivity(new Activity("Lima", "cool description of lima", true, 0.7, 0.0, new ArrayList<>(), new ArrayList<>(tagsD)));
        actServ.createActivity(new Activity("Mike", "cool description of mike", false, 3.0, 0.0, new ArrayList<>(), new ArrayList<>(tagsD)));
        actServ.createActivity(new Activity("November", "cool description of november", true, 1.0, 0.0, new ArrayList<>(), new ArrayList<>(tagsE)));
        actServ.createActivity(new Activity("Oscar", "cool description of oscar", false, 0.0, 0.8, new ArrayList<>(), new ArrayList<>(tagsE)));


    }

}
