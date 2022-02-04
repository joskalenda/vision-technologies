import { CreatComment } from "./set_api";

const newDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

const createPopup = (object) => {
  const popupCard = document.createElement('li');
  const container = document.querySelector('.pop--container');
  container.innerHTML = '';
  popupCard.classList.add('popup--card');
  popupCard.id = object.id;
  popupCard.innerHTML = `
    <p id="close"><i class="fas fa-times assets-color"></i></p>
    <div class="pop--img">
      <img src="${object.imageUrl}" alt="image_1">
    </div>
    <h3 class="pop--tit">${object.title}</h3>
    <p class="pop--des">${object.summary}</p><hr>
    <div class="see--comment">
      <p class="count--com"></p>
      <div id="comm-div">
        <p class="no_comment"></p>
      </div>
    </div><hr>
    <div class="pop--put">
      <h3>Leave a Comment !</h3>
      <p class="error" >display error</p>
      <input id ="usernameInput" type="text" placeholder="Inter your name" maxlength="15">
      <input id = "commentInput" class="insight" type="text" placeholder="Enter your insigths">
      <button id= "btn" type="button">Comment</button> 
    </div>
    `;
  container.appendChild(popupCard);

  const closeButtons = document.querySelector('#close');
  closeButtons.addEventListener('click', () => {
    document.querySelector('.pop--container.active').classList.remove('active');
  });
  const SubmitButton = document.getElementById('btn');
  // console.log(SubmitButton);

  SubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let div_com_par = document.getElementById('comm-div');
    CreatComment(object.id, usernameInput.value, commentInput.value);
    const comment_par = document.querySelector('.no_comment');
    if (comment_par.innerHTML === 'No comment found !') {
      comment_par.innerHTML = '';
    }
    div_com_par.innerHTML += `<p> <span class="date"> ${newDate()} </span> <span class="name"> ${usernameInput.value.trim()} </span> <span class="comment"> ${commentInput.value} </span></p> `;
  });

};



export default createPopup;