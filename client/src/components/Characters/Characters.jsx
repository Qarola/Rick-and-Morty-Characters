import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
// eslint-disable-next-line
import { getAllCharacters } from "../../redux/actions/index.js";
import CharacterCard from "../CharacterCard/CharacterCard";
import NoResult from "../NoResult/NoResult";
//import SearchBar from "../SearchBar/SearchBar";
import InputChar from "../SearchBar/InputName";

const Characters = (props) => {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  const initialFilter = {
    name: "",
    status: "",
    gender: "",
  };
  // eslint-disable-next-line
  const [filter, setFilter] = useState({ initialFilter });
  
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [charPerPage] = useState(15);

  const indexOfLastChar = currentPage * charPerPage;
  const indexOfFirstChar = indexOfLastChar - charPerPage;
  const currentChar = allCharacters.slice(indexOfFirstChar, indexOfLastChar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterChars = allCharacters.filter((char) => {
    return char.name.toLowerCase(); //.includes(nameChar.toLowerCase());
  });

  //optional message if there is not character with this name...
  const optionalMessage = () => {
    if (filterChars.length === 0) {
      return <NoResult filterChars={props.filterChars} />;
    }
  };

 
  return (
    <div className="grid-card">
     {/*  <SearchBar setFilter={setFilter} /> */}
     <InputChar />
      <div className="characters">
        <ul>
          {currentChar &&
            currentChar.map((e) => (
              <Link key={e.id} to={`/characters/${e.id}`}>
                <CharacterCard
                  key={e.id}
                  image={e.image}
                  name={e.name}
                  status={e.status}
                  specie={e.specie}
                  gender={e.gender}
                  location={e.location}
                />
              </Link>
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
