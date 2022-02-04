const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/articles';
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const commentsUrl = '/apps/Tl04OrbFyu6fxKeYxZ5Q/comments';
// const likesUrl = '/apps/Uinv3HFYXneji5y5pk1g/likes';

export const getTechs = async () => {
  const response = await fetch(`${BASE_URL}`);
  return response.json();
};

export const addComment = async (id, user, comment) => {
  await fetch(`${involvementApi}${commentsUrl}`,
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
    });
};

export const ShowComment = (comment) => {
  if (!comment.length) {
    const commentPar = document.querySelector('.no_comment');
    commentPar.innerHTML = 'No comment found !';
  } else {
    const divComPar = document.getElementById('comm-div');
    comment.forEach((comment) => {
      divComPar.innerHTML += `<p> <span class="date">${comment.creation_date}</span> <span class="name">${comment.username}</span> <span class="comment"> ${comment.comment}</span></p>`;
    });
  }
};

export const CommentCounter = (comment) => {
  if (comment.length) {
    const CounterCom = document.querySelector('.count--com');
    CounterCom.innerHTML += `Comments (${comment.length})`;
  }
};

export const getComments = async (incomingItemId) => {
  const request = await fetch(`${involvementApi}${commentsUrl}?item_id=${incomingItemId}`);
  const tech = await request.json();
  return tech;
};
