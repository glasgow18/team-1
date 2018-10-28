function addActivity(){
    var aName = document.getElementById("activityName").value;
    var aDescription = document.getElementById("activityDescription").value;
    var aMapFlag = true
    var aLat = 40;
    var aLong = 20;


    if (name!=""){
        const submit = JSON.stringify({
            name: aName,
            description: aDescription,
            mapFlag: aMapFlag,
            lat: aLat,
            long: aLong
        });

        const URL = "localhost:8080/addActivity";

        fetch(URL, {
            method: "PUT",
            body: submit,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(response => console.log('Success', JSON.stringify(response)))
            .catch(error => console.error('Errors:', error));
    }
}