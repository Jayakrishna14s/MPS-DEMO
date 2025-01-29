import React, { useState } from "react";
import { AwesomeCaptcha } from "react-awesome-captcha";

const HealthConditionsForm = ({ initialDataSection }) => {
  const [dataSection, setDataSection] = useState(initialDataSection);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataSection((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCaptchaValidation = (isValid) => {
    setIsCaptchaValid(isValid);
  };

  return (
    <div className="p-4">
      <div className="text-white shadow-lg text-center text-2xl font-semibold mb-4 border-b-2 mx-8">
        Edit Health Conditions
      </div>

      <div className="text-white mt-8 font-semibold flex justify-center">
        <span className="text-left w-[75%] pl-1">Condition-1</span>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          name="condition1"
          value={dataSection.condition1}
          onChange={handleInputChange}
          className="w-[75%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
        />
      </div>
      <div className="text-white mt-8 font-semibold flex justify-center">
        <span className="text-left w-[75%] pl-1">Description-1</span>
      </div>
      <div className="flex justify-center">
        <textarea
          type="text"
          name="description1"
          value={dataSection.description1}
          onChange={handleInputChange}
          className="w-[75%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
        />
      </div>
      <div className="text-white mt-8 font-semibold flex justify-center">
        <span className="text-left w-[75%] pl-1">Condition-2</span>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          name="condition2"
          value={dataSection.condition2}
          onChange={handleInputChange}
          className="w-[75%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
        />
      </div>
      <div className="text-white mt-8 font-semibold flex justify-center">
        <span className="text-left w-[75%] pl-1">Description-2</span>
      </div>
      <div className="flex justify-center">
        <textarea
          type="text"
          name="description2"
          value={dataSection.description2}
          onChange={handleInputChange}
          className="w-[75%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
        />
      </div>

      <div className="flex items-center justify-center mx-12">
        <AwesomeCaptcha
          onValidate={handleCaptchaValidation}
          className={" font-medium w-full scale-[70%]"}
        />
      </div>

      <div className="flex justify-center w-full my-4">
        <button
          onClick={() => console.log(dataSection)}
          className="bg-[#035c67] p-2 px-4 text-white font-semibold rounded-lg hover:bg-[#035c67dd] hover:scale-110 transition duration-1000"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default HealthConditionsForm;
