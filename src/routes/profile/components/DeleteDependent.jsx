import React from "react";

const DeleteDependent = ({ dependentID, setDeleteDependentForm }) => {
  return (
    <div className="fixed z-50 h-screen w-full flex items-center justify-center ">
      <div className="w-[35%]  bg-[#035c67aa]  p-4 rounded-lg border-2 border-[#035c67] shadow">
        <div className="flex flex-row-reverse">
          <img
            onClick={() => setDeleteDependentForm(false)}
            className="w-[25px]"
            src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737997142/Evernorth/wrong.svg"
          />
        </div>

        <h1 className="text-white my-4 font-semibold text-2xl p-4">
          Are you sure, you want to delete dependent?
        </h1>

        {/* onclick delete the dependent  */}
        <div className="flex pl-4 w-full mb-4">
          <button
            onClick={() => console.log(dependentID)}
            className="bg-red-500 p-2 px-4 text-white font-semibold rounded-lg hover:bg-red-200 hover:scale-110 transition duration-1000"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDependent;
