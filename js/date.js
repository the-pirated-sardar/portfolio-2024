// dateScript.js
function displayDate() {
    var date = new Date();
    var day = date.getDate();
    
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var suffixNames = ["st", "nd", "rd"];

    var month = monthNames[date.getMonth()];
    var suffix = "th";
    if (day%10 > 0 && day%10 < 4 && day != 11 && day != 12 && day != 13){
        suffix = suffixNames[day%10 - 1];
    }
    var year = date.getFullYear();
    
    document.getElementById("currentDate").innerHTML = day + suffix + " " + month + " " + year;
}
