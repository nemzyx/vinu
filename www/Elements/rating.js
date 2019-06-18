function createStars() {
    $('.num').each(function (i) {
        var html = $(this).html();
        var split = html.split(/\n| /);
        var output = "";
        split.forEach(function (elem) {
            if (!elem == "") {
                output = elem;
            }
        });
        output.split("/");
        var starCount = output[0];
        $(".stars").each(function (e) {
            if (e == i) {
                $(this).html("[Insert " + starCount + " stars here]");
            }
        });
    });
}

createStars();