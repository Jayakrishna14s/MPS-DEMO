import { AwesomeCaptcha } from "react-awesome-captcha";
import { useState, useEffect } from "react";

const BasicInfoForm = ({ initialDataSection }) => {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [imagePreview, setImagePreview] = useState(null);

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
      <div className="text-white shadow-lg text-center text-2xl font-semibold mb-4 border-b-2 mx-12">
        Edit Personal Details
      </div>

      <h2 className="text-center my-2 text-white font-semibold">
        Update profile
      </h2>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-[70%] h-40 border-2 border-black border-dashed rounded-lg cursor-pointer bg-[#3EFFC0] hover:bg-[#3EFFC0CC]" //dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          {imagePreview != null && (
            <div className=" flex justify-center w-[100%] h-[100%]">
              <img
                src={imagePreview}
                alt="Uploaded file preview"
                className=" w-[100%] h-[100%] object-cover rounded-lg"
              />
            </div>
          )}
          {imagePreview == null && (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPEG or JPG (Dimensions allowed: 1/1)
              </p>
            </div>
          )}
          <input
            type="file"
            id="dropzone-file"
            name="profileImage"
            accept=".png, .jpg, .jpeg"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files[0];
              console.log(file);
              if (file) {
                const fileType = file.type;
                if (
                  fileType !== "image/png" &&
                  fileType !== "image/jpeg" &&
                  fileType !== "image/jpg"
                ) {
                  console.log(file);
                  setAlertMessage("Please select a PNG or JPG image.");
                  event.target.value = null;
                } else {
                  setAlertMessage("");
                  setImagePreview(URL.createObjectURL(file));
                }
              }
            }}
          />
        </label>
      </div>

      <div className="text-white px-12 mt-8 font-semibold">First Name</div>
      <input
        type="text"
        name="firstName"
        value={dataSection.firstName}
        onChange={handleInputChange}
        className="mx-12 w-[80%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
      />
      <div className="text-white px-12 mt-4 font-semibold">Last Name</div>
      <input
        type="text"
        name="lastName"
        value={dataSection.lastName}
        onChange={handleInputChange}
        className="mx-12 w-[80%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
      />

      <div className="w-full flex items-center justify-center  ">
        <AwesomeCaptcha
          onValidate={handleCaptchaValidation}
          className={"flex justify-between w-[80%] font-medium scale-75 "}
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

      {alertMessage != "" && (
        <p className="text-red-500 text-sm mt-2">{alertMessage}</p>
      )}
    </div>
  );
};

export default BasicInfoForm;
