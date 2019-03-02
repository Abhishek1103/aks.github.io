var invites = ['W A R L O R D']
var ind=0;
var inv_size=invites.length;
function printit() {
    $("#replaceStrings").html(invites[ind]);
    ind=(ind+1)%inv_size;
    $('#replaceStrings').typeIt({
        // breakLines: false,
        speed: 100,
        // deleteDelay: 1200,
        autoStart: true,
        // loop: true,
        // loopDelay: 1500
    });
    setTimeout(printit, 3000);
}
$(document).ready(printit());