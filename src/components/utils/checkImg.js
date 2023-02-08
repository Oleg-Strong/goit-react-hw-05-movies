import defaultImg from '../../images/default/default-bg.jpg';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
export const checkImg = url =>
  `${!url ? defaultImg : `${BASE_IMAGE_URL}${url}`}`;
