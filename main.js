var BATTLEPASS;
var CPCP;
var PL;

function STEP1() {
    $(".STEP-1").fadeOut(1000, function() {
        $(".STEP-2").fadeIn(1000).css("display", "flex");
    })
}

function STEP2() {
    if (!PL || $("#CODU").val() == "") {
        alert("Type in your username and select your platform.")
    } else {
        $(".EHH-1").fadeOut(1000, function() {
            $(".XD").addClass("justify-center");
            $(".EHH-2").fadeIn(1000);
        })
    }
}

function STEP3(Dx) {
    BATTLEPASS = Dx;
    $(".EHH-2").fadeOut(1000, function() {
        $(".XD").removeClass("justify-center");
        $(".EHH-3").fadeIn(1000);
    })
}

function STEP4() {

    if (CPCP) {

    $(".EHH-3").fadeOut(1000, function() {

        $("#CPCP").text(CPCP + " COD Points");

        if (BATTLEPASS) {
            $("#AND").text("and")
            $("#BPBP").text("Battle Pass")
        }

        $("#USUS").text($("#CODU").val());

        $(".FINAL").fadeIn(1000);

    })

    } else {
        alert("Select how much COD Points you want to get.")
    }

}

function PLATFORM(xD) {
    PL = $(xD).attr("id");

    $(".PL").addClass("duration-500");
    $(".PL").not(xD).removeClass("opacity-50").removeClass("opacity-100").addClass("opacity-25");
    $(xD).removeClass("opacity-50").removeClass("opacity-25").addClass("opacity-100");
}

function CODP(xD) {
    CPCP = $(xD).attr("name");
    //alert(CPCP);

    $(".COD").addClass("duration-500");
    $(".COD").not(xD).removeClass("opacity-50").removeClass("opacity-100").addClass("opacity-25");
    $(xD).removeClass("opacity-50").removeClass("opacity-25").addClass("opacity-100");
}