var json = '{"id": 1,"nameOb": "Kicking Leaves","description": "Kicking leaves for people who like kicking leaves","mapFlag": false,"lat": 28,"long": 30,"commento": ["Colin luvs it", "Very nice"],"tags": ["sound", "leaves", "outside"]}'
var content = JSON.parse(json);
content.toString();
console.log(content.mapFlag);
console.log(content.nameOb);
console.log(content.description);
var nameOf = content.nameOb;
var description = content.description;
var lat = content.lat;
var long = content.long;
var comments = content.commento;
var mapFlag = content.mapFlag;
var tags = content.tags;



if(mapFlag==false){
    document.getElementById("map").style.height = '0';
    document.getElementById("map").style.width = '0';

}

function initMap() {
    if (mapFlag == true) {
        var uluru = {lat: lat, lng: long};

        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 14, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
    }
}

document.getElementById("h4Name").innerHTML = nameOf;
document.getElementById("activityDescription").innerHTML = description;


for(var comment in content.commento){
    document.getElementById("reviews").innerHTML += "<p> "+ comments[comment] + " <button>Report comment as unhelpful</button></p>";
}

for(var tag in content.tags) {
    document.getElementById("tags").innerHTML += "<p>" + tags[tag] + " </p>";
}