import { useState, useEffect } from "react";

const ingredientOptions = {
  temperature: ["hot", "iced", "blended"],
  syrup: ["vanilla", "caramel", "hazelnut", "mocha", "none"],
  milk: ["whole", "skim", "oat", "almond", "none"],
  drink: ["latte", "macchiato", "cold brew", "refresher"]
};

function IngredientSection({ category, value, setUserChoices, correct }) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(value); // sync if parent updates
  }, [value]);

  function handleChange(e) {
    const newValue = e.target.value;
    setSelected(newValue);

    setUserChoices((prev) => ({
      ...prev,
      [category]: newValue
    }));
  }

  return (
    <div className={`ingredient-section ${category}`}>
      <h2>{category[0].toUpperCase() + category.slice(1)}</h2>
      {ingredientOptions[category].map((option) => (
        <label
  key={option}
  className={
    correct
      ? option === correct
        ? "correct"
        : option === value
        ? "incorrect"
        : ""
      : ""
  }
>
          <input
            type="radio"
            name={category}
            value={option}
            checked={selected === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default IngredientSection;
