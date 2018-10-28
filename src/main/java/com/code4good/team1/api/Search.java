package com.code4good.team1.api;

import org.springframework.web.bind.annotation.*;

@RestController
public class Search {

    @GetMapping("search")
    @ResponseBody
    public String getActivities(@RequestParam(name = "searchTerm", required = false, defaultValue = "Stranger") String searchTerm) {

        //MOCK
        return "{\n" +
                "\t{\n" +
                "\t\t“name”:”aaaa”,\n" +
                "\t\t“description”:”xxxxxxxxxxxx”,\n" +
                "\t\t“mapFlag”:”false”,\n" +
                "\t\t“lat”:”0.0”,\n" +
                "\t\t“lng”:”0.0”\n" +
                "\t},\n" +
                "\t{\n" +
                "\t\t“name”:”bbbb”,\n" +
                "\t\t“description”:”xxxxxxxxxxxx”,\n" +
                "\t\t“mapFlag”:”false”,\n" +
                "\t\t“lat”:”0.0”,\n" +
                "\t\t“lng”:”0.0”\n" +
                "\t},\n" +
                "\t{\n" +
                "\t\t“name”:”cccc”,\n" +
                "\t\t“description”:”xxxxxxxxxxxx”,\n" +
                "\t\t“mapFlag”:”false”,\n" +
                "\t\t“lat”:”0.0”,\n" +
                "\t\t“lng”:”0.0”\n" +
                "\t}\n" +
                "}";
    }
}
