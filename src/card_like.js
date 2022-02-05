const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const likesUrl = '/apps/Tl04OrbFyu6fxKeYxZ5Q/likes';

export const getLikes = async () => {
  const response = await fetch(`${involvementApi}${likesUrl}`);
  const likes = await response.json();
  return likes;
};

export const postLike = async (id, number) => {
  const response = await fetch(`${involvementApi}${likesUrl}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
        likes: number,
      }),
    });

  const result = await response.text();
  return result;
};

export const likesFunction = (like) => like + 1;
