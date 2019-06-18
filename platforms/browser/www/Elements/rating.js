function getStars() {
    $('.num').each(function () {
        var html = $(this).html();
        console.log(html.split("/5"));
    })
}

getStars();