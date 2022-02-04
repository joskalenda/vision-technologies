import renderTech from './homeRender.js';
import createPopup from './popup_comment.js';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/articles';
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const commentsUrl = '/apps/Tl04OrbFyu6fxKeYxZ5Q/comments';
// const likesUrl = '/apps/Uinv3HFYXneji5y5pk1g/likes';

export const getTechs = async () => {
  const response = await fetch(`${BASE_URL}`);
  response.json().then((json) => {
    renderTech(json);
    createPopup(json);
  });
};

export const addComment = async (id, user, comment) => {
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

const ShowComment = (data) => {
  
  if (!data.length) {
    const comment_par = document.querySelector('.no_comment');
    comment_par.innerHTML = 'No comment found !';
  } else {
    data.forEach((data) => {
      let div_com_par = document.getElementById('comm-div');
      div_com_par += `<p> <span class="date">${data.creation_date}</span> <span class="name">${data.username}</span> <span class="comment"> ${data.comment}</span></p>`;
    });
  }
};

export const CommentCounter = (data) => {
  if (data.length) {
    const counter_com = document.querySelector('.count--com');
    counter_com.innerHTML += `Comments (${data.length})`;
  }else {counter_com.innerHTML = '';}
};

export const getComments = async (incomingItemId) => {
  const request = await fetch(`${involvementApi}${commentsUrl}?item_id=${incomingItemId}`);
  const data = await request.json();
  ShowComment(data);
  CommentCounter(data);
};
