import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PaginationThree from "../Pagination/PaginationThree";
import EpisodeCard from "./EpisodeCard";
import FilterByName from "./FilterByName";
import { getAllEpisodes, getEpisodesByName } from "../../redux/actions";
import NoResult from "../NoResult/NoResult";

const Episodes = (props) => {
  const dispatch = useDispatch();
  const searchedEpi = useSelector((state) => state.searchedEpisode);
  const allEpisodes = useSelector((state) => state.allEpisodes);

  /*   //paginated
  const [currentPage, setCurrentPage] = useState(1); //Comenzamos con página 1
  const [epiPerPage] = useState(12); //12 por página */

  const [epi, setEpi] = useState([]);
  const [page, setPage] = useState(1); //it starts in the page 1...

  useEffect(() => {
    dispatch(getAllEpisodes());
  }, [dispatch]);

  useEffect(() => {
    if (props.location.search !== "") {
      setPage(
        parseInt(
          props.location.search.slice(props.location.search.indexOf("=") + 1)
        )
      );
    }
  }, [props.location.search]);

  useEffect(() => {
    if (searchedEpi.length > 0) {
      setEpi(searchedEpi);
    } else {
      setEpi(allEpisodes);
    }
  }, [allEpisodes, searchedEpi]);

  useEffect(() => {
    return getEpisodesByName("");
  }, []);

  const filterEpisodes = allEpisodes.filter((epi) => {
    return epi.name.toLowerCase(); //.includes(name.toLowerCase());
  });

  //optional message if there is not character with this name...
  const optionalMessage = () => {
    if (filterEpisodes.length === 0) {
      return <NoResult filterEpisodes={filterEpisodes} />;
    }
  };
  return (
    <div className="grid-card">
      <FilterByName />
      <div className="optionalMessage">{optionalMessage()}</div>
      <div className="characters">
        {searchedEpi && searchedEpi.length > 0 ? (
          searchedEpi?.slice((page - 1) * 18, page * 18).map((e) => (
            <li key={e.id + e.name} className="locations">
              <EpisodeCard
                className="locations"
                key={Math.floor(Math.random() * 10000)}
                id={e.id}
                name={e.name}
                episode={e.episode}
                airDate={e.airDate}
                charactrs={e.charactrs}
              />
            </li>
          ))
        ) : (
          <div className="charaters">
            <li className="characters">
              {epi?.slice((page - 1) * 18, page * 18).map(
                (
                  e //it comes from DB...
                ) => (
                  <li key={e.id + e.name} className="locations">
                    <EpisodeCard
                      className="locations"
                      key={Math.floor(Math.random() * 10000)}
                      id={e.id}
                      name={e.name}
                      airDate={e.airDate}
                      episode={e.episode}
                      charactrs={e.charactrs}
                    />
                  </li>
                )
              )}
            </li>
          </div>
        )}
      </div>
      <PaginationThree allEpisodes={epi} page={page} />
    </div>
  );
};
export default Episodes;
