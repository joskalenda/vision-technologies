import createPopup from './popup_comment.js';
import { getComments, CommentCounter, ShowComment } from './set_api.js';
import { getLikes, postLike } from './card_like.js';

const renderTech = async (technologies) => {
  const ul = document.querySelector('.vission-tech');
  ul.innerHTML = '';
  const totalTechnologies = document.querySelector('.total');
  const slicedTechnologies = technologies.slice(0, 9);
  totalTechnologies.innerHTML += `[ ${slicedTechnologies.length} ]`;
  const listOfLikes = await getLikes();
  slicedTechnologies.forEach((tech) => {
    const cardDiv = document.createElement('div');
    const clickedItem = listOfLikes.find((e) => tech.id === +e.item_id);
    let count = clickedItem?.likes || 0;
    cardDiv.innerHTML = `<li id="${tech.id}" class="bg-white w100 d-flex-2">
    <div class="w100 d-flex-2">
    <div class="li-images"><img class="img" src="${tech.imageUrl}"></div>
    <div class="body space-between w100 d-flex-2">
    <h3 class="ff-4 mr-ii">${tech.title.length < 50 ? tech.title : `${tech.title.substring(0, 50)}....`}</h3>
    <p class="des ff-4 mr-ii">${tech.summary.length < 100 ? tech.summary : `${tech.summary.substring(0, 100)}...`}</p>
    <div class="like ff-4 flex gap">
    <i id="${tech.id}" class="far fa-heart like-heart"></i>
    <span id="${tech.id}" class="likes-counter">${count} Likes</span>
    </div>
    <div class="btn-container mr-ii">
    <button data-id="${tech.id}" type="button" class="ff-4 card-btn btn comments color-white">comments</button>
    </div>
    </div>
    </div>
    </li>`;

    const heartIcon = cardDiv.querySelector('.like-heart');
    heartIcon.addEventListener('click', async () => {
      const likeCounter = cardDiv.querySelector('.likes-counter');
      count += 1;
      await postLike(heartIcon.id, count);
      likeCounter.innerHTML = `${count} Likes`;
    });
    ul.appendChild(cardDiv);
  });

  document.querySelectorAll('.card-btn').forEach((cardBtn, i) => {
    cardBtn.addEventListener('click', async () => {
      const popupContainer = document.querySelector('.pop--container');
      popupContainer.classList.add('active');
      createPopup(technologies[i]);

      const tech = await getComments(technologies[i].id);
      ShowComment(tech);
      CommentCounter(tech);
    });
  });
};

export default renderTech;
