import React from "react";
import BasicInfoForm from "./BasicInfoForm";
import ContactInfoForm from "./ContactInfoForm";
import HealthConditionsForm from "./HealthConditionsForm";
import PaymentInfoForm from "./PaymentInfoForm";

const FloatingForm = ({
  deliveryAddress,
  setIsFloatingFormOpen,
  floatingFormType,
  dataSection,
}) => {
  const form = (() => {
    switch (floatingFormType) {
      case "basicInfo":
        return <BasicInfoForm initialDataSection={dataSection} />;
      case "contactInfo":
        return (
          <ContactInfoForm
            initialDataSection={dataSection}
            initialDeliveryAddress={deliveryAddress}
          />
        );
      case "healthConditions":
        return <HealthConditionsForm initialDataSection={dataSection} />;
      case "paymentInfo":
        return <PaymentInfoForm initialDataSection={dataSection} />;
      default:
        return null;
    }
  })();

  return (
    <div className="fixed z-50 h-screen w-full flex items-center justify-center">
      <div className="w-[35%]  bg-[#035c67aa]  p-4 rounded-lg border-2 border-[#035c67] shadow">
        <div className="flex flex-row-reverse">
          <img
            onClick={() => setIsFloatingFormOpen(false)}
            className="w-[25px]"
            src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737997142/Evernorth/wrong.svg"
          />
        </div>

        {form}
      </div>
    </div>
  );
};

export default FloatingForm;

//   const BasicInfoForms = () => (
//     <div className="p-4">
//       <div className="text-white shadow-lg text-center text-2xl font-semibold mb-4 border-b-2 mx-12">
//         Edit Personal Details
//       </div>

//       <h2 className="text-center my-2 text-white font-semibold">
//         Update profile
//       </h2>
//       <div className="flex items-center justify-center w-full">
//         <label
//           htmlFor="dropzone-file"
//           className="flex flex-col items-center justify-center w-[70%] h-40 border-2 border-black border-dashed rounded-lg cursor-pointer bg-[#3EFFC0] hover:bg-[#3EFFC0CC]" //dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
//         >
//           <div className="flex flex-col items-center justify-center pt-5 pb-6">
//             <svg
//               className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 16"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//               />
//             </svg>
//             <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//               <span className="font-semibold">Click to upload</span> or drag and
//               drop
//             </p>
//             <p className="text-xs text-gray-500 dark:text-gray-400">
//               PNG, JPEG or JPG (MAX. 800x400px)
//             </p>
//           </div>
//           <input
//             type="file"
//             id="dropzone-file"
//             name="myImage"
//             accept=".png, .jpg, .jpeg"
//             className="hidden"
//             onChange={(event) => {
//               const file = event.target.files[0];
//               if (file) {
//                 const fileType = file.type;
//                 if (
//                   fileType !== "image/png" &&
//                   fileType !== "image/jpeg" &&
//                   fileType !== "image/jpg"
//                 ) {
//                   console.log(file);
//                   setAlertMessage("Please select a PNG or JPG image.");
//                   event.target.value = null;
//                 } else {
//                   setAlertMessage("");
//                 }
//               }
//             }}
//           />
//         </label>
//       </div>

//       <div className="text-white px-12 mt-8 font-semibold">First Name</div>
//       <input
//         type="text"
//         value={dataSection.firstName}
//         onChange={() => console.log("Changed")}
//         className="mx-12 w-[80%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
//       />
//       <div className="text-white px-12 mt-4 font-semibold">Last Name</div>
//       <input
//         type="text"
//         value={dataSection.lastName}
//         onChange={() => console.log("Changed")}
//         className="mx-12 w-[80%] p-1 rounded px-2 border-2 border-[#035c67] bg-gray-100 text-[#035c67]"
//       />

//       <AwesomeCaptcha
//         onValidate={handleCaptchaValidation}
//         className={"flex justify-between w-full font-medium"}
//       />

//       {alertMessage && (
//         <p className="text-red-500 text-sm mt-2">{alertMessage}</p>
//       )}
//     </div>
//   );
