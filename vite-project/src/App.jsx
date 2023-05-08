import { useEffect } from "react";
import { useState } from "react"
import MovieAll from "./assets/Componenets/MovieAll"

function App() {
  let [searchmovie,setSearchmovie]=useState("");
  let [search,setSearch]=useState("harry")
  let [searchresults,setSearchResults]=useState([]);
  useEffect(()=>{
     fetch(`https://www.omdbapi.com/?s=${search}&apikey=ba065d87`)
     .then(res=>res.json())
     .then(data=>setSearchResults(data.Search))

  },[search])

   const handleSearch=()=>{
       setSearch(searchmovie)
   };
  return (
    <>
    <header>
        <div className='de'>
          <input type={"text"} value={searchmovie} onChange={(e)=>setSearchmovie(e.target.value)}/>
          <button  onClick={handleSearch}>Search</button>
        </div>
        <div className='wishlist'>
            <p>Wishlist</p>
            <i className="fa-solid fa-heart"></i>
            <span>0</span>
        </div>
    </header>
      <div className="container mt-4">
        <div className="row">
          {
           searchresults && searchresults.map((result)=>(
              <div key={result.imdbID} className="col-3 card mt-4 ml-2">
                <img src={result.Poster} alt="" />
                <h2>{result.Title}</h2>
              </div>
           ))
          }
        </div>
      </div>
      <MovieAll></MovieAll>
    </>
  )
}

export default App
