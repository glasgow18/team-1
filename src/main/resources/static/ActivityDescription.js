//var json = '{"id": 1,"nameOb": "Kicking  Crunching Leaves","description": "Plenty of crunchy leaves to be kicked around and stamped on","mapFlag": false,"lat": 28,"long": 30,"commento": ["Colin luvs it", "The sound is amazing!"],"tags": ["sound", "leaves", "outside","autumn"]}'
var json = '{"id": 2,"nameOb": "National Museum of Scotland","description": "The museum has so much to do, so many different topics! Whole day event and kept us entertained for hours","mapFlag": true,"lat": 55.9471904,"long": -3.1913566,"commento": ["Easy parking and wheelchair access", "Staff are so kind and helpful"],"tags": ["groups", "touch", "sound","inside"]}'

var content = JSON.parse(json);
content.toString();
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




document.getElementById("h4Name").innerHTML = nameOf;
document.getElementById("activityDescription").innerHTML = description;


for(var comment in content.commento){
    document.getElementById("reviews").innerHTML += "<p> "+ comments[comment] + " <button>Report comment as unhelpful</button><button>Like</button></p>";
}

for(var tag in content.tags) {
    document.getElementById("tags").innerHTML += "<p>" + tags[tag] + " </p>";
}

function checkInput(){

    console.log(document.getElementById("commentID").value);
    if(document.getElementById("commentID").value.contains("bad")){
        console.log(document.getElementById("commentID").value);

        alert("Your comment has been forwarded to admin as it contains negative language");
    }
}