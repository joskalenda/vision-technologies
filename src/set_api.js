import renderTech from './homeRender.js';
import createPopup from './popup_comment.js';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/articles';
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const commentsUrl = '/apps/Tl04OrbFyu6fxKeYxZ5Q/comments';
const likesUrl = '/apps/Uinv3HFYXneji5y5pk1g/likes';

export const getTechs = async () => {
  const response = await fetch(`${BASE_URL}`);
  response.json().then((json) => {
    renderTech(json);
    createPopup(json);
  });
};

export const CreatComment = async (id, user, comment) => {
  fetch(`${involvementApi}${commentsUrl}`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment,
    }),
  },
  );
};

const ShowComment = (comment) => {
  
  if (!comment.length) {
    const comment_par = document.querySelector('.no_comment');
    comment_par.innerHTML = 'No comment found !';
  } else {
    let div_com_par = document.getElementById('comm-div');
    comment.forEach((comment) => {
      div_com_par.innerHTML += `<p> <span class="date">${comment.creation_date}</span> <span class="name">${comment.username}</span> <span class="comment"> ${comment.comment}</span></p>`;
    
    });
  }
};

export const CommentCounter = (comment) => {
  if (comment.length) {
    const counter_com = document.querySelector('.count--com');
    counter_com.innerHTML += `Comments (${comment.length})`;
  }
};

export const getComments = async (incomingItemId) => {
  const request = await fetch(`${involvementApi}${commentsUrl}?item_id=${incomingItemId}`);
  const tech = await request.json();
  ShowComment(tech);
  CommentCounter(tech);
};
