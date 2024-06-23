import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-js-loader";

const Comics = () => {

        const [data, setData] = useState();
        const [isLoading, setIsLoading] = useState(true);
        const [searchComic, setSearchComic] = useState("")
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get("http://localhost:3000/comics");
              console.log(response.data);
              setData(response.data);
              setIsLoading(false);
            } catch (error) {
              console.log(error.response); // contrairement au error.message d'express
            }
          };
          fetchData();
        }, []);
      
        return isLoading ? (
          <div className={"item"} >
          <Loader type="bubble-center" bgColor="#131414" color="#131414" size={100} />
</div>
        ) : (
          <>

           <div>
            <input  className= "search-input" type="search" placeholder="Recherches" value= {searchComic} onChange={(event) => {setSearchComic(event.target.value)}}/>
          
           </div>
        

          <div className="comics-wrapper">

          {(searchComic || searchComic ==="")  && data.results 
        .filter((comic) => {
          return comic.title.toLowerCase().includes(searchComic.toLowerCase());
         
        })
        
        .map((comic, index) => {
    
                const extension= comic.thumbnail["extension"]
                const image = comic.thumbnail["path"]
    
              return <div className="comic-card"> 
                    <img src= {image + '/portrait_uncanny.' + extension} />
                     <span  className= "comic-title" key={index}> {comic.title} </span>
                    <p className= "comic-description" key={index}> {comic.description}</p>
                
                    </div>
    
            })}
    
          </div>
          </>


       );
      }
    

export default Comics