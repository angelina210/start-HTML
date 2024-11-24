$(document).ready(function () {
    // Приховати текст
    $('#hideButton').click(function () {
        $('#contentText').hide();
    });

    // Показати текст
    $('#showButton').click(function () {
        $('#contentText').show();
    });

    // Перемикач (відображення/приховування тексту)
    $('#toggleButton').click(function () {
        $('#contentText').toggle();
    });
});
