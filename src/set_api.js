import render from "./homeRender";

// render
const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/articles';
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const commentsUrl = '/apps/Uinv3HFYXneji5y5pk1g/comments';
const likesUrl = '/apps/Uinv3HFYXneji5y5pk1g/likes';

export default getResponse = async () => {
  const get = await fetch(BASE_URL);
  const response = await get.json();
  render(response);
};

