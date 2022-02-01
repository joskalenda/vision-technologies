import './style.css';
const htmls = document.getElementsByTagName('html')[0];
import { projects, createPopup } from './popup_comment.js';

const popupContainer = document.querySelector('.pop--container');
const overLay = document.querySelector('.over--lay');

projects.forEach((project) => {
  const popupCard = createPopup(project);
  popupContainer.appendChild(popupCard);
});

const buttons = document.querySelectorAll('.comment');
const closeButtons = document.querySelectorAll('#close');

console.log(closeButtons);

// Display popup
buttons.forEach((button) => {
  const currentModal = document.getElementById(button.classList[1]);
  button.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
    currentModal.classList.add('active');
    htmls.style.overflow = 'hidden';
  });
});

// remove popup
closeButtons.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    document.querySelector('.pop--containter.active').classList.remove('active');
    popupContainer.style.display = 'none';
    overLay.style.display = 'none'
    htmls.style.overflow = 'auto';
  });
});

