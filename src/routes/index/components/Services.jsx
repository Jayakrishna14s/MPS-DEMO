import React from "react";

const Services = () => {
  return (
    <>
      <div className="flex flex-col items-center p-12 ">
        <h1 className="text-5xl font-medium p-12 w-[90%] text-center">
          Reimagining health services to make health care and people better
        </h1>
        <p className="p-4 text-xl text-center w-[65%]">
          Our capabilities work seamlessly together to create innovative
          pharmacy, care and benefit solutions for today and tomorrow. We’ve
          designed them to work together in new and expanded ways to better
          anticipate and deliver what you need.
        </p>
      </div>

      <div className="flex flex-col gap-4 p-12">
        {/* <h1 className="text-3xl font-bold text-center">Our services</h1> */}
        <div className="w-full flex gap-20 justify-around items-center px-12">
          <div className="w-[30%] flex flex-col  items-center">
            <img
              src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735584481/Evernorth/capsule.svg"
              className="w-[30%]"
            />
            <h1 className="text-xl font-bold text-[#035c67] text-center">
              Pharmacy
            </h1>
            <p className="w-[90%] text-center">
              Get specialized solutions to treat general and complex
              conditions—personalized to you and meaningful to your members.
            </p>
          </div>

          <div className="w-[30%] flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735585185/Evernorth/vbspbvbr7kubvhi1dmdr.svg"
              className="w-[30%]"
            />
            <h1 className="text-xl font-bold text-[#035c67] text-center">
              Benefits Management
            </h1>
            <p className="w-[90%] text-center">
              Save costs with personalized pharmacy and medical solutions that
              are built to work with you and for you.
            </p>
          </div>
          <div className="w-[30%] flex flex-col  items-center">
            <img
              src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735585405/Evernorth/gry5k43838qnmaavhpxl.svg"
              className="w-[30%]"
            />
            <h1 className="text-xl font-bold text-[#035c67] text-center">
              Care
            </h1>
            <p className="w-[90%] text-center">
              Elevate quality of life, employee productivity, and whole-person
              health, with accessible behavioral and clinical care.
            </p>
          </div>
        </div>
        {/* <div className="flex items-center justify-center w-[40%] bg-[url('https://res.cloudinary.com/dkezdazmt/image/upload/v1735582299/Evernorth/quadrant2.svg')] bg-cover bg-center aspect-[1/1]">
        <h1 className="text-3xl font-bold text-[#035c67]">Our Services</h1>
      </div> */}
      </div>
    </>
  );
};

export default Services;
