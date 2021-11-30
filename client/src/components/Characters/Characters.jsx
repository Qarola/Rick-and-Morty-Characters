import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
// eslint-disable-next-line 
import {getAllCharacters, searchCharacter} from "../../redux/actions/index.js";
import CharacterCard from "../CharacterCard/CharacterCard";
import NoResult from "../NoResult/NoResult";
import SearchBar from "../SearchBar/SearchBar";


const Characters = (props) => {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);

  const initialFilter = {
    name: '',
    status: '',
    gender: '',
  }
  // eslint-disable-next-line 
  const [filter, setFilter] = useState({initialFilter})
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [charPerPage] = useState(15);

  const indexOfLastChar = currentPage * charPerPage;
  const indexOfFirstChar = indexOfLastChar - charPerPage;
  const currentChar = allCharacters.slice(indexOfFirstChar, indexOfLastChar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 // eslint-disable-next-line 
  const [chars, setChars] = useState([]);

  useEffect(() => {
    dispatch(getAllCharacters())
  
  }, [dispatch]);

 /* useEffect(() => {
    if(props.searchedCharacter?.length > 0) {
        setChars(props.searchedCharacter)
    } else {
      setChars(allCharacters)
    }
  }, [allCharacters, props.searchedCharacter])
 
   useEffect(() => {
     return  searchCharacter("")
   }, []) */

 const filterChars = allCharacters.filter((char) => {
    return char.name.toLowerCase() //.includes(nameChar.toLowerCase());
  });
/*
  const filterEpisodes = allEpisodes.filter((epi) => {
    return epi.name.toLowerCase().includes(inputNameEpi.toLowerCase());
  });

  const filterLocations = allLocations.filter((loc) => {
    return loc.type.toLowerCase().includes(inputType.toLowerCase());
  }); */

  //optional message if there is not character with this name...
  const optionalMessage = () => {
    if (filterChars.length === 0) {
      return <NoResult filterChars={props.filterChars} />;
    }
  };

  return (
    <div>
       <SearchBar  setFilter={setFilter}/> 
       
      <div className="characters">
        <ul>
          {currentChar &&
            currentChar.map((e) => (
              <CharacterCard
                key={e.id}
                image={e.image}
                name={e.name}
                status={e.status}
                specie={e.specie}
                gender={e.gender}
                location={e.location}
              />
            ))}
        </ul>
      </div>
      <div className="optionalMessage">{optionalMessage()}</div>
      <Pagination
        className="pagination"
        charPerPage={charPerPage}
        paginate={paginate}
      />
    </div>
  );
};
export default Characters;
