$(function () {
    $('input[type="text"], input[type="password"], input[type="email"]').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
            .attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });

});

var inputPass1 = document.getElementById('pass1'),
    icon1 = document.getElementById('icon1');

icon1.onclick = function () {

    if (inputPass1.className == 'active') {
        inputPass1.setAttribute('type', 'text');
        icon1.className = 'fa fa-eye';
        inputPass1.className = '';

    } else {
        inputPass1.setAttribute('type', 'password');
        icon1.className = 'fa fa-eye-slash';
        inputPass1.className = 'active';
    }
}

var inputPass2 = document.getElementById('pass2'),
    icon2 = document.getElementById('icon2');

icon2.onclick = function () {

    if (inputPass2.className == 'active') {
        inputPass2.setAttribute('type', 'text');
        icon2.className = 'fa fa-eye';
        inputPass2.className = '';

    } else {
        inputPass2.setAttribute('type', 'password');
        icon2.className = 'fa fa-eye-slash';
        inputPass2.className = 'active';
    }
}
    