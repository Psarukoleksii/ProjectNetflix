import axios from 'axios';

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODFiN2M4NGMwMTIyMGQ0ZGRjYjNmZDIzZWZjMzkwZiIsInN1YiI6IjYwMDk5YTg1ZGQ4M2ZhMDAzZjhkNjBiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._nLHEywstVXxpYWaUGihOTKrDWqfUnPeYsOTFzQBhPk'
    }
})
