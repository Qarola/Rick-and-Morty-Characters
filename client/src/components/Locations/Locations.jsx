import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import LocationCard from './LocationCard';
import FilterByType from './FilterByType';
import { getAllLocations, getLocationByType } from '../../redux/actions/index';

const Locations = (props) => {
    const dispatch = useDispatch();
    const allLocations = useSelector((state) => state.allLocations);
    const searchedLoc = useSelector((state) => state.searchedLocation);

    const [locations, setLocations] = useState([]);
    const [page, setPage] = useState(1); //it starts in the page 1...



    useEffect(() => {
        dispatch(getAllLocations())
    }, [dispatch])

    useEffect(() => {
        if (props.location.search !== "") {
          setPage(
            parseInt(props.location.search.slice(props.location.search.indexOf("=") + 1))
          );
        }
      }, [props.location.search]);
    
      useEffect(() => {
        if (searchedLoc.length > 0) {
          setLocations(searchedLoc);
        } else {
          setLocations(allLocations);
        }
      }, [allLocations, searchedLoc]);
    
      useEffect(() => {
        return getLocationByType("");
      }, []);
     
    return (
        <div className="grid-card">
        <FilterByType />
       <div className="chars-list">
       {searchedLoc && searchedLoc.length > 0 ? (
                    searchedLoc.map((e) => ( 
                        <li key={e.id+e.name} className='locations'>
                        <LocationCard 
                        key={Math.floor(Math.random() * 10000)}
                        name={e.name}
                        type={e.type}
                        dimension={e.dimension}
                        residents={e.residents}
                        />
                        </li>
                    ))
          ) : (
            <div className="locations">
              <li className="locations">
              {locations?.slice((page - 1) * 9, page * 9).map((e) => (
                    <li key={e.id+e.name} className='locations'>
                        <LocationCard 
                        key={Math.floor(Math.random() * 10000)}
                        name={e.name}
                        type={e.type}
                        dimension={e.dimension}
                        residents={e.residents}
                        />
                        </li>
                ))}
            </li>
          </div>
        )} 
      </div>
        <Pagination className="pagtn" allCharacters={locations} page={page} />
      </div>
    )
}
export default Locations;
