import './Movielist.css';
import { getMovieList } from './Api'
import { search } from './App'
import { useEffect, useState } from 'react';


function Movielist() {
    console.log(search());
    const [movieList, setMovieList] = useState([])
    useEffect(() => {
      // const data = getMovieList().then((result) => {
      //   console.log({ result});
      // })
      // setMovieList(data) 
      search().then((result) => {
        setMovieList(result)
        console.log(result); ;
      })
    }, [])
    const Movies = () => {
        return movieList.map((movie ,i) => {
          return (
            <div className="movie-card" key={i}>
                <img className='movie-image' src={`${movie.Poster}`} alt="movie thumbnail" />
                <div className="movie-title">{movie.Title}</div>
                <div className="movie-date">{movie.Year}</div>
            </div>
          )
        })
      }
    return (
        <div className="movie-container">
           <Movies />
        </div>
    );
}
export default Movielist;