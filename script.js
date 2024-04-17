
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const userInput = document.querySelector('.form__input').value.trim(); 

      if (userInput !== '') { 
        alert('Відгук успішно опублікований'); 
      } else {
        alert('Будь ласка, заповніть поле вводу.'); 
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