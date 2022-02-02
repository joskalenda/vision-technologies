export const createPopup = (object) => {
  const popupCard = document.createElement('li');
  const container = document.querySelector('.pop--container');
  container.innerHTML = ''
  popupCard.classList.add('popup--card');
  popupCard.id = object.id;
  popupCard.innerHTML = `
    <p id="close">Xlose</p>
    <div class="pop--img">
      <img src="${object.image.img}" alt="${object.image.altText}">
    </div>
    <h3 class="pop--tit">${object.name}</h3>
    <p class="pop--des">${object.description}</p><hr>
    <div class="see--comment" >
      <p class="count--com">Commment {0}</p>
      <div>
        <p class="date">date</p>
        <p class="name">name</p>
        <p class="comment">comment</p>
      </div>
    </div><hr>
    <div class="pop--put">
      <h3>Leave a Comment !</h3>
      <p class="error" >display error</p>
      <input type="text" placeholder="Inter your name" maxlength="15">
      <input class="insight" type="text" placeholder="Enter your insigths">
      <button type="button">Comment</button>
    </div>`;

    return popupCard;
};
