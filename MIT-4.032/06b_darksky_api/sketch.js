var census;
var request;
function setup(){

    createCanvas(600,600);
    var census = new CensusModule("142de4ffc92b5c62d65c734c57dc7cdb293a8b7a"); 
    var request = {
        "level": "state",
        "state": "AK",
        "sublevel": true,
        "variables": [
            "B24124_407E",
            "age",
            "commute_time",
            "commute_time_carpool",
            "commute_time_other"
        ]
    }

// Make the request
    census.geoRequest(request, callback);
    census.apiRequest(request, callback);

}

function callback(response) {
        // Do something with the response
};


