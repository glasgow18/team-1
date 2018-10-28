function loadRecentActivities() {
    var recentActivitiesList = document.getElementById("recentActivitiesList");

    var json = '{"id": 1,"name": "Kicking Leaves","description": "Kicking leaves for people who like kicking leaves","mapFlag": true,"lat": 28,"long": 30,"comments": ["Colin luvs it", "Very nice"],"tags": ["sound", "leaves", "outside"]}';
    var content = JSON.parse(json);

    for (var comment in content.comments) {
        console.log(content.comments[comment]);
    }

    recentActivitiesList.innerHTML = "<table>" +
        "<tr>" +
            "<th>Name</th>" +
            "<th>Description</th>" +
        "</tr>" +
        "<tr>" +
            "<td>" +
            content.name +
            "</td>"+
            "<td>" +
            content.description +
            "</td>" +
        "</tr>" +
        "</table>"
}


