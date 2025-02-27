import React, {Component, useState, useEffect} from "react";

const RecipeChoices = ({handleChange, label, choices, checked}) => {
    return(
        <div className="mb-3">
            <label className="form-label">{label}</label>
            {choices.map((choice, index)=>(
            <div className="form-check" key={index}>
               <input type="radio"
               className="form-check-input"
               name={label}
               value={choice}
               checked={checked===choice}
               onChange={handleChange} />
            
            <label className="form-check-label">{choice}</label>
            </div>
            ))}

        </div>
    );
};

export default RecipeChoices;