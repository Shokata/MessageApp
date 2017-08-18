$(() => {
    $('.content').hide();
    $('h3').bind('click', function () {
        $(this).next().toggle('slow');
    });
});
