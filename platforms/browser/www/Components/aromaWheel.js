var frugt_hvidvin_col = "rgba(0, 117, 185, ";
var frugt_roedvin_col = "rgba(255, 61, 97, ";
var blomster_col = "rgba(162, 147, 161, ";
var urter_col = "rgba(255, 130, 66, ";
var groent_col = "rgba(0, 152, 189, ";
var mineral_slash_jord_col = "rgba(161, 144, 0, ";
var microbiel_col = "rgba(0, 66, 112, ";
var eg_toende_krydderier_col = "rgba(96, 82, 95, ";
var eg_toende_toast_col = "rgba(175, 0, 53, ";
var eg_toende_trae_col = "rgba(184, 70, 26, ";
var eg_toende_noedder_col = "rgba(0, 92, 127, ";
var aeldre_roedvin_col = "rgba(91, 82, 0, ";
var aeldre_hvidvin_col = "rgba(0, 141, 195, ";
var vin_fejl_1_col = "rgba(255, 108, 123, ";
var vin_fejl_2_col = "rgba(183, 166, 155, ";
var vin_fejl_3_col = "rgba(255, 148, 80, ";
var vin_fejl_4_col = "rgba(0, 171, 200, ";

var current_col = "";


$('.wheel-widget #wheel path').each(function () {
    $(this).css("stroke", "rgba(255, 255, 255, 1)");
    $(this).css("strokeWidth", "0.5");
});

function rotateArray(ar) {
    var prev = null;
    var _rotatedInput = [];
    ar.forEach(function (item) {
        var current = item;
        if (prev == null) {
            item = ar[ar.length - 1];
        } else {
            item = prev;
        }
        prev = current;
        _rotatedInput.push(item);
    });
    return _rotatedInput;
}

function setAromaWheel(input) {
    var arrayShift = 66;
    var u = 0;
    for (u = 0; u < arrayShift; u++) {
        input = rotateArray(input);
    }

    index = 0;

    $('.wheel-widget #wheel .root').each(function () {
        lvl_1 = $(this).children();
        var lvl_1_obj = lvl_1[$(this).children().length - 1];
        //console.log("LEVEL 1 ____________________");
        //console.log(lvl_1_obj);

        $(this).children().each(function (i) {
            var lvl_2 = $(this).children();
            var lvl_2_obj = lvl_2[$(this).children().length - 1];
            if (i < lvl_1.length - 1) {
                //console.log("LEVEL 2 ____________________");
                //console.log(lvl_2_obj);
            }

            $(this).children().each(function (e) {
                var lvl_3_obj = $(this)[0];
                if (e < lvl_2.length - 1) {
                    //console.log("LEVEL 3 ____________________");
                    if (input[index] == true) {
                        //console.log(lvl_3_obj);
                        var id = lvl_1_obj.getAttribute("id");
                        setPaintColor(id);
                        lvl_3_obj.setAttribute("fill", current_col + "1)");
                    }
                    index += 1;
                }
            });
        });
    });

    $('.wheel-widget #wheel .root').each(function () {
        lvl_1 = $(this).children();
        var lvl_1_obj = lvl_1[$(this).children().length - 1];
        //console.log("LEVEL 1 ____________________");
        //console.log(lvl_1_obj);

        $(this).children().each(function (i) {
            var lvl_2 = $(this).children();
            var lvl_2_obj = lvl_2[$(this).children().length - 1];
            if (i < lvl_1.length - 1) {
                //console.log("LEVEL 2 ____________________");
                //console.log(lvl_2_obj);
            }

            $(this).children().each(function (e) {
                var lvl_3_obj = $(this)[0];
                if (e < lvl_2.length - 1) {
                    //console.log("LEVEL 3 ____________________");
                    if (lvl_3_obj.getAttribute("fill") != "none") {
                        var id = lvl_1_obj.getAttribute("id");
                        setPaintColor(id);

                        lvl_2_obj.setAttribute("fill", current_col + "1)");
                        lvl_1_obj.setAttribute("fill", current_col + "1)");
                    }
                }
            });
        });
    });
}

setAromaWheel([
    true, false, false, false, false, false, false, false, false, false, false, false, 
    false, true, true, true, false, false, true, false, true, false, false, false, 
    false, false, false, false, true, false, false, true, true, true, false, false, 
    false, false, true, false, false, false, false, true, false, false, false, false, 
    false, false, true, true, true, false, false, false, true, false, false, true, 
    true, false, true, false, true, false, false, false, true, false, true, false, 
    false, false, false, false, false, true, false, false, false, false, false, false, 
    false, false, false, false
]);

function setPaintColor(compare) {
    if (compare == "blomster") {
        current_col = blomster_col;
    }
    else if (compare == "urter") {
        current_col = urter_col;
    }
    else if (compare == "groent") {
        current_col = groent_col;
    }
    else if (compare == "mineral-slash-jord_1_") {
        current_col = mineral_slash_jord_col;
    }
    else if (compare == "microbiel") {
        current_col = microbiel_col;
    }
    else if (compare == "eg-toende-krydderier") {
        current_col = eg_toende_krydderier_col;
    }
    else if (compare == "eg-toende-toast") {
        current_col = eg_toende_toast_col;
    }
    else if (compare == "eg-toende-trae") {
        current_col = eg_toende_trae_col;
    }
    else if (compare == "eg-toende-noedder") {
        current_col = eg_toende_noedder_col;
    }
    else if (compare == "aeldre-roedvin") {
        current_col = aeldre_roedvin_col;
    }
    else if (compare == "aeldre-hvidvin") {
        current_col = aeldre_hvidvin_col;
    }
    else if (compare == "vin-fejl-1") {
        current_col = vin_fejl_1_col;
    }
    else if (compare == "vin-fejl-2") {
        current_col = vin_fejl_2_col;
    }
    else if (compare == "vin-fejl-3") {
        current_col = vin_fejl_3_col;
    }
    else if (compare == "vin-fejl-4") {
        current_col = vin_fejl_4_col;
    }
    else if (compare == "frugt-hvidvin") {
        current_col = frugt_hvidvin_col;
    }
    else if (compare == "frugt-roedvin") {
        current_col = frugt_roedvin_col;
    }
    else {
        current_col = "rgba(255, 255, 255, ";
    }
}

$('.aromaWheel > .btn').click(function () {
    openWheel();
});

$('.wheel-widget > #exit').click(function () {
    exitWheel();
});


function openWheel() {
    $('.aromaWheel > .wheel-widget').css("display", "initial");
}

function exitWheel() {
    $('.aromaWheel > .wheel-widget').css("display", "none");
}

var touchInit = 0;
var initRotOffset = 0;

$('.aromaWheel .wheel-widget #wheelHTML').on('touchstart', function (e) {
    e.preventDefault();
    console.log("Touch started", e.changedTouches[0].clientY);
    touchInit = e.changedTouches[0].clientY;
    if ($(this)[0].style.transform != "") {
        str = $(this)[0].style.transform;
        var newStr = str.split("(");
        str = newStr[newStr.length - 1];
        newStr = str.split(")");
        str = newStr[0];
        initRotOffset = parseFloat(str);
        console.log(initRotOffset);
    }
});

$('.aromaWheel .wheel-widget #wheelHTML').on('touchmove', function (e) {
    e.preventDefault();
    currentTouch = e.changedTouches[0].clientY;
    delta = ((currentTouch - touchInit) / 2) + initRotOffset;
    $(this).css("transform", "translate(-50%, -50%) rotate(" + delta +"deg)");
});

$('.aromaWheel .wheel-widget #wheelHTML').on('touchend', function (e) {
    e.preventDefault();
    console.log("Touch ended");
});