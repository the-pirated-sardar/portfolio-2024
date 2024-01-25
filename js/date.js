// dateScript.js
function displayDate() {
    var date = new Date();
    var day = date.getDate();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    
    document.getElementById("currentDate").innerHTML = day + " " + month + " " + year;
}
