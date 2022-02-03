import renderTech from './homeRender.js';

const getTechs = async () => {
  const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
  response.json().then((json) => {
    renderTech(json);
  });
};

export default getTechs;