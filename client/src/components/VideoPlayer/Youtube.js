import Axios from 'axios';

const key = "AIzaSyDVGralUHOzzd8Gfe-Q2aasH5vtKFL2-vI";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 12,
    key: key,
    type: "video",
    order: "viewCount",
  },
});