$(document).ready(function () {
    $('.HTMLcomponent').each(function () {
        var path = $(this).attr('insert-component');
        $(this).load(path);
    });
});