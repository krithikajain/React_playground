import React, {Component, useState} from "react";
import './BaristaForm.css';
import RecipeChoices from "./RecipeChoices";

const BaristaForm = () => {
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
      });
      const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
      };

      const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs((prevInputs)=>({
            ...prevInputs,
            [name]: value
        }));
      };
    const onCheckAnswer = (event) => {
        event.preventDefault();
    };
    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });
    };
    return (
        <div className="barista-form-container">
            <h2 className="h4 mb-3">Hi, I'd like to order a:</h2>
            <form action="" className="mb-3">
            {Object.keys(ingredients).map((ingredient)=>(
                <RecipeChoices
                key={ingredient}
                label={ingredient}
                choices={ingredients[ingredient]}
                checked={inputs[ingredient]}
                handleChange={handleChange}
                />
            ))}
            <button type="submit" className="button submit btn btn-primary me-2"
            onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button type="new-drink-button"
            className="button submit btn btn-primary me-2"
            onClick={onNewDrink}>
                New Drink
            </button>
            </form>
        </div>
    );
};

export default BaristaForm;