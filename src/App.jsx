import React , {useState, useEffect} from "react";
//c7fcce4d
import Component0 from './assets/Components/Component0.jsx';
import SearchIcon from './assets/Components/SearchIcon.jsx';

const API_URL = "http://www.omdbapi.com/?apikey=c7fcce4d"

const App = () => {

  const [search , setSearch ] = useState('')
  const [movies , setMovies ] = useState([])

  const searchMovies = async (title) => {

    try{
      const Response = await fetch(`${API_URL}&s=${title}`)
      const data = await Response.json();
  
      if (data.Response === "True"){
        setMovies(data.Search);
      }else{

        setMovies([])
      }
    }catch(err){
      console.error("Error fetching movie",err)
    }

    
  };
  
  useEffect(() => {

    searchMovies('SpiderMan');

  }, []);

  const  handleMovieSearch = (e) => {
      setSearch(e.target.value)
    
  };

  const handleKeyPress = (e) =>{
    if(e.key === "Enter"){
    searchMovies(search);
    }
  };

  return (
    <>
      <div className="App">
          <h1>709 FILMS</h1>
              <div className="search-bar">
                  <input 
                  type="text" 
                  placeholder="Search for a movie"
                  value={search} 
                  onChange={handleMovieSearch} 
                  onKeyDown={handleKeyPress}
                  />
                  <button onClick={() => searchMovies(search)}>
                    <SearchIcon /> 
                  </button>
              </div>

              <div className="container">{movies.length > 0 ?
                                          (movies.map((movie , index) => (
                                          <Component0 key={movie.imdbID || index} movie ={movie}/>

                                          )))
                                          : (<p>No movies found </p>) }

              </div>      
      </div>
    </>
  );
}

export default App

