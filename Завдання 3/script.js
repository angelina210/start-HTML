document.getElementById("showInfo").addEventListener("click", function () {
    // Отримуємо значення полів вводу
    const name = document.getElementById("name").value.trim();
    const weight = parseFloat(document.getElementById("weight").value);
    const color = document.getElementById("color").value.trim();
    const age = parseInt(document.getElementById("age").value, 10);

    // Перевірка на валідність введених даних
    if (!name || isNaN(weight) || !color || isNaN(age)) {
        alert("Будь ласка, заповніть всі поля правильно!");
        return;
    }

    // Об'єкт кота
    const cat = {
        name: name,
        weight: weight,
        color: color,
        age: age,
        say_meu: function () {
            return "Мяу!";
        }
    };

    // Формування результату
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <strong>Інформація про кота:</strong><br>
        Ім'я: ${cat.name}<br>
        Вага: ${cat.weight} кг<br>
        Колір: ${cat.color}<br>
        Вік: ${cat.age} роки<br>
        Звук кота: ${cat.say_meu()}
    `;
    resultDiv.style.display = "block";

    // Вивід у консоль
    console.log("Ім'я:", cat.name);
    console.log("Вага:", cat.weight);
    console.log("Колір:", cat.color);
    console.log("Вік:", cat.age);
    console.log("Звук кота:", cat.say_meu());
});
