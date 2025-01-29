import React, { useState } from "react";

const UpdateDependent = ({ memberID, setAddDependent }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [dataSection, setDataSection] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataSection((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed z-50 h-screen w-full flex items-center justify-center">
      <div className="w-[40%]  bg-[#035c67aa]  p-4 rounded-lg border-2 border-[#035c67] shadow">
        <div className="flex flex-row-reverse">
          <img
            onClick={() => setAddDependent(false)}
            className="w-[25px]"
            src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737997142/Evernorth/wrong.svg"
          />
        </div>

        <div className="p-4">
          <div className="text-white shadow-lg text-center text-2xl font-semibold mb-2 border-b-2 mx-12">
            Add Dependent details
          </div>

          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-[60%] h-36 border-2 border-black border-dashed rounded-lg cursor-pointer bg-[#3EFFC0] hover:bg-[#3EFFC0CC]" //dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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

          <div className="text-white px-12 mt-2 font-semibold">Name</div>
          <input
            type="text"
            name="name"
            value={dataSection.name || ""}
            onChange={handleInputChange}
            className="mx-12 w-[80%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
          />

          <div className="text-white px-12 mt-2 font-semibold">Condition-1</div>
          <input
            type="text"
            name="condition1"
            value={dataSection.condition1 || ""}
            onChange={handleInputChange}
            className="mx-12 w-[80%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
          />

          <div className="text-white px-12 mt-2 font-semibold">
            Description-1
          </div>
          <textarea
            type="text"
            name="description1"
            value={dataSection.description1 || ""}
            onChange={handleInputChange}
            className="mx-12 w-[80%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
          />

          <div className="text-white px-12 mt-2 font-semibold">Condition-2</div>
          <input
            type="text"
            name="condition2"
            value={dataSection.condition2 || ""}
            onChange={handleInputChange}
            className="mx-12 w-[80%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
          />

          <div className="text-white px-12 mt-2 font-semibold">
            Description-2
          </div>
          <textarea
            type="text"
            name="description2"
            value={dataSection.description2 || ""}
            onChange={handleInputChange}
            className="mx-12 w-[80%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
          />

          <div className="flex justify-center w-full mt-8">
            <button
              onClick={() => console.log(dataSection)}
              className="bg-[#035c67] p-2 px-4 text-white font-semibold rounded-lg hover:bg-[#035c67dd] hover:scale-110 transition duration-1000"
            >
              Update
            </button>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default UpdateDependent;
