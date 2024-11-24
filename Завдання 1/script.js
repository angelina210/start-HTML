$(document).ready(function () {
    $('#calculatorForm').on('submit', function (event) {
        event.preventDefault(); // Зупиняємо стандартну дію форми
        
        // Отримання значень з полів вводу
        const number1 = parseFloat($('#number1').val());
        const number2 = parseFloat($('#number2').val());
        const operation = $('#operation').val();
        let result;

        // Виконання математичних операцій
        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                result = number2 !== 0 ? (number1 / number2).toFixed(2) : 'Помилка: ділення на нуль!';
                break;
            default:
                result = 'Невідома операція';
        }

        // Виведення результату
        $('#resultValue').html(result);
    });
});
