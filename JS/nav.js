const toggleBtn = document.querySelector('.more-btn');
const menu = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active')
  menu.classList.toggle('active')
})