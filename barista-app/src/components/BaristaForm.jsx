import React, {Component, useState} from "react";
import './BaristaForm.css';

const BaristaForm = () => {
    const onCheckAnswer = () => {

    };
    const onNewDrink = () => {

    };
    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <form action="">

            </form>
            <button type="submit" className="button submit"
            onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button type="new-drink-button"
            className="button submit"
            onClick={onNewDrink}>
                New Drink
            </button>
        </div>
    );
};

export default BaristaForm;