
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы

      const userInput = document.querySelector('.form__input').value.trim(); // Получаем значение поля ввода и удаляем лишние пробелы

      if (userInput !== '') { // Проверяем, что поле не пустое
        alert('Відгук успішно опублікований'); // Выводим сообщение об успешной отправке
      } else {
        alert('Будь ласка, заповніть поле вводу.'); // Выводим сообщение об ошибке
      }
    });
  });

  document.addEventListener('mousemove', function(event) {
    const eggs = document.querySelectorAll('.egg');
    eggs.forEach(function(egg) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      egg.style.left = mouseX + 'px';
      egg.style.top = mouseY + 'px';
    });
  });