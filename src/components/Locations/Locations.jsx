import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PaginationTwo from "../Pagination/PaginationTwo";
import LocationCard from "./LocationCard";
import FilterByType from "./FilterByType";
import axios from "axios";

const Locations = () => {
  const allLocations = useSelector((state) => state.allLocations);
  const searchedLoc = useSelector((state) => state.searchedLocation);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  const [locations, setLocations] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/location"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [pages, setPages] = useState();

  useEffect(() => {
    const url = currentPageUrl;
    setLoading(true);
    const fetchData = async () => {
      axios.get(url).then((response) => {
        setLocations(response.data.results);
        setLoading(false);
        setNextPageUrl(response.data.info.next);
        setPrevPageUrl(response.data.info.prev);
        setPages(response.data.info.pages);
      });
      /* using fetch:
        const res = await fetch(url);
        const data = await res.json();
        setLocations(data.results)
        setLoading(false);
        setNextPageUrl(data.info.next);
        setPrevPageUrl(data.info.prev);
        setPages(data.info.pages) */
    };
    fetchData();
  }, [allLocations, currentPageUrl]);

  function nextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function prevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  function goToPage(num) {
    setCurrentPageUrl(`https://rickandmortyapi.com/api/location?page=${num}`);
  }

  return (
    <div className="grid-card">
      <FilterByType />
      <div className="characters">
        <li className="characters">
          {searchedLoc && searchedLoc.length > 0 ? (
            searchedLoc.map((e) => (
              <div key={e.id + e.name}>
                <LocationCard
                  className="locations"
                  key={Math.floor(Math.random() * 10000)}
                  name={e.name}
                  type={e.type}
                  dimension={e.dimension}
                  residents={e.residents}
                />
              </div>
            ))
          ) : (
            <div className="characters">
              <li className="characters">
                {locations?.map((e) => (
                  <li key={e.id + e.name} className="locations">
                    <LocationCard
                      className="locations"
                      key={Math.floor(Math.random() * 10000)}
                      name={e.name}
                      type={e.type}
                      dimension={e.dimension}
                      residents={e.residents.length}
                    />
                  </li>
                ))}
              </li>
            </div>
          )}
        </li>
      </div>
      <PaginationTwo
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
        goToPage={goToPage}
        pages={pages}
      />
    </div>
  );
};
export default Locations;
