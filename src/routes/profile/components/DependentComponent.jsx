import React, { useState } from "react";

export const DependentComponent = ({
  dependents,
  setDeleteDependentForm,
  setDependentID,
  setUpdateDependentForm,
  setDependentData,
  setAddDependent,
}) => {
  const renderItem = (dependent, index) => {
    return (
      <>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="font-semibold">{dependent.name}</h1>
            <span className="text-xs ">@{dependent.dependentID}</span>
            <ul className="m-2 mx-0">
              {/* {dependent.healthConditions.map((condition, idx) => ( */}
              <li>
                <div className="font-medium">{dependent.condition1}</div>
                <div className="text-sm">{dependent.description1}</div>
              </li>

              <li>
                <div className="font-medium">{dependent.condition2}</div>
                <div className="text-sm">{dependent.description2}</div>
              </li>
              {/* ))} */}
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-4 flex-row-reverse">
              <img
                onClick={() => {
                  setUpdateDependentForm(true);
                  setDependentData(dependent);
                }}
                src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737904244/Evernorth/dependent-edit.svg"
                className="w-[20px]"
              />
              <img
                onClick={() => {
                  setDeleteDependentForm(true);
                  setDependentID(dependent.dependentID);
                }}
                src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737904496/Evernorth/delete.svg"
                className="w-[20px]"
              />
            </div>
            <img
              src={dependent.image}
              className="w-[150px] h-[150px] rounded"
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="border-[3px] text-center mt-8 text-[#035c67] font-semibold text-3xl bg-[#fff] shadow-lg p-2 rounded">
        Dependents
      </div>
      {dependents.map((dependent, index) => {
        return (
          <div
            key={index}
            className="border-[3px] bg-[#fff] shadow-lg text-[#035c67] rounded-md p-6 hover:scale-102"
          >
            {renderItem(dependent, index)}
          </div>
        );
      })}

      <div className="border-[0px] bg-[#fff] shadow-lg text-[#035c67] rounded-md p-6 hover:scale-102 flex flex-col justify-center items-center">
        <img
          onClick={() => setAddDependent(true)}
          src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737899776/add.svg"
          className="h-[60px] hover:scale-110 transition duration-500"
        />
        <h1>Add a dependent</h1>
      </div>

      <br />
    </>
  );
};
