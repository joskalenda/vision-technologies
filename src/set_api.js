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
