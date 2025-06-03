import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50405301-47862986f56788818382e7919';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}