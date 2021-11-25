import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe, getAllRecipes } from "../../redux/actions/index.js";
import "./NewRecipes.css";

function NewRecipe(props) {
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    summary: "",
    healthScore: 0,
    stepByStep: "",
    diets: [],
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.addRecipe(form);
    props.getAllRecipes();
    alert("Recipe Created Successfully");
  }

  const validate = (form) => {
    let errors = {};
    if (!form.name) {
      errors.name = "Name is required";
    }
    if (!form.summary) {
      errors.summary = "Summary is required";
    }
    return errors;
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className="newR">
      <form className="recipe-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="newRecipe-form">
          <label className="label-title">Name:</label>
          <input
            className="input-box"
            type="text"
            name="name"
            value={props.title ? props.title : props.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="danger">{errors.name}</p>}

          <label className="label-title">Health Score:</label>
          <input
            className="input-box"
            type="number"
            min="0"
            max="100"
            name="health score"
            value={props.healthScore}
            onChange={(e) => setForm({ ...form, healthScore: e.target.value })}
          />

          <label className="label-title">Summary:</label>
          <textarea
            className="input-box"
            name="summary"
            value={props.summary}
            onChange={handleInputChange}
          />
          {errors.summary && <p className="danger">{errors.summary}</p>}

          <label className="label-title">Step by Step:</label>
          <textarea
            name="step by step"
            value={props.stepByStep}
            onChange={(e) => setForm({ ...form, stepByStep: e.target.value })}
          />
        </div>

        <div className="diets-submit-btn">
          <label className="label-title">Diets:</label>
          {props.diets &&
            props.diets.map((d) => (
              <label className="diets-label" key={d.name + d.id}>
                <input
                  className="input-box"
                  type="checkbox"
                  name={d.name}
                  value={d.id}
                  onChange={(e) =>
                    setForm({ ...form, diets: [...form.diets, e.target.value] })
                  }
                />
                {d.name}
              </label>
            ))}
          <button className="newRecipe-submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    diets: state.allDiets,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addRecipe: (info) => dispatch(addRecipe(info)),
    getAllRecipes: () => dispatch(getAllRecipes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);
