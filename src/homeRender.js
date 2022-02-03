const renderTech = (technologies) => {
  const ul = document.querySelector('.vission-tech');
  ul.innerHTML = '';
  technologies.slice(0, 9).forEach((tech) => {
    ul.innerHTML += `<li id="${tech.id}" class="bg-white w100 d-flex-2">
              <div class="w100 d-flex-2">
                <div class="li-images"><img class="img" src="${tech.imageUrl}"></div>
                <div class="body space-between w100 d-flex-2">
                  <h3 class="ff-4 mr-ii">${tech.title.length < 50 ? tech.title : `${tech.title.substring(0, 50)}....`}</h3>
                  <p class="des ff-4 mr-ii">${tech.summary.length < 100 ? tech.summary : `${tech.summary.substring(0, 100)}...`}</p>
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

export default renderTech;
