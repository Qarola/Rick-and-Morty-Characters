import React from "react";
import { useState, useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import FilteredDiet from "../FilteredDiet/FilteredDiet";
import Pagination from "../Pagination/Pagination";
import { searchRecipes, getAllDiets, getAllRecipes } from "../../redux/actions/index.js";
import { connect, useDispatch } from "react-redux";
import gourmetSpicy from "../../img/hot-pot-gourmet-spicy-banner1.jpg";
import loading from "../../img/loading-line.gif";
import "./Recipes.css";

const Recipes = ({ location, allRecipes, searchedRecipes, searchRecipes }) => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1); //it starts in the page 1...
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getAllDiets());
  }, [dispatch]);

  useEffect(() => {
    if (location.search !== "") {
      setPage(
        parseInt(location.search.slice(location.search.indexOf("=") + 1))
      );
    }
  }, [location.search]);

  useEffect(() => {
    if (searchedRecipes.length > 0) {
      setRecipes(searchedRecipes);
    } else {
      setRecipes(allRecipes);
    }
  }, [allRecipes, searchedRecipes]);

  useEffect(() => {
    return searchRecipes("");
  }, [searchRecipes]);

  function handleOrder(param) {
    switch (param) {
      case "A-Z":
        return setRecipes(
          [...allRecipes].sort((a, b) => {
            if (a.title > b.title) {
              return 1;
            }
            if (a.title < b.title) {
              return -1;
            }
            return 0;
          })
        );
      case "Z-A":
        return setRecipes(
          [...allRecipes].sort((a, b) => {
            if (b.title > a.title) {
              return 1;
            }
            if (b.title < a.title) {
              return -1;
            }
            return 0;
          })
        );
      case "bestHScore":
        return setRecipes(
          [...allRecipes].sort((a, b) => {
            return b.healthScore - a.healthScore;
          })
        );

      case "worstHScore":
        return setRecipes(
          [...allRecipes].sort((a, b) => {
            return a.healthScore - b.healthScore;
          })
        );

      default:
        return setRecipes([...allRecipes]);
    }
  }

  function handleFilter(param) {
    if (param) {
      return setRecipes(
        allRecipes.filter((r) => r.diets?.includes(param.toLowerCase()))
      );
    } else {
      return setRecipes([...allRecipes]);
    }
  }

  return (
    <div>
      <FilteredDiet filter={handleFilter} order={handleOrder} />
      <div className="grid-recp">
        {recipes.length > 0 ? (
          recipes
            .slice((page - 1) * 9, page * 9)
            .map((r) => (
              <Recipe
                className="recp-card"
                id={r.id}
                key={r.id}
                name={r.title ? r.title : r.name}
                image={r.image ? r.image : gourmetSpicy}
                healthScore={r.healthScore}
                diets={r.diets}
              />
            ))

        ) : (
          <div className="loading-image">
            <img src={loading} alt="loading-line.gif" />
          </div>
        )}
      </div>
      <Pagination className="pagtn" allRecipes={recipes} page={page} />
    </div>
  );
};

function mapStateToProps(state) {
  //to connect our component with the Redux store...
  return {
    allRecipes: state.allRecipes,
    searchedRecipes: state.searchedRecipes,
    diets: state.allDiets,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchRecipes: (data) => dispatch(searchRecipes(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
