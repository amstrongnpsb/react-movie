import axios from "axios";
export const getMovieList = async () =>{
    const movies = await axios.get(`${process.env.REACT_APP_BASEURL}/?apikey=${process.env.REACT_APP_APIKey}&s=transformer`)
    return movies.data.Search
}

export const searchMovie = async (searchInput) => {
    const moviesSearch = await axios.get(`${process.env.REACT_APP_BASEURL}/?apikey=${process.env.REACT_APP_APIKey}&s=${searchInput}`)
    return moviesSearch.data.Search
}