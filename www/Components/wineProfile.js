function setProfile(input) {
    $("#wineProfile .statmeter .container").each(function (i) {
        $(this).children('.bar').each(function (e) {
            if (e < input[i]) {
                $(this).addClass('lit');
            }
        });
    });
}

setProfile([2, 4, 3, 4, 5]);