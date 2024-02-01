 import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDdjMzI5Nzc1NmVhMzkzYmUyMDFmZTA0MDk2ZDRiZSIsInN1YiI6IjY1Njc3ZmVkZDk1NDIwMDExYjk1ODk5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hC1Cetmpp3JdubX6us5F52enQOgd9YjpFh3TQbkeuWE";

const headers = {
    Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};