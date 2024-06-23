import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Loader from "react-js-loader";

const ComicsByCharacter = () => {
  const { characterId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/comics/${characterId}`);
        // console.log(response.data)
        setData(response.data);
        setIsLoading(false);
      } catch (event) {
        alert("An error occurred");
      }
    };
    fetchData();
  }, [characterId]);

  const location = useLocation();
  // console.log(location);

  return isLoading ? (
  
    <div className={"item"} >
        <Loader type="bubble-center" bgColor="#131414" color="#131414" size={100} />
      </div>
  ) : (
    <div>
      {
    <div >
      <h1></h1>

        <div className="comics-wrapper">
          {data.comics.map((comicByCharacter) => {
            console.log(data.comics)
            const extension= comicByCharacter.thumbnail["extension"]
            const image = comicByCharacter.thumbnail["path"]
            return (
              <div   className="comic-card" key={comicByCharacter._id}>
                <div>
                  <span className= "comic-title" >{comicByCharacter.title}</span>
                  <img className= "comic-image"src={image + '.' + extension}
                     alt={comicByCharacter.title}
                  />
                  <p className= "comic-description" >{comicByCharacter.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div> }
    </div>
  );
};

export default ComicsByCharacter;