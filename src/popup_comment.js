export const createPopup = (object) => {
  const popupCard = document.createElement('li');
  const container = document.querySelector('.pop--container');
  container.innerHTML = '';
  popupCard.classList.add('popup--card');
  popupCard.id = object.id;
  popupCard.innerHTML = `
    <p id="close">Xlose</p>
    <div class="pop--img">
      <img src="${object.image.img}" alt="${object.image.altText}">
    </div>
    <h3 class="pop--tit">${object.name}</h3>
    <p class="pop--des">${object.description}</p><hr>
    <div class="see--comment">
    <div>
    <p class="count--com"></p>
      <p class="date"></p>
      <p class="name"></p>
      <p class="comment"></p>
    </div>
    </div><hr>
    <form>
      <div class="pop--put">
        <h3>Leave a Comment !</h3>
        <p class="error" >display error</p>
        <input id ="usernameInput" type="text" placeholder="Inter your name" maxlength="15">
        <input id = "commentInput" class="insight" type="text" placeholder="Enter your insigths">
        <button id= "btn" type="submit">Comment</button>
      </div>
    </form>`;

  return popupCard;
};
