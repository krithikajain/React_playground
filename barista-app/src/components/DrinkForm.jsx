import { useState, useEffect } from "react";
import IngredientSection from "./IngredientSection";
import drinkRecipes from "../data/drinks.json";

const categories = ["temperature", "syrup", "milk", "drink"];

function DrinkForm() {
  const [userChoices, setUserChoices] = useState({
    temperature: "",
    syrup: "",
    milk: "",
    drink: ""
  });

  const [correctRecipe, setCorrectRecipe] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0); // 👈 new state

  const generateRandomDrink = () => {
    const randomIndex = Math.floor(Math.random() * drinkRecipes.length);
    setCorrectRecipe(drinkRecipes[randomIndex]);
  };

  useEffect(() => {
    generateRandomDrink();
  }, []);

  function checkAnswers() {
    setShowFeedback(true);

    // Check if all user choices match the correct recipe
    const isCorrect = categories.every(
      (cat) => userChoices[cat] === correctRecipe[cat]
    );
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  }

  function resetQuiz() {
    setUserChoices({
      temperature: "",
      syrup: "",
      milk: "",
      drink: ""
    });
    setShowFeedback(false);
    generateRandomDrink();
  }

  return (
    <div className="drink-form">
      <div className="score-display">✅ Score: {score}</div>

      {categories.map((category) => (
        <IngredientSection
          key={category}
          category={category}
          value={userChoices[category]}
          setUserChoices={setUserChoices}
          correct={showFeedback ? correctRecipe[category] : null}
        />
      ))}

<div className="buttons">
  {!showFeedback ? (
    <button onClick={checkAnswers} className="check-btn">
      Check Answer
    </button>
  ) : (
    <button onClick={resetQuiz} className="check-btn reset-btn">
      Try Another Drink
    </button>
  )}
</div>

    </div>
  );
}

export default DrinkForm;
