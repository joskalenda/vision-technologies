import renderTech from './homeRender.js';
import createPopup from './popup_comment.js';

const getTechs = async () => {
  const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
  response.json().then((json) => {
    renderTech(json);
    createPopup(json);
  });
};

export default getTechs;


//  set up api for likes and comments
export default async (id, user, comment) => {
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
    // const list = document.querySelector('.comment-list');
    if (!data.length) {
      comment.innerHTML = 'No comment found !'
    } else {
      data.forEach((data) => {
        date.innerHTML += `${data.creation_date} |`;
        name.innerHTML +=`${data.username} :`;
        comment.innerHTML +=`${data.comment}`;
      // list.innerHTML += `<p><small>${d.creation_date}</small> | <span>${d.username}:</span> ${d.comment}</p>`;
    });
  }
};