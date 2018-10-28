function loadSearchTerms(){
    console.log("Search terms loaded");
    var searchTerms = document.getElementById("searchTerms");

    searchTerms.innerHTML = "<p>Showing search results for \"leaves init\"";
}

function loadActivityList(){
    console.log("Activity List loaded");
    var activityList = document.getElementById("activityList");

    activityList.innerHTML = "<ul>" +
        "<li>Leaf</li>" +
        "<li>2 Leafs</li>" +
        "</ul>"
}