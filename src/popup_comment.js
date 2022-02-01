export const projects = [
  {
    id: 'project_1',
    images: {
      img: '.',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment'
    },
  },
  {
    id: 'project_2',
    images: {
      img: '.',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment'
    },
  },
  {
    id: 'project_3',
    images: {
      img: '.',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment'
    },
  },
  {
    id: 'project_4',
    images: {
      img: '.',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment'
    },
  },
  {
    id: 'project_5',
    images: {
      img: '.',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment'
    },
  },
  {
    id: 'project_6',
    images: {
      img: '.',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment'
    },
  },
];

export const createPopup = (object) => {
  const popupCard = document.createElement('li');
  popupCard.classList.add('popup--card');
  popupCard.id = object.id;
  popupCard.innerHTML = `
    <p id="close">Xlose</p>
    <div class="pop--img">
      <img src="${object.images.img}" alt="${object.images.altText}">
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