var x = false;
$(document).ready(function () {
    $('div').click(function () {
        if (!x) {
            $(this).toggleClass('user1');
            x = true;
        } else {
            $(this).toggleClass('user2');
            x = false;
        }
    });
    $('button').click(function () {
        $('div').toggleClass('newgame');
    });

});
