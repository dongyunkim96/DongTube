import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const options = {
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        hl: "en",
        gl: "US",
    },
};

export const fetchDataFromApi = async (url, additionalParams = {}) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
        ...options,
        params: {...options.params, ...additionalParams },
    });
    return data;
};