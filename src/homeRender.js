import neural from './assets/neural.jpeg';
import micro from './assets/micro.jpeg';
import robot from './assets/robot.jpeg';
import sofia from './assets/sofia.jpeg';
import constr from './assets/constr.jpeg';
import pro from './assets/pro.jpeg';
export const technologies = [

  {
    id: 'project_1',
    image: {
      img: neural,
      altText: 'project 1 preview image',
    },
    name: 'AI Injector',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error id nam eius iusto perferendis molestiae,',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment',
    },
  },
  {
    id: 'project_2',
    image: {
      img: sofia,
      altText: 'project 2 preview image',
    },
    name: 'Object oriented programming',
    description: 'Main principles of object-oriented programming are abstraction, encapsulation, inheritance, and polymorphism.',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment',
    },
  },
  {
    id: 'project_3',
    image: {
      img: constr,
      altText: 'project 3 preview image',
    },
    name: 'Constraction technology',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error id nam eius iusto perferendis molestiae,',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment',
    },
  },
  {
    id: 'project_4',
    image: {
      img: micro,
      altText: 'project 4 preview image',
    },
    name: 'proramming online School',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error id nam eius iusto perferendis molestiae,',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment',
    },
  },
  {
    id: 'project_5',
    image: {
      img: robot,
      altText: 'project 5 preview image',
    },
    name: 'Robot thechnology',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error id nam eius iusto perferendis molestiae,',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment',
    },
  },
  {
    id: 'project_6',
    image: {
      img: pro,
      altText: 'project 6 preview image',
    },
    name: 'Software devs jobs',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error id nam eius iusto perferendis molestiae,',
    comment: {
      user: 'topaz',
      insight: 'this the comment your comment',
    },
  },
];

const render = () => {
  const ul = document.querySelector('.vission-tech');
  ul.innerHTML = '';
  technologies.forEach((tech) => {
    ul.innerHTML += ` <li class="bg-white w100 d-flex-2">
              <div class="w100 d-flex-2">
                <div class="li-images"><img class="img" src="${tech.image.img}"></div>
                <div class="body w100 d-flex-2">
                  <h3 class="ff-4 mr-ii">${tech.name}</h3>
                  <p class="des ff-4 mr-ii">${tech.description}</p>
                  <div class="like ff-4 flex gap">
                    <i class="far fa-heart"></i>
                    <span class="counter">0 Likes</span>
                  </div>
                  <div class="btn-container mr-ii">
                <button type="button" class="ff-4 btn comments color-white">comments</button>
            </div>
          </div>
        </div>
    </li>`;
  });
};

export default render;


