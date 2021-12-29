import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PaginationThree from "../Pagination/PaginationThree";
import EpisodeCard from "./EpisodeCard";
import FilterByName from "./FilterByName";
import { getAllEpisodes } from "../../redux/actions";
import NoResult from "../NoResult/NoResult";

const Episodes = () => {
  const dispatch = useDispatch();
  const searchedEpi = useSelector((state) => state.searchedEpisode);
  const allEpisodes = useSelector((state) => state.allEpisodes);

  //paginated
  const [currentPage, setCurrentPage] = useState(1); //Comenzamos con página 1
  const [epiPerPage] = useState(12); //12 por página

  //get current episodes
  const indexOfLastEpisode = currentPage * epiPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - epiPerPage;
  const currentEpisodes = allEpisodes.slice(
    indexOfFirstEpisode,
    indexOfLastEpisode
  ); //12

  useEffect(() => {
    dispatch(getAllEpisodes());
  }, [dispatch]);

  //Change page
  const paginated = (pageNumer) => {
    setCurrentPage(pageNumer);
  };

  const filterEpisodes = allEpisodes.filter((ep) => {
    return ep.name.toLowerCase();
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
      <div className="chars-list">
        {searchedEpi && searchedEpi.length > 0 ? (
          searchedEpi.map((e) => (
            <li key={e.id + e.name} className="locations">
              <EpisodeCard
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
          <div className="locations">
            <li className="locations">
              {currentEpisodes?.map((e) => (   //it comes from DB...
                  <li key={e.id + e.name} className="locations">
                    <EpisodeCard
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
      <div className="optionalMessage">{optionalMessage()}</div>

      <PaginationThree
        epiPerPage={epiPerPage}
        allEpisodes={allEpisodes.length}
        paginated={paginated}
      />
    </div>
  );
};
export default Episodes;
