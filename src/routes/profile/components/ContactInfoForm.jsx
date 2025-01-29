import React from "react";
import { AwesomeCaptcha } from "react-awesome-captcha";
import { useState } from "react";

const ContactInfoForm = ({ initialDataSection, initialDeliveryAddress }) => {
  const [dataSection, setDataSection] = useState({
    ...initialDataSection,
    ...initialDeliveryAddress,
  });
  // const [deliveryAddress, setDeliveryAddress] = useState(
  //   initialDeliveryAddress
  // );

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
      <div className="text-white shadow-lg text-center text-2xl font-semibold mb-4 border-b-2 mx-8 ">
        Edit Contact Information
      </div>

      <div className="text-white mt-8 font-semibold flex justify-center">
        <span className="text-left w-[75%] pl-1">Email</span>
      </div>
      <div className="flex justify-center">
        <input
          type="email"
          name="email"
          value={dataSection.email}
          onChange={handleInputChange}
          className="w-[75%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
        />
      </div>

      <div className="text-white mt-4 font-semibold flex justify-center">
        <span className="text-left w-[75%] pl-1">Phone</span>
      </div>

      <div className="flex items-center justify-center ">
        <div className="w-[75%] relative flex">
          {/* <span className="relative z-20 left-8 top-1/2 transform -translate-y-1/2 text-[#035c67]">
            +
          </span> */}
          <div className="w-[25%]">
            <span className="absolute flex items-center pl-[4.5%] pt-[6px]">
              <span>+</span>
            </span>
            <input
              type="text"
              name="countryCode"
              value={dataSection.countryCode}
              onChange={handleInputChange}
              className=" w-full p-1 pr-4 text-center rounded border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
            />
          </div>
          <input
            type="text"
            name="phone"
            value={dataSection.phone}
            onChange={handleInputChange}
            className="p-1 pl-2  w-[75%]  rounded  border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
          />
        </div>
      </div>

      <div className="text-white mt-8 font-semibold flex justify-center">
        <span className="text-left w-[75%] pl-1">Address</span>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          name="address"
          value={dataSection.address}
          onChange={handleInputChange}
          className="w-[75%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
        />
      </div>

      <div className="flex justify-center ">
        <div className="w-[37.5%] ">
          <div className="text-white mt-8 font-semibold flex justify-center">
            <span className="text-left w-full pl-1">Country</span>
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              name="country"
              value={dataSection.country}
              onChange={handleInputChange}
              className="w-full p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
            />
          </div>
          <div className="text-white mt-8 font-semibold flex justify-center">
            <span className="text-left w-full pl-1">City</span>
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              name="city"
              value={dataSection.city}
              onChange={handleInputChange}
              className="w-full p-1 rounded  border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
            />
          </div>
        </div>

        <div className="w-[37.5%]">
          <div className="text-white mt-8 font-semibold flex justify-center">
            <span className="text-left w-full">State</span>
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              name="state"
              value={dataSection.state}
              onChange={handleInputChange}
              className="w-full p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
            />
          </div>

          <div className="text-white mt-8 font-semibold flex justify-center">
            <span className="text-left w-full pl-1">Postal Code</span>
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              name="postalCode"
              value={dataSection.postalCode}
              onChange={handleInputChange}
              className="w-full p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mx-12">
        <AwesomeCaptcha
          onValidate={handleCaptchaValidation}
          className={" font-medium w-full scale-[70%]"}
        />
      </div>

      <div className="flex justify-center w-full mb-4">
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

export default ContactInfoForm;
