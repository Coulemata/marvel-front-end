import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "react-js-loader";




const Characters = () => {
    const [data, setData] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/characters");
          // console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.response); // contrairement au error.message d'express
        }
      };
      fetchData();
    }, [searchTerm]);


    // const [currentPage, setCurrentPage] = useState(1);
    // const [charactersPerPage, setCharactersPerPage] = useState(10);

    // const indexOfLast = currentPage * charactersPerPage; 
    // const indexOfFirst= indexOfLast - charactersPerPage;
    // currentCharacters = data.slice(indexOfFirst, indexOfLast);

    // const Pagination = ({length,CharactersPerPage,handlePagination}) => {
    //     const paginationNumbers = [];
      
    //     for (let i = 1; i <= Math.ceil(length / CharactersPerPage); i++) {
    //       paginationNumbers.push(i);
    //     }
      
    //     return (
    //       <div className='pagination'>
    //         {paginationNumbers.map((pageNumber) => (
    //           <button key={pageNumber} className={currentPage === pageNumber ? 'active' : ''} onClick={() => handlePagination}>{pageNumber}</button>
    //         ))}
    //       </div>
    //     );
    //   };



    // const handlePagination = (pageNumber) => {
    //   setCurrentPage(pageNumber);
    // };

   
    return isLoading ? (
  
        <div className={"item"} >
                    <Loader type="bubble-center" bgColor="#131414" color="#131414" size={100} />
      </div>
    ) : (
        <>
        <div>
            <input  className= "search-input" type="search" placeholder="Recherches" value= {searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}}/>
       
        </div>
    
      <div className="characters-wrapper">
      {(searchTerm || searchTerm ==="")  && data.results 
        .filter((character) => {
          return character.name.toLowerCase().includes(searchTerm.toLowerCase());
         
        })
    
        .map((character, id) => {

            const extension= character.thumbnail["extension"]
            const image = character.thumbnail["path"]
            console.log(character._id)

            // console.log(extension)
            // console.log(image)
          return <div className="character-card"> 
                <img src= {image + '/standard_xlarge.'+ extension} />
                    <div className="details-card">
                        <span key={id}> {character.name} </span>   
                        <span class="material-symbols-outlined">favorite</span>
                        {/* <p key={index}> {character.description}</p> */}
                        <Link to={`/comics/${character._id}`} key= {character._id}> <button >See more</button> </Link>
                    </div>
                </div>

        })}

      </div>
      </>
    );
  }

export default Characters