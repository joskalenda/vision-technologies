import './style.css';
import './css/reset.css';
import './css/style.css';
import j from './assets/jos.jpeg';
import z from './assets/zieeco.jpeg';
import { getTechs } from './set_api.js';

const icon1 = document.querySelector('.img-icon1');
const icon2 = document.querySelector('.img-icon2');

icon1.innerHTML += `<img class="jos-ziee" src="${j}" alt="zieeco">`;
icon2.innerHTML += `<img class="jos-ziee" src="${z}" alt="jos">`;

window.addEventListener('load', getTechs);
