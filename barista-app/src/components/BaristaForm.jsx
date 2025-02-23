import React, {Component, useState} from "react";
import './BaristaForm.css';

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
      }
    const onCheckAnswer = () => {

    };
    const onNewDrink = () => {

    };
    return (
        <div>
            <h2 className="h4 mb-3">Hi, I'd like to order a:</h2>
            <form action="" className="mb-3">

            </form>
            <button type="submit" className="button submit btn btn-primary me-2"
            onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button type="new-drink-button"
            className="button submit btn btn-primary me-2"
            onClick={onNewDrink}>
                New Drink
            </button>
        </div>
    );
};

export default BaristaForm;