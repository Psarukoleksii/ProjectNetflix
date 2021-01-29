import {AXIOS} from "./axiosConfig";


class MoviesService {
    async getAllMovies (params) {
        const { data } = await AXIOS.get('/discover/movie', {
            params
        })
        return data;
    }
    async getMovieById (movieId) {
        const { data } = await AXIOS.get(`/movie/${movieId}`);
        return data;
    }
    // async getMovies (){
    //     const { data } = await AXIOS.get('/discover/movie')
    //     return data;
    // }
}

export const moviesService = new MoviesService();
