import './App.css';
import { getMovieList,searchMovie } from './Api';
import { useEffect, useState } from 'react';

function App() { 
  const [movieList, setMovieList] = useState([])
  useEffect(() => {
    // const data = getMovieList().then((result) => {
    //   console.log({ result});
    // })
    // setMovieList(data) 
    // getMovieList().then((result) => {
    //   setMovieList(result)
    // })
     
  }, [])
 const search = async (searchInput) => {
  
    const data = await searchMovie(searchInput)
    if (data === undefined) {
      // console.log(data);
    } else {
      setMovieList(data);
      // console.log(data);
    }
   
  }
  const Movies = () => {
    console.log(movieList);
    if(movieList.length <= 0) {
      return ( 
        <div>
          <h1>Search Movie</h1>
        </div>
      )
    } else{
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
    }
  return (
    <div className="App">
      <header className="App-header">
      <div className="App-logo">
      <h1>Movie21</h1>
      <small>Welcome to this Website. Enjoy &#128512;</small>
      </div>
      <div className="App-input">
      <input 
      type="text" 
      placeholder='Search Movie ...' 
      className="movie-search"
      onChange={({target}) => search(target.value)}  
      />
      </div>
      </header>
      <div className="movie-container">
      <Movies />
      </div>
    </div>
  );
}

export default App;
