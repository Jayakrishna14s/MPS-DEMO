import { useState } from "react";
import React from "react";

const Medicines = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    // Add search functionality here
  };

  const medicineCards = [
    {
      id: 1,
      title: "Lipitor",
      description:
        "A drug used to lower the amount of cholesterol in the blood",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      homeDelivery: true,
      location: "Shamshabad",
      price: "12.5",
      strength: "10mg",
      dosage: "Tablets",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Aspirin",
      description: "A pain reliever and anti-inflammatory drug",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      homeDelivery: false,
      location: "Banjara Hills",
      price: "5.0",
      strength: "500mg",
      dosage: "Tablets",
      rating: 4.0,
    },
    {
      id: 3,
      title: "Metformin",
      description: "Used to control high blood sugar in type 2 diabetes",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      homeDelivery: true,
      location: "Hyderabad",
      price: "8.0",
      strength: "500mg",
      dosage: "Tablets",
      rating: 4.8,
    },
    {
      id: 4,
      title: "Ibuprofen",
      description: "A drug used to reduce fever and treat pain or inflammation",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      homeDelivery: false,
      location: "Secunderabad",
      price: "7.5",
      strength: "200mg",
      dosage: "Tablets",
      rating: 4.3,
    },
    {
      id: 5,
      title: "Amoxicillin",
      description: "An antibiotic used to treat bacterial infections",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      homeDelivery: true,
      location: "Ameerpet",
      price: "6.0",
      strength: "250mg",
      dosage: "Capsules",
      rating: 4.6,
    },
    {
      id: 6,
      title: "Paracetamol",
      description: "Used to treat fever and mild pain",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      homeDelivery: true,
      location: "Kukatpally",
      price: "4.0",
      strength: "500mg",
      dosage: "Tablets",
      rating: 4.7,
    },
    {
      id: 7,
      title: "Prednisolone",
      description: "A steroid used to treat inflammation",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      homeDelivery: false,
      location: "Madhapur",
      price: "9.0",
      strength: "5mg",
      dosage: "Tablets",
      rating: 4.2,
    },
    {
      id: 8,
      title: "Losartan",
      description: "Used to treat high blood pressure and protect the kidneys",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      homeDelivery: true,
      location: "Gachibowli",
      price: "15.0",
      strength: "50mg",
      dosage: "Tablets",
      rating: 4.6,
    },
    {
      id: 9,
      title: "Cetirizine",
      description: "An antihistamine used to relieve allergy symptoms",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      homeDelivery: true,
      location: "Hitech City",
      price: "3.5",
      strength: "10mg",
      dosage: "Tablets",
      rating: 4.7,
    },
    {
      id: 10,
      title: "Clonazepam",
      description: "Used to treat panic attacks and seizures",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      homeDelivery: false,
      location: "Begumpet",
      price: "20.0",
      strength: "2mg",
      dosage: "Tablets",
      rating: 4.1,
    },
    {
      id: 11,
      title: "Ciprofloxacin",
      description: "An antibiotic used to treat bacterial infections",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      homeDelivery: true,
      location: "Panjagutta",
      price: "10.0",
      strength: "500mg",
      dosage: "Tablets",
      rating: 4.4,
    },
    {
      id: 12,
      title: "Vitamin D3",
      description: "Used to treat vitamin D deficiency",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      homeDelivery: true,
      location: "LB Nagar",
      price: "5.0",
      strength: "1000IU",
      dosage: "Capsules",
      rating: 4.9,
    },
  ];

  return (
    <div className="h-full flex flex-col w-full">
      <div className="flex-none-500 p-4">
        <div className="flex items-center justify-center w-full bg-gray-100 overflow-scroll shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-white shadow-lg rounded-full p-2 w-full"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for Medicines"
              className="flex-1 outline-none px-4 py-2 text-gray-700 rounded-l-full "
            />
            <button
              type="submit"
              className="bg-[#035c67] hover:bg-[#aaa] text-white rounded-full px-4 py-2 transition duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="flex-1  overflow-scroll p-4 py-8">
        <ul className="grid grid-cols-2 gap-4">
          {medicineCards.map((medicineCard) => (
            <li
              key={medicineCard.id}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex gap-4">
                <img
                  className="w-[200px] h-[200px] rounded-lg flex-none"
                  src={medicineCard.image}
                />

                <div className="flex-1">
                  <div className=" flex justify-between mb-2">
                    <h3 className="font-bold text-xl">{medicineCard.title}</h3>
                    <h3 className="bg-[#3EFFC066] px-2 rounded-2xl">
                      {medicineCard.price}$
                    </h3>
                  </div>
                  <p className="text-gray-700">{medicineCard.description}</p>
                  <div className="my-1 flex gap-1 items-center">
                    <img
                      className="h-[18px]"
                      src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737923702/Evernorth/ratingstar.svg"
                    />
                    <span className="text-yellow-500">
                      {medicineCard.rating}
                    </span>
                  </div>
                  <h3 className="my-1">
                    <span className="font-semibold">Strength:</span>{" "}
                    <span className="font-medium">{medicineCard.strength}</span>
                  </h3>

                  <h3 className="my-1">
                    <span className="font-semibold">Dosage:</span>{" "}
                    <span className="font-medium">{medicineCard.dosage}</span>
                  </h3>
                </div>
              </div>

              <div className="flex justify-between p-2 mt-4 ">
                <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg hover:scale-105 transition duration-1000">
                  <img
                    className="w-[15px]"
                    src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737923528/Evernorth/gmaps.svg"
                  />
                  <span className="text-sm">{medicineCard.location}</span>
                </button>
                {medicineCard.homeDelivery && (
                  <div className="flex items-center gap-2 hover:scale-105 transition duration-1000 cursor-pointer">
                    <img
                      className="w-[25px]"
                      src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737924542/Evernorth/truck.svg"
                    />
                    <span className="text-sm">
                      <p> Home Delivery</p>
                    </span>
                  </div>
                )}
                {medicineCard.homeDelivery && (
                  <button className="flex items-center gap-2 bg-[#035c67] p-2 rounded-lg hover:bg-[#035c67aa] hover:scale-105 transition duration-1000">
                    <img
                      className="w-[22px]"
                      src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737924699/Evernorth/cartt.svg"
                    />
                    <span className="text-sm text-white">Add to Cart</span>
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Medicines;
