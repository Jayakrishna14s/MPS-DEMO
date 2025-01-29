import React, { useState } from "react";
import { AwesomeCaptcha } from "react-awesome-captcha";

const PaymentInfoForm = ({ initialDataSection }) => {
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
        Edit Paymeent Details
      </div>

      <div className="text-white mt-8 font-semibold flex justify-center">
        <span className="text-left w-[75%] pl-1">Card Holder Name</span>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          name="cardHolderName"
          value={dataSection.cardHolderName}
          onChange={handleInputChange}
          className="w-[75%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
        />
      </div>
      <div className="text-white mt-8 font-semibold flex justify-center">
        <span className="text-left w-[75%] pl-1">Card Number</span>
      </div>
      <div className="flex justify-center">
        <input
          type="password"
          name="cardNumber"
          value={dataSection.cardNumber}
          onChange={handleInputChange}
          className="w-[75%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
        />
      </div>
      <div className="text-white mt-8 font-semibold flex justify-center">
        <span className="text-left w-[75%] pl-1">Expiration Date</span>
      </div>
      <div className="flex justify-center">
        <input
          type="date"
          name="expirationDate"
          value={dataSection.expirationDate}
          onChange={handleInputChange}
          className="w-[75%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
        />
      </div>
      <div className="text-white mt-8 font-semibold flex justify-center">
        <span className="text-left w-[75%] pl-1">CVV</span>
      </div>
      <div className="flex justify-center">
        <input
          type="password"
          name="cvv"
          value={dataSection.cvv}
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

export default PaymentInfoForm;

{
  /* <ul className="p-4"> */
}
//   {Object.entries(initialDataSection).map(([key, value]) => (
//     <li key={key}>
//       {key}: {value}
//     </li>
//   ))}
// </ul>
