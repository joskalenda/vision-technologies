import './style.css';
import './css/reset.css';
import './css/style.css';
import j from './assets/jos.jpeg';
import z from './assets/zieeco.jpeg';
import render, { technologies } from './homeRender.js';
import { createPopup } from './popup_comment.js';

const htmls = document.getElementsByTagName('body');
const popupContainer = document.querySelector('.pop--container');

technologies.forEach((project) => {
  const popupCard = createPopup(project);
  popupContainer.appendChild(popupCard);
});

const buttons = document.querySelectorAll('.comment');
const closeButtons = document.querySelectorAll('#close');

// console.log(closeButtons);

// Display popup
buttons.forEach((button) => {
  const currentModal = document.getElementById(button.classList[0]);
  console.log(currentModal);
  // button.addEventListener('click', () => {
  //   popupContainer.style.display = 'flex';
  //   currentModal.classList.add('active');
  //   htmls.style.overflow = 'hidden';
  // });
});

// remove popup
closeButtons.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    document.querySelector('.pop--container.active').classList.remove('active');
    popupContainer.style.display = 'none';
    htmls.style.overflow = 'auto';
  });
});

const icon1 = document.querySelector('.img-icon1');
const icon2 = document.querySelector('.img-icon2');

icon1.innerHTML += `<img class="jos-ziee" src="${j}" alt="zieeco">`;
icon2.innerHTML += `<img class="jos-ziee" src="${z}" alt="jos">`;

render();

