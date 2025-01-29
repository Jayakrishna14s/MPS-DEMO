import React from "react";
import { useState } from "react";

const Filter = () => {
  const [price, setPrice] = useState(500);
  const [rating, setRating] = useState(0);

  const handleSliderChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSliderChangeRating = (event) => {
    setRating(event.target.value);
  };

  return (
    <div className="w-[18%] h-full bg-[#035c67] p-4 border-1 border-[#aaa] shadow-lg text-white">
      <h1 className="font-semibold text-3xl m-2">Filters</h1>
      <h2 className="m-2 mb-0 font-semibold underline">Drug Type</h2>
      <ul className="m-2 mb-4">
        <li>
          <input type="checkbox" id="generic" name="drugType" value="generic" />{" "}
          <label htmlFor="generic">Generic</label>
        </li>
        <li>
          <input type="checkbox" id="branded" name="drugType" value="branded" />{" "}
          <label htmlFor="branded">Branded</label>
        </li>
      </ul>

      <h2 className="m-2 mb-0 font-semibold underline">Age</h2>
      <ul className="m-2 mb-4">
        <li>
          <input type="checkbox" id="child" name="Age" value="child" />{" "}
          <label htmlFor="child">Child</label>
        </li>
        <li>
          <input type="checkbox" id="adult" name="Age" value="adult" />{" "}
          <label htmlFor="adult">Adult</label>
        </li>
        <li>
          <input type="checkbox" id="elder" name="Age" value="elder" />{" "}
          <label htmlFor="elder">Elder</label>
        </li>
      </ul>

      <h2 className="m-2 mb-0 font-semibold underline">Select Max Price:</h2>
      <input
        type="range"
        id="priceRange"
        name="priceRange"
        min="0"
        max="1000"
        step="10"
        value={price}
        onChange={handleSliderChangePrice}
        className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer m-2"
      />
      <span className="mt-2">${price}</span>

      <h2 className="m-2 mb-0 font-semibold underline">Rating</h2>
      <input
        id="rating-slider"
        type="range"
        min="0"
        max="5"
        step="0.5"
        value={rating}
        onChange={handleSliderChangeRating}
        className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer m-2"
      />
      <span className="mt-2">{rating} ⭐</span>

      <h2 className="m-2 mb-0 font-semibold underline">Dosage Form</h2>
      <ul className="m-2 mb-4">
        <li>
          <input
            type="checkbox"
            id="tablets"
            name="dosageForm"
            value="tablets"
          />{" "}
          <label htmlFor="tablets">Tablets</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="capsules"
            name="dosageForm"
            value="capsules"
          />{" "}
          <label htmlFor="capsules">Capsules</label>
        </li>
        <li>
          <input type="checkbox" id="syrups" name="dosageForm" value="syrups" />{" "}
          <label htmlFor="syrups">Syrups</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="powders"
            name="dosageForm"
            value="powders"
          />{" "}
          <label htmlFor="powders">Powders</label>
        </li>
        <li>
          <input type="checkbox" id="creams" name="dosageForm" value="creams" />{" "}
          <label htmlFor="creams">Creams</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="injectables"
            name="dosageForm"
            value="injectables"
          />{" "}
          <label htmlFor="injectables">Injectables</label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
