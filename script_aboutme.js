var progressnumber = 76; // add percentage (0-100)

var convertedprogress = 250 - (progressnumber * 250) / 100;
$("#progressbar").css('stroke-dashoffset', ' ' + convertedprogress + '%');
$("#percentageNumber").html(' ' + progressnumber + '%');

/* fix for 0% */
if(progressnumber == 0) {
    $("#progressbar").css('stroke-dashoffset', '251%');
}

//for colours - remove below if you want one color-
if (progressnumber <= 33) {
    $("#progressbar").css('stroke', '#f50303');
    $("#percentageNumber").css('color', '#f50303');
} else if (progressnumber >= 34 && progressnumber <= 50) {
    $("#progressbar").css('stroke', '#ffc107');
    $("#percentageNumber").css('color', '#ffc107');
} else if (progressnumber >= 51 && progressnumber <= 75) {
    $("#progressbar").css('stroke', '#ffc107');
    $("#percentageNumber").css('color', '#ffc107');
} else {
    $("#progressbar").css('stroke', '#4caf50');
    $("#percentageNumber").css('color', '#4caf50');
}