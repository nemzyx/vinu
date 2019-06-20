function setProfile(input) {
    $(".wineProfile").each(function () {
        $(this).each(function () {
            $(this).children('.stat').each(function (i) {
                var statmeter = $(this).find(".statmeter").find(".container").children(".bar");
                $(statmeter).each(function (e) {
                    var bar = $(this);
                    if (e < input[i]) {
                        bar.addClass('lit');
                    }
                });
            });
        });
    });
}

setProfile([2, 4, 3, 4, 5]);