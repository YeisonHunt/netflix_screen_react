/* eslint-disable import/no-anonymous-default-export */
const API_KEY = '8e60f94b677afa43e06a0e7369e0d657';
const API_BASE = 'https://api.themoviedb.org/3';

/* 

Request ->

- Originals from netflix
- recommended (trending)
- (top rated)
- actor
- comedia
- terror
- romance
- documentaries
*/

const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}



export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originals from Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=en&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomended for you',
                items: await basicFetch(`/trending/all/week?language=en&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Top rated',
                items: await basicFetch(`/movie/top_rated?language=en&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Actor',
                items: await basicFetch(`/discover/movie?with_genres=28&language=en&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&language=en&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=en&api_key=${API_KEY}`)
            },
            {
                slug: 'Romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=en&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentaries',
                items: await basicFetch(`/discover/movie?with_genres=99&language=en&api_key=${API_KEY}`)
            },
        ];
    },
    
    getMovieInfo: async (moveid, type) => {
        let info = {}

        if(moveid){
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${moveid}?language=en&api_key=${API_KEY}`);
                    break;

                case 'tv':
                    info = await basicFetch(`/tv/${moveid}?language=en&api_key=${API_KEY}`);
                    break;

                default:
                    info = null;
                    break;
            }
        }

        return info;
    }
}

