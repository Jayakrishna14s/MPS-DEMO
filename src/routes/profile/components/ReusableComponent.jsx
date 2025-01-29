import React from "react";

export const ReusableComponent = ({ data, renderItem }) => {
  return (
    <div className="border-[3px] bg-[#fff] shadow-lg text-[#035c67] rounded-md p-6 hover:scale-102">
      <div>{renderItem(data)}</div>
    </div>
  );
};

{
  /* {data.map((item) => ( */
}
{
  /* ))} */
}
